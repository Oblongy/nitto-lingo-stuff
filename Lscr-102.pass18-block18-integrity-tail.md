# Lscr-102 Pass 18: Block 18 Integrity Tail

## Finding

After the mode-specific finish callbacks in block `18`, multiple arms fall into
the same long integrity/report payload spine.

This pass keeps three claims narrow and byte-backed:

- `KDONE`, `RDONE`, `RIVDONE`, `HTQD`, and `HTD` sit in the same broader finish
  region
- several of those arms feed the same post-callback payload tail
- the `RIVDONE` arm records a pre-damage snapshot (`beforePistonDamage`,
  `gr`, `thePD`, `theBPD`) before entering that shared tail

This pass does **not** claim the full final call signatures are solved.

## Shared Tail Evidence

### KOTH

The KOTH arm reaches `KDONE` and then enters the long payload spine:

```text
1159: 3B 00 91     op_3B arg=145 ; "KDONE"
115C: 39           op_39
115D: 56 00 1C     op_56 arg=28 ; "hp"
...
118D: 41           op_41
118E: 35 00 92     op_35 arg=146 ; "createMd5Hash"
...
1231: 51           op_51
1232: 06 03 4E     op_06 jump?/imm=846
```

### QM

The QM arm reaches `RDONE` and then enters the same tail:

```text
11DD: 3B 00 94     op_3B arg=148 ; "RDONE"
11E0: 39           op_39
11E1: 56 00 1C     op_56 arg=28 ; "hp"
...
1212: 35 00 92     op_35 arg=146 ; "createMd5Hash"
...
1302: 51           op_51
1303: 06 02 7D     op_06 jump?/imm=637
```

The repeated name spine includes:

- `ts`
- `c10000`
- `sprite`
- `c2`
- `flashSP`
- `runEngineNOSCB`
- `nitrousTankSize`
- `c100`
- `revLimiter`
- `c200`
- `tqFlyFactor`
- `createMd5Hash`
- `goodCounterRT`
- `badCounterRT`
- `goodCounterET`
- `badCounterET`
- `avgFps`

### RIVAL / TEAMRIVAL

The rivals-like arm first records a pre-damage snapshot, then reaches
`RIVDONE`, then enters the same tail:

```text
1278: 3B 00 58     op_3B arg=88 ; "Math"
...
129A: 57 00 27     op_57 arg=39 ; "gr"
129E: 41           op_41
129F: 56 00 1D     op_56 arg=29 ; "c10000"
12A2: 36 00 96     op_36 arg=150 ; "thePD"
12A6: 41           op_41
12A7: 56 00 27     op_56 arg=39 ; "gr"
12AA: 36 00 97     op_36 arg=151 ; "theBPD"
12AE: 3B 00 98     op_3B arg=152 ; "RIVDONE"
12B1: 39           op_39
12B2: 56 00 1C     op_56 arg=28 ; "hp"
...
1302: 51           op_51
1303: 06 02 7D     op_06 jump?/imm=637
```

That makes the byte-backed rivals-only additions:

- `beforePistonDamage`
- `gr`
- `thePD`
- `theBPD`

### HTQ / HT

The `HTQ` and `HT` finish arms also feed the same style of tail after their
mode-specific callback names:

```text
149B: 3B 00 C0     op_3B arg=192 ; "HTQD"
...
14D0: 35 00 92     op_35 arg=146 ; "createMd5Hash"
...
14EF: 51           op_51
14F0: 06 00 90     op_06 jump?/imm=144
```

and later:

```text
150B: 3B 00 8F     op_3B arg=143 ; "INT"
...
152B: 3B 00 C1     op_3B arg=193 ; "HTD"
...
1560: 35 00 92     op_35 arg=146 ; "createMd5Hash"
...
157F: 51           op_51
1580: 06 02 8C     op_06 jump?/imm=652
```

## What This Changes

This pass supports a more precise block `18` description:

- the early half is the light runner
- the later half is a finish ladder
- several finish arms converge into a shared integrity/report payload tail
- the rivals-like arm adds a pre-damage snapshot before `RIVDONE`

## Changes Promoted

- `Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102.rebuilt-faithful.js`

Promoted change:

- block `18` comments now describe the shared integrity/report tail and the
  extra rivals-only pre-damage snapshot

Left unchanged:

- no executable block `18` logic was rewritten
- no final callback signatures were asserted
- `op_04` remains a local call/result-finalizer note only
