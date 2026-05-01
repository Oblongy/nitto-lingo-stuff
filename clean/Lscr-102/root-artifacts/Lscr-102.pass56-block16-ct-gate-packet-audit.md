## Lscr-102 Pass 56: Block 37252 CT gate-packet audit

Scope:
- Script: `Lscr-102`
- Handler block: `37252` (`RaceEngine_createMd5Hash`)
- Narrow window:
  - `0x0177..0x0182`

Goal:
- Classify the CT gate packet one level deeper than the older single `btd / c0 / branch` label.
- Preserve exact offset ownership and named-token boundaries.
- Do not promote final branch semantics, predicate wording, or later `startLightTimer` call semantics.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.pass-block37252-table.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`
- `Lscr-102.pass52-block16-ct-packet-ownership-tightening.md`
- `Lscr-102.pass53-block16-startLightTimer-operand-audit.md`
- `Lscr-102.pass55-block16-sink-packet-audit.md`

Relevant payload names from `pass-block37252-table.md`:
- id `1`: `c0`
- id `27`: `btd`

Raw gate packet:

```text
0177: 41           op_41
0178: 35 00 1B     op_35 arg=27 ; "btd"
017B: 41           op_41
017C: 35 00 01     op_35 arg=1 ; "c0"
017F: 12 07 00 13  op_12 branch? target/imm=19
0183: 41           op_41
```

Packet boundary decision:
- `0x0177..0x0182` is the whole CT gate packet.
- `0x0183` does not belong to this gate packet.
- `0x0183..0x018B` is the next `startLightTimer` build packet already decomposed in `pass53`.

Local role grouping for `0x0177..0x0182`:
- first receiver/base seed:
  - `0x0177`
  - `op_41`
- first named token load:
  - `0x0178..0x017A`
  - `op_35 arg=27 ; "btd"`
- second receiver/base seed:
  - `0x017B`
  - `op_41`
- second named token load:
  - `0x017C..0x017E`
  - `op_35 arg=1 ; "c0"`
- branch-consumer head:
  - `0x017F..0x0182`
  - `op_12 branch? target/imm=19`

Why this is stricter than `pass52`:
- `pass52` correctly isolated `0x0177..0x0182` as a separate gate packet, but kept it as one undifferentiated `btd / c0 / branch` bundle.
- the local bytes support one deeper split:
  - one seed byte before `btd`
  - one seed byte before `c0`
  - then a separate `op_12` branch-consumer head
- this is the same style of deeper role decomposition used in `pass53` and `pass55`, but applied to the gate packet itself.

Corroboration from sibling surfaces:
- `Lscr-102.blocks.js` keeps the same local ingredients in the corresponding region:
  - `null.btd`
  - `if (null.c0) { /* else goto @386 */ }`
- that corroboration is useful for packet identity only.
- it does not narrow the exact role of either `op_41` seed byte or justify a cleaner readable predicate for `0x0177..0x0182`.

Remaining ambiguity:
- both `op_41` bytes remain unresolved at this local layer.
  - this pass only proves that they are distinct in-band seed/head bytes ahead of the two named token loads.
  - it does not prove whether either one is a receiver seed, duplicated stack carry, or another narrower runtime form.
- `op_12 branch? target/imm=19` is only safe as the exported branch-consumer head plus operand `19`.
  - this pass does not prove a readable predicate such as `if (btd ? c0)` or any final relational operator.
- no standalone executable `btd` row or standalone executable `c0` row is justified from this exact window alone.
- no later `startLightTimer` semantics belong to this packet; those begin only at `0x0183`.

Conclusion:
- yes, the CT gate packet `0x0177..0x0182` can be decomposed one level deeper.
- the safe deeper floor is:
  - seed byte
  - named `btd` load
  - second seed byte
  - named `c0` load
  - branch-consumer head
- no readable final predicate or branch semantics are proved from this exact window alone.
