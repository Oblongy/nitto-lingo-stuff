# Lscr-102 Pass 24: Block 16 Readable-Line Audit

Purpose:
- Compare the current readable line in `final-clean\Lscr-102\rightful.ls` against:
  - `Lscr-102.pass22-hotspot-stack-trace-windows.md`
  - `Lscr-102.pass23-hotspot-carry-tracer.md`
  - raw block-owned surfaces for block `37252`
- Decide whether block-16 strict ownership proves a tighter readable-Lingo line without borrowing from `Lscr-102.rebuilt-faithful-full.js`.

Target deliverable line:

```text
final-clean\Lscr-102\rightful.ls:1492
lightTO1 = timeout(lightTO1).new((((p mod btd) * c1000) + (c1000 / c2)), symbol(runLight)) -- 0x0170
```

Related adjacent readable lines:

```text
final-clean\Lscr-102\rightful.ls:1491  VOID -- 0x0145
final-clean\Lscr-102\rightful.ls:1493  VOID -- 0x0173
```

## Pass 22 stop-map comparison

Block owner:
- `Lscr-102.pass22-hotspot-stack-trace-windows.md` already excludes the same-offset collision from block `31980`.
- The real strict block owner for this seam is block `16` / offset `37252`.

Pass-22 strict surface for the real block:

```text
null.lightTO1
// goto @4898
// [0x011c] op_0f
null.lightTO1.forget()()
null
stagingLightPos1 = null.c0
?
// [0x015b] op_04
(((p % null.btd) * null.c1000) + (null.c1000 / null.startLightTimer))(runLight)
null
lightTO1 = null
?
```

Pass-22 conclusion already tightened the boundary to:
- faithful/full-only residue at `0x0145` and `0x0173`
- real packed blocker at `0x016F..0x0174`

## Pass 23 carry-tracer comparison

Pass-23 raw carry packet:

```text
0161: 1B           op_1B
0162: 3B 00 22     op_3B arg=34 ; "symbol"
0165: 39           op_39
0166: 3D 00 23     op_3D arg=35 ; "runLight"
0169: 3A 00 01     op_3A arg=1 ; "c0"
016C: 41           op_41
016D: 23           op_23
016E: 00           op_00
016F: 04           op_04
0170: 36 00 1D     op_36 arg=29 ; "lightTO1"
0173: 51           op_51
0174: 06 00 7B     op_06 jump?/imm=123
0184: 35 00 18     op_35 arg=24 ; "startLightTimer"
```

Pass-23 carry verdict:
- strict pre-sink packet = `0x0161..0x016E`
- minimal strict named sink = `0x0170 op_36 arg=29 ; "lightTO1"`
- post-sink in-band residue/jump = `0x0173 op_51`, `0x0174 op_06 jump 123`
- `timeout` is present in the block table (`id 31`) but is not named by the raw rows inside this carry core

## Raw block-owned surface comparison

Annotated raw rows:
- `Lscr-102.annotated-disasm.md:6325-6347`

Strict block-owned surface rows:
- `Lscr-102.blocks.lingo:2384-2401`
- mirror: `Lscr-102.blocks.js:2384-2401`

Strict block-owned surface does prove:
- `symbol`
- `runLight`
- `lightTO1`
- the in-band `op_04` / named sink / residue / jump cluster at `0x016F..0x0174`

Strict block-owned surface does not independently prove:
- standalone `lightTO1` residue at `0x0145`
- standalone `timeout` residue at `0x0173`
- a readable `timeout(lightTO1).new(...)` call shape at `0x0170`

## Verdict

The current readable line:

```text
lightTO1 = timeout(lightTO1).new((((p mod btd) * c1000) + (c1000 / c2)), symbol(runLight))
```

is broader than the strict block-owned proof.

Strict block-owned proof currently supports only:
- a pre-sink builder packet naming `symbol` and `runLight`
- a named sink at `0x0170` for `lightTO1`
- an in-band unresolved residue/jump tail at `0x0173..0x0174`

Strict block-owned proof does not yet support promoting:
- `timeout(...)` as the named callee in this seam
- `lightTO1` as the named inner argument to that callee
- `VOID` at `0x0145` or `0x0173` as standalone executable rows

Safe outcome:
- no new readable-Lingo line is promoted from block `16`
- do not narrow or broaden `final-clean\Lscr-102\rightful.ls` from this pass alone
- keep the blocker wording tied to the strict named sink at `0x0170` and the in-band tail at `0x0173..0x0174`
