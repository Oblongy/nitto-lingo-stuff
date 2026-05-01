## Lscr-102 Pass 50 - Block 11992 First Mixed Family Ownership Split

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block11992-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.reconstructed.lingo`

Handler / block:
- `RaceEngine_stageDistance`
- embedded block offset `11992`

Question:
- Can the first mixed family around raw `0x005C..0x0079`, especially the `0x0075` mixed call-head packet, be decomposed any further from strict local evidence alone?

## Strict raw byte window

Relevant bytes from `annotated-disasm.md`:

```text
0048: 0B           op_0B
0049: 41           op_41
004A: 35 00 03     op_35 arg=3 ; "raceType"
004D: 3D 00 07     op_3D arg=7 ; "HT"
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

## Name ownership from `pass-block11992-table.md`

Confirmed local ids used by this family:
- id `3` -> `raceType`
- id `7` -> `HT`
- id `8` -> `gearValue`
- id `9` -> `c0`
- id `10` -> `STG`
- id `11` -> `s`
- id `12` -> `carV`
- id `13` -> `carAccel`

## What the strict local evidence proves

### 1. The unresolved carry still begins before `0x0050`

`stack-faithful.lingo` and `rebuilt-faithful-full.js` both preserve:

```text
0x0048 unresolved stack=[((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)]
```

So the mixed family still inherits a carried unresolved head from `0x0048`. No local strict surface isolates a smaller owned lhs or callee before that point.

### 2. `0x0050` and `0x005C` are separate gate sites, not part of the final `0x0075` terminator

Local strict surfaces agree on two intervening gates:

- `if not (raceType = HT) then -- jump 60 -- 0x0050`
- `if not (gearValue < c0) then -- jump 28 -- 0x005C`

This means the first family is tighter than a single undifferentiated `0x0048..0x0075` blob. It has:

- carried unresolved head at `0x0048`
- HT gate at `0x0050`
- gear gate at `0x005C`
- later payload build ending at `0x0075`

### 3. `0x0060..0x0075` is one continuous payload build that terminates at `op_51`

The bytes from `0x0060` forward stay contiguous until `0x0075`:

- `op_3B arg=10 ; "STG"`
- `op_39`
- `op_35 arg=11 ; "s"`
- `op_35 arg=12 ; "carV"`
- `op_22`
- `op_35 arg=13 ; "carAccel"`
- `op_22`
- `op_3A arg=3 ; "raceType"`
- `op_51`

`blocks.lingo` / `blocks.js` compress that same span to:

```text
?(?, STG(), ((null.s % null.carV) % null.carAccel))
```

`stack-faithful.lingo` / `rebuilt-faithful-full.js` compress it to:

```text
((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL))((raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel)) -- 0x0075
```

No strict local surface splits `0x0060..0x0075` into two separately owned executable rows. `0x0075` is only the `op_51` terminator for that continuous build.

### 4. `0x0076` is a real post-packet jump, not residue

`0x0076: 06 00 17` is followed by a separate clean `STG` arm beginning at `0x0079`.

So the first mixed family separates cleanly into:

- mixed carry and gates through `0x005C`
- one unsplit payload build `0x0060..0x0075`
- post-packet jump `0x0076`
- clean alternate arm starting `0x0079`

## Decision

Stricter split found:
- yes, at the ownership/shape layer

Further decomposition of the `0x0075` mixed call-head packet itself:
- no, not from strict local evidence alone

The strict local floor for this first family is:
- unresolved carried head at `0x0048`
- explicit gates at `0x0050` and `0x005C`
- one continuous unsplit payload build `0x0060..0x0075`
- jump at `0x0076`
- separate clean `STG` arm at `0x0079..0x008C`

## Unresolved

- The carried lhs / call-head source feeding `0x0048` remains unresolved.
- The exact semantic role of `op_39`, `op_22`, and `op_3A arg=3 ; "raceType"` inside the `0x0060..0x0075` build remains unresolved in this pass.
- No stricter local evidence proves a smaller executable split inside the `0x0060..0x0075` packet.
