# Lscr-102 Pass 10: Faithful Stack Lift

## Goal

Make another non-speculative pass over `Lscr-102.bin` and improve the canonical
faithful rebuild without inventing source.

## New Tooling

Added:

```text
lift_lscr102_faithful_stack.js
```

Generated:

```text
Lscr-102.stack-faithful.lingo
Lscr-102.stack-faithful-report.md
```

The important change is that opcode `0x41` is now treated as a receiver/context
marker instead of a real `me` value. The previous stack prototype polluted many
expressions with false `me` operands. This pass keeps offsets and leaves packed
literal opcodes unresolved instead of guessing.

## Unresolved Count Improvement

Previous mechanical stack pass:

```text
500 unresolved markers
```

New faithful stack pass:

```text
170 unresolved markers
```

This is a 66% reduction in unresolved mechanical markers.

Largest useful improvements:

| Block | Old unresolved | New unresolved | Result |
|---:|---:|---:|---|
| 8 | 216 | 81 | Main physics loop is much more readable, but still not source-clean |
| 9 | 9 | 4 | Boost / AFR / damage block is now source-shaped |
| 13 | 15 | 3 | Gear update/shift block improved |
| 16 | 21 | 7 | Timing/integrity block improved |
| 19 | 11 | 2 | MD5 source-string builder is now clear |
| 20 | 4 | 0 | Helper shape is mechanically clean, with packed constants still named |

## Canonical Rebuild Updates

Updated:

```text
Lscr-102.rebuilt-faithful.lingo
```

Changes folded in:

- Block 9 now uses the bytecode-supported normalized RPM flow:
  `rpm = rpm / pb`, then cap at `1`.
- Block 9 now includes the recovered AFR and damage-risk branch:
  `dangerLevel`, `airFuelMeter`, `airFuelDelta`, `engineDamageRisk`,
  `ECUtune`, `systemPower`, and `boostCreatedPower`.
- Block 10 now reflects the stronger evidence that `posTq` is loaded through
  `tqArray[parseInt(rpm / 100)]`; the packed tail using `literal_8758` is left
  unresolved.
- Block 19 now reflects the long MD5 source-string construction instead of the
  earlier short three-field placeholder.
- Block 20 is now cautious: it preserves the recovered loop/rounding shape and
  names unresolved packed constants rather than pretending the helper is fully
  known.

## Confidence After Pass 10

Current best estimate:

```text
Semantic understanding:              91-94%
Faithful Lingo-shaped reconstruction: 78-84%
Original-source-faithful Lingo:       66-74%
Byte-perfect/recompilable equivalent: 45-55%
```

We gained real ground, but the remaining gap is still hard because several
blocks use compact/packed literal bytecode forms that are not fully decoded yet.

## Next Best Options

1. Decode packed literal opcodes around `0x83` and the following extension
   bytes. This would directly improve blocks 8, 9, 10, 19, and 20.
2. Build a basic-block control-flow formatter on top of
   `Lscr-102.stack-faithful.lingo` so jumps become `if/else/repeat` structures.
3. Focus manually on block 8, because it contains most of the remaining race
   physics and damage logic.
4. Compare `Lscr-102` against neighboring `Lscr-*` chunks for repeated helper
   patterns, especially the timeout, MD5, and random/log helpers.
