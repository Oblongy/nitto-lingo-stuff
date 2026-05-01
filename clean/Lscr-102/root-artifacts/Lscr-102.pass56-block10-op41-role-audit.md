# Lscr-102 pass56: block10 `op_41` role audit

Handler: `RaceEngine_lookupTorque`  
Block: `34244`  
Target byte: `0x0077` `op_41`

## Goal

Determine whether the in-band `op_41` at `0x0077` can be given any stricter local role than generic operator scaffolding, without implying a `negTq` store target.

## Sources checked

- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block34244-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass50-block10-tail-shape-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block10-op08-sibling-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass53-block10-arith-suffix-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass55-block10-prefix-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

## Raw target window

From `annotated-disasm.md`, the relevant prefix is:

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

`pass-block34244-table.md` proves the block-local named vocabulary includes:

- id `4` = `posTq`
- id `8` = `negTq`
- id `9` = `c200`

## What the local stack surfaces already prove

The strict local floor preserved by `blocks.lingo`, `blocks.js`, `stack-faithful.lingo`, and `rebuilt-faithful-full.js` is:

```lingo
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
-- 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
```

And the broader strict block surface still isolates the left arithmetic item before the later unresolved consume site:

```lingo
// [0x006c] op_08
(null.posTq + null.c200)
```

So block-local evidence already proves that the `0x0074..0x007B` prefix builds the left stack item:

- `(posTq + c200)`

## Direct local role of `0x0077`

Inside this exact prefix, `op_41` at `0x0077` sits between:

- `0x0074..0x0076`: named token load `posTq`
- `0x0078..0x007A`: named token load `c200`
- `0x007B`: later combine boundary `op_1B`

That means `0x0077` is not just arbitrary filler at the current local floor. It has one stricter export-backed role:

- in-band bridge / load separator between the first named arithmetic input (`posTq`) and the second named arithmetic input (`c200`) inside the same prefix-built left stack item

This is the deepest safe local role supported here.

## Export-backed sibling evidence

Sibling evidence inside `Lscr-102` supports the same limited classification pattern.

### Sibling family: repeated `op_41` before later arithmetic combine

From `annotated-disasm.md`, block `43264` uses the pattern:

```text
05F8: 41           op_41
05F9: 35 00 5F     op_35 arg=95 ; "badCounterRT"
05FC: 41           op_41
05FD: 35 00 5D     op_35 arg=93 ; "goodCounterRT"
0600: 41           op_41
0601: 35 00 5F     op_35 arg=95 ; "badCounterRT"
0604: 1B           op_1B
```

This sibling does **not** assign any named sink at the `op_41` sites. It shows the same safe local pattern:

- `op_41` can appear as an in-band bridge/load separator inside an arithmetic-build run
- the actual arithmetic closure still occurs later at `op_1B`

### Negative sibling check: later named sink family

`pass51-block10-op08-sibling-classification.md` already showed that when an unresolved arithmetic family eventually gets a named sink, the sink appears later than the prefix itself. That later named-sink behavior is absent in block `34244`, which ends at `0x0081`.

So the sibling evidence supports a stricter local role for `0x0077`, but only as an internal bridge inside the arithmetic build, not as a store boundary.

## What is safe to say

Safe:

- `0x0077` `op_41` is part of the arithmetic-build prefix for the left stack item later preserved as `(posTq + c200)`
- locally, it bridges the first named input load (`posTq`) to the second named input load (`c200`)
- the actual closure of that pair still occurs later at `0x007B` `op_1B`

Not safe:

- calling `0x0077` a `negTq` store boundary
- attaching any sink role to `0x0077`
- promoting `negTq = posTq + 200`
- claiming `0x0077` has standalone executable meaning outside the prefix that closes at `0x007B`

## Remaining ambiguity

Still unresolved:

- exact semantic name of `op_41`
- whether `op_41` is best described abstractly as argument seed, receiver seed, stack duplication, or another low-level stack action

Not unresolved:

- it is stricter than generic opaque scaffolding here
- its local role is internal to the `(posTq + c200)` prefix
- it does not expose any named sink

## Conclusion

Yes, `0x0077` `op_41` can be given a stricter local role than generic in-band scaffolding:

- it is the bridge / load-separator byte between the named `posTq` load and the named `c200` load inside the arithmetic-build prefix that later closes at `0x007B`

But that is the limit of the export-backed evidence. `0x0077` still does **not** justify any `negTq` assignment or other named sink semantics.
