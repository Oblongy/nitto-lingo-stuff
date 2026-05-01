# Lscr-102 Pass 23: Hotspot Carry Tracer

Purpose:
- Extend `Lscr-102.pass22-hotspot-stack-trace-windows.md` with stricter carry-packet ownership for the three remaining hotspot blocks:
  - block `14012` / `RaceEngine_runFrame`
  - block `37252` / `RaceEngine_createMd5Hash`
  - block `43264` / `RaceEngine_buildMd5Source`
- Keep three evidence classes separate:
  - raw block-scoped rows from `Lscr-102.annotated-disasm.md`
  - block-local name rows from the matching `pass-block*.md` table
  - stricter surface rows from `Lscr-102.block08-islands.js`, `Lscr-102.blocks.lingo`, and `Lscr-102.blocks.js`
- Keep `Lscr-102.rebuilt-faithful-full.js` as broader contrast only. It can show a wider split, but it is not strict proof of a readable boundary.

Carry-trace rules:
- A "carry packet" here means a contiguous raw row cluster that the stricter surface still keeps in-band around the hotspot.
- A "named sink" is only accepted when the raw block rows or the stricter surface already name it directly.
- Residue-like rows are not removable unless the strict block surface proves they sit outside the carry packet.

## Block 14012 (`RaceEngine_runFrame`)

Stop-map source:
- `Lscr-102.pass22-hotspot-stack-trace-windows.md`

Handler-local sources:
- raw rows: `Lscr-102.annotated-disasm.md:3725-3748`, `:3790-3809`
- name rows: `Lscr-102.pass-block14012-table.md:175-179`
- stricter surface rows: `Lscr-102.block08-islands.js:2970-3019`
- broader contrast only: `Lscr-102.rebuilt-faithful-full.js:1508-1515`

Table names in scope:

```text
id 143 = INT
id 145 = KDONE
id 147 = RINT
```

### Carry packet A: `0x112D..0x115C`

Raw rows:

```text
112D: 35 00 65     op_35 arg=101 ; "rt"
1130: 41           op_41
1131: 35 00 01     op_35 arg=1 ; "c1"
1134: 22           op_22
1135: 13 07 00 23  op_13 branch? target/imm=35
1139: 3B 00 8F     op_3B arg=143 ; "INT"
113C: 39           op_39
113D: 41           op_41
113E: 35 00 57     op_35 arg=87 ; "s"
1141: 41           op_41
1142: 35 00 0C     op_35 arg=12 ; "carV"
1145: 41           op_41
1146: 35 00 0E     op_35 arg=14 ; "carAccel"
1149: 3B 00 04     op_3B arg=4 ; "_system"
114C: 35 00 05     op_35 arg=5 ; "milliseconds"
114F: 41           op_41
1150: 35 00 90     op_35 arg=144 ; "timeAnchor"
1153: 1C           op_1C
1154: 83 3A 00     op_83 arg=14848
1157: 04           op_04
1158: 51           op_51
1159: 3B 00 91     op_3B arg=145 ; "KDONE"
115C: 39           op_39
```

Strict surface alignment:

```text
island_383  0x112C..0x1139  branch    if not (/*stack*/ <> (rt mod c1)) then goto 0x115C
island_384  0x1139..0x1159  unresolved 0x04 stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848]
island_384  0x1158          expr      1.4848
island_384  0x1159          stackTail INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)
island_385  0x1159..0x115C  stackTail KDONE
```

Broader contrast only:

```text
0x1135  branch if not (/*stack*/ <> (rt mod c1)) then -- jump 35
0x1157  unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848]
```

Carry tracer:
- The strict guard packet ends at `0x1135`. The stricter surface does not name its lhs.
- `0x1139..0x1158` stays an unresolved in-band carry packet rooted in `INT`, `s`, `carV`, `carAccel`, `_system`, `milliseconds`, and `timeAnchor`.
- `KDONE` begins only at the later named row `0x1159 op_3B arg=145 ; "KDONE"`.
- Safe ownership boundary: `KDONE` is a post-target named carry packet, not strict proof for the lhs of the earlier `0x1135` guard.

### Carry packet B: `0x11BD..0x11DC`

Raw rows:

```text
11BD: 35 00 65     op_35 arg=101 ; "rt"
11C0: 41           op_41
11C1: 35 00 01     op_35 arg=1 ; "c1"
11C4: 22           op_22
11C5: 13 07 00 17  op_13 branch? target/imm=23
11C9: 3B 00 93     op_3B arg=147 ; "RINT"
```

Strict surface alignment:

```text
island_390  0x11BC..0x11C9  branch  if not (/*stack*/ <> (rt mod c1)) then goto 0x11E0
island_391  0x11C9..0x11DD  expr    RINT(s, carV, carAccel)
```

Broader contrast only:

```text
0x11C5  branch if not (KDONE <> (rt mod c1)) then -- jump 23
0x11DC  expr   RINT(s, carV, carAccel)
```

Carry tracer:
- The strict guard packet again ends at `0x11C5`, and the stricter surface still leaves the lhs as `/*stack*/`.
- The next named post-guard packet begins at `0x11C9` with `RINT`.
- The broader faithful surface carries `KDONE` into `0x11C5`, but the stricter island split does not prove that carry. Keep the `KDONE` vs `/*stack*/` contradiction explicit.

## Block 37252 (`RaceEngine_createMd5Hash`)

Stop-map source:
- `Lscr-102.pass22-hotspot-stack-trace-windows.md`

Handler-local sources:
- raw rows: `Lscr-102.annotated-disasm.md:6325-6347`
- name rows: `Lscr-102.pass-block37252-table.md:57-68`
- stricter surface rows: `Lscr-102.blocks.lingo:2330`, `:2384-2401`
- broader contrast only: `Lscr-102.rebuilt-faithful-full.js:1988-1995`

Table names in scope:

```text
id 24 = startLightTimer
id 29 = lightTO1
id 31 = timeout
id 34 = symbol
id 35 = runLight
```

### Carry packet: `0x0161..0x018B`

Raw rows:

```text
0161: 1B           op_1B
0162: 3B 00 22     op_3B arg=34 ; "symbol"
0165: 39           op_39
0166: 3D 00 23     op_3D arg=35 ; "runLight"
0169: 3A 00 01     op_3A arg=1 ; "c0"
016C: 41           op_41
016D: 23           op_23
016E: 00           op_00
016F: 04           op_04
0170: 36 00 1D     op_36 arg=29 ; "lightTO1"
0173: 51           op_51
0174: 06 00 7B     op_06 jump?/imm=123
0177: 41           op_41
0178: 35 00 1B     op_35 arg=27 ; "btd"
017B: 41           op_41
017C: 35 00 01     op_35 arg=1 ; "c0"
017F: 12 07 00 13  op_12 branch? target/imm=19
0183: 41           op_41
0184: 35 00 18     op_35 arg=24 ; "startLightTimer"
0187: 39           op_39
0188: 3D 00 24     op_3D arg=36 ; "b"
018B: 3E           op_3E
```

Strict surface alignment:

```text
null.lightTO1
// goto @4898
// [0x011c] op_0f
null.lightTO1.forget()()
null
stagingLightPos1 = null.c0
?
// [0x015b] op_04
(((p % null.btd) * null.c1000) + (null.c1000 / null.startLightTimer))(runLight)
null
lightTO1 = null
?
// goto @354
// [0x0162] op_7b
null.btd
if (null.c0) { /* else goto @386 */ }
?(b, false)
```

Broader contrast only:

```text
0x0145  expr       lightTO1
0x016F  unresolved stack=[lightDelayTO, VOID_SENTINEL, lightDelayTO, (raceType = RIVAL), (raceType = CTQ), lightTO1, VOID_SENTINEL, timeout, ((((p mod btd) * c1000) + (c1000 / c2)) ^ symbol(runLight))]
0x0170  assign     lightTO1 = ((((p mod btd) * c1000) + (c1000 / c2)) ^ symbol(runLight))
0x0173  expr       timeout
0x0174  unresolved jump 123
```

Carry tracer:
- The strict pre-sink packet is the raw build cluster `0x0161..0x016E`; it names `symbol` and `runLight`, but not `timeout`.
- The minimal strict named sink is `0x0170 op_36 arg=29 ; "lightTO1"`.
- `0x0173 op_51` and `0x0174 op_06 jump 123` remain in-band after the named sink. They are not proven standalone fake rows.
- The stricter surface compresses the whole handoff into an unnamed packet around `// [0x015b] op_04`, the formula row, `lightTO1 = null`, and the following jump/branch markers.
- The broader faithful split at `0x0145` (`lightTO1`) and `0x0173` (`timeout`) remains contrast only. The strict block surface does not independently prove either as a standalone readable executable row.

## Block 43264 (`RaceEngine_buildMd5Source`)

Stop-map source:
- `Lscr-102.pass22-hotspot-stack-trace-windows.md`

Handler-local sources:
- raw rows: `Lscr-102.annotated-disasm.md:7917-7969`
- name rows: `Lscr-102.pass-block43264-table.md:125-133`
- stricter surface rows: `Lscr-102.blocks.lingo:2927-2937`
- broader contrast only: `Lscr-102.rebuilt-faithful-full.js:2281-2295`

Table names in scope:

```text
id 92  = nogood
id 93  = goodCounterRT
id 94  = goodCounterET
id 95  = badCounterRT
id 96  = lagPercent
id 97  = badCounterET
id 98  = xtra
id 99  = caluMD5
id 100 = getStringMD5
```

### Carry packet A: `0x05F1..0x05F5`

Raw rows:

```text
05F1: 57 00 00     op_57 arg=0 ; ""
05F4: 51           op_51
05F5: 06 00 4A     op_06 jump?/imm=74
```

Strict surface alignment:

```text
// goto @1582
id_0 = (? + nogood)
?
```

Broader contrast only:

```text
0x05F1  assign EMPTY = (EMPTY + nogood)
0x05F4  expr   (goodCounterRT = VOID)
0x05F5  unresolved jump 74
```

Carry tracer:
- `0x05F4..0x05F5` is still in-band with the preceding `nogood` append packet.
- The stricter surface does not prove `0x05F4` is removable residue outside the gate.
- Safe boundary: keep `0x05F4..0x05F5` as the minimal unresolved gate core.

### Carry packet B: `0x063E..0x0663`

Raw rows:

```text
063E: 51           op_51
063F: 3B 00 62     op_3B arg=98 ; "xtra"
0642: 39           op_39
0643: 3D 00 63     op_3D arg=99 ; "caluMD5"
0646: 23           op_23
0647: 00           op_00
0648: 01           op_01
0649: 57 00 02     op_57 arg=2 ; ","
064C: 51           op_51
064D: 56 00 02     op_56 arg=2 ; ","
0650: 35 00 64     op_35 arg=100 ; "getStringMD5"
0653: 39           op_39
0654: 56 00 00     op_56 arg=0 ; ""
0657: 3A 00 01     op_3A arg=1 ; "stockRedLine"
065A: 57 00 00     op_57 arg=0 ; ""
065D: 51           op_51
065E: 42           op_42
065F: 51           op_51
0660: 56 00 00     op_56 arg=0 ; ""
0663: 05           op_05
```

Strict surface alignment:

```text
((null.goodCounterET + null.badCounterET) >= 1982773)
null.badCounterET
// goto @1582
id_0 = (? + nogood)
?
, = caluMD5
?
id_0 = ,.getStringMD5()(id_0)
?
// [0x064f] op_05
id_0
```

Broader contrast only:

```text
0x063E  expr   (goodCounterET + badCounterET)
0x0649  expr   "," = (xtra ^ caluMD5)
0x064C  expr   badCounterET
0x065A  assign EMPTY = getStringMD5(EMPTY)
0x0663  expr   EMPTY
```

Carry tracer:
- The stricter surface does preserve a real pre-tail compare row before the old `0x064f` stop:
  - `((null.goodCounterET + null.badCounterET) >= 1982773)`
  - `null.badCounterET`
- Even with that stronger anchor, the strict surface still compresses the rest of the tail into:
  - `, = caluMD5`
  - `id_0 = ,.getStringMD5()(id_0)`
  - `?`
  - `// [0x064f] op_05`
  - `id_0`
- The raw rows name `xtra`, `caluMD5`, and `getStringMD5` inside the tail packet, but they do not isolate a strict standalone executable row for the faithful-only `badCounterET` / `EMPTY` splits.
- Safe boundary: the strict tail packet reaches through `0x0663` in raw bytes, but the readable strict surface still stops at the compressed `0x064f` marker packet plus trailing `id_0`.

## Current carry-trace boundary

- No new readable lift is proved by this pass alone.
- `14012` still ends in an explicit strict-vs-broader contradiction: `KDONE` exists in the block, but the stricter island guard rows keep the lhs unnamed.
- `37252` still ends in a strict named sink at `0x0170` and in-band residue/jump rows at `0x0173..0x0174`; `timeout` remains broader-only at that exact seam.
- `43264` now has a stronger strict anchor before the tail packet, but the strict readable surface still compresses the `xtra/caluMD5/getStringMD5` handoff and does not prove the faithful-only splits as standalone executable rows.
