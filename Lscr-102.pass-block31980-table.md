## Lscr-102 Block 31980

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `31980`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `31980`, length `2264`.
- File offset `32148`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
65 64 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de c6 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
41 35 00 01 1e 57 00 00 51 56 00 00 41 35 00 02 16 07 00 0b 41 35 00 02 57 00 00 51 56 00 01 51 41 35 00 03 41 35 00 04 16 07 00 2d 56 00 00 41 35 00 05 1d 41 35 00 06 1c 83 41 35 00 07 41 35
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `728`: id `0`, kind `4`, len `3`, `rpm`
- payload offset `748`: id `1`, kind `4`, len `2`, `pb`
- payload offset `764`: id `2`, kind `4`, len `2`, `c1`
- payload offset `780`: id `3`, kind `4`, len `10`, `stockBoost`
- payload offset `812`: id `4`, kind `4`, len `2`, `c0`
- payload offset `828`: id `5`, kind `4`, len `4`, `c1_7`
- payload offset `848`: id `6`, kind `4`, len `4`, `c0_7`
- payload offset `868`: id `7`, kind `4`, len `12`, `boostSetting`
- payload offset `904`: id `8`, kind `4`, len `4`, `c7_5`
- payload offset `924`: id `9`, kind `4`, len `4`, `c100`
- payload offset `944`: id `10`, kind `4`, len `10`, `boostRange`
- payload offset `976`: id `11`, kind `4`, len `8`, `boostLag`
- payload offset `1004`: id `12`, kind `4`, len `8`, `boostPsi`
- payload offset `1032`: id `13`, kind `4`, len `21`, `compressionPowerDelta`
- payload offset `1088`: id `14`, kind `4`, len `22`, `pistonCompressionLevel`
- payload offset `1144`: id `15`, kind `4`, len `2`, `c4`
- payload offset `1160`: id `16`, kind `4`, len `2`, `c5`
- payload offset `1176`: id `17`, kind `4`, len `2`, `c2`
- payload offset `1192`: id `18`, kind `4`, len `6`, `maxPsi`
- payload offset `1216`: id `19`, kind `4`, len `9`, `turboFlow`
- payload offset `1248`: id `20`, kind `4`, len `19`, `overallAirFlowLimit`
- payload offset `1300`: id `21`, kind `4`, len `12`, `airFlowLimit`
- payload offset `1336`: id `22`, kind `4`, len `11`, `chipSetting`
- payload offset `1372`: id `23`, kind `4`, len `13`, `fuelFlowLimit`
- payload offset `1412`: id `24`, kind `4`, len `11`, `dangerLevel`
- payload offset `1448`: id `25`, kind `4`, len `12`, `airFuelMeter`
- payload offset `1484`: id `26`, kind `4`, len `12`, `airFuelDelta`
- payload offset `1520`: id `27`, kind `4`, len `4`, `Math`
- payload offset `1540`: id `28`, kind `4`, len `3`, `abs`
- payload offset `1560`: id `29`, kind `4`, len `16`, `engineDamageRisk`
- payload offset `1604`: id `30`, kind `4`, len `5`, `c0_09`
- payload offset `1628`: id `31`, kind `4`, len `5`, `c0_07`
- payload offset `1652`: id `32`, kind `4`, len `4`, `c2_5`
- payload offset `1672`: id `33`, kind `4`, len `3`, `c10`
- payload offset `1692`: id `34`, kind `4`, len `4`, `c0_1`
- payload offset `1712`: id `35`, kind `4`, len `7`, `ECUtune`
- payload offset `1740`: id `36`, kind `4`, len `11`, `systemPower`
- payload offset `1776`: id `37`, kind `4`, len `6`, `airhpi`
- payload offset `1800`: id `38`, kind `4`, len `17`, `boostCreatedPower`
- payload offset `2192`: id `19`, kind `4`, len `9`, `getTorque`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

