# Lscr-102 Pass 67: Block 19 Guard-Ladder Sync

## Purpose

- Re-check block `43264` (`RaceEngine_buildMd5Source`) guard packet window `0x05D8..0x05F5`.
- Decide whether the current single packet-only guard note is now too coarse relative to the strict block-owned surface.
- Sync the canonical artifacts to the narrower exported row ladder without reviving the older broader `= VOID` helper semantics.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets:
  - `0x05DC`
  - `0x05DD`
  - `0x05E5`
  - `0x05E6`
  - `0x05F1`
  - `0x05F4`
  - `0x05F5`
- This pass edits:
  - `Lscr-102/rightful.ls`
  - `Lscr-102/rightful.from-lingo.js`
  - `Lscr-102/rightful.js`

## Sources

- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md`
- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo`
- `Lscr-102/root-artifacts/Lscr-102.blocks.js`
- `Lscr-102/root-artifacts/Lscr-102.pass57-block19-guard-pair-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass61-block19-anti-lag-tail-floor-sync.md`

## Raw opcode window

From `Lscr-102.annotated-disasm.md`:

```text
05D8: 41           op_41
05D9: 35 00 5D     op_35 arg=93 ; "goodCounterRT"
05DC: 3E           op_3E
05DD: 12           op_12
05DE: 44           op_44
05DF: 00           op_00
05E0: 09           op_09
05E1: 41           op_41
05E2: 35 00 5E     op_35 arg=94 ; "goodCounterET"
05E5: 3E           op_3E
05E6: 12 07 00 11  op_12 branch? target/imm=17
05EA: 56 00 00     op_56 arg=0 ; ""
05ED: 3D 00 5C     op_3D arg=92 ; "nogood"
05F0: 1B           op_1B
05F1: 57 00 00     op_57 arg=0 ; ""
05F4: 51           op_51
05F5: 06 00 4A     op_06 jump?/imm=74
```

## Strict block-owned surface

From `Lscr-102.blocks.lingo` / `Lscr-102.blocks.js`:

```text
null.goodCounterRT
if (false) { /* else goto @1494 */ }
null.goodCounterET
if (false) { /* else goto @1511 */ }
id_0 = (? + nogood)
?
// goto @1507
```

## Why this now beats the older packet note

`pass57` proved the raw subwindow roles, but intentionally stopped at a packet-local classification:

```text
opener / carry-head family
named guard-token load
branch-consumer
local append-store body
post-body jump head
```

That was the right ceiling from raw ownership alone.

But the strict block-owned surface is stronger here: it already exposes a row ladder for this exact window. That means we can promote those narrower rows now, while still rejecting the older broader helper renderings that `pass61` removed:

```text
if not (goodCounterRT = VOID) then ...
if not (goodCounterET = VOID) then ...
```

The new ladder is tighter than those old helper rows because it keeps the conditions as literal `if false` exports and keeps the append row compressed as `id_0 = (? + nogood)`.

## Applied sync

### `rightful.ls`

Old:

```text
-- guard-pair control packet remains packet-only: opener/carry-head -> goodCounterET load -> branch-consumer -> local append-store body -- 0x05DD
-- branch evidence (control-flow-evidence)
-- jump 74 -- 0x05F5
```

New:

```text
goodCounterRT -- 0x05DC
if false then -- else goto @1494 -- 0x05DD
goodCounterET -- 0x05E5
if false then -- else goto @1511 -- 0x05E6
id_0 = (? + nogood) -- 0x05F1
? -- 0x05F4
-- goto @1507 -- 0x05F5
```

### Canonical JS mirrors

Both `rightful.from-lingo.js` and `rightful.js` were synced the same way:

```text
0x05DC -> expr "goodCounterRT"
0x05DD -> branch "if false then -- else goto @1494"
0x05E5 -> expr "goodCounterET"
0x05E6 -> branch "if false then -- else goto @1511"
0x05F1 -> assign "id_0 = (? + nogood)"
0x05F4 -> unresolved "?"
0x05F5 -> control "goto @1507"
```

## What changed

- The canonical artifacts no longer collapse this whole guard packet to one broad unresolved note.
- The exported strict row ladder is now preserved directly in both readable Lingo and JS mirror form.

## What stayed unchanged

- The earlier `0x05BA..0x05C3` `engineDamage/c0` contradiction note
- The later packet-A and packet-B rhs families
- The compare anchors at `0x0619` and `0x063E`

## What remains unresolved

- Exact semantics of the `if false` guard rows beyond the exported false-branch shape
- Exact standalone meaning of the unresolved row at `0x05F4`
- The stray strict-surface comments that follow this ladder in `blocks.lingo/js`:
  - `// [0x05e3] op_4a`
  - `// [0x05f6] op_60`
