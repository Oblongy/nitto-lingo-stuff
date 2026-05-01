# Lscr-102 Pass 62: Block 19 Prelude Floor Sync

## Purpose

- Re-check block `43264` (`RaceEngine_buildMd5Source`) prelude window `0x05B7..0x05D5`.
- Decide whether the current promoted `engineDamage < c0` row is stronger than the strict block-owned surface.
- Sync the recovered Lingo and canonical JS mirrors to the narrowest proven floor for this prelude.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets:
  - `0x05B7`
  - `0x05BB..0x05C3`
  - `0x05CE`
  - `0x05D5`
- This pass edits:
  - `Lscr-102/rightful.ls`
  - `Lscr-102/rightful.from-lingo.js`
  - `Lscr-102/rightful.js`

## Sources

- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md`
- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo`
- `Lscr-102/root-artifacts/Lscr-102.blocks.js`
- `Lscr-102/rightful.ls`
- `Lscr-102/rightful.from-lingo.js`
- `Lscr-102/rightful.js`

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
05C7: 56 00 00     op_56 arg=0 ; ""
05CA: 3D 00 5C     op_3D arg=92 ; "nogood"
05CD: 1B           op_1B
05CE: 57 00 00     op_57 arg=0 ; ""
05D1: 51           op_51
05D2: 54 00 00     op_54 arg=0 ; ""
05D5: 07 00 6A     op_07 jump?/imm=106
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
id_0 = (? + nogood)
?
param_id_0
// goto @1582
```

What this proves:

1. `guid` is safely present as part of the earlier local append row ending at `0x05B7`.
2. The `engineDamage` / `c0` family is present only as named loads plus the exported `op_14 ... target/imm=14` branch consumer.
3. The strict block-owned surface does **not** prove a readable predicate equivalent to:

```text
if not (engineDamage < c0) then ...
```

4. The `nogood` store at `0x05CE` is already represented in the strict block-owned surface as compressed:

```text
id_0 = (? + nogood)
```

## Applied sync

### `rightful.ls`

Old:

```text
EMPTY = (EMPTY + guid) -- 0x05B7
if not (engineDamage < c0) then -- jump 14 -- 0x05C3
EMPTY = (EMPTY + nogood) -- 0x05CE
-- branch 106 -- 0x05D5
```

New:

```text
EMPTY = (EMPTY + guid) -- 0x05B7
-- packet-only engineDamage/c0 branch family: engineDamage load -> c0 load -> branch-consumer target/imm=14 -- 0x05BB
id_0 = (? + nogood) -- 0x05CE
-- branch 106 -- 0x05D5
```

### Canonical JS mirrors

Both `rightful.from-lingo.js` and `rightful.js` were synced the same way:

```text
0x05BB -> packet-only unresolved branch-family note
0x05CE -> id_0 = (? + nogood)
```

Removed broader row:

```text
0x05C3 -> if not (engineDamage < c0) then -- jump 14
```

## What changed

- The block 19 prelude no longer promotes a readable `engineDamage < c0` predicate that the strict block-owned surface does not prove.
- The `nogood` store now follows the compressed strict `id_0` row already exposed by the block-owned surfaces.

## What stayed unchanged

- `EMPTY = (EMPTY + guid) -- 0x05B7`
- `-- branch 106 -- 0x05D5`
- The later block 19 anti-lag/hash floor synced in pass 61

## What remains unresolved

- Exact operand ordering inside the `engineDamage` / `c0` branch family
- Exact standalone meaning of `op_14 ... target/imm=14`
- Exact standalone meaning of `op_54 arg=0 ; ""` at `0x05D2`
