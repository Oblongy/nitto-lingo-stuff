## RaceEngine handler index

Export-backed handler bodies already exist in:

- Lingo decode: `rightful.ls`
- JS translation: `rightful.from-lingo.js`

The dispatch table is in `rightful.ls:20-45` and `rightful.from-lingo.js:14-38`.

| Slot | Handler | Lingo line | JS line | Source block |
|---:|---|---:|---:|---|
| 1 | `RaceEngine_constantsTable` | 48 | 41 | block 1, offset 344 |
| 2 | `RaceEngine_initState` | 113 | 105 | block 2, offset 3032 |
| 3 | `RaceEngine_parseConfig` | 178 | 169 | block 3, offset 5972 |
| 4 | `RaceEngine_initBoost` | 301 | 291 | block 4, offset 10964 |
| 5 | `RaceEngine_startSendTimer` | 316 | 305 | block 5, offset 11368 |
| 6 | `RaceEngine_stopRunTimer` | 328 | 316 | block 6, offset 11760 |
| 7 | `RaceEngine_stageDistance` | 339 | 326 | block 7, offset 11992 |
| 8 | `RaceEngine_runFrame` | 393 | 379 | block 8, offset 14012 |
| 9 | `RaceEngine_calculateExtraHpi` | 1279 | 1264 | block 9, offset 31980 |
| 10 | `RaceEngine_lookupTorque` | 1376 | 1360 | block 10, offset 34244 |
| 11 | `RaceEngine_initBrakeTune` | 1394 | 1377 | block 11, offset 34828 |
| 12 | `RaceEngine_gearDown` | 1403 | 1385 | block 12, offset 35024 |
| 13 | `RaceEngine_gearUp` | 1438 | 1419 | block 13, offset 35848 |
| 14 | `RaceEngine_setBrake` | 1477 | 1457 | block 14, offset 36764 |
| 15 | `RaceEngine_setClutchFeather` | 1490 | 1469 | block 15, offset 36964 |
| 16 | `RaceEngine_createMd5Hash` | 1505 | 1483 | block 16, offset 37252 |
| 17 | `RaceEngine_startLightTimer` | 1564 | 1541 | block 17, offset 39320 |
| 18 | `RaceEngine_runLight` | 1642 | 1618 | block 18, offset 41116 |
| 19 | `RaceEngine_buildMd5Source` | 1733 | 1708 | block 19, offset 43264 |
| 20 | `RaceEngine_randomCurve` | 1863 | 1837 | block 20, offset 48232 |

## Race-start path

- `RaceEngine_createMd5Hash` dispatches ready/start behavior by `raceType` and calls `KREADY`, `RREADY`, `RIVREADY`, `HTQREADY`, `HTREADY`, or `startLightTimer(...)` in `rightful.ls:1505-1562`.
- `RaceEngine_startLightTimer` schedules `timeout(...).new(..., symbol(runLight))` for `p`, `b`, `"1"`, `"1T"`, `s`, `sT`, `o`, `"2"`, and `"2T"` in `rightful.ls:1564-1640`.
- `RaceEngine_runLight` advances the amber/green sequence and calls `runEngineSetLightOnCB`, `raceStartTimeCB`, and `ctStartAnimateComputerCB` in `rightful.ls:1642-1731`.

## Runtime callback sites found verbatim

These callback names appear in the recovered export-backed Lingo:

- `runEngineNOSCB` in `rightful.ls:438`, `rightful.ls:537`
- `runEngineTractionLightCB` in `rightful.ls:593`, `rightful.ls:602`, `rightful.ls:1424`, `rightful.ls:1465`
- `runEngineStageLightCB` in `rightful.ls:762`
- `runEngineSetLightOnCB` in `rightful.ls:782`, `rightful.ls:842`, `rightful.ls:1660-1717`
- `runEngineSetMyRTCB` in `rightful.ls:879`
- `runEngineGearUpdateCB` in `rightful.ls:1435`, `rightful.ls:1474`
- `runEngineDamageLightCB` in `rightful.ls:1269`
- `runEngineCB` in `rightful.ls:1273`, `rightful.ls:1276`
- `raceStartTimeCB` in `rightful.ls:1690`
- `ctStartAnimateComputerCB` in `rightful.ls:1719`
- `ctFinishCB` in `rightful.ls:991`, `rightful.ls:995`
- `practiceFinishCB` in `rightful.ls:999`

## Result/reporting path

- Reaction-time dispatch lives inside `RaceEngine_runFrame` at `rightful.ls:781-879`, where the script calls `KRT`, `RRT`, `RIVRT`, `HTQRT`, and `HTRT`.
- Finish dispatch also lives inside `RaceEngine_runFrame` at `rightful.ls:959-1093`, where the script calls `KDONE`, `RDONE`, `RIVDONE`, `HTQD`, `HTD`, and `M`.

## Not found in this script

- No `crossWire` handler name was found in `rightful.ls`.
- No `tripWire` handler name was found in `rightful.ls`.
