## Lscr-102 Pass 53: Block 37252 startLightTimer operand audit

Scope:
- Script: `Lscr-102`
- Handler block: `37252` (`RaceEngine_createMd5Hash`)
- Narrow windows:
  - `0x0183..0x018B`
  - `0x01E2..0x01EA`

Goal:
- Decompose the later `startLightTimer` build packets one level deeper into local operand roles.
- Preserve exact offset ownership and opcode-role groupings.
- Do not promote final call semantics beyond what the local packet bytes own.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.pass-block37252-table.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`
- `Lscr-102.pass52-block16-ct-packet-ownership-tightening.md`

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

Local role grouping for `0x0183..0x018B`:
- receiver/base seed:
  - `0x0183`
  - `op_41`
- named callee token:
  - `0x0184..0x0186`
  - `op_35 arg=24 ; "startLightTimer"`
- callhead combiner:
  - `0x0187`
  - `op_39`
- local operand token:
  - `0x0188..0x018A`
  - `op_3D arg=36 ; "b"`
- terminal consumer:
  - `0x018B`
  - `op_3E`

Packet boundary decision for family 1:
- `0x0183..0x018B` is the entire later `startLightTimer` build packet.
- `0x018C` does not belong to this packet.
- The next packet begins immediately at `0x018C` with `op_3A arg=2 ; "goodCounterRT"`.

Why this is stricter than pass52:
- pass52 correctly split the later packet as `0x0183..0x018B`, but left it as one undifferentiated build packet.
- the local bytes support one deeper role split:
  - one base/receiver seed byte
  - one named callee load
  - one combiner byte
  - one local operand load
  - one terminal consumer byte

Raw family 2 later packet:

```text
01E2: 41           op_41
01E3: 35 00 18     op_35 arg=24 ; "startLightTimer"
01E6: 39           op_39
01E7: 3D 00 19     op_3D arg=25 ; "p"
01EA: 3E           op_3E
01EB: 3A 00 02     op_3A arg=2 ; "goodCounterRT"
```

Local role grouping for `0x01E2..0x01EA`:
- receiver/base seed:
  - `0x01E2`
  - `op_41`
- named callee token:
  - `0x01E3..0x01E5`
  - `op_35 arg=24 ; "startLightTimer"`
- callhead combiner:
  - `0x01E6`
  - `op_39`
- local operand token:
  - `0x01E7..0x01E9`
  - `op_3D arg=25 ; "p"`
- terminal consumer:
  - `0x01EA`
  - `op_3E`

Packet boundary decision for family 2:
- `0x01E2..0x01EA` is the entire later `startLightTimer` build packet.
- `0x01EB` does not belong to this packet.
- The next packet begins immediately at `0x01EB` with `op_3A arg=2 ; "goodCounterRT"`.

Shared shape conclusion:
- the two later packets are exact sibling shapes:
  - `op_41`
  - `op_35 arg=24 ; "startLightTimer"`
  - `op_39`
  - one local operand token (`b` or `p`)
  - `op_3E`
- the only proven local difference is the final operand token:
  - family 1 uses `b`
  - family 2 uses `p`

Corroboration from sibling surfaces:
- `Lscr-102.blocks.lingo` and `Lscr-102.blocks.js` keep the sink side and later `?(b, false)` / `?(p, false)` side separate.
- those sibling surfaces do not expose a cleaner block-local decomposition inside the later packets than the five-role split above.

Remaining ambiguity:
- `op_41` is only classified here as a receiver/base seed role; this pass does not prove whether it is a specific runtime object, null seed, or other receiver form.
- `op_39` is only classified here as a callhead combiner role; this pass does not prove whether it is property-bind, method-bind, or another narrower callable preparation form.
- `op_3E` is only classified here as a terminal consumer; this pass does not prove final argument count, default-value insertion, or any broader readable `startLightTimer(..., ...)` call semantics.
- no explicit second local operand or explicit `VOID` token appears inside either narrow window.
- any broader `startLightTimer(b, VOID)` / `startLightTimer(p, VOID)` rendering remains external corroboration, not block-local proof for these exact offsets.

Conclusion:
- yes, the later `startLightTimer` build packets can be decomposed one level deeper.
- the safe deeper floor is a five-part role split for each packet:
  - base seed
  - named callee token
  - callhead combiner
  - single local operand token
  - terminal consumer
- no further readable call promotion is justified from `0x0183..0x018B` or `0x01E2..0x01EA` alone.
