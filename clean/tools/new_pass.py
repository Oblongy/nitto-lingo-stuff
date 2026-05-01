"""
new_pass.py — Scaffold a new pass .md file for any Lscr-* script.

Writes a pre-filled stub with the standard header, auto-filled source
citations from the artifact index, and TODO placeholders. Never overwrites
an existing file unless --force is given.

Usage:
    python tools/new_pass.py <script> --pass <N> --title <slug> [options]

Examples:
    # Scaffold pass 58 for Lscr-102, focused on block 14012
    python tools/new_pass.py Lscr-102 --pass 58 --title block14012-new-region-audit --block 14012

    # Scaffold a bin-only pass
    python tools/new_pass.py Lscr-102 --pass 26 --title block19-new-audit --block 19 --bin-only

    # Scaffold without a specific block focus
    python tools/new_pass.py Lscr-93 --pass 31 --title whole-file-shape-review

    # Preview without writing
    python tools/new_pass.py Lscr-102 --pass 58 --title test-pass --dry-run
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Optional


# ---------------------------------------------------------------------------
# Workspace resolution
# ---------------------------------------------------------------------------

def find_workspace_root(start: Path) -> Path:
    candidate = start.resolve()
    for _ in range(8):
        if any(candidate.glob("Lscr-*")):
            return candidate
        parent = candidate.parent
        if parent == candidate:
            break
        candidate = parent
    return start.resolve()


def resolve_script_dir(target: str, workspace: Path) -> Optional[Path]:
    p = Path(target)
    if p.is_dir():
        return p.resolve()
    candidate = workspace / target
    if candidate.is_dir():
        return candidate.resolve()
    matches = [m for m in workspace.glob(f"*{target}*") if m.is_dir()]
    return matches[0] if matches else None


# ---------------------------------------------------------------------------
# Artifact discovery (minimal — just what we need for citations)
# ---------------------------------------------------------------------------

def find_artifacts(script_dir: Path, script_name: str) -> dict[str, list[str]]:
    """Return a dict of artifact family -> list of relative paths present on disk."""
    root = script_dir / "root-artifacts"
    found: dict[str, list[str]] = {
        "bin": [],
        "json": [],
        "blocks_js": [],
        "blocks_lingo": [],
        "annotated_disasm": [],
        "all_block_tables": [],
        "pass_block_tables": [],
    }

    if not root.is_dir():
        return found

    for f in sorted(root.iterdir()):
        n = f.name.lower()
        if n == f"{script_name.lower()}.bin":
            found["bin"].append(f.name)
        elif n == f"{script_name.lower()}.json":
            found["json"].append(f.name)
        elif n.endswith(".blocks.js"):
            found["blocks_js"].append(f.name)
        elif n.endswith(".blocks.lingo"):
            found["blocks_lingo"].append(f.name)
        elif n.endswith(".annotated-disasm.md"):
            found["annotated_disasm"].append(f.name)
        elif n.endswith(".all-block-tables.tsv"):
            found["all_block_tables"].append(f.name)
        elif ".pass-block" in n and n.endswith("-table.md"):
            found["pass_block_tables"].append(f.name)

    return found


def get_handler_name(script_dir: Path, script_name: str, block_offset: Optional[int]) -> Optional[str]:
    if block_offset is None:
        return None
    json_path = script_dir / "root-artifacts" / f"{script_name}.json"
    if not json_path.is_file():
        return None
    try:
        data = json.loads(json_path.read_text(encoding="utf-8"))
        for h in data.get("handlers", []):
            if h.get("dispatchBlockOffset") == block_offset:
                return h.get("name")
    except Exception:
        pass
    return None


def next_pass_number(script_dir: Path, script_name: str) -> int:
    """Suggest the next pass number by scanning existing pass files."""
    root = script_dir / "root-artifacts"
    if not root.is_dir():
        return 1
    import re
    max_n = 0
    for f in root.iterdir():
        m = re.search(r"\.pass(\d+)", f.name)
        if m:
            max_n = max(max_n, int(m.group(1)))
    return max_n + 1


# ---------------------------------------------------------------------------
# Template rendering
# ---------------------------------------------------------------------------

def render_stub(
    script_name: str,
    pass_num: int,
    title: str,
    block_offset: Optional[int],
    bin_only: bool,
    artifacts: dict[str, list[str]],
    handler_name: Optional[str],
) -> str:
    prefix = f"{script_name}.bin-only" if bin_only else script_name
    pass_label = f"pass{pass_num}"
    full_title = f"{title}"

    block_scope = ""
    if block_offset is not None:
        handler_part = f" (`{handler_name}`)" if handler_name else ""
        block_scope = f"- This pass documents block `{block_offset}`{handler_part}.\n"

    # Source citations — only cite what's actually on disk
    source_lines: list[str] = []
    if artifacts["bin"]:
        source_lines.append(f"- `root-artifacts/{artifacts['bin'][0]}` — raw bytes")
    if artifacts["json"]:
        source_lines.append(f"- `root-artifacts/{artifacts['json'][0]}` — block metadata")
    if artifacts["annotated_disasm"]:
        source_lines.append(f"- `root-artifacts/{artifacts['annotated_disasm'][0]}` — annotated disasm")
    if artifacts["blocks_js"]:
        source_lines.append(f"- `root-artifacts/{artifacts['blocks_js'][0]}` — corroboration only")
    if artifacts["blocks_lingo"]:
        source_lines.append(f"- `root-artifacts/{artifacts['blocks_lingo'][0]}` — corroboration only")
    if block_offset is not None:
        block_table = f"{script_name}.pass-block{block_offset}-table.md"
        if block_table in artifacts["pass_block_tables"]:
            source_lines.append(f"- `root-artifacts/{block_table}` — block table")
    if not source_lines:
        source_lines.append("- <!-- TODO: add source citations -->")

    sources_text = "\n".join(source_lines)

    lines = [
        f"# {script_name} Pass {pass_num}: {full_title.replace('-', ' ').title()}",
        "",
        "## Purpose",
        "",
        "<!-- TODO: describe what this pass is for -->",
        "",
        "## Scope",
        "",
        block_scope + "- No opcode semantics are inferred by this pass.",
        "",
        "## Sources",
        "",
        sources_text,
        "",
        "## Source class",
        "",
        "- Raw bytes: `root-artifacts/" + (artifacts["bin"][0] if artifacts["bin"] else f"{script_name}.bin") + "`",
        "- Corroboration only: existing pass-block tables and readable deliverables",
        "",
    ]

    if block_offset is not None:
        lines += [
            "## Raw header evidence",
            "",
            "<!-- TODO: paste from pass-block table or hexwindow.py output -->",
            "",
            "## Region of interest",
            "",
            "<!-- TODO: paste hex window from hexwindow.py -->",
            "```text",
            "<!-- python tools/hexwindow.py " + script_name + " --block " + str(block_offset) + " --region code -->",
            "```",
            "",
        ]
    else:
        lines += [
            "## Evidence",
            "",
            "<!-- TODO: paste relevant artifact excerpts -->",
            "",
        ]

    lines += [
        "## What this artifact proves",
        "",
        "<!-- TODO -->",
        "",
        "## What remains unresolved",
        "",
        "<!-- TODO: list any bytes or regions that remain byte-backed but uninterpreted -->",
        "- No handler or body semantics are inferred here.",
        "",
    ]

    return "\n".join(lines)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Scaffold a new pass .md file for any Lscr-* script.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    p.add_argument("script", help="Script name or path (e.g. Lscr-102).")
    p.add_argument("--pass", dest="pass_num", type=int,
                   help="Pass number. Omit to auto-detect next available.")
    p.add_argument("--title", required=True,
                   help="Pass title slug (e.g. block14012-new-region-audit).")
    p.add_argument("--block", type=lambda s: int(s, 0),
                   help="Block offset this pass focuses on (optional).")
    p.add_argument("--bin-only", action="store_true",
                   help="Prefix the filename with .bin-only.")
    p.add_argument("--dry-run", action="store_true",
                   help="Print the stub without writing.")
    p.add_argument("--force", action="store_true",
                   help="Overwrite if the file already exists.")
    return p.parse_args()


def main() -> int:
    args = parse_args()
    workspace = find_workspace_root(Path.cwd())

    sd = resolve_script_dir(args.script, workspace)
    if not sd:
        print(f"ERROR: script not found: {args.script!r}", file=sys.stderr)
        return 1

    script_name = sd.name
    root = sd / "root-artifacts"

    pass_num = args.pass_num if args.pass_num is not None else next_pass_number(sd, script_name)
    artifacts = find_artifacts(sd, script_name)
    handler_name = get_handler_name(sd, script_name, args.block)

    # Build output filename
    prefix = f"{script_name}.bin-only" if args.bin_only else script_name
    out_name = f"{prefix}.pass{pass_num}-{args.title}.md"
    out_path = root / out_name

    stub = render_stub(
        script_name=script_name,
        pass_num=pass_num,
        title=args.title,
        block_offset=args.block,
        bin_only=args.bin_only,
        artifacts=artifacts,
        handler_name=handler_name,
    )

    if args.dry_run:
        print(f"[dry-run] would write: {out_path}")
        print("─" * 60)
        print(stub)
        return 0

    if out_path.exists() and not args.force:
        print(f"ERROR: {out_path} already exists. Use --force to overwrite.", file=sys.stderr)
        return 1

    root.mkdir(parents=True, exist_ok=True)
    out_path.write_text(stub, encoding="utf-8")
    print(f"Created: {out_path}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
