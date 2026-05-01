# Lscr-102 Pass 58: Block 19 Loop-Seed JS Sync

## Purpose

- Re-check block `43264` (`RaceEngine_buildMd5Source`) at offsets `0x006B..0x0092`.
- Decide whether the promoted JS mirror may keep `implicit_object_0x006B[implicit_index_0x006B]` at `0x006C`, or whether it must sync to the already-promoted readable Lingo.
- Keep the later loop-step bytes explicit and unresolved where the raw window still does not justify a cleaner rewrite.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets: `0x006B`, `0x006C`, `0x0070`, `0x0073`, `0x0076`, `0x008E`, `0x0092`
- This pass does not rename the recovered local token `stockRedLine`.
- This pass does not rewrite the unresolved repeat/step packet at `0x008E..0x0092`.

## Sources

- `Lscr-102/rightful.ls` — current promoted readable Lingo
- `Lscr-102/evidence/reconstructed (1)/Lscr-102.stack-faithful.lingo` — corroborating readable recovery
- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md` — raw opcode window
- `Lscr-102/root-artifacts/Lscr-102.pass-block43264-table.md` — payload name table
- `Lscr-102/rightful.from-lingo.js` — promoted JS mirror being checked
- `Lscr-102/rightful.js` — promoted JS mirror variant being checked

## Readable Lingo already promoted

The promoted readable Lingo already carries this window as:

```text
EMPTY = (EMPTY + (boostSetting + ",")) -- 0x0067
stockRedLine = TRUE -- 0x006C
if not (stockRedLine <= boostSetting) then -- jump 30 -- 0x0076
EMPTY = (EMPTY + (grs[stockRedLine] + ",")) -- 0x008A
-- repeat step 1 -- 0x008E
-- jump -34 -- 0x0092
```

The corroborating stack-faithful readable recovery carries the same `TRUE` store at `0x006C`.

## Raw opcode window

From `Lscr-102.annotated-disasm.md`:

```text
0067: 57 00 00     op_57 arg=0 ; ""
006A: 51           op_51
006B: 3F           op_3F
006C: 57 00 01     op_57 arg=1 ; "stockRedLine"
006F: 51           op_51
0070: 56 00 01     op_56 arg=1 ; "stockRedLine"
0073: 58 00 06     op_58 arg=6 ; "boostSetting"
0076: 15 07 00 1E  op_15 branch? target/imm=30
007A: 56 00 00     op_56 arg=0 ; ""
007D: 41           op_41
007E: 35 00 07     op_35 arg=7 ; "grs"
0081: 56 00 01     op_56 arg=1 ; "stockRedLine"
0084: 37           op_37
0085: 3D 00 02     op_3D arg=2 ; ","
0088: 1B           op_1B
0089: 1B           op_1B
008A: 57 00 00     op_57 arg=0 ; ""
008D: 51           op_51
008E: 64           op_64
008F: 00           op_00
0090: 01           op_01
0091: 51           op_51
0092: 06 FF DE     op_06 jump?/imm=65502
```

## What this proves

1. The sink at `0x006C` is byte-backed as a direct store to local `1`, whose exported token here is `stockRedLine`.
2. The raw window does not contain an object/index load sequence at `0x006B..0x006C`.
3. Because there is no object/index build before the store, the promoted JS placeholder
   `implicit_object_0x006B[implicit_index_0x006B]`
   is not supported by this local byte window.
4. The promoted readable Lingo already has the stricter value token `TRUE` at `0x006C`, and the JS mirror is allowed to follow that already-promoted readable Lingo for the same block/offset.

## Safe promotion

Safe:

```text
JS mirror at 0x006C:
old -> stockRedLine = implicit_object_0x006B[implicit_index_0x006B]
new -> stockRedLine = TRUE
```

Not safe:

```text
- renaming stockRedLine to a fresh loop/index variable
- rewriting the 0x008E..0x0092 packet as a clean repeat loop
- inferring new semantics for op_64 / op_00 / op_01 beyond the existing repeat-step placeholder
```

## What remains unresolved

- This pass does not independently decode `op_3F`; it only confirms that the JS mirror should follow the already-promoted readable Lingo token `TRUE` at `0x006C`.
- The step/control packet at `0x008E..0x0092` remains unresolved and stays documented as:
  - `-- repeat step 1 -- 0x008E`
  - `-- jump -34 -- 0x0092`
- The odd name/body mismatch remains preserved exactly as recovered.
