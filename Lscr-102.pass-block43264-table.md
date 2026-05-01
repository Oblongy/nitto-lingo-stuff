## Lscr-102 Block 43264

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `43264`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `43264`, length `4968`.
- File offset `43432`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
5f 6d 64 35
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 50 06 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 00 51 56 00 00 41 35 00 01 3d 00 02 1b 1b 57 00 00 51 56 00 00 41 35 00 03 3d 00 02 1b 1b 57 00 00 51 56 00 00 41 35 00 04 3d 00 02 1b 1b 57 00 00 51 56 00 00 41 35 00 05 3d 00 02 1b 1b 57
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `1644`: id `1`, kind `4`, len `12`, `stockRedLine`
- payload offset `1680`: id `2`, kind `4`, len `1`, `,`
- payload offset `1696`: id `3`, kind `4`, len `8`, `detuneHp`
- payload offset `1724`: id `4`, kind `4`, len `10`, `stockBoost`
- payload offset `1756`: id `5`, kind `4`, len `9`, `boostType`
- payload offset `1788`: id `6`, kind `4`, len `12`, `boostSetting`
- payload offset `1824`: id `7`, kind `4`, len `3`, `grs`
- payload offset `1844`: id `8`, kind `4`, len `3`, `fgr`
- payload offset `1864`: id `9`, kind `4`, len `7`, `redLine`
- payload offset `1892`: id `10`, kind `4`, len `10`, `revLimiter`
- payload offset `1924`: id `11`, kind `4`, len `6`, `UsInit`
- payload offset `1948`: id `12`, kind `4`, len `3`, `NOS`
- payload offset `1968`: id `13`, kind `4`, len `1`, `w`
- payload offset `1984`: id `14`, kind `4`, len `1`, `r`
- payload offset `2000`: id `15`, kind `4`, len `15`, `nitrousTankSize`
- payload offset `2044`: id `16`, kind `4`, len `6`, `maxPsi`
- payload offset `2068`: id `17`, kind `4`, len `3`, `hpi`
- payload offset `2088`: id `18`, kind `4`, len `6`, `airhpi`
- payload offset `2112`: id `19`, kind `4`, len `9`, `turboFlow`
- payload offset `2144`: id `20`, kind `4`, len `13`, `fuelFlowLimit`
- payload offset `2184`: id `21`, kind `4`, len `19`, `overallAirFlowLimit`
- payload offset `2236`: id `22`, kind `4`, len `14`, `cylinderNumber`
- payload offset `2276`: id `23`, kind `4`, len `11`, `valveNumber`
- payload offset `2312`: id `24`, kind `4`, len `22`, `pistonCompressionLevel`
- payload offset `2368`: id `25`, kind `4`, len `11`, `chipSetting`
- payload offset `2404`: id `26`, kind `4`, len `16`, `pistonDurability`
- payload offset `2448`: id `27`, kind `4`, len `13`, `rodDurability`
- payload offset `2488`: id `28`, kind `4`, len `15`, `valveDurability`
- payload offset `2532`: id `29`, kind `4`, len `20`, `headGasketDurability`
- payload offset `2584`: id `30`, kind `4`, len `21`, `engineBlockDurability`
- payload offset `2640`: id `31`, kind `4`, len `13`, `oilDurability`
- payload offset `2680`: id `32`, kind `4`, len `7`, `tqArray`
- payload offset `2708`: id `33`, kind `4`, len `4`, `join`
- payload offset `2728`: id `34`, kind `4`, len `4`, `DAfp`
- payload offset `2748`: id `35`, kind `4`, len `1`, `g`
- payload offset `2764`: id `36`, kind `4`, len `17`, `rpmGearConversion`
- payload offset `2812`: id `37`, kind `4`, len `10`, `gConvSlipA`
- payload offset `2844`: id `38`, kind `4`, len `10`, `gConvSlipB`
- payload offset `2876`: id `39`, kind `4`, len `16`, `brakeDecleration`
- payload offset `2920`: id `40`, kind `4`, len `22`, `revLimiterDeceleration`
- payload offset `2976`: id `41`, kind `4`, len `7`, `idleRPM`
- payload offset `3004`: id `42`, kind `4`, len `11`, `tqFlyFactor`
- payload offset `3040`: id `43`, kind `4`, len `14`, `partBreakPoint`
- payload offset `3080`: id `44`, kind `4`, len `6`, `vToMph`
- payload offset `3104`: id `45`, kind `4`, len `4`, `c0_5`
- payload offset `3124`: id `46`, kind `4`, len `2`, `c0`
- payload offset `3140`: id `47`, kind `4`, len `4`, `c100`
- payload offset `3160`: id `48`, kind `4`, len `5`, `c1000`
- payload offset `3184`: id `49`, kind `4`, len `6`, `c10000`
- payload offset `3208`: id `50`, kind `4`, len `7`, `c0_0075`
- payload offset `3236`: id `51`, kind `4`, len `3`, `c13`
- payload offset `3256`: id `52`, kind `4`, len `4`, `c0_4`
- payload offset `3276`: id `53`, kind `4`, len `4`, `c0_7`
- payload offset `3296`: id `54`, kind `4`, len `4`, `c1_7`
- payload offset `3316`: id `55`, kind `4`, len `5`, `c1_25`
- payload offset `3340`: id `56`, kind `4`, len `2`, `c9`
- payload offset `3356`: id `57`, kind `4`, len `4`, `c299`
- payload offset `3376`: id `58`, kind `4`, len `4`, `c300`
- payload offset `3396`: id `59`, kind `4`, len `4`, `c5_5`
- payload offset `3416`: id `60`, kind `4`, len `2`, `c2`
- payload offset `3432`: id `61`, kind `4`, len `2`, `c5`
- payload offset `3448`: id `62`, kind `4`, len `3`, `c50`
- payload offset `3468`: id `63`, kind `4`, len `2`, `c8`
- payload offset `3484`: id `64`, kind `4`, len `6`, `c0_005`
- payload offset `3508`: id `65`, kind `4`, len `6`, `c0_016`
- payload offset `3532`: id `66`, kind `4`, len `2`, `c3`
- payload offset `3548`: id `67`, kind `4`, len `5`, `c0_09`
- payload offset `3572`: id `68`, kind `4`, len `4`, `c0_6`
- payload offset `3592`: id `69`, kind `4`, len `3`, `c10`
- payload offset `3612`: id `70`, kind `4`, len `6`, `c0_015`
- payload offset `3636`: id `71`, kind `4`, len `5`, `c0_02`
- payload offset `3660`: id `72`, kind `4`, len `4`, `c200`
- payload offset `3680`: id `73`, kind `4`, len `5`, `c0_18`
- payload offset `3704`: id `74`, kind `4`, len `5`, `c1320`
- payload offset `3728`: id `75`, kind `4`, len `4`, `c760`
- payload offset `3748`: id `76`, kind `4`, len `2`, `c7`
- payload offset `3764`: id `77`, kind `4`, len `4`, `c7_5`
- payload offset `3784`: id `78`, kind `4`, len `4`, `c1_8`
- payload offset `3804`: id `79`, kind `4`, len `5`, `c1_15`
- payload offset `3828`: id `80`, kind `4`, len `3`, `c80`
- payload offset `3848`: id `81`, kind `4`, len `5`, `c0_95`
- payload offset `3872`: id `82`, kind `4`, len `5`, `c0_05`
- payload offset `3896`: id `83`, kind `4`, len `4`, `c0_2`
- payload offset `3916`: id `84`, kind `4`, len `4`, `c0_1`
- payload offset `3936`: id `85`, kind `4`, len `5`, `c0_65`
- payload offset `3960`: id `86`, kind `4`, len `2`, `c4`
- payload offset `3976`: id `87`, kind `4`, len `5`, `c0_07`
- payload offset `4000`: id `88`, kind `4`, len `4`, `c2_5`
- payload offset `4020`: id `89`, kind `4`, len `2`, `c1`
- payload offset `4036`: id `90`, kind `4`, len `4`, `guid`
- payload offset `4056`: id `91`, kind `4`, len `12`, `engineDamage`
- payload offset `4092`: id `92`, kind `4`, len `6`, `nogood`
- payload offset `4116`: id `93`, kind `4`, len `13`, `goodCounterRT`
- payload offset `4156`: id `94`, kind `4`, len `13`, `goodCounterET`
- payload offset `4196`: id `95`, kind `4`, len `12`, `badCounterRT`
- payload offset `4232`: id `96`, kind `4`, len `10`, `lagPercent`
- payload offset `4264`: id `97`, kind `4`, len `12`, `badCounterET`
- payload offset `4300`: id `98`, kind `4`, len `4`, `xtra`
- payload offset `4320`: id `99`, kind `4`, len `7`, `caluMD5`
- payload offset `4348`: id `100`, kind `4`, len `12`, `getStringMD5`
- payload offset `4852`: id `39`, kind `4`, len `15`, `lagTimeAddition`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

