# Lscr-102 Pass 55: Block 19 Threshold-RHS Audit

Purpose:
- inspect only block `43264` rhs windows:
  - `0x0605..0x060B`
  - `0x062A..0x0630`
- determine whether each current `threshold/branch rhs` packet can be classified one level deeper
- determine whether any safe token-level ownership can be attached without inventing `lagPercent` semantics

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass27-block19-compare-window-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass29-block19-row-anchor-split.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass30-block19-packet-floor-exhaustion.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block19-compare-subwindow-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`

Handler:
- `RaceEngine_buildMd5Source`

## Result

Yes. Both rhs windows can be classified one level deeper than the current broad `threshold/branch rhs` label.

The deeper strict split is:

```text
packet A rhs family
- 0x0605..0x0607  literal threshold seed
- 0x0608..0x060A  named rhs load
- 0x060B          branch-consumer head inside the requested window
- 0x060C..0x060E  remaining branch operand bytes outside the requested window

packet B rhs family
- 0x062A..0x062C  literal threshold seed
- 0x062D..0x062F  named rhs load
- 0x0630          branch-consumer head inside the requested window
- 0x0631..0x0633  remaining branch operand bytes outside the requested window
```

This is a stricter classification than the current single `threshold/branch rhs` bucket.

## Packet A: `0x0605..0x060B`

Raw rows:

```text
0605: 83 1E 41     op_83 arg=7745
0608: 35 00 60     op_35 arg=96 ; "lagPercent"
060B: 16 07 00 11  op_16 branch? target/imm=17
```

Strict deeper split:

```text
0x0605..0x0607  literal threshold seed
  - exact bytes: `83 1E 41`
  - exact exported operand: `op_83 arg=7745`
  - safe ownership: yes, as a raw literal/immediate only
  - not safe: any rewritten decimal-comparison semantics beyond the exported `arg=7745`

0x0608..0x060A  named rhs load
  - exact bytes: `35 00 60`
  - exact exported operand: `op_35 arg=96 ; "lagPercent"`
  - safe ownership: yes, the token `lagPercent` is safe as a direct exported name-table load
  - not safe: treating `lagPercent` as a standalone executable row or assigning a relational meaning like `0.7745 > lagPercent`

0x060B          branch-consumer head inside the requested window
  - exact byte inside scope: `16`
  - exact exported opcode row: `op_16 branch? target/imm=17`
  - safe ownership: yes, as the start of the control consumer only
  - important boundary: the full `op_16` row extends past the requested end byte `0x060B` into `0x060C..0x060E`
```

Why `lagPercent` stays limited:

```text
- it is safe because `op_35 arg=96` resolves directly to the exported token `"lagPercent"`
- it is not safe as a standalone executable anchor because no `op_51`, `op_57`, or local sink splits it off before the branch consumer begins
- it is not safe to attach helper-side semantics like `0.7745 > lagPercent`, because that interpretation does not appear verbatim in the strict raw row
```

## Packet B: `0x062A..0x0630`

Raw rows:

```text
062A: 83 1E 41     op_83 arg=7745
062D: 35 00 60     op_35 arg=96 ; "lagPercent"
0630: 16 07 00 0E  op_16 branch? target/imm=14
```

Strict deeper split:

```text
0x062A..0x062C  literal threshold seed
  - exact bytes: `83 1E 41`
  - exact exported operand: `op_83 arg=7745`
  - safe ownership: yes, as a raw literal/immediate only
  - not safe: any lifted decimal-threshold meaning beyond the exported `arg=7745`

0x062D..0x062F  named rhs load
  - exact bytes: `35 00 60`
  - exact exported operand: `op_35 arg=96 ; "lagPercent"`
  - safe ownership: yes, the token `lagPercent` is safe as a direct exported name-table load
  - not safe: turning it into a standalone branch row or attaching helper-side relational semantics

0x0630          branch-consumer head inside the requested window
  - exact byte inside scope: `16`
  - exact exported opcode row: `op_16 branch? target/imm=14`
  - safe ownership: yes, as the start of the control consumer only
  - important boundary: the full `op_16` row extends past the requested end byte `0x0630` into `0x0631..0x0633`
```

## Safe token-level ownership

Safe:

```text
- `7745` is safe only as the exact exported `op_83 arg=7745` immediate in both windows
- `lagPercent` is safe only as the exact exported `op_35 arg=96 ; "lagPercent"` name-table load in both windows
- `17` and `14` are safe only as the exact exported `op_16 ... target/imm=17` and `op_16 ... target/imm=14` branch operands
```

Not safe:

```text
- no safe token-level ownership exists for a relational operator such as `>`
- no safe token-level ownership exists for a rewritten decimal threshold like `0.7745`
- no safe token-level ownership exists for a standalone executable `lagPercent` row
- no safe token-level ownership exists for a complete branch predicate beyond the current packet membership
```

## Why this does not justify a stricter readable row

`pass51` was correct to keep these windows packet-only at the readable layer.

This pass only tightens the internal raw-role map:

```text
old:
- threshold/branch rhs

new:
- literal threshold seed
- named rhs load
- branch-consumer head
```

That is useful stop-map evidence, but it still does not justify promoting:

```text
if not (0.7745 > lagPercent) then ...
```

because the strict raw rows prove only:

```text
op_83 arg=7745
op_35 arg=96 ; "lagPercent"
op_16 branch? target/imm=17 / 14
```

## Final conclusion

Both rhs windows can be classified one level deeper, but only at the raw-role layer:

```text
literal threshold seed -> named rhs load -> branch-consumer head
```

The only safe token-level ownerships are:

```text
- `op_83 arg=7745`
- `op_35 arg=96 ; "lagPercent"`
- `op_16 ... target/imm=17`
- `op_16 ... target/imm=14`
```

No safer standalone semantic ownership for `lagPercent` exists inside `0x0605..0x060B` or `0x062A..0x0630`.
