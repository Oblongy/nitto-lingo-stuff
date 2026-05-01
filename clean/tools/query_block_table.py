"""
query_block_table.py — Fast lookup into pass-block tables and .json for any Lscr-* script.

Reads the pass-block .md files and the .json artifact. Never writes anything.

Usage:
    python tools/query_block_table.py <script> [options]

Examples:
    # Find all entries whose value contains "KDONE" in any block
    python tools/query_block_table.py Lscr-102 --value KDONE

    # Find entry by id in a specific block
    python tools/query_block_table.py Lscr-102 --block 14012 --id 145

    # Find all entries whose value matches a substring (case-insensitive)
    python tools/query_block_table.py Lscr-102 --value damage

    # Show all entries for a block
    python tools/query_block_table.py Lscr-102 --block 344

    # Look up a file offset — which block contains it?
    python tools/query_block_table.py Lscr-102 --offset 0x11C5

    # Show block layout summary from .json
    python tools/query_block_table.py Lscr-102 --blocks

    # Search across all scripts
    python tools/query_block_table.py --all --value KDONE
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Optional


# ---------------------------------------------------------------------------
# Workspace resolution (same logic as run_lscr_pipeline.py)
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
# Data model
# ---------------------------------------------------------------------------

@dataclass
class TableEntry:
    block_offset: int       # block's offset in the script (from filename)
    payload_offset: int
    entry_id: int
    kind: int
    length: int
    value: str
    source_file: Path


@dataclass
class BlockInfo:
    block_offset: int
    block_length: int
    file_offset: int        # block_offset + 4 (pre-marker) = file start of block data
    code_len: int
    handler_name: Optional[str]


# ---------------------------------------------------------------------------
# Parsing
# ---------------------------------------------------------------------------

# Matches: payload offset `NNN`: id `N`, kind `N`, len `N`, `value`
_ENTRY_RE = re.compile(
    r"payload offset `(\d+)`:\s*id `(\d+)`,\s*kind `(\d+)`,\s*len `(\d+)`,\s*`([^`]*)`"
)

# Matches block offset from filename: Lscr-102.pass-block14012-table.md -> 14012
_BLOCK_OFFSET_RE = re.compile(r"pass-block(\d+)-table")


def parse_pass_block_table(path: Path) -> tuple[int, list[TableEntry]]:
    """Parse a pass-block-NNN-table.md file. Returns (block_offset, entries)."""
    m = _BLOCK_OFFSET_RE.search(path.stem)
    block_offset = int(m.group(1)) if m else -1

    entries: list[TableEntry] = []
    for line in path.read_text(encoding="utf-8").splitlines():
        em = _ENTRY_RE.search(line)
        if em:
            entries.append(TableEntry(
                block_offset=block_offset,
                payload_offset=int(em.group(1)),
                entry_id=int(em.group(2)),
                kind=int(em.group(3)),
                length=int(em.group(4)),
                value=em.group(5),
                source_file=path,
            ))
    return block_offset, entries


def _collect_raw_blocks(data: dict) -> list[dict]:
    """Return raw block dicts from whichever JSON shape is present.

    Supported shapes:
      1. Top-level "blocks" array  (data-manifest.json style)
      2. literals[N].embeddedCodeBlocks  (Lscr-107 / newer export style)
    """
    if data.get("blocks"):
        return data["blocks"]
    raw: list[dict] = []
    for lit in data.get("literals", []):
        raw.extend(lit.get("embeddedCodeBlocks", []))
    return raw


def load_block_infos(json_path: Path) -> list[BlockInfo]:
    """Extract block layout from the .json artifact."""
    if not json_path.is_file():
        return []
    data = json.loads(json_path.read_text(encoding="utf-8"))
    blocks_raw = _collect_raw_blocks(data)
    literals_data_offset = data.get("literalsDataOffset", 0)

    handler_map: dict[int, str] = {}
    for h in data.get("handlers", []):
        off = h.get("dispatchBlockOffset", -1)
        name = h.get("name", "")
        if off >= 0 and name:
            handler_map[off] = name

    infos: list[BlockInfo] = []
    for b in blocks_raw:
        bo = b.get("blockOffset", b.get("offset", -1))
        bl = b.get("blockLength", b.get("length", 0))
        # codeLen: try multiple field names across export shapes
        cl = b.get("codeLength", b.get("codeLen", b.get("headerWord0", 0)))
        file_offset = literals_data_offset + bo
        infos.append(BlockInfo(
            block_offset=bo,
            block_length=bl,
            file_offset=file_offset,
            code_len=cl,
            handler_name=handler_map.get(bo),
        ))

    return infos


def load_all_entries(script_dir: Path) -> tuple[list[TableEntry], list[BlockInfo]]:
    """Load all pass-block table entries and block infos for a script."""
    root = script_dir / "root-artifacts"
    entries: list[TableEntry] = []

    if root.is_dir():
        for f in sorted(root.glob("*.pass-block*-table.md")):
            _, block_entries = parse_pass_block_table(f)
            entries.extend(block_entries)

    # Also check evidence/
    evidence = script_dir / "evidence"
    if evidence.is_dir():
        for f in sorted(evidence.rglob("*.pass-block*-table.md")):
            _, block_entries = parse_pass_block_table(f)
            entries.extend(block_entries)

    # Load block infos from .json
    json_files = list((root).glob("*.json")) if root.is_dir() else []
    # Prefer the main script JSON (e.g. Lscr-102.json, not data-manifest.json)
    script_name = script_dir.name
    main_json = root / f"{script_name}.json" if root.is_dir() else None
    block_infos: list[BlockInfo] = []
    if main_json and main_json.is_file():
        block_infos = load_block_infos(main_json)
    elif json_files:
        block_infos = load_block_infos(json_files[0])

    return entries, block_infos


# ---------------------------------------------------------------------------
# Query functions
# ---------------------------------------------------------------------------

def query_by_value(entries: list[TableEntry], pattern: str, case_sensitive: bool = False) -> list[TableEntry]:
    if case_sensitive:
        return [e for e in entries if pattern in e.value]
    p = pattern.lower()
    return [e for e in entries if p in e.value.lower()]


def query_by_id(entries: list[TableEntry], entry_id: int, block_offset: Optional[int] = None) -> list[TableEntry]:
    results = [e for e in entries if e.entry_id == entry_id]
    if block_offset is not None:
        results = [e for e in results if e.block_offset == block_offset]
    return results


def query_by_block(entries: list[TableEntry], block_offset: int) -> list[TableEntry]:
    return [e for e in entries if e.block_offset == block_offset]


def query_by_file_offset(block_infos: list[BlockInfo], file_offset: int) -> Optional[BlockInfo]:
    """Find which block contains a given file offset."""
    for b in block_infos:
        if b.file_offset <= file_offset < b.file_offset + b.block_length:
            return b
    return None


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------

def fmt_entry(e: TableEntry, show_block: bool = True) -> str:
    block_part = f"  block={e.block_offset}" if show_block else ""
    return (
        f"  payload_offset={e.payload_offset:<6}  id={e.entry_id:<4}  "
        f"kind={e.kind}  len={e.length:<4}  value={e.value!r}"
        f"{block_part}"
    )


def fmt_block(b: BlockInfo) -> str:
    handler = f"  handler={b.handler_name!r}" if b.handler_name else ""
    return (
        f"  block_offset={b.block_offset:<8}  length={b.block_length:<8}  "
        f"file_offset=0x{b.file_offset:04X}  code_len={b.code_len}"
        f"{handler}"
    )


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Query pass-block tables and .json for any Lscr-* script.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    p.add_argument("script", nargs="?", help="Script name or path (e.g. Lscr-102). Omit with --all.")
    p.add_argument("--all", action="store_true", help="Search across all Lscr-* scripts.")
    p.add_argument("--value", help="Substring to match against entry values (case-insensitive).")
    p.add_argument("--id", type=int, dest="entry_id", help="Entry id to look up.")
    p.add_argument("--block", type=lambda s: int(s, 0), help="Block offset to filter by.")
    p.add_argument("--offset", type=lambda s: int(s, 0),
                   help="File offset — reports which block contains it.")
    p.add_argument("--blocks", action="store_true", help="Show block layout summary from .json.")
    p.add_argument("--case-sensitive", action="store_true", help="Case-sensitive value matching.")
    return p.parse_args()


def run_for_script(script_dir: Path, args: argparse.Namespace, workspace: Path) -> int:
    entries, block_infos = load_all_entries(script_dir)
    script_name = script_dir.name
    found = 0

    # --blocks: show block layout
    if args.blocks:
        if not block_infos:
            print(f"[{script_name}] No block info found (missing .json or no 'blocks' key).")
        else:
            print(f"[{script_name}] {len(block_infos)} blocks:")
            for b in sorted(block_infos, key=lambda x: x.block_offset):
                print(fmt_block(b))
            found += len(block_infos)
        return found

    # --offset: which block contains this file offset?
    if args.offset is not None:
        b = query_by_file_offset(block_infos, args.offset)
        if b:
            block_rel = args.offset - b.file_offset
            print(f"[{script_name}] 0x{args.offset:04X} is in block {b.block_offset}  "
                  f"(block-relative 0x{block_rel:04X})")
            print(fmt_block(b))
            found += 1
        else:
            print(f"[{script_name}] 0x{args.offset:04X} not found in any known block.")
        return found

    # Filter entries
    results = entries

    if args.block is not None:
        results = query_by_block(results, args.block)

    if args.entry_id is not None:
        results = query_by_id(results, args.entry_id,
                              block_offset=args.block)

    if args.value:
        results = query_by_value(results, args.value, args.case_sensitive)

    if not results:
        print(f"[{script_name}] No matches.")
        return 0

    # Group by block for readability
    by_block: dict[int, list[TableEntry]] = {}
    for e in results:
        by_block.setdefault(e.block_offset, []).append(e)

    for block_off in sorted(by_block):
        block_entries = by_block[block_off]
        print(f"[{script_name}] block {block_off}  ({len(block_entries)} match(es)):")
        for e in block_entries:
            print(fmt_entry(e, show_block=False))
        found += len(block_entries)

    return found


def main() -> int:
    args = parse_args()
    workspace = find_workspace_root(Path.cwd())

    if not args.script and not args.all:
        print("ERROR: provide a script name or --all", file=sys.stderr)
        return 1

    if args.all:
        script_dirs = sorted(
            d for d in workspace.glob("Lscr-*") if d.is_dir()
        )
    else:
        sd = resolve_script_dir(args.script, workspace)
        if not sd:
            print(f"ERROR: script not found: {args.script!r}", file=sys.stderr)
            return 1
        script_dirs = [sd]

    total = 0
    for sd in script_dirs:
        total += run_for_script(sd, args, workspace)

    if args.all or len(script_dirs) > 1:
        print(f"\nTotal matches: {total}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
