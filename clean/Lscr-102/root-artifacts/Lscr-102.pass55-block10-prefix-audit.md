# Lscr-102 pass55: block10 operand-build prefix audit

Handler: `RaceEngine_lookupTorque`  
Block: `34244`  
Target prefix: `0x0074..0x007B`

## Goal

Determine whether the operand-build prefix at `0x0074..0x007B` can be classified one level deeper without implying a `negTq` store target, and whether any named local role can be attached to `op_1B` there.

## Sources checked

- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block34244-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass50-block10-tail-shape-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block10-op08-sibling-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass53-block10-arith-suffix-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`

## Raw target bytes

From `annotated-disasm.md`, the `34244` tail begins:

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

`pass-block34244-table.md` proves the block-local payload vocabulary includes:

- id `4` = `posTq`
- id `8` = `negTq`
- id `9` = `c200`

## What the current strict local surfaces already prove

The later strict packet floor already preserves the left stack item built by this prefix:

```js
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
// 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
```

So the local export-backed evidence already ties `0x0074..0x007B` to the stack item:

- `(posTq + c200)`

That means `op_1B` at `0x007B` is not just a generic opaque opcode here. At the current strict floor it is the in-band arithmetic combine boundary that closes the prefix-built left operand consumed later by `0x0080`.

## Local sibling comparison: later named sink after unresolved arithmetic packet

`rebuilt-faithful-full.js` preserves a sibling arithmetic family as:

```js
this.__unresolved(block, "0x08 unresolved stack=[((rpm * boostRange) - boostLag), 1.6693]", "0x007F");
this.__assign(block, "pb", "((((rpm * boostRange) - boostLag) * 1.6693) / c100)", "0x0086");
```

This is export-backed local sibling evidence for two points:

1. an arithmetic-build prefix can remain unnamed at its own build site
2. a named sink can appear only later, after a later consume/combine site

That later named sink behavior is **not** present in block `34244`, because its tail ends at:

- `0x0080` unresolved `op_08`
- `0x0081` final `op_51`

There is no later named sink row after the prefix in this block.

## Local sibling comparison: unresolved packet with no later named sink

`pass51-block10-op08-sibling-classification.md` and `pass53-block10-arith-suffix-audit.md` already established that the `34244` suffix matches the local unresolved family where:

- a left arithmetic item survives onto the stack
- `op_08` is the unresolved consume/combine site
- no block-local named sink appears afterward

So the `34244` prefix belongs to the second local family:

- operand-build prefix feeding an unresolved packet
- no later named store target exposed

## Deeper prefix classification

Yes, the prefix can be classified one level deeper than the older coarse `[(posTq + c200), ...]` wording:

- `0x0074..0x0076`: named local token load `posTq`
- `0x0077`: in-band `op_41`
- `0x0078..0x007A`: named local token load `c200`
- `0x007B`: arithmetic combine boundary producing the left stack item later preserved as `(posTq + c200)`

That is the deepest safe local classification for the prefix.

## Can any named local role be attached to `op_1B`?

Only a limited one.

What is safe:

- `op_1B` at `0x007B` is the combine point for the two immediately preceding named local tokens:
  - `posTq`
  - `c200`
- its product is the left arithmetic input later preserved as `(posTq + c200)`

What is **not** safe:

- attaching the sink role `negTq` to `op_1B`
- treating `op_1B` as a named assignment boundary
- promoting `negTq = posTq + 200`

Why that stronger role is not justified:

- `negTq` appears only as corroborating block vocabulary in `pass-block34244-table.md`
- no `op_36`, `op_57`, `op_5C`, or later named sink exists after `0x007B` inside block `34244`
- the block terminates at `0x0081`
- the local sibling family comparison shows that when a named sink is exposed, it appears later than the arithmetic-build prefix, not at the `op_1B` site itself

## Remaining ambiguity

Still unresolved:

- exact semantic name for `op_41`
- exact semantic name for `op_1B`
- whether the combined left item would eventually have been consumed as an index, threshold, interpolation input, or assignment value in a broader helper reconstruction

Not unresolved:

- the prefix does build the left arithmetic item from `posTq` and `c200`
- `op_1B` is the local combine boundary for that item
- no named local store target is exposed for that combine boundary

## Conclusion

The `34244` operand-build prefix can be classified one level deeper:

- it is a named-token arithmetic build for the later left stack item `(posTq + c200)`
- `op_1B` at `0x007B` is the combine boundary for `posTq` and `c200`

But the prefix still does **not** justify any named sink role such as `negTq`. That name remains corroborating block vocabulary only, not a byte-backed assignment target for `0x0074..0x007B`.
