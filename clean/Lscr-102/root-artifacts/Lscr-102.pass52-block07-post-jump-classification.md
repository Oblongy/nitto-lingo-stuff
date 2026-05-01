## Lscr-102 pass52 - block 11992 post-jump classification

Scope:
- script: `Lscr-102`
- handler: `RaceEngine_stageDistance`
- block: `11992`

Sources:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass42-block07-byte-window-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass48-block07-terminator-residue-exhaustion.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass49-block07-family-ownership-shape.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass50-block07-first-family-ownership-split.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block07-stg-arm-template-compare.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

Question:
- Can the post-packet / post-arm control-flow windows around `0x0076`, `0x008D`, and `0x00F2` be classified more strictly from local evidence, without revisiting the already-closed family ownership splits?

## Raw windows

### First-family packet exit and clean-arm window

```text
0072: 3A 00 03     op_3A arg=3 ; "raceType"
0075: 51           op_51
0076: 06 00 17     op_06 jump?/imm=23
0079: 3B 00 0A     op_3B arg=10 ; "STG"
007C: 39           op_39
007D: 41           op_41
007E: 35 00 0B     op_35 arg=11 ; "s"
0081: 41           op_41
0082: 35 00 0C     op_35 arg=12 ; "carV"
0085: 41           op_41
0086: 35 00 0D     op_35 arg=13 ; "carAccel"
0089: 3A 00 03     op_3A arg=3 ; "raceType"
008C: 51           op_51
008D: 06 00 B4     op_06 jump?/imm=180
0090: 41           op_41
0091: 35 00 01     op_35 arg=1 ; "rt"
```

### Second-family clean-arm exit and third-family prelude

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
00F5: 41           op_41
00F6: 35 00 03     op_35 arg=3 ; "raceType"
00F9: 3D 00 04     op_3D arg=4 ; "KOTH"
```

## Local surface checkpoints

`stack-faithful.lingo` / `rebuilt-faithful-full.js` preserve:

```text
((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL))((raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel)) -- 0x0075
-- jump 23 -- 0x0076
STG(s, carV, carAccel) -- 0x008C
-- jump 180 -- 0x008D
-- 0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)] -- 0x00D2
if not (raceType = HT) then -- jump 23 -- 0x00DA
STG(s, carV, carAccel) -- 0x00F1
-- jump 79 -- 0x00F2
-- 0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)] -- 0x0115
```

`pass51-block07-stg-arm-template-compare.md` already established:

- `0x0079..0x008C` is a readable clean `STG` arm
- `0x00DE..0x00F1` is the sibling readable clean `STG` arm
- `0x0060..0x0075` is not byte-identical to those clean arms and must remain one unresolved mixed payload build

## What the stricter local evidence proves

### 1. `0x0076` is a short family-local skip, not a terminal exit-class jump

What is immediately visible after `0x0076`:

- one clean `STG` arm at `0x0079..0x008C`
- one further jump marker at `0x008D`
- the next non-`STG` family prelude beginning at `0x0090`

So the strict local role of `0x0076` is:

- post-packet skip after the unresolved first-family mixed packet
- local to the first family
- not homologous to the longer post-clean-arm jumps at `0x008D` / `0x00F2`

### 2. `0x008D` and `0x00F2` are homologous post-clean-arm skip markers

Both windows share the same immediate shape:

- readable clean `STG` arm ends on `op_51`
- next byte is `op_06 jump?/imm=...`
- following bytes begin the next family prelude rather than another continuation of the same `STG` arm

Pairing:

- first clean `STG` arm:
  - arm window `0x0079..0x008C`
  - post-arm skip marker `0x008D`
- second clean `STG` arm:
  - arm window `0x00DE..0x00F1`
  - post-arm skip marker `0x00F2`

So the strict local role of `0x008D` and `0x00F2` is:

- post-clean-arm skip markers
- same control-flow class
- distinct from the shorter first-family `0x0076` skip

### 3. The three jump windows form two control-flow classes, not one

From local evidence alone, block `11992` now separates into:

- class A: short first-family post-packet skip
  - `0x0076`
- class B: post-clean-arm skip markers
  - `0x008D`
  - `0x00F2`

This is stricter than the earlier generic "jump marker" treatment because it classifies the three sites by the byte-backed arm shape they follow.

## Decision

Stricter split found:
- yes

What changed:
- `0x0076` is now classed as a first-family local post-packet skip
- `0x008D` and `0x00F2` are now classed together as the two post-clean-arm skip markers in block `11992`

What did not change:
- no new semantic recovery was made
- no family ownership split was reopened
- no new jump target name or executable semantics were promoted

## Unresolved

- The exact target resolution semantics of `op_06 jump?/imm=23`, `op_06 jump?/imm=180`, and `op_06 jump?/imm=79` are still left at the local control-flow classification layer in this pass.
- This pass does not promote any new readable Lingo line beyond the existing packet and clean-arm rows.
