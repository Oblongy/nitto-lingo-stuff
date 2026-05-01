# Lscr-102 Bin-Only Pass 1

Source bins used:
- `C:\Users\Dilldo\AppData\Local\Temp\Rar$DRa27464.43192.rartemp\Lnam-100.bin`
- `C:\Users\Dilldo\AppData\Local\Temp\Rar$DRa27464.43192.rartemp\Lscr-102.bin`

Files intentionally not used for this pass:
- `Lscr-102.json`
- `Lscr-102.*.md`
- `Lscr-102.*.lingo`
- `Lscr-102.*.js`

## Proven raw structure

`Lnam-100.bin`
- `0x10`: `namesOffset = 0x0014`
- `0x12`: `namesCount = 0x0199` (`409`)
- names decode cleanly as 1-byte-length-prefixed ASCII strings

`Lscr-102.bin`
- `0x01CC`: ASCII `Function`
- `0x01E0`: UTF-16LE `RaceEngine`
- `0x0C00`: UTF-16LE `RaceEngine`
- `0x0C20`: UTF-16LE `prototype`
- `0x0C40`: UTF-16LE `init`

## Typed table at `0x03E0`

Observed record shape:
- `u32 id`
- `u32 type`
- payload

Observed payload kinds:
- `type = 4`: UTF-16LE string, prefixed by `u32 charLen`
- `type = 2`: little-endian IEEE754 `double`
- `type = 1` or `5`: little-endian signed `int32`

This table yielded these exact scalar pairs:

| name | type | value |
| --- | --- | --- |
| `DAfp` | `double` | `0.009235545` |
| `g` | `double` | `32.1768` |
| `rpmGearConversion` | `double` | `0.85` |
| `gConvSlipA` | `double` | `6.28` |
| `brakeDecleration` | `int32` | `-40` |
| `revLimiterDeceleration` | `int32` | `-30` |
| `partBreakPoint` | `double` | `0.2` |
| `vToMph` | `double` | `0.68181818` |
| `c0_5` | `double` | `0.5` |
| `c0_0075` | `double` | `0.0075` |
| `c0_4` | `double` | `0.4` |
| `c0_7` | `double` | `0.7` |
| `c1_7` | `double` | `1.7` |
| `c1_25` | `double` | `1.25` |
| `c5_5` | `double` | `5.5` |
| `c0_005` | `double` | `0.005` |
| `c0_016` | `double` | `0.016` |
| `c0_09` | `double` | `0.09` |
| `c0_6` | `double` | `0.6` |
| `c0_015` | `double` | `0.015` |
| `c0_02` | `double` | `0.02` |
| `c0_18` | `double` | `0.18` |
| `c7_5` | `double` | `7.5` |
| `c1_8` | `double` | `1.8` |
| `c1_15` | `double` | `1.15` |
| `c0_95` | `double` | `0.95` |
| `c0_05` | `double` | `0.05` |
| `c0_1` | `double` | `0.1` |
| `c0_65` | `double` | `0.65` |
| `c0_07` | `double` | `0.07` |
| `c2_5` | `double` | `2.5` |

## Clean symbol recovery

Exact clean symbols surfaced directly from the raw UTF-16LE runs include:

- `RaceEngine`
- `sendInterval`
- `secondBuffer`
- `idleRPM`
- `tqFlyFactor`
- `goodCounterRT`
- `badCounterRT`
- `goodCounterET`
- `badCounterET`
- `avgFps`
- `fpsCount`
- `guid`
- `raceType`
- `timeAnchor`
- `staging`
- `stagingLightPos1`
- `stagingLightPos2`
- `greenDelay`
- `preStaged`
- `staged`
- `brake`
- `isMidMd5sent`
- `isNos`
- `turboFlow`
- `stockRedLine`
- `avgDurability`
- `pistonDurability`
- `rodDurability`
- `valveDurability`
- `headGasketDurability`
- `engineBlockDurability`
- `carV`
- `carAccel`
- `speedoV`
- `engineV`
- `mph`
- `engineDamage`
- `isEngineLightOn`
- `gearValue`
- `theTime`
- `theActualTime`
- `timeFromLastFrame`
- `timeGreen`
- `timeStartLine`
- `stagingTimeLimit3`
- `runInterval`
- `getTorque`
- `startRace`
- `xtra`
- `xmlparser`
- `parseString`
- `makeList`
- `parseInt`
- `parseFloat`
- `redLine`
- `revLimiter`
- `detuneHp`
- `stockBoost`
- `boostSetting`
- `boostType`
- `initBoost`
- `Array`
- `nitrousTankSize`
- `setClutch`
- `tqArray`
- `fuelFlowLimit`
- `overallAirFlowLimit`
- `valveNumber`
- `chipSetting`
- `oilDurability`
- `radiatorDurability`
- `oilFilterDurability`
- `timeout`
- `symbol`
- `sendPos`
- `endRace`
- `sprite`
- `runEngineStageLightCB`
- `runEngineSetLightOnCB`
- `runEngineSetMyRTCB`
- `runEngineCB`
- `runEngineGearUpdateCB`
- `runEngineDamageLightCB`
- `runEngineTractionLightCB`
- `raceStartTimeCB`
- `KREADY`
- `RIVREADY`
- `HTREADY`
- `RIVRT`
- `HTQRT`
- `KDONE`
- `RIVDONE`
- `executeCall`

## Limits of this pass

- This pass does **not** claim a byte-perfect opcode lift.
- This pass does **not** claim original handler ordering beyond the proven `RaceEngine / prototype / init` marker.
- Ambiguous UTF-16 runs with punctuation or suffix bleed were excluded from the scaffold files unless the clean core symbol was also present elsewhere.
- The Lingo and JS files produced from this report are conservative scaffolds, not recompilable originals.
