## Lscr-102 Pass 39: Block 37252 lightTO2 handoff split

Scope:
- Script: `Lscr-102`
- Handler block: `37252` (`RaceEngine_createMd5Hash`)
- Narrow window: `0x0193..0x01EA`

Goal:
- Split the later `lightTO2` handoff into the smallest byte-backed unresolved packets.
- Preserve the proved payload pieces without promoting constructor/call semantics that the strict surface does not own.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.blocks.js`
- `Lscr-102.rebuilt-faithful-full.js`

Raw window:

```text
0193: 41           op_41
0194: 35 00 25     op_35 arg=37 ; "lightTO2"
0197: 83 27 3D     op_83 arg=10045
019A: 00           op_00
019B: 07 12 07     op_07 jump?/imm=4615
019E: 00           op_00
019F: 0F           op_0F
01A0: 41           op_41
01A1: 35 00 25     op_35 arg=37 ; "lightTO2"
01A4: 35 00 08     op_35 arg=8 ; "forget"
01A7: 39           op_39
01A8: 3A 00 00     op_3A arg=0 ; "timeAnchor"
01AB: 51           op_51
01AC: 41           op_41
01AD: 41           op_41
01AE: 35 00 01     op_35 arg=1 ; "c0"
01B1: 36 00 26     op_36 arg=38 ; "stagingLightPos2"
01B4: 51           op_51
01B5: 41           op_41
01B6: 3B 00 1F     op_3B arg=31 ; "timeout"
01B9: 39           op_39
01BA: 3D 00 1C     op_3D arg=28 ; "o"
01BD: 41           op_41
01BE: 35 00 1B     op_35 arg=27 ; "btd"
01C1: 41           op_41
01C2: 35 00 20     op_35 arg=32 ; "c1000"
01C5: 1D           op_1D
01C6: 41           op_41
01C7: 35 00 20     op_35 arg=32 ; "c1000"
01CA: 41           op_41
01CB: 35 00 21     op_35 arg=33 ; "c2"
01CE: 1E           op_1E
01CF: 1B           op_1B
01D0: 3B 00 22     op_3B arg=34 ; "symbol"
01D3: 39           op_39
01D4: 3D 00 23     op_3D arg=35 ; "runLight"
01D7: 3A 00 01     op_3A arg=1 ; "c0"
01DA: 41           op_41
01DB: 23           op_23
01DC: 00           op_00
01DD: 04           op_04
01DE: 36 00 25     op_36 arg=37 ; "lightTO2"
01E1: 51           op_51
01E2: 41           op_41
01E3: 35 00 18     op_35 arg=24 ; "startLightTimer"
01E6: 39           op_39
01E7: 3D 00 19     op_3D arg=25 ; "p"
01EA: 3E           op_3E
```

Strict carry decisions:

Packet A: `0x01B6..0x01E1`
- accepted pieces:
  - built delay expression rooted in `o`, `btd`, `c1000`, `c2`
  - `symbol(runLight)`
  - named sink `lightTO2` at `0x01DE`
  - in-band terminator at `0x01E1`
- not accepted:
  - a final readable `timeout(...).new(...)` constructor line

Packet B: `0x01E2..0x01EA`
- accepted pieces:
  - `startLightTimer`
  - argument `p`
- not accepted:
  - a cleaner final `startLightTimer(p, ...)` line

Conclusion:
- replace the old generic `?(p, false)` fallback with two explicit byte-backed unresolved packets
- keep constructor/call semantics unresolved
