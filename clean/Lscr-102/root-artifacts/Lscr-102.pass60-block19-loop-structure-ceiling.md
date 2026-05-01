# Lscr-102 Pass 60: Block 19 Loop-Structure Ceiling

## Purpose

- Re-check block `43264` (`RaceEngine_buildMd5Source`) at offsets `0x006C..0x0092`.
- Decide whether the current readable window can be promoted into a structured `repeat` / `for` loop.
- Specifically reject or accept back-promotion from the broader helper loop in `rightful.clean.js`.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets: `0x006C`, `0x0076`, `0x008A`, `0x008E`, `0x0092`
- This pass does not rename `stockRedLine`.
- This pass does not decode `op_64`, `op_00`, or `op_01` beyond the already promoted readable floor.

## Sources

- `Lscr-102/rightful.ls` — current promoted readable Lingo
- `Lscr-102/rightful.clean.js` — broader helper surface checked only to prevent invalid back-promotion
- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md` — raw opcode window
- `Lscr-102/root-artifacts/Lscr-102.pass-block43264-table.md` — exported payload-name table
- `Lscr-102/root-artifacts/Lscr-102.pass58-block19-loop-seed-js-sync.md` — current strict floor for this window

## Current promoted strict window

From `rightful.ls`:

```text
1743: EMPTY = (EMPTY + (boostSetting + ",")) -- 0x0067
1744: stockRedLine = TRUE -- 0x006C
1746: if not (stockRedLine <= boostSetting) then -- jump 30 -- 0x0076
1747: EMPTY = (EMPTY + (grs[stockRedLine] + ",")) -- 0x008A
1748: -- repeat step 1 -- 0x008E
1750: -- jump -34 -- 0x0092
```

This is the currently promoted readable ceiling.

## Exported payload-name ceiling

From `Lscr-102.pass-block43264-table.md`:

```text
34:- payload offset `1644`: id `1`, kind `4`, len `12`, `stockRedLine`
39:- payload offset `1788`: id `6`, kind `4`, len `12`, `boostSetting`
40:- payload offset `1824`: id `7`, kind `4`, len `3`, `grs`
```

What this proves:

1. The local token used at `0x006C` / `0x0070` / `0x0081` is the exported name `stockRedLine`.
2. The compared upper bound token is `boostSetting`.
3. The indexed collection token is `grs`.
4. No exported local token named `i`, `idx`, `index`, or any other fresh loop variable appears in this block table.

## Raw opcode window

From `Lscr-102.annotated-disasm.md`:

```text
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

What this proves:

1. The loop body uses `grs[stockRedLine]` before the tail packet begins.
2. The tail packet is still the opaque control bundle `op_64 / op_00 / op_01 / op_51 / op_06`.
3. The raw window does not name a fresh loop variable after `stockRedLine`.
4. The raw window does not spell a byte-backed structured `repeat with ...` or `for (...)` form directly enough to promote it as recovered source.

## Broader helper surface checked and rejected for promotion

From `rightful.clean.js`:

```text
549:  RaceEngine_buildMd5Source() {
550:    let md5Source = EMPTY;
551:    md5Source += `${this.stockRedLine},`;
552:    md5Source += `${this.detuneHp},`;
553:    md5Source += `${this.stockBoost},`;
554:    md5Source += `${this.boostType},`;
555:    md5Source += `${this.boostSetting},`;
557:    for (let i = 1; i <= this.boostSetting; i++) {
558:      md5Source += `${this.grs?.[i]},`;
559:    }
```

Why this stays helper-only:

1. It introduces a fresh loop variable name `i` that is not present in the exported payload-name table for block `43264`.
2. It normalizes the odd recovered name/body mismatch by replacing the exported local token `stockRedLine` with a cleaner helper index.
3. The raw tail packet at `0x008E..0x0092` is still not independently decoded at the byte-backed readable layer.

## Decision

Keep the current promoted readable ceiling:

```text
stockRedLine = TRUE -- 0x006C
if not (stockRedLine <= boostSetting) then -- jump 30 -- 0x0076
EMPTY = (EMPTY + (grs[stockRedLine] + ",")) -- 0x008A
-- repeat step 1 -- 0x008E
-- jump -34 -- 0x0092
```

Do not promote:

```text
- repeat with stockRedLine = 1 to boostSetting
- for i = 1 to boostSetting
- any fresh `i` / `idx` / `index` loop variable
- any stronger semantics for `op_64 / op_00 / op_01` than the existing repeat-step placeholder
```

## What changed

- Added this pass note to document the loop-structure ceiling for block `43264`.

## What stayed unchanged

- `Lscr-102/rightful.ls`
- `Lscr-102/rightful.from-lingo.js`
- `Lscr-102/rightful.js`
- The helper `for (let i ...)` in `rightful.clean.js`

## What remains unresolved

- `op_3F` at `0x006B` is still not independently decoded by this pass.
- The control packet at `0x008E..0x0092` remains unresolved beyond:
  - `-- repeat step 1 -- 0x008E`
  - `-- jump -34 -- 0x0092`
- The clean structured loop in `rightful.clean.js` remains corroboration only and is not promoted back into the strict deliverable.
