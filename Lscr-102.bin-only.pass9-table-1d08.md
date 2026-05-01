# Lscr-102 Bin-Only Pass 9: Table at `0x1D08`

Source bin used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

## Proven boundary

- start: `0x1D08`
- final valid record ends before: `0x28C0`
- valid record count: `115`

At `0x28C0`, the aligned table shape breaks and another raw block begins.

## Table shape

This region parses as aligned `id,type,payload` records, mostly `type=4` strings, with one proven scalar:

- `0x2170`: `id=49`, `type=2`, `value=0.125`

## High-signal names

Early entries:

- `xtra`
- `xmlparser`
- `parseString`
- `makeList`
- `parseInt`
- `parseFloat`
- `stockRedLine`
- `redLine`
- `revLimiter`
- `detuneHp`
- `UsInit`
- `UkInit`
- `stockBoost`
- `boostSetting`
- `boostType`
- `initBoost`
- `Array`

Middle/late entries:

- `nitrousRemaining`
- `nitrousTankSize`
- `setClutch`
- `tqArray`
- `maxPsi`
- `airhpi`
- `turboFlow`
- `fuelFlowLimit`
- `overallAirFlowLimit`
- `cylinderNumber`
- `valveNumber`
- `pistonCompressionLevel`
- `chipSetting`
- `pistonDurability`
- `rodDurability`
- `valveDurability`
- `headGasketDurability`
- `engineBlockDurability`
- `oilDurability`
- `radiatorDurability`
- `oilFilterDurability`
- `coolantDurability`
- `pistonDamage`
- `partBreakPoint`
- `rodDamage`
- `valveDamage`
- `headGasketDamage`
- `engineBlockDamage`
- `oilDamage`
- `oilFilterDamage`
- `coolantDamage`
- `raceGas`
- `tireStick`
- `launchControl`
- `beforePistonDamage`
- `thePD`
- `theBPD`
- `init`
- `raceType`

This table is another major named-state / named-local region and is distinct from the earlier late table at `0x0E88`.
