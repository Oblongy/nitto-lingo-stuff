## Lscr-102 Pass 38: Block 37252 CT handoff split

Scope:
- Script: `Lscr-102`
- Handler block: `37252` (`RaceEngine_createMd5Hash`)
- Narrow window: `0x0161..0x018B`

Goal:
- Split the CT handoff into the smallest byte-backed unresolved packets.
- Preserve more of the proved payload pieces without guessing final constructor/call semantics.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.pass23-hotspot-carry-tracer.md`
- `Lscr-102.pass23-strict-carry-tracer.md`
- `Lscr-102.blocks.js`

Raw window:

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

Strict carry decisions:

Packet A: `0x0161..0x0174`
- accepted pieces:
  - built delay expression rooted in `p`, `btd`, `c1000`, `c2`
  - `symbol(runLight)`
  - named sink `lightTO1` at `0x0170`
  - in-band terminator/jump tail at `0x0173..0x0174`
- not accepted:
  - a final readable `timeout(...).new(...)` constructor line

Packet B: `0x0177..0x018B`
- accepted pieces:
  - branch compare uses `btd` and `c0`
  - `startLightTimer`
  - argument `b`
- not accepted:
  - a cleaner final `startLightTimer(b, ...)` line

Accepted floor:
- keep packet A and packet B explicit as unresolved packet rows
- do not keep only prose comments when the byte-backed payload pieces are already known
- do not promote constructor/call semantics beyond the strict packet floor
