"""
hexwindow.py — Hex dump any region of an Lscr-* .bin file.

Auto-resolves block file offsets from the .json so you never have to compute
literalsDataOffset + blockOffset + header_size by hand.
Never writes anything.

Usage:
    python tools/hexwindow.py <script> [options]

Examples:
    # Dump the marker region of block 25976 in Lscr-104
    python tools/hexwindow.py Lscr-104 --block 25976 --region marker

    # Dump the code region of a block
    python tools/hexwindow.py Lscr-104 --block 25976 --region code

    # Dump an arbitrary file-offset range
    python tools/hexwindow.py Lscr-102 --range 0x7780 0x77A0

    # Dump a block-relative range (offset within the block's code section)
    python tools/hexwindow.py Lscr-102 --block 14012 --block-range 0x1135 0x1159

    # Show the full block header (pre-marker + marker)
    python tools/hexwindow.py Lscr-102 --block 344 --region header

    # List all known blocks with their file offsets
    python tools/hexwindow.py Lscr-102 --list-blocks
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
# Block layout
# ---------------------------------------------------------------------------

_PRE_MARKER = 4
_MARKER     = 16
_HEADER     = _PRE_MARKER + _MARKER  # 20


@dataclass
class BlockLayout:
    block_offset: int
    block_length: int
    code_len: int
    file_offset: int
    handler_name: Optional[str]

    @property
    def pre_marker_start(self) -> int:
        return self.file_offset

    @property
    def marker_start(self) -> int:
        return self.file_offset + _PRE_MARKER

    @property
    def code_start(self) -> int:
        return self.file_offset + _HEADER

    @property
    def code_end(self) -> int:
        return self.code_start + self.code_len - 1

    @property
    def payload_start(self) -> int:
        return self.code_start + self.code_len

    @property
    def block_end(self) -> int:
        return self.file_offset + self.block_length - 1


def _collect_raw_blocks(data: dict) -> list[dict]:
    if data.get("blocks"):
        return data["blocks"]
    raw: list[dict] = []
    for lit in data.get("literals", []):
        raw.extend(lit.get("embeddedCodeBlocks", []))
    return raw


def load_block_layouts(json_path: Path) -> list[BlockLayout]:
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

    layouts: list[BlockLayout] = []
    for b in blocks_raw:
        bo = b.get("blockOffset", b.get("offset", -1))
        bl = b.get("blockLength", b.get("length", 0))
        cl = b.get("codeLength", b.get("codeLen", b.get("headerWord0", 0)))
        file_off = literals_data_offset + bo
        layouts.append(BlockLayout(
            block_offset=bo,
            block_length=bl,
            code_len=cl,
            file_offset=file_off,
            handler_name=handler_map.get(bo),
        ))
    return layouts


# ---------------------------------------------------------------------------
# Hex dump
# ---------------------------------------------------------------------------

def hexdump(blob: bytes, start: int, end: int, width: int = 16) -> list[str]:
    """Hex dump blob[start..end] inclusive, with file offsets."""
    lines: list[str] = []
    for off in range(start, end + 1, width):
        chunk = blob[off : min(end + 1, off + width)]
        hex_part  = " ".join(f"{b:02X}" for b in chunk)
        ascii_part = "".join(chr(b) if 0x20 <= b < 0x7F else "." for b in chunk)
        lines.append(f"  {off:06X}: {hex_part:<{width*3}}  {ascii_part}")
    return lines


def print_region(blob: bytes, label: str, start: int, end: int) -> None:
    if start > end or start >= len(blob):
        print(f"  [{label}] out of range (start=0x{start:X} end=0x{end:X} blob_len=0x{len(blob):X})")
        return
    end = min(end, len(blob) - 1)
    byte_count = end - start + 1
    print(f"  [{label}]  0x{start:06X}..0x{end:06X}  ({byte_count} bytes)")
    for line in hexdump(blob, start, end):
        print(line)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Hex dump any region of an Lscr-* .bin file.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    p.add_argument("script", help="Script name or path (e.g. Lscr-102).")
    p.add_argument("--block", type=lambda s: int(s, 0),
                   help="Block offset (e.g. 25976 or 0x6578).")
    p.add_argument("--region",
                   choices=["header", "pre-marker", "marker", "code", "payload", "full"],
                   help="Named region within the block.")
    p.add_argument("--range", nargs=2, metavar=("START", "END"),
                   type=lambda s: int(s, 0),
                   help="Absolute file offset range (inclusive).")
    p.add_argument("--block-range", nargs=2, metavar=("START", "END"),
                   type=lambda s: int(s, 0),
                   help="Block-relative offset range (relative to block's code start).")
    p.add_argument("--list-blocks", action="store_true",
                   help="List all blocks with their file offsets and sizes.")
    p.add_argument("--width", type=int, default=16,
                   help="Bytes per hex dump row (default: 16).")
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

    bin_path = root / f"{script_name}.bin"
    if not bin_path.is_file():
        candidates = list(sd.rglob(f"{script_name}.bin"))
        if not candidates:
            print(f"ERROR: {script_name}.bin not found", file=sys.stderr)
            return 1
        bin_path = candidates[0]

    json_path = root / f"{script_name}.json"
    blob = bin_path.read_bytes()
    layouts = load_block_layouts(json_path)

    # --list-blocks
    if args.list_blocks:
        if not layouts:
            print(f"[{script_name}] No block layout data found.")
            return 1
        print(f"[{script_name}] {len(layouts)} blocks  (bin size=0x{len(blob):X}):")
        for lay in sorted(layouts, key=lambda x: x.block_offset):
            handler_tag = f"  {lay.handler_name!r}" if lay.handler_name else ""
            print(
                f"  block={lay.block_offset:<8}  file=0x{lay.file_offset:06X}"
                f"  len={lay.block_length:<8}  code_len={lay.code_len:<6}"
                f"  payload_start=0x{lay.payload_start:06X}{handler_tag}"
            )
        return 0

    # --range: absolute file offset dump
    if args.range:
        start, end = args.range
        print(f"[{script_name}]  absolute range 0x{start:06X}..0x{end:06X}:")
        print_region(blob, "range", start, end)
        return 0

    # Everything else needs --block
    if args.block is None:
        print("ERROR: specify --block, --range, or --list-blocks", file=sys.stderr)
        return 1

    layout = next((l for l in layouts if l.block_offset == args.block), None)
    if layout is None:
        available = sorted(l.block_offset for l in layouts)
        print(f"ERROR: block {args.block} not found. Available: {available}", file=sys.stderr)
        return 1

    handler_tag = f"  handler={layout.handler_name!r}" if layout.handler_name else ""
    print(f"[{script_name}] block {layout.block_offset}{handler_tag}")
    print(f"  file_offset=0x{layout.file_offset:06X}  block_length={layout.block_length}"
          f"  code_len={layout.code_len}")

    # --block-range: relative to code start
    if args.block_range:
        rel_start, rel_end = args.block_range
        abs_start = layout.code_start + rel_start
        abs_end   = layout.code_start + rel_end
        print(f"  block-relative 0x{rel_start:04X}..0x{rel_end:04X}"
              f"  →  file 0x{abs_start:06X}..0x{abs_end:06X}:")
        print_region(blob, "block-range", abs_start, abs_end)
        return 0

    # --region
    region = args.region or "header"

    if region == "pre-marker":
        print_region(blob, "pre-marker", layout.pre_marker_start, layout.marker_start - 1)
    elif region == "marker":
        print_region(blob, "marker", layout.marker_start, layout.code_start - 1)
    elif region == "header":
        print_region(blob, "pre-marker", layout.pre_marker_start, layout.marker_start - 1)
        print_region(blob, "marker",     layout.marker_start,     layout.code_start - 1)
    elif region == "code":
        print_region(blob, "code", layout.code_start, layout.code_end)
    elif region == "payload":
        print_region(blob, "payload", layout.payload_start, layout.block_end)
    elif region == "full":
        print_region(blob, "full", layout.file_offset, layout.block_end)

    return 0


if __name__ == "__main__":
    sys.exit(main())
