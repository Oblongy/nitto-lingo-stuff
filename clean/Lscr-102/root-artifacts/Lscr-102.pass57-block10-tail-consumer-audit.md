# Lscr-102 pass57: block10 tail consumer audit

Handler: `RaceEngine_lookupTorque`  
Block: `34244`  
Target tail finish: `0x007F..0x0081`

## Goal

Classify the final `op_08` / terminator finish one level deeper, using only block-local bytes plus local sibling `op_08` evidence, without inventing a sink or assignment target.

## Sources checked

- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass50-block10-tail-shape-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block10-op08-sibling-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass53-block10-arith-suffix-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass55-block10-prefix-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass56-block10-op41-role-audit.md`

## Raw target bytes

From `annotated-disasm.md`, the exact block-local tail is:

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

Prior passes already fixed the prefix/suffix split:

- `0x0074..0x007B`: arithmetic-build prefix producing the left stack item `(posTq + c200)`
- `0x007C..0x007E`: literal immediate `op_83 arg=8758`

This pass only targets the finish:

- `0x007F`: `op_00`
- `0x0080`: `op_08`
- `0x0081`: `op_51`

## What the strict local stack surfaces preserve

`stack-faithful.lingo`:

```lingo
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
-- 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
0.8758 -- 0x0081
```

`rebuilt-faithful-full.js` preserves the same finish:

```js
posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
// 0x08 unresolved stack=[(posTq + c200), 0.8758] -- 0x0080
0.8758 -- 0x0081
```

So the strict local floor already proves:

- the final consume site is `0x0080`
- its two visible inputs are:
  - left: `(posTq + c200)`
  - right: `0.8758`
- the next byte `0x0081` is the block terminator edge after that consume site

## Deeper finish classification

### `0x007F` `op_00`

Safe local role:

- trailing in-band finish byte immediately after the `op_83 arg=8758` literal
- part of the same suffix that feeds the later `0x0080` consume site

Not safe:

- standalone executable row
- named sink cue
- branch / return / store marker

### `0x0080` `op_08`

Safe local role:

- final unresolved consumer / combine boundary for the two-item stack preserved by the faithful local surfaces
- it closes the packet whose left item was built at `0x0074..0x007B` and whose right literal was emitted at `0x007C..0x007E`

Local sibling evidence from `pass51-block10-op08-sibling-classification.md` supports this narrower role:

- one sibling family uses `op_08` as an unresolved combine site and only later exposes a named sink (`pb` at `0x0086`)
- another sibling family remains unresolved at the `op_08` site with no immediate named sink

Block `34244` matches the second case at its finish, because there is no later byte window after `0x0080` that exposes a named sink.

### `0x0081` `op_51`

Safe local role:

- terminal packet / block terminator byte immediately after the final `op_08` consumer
- it confirms the `0x0080` consume site is the end of the block-local unresolved packet, not a prefix to a later same-block store

Not safe:

- separate `0.8758` executable row
- hidden sink
- hidden assignment closure

## Local sibling comparison

The most useful sibling boundary is the earlier arithmetic family already cited in `pass51`:

```lingo
-- 0x08 unresolved stack=[((rpm * boostRange) - boostLag), 1.6693] -- 0x007F
pb = ((((rpm * boostRange) - boostLag) * 1.6693) / c100) -- 0x0086
```

That sibling proves an important negative rule:

- when a later named sink exists, it appears after the `op_08` site in a later same-block byte window

`34244` has no such later window. Its finish is:

- `0x007F` in-band tail byte
- `0x0080` unresolved consumer
- `0x0081` final terminator

So there is still no legal promotion to any named sink such as `negTq`.

## Remaining ambiguity

Still unresolved:

- exact standalone semantics of `op_00`
- exact low-level semantics of `op_08`
- whether `op_08` is best described abstractly as multiply, combine, or generic consume at the p-code meaning layer

Not unresolved:

- `0x0080` is the final local consumer boundary for the packet
- `0x0081` is the immediate terminator after that consumer
- nothing after `0x0080` exposes a named sink or assignment target inside block `34244`

## Conclusion

Yes, the finish `0x007F..0x0081` can be classified one level deeper:

- `0x007F`: in-band tail byte still belonging to the literal side of the packet
- `0x0080`: final unresolved consumer / combine boundary for `[(posTq + c200), 0.8758]`
- `0x0081`: immediate terminator confirming the packet ends without a later same-block sink

That is the strict local floor for the final consumer tail. No sink, assignment target, or `negTq` promotion is exposed by this byte window.
