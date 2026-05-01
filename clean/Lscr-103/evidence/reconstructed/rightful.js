"use strict";

// Mechanical JS mirror of reconstructed/Lscr-103/rightful.ls.
// Constraint: recovered bytecode evidence only; unresolved lines stay explicit.

function runEngineStart() {
  // source-kind: named handler from metadata
  // offset=0 length=140 codeLen=40
  // registration/prologue markers=10 paddingBytes=10 -- 0x0014
}

function runEngineStop() {
  // source-kind: named handler from metadata
  // offset=140 length=224 codeLen=14
  // names: _global, objRace, beginRace
  beginRace(); // 0x0021
}

function runEngine() {
  // source-kind: named handler from metadata
  // offset=364 length=240 codeLen=14
  // names: _global, objRace, endRace
  endRace(); // 0x0021
}

function runEngineGaugeInit(param__global) {
  // source-kind: named handler from metadata
  // offset=604 length=236 codeLen=26
  // names: _global, objRace, run
  // branch 20 -- 0x001A
  run(param__global); // 0x002D
}

function runEngineGearUp() {
  // source-kind: named handler from metadata
  // offset=840 length=516 codeLen=63
  // names: _global, objRace, sprite, flashSP, runEngineGaugeInitCB, redLine, nitrousTankSize, nitrousRemaining, boostType
  // branch 57 -- 0x001A
  objRace(nitrousRemaining, _global, objRace, boostType); // 0x0052
}

function runEngineGearDown() {
  // source-kind: named handler from metadata
  // offset=1356 length=236 codeLen=23
  // names: _global, objRace, gearUp
  // branch 17 -- 0x001A
  gearUp(); // 0x002A
}

function runEngineSetBrake() {
  // source-kind: named handler from metadata
  // offset=1592 length=260 codeLen=23
  // names: _global, objRace, gearDown
  // branch 17 -- 0x001A
  gearDown(); // 0x002A
}

function runEngineSetClutch(param__global) {
  // source-kind: named handler from metadata
  // offset=1852 length=272 codeLen=26
  // names: _global, objRace, setBrake
  // branch 20 -- 0x001A
  setBrake(param__global); // 0x002D
}

function runEngineSetNOS(param__global) {
  // source-kind: named handler from metadata
  // offset=2124 length=264 codeLen=26
  // names: _global, objRace, setClutch
  // branch 20 -- 0x001A
  setClutch(param__global); // 0x002D
}

function runEngineDyno(param__global) {
  // source-kind: named handler from metadata
  // offset=2388 length=400 codeLen=13
  // names: _global, objRace, isNos
  isNos = param__global; // 0x001D
  objRace; // 0x0020
}

function __embedded_lscr103_block10(param__global, param_objRace) {
  // source-kind: embedded block without handler metadata
  // offset=2788 length=1880 codeLen=524
  // names: _global, objRace, maxPsi, boostSetting, initBoost, chipSetting, Array, init, DYNO, tqArray, length, revLimiter, rpm, getTorque, calculateExtraHpi, Math, floor, posTq, hpi, boostCreatedPower, systemPower, ECUtune, compressionPowerDelta, push, airFlowLimit, airFuelMeter, overallAirFlowLimit, boostPsi, turboFlow, sprite, flashSP, garageDynoRunCB, join, ,
  // The lines below mirror the mechanical Lingo lift exactly; they are not cleaned up.
  if (!(param__global >= VOID)) {
    // jump 46 -- 0x0018
  }
  if (!(objRace <= maxPsi)) {
    // jump 30 -- 0x0028
  }
  boostSetting = param__global; // 0x0035
  objRace; // 0x0038
  initBoost(); // 0x0046
  // 0x45 marker -- 0x004E
  // 0x0A marker -- 0x0050
  if (!(param_objRace <= -5)) {
    // jump 16 -- 0x0057
  }
  chipSetting = param_objRace; // 0x0064
  objRace; // 0x0067
  _global = (_global ^ Array); // 0x006F
  (param_objRace >= -5); // 0x0072
  objRace = (objRace ^ Array); // 0x007A
  _global; // 0x007D
  maxPsi = (_global ^ Array); // 0x0085
  _global; // 0x0088
  boostSetting = (param__global ^ Array); // 0x0090
  init(DYNO); // 0x00A4
  initBoost = floor; // 0x00A8
  objRace; // 0x00AB
  if (!(tqArray < length)) {
    // jump 286 -- 0x00BB
  }
  if (!(objRace > revLimiter)) {
    // jump 6 -- 0x00D0
  }
  // jump 262 -- 0x00D4
  rpm = (initBoost * 100); // 0x00E4
  objRace; // 0x00E7
  getTorque(); // 0x00F5
  calculateExtraHpi(); // 0x0103
  // 0x64 packed call/operator prefix raw=64 -- 0x014B
  // unresolved assignment target preserved from mechanical lift:
  // -5 = (_global(((objRace & compressionPowerDelta) * 0.7512)) / 100); // 0x0154
  (objRace & ECUtune); // 0x0157
  push(-5); // 0x0165
  objRace(airFlowLimit); // 0x0179
  objRace(airFuelMeter); // 0x018D
  if (!(_global < (objRace * turboFlow))) {
    // jump 18 -- 0x01B4
  }
  push(VOID); // 0x01C3
  // jump 15 -- 0x01C4
  boostSetting(boostSetting[push]); // 0x01D2
  // repeat step 4 -- 0x01D3
  (objRace / maxPsi); // 0x01D6
  // jump -299 -- 0x01D7
  join(",")(maxPsi, join(","), boostSetting, join(",")); // 0x021F
}

module.exports = {
  runEngineStart,
  runEngineStop,
  runEngine,
  runEngineGaugeInit,
  runEngineGearUp,
  runEngineGearDown,
  runEngineSetBrake,
  runEngineSetClutch,
  runEngineSetNOS,
  runEngineDyno,
  __embedded_lscr103_block10,
};
