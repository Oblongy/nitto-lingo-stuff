# Lscr-93 Pass 30: Packed Case-Table Candidate Lattice

Purpose:
- Re-open the packed branch/case seam around `0x2D5F..0x2D73` without guessing handler logic.
- Distinguish raw bytes, candidate 16-bit record fields, and table-id hits.

Source classes:
- Raw bytes: `Lscr-93.bin`
- Raw LSCR metadata/value table: `Lscr-93.block1-table.tsv`
- Corroboration only: existing readable/report artifacts

Raw byte window `0x2D5B..0x2D73`:
```text
2FB3: C9
2FB4: 01
2FB5: A9
2FB6: 00
2FB7: D4
2FB8: 3B
2FB9: 00
2FBA: 04
2FBB: 39
2FBC: 3B
2FBD: 00
2FBE: 00
2FBF: 35
2FC0: 01
2FC1: A5
2FC2: 56
2FC3: 00
2FC4: 00
2FC5: 37
2FC6: 58
2FC7: 00
2FC8: 02
2FC9: 37
2FCA: 3A
2FCB: 00
```

Candidate 4-byte lattice starting at `0x2D5F`:

| Record start | File start | id bytes | little-endian id | TSV hit | target bytes | relative word | block-relative `0x2D5B + rel` |
|---|---|---:|---:|---|---:|---:|---:|
| `0x2D5F` | `0x2FB7` | `D4 3B` | `15316` | `<no-table-hit>` | `00 04` | `0x0400` | `0x315B` |
| `0x2D63` | `0x2FBB` | `39 3B` | `15161` | `<no-table-hit>` | `00 00` | `0x0000` | `0x2D5B` |
| `0x2D67` | `0x2FBF` | `35 01` | `309` | `getcarprice` | `A5 56` | `0x56A5` | `0x8400` |
| `0x2D6B` | `0x2FC3` | `00 00` | `0` | `_global` | `37 58` | `0x5837` | `0x8592` |
| `0x2D6F` | `0x2FC7` | `00 02` | `512` | `<no-table-hit>` | `37 3A` | `0x3A37` | `0x6792` |

What this artifact proves:
- The seam is still raw-table territory through `0x2D73`; no executable body begins earlier than `0x2D74` in this artifact.
- The final bytes can now be inspected as candidate 16-bit fields instead of a single opaque tail blob.
- Any row with `<no-table-hit>` stays unresolved and is not promoted into readable source.

What remains unresolved:
- Whether the packed bytes are fully aligned 4-byte case records from `0x2D5F`, `0x2D60`, or another stride origin.
- Whether any candidate target word is a true case target or part of adjacent control machinery.
- No handler/body semantics are inferred here.
