# Lscr-107 Repeated Store-Chain Templates

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.pass-block152-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.pass-block4716-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.blocks.lingo`

Scope:
- This pass extracts repeated raw store-chain templates from block `152` and block `4716`.
- It only groups exact byte families of the form `_global ... 3d ... 36 ... 51`.
- It does not add opcode semantics beyond the already staged local block labels.
- It does not modify `rightful.ls`.

Method:
- Block `152` instruction bytes were read from file offset `880`, length `255`.
- Block `4716` instruction bytes were read from file offset `5444`, length `40`.
- Template grouping below is by exact raw byte shape, with only the varying operand bytes replaced by placeholders.

## Block 152

Block facts:
- block offset: `152`
- file offset: `880`
- receiver id in this block: `02` -> `_global`

### Family A: missing-id store

Template:
```text
3b 00 02 3d 00 0b 36 00 nn 51
```

Meaning already supported by local staged labels:
- `_global.<field> = id_11`

Repeated instances:

| block start | raw bytes | staged field label |
|---:|---|---|
| `0x0042` | `3b 00 02 3d 00 0b 36 00 0a 51` | `lastAction` |
| `0x009e` | `3b 00 02 3d 00 0b 36 00 19 51` | `socketBuffer` |
| `0x00d8` | `3b 00 02 3d 00 0b 36 00 20 51` | `facebookToken` |
| `0x00e2` | `3b 00 02 3d 00 0b 36 00 21 51` | `facebookID` |
| `0x00ec` | `3b 00 02 3d 00 0b 36 00 22 51` | `facebookSessionSecret` |
| `0x00f6` | `3b 00 02 3d 00 0b 36 00 23 51` | `facebookSessionKey` |

Observed variation:
- only the final `36 00 nn` target id changes
- the rhs id operand `0b` is stable across all six instances

Unresolved:
- `0b` remains the missing payload id recovered elsewhere as `id_11`

### Family B: literal-or-named-value store

Template:
```text
3b 00 02 3d 00 xx 36 00 yy 51
```

Meaning already supported by local staged labels:
- `_global.<field_yy> = <value_xx>`

Repeated instances:

| block start | raw bytes | staged field/value labels |
|---:|---|---|
| `0x004c` | `3b 00 02 3d 00 0d 36 00 0c 51` | `mainURL = "http://game.nittolegends.com/"` |
| `0x0074` | `3b 00 02 3d 00 12 36 00 11 51` | `cacheURL = "http://download.nittolegends.com/"` |
| `0x007e` | `3b 00 02 3d 00 14 36 00 13 51` | `socketURL = "live.nittolegends.com"` |
| `0x0088` | `3b 00 02 3d 00 16 36 00 15 51` | `uggURL = "http://ugg.nittolegends.com/"` |
| `0x0092` | `3b 00 02 3d 00 18 36 00 17 51` | `exeName = NittoLegendsBeta` |

Observed variation:
- the source operand `xx` changes each time
- the target operand `yy` changes each time
- the receiver, store opcode, and final close byte are stable

Unresolved:
- none at the template level beyond raw operand meaning already reflected in staged labels

### Family C: receiver-plus-_global.mainURL derived store

Shared prefix:
```text
3b 00 02 3b 00 02 35 00 0c
```

This family is repeated at the prefix level, but splits into two different full chains:

| block start | raw bytes | staged label |
|---:|---|---|
| `0x0056` | `3b 00 02 3b 00 02 35 00 0c 3d 00 0f 1b 36 00 0e 51` | `gameURL = (_global.mainURL & "gameCode1_00.aspx")` |
| `0x0068` | `3b 00 02 3b 00 02 35 00 0c 36 00 10 51` | `avatarMainURL = _global.mainURL` |

Conclusion:
- repeated receiver/load prefix exists
- no single exact full-chain template covers both stores

### Not part of the target `_global ... 3d ... 36 ... 51` family

These were inspected but are outside the exact store-chain family requested here:

| block start | raw bytes | staged label |
|---:|---|---|
| `0x0024` | `3b 00 02 3e 36 00 06 51` | `aid = VOID` |
| `0x002c` | `3b 00 02 3b 00 08 39 23 00 00 36 00 07 51` | `gNetID = Array()` |
| `0x003a` | `3b 00 02 3b 00 08 39 23 00 00 36 00 09 51` | `fileNetID = Array()` |
| `0x00a8` | `3b 00 02 43 36 00 1a 51` | `isEnc = 1` |
| `0x00cc` | `3b 00 02 42 36 00 1e 51` | `isIdle = 0` |
| `0x00d2` | `3b 00 02 42 36 00 1f 51` | `isConnected = 0` |

## Block 4716

Block facts:
- block offset: `4716`
- file offset: `5444`
- receiver id in this block: `00` -> `_global`

### Family D: embedded missing-id store

Template:
```text
3b 00 00 3d 00 02 36 00 nn 51
```

Meaning already supported by local staged labels:
- `_global.<field> = id_2`

Repeated instances:

| block start | raw bytes | staged field label |
|---:|---|---|
| `0x0000` | `3b 00 00 3d 00 02 36 00 01 51` | `facebookToken` |
| `0x000a` | `3b 00 00 3d 00 02 36 00 03 51` | `facebookID` |
| `0x0014` | `3b 00 00 3d 00 02 36 00 04 51` | `facebookSessionSecret` |
| `0x001e` | `3b 00 00 3d 00 02 36 00 05 51` | `facebookSessionKey` |

Observed variation:
- only the final `36 00 nn` target id changes
- the rhs id operand `02` is stable across all four instances

Unresolved:
- `02` remains the missing payload id recovered elsewhere as `id_2`

## Outcome

- The strongest repeated `_global ... 3d ... 36 ... 51` families are now isolated as:
  - block `152` family A
  - block `152` family B
  - block `4716` family D
- block `152` also contains a repeated `_global.mainURL`-load prefix, but not a single exact full-chain template

## Readable-Lingo lift status from this artifact

Accepted direct lifts into `clean\Lscr-107\rightful.ls`:
- block `152`
  - `_global.aid = VOID`
  - `_global.gNetID = Array()`
  - `_global.fileNetID = Array()`
  - `_global.lastAction = id_11`
  - `_global.mainURL = "http://game.nittolegends.com/"`
  - `_global.gameURL = (_global.mainURL & "gameCode1_00.aspx")`
  - `_global.avatarMainURL = _global.mainURL`
  - `_global.cacheURL = "http://download.nittolegends.com/"`
  - `_global.socketURL = "live.nittolegends.com"`
  - `_global.uggURL = "http://ugg.nittolegends.com/"`
  - `_global.exeName = NittoLegendsBeta`
  - `_global.socketBuffer = id_11`
  - `_global.isEnc = 1`
  - `_global.isIdle = 0`
  - `_global.isConnected = 0`
  - `_global.facebookToken = id_11`
  - `_global.facebookID = id_11`
  - `_global.facebookSessionSecret = id_11`
  - `_global.facebookSessionKey = id_11`
- block `4716`
  - `_global.facebookToken = id_2`
  - `_global.facebookID = id_2`
  - `_global.facebookSessionSecret = id_2`
  - `_global.facebookSessionKey = id_2`

Still not proven by this artifact alone:
- the trailing `_global -- 0x0112` in block `152`
- any other non-family cleanup outside blocks `152` and `4716`

## Comparison against final-clean deliverable

Compared artifacts:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-107\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-107\Lscr-107.mechanical-report.md`

What this artifact now proves beyond the current `final-clean` body:
- block `152`
  - `_global.aid = VOID`
  - `_global.gNetID = Array()`
  - `_global.fileNetID = Array()`
  - `_global.mainURL = "http://game.nittolegends.com/"`
  - `_global.gameURL = (_global.mainURL & "gameCode1_00.aspx")`
  - `_global.avatarMainURL = _global.mainURL`
  - `_global.cacheURL = "http://download.nittolegends.com/"`
  - `_global.socketURL = "live.nittolegends.com"`
  - `_global.uggURL = "http://ugg.nittolegends.com/"`
  - `_global.exeName = NittoLegendsBeta`
  - `_global.isEnc = 1`
  - `_global.isIdle = 0`
  - `_global.isConnected = 0`
- block `4716`
  - no additional promotion beyond the already staged direct `_global.facebook* = id_2` lines

Why those lines are accepted in `clean\Lscr-107\rightful.ls`:
- every accepted lift above is backed either by:
  - an exact repeated store family isolated in this artifact, or
  - an exact one-off raw chain already listed under `Not part of the target _global ... 3d ... 36 ... 51 family`
- no identifier, callback, or rhs value was renamed or guessed; each came from the staged block labels already present in `Lscr-107.blocks.lingo`

What remains unresolved after this controlled lift:
- block `152`
  - `_global -- 0x00C7`
    - this artifact does not isolate a following `_global ... 3d ... 36 ... 51` family starting there
    - the next proved byte-backed action remains `initFileHandler() -- 0x00CF`
  - `_global -- 0x0112`
    - no consuming opcode appears for a new proved store family inside this artifact
    - this pass does not prove whether it is a live receiver prefix outside the extracted families or a terminator-only residue
- block `4716`
  - no unresolved separator remains inside the family-backed `facebook* = id_2` run
- outside blocks `152` and `4716`
  - this artifact makes no new claim about `resizeWindow`, `sendHeartbeat`, `setInactive`, or any other handler

Controlled-lift conclusion:
- this chain-template artifact supports the current extra `_global.<field>` lifts already present in `clean\Lscr-107\rightful.ls`
- it does not currently prove any additional readable-Lingo line beyond those lifts
