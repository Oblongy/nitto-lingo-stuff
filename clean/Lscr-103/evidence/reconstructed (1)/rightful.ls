-- Lscr-103 rightful.ls
-- Mechanical Lingo reconstruction from .bin/.json.
-- Constraint: recovered bytecode evidence only; undecoded lines are not invented source.

on runEngineStart
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=0 length=140 codeLen=40
  -- registration/prologue markers=10 paddingBytes=10 -- 0x0014
end

on runEngineStop
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=140 length=224 codeLen=14
  -- names: _global, objRace, beginRace
  _global.objRace.beginRace() -- 0x0021
end

on runEngine
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=364 length=240 codeLen=14
  -- names: _global, objRace, endRace
  _global.objRace.endRace() -- 0x0021
end

on runEngineGaugeInit
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=604 length=236 codeLen=26
  -- names: _global, objRace, run
  -- branch 20 -- 0x001A
  _global.objRace.run(param__global) -- 0x002D
end

on runEngineGearUp
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=840 length=516 codeLen=63
  -- names: _global, objRace, sprite, flashSP, runEngineGaugeInitCB, redLine, nitrousTankSize, nitrousRemaining, boostType
  -- branch 57 -- 0x001A
  sprite(flashSP).runEngineGaugeInitCB(_global.objRace.redLine, _global.objRace.nitrousTankSize, _global.objRace.nitrousRemaining, _global.objRace.boostType) -- 0x0052
end

on runEngineGearDown
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1356 length=236 codeLen=23
  -- names: _global, objRace, gearUp
  -- branch 17 -- 0x001A
  _global.objRace.gearUp() -- 0x002A
end

on runEngineSetBrake
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1592 length=260 codeLen=23
  -- names: _global, objRace, gearDown
  -- branch 17 -- 0x001A
  _global.objRace.gearDown() -- 0x002A
end

on runEngineSetClutch
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1852 length=272 codeLen=26
  -- names: _global, objRace, setBrake
  -- branch 20 -- 0x001A
  _global.objRace.setBrake(param__global) -- 0x002D
end

on runEngineSetNOS
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2124 length=264 codeLen=26
  -- names: _global, objRace, setClutch
  -- branch 20 -- 0x001A
  _global.objRace.setClutch(param__global) -- 0x002D
end

on runEngineDyno
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2388 length=400 codeLen=13
  -- names: _global, objRace, isNos
  isNos = param__global -- 0x001D
  _global.objRace -- 0x0020
end

on __embedded_lscr103_block10
  -- source-kind: embedded block without handler metadata
  -- offset=2788 length=1880 codeLen=524
  -- names: _global, objRace, maxPsi, boostSetting, initBoost, chipSetting, Array, init, DYNO, tqArray, length, revLimiter, rpm, getTorque, calculateExtraHpi, Math, floor, posTq, hpi, boostCreatedPower, systemPower, ECUtune, compressionPowerDelta, push, airFlowLimit, airFuelMeter, overallAirFlowLimit, boostPsi, turboFlow, sprite, flashSP, garageDynoRunCB, join, ,
  if not (param__global >= VOID) then -- jump 46 -- 0x0018
  if not (param__global <= _global.objRace.maxPsi) then -- jump 30 -- 0x0028
  boostSetting = param__global -- 0x0035
  _global.objRace -- 0x0038
  _global.objRace.initBoost() -- 0x0046
  -- 0x45 marker -- 0x004E
  -- 0x0A marker -- 0x0050
  if not (param_objRace <= -5) then -- jump 16 -- 0x0057
  chipSetting = param_objRace -- 0x0064
  _global.objRace -- 0x0067
  _global = ((param_objRace >= -5) ^ Array) -- 0x006F
  objRace = (implicit_lhs_0x0077 ^ Array) -- 0x007A
  maxPsi = (implicit_lhs_0x0082 ^ Array) -- 0x0085
  boostSetting = (implicit_lhs_0x008D ^ Array) -- 0x0090
  _global.objRace.init(DYNO) -- 0x00A4
  initBoost = floor -- 0x00A8
  if not (initBoost < _global.objRace.tqArray.length) then -- jump 286 -- 0x00BB
  if not ((initBoost * 100) > 1.5104.objRace.revLimiter) then -- jump 6 -- 0x00D0
  -- jump 262 -- 0x00D4
  rpm = (initBoost * 100) -- 0x00E4
  _global.objRace -- 0x00E7
  _global.objRace.getTorque() -- 0x00F5
  _global.objRace.calculateExtraHpi() -- 0x0103
  -- 0x64 packed call/operator prefix raw=64 -- 0x014B
  -5 = (_global.objRace.posTq(((((((TRUE & _global.objRace.hpi) & _global.objRace.boostCreatedPower) & _global.objRace.systemPower) & _global.objRace.ECUtune) & _global.objRace.compressionPowerDelta) * 0.7512)) / 100) -- 0x0154
  Math.floor -- 0x0157
  _global.push(-5) -- 0x0165
  objRace.push(_global.objRace.airFlowLimit) -- 0x0179
  maxPsi.push(_global.objRace.airFuelMeter) -- 0x018D
  if not (_global.objRace.overallAirFlowLimit < ((_global.objRace.boostPsi / _global.objRace.maxPsi) * _global.objRace.turboFlow)) then -- jump 18 -- 0x01B4
  boostSetting.push(VOID) -- 0x01C3
  -- jump 15 -- 0x01C4
  boostSetting.push(TRUE) -- 0x01D2
  -- repeat step 4 -- 0x01D3
  -- jump -299 -- 0x01D7
  sprite(flashSP).garageDynoRunCB(_global.join(","), objRace.join(","), maxPsi.join(","), boostSetting.join(",")) -- 0x021F
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-103.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-103.aggressive-evidence.json
-- blocks=11 actions=0 branches=6 methodCalls=22
-- literalNames=47 callbackLikeNames=5 constants=3
-- todos=0 implicitSites=3
