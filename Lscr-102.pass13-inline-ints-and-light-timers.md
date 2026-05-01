# Lscr-102 Pass 13: Inline Integers and Light Timer Arms

## Finding

`op_58` is not purely a literal-table reference. When the current block table
contains the operand id, the operand still resolves through that table. When
the table does not contain the id, the operand is an inline 16-bit integer.

This changes the stack lift from opaque values like `id_500`, `id_1000`,
`id_1500`, and `id_5000` to byte-backed integer constants.

## Evidence

The repeated timer setup arms in blocks 16-18 decode coherently after this:

```text
58 01 F4 -> 500
58 03 E8 -> 1000
58 05 DC -> 1500
58 13 88 -> 5000
```

Block 17 contains a compact dispatch prelude over these labels:

```text
"1", "1T", "s", "sT", "o", "2", "2T"
```

The concrete arms schedule:

```text
lightTO1 -> 500
lightTO1 -> 1500 + secondBuffer * 1000
lightTO2 -> 500
lightTO2 -> 1500 + secondBuffer * 1000
```

The exact jump-table predicate encoding at block 17 `0x003B-0x0063` is still
not collapsed into source syntax. The arm bodies are now represented in the
faithful Lingo and JS files with those exact recovered periods.

The rebuilt source keeps both values from the bytecode path: `rawGreenDelay`
for the dispatch label and `parseInt(greenDelay)` for the spectate delay
callback.

## Marker Cleanup

`0x0A`, `0x0F`, and `0x1A` were classified as no-stack-effect compare/control
markers. They repeatedly surround `VOID_SENTINEL` checks and compact dispatch
fragments. After this classification, unresolved stack markers dropped from
`170` to `151`.

## Files Updated

- `lift_lscr102_faithful_stack.js`
- `Lscr-102.stack-faithful.lingo`
- `Lscr-102.stack-faithful-report.md`
- `Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102.rebuilt-faithful.js`

## Remaining Barrier To 70% Byte-Equivalent

The next byte-perfect gains require decoding these structural opcode families:

```text
0x0C  repeated expression/control separator in block 8
0x04  timeout/call finalizer around timeout(...).new(...)
0x0B  boolean-chain/jump-table connective
0x29  jump-table compare connective
```

Until those are decoded, the reconstruction can be semantically strong while
still falling short of a recompilable equivalent.

## Estimate After Pass 13

```text
Semantic understanding:              93-96%
Faithful Lingo-shaped reconstruction: 83-88%
Readable JS reconstruction:          81-86%
Original-source-faithful Lingo:       71-79%
Byte-perfect/recompilable equivalent: 53-62%
```
