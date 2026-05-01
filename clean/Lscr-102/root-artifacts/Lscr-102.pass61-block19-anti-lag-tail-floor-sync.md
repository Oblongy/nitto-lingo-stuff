# Lscr-102 Pass 61: Block 19 Anti-Lag Tail Floor Sync

## Purpose

- Re-check block `43264` (`RaceEngine_buildMd5Source`) anti-lag/hash tail window `0x05DD..0x0663`.
- Decide whether the current promoted readable Lingo and canonical JS mirrors are still ahead of the later strict block-owned passes.
- Sync the canonical artifacts back down to the narrowest currently supported floor.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets:
  - `0x05DD..0x05F5`
  - `0x0605..0x061A`
  - `0x062A..0x063E`
  - `0x0649..0x0663`
- This pass edits:
  - `Lscr-102/rightful.ls`
  - `Lscr-102/rightful.from-lingo.js`
  - `Lscr-102/rightful.js`

## Sources

- `Lscr-102/root-artifacts/Lscr-102.pass57-block19-guard-pair-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass56-block19-compare-core-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass55-block19-threshold-rhs-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass30-block19-packet-floor-exhaustion.md`
- `Lscr-102/root-artifacts/Lscr-102.pass41-block19-tail-terminator-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo`
- `Lscr-102/root-artifacts/Lscr-102.blocks.js`
- `Lscr-102/rightful.ls`
- `Lscr-102/rightful.from-lingo.js`
- `Lscr-102/rightful.js`

## Strict floor already proven by later passes

### Guard-pair packet `0x05DD..0x05F5`

`pass57` proves:

```text
0x05DD..0x05E1  opener / carry-head family
0x05E2..0x05E4  named guard-token load
0x05E5          branch-separator byte
0x05E6..0x05E9  guard branch-consumer
0x05EA..0x05F4  local append-store body
0x05F5          post-body jump head
```

and explicitly states:

```text
This remains a guard-local control packet, not a set of standalone executable rows.
No new standalone readable row is justified inside `0x05DD..0x05F5`.
```

### Compare-core / rhs families

`pass56` proves the compare-build cores stay packet-local and do **not** justify standalone `goodCounter*` / `badCounter*` rows.

`pass55` proves the rhs windows stay packet-only at the readable layer and do **not** justify:

```text
if not (0.7745 > lagPercent) then ...
```

### Packet-floor anchors that are still safe

`pass30` keeps these later packet anchors:

```text
- id_0 = (? + nogood) -- 0x0616
- ((goodCounterRT + badCounterRT) >= 1982773) -- 0x0619
- id_0 = (? + nogood) -- 0x063B
- ((goodCounterET + badCounterET) >= 1982773) -- 0x063E
```

`pass41` keeps only this hash tail floor:

```text
- , = caluMD5 -- 0x0649
- id_0 = ,.getStringMD5()(id_0) -- 0x0650
- id_0 -- 0x0663
```

and explicitly rejects standalone rows at `0x064C` and `0x065D`.

## What the canonical artifacts still had before this pass

Before this sync, the promoted artifacts still carried broader rows such as:

```text
if not (goodCounterET = VOID) then -- jump 17 -- 0x05E6
EMPTY = (EMPTY + nogood) -- 0x05F1
(goodCounterRT = VOID) -- 0x05F4
if not (0.7745 > lagPercent) then -- jump 17 -- 0x060B
EMPTY = (EMPTY + nogood) -- 0x0616
(goodCounterRT + badCounterRT) -- 0x0619
if not (0.7745 > lagPercent) then -- jump 14 -- 0x0630
EMPTY = (EMPTY + nogood) -- 0x063B
(goodCounterET + badCounterET) -- 0x063E
"," = (EMPTY ^ caluMD5) -- 0x0649
badCounterET -- 0x064C
EMPTY = getStringMD5(EMPTY) -- 0x065A
"," -- 0x065D
0 -- 0x065F
EMPTY -- 0x0663
```

Those rows were broader than the later strict packet-local audits allow.

## Applied sync

### `rightful.ls`

Old:

```text
if not (goodCounterRT = VOID) then -- jump 9 marker 0x44 -- 0x05DD
if not (goodCounterET = VOID) then -- jump 17 -- 0x05E6
EMPTY = (EMPTY + nogood) -- 0x05F1
param_EMPTY -- 0x05F4
if not (0.7745 > lagPercent) then -- jump 17 -- 0x060B
EMPTY = (EMPTY + nogood) -- 0x0616
(goodCounterRT + badCounterRT) -- 0x0619
if not (0.7745 > lagPercent) then -- jump 14 -- 0x0630
EMPTY = (EMPTY + nogood) -- 0x063B
(goodCounterET + badCounterET) -- 0x063E
"," = (EMPTY ^ caluMD5) -- 0x0649
xtra -- 0x064C
EMPTY = getStringMD5(EMPTY) -- 0x065A
"," -- 0x065D
0 -- 0x065F
EMPTY -- 0x0663
```

New:

```text
-- guard-pair control packet remains packet-only: opener/carry-head -> goodCounterET load -> branch-consumer -> local append-store body -- 0x05DD
-- jump 74 -- 0x05F5
-- packet A rhs family remains packet-only: op_83 arg=7745 -> lagPercent -> branch-consumer target/imm=17 -- 0x0605
id_0 = (? + nogood) -- 0x0616
((goodCounterRT + badCounterRT) >= 1982773) -- 0x0619
-- jump 37 -- 0x061A
-- packet B rhs family remains packet-only: op_83 arg=7745 -> lagPercent -> branch-consumer target/imm=14 -- 0x062A
id_0 = (? + nogood) -- 0x063B
((goodCounterET + badCounterET) >= 1982773) -- 0x063E
, = caluMD5 -- 0x0649
id_0 = ,.getStringMD5()(id_0) -- 0x0650
id_0 -- 0x0663
```

### Canonical JS mirrors

Both `rightful.from-lingo.js` and `rightful.js` were synced to the same floor:

```text
0x05DD -> packet-only unresolved note
0x0605 -> packet-only unresolved rhs-family note
0x0616 -> id_0 = (? + nogood)
0x0619 -> ((goodCounterRT + badCounterRT) >= 1982773)
0x062A -> packet-only unresolved rhs-family note
0x063B -> id_0 = (? + nogood)
0x063E -> ((goodCounterET + badCounterET) >= 1982773)
0x0649 -> , = caluMD5
0x0650 -> id_0 = ,.getStringMD5()(id_0)
0x0663 -> id_0
```

Removed broader JS-only rows:

```text
0x05E6 branch predicate
0x05F1 EMPTY append row
0x05F4 (goodCounterRT = VOID)
0x060B branch predicate
0x0630 branch predicate
0x064C standalone row
0x065D standalone row
0x065F standalone row
```

## What changed

- The recovered Lingo artifact now matches the later strict packet-local ceiling for the block 19 anti-lag/hash tail.
- The canonical JS mirrors now follow that same floor instead of preserving broader helper semantics.

## What stayed unchanged

- Earlier block 19 append rows before `0x05DD`
- The block 19 loop window at `0x006C..0x0092`
- The block 8 guard floors at `0x1135`, `0x11C5`, and `0x1254`
- Helper/corroboration surfaces such as `rightful.clean.js`

## What remains unresolved

- Exact semantics of the guard-pair opener / carry-head family at `0x05DD..0x05E1`
- Exact standalone semantics of the `0x05E6` guard branch-consumer
- Exact standalone semantics of the rhs-family branch-consumer heads at `0x060B` and `0x0630`
- Exact operand-level semantics inside the `op_83 arg=7745` threshold seed beyond the exported literal/immediate
- Any broader readable meaning for removed standalone rows at `0x064C`, `0x065D`, or `0x065F`
