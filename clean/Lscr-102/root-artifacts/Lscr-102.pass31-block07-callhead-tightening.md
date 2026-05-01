# Lscr-102 Pass 31: Block 7 Call-Head Tightening

Purpose:
- tighten the first `STG(...)`-family unresolved line in block `11992` at raw `0x0075`
- replace the weaker `implicit_arg_0x0072` placeholder with the stronger packet-backed unresolved call-head shape

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

## Raw window

Annotated disasm around the first `STG` seam:

```text
0050: 12 07 00 3C  op_12 branch? target/imm=60
0054: 41           op_41
0055: 35 00 08     op_35 arg=8 ; "gearValue"
0058: 41           op_41
0059: 35 00 09     op_35 arg=9 ; "c0"
005C: 14 07 00 1C  op_14 branch? target/imm=28
0060: 3B 00 0A     op_3B arg=10 ; "STG"
0063: 39           op_39
0064: 41           op_41
0065: 35 00 0B     op_35 arg=11 ; "s"
0068: 41           op_41
0069: 35 00 0C     op_35 arg=12 ; "carV"
006C: 22           op_22
006D: 41           op_41
006E: 35 00 0D     op_35 arg=13 ; "carAccel"
0071: 22           op_22
0072: 3A 00 03     op_3A arg=3 ; "raceType"
0075: 51           op_51
0076: 06 00 17     op_06 jump?/imm=23
0079: 3B 00 0A     op_3B arg=10 ; "STG"
007C: 39           op_39
007D: 41           op_41
007E: 35 00 0B     op_35 arg=11 ; "s"
0081: 41           op_41
0082: 35 00 0C     op_35 arg=12 ; "carV"
0085: 41           op_41
0086: 35 00 0D     op_35 arg=13 ; "carAccel"
0089: 3A 00 03     op_3A arg=3 ; "raceType"
008C: 51           op_51
```

## Strict packet surface

`blocks.lingo` and `blocks.js` agree on the first unresolved call shape:

```text
?(?, STG(), ((null.s % null.carV) % null.carAccel))
```

and on the later clean call:

```text
STG()(null.s, null.carV, null.carAccel)
```

## Faithful corroboration

The broader faithful lift preserves more of the same unresolved head, but still does not prove a named leftmost carried value:

```text
((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL))((raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel)) -- 0x0075
```

This is stronger than `implicit_arg_0x0072` because it shows:
- the unresolved head is a call-head packet, not a normal first argument
- `STG` and `((s mod carV) mod carAccel)` are stable visible tail members
- the leftmost carried boolean/callee region is still unresolved

## Decision

Tighten the deliverable line from:

```text
STG(implicit_arg_0x0072, STG, ((s mod carV) mod carAccel)) -- 0x0075
```

to:

```text
?(unresolved_callhead_0x0075, STG, ((s mod carV) mod carAccel)) -- 0x0075
```

Why:
- this keeps the unresolved region explicit
- it matches the strict packet shape better than a fake normal-argument call
- it avoids promoting the faithful-only boolean/callee head as executable source

## Result

Block `11992` is slightly tighter:
- the `0x0075` row is now represented as an unresolved call-head packet
- the later `STG(s, carV, carAccel) -- 0x008C` line remains unchanged
- the leftmost carried boolean/callee source still remains unresolved
