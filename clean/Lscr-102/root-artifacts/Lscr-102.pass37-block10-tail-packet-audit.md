## Lscr-102 Pass 37: Block 34244 tail packet audit

Scope:
- Script: `Lscr-102`
- Handler block: `34244` (`RaceEngine_lookupTorque`)
- Tail window: `0x0074..0x0081`

Goal:
- Re-check whether the staged standalone `0.8758` row is executable.
- Decide whether the tail should remain a named assignment candidate or be pulled back to a stricter packet floor.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102.pass-block34244-table.md`

Raw tail:

```text
0074: 35 00 04     op_35 arg=4 ; "posTq"
0077: 41           op_41
0078: 35 00 09     op_35 arg=9 ; "c200"
007B: 1B           op_1B
007C: 83 22 36     op_83 arg=8758
007F: 00           op_00
0080: 08           op_08
0081: 51           op_51
```

Surface comparison:
- `blocks.lingo` keeps:
  - `(null.posTq + null.c200)`
  - `2242048`
- `rebuilt-faithful-full.js` keeps:
  - `0x08 unresolved stack=[(posTq + c200), 0.8758]` at `0x0080`
  - `0.8758` as a trailing expr row

Ownership decision:
- `posTq = tqArray[parseInt((rpm / c100))]` at `0x006E` remains safe.
- The tail after that does **not** expose a clean named sink.
- The staged standalone `0.8758` row is too strong:
  - the raw constant belongs inside the same unresolved tail packet
  - `0x0081` is only the final `op_51` terminator
- `pass-block34244-table.md` still proves payload id `8 = negTq`, but the raw tail window still does not expose a store to that slot.

Accepted floor:
- keep the safe `posTq` lookup row
- replace the staged `0.8758` line with one explicit unresolved tail packet:
  - `[(posTq + c200), 0.8758, op_08]`
- do not promote `negTq = posTq + c200`
- do not keep `0.8758` as a standalone executable row

Conclusion:
- Block `34244` is stricter now:
  - one safe named sink at `0x006E`
  - one unresolved unsunk tail packet at `0x0074..0x0081`
