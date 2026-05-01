## Lscr-102 Block 39320

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `39320`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `39320`, length `1796`.
- File offset `39488`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
79 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de a9 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
39 54 00 01 3a 00 01 36 00 00 51 3b 00 02 39 3d 00 03 3a 00 01 35 00 04 39 54 00 01 3a 00 01 51 54 00 00 47 02 82 00 09 00 13 00 29 00 14 00 29 00 15 00 82 00 16 00 cd 00 17 01 0f 00 18 01 5a
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `700`: id `0`, kind `4`, len `10`, `greenDelay`
- payload offset `732`: id `1`, kind `4`, len `8`, `parseInt`
- payload offset `760`: id `2`, kind `4`, len `6`, `sprite`
- payload offset `784`: id `3`, kind `4`, len `7`, `flashSP`
- payload offset `812`: id `4`, kind `4`, len `18`, `setSpectateDelayCB`
- payload offset `860`: id `5`, kind `4`, len `10`, `timeAnchor`
- payload offset `892`: id `6`, kind `4`, len `2`, `c0`
- payload offset `908`: id `7`, kind `4`, len `7`, `_system`
- payload offset `936`: id `8`, kind `4`, len `12`, `milliseconds`
- payload offset `972`: id `9`, kind `4`, len `8`, `lightTO1`
- payload offset `1000`: id `10`, kind `4`, len `6`, `object`
- payload offset `1024`: id `11`, kind `4`, len `6`, `forget`
- payload offset `1048`: id `12`, kind `4`, len `16`, `stagingLightPos1`
- payload offset `1092`: id `13`, kind `4`, len `7`, `timeout`
- payload offset `1120`: id `14`, kind `4`, len `6`, `symbol`
- payload offset `1144`: id `15`, kind `4`, len `8`, `runLight`
- payload offset `1172`: id `16`, kind `4`, len `12`, `secondBuffer`
- payload offset `1208`: id `17`, kind `4`, len `8`, `lightTO2`
- payload offset `1236`: id `18`, kind `4`, len `16`, `stagingLightPos2`
- payload offset `1280`: id `19`, kind `4`, len `1`, `p`
- payload offset `1296`: id `20`, kind `4`, len `1`, `b`
- payload offset `1312`: id `21`, kind `4`, len `1`, `1`
- payload offset `1328`: id `22`, kind `4`, len `2`, `1T`
- payload offset `1344`: id `23`, kind `4`, len `1`, `s`
- payload offset `1360`: id `24`, kind `4`, len `2`, `sT`
- payload offset `1376`: id `25`, kind `4`, len `1`, `o`
- payload offset `1392`: id `26`, kind `4`, len `1`, `2`
- payload offset `1408`: id `27`, kind `4`, len `2`, `2T`
- payload offset `1712`: id `35`, kind `4`, len `8`, `runLight`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

