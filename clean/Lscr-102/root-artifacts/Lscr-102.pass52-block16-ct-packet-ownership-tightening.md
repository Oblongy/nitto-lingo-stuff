## Lscr-102 Pass 52: Block 37252 CT packet ownership tightening

Scope:
- Script: `Lscr-102`
- Handler block: `37252` (`RaceEngine_createMd5Hash`)
- Narrow windows:
  - family 1: `0x0170..0x018B`
  - family 2: `0x01DE..0x01EA`

Goal:
- Gather stricter local ownership/shape evidence for the CT handoff families.
- Decide whether the `lightTO*` sink packets and later `startLightTimer` packets split more tightly than the earlier pass38/pass39 packet rows.
- Do not promote constructor or call semantics beyond what the local block surfaces own.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.pass-block37252-table.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`
- `Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102.reconstructed.lingo`

Relevant payload names from `pass-block37252-table.md`:
- id `24`: `startLightTimer`
- id `25`: `p`
- id `27`: `btd`
- id `29`: `lightTO1`
- id `31`: `timeout`
- id `32`: `c1000`
- id `33`: `c2`
- id `34`: `symbol`
- id `35`: `runLight`
- id `36`: `b`
- id `37`: `lightTO2`

Raw family 1 window:

```text
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

Strict family 1 split:
- sink packet: `0x016F..0x0173`
  - `op_04`
  - `op_36 arg=29 ; "lightTO1"`
  - `op_51`
- separator jump: `0x0174..0x0176`
  - `op_06 jump?/imm=123`
- gate packet: `0x0177..0x0182`
  - `btd`
  - `c0`
  - `op_12 branch? target/imm=19`
- later `startLightTimer` build packet: `0x0183..0x018B`
  - `op_41`
  - `op_35 arg=24 ; "startLightTimer"`
  - `op_39`
  - `op_3D arg=36 ; "b"`
  - `op_3E`

Why this is stricter than pass38:
- pass38 kept `0x0161..0x0174` as one unresolved sink-side packet and `0x0177..0x018B` as one later packet.
- the local disasm proves the sink itself closes at `0x0173`, then a real jump begins at `0x0174`, then a separate gate packet begins at `0x0177`.
- the `startLightTimer` build itself still does **not** split smaller on the strict local surface; `0x0183..0x018B` is its current floor.

Raw family 2 window:

```text
01DD: 04           op_04
01DE: 36 00 25     op_36 arg=37 ; "lightTO2"
01E1: 51           op_51
01E2: 41           op_41
01E3: 35 00 18     op_35 arg=24 ; "startLightTimer"
01E6: 39           op_39
01E7: 3D 00 19     op_3D arg=25 ; "p"
01EA: 3E           op_3E
```

Strict family 2 split:
- sink packet: `0x01DD..0x01E1`
  - `op_04`
  - `op_36 arg=37 ; "lightTO2"`
  - `op_51`
- later `startLightTimer` build packet: `0x01E2..0x01EA`
  - `op_41`
  - `op_35 arg=24 ; "startLightTimer"`
  - `op_39`
  - `op_3D arg=25 ; "p"`
  - `op_3E`

Why this is stricter than pass39:
- pass39 started the sink-side packet much earlier at `0x01B6`.
- inside the user-requested narrow CT handoff window, the local disasm shows the actual sink packet starts only at `0x01DD`.
- the later `startLightTimer` build packet is already at its smallest strict local floor: `0x01E2..0x01EA`.

Corroboration from sibling surfaces:
- `rebuilt-faithful-full.js` block `37252` keeps:
  - `lightTO1` sink at `0x0170`
  - `startLightTimer(b, VOID)` surfaced later at `0x018F`
  - `lightTO2` sink at `0x01DE`
  - `startLightTimer(p, VOID)` surfaced later at `0x01EE`
- `blocks.lingo` / `blocks.js` also keep the two families separated into a `lightTO*` sink side and a later `?(b, false)` / `?(p, false)` side, even though those surfaces are noisier about the exact boundaries.

Conclusion:
- yes, a stricter split was found
- family 1 now tightens to:
  - sink `0x016F..0x0173`
  - jump `0x0174..0x0176`
  - gate `0x0177..0x0182`
  - `startLightTimer` build `0x0183..0x018B`
- family 2 now tightens to:
  - sink `0x01DD..0x01E1`
  - `startLightTimer` build `0x01E2..0x01EA`
- no constructor semantics were proved
- no final readable `startLightTimer(..., ...)` call semantics were proved beyond those build packets
