# Lscr-93 Pass 31: Case-Table Alignment Check

Mode
- Validation only.
- No executable Lingo promotion in this pass.

Stop-map purpose
- Freeze the strongest byte-backed alignment claim for the late packed `op_47` table at `0x2D5B..0x2D73`.
- Record exactly what was validated, what was rejected, and what still remains blocked.

Primary sources
- `Lscr-93.bin`
- `Lscr-93.block1.annotated-disasm.md`
- `Lscr-93.block1-table.tsv`
- `Lscr-93.pass15-action-span-inventory.md`
- `Lscr-93.pass6-whole-file-region-map.md`
- `Lscr-93.pass30-case-table-candidate-lattice.md`
- `Lscr-93.pass31-case-table-alignment-correction.md`

Accepted alignment
- `0x2D5B`
  - opcode byte `0x47`
- `0x2D5C..0x2D5D`
  - default-target word `0x00EB`
- `0x2D5E..0x2D5F`
  - count word `0x0005`
- `0x2D60..0x2D73`
  - five 4-byte records
  - each record = big-endian `id word` + big-endian `target word`

Why this is the accepted alignment
- After the default word and count word are consumed, exactly `20` bytes remain through `0x2D73`.
- `20 = 5 * 4`, which matches the count word `0x0005`.
- The five records at `0x2D60`, `0x2D64`, `0x2D68`, `0x2D6C`, and `0x2D70` all resolve to valid table ids and known target bodies.

Resolved record map

Base used for target resolution: `0x2D5B`

| Record | Bytes | Id Word | Table Id | Table Name | Target Word | Resolved Target |
|---|---|---:|---:|---|---:|---:|
| 0 | `0x2D60..0x2D63` | `0x0064` | `100` | `avatars` | `0x0019` | `0x2D74` |
| 1 | `0x2D64..0x2D67` | `0x01AF` | `431` | `teamavatars` | `0x0019` | `0x2D74` |
| 2 | `0x2D68..0x2D6B` | `0x01B0` | `432` | `ugg` | `0x007D` | `0x2DD8` |
| 3 | `0x2D6C..0x2D6F` | `0x01A6` | `422` | `cache` | `0x00C9` | `0x2E24` |
| 4 | `0x2D70..0x2D73` | `0x01A9` | `425` | `installer` | `0x00D4` | `0x2E2F` |

Late-window raw anchors
- `block1.annotated-disasm.md:5083-5106`
- `block1-table.tsv:102`
- `block1-table.tsv:433-434`
- `block1-table.tsv:424`
- `block1-table.tsv:427`
- `pass15-action-span-inventory.md:30-31`
- `pass6-whole-file-region-map.md:239-243`

Rejected alignments
- `0x2D5F`
  - wrong by one byte
  - consumes the count low byte `0x05` as if it were record data
  - leaves `21` bytes through `0x2D73`, which does not match `5 * 4`
  - yields no consecutive big-endian table-id hits
- `0x2D5E`
  - consumes the count word `0x0005` as if it were a record id
- `0x2D5C`
  - can be interpreted only as header material
  - `0x00EB` is the default-target word, not the first record id

Exact correction to the older candidate lattice
- `pass30-case-table-candidate-lattice.md` mixed address spaces:
  - its quoted raw bytes start at file offset `0x2FB3`
  - that byte corresponds to block offset `0x2D6F`, not `0x2D5B`
- it also started 4-byte record parsing at `0x2D5F`
  - that start is now explicitly rejected

Same-shape corroboration from another local `op_47` table

The earlier `op_47` site at `0x2C20` independently matches the same field layout:

- `0x2C20`
  - opcode byte `0x47`
- `0x2C21..0x2C22`
  - default-target word `0x0018`
- `0x2C23..0x2C24`
  - count word `0x0004`
- `0x2C25..0x2C34`
  - four 4-byte records

Sibling record map using the same big-endian layout:

Base used for target resolution: `0x2C20`

| Record | Bytes | Id Word | Table Id | Table Name | Target Word | Resolved Target |
|---|---|---:|---:|---|---:|---:|
| 0 | `0x2C25..0x2C28` | `0x0122` | `290` | `gettotalnewmail` | `0x0015` | `0x2C35` |
| 1 | `0x2C29..0x2C2C` | `0x0123` | `291` | `getemaillist` | `0x0015` | `0x2C35` |
| 2 | `0x2C2D..0x2C30` | `0x011D` | `285` | `getavatarage` | `0x0015` | `0x2C35` |
| 3 | `0x2C31..0x2C34` | `0x011E` | `286` | `getteamavatarage` | `0x0015` | `0x2C35` |

Sibling raw anchors
- `block1.annotated-disasm.md:4928-4948`
- `block1-table.tsv` ids `285`, `286`, `290`, `291`
- `pass15-action-span-inventory.md:30`

What this extra corroboration tightens
- The late table is not just internally consistent.
- The same script already uses another local `op_47` surface with:
  - one default-target word
  - one count word
  - fixed-width big-endian 4-byte id/target records
- That makes the late `0x2D5B` alignment claim stronger without requiring any guessed arm semantics.

Current blocker state
- The alignment question is no longer blocked at the field-layout level.
- The remaining blocker is opcode semantics only:
  - current local evidence proves byte roles and resolved targets
  - current local evidence does not prove a richer runtime interpretation of opcode `0x47` beyond that layout
- No tighter code lift follows from this alone, so `rightful.ls` remains unchanged in validation mode.
