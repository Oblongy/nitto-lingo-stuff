"""
find_pattern.py — Byte-pattern search across Lscr-* .bin files.

Supports ?? wildcards. Reports every hit with its block context from the .json.
Never writes anything.

Usage:
    python tools/find_pattern.py <script> <pattern> [options]
    python tools/find_pattern.py --all <pattern> [options]

Pattern syntax:
    Hex bytes separated by spaces. Use ?? for a wildcard byte.

Examples:
    # Find a specific store-chain template in Lscr-107
    python tools/find_pattern.py Lscr-107 "3b 00 02 3d 00 ?? 36 00 ?? 51"

    # Find all op_3B sequences across every script
    python tools/find_pattern.py --all "3b 00 ??"

    # Find a specific opcode pair in Lscr-102
    python tools/find_pattern.py Lscr-102 "35 00 00 41 35"

    # Show more context bytes around each hit
    python tools/find_pattern.py Lscr-102 "3b 00 01" --context 8
"""

from __future__ import annotations

import argparse
import json
import sys
from dataclasses import dataclass
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
# Pattern parsing
# ---------------------------------------------------------------------------

def parse_pattern(pattern_str: str) -> list[Optional[int]]:
    """Parse a hex pattern string into a list of byte values or None for wildcards."""
    tokens = pattern_str.strip().split()
    result: list[Optional[int]] = []
    for tok in tokens:
        if tok == "??":
            result.append(None)
        else:
            result.append(int(tok, 16))
    return result


def pattern_matches(blob: bytes, offset: int, pattern: list[Optional[int]]) -> bool:
    if offset + len(pattern) > len(blob):
        return False
    for i, byte_val in enumerate(pattern):
        if byte_val is not None and blob[offset + i] != byte_val:
            return False
    return True


def find_all(blob: bytes, pattern: list[Optional[int]]) -> list[int]:
    """Return all file offsets where pattern matches."""
    hits: list[int] = []
    for i in range(len(blob) - len(pattern) + 1):
        if pattern_matches(blob, i, pattern):
            hits.append(i)
    return hits


# ---------------------------------------------------------------------------
# Block context from .json
# ---------------------------------------------------------------------------

@dataclass
class BlockContext:
    block_offset: int
    block_length: int
    file_offset: int
    code_len: int
    handler_name: Optional[str]


def _collect_raw_blocks(data: dict) -> list[dict]:
    if data.get("blocks"):
        return data["blocks"]
    raw: list[dict] = []
    for lit in data.get("literals", []):
        raw.extend(lit.get("embeddedCodeBlocks", []))
    return raw


def load_block_contexts(json_path: Path) -> list[BlockContext]:
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

    contexts: list[BlockContext] = []
    for b in blocks_raw:
        bo = b.get("blockOffset", b.get("offset", -1))
        bl = b.get("blockLength", b.get("length", 0))
        cl = b.get("codeLength", b.get("codeLen", b.get("headerWord0", 0)))
        file_off = literals_data_offset + bo
        contexts.append(BlockContext(
            block_offset=bo,
            block_length=bl,
            file_offset=file_off,
            code_len=cl,
            handler_name=handler_map.get(bo),
        ))
    return contexts


def find_block_for_offset(contexts: list[BlockContext], file_offset: int) -> Optional[BlockContext]:
    for ctx in contexts:
        if ctx.file_offset <= file_offset < ctx.file_offset + ctx.block_length:
            return ctx
    return None


# ---------------------------------------------------------------------------
# Output formatting
# ---------------------------------------------------------------------------

def fmt_hit(
    blob: bytes,
    file_offset: int,
    pattern_len: int,
    block_ctx: Optional[BlockContext],
    context_bytes: int,
) -> str:
    lines: list[str] = []

    # Block context line
    if block_ctx:
        block_rel = file_offset - block_ctx.file_offset
        handler_tag = f"  handler={block_ctx.handler_name!r}" if block_ctx.handler_name else ""
        lines.append(
            f"  file=0x{file_offset:04X}  block={block_ctx.block_offset}"
            f"  block-rel=0x{block_rel:04X}{handler_tag}"
        )
    else:
        lines.append(f"  file=0x{file_offset:04X}  (no block context)")

    # Byte window
    win_start = max(0, file_offset - context_bytes)
    win_end   = min(len(blob), file_offset + pattern_len + context_bytes)
    window    = blob[win_start:win_end]

    hex_parts: list[str] = []
    for i, b in enumerate(window):
        abs_off = win_start + i
        in_pattern = file_offset <= abs_off < file_offset + pattern_len
        hex_parts.append(f"[{b:02x}]" if in_pattern else f"{b:02x}")

    lines.append(f"  bytes: {' '.join(hex_parts)}")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Per-script search
# ---------------------------------------------------------------------------

def search_script(
    script_dir: Path,
    pattern: list[Optional[int]],
    context_bytes: int,
) -> int:
    script_name = script_dir.name
    root = script_dir / "root-artifacts"

    bin_path = root / f"{script_name}.bin"
    if not bin_path.is_file():
        # Try evidence/
        candidates = list(script_dir.rglob(f"{script_name}.bin"))
        if not candidates:
            print(f"[{script_name}] .bin not found — skipping.")
            return 0
        bin_path = candidates[0]

    blob = bin_path.read_bytes()

    # Load block contexts
    json_path = root / f"{script_name}.json"
    contexts = load_block_contexts(json_path)

    hits = find_all(blob, pattern)
    if not hits:
        print(f"[{script_name}] No matches.")
        return 0

    print(f"[{script_name}] {len(hits)} match(es)  (pattern length={len(pattern)}):")
    for file_offset in hits:
        ctx = find_block_for_offset(contexts, file_offset)
        print(fmt_hit(blob, file_offset, len(pattern), ctx, context_bytes))
    return len(hits)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Byte-pattern search across Lscr-* .bin files.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    p.add_argument("script", nargs="?", help="Script name or path. Omit with --all.")
    p.add_argument("pattern", help='Hex pattern, e.g. "3b 00 ?? 51". Use ?? for wildcards.')
    p.add_argument("--all", action="store_true", help="Search all Lscr-* scripts.")
    p.add_argument("--context", type=int, default=4,
                   help="Number of context bytes to show before/after each hit (default: 4).")
    return p.parse_args()


def main() -> int:
    args = parse_args()
    workspace = find_workspace_root(Path.cwd())

    try:
        pattern = parse_pattern(args.pattern)
    except ValueError as e:
        print(f"ERROR: bad pattern: {e}", file=sys.stderr)
        return 1

    if not pattern:
        print("ERROR: empty pattern", file=sys.stderr)
        return 1

    if not args.script and not args.all:
        print("ERROR: provide a script name or --all", file=sys.stderr)
        return 1

    if args.all:
        script_dirs = sorted(d for d in workspace.glob("Lscr-*") if d.is_dir())
    else:
        sd = resolve_script_dir(args.script, workspace)
        if not sd:
            print(f"ERROR: script not found: {args.script!r}", file=sys.stderr)
            return 1
        script_dirs = [sd]

    total = 0
    for sd in script_dirs:
        total += search_script(sd, pattern, args.context)

    if args.all or len(script_dirs) > 1:
        print(f"\nTotal matches: {total}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
