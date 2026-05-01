## Lscr-102 pass42: block 7 byte-window audit

Handler:
- `RaceEngine_stageDistance`

Source files:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

Focus window:
- block `11992`
- raw `0x0028..0x0075`

Raw bytes:

```text
0028: 41           op_41
0029: 35 00 03     op_35 arg=3 ; "raceType"
002C: 3D 00 04     op_3D arg=4 ; "KOTH"
002F: 12 44 00 21  op_12 branch? target/imm=33
0033: 41           op_41
0034: 35 00 03     op_35 arg=3 ; "raceType"
0037: 3D 00 05     op_3D arg=5 ; "RIVAL"
003A: 12 44 00 16  op_12 branch? target/imm=22
003E: 41           op_41
003F: 35 00 03     op_35 arg=3 ; "raceType"
0042: 3D 00 06     op_3D arg=6 ; "TEAMRIVAL"
0045: 12 44 00 0B  op_12 branch? target/imm=11
0049: 41           op_41
004A: 35 00 03     op_35 arg=3 ; "raceType"
004D: 3D 00 07     op_3D arg=7 ; "HT"
0050: 12 07 00 3C  op_12 branch? target/imm=60
0054: 41           op_41
0055: 35 00 08     op_35 arg=8 ; "gearValue"
0058: 41           op_41
0059: 35 00 09     op_35 arg=9 ; "c0"
005C: 14 07 00 1C  op_14 branch? target/imm=28
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
```

Strict block surface:

```text
?(?, STG(), ((null.s % null.carV) % null.carAccel))
```

Faithful corroboration:

```text
((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL))((raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel)) -- 0x0075
```

Decision:
- keep the promoted compact compare branches above this window:
  - `if not (raceType = RIVAL) then -- jump 22 marker 0x44 -- 0x003A`
  - `if not (raceType = TEAMRIVAL) then -- jump 11 marker 0x44 -- 0x0045`
  - `if not (raceType = HT) then -- jump 60 -- 0x0050`
  - `if not (gearValue < c0) then -- jump 28 -- 0x005C`
- keep the unresolved packet line:
  - `?(unresolved_callhead_0x0075, STG, ((s mod carV) mod carAccel)) -- 0x0075`

Why:
- the compact `0x44` compare branches are locally visible and already promoted safely
- the tail at `0x0075` is still not a normal first-argument call; strict block surfaces keep it as a call-head packet
- the faithful surface exposes more carried boolean/callee material, but not enough strict block-local ownership to promote that head into executable source

What remains unresolved:
- the leftmost carried boolean/callee source at `0x0075`
- whether the faithful stack head is callable structure or boolean residue before the final `STG` packet closes
