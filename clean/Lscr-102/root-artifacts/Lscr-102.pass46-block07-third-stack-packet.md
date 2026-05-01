## Lscr-102 pass46 - block 7 third stack packet

Scope:
- script: `Lscr-102`
- handler: `RaceEngine_stageDistance`
- block: `11992`
- raw window: `0x0115..0x0140`

Sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.stack-faithful.lingo`
- `Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102.pass-block11992-table.md`

Raw disasm:

```text
0115: 0B           op_0B
0116: 41           op_41
0117: 35 00 03     op_35 arg=3 ; "raceType"
011A: 3D 00 07     op_3D arg=7 ; "HT"
011D: 12 07 00 23  op_12 branch? target/imm=35
0121: 3B 00 10     op_3B arg=16 ; "INT"
0124: 39           op_39
0125: 41           op_41
0126: 35 00 0B     op_35 arg=11 ; "s"
0129: 41           op_41
012A: 35 00 0C     op_35 arg=12 ; "carV"
012D: 41           op_41
012E: 35 00 0D     op_35 arg=13 ; "carAccel"
0131: 3B 00 11     op_3B arg=17 ; "_system"
0134: 35 00 12     op_35 arg=18 ; "milliseconds"
0137: 41           op_41
0138: 35 00 0F     op_35 arg=15 ; "timeAnchor"
013B: 1C           op_1C
013C: 83 3A 00     op_83 arg=14848
013F: 04           op_04
0140: 51           op_51
```

Faithful stack surfaces:

```text
-- 0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)] -- 0x0115
if not (raceType = HT) then -- jump 35 -- 0x011D
-- 0x04 unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848] -- 0x013F
1.4848 -- 0x0140
```

Decision:
- Promote the `0x0115` carried comparison family as its own unresolved packet.
- Keep the later `if not (raceType = HT) then -- jump 35 -- 0x011D` branch separate.
- Do not rewrite the later `0x013F` packet into a cleaner `INT(...)` call here.

Why:
- The raw `0x0115` `op_0B` packet matches the earlier `0x00D2` comparison-family shape: carried stack members first, later clean `HT` branch second.
- The raw `0x013F` `op_04` packet still carries prior unresolved comparison heads plus `INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848`.
- That means the third family supports one additional preserved unresolved packet at `0x0115`, but not a cleaner standalone `INT(...)` lift beyond the existing line at `0x0140`.

Deliverable effect:
- add `?(stack_packet_0x0115, (((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)) -- 0x0115`
- leave the later `HT` branch and `INT(...)` arm otherwise unchanged
