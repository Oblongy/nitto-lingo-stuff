# Lscr-102 Pass 25: Block 16 Branch-Tail Audit

Purpose:
- Continue the strict block-16 audit after `pass24`.
- Compare the current readable branch-tail lines in `final-clean\Lscr-102\rightful.ls` against:
  - `Lscr-102.pass22-hotspot-stack-trace-windows.md`
  - `Lscr-102.pass23-hotspot-carry-tracer.md`
  - raw block-owned surfaces for the `0x017F..0x018F` seam
- Decide whether the existing readable `startLightTimer(b, VOID)` line is strictly owned by block `37252` without borrowing from `Lscr-102.rebuilt-faithful-full.js`.

Target deliverable lines:

```text
final-clean\Lscr-102\rightful.ls:1495  else if btd = c0 then -- evidence jump at 0x017F
final-clean\Lscr-102\rightful.ls:1496  startLightTimer(b, VOID) -- 0x018F
```

## Raw block-owned seam

Annotated rows:

```text
0177: 41           op_41
0178: 35 00 1B     op_35 arg=27 ; "btd"
017B: 41           op_41
017C: 35 00 01     op_35 arg=1 ; "c0"
017F: 12 07 00 13  op_12 branch? target/imm=19
0183: 41           op_41
0184: 35 00 18     op_35 arg=24 ; "startLightTimer"
0187: 39           op_39
0188: 3D 00 24     op_3D arg=36 ; "b"
018B: 3E           op_3E
018C: 3A 00 02     op_3A arg=2 ; "goodCounterRT"
018F: 51           op_51
```

Relevant block-table names:

```text
id 24 = startLightTimer
id 27 = btd
id 36 = b
```

## Strict block-owned surface comparison

Strict rows from `Lscr-102.blocks.lingo` / `Lscr-102.blocks.js`:

```text
// goto @354
// [0x0162] op_7b
null.btd
if (null.c0) { /* else goto @386 */ }
?(b, false)
// goto @382
// [0x017e] op_5f
```

Strict ownership this does prove:
- a branch seam rooted in `btd` and `c0`
- an in-band compact call-shaped packet that includes `b`
- continued in-band carry beyond that packet

Strict ownership this does not independently prove:
- the readable branch text `else if btd = c0 then`
- the readable call `startLightTimer(b, VOID)` as a final named executable line at `0x018F`

## Broader contrast only

From `Lscr-102.rebuilt-faithful-full.js`:

```text
0x017F  branch if not (btd = c0) then -- jump 19
0x018F  expr   startLightTimer(b, VOID)
0x0190  unresolved jump 95
```

This is broader than the strict block-owned surface and cannot be used as sole proof for the deliverable line.

## Verdict

The current readable line:

```text
startLightTimer(b, VOID)
```

is broader than the strict block-owned proof at this seam.

Safe boundary:
- keep the current deliverable body unchanged
- do not promote a new readable-Lingo rewrite from this seam
- record the strict blocker as:
  - branch-root packet at `0x0177..0x017F`
  - compact in-band call-shaped packet at `0x0183..0x018F`
  - no strictly proven final readable `startLightTimer(b, VOID)` line from block-owned rows alone
