## Lscr-102 Block 11368

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `11368`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `11368`, length `392`.
- File offset `11536`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
08 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 3b 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
83 27 3d 00 01 12 07 00 0f 41 35 00 00 35 00 02 39 3a 00 00 51 41 3b 00 03 39 3d 00 00 58 03 e8 41 35 00 04 1e 3b 00 05 39 3d 00 06 3a 00 01 41 23 00 04 36 00 00 51 00 07 00 00 00 00 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `76`: id `0`, kind `4`, len `11`, `runInterval`
- payload offset `112`: id `1`, kind `4`, len `6`, `object`
- payload offset `136`: id `2`, kind `4`, len `6`, `forget`
- payload offset `160`: id `3`, kind `4`, len `7`, `timeout`
- payload offset `188`: id `4`, kind `4`, len `12`, `sendInterval`
- payload offset `224`: id `5`, kind `4`, len `6`, `symbol`
- payload offset `248`: id `6`, kind `4`, len `7`, `sendPos`
- payload offset `324`: id `11`, kind `4`, len `7`, `endRace`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

