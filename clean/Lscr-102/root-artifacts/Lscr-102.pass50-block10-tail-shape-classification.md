# Lscr-102 pass50: block10 tail shape classification

Handler: `RaceEngine_lookupTorque`  
Block: `34244`  
Primary byte window: `0x0074..0x0081`

## Sources checked

- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block34244-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.reconstructed.lingo`

## What the raw bytes prove

From `annotated-disasm.md`, block `34244` ends with:

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

This supports a stricter local shape split than the earlier generic tail-packet note:

- `0x0074..0x007B`: operand-build prefix
  - `posTq`
  - `c200`
  - `op_1B`
- `0x007C..0x0081`: terminal suffix
  - `op_83 arg=8758`
  - `op_00`
  - `op_08`
  - `op_51`

So the whole `0x0074..0x0081` span is still one unsunk arithmetic packet, but it is not an arbitrary opaque tail. It has a clean block-local operand-build phase followed by a terminal arithmetic/consume suffix.

## What the block-local surfaces say

`stack-faithful.lingo` for `__stack_Lscr102_block10` preserves:

```lingo
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
-- 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
0.8758 -- 0x0081
```

`rebuilt-faithful-full.js` preserves the same unresolved stack shape:

```js
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
// 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
0.8758 -- 0x0081
```

`blocks.lingo` and `blocks.js` are broader and already over-name the region as `id_19 = id_20 -- 0x0074` / `id_21 = id_22 -- 0x007C`; they do not expose a stronger local sink.

## Ownership decision

No stricter block-local ownership is proved beyond:

- the packet begins from `posTq` and `c200`
- the packet includes the literal `0.8758`
- the packet terminates at `op_51` `0x0081`

What is **not** proved locally:

- no `op_36` / `op_57` / `op_5C`-style store target exists inside `0x0074..0x0081`
- no branch, call, or return consumes this packet after `0x0080`
- no block-local evidence names `negTq` as the assignment sink for this window

## Corroboration boundary

`reconstructed.lingo` is broader-only corroboration here:

```lingo
posTq = parseInt(rpm / 100)
negTq = posTq + 200
```

That reconstruction outruns the strict local tail proof. It may explain the intended higher-level meaning, but it does not replace the block-local byte-backed classification above.

## Conclusion

Yes, there is a stricter split for `0x0074..0x0081`:

- operand-build prefix: `0x0074..0x007B`
- terminal unresolved arithmetic suffix: `0x007C..0x0081`

But there is still no legal promotion to `negTq = posTq + 200` from block-local evidence alone, and the whole span remains an unresolved packet.
