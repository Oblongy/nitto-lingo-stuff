## Lscr-102 Block 14012

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `14012`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `14012`, length `17968`.
- File offset `14180`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
6c 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 8f 1e 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
35 00 00 14 07 00 0e 41 35 00 00 55 00 00 51 06 00 16 54 00 00 41 35 00 01 16 07 00 0b 41 35 00 01 55 00 00 51 41 35 00 02 41 35 00 00 16 07 00 50 41 3b 00 04 35 00 05 41 35 00 02 1c 83 41 35
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `7840`: id `0`, kind `4`, len `2`, `c0`
- payload offset `7856`: id `1`, kind `4`, len `2`, `c1`
- payload offset `7872`: id `2`, kind `4`, len `17`, `timeFromLastFrame`
- payload offset `7920`: id `3`, kind `4`, len `7`, `theTime`
- payload offset `7948`: id `4`, kind `4`, len `7`, `_system`
- payload offset `7976`: id `5`, kind `4`, len `12`, `milliseconds`
- payload offset `8012`: id `6`, kind `4`, len `5`, `c1000`
- payload offset `8036`: id `7`, kind `4`, len `13`, `theActualTime`
- payload offset `8076`: id `8`, kind `4`, len `4`, `c0_2`
- payload offset `8096`: id `9`, kind `4`, len `6`, `avgFps`
- payload offset `8120`: id `10`, kind `4`, len `8`, `fpsCount`
- payload offset `8148`: id `11`, kind `4`, len `17`, `calculateExtraHpi`
- payload offset `8196`: id `12`, kind `4`, len `4`, `carV`
- payload offset `8216`: id `13`, kind `4`, len `4`, `c0_5`
- payload offset `8236`: id `14`, kind `4`, len `8`, `carAccel`
- payload offset `8264`: id `15`, kind `4`, len `9`, `gearValue`
- payload offset `8296`: id `16`, kind `4`, len `3`, `hpi`
- payload offset `8316`: id `17`, kind `4`, len `17`, `boostCreatedPower`
- payload offset `8364`: id `18`, kind `4`, len `11`, `systemPower`
- payload offset `8400`: id `19`, kind `4`, len `7`, `ECUtune`
- payload offset `8428`: id `20`, kind `4`, len `21`, `compressionPowerDelta`
- payload offset `8484`: id `21`, kind `4`, len `12`, `engineDamage`
- payload offset `8520`: id `22`, kind `4`, len `5`, `isNos`
- payload offset `8544`: id `23`, kind `4`, len `16`, `nitrousRemaining`
- payload offset `8588`: id `24`, kind `4`, len `3`, `NOS`
- payload offset `8608`: id `25`, kind `4`, len `3`, `rpm`
- payload offset `8628`: id `26`, kind `4`, len `12`, `stockRedLine`
- payload offset `8664`: id `27`, kind `4`, len `5`, `c1_25`
- payload offset `8688`: id `28`, kind `4`, len `2`, `hp`
- payload offset `8704`: id `29`, kind `4`, len `6`, `c10000`
- payload offset `8728`: id `30`, kind `4`, len `2`, `c2`
- payload offset `8744`: id `31`, kind `4`, len `6`, `sprite`
- payload offset `8768`: id `32`, kind `4`, len `7`, `flashSP`
- payload offset `8796`: id `33`, kind `4`, len `14`, `runEngineNOSCB`
- payload offset `8836`: id `34`, kind `4`, len `15`, `nitrousTankSize`
- payload offset `8880`: id `35`, kind `4`, len `4`, `c100`
- payload offset `8900`: id `36`, kind `4`, len `10`, `revLimiter`
- payload offset `8932`: id `37`, kind `4`, len `4`, `c200`
- payload offset `8952`: id `38`, kind `4`, len `11`, `tqFlyFactor`
- payload offset `8988`: id `39`, kind `4`, len `2`, `gr`
- payload offset `9004`: id `40`, kind `4`, len `3`, `fgr`
- payload offset `9024`: id `41`, kind `4`, len `17`, `rpmGearConversion`
- payload offset `9072`: id `42`, kind `4`, len `1`, `r`
- payload offset `9088`: id `43`, kind `4`, len `5`, `negTq`
- payload offset `9112`: id `44`, kind `4`, len `2`, `c9`
- payload offset `9128`: id `45`, kind `4`, len `4`, `c299`
- payload offset `9148`: id `46`, kind `4`, len `4`, `c300`
- payload offset `9168`: id `47`, kind `4`, len `4`, `c5_5`
- payload offset `9188`: id `48`, kind `4`, len `1`, `w`
- payload offset `9204`: id `49`, kind `4`, len `1`, `g`
- payload offset `9220`: id `50`, kind `4`, len `22`, `revLimiterDeceleration`
- payload offset `9276`: id `51`, kind `4`, len `5`, `brake`
- payload offset `9300`: id `52`, kind `4`, len `16`, `brakeDecleration`
- payload offset `9344`: id `53`, kind `4`, len `7`, `speedoV`
- payload offset `9372`: id `54`, kind `4`, len `7`, `engineV`
- payload offset `9400`: id `55`, kind `4`, len `2`, `c5`
- payload offset `9416`: id `56`, kind `4`, len `10`, `gConvSlipA`
- payload offset `9448`: id `57`, kind `4`, len `3`, `c50`
- payload offset `9468`: id `58`, kind `4`, len `9`, `getTorque`
- payload offset `9500`: id `59`, kind `4`, len `3`, `mph`
- payload offset `9520`: id `60`, kind `4`, len `6`, `vToMph`
- payload offset `9544`: id `61`, kind `4`, len `4`, `slip`
- payload offset `9564`: id `62`, kind `4`, len `13`, `launchControl`
- payload offset `9604`: id `63`, kind `4`, len `5`, `posTq`
- payload offset `9628`: id `64`, kind `4`, len `7`, `raceGas`
- payload offset `9656`: id `65`, kind `4`, len `5`, `c0_02`
- payload offset `9680`: id `66`, kind `4`, len `8`, `detuneHp`
- payload offset `9708`: id `67`, kind `4`, len `2`, `c8`
- payload offset `9724`: id `68`, kind `4`, len `6`, `c0_005`
- payload offset `9748`: id `69`, kind `4`, len `6`, `c0_016`
- payload offset `9772`: id `70`, kind `4`, len `4`, `DAfp`
- payload offset `9792`: id `71`, kind `4`, len `6`, `UsInit`
- payload offset `9816`: id `72`, kind `4`, len `9`, `tireStick`
- payload offset `9848`: id `73`, kind `4`, len `5`, `c0_05`
- payload offset `9872`: id `74`, kind `4`, len `6`, `UkInit`
- payload offset `9896`: id `75`, kind `4`, len `2`, `c3`
- payload offset `9912`: id `76`, kind `4`, len `5`, `c0_09`
- payload offset `9936`: id `77`, kind `4`, len `4`, `c0_6`
- payload offset `9956`: id `78`, kind `4`, len `1`, `N`
- payload offset `9972`: id `79`, kind `4`, len `24`, `runEngineTractionLightCB`
- payload offset `10032`: id `80`, kind `4`, len `3`, `c10`
- payload offset `10052`: id `81`, kind `4`, len `9`, `tireScrub`
- payload offset `10084`: id `82`, kind `4`, len `6`, `c0_015`
- payload offset `10108`: id `83`, kind `4`, len `13`, `clutchFeather`
- payload offset `10148`: id `84`, kind `4`, len `5`, `c0_18`
- payload offset `10172`: id `85`, kind `4`, len `7`, `redLine`
- payload offset `10212`: id `87`, kind `4`, len `1`, `s`
- payload offset `10228`: id `88`, kind `4`, len `4`, `Math`
- payload offset `10248`: id `89`, kind `4`, len `5`, `floor`
- payload offset `10272`: id `90`, kind `4`, len `7`, `staging`
- payload offset `10300`: id `91`, kind `4`, len `3`, `c13`
- payload offset `10320`: id `92`, kind `4`, len `9`, `preStaged`
- payload offset `10352`: id `93`, kind `4`, len `6`, `staged`
- payload offset `10376`: id `94`, kind `4`, len `12`, `lightDelayTO`
- payload offset `10412`: id `95`, kind `4`, len `7`, `timeout`
- payload offset `10440`: id `96`, kind `4`, len `6`, `symbol`
- payload offset `10464`: id `97`, kind `4`, len `14`, `stagedAndReady`
- payload offset `10504`: id `98`, kind `4`, len `6`, `object`
- payload offset `10528`: id `99`, kind `4`, len `6`, `forget`
- payload offset `10552`: id `100`, kind `4`, len `21`, `runEngineStageLightCB`
- payload offset `10608`: id `101`, kind `4`, len `2`, `rt`
- payload offset `10624`: id `102`, kind `4`, len `9`, `undefined`
- payload offset `10656`: id `103`, kind `4`, len `12`, `lagThreshold`
- payload offset `10692`: id `104`, kind `4`, len `12`, `badCounterRT`
- payload offset `10728`: id `105`, kind `4`, len `13`, `goodCounterRT`
- payload offset `10768`: id `106`, kind `4`, len `13`, `timeStartLine`
- payload offset `10808`: id `107`, kind `4`, len `9`, `timeGreen`
- payload offset `10840`: id `108`, kind `4`, len `21`, `runEngineSetLightOnCB`
- payload offset `10896`: id `109`, kind `4`, len `1`, `p`
- payload offset `10912`: id `110`, kind `4`, len `3`, `red`
- payload offset `10932`: id `111`, kind `4`, len `8`, `raceType`
- payload offset `10960`: id `112`, kind `4`, len `4`, `KOTH`
- payload offset `10980`: id `113`, kind `4`, len `3`, `KRT`
- payload offset `11012`: id `115`, kind `4`, len `2`, `QM`
- payload offset `11028`: id `116`, kind `4`, len `3`, `RRT`
- payload offset `11048`: id `117`, kind `4`, len `5`, `RIVAL`
- payload offset `11072`: id `118`, kind `4`, len `9`, `TEAMRIVAL`
- payload offset `11104`: id `119`, kind `4`, len `5`, `RIVRT`
- payload offset `11128`: id `120`, kind `4`, len `3`, `HTQ`
- payload offset `11148`: id `121`, kind `4`, len `5`, `HTQRT`
- payload offset `11172`: id `122`, kind `4`, len `2`, `HT`
- payload offset `11188`: id `123`, kind `4`, len `4`, `HTRT`
- payload offset `11208`: id `124`, kind `4`, len `15`, `lagTimeAddition`
- payload offset `11252`: id `125`, kind `4`, len `4`, `guid`
- payload offset `11272`: id `126`, kind `4`, len `18`, `runEngineSetMyRTCB`
- payload offset `11320`: id `127`, kind `4`, len `12`, `badCounterET`
- payload offset `11356`: id `128`, kind `4`, len `13`, `goodCounterET`
- payload offset `11396`: id `129`, kind `4`, len `5`, `c1320`
- payload offset `11420`: id `130`, kind `4`, len `2`, `et`
- payload offset `11436`: id `131`, kind `4`, len `2`, `ts`
- payload offset `11452`: id `132`, kind `4`, len `12`, `pistonDamage`
- payload offset `11488`: id `133`, kind `4`, len `14`, `partBreakPoint`
- payload offset `11528`: id `134`, kind `4`, len `14`, `cylinderNumber`
- payload offset `11568`: id `135`, kind `4`, len `9`, `rodDamage`
- payload offset `11600`: id `136`, kind `4`, len `11`, `valveDamage`
- payload offset `11636`: id `137`, kind `4`, len `11`, `valveNumber`
- payload offset `11672`: id `138`, kind `4`, len `16`, `headGasketDamage`
- payload offset `11716`: id `139`, kind `4`, len `17`, `engineBlockDamage`
- payload offset `11764`: id `140`, kind `4`, len `9`, `oilDamage`
- payload offset `11796`: id `141`, kind `4`, len `15`, `oilFilterDamage`
- payload offset `11840`: id `142`, kind `4`, len `13`, `coolantDamage`
- payload offset `11880`: id `143`, kind `4`, len `3`, `INT`
- payload offset `11900`: id `144`, kind `4`, len `10`, `timeAnchor`
- payload offset `11932`: id `145`, kind `4`, len `5`, `KDONE`
- payload offset `11956`: id `146`, kind `4`, len `13`, `createMd5Hash`
- payload offset `11996`: id `147`, kind `4`, len `4`, `RINT`
- payload offset `12016`: id `148`, kind `4`, len `5`, `RDONE`
- payload offset `12040`: id `149`, kind `4`, len `18`, `beforePistonDamage`
- payload offset `12088`: id `150`, kind `4`, len `5`, `thePD`
- payload offset `12112`: id `151`, kind `4`, len `6`, `theBPD`
- payload offset `12136`: id `152`, kind `4`, len `7`, `RIVDONE`
- payload offset `12164`: id `153`, kind `4`, len `2`, `CT`
- payload offset `12180`: id `154`, kind `4`, len `10`, `ctFinishCB`
- payload offset `12212`: id `155`, kind `4`, len `11`, `executeCall`
- payload offset `12248`: id `156`, kind `4`, len `4`, `ctst`
- payload offset `12268`: id `157`, kind `4`, len `3`, `et=`
- payload offset `12288`: id `158`, kind `4`, len `4`, `&rt=`
- payload offset `12308`: id `159`, kind `4`, len `4`, `&ts=`
- payload offset `12328`: id `160`, kind `4`, len `4`, `&pd=`
- payload offset `12348`: id `161`, kind `4`, len `4`, `&vd=`
- payload offset `12368`: id `162`, kind `4`, len `4`, `&rd=`
- payload offset `12388`: id `163`, kind `4`, len `4`, `&hd=`
- payload offset `12408`: id `164`, kind `4`, len `4`, `&bd=`
- payload offset `12428`: id `165`, kind `4`, len `4`, `&od=`
- payload offset `12448`: id `166`, kind `4`, len `4`, `&fd=`
- payload offset `12468`: id `167`, kind `4`, len `4`, `&cd=`
- payload offset `12488`: id `168`, kind `4`, len `4`, `&nr=`
- payload offset `12508`: id `169`, kind `4`, len `4`, `&rg=`
- payload offset `12528`: id `170`, kind `4`, len `3`, `&m=`
- payload offset `12548`: id `171`, kind `4`, len `4`, `&gr=`
- payload offset `12568`: id `172`, kind `4`, len `4`, `&br=`
- payload offset `12588`: id `173`, kind `4`, len `4`, `&ge=`
- payload offset `12608`: id `174`, kind `4`, len `4`, `&be=`
- payload offset `12628`: id `175`, kind `4`, len `4`, `&ce=`
- payload offset `12648`: id `176`, kind `4`, len `20`, `isCheatEngineRunning`
- payload offset `12700`: id `177`, kind `4`, len `3`, `&f=`
- payload offset `12720`: id `178`, kind `4`, len `4`, `&cp=`
- payload offset `12740`: id `179`, kind `4`, len `14`, `CheckProcesses`
- payload offset `12780`: id `180`, kind `4`, len `7`, `decrypt`
- payload offset `12808`: id `181`, kind `4`, len `7`, `_global`
- payload offset `12836`: id `182`, kind `4`, len `2`, `cp`
- payload offset `12852`: id `183`, kind `4`, len `4`, `&cw=`
- payload offset `12872`: id `184`, kind `4`, len `12`, `CheckWindows`
- payload offset `12908`: id `185`, kind `4`, len `2`, `cw`
- payload offset `12924`: id `186`, kind `4`, len `5`, `&cwc=`
- payload offset `12948`: id `187`, kind `4`, len `17`, `CheckWindowsClass`
- payload offset `12996`: id `188`, kind `4`, len `3`, `cwc`
- payload offset `13016`: id `189`, kind `4`, len `3`, `CTQ`
- payload offset `13036`: id `190`, kind `4`, len `1`, `P`
- payload offset `13052`: id `191`, kind `4`, len `16`, `practiceFinishCB`
- payload offset `13096`: id `192`, kind `4`, len `4`, `HTQD`
- payload offset `13116`: id `193`, kind `4`, len `3`, `HTD`
- payload offset `13136`: id `194`, kind `4`, len `4`, `c760`
- payload offset `13156`: id `195`, kind `4`, len `12`, `isMidMd5sent`
- payload offset `13192`: id `196`, kind `4`, len `1`, `M`
- payload offset `13208`: id `197`, kind `4`, len `8`, `boostPsi`
- payload offset `13236`: id `198`, kind `4`, len `10`, `stockBoost`
- payload offset `13268`: id `199`, kind `4`, len `11`, `dangerLevel`
- payload offset `13304`: id `200`, kind `4`, len `22`, `pistonCompressionLevel`
- payload offset `13360`: id `201`, kind `4`, len `2`, `c7`
- payload offset `13376`: id `202`, kind `4`, len `16`, `engineDamageRisk`
- payload offset `13420`: id `203`, kind `4`, len `4`, `c1_8`
- payload offset `13440`: id `204`, kind `4`, len `5`, `c1_15`
- payload offset `13464`: id `205`, kind `4`, len `3`, `c80`
- payload offset `13484`: id `206`, kind `4`, len `13`, `avgDurability`
- payload offset `13524`: id `207`, kind `4`, len `13`, `oilDurability`
- payload offset `13564`: id `208`, kind `4`, len `17`, `beforeDangerLevel`
- payload offset `13612`: id `209`, kind `4`, len `18`, `radiatorDurability`
- payload offset `13660`: id `210`, kind `4`, len `19`, `oilFilterDurability`
- payload offset `13712`: id `211`, kind `4`, len `17`, `coolantDurability`
- payload offset `13760`: id `212`, kind `4`, len `16`, `pistonDurability`
- payload offset `13804`: id `213`, kind `4`, len `5`, `c0_95`
- payload offset `13828`: id `214`, kind `4`, len `12`, `pistonBroken`
- payload offset `13864`: id `215`, kind `4`, len `13`, `rodDurability`
- payload offset `13904`: id `216`, kind `4`, len `9`, `rodBroken`
- payload offset `13936`: id `217`, kind `4`, len `15`, `valveDurability`
- payload offset `13980`: id `218`, kind `4`, len `11`, `valveBroken`
- payload offset `14016`: id `219`, kind `4`, len `21`, `engineBlockDurability`
- payload offset `14072`: id `220`, kind `4`, len `17`, `engineBlockBroken`
- payload offset `14120`: id `221`, kind `4`, len `20`, `headGasketDurability`
- payload offset `14172`: id `222`, kind `4`, len `16`, `headGasketBroken`
- payload offset `14216`: id `223`, kind `4`, len `4`, `c0_4`
- payload offset `14236`: id `224`, kind `4`, len `4`, `c0_1`
- payload offset `14256`: id `225`, kind `4`, len `5`, `c0_65`
- payload offset `14280`: id `226`, kind `4`, len `15`, `isEngineLightOn`
- payload offset `14324`: id `227`, kind `4`, len `22`, `runEngineDamageLightCB`
- payload offset `14380`: id `228`, kind `4`, len `11`, `runEngineCB`
- payload offset `17676`: id `17`, kind `4`, len `17`, `calculateExtraHpi`

Recovered loose UTF-16LE message fragments:
- `runEngineTractionLightCBP`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

