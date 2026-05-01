## Lscr-102 Pass 55: Block 37252 sink-packet audit

Scope:
- Script: `Lscr-102`
- Handler block: `37252` (`RaceEngine_createMd5Hash`)
- Narrow windows:
  - `0x016F..0x0173`
  - `0x01DD..0x01E1`

Goal:
- Classify the two CT sink packets one level deeper into local role groups.
- Keep the sink-side packets separate from the later `startLightTimer` build packets.
- Do not promote constructor, timeout, or call semantics beyond what these exact bytes own.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.pass-block37252-table.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.pass52-block16-ct-packet-ownership-tightening.md`
- `Lscr-102.pass53-block16-startLightTimer-operand-audit.md`

Relevant payload names from `pass-block37252-table.md`:
- id `29`: `lightTO1`
- id `37`: `lightTO2`

Raw family 1 sink packet:

```text
016F: 04           op_04
0170: 36 00 1D     op_36 arg=29 ; "lightTO1"
0173: 51           op_51
0174: 06 00 7B     op_06 jump?/imm=123
```

Local role grouping for `0x016F..0x0173`:
- packet seed / unresolved constructor-consumer head:
  - `0x016F`
  - `op_04`
- named sink token:
  - `0x0170..0x0172`
  - `op_36 arg=29 ; "lightTO1"`
- packet terminator:
  - `0x0173`
  - `op_51`

Boundary decision for family 1:
- `0x016F..0x0173` is the whole sink packet.
- `0x0174` does not belong to the sink packet.
- `0x0174..0x0176` is the next jump packet, as already separated in `pass52`.

Raw family 2 sink packet:

```text
01DD: 04           op_04
01DE: 36 00 25     op_36 arg=37 ; "lightTO2"
01E1: 51           op_51
01E2: 41           op_41
```

Local role grouping for `0x01DD..0x01E1`:
- packet seed / unresolved constructor-consumer head:
  - `0x01DD`
  - `op_04`
- named sink token:
  - `0x01DE..0x01E0`
  - `op_36 arg=37 ; "lightTO2"`
- packet terminator:
  - `0x01E1`
  - `op_51`

Boundary decision for family 2:
- `0x01DD..0x01E1` is the whole sink packet.
- `0x01E2` does not belong to the sink packet.
- `0x01E2..0x01EA` is the next `startLightTimer` build packet, as already separated in `pass52` and decomposed in `pass53`.

Shared shape conclusion:
- the two sink packets are exact sibling shapes:
  - `op_04`
  - one named sink token via `op_36`
  - final `op_51`
- the only proven local difference is the sink token itself:
  - family 1 writes toward `lightTO1`
  - family 2 writes toward `lightTO2`

Corroboration from sibling surfaces:
- `Lscr-102.blocks.lingo` keeps the same sink-side distinction:
  - `lightTO1 = null` around the first family
  - `lightTO2 = null` around the second family
- that corroboration is useful for packet identity only.
- it does not narrow the exact semantics of `op_04` inside these two sink windows.

Remaining ambiguity:
- `op_04` remains unresolved at this local sink-packet layer.
- this pass does not prove whether `op_04` is:
  - a timeout constructor result,
  - a setter/value consumer,
  - or another narrower sink-side combine form.
- the sink packets do not expose a block-local explicit rhs token inside these exact windows.
- any broader `lightTO1 = ...` or `lightTO2 = ...` rendering still depends on adjacent packets and corroborating surfaces outside `0x016F..0x0173` and `0x01DD..0x01E1`.

Conclusion:
- yes, both sink packets can be classified one level deeper.
- the safe deeper floor for each is:
  - unresolved seed / head byte
  - named sink token
  - terminator
- no constructor semantics were proved from these exact sink windows alone.
