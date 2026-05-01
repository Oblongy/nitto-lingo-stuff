## Lscr-102 Block 3032

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `3032`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `3032`, length `2940`.
- File offset `3200`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
54 79 70 65
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de f0 01 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 51 41 3e 36 00 01 51 41 3e 36 00 02 51 41 3e 36 00 03 51 41 3e 36 00 04 51 41 3e 36 00 05 51 41 3d 00 07 36 00 06 51 41 54 00 00 36 00 08 51 41 41 35 00 0a 36 00 09 51 41 43 36 00 0b 51 41
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `512`: id `0`, kind `4`, len `13`, `goodCounterRT`
- payload offset `552`: id `1`, kind `4`, len `12`, `badCounterRT`
- payload offset `588`: id `2`, kind `4`, len `13`, `goodCounterET`
- payload offset `628`: id `3`, kind `4`, len `12`, `badCounterET`
- payload offset `664`: id `4`, kind `4`, len `6`, `avgFps`
- payload offset `688`: id `5`, kind `4`, len `8`, `fpsCount`
- payload offset `716`: id `6`, kind `4`, len `4`, `guid`
- payload offset `748`: id `8`, kind `4`, len `8`, `raceType`
- payload offset `776`: id `9`, kind `4`, len `10`, `timeAnchor`
- payload offset `808`: id `10`, kind `4`, len `2`, `c0`
- payload offset `824`: id `11`, kind `4`, len `7`, `staging`
- payload offset `852`: id `12`, kind `4`, len `16`, `stagingLightPos1`
- payload offset `896`: id `13`, kind `4`, len `16`, `stagingLightPos2`
- payload offset `940`: id `14`, kind `4`, len `10`, `greenDelay`
- payload offset `972`: id `15`, kind `4`, len `9`, `preStaged`
- payload offset `1004`: id `16`, kind `4`, len `6`, `staged`
- payload offset `1028`: id `17`, kind `4`, len `5`, `brake`
- payload offset `1052`: id `18`, kind `4`, len `12`, `isMidMd5sent`
- payload offset `1088`: id `19`, kind `4`, len `5`, `isNos`
- payload offset `1112`: id `20`, kind `4`, len `2`, `pb`
- payload offset `1128`: id `21`, kind `4`, len `9`, `turboFlow`
- payload offset `1160`: id `22`, kind `4`, len `7`, `c0_0075`
- payload offset `1188`: id `23`, kind `4`, len `12`, `stockRedLine`
- payload offset `1224`: id `24`, kind `4`, len `13`, `avgDurability`
- payload offset `1264`: id `25`, kind `4`, len `16`, `pistonDurability`
- payload offset `1308`: id `26`, kind `4`, len `13`, `rodDurability`
- payload offset `1348`: id `27`, kind `4`, len `15`, `valveDurability`
- payload offset `1392`: id `28`, kind `4`, len `20`, `headGasketDurability`
- payload offset `1444`: id `29`, kind `4`, len `21`, `engineBlockDurability`
- payload offset `1500`: id `30`, kind `4`, len `2`, `c5`
- payload offset `1516`: id `31`, kind `4`, len `2`, `hp`
- payload offset `1532`: id `32`, kind `4`, len `1`, `s`
- payload offset `1548`: id `33`, kind `4`, len `3`, `c13`
- payload offset `1568`: id `34`, kind `4`, len `4`, `carV`
- payload offset `1588`: id `35`, kind `4`, len `8`, `carAccel`
- payload offset `1616`: id `36`, kind `4`, len `7`, `speedoV`
- payload offset `1644`: id `37`, kind `4`, len `7`, `engineV`
- payload offset `1672`: id `38`, kind `4`, len `3`, `mph`
- payload offset `1692`: id `39`, kind `4`, len `12`, `engineDamage`
- payload offset `1728`: id `40`, kind `4`, len `15`, `isEngineLightOn`
- payload offset `1772`: id `41`, kind `4`, len `9`, `gearValue`
- payload offset `1804`: id `42`, kind `4`, len `2`, `gr`
- payload offset `1820`: id `43`, kind `4`, len `3`, `grs`
- payload offset `1840`: id `44`, kind `4`, len `7`, `theTime`
- payload offset `1884`: id `46`, kind `4`, len `13`, `theActualTime`
- payload offset `1924`: id `47`, kind `4`, len `17`, `timeFromLastFrame`
- payload offset `1972`: id `48`, kind `4`, len `9`, `timeGreen`
- payload offset `2004`: id `49`, kind `4`, len `13`, `timeStartLine`
- payload offset `2044`: id `50`, kind `4`, len `16`, `stagingTimeLimit`
- payload offset `2088`: id `51`, kind `4`, len `12`, `lightDelayTO`
- payload offset `2124`: id `52`, kind `4`, len `6`, `object`
- payload offset `2148`: id `53`, kind `4`, len `6`, `forget`
- payload offset `2172`: id `54`, kind `4`, len `8`, `lightTO1`
- payload offset `2200`: id `55`, kind `4`, len `8`, `lightTO2`
- payload offset `2228`: id `56`, kind `4`, len `11`, `runInterval`
- payload offset `2264`: id `57`, kind `4`, len `2`, `rt`
- payload offset `2280`: id `58`, kind `4`, len `9`, `undefined`
- payload offset `2312`: id `59`, kind `4`, len `2`, `et`
- payload offset `2328`: id `60`, kind `4`, len `2`, `ts`
- payload offset `2344`: id `61`, kind `4`, len `2`, `bt`
- payload offset `2360`: id `62`, kind `4`, len `4`, `slip`
- payload offset `2380`: id `63`, kind `4`, len `3`, `rpm`
- payload offset `2400`: id `64`, kind `4`, len `7`, `idleRPM`
- payload offset `2428`: id `65`, kind `4`, len `1`, `N`
- payload offset `2444`: id `66`, kind `4`, len `1`, `w`
- payload offset `2460`: id `67`, kind `4`, len `4`, `c0_4`
- payload offset `2480`: id `68`, kind `4`, len `9`, `getTorque`
- payload offset `2780`: id `5`, kind `4`, len `9`, `startRace`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

