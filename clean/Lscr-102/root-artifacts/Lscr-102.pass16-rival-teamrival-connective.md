# Lscr-102 Pass 16: RIVAL/TEAMRIVAL Connective

## Finding

`op_0B` has a stable, byte-backed shape in `Lscr-102`: it appears between two
adjacent `raceType` equality tests that then feed a single callback/message
arm. The strongest supported promotion is that the current faithful rebuild
should treat `RIVAL` and `TEAMRIVAL` as sharing the same dispatch arm anywhere
this exact pattern appears.

This pass does **not** rename `op_0B` globally. It only promotes the specific
`RIVAL`/`TEAMRIVAL` pairing where the same byte shape repeats.

## Evidence

### Block 16 (`37252`)

`Lscr-102.annotated-disasm.md`, block 16:

```text
00AF: 41           op_41
00B0: 35 00 0D     op_35 arg=13 ; "raceType"
00B3: 3D 00 13     op_3D arg=19 ; "RIVAL"
00B6: 12           op_12
00B7: 44           op_44
00B8: 00           op_00
00B9: 0B           op_0B
00BA: 41           op_41
00BB: 35 00 0D     op_35 arg=13 ; "raceType"
00BE: 3D 00 14     op_3D arg=20 ; "TEAMRIVAL"
00C1: 12 07 00 18  op_12 branch? target/imm=24
00C5: 3B 00 15     op_3B arg=21 ; "RIVREADY"
```

This is the exact block that feeds the ready callback ladder:

- `KOTH -> KREADY`
- `QM -> RREADY`
- `RIVAL / TEAMRIVAL -> RIVREADY`
- `HTQ -> HTQREADY`
- `HT -> HTREADY`

The stack-faithful artifact already lands on the shared callback arm:

```text
RIVREADY(VOID, createMd5Hash(0)) -- 0x00D6
```

### Block 7 (`11992`)

The same `RIVAL ... op_0B ... TEAMRIVAL` pairing occurs in the start/RT block
before the shared `RIVRT` arm:

```text
0032: 41           op_41
0033: 35 00 03     op_35 arg=3 ; "raceType"
0036: 3D 00 05     op_3D arg=5 ; "RIVAL"
0039: 12           op_12
003A: 44           op_44
003B: 00           op_00
003C: 0B           op_0B
003D: 41           op_41
003E: 35 00 03     op_35 arg=3 ; "raceType"
0041: 3D 00 06     op_3D arg=6 ; "TEAMRIVAL"
0044: 12 07 00 16  op_12 branch? target/imm=22
0048: 3B 00 10     op_3B arg=16 ; "INT"
```

and later:

```text
00BC: 41           op_41
00BD: 35 00 03     op_35 arg=3 ; "raceType"
00C0: 3D 00 05     op_3D arg=5 ; "RIVAL"
00C3: 12           op_12
00C4: 44           op_44
00C5: 00           op_00
00C6: 0B           op_0B
00C7: 41           op_41
00C8: 35 00 03     op_35 arg=3 ; "raceType"
00CB: 3D 00 06     op_3D arg=6 ; "TEAMRIVAL"
00CE: 12 07 00 16  op_12 branch? target/imm=22
00D2: 3B 00 10     op_3B arg=16 ; "INT"
```

This repetition supports the narrow connective claim without forcing a global
opcode semantics rename.

## `op_04` Shape In The Same Family

This pass also keeps the earlier `timeout(...).new(...)` promotion grounded.
Block 16 uses `op_04` immediately after the `timeout/name/delay/symbol`
assembly:

```text
0169: 3A 00 01     op_3A arg=1 ; "c0"
016C: 41           op_41
016D: 23           op_23
016E: 00           op_00
016F: 04           op_04
0170: 36 00 1D     op_36 arg=29 ; "lightTO1"
```

and again:

```text
01D7: 3A 00 01     op_3A arg=1 ; "c0"
01DA: 41           op_41
01DB: 23           op_23
01DC: 00           op_00
01DD: 04           op_04
01DE: 36 00 25     op_36 arg=37 ; "lightTO2"
```

That keeps `op_04` in the "call/result finalizer" bucket for these timeout
arms, but this pass does not extend that claim beyond the repeated shapes above.

## Changes Promoted

- `Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102.rebuilt-faithful.js`

Promoted change:

- block 16 now treats `RIVAL` and `TEAMRIVAL` as sharing the `RIVREADY` arm

Left unchanged:

- block 7 start/RT dispatch is still not fully rewritten into high-level source
- block 18 `KDONE` / `RDONE` message-finalizer shapes remain documented but not
  promoted into a broader opcode rename
- no other unresolved opcode families were renamed in this pass
