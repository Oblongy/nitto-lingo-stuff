# Race Engine Handler Map

This note narrows the workspace down to the race-engine surfaces that are directly useful for Lingo-to-JS translation.

The direct export still leaves some script bodies behind `unk26`, so the usable body recovery in this workspace comes from the mechanical reconstructions under `reconstructed (1)`.

## Script Surfaces

### `Lscr-102` RaceEngine core dispatch/body

Primary Lingo source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-102\original-style.lingo`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-102\original-style.lingo>)

Primary JS source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-102\rightful.from-lingo.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-102\rightful.from-lingo.js>)

Recovered dispatch-table handlers:

| Handler | Lingo line | JS line |
|---|---:|---:|
| `RaceEngine_constantsTable` | 48 | 41 |
| `RaceEngine_initState` | 113 | 105 |
| `RaceEngine_parseConfig` | 178 | 169 |
| `RaceEngine_initBoost` | 301 | 291 |
| `RaceEngine_startSendTimer` | 316 | 305 |
| `RaceEngine_stopRunTimer` | 328 | 316 |
| `RaceEngine_stageDistance` | 339 | 326 |
| `RaceEngine_runFrame` | 393 | 379 |
| `RaceEngine_calculateExtraHpi` | 1279 | 1264 |
| `RaceEngine_lookupTorque` | 1376 | 1360 |
| `RaceEngine_initBrakeTune` | 1394 | 1377 |
| `RaceEngine_gearDown` | 1403 | 1385 |
| `RaceEngine_gearUp` | 1438 | 1419 |
| `RaceEngine_setBrake` | 1477 | 1457 |
| `RaceEngine_setClutchFeather` | 1490 | 1469 |
| `RaceEngine_createMd5Hash` | 1505 | 1483 |
| `RaceEngine_startLightTimer` | 1564 | 1541 |
| `RaceEngine_runLight` | 1642 | 1618 |
| `RaceEngine_buildMd5Source` | 1733 | 1708 |
| `RaceEngine_randomCurve` | 1863 | 1837 |

Notes:

- The handler names above come directly from the `RaceEngine_dispatchTable` block in `original-style.lingo`.
- In this workspace, `reconstructed (1)\Lscr-102\original-style.lingo` is the newer recovered pass; it already resolves parts of the older plain `reconstructed\Lscr-102\original-style.lingo` copy, such as `s = (hp mod c13)` and the explicit `lightDelayTO/lightTO1/lightTO2/runInterval.forget()` cleanup inside `RaceEngine_initState`.
- `reconstructed (1)\Lscr-102\rightful.from-lingo.js` is the named-method JS mirror of that same Lingo pass. It is a translation artifact, not a gameplay rewrite.

### `Lscr-103` outbound race-engine wrappers

Primary Lingo source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-103\rightful.ls`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-103\rightful.ls>)

Primary JS source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\03-race-engine-from-c.js>)

Recovered handlers:

| Handler | Lingo line | JS line | Offset | Recovered body |
|---|---:|---:|---:|---|
| `runEngineStart` | 5 | 9 | 0x0000 | registration/prologue markers only |
| `runEngineStop` | 12 | 14 | 0x008C | `_global.objRace.beginRace()` |
| `runEngine` | 20 | 19 | 0x016C | `_global.objRace.endRace()` |
| `runEngineGaugeInit` | 28 | 24 | 0x025C | `_global.objRace.run(param__global)` |
| `runEngineGearUp` | 37 | 29 | 0x0348 | `sprite(flashSP).runEngineGaugeInitCB(...)` |
| `runEngineGearDown` | 46 | 41 | 0x054C | `_global.objRace.gearUp()` |
| `runEngineSetBrake` | 55 | 46 | 0x0638 | `_global.objRace.gearDown()` |
| `runEngineSetClutch` | 64 | 51 | 0x073C | `_global.objRace.setBrake(param__global)` |
| `runEngineSetNOS` | 73 | 56 | 0x084C | `_global.objRace.setClutch(param__global)` |
| `runEngineDyno` | 82 | 61 | 0x0954 | `isNos = param__global` then `_global.objRace` |

Notes:

- The handler names above come from the metadata-backed handler list in `Lscr-103`.
- The recovered bodies show a contiguous semantic shift from `runEngineGearUp` onward that should not be normalized away:
  - `runEngineGearUp` calls `sprite(flashSP).runEngineGaugeInitCB(...)`
  - `runEngineGearDown` calls `_global.objRace.gearUp()`
  - `runEngineSetBrake` calls `_global.objRace.gearDown()`
  - `runEngineSetClutch` calls `_global.objRace.setBrake(param__global)`
  - `runEngineSetNOS` calls `_global.objRace.setClutch(param__global)`
- The per-block byte tables back that shift directly:
  - block `840` resolves `runEngineGaugeInitCB`
  - block `1356` resolves `gearUp`
  - block `1592` resolves `gearDown`
  - block `1852` resolves `setBrake`
  - block `2124` resolves `setClutch`
- In this workspace there is no export-backed proof of an extra named handler inserted into that run. So the current safe conclusion is not “the names are wrong,” but “the export currently preserves name/body mismatch across that range.”
- `Lscr-103` also contains `__embedded_lscr103_block10` at line 91, JS line 68, offset `0x0AE4`, with `DYNO`, `initBoost`, `getTorque`, `calculateExtraHpi`, and `sprite(flashSP).garageDynoRunCB(...)`. It is embedded block recovery, not a named handler, so it should be kept separate from `runEngineDyno`.

### `Lscr-104` client-to-server race senders

Primary Lingo source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-104\rightful.ls`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-104\rightful.ls>)

Primary JS source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\race-engine-handlers.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\race-engine-handlers.js>)

Race-relevant handlers:

| Handler | Lingo line | JS line | Offset | Recovered body |
|---|---:|---:|---:|---|
| `TEAMKICK` | 151 | 147 | 0x14B4 | `ssm((SRC & String.fromCharCode(30)) & param_unescape)` |
| `RRSP` | 351 | 152 | 0x34B0 | `ssm((((...RRQ...))))` |
| `RLVE` | 359 | 157 | 0x3628 | `ssm((((...RRS...))))` |
| `RIVOK` | 367 | 162 | 0x3740 | `ssm(RL)` |
| `RIVREADY` | 375 | 167 | 0x37D4 | `ssm(RO)` then `_global.objRace.init(RIVAL)` |
| `RIVRT` | 384 | 173 | 0x3908 | `ssm(((((RR & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_RR))` |
| `RIVDONE` | 392 | 178 | 0x3A28 | `ssm(((((RIVRT & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor))` |

Notes:

- `TEAMKICK` is the only sender in this narrowed set that emits the literal `SRC`.
- `RIVREADY`, `RIVRT`, and `RIVDONE` are the direct outbound rival-race senders recovered in this script.

### `Lscr-93` dyno caller/response path

Primary Lingo source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls>)

Primary JS source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\11-dyno-response.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\11-dyno-response.js>)

Relevant response window:

| Action | Lingo line | JS line | Offset | Recovered body |
|---|---:|---:|---:|---|
| `buydyno` | 590 | 16 | 0x10BE | `_global.objRace.startRace(...); _global.objRace.init(DYNO); sprite(flashSP).garageDynoBuyCB(...)` |
| `changeboost` | 610 | 42 | 0x11C5 | `sprite(flashSP).garageSetBoostCB(checkedForOneClient.getAProp("s"))` |
| `changeairfuel` | 614 | 47 | 0x11E7 | `sprite(flashSP).garageSetAFRatioCB(checkedForOneClient.getAProp("s"))` |

Notes:

- This is the caller-side dyno path. It is separate from the `Lscr-103` `runEngineDyno` named handler and the unnamed `__embedded_lscr103_block10`.
- The strongest export-backed tie between them is the shared `DYNO` initializer: `Lscr-93` calls `_global.objRace.init(DYNO)` at line 596, while `Lscr-103` line 109 also calls `_global.objRace.init(DYNO)` inside the unnamed dyno-oriented block.
- `buydyno` is the only recovered caller in this workspace that both initializes `DYNO` and immediately feeds a dyno-specific callback surface through `garageDynoBuyCB(...)`.
- The same `Lscr-93` embedded block is also the action-dispatch router: its case table at lines 123-125 routes `buydyno` to `0x10BE`, `changeboost` to `0x11C5`, and `changeairfuel` to `0x11E7`, which are the exact callback bodies listed above. The narrowed JS dispatcher for that same slice is `dispatchDynoProcSocketAction(...)` at JS line 53.

### `Lscr-109` generic request serializer

Primary Lingo source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-109\rightful.ls`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-109\rightful.ls>)

Primary JS source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js>)

Relevant serializer window:

| Handler | Lingo line | JS line | Offset | Recovered body |
|---|---:|---:|---:|---|
| `ssm` | 130 | 34 | 0x1714 | builds `action=...&aid=...&sk=...`, conditionally appends Facebook/MD5/PC info fields, then sends through `_global.gameURL` |

Notes:

- `ssm` explicitly special-cases `login`, `fbgetsession`, `agreetoterms`, `createaccount`, `changehomemachine`, `buycar`, `buypart`, `buyenginepart`, `buyengine`, `swapengine`, `changeemail`, `changepassword`, `ebep`, `sellcar`, `sellcarpart`, `sellenginepart`, `sellengine`, `buygears`, `sellallspare`, `activatepoints`, `activatemember`, `repairparts`, `fbremovefacebook`, and `changepasswordreq`.
- `buydyno`, `changeboost`, and `changeairfuel` do not appear in that special-case list in the recovered `ssm` body.
- From export-backed evidence, that means those dyno actions use the same generic `action=...&aid=...&sk=...` request builder path rather than a dyno-only serializer branch in `Lscr-109`.
- The same recovered `ssm` tail also writes to `_global.gNetID` via `_global.gNetID.push(...)`, while `Lscr-93` later dispatches on `_global.gNetID[_global][VOID]`.
- The mechanical `Lscr-109` lift is still broken at the tail, but the raw block and sibling queue sites now narrow the minimum record shape further than the earlier pass:
  - `Lscr-109.blocks.js:257-263` preserves `getNetText()(buypart)`, `param_buypartugg`, `Array()`, then `_global.gNetID.push()(&aid=)`.
  - `Lscr-106.blocks.js:152-154` preserves the same `Array()(...)` then `_global.fileNetID.push()(_global)` queue-write pattern.
  - `Lscr-93.rightful.ls:1368-1387` reads `_global.fileNetID[_global][VOID]` as the action/type token and `_global.fileNetID[_global][netDone]` as the stream/net slot.
- The current pass tightened that further with raw byte tails:
  - `Lscr-106.bin` block `10952` ends `... 3B 00 06 39 3D 00 08 3B 00 09 39 ... 23 00 02 57 00 00 51 ... 35 00 0D 35 00 0E 39 56 00 00 3A 00 01 51`, which is the same `Array ... call-with-2 ... push` shape as the broken mechanical writer.
  - `Lscr-109.bin` block `5908` ends `... 3B 00 31 39 54 00 00 3B 00 32 39 ... 23 00 02 57 00 03 51 ... 35 00 33 35 00 34 39 56 00 03 3A 00 01 51`, again the same `Array ... call-with-2 ... push` shape.
- From those export-backed fragments, the strongest current queue shape is: a 2-item `Array(...)` record. The first slot is the action/type token exposed as `[VOID]`. The second slot is the network/result handle consumed later by `netDone`, `netTextResult`, `netError`, or `getStreamStatus`.
- What is still unresolved: the exact temporary variable names in `Lscr-109`, and the exact hidden `gNetID` read-side access path for the second slot because the `Lscr-93` `0x3F` property-chain markers still do not decode cleanly.

### `gNetID` request/response correlation layer

Primary Lingo sources:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-109\rightful.ls`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-109\rightful.ls>)
- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls>)

Relevant evidence:

| Script | Lingo line | Recovered evidence |
|---|---:|---|
| `Lscr-109` | 189-191 | `getNetText(buypart)`, then `Array`, then `_global.gNetID.push(...)` in the mechanically broken tail |
| `Lscr-93` | 31-72 | loops over `_global.gNetID`, decodes response text, and dispatches on `case _global.gNetID[_global][VOID] of` |
| `Lscr-93` | 1360-1362 | `lastAction = _global.gNetID[_global][VOID]` then `_global.gNetID.splice(_global, TRUE)` |
| `Lscr-93` | 1368-1387 | sibling `fileNetID` queue reads `[VOID]` as the action/type token and `[netDone]` as the net/stream slot |
| `Lscr-106` | 79-83, 256 | sibling queue writers build `Array(...)` records before `_global.fileNetID.push(...)` and `_global.gNetID.push(...)` |
| `Lscr-106.blocks.lingo` | 355-365 | raw-surviving `Array()` writer tail before `_global.gNetID.push()(clearCache)` |
| `Lscr-109.blocks.lingo` | 257-263 | raw-surviving `Array()` writer tail before `_global.gNetID.push()(&aid=)` |

Notes:

- This is the export-backed correlation path between request creation and action-specific response routing.
- The queue clearly preserves enough action identity for `Lscr-93` to route `buydyno`, `changeboost`, and `changeairfuel`.
- The stronger export-backed result is now: `gNetID` is not a bare string and not a bare net object; it is a 2-item `Array(...)` queue record with an action/type token in `[VOID]` plus a second net/result slot.
- The still-open part is narrower now: the exact `Lscr-109` temp names are broken in the current mechanical lift, and the exact `gNetID` second-slot read syntax is still hidden behind undecoded `0x3F` property-chain markers in `Lscr-93`.

### `Lscr-105` server-to-client rival-race dispatch

Primary Lingo source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-105\rightful.ls`](</C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-105\rightful.ls>)

Primary JS source:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\race-engine-handlers.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\race-engine-handlers.js>)

Relevant AC dispatch window:

| AC | Lingo line | JS line | Dispatch target | Callback recovered from body |
|---|---:|---:|---:|---|
| `RRQ` | 598 | 189 | 0x1281 | `chatRIVRequestCB(...)` |
| `RCLG` | 610 | 196 | 0x12D8 | `chatRIVChallengeCB(d)` |
| `RRS` | 614 | 200 | 0x12FA | `chatRIVResponseCB(s, i)` |
| `RN` | 622 | 204 | 0x134B | `chatRIVJoinCB(d)` |
| `RRA` | 626 | 208 | 0x136D | `chatRIVNRaceCB(d)` |
| `RIVRDY` | 642 | 212 | 0x13F5 | `raceRIVReadyOpponentCB()` |
| `RR` | 646 | 216 | 0x140A | `raceRIVReadyCB(...)` |
| `RO` | 658 | 223 | 0x147A | `raceRIVOKCB(t)` |
| `RW` | 662 | 227 | 0x149C | `raceRIVResultCB(d)` |
| `RD` | 666 | 231 | 0x14BE | `raceRIVFinishCB(d)` |
| `RIVRTO` | 670 | 235 | 0x14E0 | `raceRIVRTOpponentCB(rt)` |
| `RIVRT` | 674 | 239 | 0x1502 | `raceRIVRTCB(r, rt, i)` |

Notes:

- `RRQ` and `RR` both branch on `param_getAProp.getAProp("s") = TRUE`.
- The callback names above are the export-confirmed client callback names used by the rival-race socket dispatch path.

## JS Translation Output

Race-only JS translation:

- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\race-engine-handlers.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\race-engine-handlers.js>)
- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\04-race-engine-core.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\04-race-engine-core.js>)
- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\11-dyno-response.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\11-dyno-response.js>)
- [`C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js`](</C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js>)

What it contains:

- `lscr103RaceEngineHandlers`
  - direct JS translations of the recovered `Lscr-103` handlers
- `embeddedLscr103DynoBlock10`
  - direct JS translation of the recovered unnamed `Lscr-103` dyno-oriented block at `rightful.ls:91-130`
- `lscr104RaceMessages`
  - direct JS translations of the recovered race senders in `Lscr-104`
- `11-dyno-response.js`
  - direct JS translations of the recovered `Lscr-93` `buydyno` / `changeboost` / `changeairfuel` response window
  - includes `dispatchDynoProcSocketAction(...)`, a dyno-only slice of the `Lscr-93` action-dispatch table
- `10-connection-script.js`
  - narrowed export-backed `buildSsmRequest(...)` helper for the recovered generic request serializer in `Lscr-109`
  - explicitly leaves the trailing `_global.gNetID.push(...)` queue-record shape unresolved
- `dispatchLscr105RivalRace`
  - direct JS translation of the `RRQ` through `RIVRT` rival-race AC dispatch window in `Lscr-105`
- `04-race-engine-core.js`
  - thin export-backed entrypoint for the current named-method `Lscr-102` RaceEngine core translation in `reconstructed (1)\Lscr-102\rightful.from-lingo.js`

## Unchanged / Unresolved

- I did not rename any export-confirmed handler names or callback names.
- I did not infer missing bodies for `runEngineStart` or the incomplete tail of `runEngineDyno`.
- I did not rewrite unresolved `Lscr-102` lines that still remain explicit TODO/mechanical artifacts inside `rightful.from-lingo.js`.
- I did not alter any non-race handlers outside the narrowed `Lscr-103`, `Lscr-104`, and `Lscr-105` evidence above.
