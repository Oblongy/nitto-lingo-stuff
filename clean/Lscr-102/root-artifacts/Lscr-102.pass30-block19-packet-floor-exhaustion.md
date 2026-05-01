# Lscr-102 Pass 30: Block 19 Packet-Floor Exhaustion

Purpose:
- close the remaining question inside block `43264` packet windows `0x05F6..0x061A` and `0x061B..0x063E`
- decide whether `badCounterRT` / `badCounterET` can ever be promoted as standalone executable anchors from the current strict surfaces

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass29-block19-row-anchor-split.md`

## Packet A: `0x05F6..0x061A`

Strict packet members:

```text
((null.goodCounterRT + null.badCounterRT) >= 1982773)
null.badCounterRT
// goto @1548
id_0 = (? + nogood)
?
```

Raw rows:

```text
05F9: 35 00 5F     op_35 arg=95 ; "badCounterRT"
0601: 35 00 5F     op_35 arg=95 ; "badCounterRT"
060F: 56 00 00     op_56 arg=0 ; ""
0612: 3D 00 5C     op_3D arg=92 ; "nogood"
0615: 1B           op_1B
0616: 57 00 00     op_57 arg=0 ; ""
0619: 51           op_51
061A: 06 00 25     op_06 jump?/imm=37
```

Decision:
- `badCounterRT` remains packet-only
- accepted executable anchors in this packet stay:
  - `id_0 = (? + nogood) -- 0x0616`
  - `((goodCounterRT + badCounterRT) >= 1982773) -- 0x0619`

Why:
- the name `badCounterRT` occurs twice as duplicated operand loads at `0x05F9` and `0x0601`
- neither load is followed by a unique block-local store or terminator that would isolate `badCounterRT` as its own executable row
- the first clean executable seam after that duplicated load pair is the local-store packet ending at `0x0616`
- the next clean seam is the compare completion / packet close at `0x0619`

## Packet B: `0x061B..0x063E`

Strict packet members:

```text
((null.goodCounterET + null.badCounterET) >= 1982773)
null.badCounterET
// goto @1582
id_0 = (? + nogood)
?
```

Raw rows:

```text
061E: 35 00 61     op_35 arg=97 ; "badCounterET"
0626: 35 00 61     op_35 arg=97 ; "badCounterET"
0634: 56 00 00     op_56 arg=0 ; ""
0637: 3D 00 5C     op_3D arg=92 ; "nogood"
063A: 1B           op_1B
063B: 57 00 00     op_57 arg=0 ; ""
063E: 51           op_51
```

Decision:
- `badCounterET` remains packet-only
- accepted executable anchors in this packet stay:
  - `id_0 = (? + nogood) -- 0x063B`
  - `((goodCounterET + badCounterET) >= 1982773) -- 0x063E`

Why:
- the name `badCounterET` also occurs twice as duplicated operand loads at `0x061E` and `0x0626`
- neither load resolves to a standalone store or packet terminator before the compare chain closes
- the first clean executable seam after that duplicated load pair is the local-store packet ending at `0x063B`
- the next clean seam is the compare completion / packet close at `0x063E`

## Result

Current strict packet floor for block `43264` is exhausted at this seam:

```text
Accepted executable anchors:
- id_0 = (? + nogood) -- 0x0616
- ((goodCounterRT + badCounterRT) >= 1982773) -- 0x0619
- id_0 = (? + nogood) -- 0x063B
- ((goodCounterET + badCounterET) >= 1982773) -- 0x063E

Still packet-only:
- badCounterRT
- badCounterET
```

No safer standalone promotion for `badCounterRT` or `badCounterET` exists in the current strict block-owned surfaces.
