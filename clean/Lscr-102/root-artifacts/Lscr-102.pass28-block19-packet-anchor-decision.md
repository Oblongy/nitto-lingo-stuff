# Lscr-102 Pass 28: Block 19 Packet-Anchor Decision

Purpose:
- decide whether the strict packet rows surrounding the accepted compare anchors in block `43264` can be promoted into `final-clean\Lscr-102\rightful.ls`
- narrow scope only to:
  - `badCounterRT`
  - `badCounterET`
  - compressed `id_0 = (? + nogood)` rows

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass27-block19-compare-window-audit.md`

## Current accepted strict anchors

These are already promoted in `final-clean\Lscr-102\rightful.ls`:

```text
((goodCounterRT + badCounterRT) >= 1982773) -- 0x0619
((goodCounterET + badCounterET) >= 1982773) -- 0x063E
```

Why they were promotable:
- `pass27` already established that those rows were not broader than the strict block-owned proof
- the strict packet exposes them as exact compare shapes, not just helper-side paraphrases

## Candidate surrounding rows

Strict packet rows:

```text
((null.goodCounterRT + null.badCounterRT) >= 1982773)
null.badCounterRT
// goto @1548
id_0 = (? + nogood)
?

((null.goodCounterET + null.badCounterET) >= 1982773)
null.badCounterET
// goto @1582
id_0 = (? + nogood)
?
```

## Decision

Do not promote `badCounterRT`, `badCounterET`, or either `id_0 = (? + nogood)` row into `final-clean\Lscr-102\rightful.ls` yet.

## Why they stay packet-only

1. The strict packet gives row order, but not a clean standalone executable anchor for those rows.

- For the compare anchors, `pass27` could tighten the current body to exact packet replacements.
- For `badCounterRT`, `badCounterET`, and `id_0 = (? + nogood)`, we only have compressed packet membership, not a proven one-line readable boundary already accepted by the stricter lift style.

2. The annotated rows around the first packet do not yield a clean one-row-to-one-offset mapping comparable to the accepted compare anchors.

- The first packet is still carried through jump/core rows around `0x05F4..0x061A`.
- The second packet is carried through jump/core rows around `0x061B..0x063E`.
- Those windows show packet flow, but they do not isolate a safer standalone offset comment for `badCounterRT` or the compressed `id_0` append row with the same confidence as the compare anchors.

3. Promoting the `id_0 = (? + nogood)` rows would also push a placeholder assignment into the executable body without a stronger ownership map.

- That is acceptable inside a packet audit.
- It is not yet as clean as the current final-clean standard for a promoted readable anchor.

## Safe floor after this pass

Keep:

```text
-- strict block-owned packet `0x05F6..0x061A` narrows only to:
--   ((goodCounterRT + badCounterRT) >= 1982773)
--   badCounterRT
--   id_0 = (? + nogood)
--   ?
((goodCounterRT + badCounterRT) >= 1982773) -- 0x0619

-- strict block-owned packet `0x061B..0x063E` narrows only to:
--   ((goodCounterET + badCounterET) >= 1982773)
--   badCounterET
--   id_0 = (? + nogood)
--   ?
((goodCounterET + badCounterET) >= 1982773) -- 0x063E
```

Do not yet promote:

```text
badCounterRT
badCounterET
id_0 = (? + nogood)
```

Outcome:
- compare anchors are accepted executable anchors
- surrounding `badCounter*` and compressed `id_0` rows remain packet-only
- no further `rightful.ls` change follows from this pass
