"use strict";

// Race-only JS translations backed by:
// - reconstructed (1)/Lscr-103/rightful.ls
// - reconstructed (1)/Lscr-104/rightful.ls
// - reconstructed (1)/Lscr-105/rightful.ls
//
// The exported handler and callback names are preserved verbatim.
// Unresolved bodies stay unresolved instead of being guessed.

const FIELD_SEPARATOR = String.fromCharCode(30);

function spriteCall(ctx, method, ...args) {
  return ctx.sprite(ctx.flashSP)[method](...args);
}

function sendAtom(ctx, value) {
  return ctx.ssm(value);
}

function sendJoined(ctx, ...parts) {
  return ctx.ssm(parts.join(FIELD_SEPARATOR));
}

const lscr103RaceEngineHandlers = {
  // Source: reconstructed (1)/Lscr-103/rightful.ls:5
  runEngineStart() {
    return { unresolved: true, note: "registration/prologue markers only" };
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:12
  runEngineStop(ctx) {
    return ctx._global.objRace.beginRace();
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:20
  runEngine(ctx) {
    return ctx._global.objRace.endRace();
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:28
  runEngineGaugeInit(ctx, param__global) {
    return ctx._global.objRace.run(param__global);
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:37
  runEngineGearUp(ctx) {
    return spriteCall(
      ctx,
      "runEngineGaugeInitCB",
      ctx._global.objRace.redLine,
      ctx._global.objRace.nitrousTankSize,
      ctx._global.objRace.nitrousRemaining,
      ctx._global.objRace.boostType,
    );
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:46
  runEngineGearDown(ctx) {
    return ctx._global.objRace.gearUp();
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:55
  runEngineSetBrake(ctx) {
    return ctx._global.objRace.gearDown();
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:64
  runEngineSetClutch(ctx, param__global) {
    return ctx._global.objRace.setBrake(param__global);
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:73
  runEngineSetNOS(ctx, param__global) {
    return ctx._global.objRace.setClutch(param__global);
  },

  // Source: reconstructed (1)/Lscr-103/rightful.ls:82
  runEngineDyno(ctx, param__global) {
    ctx.isNos = param__global;
    return ctx._global.objRace;
  },
};

// Source: reconstructed (1)/Lscr-103/rightful.ls:91-130
// This is an embedded block without handler metadata. The lines below mirror the
// recovered mechanical JS/Lingo exactly; unresolved expressions stay explicit.
function embeddedLscr103DynoBlock10(param__global, param_objRace) {
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

const lscr104RaceMessages = {
  // Source: reconstructed (1)/Lscr-104/rightful.ls:151
  TEAMKICK(ctx, param_unescape) {
    return sendJoined(ctx, "SRC", param_unescape);
  },

  // Source: reconstructed (1)/Lscr-104/rightful.ls:351
  RRSP(ctx, param_ssm, param_RRQ, param_String, param_fromCharCode, param_id_4) {
    return sendJoined(ctx, "RRQ", param_ssm, param_RRQ, param_String, param_fromCharCode, param_id_4);
  },

  // Source: reconstructed (1)/Lscr-104/rightful.ls:359
  RLVE(ctx, param_ssm, param_RRS, param_String) {
    return sendJoined(ctx, "RRS", param_ssm, param_RRS, param_String);
  },

  // Source: reconstructed (1)/Lscr-104/rightful.ls:367
  RIVOK(ctx) {
    return sendAtom(ctx, "RL");
  },

  // Source: reconstructed (1)/Lscr-104/rightful.ls:375
  RIVREADY(ctx) {
    sendAtom(ctx, "RO");
    return ctx._global.objRace.init("RIVAL");
  },

  // Source: reconstructed (1)/Lscr-104/rightful.ls:384
  RIVRT(ctx, param_ssm, param_RR) {
    return sendJoined(ctx, "RR", param_ssm, param_RR);
  },

  // Source: reconstructed (1)/Lscr-104/rightful.ls:392
  RIVDONE(ctx, param_Math, param_floor) {
    return sendJoined(ctx, "RIVRT", param_Math, param_floor);
  },
};

function dispatchLscr105RivalRace(ctx, packet) {
  const getAProp = (key) => packet.getAProp(key);
  const ac = getAProp("ac");

  switch (ac) {
    // Source: reconstructed (1)/Lscr-105/rightful.ls:598-609
    case "RRQ":
      if (getAProp("s") === true) {
        return spriteCall(ctx, "chatRIVRequestCB", true, getAProp("r"));
      }
      return spriteCall(ctx, "chatRIVRequestCB", getAProp("s"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:610-613
    case "RCLG":
      return spriteCall(ctx, "chatRIVChallengeCB", getAProp("d"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:614-617
    case "RRS":
      return spriteCall(ctx, "chatRIVResponseCB", getAProp("s"), getAProp("i"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:622-625
    case "RN":
      return spriteCall(ctx, "chatRIVJoinCB", getAProp("d"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:626-629
    case "RRA":
      return spriteCall(ctx, "chatRIVNRaceCB", getAProp("d"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:642-645
    case "RIVRDY":
      return spriteCall(ctx, "raceRIVReadyOpponentCB");

    // Source: reconstructed (1)/Lscr-105/rightful.ls:646-657
    case "RR":
      if (getAProp("s") === true) {
        return spriteCall(ctx, "raceRIVReadyCB", getAProp("s"), getAProp("t"), getAProp("t2"));
      }
      return spriteCall(ctx, "raceRIVReadyCB", getAProp("s"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:658-661
    case "RO":
      return spriteCall(ctx, "raceRIVOKCB", getAProp("t"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:662-665
    case "RW":
      return spriteCall(ctx, "raceRIVResultCB", getAProp("d"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:666-669
    case "RD":
      return spriteCall(ctx, "raceRIVFinishCB", getAProp("d"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:670-673
    case "RIVRTO":
      return spriteCall(ctx, "raceRIVRTOpponentCB", getAProp("rt"));

    // Source: reconstructed (1)/Lscr-105/rightful.ls:674-676
    case "RIVRT":
      return spriteCall(ctx, "raceRIVRTCB", getAProp("r"), getAProp("rt"), getAProp("i"));

    default:
      return { unresolved: true, ac };
  }
}

module.exports = {
  FIELD_SEPARATOR,
  lscr103RaceEngineHandlers,
  embeddedLscr103DynoBlock10,
  lscr104RaceMessages,
  dispatchLscr105RivalRace,
};
