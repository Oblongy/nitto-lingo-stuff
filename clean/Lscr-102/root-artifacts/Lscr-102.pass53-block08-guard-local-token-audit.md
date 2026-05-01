## Lscr-102 pass53: block 14012 guard-local token audit

Scope:
- script: `Lscr-102`
- handler/block: `14012` (`RaceEngine_runFrame`)
- narrow targets:
  - guard branch at raw `0x1135`
  - guard branch at raw `0x11C5`
- goal:
  - inspect only the guard islands themselves for any stricter local token ownership than the current `/*stack*/ <> (rt mod c1)` floor
  - stay below the broader helper layer
  - either isolate a guard-local token beyond the current rhs-only floor or prove exhaustion

Primary local sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.block08-islands.js`
- `Lscr-102.pass-block14012-table.md`
- `Lscr-102.stack-faithful.lingo` (corroboration only; not accepted over strict local ownership)

## Strict guard-island byte windows

### Guard A: `0x1135`

Adjacent boundaries:
- prior island ends at `0x112C`
  - earlier branch window: `0x1121..0x1128`
- guard island: `0x112C..0x1138`
- fallthrough payload island begins at `0x1139`
- separate tail-symbol island: `0x1159..0x115B`
- resumed join byte: `0x115C`

Raw bytes inside the guard island only:
- `0x112C`: `41` (`op_41`)
- `0x112D..0x112F`: `35 00 65` (`op_35 arg=101 ; "rt"`)
- `0x1130`: `41` (`op_41`)
- `0x1131..0x1133`: `35 00 01` (`op_35 arg=1 ; "c1"`)
- `0x1134`: `22` (`op_22`)
- `0x1135..0x1138`: `13 07 00 23` (`op_13 branch? target/imm=35`)

Guard-local token ownership:
- direct name-bearing ops inside the island:
  - `rt` at `0x112D..0x112F`
  - `c1` at `0x1131..0x1133`
- no `op_3B`, `op_3D`, `op_56`, or other direct named token load appears inside `0x112C..0x1138`
- the two `op_41` bytes at `0x112C` and `0x1130` are not name-bearing on their own and do not isolate any new local token

Adjacent-island separation:
- fallthrough payload starts only at `0x1139` with `3B 00 8F` (`"INT"`)
- separate tail-symbol starts only at `0x1159` with `3B 00 91` (`"KDONE"`)
- the false branch target resumes at `0x115C`, after both `0x1139..0x1158` and `0x1159..0x115B`

Decision for `0x1135`:
- stricter guard-local ownership found:
  - yes, but only for the rhs token pair `rt` / `c1`
- stricter guard-local lhs token found:
  - no
- accepted local floor:
  - the guard island itself exposes only `/*stack*/ <> (rt mod c1)`
- exhaustion:
  - proven at the local-token layer for this island

### Guard B: `0x11C5`

Adjacent boundaries:
- prior island ends at `0x11BC`
  - earlier branch window: `0x11B1..0x11B8`
- guard island: `0x11BC..0x11C8`
- fallthrough payload island begins at `0x11C9`
- separate tail-symbol island: `0x11DD..0x11DF`
- resumed join byte: `0x11E0`

Raw bytes inside the guard island only:
- `0x11BC`: `41` (`op_41`)
- `0x11BD..0x11BF`: `35 00 65` (`op_35 arg=101 ; "rt"`)
- `0x11C0`: `41` (`op_41`)
- `0x11C1..0x11C3`: `35 00 01` (`op_35 arg=1 ; "c1"`)
- `0x11C4`: `22` (`op_22`)
- `0x11C5..0x11C8`: `13 07 00 17` (`op_13 branch? target/imm=23`)

Guard-local token ownership:
- direct name-bearing ops inside the island:
  - `rt` at `0x11BD..0x11BF`
  - `c1` at `0x11C1..0x11C3`
- no direct named lhs token is loaded inside `0x11BC..0x11C8`
- the `op_41` bytes at `0x11BC` and `0x11C0` still do not isolate any additional guard-local token

Adjacent-island separation:
- fallthrough payload starts only at `0x11C9` with `3B 00 93` (`"RINT"`)
- separate tail-symbol starts only at `0x11DD` with `3B 00 94` (`"RDONE"`)
- the false branch target resumes at `0x11E0`, after both `0x11C9..0x11DC` and `0x11DD..0x11DF`

Decision for `0x11C5`:
- stricter guard-local ownership found:
  - yes, but only for the rhs token pair `rt` / `c1`
- stricter guard-local lhs token found:
  - no
- accepted local floor:
  - the guard island itself exposes only `/*stack*/ <> (rt mod c1)`
- exhaustion:
  - proven at the local-token layer for this island

## Broader-layer contradiction, kept separate

Broader corroborating surfaces still overreach:
- `Lscr-102.stack-faithful.lingo` carries:
  - `if not (KDONE <> (rt mod c1)) then -- jump 23 -- 0x11C5`
  - `RINT(s, carV, carAccel) -- 0x11DC`

That corroboration is not accepted for guard-local ownership because:
- `KDONE` first appears only at `0x1159..0x115B`, outside the `0x11BC..0x11C8` guard island
- `RINT` first appears only at `0x11C9..0x11DC`, outside the same guard island
- no named lhs token is loaded inside the strict local guard window itself

## Final result

What this pass proved:
- both guard islands are locally exhausted beyond the current rhs-only floor
- the only direct guard-local named tokens are:
  - `rt`
  - `c1`
- no additional token inside `0x112C..0x1138` or `0x11BC..0x11C8` can be isolated as the missing lhs

What remains unresolved:
- the lhs consumed by `op_41 ... op_41 ... op_22 ... op_13` in each guard island

Safe outcome:
- keep both guards at the strict local form:
  - `if not (/*stack*/ <> (rt mod c1)) then ...`
- do not promote `KDONE`, `RINT`, or `RDONE` into either guard island
