# Lscr-102 Pass 63: Block 19 Param-Tail Floor Sync

## Purpose

- Re-check the narrow tail seam in block `43264` (`RaceEngine_buildMd5Source`) at `0x05CE..0x05D5`.
- Decide whether the strict block-owned surface justifies one more executable row between the compressed `nogood` append and the control transfer.
- Sync the recovered Lingo and canonical JS mirrors to that stricter floor only if the export-backed evidence is direct.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets:
  - `0x05CE`
  - `0x05D1`
  - `0x05D2`
  - `0x05D5`
- This pass edits:
  - `Lscr-102/rightful.ls`
  - `Lscr-102/rightful.from-lingo.js`
  - `Lscr-102/rightful.js`

## Sources

- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md`
- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo`
- `Lscr-102/root-artifacts/Lscr-102.blocks.js`

Corroboration only:

- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo` block `18` parameter rows
- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md` sibling `op_54 arg=0` sites

## Raw opcode window

From `Lscr-102.annotated-disasm.md`:

```text
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
id_0 = (? + nogood)
?
param_id_0
// goto @1582
```

This ordering matters:

1. The compressed local append row is already safely anchored at `0x05CE`.
2. The strict surface keeps one unresolved row immediately after that append.
3. The next strict row is explicitly `param_id_0`.
4. The control transfer remains exported only as a `goto` comment, not as a richer readable predicate or named helper.

## Direct alignment

The remaining raw bytes after the `0x05CE` store are:

```text
05D1: op_51
05D2: op_54 arg=0 ; ""
05D5: op_07 jump?/imm=106
```

The strict block-owned surface for the same tail is:

```text
?
param_id_0
// goto @1582
```

That supports this narrow ownership split:

- `0x05D1` stays unresolved.
- `0x05D2` is the safe standalone `param_id_0` row.
- `0x05D5` stays a control-transfer row only.

## Corroborating sibling shape

In block `18`, the exported surfaces show:

```text
0014: 54 00 00     op_54 arg=0 ; "period"
...
param_period
```

and later:

```text
0038: 54 00 00     op_54 arg=0 ; "greenDelay"
...
param_greenDelay
```

This is corroboration only, but it matches the same exported `op_54` -> `param_*` surface shape seen in the target window.

## Applied sync

### `rightful.ls`

Old:

```text
id_0 = (? + nogood) -- 0x05CE
-- branch 106 -- 0x05D5
```

New:

```text
id_0 = (? + nogood) -- 0x05CE
param_id_0 -- 0x05D2
-- branch 106 -- 0x05D5
```

### Canonical JS mirrors

Both `rightful.from-lingo.js` and `rightful.js` were synced the same way:

```text
0x05D2 -> param_id_0
```

No stronger rewrite was applied to `0x05D1` or `0x05D5`.

## What changed

- The canonical artifacts now preserve the strict exported `param_id_0` row that sits between the compressed `nogood` append and the later control transfer.

## What stayed unchanged

- `id_0 = (? + nogood) -- 0x05CE`
- `-- branch 106 -- 0x05D5`
- The later guard-pair / compare / hash-tail floors from passes `61` and `62`

## What remains unresolved

- Exact standalone meaning of `op_51` at `0x05D1`
- Whether `op_07 jump?/imm=106` at `0x05D5` should ever be promoted beyond the current control-transfer row without a stricter block-local proof
