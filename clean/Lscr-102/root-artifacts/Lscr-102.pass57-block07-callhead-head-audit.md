## Lscr-102 Pass 57 - Block 11992 Callhead Head Audit

Scope:
- script: `Lscr-102`
- handler: `RaceEngine_stageDistance`
- block: `11992`

Sources:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass42-block07-byte-window-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass43-block07-callhead-packet-split.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass50-block07-first-family-ownership-split.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass55-block07-clean-arm-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

Question:
- Can the first-family packet front half at raw `0x0060..0x0071` be classified one level deeper without borrowing the later clean `STG` arm template?

## Raw focus window

```text
0060: 3B 00 0A     op_3B arg=10 ; "STG"
0063: 39           op_39
0064: 41           op_41
0065: 35 00 0B     op_35 arg=11 ; "s"
0068: 41           op_41
0069: 35 00 0C     op_35 arg=12 ; "carV"
006C: 22           op_22
006D: 41           op_41
006E: 35 00 0D     op_35 arg=13 ; "carAccel"
0071: 22           op_22
```

Immediate continuation for boundary control:

```text
0072: 3A 00 03     op_3A arg=3 ; "raceType"
0075: 51           op_51
0076: 06 00 17     op_06 jump?/imm=23
```

## Strict local classification

The front half at `0x0060..0x0071` can be decomposed one level deeper into five local role groups:

### Group A - named callee seed

- `0x0060..0x0062`: `op_3B arg=10 ; "STG"`

This is the only direct named callee token visible in the audited head window.

### Group B - unresolved callhead combiner

- `0x0063`: `op_39`

This remains unresolved. The current local evidence does not prove whether `op_39` is only a combiner boundary, a callhead consumer, or both.

### Group C - first operand pair

- `0x0064`: `op_41`
- `0x0065..0x0067`: `op_35 arg=11 ; "s"`

This is the first local named operand pair in the head.

### Group D - second operand pair plus first in-band `op_22` site

- `0x0068`: `op_41`
- `0x0069..0x006B`: `op_35 arg=12 ; "carV"`
- `0x006C`: `op_22`

This is the first point where the first-family packet diverges from the later clean `STG` arms. The `op_22` site is in-band inside the head and is not present in the clean-arm template.

### Group E - third operand pair plus second in-band `op_22` site

- `0x006D`: `op_41`
- `0x006E..0x0070`: `op_35 arg=13 ; "carAccel"`
- `0x0071`: `op_22`

This repeats the same divergence pattern: a local operand pair followed by another in-band `op_22` site.

## Exact named tokens visible in the head

Safe named token ownership inside `0x0060..0x0071`:
- `STG` at `0x0060..0x0062`
- `s` at `0x0065..0x0067`
- `carV` at `0x0069..0x006B`
- `carAccel` at `0x006E..0x0070`

Safe opcode-only sites that remain unresolved:
- `op_39` at `0x0063`
- `op_41` at `0x0064`, `0x0068`, `0x006D`
- `op_22` at `0x006C`, `0x0071`

## Negative proof against borrowing the later clean STG-arm template

`pass55-block07-clean-arm-audit.md` already proved the later clean `STG` arms at `0x0079..0x008C` and `0x00DE..0x00F1` use the stable shape:
- named callee seed
- unresolved combiner
- three local operand pairs
- terminal `raceType` token plus final consumer

That later template does not contain any in-band `op_22` sites.

The first-family head does:
- `0x006C`: `op_22`
- `0x0071`: `op_22`

So this pass confirms the front half cannot be rewritten by importing the later clean-arm template. The head remains its own stricter local packet family.

## Boundary with the trailing suffix

This pass stops at `0x0071`.

The next bytes are still:
- `0x0072..0x0074`: `op_3A arg=3 ; "raceType"`
- `0x0075`: `op_51`

So the front half audited here is only the lead segment of the larger `0x0060..0x0075` payload build already preserved by earlier passes. This audit does not create a new executable split before `0x0072`.

## Decision

Stricter local classification found:
- yes

The first-family packet head at `0x0060..0x0071` is now locally classified as:
- named `STG` seed
- unresolved `op_39` combiner
- three local operand-pair groups
- two in-band `op_22` blocker sites after the `carV` and `carAccel` loads

What this does not justify:
- no promotion of a cleaner `STG(...)` callhead
- no borrowing of the later clean-arm template
- no new split into smaller executable rows inside `0x0060..0x0071`

## Remaining ambiguity

- exact semantic role of `op_39` at `0x0063`
- exact semantic role of `op_41` at `0x0064`, `0x0068`, and `0x006D`
- exact semantic role of the in-band `op_22` sites at `0x006C` and `0x0071`
- whether the carried unresolved head from earlier bytes changes how `STG` is consumed at the full-packet level
