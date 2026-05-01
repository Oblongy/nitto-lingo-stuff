## Lscr-102 Block 37252

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `37252`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `37252`, length `2068`.
- File offset `37420`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
08 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 1b 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
01 36 00 00 51 41 3e 36 00 02 51 41 3e 36 00 03 51 41 3e 36 00 04 51 41 3e 36 00 05 51 41 35 00 06 83 27 3d 00 07 12 07 00 0f 41 35 00 06 35 00 08 39 3a 00 00 51 41 35 00 09 07 01 dd 41 42 36
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `556`: id `0`, kind `4`, len `10`, `timeAnchor`
- payload offset `588`: id `1`, kind `4`, len `2`, `c0`
- payload offset `604`: id `2`, kind `4`, len `13`, `goodCounterRT`
- payload offset `644`: id `3`, kind `4`, len `12`, `badCounterRT`
- payload offset `680`: id `4`, kind `4`, len `13`, `goodCounterET`
- payload offset `720`: id `5`, kind `4`, len `12`, `badCounterET`
- payload offset `756`: id `6`, kind `4`, len `12`, `lightDelayTO`
- payload offset `792`: id `7`, kind `4`, len `6`, `object`
- payload offset `816`: id `8`, kind `4`, len `6`, `forget`
- payload offset `840`: id `9`, kind `4`, len `7`, `staging`
- payload offset `868`: id `10`, kind `4`, len `9`, `gearValue`
- payload offset `912`: id `12`, kind `4`, len `6`, `gearUp`
- payload offset `936`: id `13`, kind `4`, len `8`, `raceType`
- payload offset `964`: id `14`, kind `4`, len `4`, `KOTH`
- payload offset `984`: id `15`, kind `4`, len `6`, `KREADY`
- payload offset `1008`: id `16`, kind `4`, len `13`, `createMd5Hash`
- payload offset `1048`: id `17`, kind `4`, len `2`, `QM`
- payload offset `1064`: id `18`, kind `4`, len `6`, `RREADY`
- payload offset `1088`: id `19`, kind `4`, len `5`, `RIVAL`
- payload offset `1112`: id `20`, kind `4`, len `9`, `TEAMRIVAL`
- payload offset `1144`: id `21`, kind `4`, len `8`, `RIVREADY`
- payload offset `1172`: id `22`, kind `4`, len `3`, `CTQ`
- payload offset `1192`: id `23`, kind `4`, len `1`, `P`
- payload offset `1208`: id `24`, kind `4`, len `15`, `startLightTimer`
- payload offset `1252`: id `25`, kind `4`, len `1`, `p`
- payload offset `1268`: id `26`, kind `4`, len `2`, `CT`
- payload offset `1284`: id `27`, kind `4`, len `3`, `btd`
- payload offset `1304`: id `28`, kind `4`, len `1`, `o`
- payload offset `1320`: id `29`, kind `4`, len `8`, `lightTO1`
- payload offset `1348`: id `30`, kind `4`, len `16`, `stagingLightPos1`
- payload offset `1392`: id `31`, kind `4`, len `7`, `timeout`
- payload offset `1420`: id `32`, kind `4`, len `5`, `c1000`
- payload offset `1444`: id `33`, kind `4`, len `2`, `c2`
- payload offset `1460`: id `34`, kind `4`, len `6`, `symbol`
- payload offset `1484`: id `35`, kind `4`, len `8`, `runLight`
- payload offset `1512`: id `36`, kind `4`, len `1`, `b`
- payload offset `1528`: id `37`, kind `4`, len `8`, `lightTO2`
- payload offset `1556`: id `38`, kind `4`, len `16`, `stagingLightPos2`
- payload offset `1600`: id `39`, kind `4`, len `3`, `HTQ`
- payload offset `1620`: id `40`, kind `4`, len `8`, `HTQREADY`
- payload offset `1648`: id `41`, kind `4`, len `2`, `HT`
- payload offset `1664`: id `42`, kind `4`, len `7`, `HTREADY`
- payload offset `1948`: id `33`, kind `4`, len `15`, `startLightTimer`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

