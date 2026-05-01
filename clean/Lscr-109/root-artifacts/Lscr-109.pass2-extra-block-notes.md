## Lscr-109 Pass 2

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Scope:
- This pass documents the embedded block at literal-relative offset `8436`.
- No handler semantics are inferred from this block.

Raw header evidence:
- `Lscr-109.json` lists an embedded code block at offset `8436`, length `892`.
- The four bytes at `Lscr-109.bin` file offset `8844` (`408 + 8436`) are:

```text
64 6E 65 00
```

- The hidden-block marker begins four bytes later, at file offset `8848`:

```text
03 00 AD DE 92 00 00 00 00 00 00 00 96 00 00 00
```

Decoded exactly as the same hidden-block marker pattern used elsewhere in this chunk:
- marker: `03 00 AD DE`
- `headerWord0 = 146`
- `headerWord1 = 0`
- `headerWord2 = 150`

First instruction-region bytes from that block:

```text
3B 00 00 35 00 01 07 00 8C 85 3B 00 00 35 00 02
45 00 07 54 00 01 20 07 00 2B 3B 00 00 35 00 03
35 00 04 39 3D 00 05 3D 00 06 3B 00 07 39 54 00
00 3A 00 01 3B 00 00 35 00 08 1B 3A 00 03 51 06
```

Recovered UTF-16LE string records later in the same block:
- block-relative offset `172`: id `0`, `_global`
- block-relative offset `200`: id `1`, `isConnected`
- block-relative offset `236`: id `2`, `isEnc`
- block-relative offset `260`: id `3`, `gMultiuserInstance`
- block-relative offset `308`: id `4`, `sendNetMessage`
- block-relative offset `348`: id `5`, `System`
- block-relative offset `372`: id `6`, `String`
- block-relative offset `396`: id `7`, `encrypt`
- block-relative offset `424`: id `8`, `ld`
- block-relative offset `440`: id `9`, `Object`
- block-relative offset `464`: id `10`, `ex`
- block-relative offset `480`: id `11`, `sprite`
- block-relative offset `504`: id `12`, `flashSP`
- block-relative offset `588`: id `14`, `Connection Error`

These strings are exactly what was recovered by scanning `kind = 4` UTF-16LE
records inside the block payload. This pass does not assign semantics to the
short entries `ld` or `ex`.

Current evidence-only conclusions:
- `Lscr-109` contains one extra hidden block beyond the five handler-dispatched blocks.
- That extra block has the same marker/header family as the other hidden blocks.
- The block contains a literal table including `_global`, `isConnected`, `isEnc`, `gMultiuserInstance`, `sendNetMessage`, `System`, `String`, `encrypt`, `Object`, `sprite`, `flashSP`, and `Connection Error`.

Unresolved:
- No `Lscr-109.json` handler points directly at offset `8436`.
- The relationship between the leading bytes `64 6E 65 00` and the marker at `8848` is not resolved by this pass.
- The runtime role of this block is not proven by this pass.
- Opcodes such as `3B`, `35`, `39`, `3A`, `3D`, `45`, `51`, `54`, and `06/07` remain unresolved here.
