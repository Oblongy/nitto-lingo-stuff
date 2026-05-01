// Source: reconstructed (1)/Lscr-103/rightful.ls
// Rewritten from the dumped Lingo only. Unresolved markers are preserved verbatim.

function spriteCall(ctx, method, ...args) {
  return ctx.sprite(ctx.flashSP)[method](...args);
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:5-10
export function runEngineStart() {
  return { unresolved: true, note: "registration/prologue markers only" };
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:12-18
export function runEngineStop(ctx) {
  return ctx._global.objRace.beginRace();
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:20-26
export function runEngine(ctx) {
  return ctx._global.objRace.endRace();
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:28-35
export function runEngineGaugeInit(ctx, param__global) {
  return ctx._global.objRace.run(param__global);
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:37-44
// Export-backed mismatch: the metadata name is `runEngineGearUp`, but the
// recovered block resolves `runEngineGaugeInitCB(...)` rather than `gearUp()`.
export function runEngineGearUp(ctx) {
  return spriteCall(
    ctx,
    "runEngineGaugeInitCB",
    ctx._global.objRace.redLine,
    ctx._global.objRace.nitrousTankSize,
    ctx._global.objRace.nitrousRemaining,
    ctx._global.objRace.boostType,
  );
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:46-53
// Export-backed mismatch: the metadata name is `runEngineGearDown`, but the
// recovered callee is `gearUp()`.
export function runEngineGearDown(ctx) {
  return ctx._global.objRace.gearUp();
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:55-62
// Export-backed mismatch: the metadata name is `runEngineSetBrake`, but the
// recovered callee is `gearDown()`.
export function runEngineSetBrake(ctx) {
  return ctx._global.objRace.gearDown();
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:64-71
// Export-backed mismatch: the metadata name is `runEngineSetClutch`, but the
// recovered callee is `setBrake(param__global)`.
export function runEngineSetClutch(ctx, param__global) {
  return ctx._global.objRace.setBrake(param__global);
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:73-80
// Export-backed mismatch: the metadata name is `runEngineSetNOS`, but the
// recovered callee is `setClutch(param__global)`.
export function runEngineSetNOS(ctx, param__global) {
  return ctx._global.objRace.setClutch(param__global);
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:82-89
export function runEngineDyno(ctx, param__global) {
  ctx.isNos = param__global;
  return ctx._global.objRace;
}

// Source Lingo: reconstructed (1)/Lscr-103/rightful.ls:91-130
// Embedded block without handler metadata; unresolved expressions stay explicit.
export function embeddedLscr103DynoBlock10(param__global, param_objRace) {
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
  // unresolved assignment target preserved from the mechanical lift:
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
