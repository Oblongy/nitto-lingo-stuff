## Lscr-102 Block 344

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `344`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `344`, length `2688`.
- File offset `512`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de c8 01 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 51 41 3e 36 00 01 51 41 3c 00 03 36 00 02 51 41 3c 00 05 36 00 04 51 41 3c 00 07 36 00 06 51 41 3c 00 09 36 00 08 51 41 58 00 3c 36 00 0a 51 41 3c 00 0c 36 00 0b 51 41 3c 00 0e 36 00 0d 51
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `472`: id `0`, kind `4`, len `12`, `sendInterval`
- payload offset `508`: id `1`, kind `4`, len `12`, `secondBuffer`
- payload offset `544`: id `2`, kind `4`, len `4`, `DAfp`
- payload offset `580`: id `4`, kind `4`, len `1`, `g`
- payload offset `612`: id `6`, kind `4`, len `17`, `rpmGearConversion`
- payload offset `676`: id `8`, kind `4`, len `10`, `gConvSlipA`
- payload offset `724`: id `10`, kind `4`, len `10`, `gConvSlipB`
- payload offset `756`: id `11`, kind `4`, len `16`, `brakeDecleration`
- payload offset `812`: id `13`, kind `4`, len `22`, `revLimiterDeceleration`
- payload offset `880`: id `15`, kind `4`, len `7`, `idleRPM`
- payload offset `908`: id `16`, kind `4`, len `11`, `tqFlyFactor`
- payload offset `944`: id `17`, kind `4`, len `14`, `partBreakPoint`
- payload offset `1000`: id `19`, kind `4`, len `6`, `vToMph`
- payload offset `1040`: id `21`, kind `4`, len `4`, `c0_5`
- payload offset `1076`: id `23`, kind `4`, len `2`, `c0`
- payload offset `1092`: id `24`, kind `4`, len `4`, `c100`
- payload offset `1112`: id `25`, kind `4`, len `5`, `c1000`
- payload offset `1136`: id `26`, kind `4`, len `6`, `c10000`
- payload offset `1160`: id `27`, kind `4`, len `7`, `c0_0075`
- payload offset `1204`: id `29`, kind `4`, len `3`, `c13`
- payload offset `1224`: id `30`, kind `4`, len `4`, `c0_4`
- payload offset `1260`: id `32`, kind `4`, len `4`, `c0_7`
- payload offset `1296`: id `34`, kind `4`, len `4`, `c1_7`
- payload offset `1332`: id `36`, kind `4`, len `5`, `c1_25`
- payload offset `1372`: id `38`, kind `4`, len `2`, `c9`
- payload offset `1388`: id `39`, kind `4`, len `4`, `c299`
- payload offset `1408`: id `40`, kind `4`, len `4`, `c300`
- payload offset `1428`: id `41`, kind `4`, len `4`, `c5_5`
- payload offset `1464`: id `43`, kind `4`, len `2`, `c2`
- payload offset `1480`: id `44`, kind `4`, len `2`, `c5`
- payload offset `1496`: id `45`, kind `4`, len `3`, `c50`
- payload offset `1516`: id `46`, kind `4`, len `2`, `c8`
- payload offset `1532`: id `47`, kind `4`, len `6`, `c0_005`
- payload offset `1572`: id `49`, kind `4`, len `6`, `c0_016`
- payload offset `1612`: id `51`, kind `4`, len `2`, `c3`
- payload offset `1628`: id `52`, kind `4`, len `5`, `c0_09`
- payload offset `1668`: id `54`, kind `4`, len `4`, `c0_6`
- payload offset `1704`: id `56`, kind `4`, len `3`, `c10`
- payload offset `1724`: id `57`, kind `4`, len `6`, `c0_015`
- payload offset `1764`: id `59`, kind `4`, len `5`, `c0_02`
- payload offset `1804`: id `61`, kind `4`, len `4`, `c200`
- payload offset `1824`: id `62`, kind `4`, len `5`, `c0_18`
- payload offset `1864`: id `64`, kind `4`, len `5`, `c1320`
- payload offset `1888`: id `65`, kind `4`, len `4`, `c760`
- payload offset `1908`: id `66`, kind `4`, len `2`, `c7`
- payload offset `1924`: id `67`, kind `4`, len `4`, `c7_5`
- payload offset `1960`: id `69`, kind `4`, len `4`, `c1_8`
- payload offset `1996`: id `71`, kind `4`, len `5`, `c1_15`
- payload offset `2036`: id `73`, kind `4`, len `3`, `c80`
- payload offset `2056`: id `74`, kind `4`, len `5`, `c0_95`
- payload offset `2096`: id `76`, kind `4`, len `5`, `c0_05`
- payload offset `2136`: id `78`, kind `4`, len `4`, `c0_2`
- payload offset `2156`: id `79`, kind `4`, len `4`, `c0_1`
- payload offset `2192`: id `81`, kind `4`, len `5`, `c0_65`
- payload offset `2232`: id `83`, kind `4`, len `2`, `c4`
- payload offset `2248`: id `84`, kind `4`, len `5`, `c0_07`
- payload offset `2288`: id `86`, kind `4`, len `4`, `c2_5`
- payload offset `2324`: id `88`, kind `4`, len `2`, `c1`
- payload offset `2544`: id `1`, kind `4`, len `10`, `RaceEngine`
- payload offset `2576`: id `2`, kind `4`, len `9`, `prototype`
- payload offset `2608`: id `3`, kind `4`, len `4`, `init`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

