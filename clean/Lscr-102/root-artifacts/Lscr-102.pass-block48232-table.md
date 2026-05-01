## Lscr-102 Block 48232

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `48232`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `48232`, length `584`.
- File offset `48400`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
72 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 76 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 39 54 00 00 41 35 00 02 1b 83 41 35 00 02 3b 00 00 35 00 03 39 3a 00 00 41 35 00 04 1e 1b 83 1d 3a 00 01 54 00 00 1d 57 00 00 51 56 00 00 41 35 00 05 16 07 00 12 56 00 00 41 35 00 06 1e
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `136`: id `0`, kind `4`, len `4`, `Math`
- payload offset `156`: id `1`, kind `4`, len `3`, `log`
- payload offset `176`: id `2`, kind `4`, len `2`, `c1`
- payload offset `192`: id `3`, kind `4`, len `6`, `random`
- payload offset `216`: id `4`, kind `4`, len `2`, `c5`
- payload offset `232`: id `5`, kind `4`, len `4`, `c0_6`
- payload offset `252`: id `6`, kind `4`, len `2`, `c2`
- payload offset `268`: id `7`, kind `4`, len `2`, `c0`
- payload offset `284`: id `8`, kind `4`, len `5`, `round`
- payload offset `308`: id `9`, kind `4`, len `5`, `c1000`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

