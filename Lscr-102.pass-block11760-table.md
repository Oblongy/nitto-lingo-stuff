## Lscr-102 Block 11760

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `11760`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `11760`, length `232`.
- File offset `11928`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
08 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 19 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
83 27 3d 00 01 12 07 00 0f 41 35 00 00 35 00 02 39 3a 00 00 51 00 00 00 03 00 00 00 00 00 00 00 04 00 00 00 0b 00 00 00 72 00 75 00 6e 00 49 00 6e 00 74 00 65 00 72 00 76 00 61 00 6c 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `44`: id `0`, kind `4`, len `11`, `runInterval`
- payload offset `80`: id `1`, kind `4`, len `6`, `object`
- payload offset `104`: id `2`, kind `4`, len `6`, `forget`
- payload offset `164`: id `13`, kind `4`, len `7`, `sendPos`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

