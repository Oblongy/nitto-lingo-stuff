# Lscr-102 Pass 56: Block 5972 callhead combiner audit

Scope:
- Script: `Lscr-102`
- Handler block: `5972` (`RaceEngine_parseConfig`)
- Narrow target:
  - unresolved `initBoost` callhead packet `0x0136..0x013E`

Goal:
- classify the local callhead / combiner / token roles one level deeper
- stay at strict block-local evidence only
- do **not** promote a bare `initBoost()` call
- do **not** introduce helper semantics like `xmlparser.initBoost` or `getAProp(...)`

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass35-block03-callhead-grs-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block03-late-wrapper-ownership-split.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block5972-table.md`

## Exact raw window

From `Lscr-102.annotated-disasm.md`:

```text
0136: 41           op_41
0137: 35 00 1F     op_35 arg=31 ; "initBoost"
013A: 39           op_39
013B: 3A 00 00     op_3A arg=0 ; "xtra"
013E: 51           op_51
```

Immediate surrounding closure from the same block:

```text
0132: 36 00 1D     op_36 arg=29 ; "boostType"
0135: 51           op_51
0136: 41           op_41
0137: 35 00 1F     op_35 arg=31 ; "initBoost"
013A: 39           op_39
013B: 3A 00 00     op_3A arg=0 ; "xtra"
013E: 51           op_51
013F: 41           op_41
0140: 3B 00 21     op_3B arg=33 ; "Array"
```

## Surface corroboration

Normalized block surfaces keep a receiver-bearing unresolved family:

```text
null.initBoost()()
```

Broader faithful stack surface keeps only a looser call-shaped row:

```text
initBoost() -- 0x013E
```

Important contradiction:
- the strict normalized surfaces still show a carried receiver-bearing form
- the broader faithful layer flattens the same packet to a bare `initBoost()` row
- therefore the faithful bare call is not safe as the strict final floor

## Local role split

The `0x0136..0x013E` packet can be decomposed one level deeper as:

- `0x0136`
  - `op_41`
  - unresolved callhead / seed byte
  - no block-local named receiver is exposed at this byte
- `0x0137..0x0139`
  - `op_35 arg=31 ; "initBoost"`
  - safe named token load
  - this is the only direct named token inside the packet
- `0x013A`
  - `op_39`
  - unresolved combiner / callhead boundary
  - local evidence proves the byte is in-band, but not a standalone readable call
- `0x013B..0x013D`
  - `op_3A arg=0 ; "xtra"`
  - safe named token load
  - local role is token-bearing only; the packet still does not prove whether this is the final receiver, callee source, or an intermediate carried operand
- `0x013E`
  - `op_51`
  - packet terminator

## What is safe

Safe strict local ownership:
- named token `initBoost` at `0x0137..0x0139`
- named token `xtra` at `0x013B..0x013D`
- unresolved in-band combiner boundary `op_39` at `0x013A`
- unresolved seed/head byte `op_41` at `0x0136`
- packet terminator `op_51` at `0x013E`

## What remains unresolved

Still not block-locally proved:
- the actual receiver for the packet
- whether `xtra` is the receiver, callee source, or only a carried operand token
- whether `op_39` should be read as a receiver-to-callee combiner, a callhead combiner, or another compact packet role
- any clean standalone rendering like:
  - `initBoost()`
  - `xtra.initBoost()`
  - `xmlparser.initBoost...`

## Result

This pass improves the strict floor for `0x0136..0x013E` by splitting the packet into:
- unresolved seed byte
- named `initBoost` token
- unresolved `op_39` combiner boundary
- named `xtra` token
- final terminator

That is the deepest safe local split found here without promoting bare-call or helper semantics.
