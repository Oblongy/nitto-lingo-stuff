# Lscr-102 Pass 65: Block 19 op_51 Placeholder Sync

## Purpose

- Re-check block `43264` (`RaceEngine_buildMd5Source`) tail seam at `0x05CE..0x05D5`.
- Decide whether the canonical readable artifacts are too aggressive by skipping the strict unresolved row between `id_0 = (? + nogood)` and `param_id_0`.
- Sync that explicit unresolved row into the recovered Lingo and canonical JS mirrors without inventing semantics for `op_51`.

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
- `Lscr-102/root-artifacts/Lscr-102.pass22-hotspot-stack-trace-windows.md`
- `Lscr-102/root-artifacts/Lscr-102.pass23-hotspot-carry-tracer.md`
- `Lscr-102/root-artifacts/Lscr-102.pass64-block19-tail-jump-label-sync.md`

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

This strict row order matters:

1. The append-store row at `0x05CE` is explicit.
2. The next strict row is still unresolved: `?`
3. Only after that does the exported `param_id_0` row appear.
4. The control transfer remains separate.

## Carry-note corroboration

`Lscr-102.pass22-hotspot-stack-trace-windows.md` and `Lscr-102.pass23-hotspot-carry-tracer.md` both preserve the same local strict sequence around this block-19 tail family:

```text
// goto @1582
id_0 = (? + nogood)
?
```

Those notes do not decode the unresolved row, but they do confirm that the strict surface keeps it explicit rather than collapsing directly into the next named row.

## Applied sync

### `rightful.ls`

Old:

```text
id_0 = (? + nogood) -- 0x05CE
param_id_0 -- 0x05D2
-- jump 106 -- 0x05D5
```

New:

```text
id_0 = (? + nogood) -- 0x05CE
? -- 0x05D1
param_id_0 -- 0x05D2
-- jump 106 -- 0x05D5
```

### Canonical JS mirrors

Both `rightful.from-lingo.js` and `rightful.js` were synced the same way:

```text
0x05D1 -> unresolved "?"
0x05D2 -> expr "param_id_0"
0x05D5 -> control "jump 106"
```

## What changed

- The canonical readable artifacts no longer skip the strict unresolved row at `0x05D1`.

## What stayed unchanged

- `id_0 = (? + nogood) -- 0x05CE`
- `param_id_0 -- 0x05D2`
- `-- jump 106 -- 0x05D5`
- All later block 19 packet floors

## What remains unresolved

- Exact standalone meaning of `op_51` at `0x05D1`
- Whether the local-offset control row at `0x05D5` should ever be replaced by the strict `// goto @1582` rendering
