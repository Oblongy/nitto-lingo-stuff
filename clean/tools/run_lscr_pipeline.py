"""
run_lscr_pipeline.py — LSCR Safe Runner v2

Scans one or more Lscr-* folders, discovers artifacts, optionally promotes
original-style.js into sibling-artifacts/, and refreshes managed sections
inside each Lscr-XXX.mechanical-report.md.

Usage:
    python tools/run_lscr_pipeline.py [target] [options]

Flags:
    target              Optional script name (e.g. Lscr-102) or path.
                        Omit to scan all Lscr-* folders under the workspace root.
    --refresh-helpers   Run helper scripts when their inputs exist (v1: not yet wired).
    --write-report      Apply managed-section patches to the mechanical report.
    --promote-siblings  Copy original-style.js into the matching sibling-artifacts/ file.
    --dry-run           Print the action plan without writing anything.

Default mode: discover artifacts + compute patch plan, no writes.

Provenance contract:
    The runner emits only artifact paths, exact pass filenames, exact block
    numbers, and exact offsets already present in indexed artifacts.
    It never synthesises readable code, handler names, or symbolic interpretations.
"""

from __future__ import annotations

import argparse
import re
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional


# ---------------------------------------------------------------------------
# Marker constants
# ---------------------------------------------------------------------------

MARKER_RAW_EVIDENCE_BEGIN  = "<!-- BEGIN AUTO:RAW-EVIDENCE -->"
MARKER_RAW_EVIDENCE_END    = "<!-- END AUTO:RAW-EVIDENCE -->"
MARKER_CORROBORATION_BEGIN = "<!-- BEGIN AUTO:CORROBORATION -->"
MARKER_CORROBORATION_END   = "<!-- END AUTO:CORROBORATION -->"
MARKER_UNRESOLVED_BEGIN    = "<!-- BEGIN AUTO:UNRESOLVED-ADDENDA -->"
MARKER_UNRESOLVED_END      = "<!-- END AUTO:UNRESOLVED-ADDENDA -->"
MARKER_JS_SURFACE_BEGIN    = "<!-- BEGIN AUTO:JS-SURFACE -->"
MARKER_JS_SURFACE_END      = "<!-- END AUTO:JS-SURFACE -->"

# ---------------------------------------------------------------------------
# Sibling-artifact slot map
# Maps Lscr-NNN -> the canonical sibling JS filename for that script.
# Derived from the existing sibling-artifacts/ naming convention.
# ---------------------------------------------------------------------------
SIBLING_SLOT_MAP: dict[str, str] = {
    "Lscr-93":  "01-frame1script.js",
    "Lscr-101": "17-lingo-xtra-alt.js",
    "Lscr-102": "02-race-engine.js",
    "Lscr-103": "03-race-engine-from-c.js",
    "Lscr-104": "12-socket-client-to-server.js",
    "Lscr-105": "13-socket-server-to-client.js",
    "Lscr-106": "14-file-handler.js",
    "Lscr-107": "15-initialization-script.js",
    "Lscr-108": "17-lingo-xtra.js",
    "Lscr-109": "10-connection-script.js",
}

# ---------------------------------------------------------------------------
# Path resolution
# ---------------------------------------------------------------------------

def find_workspace_root(start: Path) -> Path:
    """Walk upward from *start* until we find a directory that contains
    at least one Lscr-* child, or return *start* if none is found."""
    candidate = start.resolve()
    for _ in range(8):
        if any(candidate.glob("Lscr-*")):
            return candidate
        parent = candidate.parent
        if parent == candidate:
            break
        candidate = parent
    return start.resolve()


def resolve_script_dirs(target: Optional[str], workspace: Path) -> list[Path]:
    """Return a sorted list of Lscr-* directories to process."""
    if target is None:
        dirs = sorted(workspace.glob("Lscr-*"))
        return [d for d in dirs if d.is_dir()]

    # Accept a bare name like "Lscr-102" or a path
    p = Path(target)
    if p.is_dir():
        return [p.resolve()]

    # Try relative to workspace
    candidate = workspace / target
    if candidate.is_dir():
        return [candidate.resolve()]

    # Try as a glob pattern fragment
    matches = sorted(workspace.glob(f"*{target}*"))
    dirs = [m for m in matches if m.is_dir() and re.match(r"Lscr-\d+", m.name)]
    if dirs:
        return dirs

    return []


# ---------------------------------------------------------------------------
# Artifact discovery
# ---------------------------------------------------------------------------

@dataclass
class ArtifactIndex:
    script_name: str          # e.g. "Lscr-102"
    root_dir: Path            # e.g. .../Lscr-102

    # Base artifacts
    json_files:          list[Path] = field(default_factory=list)
    blocks_lingo_files:  list[Path] = field(default_factory=list)
    blocks_js_files:     list[Path] = field(default_factory=list)
    annotated_disasm:    list[Path] = field(default_factory=list)
    all_block_tables:    list[Path] = field(default_factory=list)

    # Block-table pass files
    pass_block_tables:   list[Path] = field(default_factory=list)

    # Pass artifacts
    pass_reports:        list[Path] = field(default_factory=list)
    bin_only_passes:     list[Path] = field(default_factory=list)

    # Corroboration mirrors
    rebuilt_faithful:    list[Path] = field(default_factory=list)
    reconstructed_lingo: list[Path] = field(default_factory=list)
    stack_faithful_lingo:list[Path] = field(default_factory=list)

    # JS surface files (new)
    original_style_js:   Optional[Path] = None   # Lscr-NNN/original-style.js
    original_style_lingo:Optional[Path] = None   # Lscr-NNN/original-style.lingo
    sibling_js:          Optional[Path] = None   # Lscr-NNN/sibling-artifacts/NN-name.js
    rightful_js:         Optional[Path] = None   # Lscr-NNN/rightful.js (if present)

    # Rightful source (read-only reference)
    rightful_ls:         Optional[Path] = None

    # Report path
    report_path:         Optional[Path] = None

    # Missing inputs log
    missing: list[str] = field(default_factory=list)


def _rel(path: Path, base: Path) -> str:
    """Return a forward-slash relative path string for display."""
    try:
        return path.relative_to(base).as_posix()
    except ValueError:
        return path.as_posix()


def discover_artifacts(script_dir: Path, workspace: Path) -> ArtifactIndex:
    """Build an ArtifactIndex for *script_dir* by scanning filenames only.

    No semantics are inferred from missing files — the index is purely
    filename-driven as required by the spec.
    """
    name = script_dir.name  # e.g. "Lscr-102"
    idx = ArtifactIndex(script_name=name, root_dir=script_dir)

    root_artifacts = script_dir / "root-artifacts"
    evidence_dir   = script_dir / "evidence"

    # Collect all candidate files from root-artifacts and evidence
    candidate_dirs: list[Path] = []
    if root_artifacts.is_dir():
        candidate_dirs.append(root_artifacts)
    else:
        idx.missing.append(f"root-artifacts/ not found under {_rel(script_dir, workspace)}")

    if evidence_dir.is_dir():
        candidate_dirs.append(evidence_dir)

    all_files: list[Path] = []
    for d in candidate_dirs:
        all_files.extend(f for f in d.rglob("*") if f.is_file())

    for f in sorted(all_files):
        stem = f.stem
        name_lower = f.name.lower()

        # ---- base artifacts ----
        if f.suffix == ".json" and not f.name.endswith(".tsv"):
            idx.json_files.append(f)
        elif name_lower.endswith(".blocks.lingo"):
            idx.blocks_lingo_files.append(f)
        elif name_lower.endswith(".blocks.js"):
            idx.blocks_js_files.append(f)
        elif name_lower.endswith(".annotated-disasm.md"):
            idx.annotated_disasm.append(f)
        elif name_lower.endswith(".all-block-tables.tsv"):
            idx.all_block_tables.append(f)

        # ---- block-table pass files ----
        elif re.search(r"\.pass-block\d+", f.name, re.IGNORECASE):
            idx.pass_block_tables.append(f)

        # ---- bin-only pass reports (check before generic pass) ----
        elif re.search(r"\.bin-only\.pass\d+", f.name, re.IGNORECASE):
            idx.bin_only_passes.append(f)

        # ---- generic pass reports ----
        elif re.search(r"\.pass\d+", f.name, re.IGNORECASE) and f.suffix == ".md":
            idx.pass_reports.append(f)

        # ---- corroboration mirrors ----
        elif re.search(r"rebuilt-faithful", f.name, re.IGNORECASE):
            idx.rebuilt_faithful.append(f)
        elif re.search(r"reconstructed", f.name, re.IGNORECASE) and f.suffix in (".lingo", ".js"):
            idx.reconstructed_lingo.append(f)
        elif re.search(r"stack-faithful", f.name, re.IGNORECASE) and f.suffix == ".lingo":
            idx.stack_faithful_lingo.append(f)

    # Rightful source — read-only, never written
    rightful = script_dir / "rightful.ls"
    if rightful.is_file():
        idx.rightful_ls = rightful

    # JS surface files at script root
    ost_js = script_dir / "original-style.js"
    if ost_js.is_file():
        idx.original_style_js = ost_js

    ost_lingo = script_dir / "original-style.lingo"
    if ost_lingo.is_file():
        idx.original_style_lingo = ost_lingo

    rjs = script_dir / "rightful.js"
    if rjs.is_file():
        idx.rightful_js = rjs

    # Sibling artifact slot
    sibling_name = SIBLING_SLOT_MAP.get(name)
    if sibling_name:
        sibling_path = script_dir / "sibling-artifacts" / sibling_name
        if sibling_path.is_file():
            idx.sibling_js = sibling_path
        else:
            idx.missing.append(
                f"sibling slot {sibling_name!r} not found under "
                f"{_rel(script_dir / 'sibling-artifacts', workspace)}"
            )

    # Report path
    report = script_dir / f"{name}.mechanical-report.md"
    if report.is_file():
        idx.report_path = report
    else:
        idx.missing.append(f"report not found: {_rel(report, workspace)}")

    return idx


# ---------------------------------------------------------------------------
# Helper invocation (v1: gated behind --refresh-helpers)
# ---------------------------------------------------------------------------

@dataclass
class HelperResult:
    script: str
    invoked: bool
    skipped_reason: str = ""
    returncode: int = 0
    stdout: str = ""
    stderr: str = ""
    success: bool = True


def _check_helper_available(helper_path: Path) -> bool:
    return helper_path.is_file()


def run_helpers(idx: ArtifactIndex, tools_dir: Path, workspace: Path) -> list[HelperResult]:
    """Attempt to invoke helper scripts for *idx*.

    v1 policy: both helpers require explicit per-block arguments that are not
    auto-discoverable from the artifact index alone.  They are therefore
    reported as 'skipped — requires explicit invocation args' rather than
    silently omitted.  A future version can wire manifest-driven invocation.
    """
    results: list[HelperResult] = []

    for helper_name in ("build_stronger_intermediates.py", "split_block_regions.py"):
        hp = tools_dir / helper_name
        if not _check_helper_available(hp):
            results.append(HelperResult(
                script=helper_name,
                invoked=False,
                skipped_reason=f"helper not found at {_rel(hp, workspace)}",
                success=False,
            ))
            continue

        # v1: neither helper is auto-invocable without explicit per-block args
        results.append(HelperResult(
            script=helper_name,
            invoked=False,
            skipped_reason=(
                "v1: requires explicit per-block arguments; "
                "auto-invocation not yet wired"
            ),
        ))

    return results


# ---------------------------------------------------------------------------
# Sibling promotion
# ---------------------------------------------------------------------------

SIBLING_PROMOTION_HEADER = """\
// Promoted by run_lscr_pipeline.py --promote-siblings
// Source: {source_rel}
// Sibling slot: {sibling_name}
// Do not edit this file directly — edit original-style.js and re-run the pipeline.

"""


@dataclass
class PromotionResult:
    script_name: str
    source: Optional[Path]
    dest: Optional[Path]
    action: str          # "promoted", "skipped", "no-source", "no-slot", "dry-run"
    note: str = ""


def promote_sibling(
    idx: ArtifactIndex,
    workspace: Path,
    dry_run: bool,
) -> PromotionResult:
    """Copy original-style.js into the sibling-artifacts slot for this script.

    Lscr-102 is excluded: its sibling re-exports rightful.from-lingo.js which
    is a higher-quality class-based implementation — we never overwrite it.
    """
    name = idx.script_name

    # Lscr-102 exclusion: sibling already points at the full class implementation
    if name == "Lscr-102":
        return PromotionResult(
            script_name=name,
            source=idx.original_style_js,
            dest=idx.sibling_js,
            action="skipped",
            note="Lscr-102 sibling re-exports rightful.from-lingo.js — not overwritten",
        )

    if idx.original_style_js is None:
        return PromotionResult(
            script_name=name,
            source=None,
            dest=idx.sibling_js,
            action="no-source",
            note="original-style.js not found",
        )

    sibling_name = SIBLING_SLOT_MAP.get(name)
    if sibling_name is None:
        return PromotionResult(
            script_name=name,
            source=idx.original_style_js,
            dest=None,
            action="no-slot",
            note=f"no sibling slot defined for {name}",
        )

    sibling_dir = idx.root_dir / "sibling-artifacts"
    dest = sibling_dir / sibling_name

    source_rel = _rel(idx.original_style_js, workspace)
    header = SIBLING_PROMOTION_HEADER.format(
        source_rel=source_rel,
        sibling_name=sibling_name,
    )
    content = idx.original_style_js.read_text(encoding="utf-8")

    # Strip any existing promotion header (idempotent re-runs)
    if content.startswith("// Promoted by run_lscr_pipeline.py"):
        # Find end of header block (first non-comment, non-blank line)
        lines = content.splitlines(keepends=True)
        skip = 0
        for line in lines:
            if line.startswith("//") or line.strip() == "":
                skip += 1
            else:
                break
        content = "".join(lines[skip:])

    new_content = header + content

    if dry_run:
        return PromotionResult(
            script_name=name,
            source=idx.original_style_js,
            dest=dest,
            action="dry-run",
            note=f"would write {len(new_content)} bytes to {_rel(dest, workspace)}",
        )

    sibling_dir.mkdir(exist_ok=True)
    dest.write_text(new_content, encoding="utf-8")
    return PromotionResult(
        script_name=name,
        source=idx.original_style_js,
        dest=dest,
        action="promoted",
        note=f"wrote {len(new_content)} bytes",
    )


# ---------------------------------------------------------------------------
# JS surface report section
# ---------------------------------------------------------------------------

def render_js_surface_section(idx: ArtifactIndex, workspace: Path) -> str:
    """Render the AUTO:JS-SURFACE managed block content."""
    lines: list[str] = []

    def row(label: str, path: Optional[Path]) -> None:
        if path:
            lines.append(f"- **{label}**: `{_rel(path, workspace)}`")
        else:
            lines.append(f"- **{label}**: absent")

    row("original-style.lingo", idx.original_style_lingo)
    row("original-style.js", idx.original_style_js)
    row("rightful.js", idx.rightful_js)

    sibling_name = SIBLING_SLOT_MAP.get(idx.script_name)
    if sibling_name:
        row(f"sibling ({sibling_name})", idx.sibling_js)
    else:
        lines.append("- **sibling slot**: not mapped")

    return "\n".join(lines)

def _bullet_list(paths: list[Path], workspace: Path) -> list[str]:
    """Render a sorted bullet list of relative paths."""
    return [f"- `{_rel(p, workspace)}`" for p in sorted(paths)]


def render_raw_evidence_section(idx: ArtifactIndex, workspace: Path) -> str:
    """Render the AUTO:RAW-EVIDENCE managed block content."""
    lines: list[str] = []

    def section(title: str, items: list[Path]) -> None:
        if not items:
            return
        lines.append(f"### {title}")
        lines.extend(_bullet_list(items, workspace))
        lines.append("")

    section("Base artifacts", idx.json_files + idx.blocks_lingo_files +
            idx.blocks_js_files + idx.annotated_disasm + idx.all_block_tables)
    section("Block-table pass files", idx.pass_block_tables)
    section("Pass reports", idx.pass_reports)
    section("Bin-only pass reports", idx.bin_only_passes)

    return "\n".join(lines).rstrip()


def render_corroboration_section(idx: ArtifactIndex, workspace: Path) -> str:
    """Render the AUTO:CORROBORATION managed block content."""
    lines: list[str] = []

    def section(title: str, items: list[Path]) -> None:
        if not items:
            return
        lines.append(f"### {title}")
        lines.extend(_bullet_list(items, workspace))
        lines.append("")

    section("Rebuilt-faithful mirrors", idx.rebuilt_faithful)
    section("Reconstructed lingo / JS mirrors", idx.reconstructed_lingo)
    section("Stack-faithful lingo mirrors", idx.stack_faithful_lingo)

    return "\n".join(lines).rstrip()


def render_unresolved_addenda(idx: ArtifactIndex, workspace: Path) -> str:
    """Render the AUTO:UNRESOLVED-ADDENDA managed block content.

    v1: reports which artifact families are absent so unresolved regions
    remain explicit rather than silently omitted.
    """
    lines: list[str] = []

    absent: list[str] = []
    if not idx.json_files:
        absent.append("no `.json` base artifact found")
    if not idx.blocks_lingo_files and not idx.blocks_js_files:
        absent.append("no `.blocks.lingo` or `.blocks.js` artifact found")
    if not idx.pass_reports and not idx.bin_only_passes:
        absent.append("no pass report artifacts found")
    if not idx.rebuilt_faithful and not idx.reconstructed_lingo and not idx.stack_faithful_lingo:
        absent.append("no corroboration mirror artifacts found")

    if absent:
        lines.append("**Absent artifact families (unresolved regions remain open):**")
        for a in absent:
            lines.append(f"- {a}")
    else:
        lines.append("All expected artifact families are present.")

    if idx.missing:
        lines.append("")
        lines.append("**Missing inputs logged by runner:**")
        for m in idx.missing:
            lines.append(f"- {m}")

    return "\n".join(lines).rstrip()


# ---------------------------------------------------------------------------
# Managed-section patching
# ---------------------------------------------------------------------------

@dataclass
class ManagedPatch:
    """Describes one managed section replacement."""
    begin_marker: str
    end_marker:   str
    new_content:  str   # the text that goes between the markers


def _patch_or_insert(text: str, patch: ManagedPatch) -> tuple[str, str]:
    """Apply *patch* to *text*.

    If the markers already exist, replace the content between them.
    If they do not exist, append the entire managed block at the end of the
    file (v1 insertion policy: append once, maintain on later runs).

    Returns (new_text, action_description).
    """
    begin = re.escape(patch.begin_marker)
    end   = re.escape(patch.end_marker)
    pattern = re.compile(
        rf"({begin})(.*?)({end})",
        re.DOTALL,
    )

    inner = f"\n{patch.new_content}\n"

    m = pattern.search(text)
    if m:
        new_text = pattern.sub(
            lambda _: f"{patch.begin_marker}{inner}{patch.end_marker}",
            text,
            count=1,
        )
        action = f"updated existing markers {patch.begin_marker!r}"
    else:
        # Insert at end of file
        sep = "\n\n" if not text.endswith("\n\n") else ""
        new_text = text + sep + patch.begin_marker + inner + patch.end_marker + "\n"
        action = f"inserted new markers {patch.begin_marker!r} at end of file"

    return new_text, action


def compute_patches(idx: ArtifactIndex, workspace: Path) -> list[ManagedPatch]:
    return [
        ManagedPatch(
            begin_marker=MARKER_RAW_EVIDENCE_BEGIN,
            end_marker=MARKER_RAW_EVIDENCE_END,
            new_content=render_raw_evidence_section(idx, workspace),
        ),
        ManagedPatch(
            begin_marker=MARKER_CORROBORATION_BEGIN,
            end_marker=MARKER_CORROBORATION_END,
            new_content=render_corroboration_section(idx, workspace),
        ),
        ManagedPatch(
            begin_marker=MARKER_UNRESOLVED_BEGIN,
            end_marker=MARKER_UNRESOLVED_END,
            new_content=render_unresolved_addenda(idx, workspace),
        ),
        ManagedPatch(
            begin_marker=MARKER_JS_SURFACE_BEGIN,
            end_marker=MARKER_JS_SURFACE_END,
            new_content=render_js_surface_section(idx, workspace),
        ),
    ]


def apply_patches(
    report_path: Path,
    patches: list[ManagedPatch],
    dry_run: bool,
) -> list[str]:
    """Read the report, apply all patches, optionally write back.

    Returns a list of action description strings.
    """
    text = report_path.read_text(encoding="utf-8")
    actions: list[str] = []

    for patch in patches:
        text, action = _patch_or_insert(text, patch)
        actions.append(action)

    if not dry_run:
        report_path.write_text(text, encoding="utf-8")

    return actions


# ---------------------------------------------------------------------------
# Per-script pipeline
# ---------------------------------------------------------------------------

@dataclass
class ScriptResult:
    script_name: str
    script_dir: Path
    index: Optional[ArtifactIndex] = None
    helper_results: list[HelperResult] = field(default_factory=list)
    promotion: Optional[PromotionResult] = None
    patch_actions: list[str] = field(default_factory=list)
    errors: list[str] = field(default_factory=list)
    skipped: bool = False
    skipped_reason: str = ""


def run_script(
    script_dir: Path,
    workspace: Path,
    tools_dir: Path,
    refresh_helpers: bool,
    write_report: bool,
    promote_siblings: bool,
    dry_run: bool,
) -> ScriptResult:
    result = ScriptResult(script_name=script_dir.name, script_dir=script_dir)

    # 1. Artifact discovery
    idx = discover_artifacts(script_dir, workspace)
    result.index = idx

    # 2. Sibling promotion (--promote-siblings)
    if promote_siblings:
        result.promotion = promote_sibling(idx, workspace, dry_run=dry_run)

    # 3. Helper invocation (only when --refresh-helpers is set)
    if refresh_helpers:
        result.helper_results = run_helpers(idx, tools_dir, workspace)

    # 4. Report patching
    if idx.report_path is None:
        result.errors.append(
            f"report not found for {script_dir.name}; skipping report update"
        )
    else:
        patches = compute_patches(idx, workspace)
        try:
            actions = apply_patches(
                idx.report_path,
                patches,
                dry_run=(dry_run or not write_report),
            )
            result.patch_actions = actions
        except Exception as exc:  # noqa: BLE001
            result.errors.append(f"patch failed: {exc}")

    return result


# ---------------------------------------------------------------------------
# Output / summary
# ---------------------------------------------------------------------------

def _count(items: list) -> str:
    return str(len(items)) if items else "0"


def print_summary(results: list[ScriptResult], workspace: Path, dry_run: bool, write_report: bool) -> None:
    mode_tag = "[DRY-RUN] " if dry_run else ("[WRITE] " if write_report else "[READ-ONLY] ")
    print(f"\n{'='*70}")
    print(f"  LSCR Safe Runner v2  {mode_tag}")
    print(f"  Workspace: {workspace}")
    print(f"{'='*70}\n")

    for r in results:
        idx = r.index
        print(f"── {r.script_name}")

        if r.skipped:
            print(f"   SKIPPED: {r.skipped_reason}")
            continue

        if idx:
            print(f"   root-artifacts dir : {'found' if (r.script_dir / 'root-artifacts').is_dir() else 'MISSING'}")
            print(f"   report             : {_rel(idx.report_path, workspace) if idx.report_path else 'MISSING'}")
            print(f"   rightful.ls        : {'present (read-only)' if idx.rightful_ls else 'absent'}")
            print(f"   original-style.js  : {'present' if idx.original_style_js else 'absent'}")
            print(f"   original-style.lingo: {'present' if idx.original_style_lingo else 'absent'}")
            print(f"   rightful.js        : {'present' if idx.rightful_js else 'absent'}")
            sibling_name = SIBLING_SLOT_MAP.get(r.script_name, "(no slot)")
            print(f"   sibling ({sibling_name:<30}): {'present' if idx.sibling_js else 'absent'}")
            print(f"   json files         : {_count(idx.json_files)}")
            print(f"   blocks.lingo       : {_count(idx.blocks_lingo_files)}")
            print(f"   blocks.js          : {_count(idx.blocks_js_files)}")
            print(f"   annotated-disasm   : {_count(idx.annotated_disasm)}")
            print(f"   all-block-tables   : {_count(idx.all_block_tables)}")
            print(f"   pass-block tables  : {_count(idx.pass_block_tables)}")
            print(f"   pass reports       : {_count(idx.pass_reports)}")
            print(f"   bin-only passes    : {_count(idx.bin_only_passes)}")
            print(f"   rebuilt-faithful   : {_count(idx.rebuilt_faithful)}")
            print(f"   reconstructed      : {_count(idx.reconstructed_lingo)}")
            print(f"   stack-faithful     : {_count(idx.stack_faithful_lingo)}")

        if idx and idx.missing:
            for m in idx.missing:
                print(f"   MISSING INPUT: {m}")

        if r.promotion:
            p = r.promotion
            print(f"   sibling promotion  : {p.action} — {p.note}")

        if r.helper_results:
            print(f"   helpers:")
            for hr in r.helper_results:
                status = "ran" if hr.invoked else f"skipped ({hr.skipped_reason})"
                print(f"     {hr.script}: {status}")
                if hr.invoked and not hr.success:
                    print(f"       stderr: {hr.stderr[:200]}")

        if r.patch_actions:
            verb = "would apply" if (dry_run or not write_report) else "applied"
            for action in r.patch_actions:
                print(f"   report patch: {verb} — {action}")

        if r.errors:
            for e in r.errors:
                print(f"   ERROR: {e}")

        print()

    total = len(results)
    errored = sum(1 for r in results if r.errors)
    promoted = sum(1 for r in results if r.promotion and r.promotion.action == "promoted")
    print(f"Done. {total} script(s) processed, {promoted} sibling(s) promoted, {errored} with errors.\n")


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="LSCR Safe Runner v1 — artifact discovery and report refresh.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    p.add_argument(
        "target",
        nargs="?",
        default=None,
        help="Script name (e.g. Lscr-102) or path. Omit to scan all Lscr-* folders.",
    )
    p.add_argument(
        "--refresh-helpers",
        action="store_true",
        help="Invoke helper scripts when their inputs exist.",
    )
    p.add_argument(
        "--write-report",
        action="store_true",
        help="Apply managed-section patches to the mechanical report.",
    )
    p.add_argument(
        "--promote-siblings",
        action="store_true",
        help="Copy original-style.js into the matching sibling-artifacts/ slot.",
    )
    p.add_argument(
        "--dry-run",
        action="store_true",
        help="Print the action plan without writing anything.",
    )
    return p.parse_args()


def main() -> int:
    args = parse_args()

    # Locate workspace root (directory containing Lscr-* folders)
    workspace = find_workspace_root(Path.cwd())
    tools_dir = workspace / "tools"

    # Resolve target script directories
    script_dirs = resolve_script_dirs(args.target, workspace)
    if not script_dirs:
        target_desc = args.target or "(all Lscr-*)"
        print(f"ERROR: no Lscr-* directories found for target {target_desc!r} under {workspace}", file=sys.stderr)
        return 1

    results: list[ScriptResult] = []
    for sd in script_dirs:
        result = run_script(
            script_dir=sd,
            workspace=workspace,
            tools_dir=tools_dir,
            refresh_helpers=args.refresh_helpers,
            write_report=args.write_report,
            promote_siblings=args.promote_siblings,
            dry_run=args.dry_run,
        )
        results.append(result)

    print_summary(results, workspace, dry_run=args.dry_run, write_report=args.write_report)

    # Exit non-zero if any script had errors
    return 1 if any(r.errors for r in results) else 0


if __name__ == "__main__":
    sys.exit(main())
