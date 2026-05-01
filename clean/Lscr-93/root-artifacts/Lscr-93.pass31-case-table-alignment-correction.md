# Lscr-93 Pass 31: Late Case-Table Alignment Correction

Scope
- Validate the packed table alignment around block offsets `0x2D5B..0x2D73`.
- Correct the older candidate-lattice pass if it mixed address spaces or started records on the wrong byte.
- Out of scope: promoting new executable source into `rightful.ls`.

Superseded artifact
- `Lscr-93.pass30-case-table-candidate-lattice.md`

Why the older candidate lattice is misaligned
- Its quoted raw byte window begins at file offset `0x2FB3`.
- That file byte is block offset `0x2D6F`, not `0x2D5B`.
- It also starts the 4-byte record lattice at block offset `0x2D5F`, which is the low byte of the count word, not the first record byte.

Primary evidence
- `Lscr-93.bin`
- `Lscr-93.block1.annotated-disasm.md`
- `Lscr-93.block1-table.tsv`
- `Lscr-93.pass15-action-span-inventory.md`
- `Lscr-93.pass6-whole-file-region-map.md`

Address normalization

For this local window, the raw bin bytes align as:

| Block offset | File offset | Raw bytes |
|---|---:|---|
| `0x2D5B` | `0x2F9F` | `47 00 EB 00` |
| `0x2D5E` | `0x2FA2` | `00 05 00 64` |
| `0x2D60` | `0x2FA4` | `00 64 00 19` |
| `0x2D64` | `0x2FA8` | `01 AF 00 19` |
| `0x2D68` | `0x2FAC` | `01 B0 00 7D` |
| `0x2D6C` | `0x2FB0` | `01 A6 00 C9` |
| `0x2D70` | `0x2FB4` | `01 A9 00 D4` |
| `0x2D74` | `0x2FB8` | `3B 00 04` |

Corroborating disasm lines:
- `block1.annotated-disasm.md:5083-5106`

Raw byte layout

```text
2D5B: 47
2D5C: 00
2D5D: EB
2D5E: 00
2D5F: 05
2D60: 00
2D61: 64
2D62: 00
2D63: 19
2D64: 01
2D65: AF
2D66: 00
2D67: 19
2D68: 01
2D69: B0
2D6A: 00
2D6B: 7D
2D6C: 01
2D6D: A6
2D6E: 00
2D6F: C9
2D70: 01
2D71: A9
2D72: 00
2D73: D4
2D74: 3B 00 04 ; "netError"
```

Alignment checks

Rejected starts:
- `0x2D5F`
  - consumes the count low byte `0x05` as though it were a record-id byte
  - leaves `21` bytes through `0x2D73`, which does not divide into the `5` records implied by `0x2D5E..0x2D5F`
  - yields no consecutive big-endian table-id hits
- `0x2D5E`
  - consumes the count word `0x0005` as though it were a record id
- `0x2D5C`
  - can be partitioned as a 2-byte header word plus later 4-byte records
  - cannot be the first record start, because `0x00EB` is the default-target word and `0x0005` is the count word

Accepted start:
- `0x2D60`
  - after consuming:
    - `0x2D5C..0x2D5D` as the default-target word
    - `0x2D5E..0x2D5F` as the count word
  - exactly `20` bytes remain through `0x2D73`
  - `20 = 5 * 4`, matching the count word `0x0005`
  - the five 4-byte records all resolve cleanly as big-endian `id + target` pairs

Corrected field layout
- `0x2D5B`
  - dispatch opcode byte
- `0x2D5C..0x2D5D`
  - default-target word `0x00EB`
  - resolved target `0x2E46`
- `0x2D5E..0x2D5F`
  - record-count word `0x0005`
- `0x2D60..0x2D73`
  - five 4-byte records
  - each record is:
    - two-byte big-endian id word
    - two-byte big-endian relative-target word

Corrected record map

Base used for target resolution: `0x2D5B`

| Record | Bytes | Id Word | Table Id | Table Name | Target Word | Resolved Target |
|---|---|---:|---:|---|---:|---:|
| 0 | `0x2D60..0x2D63` | `0x0064` | `100` | `avatars` | `0x0019` | `0x2D74` |
| 1 | `0x2D64..0x2D67` | `0x01AF` | `431` | `teamavatars` | `0x0019` | `0x2D74` |
| 2 | `0x2D68..0x2D6B` | `0x01B0` | `432` | `ugg` | `0x007D` | `0x2DD8` |
| 3 | `0x2D6C..0x2D6F` | `0x01A6` | `422` | `cache` | `0x00C9` | `0x2E24` |
| 4 | `0x2D70..0x2D73` | `0x01A9` | `425` | `installer` | `0x00D4` | `0x2E2F` |

Table-id corroboration
- `block1-table.tsv:102` -> `100 = avatars`
- `block1-table.tsv:433` -> `431 = teamavatars`
- `block1-table.tsv:434` -> `432 = ugg`
- `block1-table.tsv:424` -> `422 = cache`
- `block1-table.tsv:427` -> `425 = installer`

Target-boundary corroboration
- `pass15-action-span-inventory.md:30-31`
  - grouped action span ends `before 0x2D74`
  - `["avatars", "teamavatars"]` begins at `0x2D74..before 0x2DD8`
- `pass6-whole-file-region-map.md:239-243`
  - `["avatars", "teamavatars"]` at `0x2D74..before 0x2DD8`
  - `"ugg"` at `0x2DD8..before 0x2E24`
  - `"cache"` at `0x2E24..before 0x2E2F`
  - `"installer"` at `0x2E2F..0x2EE1`
- `block1.annotated-disasm.md:5106-5110`
  - first readable body begins at `0x2D74`
- `block1.annotated-disasm.md:5153-5157`
  - `0x2DD8` starts the `ugg` target body
- `block1.annotated-disasm.md:5188-5194`
  - `0x2E24` starts the `cache` target body
  - `0x2E2F` starts the `installer` target body
- `block1.annotated-disasm.md:5204-5210`
  - `0x2E46` is the default-target body

What this corrects
- The late packed table is not aligned from `0x2D5F`.
- The earlier lattice's raw-byte excerpt was also shifted to the wrong file offset window.
- The strongest byte-backed alignment is:
  - opcode at `0x2D5B`
  - default word at `0x2D5C..0x2D5D`
  - count word at `0x2D5E..0x2D5F`
  - five fixed-width records at `0x2D60..0x2D73`

Unresolved
- This pass does not decode opcode `0x47` beyond the proven field layout.
- It does not guess case-arm semantics beyond id/target mapping.
- It does not promote any new executable Lingo.
