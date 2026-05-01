# Lscr-102 Pass 51: Block 19 Compare-Subwindow Classification

Purpose:
- re-check only block `43264` anti-lag compare region `0x05DD..0x063E`
- gather stricter local ownership / row-anchor evidence for members that still remain packet-only
- do not use broader helper-side semantics

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass26-block19-strict-packet-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass27-block19-compare-window-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass29-block19-row-anchor-split.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass30-block19-packet-floor-exhaustion.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass41-block19-tail-terminator-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

Handler:
- `RaceEngine_buildMd5Source`

## Result

No new standalone executable rows are justified inside `0x05DD..0x063E`.

But a stricter packet-internal split does exist for the two compare windows:

```text
Packet A:
- guard pair:           0x05DD..0x05F5
- compare-build core:   0x05F8..0x0604
- threshold/branch rhs: 0x0605..0x060B
- append-store suffix:  0x060F..0x0616
- closure edge:         0x0619..0x061A

Packet B:
- compare-build core:   0x061D..0x0629
- threshold/branch rhs: 0x062A..0x0630
- append-store suffix:  0x0634..0x063B
- closure edge:         0x063E
```

This is new local shape evidence because it classifies the remaining packet-only members by subwindow role instead of leaving them as one opaque compare packet.

## Packet A: `0x05DD..0x061A`

Raw rows:

```text
05DD: 12           op_12
05DE: 44           op_44
05DF: 00           op_00
05E0: 09           op_09
05E1: 41           op_41
05E2: 35 00 5E     op_35 arg=94 ; "goodCounterET"
05E5: 3E           op_3E
05E6: 12 07 00 11  op_12 branch? target/imm=17
05EA: 56 00 00     op_56 arg=0 ; ""
05ED: 3D 00 5C     op_3D arg=92 ; "nogood"
05F0: 1B           op_1B
05F1: 57 00 00     op_57 arg=0 ; ""
05F4: 51           op_51
05F5: 06 00 4A     op_06 jump?/imm=74
05F8: 41           op_41
05F9: 35 00 5F     op_35 arg=95 ; "badCounterRT"
05FC: 41           op_41
05FD: 35 00 5D     op_35 arg=93 ; "goodCounterRT"
0600: 41           op_41
0601: 35 00 5F     op_35 arg=95 ; "badCounterRT"
0604: 1B           op_1B
0605: 83 1E 41     op_83 arg=7745
0608: 35 00 60     op_35 arg=96 ; "lagPercent"
060B: 16 07 00 11  op_16 branch? target/imm=17
060F: 56 00 00     op_56 arg=0 ; ""
0612: 3D 00 5C     op_3D arg=92 ; "nogood"
0615: 1B           op_1B
0616: 57 00 00     op_57 arg=0 ; ""
0619: 51           op_51
061A: 06 00 25     op_06 jump?/imm=37
```

Strict block surface:

```text
((null.goodCounterRT + null.badCounterRT) >= 1982773)
null.badCounterRT
// goto @1548
id_0 = (? + nogood)
?
```

Subwindow classification:

```text
0x05F8..0x0604  compare-build core
  - builds the arithmetic lhs from:
    - duplicated `badCounterRT` loads at `0x05F9` and `0x0601`
    - one `goodCounterRT` load at `0x05FD`
  - `badCounterRT` remains packet-only because it is duplicated inside the same build core
  - `goodCounterRT` also remains packet-only because it has no local sink or terminator between its load and the shared compare completion

0x0605..0x060B  threshold/branch rhs
  - `op_83 arg=7745`
  - `lagPercent`
  - `op_16 branch? target/imm=17`
  - `lagPercent` remains packet-only because it is consumed directly by the branch test and never receives a block-local sink

0x060F..0x0616  append-store suffix
  - clean local-store shape:
    - `0x060F` read local `0`
    - `0x0612` read `nogood`
    - `0x0615` add
    - `0x0616` store local `0`
  - this is still the cleanest executable anchor in packet A beyond the compare completion

0x0619..0x061A  closure edge
  - `0x0619` raw `op_51`
  - `0x061A` jump `37`
  - this remains the accepted compare anchor / packet close
```

## Packet B: `0x061D..0x063E`

Raw rows:

```text
061D: 41           op_41
061E: 35 00 61     op_35 arg=97 ; "badCounterET"
0621: 41           op_41
0622: 35 00 5E     op_35 arg=94 ; "goodCounterET"
0625: 41           op_41
0626: 35 00 61     op_35 arg=97 ; "badCounterET"
0629: 1B           op_1B
062A: 83 1E 41     op_83 arg=7745
062D: 35 00 60     op_35 arg=96 ; "lagPercent"
0630: 16 07 00 0E  op_16 branch? target/imm=14
0634: 56 00 00     op_56 arg=0 ; ""
0637: 3D 00 5C     op_3D arg=92 ; "nogood"
063A: 1B           op_1B
063B: 57 00 00     op_57 arg=0 ; ""
063E: 51           op_51
```

Strict block surface:

```text
((null.goodCounterET + null.badCounterET) >= 1982773)
null.badCounterET
// goto @1582
id_0 = (? + nogood)
?
```

Subwindow classification:

```text
0x061D..0x0629  compare-build core
  - builds the arithmetic lhs from:
    - duplicated `badCounterET` loads at `0x061E` and `0x0626`
    - one `goodCounterET` load at `0x0622`
  - `badCounterET` remains packet-only because it is duplicated inside the same build core
  - `goodCounterET` remains packet-only because it has no standalone local sink or terminator before the compare closes

0x062A..0x0630  threshold/branch rhs
  - `op_83 arg=7745`
  - `lagPercent`
  - `op_16 branch? target/imm=14`
  - `lagPercent` again remains packet-only because it is only the branch rhs load, not an executable row with independent ownership

0x0634..0x063B  append-store suffix
  - clean local-store shape:
    - `0x0634` read local `0`
    - `0x0637` read `nogood`
    - `0x063A` add
    - `0x063B` store local `0`
  - this remains the cleanest executable anchor in packet B beyond the compare completion

0x063E  closure edge
  - raw `op_51`
  - accepted compare anchor / packet close
```

## What remains unresolved

Still packet-only:

```text
- goodCounterRT
- badCounterRT
- goodCounterET
- badCounterET
- lagPercent
```

Why:
- the `goodCounter*` and `badCounter*` names live inside compare-build cores, not isolated store rows
- the `badCounter*` names are duplicated within those cores
- `lagPercent` is only a branch rhs load in both windows
- no new `op_36`, `op_57`, or packet-local terminator splits out any of those names as standalone executable rows

## Strict floor after this pass

No new row promotion is justified.

What this pass adds is tighter local ownership language:

```text
- compare-build core
- threshold/branch rhs
- append-store suffix
- closure edge
```

That is the narrowest strict classification currently supported for the remaining packet-only members in `0x05DD..0x063E`.
