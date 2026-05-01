# Lscr-102 Pass 56: Block 19 Compare-Core Audit

Purpose:
- inspect only block `43264` compare-build cores:
  - `0x05F8..0x0604`
  - `0x061D..0x0629`
- classify those core windows one level deeper than the older broad `compare-build core` label
- do not promote standalone executable `goodCounter*` or `badCounter*` rows

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block43264-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block19-compare-subwindow-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass55-block19-threshold-rhs-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`

Handler:
- `RaceEngine_buildMd5Source`

## Result

Yes. Both compare-build cores can be classified one level deeper.

The safe deeper split is:

```text
packet A core: 0x05F8..0x0604
- opener / build-head byte
- first named counter load
- separator / combiner byte
- second named counter load
- separator / combiner byte
- repeated named counter load
- terminal arithmetic combine byte

packet B core: 0x061D..0x0629
- opener / build-head byte
- first named counter load
- separator / combiner byte
- second named counter load
- separator / combiner byte
- repeated named counter load
- terminal arithmetic combine byte
```

This is stricter than the earlier single `compare-build core` bucket, but it still does not justify standalone readable `goodCounter*` or `badCounter*` rows.

## Block vocabulary corroboration

From `Lscr-102.pass-block43264-table.md`:

```text
id 93 = goodCounterRT
id 94 = goodCounterET
id 95 = badCounterRT
id 97 = badCounterET
```

These names are safe as exported payload tokens only.

## Packet A core: `0x05F8..0x0604`

Raw rows:

```text
05F8: 41           op_41
05F9: 35 00 5F     op_35 arg=95 ; "badCounterRT"
05FC: 41           op_41
05FD: 35 00 5D     op_35 arg=93 ; "goodCounterRT"
0600: 41           op_41
0601: 35 00 5F     op_35 arg=95 ; "badCounterRT"
0604: 1B           op_1B
```

Strict deeper classification:

```text
0x05F8            opener / build-head byte
  - exact opcode: `op_41`
  - safe role: opens the arithmetic build family inside this core
  - not safe: assigning a named operand or standalone row to this byte alone

0x05F9..0x05FB    first named counter load
  - exact opcode: `op_35 arg=95 ; "badCounterRT"`
  - safe role: first direct name-table load in packet A core

0x05FC            separator / combiner byte
  - exact opcode: `op_41`
  - safe role: in-band structural separator before the next named load

0x05FD..0x05FF    second named counter load
  - exact opcode: `op_35 arg=93 ; "goodCounterRT"`
  - safe role: single direct load of `goodCounterRT` inside this core

0x0600            separator / combiner byte
  - exact opcode: `op_41`
  - safe role: in-band structural separator before the repeated load

0x0601..0x0603    repeated named counter load
  - exact opcode: `op_35 arg=95 ; "badCounterRT"`
  - safe role: second direct load of `badCounterRT` inside the same core

0x0604            terminal arithmetic combine byte
  - exact opcode: `op_1B`
  - safe role: closes the local arithmetic build before the rhs threshold family begins at `0x0605`
```

Duplicate-load proof:

```text
badCounterRT appears twice inside the same core:
- first load:  0x05F9..0x05FB  -> `op_35 arg=95 ; "badCounterRT"`
- second load: 0x0601..0x0603  -> `op_35 arg=95 ; "badCounterRT"`

goodCounterRT appears only once:
- 0x05FD..0x05FF -> `op_35 arg=93 ; "goodCounterRT"`
```

Why this matters:
- `badCounterRT` cannot be promoted to a standalone row because the same token is reloaded inside the same still-open arithmetic build
- `goodCounterRT` also cannot be promoted because it has no local sink, terminator, or closure between its load and the terminal combine at `0x0604`

Cross-surface corroboration:

`Lscr-102.blocks.lingo` and `Lscr-102.blocks.js` both keep this family compressed to:

```text
((null.goodCounterRT + null.badCounterRT) >= 1982773)
null.badCounterRT
```

That corroborates packet membership, but not standalone row ownership for either name.

## Packet B core: `0x061D..0x0629`

Raw rows:

```text
061D: 41           op_41
061E: 35 00 61     op_35 arg=97 ; "badCounterET"
0621: 41           op_41
0622: 35 00 5E     op_35 arg=94 ; "goodCounterET"
0625: 41           op_41
0626: 35 00 61     op_35 arg=97 ; "badCounterET"
0629: 1B           op_1B
```

Strict deeper classification:

```text
0x061D            opener / build-head byte
  - exact opcode: `op_41`
  - safe role: opens the arithmetic build family inside this core

0x061E..0x0620    first named counter load
  - exact opcode: `op_35 arg=97 ; "badCounterET"`
  - safe role: first direct name-table load in packet B core

0x0621            separator / combiner byte
  - exact opcode: `op_41`
  - safe role: in-band structural separator before the next named load

0x0622..0x0624    second named counter load
  - exact opcode: `op_35 arg=94 ; "goodCounterET"`
  - safe role: single direct load of `goodCounterET` inside this core

0x0625            separator / combiner byte
  - exact opcode: `op_41`
  - safe role: in-band structural separator before the repeated load

0x0626..0x0628    repeated named counter load
  - exact opcode: `op_35 arg=97 ; "badCounterET"`
  - safe role: second direct load of `badCounterET` inside the same core

0x0629            terminal arithmetic combine byte
  - exact opcode: `op_1B`
  - safe role: closes the local arithmetic build before the rhs threshold family begins at `0x062A`
```

Duplicate-load proof:

```text
badCounterET appears twice inside the same core:
- first load:  0x061E..0x0620 -> `op_35 arg=97 ; "badCounterET"`
- second load: 0x0626..0x0628 -> `op_35 arg=97 ; "badCounterET"`

goodCounterET appears only once:
- 0x0622..0x0624 -> `op_35 arg=94 ; "goodCounterET"`
```

Why this matters:
- `badCounterET` cannot be promoted to a standalone row because it is duplicated within the same unresolved arithmetic build
- `goodCounterET` cannot be promoted because it has no local sink, terminator, or closure before the same core closes at `0x0629`

Cross-surface corroboration:

`Lscr-102.blocks.lingo` and `Lscr-102.blocks.js` both keep this family compressed to:

```text
((null.goodCounterET + null.badCounterET) >= 1982773)
null.badCounterET
```

Again, that supports packet membership only, not independent row ownership.

## Remaining ambiguity

Still unresolved at the current strict local layer:

```text
- the exact semantics of each `op_41` byte
- whether the first `op_41` is a pure opener or also consumes prior carried state
- whether the terminal `op_1B` is only the final arithmetic combine or also a compare-prep boundary
- the precise operand ordering inside the arithmetic build beyond the visible duplicate-load pattern
```

Not safe after this pass:

```text
- promoting `goodCounterRT` as a standalone executable row
- promoting `badCounterRT` as a standalone executable row
- promoting `goodCounterET` as a standalone executable row
- promoting `badCounterET` as a standalone executable row
- rewriting either core as a cleaner local assignment or full predicate beyond what the existing packet row already carries
```

## Strict floor after this pass

No new standalone readable rows are justified.

What this pass adds is a tighter core-local role map:

```text
opener/build-head
-> first named counter load
-> separator/combiner
-> second named counter load
-> separator/combiner
-> repeated named counter load
-> terminal arithmetic combine
```

That is the narrowest strict classification currently supported for `0x05F8..0x0604` and `0x061D..0x0629`.
