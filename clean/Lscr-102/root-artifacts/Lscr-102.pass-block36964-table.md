## Lscr-102 Block 36964

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `36964`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `36964`, length `288`.
- File offset `37132`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
72 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 36 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
35 00 00 14 07 00 0f 41 41 35 00 00 36 00 01 51 06 00 22 54 00 00 41 35 00 02 16 07 00 0f 41 41 35 00 02 36 00 01 51 06 00 0b 41 54 00 00 36 00 01 51 00 00 03 00 00 00 00 00 00 00 04 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `72`: id `0`, kind `4`, len `5`, `c0_05`
- payload offset `96`: id `1`, kind `4`, len `13`, `clutchFeather`
- payload offset `136`: id `2`, kind `4`, len `4`, `c0_2`
- payload offset `208`: id `31`, kind `4`, len `14`, `stagedAndReady`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

