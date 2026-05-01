## Lscr-102 Block 34244

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `34244`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `34244`, length `584`.
- File offset `34412`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
08 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 6e 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3b 00 01 12 07 00 0f 41 41 35 00 02 36 00 00 51 06 00 30 41 35 00 00 41 35 00 02 14 07 00 0f 41 41 35 00 02 36 00 00 51 06 00 18 41 35 00 00 41 35 00 03 16 07 00 0c 41 41 35 00 03 36 00 00 51
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `128`: id `0`, kind `4`, len `3`, `rpm`
- payload offset `148`: id `1`, kind `4`, len `9`, `undefined`
- payload offset `180`: id `2`, kind `4`, len `7`, `idleRPM`
- payload offset `208`: id `3`, kind `4`, len `6`, `c10000`
- payload offset `232`: id `4`, kind `4`, len `5`, `posTq`
- payload offset `256`: id `5`, kind `4`, len `7`, `tqArray`
- payload offset `284`: id `6`, kind `4`, len `8`, `parseInt`
- payload offset `312`: id `7`, kind `4`, len `4`, `c100`
- payload offset `332`: id `8`, kind `4`, len `5`, `negTq`
- payload offset `356`: id `9`, kind `4`, len `4`, `c200`
- payload offset `456`: id `21`, kind `4`, len `16`, `initComputerRace`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

