## Lscr-102 Block 41116

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `41116`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `41116`, length `2148`.
- File offset `41284`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
74 4f 75 74
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de c4 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
01 f4 36 00 00 51 54 00 00 35 00 01 47 02 b4 00 09 00 13 00 29 00 14 00 29 00 15 00 29 00 16 00 29 00 1f 00 29 00 20 00 29 00 21 01 cf 00 22 01 cf 00 23 01 cf 41 35 00 02 20 07 00 0c 41 41 35
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `724`: id `0`, kind `4`, len `6`, `period`
- payload offset `748`: id `1`, kind `4`, len `4`, `name`
- payload offset `768`: id `2`, kind `4`, len `16`, `stagingLightPos1`
- payload offset `812`: id `3`, kind `4`, len `2`, `c0`
- payload offset `828`: id `4`, kind `4`, len `6`, `sprite`
- payload offset `852`: id `5`, kind `4`, len `7`, `flashSP`
- payload offset `880`: id `6`, kind `4`, len `21`, `runEngineSetLightOnCB`
- payload offset `936`: id `7`, kind `4`, len `6`, `amber1`
- payload offset `960`: id `8`, kind `4`, len `10`, `greenDelay`
- payload offset `992`: id `9`, kind `4`, len `6`, `amber2`
- payload offset `1016`: id `10`, kind `4`, len `6`, `amber3`
- payload offset `1040`: id `11`, kind `4`, len `6`, `forget`
- payload offset `1064`: id `12`, kind `4`, len `9`, `timeGreen`
- payload offset `1096`: id `13`, kind `4`, len `7`, `_system`
- payload offset `1124`: id `14`, kind `4`, len `12`, `milliseconds`
- payload offset `1160`: id `15`, kind `4`, len `8`, `lightTO2`
- payload offset `1188`: id `16`, kind `4`, len `7`, `timeout`
- payload offset `1216`: id `17`, kind `4`, len `6`, `symbol`
- payload offset `1240`: id `18`, kind `4`, len `8`, `runLight`
- payload offset `1268`: id `19`, kind `4`, len `1`, `p`
- payload offset `1284`: id `20`, kind `4`, len `1`, `1`
- payload offset `1300`: id `21`, kind `4`, len `1`, `b`
- payload offset `1316`: id `22`, kind `4`, len `1`, `s`
- payload offset `1332`: id `23`, kind `4`, len `5`, `green`
- payload offset `1356`: id `24`, kind `4`, len `15`, `raceStartTimeCB`
- payload offset `1400`: id `25`, kind `4`, len `8`, `lightTO1`
- payload offset `1428`: id `26`, kind `4`, len `6`, `object`
- payload offset `1452`: id `27`, kind `4`, len `16`, `stagingLightPos2`
- payload offset `1496`: id `28`, kind `4`, len `8`, `raceType`
- payload offset `1524`: id `29`, kind `4`, len `2`, `CT`
- payload offset `1540`: id `30`, kind `4`, len `24`, `ctStartAnimateComputerCB`
- payload offset `1600`: id `31`, kind `4`, len `2`, `1T`
- payload offset `1616`: id `32`, kind `4`, len `2`, `sT`
- payload offset `1632`: id `33`, kind `4`, len `1`, `o`
- payload offset `1648`: id `34`, kind `4`, len `1`, `2`
- payload offset `1664`: id `35`, kind `4`, len `2`, `2T`
- payload offset `1988`: id `37`, kind `4`, len `13`, `createMd5Hash`

Recovered loose UTF-16LE message fragments:
- `ctStartAnimateComputerCB`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

