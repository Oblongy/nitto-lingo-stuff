## Lscr-102 pass43: block 7 call-head packet split

Handler:
- `RaceEngine_stageDistance`

Source files:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

Focus window:
- block `11992`
- raw `0x0048..0x0075`

Strict block surface:

```text
?(?, STG(), ((null.s % null.carV) % null.carAccel))
```

Faithful corroboration:

```text
((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL))((raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel)) -- 0x0075
```

Visible locally proved members:
- carried head contains:
  - `(raceType = KOTH)`
  - `(raceType = RIVAL)`
  - `(raceType = TEAMRIVAL)`
- visible tail contains:
  - `STG`
  - `((s mod carV) mod carAccel)`

Decision:
- tighten the deliverable line from the coarser packet:

```text
?(unresolved_callhead_0x0075, STG, ((s mod carV) mod carAccel)) -- 0x0075
```

- to the fuller unresolved packet:

```text
?(callhead_packet_0x0075, ((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel)) -- 0x0075
```

Why:
- this still keeps the executable semantics unresolved
- it preserves more byte-backed packet content than the older coarse unresolved row
- it does not rewrite the head as a normal first argument or a proven callee

What remains unresolved:
- the leftmost `/*stack*/` source inside the carried head
- whether the carried head is callable structure, boolean residue, or both before the final `op_51` close at `0x0075`
