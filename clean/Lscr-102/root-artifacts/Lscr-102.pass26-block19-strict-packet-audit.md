# Lscr-102 Pass 26: Block 19 Strict-Packet Audit

Purpose:
- Re-check the current `final-clean\Lscr-102\rightful.ls` anti-lag/hash tail against strict block-owned proof only.
- Allowed evidence only:
  - `Lscr-102.pass22-hotspot-stack-trace-windows.md`
  - `Lscr-102.pass23-hotspot-carry-tracer.md`
  - `Lscr-102.pass23-strict-carry-tracer.md`
  - `Lscr-102.annotated-disasm.md`
  - `Lscr-102.blocks.lingo`
  - `Lscr-102.blocks.js`
- No helper carry from `rebuilt-faithful-full.js` is used to justify any readable line here.

Target deliverable region:

```text
final-clean\Lscr-102\rightful.ls:1786-1809
```

## Strict packet anchors

Pass-23 strict carry ownership:

```text
0x05F4..0x05F5  raw gate edge              safe carry = op_51 + jump 74 only
0x063F..0x064C  strict block-19 packet     safe carry = xtra ^ caluMD5 into compressed packet
0x064D..0x0663  strict compressed tail     safe carry = id_0 = ,.getStringMD5()(id_0) and trailing id_0 only
```

Strict block-owned rows:

```text
null.goodCounterRT
if (false) { /* else goto @1494 */ }
null.goodCounterET
if (false) { /* else goto @1511 */ }
id_0 = (? + nogood)
?
// goto @1507
// [0x05e3] op_4a
// [0x05f6] op_60
((null.goodCounterRT + null.badCounterRT) >= 1982773)
null.badCounterRT
// goto @1548
id_0 = (? + nogood)
?
// goto @1544
// [0x0608] op_25
// [0x061b] op_60
((null.goodCounterET + null.badCounterET) >= 1982773)
null.badCounterET
// goto @1582
id_0 = (? + nogood)
?
, = caluMD5
?
id_0 = ,.getStringMD5()(id_0)
?
// [0x064f] op_05
id_0
```

Annotated rows for the same packet:

```text
05D9: 35 00 5D     op_35 arg=93 ; "goodCounterRT"
05DC: 3E           op_3E
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
063F: 3B 00 62     op_3B arg=98 ; "xtra"
0643: 3D 00 63     op_3D arg=99 ; "caluMD5"
0649: 57 00 02     op_57 arg=2 ; ","
064C: 51           op_51
0650: 35 00 64     op_35 arg=100 ; "getStringMD5"
0663: 05           op_05
```

## Current line audit

### Over-promoted lines

```text
rightful.ls:1786  if not (goodCounterRT = VOID) then -- jump 9 marker 0x44 -- 0x05DD
```

Why broader:
- strict block-owned surface only proves `null.goodCounterRT` followed by `if (false) { /* else goto @1494 */ }`

Narrowest byte-backed replacement:

```text
if false then -- evidence jump at 0x05DD
```

```text
rightful.ls:1788  if not (goodCounterET = VOID) then -- jump 17 -- 0x05E6
```

Why broader:
- strict block-owned surface only proves `null.goodCounterET` followed by `if (false) { /* else goto @1511 */ }`

Narrowest byte-backed replacement:

```text
if false then -- evidence jump at 0x05E6
```

```text
rightful.ls:1789  EMPTY = (EMPTY + nogood) -- 0x05F1
```

Why broader:
- strict block-owned packet only proves the compressed row `id_0 = (? + nogood)`

Narrowest byte-backed replacement:

```text
id_0 = (? + nogood) -- 0x05F1 strict compressed packet
```

```text
rightful.ls:1790  (goodCounterRT = VOID) -- 0x05F4
```

Why broader:
- pass-23 strict carry tracer explicitly forbids carrying `(goodCounterRT = VOID)` into the strict layer
- the minimal strict gate core is only raw `op_51` at `0x05F4` plus jump `74` at `0x05F5`

Narrowest byte-backed replacement:

```text
? -- 0x05F4 unresolved gate core
```

```text
rightful.ls:1794  if not (0.7745 > lagPercent) then -- jump 17 -- 0x060B
```

Why broader:
- strict block-owned surface does not prove the `0.7745 > lagPercent` branch text
- the strict packet only expands to:
  - `((null.goodCounterRT + null.badCounterRT) >= 1982773)`
  - `null.badCounterRT`
  - `id_0 = (? + nogood)`

Narrowest byte-backed replacement:

```text
((goodCounterRT + badCounterRT) >= 1982773) -- strict compare packet before 0x060B
```

```text
rightful.ls:1795  EMPTY = (EMPTY + nogood) -- 0x0616
```

Why broader:
- strict block-owned packet keeps this as compressed `id_0 = (? + nogood)`

Narrowest byte-backed replacement:

```text
id_0 = (? + nogood) -- 0x0616 strict compressed packet
```

```text
rightful.ls:1800  if not (0.7745 > lagPercent) then -- jump 14 -- 0x0630
```

Why broader:
- strict block-owned surface does not prove the `0.7745 > lagPercent` branch text here either
- the strict packet only expands to:
  - `((null.goodCounterET + null.badCounterET) >= 1982773)`
  - `null.badCounterET`
  - `id_0 = (? + nogood)`

Narrowest byte-backed replacement:

```text
((goodCounterET + badCounterET) >= 1982773) -- strict compare packet before 0x0630
```

```text
rightful.ls:1801  EMPTY = (EMPTY + nogood) -- 0x063B
```

Why broader:
- strict block-owned packet keeps this as compressed `id_0 = (? + nogood)`

Narrowest byte-backed replacement:

```text
id_0 = (? + nogood) -- 0x063B strict compressed packet
```

### Lines still justified by the strict packet

```text
rightful.ls:1805  , = caluMD5 -- 0x0649
rightful.ls:1807  id_0 = ,.getStringMD5()(id_0) -- 0x0650
rightful.ls:1809  id_0 -- 0x0663
```

Why justified:
- those rows are directly present in the strict block-owned packet from `blocks.lingo/js`
- no broader helper carry is required to keep them

### Conservative lines that are not ahead of the strict packet

```text
rightful.ls:1796  (goodCounterRT + badCounterRT) -- 0x0619
rightful.ls:1802  (goodCounterET + badCounterET) -- 0x063E
rightful.ls:1806  ? -- 0x064C
rightful.ls:1808  ? -- 0x065D
```

These lines are not stricter than the block-owned packet, though the compare lines could be made more exact by adopting the strict `>= 1982773` packet shape.

## Verdict

- Yes, multiple current block-19 readable lines are still ahead of the strict block-owned proof.
- The current final-clean tail is strongest at the compressed packet end:
  - `, = caluMD5`
  - `id_0 = ,.getStringMD5()(id_0)`
  - `id_0`
- The earlier anti-lag gate rows should be treated as broader-than-strict unless the deliverable is later pulled back to the replacements listed above.
