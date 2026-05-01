## Lscr-102 pass49 - block 7 family ownership shape

Scope:
- script: `Lscr-102`
- handler: `RaceEngine_stageDistance`
- block: `11992`

Sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.stack-faithful.lingo`
- `Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102.pass42-block07-byte-window-audit.md`
- `Lscr-102.pass45-block07-second-stack-packet.md`
- `Lscr-102.pass47-block07-int-packet-pullback.md`

Question:
- Do the three carried families in block `11992` have the same ownership shape?

Answer:
- no
- the first family at `0x0075` is a mixed call-head packet
- the later two families at `0x00D2` and `0x0115` are split compare-head families with later separate payload arms

## Family 1: mixed call-head packet

Raw window:

```text
005C: 14 07 00 1C  branch
0060: 3B 00 0A     "STG"
0063: 39
0064: 41 35 00 0B  "s"
0068: 41 35 00 0C  "carV"
006C: 22
006D: 41 35 00 0D  "carAccel"
0071: 22
0072: 3A 00 03     "raceType"
0075: 51
```

Faithful surface:

```text
((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL))((raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel)) -- 0x0075
```

Decision:
- family 1 is still one mixed packet
- comparison carry and `STG` payload are not cleanly split by the strict local bytes

## Family 2: split compare head then payload arm

Raw compare-head window:

```text
00D2: 0B
00D3: 41 35 00 03  "raceType"
00D7: 3D 00 07     "HT"
00DA: 12 07 00 17  branch
```

Raw payload-arm window:

```text
00DE: 3B 00 0A     "STG"
00E1: 39
00E2: 41 35 00 0B  "s"
00E6: 41 35 00 0C  "carV"
00EA: 41 35 00 0D  "carAccel"
00EE: 3A 00 03     "raceType"
00F1: 51
```

Faithful surface:

```text
-- 0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)] -- 0x00D2
if not (raceType = HT) then -- jump 23 -- 0x00DA
STG(s, carV, carAccel) -- 0x00F1
```

Decision:
- family 2 is split locally into:
  - compare head at `0x00D2`
  - branch gate at `0x00DA`
  - later clean `STG` payload arm ending at `0x00F1`

## Family 3: split compare head then payload arm

Raw compare-head window:

```text
0115: 0B
0116: 41 35 00 03  "raceType"
011A: 3D 00 07     "HT"
011D: 12 07 00 23  branch
```

Raw payload-arm window:

```text
0121: 3B 00 10     "INT"
0124: 39
0125: 41 35 00 0B  "s"
0129: 41 35 00 0C  "carV"
012D: 41 35 00 0D  "carAccel"
0131: 3B 00 11     "_system"
0134: 35 00 12     "milliseconds"
0137: 41 35 00 0F  "timeAnchor"
013B: 1C
013C: 83 3A 00     arg=14848
013F: 04
0140: 51
```

Faithful surface:

```text
-- 0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)] -- 0x0115
if not (raceType = HT) then -- jump 35 -- 0x011D
-- 0x04 unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848] -- 0x013F
```

Decision:
- family 3 is also split locally into:
  - compare head at `0x0115`
  - branch gate at `0x011D`
  - later unresolved `INT` payload arm packet ending at `0x013F`

Conclusion:
- new ownership/shape evidence exists even without new symbol recovery
- family 1 should stay modeled as one mixed packet
- families 2 and 3 should stay modeled as split compare-head families with later payload arms
- this distinction is strict-byte-backed and should guide any future recovery in block `11992`
