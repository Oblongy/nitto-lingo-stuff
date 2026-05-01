# Lscr-102 Pass 11: Readable JavaScript Rebuild

## Output

Created:

```text
Lscr-102.rebuilt-faithful.js
```

This is a readable JavaScript rendering of the current faithful Lingo
reconstruction, not a clean-room replacement. The goal is to make the recovered
logic easier to inspect while preserving block boundaries and uncertainty.

## What Was Ported

- Blocks 0-20 are represented as methods on `Lscr102RaceEngine`.
- State variables are represented as instance fields.
- Director/Lingo concepts are shimmed:
  - `VOID` -> `undefined`
  - `EMPTY` -> `""`
  - `sprite(...)`, `timeout(...)`, `xtra(...)`, and `_system` delegate through
    a provided `host` object.
- Compact high-confidence blocks are direct JS:
  - block 4 boost lag/range
  - block 14 brake setter
  - block 15 clutch clamp
- Block 9 now has the recovered boost/AFR/damage-risk flow in readable JS.
- Block 19 has the long MD5 source-string build.
- Block 20 has the recovered loop/rounding helper shape.

## Extra Rebuild Work

Block 8 was expanded beyond the older Lingo summary using
`Lscr-102.stack-faithful.lingo`:

- frame timing and average FPS update
- NOS consumption and NOS callback
- power calculation cluster
- rev limiter and brake/velocity cluster
- traction callback
- damage cluster skeleton
- final `runEngineCB(rpm, mph, s, boostPsi, VOID)` callback

The damage logic is source-shaped, not byte-perfect. It keeps the recovered
part names and formulas where the stack lift produced them.

## Validation

Ran:

```text
node --check Lscr-102.rebuilt-faithful.js
```

Result:

```text
syntax OK
```

## Remaining Unknowns

Superseded by Pass 12: the `literal_16693`, `literal_7482`, `literal_7489`,
and `literal_8758` placeholders were decoded as `op_83` fixed-point
immediates. The remaining unknowns are now mostly control-flow shape,
call-target ambiguity, and non-`op_83` table literals.

## Estimate After Pass 11

Readable JavaScript reconstruction:

```text
Semantic understanding:              91-94%
Faithful Lingo-shaped reconstruction: 78-84%
Readable JS reconstruction:          75-82%
Original-source-faithful Lingo:       66-74%
Byte-perfect/recompilable equivalent: 45-55%
```

The JS version is easier to read than the Lingo reconstruction. After this
pass, control-flow decode is the next thing that moves the percentage.
