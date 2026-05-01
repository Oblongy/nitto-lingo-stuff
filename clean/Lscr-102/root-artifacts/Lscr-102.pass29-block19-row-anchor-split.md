# Lscr-102 Pass 29: Block 19 Row-Anchor Split

Purpose:
- split the remaining block `43264` packet rows into:
  - rows that now have a clean enough raw store shape to promote
  - rows that still only have packet membership and must stay packet-only

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass27-block19-compare-window-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass28-block19-packet-anchor-decision.md`

## Compare packet A

Strict rows:

```text
((null.goodCounterRT + null.badCounterRT) >= 1982773)
null.badCounterRT
// goto @1548
id_0 = (? + nogood)
?
```

Annotated rows:

```text
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

Decision:
- keep `badCounterRT` packet-only
- promote `id_0 = (? + nogood)` if desired

Why:
- `badCounterRT` appears twice inside the compare build (`0x05F9` and `0x0601`), so there is no single clean standalone anchor equivalent to the accepted compare row at `0x0619`
- the compressed append row does have a much cleaner store shape:
  - `0x060F` read local `0`
  - `0x0612` read `nogood`
  - `0x0615` add
  - `0x0616` store local `0`
- that sequence supports the strict packet row `id_0 = (? + nogood)` more cleanly than the surrounding `badCounterRT` row

## Compare packet B

Strict rows:

```text
((null.goodCounterET + null.badCounterET) >= 1982773)
null.badCounterET
// goto @1582
id_0 = (? + nogood)
?
```

Annotated rows:

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

Decision:
- keep `badCounterET` packet-only
- promote `id_0 = (? + nogood)` if desired

Why:
- `badCounterET` also appears twice inside the compare build (`0x061E` and `0x0626`), so it does not have one clean standalone anchor
- the compressed append row again has a clean local-store sequence:
  - `0x0634` read local `0`
  - `0x0637` read `nogood`
  - `0x063A` add
  - `0x063B` store local `0`

## Result

Safe mixed decision:

```text
Promotable:
- id_0 = (? + nogood) -- 0x0616
- id_0 = (? + nogood) -- 0x063B

Still packet-only:
- badCounterRT
- badCounterET
```

This is narrower than the broader helper surface and tighter than the current packet-only note.
