## Lscr-102 Pass 33: Block 14012 island-ownership pass for 0x1135 / 0x11C5

Scope:
- Script: `Lscr-102`
- Handler block: `14012` (`RaceEngine_runFrame`)
- Narrow targets:
  - guard at raw `0x1135`
  - guard at raw `0x11C5`

Goal:
- Re-walk the strict island boundaries around the two `rt mod c1` guards.
- Decide whether either guard lhs can be promoted from `/*stack*/` to a named symbol.
- Keep adjacent symbol islands separate from guard-local ownership.

Primary sources:
- `Lscr-102.block08-islands.js`
- `Lscr-102.blocks.lingo`
- `Lscr-102.pass-block14012-table.md`
- `Lscr-102.rebuilt-faithful-full.js`

Strict island map:

### 0x1135 family

- island `382`: `0x1121..0x112C`
  - branch: `if not (raceType = KOTH) then goto 0x0088` at `0x1128`
- island `383`: `0x112C..0x1139`
  - branch: `if not (/*stack*/ <> (rt mod c1)) then goto 0x115C` at `0x1135`
- island `384`: `0x1139..0x1159`
  - unresolved stack at `0x1157`: `INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848`
  - stack tail at `0x1159`: `INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)`
- island `385`: `0x1159..0x115C`
  - stack tail: `KDONE` at `0x115C`

Ownership decision:
- `0x1135` stays unresolved as `/*stack*/ <> (rt mod c1)`.
- `KDONE` is adjacent, but not guard-local:
  - `pass-block14012-table.md` proves payload id `145` = `KDONE`
  - `blocks.lingo` surfaces `KDONE()` at line `1479`
  - strict island tracing places `KDONE` only in island `385`, after the `0x115C` branch target
- No strict local source ties `KDONE` back into island `383`.

### 0x11C5 family

- island `389`: `0x11B1..0x11BC`
  - branch: `if not (raceType = QM) then goto 0x007C` at `0x11B8`
- island `390`: `0x11BC..0x11C9`
  - branch: `if not (/*stack*/ <> (rt mod c1)) then goto 0x11E0` at `0x11C5`
- island `391`: `0x11C9..0x11DD`
  - expr: `RINT(s, carV, carAccel)` at `0x11DC`
- island `392`: `0x11DD..0x11E0`
  - stack tail: `RDONE` at `0x11E0`

Ownership decision:
- `0x11C5` stays unresolved as `/*stack*/ <> (rt mod c1)`.
- The strict island trace does not prove a named lhs for this guard.
- `blocks.lingo` surfaces the nearby family:
  - `RINT()(null.s, null.carV, null.carAccel)` at line `1487`
  - `RDONE()` at line `1492`
- Those names are still adjacent-island evidence, not guard-local lhs ownership.
- `rebuilt-faithful-full.js` carries the broader row `if not (KDONE <> (rt mod c1)) then -- jump 23` at `0x11C5`, but that carry outruns the stricter island ownership and is not accepted.

Cross-window conclusion:
- `0x1135` and `0x11C5` are both isolated guard islands whose lhs remains `/*stack*/` on the strict block-owned surface.
- Nearby named tails are:
  - `KDONE` in island `385` for the earlier family
  - `RINT` then `RDONE` in islands `391` / `392` for the later family
- Those adjacent symbol islands do not legally promote either guard lhs.

Accepted floor for deliverable:
- keep `if not (implicit_lhs_0x1135 <> (rt mod c1)) then -- jump 35 -- 0x1135`
- keep `if not (implicit_lhs_0x11C5 <> (rt mod c1)) then -- jump 23 -- 0x11C5`
- do not rewrite either lhs to `KDONE` or `RDONE`
- do not silently pick the broader faithful `KDONE` carry for `0x11C5`
