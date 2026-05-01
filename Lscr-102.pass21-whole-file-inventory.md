# Lscr-102 Whole-File Inventory

## Sources
- `Lscr-102.json`
- `reconstructed (1)\Lscr-102\rightful.ls`

## Whole-file counts
- `totalLength`: `48988`
- handler entries in JSON: `1`
- visible `on` blocks in `rightful.ls`: `22`
- visible embedded blocks in `rightful.ls`: `0`
- current combined pass markdown files: `67`
- `rightful.ls` line count: `1890`

## JSON handler inventory
- `RaceEngine`

## Visible `on` blocks
- `RaceEngine`
- `RaceEngine_dispatchTable`
- `RaceEngine_constantsTable`
- `RaceEngine_initState`
- `RaceEngine_parseConfig`
- `RaceEngine_initBoost`
- `RaceEngine_startSendTimer`
- `RaceEngine_stopRunTimer`
- `RaceEngine_stageDistance`
- `RaceEngine_runFrame`
- `RaceEngine_calculateExtraHpi`
- `RaceEngine_lookupTorque`
- `RaceEngine_initBrakeTune`
- `RaceEngine_gearDown`
- `RaceEngine_gearUp`
- `RaceEngine_setBrake`
- `RaceEngine_setClutchFeather`
- `RaceEngine_createMd5Hash`
- `RaceEngine_startLightTimer`
- `RaceEngine_runLight`
- `RaceEngine_buildMd5Source`
- `RaceEngine_randomCurve`

## Coverage status
- Whole-file inventory coverage is present at the reconstructed-source level.
- The exported surface is strong enough to inventory the entire visible `RaceEngine` script body and its helper blocks without relying on unnamed metadata slots.
- This pass does not replace the prior block/table passes; it closes the whole-file inventory layer.
