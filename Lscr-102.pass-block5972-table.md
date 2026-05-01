## Lscr-102 Block 5972

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `5972`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `5972`, length `4992`.
- File offset `6140`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
63 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de f4 04 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 23 00 01 57 00 00 51 56 00 00 35 00 02 39 54 00 00 3a 00 01 51 56 00 00 35 00 03 39 3a 00 00 3f 37 35 00 04 57 00 01 51 3e 57 00 00 51 41 3b 00 06 39 56 00 01 35 00 07 35 00 08 3a 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `1284`: id `0`, kind `4`, len `4`, `xtra`
- payload offset `1304`: id `1`, kind `4`, len `9`, `xmlparser`
- payload offset `1336`: id `2`, kind `4`, len `11`, `parseString`
- payload offset `1372`: id `3`, kind `4`, len `8`, `makeList`
- payload offset `1400`: id `4`, kind `4`, len `2`, `n2`
- payload offset `1416`: id `5`, kind `4`, len `1`, `w`
- payload offset `1432`: id `6`, kind `4`, len `8`, `parseInt`
- payload offset `1460`: id `7`, kind `4`, len `11`, `!ATTRIBUTES`
- payload offset `1496`: id `8`, kind `4`, len `1`, `r`
- payload offset `1512`: id `9`, kind `4`, len `3`, `hpi`
- payload offset `1532`: id `10`, kind `4`, len `10`, `parseFloat`
- payload offset `1564`: id `11`, kind `4`, len `1`, `v`
- payload offset `1580`: id `12`, kind `4`, len `12`, `stockRedLine`
- payload offset `1616`: id `13`, kind `4`, len `1`, `a`
- payload offset `1632`: id `14`, kind `4`, len `7`, `redLine`
- payload offset `1660`: id `15`, kind `4`, len `1`, `n`
- payload offset `1676`: id `16`, kind `4`, len `10`, `revLimiter`
- payload offset `1708`: id `17`, kind `4`, len `1`, `o`
- payload offset `1724`: id `18`, kind `4`, len `1`, `s`
- payload offset `1740`: id `19`, kind `4`, len `8`, `detuneHp`
- payload offset `1768`: id `20`, kind `4`, len `1`, `b`
- payload offset `1784`: id `21`, kind `4`, len `6`, `UsInit`
- payload offset `1808`: id `22`, kind `4`, len `1`, `p`
- payload offset `1824`: id `23`, kind `4`, len `6`, `UkInit`
- payload offset `1848`: id `24`, kind `4`, len `4`, `c0_7`
- payload offset `1868`: id `25`, kind `4`, len `10`, `stockBoost`
- payload offset `1900`: id `26`, kind `4`, len `1`, `c`
- payload offset `1916`: id `27`, kind `4`, len `12`, `boostSetting`
- payload offset `1952`: id `28`, kind `4`, len `1`, `e`
- payload offset `1968`: id `29`, kind `4`, len `9`, `boostType`
- payload offset `2000`: id `30`, kind `4`, len `1`, `d`
- payload offset `2016`: id `31`, kind `4`, len `9`, `initBoost`
- payload offset `2048`: id `32`, kind `4`, len `3`, `grs`
- payload offset `2068`: id `33`, kind `4`, len `5`, `Array`
- payload offset `2092`: id `34`, kind `4`, len `1`, `f`
- payload offset `2108`: id `35`, kind `4`, len `1`, `g`
- payload offset `2124`: id `36`, kind `4`, len `1`, `h`
- payload offset `2140`: id `37`, kind `4`, len `1`, `i`
- payload offset `2156`: id `38`, kind `4`, len `1`, `j`
- payload offset `2172`: id `39`, kind `4`, len `1`, `k`
- payload offset `2188`: id `40`, kind `4`, len `3`, `fgr`
- payload offset `2208`: id `41`, kind `4`, len `1`, `l`
- payload offset `2224`: id `42`, kind `4`, len `3`, `NOS`
- payload offset `2244`: id `43`, kind `4`, len `1`, `q`
- payload offset `2260`: id `44`, kind `4`, len `16`, `nitrousRemaining`
- payload offset `2304`: id `45`, kind `4`, len `1`, `m`
- payload offset `2320`: id `46`, kind `4`, len `15`, `nitrousTankSize`
- payload offset `2364`: id `47`, kind `4`, len `1`, `t`
- payload offset `2380`: id `48`, kind `4`, len `9`, `setClutch`
- payload offset `2428`: id `50`, kind `4`, len `7`, `tqArray`
- payload offset `2456`: id `51`, kind `4`, len `6`, `maxPsi`
- payload offset `2480`: id `52`, kind `4`, len `1`, `u`
- payload offset `2496`: id `53`, kind `4`, len `6`, `airhpi`
- payload offset `2520`: id `54`, kind `4`, len `9`, `turboFlow`
- payload offset `2552`: id `55`, kind `4`, len `1`, `x`
- payload offset `2568`: id `56`, kind `4`, len `13`, `fuelFlowLimit`
- payload offset `2608`: id `57`, kind `4`, len `1`, `y`
- payload offset `2624`: id `58`, kind `4`, len `19`, `overallAirFlowLimit`
- payload offset `2676`: id `59`, kind `4`, len `1`, `z`
- payload offset `2692`: id `60`, kind `4`, len `14`, `cylinderNumber`
- payload offset `2732`: id `61`, kind `4`, len `2`, `aa`
- payload offset `2748`: id `62`, kind `4`, len `11`, `valveNumber`
- payload offset `2784`: id `63`, kind `4`, len `2`, `ab`
- payload offset `2800`: id `64`, kind `4`, len `22`, `pistonCompressionLevel`
- payload offset `2856`: id `65`, kind `4`, len `2`, `ac`
- payload offset `2872`: id `66`, kind `4`, len `11`, `chipSetting`
- payload offset `2908`: id `67`, kind `4`, len `2`, `ad`
- payload offset `2924`: id `68`, kind `4`, len `16`, `pistonDurability`
- payload offset `2968`: id `69`, kind `4`, len `2`, `ae`
- payload offset `2984`: id `70`, kind `4`, len `13`, `rodDurability`
- payload offset `3024`: id `71`, kind `4`, len `2`, `af`
- payload offset `3040`: id `72`, kind `4`, len `15`, `valveDurability`
- payload offset `3084`: id `73`, kind `4`, len `2`, `ag`
- payload offset `3100`: id `74`, kind `4`, len `20`, `headGasketDurability`
- payload offset `3152`: id `75`, kind `4`, len `2`, `ah`
- payload offset `3168`: id `76`, kind `4`, len `21`, `engineBlockDurability`
- payload offset `3224`: id `77`, kind `4`, len `2`, `ai`
- payload offset `3240`: id `78`, kind `4`, len `13`, `oilDurability`
- payload offset `3280`: id `79`, kind `4`, len `2`, `ao`
- payload offset `3296`: id `80`, kind `4`, len `18`, `radiatorDurability`
- payload offset `3344`: id `81`, kind `4`, len `2`, `at`
- payload offset `3360`: id `82`, kind `4`, len `19`, `oilFilterDurability`
- payload offset `3412`: id `83`, kind `4`, len `2`, `au`
- payload offset `3428`: id `84`, kind `4`, len `17`, `coolantDurability`
- payload offset `3476`: id `85`, kind `4`, len `2`, `aw`
- payload offset `3492`: id `86`, kind `4`, len `12`, `pistonDamage`
- payload offset `3528`: id `87`, kind `4`, len `2`, `aj`
- payload offset `3544`: id `88`, kind `4`, len `4`, `c100`
- payload offset `3564`: id `89`, kind `4`, len `14`, `partBreakPoint`
- payload offset `3604`: id `90`, kind `4`, len `9`, `rodDamage`
- payload offset `3636`: id `91`, kind `4`, len `2`, `ak`
- payload offset `3652`: id `92`, kind `4`, len `11`, `valveDamage`
- payload offset `3688`: id `93`, kind `4`, len `2`, `al`
- payload offset `3704`: id `94`, kind `4`, len `16`, `headGasketDamage`
- payload offset `3748`: id `95`, kind `4`, len `2`, `am`
- payload offset `3764`: id `96`, kind `4`, len `17`, `engineBlockDamage`
- payload offset `3812`: id `97`, kind `4`, len `2`, `an`
- payload offset `3828`: id `98`, kind `4`, len `9`, `oilDamage`
- payload offset `3860`: id `99`, kind `4`, len `2`, `ap`
- payload offset `3876`: id `100`, kind `4`, len `15`, `oilFilterDamage`
- payload offset `3920`: id `101`, kind `4`, len `2`, `av`
- payload offset `3936`: id `102`, kind `4`, len `13`, `coolantDamage`
- payload offset `3976`: id `103`, kind `4`, len `2`, `ax`
- payload offset `3992`: id `104`, kind `4`, len `7`, `raceGas`
- payload offset `4020`: id `105`, kind `4`, len `2`, `aq`
- payload offset `4036`: id `106`, kind `4`, len `9`, `tireStick`
- payload offset `4068`: id `107`, kind `4`, len `2`, `ar`
- payload offset `4084`: id `108`, kind `4`, len `13`, `launchControl`
- payload offset `4124`: id `109`, kind `4`, len `2`, `as`
- payload offset `4140`: id `110`, kind `4`, len `18`, `beforePistonDamage`
- payload offset `4188`: id `111`, kind `4`, len `5`, `thePD`
- payload offset `4212`: id `112`, kind `4`, len `6`, `theBPD`
- payload offset `4236`: id `113`, kind `4`, len `4`, `init`
- payload offset `4256`: id `114`, kind `4`, len `8`, `raceType`
- payload offset `4920`: id `7`, kind `4`, len `9`, `initBoost`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

