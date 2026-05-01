# Lscr-102 Bin-Only Pass 3: Symbol Clusters

Source bin used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

This pass stays bin-only. It does not infer opcode semantics. It only groups exact clean UTF-16LE symbol hits by raw offset proximity.

## Proven clustering rule

The symbol clusters below were built from exact clean UTF-16LE strings found in the raw bin, grouped when adjacent hits are no more than `0x80` bytes apart.

This is only a structural grouping rule. It does not claim function boundaries.

## Cluster summary

| cluster | start | end | count | high-signal names |
| --- | --- | --- | --- | --- |
| `0` | `0x01E0` | `0x01E0` | `1` | `RaceEngine` |
| `1` | `0x03EC` | `0x0410` | `2` | `sendInterval`, `secondBuffer` |
| `2` | `0x0584` | `0x05A0` | `2` | `idleRPM`, `tqFlyFactor` |
| `3` | `0x0C04` | `0x0C44` | `3` | `RaceEngine`, `prototype`, `init` |
| `4` | `0x0E94` | `0x1238` | `26` | `goodCounterRT`, `badCounterRT`, `goodCounterET`, `badCounterET`, `raceType`, `staging`, `greenDelay`, `engineBlockDurability` |
| `5` | `0x12E4` | `0x1490` | `10` | `speedoV`, `engineV`, `gearValue`, `theTime`, `theActualTime`, `timeFromLastFrame`, `timeGreen`, `timeStartLine` |
| `6` | `0x1548` | `0x1548` | `1` | `runInterval` |
| `7` | `0x15F4` | `0x1644` | `2` | `idleRPM`, `getTorque` |
| `8` | `0x1770` | `0x1770` | `1` | `startRace` |
| `9` | `0x1D14` | `0x2024` | `15` | `xtra`, `xmlparser`, `parseString`, `makeList`, `parseInt`, `parseFloat`, `stockBoost`, `boostSetting`, `boostType`, `initBoost` |
| `10` | `0x2120` | `0x2530` | `13` | `nitrousTankSize`, `setClutch`, `tqArray`, `fuelFlowLimit`, `overallAirFlowLimit`, `valveNumber`, `chipSetting`, `oilFilterDurability` |
| `14` | `0x2D70` | `0x2F50` | `8` | `runInterval`, `timeout`, `sendInterval`, `symbol`, `sendPos`, `endRace` |
| `15` | `0x30D4` | `0x3224` | `6` | `staging`, `raceType`, `gearValue`, `carV`, `carAccel`, `timeAnchor` |
| `16` | `0x5638` | `0x57C0` | `8` | `timeFromLastFrame`, `theTime`, `theActualTime`, `avgFps`, `fpsCount`, `carV`, `carAccel`, `gearValue` |
| `19` | `0x5BB4` | `0x5C74` | `4` | `brake`, `speedoV`, `engineV`, `getTorque` |
| `21` | `0x60B0` | `0x60B0` | `1` | `runEngineStageLightCB` |
| `22` | `0x6160` | `0x61D0` | `4` | `goodCounterRT`, `timeStartLine`, `timeGreen`, `runEngineSetLightOnCB` |
| `23` | `0x62D8` | `0x63D4` | `5` | `RIVRT`, `HTQRT`, `runEngineSetMyRTCB`, `badCounterET`, `goodCounterET` |
| `25` | `0x65F4` | `0x6614` | `2` | `timeAnchor`, `KDONE` |
| `26` | `0x66E0` | `0x672C` | `2` | `RIVDONE`, `executeCall` |
| `28` | `0x6C24` | `0x6EA0` | `9` | `avgDurability`, `oilDurability`, `radiatorDurability`, `oilFilterDurability`, `pistonDurability`, `rodDurability`, `valveDurability`, `headGasketDurability`, `engineBlockDurability` |
| `29` | `0x6F40` | `0x6FA4` | `3` | `isEngineLightOn`, `runEngineDamageLightCB`, `runEngineCB` |
| `31` | `0x8268` | `0x8304` | `4` | `turboFlow`, `overallAirFlowLimit`, `chipSetting`, `fuelFlowLimit` |
| `35` | `0x8A64` | `0x8BC8` | `8` | `gearValue`, `carAccel`, `carV`, `sprite`, `runEngineTractionLightCB`, `engineV`, `speedoV`, `runEngineGearUpdateCB` |
| `36` | `0x8DB0` | `0x8F3C` | `9` | `gearValue`, `staging`, `carAccel`, `carV`, `speedoV`, `engineV`, `sprite`, `runEngineTractionLightCB`, `runEngineGearUpdateCB` |
| `37` | `0x9080` | `0x90BC` | `2` | `brake`, `setClutch` |
| `38` | `0x946C` | `0x9618` | `9` | `timeAnchor`, `goodCounterRT`, `badCounterRT`, `goodCounterET`, `badCounterET`, `staging`, `gearValue`, `raceType`, `KREADY` |
| `39` | `0x96B8` | `0x96B8` | `1` | `RIVREADY` |
| `41` | `0x98C0` | `0x98C0` | `1` | `HTREADY` |
| `43` | `0x9E6C` | `0x9F28` | `5` | `stagingLightPos1`, `timeout`, `symbol`, `secondBuffer`, `stagingLightPos2` |
| `44` | `0xA458` | `0xA618` | `7` | `stagingLightPos1`, `sprite`, `runEngineSetLightOnCB`, `greenDelay`, `timeGreen`, `timeout`, `symbol` |
| `45` | `0xA6A4` | `0xA730` | `3` | `raceStartTimeCB`, `stagingLightPos2`, `raceType` |
| `46` | `0xB028` | `0xB434` | `20` | `stockRedLine`, `detuneHp`, `stockBoost`, `boostType`, `boostSetting`, `redLine`, `revLimiter`, `nitrousTankSize`, `turboFlow`, `fuelFlowLimit`, `overallAirFlowLimit`, `valveNumber`, `chipSetting`, `pistonDurability`, `rodDurability`, `valveDurability`, `headGasketDurability`, `engineBlockDurability`, `oilDurability`, `tqArray` |

## High-signal structural result

The chunk is not just “one constant table plus one bytecode block.” It also contains repeated symbol neighborhoods that stay internally coherent:

- state/counters cluster near `0x0E94`
- timing/runtime cluster near `0x12E4`
- parser/setup cluster near `0x1D14`
- send/timeout/end cluster near `0x2D70`
- stage-light / RT / done / callback neighborhoods around `0x60B0..0x672C`
- traction/gear update callback neighborhoods around `0x8A64..0x8F3C`
- ready-message neighborhoods around `0x946C..0x98C0`
- late tuning/durability cluster near `0xB028`

That is a stronger reconstruction boundary for future passes, but it is still a structural observation, not a semantic decompile.
