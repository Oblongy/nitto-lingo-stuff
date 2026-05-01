## Lscr-103 Block 1592

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-103.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-103.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `1592`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `1592`, length `260`.
- File offset `2300`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 17 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 07 00 11 3b 00 00 35 00 01 35 00 02 39 3a 00 00 51 00 03 00 00 00 00 00 00 00 04 00 00 00 07 00 00 00 5f 00 67 00 6c 00 6f 00 62 00 61 00 6c 00 00 00 01 00 00 00 04 00 00 00 07 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `40`: id `0`, kind `4`, len `7`, `_global`
- payload offset `68`: id `1`, kind `4`, len `7`, `objRace`
- payload offset `96`: id `2`, kind `4`, len `8`, `gearDown`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js`
- exported handlers: `runEngineStart`, `runEngineStop`, `runEngine`, `runEngineGaugeInit`, `runEngineGearUp`, `runEngineGearDown`, `runEngineSetBrake`, `runEngineSetClutch`, `runEngineSetNOS`, `runEngineDyno`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

