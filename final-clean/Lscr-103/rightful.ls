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
  -- raw prelude starts 3b 00 00 35 00 01 07 00 14: proved _global.objRace receiver, unresolved 07 00 14 skip before recovered call body
  _global.objRace.run(param__global) -- 0x002D
end

on runEngineGearUp
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=840 length=516 codeLen=63
  -- names: _global, objRace, sprite, flashSP, runEngineGaugeInitCB, redLine, nitrousTankSize, nitrousRemaining, boostType
  -- raw prelude starts 3b 00 00 35 00 01 07 00 39: proved _global.objRace receiver, unresolved 07 00 39 skip before recovered callback body
  sprite(flashSP).runEngineGaugeInitCB(_global.objRace.redLine, _global.objRace.nitrousTankSize, _global.objRace.nitrousRemaining, _global.objRace.boostType) -- 0x0052
end

on runEngineGearDown
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1356 length=236 codeLen=23
  -- names: _global, objRace, gearUp
  -- raw prelude starts 3b 00 00 35 00 01 07 00 11: proved _global.objRace receiver, unresolved 07 00 11 skip before recovered call body
  _global.objRace.gearUp() -- 0x002A
end

on runEngineSetBrake
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1592 length=260 codeLen=23
  -- names: _global, objRace, gearDown
  -- raw prelude starts 3b 00 00 35 00 01 07 00 11: proved _global.objRace receiver, unresolved 07 00 11 skip before recovered call body
  _global.objRace.gearDown() -- 0x002A
end

on runEngineSetClutch
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1852 length=272 codeLen=26
  -- names: _global, objRace, setBrake
  -- raw prelude starts 3b 00 00 35 00 01 07 00 14: proved _global.objRace receiver, unresolved 07 00 14 skip before recovered call body
  _global.objRace.setBrake(param__global) -- 0x002D
end

on runEngineSetNOS
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2124 length=264 codeLen=26
  -- names: _global, objRace, setClutch
  -- raw prelude starts 3b 00 00 35 00 01 07 00 14: proved _global.objRace receiver, unresolved 07 00 14 skip before recovered call body
  _global.objRace.setClutch(param__global) -- 0x002D
end

on runEngineDyno
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2388 length=400 codeLen=13
  -- names: _global, objRace, isNos
  _global.objRace.isNos = param__global -- 0x001D
end

on __embedded_lscr103_block10
  -- source-kind: embedded block without handler metadata
  -- offset=2788 length=1880 codeLen=524
  -- names: _global, objRace, maxPsi, boostSetting, initBoost, chipSetting, Array, init, DYNO, tqArray, length, revLimiter, rpm, getTorque, calculateExtraHpi, Math, floor, posTq, hpi, boostCreatedPower, systemPower, ECUtune, compressionPowerDelta, push, airFlowLimit, airFuelMeter, overallAirFlowLimit, boostPsi, turboFlow, sprite, flashSP, garageDynoRunCB, join, ,
  if ((param__global >= FALSE) and (param__global <= _global.objRace.maxPsi)) then -- paired conditional exits share the same post-body target
    _global.objRace.boostSetting = param__global -- 0x0035
    _global.objRace.initBoost() -- 0x0046
  end if
  -- 0x45 marker -- 0x004E
  -- 0x0A marker -- 0x0050
  if (param_objRace <= -5) then -- branch pair 0x0057 / 0x0064
    _global.objRace.chipSetting = param_objRace -- 0x0064
  end if
  _global = Array() -- 0x006F
  objRace = Array() -- 0x007A
  maxPsi = Array() -- 0x0085
  boostSetting = Array() -- 0x0090
  _global.objRace.init(DYNO) -- 0x00A4
  initBoost = 17 -- 0x00A8
  if (initBoost < _global.objRace.tqArray.length) then -- forward-exit branch at 0x00BB; tail op_64/op_D5 packing remains unresolved
    if ((initBoost * 100) < _global.objRace.revLimiter) then -- branch pair 0x00D0 / 0x00D4
      _global.objRace.rpm = (initBoost * 100) -- 0x00E4
      _global.objRace.getTorque() -- 0x00F5
      _global.objRace.calculateExtraHpi() -- 0x0103
      -- op_83 immediate 83 1D 58 -> fixed-point 0.7512 by local Lscr-102 rule; leading blocks-surface ! before posTq is still only an unresolved op_3F stand-in
      id_5 = (Math.floor(((((((!_global.objRace.posTq + _global.objRace.hpi) + _global.objRace.boostCreatedPower) + _global.objRace.systemPower) + _global.objRace.ECUtune) + _global.objRace.compressionPowerDelta) * 0.7512)) / 100) -- unresolved local name remains id_5; raw local-slot store starts at 0x0140, while the inherited staged inline label stays 0x0154; the trailing `/ 100` plus `57 00 05 51` local-slot-5 store are now treated as proven, only the single unary `3F` byte immediately after the `posTq` name load remains unresolved, and the weaker blocks-surface standalone `?` after this line is not kept because the bytes flow directly into `_global.push(id_5)` with no intervening proven executable line
      _global.push(id_5) -- 0x0165
      objRace.push(_global.objRace.airFlowLimit) -- 0x0179
      maxPsi.push(_global.objRace.airFuelMeter) -- 0x018D
      if (_global.objRace.overallAirFlowLimit < ((_global.objRace.boostPsi / _global.objRace.maxPsi) * _global.objRace.turboFlow)) then -- branch pair 0x01B4 / 0x01C4
        boostSetting.push(FALSE) -- 0x01C3
      else
        boostSetting.push(TRUE) -- 0x01D2
      end if
    end if
    -- raw tail remains partially unresolved: the weaker blocks-surface `op_0f` placeholder between the FALSE arm and this tail is not kept as a standalone line, because the bytes `... 3E 3A 00 01 51 06 00 0F 56 00 03 35 00 18 39 3F 3A 00 01 51 ...` prove a normal FALSE-arm close, an unconditional skip over the TRUE arm, and then the TRUE-arm close before the unresolved tail begins; after that, `64 00 04 51 06 FE D5` consumes local slot 4 (`initBoost`) before the backward jump, but the local FFDec / block surfaces still do not prove a cleaner normalized loop-step form than this explicit tail note; the three-byte backward-jump slice ends at raw `0x01C5`, and the callback chain starts at the very next byte, raw `0x01C6`, with the already-resolved receiver setup `3B 00 1E 39 3D 00 1F 3A 00 01` for `sprite(flashSP)`; that receiver setup closes at raw `0x01CF`, and the first callback-argument load begins immediately after at raw `0x01D0` with `35 00 20 39`, before the later `garageDynoRunCB` call close `... 3A 00 04 51`, so no spacer opcode or additional proven executable line is inserted here; inherited staged inline labels in this tail region are consistently +0x14 later
  end if
  sprite(flashSP).garageDynoRunCB(_global.join(","), objRace.join(","), maxPsi.join(","), boostSetting.join(",")) -- raw callback chain starts 0x01C6 and closes with the 4-arg call at 0x0208..0x020B; the next bytes begin block trailer data at raw 0x020C (`23 00 00 00 ...`), so no additional proven executable line follows this callback; the weaker blocks-surface `?(?, ?, ?, ?(flashSP).garageDynoRunCB()(,)(,)(,)(,))` blob is therefore not kept as executable source; inherited staged label 0x021F
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-103.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-103.aggressive-evidence.json
-- blocks=11 actions=0 branches=6 methodCalls=22
-- literalNames=47 callbackLikeNames=5 constants=3
-- todos=0 implicitSites=3
