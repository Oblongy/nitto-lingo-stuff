## Lscr-102 Pass 57: Block 37252 callhead/combiner audit

Scope:
- Script: `Lscr-102`
- Handler block: `37252` (`RaceEngine_createMd5Hash`)
- Narrow windows:
  - `0x0183..0x018B`
  - `0x01E2..0x01EA`

Goal:
- Classify the in-packet `op_39` and `op_3E` sites one level deeper than the older generic `callhead combiner` / `terminal consumer` labels.
- Preserve exact offset ownership and named-token boundaries.
- Do not promote final `startLightTimer(...)` call semantics.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.pass-block37252-table.md`
- `Lscr-102.pass53-block16-startLightTimer-operand-audit.md`
- `Lscr-102.pass55-block16-sink-packet-audit.md`
- `Lscr-102.pass56-block16-ct-gate-packet-audit.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`

Relevant payload names from `pass-block37252-table.md`:
- id `24`: `startLightTimer`
- id `25`: `p`
- id `36`: `b`

Raw family 1 later packet:

```text
0183: 41           op_41
0184: 35 00 18     op_35 arg=24 ; "startLightTimer"
0187: 39           op_39
0188: 3D 00 24     op_3D arg=36 ; "b"
018B: 3E           op_3E
018C: 3A 00 02     op_3A arg=2 ; "goodCounterRT"
```

Raw family 2 later packet:

```text
01E2: 41           op_41
01E3: 35 00 18     op_35 arg=24 ; "startLightTimer"
01E6: 39           op_39
01E7: 3D 00 19     op_3D arg=25 ; "p"
01EA: 3E           op_3E
01EB: 3A 00 02     op_3A arg=2 ; "goodCounterRT"
```

Packet boundary decision:
- `0x0183..0x018B` is one complete later build packet.
- `0x01E2..0x01EA` is one complete later build packet.
- `0x018C` and `0x01EB` begin the next packet and do not belong to these build packets.

Deeper role split for family 1:
- seed / inherited callable base:
  - `0x0183`
  - `op_41`
- named callable token load:
  - `0x0184..0x0186`
  - `op_35 arg=24 ; "startLightTimer"`
- in-band callhead-to-operand combiner boundary:
  - `0x0187`
  - `op_39`
- local operand token load:
  - `0x0188..0x018A`
  - `op_3D arg=36 ; "b"`
- terminal consume/emit boundary:
  - `0x018B`
  - `op_3E`

Deeper role split for family 2:
- seed / inherited callable base:
  - `0x01E2`
  - `op_41`
- named callable token load:
  - `0x01E3..0x01E5`
  - `op_35 arg=24 ; "startLightTimer"`
- in-band callhead-to-operand combiner boundary:
  - `0x01E6`
  - `op_39`
- local operand token load:
  - `0x01E7..0x01E9`
  - `op_3D arg=25 ; "p"`
- terminal consume/emit boundary:
  - `0x01EA`
  - `op_3E`

What is newly tighter here:
- `op_39` is stricter than a generic opaque combiner.
  - It sits exactly between the named callable token load and the single local operand token load in both sibling packets.
  - At this local layer it is safest to classify it as a callhead-to-operand combiner boundary.
- `op_3E` is stricter than a generic opaque consumer.
  - It appears only after the single local operand token load and immediately before the next packet begins.
  - At this local layer it is safest to classify it as a terminal consume/emit boundary for the built callhead packet.

Sibling-shape proof:
- Both later packets are exact siblings:
  - `op_41`
  - named `startLightTimer` token
  - `op_39`
  - one local operand token (`b` or `p`)
  - `op_3E`
- The only proven local difference is the final operand token:
  - family 1 uses `b`
  - family 2 uses `p`

Corroboration from sibling surfaces:
- `Lscr-102.blocks.lingo` and `Lscr-102.blocks.js` preserve these windows as separate from the earlier sink packets and separate from the following `goodCounterRT` packet family.
- Those surfaces corroborate packet separation only.
- They do not narrow `op_39` into a named method-bind/property-bind form, and they do not narrow `op_3E` into a proved argument-count or default-argument consumer.

What remains unresolved:
- `op_39` is not yet safe as any narrower semantic label than an in-band callhead-to-operand combiner boundary.
  - This pass does not prove whether it binds a receiver, injects an implicit argument slot, or merges prior carried state in a more specific way.
- `op_3E` is not yet safe as any narrower semantic label than a terminal consume/emit boundary.
  - This pass does not prove explicit argument count, explicit `VOID` insertion, or the final readable `startLightTimer(x, y)` shape.
- `op_41` remains unresolved as the leading seed/inherited callable base byte in both packets.
- No standalone executable row for `startLightTimer`, `b`, or `p` is justified from these narrow windows alone.
- No broader `startLightTimer(b, VOID)` or `startLightTimer(p, VOID)` rendering is promoted.

Conclusion:
- yes, the two later `startLightTimer` build packets can be tightened one level deeper at the `op_39` / `op_3E` sites.
- the safe deeper floor is:
  - inherited callable base
  - named callable token
  - callhead-to-operand combiner boundary
  - local operand token
  - terminal consume/emit boundary
- final call semantics remain unresolved at this strict local layer.
