## Lscr-102 pass45: block 7 second carried stack packet

Handler:
- `RaceEngine_stageDistance`

Source files:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`

Focus window:
- block `11992`
- raw `0x00D2..0x00F1`

Raw bytes:

```text
00D2: 0B           op_0B
00D3: 41           op_41
00D4: 35 00 03     op_35 arg=3 ; "raceType"
00D7: 3D 00 07     op_3D arg=7 ; "HT"
00DA: 12 07 00 17  op_12 branch? target/imm=23
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
```

Faithful corroboration:

```text
-- 0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)] -- 0x00D2
if not (raceType = HT) then -- jump 23 -- 0x00DA
STG(s, carV, carAccel) -- 0x00F1
```

Decision:
- preserve the carried comparison head at `0x00D2` as its own unresolved packet
- keep the later clean branch and `STG(s, carV, carAccel) -- 0x00F1` unchanged

Deliverable form:

```text
?(stack_packet_0x00D2, (((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)) -- 0x00D2
```

Why:
- unlike `0x0075`, this window does not prove a full mixed call-head packet before the `HT` branch
- the proven local payload here is the carried comparison head only
- the `STG` call itself belongs to the later clean arm ending at `0x00F1`

What remains unresolved:
- the leftmost `/*stack*/` source inside the carried head
- whether `op_0B` contributes only boolean-comparison carry or something wider before the `HT` branch
