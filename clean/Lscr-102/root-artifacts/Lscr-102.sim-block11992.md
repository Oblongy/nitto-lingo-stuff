# Lscr-102 Block 11992 — Stack Simulation

Block index: 7  offset: 11992  length: 2020  code_len: 301

Name table (19 entries):
  [0] staging
  [1] rt
  [2] c1
  [3] raceType
  [4] KOTH
  [5] RIVAL
  [6] TEAMRIVAL
  [7] HT
  [8] gearValue
  [9] c0
  [10] STG
  [11] s
  [12] carV
  [13] carAccel
  [14] c1320
  [15] timeAnchor
  [16] INT
  [17] _system
  [18] milliseconds

## Simulated Lingo

```lingo
on Lscr-102_block11992
-- op_0x44(0)  []
-- op_0x21(0)  []
-- op_0x44(0)  []
-- op_0x44(0)  []
-- op_0x44(0)  []
-- op_0x21(0)  []
-- op_0x44(0)  []
-- op_0x44(0)  []
-- op_0x44(0)  []
-- op_0x21(0)  []
-- op_0x44(0)  []
-- op_0x44(0)  []
tell timeAnchor
end
```

## Residual stack (60 item(s))

  [0] me
  [1] milliseconds
  [2] "_system"
  [3] carAccel
  [4] me
  [5] carV
  [6] me
  [7] s
  [8] me
  [9] <argc=0 ret=True>
  [10] "INT"
  [11] <raceType and "HT">
  [12] me
  [13] <me && <raceType and "TEAMRIVAL">>
  [14] <me starts <raceType and "RIVAL">>
  [15] <raceType and "KOTH">
  [16] me
  [17] <carV - me>
  [18] me
  [19] s
  [20] me
  [21] <argc=0 ret=True>
  [22] "STG"
  [23] <raceType and "HT">
  [24] me
  [25] <me && <raceType and "TEAMRIVAL">>
  [26] <me starts <raceType and "RIVAL">>
  [27] <raceType and "KOTH">
  [28] me
  [29] <timeAnchor and <VOID>>
  [30] me
  [31] <not c1320>
  [32] me
  [33] s
  [34] me
  [35] <<rt or <me op22 c1>> < staging>
  [36] me
  [37] <carV - me>
  [38] me
  [39] s
  [40] me
  [41] <argc=0 ret=True>
  [42] "STG"
  [43] <s - <me op22 carV>>
  [44] me
  [45] <argc=0 ret=True>
  [46] "STG"
  [47] <not c0>
  [48] me
  [49] gearValue
  [50] me
  [51] <raceType and "HT">
  [52] me
  [53] <me && <raceType and "TEAMRIVAL">>
  [54] <me starts <raceType and "RIVAL">>
  [55] <raceType and "KOTH">
  [56] me
  [57] <rt or <me op22 c1>>
  [58] me
  [59] <me / staging>

## Warnings (12)

- unhandled opcode 0x44 at 0x0030 arg=0
- unhandled opcode 0x21 at 0x0032 arg=0
- unhandled opcode 0x44 at 0x003B arg=0
- unhandled opcode 0x44 at 0x0046 arg=0
- unhandled opcode 0x44 at 0x00BA arg=0
- unhandled opcode 0x21 at 0x00BC arg=0
- unhandled opcode 0x44 at 0x00C5 arg=0
- unhandled opcode 0x44 at 0x00D0 arg=0
- unhandled opcode 0x44 at 0x00FD arg=0
- unhandled opcode 0x21 at 0x00FF arg=0
- unhandled opcode 0x44 at 0x0108 arg=0
- unhandled opcode 0x44 at 0x0113 arg=0

## Provenance

- Opcode semantics: ScummVM `lingo-bytecode.cpp` / `lingo-code.cpp` (V4 standard)
- Hidden-VM cluster (0x35/0x36/0x39/0x3A/0x3B/0x51/0x58): inferred from pattern analysis
- Branch polarity (0x55/0x95/0x12/0x16): confirmed — jump when condition is zero/false
- This output is a simulation trace, not a verified recompilable source.
- Unresolved opcodes are emitted as `-- op_0xNN(arg)` comments.
