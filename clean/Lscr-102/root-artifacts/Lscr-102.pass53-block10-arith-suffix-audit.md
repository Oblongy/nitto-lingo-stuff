# Lscr-102 pass53: block10 arithmetic suffix audit

Handler: `RaceEngine_lookupTorque`  
Block: `34244`  
Target tail suffix: `0x007C..0x0081`

## Goal

Determine whether the unresolved arithmetic suffix at `0x007C..0x0081` can be classified one level deeper than the current `[0.8758, op_08]` floor, using only local export-backed sibling `op_08` families.

## Sources checked

- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block34244-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass50-block10-tail-shape-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block10-op08-sibling-classification.md`

## Raw target bytes

From `annotated-disasm.md`, the block `34244` tail is:

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

`pass-block34244-table.md` proves the block vocabulary includes:

- payload id `8` = `negTq`
- payload id `9` = `c200`

but the tail window itself contains no payload-side store opcode or named sink marker.

## What the local stack surfaces preserve

`stack-faithful.lingo`:

```lingo
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
-- 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
0.8758 -- 0x0081
```

`rebuilt-faithful-full.js` preserves the same boundary:

```js
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
// 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
0.8758 -- 0x0081
```

So the strict local floor already separates:

- left arithmetic input: `(posTq + c200)`
- right literal input: `0.8758`
- unresolved combine/consume site: `0x0080`
- final terminator: `0x0081`

## Export-backed sibling `op_08` families

### Sibling family A: later named sink after `op_08`

`rebuilt-faithful-full.js` preserves another local `op_08` family as:

```js
// 0x08 unresolved stack=[((rpm * boostRange) - boostLag), 1.6693] -- 0x007F
pb = ((((rpm * boostRange) - boostLag) * 1.6693) / c100) -- 0x0086
```

This matters because it shows one export-backed shape where:

- `op_08` is still the unresolved combine site
- a later byte window eventually exposes a named sink (`pb`) at `0x0086`

That later named sink is **not** present in block `34244`. Its tail stops at `0x0081` with `op_51`.

### Sibling family B: unresolved consume boundary without named sink

`rebuilt-faithful-full.js` also preserves:

```js
this.__unresolved(block, "0x08 unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), RDONE, INT, ...]", "0x158E");
```

This matters because it shows another export-backed shape where:

- `op_08` marks a consume/combine boundary
- no immediate named sink is exposed at that same site

So the presence of `op_08` alone does not prove assignment semantics.

## Deeper suffix classification

Yes, the suffix can be classified one level deeper than the older coarse `[0.8758, op_08]` summary, but only as a shape split:

- `0x007C..0x007E`: `op_83 arg=8758`
- `0x007F`: trailing `op_00` still in-band before the combine site
- `0x0080`: unresolved `op_08` combine/consume boundary
- `0x0081`: final `op_51` terminator

That is the deepest strict local classification supported here.

## Why no `negTq` store target is exposed

No local export-backed artifact shows a store target for this suffix:

- raw `0x007C..0x0081` contains `op_83`, `op_00`, `op_08`, `op_51` only
- there is no `op_36`, `op_57`, `op_5C`, branch handoff, or later named sink in this block after `0x0080`
- the block ends immediately at the `op_51` terminator
- `pass-block34244-table.md` proves `negTq` exists in block vocabulary, but not that this suffix stores into payload id `8`

So `negTq` remains corroboration-only vocabulary for block `34244`, not a byte-backed sink for `0x007C..0x0081`.

## Strict exhaustion decision

Accepted strict floor for the suffix:

- do keep the deeper suffix split:
  - `op_83 arg=8758`
  - in-band `op_00`
  - unresolved `op_08` boundary
  - final `op_51`
- do not promote:
  - `negTq = posTq + 200`
  - any averaged-return semantics
  - any named sink for the suffix itself

## Conclusion

The `34244` arithmetic suffix is not completely opaque anymore, but it is now exhausted at the stricter byte-backed shape:

- immediate fragment at `0x007C..0x007F`
- unresolved combine boundary at `0x0080`
- terminator at `0x0081`

No `negTq` store target is exposed by the local export-backed evidence.
