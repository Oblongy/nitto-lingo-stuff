## Lscr-102 Pass 51 - Block 11992 STG Arm Template Comparison

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass49-block07-family-ownership-shape.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass50-block07-first-family-ownership-split.md`

Handler / block:
- `RaceEngine_stageDistance`
- embedded block offset `11992`

Question:
- Does comparing the first mixed family against the later clean `STG` arms reveal a stricter local split for raw `0x0060..0x0075`?

## Raw comparison windows

### First family mixed payload build

```text
0060: 3B 00 0A     op_3B arg=10 ; "STG"
0063: 39           op_39
0064: 41           op_41
0065: 35 00 0B     op_35 arg=11 ; "s"
0068: 41           op_41
0069: 35 00 0C     op_35 arg=12 ; "carV"
006C: 22           op_22
006D: 41           op_41
006E: 35 00 0D     op_35 arg=13 ; "carAccel"
0071: 22           op_22
0072: 3A 00 03     op_3A arg=3 ; "raceType"
0075: 51           op_51
0076: 06 00 17     op_06 jump?/imm=23
```

### Second family clean `STG` arm

```text
00DE: 3B 00 0A     op_3B arg=10 ; "STG"
00E1: 39           op_39
00E2: 41           op_41
00E3: 35 00 0B     op_35 arg=11 ; "s"
00E6: 41           op_41
00E7: 35 00 0C     op_35 arg=12 ; "carV"
00EA: 41           op_41
00EB: 35 00 0D     op_35 arg=13 ; "carAccel"
00EE: 3A 00 03     op_3A arg=3 ; "raceType"
00F1: 51           op_51
00F2: 06 00 4F     op_06 jump?/imm=79
```

## Strict local surface comparison

`stack-faithful.lingo` / `rebuilt-faithful-full.js`:

- first family:
  - `((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL))((raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel)) -- 0x0075`
- second family:
  - `-- 0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)] -- 0x00D2`
  - `STG(s, carV, carAccel) -- 0x00F1`

`blocks.lingo` / `blocks.js`:

- first family:
  - `?(?, STG(), ((null.s % null.carV) % null.carAccel))`
- second family:
  - `STG()(null.s, null.carV, null.carAccel)`

## What this comparison proves

### 1. The later clean `STG` arm exposes the local minimal template

The second family gives a cleaner local `STG` arm template:

```text
3B "STG"
39
35 "s"
35 "carV"
35 "carAccel"
3A "raceType"
51
```

That clean template is what the strict surfaces lift as:

```text
STG(s, carV, carAccel) -- 0x00F1
```

### 2. The first family does not match that clean template byte-for-byte

The first family inserts two `op_22` instructions inside the payload build:

- `006C: 22`
- `0071: 22`

and still ends on the same `op_3A arg=3 ; "raceType"` plus `op_51` tail.

So the first family is not just a clean `STG(s, carV, carAccel)` arm preceded by a separate unresolved head. The extra `op_22` sites stay inside the same packet and prevent the clean-arm lift.

### 3. The first family remains one unsplit build from `0x0060` to `0x0075`

Because the clean second-family template only becomes readable after the unresolved carry has already separated upstream at `0x00D2`, this comparison strengthens the earlier split:

- first family:
  - unresolved carry remains live through the `0x0060..0x0075` build
  - no strict local boundary isolates a clean `STG(s, carV, carAccel)` arm inside that window
- second family:
  - unresolved carry has already separated at `0x00D2`
  - later `0x00DE..0x00F1` arm is independently readable

## Decision

Stricter split found:
- yes, by template comparison

What it changes:
- it confirms the first family `0x0060..0x0075` span should stay one unresolved mixed payload build
- it confirms the later `STG` rows are not valid templates for decomposing that first-family window into a separate clean arm plus residue

## Unresolved

- The exact semantic effect of `op_39` and the two in-band `op_22` sites at `0x006C` and `0x0071` remains unresolved.
- No strict local surface proves a smaller executable split inside `0x0060..0x0075`.
