## Lscr-102 pass56 - block 7 INT packet role audit

Scope:
- script: `Lscr-102`
- handler: `RaceEngine_stageDistance`
- block: `11992`
- raw window: `0x0121..0x0140`
- target packet: `int_packet_0x013F`

Sources:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass46-block07-third-stack-packet.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass47-block07-int-packet-pullback.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass49-block07-family-ownership-shape.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass55-block07-clean-arm-audit.md`

Question:
- Can the unresolved `0x013F` packet be classified one level deeper into internal role groups without promoting a clean `INT(...)` call?

## Raw disasm

```text
0121: 3B 00 10     op_3B arg=16 ; "INT"
0124: 39           op_39
0125: 41           op_41
0126: 35 00 0B     op_35 arg=11 ; "s"
0129: 41           op_41
012A: 35 00 0C     op_35 arg=12 ; "carV"
012D: 41           op_41
012E: 35 00 0D     op_35 arg=13 ; "carAccel"
0131: 3B 00 11     op_3B arg=17 ; "_system"
0134: 35 00 12     op_35 arg=18 ; "milliseconds"
0137: 41           op_41
0138: 35 00 0F     op_35 arg=15 ; "timeAnchor"
013B: 1C           op_1C
013C: 83 3A 00     op_83 arg=14848
013F: 04           op_04
0140: 51           op_51
```

## Faithful stack surface

```text
-- 0x04 unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848] -- 0x013F
1.4848 -- 0x0140
```

## Internal role groups

### Group A - carried heads inherited from the earlier family

These items are not built locally inside `0x0121..0x0140`; they enter this packet from the earlier carried family rooted at `0x0115`:

```text
(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL))
(((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL))
(raceType = TEAMRIVAL)
```

Exact local entry point:
- these are the first three stack members consumed by the final `op_04` at `0x013F`
- none of them is rebuilt or renamed in the local `0x0121..0x0140` window

### Group B - named callee token

```text
0121..0123: op_3B arg=16 ; "INT"
```

Safe local claim:
- `INT` is the first named token introduced inside the packet body itself

Not safe:
- promoting this to a standalone executable `INT(...)` row

### Group C - callhead combiner site

```text
0124: op_39
```

Safe local claim:
- `op_39` is an in-band combiner site immediately after the named `INT` token

Unresolved:
- its exact standalone semantic role

### Group D - three local operand-pair groups

First local operand pair:

```text
0125: 41           op_41
0126..0128: 35 00 0B     op_35 arg=11 ; "s"
```

Second local operand pair:

```text
0129: 41           op_41
012A..012C: 35 00 0C     op_35 arg=12 ; "carV"
```

Third local operand pair:

```text
012D: 41           op_41
012E..0130: 35 00 0D     op_35 arg=13 ; "carAccel"
```

Safe local claim:
- the packet introduces three repeated local operand-pair groups after the `INT` seed
- each pair is one `op_41` followed by one named local load

### Group E - trailing named service token

```text
0131..0133: 3B 00 11     op_3B arg=17 ; "_system"
```

Safe local claim:
- `_system` is a direct named token in the packet body
- unlike `s`, `carV`, and `carAccel`, it is introduced without a preceding local `op_41`

### Group F - local delta-build cluster

```text
0134..0136: 35 00 12     op_35 arg=18 ; "milliseconds"
0137: 41           op_41
0138..013A: 35 00 0F     op_35 arg=15 ; "timeAnchor"
013B: 1C           op_1C
```

Safe local claim:
- this is the packet-local cluster that produces the faithful `(milliseconds - timeAnchor)` member
- `milliseconds` and `timeAnchor` are direct named loads in the raw window
- `op_41` and `op_1C` remain opcode-role boundaries only

### Group G - fixed-point immediate tail

```text
013C..013E: 83 3A 00     op_83 arg=14848
```

Safe local claim:
- the exported immediate is `op_83 arg=14848`
- the faithful fixed-point surface renders the same tail member as `1.4848`

Not safe:
- treating `1.4848` as a standalone executable line at `0x0140`

### Group H - final packet consumer and terminator

```text
013F: 04           op_04
0140: 51           op_51
```

Safe local claim:
- `0x013F` is the final unresolved packet consumer for the full carried-head-plus-local-body stack
- `0x0140` is only the trailing `op_51` terminator

## Role-group summary

The strict local floor for `int_packet_0x013F` is now:

1. carried heads from the earlier `0x0115` family
2. named callee token `INT`
3. one in-band combiner site `op_39`
4. three repeated local operand pairs: `s`, `carV`, `carAccel`
5. trailing named service token `_system`
6. local delta-build cluster `milliseconds`, `timeAnchor`, `op_1C`
7. fixed-point immediate `op_83 arg=14848`
8. final unresolved consumer `op_04`
9. packet terminator `op_51`

## What remains unresolved

- The exact standalone semantics of `op_39` at `0x0124`.
- The exact standalone semantics of each `op_41` site at `0x0125`, `0x0129`, `0x012D`, and `0x0137`.
- The exact standalone semantics of `op_1C` at `0x013B`.
- Whether `INT` should be read as a callee, constructor head, or another packet-local role boundary; this pass does not promote a clean `INT(...)` call.
- The carried-head members remain unresolved prior-stack inputs rather than local executable rows.

## Decision

Yes, the `0x013F` packet can be classified one level deeper without promoting a clean `INT(...)` call.

The safe deeper split is:
- carried heads
- named `INT` token
- `op_39` combiner site
- three local operand pairs
- named `_system` token
- `(milliseconds - timeAnchor)` build cluster
- `op_83 arg=14848` fixed-point immediate
- final `op_04` consumer
- trailing `op_51` terminator

This does **not** justify changing the current unresolved deliverable row, because the packet still consumes inherited unresolved heads and still ends in the same unresolved `op_04` boundary.
