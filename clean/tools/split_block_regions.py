from __future__ import annotations

import argparse
from pathlib import Path


def chunked_hex(blob: bytes, start: int, end: int, width: int = 16) -> list[str]:
    out: list[str] = []
    for off in range(start, end + 1, width):
        chunk = blob[off : min(end + 1, off + width)]
        out.append(f"{off:04X}: {' '.join(f'{b:02X}' for b in chunk)}")
    return out


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Split an LSCR block into code and payload-side regions.")
    p.add_argument("--bin", required=True, help="Path to .bin file")
    p.add_argument("--marker-start", required=True, type=lambda s: int(s, 0))
    p.add_argument("--marker-end", required=True, type=lambda s: int(s, 0))
    p.add_argument("--code-start", required=True, type=lambda s: int(s, 0))
    p.add_argument("--code-end", required=True, type=lambda s: int(s, 0))
    p.add_argument("--count-start", type=lambda s: int(s, 0))
    p.add_argument("--count-end", type=lambda s: int(s, 0))
    p.add_argument("--header-start", type=lambda s: int(s, 0))
    p.add_argument("--header-end", type=lambda s: int(s, 0))
    p.add_argument("--utf16-start", type=lambda s: int(s, 0))
    p.add_argument("--utf16-end", type=lambda s: int(s, 0))
    p.add_argument("--label", default="block")
    p.add_argument("--out", required=True, help="Markdown output path")
    return p.parse_args()


def main() -> None:
    args = parse_args()
    blob = Path(args.bin).read_bytes()
    lines: list[str] = [
        f"# {args.label}: Executable-versus-Payload Split",
        "",
        f"Source: `{args.bin}`",
        "",
    ]
    regions = [
        ("marker", args.marker_start, args.marker_end),
        ("code", args.code_start, args.code_end),
    ]
    optional = [
        ("payload count dword", args.count_start, args.count_end),
        ("first name-record header", args.header_start, args.header_end),
        ("first UTF-16LE bytes", args.utf16_start, args.utf16_end),
    ]
    for name, start, end in regions + [r for r in optional if r[1] is not None and r[2] is not None]:
        lines.append(f"## {name} `{start}..{end}`")
        lines.append("```text")
        lines.extend(chunked_hex(blob, start, end))
        lines.append("```")
        lines.append("")
    Path(args.out).write_text("\n".join(lines), encoding="utf-8")


if __name__ == "__main__":
    main()
