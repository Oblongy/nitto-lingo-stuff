## Lscr-102 Block 36764

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `36764`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `36764`, length `200`.
- File offset `36932`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
65 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 17 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
12 07 00 0c 41 43 36 00 00 51 06 00 09 41 42 36 00 00 51 00 01 00 00 00 00 00 00 00 04 00 00 00 05 00 00 00 62 00 72 00 61 00 6b 00 65 00 00 00 0b 00 00 00 b0 15 09 b3 62 02 b7 b0 62 02 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `40`: id `0`, kind `4`, len `5`, `brake`
- payload offset `100`: id `29`, kind `4`, len `9`, `setClutch`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

