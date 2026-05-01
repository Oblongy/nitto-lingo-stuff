## Lscr-102 Pass 55 - Block 11992 Clean STG Arm Audit

Scope:
- script: `Lscr-102`
- handler: `RaceEngine_stageDistance`
- block: `11992`

Sources:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass45-block07-second-stack-packet.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass50-block07-first-family-ownership-split.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block07-stg-arm-template-compare.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass52-block07-post-jump-classification.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

Question:
- Can the clean payload arms at raw `0x0079..0x008C` and `0x00DE..0x00F1` be decomposed one level deeper into operand-role groups?
- If so, does that stricter decomposition help the unresolved first-family packet at `0x0075` without borrowing semantics across families?

## Raw windows

### First clean STG arm

```text
0079: 3B 00 0A     op_3B arg=10 ; "STG"
007C: 39           op_39
007D: 41           op_41
007E: 35 00 0B     op_35 arg=11 ; "s"
0081: 41           op_41
0082: 35 00 0C     op_35 arg=12 ; "carV"
0085: 41           op_41
0086: 35 00 0D     op_35 arg=13 ; "carAccel"
0089: 3A 00 03     op_3A arg=3 ; "raceType"
008C: 51           op_51
008D: 06 00 B4     op_06 jump?/imm=180
```

### Second clean STG arm

```text
00DE: 3B 00 0A     op_3B arg=10 ; "STG"
00E1: 39           op_39
00E2: 41           op_41
00E3: 35 00 0B     op_35 arg=11 ; "s"
00E6: 41           op_41
00E7: 35 00 0C     op_35 arg=12 ; "carV"
00EA: 41           op_41
00EB: 35 00 0D     op_35 arg=13 ; "carAccel"
00EE: 3A 00 03     op_3A arg=3 ; "raceType"
00F1: 51           op_51
00F2: 06 00 4F     op_06 jump?/imm=79
```

## Exact shared template

The two clean arms are byte-identical through their terminating `op_51`:

- `op_3B arg=10 ; "STG"` at `0x0079` / `0x00DE`
- `op_39` at `0x007C` / `0x00E1`
- `op_41`, `op_35 arg=11 ; "s"` at `0x007D..0x007E` / `0x00E2..0x00E3`
- `op_41`, `op_35 arg=12 ; "carV"` at `0x0081..0x0082` / `0x00E6..0x00E7`
- `op_41`, `op_35 arg=13 ; "carAccel"` at `0x0085..0x0086` / `0x00EA..0x00EB`
- `op_3A arg=3 ; "raceType"` at `0x0089` / `0x00EE`
- `op_51` at `0x008C` / `0x00F1`

The bytes immediately following them differ only in the later post-arm skip marker:

- `0x008D: op_06 jump?/imm=180`
- `0x00F2: op_06 jump?/imm=79`

## Operand-role groups

From strict local evidence, each clean arm can be decomposed one level deeper into the same five role groups:

### Group A - named callee seed

- `0x0079..0x007B`: `op_3B arg=10 ; "STG"`
- `0x00DE..0x00E0`: `op_3B arg=10 ; "STG"`

This is the only direct named callee token in either clean arm.

### Group B - callhead combiner

- `0x007C`: `op_39`
- `0x00E1`: `op_39`

This stays unresolved at the opcode-role layer. The current pass only isolates it as its own in-band combiner site.

### Group C - first local operand pair

- `0x007D..0x007E`: `op_41`, `op_35 arg=11 ; "s"`
- `0x00E2..0x00E3`: `op_41`, `op_35 arg=11 ; "s"`

### Group D - second local operand pair

- `0x0081..0x0082`: `op_41`, `op_35 arg=12 ; "carV"`
- `0x00E6..0x00E7`: `op_41`, `op_35 arg=12 ; "carV"`

### Group E - third local operand pair

- `0x0085..0x0086`: `op_41`, `op_35 arg=13 ; "carAccel"`
- `0x00EA..0x00EB`: `op_41`, `op_35 arg=13 ; "carAccel"`

### Group F - terminal trailing token plus consumer

- `0x0089..0x008C`: `op_3A arg=3 ; "raceType"`, `op_51`
- `0x00EE..0x00F1`: `op_3A arg=3 ; "raceType"`, `op_51`

This is the stable terminal suffix for both clean arms.

## What this proves about the clean arms

### 1. The clean STG arms are internally stable

The shared byte-identical shape proves that both clean payload arms are the same local template:

- named callee seed
- one unresolved combiner
- three local operand pairs
- one terminal `raceType` token
- one final consumer

That is stricter than the earlier single-line `STG(s, carV, carAccel)` summary because it preserves the internal role grouping without promoting any new semantics.

### 2. The clean arms still do not split into smaller executable rows

Even with the role groups isolated, no strict local surface exposes:

- a standalone executable row for `s`
- a standalone executable row for `carV`
- a standalone executable row for `carAccel`
- a separate executable row for `raceType`

The entire `0x0079..0x008C` span remains one clean arm, and the entire `0x00DE..0x00F1` span remains its sibling clean arm.

## Negative proof against using this to tighten `0x0075`

### 1. The first-family packet still carries in-band `op_22` sites that neither clean arm has

Raw `0x0060..0x0075`:

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
0072: 3A 00 03     op_3A arg=3 ; "raceType"
0075: 51           op_51
```

The clean-arm decomposition cannot account for:

- `0x006C: op_22`
- `0x0071: op_22`

because neither clean arm contains those bytes in the matching positions.

### 2. The first-family packet does not expose a clean post-packet arm boundary before `0x0075`

`pass50-block07-first-family-ownership-split.md` already established:

- carried unresolved head at `0x0048`
- HT gate at `0x0050`
- gear gate at `0x005C`
- one continuous payload build at `0x0060..0x0075`
- later post-packet skip at `0x0076`
- separate clean arm only begins at `0x0079`

So the clean-arm template does not create a new local split inside `0x0060..0x0075`. It only confirms what the first family is not.

### 3. Borrowing the clean-arm grouping into `0x0075` would cross family boundaries

The clean arms belong to later windows:

- `0x0079..0x008C`
- `0x00DE..0x00F1`

The unresolved first-family packet belongs to an earlier window:

- `0x0060..0x0075`

Using the clean-arm grouping to rewrite the first-family packet as if it already contained a separable clean `STG(s, carV, carAccel)` arm would require borrowing template semantics across families rather than proving them locally inside `0x0060..0x0075`.

## Decision

Stricter clean-arm decomposition found:
- yes

The clean STG arms can be grouped locally as:
- named callee seed
- unresolved combiner
- three local operand pairs
- terminal `raceType` token plus final consumer

Does that help the unresolved first-family packet at `0x0075` without borrowing semantics across families?
- no

The negative proof is byte-backed:
- the first-family packet contains in-band `op_22` at `0x006C` and `0x0071`
- the clean-arm windows do not
- no new local boundary appears inside `0x0060..0x0075`

## Unresolved

- The exact semantic role of `op_39` inside the clean arms remains unresolved.
- The exact semantic role of `op_22` at `0x006C` and `0x0071` inside the first-family packet remains unresolved.
- This pass does not justify any stricter rewrite of the `0x0075` packet itself.
