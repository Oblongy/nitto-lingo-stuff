# Lscr-102 Pass 27: Block 19 Compare-Window Audit

Purpose:
- Re-check only the anti-lag compare window `0x05DD..0x063E` in block `43264`.
- Use only:
  - `Lscr-102.annotated-disasm.md`
  - `Lscr-102.blocks.lingo`
  - `Lscr-102.blocks.js`
  - `Lscr-102.pass22-hotspot-stack-trace-windows.md`
  - `Lscr-102.pass23-strict-carry-tracer.md`
- Separate:
  - lines that are still broader than the strict block-owned proof
  - lines that are already within strict proof but could be tightened to the exact block-owned compare packet

Target deliverable window:

```text
final-clean\Lscr-102\rightful.ls:1786-1802
```

## Strict block-owned compare packet

Strict rows:

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
```

Annotated rows:

```text
05DD: 12           op_12
05DE: 44           op_44
05E6: 12 07 00 11  op_12 branch? target/imm=17
05F1: 57 00 00     op_57 arg=0 ; ""
05F4: 51           op_51
05F5: 06 00 4A     op_06 jump?/imm=74
0605: 83 1E 41     op_83 arg=7745
0608: 35 00 60     op_35 arg=96 ; "lagPercent"
060B: 16 07 00 11  op_16 branch? target/imm=17
0616: 57 00 00     op_57 arg=0 ; ""
0619: 51           op_51
061A: 06 00 25     op_06 jump?/imm=37
062A: 83 1E 41     op_83 arg=7745
062D: 35 00 60     op_35 arg=96 ; "lagPercent"
0630: 16 07 00 0E  op_16 branch? target/imm=14
063B: 57 00 00     op_57 arg=0 ; ""
063E: 51           op_51
```

Pass-22 / pass-23 constraints:

```text
0x05F4..0x05F5  strict owner = raw gate edge only
0x063F..0x064C  strict owner = start of strict tail packet
do not carry broader helper names or thresholds back into the strict packet
```

## Current line status

### Still broader than strict proof

```text
rightful.ls:1786  if not (goodCounterRT = VOID) then -- jump 9 marker 0x44 -- 0x05DD
rightful.ls:1788  if not (goodCounterET = VOID) then -- jump 17 -- 0x05E6
rightful.ls:1789  EMPTY = (EMPTY + nogood) -- 0x05F1
rightful.ls:1790  (goodCounterRT = VOID) -- 0x05F4
rightful.ls:1794  if not (0.7745 > lagPercent) then -- jump 17 -- 0x060B
rightful.ls:1795  EMPTY = (EMPTY + nogood) -- 0x0616
rightful.ls:1800  if not (0.7745 > lagPercent) then -- jump 14 -- 0x0630
rightful.ls:1801  EMPTY = (EMPTY + nogood) -- 0x063B
```

Narrowest byte-backed replacements:

```text
0x05DD  if false then -- evidence jump at 0x05DD
0x05E6  if false then -- evidence jump at 0x05E6
0x05F1  id_0 = (? + nogood) -- strict compressed packet
0x05F4  ? -- unresolved gate core
0x060B  ((goodCounterRT + badCounterRT) >= 1982773) -- strict compare packet before the branch
0x0616  id_0 = (? + nogood) -- strict compressed packet
0x0630  ((goodCounterET + badCounterET) >= 1982773) -- strict compare packet before the branch
0x063B  id_0 = (? + nogood) -- strict compressed packet
```

### Not ahead of strict proof, but currently conservative

```text
rightful.ls:1796  (goodCounterRT + badCounterRT) -- 0x0619
rightful.ls:1802  (goodCounterET + badCounterET) -- 0x063E
```

These are not broader than the strict block-owned proof. They are actually weaker than the strict packet, because the strict block-owned surface proves:

```text
((goodCounterRT + badCounterRT) >= 1982773)
((goodCounterET + badCounterET) >= 1982773)
```

So the exact byte-backed tightening, if later desired, is:

```text
0x0619  ((goodCounterRT + badCounterRT) >= 1982773)
0x063E  ((goodCounterET + badCounterET) >= 1982773)
```

## Threshold contradiction map

- Strict block-owned proof exposes the compare packet in `>= 1982773` form.
- The current readable branch lines at `0x060B` and `0x0630` still borrow the broader helper interpretation `if not (0.7745 > lagPercent) then`.
- That means the real contradiction boundary is:
  - strict packet: compare rows at `0x0619` / `0x063E` in `1982773` form
  - broader-only helper carry: threshold/branch rewrite using `0.7745 > lagPercent`

Outcome:
- yes, some current readable lines in `0x05DD..0x063E` are still ahead of strict proof
- the compare rows themselves are not ahead; they are conservative and can be tightened to the exact `>= 1982773` packet if the deliverable is later rewritten
