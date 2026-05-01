# Lscr-102 Pass 6 Prototype Stack Decompile

This is heuristic and intentionally mechanical. It is used to improve the hand reconstruction.

## Block 4

Names: boostType, T, boostLag, c0_7, boostSetting, boostRange, c1_7, c0

```lingo
if/not? boostType then jump +34
boostLag = (me * boostSetting)
expr c0_7
boostRange = (me * boostSetting)
expr c1_7
jump_abs? 21
boostLag = c0
expr me
boostRange = boostSetting
expr me
```

## Block 10

Names: rpm, undefined, idleRPM, c10000, posTq, tqArray, parseInt, c100, negTq, c200

```lingo
if/not? undefined then jump +15
rpm = idleRPM
expr me
jump_abs? 48
if/not? idleRPM then jump +15
rpm = idleRPM
expr me
jump_abs? 24
if/not? c10000 then jump +12
rpm = c10000
expr me
posTq = rpm((me / c100))
expr me
negTq = (me + c200)
expr posTq
```

## Block 14

Names: brake

```lingo
if/not? ?[arg_brake] then jump +12
brake = 1
expr me
jump_abs? 9
brake = 0
expr me
```

## Block 15

Names: c0_05, clutchFeather, c0_2

```lingo
if/not? c0_05 then jump +15
clutchFeather = c0_05
expr me
jump_abs? 34
if/not? c0_2 then jump +15
clutchFeather = c0_2
expr me
jump_abs? 11
clutchFeather = arg_c0_05
expr me
```

## Block 12

Names: gearValue, grs, c0, gr, mph, carAccel, carV, slip, sprite, flashSP, runEngineTractionLightCB, engineV, speedoV, hp, runEngineGearUpdateCB

```lingo
expr gearValue
jump_abs? 5127
gearValue = (grs + me[gearValue])
expr me
if/not? c0 then jump +160
expr me
gr = gearValue
expr me
if/not? c0 then jump +95
mph = c0
expr me
carAccel = c0
expr me
carV = c0
expr me
jump_cond? 40
slip = 0
expr me
expr runEngineTractionLightCB(0)
engineV = speedoV
expr me
jump_abs? 12
engineV = carV
expr me
hp = c0
expr me
jump_abs? 21
if/not? me[gearValue] then jump +12
speedoV = engineV
expr me
expr me(gearValue)
```

## Block 9

Names: rpm, pb, c1, stockBoost, c0, c1_7, c0_7, boostSetting, c7_5, c100, boostRange, boostLag, boostPsi, compressionPowerDelta, pistonCompressionLevel, c4, c5, c2, maxPsi, turboFlow

```lingo
rpm = (me / pb)
expr rpm
if/not? c1 then jump +11
rpm = c1
expr me
expr pb
if/not? c0 then jump +45
pb = (me / c100)
expr (me * c7_5)
jump_abs? 31
pb = (me / c100)
expr (me * c7_5)
if/not? pb then jump +8
pb = (me - boostLag)
expr (me * boostRange)
boostPsi = (me - boostLag)
expr (me * boostRange)
if/not? c0 then jump +12
boostPsi = c0
expr me
compressionPowerDelta = c0
expr me
if/not? c0 then jump +61
compressionPowerDelta = (me / c100)
expr (boostPsi - (me * c5))
if/not? c0 then jump +12
compressionPowerDelta = c0
expr me
jump_abs? 40
if/not? c0 then jump +28
compressionPowerDelta = (me / c100)
expr (me - boostPsi)
c1 = c0
expr me
if/not? c0 then jump +24
c1 = (me * turboFlow)
expr (me / maxPsi)
jump_abs? 11
c1 = turboFlow
expr me
if/not? c1 then jump +26
stockBoost = (overallAirFlowLimit - c1)
expr me
airFlowLimit = c1
expr me
jump_abs? 24
stockBoost = (me - overallAirFlowLimit)
expr c1
airFlowLimit = overallAirFlowLimit
expr me
c0 = (me + chipSetting)
expr airFlowLimit
if/not? fuelFlowLimit then jump +11
c0 = fuelFlowLimit
expr me
dangerLevel = airFlowLimit
expr me
airFuelMeter = (me - airFlowLimit)
expr c0
airFuelDelta = me(airFuelMeter)
expr abs
if/not? c1 then jump +12
airFuelDelta = c1
expr me
expr c1_7
if/not? c0 then jump +91
if/not? c5 then jump +25
engineDamageRisk = (me * c0_09)
expr (me * airFuelDelta)
jump_abs? 22
engineDamageRisk = (me * c0_07)
expr (me * airFuelDelta)
c1_7 = (me * c2_5)
expr airFuelDelta
if/not? c10 then jump +11
c1_7 = c10
expr me
jump_abs? 54
engineDamageRisk = (me / c100)
expr (me / airFuelDelta)
c1_7 = (me / airFuelDelta)
expr c1
if/not? c0_1 then jump +11
c1_7 = c0
expr me
c0_7 = (me / c2)
expr stockBoost
boostSetting = (airFlowLimit - c0_7)
expr me
ECUtune = (me / c100)
expr c1_7
systemPower = (c0_7 - (me / c100))
expr airhpi
boostCreatedPower = (me / c100)
expr (pb * boostSetting)
```

## Block 20

Names: Math, log, c1, random, c5, c0_6, c2, c0, round, c1000

```lingo
Math = (c1((Math * (random() + (me / c5)))) * arg_Math)
expr me
if/not? c0_6 then jump +18
Math = (me / c2)
expr Math
jump_abs? 65513
if/not? c0 then jump +11
Math = c0
expr me
```
