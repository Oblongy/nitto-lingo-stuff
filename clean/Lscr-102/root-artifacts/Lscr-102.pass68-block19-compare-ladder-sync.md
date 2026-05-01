# Lscr-102 Pass 68: Block 19 Compare-Ladder Sync

## Purpose

- Re-check block `43264` (`RaceEngine_buildMd5Source`) packet-A and packet-B compare ladders after the guard ladder sync.
- Decide how much of the richer strict block-owned surface can be promoted into canonical readable Lingo without inventing standalone `goodCounter*` / `badCounter*` rows.
- Tighten the canonical artifacts from one broad rhs-family note into a fuller ladder that keeps raw-order offsets safe.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets:
  - packet A: `0x05F8..0x061A`
  - packet B: `0x061D..0x063E`
- This pass edits:
  - `Lscr-102/rightful.ls`
  - `Lscr-102/rightful.from-lingo.js`
  - `Lscr-102/rightful.js`

## Sources

- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md`
- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo`
- `Lscr-102/root-artifacts/Lscr-102.blocks.js`
- `Lscr-102/root-artifacts/Lscr-102.pass55-block19-threshold-rhs-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass56-block19-compare-core-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass67-block19-guard-ladder-sync.md`

## Raw windows

### Packet A

```text
05F8: 41           op_41
05F9: 35 00 5F     op_35 arg=95 ; "badCounterRT"
05FC: 41           op_41
05FD: 35 00 5D     op_35 arg=93 ; "goodCounterRT"
0600: 41           op_41
0601: 35 00 5F     op_35 arg=95 ; "badCounterRT"
0604: 1B           op_1B
0605: 83 1E 41     op_83 arg=7745
0608: 35 00 60     op_35 arg=96 ; "lagPercent"
060B: 16 07 00 11  op_16 branch? target/imm=17
060F: 56 00 00     op_56 arg=0 ; ""
0612: 3D 00 5C     op_3D arg=92 ; "nogood"
0615: 1B           op_1B
0616: 57 00 00     op_57 arg=0 ; ""
0619: 51           op_51
061A: 06 00 25     op_06 jump?/imm=37
```

### Packet B

```text
061D: 41           op_41
061E: 35 00 61     op_35 arg=97 ; "badCounterET"
0621: 41           op_41
0622: 35 00 5E     op_35 arg=94 ; "goodCounterET"
0625: 41           op_41
0626: 35 00 61     op_35 arg=97 ; "badCounterET"
0629: 1B           op_1B
062A: 83 1E 41     op_83 arg=7745
062D: 35 00 60     op_35 arg=96 ; "lagPercent"
0630: 16 07 00 0E  op_16 branch? target/imm=14
0634: 56 00 00     op_56 arg=0 ; ""
0637: 3D 00 5C     op_3D arg=92 ; "nogood"
063A: 1B           op_1B
063B: 57 00 00     op_57 arg=0 ; ""
063E: 51           op_51
```

## Strict block-owned surface

From `Lscr-102.blocks.lingo` / `Lscr-102.blocks.js`:

```text
// [0x05f6] op_60
((null.goodCounterRT + null.badCounterRT) >= 1982773)
null.badCounterRT
// goto @1548
id_0 = (? + nogood)
?
// goto @1544
// [0x0608] op_25
// [0x061b] op_60
((null.goodCounterET + null.badCounterET) >= 1982773)
null.badCounterET
// goto @1582
id_0 = (? + nogood)
?
```

## Promotion boundary

What is now safe:

1. keep the compare cores explicit as their own packet-local ladders, instead of merging them into the rhs-family note.
2. keep the branch-consumer targets as exported goto-style control rows:
   - `@1548`
   - `@1544`
   - `@1582`
3. keep the compressed append-store rows and trailing unresolved closure rows.

What is still not safe:

1. promoting standalone `goodCounterRT`, `badCounterRT`, `goodCounterET`, or `badCounterET` executable rows inside the compare cores.
2. replacing the raw rhs-family with a cleaner decimal predicate like `0.7745 > lagPercent`.
3. assigning a stronger standalone meaning to the `?` closure rows at `0x0619` and `0x063E`.

## Applied sync

### `rightful.ls`

Old:

```text
-- packet A rhs family remains packet-only: op_83 arg=7745 -> lagPercent -> branch-consumer target/imm=17 -- 0x0605
id_0 = (? + nogood) -- 0x0616
((goodCounterRT + badCounterRT) >= 1982773) -- 0x0619
-- branch evidence (control-flow-evidence)
-- jump 37 -- 0x061A
-- packet B rhs family remains packet-only: op_83 arg=7745 -> lagPercent -> branch-consumer target/imm=14 -- 0x062A
id_0 = (? + nogood) -- 0x063B
((goodCounterET + badCounterET) >= 1982773) -- 0x063E
```

New:

```text
-- packet A compare core remains packet-only: duplicated badCounterRT load -> goodCounterRT load -> duplicated badCounterRT load -> terminal combine -- 0x05F8
-- packet A rhs ladder remains packet-local: op_83 arg=7745 -> lagPercent -> branch-consumer target/imm=17 -> goto @1548 -- 0x0605
id_0 = (? + nogood) -- 0x0616
? -- 0x0619
-- goto @1544 -- 0x061A
-- packet B compare core remains packet-only: duplicated badCounterET load -> goodCounterET load -> duplicated badCounterET load -> terminal combine -- 0x061D
-- packet B rhs ladder remains packet-local: op_83 arg=7745 -> lagPercent -> branch-consumer target/imm=14 -> goto @1582 -- 0x062A
id_0 = (? + nogood) -- 0x063B
? -- 0x063E
```

### Canonical JS mirrors

Both `rightful.from-lingo.js` and `rightful.js` were synced the same way:

```text
0x05F8 -> unresolved compare-core note
0x0605 -> unresolved rhs-ladder note ending in goto @1548
0x0616 -> assign "id_0 = (? + nogood)"
0x0619 -> unresolved "?"
0x061A -> control "goto @1544"
0x061D -> unresolved compare-core note
0x062A -> unresolved rhs-ladder note ending in goto @1582
0x063B -> assign "id_0 = (? + nogood)"
0x063E -> unresolved "?"
```

## What changed

- The compare ladders are now split into compare-core note, rhs-ladder note, append-store row, trailing unresolved row, and goto-style closure.
- The old compare-at-closure rows were removed because the stricter block-owned surface keeps those closures unresolved instead.

## What stayed unchanged

- The block-19 guard ladder from pass `67`
- The earlier `engineDamage/c0` contradiction note
- The final hash tail starting at `0x0649`

## What remains unresolved

- Exact standalone semantics of the compare-core rows beyond packet membership
- Exact standalone semantics of the trailing `?` rows at `0x0619` and `0x063E`
- Whether a future stricter block-local surface can ever promote the `null.badCounterRT` / `null.badCounterET` rows without contradicting the duplicate-load audits
