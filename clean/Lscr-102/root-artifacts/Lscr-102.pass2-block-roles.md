# Lscr-102 Pass 2 Block Roles

`Lscr-102` is MovieScript 2, visible as:

```lingo
on RaceEngine
  -- unk26
end
```

The visible handler dispatches embedded block `0`. That block appears to build
or register a large race-engine object/function table. The remaining embedded
blocks are the implementation bodies.

## Embedded Block Map

| Block | Offset | Length | Role / working name | Evidence |
|---:|---:|---:|---|---|
| 0 | 0 | 344 | `RaceEngine` constructor/dispatcher table | repeated registration pattern; visible handler dispatch target |
| 1 | 344 | 2688 | constants / lookup-array initialization | `sendInterval`, `secondBuffer`, `DAfp`; long encoded numeric/string table |
| 2 | 3032 | 2940 | `initRaceState` / main state initialization | counters, staging flags, damage, vehicle state, gear/speed variables |
| 3 | 5972 | 4992 | `loadCarXML` / parse setup values | `xtra("xmlparser")`, `parseString`, `parseInt`, `parseFloat`, `stockRedLine`, `boostSetting`, `nitrousTankSize` |
| 4 | 10964 | 404 | `calculateBoostLagOrRange` | `boostType`, `boostLag`, `boostSetting`, `boostRange` |
| 5 | 11368 | 392 | timer cleanup / stop interval | `runInterval`, `object`, `forget`, `timeout`, `sendInterval`, `sendPos` |
| 6 | 11760 | 232 | stop/forget run interval | `runInterval`, `object`, `forget` |
| 7 | 11992 | 2020 | staging / race start branch | `staging`, `rt`, `raceType`, `KOTH`, `RIVAL`, `TEAMRIVAL`, `HT`, `_system.milliseconds` |
| 8 | 14012 | 17968 | main per-frame engine physics loop | `timeFromLastFrame`, `carV`, `carAccel`, `gearValue`, `boostCreatedPower`, `engineDamage`, `rpm`, `getTorque`, `raceGas`, `clutchFeather`, callbacks |
| 9 | 31980 | 2264 | boost / air-fuel / damage-risk calculation | `rpm`, `stockBoost`, `boostPsi`, `compressionPowerDelta`, `fuelFlowLimit`, `airFuelMeter`, `engineDamageRisk`, `boostCreatedPower` |
| 10 | 34244 | 584 | `getTorque` | `rpm`, `idleRPM`, `posTq`, `tqArray`, `parseInt`, `negTq` |
| 11 | 34828 | 196 | `init` / btd wrapper | `init`, `btd` |
| 12 | 35024 | 824 | gear/speed UI update | `gearValue`, `grs`, `mph`, `carAccel`, `carV`, `slip`, `runEngineTractionLightCB`, `runEngineGearUpdateCB` |
| 13 | 35848 | 916 | gear-change logic | mostly encoded but starts with `gearValue` |
| 14 | 36764 | 200 | brake setter | `brake` |
| 15 | 36964 | 288 | clutch setter | `clutchFeather`, constants `0.05`, `0.2` |
| 16 | 37252 | 2068 | race timing / staging quality counters | `goodCounterRT`, `badCounterRT`, `goodCounterET`, `badCounterET`, `lightDelayTO`, `staging`, `gearValue` |
| 17 | 39320 | 1796 | spectate/staging delay setup | `greenDelay`, `setSpectateDelayCB`, `runLight`, staging lights |
| 18 | 41116 | 2148 | staging lights / race-start callback | `runEngineSetLightOnCB`, `amber1`, `amber2`, `amber3`, `raceStartTimeCB`, `_system.milliseconds` |
| 19 | 43264 | 4968 | dyno/config calculation initializer | `stockRedLine`, `detuneHp`, `stockBoost`, `NOS`, `nitrousTankSize`, `fuelFlowLimit`, `engineBlockDurability`, `rpmGearConversion`, `brakeDecleration`, `engineDamage` |
| 20 | 48232 | 584 | random/math helper | `Math`, `log`, `random`, `round` |

## Confidence

The block roles above are high confidence for broad behavior because most blocks
have clear tables. Exact source statements are still limited by hidden-VM opcode
semantics and branch polarity.

Unlike `Lscr-93`, this script's vocabulary is domain-specific and dense enough
that we can reconstruct a useful Lingo-like skeleton for nearly every block.

