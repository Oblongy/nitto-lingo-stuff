## Lscr-102 Pass 53 - Block 19 append-store ownership

Scope:
- Work only on block `43264` (`RaceEngine_buildMd5Source`) append-store suffixes:
  - `0x060F..0x0616`
  - `0x0634..0x063B`
- Question:
  - can the accepted rows `id_0 = (? + nogood)` be tied to a stricter local-store ownership split?
  - or are they already at floor?

Sources:
- `Lscr-102.pass26-block19-strict-packet-audit.md`
- `Lscr-102.pass29-block19-row-anchor-split.md`
- `Lscr-102.pass30-block19-packet-floor-exhaustion.md`
- `Lscr-102.pass51-block19-compare-subwindow-classification.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`
- `Lscr-102.block08-islands.js`

## Raw byte windows

Packet A suffix:

```text
060F: 56 00 00     op_56 arg=0 ; ""
0612: 3D 00 5C     op_3D arg=92 ; "nogood"
0615: 1B           op_1B
0616: 57 00 00     op_57 arg=0 ; ""
0619: 51           op_51
061A: 06 00 25     op_06 jump?/imm=37
```

Packet B suffix:

```text
0634: 56 00 00     op_56 arg=0 ; ""
0637: 3D 00 5C     op_3D arg=92 ; "nogood"
063A: 1B           op_1B
063B: 57 00 00     op_57 arg=0 ; ""
063E: 51           op_51
```

Name corroboration from block payload table:
- id `92` = `nogood`

## Strict surface rows

`Lscr-102.blocks.lingo` and `Lscr-102.blocks.js` both preserve the same compressed row shape for these suffixes:

```text
id_0 = (? + nogood)
?
```

for both packet A and packet B.

## Ownership split

### Suffix A: `0x060F..0x0616`

This suffix does have a clean local-store ownership shape:

```text
0x060F  op_56 arg=0   -> read local `0`
0x0612  op_3D arg=92  -> read `nogood`
0x0615  op_1B         -> add
0x0616  op_57 arg=0   -> store local `0`
```

This is the strongest block-local ownership split available in the current raw evidence:
- source local: local `0`
- appended token: `nogood`
- sink local: local `0`

What it does **not** prove:
- it does not expose a stricter lhs name than `id_0`
- it does not expose the unresolved left addend hidden behind `?`
- it does not isolate a further standalone executable row after the store

Terminator / closure evidence:
- `0x0619` is raw `op_51`
- `0x061A` is the post-store jump edge
- so the store packet is cleanly closed, but not split into a better readable row than the existing strict one

### Suffix B: `0x0634..0x063B`

This suffix has the same clean local-store ownership shape:

```text
0x0634  op_56 arg=0   -> read local `0`
0x0637  op_3D arg=92  -> read `nogood`
0x063A  op_1B         -> add
0x063B  op_57 arg=0   -> store local `0`
```

Again, this is the strongest block-local ownership split available:
- source local: local `0`
- appended token: `nogood`
- sink local: local `0`

What it still does **not** prove:
- no stricter readable lhs than `id_0`
- no resolved hidden addend in place of `?`
- no separate post-store executable row before the closure

Terminator / closure evidence:
- `0x063E` is raw `op_51`
- there is no additional clean sink or standalone row between `0x063B` and that closure

## Cross-artifact contradiction boundary

`Lscr-102.block08-islands.js` normalizes island `130` (`0x0605..0x0616`) into:

```text
systemPower = (systemPower + (UsInit * c0_05)) @ 0x0612
```

That surface is not adopted here because:
- the raw suffix itself only proves `local 0`, `nogood`, `add`, `store local 0`
- the island-normalized names are broader helper-side interpretation, not the strict local-store proof

No equivalent stricter local naming is available for `0x0634..0x063B` either.

## Decision

The accepted rows:

```text
id_0 = (? + nogood) -- 0x0616
id_0 = (? + nogood) -- 0x063B
```

can be tied to a stricter **ownership split**:
- read local `0`
- read `nogood`
- add
- store local `0`

But they are already at the current readable strict floor.

Reason:
1. the sink is block-locally proven only as `op_57 arg=0`
2. the source lhs remains an unresolved local-0 value, not a named variable
3. the hidden addend stays unresolved as `?`
4. the following `op_51` bytes are only packet-closure evidence, not separate executable rows

## Result

Safe conclusion for block `43264` append-store suffixes:
- ownership split is now explicit for `0x060F..0x0616` and `0x0634..0x063B`
- no stricter readable executable row than `id_0 = (? + nogood)` is justified
- both accepted rows are already at floor
