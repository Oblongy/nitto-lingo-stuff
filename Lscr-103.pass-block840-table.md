## Lscr-103 Block 840

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-103.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-103.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `840`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `840`, length `516`.
- File offset `1548`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 3f 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 07 00 39 3b 00 02 39 3d 00 03 3a 00 01 35 00 04 39 3b 00 00 35 00 01 35 00 05 3b 00 00 35 00 01 35 00 06 3b 00 00 35 00 01 35 00 07 3b 00 00 35 00 01 35 00 08 3a 00 04 51 00 09 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `80`: id `0`, kind `4`, len `7`, `_global`
- payload offset `108`: id `1`, kind `4`, len `7`, `objRace`
- payload offset `136`: id `2`, kind `4`, len `6`, `sprite`
- payload offset `160`: id `3`, kind `4`, len `7`, `flashSP`
- payload offset `188`: id `4`, kind `4`, len `20`, `runEngineGaugeInitCB`
- payload offset `240`: id `5`, kind `4`, len `7`, `redLine`
- payload offset `268`: id `6`, kind `4`, len `15`, `nitrousTankSize`
- payload offset `312`: id `7`, kind `4`, len `16`, `nitrousRemaining`
- payload offset `356`: id `8`, kind `4`, len `9`, `boostType`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js`
- exported handlers: `runEngineStart`, `runEngineStop`, `runEngine`, `runEngineGaugeInit`, `runEngineGearUp`, `runEngineGearDown`, `runEngineSetBrake`, `runEngineSetClutch`, `runEngineSetNOS`, `runEngineDyno`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

