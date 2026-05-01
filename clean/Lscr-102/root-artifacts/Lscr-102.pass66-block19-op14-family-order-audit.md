# Lscr-102 Pass 66: Block 19 op_14 Family Order Audit

## Purpose

- Re-check block `43264` (`RaceEngine_buildMd5Source`) branch-family seam at `0x05BA..0x05C3`.
- Decide whether the current single packet-only note can be split any deeper without inventing operand order or predicate semantics.
- Sync any strict unresolved row that is still missing from the canonical artifacts.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets:
  - `0x05B7`
  - `0x05BA`
  - `0x05BB..0x05C3`
- This pass edits:
  - `Lscr-102/rightful.ls`
  - `Lscr-102/rightful.from-lingo.js`
  - `Lscr-102/rightful.js`

## Sources

- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md`
- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo`
- `Lscr-102/root-artifacts/Lscr-102.blocks.js`
- `Lscr-102/root-artifacts/Lscr-102.pass62-block19-prelude-floor-sync.md`

Corroboration only:

- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo` block `14012` `param_c0` / `goto` seam
- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md` block `14012` `op_14` sibling rows

## Raw opcode window

From `Lscr-102.annotated-disasm.md`:

```text
05AF: 56 00 00     op_56 arg=0 ; ""
05B2: 41           op_41
05B3: 35 00 5A     op_35 arg=90 ; "guid"
05B6: 1B           op_1B
05B7: 57 00 00     op_57 arg=0 ; ""
05BA: 51           op_51
05BB: 41           op_41
05BC: 35 00 5B     op_35 arg=91 ; "engineDamage"
05BF: 41           op_41
05C0: 35 00 2E     op_35 arg=46 ; "c0"
05C3: 14 07 00 0E  op_14 branch? target/imm=14
```

## Strict block-owned surface

From `Lscr-102.blocks.lingo` / `Lscr-102.blocks.js`:

```text
id_0 = (id_0 + null.guid)
?
// [0x05af] op_14
null.c0
null.engineDamage
// goto @1473
```

## Key contradiction

This seam contains a real surface-order contradiction:

- raw byte order after the `guid` store is:

```text
engineDamage -> c0 -> op_14 target/imm=14
```

- strict block-owned surface order is:

```text
? -> op_14 marker -> null.c0 -> null.engineDamage -> // goto @1473
```

That means the named rows cannot be promoted as standalone readable lines in canonical `rightful.ls` without silently choosing one ordering over the other.

## Safe conclusions

1. `0x05B7` remains the safe `guid` append row.
2. The strict surface keeps an explicit unresolved row immediately after that append.
3. The `engineDamage` / `c0` / `op_14` family must stay packet-local at the canonical readable layer.
4. The packet note can be tightened to state both the raw load order and the strict surface render order.

## Corroborating sibling shape

Block `14012` shows another `op_14` family where the strict block-owned surface also reorders the readable rows relative to the raw opcode order:

Strict surface:

```text
null.c0
param_c0
// goto @25
```

Raw rows:

```text
0014: 54 00 00     op_54 arg=0 ; "c0"
0017: 41           op_41
0018: 35 00 00     op_35 arg=0 ; "c0"
001B: 14 07 00 0E  op_14 branch? target/imm=14
```

This is corroboration only, but it reinforces that the `op_14` family should not be normalized into a fresh readable predicate from raw order alone.

## Applied sync

### `rightful.ls`

Old:

```text
EMPTY = (EMPTY + guid) -- 0x05B7
-- packet-only engineDamage/c0 branch family: engineDamage load -> c0 load -> branch-consumer target/imm=14 -- 0x05BB
```

New:

```text
EMPTY = (EMPTY + guid) -- 0x05B7
? -- 0x05BA
-- packet-only engineDamage/c0 op_14 family: raw order engineDamage -> c0 -> branch-consumer target/imm=14; strict surface order ? -> op_14 marker -> null.c0 -> null.engineDamage -> // goto @1473 -- 0x05BB
```

### Canonical JS mirrors

Both `rightful.from-lingo.js` and `rightful.js` were synced the same way:

```text
0x05BA -> unresolved "?"
0x05BB -> tightened unresolved note with raw-order / strict-surface-order split
```

## What changed

- The canonical artifacts now preserve the missing strict unresolved row at `0x05BA`.
- The branch-family note is tighter and explicitly surfaces the raw-vs-strict ordering contradiction instead of smoothing it over.

## What stayed unchanged

- `EMPTY = (EMPTY + guid) -- 0x05B7`
- The later `id_0 = (? + nogood)` / `?` / `param_id_0` / `jump 106` tail
- All later block 19 guard / compare / hash packet floors

## What remains unresolved

- Exact standalone meaning of `op_51` at `0x05BA`
- Exact standalone meaning of `op_14 ... target/imm=14` at `0x05C3`
- Whether any stricter block-local evidence can ever reconcile the raw `engineDamage -> c0` order with the strict exported `null.c0 -> null.engineDamage` surface order
