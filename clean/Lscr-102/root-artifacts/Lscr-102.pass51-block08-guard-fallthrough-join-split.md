## Lscr-102 pass51: block 14012 guard/fallthrough/join split

Scope:
- script: `Lscr-102`
- handler/block: `block_8` / offset `14012`
- focus windows: `0x1135` and `0x11C5`
- question: can either unresolved guard be split more tightly from adjacent islands without promoting `KDONE`, `RINT`, or `RDONE` into guard-lhs semantics?

Sources used:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.block08-islands.js`
- `Lscr-102.pass-block14012-table.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`
- `Lscr-102.stack-faithful.lingo`
- `Lscr-102.reconstructed.lingo`

## Result

Yes, a stricter local ownership split was found, but it is structural only.

What tightened:
- each unresolved guard now separates cleanly into:
  - guard window
  - skipped fallthrough payload window
  - skipped terminal tail-symbol window
  - resumed join byte immediately after that tail-symbol window

What did **not** tighten:
- no new block-local lhs ownership was found for either guard
- `0x1135` still cannot legally promote `KDONE`
- `0x11C5` still cannot legally promote `RDONE`, and the broader `KDONE` lhs seen in weaker surfaces still outruns the strict local split

## Window A: `0x1135`

### Raw split

From `Lscr-102.annotated-disasm.md`:
- guard build + branch: `0x112C..0x1138`
  - `112C: 41`
  - `112D: 35 00 65 ; "rt"`
  - `1130: 41`
  - `1131: 35 00 01 ; "c1"`
  - `1134: 22`
  - `1135: 13 07 00 23`
- fallthrough payload arm: `0x1139..0x1158`
  - starts at `1139: 3B 00 8F ; "INT"`
  - ends at `1158: 51`
- skipped terminal tail-symbol: `0x1159..0x115B`
  - `1159: 3B 00 91 ; "KDONE"`
- resumed join byte: `0x115C`
  - `115C: 39`

### Island split

From `Lscr-102.block08-islands.js`:
- island `383`: `0x112C..0x1139`
  - `if not (/*stack*/ <> (rt mod c1)) then goto 0x115C`
- island `384`: `0x1139..0x1159`
  - unresolved `0x04` stack carrying `INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848`
- island `385`: `0x1159..0x115C`
  - stack tail `KDONE`

### Tightened ownership claim

The branch target lands at `0x115C`, not inside `0x1139..0x115B`.
So the false edge skips **both**:
- the `INT` payload arm (`0x1139..0x1158`)
- the `KDONE` tail token (`0x1159..0x115B`)

This proves `KDONE` is not part of the guard window and is not a join-shared lhs token for `0x1135`.

## Window B: `0x11C5`

### Raw split

From `Lscr-102.annotated-disasm.md`:
- guard build + branch: `0x11BC..0x11C8`
  - `11BC: 41`
  - `11BD: 35 00 65 ; "rt"`
  - `11C0: 41`
  - `11C1: 35 00 01 ; "c1"`
  - `11C4: 22`
  - `11C5: 13 07 00 17`
- fallthrough payload arm: `0x11C9..0x11DC`
  - starts at `11C9: 3B 00 93 ; "RINT"`
  - ends at `11DC: 51`
- skipped terminal tail-symbol: `0x11DD..0x11DF`
  - `11DD: 3B 00 94 ; "RDONE"`
- resumed join byte: `0x11E0`
  - `11E0: 39`

### Island split

From `Lscr-102.block08-islands.js`:
- island `390`: `0x11BC..0x11C9`
  - `if not (/*stack*/ <> (rt mod c1)) then goto 0x11E0`
- island `391`: `0x11C9..0x11DD`
  - `RINT(s, carV, carAccel)`
- island `392`: `0x11DD..0x11E0`
  - stack tail `RDONE`

### Tightened ownership claim

The branch target lands at `0x11E0`, not inside `0x11C9..0x11DF`.
So the false edge skips **both**:
- the `RINT` payload arm (`0x11C9..0x11DC`)
- the `RDONE` tail token (`0x11DD..0x11DF`)

This proves `RDONE` is not part of the guard window and is not a join-shared lhs token for `0x11C5`.

## Contradiction handling

Weaker local surfaces still overreach:
- `Lscr-102.blocks.lingo` renders `if not (KDONE <> (rt mod c1)) then -- jump 23 -- 0x11C5`
- `Lscr-102.reconstructed.lingo` likewise carries `KDONE()` / `RINT()` / `RDONE()`-style stronger semantics

The stricter local split above does **not** support that `KDONE` guard lhs.
Reason:
- `KDONE` first appears only in the skipped tail-symbol island `0x1159..0x115B`
- the `0x11C5` branch target resumes at `0x11E0`, after the separate `RINT` and `RDONE` fallthrough islands

So the strict local stop-map remains:
- `0x1135`: unresolved guard, payload arm, `KDONE` tail, join at `0x115C`
- `0x11C5`: unresolved guard, `RINT` arm, `RDONE` tail, join at `0x11E0`

## Final decision

Stricter split found:
- yes, at the guard/fallthrough/join level for both windows

Stricter guard-lhs ownership found:
- no

Safe promotion unlocked:
- none
