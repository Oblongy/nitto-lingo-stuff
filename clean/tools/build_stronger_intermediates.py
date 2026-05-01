from __future__ import annotations

import csv
import re
from pathlib import Path


ROOT = Path(r"C:\Users\Dilldo\Nitto\Lingo Stuff\clean")


def read_bytes(path: Path) -> bytes:
    return path.read_bytes()


def hexdump_window(blob: bytes, start: int, end: int) -> list[str]:
    return [f"{off:04X}: {blob[off]:02X}" for off in range(start, end)]


def chunked_hex(blob: bytes, start: int, end: int, width: int = 16) -> list[str]:
    lines: list[str] = []
    for off in range(start, end, width):
        chunk = blob[off : min(end, off + width)]
        lines.append(f"{off:04X}: {' '.join(f'{b:02X}' for b in chunk)}")
    return lines


def load_tsv_rows(path: Path) -> list[dict[str, str]]:
    with path.open("r", encoding="utf-8", newline="") as fh:
        return list(csv.DictReader(fh, delimiter="\t"))


def find_block_rows(path: Path, patterns: list[str], context: int = 5) -> list[str]:
    lines = path.read_text(encoding="utf-8").splitlines()
    hits: list[int] = []
    for idx, line in enumerate(lines):
        if any(p in line for p in patterns):
            hits.extend(range(max(0, idx - context), min(len(lines), idx + context + 1)))
    ordered = sorted(set(hits))
    return [lines[i] for i in ordered]


def write_text(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding="utf-8")


def build_lscr93() -> None:
    base = ROOT / "Lscr-93" / "root-artifacts"
    blob = read_bytes(base / "Lscr-93.bin")
    rows = load_tsv_rows(base / "Lscr-93.block1-table.tsv")
    id_lookup = {int(row["id"]): row["value"] for row in rows}

    block_file_offset = 580
    code_start = block_file_offset + 4 + 16
    start = 0x2D5B
    end = 0x2D74
    lattice_starts = list(range(0x2D5F, 0x2D74, 4))
    lattice_lines: list[str] = []
    for off in lattice_starts:
        if off + 3 >= end:
            break
        file_off = code_start + off
        id_word = int.from_bytes(blob[file_off : file_off + 2], "little")
        target_word = int.from_bytes(blob[file_off + 2 : file_off + 4], "little")
        target_guess = start + target_word
        label = id_lookup.get(id_word, "<no-table-hit>")
        lattice_lines.append(
            f"| `0x{off:04X}` | `0x{file_off:04X}` | `{blob[file_off]:02X} {blob[file_off+1]:02X}` | `{id_word}` | `{label}` | "
            f"`{blob[file_off+2]:02X} {blob[file_off+3]:02X}` | `0x{target_word:04X}` | `0x{target_guess:04X}` |"
        )

    text = "\n".join(
        [
            "# Lscr-93 Pass 30: Packed Case-Table Candidate Lattice",
            "",
            "Purpose:",
            "- Re-open the packed branch/case seam around `0x2D5F..0x2D73` without guessing handler logic.",
            "- Distinguish raw bytes, candidate 16-bit record fields, and table-id hits.",
            "",
            "Source classes:",
            "- Raw bytes: `Lscr-93.bin`",
            "- Raw LSCR metadata/value table: `Lscr-93.block1-table.tsv`",
            "- Corroboration only: existing readable/report artifacts",
            "",
            "Raw byte window `0x2D5B..0x2D73`:",
            "```text",
            *hexdump_window(blob, code_start + start, code_start + end),
            "```",
            "",
            "Candidate 4-byte lattice starting at `0x2D5F`:",
            "",
            "| Record start | File start | id bytes | little-endian id | TSV hit | target bytes | relative word | block-relative `0x2D5B + rel` |",
            "|---|---|---:|---:|---|---:|---:|---:|",
            *lattice_lines,
            "",
            "What this artifact proves:",
            "- The seam is still raw-table territory through `0x2D73`; no executable body begins earlier than `0x2D74` in this artifact.",
            "- The final bytes can now be inspected as candidate 16-bit fields instead of a single opaque tail blob.",
            "- Any row with `<no-table-hit>` stays unresolved and is not promoted into readable source.",
            "",
            "What remains unresolved:",
            "- Whether the packed bytes are fully aligned 4-byte case records from `0x2D5F`, `0x2D60`, or another stride origin.",
            "- Whether any candidate target word is a true case target or part of adjacent control machinery.",
            "- No handler/body semantics are inferred here.",
            "",
        ]
    )
    write_text(base / "Lscr-93.pass30-case-table-candidate-lattice.md", text)


def build_lscr102() -> None:
    base = ROOT / "Lscr-102" / "root-artifacts"
    ann = base / "Lscr-102.annotated-disasm.md"
    blocks_js = base / "Lscr-102.blocks.js"
    islands_js = base / "Lscr-102.block08-islands.js"
    pass14012 = base / "Lscr-102.pass-block14012-table.md"
    pass37252 = base / "Lscr-102.pass-block37252-table.md"
    pass43264 = base / "Lscr-102.pass-block43264-table.md"

    sections = [
        (
            "Block 14012",
            ["1135", "1159", "11C5", "KDONE"],
            [ann, pass14012, islands_js],
        ),
        (
            "Block 37252",
            ["0145", "016F", "0173", "0219", "022E"],
            [ann, pass37252, blocks_js],
        ),
        (
            "Block 43264",
            ["05DD", "05F4", "0619", "063E", "064F", "065A", "0663"],
            [ann, pass43264, blocks_js],
        ),
    ]

    out: list[str] = [
        "# Lscr-102 Pass 22: Hotspot Stack-Trace Windows",
        "",
        "Purpose:",
        "- Build stricter hotspot views for the known carried-stack blockers in blocks `14012`, `37252`, and `43264`.",
        "- Keep raw bytes, annotated-disasm rows, stricter surface rows, and table corroboration in one place.",
        "",
        "Source classes:",
        "- Raw chunk / annotated bytes: `Lscr-102.annotated-disasm.md`",
        "- Stricter surface rows: `Lscr-102.blocks.js`, `Lscr-102.block08-islands.js`",
        "- Raw block tables: `Lscr-102.pass-block14012-table.md`, `Lscr-102.pass-block37252-table.md`, `Lscr-102.pass-block43264-table.md`",
        "- Corroboration only: existing readable bodies",
        "",
    ]

    for title, patterns, files in sections:
        out.extend([f"## {title}", ""])
        for file in files:
            out.append(f"### {file.name}")
            lines = find_block_rows(file, patterns, context=4)
            if lines:
                out.append("```text")
                out.extend(lines)
                out.append("```")
            else:
                out.append("_No direct pattern hits in this file._")
            out.append("")
        out.extend(
            [
                "What this section is for:",
                "- Preserve the exact hotspot rows that currently bound the blocker.",
                "- Make it easier to compare raw carry / stack placeholders against later named table rows.",
                "",
            ]
        )

    write_text(base / "Lscr-102.pass22-hotspot-stack-trace-windows.md", "\n".join(out))


def build_lscr104() -> None:
    base = ROOT / "Lscr-104" / "root-artifacts"
    blob = read_bytes(base / "Lscr-104.bin")

    regions = [
        {
            "block": "25976",
            "file_offset": 30584,
            "marker_start": 30588,
            "marker_end": 30603,
            "code_start": 30604,
            "code_end": 30614,
            "align_start": 30615,
            "align_end": 30615,
            "count_start": 30616,
            "count_end": 30619,
            "hdr_start": 30620,
            "hdr_end": 30631,
            "player_start": 30632,
            "player_end": 30645,
            "quit_start": 30660,
            "quit_end": 30667,
            "spill_start": 30784,
            "spill_end": 30803,
            "spill_tail_start": 30804,
            "spill_tail_end": 30807,
        },
        {
            "block": "26196",
            "file_offset": 30804,
            "marker_start": 30808,
            "marker_end": 30823,
            "code_start": 30824,
            "code_end": 30863,
            "count_start": 30864,
            "count_end": 30867,
            "hdr_start": 30868,
            "hdr_end": 30879,
            "player_start": 30880,
            "player_end": 30893,
        },
    ]

    out: list[str] = [
        "# Lscr-104 Pass 78: Executable-versus-Payload Region Map",
        "",
        "Purpose:",
        "- Separate executable bytes from payload/name-record bytes automatically for the two late helper blocks.",
        "- Keep the cross-block `returnValue` spill explicit as a region boundary rather than a prose-only note.",
        "",
        "Source class:",
        "- Raw bytes: `Lscr-104.bin`",
        "- Corroboration only: existing pass-block tables and readable deliverables",
        "",
    ]

    for r in regions:
        out.extend([f"## Block {r['block']}", ""])
        for label in [
            ("marker", r["marker_start"], r["marker_end"]),
            ("code", r["code_start"], r["code_end"]),
        ]:
            name, s, e = label
            out.append(f"### {name} `{s}..{e}`")
            out.append("```text")
            out.extend(chunked_hex(blob, s, e + 1))
            out.append("```")
            out.append("")
        for maybe in [
            ("alignment", "align_start", "align_end"),
            ("payload count dword", "count_start", "count_end"),
            ("first name-record header", "hdr_start", "hdr_end"),
            ("first UTF-16LE _player bytes", "player_start", "player_end"),
            ("UTF-16LE quit bytes", "quit_start", "quit_end"),
            ("detached spill fragment", "spill_start", "spill_end"),
            ("cross-block spill tail", "spill_tail_start", "spill_tail_end"),
        ]:
            label, ks, ke = maybe
            if ks in r:
                s, e = r[ks], r[ke]
                out.append(f"### {label} `{s}..{e}`")
                out.append("```text")
                out.extend(chunked_hex(blob, s, e + 1))
                out.append("```")
                out.append("")

    write_text(base / "Lscr-104.pass78-executable-payload-region-map.md", "\n".join(out))


def build_lscr107() -> None:
    base = ROOT / "Lscr-107" / "root-artifacts"
    blob = read_bytes(base / "Lscr-107.bin")
    code_start_152 = 860 + 4 + 16
    code_start_4716 = 5424 + 4 + 16

    templates = [
        (
            "block 152 direct receiver-to-missing-id store",
            "3b 00 02 3d 00 0b 36 00 nn 51",
            [
                ("_global.lastAction = id_11", 0x0048, 0x0053),
                ("_global.socketBuffer = id_11", 0x00B5, 0x00BC),
                ("_global.facebookToken = id_11", 0x00EA, 0x00F1),
                ("_global.facebookID = id_11", 0x00F4, 0x00FB),
                ("_global.facebookSessionSecret = id_11", 0x00FE, 0x0105),
                ("_global.facebookSessionKey = id_11", 0x0108, 0x010F),
            ],
        ),
        (
            "block 152 direct receiver-to-literal-or-string-id store",
            "3b 00 02 3d 00 nn 36 00 mm 51",
            [
                ("mainURL", 0x0065, 0x006C),
                ("cacheURL", 0x008D, 0x0094),
                ("socketURL", 0x0097, 0x009E),
                ("uggURL", 0x00A1, 0x00A8),
                ("exeName", 0x00AB, 0x00B2),
            ],
        ),
        (
            "block 152 receiver-plus-Array-constructor",
            "3b 00 02 3b 00 08 39 23 00 00 36 00 nn 51",
            [
                ("gNetID = Array()", 0x003F, 0x004A),
                ("fileNetID = Array()", 0x004B, 0x0056),
            ],
        ),
        (
            "block 4716 direct receiver-to-missing-id store",
            "3b 00 00 3d 00 02 36 00 nn 51",
            [
                ("_global.facebookToken = id_2", 0x0006, 0x000F),
                ("_global.facebookID = id_2", 0x0010, 0x0019),
                ("_global.facebookSessionSecret = id_2", 0x001A, 0x0023),
                ("_global.facebookSessionKey = id_2", 0x0024, 0x002D),
            ],
        ),
    ]

    out: list[str] = [
        "# Lscr-107 Pass 14: Repeated Store-Chain Templates",
        "",
        "Purpose:",
        "- Extract repeated raw store-chain families for `startMovie` block `152` and embedded block `4716`.",
        "- Distinguish exact repeated templates from singleton chains without changing readable body text.",
        "",
        "Source class:",
        "- Raw bytes: `Lscr-107.bin`",
        "- Corroboration only: existing pass-block tables and readable deliverables",
        "",
    ]

    for title, pattern, instances in templates:
        out.extend([f"## {title}", "", f"Template shape: `{pattern}`", ""])
        out.append("| Instance | Block-relative window | File window | Raw bytes |")
        out.append("|---|---|---|---|")
        for label, start, end in instances:
            code_start = code_start_152 if "block 152" in title else code_start_4716
            file_start = code_start + start
            file_end = code_start + end
            raw = " ".join(f"{b:02x}" for b in blob[file_start : file_end + 1])
            out.append(
                f"| `{label}` | `0x{start:04X}..0x{end:04X}` | `0x{file_start:04X}..0x{file_end:04X}` | `{raw}` |"
            )
        out.append("")

    out.extend(
        [
            "Singleton chains kept separate:",
            "- `aid = VOID`",
            "- `isEnc = 1`",
            "- `isConnected = 0`",
            "- `_global.mainURL` reference forms (`gameURL`, `avatarMainURL`), which share only a prefix and then diverge",
            "",
        ]
    )

    write_text(base / "Lscr-107.pass14-store-chain-templates.md", "\n".join(out))


def main() -> None:
    build_lscr93()
    build_lscr102()
    build_lscr104()
    build_lscr107()


if __name__ == "__main__":
    main()
