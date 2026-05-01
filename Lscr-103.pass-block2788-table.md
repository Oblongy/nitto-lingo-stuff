## Lscr-103 Block 2788

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-103.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-103.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `2788`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `2788`, length `1880`.
- File offset `3496`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
71 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 0c 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
17 07 00 2e 54 00 00 3b 00 00 35 00 01 35 00 02 15 07 00 1e 3b 00 00 35 00 01 54 00 00 36 00 03 51 3b 00 00 35 00 01 35 00 04 39 3a 00 00 51 54 00 01 3c 00 05 17 45 00 0a 54 00 01 58 00 05 15
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `540`: id `0`, kind `4`, len `7`, `_global`
- payload offset `568`: id `1`, kind `4`, len `7`, `objRace`
- payload offset `596`: id `2`, kind `4`, len `6`, `maxPsi`
- payload offset `620`: id `3`, kind `4`, len `12`, `boostSetting`
- payload offset `656`: id `4`, kind `4`, len `9`, `initBoost`
- payload offset `700`: id `6`, kind `4`, len `11`, `chipSetting`
- payload offset `736`: id `7`, kind `4`, len `5`, `Array`
- payload offset `760`: id `8`, kind `4`, len `4`, `init`
- payload offset `780`: id `9`, kind `4`, len `4`, `DYNO`
- payload offset `800`: id `10`, kind `4`, len `7`, `tqArray`
- payload offset `828`: id `11`, kind `4`, len `6`, `length`
- payload offset `852`: id `12`, kind `4`, len `10`, `revLimiter`
- payload offset `884`: id `13`, kind `4`, len `3`, `rpm`
- payload offset `904`: id `14`, kind `4`, len `9`, `getTorque`
- payload offset `936`: id `15`, kind `4`, len `17`, `calculateExtraHpi`
- payload offset `984`: id `16`, kind `4`, len `4`, `Math`
- payload offset `1004`: id `17`, kind `4`, len `5`, `floor`
- payload offset `1028`: id `18`, kind `4`, len `5`, `posTq`
- payload offset `1052`: id `19`, kind `4`, len `3`, `hpi`
- payload offset `1072`: id `20`, kind `4`, len `17`, `boostCreatedPower`
- payload offset `1120`: id `21`, kind `4`, len `11`, `systemPower`
- payload offset `1156`: id `22`, kind `4`, len `7`, `ECUtune`
- payload offset `1184`: id `23`, kind `4`, len `21`, `compressionPowerDelta`
- payload offset `1240`: id `24`, kind `4`, len `4`, `push`
- payload offset `1260`: id `25`, kind `4`, len `12`, `airFlowLimit`
- payload offset `1296`: id `26`, kind `4`, len `12`, `airFuelMeter`
- payload offset `1332`: id `27`, kind `4`, len `19`, `overallAirFlowLimit`
- payload offset `1384`: id `28`, kind `4`, len `8`, `boostPsi`
- payload offset `1412`: id `29`, kind `4`, len `9`, `turboFlow`
- payload offset `1444`: id `30`, kind `4`, len `6`, `sprite`
- payload offset `1468`: id `31`, kind `4`, len `7`, `flashSP`
- payload offset `1496`: id `32`, kind `4`, len `15`, `garageDynoRunCB`
- payload offset `1540`: id `33`, kind `4`, len `4`, `join`
- payload offset `1560`: id `34`, kind `4`, len `1`, `,`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js`
- exported handlers: `runEngineStart`, `runEngineStop`, `runEngine`, `runEngineGaugeInit`, `runEngineGearUp`, `runEngineGearDown`, `runEngineSetBrake`, `runEngineSetClutch`, `runEngineSetNOS`, `runEngineDyno`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

