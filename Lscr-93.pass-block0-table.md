## Lscr-93 Block 0

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\01-frame1script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `0`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `0`, length `412`.
- File offset `168`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 84 d0
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 19 00 00 00 03 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 00 35 00 01 02 3b 00 00 35 00 02 02 3b 00 00 35 00 03 02 00 00 00 00 05 00 00 00 00 00 00 00 04 00 00 00 07 00 00 00 5f 00 67 00 6c 00 6f 00 62 00 61 00 6c 00 00 00 01 00 00 00 04 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `44`: id `0`, kind `4`, len `7`, `_global`
- payload offset `72`: id `1`, kind `4`, len `6`, `gNetID`
- payload offset `96`: id `2`, kind `4`, len `19`, `checkedForOneClient`
- payload offset `148`: id `3`, kind `4`, len `18`, `checkProcessResult`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\01-frame1script.js`
- exported handlers: `exitFrame`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

