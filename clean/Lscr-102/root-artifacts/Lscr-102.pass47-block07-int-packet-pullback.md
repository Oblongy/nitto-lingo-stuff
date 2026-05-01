## Lscr-102 pass47 - block 7 INT packet pullback

Scope:
- script: `Lscr-102`
- handler: `RaceEngine_stageDistance`
- block: `11992`
- raw window: `0x0121..0x0140`

Sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.stack-faithful.lingo`
- `Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102.pass46-block07-third-stack-packet.md`

Raw disasm:

```text
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
-- 0x04 unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848] -- 0x013F
1.4848 -- 0x0140
```

Decision:
- Pull back the cleaner `INT(s, carV, carAccel, _system, (milliseconds - timeAnchor)) -- 0x0140` line.
- Preserve the raw-backed packet instead:

```text
?(int_packet_0x013F, (((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848) -- 0x013F
```

Why:
- The raw `0x0121..0x0140` window still carries the two prior unresolved comparison heads into the final `op_04` packet.
- The strict local block does not isolate a clean standalone `INT(...)` call target after those carried heads.
- `0x0140` is only the final `op_51` terminator, not a separately anchored executable `1.4848` row in the deliverable.

Deliverable effect:
- replace the cleaner `INT(...) -- 0x0140` line with the explicit unresolved `int_packet_0x013F`
- keep the earlier `0x0115` carried packet and `0x011D` `HT` branch unchanged
