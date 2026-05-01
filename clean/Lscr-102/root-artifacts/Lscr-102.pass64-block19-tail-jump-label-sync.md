# Lscr-102 Pass 64: Block 19 Tail Jump-Label Sync

## Purpose

- Re-check the control-transfer label at block `43264` offset `0x05D5`.
- Decide whether the current canonical `branch 106` wording is still the tightest export-backed surface.
- Sync the recovered Lingo and canonical JS mirrors to the direct raw/strict control label without changing any surrounding packet ownership.

## Scope

- Handler: `RaceEngine_buildMd5Source`
- Focus offsets:
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
- `Lscr-102/root-artifacts/Lscr-102.pass63-block19-param-tail-floor-sync.md`

## Raw control row

From `Lscr-102.annotated-disasm.md`:

```text
05D2: 54 00 00     op_54 arg=0 ; ""
05D5: 07 00 6A     op_07 jump?/imm=106
```

## Strict block-owned surface

From `Lscr-102.blocks.lingo` / `Lscr-102.blocks.js`:

```text
param_id_0
// goto @1582
```

What this proves:

1. `0x05D2` is the exported `param_id_0` row already preserved by pass `63`.
2. `0x05D5` is a control-transfer row only.
3. The canonical `branch 106` wording is looser than the raw control label, because the disassembly already exposes `jump?/imm=106`.

## Applied sync

### `rightful.ls`

Old:

```text
param_id_0 -- 0x05D2
-- branch 106 -- 0x05D5
```

New:

```text
param_id_0 -- 0x05D2
-- jump 106 -- 0x05D5
```

### Canonical JS mirrors

Both `rightful.from-lingo.js` and `rightful.js` were synced the same way:

```text
0x05D5 -> control "jump 106"
```

## What changed

- The control row at `0x05D5` now matches the raw exported jump-immediate wording more tightly.

## What stayed unchanged

- `id_0 = (? + nogood) -- 0x05CE`
- `param_id_0 -- 0x05D2`
- The unresolved `0x05D1` row
- The later block 19 packet floors from passes `61` through `63`

## What remains unresolved

- Exact standalone meaning of `op_51` at `0x05D1`
- Whether the strict `// goto @1582` surface should ever replace the local-offset control label in canonical readable output
