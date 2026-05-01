-- Lscr-102 original-style Lingo reconstruction
-- Pass 45: generated from Lscr-102.stack-faithful.lingo after validated 0x44 compact-compare recovery.
-- Constraint: every executable line below comes from recovered bytecode evidence.
-- Lines tagged needs-stack-context are not guessed; they mark the exact remaining stack-context gap.
-- Branch evidence lines are decoded control-flow evidence, not invented structured source.

global sendInterval, runInterval, secondBuffer, DAfp
global goodCounterRT, badCounterRT, goodCounterET, badCounterET
global avgFps, fpsCount, guid, raceType, timeAnchor
global staging, stagingLightPos1, stagingLightPos2, greenDelay, preStaged, staged, brake
global stockRedLine, redLine, revLimiter, detuneHp, stockBoost, boostType, boostSetting
global hpi, hp, systemPower, ECUtune, compressionPowerDelta, carV, carAccel, speedoV, engineV, mph
global engineDamage, engineDamageRisk, pistonDurability, rodDurability, valveDurability
global headGasketDurability, engineBlockDurability, oilDurability, rpm, idleRPM, tqArray

on RaceEngine
  return RaceEngine_dispatchTable()
end

on RaceEngine_dispatchTable
  -- source block 0: constructor/embedded handler registration
  -- offset=0 codeLen=251
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  handlers = [:]
  handlers[1] = #RaceEngine_constantsTable
  handlers[2] = #RaceEngine_initState
  handlers[3] = #RaceEngine_parseConfig
  handlers[4] = #RaceEngine_initBoost
  handlers[5] = #RaceEngine_startSendTimer
  handlers[6] = #RaceEngine_stopRunTimer
  handlers[7] = #RaceEngine_stageDistance
  handlers[8] = #RaceEngine_runFrame
  handlers[9] = #RaceEngine_calculateExtraHpi
  handlers[10] = #RaceEngine_lookupTorque
  handlers[11] = #RaceEngine_initBrakeTune
  handlers[12] = #RaceEngine_gearDown
  handlers[13] = #RaceEngine_gearUp
  handlers[14] = #RaceEngine_setBrake
  handlers[15] = #RaceEngine_setClutchFeather
  handlers[16] = #RaceEngine_createMd5Hash
  handlers[17] = #RaceEngine_startLightTimer
  handlers[18] = #RaceEngine_runLight
  handlers[19] = #RaceEngine_buildMd5Source
  handlers[20] = #RaceEngine_randomCurve
  return handlers
end

on RaceEngine_constantsTable
  -- source block 1: constant and encoded-table initialization
  -- offset=344 codeLen=456
  -- names: sendInterval, secondBuffer, DAfp, g, rpmGearConversion, gConvSlipA, gConvSlipB, brakeDecleration, revLimiterDeceleration, idleRPM, tqFlyFactor, partBreakPoint, vToMph, c0_5, c0, c100, c1000, c10000, c0_0075, c13, c0_4, c0_7, c1_7, c1_25, c9, c299, c300, c5_5, c2, c5, c50, c8, c0_005, c0_016, c3, c0_09, c0_6, c10, c0_015, c0_02
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  sendInterval = VOID -- 0x0016
  secondBuffer = VOID -- 0x001C
  DAfp = 0.009235545 -- 0x0024
  g = 32.1768 -- 0x002C
  rpmGearConversion = 0.85 -- 0x0034
  gConvSlipA = 6.28 -- 0x003C
  gConvSlipB = 0.02 -- 0x0044
  brakeDecleration = -40 -- 0x004C
  revLimiterDeceleration = -30 -- 0x0054
  idleRPM = 750 -- 0x005C
  tqFlyFactor = 5252 -- 0x0064
  partBreakPoint = 0.2 -- 0x006C
  vToMph = 0.68181818 -- 0x0074
  c0_5 = 0.5 -- 0x007C
  c0 = VOID -- 0x0082
  c100 = 100 -- 0x008A
  c1000 = 1000 -- 0x0092
  c10000 = 10000 -- 0x009A
  c0_0075 = 0.0075 -- 0x00A2
  c13 = revLimiterDeceleration -- 0x00AA
  c0_4 = 0.4 -- 0x00B2
  c0_7 = 0.7 -- 0x00BA
  c1_7 = 1.7 -- 0x00C2
  c1_25 = 1.25 -- 0x00CA
  c9 = 6.28 -- 0x00D2
  c299 = 299 -- 0x00DA
  c300 = 300 -- 0x00E2
  c5_5 = 5.5 -- 0x00EA
  c2 = DAfp -- 0x00F2
  c5 = 32.1768 -- 0x00FA
  c50 = 0.016 -- 0x0102
  c8 = gConvSlipA -- 0x010A
  c0_005 = 0.005 -- 0x0112
  c0_016 = 0.016 -- 0x011A
  c3 = 0.009235545 -- 0x0122
  c0_09 = 0.09 -- 0x012A
  c0_6 = 0.6 -- 0x0132
  c10 = gConvSlipB -- 0x013A
  c0_015 = 0.015 -- 0x0142
  c0_02 = 0.02 -- 0x014A
  c200 = 200 -- 0x0152
  c0_18 = 0.18 -- 0x015A
  c1320 = 1320 -- 0x0162
  c760 = 760 -- 0x016A
  c7 = 0.85 -- 0x0172
  c7_5 = 7.5 -- 0x017A
  c1_8 = 1.8 -- 0x0182
  c1_15 = 1.15 -- 0x018A
  c80 = 0.1 -- 0x0192
  c0_95 = 0.95 -- 0x019A
  c0_05 = 0.05 -- 0x01A2
  c0_2 = 0.2 -- 0x01AA
  c0_1 = 0.1 -- 0x01B2
  c0_65 = 0.65 -- 0x01BA
  c4 = 0.4 -- 0x01C2
  c0_07 = 0.07 -- 0x01CA
  c2_5 = 2.5 -- 0x01D2
  c1 = TRUE -- 0x01D8
end

on RaceEngine_initState
  -- source block 2: race engine state initialization
  -- offset=3032 codeLen=496
  -- names: goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps, fpsCount, guid, raceType, timeAnchor, c0, staging, stagingLightPos1, stagingLightPos2, greenDelay, preStaged, staged, brake, isMidMd5sent, isNos, pb, turboFlow, c0_0075, stockRedLine, avgDurability, pistonDurability, rodDurability, valveDurability, headGasketDurability, engineBlockDurability, c5, hp, s, c13, carV, carAccel, speedoV, engineV, mph, engineDamage, isEngineLightOn
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  goodCounterRT = VOID -- 0x0016
  badCounterRT = VOID -- 0x001C
  goodCounterET = VOID -- 0x0022
  badCounterET = VOID -- 0x0028
  avgFps = VOID -- 0x002E
  fpsCount = VOID -- 0x0034
  guid = EMPTY -- 0x003C
  raceType = param_goodCounterRT -- 0x0044
  timeAnchor = c0 -- 0x004D
  staging = 1 -- 0x0053
  stagingLightPos1 = c0 -- 0x005C
  stagingLightPos2 = c0 -- 0x0065
  greenDelay = VOID -- 0x006B
  preStaged = 0 -- 0x0071
  staged = 0 -- 0x0077
  brake = 0 -- 0x007D
  isMidMd5sent = 0 -- 0x0083
  isNos = c0 -- 0x008C
  pb = ((turboFlow * c0_0075) * stockRedLine) -- 0x009F
  -- 0x83 prefix marker -- 0x00BC
  avgDurability = (((((pistonDurability + rodDurability) + valveDurability) + headGasketDurability) + engineBlockDurability) / c5) -- 0x00C2
  hp = c0 -- 0x00CB
  s = (hp mod c13) -- 0x00D5
  carV = c0 -- 0x00DE
  carAccel = c0 -- 0x00E7
  speedoV = c0 -- 0x00F0
  engineV = c0 -- 0x00F9
  mph = c0 -- 0x0102
  engineDamage = c0 -- 0x010B
  isEngineLightOn = 0 -- 0x0111
  gearValue = c0 -- 0x011A
  -- pass49 evidence: block 2 and the downstream shift helpers all preserve this exact recovered index form; no safer constant or symbolic gear alias is exposed locally.
  gr = grs[VOID] -- 0x0125
  theTime = 0.033 -- 0x012D
  theActualTime = 0.033 -- 0x0135
  timeFromLastFrame = VOID -- 0x013B
  timeGreen = c0 -- 0x0144
  timeStartLine = c0 -- 0x014D
  stagingTimeLimit = pb -- 0x0155
  if lightDelayTO <> VOID then -- evidence jump at 0x0162
    lightDelayTO.forget() -- 0x0171
  end if
  if lightTO1 <> VOID then -- evidence jump at 0x017B
    lightTO1.forget() -- 0x018A
  end if
  if lightTO2 <> VOID then -- evidence jump at 0x0194
    lightTO2.forget() -- 0x01A3
  end if
  if runInterval <> VOID then -- evidence jump at 0x01AD
    runInterval.forget() -- 0x01BC
  end if
  rt = VOID -- 0x01C1
  et = VOID -- 0x01C9
  ts = VOID -- 0x01D1
  bt = c0 -- 0x01DA
  slip = 0 -- 0x01E0
  rpm = idleRPM -- 0x01E9
  N = (w * c0_4) -- 0x01F7
  getTorque() -- 0x0203
end

on RaceEngine_parseConfig
  -- source block 3: XML/config parsing and derived setup values
  -- offset=5972 codeLen=1268
  -- names: xtra, xmlparser, parseString, makeList, n2, w, parseInt, !ATTRIBUTES, r, hpi, parseFloat, v, stockRedLine, a, redLine, n, revLimiter, o, s, detuneHp, b, UsInit, p, UkInit, c0_7, stockBoost, c, boostSetting, e, boostType, d, initBoost, grs, Array, f, g, h, i, j, k
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  xtra = (xtra ^ xmlparser) -- 0x001E
  xtra.parseString(param_xtra) -- 0x002F
  -- 0x3F property-chain marker -- 0x003A
  xmlparser = xtra.makeList().n2 -- 0x003F..0x0042
  xtra = VOID -- 0x0044
  xtra -- 0x0047
  -- pass48 blocker: blocks.lingo/js normalize this receiver chain to xmlparser.initBoost.<field>, but annotated-disasm/pass-block5972-table/rebuilt-faithful-full.js still keep raw id 7 as !ATTRIBUTES; preserve the direct wrapper form until those surfaces converge.
  w = parseInt("!ATTRIBUTES"(r)) -- 0x0059
  hpi = parseFloat("!ATTRIBUTES"(v)) -- 0x006E
  stockRedLine = parseInt("!ATTRIBUTES"(a)) -- 0x0083
  redLine = parseInt("!ATTRIBUTES"(n)) -- 0x0098
  revLimiter = parseInt("!ATTRIBUTES"(o)) -- 0x00AD
  r = parseFloat("!ATTRIBUTES"(s)) -- 0x00C2
  detuneHp = parseFloat("!ATTRIBUTES"(b)) -- 0x00D7
  UsInit = parseFloat("!ATTRIBUTES"(p)) -- 0x00EC
  UkInit = (c0_7 * UsInit) -- 0x00FA
  stockBoost = parseInt("!ATTRIBUTES"(c)) -- 0x010F
  boostSetting = parseInt("!ATTRIBUTES"(e)) -- 0x0124
  boostType = "!ATTRIBUTES"(d) -- 0x0132
  initBoost() -- 0x013E
  grs = Array(parseFloat("!ATTRIBUTES"(f)), parseFloat("!ATTRIBUTES"(f)), parseFloat("!ATTRIBUTES"(g)), parseFloat("!ATTRIBUTES"(h)), parseFloat("!ATTRIBUTES"(i)), parseFloat("!ATTRIBUTES"(j)), parseFloat("!ATTRIBUTES"(k))) -- 0x01B7
  fgr = parseFloat("!ATTRIBUTES"(l)) -- 0x01CC
  NOS = parseInt("!ATTRIBUTES"(q)) -- 0x01E1
  nitrousRemaining = parseFloat("!ATTRIBUTES"(m)) -- 0x01F6
  nitrousTankSize = parseFloat("!ATTRIBUTES"(t)) -- 0x020B
  if nitrousRemaining > nitrousTankSize then -- evidence jump at 0x0217
    nitrousRemaining = nitrousTankSize -- 0x0220
  end if
  setClutch(0.125) -- 0x022F
  tqArray = Array() -- 0x0238
  tqArray = param_xmlparser -- 0x0240
  maxPsi = parseFloat("!ATTRIBUTES"(u)) -- 0x0255
  airhpi = parseFloat("!ATTRIBUTES"(w)) -- 0x026A
  turboFlow = parseFloat("!ATTRIBUTES"(x)) -- 0x027F
  fuelFlowLimit = parseFloat("!ATTRIBUTES"(y)) -- 0x0294
  overallAirFlowLimit = parseFloat("!ATTRIBUTES"(z)) -- 0x02A9
  cylinderNumber = parseInt("!ATTRIBUTES"(aa)) -- 0x02BE
  valveNumber = parseInt("!ATTRIBUTES"(ab)) -- 0x02D3
  pistonCompressionLevel = parseFloat("!ATTRIBUTES"(ac)) -- 0x02E8
  chipSetting = parseFloat("!ATTRIBUTES"(ad)) -- 0x02FD
  pistonDurability = parseFloat("!ATTRIBUTES"(ae)) -- 0x0312
  rodDurability = parseFloat("!ATTRIBUTES"(af)) -- 0x0327
  valveDurability = parseFloat("!ATTRIBUTES"(ag)) -- 0x033C
  headGasketDurability = parseFloat("!ATTRIBUTES"(ah)) -- 0x0351
  engineBlockDurability = parseFloat("!ATTRIBUTES"(ai)) -- 0x0366
  oilDurability = parseFloat("!ATTRIBUTES"(ao)) -- 0x037B
  radiatorDurability = parseFloat("!ATTRIBUTES"(at)) -- 0x0390
  oilFilterDurability = parseFloat("!ATTRIBUTES"(au)) -- 0x03A5
  coolantDurability = parseFloat("!ATTRIBUTES"(aw)) -- 0x03BA
  pistonDamage = (((parseFloat("!ATTRIBUTES"(aj)) / c100) * partBreakPoint) * cylinderNumber) -- 0x03DE
  rodDamage = (((parseFloat("!ATTRIBUTES"(ak)) / c100) * partBreakPoint) * cylinderNumber) -- 0x0402
  valveDamage = (((parseFloat("!ATTRIBUTES"(al)) / c100) * partBreakPoint) * valveNumber) -- 0x0426
  headGasketDamage = ((parseFloat("!ATTRIBUTES"(am)) / c100) * partBreakPoint) -- 0x0445
  engineBlockDamage = ((parseFloat("!ATTRIBUTES"(an)) / c100) * partBreakPoint) -- 0x0464
  oilDamage = parseFloat("!ATTRIBUTES"(ap)) -- 0x0479
  oilFilterDamage = parseFloat("!ATTRIBUTES"(av)) -- 0x048E
  coolantDamage = parseFloat("!ATTRIBUTES"(ax)) -- 0x04A3
  raceGas = parseFloat("!ATTRIBUTES"(aq)) -- 0x04B8
  tireStick = parseFloat("!ATTRIBUTES"(ar)) -- 0x04CD
  launchControl = parseInt("!ATTRIBUTES"(as)) -- 0x04E2
  beforePistonDamage = pistonDamage -- 0x04EB
  thePD = VOID -- 0x04F1
  theBPD = VOID -- 0x04F7
  init(raceType) -- 0x0507
end

on RaceEngine_initBoost
  -- source block 4: boost lag/range setup
  -- offset=10964 codeLen=60
  -- names: boostType, T, boostLag, c0_7, boostSetting, boostRange, c1_7, c0
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass29 structured from offsets 0x001B, 0x0029, 0x0037, 0x003B, 0x0043, 0x004C
  if boostType = T then
    boostLag = (c0_7 * boostSetting) -- 0x0029
    boostRange = (c1_7 * boostSetting) -- 0x0037
  else
    boostLag = c0 -- 0x0043
    boostRange = boostSetting -- 0x004C
  end if
end

on RaceEngine_startSendTimer
  -- source block 5: send-position timeout setup
  -- offset=11368 codeLen=59
  -- names: runInterval, object, forget, timeout, sendInterval, symbol, sendPos
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass29 structured from offsets 0x001D, 0x002C, 0x004B
  if runInterval <> VOID then
    runInterval.forget() -- 0x002C
  end if
  runInterval = timeout(runInterval).new((1000 / sendInterval), symbol(sendPos)) -- 0x004B
end

on RaceEngine_stopRunTimer
  -- source block 6: run timeout cleanup
  -- offset=11760 codeLen=25
  -- names: runInterval, object, forget
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass29 structured from offsets 0x001D, 0x002C
  if runInterval <> VOID then
    runInterval.forget() -- 0x002C
  end if
end

on RaceEngine_stageDistance
  -- source block 7: staging/reaction timing update
  -- offset=11992 codeLen=301
  -- names: staging, rt, c1, raceType, KOTH, RIVAL, TEAMRIVAL, HT, gearValue, c0, STG, s, carV, carAccel, c1320, timeAnchor, INT, _system, milliseconds
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- branch 120 -- 0x0018
  -- branch evidence (control-flow-evidence)
  if not (staging <> (rt mod c1)) then -- jump 104 -- 0x0024
  -- branch evidence (control-flow-evidence)
  if not (raceType = KOTH) then -- jump 33 marker 0x44 -- 0x002F
  -- branch evidence (control-flow-evidence)
  if not (raceType = RIVAL) then -- jump 22 marker 0x44 -- 0x003A
  -- branch evidence (control-flow-evidence)
  if not (raceType = TEAMRIVAL) then -- jump 11 marker 0x44 -- 0x0045
  -- branch evidence (control-flow-evidence)
  if not (raceType = HT) then -- jump 60 -- 0x0050
  -- branch evidence (control-flow-evidence)
  if not (gearValue < c0) then -- jump 28 -- 0x005C
  -- pass45 byte-window: block 7 0x0028..0x0075 raw=41 35 00 03 3D 00 04 12 44 00 21 41 35 00 03 3D 00 05 12 44 00 16 41 35 00 03 3D 00 06 12 44 00 0B 41 35 00 03 3D 00 07 12 07 00 3C 41 35 00 08 41 35 00 09 14 07 00 1C 3B 00 0A 39 41 35 00 0B 41 35 00 0C 22 41 35 00 0D 22 3A 00 03 51
  -- pass45 evidence: 0x44 compact compare branches are promoted above; first STG argument is still not proven as a normal stack value.
  -- pass45 blocker: rebuilt-faithful-full.js folds the KOTH/RIVAL/TEAMRIVAL chain further at 0x0075, but its leftmost carried stack value is still unresolved there.
  -- TODO exact stack source (needs-stack-context)
  STG(implicit_arg_0x0072, STG, ((s mod carV) mod carAccel)) -- 0x0075
  -- branch evidence (control-flow-evidence)
  -- jump 23 -- 0x0076
  STG(s, carV, carAccel) -- 0x008C
  -- branch evidence (control-flow-evidence)
  -- jump 180 -- 0x008D
  -- branch evidence (control-flow-evidence)
  if not (s < c1320) then -- jump 155 -- 0x00A5
  -- branch evidence (control-flow-evidence)
  if not (timeAnchor = VOID) then -- jump 70 -- 0x00AE
  -- branch evidence (control-flow-evidence)
  if not (raceType = KOTH) then -- jump 33 marker 0x44 -- 0x00B9
  -- branch evidence (control-flow-evidence)
  if not (raceType = RIVAL) then -- jump 22 marker 0x44 -- 0x00C4
  -- branch evidence (control-flow-evidence)
  if not (raceType = TEAMRIVAL) then -- jump 11 marker 0x44 -- 0x00CF
  -- branch evidence (control-flow-evidence)
  if not (raceType = HT) then -- jump 23 -- 0x00DA
  STG(s, carV, carAccel) -- 0x00F1
  -- branch evidence (control-flow-evidence)
  -- jump 79 -- 0x00F2
  -- branch evidence (control-flow-evidence)
  if not (raceType = KOTH) then -- jump 33 marker 0x44 -- 0x00FC
  -- branch evidence (control-flow-evidence)
  if not (raceType = RIVAL) then -- jump 22 marker 0x44 -- 0x0107
  -- branch evidence (control-flow-evidence)
  if not (raceType = TEAMRIVAL) then -- jump 11 marker 0x44 -- 0x0112
  -- branch evidence (control-flow-evidence)
  if not (raceType = HT) then -- jump 35 -- 0x011D
  -- 0x83 call marker -- 0x013C
  INT(s, carV, carAccel, _system, (milliseconds - timeAnchor)) -- 0x0140
end

on RaceEngine_runFrame
  -- source block 8: main per-frame physics and race-state update
  -- offset=14012 codeLen=7823
  -- names: c0, c1, timeFromLastFrame, theTime, _system, milliseconds, c1000, theActualTime, c0_2, avgFps, fpsCount, calculateExtraHpi, carV, c0_5, carAccel, gearValue, hpi, boostCreatedPower, systemPower, ECUtune, compressionPowerDelta, engineDamage, isNos, nitrousRemaining, NOS, rpm, stockRedLine, c1_25, hp, c10000, c2, sprite, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, gr
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- core evidence section: frame input clamp, delta time, FPS averaging
  -- branch evidence (control-flow-evidence)
  if not (param_c0 < c0) then -- jump 14 -- 0x001B
  c0 = c0 -- 0x0023
  -- branch evidence (control-flow-evidence)
  -- jump 22 -- 0x0027
  -- branch evidence (control-flow-evidence)
  if not (param_c0 > c1) then -- jump 11 -- 0x0031
  c0 = c1 -- 0x0039
  -- branch evidence (control-flow-evidence)
  if not (timeFromLastFrame > c0) then -- jump 80 -- 0x0045
  -- 0x83 prefix marker -- 0x0055
  theTime = ((milliseconds - timeFromLastFrame) / c1000) -- 0x005B
  _system -- 0x005E
  theActualTime = theTime -- 0x0064
  if theTime > c0_2 then -- evidence jump at 0x0070
    theTime = c0_2 -- 0x0079
  end if
  avgFps = (((avgFps * fpsCount) + theActualTime) / 1.6682) -- 0x0092
  timeFromLastFrame = milliseconds -- 0x009D
  _system -- 0x00A0
  calculateExtraHpi() -- 0x00A9
  c0 = 0.7451 -- 0x00C8
  (theTime * theTime) -- 0x00CB
  -- core evidence section: gear-zero launch power and nitrous branch
  -- branch evidence (control-flow-evidence)
  if not (gearValue = c0) then -- jump 718 -- 0x00D4
  c1 = (((((hpi + boostCreatedPower) + systemPower) + ECUtune) + compressionPowerDelta) - engineDamage) -- 0x00F5
  (c0_5 * carAccel) -- 0x00F8
  -- branch evidence (control-flow-evidence)
  if not (nitrousRemaining > c0) then -- jump 123 -- 0x010A
  timeFromLastFrame = (((NOS * rpm) / stockRedLine) / c1_25) -- 0x0121
  (isNos = TRUE) -- 0x0124
  if timeFromLastFrame > NOS then -- evidence jump at 0x012C
    timeFromLastFrame = NOS -- 0x0134
  end if
  (carV * theTime) -- 0x0137
  ((hp * c1) - 0.6966) -- 0x014A
  nitrousRemaining = (nitrousRemaining - ((NOS / c10000) * c2)) -- 0x015F
  hp -- 0x0162
  sprite(flashSP).runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100)) -- 0x0182
  -- branch evidence (control-flow-evidence)
  -- jump 21 -- 0x0183
  hp = (hp + (hp * c1)) -- 0x0194
  hp = (hp * param_c0) -- 0x01A1
  -- core evidence section: rpm limit, torque conversion, drivetrain speed
  -- branch evidence (control-flow-evidence)
  if not (rpm > (revLimiter + c200)) then -- jump 17 -- 0x01B2
  hp = (hp / c2) -- 0x01C0
  theTime = ((hp * tqFlyFactor) / rpm) -- 0x01D2
  _system = (((theTime * gr) * fgr) * rpmGearConversion) -- 0x01E8
  milliseconds = (_system / r) -- 0x01F4
  c1000 = (negTq * c9) -- 0x0201
  -- branch 20801 -- 0x0215
  local_16693 = 0.5639 -- 0x0227
  -- 0x19 marker -- 0x022B
  -- branch evidence (control-flow-evidence)
  if not ((theActualTime - c299) < theActualTime) then -- jump 60 -- 0x022F
  c0_2 = (milliseconds - c1000) -- 0x023A
  rpm -- 0x023D
  -- branch evidence (control-flow-evidence)
  if not (c0_2 > c0) then -- jump 35 -- 0x0245
  c1000 = (rpm + (((theActualTime - c300) * 0.7299) / c300)) -- 0x0265
  c0_2 -- 0x0268
  -- branch evidence (control-flow-evidence)
  -- jump 17 -- 0x0269
  c1000 = ((c1000 mod negTq) * c5_5) -- 0x0276
  0.7511 -- 0x0279
  -- 0x0B boolean-chain marker left=(c1000 < c0) -- 0x0284
  -- branch evidence (control-flow-evidence)
  if not (param_c0 = c0) then -- jump 11 -- 0x028C
  c1000 = c0 -- 0x0294
  (stockRedLine + c1000) -- 0x0297
  avgFps = (milliseconds - c1000) -- 0x029F
  param_c0 -- 0x02A2
  0.7767 -- 0x02B4
  -- branch evidence (control-flow-evidence)
  if not (rpm > revLimiter) then -- jump 11 -- 0x02BD
  fpsCount = revLimiterDeceleration -- 0x02C5
  (w / g) -- 0x02C8
  -- branch 15 -- 0x02CD
  carAccel = brakeDecleration -- 0x02D5
  brake -- 0x02D8
  -- branch evidence (control-flow-evidence)
  -- jump 13 -- 0x02D9
  carAccel = (avgFps mod c2) -- 0x02E2
  carV = (carV + (carAccel * theTime)) -- 0x02F5
  -- branch evidence (control-flow-evidence)
  if not (carV <= c0) then -- jump 21 -- 0x0301
  carAccel = c0 -- 0x030A
  carV = c0 -- 0x0313
  speedoV = carV -- 0x031C
  engineV = (engineV + (fpsCount * theTime)) -- 0x032E
  if engineV < c5 then -- evidence jump at 0x033A
    engineV = c5 -- 0x0343
  end if
  -- branch evidence (control-flow-evidence)
  -- jump 24 -- 0x0347
  if engineV > c100 then -- evidence jump at 0x0352
    engineV = c100 -- 0x035B
  end if
  -- 0x19 marker -- 0x0387
  0.7478 -- 0x0388
  getTorque() -- 0x0391
  mph = (carV * vToMph) -- 0x039C
  (fgr * rpmGearConversion) -- 0x039F
  -- branch evidence (control-flow-evidence)
  -- jump 1607 -- 0x03A0
  -- branch evidence (control-flow-evidence)
  if not (launchControl = TRUE) then -- jump 11 -- 0x03AF
  c0 = c0 -- 0x03B7
  slip -- 0x03BA
  hp = ((posTq * rpm) / tqFlyFactor) -- 0x03CA
  ((0.7811 * gr) * c50) -- 0x03CD
  c1 = (((((hpi + boostCreatedPower) + systemPower) + ECUtune) + compressionPowerDelta) - engineDamage) -- 0x03EB
  (gConvSlipA * r) -- 0x03EE
  -- core evidence section: race gas, nitrous, traction, slip, speed integration
  -- branch evidence (control-flow-evidence)
  if not (raceGas > VOID) then -- jump 92 -- 0x03F4
  calculateExtraHpi = (((c5 * theActualTime) * hp) / c1000) -- 0x040B
  engineV -- 0x040E
  -- branch evidence (control-flow-evidence)
  if not (calculateExtraHpi > raceGas) then -- jump 33 -- 0x0416
  c1 = (c1 + ((c0_02 * raceGas) / calculateExtraHpi)) -- 0x042B
  raceGas = VOID -- 0x0431
  -- branch evidence (control-flow-evidence)
  -- jump 28 -- 0x0435
  c1 = (c1 + c0_02) -- 0x0440
  raceGas = (raceGas - calculateExtraHpi) -- 0x044D
  -- branch evidence (control-flow-evidence)
  if not (nitrousRemaining > c0) then -- jump 127 -- 0x0462
  timeFromLastFrame = (((NOS * rpm) / stockRedLine) / c1_25) -- 0x0479
  (isNos = TRUE) -- 0x047C
  if timeFromLastFrame > NOS then -- evidence jump at 0x0484
    timeFromLastFrame = NOS -- 0x048C
  end if
  2.2016 -- 0x04A0
  hp = (timeFromLastFrame + (hp + (hp * c1))) -- 0x04A3
  nitrousRemaining = (nitrousRemaining - ((NOS / c10000) * c2)) -- 0x04BB
  sprite(flashSP).runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100)) -- 0x04DE
  -- branch evidence (control-flow-evidence)
  -- jump 21 -- 0x04DF
  hp = (hp + (hp * c1)) -- 0x04F0
  hp = ((c100 - detuneHp) * (0.7489 / c100)) -- 0x050D
  param_c0 -- 0x0510
  theTime = ((hp * tqFlyFactor) / rpm) -- 0x051F
  hp -- 0x0522
  _system = (((theTime * gr) * fgr) * rpmGearConversion) -- 0x0535
  milliseconds = (_system / r) -- 0x0541
  carV = (param_c0 * c8) -- 0x054D
  c0_5 = c0 -- 0x0555
  -- branch evidence (control-flow-evidence)
  if not (carV < c1) then -- jump 22 -- 0x0560
  -- 0x83 prefix marker -- 0x056C
  c0_5 = (c0_5 * ((c1 - carV) mod negTq)) -- 0x0573
  carAccel = ((w * c0_005) * carAccel) -- 0x0585
  gearValue = ((c0_016 * w) + c0_5) -- 0x0596
  if gearValue < c0 then -- evidence jump at 0x05A1
    gearValue = c0 -- 0x05A9
  end if
  hpi = ((carV * carV) + 0.751) -- 0x05C0
  DAfp -- 0x05C3
  if hpi < c0 then -- evidence jump at 0x05CB
    hpi = c0 -- 0x05D3
  end if
  0.7255 -- 0x05E6
  boostCreatedPower = (carV * vToMph) -- 0x05F0
  (gearValue + hpi) -- 0x05F3
  systemPower = UsInit -- 0x05F8
  milliseconds -- 0x05FB
  -- branch evidence (control-flow-evidence)
  if not (tireStick > VOID) then -- jump 20 -- 0x0601
  systemPower = (systemPower + (UsInit * c0_05)) -- 0x0612
  ECUtune = UkInit -- 0x061A
  -- branch evidence (control-flow-evidence)
  if not (boostCreatedPower > c0) then -- jump 73 -- 0x0625
  compressionPowerDelta = (boostCreatedPower / c100) -- 0x0631
  if compressionPowerDelta > c1 then -- evidence jump at 0x063C
    compressionPowerDelta = c1 -- 0x0644
  end if
  compressionPowerDelta = (compressionPowerDelta * c3) -- 0x0650
  systemPower = (systemPower + compressionPowerDelta) -- 0x065B
  ECUtune = (ECUtune - (compressionPowerDelta * c0_09)) -- 0x066B
  if ECUtune < c0_6 then -- evidence jump at 0x0676
    ECUtune = c0_6 -- 0x067E
  end if
  -- branch 102 -- 0x0686
  0.7734 -- 0x06B0
  -- branch evidence (control-flow-evidence)
  -- jump 56 -- 0x06B1
  0.7734 -- 0x06C6
  speedoV = carV -- 0x06CC
  (w / g) -- 0x06CF
  slip = 0 -- 0x06D2
  avgFps -- 0x06D5
  sprite(flashSP).runEngineTractionLightCB(0) -- 0x06E8
  -- branch evidence (control-flow-evidence)
  -- jump 108 -- 0x06E9
  -- 0x83 prefix marker -- 0x0705
  -- branch evidence (control-flow-evidence)
  if not ((carV + c2) < speedoV) then -- jump 55 -- 0x070A
  0.7734 -- 0x0725
  slip = 1 -- 0x0728
  (w / g) -- 0x072B
  sprite(flashSP).runEngineTractionLightCB(1) -- 0x073E
  -- branch evidence (control-flow-evidence)
  -- jump 22 -- 0x073F
  0.7734 -- 0x0754
  ((w / g) <= 0.7767) -- 0x0766
  -- branch evidence (control-flow-evidence)
  if not (carAccel < c0) then -- jump 23 -- 0x077B
  carAccel = c0 -- 0x0784
  (carV < c3) -- 0x0787
  engineDamage = c0 -- 0x078C
  avgFps -- 0x078F
  -- branch evidence (control-flow-evidence)
  -- jump 24 -- 0x0790
  if carV < c0 then -- evidence jump at 0x079B
    carV = c0 -- 0x07A4
  end if
  (w / g) -- 0x07A7
  -- branch evidence (control-flow-evidence)
  if not (rpm > revLimiter) then -- jump 20 -- 0x07B0
  carAccel = revLimiterDeceleration -- 0x07B9
  avgFps -- 0x07BC
  engineDamage = revLimiterDeceleration -- 0x07C1
  (systemPower * N) -- 0x07C4
  -- branch 58 -- 0x07C9
  carAccel = brakeDecleration -- 0x07D1
  brake -- 0x07D4
  engineDamage = brakeDecleration -- 0x07D9
  ((systemPower * N) = 0.5701) -- 0x07DC
  -- branch evidence (control-flow-evidence)
  if not (carV < c2) then -- jump 29 -- 0x07E5
  carAccel = c0 -- 0x07EE
  avgFps -- 0x07F1
  engineDamage = c0 -- 0x07F6
  (w / g) -- 0x07F9
  carV = c0 -- 0x07FF
  (ECUtune * N) -- 0x0802
  carV = (carV + (carAccel * theTime)) -- 0x0812
  ((ECUtune * N) / 0.5639) -- 0x0815
  speedoV = (speedoV + (engineDamage * theTime)) -- 0x0824
  avgFps -- 0x0827
  -- branch evidence (control-flow-evidence)
  if not ((carV + c10) < speedoV) then -- jump 12 -- 0x0835
  tireScrub = 1 -- 0x083B
  slip -- 0x083E
  -- branch evidence (control-flow-evidence)
  -- jump 9 -- 0x083F
  tireScrub = 0 -- 0x0844
  -- branch evidence (control-flow-evidence)
  if not ((carV + c0_015) < speedoV) then -- jump 234 -- 0x0855
  isNos = (speedoV - carV) -- 0x0862
  if isNos < c0_02 then -- evidence jump at 0x086D
    isNos = c0 -- 0x0875
  end if
  -- branch 93 -- 0x087D
  nitrousRemaining = (0.7299 / c200) -- 0x0893
  (ECUtune * N) -- 0x0896
  if nitrousRemaining < c0 then -- evidence jump at 0x089E
    nitrousRemaining = c0 -- 0x08A6
  end if
  avgFps -- 0x08A9
  -- branch evidence (control-flow-evidence)
  -- jump 22 -- 0x08AA
  if nitrousRemaining > c1 then -- evidence jump at 0x08B4
    nitrousRemaining = c1 -- 0x08BC
  end if
  slip -- 0x08BF
  speedoV = (nitrousRemaining - (speedoV * ((c1 - nitrousRemaining) > 2.2016))) -- 0x08D3
  -- branch evidence (control-flow-evidence)
  -- jump 102 -- 0x08D7
  NOS = (clutchFeather + c0_18) -- 0x08E3
  speedoV = (speedoV - (NOS * isNos)) -- 0x08F4
  -- 0x1F marker -- 0x0902
  -- branch evidence (control-flow-evidence)
  if not ((rpm / redLine) < (c8 / c10)) then -- jump 30 -- 0x091E
  0.7478 -- 0x093C
  -- branch evidence (control-flow-evidence)
  -- jump 12 -- 0x093D
  speedoV = carV -- 0x0945
  (TRUE - (rpm / redLine)) -- 0x0948
  -- 0x19 marker -- 0x0971
  0.7478 -- 0x0972
  getTorque() -- 0x097B
  -- branch 41 -- 0x0980
  mph = (speedoV * vToMph) -- 0x098D
  slip -- 0x0990
  if mph < c0_02 then -- evidence jump at 0x0999
    mph = c0_02 -- 0x09A2
  end if
  (fgr * rpmGearConversion) -- 0x09A5
  -- branch evidence (control-flow-evidence)
  -- jump 17 -- 0x09A6
  mph = (carV * vToMph) -- 0x09B3
  ((0.7811 * gr) * c50) -- 0x09B6
  -- branch evidence (control-flow-evidence)
  if not (c0 < c0_02) then -- jump 40 -- 0x09BE
  -- branch evidence (control-flow-evidence)
  if not (gearValue = -1) then -- jump 7 marker 0x44 -- 0x09C9
  -- branch 14 -- 0x09D1
  c0 = c0 -- 0x09D8
  brake -- 0x09DB
  -- branch evidence (control-flow-evidence)
  -- jump 11 -- 0x09DC
  c0 = c0_02 -- 0x09E3
  (gConvSlipA * r) -- 0x09E6
  -- branch evidence (control-flow-evidence)
  if not (gearValue = -1) then -- jump 19 -- 0x09EE
  s = (s - c0) -- 0x09FB
  speedoV -- 0x09FE
  -- branch evidence (control-flow-evidence)
  -- jump 16 -- 0x09FF
  s = (s + c0) -- 0x0A0B
  (speedoV / c2) -- 0x0A0E
  s = (floor((s * c1000)) / c1000) -- 0x0A28
  Math -- 0x0A2B
  -- branch 312 -- 0x0A30
  -- core evidence section: staging distance, pre-stage/stage state, stage light callback
  -- branch evidence (control-flow-evidence)
  if not (staging < (s mod c13)) then -- jump 43 -- 0x0A3C
  -- pass49 evidence: rebuilt-faithful-full.js and block08-islands.js both collapse the lhs at 0x0A46 to a carried stack value before the final mod c13, so no cleaner assignment shape is promoted here.
  s = (((param_c0 > c0) > (mph = VOID)) mod c13) -- 0x0A46
  mph = c0 -- 0x0A4F
  carAccel = c0 -- 0x0A58
  carV = c0 -- 0x0A61
  -- branch evidence (control-flow-evidence)
  -- jump 256 -- 0x0A65
  -- branch evidence (control-flow-evidence)
  if not (s > c5) then -- jump 42 -- 0x0A70
  s = c5 -- 0x0A79
  mph = c0 -- 0x0A82
  carAccel = c0 -- 0x0A8B
  carV = c0 -- 0x0A94
  -- branch evidence (control-flow-evidence)
  -- jump 205 -- 0x0A98
  rpm = 0 -- 0x0A9C
  stockRedLine = 0 -- 0x0AA1
  -- branch evidence (control-flow-evidence)
  if not (s < c0) then -- jump 8 -- 0x0ABA
  rpm = 1 -- 0x0ABF
  (stockRedLine > (s mod c3)) -- 0x0AC2
  -- branch evidence (control-flow-evidence)
  if not (s < c1) then -- jump 8 -- 0x0AD8
  stockRedLine = 1 -- 0x0ADD
  (rpm > (s mod c2)) -- 0x0AE0
  -- branch evidence (control-flow-evidence)
  if not (preStaged <> rpm) then -- jump 11 marker 0x44 -- 0x0AE8
  -- branch evidence (control-flow-evidence)
  if not (staged <> stockRedLine) then -- jump 113 -- 0x0AF3
  preStaged = rpm -- 0x0AFB
  staged = stockRedLine -- 0x0B03
  -- branch evidence (control-flow-evidence)
  -- jump 22016 -- 0x0B0C
  -- 0x19 marker -- 0x0B0F
  -- branch 35 -- 0x0B10
  lightDelayTO = timeout(lightDelayTO).new(5000, symbol(stagedAndReady)) -- 0x0B2C
  stockRedLine -- 0x0B2F
  -- branch evidence (control-flow-evidence)
  -- jump 28 -- 0x0B30
  -- 0x62 marker -- 0x0B3B
  if lightDelayTO <> VOID then -- evidence jump at 0x0B3C
    lightDelayTO.forget() -- 0x0B4B
  end if
  sprite(flashSP).runEngineStageLightCB(TRUE, stockRedLine, rpm) -- 0x0B64
  -- branch evidence (control-flow-evidence)
  -- jump 3239 -- 0x0B65
  -- core evidence section: reaction-time tracking and RT callback dispatch
  -- branch evidence (control-flow-evidence)
  if not (rt = VOID) then -- jump 823 -- 0x0B6F
  -- branch evidence (control-flow-evidence)
  if not (theActualTime > lagThreshold) then -- jump 20 -- 0x0B7B
  badCounterRT = (badCounterRT + theActualTime) -- 0x0B89
  -- branch evidence (control-flow-evidence)
  -- jump 17 -- 0x0B8D
  goodCounterRT = (goodCounterRT + theActualTime) -- 0x0B9A
  -- branch evidence (control-flow-evidence)
  if not (s >= c0) then -- jump 765 -- 0x0BA6
  c1_25 = c0 -- 0x0BAE
  timeStartLine = milliseconds -- 0x0BB9
  _system -- 0x0BBC
  -- branch evidence (control-flow-evidence)
  if not (timeGreen = c0) then -- jump 198 -- 0x0BC5
  rt = (timeStartLine mod c1) -- 0x0BCF
  sprite(flashSP).runEngineSetLightOnCB(p, red) -- 0x0BEA
  -- branch evidence (control-flow-evidence)
  if not (raceType = KOTH) then -- jump 22 -- 0x0BF2
  KRT((rt mod c1), EMPTY) -- 0x0C05
  -- branch evidence (control-flow-evidence)
  -- jump 131 -- 0x0C06
  -- branch evidence (control-flow-evidence)
  if not (raceType = QM) then -- jump 22 -- 0x0C10
  RRT((rt mod c1), EMPTY) -- 0x0C23
  -- branch evidence (control-flow-evidence)
  -- jump 101 -- 0x0C24
  -- pass50 evidence: block08-islands.js carries the contiguous stack tail (raceType = RIVAL) at 0x0C3D directly into the TEAMRIVAL branch window.
  if (raceType = RIVAL) or (raceType = TEAMRIVAL) then -- promoted from 0x0C2E..0x0C4C
    RIVRT((rt mod c1), EMPTY) -- 0x0C4C
  end if
  -- branch evidence (control-flow-evidence)
  -- jump 60 -- 0x0C4D
  -- branch evidence (control-flow-evidence)
  if not (raceType = HTQ) then -- jump 22 -- 0x0C57
  HTQRT((rt mod c1), EMPTY) -- 0x0C6A
  -- branch evidence (control-flow-evidence)
  -- jump 30 -- 0x0C6B
  -- branch evidence (control-flow-evidence)
  if not (raceType = HT) then -- jump 19 -- 0x0C75
  HTRT((rt mod c1), EMPTY) -- 0x0C88
  -- branch evidence (control-flow-evidence)
  -- jump 492 -- 0x0C89
  hp = milliseconds -- 0x0C92
  _system -- 0x0C95
  -- 0x83 prefix marker -- 0x0C9F
  rt = ((hp - timeGreen) / c1000) -- 0x0CA5
  -- branch evidence (control-flow-evidence)
  if not (rt < c0_5) then -- jump 198 -- 0x0CB1
  rt = (rt mod c1) -- 0x0CBB
  -- branch evidence (control-flow-evidence)
  if not (raceType = KOTH) then -- jump 22 -- 0x0CC6
  KRT((rt mod c1), EMPTY) -- 0x0CD9
  -- branch evidence (control-flow-evidence)
  -- jump 131 -- 0x0CDA
  -- branch evidence (control-flow-evidence)
  if not (raceType = QM) then -- jump 22 -- 0x0CE4
  RRT((rt mod c1), EMPTY) -- 0x0CF7
  -- branch evidence (control-flow-evidence)
  -- jump 101 -- 0x0CF8
  -- pass50 evidence: block08-islands.js carries the contiguous stack tail (raceType = RIVAL) at 0x0D11 directly into the TEAMRIVAL branch window.
  if (raceType = RIVAL) or (raceType = TEAMRIVAL) then -- promoted from 0x0D02..0x0D20
    RIVRT((rt mod c1), EMPTY) -- 0x0D20
  end if
  -- branch evidence (control-flow-evidence)
  -- jump 60 -- 0x0D21
  -- branch evidence (control-flow-evidence)
  if not (raceType = HTQ) then -- jump 22 -- 0x0D2B
  HTQRT((rt mod c1), EMPTY) -- 0x0D3E
  -- branch evidence (control-flow-evidence)
  -- jump 30 -- 0x0D3F
  -- branch evidence (control-flow-evidence)
  if not (raceType = HT) then -- jump 19 -- 0x0D49
  HTRT((rt mod c1), EMPTY) -- 0x0D5C
  sprite(flashSP).runEngineSetLightOnCB(p, red) -- 0x0D74
  -- branch evidence (control-flow-evidence)
  -- jump 256 -- 0x0D75
  -- branch evidence (control-flow-evidence)
  if not (badCounterRT > VOID) then -- jump 19 -- 0x0D7D
  c1_25 = lagTimeAddition(badCounterRT) -- 0x0D8D
  -- branch evidence (control-flow-evidence)
  if not (raceType = KOTH) then -- jump 36 -- 0x0D98
  -- 0x83 prefix marker -- 0x0DA8
  KRT((((hp - timeGreen) / c1000) + c1_25), guid) -- 0x0DB9
  -- branch evidence (control-flow-evidence)
  -- jump 187 -- 0x0DBA
  -- branch evidence (control-flow-evidence)
  if not (raceType = QM) then -- jump 36 -- 0x0DC4
  -- 0x83 prefix marker -- 0x0DD4
  RRT((((hp - timeGreen) / c1000) + c1_25), guid) -- 0x0DE5
  -- branch evidence (control-flow-evidence)
  -- jump 143 -- 0x0DE6
  -- pass50 evidence: block08-islands.js carries the contiguous stack tail (raceType = RIVAL) at 0x0DFF directly into the TEAMRIVAL branch window.
  if (raceType = RIVAL) or (raceType = TEAMRIVAL) then -- promoted from 0x0DF0..0x0E1C
    -- 0x83 prefix marker -- 0x0E0B
    RIVRT((((hp - timeGreen) / c1000) + c1_25), guid) -- 0x0E1C
  end if
  -- branch evidence (control-flow-evidence)
  -- jump 88 -- 0x0E1D
  -- branch evidence (control-flow-evidence)
  if not (raceType = HTQ) then -- jump 36 -- 0x0E27
  -- 0x83 prefix marker -- 0x0E37
  HTQRT((((hp - timeGreen) / c1000) + c1_25), guid) -- 0x0E48
  -- branch evidence (control-flow-evidence)
  -- jump 44 -- 0x0E49
  -- branch evidence (control-flow-evidence)
  if not (raceType = HT) then -- jump 33 -- 0x0E53
  -- 0x83 prefix marker -- 0x0E63
  HTRT((((hp - timeGreen) / c1000) + c1_25), guid) -- 0x0E74
  -- 0x83 prefix marker -- 0x0E92
  sprite(flashSP).runEngineSetMyRTCB(Math, (floor(((rt + c1_25) * c1000)) / c1000)) -- 0x0EA3
  -- branch evidence (control-flow-evidence)
  -- jump 46 -- 0x0EA4
  -- branch evidence (control-flow-evidence)
  if not (theActualTime > lagThreshold) then -- jump 20 -- 0x0EAF
  badCounterET = (badCounterET + theActualTime) -- 0x0EBD
  -- branch evidence (control-flow-evidence)
  -- jump 17 -- 0x0EC1
  goodCounterET = (goodCounterET + theActualTime) -- 0x0ECE
  -- core evidence section: finish-line ET capture and damage summary packaging
  -- branch evidence (control-flow-evidence)
  if not (s >= c1320) then -- jump 1704 -- 0x0EDA
  -- branch evidence (control-flow-evidence)
  if not (et = VOID) then -- jump 1690 -- 0x0EE5
  hp = milliseconds -- 0x0EEF
  _system -- 0x0EF2
  -- 0x83 prefix marker -- 0x0EFC
  et = ((hp - timeStartLine) / c1000) -- 0x0F02
  ts = (floor((mph * c100)) / c100) -- 0x0F1F
  Math -- 0x0F22
  c10000 = (floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100) -- 0x0F45
  Math -- 0x0F48
  c2 = (floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100) -- 0x0F6B
  Math -- 0x0F6E
  sprite = (floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100) -- 0x0F91
  Math -- 0x0F94
  flashSP = (floor(((headGasketDamage / partBreakPoint) * c10000)) / c100) -- 0x0FB2
  Math -- 0x0FB5
  runEngineNOSCB = (floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100) -- 0x0FD3
  Math -- 0x0FD6
  nitrousTankSize = (floor((oilDamage * c10000)) / c100) -- 0x0FEF
  Math -- 0x0FF2
  c100 = (floor((oilFilterDamage * c10000)) / c100) -- 0x100B
  Math -- 0x100E
  revLimiter = (floor((coolantDamage * c10000)) / c100) -- 0x1027
  Math -- 0x102A
  c200 = (floor((nitrousRemaining * c100)) / c100) -- 0x1043
  Math -- 0x1046
  tqFlyFactor = (floor((raceGas * c100)) / c100) -- 0x105F
  Math -- 0x1062
  if c10000 > c100 then -- evidence jump at 0x106A
    c10000 = c100 -- 0x1072
  end if
  if c2 > c100 then -- evidence jump at 0x107D
    c2 = c100 -- 0x1085
  end if
  if sprite > c100 then -- evidence jump at 0x1090
    sprite = c100 -- 0x1098
  end if
  if flashSP > c100 then -- evidence jump at 0x10A3
    flashSP = c100 -- 0x10AB
  end if
  if runEngineNOSCB > c100 then -- evidence jump at 0x10B6
    runEngineNOSCB = c100 -- 0x10BE
  end if
  if nitrousTankSize > c100 then -- evidence jump at 0x10C9
    nitrousTankSize = c100 -- 0x10D1
  end if
  if c100 > c100 then -- evidence jump at 0x10DC
    c100 = c100 -- 0x10E4
  end if
  if revLimiter > c100 then -- evidence jump at 0x10EF
    revLimiter = c100 -- 0x10F7
  end if
  if c200 > c100 then -- evidence jump at 0x1102
    c200 = c100 -- 0x110A
  end if
  if tqFlyFactor > c100 then -- evidence jump at 0x1115
    tqFlyFactor = c100 -- 0x111D
  end if
  -- core evidence section: race-type DONE callback dispatch
  -- branch evidence (control-flow-evidence)
  if not (raceType = KOTH) then -- jump 136 -- 0x1128
  -- pass45 byte-window: block 8 0x1121..0x1138 raw=41 35 00 6F 3D 00 70 12 07 00 88 41 35 00 65 41 35 00 01 22 13 07 00 23
  -- pass45 evidence: visible rhs is rt mod c1; lhs source is outside the local stack window, so this guard is not promoted.
  -- pass65 tightening: 0x1135 lives inside block08 island 383 (0x112C..0x1139), which still records the lhs as /*stack*/. pass-block14012-table proves payload id 145 = KDONE, but that symbol does not appear until the separate 0x1159..0x115C island 385 stack tail.
  -- TODO exact stack source (needs-stack-context)
  if not (implicit_lhs_0x1135 <> (rt mod c1)) then -- jump 35 -- 0x1135
  -- 0x83 call marker -- 0x1154
  INT(s, carV, carAccel, _system, (milliseconds - timeAnchor)) -- 0x1158
  -- 0x83 prefix marker -- 0x1165
  KDONE(((hp - timeStartLine) / c1000), ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps) -- 0x11AD
  -- branch evidence (control-flow-evidence)
  -- jump 978 -- 0x11AE
  -- branch evidence (control-flow-evidence)
  if not (raceType = QM) then -- jump 124 -- 0x11B8
  -- pass45 byte-window: block 8 0x11B1..0x11C8 raw=41 35 00 6F 3D 00 73 12 07 00 7C 41 35 00 65 41 35 00 01 22 13 07 00 17
  -- pass45 evidence: visible rhs is rt mod c1; island 383 still records the lhs as /*stack*/, and island 385 carries KDONE only after the 0x115C branch target, so this guard is not promoted.
  -- pass45 blocker: rebuilt-faithful-full.js carries KDONE into this guard, but block08-islands.js still records the lhs as /*stack*/ at 0x11C5.
  -- pass65 tightening: 0x11C5 lives inside block08 island 390 (0x11BC..0x11C9), which still records the lhs as /*stack*/. pass-block14012-table proves payload id 145 = KDONE, and annotated-disasm loads op_3B arg=145 at 0x1159, but that load belongs to the earlier 0x1159..0x115C island 385 stack tail, not to island 390.
  -- TODO exact stack source (needs-stack-context)
  if not (implicit_lhs_0x11C5 <> (rt mod c1)) then -- jump 23 -- 0x11C5
  RINT(s, carV, carAccel) -- 0x11DC
  -- 0x83 prefix marker -- 0x11E9
  RDONE(((hp - timeStartLine) / c1000), ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps) -- 0x1231
  -- branch evidence (control-flow-evidence)
  -- jump 846 -- 0x1232
  -- branch evidence (control-flow-evidence)
  if not (raceType = RIVAL) then -- jump 11 marker 0x44 -- 0x123C
  -- branch evidence (control-flow-evidence)
  if not (raceType = TEAMRIVAL) then -- jump 190 -- 0x1247
  -- pass45 byte-window: block 8 0x1240..0x1257 raw=41 35 00 6F 3D 00 76 12 07 00 BE 41 35 00 65 41 35 00 01 22 13 07 00 23
  -- pass45 evidence: visible rhs is rt mod c1; lhs source is outside the local stack window, so this guard is not promoted.
  -- pass49 evidence: block08-islands.js carries the contiguous stack tail (raceType = RIVAL) at 0x124B directly into this branch window.
  if not ((raceType = RIVAL) <> (rt mod c1)) then -- jump 35 -- 0x1254
  -- 0x83 call marker -- 0x1273
  INT(s, carV, carAccel, _system, (milliseconds - timeAnchor)) -- 0x1277
  gr = (floor((((beforePistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100) -- 0x129A
  Math -- 0x129D
  thePD = c10000 -- 0x12A2
  theBPD = gr -- 0x12AA
  -- 0x83 prefix marker -- 0x12BA
  RIVDONE(((hp - timeStartLine) / c1000), ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps) -- 0x1302
  -- branch evidence (control-flow-evidence)
  -- jump 637 -- 0x1303
  -- branch evidence (control-flow-evidence)
  if not (raceType = CT) then -- jump 306 -- 0x130D
  sprite(flashSP).ctFinishCB(et, ts) -- 0x132A
  -- 0x83 prefix marker -- 0x133D
  -- 0x83 prefix marker -- 0x1343
  ((CheckProcesses + decrypt(_global(cp))) + "&cw=")(((CheckWindows + decrypt(_global(cw))) + "&cwc="), (CheckWindowsClass + decrypt(_global(cwc)))) -- 0x143C
  -- branch evidence (control-flow-evidence)
  -- jump 323 -- 0x143D
  -- branch evidence (control-flow-evidence)
  if not (raceType = CTQ) then -- jump 32 -- 0x1447
  sprite(flashSP).ctFinishCB(et, ts) -- 0x1464
  -- branch evidence (control-flow-evidence)
  -- jump 283 -- 0x1465
  -- branch evidence (control-flow-evidence)
  if not (raceType = P) then -- jump 32 -- 0x146F
  sprite(flashSP).practiceFinishCB(et, ts) -- 0x148C
  -- branch evidence (control-flow-evidence)
  -- jump 243 -- 0x148D
  -- branch evidence (control-flow-evidence)
  if not (raceType = HTQ) then -- jump 91 -- 0x1497
  -- 0x83 prefix marker -- 0x14A7
  HTQD(((hp - timeStartLine) / c1000), ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps) -- 0x14EF
  -- branch evidence (control-flow-evidence)
  -- jump 144 -- 0x14F0
  -- branch evidence (control-flow-evidence)
  if not (raceType = HT) then -- jump 133 -- 0x14FA
  -- branch evidence (control-flow-evidence)
  if not ((((((((((((((((((((((((((((((((((((((((("et=" + ((hp - timeStartLine) / c1000)) + "&rt=") + rt) + "&ts=") + ts) + "&pd=") + c10000) + "&vd=") + sprite) + "&rd=") + c2) + "&hd=") + flashSP) + "&bd=") + runEngineNOSCB) + "&od=") + nitrousTankSize) + "&fd=") + c100) + "&cd=") + revLimiter) + "&nr=") + c200) + "&rg=") + tqFlyFactor) + "&m=") + createMd5Hash(1)) + "&gr=") + goodCounterRT) + "&br=") + badCounterRT) + "&ge=") + goodCounterET) + "&be=") + badCounterET) + "&ce=") + isCheatEngineRunning()) + "&f=") + avgFps) + "&cp=") <> (rt mod c1)) then -- jump 35 -- 0x1507
  -- 0x83 call marker -- 0x1526
  INT(s, carV, carAccel, _system, (milliseconds - timeAnchor)) -- 0x152A
  -- 0x83 prefix marker -- 0x1537
  HTD(((hp - timeStartLine) / c1000), ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps) -- 0x157F
  -- branch evidence (control-flow-evidence)
  -- jump 652 -- 0x1580
  -- 0x08 marker -- 0x158E
  -- branch 632 -- 0x1594
  isMidMd5sent = 1 -- 0x1599
  ((s >= c760) and isMidMd5sent) -- 0x159C
  -- branch evidence (control-flow-evidence)
  if not (raceType = KOTH) then -- jump 55 marker 0x44 -- 0x15A4
  -- branch evidence (control-flow-evidence)
  if not (raceType = QM) then -- jump 44 marker 0x44 -- 0x15AF
  -- branch evidence (control-flow-evidence)
  if not (raceType = RIVAL) then -- jump 33 marker 0x44 -- 0x15BA
  -- branch evidence (control-flow-evidence)
  if not (raceType = TEAMRIVAL) then -- jump 22 marker 0x44 -- 0x15C5
  -- branch evidence (control-flow-evidence)
  if not (raceType = HTQ) then -- jump 11 marker 0x44 -- 0x15D0
  -- branch evidence (control-flow-evidence)
  if not (raceType = HT) then -- jump 560 -- 0x15DB
  c10000 = (floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100) -- 0x1601
  Math -- 0x1604
  c2 = (floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100) -- 0x1627
  Math -- 0x162A
  sprite = (floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100) -- 0x164D
  Math -- 0x1650
  flashSP = (floor(((headGasketDamage / partBreakPoint) * c10000)) / c100) -- 0x166E
  Math -- 0x1671
  runEngineNOSCB = (floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100) -- 0x168F
  Math -- 0x1692
  nitrousTankSize = (floor((oilDamage * c10000)) / c100) -- 0x16AB
  Math -- 0x16AE
  c100 = (floor((oilFilterDamage * c10000)) / c100) -- 0x16C7
  Math -- 0x16CA
  revLimiter = (floor((coolantDamage * c10000)) / c100) -- 0x16E3
  Math -- 0x16E6
  c200 = (floor((nitrousRemaining * c100)) / c100) -- 0x16FF
  Math -- 0x1702
  tqFlyFactor = (floor((raceGas * c100)) / c100) -- 0x171B
  Math -- 0x171E
  if c10000 > c100 then -- evidence jump at 0x1726
    c10000 = c100 -- 0x172E
  end if
  ctst -- 0x1731
  if c2 > c100 then -- evidence jump at 0x1739
    c2 = c100 -- 0x1741
  end if
  executeCall -- 0x1744
  if sprite > c100 then -- evidence jump at 0x174C
    sprite = c100 -- 0x1754
  end if
  if flashSP > c100 then -- evidence jump at 0x175F
    flashSP = c100 -- 0x1767
  end if
  if runEngineNOSCB > c100 then -- evidence jump at 0x1772
    runEngineNOSCB = c100 -- 0x177A
  end if
  if nitrousTankSize > c100 then -- evidence jump at 0x1785
    nitrousTankSize = c100 -- 0x178D
  end if
  if c100 > c100 then -- evidence jump at 0x1798
    c100 = c100 -- 0x17A0
  end if
  if revLimiter > c100 then -- evidence jump at 0x17AB
    revLimiter = c100 -- 0x17B3
  end if
  if c200 > c100 then -- evidence jump at 0x17BE
    c200 = c100 -- 0x17C6
  end if
  if tqFlyFactor > c100 then -- evidence jump at 0x17D1
    tqFlyFactor = c100 -- 0x17D9
  end if
  M(c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1)) -- 0x180B
  -- core evidence section: damage risk, durability loss, broken-part counters, engine callback
  fgr = (boostPsi - stockBoost) -- 0x1815
  -- branch evidence (control-flow-evidence)
  if not (fgr < VOID) then -- jump 8 -- 0x181D
  fgr = VOID -- 0x1822
  dangerLevel = (dangerLevel + (fgr + (pistonCompressionLevel * c7))) -- 0x1839
  -- branch evidence (control-flow-evidence)
  if not (pistonCompressionLevel < c0) then -- jump 25 -- 0x1845
  engineDamageRisk = (engineDamageRisk + (pistonCompressionLevel * c1_8)) -- 0x1858
  -- branch evidence (control-flow-evidence)
  -- jump 27 -- 0x185C
  engineDamageRisk = (engineDamageRisk + ((boostPsi * pistonCompressionLevel) * c0_5)) -- 0x1873
  -- branch evidence (control-flow-evidence)
  if not (engineDamageRisk < c0) then -- jump 9 -- 0x187F
  engineDamageRisk = VOID -- 0x1885
  -- branch evidence (control-flow-evidence)
  if not (rpm > (stockRedLine * c1_15)) then -- jump 31 -- 0x1896
  dangerLevel = (dangerLevel * c2) -- 0x18A4
  engineDamageRisk = (engineDamageRisk * c80) -- 0x18B2
  rpmGearConversion = ((timeFromLastFrame / c1_8) - avgDurability) -- 0x18C3
  -- branch evidence (control-flow-evidence)
  if not (rpmGearConversion > c0) then -- jump 16 -- 0x18CE
  dangerLevel = (dangerLevel + rpmGearConversion) -- 0x18DB
  -- branch evidence (control-flow-evidence)
  if not (oilDurability > c0) then -- jump 93 -- 0x18E7
  -- 0x83 prefix marker -- 0x18F9
  oilDamage = ((rpm / stockRedLine) + (0.7489 / c10000)) -- 0x1910
  ((c100 - oilDurability) / c100) -- 0x1913
  if oilDamage >= c100 then -- evidence jump at 0x191C
    oilDamage = c100 -- 0x1925
  end if
  oilDamage -- 0x1928
  -- branch evidence (control-flow-evidence)
  -- jump 28 -- 0x1929
  -- 0x83 prefix marker -- 0x193A
  dangerLevel = (dangerLevel * ((c100 - oilDurability) / c100)) -- 0x1941
  beforeDangerLevel = dangerLevel -- 0x194A
  -- branch evidence (control-flow-evidence)
  if not (radiatorDurability > c0) then -- jump 28 -- 0x1956
  -- 0x83 prefix marker -- 0x1968
  dangerLevel = (dangerLevel * ((c100 - radiatorDurability) / c100)) -- 0x196F
  -- branch evidence (control-flow-evidence)
  if not (oilFilterDurability > c0) then -- jump 93 -- 0x197B
  -- 0x83 prefix marker -- 0x198D
  oilFilterDamage = ((rpm / stockRedLine) + (0.7489 / c10000)) -- 0x19A4
  ((c100 - oilFilterDurability) / c100) -- 0x19A7
  if oilFilterDamage >= c100 then -- evidence jump at 0x19B0
    oilFilterDamage = c100 -- 0x19B9
  end if
  oilFilterDamage -- 0x19BC
  -- branch evidence (control-flow-evidence)
  -- jump 28 -- 0x19BD
  -- 0x83 prefix marker -- 0x19CE
  dangerLevel = (dangerLevel * ((c100 - oilFilterDurability) / c100)) -- 0x19D5
  -- branch evidence (control-flow-evidence)
  if not (coolantDurability > c0) then -- jump 93 -- 0x19E1
  -- 0x83 prefix marker -- 0x19F3
  coolantDamage = ((rpm / stockRedLine) + (0.7489 / c10000)) -- 0x1A0A
  ((c100 - coolantDurability) / c100) -- 0x1A0D
  if coolantDamage >= c100 then -- evidence jump at 0x1A16
    coolantDamage = c100 -- 0x1A1F
  end if
  coolantDamage -- 0x1A22
  -- branch evidence (control-flow-evidence)
  -- jump 28 -- 0x1A23
  -- 0x83 prefix marker -- 0x1A34
  dangerLevel = (dangerLevel * ((c100 - coolantDurability) / c100)) -- 0x1A3B
  r -- 0x1A42
  negTq -- 0x1A46
  -- branch evidence (control-flow-evidence)
  if not (pistonDurability < dangerLevel) then -- jump 19 -- 0x1A4F
  r = (dangerLevel * c0_95) -- 0x1A5C
  -- branch evidence (control-flow-evidence)
  -- jump 16 -- 0x1A60
  r = (pistonDurability * c0_95) -- 0x1A6C
  -- 0x83 prefix marker -- 0x1A78
  negTq = ((dangerLevel - r) / c10000) -- 0x1A7E
  c9 -- 0x1A85
  -- branch evidence (control-flow-evidence)
  if not (pistonDurability < beforeDangerLevel) then -- jump 19 -- 0x1A8E
  c9 = (beforeDangerLevel * c0_95) -- 0x1A9B
  -- branch evidence (control-flow-evidence)
  -- jump 16 -- 0x1A9F
  c9 = (pistonDurability * c0_95) -- 0x1AAB
  -- 0x83 prefix marker -- 0x1AB7
  c299 = ((beforeDangerLevel - c9) / c10000) -- 0x1ABD
  if c299 < c0 then -- evidence jump at 0x1AC8
    c299 = c0 -- 0x1AD0
  end if
  if negTq < c0 then -- evidence jump at 0x1ADB
    negTq = c0 -- 0x1AE3
  end if
  pistonDamage = (pistonDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05))) -- 0x1B03
  beforePistonDamage = (beforePistonDamage + (((engineDamageRisk / c100) * c299) + (c299 * c0_05))) -- 0x1B23
  pistonBroken = floor((pistonDamage / partBreakPoint)) -- 0x1B3B
  Math -- 0x1B3E
  if pistonBroken > cylinderNumber then -- evidence jump at 0x1B47
    pistonBroken = cylinderNumber -- 0x1B50
  end if
  -- branch evidence (control-flow-evidence)
  if not (rodDurability < dangerLevel) then -- jump 19 -- 0x1B5C
  r = (dangerLevel * c0_95) -- 0x1B69
  -- branch evidence (control-flow-evidence)
  -- jump 16 -- 0x1B6D
  r = (rodDurability * c0_95) -- 0x1B79
  -- 0x83 prefix marker -- 0x1B85
  negTq = ((dangerLevel - r) / c10000) -- 0x1B8B
  if negTq < c0 then -- evidence jump at 0x1B96
    negTq = c0 -- 0x1B9E
  end if
  rodDamage = (rodDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05))) -- 0x1BBE
  rodBroken = floor((rodDamage / partBreakPoint)) -- 0x1BD6
  Math -- 0x1BD9
  if rodBroken > cylinderNumber then -- evidence jump at 0x1BE2
    rodBroken = cylinderNumber -- 0x1BEB
  end if
  -- branch evidence (control-flow-evidence)
  if not (valveDurability < dangerLevel) then -- jump 19 -- 0x1BF7
  r = (dangerLevel * c0_95) -- 0x1C04
  -- branch evidence (control-flow-evidence)
  -- jump 16 -- 0x1C08
  r = (valveDurability * c0_95) -- 0x1C14
  -- 0x83 prefix marker -- 0x1C20
  negTq = ((dangerLevel - r) / c10000) -- 0x1C26
  if negTq < c0 then -- evidence jump at 0x1C31
    negTq = c0 -- 0x1C39
  end if
  valveDamage = (valveDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05))) -- 0x1C59
  valveBroken = floor((valveDamage / partBreakPoint)) -- 0x1C71
  Math -- 0x1C74
  if valveBroken > valveNumber then -- evidence jump at 0x1C7D
    valveBroken = valveNumber -- 0x1C86
  end if
  -- branch evidence (control-flow-evidence)
  if not (engineBlockDurability < dangerLevel) then -- jump 19 -- 0x1C92
  r = (dangerLevel * c0_95) -- 0x1C9F
  -- branch evidence (control-flow-evidence)
  -- jump 16 -- 0x1CA3
  r = (engineBlockDurability * c0_95) -- 0x1CAF
  -- 0x83 prefix marker -- 0x1CBB
  negTq = ((dangerLevel - r) / c10000) -- 0x1CC1
  if negTq < c0 then -- evidence jump at 0x1CCC
    negTq = c0 -- 0x1CD4
  end if
  engineBlockDamage = (engineBlockDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05))) -- 0x1CF4
  engineBlockBroken = floor((engineBlockDamage / partBreakPoint)) -- 0x1D0C
  Math -- 0x1D0F
  if engineBlockBroken > c1 then -- evidence jump at 0x1D18
    engineBlockBroken = c1 -- 0x1D21
  end if
  -- branch evidence (control-flow-evidence)
  if not (headGasketDurability < dangerLevel) then -- jump 19 -- 0x1D2D
  r = (dangerLevel * c0_95) -- 0x1D3A
  -- branch evidence (control-flow-evidence)
  -- jump 16 -- 0x1D3E
  r = (headGasketDurability * c0_95) -- 0x1D4A
  -- 0x83 prefix marker -- 0x1D56
  negTq = ((dangerLevel - r) / c10000) -- 0x1D5C
  if negTq < c0 then -- evidence jump at 0x1D67
    negTq = c0 -- 0x1D6F
  end if
  headGasketDamage = (headGasketDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05))) -- 0x1D8F
  headGasketBroken = floor((headGasketDamage / partBreakPoint)) -- 0x1DA7
  Math -- 0x1DAA
  if headGasketBroken > c1 then -- evidence jump at 0x1DB3
    headGasketBroken = c1 -- 0x1DBC
  end if
  engineDamage = ((((((pistonBroken / cylinderNumber) * c0_4) + ((valveBroken / valveNumber) * c0_2)) + ((rodBroken / cylinderNumber) * c0_1)) + (headGasketBroken * c0_1)) + (engineBlockBroken * c0_4)) -- 0x1E01
  if engineDamage > c0_65 then -- evidence jump at 0x1E0D
    engineDamage = c0_65 -- 0x1E16
  end if
  -- branch evidence (control-flow-evidence)
  if not (engineDamage > c0) then -- jump 27 -- 0x1E2A
  isEngineLightOn = 1 -- 0x1E30
  (engineDamage and isEngineLightOn) -- 0x1E33
  sprite(flashSP).runEngineDamageLightCB() -- 0x1E45
  -- branch evidence (control-flow-evidence)
  if not (timeAnchor > VOID) then -- jump 52 -- 0x1E4B
  -- 0x83 call marker -- 0x1E78
  sprite(flashSP).runEngineCB(rpm, mph, s, boostPsi, _system, (milliseconds - timeAnchor)) -- 0x1E7C
  -- branch evidence (control-flow-evidence)
  -- jump 38 -- 0x1E7D
  sprite(flashSP).runEngineCB(rpm, mph, s, boostPsi, VOID) -- 0x1EA2
end

on RaceEngine_calculateExtraHpi
  -- source block 9: power/boost/air-fuel calculation
  -- offset=31980 codeLen=710
  -- names: rpm, pb, c1, stockBoost, c0, c1_7, c0_7, boostSetting, c7_5, c100, boostRange, boostLag, boostPsi, compressionPowerDelta, pistonCompressionLevel, c4, c5, c2, maxPsi, turboFlow, overallAirFlowLimit, airFlowLimit, chipSetting, fuelFlowLimit, dangerLevel, airFuelMeter, airFuelDelta, Math, abs, engineDamageRisk, c0_09, c0_07, c2_5, c10, c0_1, ECUtune, systemPower, airhpi, boostCreatedPower
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- core evidence section: boost/power helper normalization
  rpm = (rpm / pb) -- 0x001D
  if rpm > c1 then -- evidence jump at 0x0028
    rpm = c1 -- 0x0030
  end if
  pb -- 0x0037
  -- core evidence section: boost curve and boost PSI calculation
  -- branch evidence (control-flow-evidence)
  if not (stockBoost > c0) then -- jump 45 -- 0x0040
  -- 0x83 prefix marker -- 0x0051
  pb = ((0.7489 * c7_5) / c100) -- 0x0067
  (boostSetting - stockBoost) -- 0x006A
  -- branch evidence (control-flow-evidence)
  -- jump 31 -- 0x006B
  -- 0x83 prefix marker -- 0x007B
  pb = ((((rpm * boostRange) - boostLag) * c7_5) / c100) -- 0x0086
  ((rpm * c1_7) - c0_7) -- 0x0089
  -- branch evidence (control-flow-evidence)
  if not (pb < VOID) then -- jump 8 -- 0x008E
  pb = VOID -- 0x0093
  boostPsi = ((rpm * boostRange) - boostLag) -- 0x00A5
  if boostPsi < c0 then -- evidence jump at 0x00B1
    boostPsi = c0 -- 0x00BA
  end if
  compressionPowerDelta = c0 -- 0x00C3
  -- branch evidence (control-flow-evidence)
  if not (pistonCompressionLevel < c0) then -- jump 61 -- 0x00CF
  -- 0x83 prefix marker -- 0x00DE
  compressionPowerDelta = (((boostPsi * c5) mod 0.7299) / c100) -- 0x00F1
  (compressionPowerDelta * (pistonCompressionLevel mod c4)) -- 0x00F4
  if compressionPowerDelta > c0 then -- evidence jump at 0x00FD
    compressionPowerDelta = c0 -- 0x0106
  end if
  -- branch evidence (control-flow-evidence)
  -- jump 40 -- 0x010A
  -- branch evidence (control-flow-evidence)
  if not (pistonCompressionLevel > c0) then -- jump 28 -- 0x0115
  -- 0x83 prefix marker -- 0x0128
  compressionPowerDelta = (((pistonCompressionLevel * c2) - boostPsi) / c100) -- 0x012E
  c1 = c0 -- 0x0136
  -- branch evidence (control-flow-evidence)
  if not (maxPsi > c0) then -- jump 24 -- 0x0142
  c1 = ((boostPsi / maxPsi) * turboFlow) -- 0x0154
  -- branch evidence (control-flow-evidence)
  -- jump 11 -- 0x0158
  c1 = turboFlow -- 0x015F
  -- branch evidence (control-flow-evidence)
  if not (overallAirFlowLimit > c1) then -- jump 26 -- 0x016A
  stockBoost = (overallAirFlowLimit - c1) -- 0x0176
  airFlowLimit = c1 -- 0x017E
  -- branch evidence (control-flow-evidence)
  -- jump 24 -- 0x0182
  stockBoost = (c1 - overallAirFlowLimit) -- 0x018D
  airFlowLimit = overallAirFlowLimit -- 0x0196
  c0 = (airFlowLimit + chipSetting) -- 0x01A3
  if c0 > fuelFlowLimit then -- evidence jump at 0x01AE
    c0 = fuelFlowLimit -- 0x01B6
  end if
  dangerLevel = airFlowLimit -- 0x01BF
  airFuelMeter = (c0 - airFlowLimit) -- 0x01CC
  airFuelDelta = abs(airFuelMeter) -- 0x01DF
  Math -- 0x01E2
  if airFuelDelta < c1 then -- evidence jump at 0x01EB
    airFuelDelta = c1 -- 0x01F4
  end if
  c1_7 -- 0x01FB
  -- branch evidence (control-flow-evidence)
  if not (airFlowLimit > c0) then -- jump 91 -- 0x0203
  -- branch evidence (control-flow-evidence)
  if not (airFuelDelta > c5) then -- jump 25 -- 0x020F
  engineDamageRisk = ((dangerLevel * airFuelDelta) * c0_09) -- 0x0222
  -- branch evidence (control-flow-evidence)
  -- jump 22 -- 0x0226
  engineDamageRisk = ((dangerLevel * airFuelDelta) * c0_07) -- 0x0238
  c1_7 = (airFuelDelta * c2_5) -- 0x0245
  if c1_7 > c10 then -- evidence jump at 0x0250
    c1_7 = c10 -- 0x0258
  end if
  -- branch evidence (control-flow-evidence)
  -- jump 54 -- 0x025C
  engineDamageRisk = ((dangerLevel / airFuelDelta) / c100) -- 0x026E
  c1_7 = (c1 / airFuelDelta) -- 0x027B
  if c1_7 < c0_1 then -- evidence jump at 0x0286
    c1_7 = c0 -- 0x028E
  end if
  c0_7 = (stockBoost / c2) -- 0x029A
  boostSetting = (airFlowLimit - c0_7) -- 0x02A6
  ECUtune = (c1_7 / c100) -- 0x02B3
  systemPower = (airhpi - (c0_7 / c100)) -- 0x02C5
  boostCreatedPower = ((pb * boostSetting) / c100) -- 0x02D6
end

on RaceEngine_lookupTorque
  -- source block 10: torque curve lookup
  -- offset=34244 codeLen=110
  -- names: rpm, undefined, idleRPM, c10000, posTq, tqArray, parseInt, c100, negTq, c200
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass31 structured from offsets 0x001B, 0x0024, 0x0028, 0x0033, 0x003C, 0x0040, 0x004B, 0x0054, 0x006E
  if rpm = VOID then
    rpm = idleRPM -- 0x0024
  else if rpm < idleRPM then
    rpm = idleRPM -- 0x003C
  else if rpm > c10000 then
    rpm = c10000 -- 0x0054
  end if
  posTq = tqArray[parseInt((rpm / c100))] -- 0x006E
  -- 0x08 marker / raw tail stack still unresolved: [(posTq + c200), 0.8758]; helper layers suggest negTq, but strict block surfaces still do not expose the assignment target here -- 0x0080
  0.8758 -- 0x0081
end

on RaceEngine_initBrakeTune
  -- source block 11: small init helper
  -- offset=34828 codeLen=20
  -- names: init, btd
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  init(param_init) -- 0x001F
  btd = param_btd -- 0x0024
end

on RaceEngine_gearDown
  -- source block 12: downshift/gear value update
  -- offset=35024 codeLen=198
  -- names: gearValue, grs, c0, gr, mph, carAccel, carV, slip, sprite, flashSP, runEngineTractionLightCB, engineV, speedoV, hp, runEngineGearUpdateCB
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  gearValue -- 0x0017
  -- branch evidence (control-flow-evidence)
  if not (gearValue < carV) then -- jump 18 -- 0x001F
  gearValue = grs[(gearValue + TRUE)] -- 0x002E
  -- branch evidence (control-flow-evidence)
  if not (gearValue > c0) then -- jump 160 -- 0x0039
  EMPTY -- 0x0041
  gr = gearValue -- 0x0046
  -- branch evidence (control-flow-evidence)
  if not (gearValue = c0) then -- jump 95 -- 0x0052
  mph = c0 -- 0x005B
  carAccel = c0 -- 0x0064
  carV = c0 -- 0x006D
  -- branch 40 -- 0x0075
  slip = 0 -- 0x007A
  slip -- 0x007D
  sprite(flashSP).runEngineTractionLightCB(0) -- 0x0090
  engineV = speedoV -- 0x0096
  -- branch evidence (control-flow-evidence)
  -- jump 12 -- 0x009A
  engineV = carV -- 0x00A2
  hp = c0 -- 0x00AB
  -- branch evidence (control-flow-evidence)
  -- jump 21 -- 0x00AF
  -- branch evidence (control-flow-evidence)
  if not (gearValue = TRUE) then -- jump 12 -- 0x00B7
  speedoV = engineV -- 0x00C0
  sprite(flashSP).runEngineGearUpdateCB(gearValue) -- 0x00D9
end

on RaceEngine_gearUp
  -- source block 13: upshift/gear value update
  -- offset=35848 codeLen=219
  -- names: gearValue, staging, c0, gr, grs, mph, carAccel, carV, speedoV, engineV, slip, sprite, flashSP, runEngineTractionLightCB, hp, runEngineGearUpdateCB
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- branch evidence (control-flow-evidence)
  if not (gearValue > -1) then -- jump 7 marker 0x45 -- 0x001B
  -- branch evidence (control-flow-evidence)
  if not (gearValue > c0) then -- jump 8 marker 0x45 -- 0x002F
  -- 0xB6 marker -- 0x003B
  -- 0x33 marker -- 0x003D
  0.1792 -- 0x0040
  -- branch evidence (control-flow-evidence)
  if not (gearValue = -1) then -- jump 53 -- 0x0048
  gr = grs[VOID] -- 0x0053
  ((staging <= 1.7408) and staging) -- 0x0056
  mph = c0 -- 0x005C
  carAccel = c0 -- 0x0065
  carV = c0 -- 0x006E
  speedoV = engineV -- 0x0077
  -- branch evidence (control-flow-evidence)
  -- jump 94 -- 0x007B
  -- branch evidence (control-flow-evidence)
  if not (gearValue = c0) then -- jump 68 -- 0x0086
  -- branch 40 -- 0x008E
  slip = 0 -- 0x0093
  slip -- 0x0096
  sprite(flashSP).runEngineTractionLightCB(0) -- 0x00A9
  engineV = speedoV -- 0x00AF
  -- branch evidence (control-flow-evidence)
  -- jump 12 -- 0x00B3
  engineV = carV -- 0x00BB
  hp = c0 -- 0x00C4
  -- branch evidence (control-flow-evidence)
  -- jump 17 -- 0x00C8
  gr = grs[gearValue] -- 0x00D5
  sprite(flashSP).runEngineGearUpdateCB(gearValue) -- 0x00EE
end

on RaceEngine_setBrake
  -- source block 14: brake input setter
  -- offset=36764 codeLen=23
  -- names: brake
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- branch evidence (control-flow-evidence)
  if not (param_brake = TRUE) then -- jump 12 -- 0x0018
  brake = 1 -- 0x001E
  -- branch evidence (control-flow-evidence)
  -- jump 9 -- 0x0022
  brake = 0 -- 0x0027
end

on RaceEngine_setClutchFeather
  -- source block 15: clutch feather clamp/setter
  -- offset=36964 codeLen=54
  -- names: c0_05, clutchFeather, c0_2
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass29 structured from offsets 0x001B, 0x0024, 0x0028, 0x0032, 0x003B, 0x003F, 0x0046
  if param_c0_05 < c0_05 then
    clutchFeather = c0_05 -- 0x0024
  else if param_c0_05 > c0_2 then
    clutchFeather = c0_2 -- 0x003B
  else
    clutchFeather = param_c0_05 -- 0x0046
  end if
end

on RaceEngine_createMd5Hash
  -- source block 16: race start/hash/light setup
  -- offset=37252 codeLen=539
  -- names: timeAnchor, c0, goodCounterRT, badCounterRT, goodCounterET, badCounterET, lightDelayTO, object, forget, staging, gearValue, gearUp, raceType, KOTH, KREADY, createMd5Hash, QM, RREADY, RIVAL, TEAMRIVAL, RIVREADY, CTQ, P, startLightTimer, p, CT, btd, o, lightTO1, stagingLightPos1, timeout, c1000, c2, symbol, runLight, b, lightTO2, stagingLightPos2, HTQ, HTQREADY
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass34 structured race-type dispatch from offsets 0x0076, 0x0096, 0x00C1, 0x00EC, 0x0107, 0x01F9, 0x0219
  timeAnchor = c0 -- 0x0019
  goodCounterRT = VOID -- 0x001F
  badCounterRT = VOID -- 0x0025
  goodCounterET = VOID -- 0x002B
  badCounterET = VOID -- 0x0031
  if lightDelayTO <> VOID then -- evidence jump at 0x003D
    lightDelayTO.forget() -- 0x004D
  end if
  staging = 0 -- 0x0057
  staging -- 0x005A
  if gearValue = -1 then -- evidence jump at 0x0062
    gearUp() -- 0x006E
  end if
  case raceType of
    KOTH:
      KREADY(VOID, createMd5Hash(0)) -- 0x008B
    QM:
      RREADY(VOID, createMd5Hash(0)) -- 0x00AB
    RIVAL, TEAMRIVAL:
      RIVREADY(VOID, createMd5Hash(0)) -- 0x00D6
    CTQ, P:
      startLightTimer(p, VOID) -- 0x00FC
    CT:
      if btd < c0 then -- evidence jump at 0x0113
        startLightTimer(o, VOID) -- 0x0123
        if lightTO1 <> VOID then -- evidence jump at 0x012C
          lightTO1.forget() -- 0x013C
        end if
        stagingLightPos1 = c0 -- 0x0142
        VOID -- 0x0145
        lightTO1 = timeout(lightTO1).new((((p mod btd) * c1000) + (c1000 / c2)), symbol(runLight)) -- 0x0170
        VOID -- 0x0173
        -- pass62 blocker: rebuilt-faithful-full.js is the only local surface that breaks this CT handoff into expr lightTO1 at 0x0145 and expr timeout at 0x0173. The stricter blocks.js/blocks.lingo surface never independently reaches those residue rows; it preserves only the row packet `null`, `airFlowLimit = c1`, `?`, `// goto @368`, `// [0x0170] op_18`, `// [0x0178] op_1c`, `c1`, `stockBoost = null.overallAirFlowLimit`, `?`. Annotated-disasm keeps the broader in-band handoff through op_04 at 0x016F, op_36 "lightTO1" at 0x0170, op_51 at 0x0173, and op_06 jump 123 at 0x0174. No narrower byte-backed split is promoted here.
      else if btd = c0 then -- evidence jump at 0x017F
        startLightTimer(b, VOID) -- 0x018F
      else
        if lightTO2 <> VOID then -- evidence jump at 0x019B
          lightTO2.forget() -- 0x01AB
        end if
        stagingLightPos2 = c0 -- 0x01B1
        VOID -- 0x01B4
        lightTO2 = timeout(o).new(((btd * c1000) + (c1000 / c2)), symbol(runLight)) -- 0x01DE
        lightTO2 -- 0x01E1
        startLightTimer(p, VOID) -- 0x01EE
      end if
    HTQ:
      HTQREADY(VOID, createMd5Hash(0)) -- 0x020E
    HT:
      HTREADY(VOID, createMd5Hash(0)) -- 0x022E
    otherwise:
      -- pass51 byte-window: block 16 0x0219..0x022E is the final proved raceType ladder edge, and faithful/full falls directly to end after that HT arm.
      -- no recovered default body; faithful/full block trace falls directly to end after the HT branch ladder
  end case
end

on RaceEngine_startLightTimer
  -- source block 17: light timer scheduler
  -- offset=39320 codeLen=681
  -- names: greenDelay, parseInt, sprite, flashSP, setSpectateDelayCB, timeAnchor, c0, _system, milliseconds, lightTO1, object, forget, stagingLightPos1, timeout, symbol, runLight, secondBuffer, lightTO2, stagingLightPos2, p, b, 1, 1T, s, sT, o, 2, 2T
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass32 structured dispatch from case table at 0x003B
  greenDelay = parseInt(param_parseInt) -- 0x001F
  sprite(flashSP).setSpectateDelayCB(param_parseInt) -- 0x0037
  case param_greenDelay of
    p, b:
      -- target 0x0065
      if timeAnchor = c0 then
        timeAnchor = milliseconds -- 0x0077
        _system -- 0x007A
      end if
      if lightTO1 <> VOID then -- evidence jump at 0x0084
        lightTO1.forget() -- 0x0093
      end if
      stagingLightPos1 = c0 -- 0x0099
      lightTO1 = timeout(param_greenDelay).new(500, symbol(runLight)) -- 0x00B6
    "1":
      -- target 0x00BE
      if lightTO1 <> VOID then -- evidence jump at 0x00C6
        lightTO1.forget() -- 0x00D5
      end if
      stagingLightPos1 = c0 -- 0x00DB
      lightTO1 = timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight)) -- 0x0101
    "1T":
      -- target 0x0109
      if lightTO1 <> VOID then -- evidence jump at 0x0111
        lightTO1.forget() -- 0x0120
      end if
      stagingLightPos1 = c0 -- 0x0126
      lightTO1 = timeout(param_greenDelay).new(500, symbol(runLight)) -- 0x0143
    s:
      -- target 0x014B
      if lightTO1 <> VOID then -- evidence jump at 0x0153
        lightTO1.forget() -- 0x0162
      end if
      stagingLightPos1 = c0 -- 0x0168
      lightTO1 = timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight)) -- 0x018E
    sT:
      -- target 0x0196
      if lightTO1 <> VOID then -- evidence jump at 0x019E
        lightTO1.forget() -- 0x01AD
      end if
      stagingLightPos1 = c0 -- 0x01B3
      lightTO1 = timeout(param_greenDelay).new(500, symbol(runLight)) -- 0x01D0
    o:
      -- target 0x01D8
      if timeAnchor = c0 then
        timeAnchor = milliseconds -- 0x01EA
        _system -- 0x01ED
      end if
      if lightTO2 <> VOID then -- evidence jump at 0x01F7
        lightTO2.forget() -- 0x0206
      end if
      stagingLightPos2 = c0 -- 0x020C
      lightTO2 = timeout(param_greenDelay).new(500, symbol(runLight)) -- 0x0229
    "2":
      -- target 0x0231
      if lightTO2 <> VOID then -- evidence jump at 0x0239
        lightTO2.forget() -- 0x0248
      end if
      stagingLightPos2 = c0 -- 0x024E
      lightTO2 = timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight)) -- 0x0274
    "2T":
      -- target 0x027C
      if lightTO2 <> VOID then -- evidence jump at 0x0284
        lightTO2.forget() -- 0x0293
      end if
      stagingLightPos2 = c0 -- 0x0299
      lightTO2 = timeout(param_greenDelay).new(500, symbol(runLight)) -- 0x02B6
    otherwise:
      -- default 0x02BE
  end case
end

on RaceEngine_runLight
  -- source block 18: light callback dispatcher
  -- offset=41116 codeLen=708
  -- names: period, name, stagingLightPos1, c0, sprite, flashSP, runEngineSetLightOnCB, amber1, greenDelay, amber2, amber3, forget, timeGreen, _system, milliseconds, lightTO2, timeout, symbol, runLight, p, 1, b, s, green, raceStartTimeCB, lightTO1, object, stagingLightPos2, raceType, CT, ctStartAnimateComputerCB, 1T, sT, o, 2, 2T
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass33 structured dispatch from case tables at 0x0024, 0x0067, 0x015C, 0x020D
  period = 500 -- 0x001A
  param_period -- 0x001D
  case name of
    p, "1", b, s, "1T", sT:
      -- target 0x004E: staging light set 1
      -- branch 12 -- 0x0052
      stagingLightPos1 = c0 -- 0x005A
      (period and stagingLightPos1) -- 0x005D
      EMPTY -- 0x0061
      case stagingLightPos1 of
        1:
          -- target 0x0076
          sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber1) -- 0x0090
          if greenDelay > VOID then -- evidence jump at 0x0096
            EMPTY -- 0x009D
            EMPTY -- 0x00A2
            sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber2) -- 0x00BE
            sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber3) -- 0x00D9
            param_period.forget() -- 0x00E4
            timeGreen = ((milliseconds + greenDelay) - 500) -- 0x00F5
            _system -- 0x00F8
            lightTO2 = timeout(param_period).new(greenDelay, symbol(runLight)) -- 0x0116
          end if
        2:
          -- target 0x011D
          sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber2) -- 0x0137
        3:
          -- target 0x013B
          sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber3) -- 0x0155
          case name of
            p, "1", b, s:
              -- target 0x0172
              timeGreen = milliseconds -- 0x0178
              _system -- 0x017B
            otherwise:
              -- default 0x0180
          end case
        4:
          -- target 0x0182
          sprite(flashSP).runEngineSetLightOnCB(param_period, name, green) -- 0x019C
          -- 0x0D boolean-chain marker left=(name = p) -- 0x01A9
          if name = b then -- evidence jump at 0x01B3
            sprite(flashSP).raceStartTimeCB() -- 0x01C8
            param_period.forget() -- 0x01D3
            if lightTO1 <> VOID then -- evidence jump at 0x01DD
              lightTO1.forget() -- 0x01EC
            end if
          end if
        otherwise:
          -- default 0x01F0
      end case
    o, "2", "2T":
      -- target 0x01F4: staging light set 2
      -- branch 12 -- 0x01F8
      stagingLightPos2 = c0 -- 0x0200
      (param_period and stagingLightPos2) -- 0x0203
      (param_period + EMPTY) -- 0x0208
      case stagingLightPos2 of
        1:
          -- target 0x021C
          sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber1) -- 0x0236
        2:
          -- target 0x023A
          sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber2) -- 0x0254
        3:
          -- target 0x0258
          sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber3) -- 0x0272
        4:
          -- target 0x0276
          sprite(flashSP).runEngineSetLightOnCB(param_period, name, green) -- 0x0290
          if raceType = CT then -- evidence jump at 0x0298
            sprite(flashSP).ctStartAnimateComputerCB() -- 0x02AD
            param_period.forget() -- 0x02B8
            if lightTO2 <> VOID then -- evidence jump at 0x02C2
              lightTO2.forget() -- 0x02D1
            end if
          end if
        otherwise:
          -- default 0x02D5
      end case
    otherwise:
      -- default 0x02D9
  end case
end

on RaceEngine_buildMd5Source
  -- source block 19: MD5/source string assembly and post-race values
  -- offset=43264 codeLen=1616
  -- names: stockRedLine, ,, detuneHp, stockBoost, boostType, boostSetting, grs, fgr, redLine, revLimiter, UsInit, NOS, w, r, nitrousTankSize, maxPsi, hpi, airhpi, turboFlow, fuelFlowLimit, overallAirFlowLimit, cylinderNumber, valveNumber, pistonCompressionLevel, chipSetting, pistonDurability, rodDurability, valveDurability, headGasketDurability, engineBlockDurability, oilDurability, tqArray, join, DAfp, g, rpmGearConversion, gConvSlipA, gConvSlipB, brakeDecleration, revLimiterDeceleration
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  EMPTY = EMPTY -- 0x0017
  EMPTY = (EMPTY + (stockRedLine + ",")) -- 0x0027
  EMPTY = (EMPTY + (detuneHp + ",")) -- 0x0037
  EMPTY = (EMPTY + (stockBoost + ",")) -- 0x0047
  EMPTY = (EMPTY + (boostType + ",")) -- 0x0057
  EMPTY = (EMPTY + (boostSetting + ",")) -- 0x0067
  stockRedLine = TRUE -- 0x006C
  repeat while stockRedLine <= boostSetting -- branch at 0x0076
  EMPTY = (EMPTY + (grs[stockRedLine] + ",")) -- 0x008A
  stockRedLine = stockRedLine + 1 -- repeat step 1 -- 0x008E
  end repeat -- jump -34 -- 0x0092
  EMPTY = (EMPTY + (fgr + ",")) -- 0x00A1
  EMPTY = (EMPTY + (redLine + ",")) -- 0x00B1
  EMPTY = (EMPTY + (revLimiter + ",")) -- 0x00C1
  EMPTY = (EMPTY + (UsInit + ",")) -- 0x00D1
  EMPTY = (EMPTY + (NOS + ",")) -- 0x00E1
  EMPTY = (EMPTY + (w + ",")) -- 0x00F1
  EMPTY = (EMPTY + (r + ",")) -- 0x0101
  EMPTY = (EMPTY + (nitrousTankSize + ",")) -- 0x0111
  EMPTY = (EMPTY + (maxPsi + ",")) -- 0x0121
  EMPTY = (EMPTY + (hpi + ",")) -- 0x0131
  EMPTY = (EMPTY + (airhpi + ",")) -- 0x0141
  EMPTY = (EMPTY + (turboFlow + ",")) -- 0x0151
  EMPTY = (EMPTY + (fuelFlowLimit + ",")) -- 0x0161
  EMPTY = (EMPTY + (overallAirFlowLimit + ",")) -- 0x0171
  EMPTY = (EMPTY + (cylinderNumber + ",")) -- 0x0181
  EMPTY = (EMPTY + (valveNumber + ",")) -- 0x0191
  EMPTY = (EMPTY + (pistonCompressionLevel + ",")) -- 0x01A1
  EMPTY = (EMPTY + (chipSetting + ",")) -- 0x01B1
  EMPTY = (EMPTY + (pistonDurability + ",")) -- 0x01C1
  EMPTY = (EMPTY + (rodDurability + ",")) -- 0x01D1
  EMPTY = (EMPTY + (valveDurability + ",")) -- 0x01E1
  EMPTY = (EMPTY + (headGasketDurability + ",")) -- 0x01F1
  EMPTY = (EMPTY + (engineBlockDurability + ",")) -- 0x0201
  EMPTY = (EMPTY + (oilDurability + ",")) -- 0x0211
  EMPTY = (EMPTY + (tqArray.join(",") + ",")) -- 0x022B
  EMPTY = (EMPTY + (DAfp + ",")) -- 0x023B
  EMPTY = (EMPTY + (g + ",")) -- 0x024B
  EMPTY = (EMPTY + (rpmGearConversion + ",")) -- 0x025B
  EMPTY = (EMPTY + (gConvSlipA + ",")) -- 0x026B
  EMPTY = (EMPTY + (gConvSlipB + ",")) -- 0x027B
  EMPTY = (EMPTY + (brakeDecleration + ",")) -- 0x028B
  EMPTY = (EMPTY + (revLimiterDeceleration + ",")) -- 0x029B
  EMPTY = (EMPTY + (idleRPM + ",")) -- 0x02AB
  EMPTY = (EMPTY + (tqFlyFactor + ",")) -- 0x02BB
  EMPTY = (EMPTY + (partBreakPoint + ",")) -- 0x02CB
  EMPTY = (EMPTY + (vToMph + ",")) -- 0x02DB
  EMPTY = (EMPTY + (c0_5 + ",")) -- 0x02EB
  EMPTY = (EMPTY + (c0 + ",")) -- 0x02FB
  EMPTY = (EMPTY + (c100 + ",")) -- 0x030B
  EMPTY = (EMPTY + (c1000 + ",")) -- 0x031B
  EMPTY = (EMPTY + (c10000 + ",")) -- 0x032B
  EMPTY = (EMPTY + (c0_0075 + ",")) -- 0x033B
  EMPTY = (EMPTY + (c13 + ",")) -- 0x034B
  EMPTY = (EMPTY + (c0_4 + ",")) -- 0x035B
  EMPTY = (EMPTY + (c0_7 + ",")) -- 0x036B
  EMPTY = (EMPTY + (c1_7 + ",")) -- 0x037B
  EMPTY = (EMPTY + (c1_25 + ",")) -- 0x038B
  EMPTY = (EMPTY + (c9 + ",")) -- 0x039B
  EMPTY = (EMPTY + (c299 + ",")) -- 0x03AB
  EMPTY = (EMPTY + (c300 + ",")) -- 0x03BB
  EMPTY = (EMPTY + (c5_5 + ",")) -- 0x03CB
  EMPTY = (EMPTY + (c2 + ",")) -- 0x03DB
  EMPTY = (EMPTY + (c5 + ",")) -- 0x03EB
  EMPTY = (EMPTY + (c50 + ",")) -- 0x03FB
  EMPTY = (EMPTY + (c8 + ",")) -- 0x040B
  EMPTY = (EMPTY + (c0_005 + ",")) -- 0x041B
  EMPTY = (EMPTY + (c0_016 + ",")) -- 0x042B
  EMPTY = (EMPTY + (c3 + ",")) -- 0x043B
  EMPTY = (EMPTY + (c0_09 + ",")) -- 0x044B
  EMPTY = (EMPTY + (c0_6 + ",")) -- 0x045B
  EMPTY = (EMPTY + (c10 + ",")) -- 0x046B
  EMPTY = (EMPTY + (c0_015 + ",")) -- 0x047B
  EMPTY = (EMPTY + (c0_02 + ",")) -- 0x048B
  EMPTY = (EMPTY + (c200 + ",")) -- 0x049B
  EMPTY = (EMPTY + (c0_18 + ",")) -- 0x04AB
  EMPTY = (EMPTY + (c1320 + ",")) -- 0x04BB
  EMPTY = (EMPTY + (c760 + ",")) -- 0x04CB
  EMPTY = (EMPTY + (c7 + ",")) -- 0x04DB
  EMPTY = (EMPTY + (c7_5 + ",")) -- 0x04EB
  EMPTY = (EMPTY + (c1_8 + ",")) -- 0x04FB
  EMPTY = (EMPTY + (c1_15 + ",")) -- 0x050B
  EMPTY = (EMPTY + (c80 + ",")) -- 0x051B
  EMPTY = (EMPTY + (c0_95 + ",")) -- 0x052B
  EMPTY = (EMPTY + (c0_05 + ",")) -- 0x053B
  EMPTY = (EMPTY + (c0_2 + ",")) -- 0x054B
  EMPTY = (EMPTY + (c0_1 + ",")) -- 0x055B
  EMPTY = (EMPTY + (c0_65 + ",")) -- 0x056B
  EMPTY = (EMPTY + (c4 + ",")) -- 0x057B
  EMPTY = (EMPTY + (c0_07 + ",")) -- 0x058B
  EMPTY = (EMPTY + (c2_5 + ",")) -- 0x059B
  EMPTY = (EMPTY + (c1 + ",")) -- 0x05AB
  EMPTY = (EMPTY + guid) -- 0x05B7
  -- branch evidence (control-flow-evidence)
  if not (engineDamage < c0) then -- jump 14 -- 0x05C3
  EMPTY = (EMPTY + nogood) -- 0x05CE
  -- pass51 byte-window: block 19 0x05D5..0x063E is still the unresolved anti-lag/integrity cluster; branch table targets are 106, 17, 74, 17, 37, and 14.
  -- branch 106 -- 0x05D5
  -- branch evidence (control-flow-evidence)
  if not (goodCounterRT = VOID) then -- jump 9 marker 0x44 -- 0x05DD
  -- branch evidence (control-flow-evidence)
  if not (goodCounterET = VOID) then -- jump 17 -- 0x05E6
  EMPTY = (EMPTY + nogood) -- 0x05F1
  (goodCounterRT = VOID) -- 0x05F4
  -- branch evidence (control-flow-evidence)
  -- jump 74 -- 0x05F5
  -- branch evidence (control-flow-evidence)
  if not (0.7745 > lagPercent) then -- jump 17 -- 0x060B
  EMPTY = (EMPTY + nogood) -- 0x0616
  (goodCounterRT + badCounterRT) -- compare lhs preserved by blocks.js before the 0x061A jump window; threshold/callee linkage still splits between raw 1982773 rows and the faithful/full 0.7745 view -- 0x0619
  -- branch evidence (control-flow-evidence)
  -- jump 37 -- 0x061A
  -- branch evidence (control-flow-evidence)
  if not (0.7745 > lagPercent) then -- jump 14 -- 0x0630
  EMPTY = (EMPTY + nogood) -- 0x063B
  (goodCounterET + badCounterET) -- compare lhs preserved by blocks.js before the final nogood branch tail; threshold/callee linkage still splits between raw 1982773 rows and the faithful/full 0.7745 view -- 0x063E
  -- pass50 promoted tail: faithful.lingo and faithful-full.js converge on the final Xtra hash call here, while the preceding anti-lag branch cluster remains only partially structured.
  -- pass62 blocker: raw blocks.js/blocks.lingo leave expr (goodCounterRT = VOID) at 0x05F4 and expr badCounterET at 0x064C as standalone residue rows. Annotated-disasm still keeps the broader gate/tail in-band: upstream gate anchor remains the branch-immediate 0x44 at 0x05DD, and the minimal non-removable gate core is op_51 at 0x05F4 plus op_06 jump 74 at 0x05F5. For the tail, the stricter blocks.js/blocks.lingo surface preserves only the row packet `, = caluMD5`, `?`, `id_0 = ,.getStringMD5()(id_0)`, `?`, `// [0x064f] op_05`, `id_0`; it never independently reaches 0x065A or 0x0663, which only appear in the broader annotated/faithful continuation.
  guid = xtra("caluMD5").getStringMD5(EMPTY) -- 0x0649..0x0663
end

on RaceEngine_randomCurve
  -- source block 20: random/log curve helper
  -- offset=48232 codeLen=118
  -- names: Math, log, c1, random, c5, c0_6, c2, c0, round, c1000
  -- pass36 provenance: copied from faithful stack lift; offsets preserved at line ends.
  -- pass35 conservative structure from offsets 0x0027, 0x0041, 0x0044, 0x004C, 0x0058, 0x005B, 0x005C, 0x0066, 0x006E, 0x0071, 0x0089
  1.6693 -- 0x0027
  Math = (0.7482 * param_Math) -- 0x0041
  (Math + (random() / c5)) -- 0x0044
  if Math > c0_6 then -- evidence jump at 0x004C
    Math = (Math / c2) -- 0x0058
    (param_Math + c1) -- 0x005B
    -- jump -23 -- 0x005C
  end if
  if Math < c0 then -- evidence jump at 0x0066
    Math = c0 -- 0x006E
  end if
  log -- 0x0071
  (round((Math * c1000)) / c1000) -- 0x0089
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-102.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-102.aggressive-evidence.json
-- blocks=21 actions=0 branches=136 methodCalls=32
-- literalNames=356 callbackLikeNames=23 constants=38
-- todos=5 implicitSites=4
