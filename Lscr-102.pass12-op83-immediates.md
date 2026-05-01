# Lscr-102 Pass 12: op_83 Immediate Decode

## Finding

`op_83` is a compact immediate form. Most observed operands decode as
fixed-point decimal values by dividing the operand by 10000.

The exception preserved by the lifter is operand `10045`, which behaves like a
void/timeout sentinel in interval and light-timeout comparisons.

## Evidence

- `83 41 35` -> `16693` -> `1.6693`
- `83 1D 3A` -> `7482` -> `0.7482`
- `83 1D 41` -> `7489` -> `0.7489`
- `83 22 36` -> `8758` -> `0.8758`
- `83 1E 41` -> `7745` -> `0.7745`
- `83 27 3D` -> `10045` is retained as `VOID_SENTINEL`

The decoded values appear coherently in boost math, damage exponents, helper
rounding, torque-tail code, and integrity/checksum paths. Treating them as
ordinary literal table IDs produced `literal_*` placeholders; decoding them as
fixed-point immediates removes that opacity without inventing new behavior.

## Files Updated

- `lift_lscr102_faithful_stack.js`
- `Lscr-102.stack-faithful.lingo`
- `Lscr-102.stack-faithful-report.md`
- `Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102.rebuilt-faithful.js`
- `Lscr-102.pass11-js-readable-rebuild.md`

## Impact

This pass does not reduce the unresolved stack-structure count, but it removes
a major semantic blocker. Remaining `literal_*` markers in the stack output are
non-`op_83` table literals or call-shape artifacts.

## Estimate After Pass 12

```text
Semantic understanding:              92-95%
Faithful Lingo-shaped reconstruction: 80-86%
Readable JS reconstruction:          78-84%
Original-source-faithful Lingo:       68-76%
Byte-perfect/recompilable equivalent: 46-56%
```
