"""
decode_block_payload.py — Decode the payload section of any Lscr-* block.

Replaces _decode_floats.mjs. Reads the .bin and .json, auto-locates the
payload start from block metadata, and decodes int32 / float64 / UTF-16LE
string records. Never writes anything.

Usage:
    python tools/decode_block_payload.py <script> --block <offset> [options]

Examples:
    # Decode all records in block 344 of Lscr-102
    python tools/decode_block_payload.py Lscr-102 --block 344

    # Show only string records (kind=4)
    python tools/decode_block_payload.py Lscr-102 --block 14012 --kind 4

    # Show only float records (kind=2)
    python tools/decode_block_payload.py Lscr-102 --block 344 --kind 2

    # Show only int records (kind=1 and kind=5)
    python tools/decode_block_payload.py Lscr-102 --block 344 --kind 1

    # Decode and filter by value substring
    python tools/decode_block_payload.py Lscr-102 --block 14012 --match KDONE

    # Decode all blocks in the script
    python tools/decode_block_payload.py Lscr-102 --all-blocks
"""

from __future__ import annotations

import argparse
import json
import struct
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Optional, Union


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
# Data model
# ---------------------------------------------------------------------------

@dataclass
class PayloadRecord:
    payload_offset: int     # offset relative to block_file_offset + 8 (table coordinate)
    file_offset: int        # absolute file offset of this record
    entry_id: int
    kind: int
    value: Union[int, float, str, bytes]
    raw_bytes: bytes


# ---------------------------------------------------------------------------
# Block layout from .json
# ---------------------------------------------------------------------------

@dataclass
class BlockLayout:
    block_offset: int
    block_length: int
    code_len: int
    file_offset: int        # absolute file offset of block start (literalsDataOffset + blockOffset)
    handler_name: Optional[str]

    @property
    def scan_base(self) -> int:
        """Base for payload_offset coordinates used in pass-block tables.

        Records are stored starting 8 bytes into the block data
        (skipping the 4-byte pre-marker and the first 4 bytes of the marker).
        This matches the coordinate system used in the pass-block .md tables.
        """
        return self.file_offset + 8

    @property
    def block_end(self) -> int:
        return self.file_offset + self.block_length


def _collect_raw_blocks(data: dict) -> list[dict]:
    """Return raw block dicts from whichever JSON shape is present.

    Supported shapes:
      1. Top-level "blocks" array  (data-manifest.json style)
      2. literals[N].embeddedCodeBlocks  (standard export style)
    """
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
# Payload decoding
# ---------------------------------------------------------------------------

def decode_payload(blob: bytes, layout: BlockLayout) -> list[PayloadRecord]:
    """Scan a block for payload records (kind 1/2/4/5).

    Records are scattered through the block data. We scan from
    layout.scan_base (block_file_offset + 8), which is the coordinate
    base used in pass-block tables, looking for valid (id, kind) pairs
    followed by plausible data.
    """
    records: list[PayloadRecord] = []
    scan_base = layout.scan_base
    block_end = layout.block_end

    pos = scan_base
    while pos + 8 <= block_end:
        payload_offset = pos - scan_base
        file_off = pos

        entry_id = int.from_bytes(blob[pos:pos+4], "little")
        kind     = int.from_bytes(blob[pos+4:pos+8], "little")

        if kind == 1 or kind == 5:
            # int32: 8-byte header + 4-byte value = 12 bytes total
            if pos + 12 > block_end:
                pos += 4
                continue
            value = struct.unpack_from("<i", blob, pos + 8)[0]
            raw = blob[pos+8:pos+12]
            records.append(PayloadRecord(payload_offset, file_off, entry_id, kind, value, raw))
            pos += 12

        elif kind == 2:
            # float64: 8-byte header + 8-byte double = 16 bytes total
            if pos + 16 > block_end:
                pos += 4
                continue
            value = struct.unpack_from("<d", blob, pos + 8)[0]
            raw = blob[pos+8:pos+16]
            records.append(PayloadRecord(payload_offset, file_off, entry_id, kind, value, raw))
            pos += 16

        elif kind == 4:
            # UTF-16LE string: 8-byte header + 4-byte char_count + chars*2 bytes, padded to 4
            if pos + 12 > block_end:
                pos += 4
                continue
            char_len = int.from_bytes(blob[pos+8:pos+12], "little")
            # Sanity check: reject implausible lengths
            if char_len == 0 or char_len > 512:
                pos += 4
                continue
            byte_len = char_len * 2
            if pos + 12 + byte_len > block_end:
                pos += 4
                continue
            raw = blob[pos+12:pos+12+byte_len]
            try:
                value = raw.decode("utf-16-le")
                # Reject strings with too many non-printable chars (likely false positive)
                printable = sum(1 for c in value if c.isprintable())
                if printable < len(value) * 0.7:
                    pos += 4
                    continue
            except UnicodeDecodeError:
                pos += 4
                continue
            record_size = 12 + byte_len
            # Pad total record to 4-byte boundary
            if record_size % 4 != 0:
                record_size += 4 - (record_size % 4)
            records.append(PayloadRecord(payload_offset, file_off, entry_id, kind, value, raw))
            pos += record_size

        else:
            pos += 4  # advance and keep scanning

    return records


# ---------------------------------------------------------------------------
# Formatting
# ---------------------------------------------------------------------------

_KIND_NAMES = {1: "int32", 2: "float64", 4: "string", 5: "int32(k5)"}


def fmt_record(r: PayloadRecord) -> str:
    kind_name = _KIND_NAMES.get(r.kind, f"kind={r.kind}")
    raw_hex = r.raw_bytes.hex()
    if isinstance(r.value, str):
        val_str = f'"{r.value}"'
    elif isinstance(r.value, float):
        val_str = repr(r.value)
    elif isinstance(r.value, bytes):
        val_str = f"0x{r.value.hex()}"
    else:
        val_str = str(r.value)
    return (
        f"  payload=0x{r.payload_offset:04X}  file=0x{r.file_offset:04X}  "
        f"id={r.entry_id:<4}  {kind_name:<12}  {val_str}  (raw: {raw_hex})"
    )


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(
        description="Decode the payload section of any Lscr-* block.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    p.add_argument("script", help="Script name or path (e.g. Lscr-102).")
    p.add_argument("--block", type=lambda s: int(s, 0),
                   help="Block offset to decode (e.g. 344 or 0x158).")
    p.add_argument("--all-blocks", action="store_true",
                   help="Decode all blocks in the script.")
    p.add_argument("--kind", type=int,
                   help="Filter by record kind: 1=int32, 2=float64, 4=string.")
    p.add_argument("--match", help="Filter string records by value substring (case-insensitive).")
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

    if not layouts:
        print(f"ERROR: no block layout data found in {json_path}", file=sys.stderr)
        return 1

    if args.all_blocks:
        target_layouts = sorted(layouts, key=lambda x: x.block_offset)
    elif args.block is not None:
        target_layouts = [lay for lay in layouts if lay.block_offset == args.block]
        if not target_layouts:
            available = sorted(lay.block_offset for lay in layouts)
            print(f"ERROR: block {args.block} not found. Available: {available}", file=sys.stderr)
            return 1
    else:
        print("ERROR: specify --block <offset> or --all-blocks", file=sys.stderr)
        return 1

    total = 0
    for layout in target_layouts:
        records = decode_payload(blob, layout)

        # Apply filters
        if args.kind is not None:
            if args.kind == 1:
                records = [r for r in records if r.kind in (1, 5)]
            else:
                records = [r for r in records if r.kind == args.kind]

        if args.match:
            m = args.match.lower()
            records = [r for r in records if isinstance(r.value, str) and m in r.value.lower()]

        handler_tag = f"  handler={layout.handler_name!r}" if layout.handler_name else ""
        print(f"\n[{script_name}] block {layout.block_offset}"
              f"  code_len={layout.code_len}"
              f"  scan_base=0x{layout.scan_base:04X}"
              f"{handler_tag}")
        print(f"  {len(records)} record(s):")

        for r in records:
            print(fmt_record(r))

        total += len(records)

    if args.all_blocks:
        print(f"\nTotal records: {total}")

    return 0


if __name__ == "__main__":
    sys.exit(main())
