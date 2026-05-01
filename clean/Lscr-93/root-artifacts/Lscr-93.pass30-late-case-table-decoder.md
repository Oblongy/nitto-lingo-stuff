# Lscr-93 pass30 late case table decoder

Scope
- Raw window: `0x2D5B..0x2D73`
- Goal: partition header words and table records without guessing arm semantics
- Out of scope: promoting new executable source into `rightful.ls`

Primary evidence
- `Lscr-93.block1.annotated-disasm.md`
- `Lscr-93.block1-table.tsv`
- `Lscr-93.pass15-action-span-inventory.md`
- `Lscr-93.pass6-whole-file-region-map.md`

Raw bytes

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

Field partition

- `0x2D5B`
  - dispatch opcode byte
- `0x2D5C..0x2D5D`
  - default-target word `0x00EB`
  - using header base `0x2D5B`, target resolves to `0x2E46`
  - this matches the existing readable `case ... of -- default 0x2E46 -- 0x2D5B` surface
- `0x2D5E..0x2D5F`
  - record-count word `0x0005`
  - this matches the five fixed-width records that immediately follow
- `0x2D60..0x2D73`
  - five 4-byte records
  - each record partitions cleanly as:
    - two-byte id word, big-endian
    - two-byte relative-target word, big-endian

Record map

Base used for target resolution: `0x2D5B`

| Record | Bytes | Id Word | Table Id | Table Name | Target Word | Resolved Target |
|---|---|---:|---:|---|---:|---:|
| 0 | `0x2D60..0x2D63` | `0x0064` | `100` | `avatars` | `0x0019` | `0x2D74` |
| 1 | `0x2D64..0x2D67` | `0x01AF` | `431` | `teamavatars` | `0x0019` | `0x2D74` |
| 2 | `0x2D68..0x2D6B` | `0x01B0` | `432` | `ugg` | `0x007D` | `0x2DD8` |
| 3 | `0x2D6C..0x2D6F` | `0x01A6` | `422` | `cache` | `0x00C9` | `0x2E24` |
| 4 | `0x2D70..0x2D73` | `0x01A9` | `425` | `installer` | `0x00D4` | `0x2E2F` |

Corroboration

- `Lscr-93.block1-table.tsv`
  - `100 -> avatars`
  - `422 -> cache`
  - `425 -> installer`
  - `431 -> teamavatars`
  - `432 -> ugg`
- `Lscr-93.pass15-action-span-inventory.md`
  - `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]` at `0x2C35..before 0x2D74`
  - `["avatars", "teamavatars"]` at `0x2D74..before 0x2DD8`
- `Lscr-93.pass6-whole-file-region-map.md`
  - `["avatars", "teamavatars"]` sharing `0x2D74..before 0x2DD8`
  - `"ugg"` at `0x2DD8..before 0x2E24`
  - `"cache"` at `0x2E24..before 0x2E2F`
  - `"installer"` at `0x2E2F..0x2EE1`

What this proves about `0x2D71..0x2D73`

- `0x2D70..0x2D71` is not an opaque tail fragment
  - it is the final record's id word `0x01A9`
- `0x2D72..0x2D73` is not a standalone control seam
  - it is the final record's target word `0x00D4`
- there is no stronger byte-backed sub-boundary after `0x2D70`
  - the final record runs intact through `0x2D73`
  - `0x2D74` remains the first readable target body

Unresolved

- This artifact does not claim more than field roles.
- It does not decode how opcode `0x47` consumes the table at runtime beyond:
  - one default-target word
  - one count word
  - five fixed-width id/target records
- It does not normalize the table into new executable Lingo.
