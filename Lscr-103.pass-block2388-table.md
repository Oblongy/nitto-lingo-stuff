## Lscr-103 Block 2388

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-103.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-103.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `2388`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `2388`, length `400`.
- File offset `3096`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
74 61 74 65
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 0d 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 54 00 00 36 00 02 51 00 00 00 03 00 00 00 00 00 00 00 04 00 00 00 07 00 00 00 5f 00 67 00 6c 00 6f 00 62 00 61 00 6c 00 00 00 01 00 00 00 04 00 00 00 07 00 00 00 6f 00 62 00 6a 00 52 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `32`: id `0`, kind `4`, len `7`, `_global`
- payload offset `60`: id `1`, kind `4`, len `7`, `objRace`
- payload offset `88`: id `2`, kind `4`, len `5`, `isNos`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js`
- exported handlers: `runEngineStart`, `runEngineStop`, `runEngine`, `runEngineGaugeInit`, `runEngineGearUp`, `runEngineGearDown`, `runEngineSetBrake`, `runEngineSetClutch`, `runEngineSetNOS`, `runEngineDyno`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

