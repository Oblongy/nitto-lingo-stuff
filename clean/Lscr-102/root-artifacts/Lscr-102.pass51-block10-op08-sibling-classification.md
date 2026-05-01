# Lscr-102 pass51: block10 `op_08` sibling classification

Handler: `RaceEngine_lookupTorque`  
Block: `34244`  
Primary byte window: `0x0074..0x0081`

## Sources checked

- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.reconstructed.lingo`

## Raw target window

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

## Local stack-surface classification

`stack-faithful.lingo` renders the same end span as:

```lingo
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
-- 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
0.8758 -- 0x0081
```

`rebuilt-faithful-full.js` preserves the same shape:

```js
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
// 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
0.8758 -- 0x0081
```

So the strict local evidence treats `0x0080` as the unresolved combine/consume point for a two-item stack:

- left item: `(posTq + c200)`
- right item: `0.8758`

## Sibling `op_08` evidence inside the same script

This is not an isolated rendering choice. The same local evidence uses the same `0x08 unresolved stack=[..., literal]` pattern in other blocks:

- `__stack_Lscr102_block09`

```lingo
-- 0x08 unresolved stack=[((rpm * boostRange) - boostLag), 1.6693] -- 0x007F
pb = ((((rpm * boostRange) - boostLag) * 1.6693) / c100) -- 0x0086
```

- `__stack_Lscr102_block19`

```lingo
-- 0x08 unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), RDONE, INT, ...] -- 0x158E
```

These sibling surfaces support a narrower classification for block `34244`:

- `op_08` is being treated locally as an unresolved packet-combine / consume boundary
- the literal after the packet remains separately visible on the stack surface
- the presence of `op_08` does not by itself imply a named store target

## What this proves about `0x0074..0x0081`

The tail can now be classified more tightly as:

- `0x0074..0x007B`: arithmetic input build for `(posTq + c200)`
- `0x007C..0x0080`: literal/immediate plus unresolved `op_08` combine boundary
- `0x0081`: trailing `op_51` terminator already absorbed by the current packet floor

## What remains unresolved

This pass still does **not** prove:

- `negTq = posTq + 200`
- any block-local store sink for the packet
- any averaging or return semantics from the broader `reconstructed.lingo`

`reconstructed.lingo` remains corroboration-only here:

```lingo
negTq = posTq + 200
if tqArray.count >= negTq then
  return (tqArray[posTq] + tqArray[negTq]) / 2.0
end if
```

That interpretation outruns the strict block-local byte-backed evidence.

## Conclusion

Yes, there is a stricter shape classification beyond the previous generic unresolved tail packet:

- the `0x0080` site is locally consistent with other unresolved `op_08` packet-combine boundaries in `Lscr-102`
- the tail remains unresolved
- no `negTq` assignment semantics are justified from block-local evidence alone
