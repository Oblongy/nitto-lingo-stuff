## Lscr-102 pass54: block 14012 pre-guard carry audit

Scope:
- script: `Lscr-102`
- handler/block: `14012` (`RaceEngine_runFrame`)
- narrow targets:
  - guard family around `0x1135`
  - guard family around `0x11C5`
- goal:
  - inspect the immediate pre-guard windows only
  - decide whether either unresolved guard lhs can be sourced from a stricter local carry immediately before the guard island
  - stay below the broader helper layer

Primary local sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.block08-islands.js`
- `Lscr-102.blocks.lingo`
- `Lscr-102.stack-faithful.lingo` (corroboration only; not accepted over strict local ownership)

## Window A: pre-guard carry before `0x1135`

Strict local split:
- `0x1111..0x1115`
  - `41`
  - `35 00 23` (`"c100"`)
  - `16 07 00 0B`
  - guard on `tqFlyFactor > c100`
- `0x1119..0x1120`
  - `41`
  - `35 00 23` (`"c100"`)
  - `57 00 26` (`"tqFlyFactor"`)
  - `51`
- `0x1121..0x1128`
  - `41`
  - `35 00 6F` (`"raceType"`)
  - `3D 00 70` (`"KOTH"`)
  - `12 07 00 88`
- `0x112C..0x1138`
  - separate guard island audited in `pass53`

Adjacent-island boundaries:
- island `381` ends at `0x1121`
- island `382` spans `0x1121..0x112C`
  - `if not (raceType = KOTH) then goto 0x0088`
- island `383` begins at `0x112C`
  - `if not (/*stack*/ <> (rt mod c1)) then goto 0x115C`

Carry decision:
- no strict local carry from `0x1121..0x1128` survives into `0x112C..0x1138`
- the KOTH gate closes at `0x1128`
- the next guard starts with a fresh `op_41` at `0x112C`, then fresh `rt` and `c1` loads
- the preceding `tqFlyFactor = c100` write ends even earlier at `0x1120` with `op_51`

Result for `0x1135`:
- no stricter local pre-guard lhs source found
- the unresolved lhs is not supplied by:
  - `tqFlyFactor`
  - `raceType`
  - `KOTH`
- accepted floor remains:
  - fresh guard island beginning at `0x112C`
  - lhs unresolved inside that island

## Window B: pre-guard carry before `0x11C5`

Strict local split:
- `0x119C..0x11AD`
  - late payload build ending with `3A 00 12` and final `51`
- `0x11AE..0x11B0`
  - `06 03 D2`
  - explicit jump
- `0x11B1..0x11B8`
  - `41`
  - `35 00 6F` (`"raceType"`)
  - `3D 00 73` (`"QM"`)
  - `12 07 00 7C`
- `0x11BC..0x11C8`
  - separate guard island audited in `pass53`

Adjacent-island boundaries:
- island `388` ends at `0x11B1`
  - payload-side expression terminates at `0x11AD`
  - jump at `0x11AE`
- island `389` spans `0x11B1..0x11BC`
  - `if not (raceType = QM) then goto 0x007C`
- island `390` begins at `0x11BC`
  - `if not (/*stack*/ <> (rt mod c1)) then goto 0x11E0`

Carry decision:
- no strict local carry from `0x119C..0x11B8` survives into `0x11BC..0x11C8`
- the payload-side build terminates at `0x11AD`
- the explicit jump at `0x11AE` separates that payload from the later QM gate
- the QM gate closes at `0x11B8`
- the unresolved guard begins with a fresh `op_41` at `0x11BC`, then fresh `rt` and `c1` loads

Result for `0x11C5`:
- no stricter local pre-guard lhs source found
- the unresolved lhs is not supplied by:
  - the payload expression ending at `0x11AD`
  - `raceType`
  - `QM`
- accepted floor remains:
  - fresh guard island beginning at `0x11BC`
  - lhs unresolved inside that island

## Broader-layer contradiction, kept separate

Weaker local surfaces overreach again:
- `Lscr-102.blocks.lingo` and `Lscr-102.stack-faithful.lingo` still carry stronger named-family interpretations near `0x11C5`, including:
  - `if not (KDONE <> (rt mod c1)) then -- jump 23 -- 0x11C5`
  - `RINT(s, carV, carAccel) -- 0x11DC`

Those interpretations are not accepted here because:
- the strict local pre-guard windows end before any `KDONE` or `RINT` token enters
- `KDONE` does not appear until `0x1159..0x115B`
- `RINT` does not appear until `0x11C9..0x11DC`

## Final result

What this pass proved:
- both unresolved guards begin after locally closed pre-guard windows
- neither guard inherits a stricter named lhs from its immediate left-side local context
- both families are now exhausted at:
  - pre-guard carry layer
  - guard-local token layer

What remains unresolved:
- the lhs consumed by each guard's fresh `op_41 ... op_41 ... op_22 ... op_13` sequence

Safe outcome:
- keep both guard lhs values unresolved
- do not promote `tqFlyFactor`, `raceType`, `KOTH`, `QM`, `KDONE`, or `RINT` into those guard windows
