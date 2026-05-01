# Lscr-102 Pass 14: Boundary Marker and Timeout Call Shape

## Constraint

This pass intentionally avoids inventing source. Changes are limited to opcode
behaviors that preserve the existing stack effect or to call shapes directly
proved by repeated byte sequences.

## `0x0C`

`0x0C` was classified as a no-stack-effect boundary marker.

Evidence:

- The previous lifter already left the operand stack unchanged when it hit
  `0x0C`; it only emitted an unresolved marker.
- `0x0C` appears between completed statements and the next expression, for
  example before repeated assignments in block 8 and block 9.
- Treating it as a boundary marker changed reporting noise, not recovered
  expression values.

Impact:

```text
Unresolved stack markers: 151 -> 101
```

## `0x04` Timeout Finalizer

`0x04` is now pattern-matched only for the repeated timeout call shape:

```text
timeout(name) + (delay ^ symbol(handler)) -> timeout(name).new(delay, symbol(handler))
```

This is used only when the stack contains an explicit `timeout` receiver and a
top expression of the exact form `delay ^ symbol(...)`.

Recovered examples:

```text
runInterval = timeout(runInterval).new(1000 / sendInterval, symbol(sendPos))
lightDelayTO = timeout(lightDelayTO).new(5000, symbol(stagedAndReady))
lightTO1 = timeout(param_greenDelay).new(500, symbol(runLight))
lightTO1 = timeout(param_greenDelay).new(1500 + secondBuffer * 1000, symbol(runLight))
lightTO2 = timeout(param_greenDelay).new(500, symbol(runLight))
lightTO2 = timeout(param_greenDelay).new(1500 + secondBuffer * 1000, symbol(runLight))
```

Impact:

```text
Unresolved stack markers: 101 -> 89
```

## Source Correction

The faithful Lingo and readable JS were adjusted back toward the bytecode:

- block 5 now assigns `runInterval = timeout(runInterval).new(...)`
- block 17 uses `timeout(rawGreenDelay).new(...)`
- block 18 uses `timeout(period).new(greenDelay, #runLight)`

The JS remains a readable mirror, but its timeout shim now models the original
Director object shape instead of a flattened JavaScript helper.

## Remaining High-Value Unknowns

```text
0x0B  boolean/dispatch connective
0x29  compact dispatch compare connective
0x09  arithmetic/call-shape marker
0x0E  arithmetic/call-shape marker
0x34  init-table sentinel/control marker
```

## Estimate After Pass 14

Using the user's stricter byte-perfect framing:

```text
Semantic understanding:              93-96%
Faithful Lingo-shaped reconstruction: 84-88%
Readable JS reconstruction:          82-86%
Original-source-faithful Lingo:       72-79%
Byte-perfect/recompilable equivalent: 47-55%
```
