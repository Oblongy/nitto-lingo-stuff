# Lscr-102 Pass 17: Block 18 Finish Ladder

## Finding

Block `18` (`41116`) is not only the light-runner / staging-light block. The
later half of the same bytecode contains a second mode-dispatch ladder for race
completion callbacks.

This pass keeps the claim narrow:

- the later callback names are byte-backed
- the `RIVAL` / `TEAMRIVAL` pairing repeats here too
- `op_04` still behaves like a local call/result finalizer immediately after
  the inner `INT` payload prelude

This pass does **not** rename `op_04` globally and does **not** claim a
complete high-level reconstruction of every finish arm.

## Byte-Backed Callback Arms

### KOTH arm

```text
1128: 12 07 00 88  op_12 branch? target/imm=136
1139: 3B 00 8F     op_3B arg=143 ; "INT"
...
1154: 83 3A 00     op_83 arg=14848
1157: 04           op_04
1159: 3B 00 91     op_3B arg=145 ; "KDONE"
```

The `KDONE` arm is preceded by an `INT` payload build and then the local
`op_04` finalizer shape.

### QM arm

```text
11B8: 12 07 00 7C  op_12 branch? target/imm=124
11C9: 3B 00 93     op_3B arg=147 ; "RINT"
...
11DD: 3B 00 94     op_3B arg=148 ; "RDONE"
```

The `QM` finish arm uses `RINT` before `RDONE`, which distinguishes it from the
plain `INT` prelude used in the KOTH / rivals-like arms.

### RIVAL / TEAMRIVAL arm

```text
1235: 41           op_41
1236: 35 00 6F     op_35 arg=111 ; "raceType"
1239: 3D 00 75     op_3D arg=117 ; "RIVAL"
123C: 12           op_12
123D: 44           op_44
123E: 00           op_00
123F: 0B           op_0B
1240: 41           op_41
1241: 35 00 6F     op_35 arg=111 ; "raceType"
1244: 3D 00 76     op_3D arg=118 ; "TEAMRIVAL"
1247: 12 07 00 BE  op_12 branch? target/imm=190
1258: 3B 00 8F     op_3B arg=143 ; "INT"
...
1276: 04           op_04
...
12AE: 3B 00 98     op_3B arg=152 ; "RIVDONE"
```

This is the same repeated connective pattern already promoted in pass `16`:

- `RIVAL`
- `op_0B`
- `TEAMRIVAL`
- shared callback arm

Here the shared callback is `RIVDONE`.

### CT / CTQ / P arms

These later arms are directly named and already simple enough to inventory:

```text
1455: 35 00 9A     op_35 arg=154 ; "ctFinishCB"
147D: 35 00 BF     op_35 arg=191 ; "practiceFinishCB"
149B: 3B 00 C0     op_3B arg=192 ; "HTQD"
150B: 3B 00 8F     op_3B arg=143 ; "INT"
...
152B: 3B 00 C1     op_3B arg=193 ; "HTD"
```

So the later finish ladder includes at least these byte-backed callback names:

- `KDONE`
- `RDONE`
- `RIVDONE`
- `ctFinishCB`
- `practiceFinishCB`
- `HTQD`
- `HTD`

## What `op_04` Supports Here

The local evidence for `op_04` in block `18` is:

- it appears after the inner `INT` payload assembly
- it appears before the outer mode-specific completion callback
- the same shape is repeated in multiple finish arms

That is enough to keep `op_04` in the local "call/result finalizer" bucket for
these completion payload builders.

## Changes Promoted

- `Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102.rebuilt-faithful.js`

Promoted change:

- block `18` comments now inventory the later finish ladder and its byte-backed
  callback names

Left unchanged:

- no executable block `18` control flow was rewritten in this pass
- `KDONE` / `RDONE` / `RIVDONE` payload argument boundaries remain partially
  unresolved
- no new global opcode renames were introduced
