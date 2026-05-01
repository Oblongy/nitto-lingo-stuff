# Lscr-102 Pass 15: Compatible Script Fingerprint and Marker Cleanup

## Compatibility Fingerprint

Added `analyze_lscr_vm_compat.js` and generated:

```text
output/lscr-vm-compatibility.tsv
output/unknown-opcode-context.tsv
```

Result:

- `Lscr-103`, `Lscr-104`, `Lscr-106`, `Lscr-107`, and `Lscr-109` share the
  broad embedded-block/table VM layout, but do not contain many of the target
  unknown opcode families.
- `Lscr-105` shares the layout and contains useful occurrences of `0x0B`,
  `0x29`, `0x09`, `0x0E`, `0x47`, and `0xCF`.
- `Lscr-108` has no embedded code blocks and is excluded from opcode evidence.

Sibling scripts are used only as corroborating opcode evidence, not as source
for `Lscr-102`.

## Marker Cleanup

`0x09` and `0x0E` were classified as no-stack-effect marker bytes in the
faithful stack lifter.

Evidence in `Lscr-102`:

- They appear immediately after packed immediate extension bytes or before
  arithmetic/flush boundaries.
- The previous lifter already left the stack unchanged at those bytes; it only
  emitted unresolved noise.
- Removing them exposes formulas already present on the stack, rather than
  creating new expressions.

Impact:

```text
Unresolved stack markers: 89 -> 79
```

## Promoted Source

Block 8 now includes a byte-backed `hpi` update:

```lingo
carV = param_c0 * 8
hpi = (carV * carV) + 0.751
if hpi < 0 then hpi = 0
```

The JS mirror preserves the raw immediate id through `imm83_7510`.

## Current Remaining Unknowns

Highest-value remaining families:

```text
0x0B  12 occurrences
0x29   8 occurrences
0x04   8 occurrences not matching timeout finalizer
0x19   4 occurrences
0x34   4 occurrences
0x08   4 occurrences
```

## Estimate After Pass 15

Using the stricter original/recompilable framing:

```text
Semantic understanding:              94-96%
Faithful Lingo-shaped reconstruction: 84-89%
Readable JS reconstruction:          83-87%
Original-source-faithful Lingo:       73-80%
Byte-perfect/recompilable equivalent: 48-56%
```
