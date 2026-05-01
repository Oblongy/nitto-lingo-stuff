// Lscr-102 original-style JS translation
// Source: Lscr-102/original-style.lingo
// RaceEngine - physics/state object for all race modes.
// Globals: sendInterval, runInterval, secondBuffer, DAfp,
//          goodCounterRT, badCounterRT, goodCounterET, badCounterET,
//          avgFps, fpsCount, guid, raceType, timeAnchor,
//          staging, stagingLightPos1, stagingLightPos2, greenDelay,
//          preStaged, staged, brake, stockRedLine, redLine, revLimiter,
//          detuneHp, stockBoost, boostType, boostSetting,
//          hpi, hp, systemPower, ECUtune, compressionPowerDelta,
//          carV, carAccel, speedoV, engineV, mph,
//          engineDamage, engineDamageRisk, pistonDurability, rodDurability,
//          valveDurability, headGasketDurability, engineBlockDurability,
//          oilDurability, rpm, idleRPM, tqArray

function RaceEngine() {
  return {
    init:               RaceEngine_initState,
    parseConfig:        RaceEngine_parseConfig,
    initBoost:          RaceEngine_initBoost,
    startSendTimer:     RaceEngine_startSendTimer,
    stopRunTimer:       RaceEngine_stopRunTimer,
    stageDistance:      RaceEngine_stageDistance,
    run:                RaceEngine_runFrame,
    calculateExtraHpi:  RaceEngine_calculateExtraHpi,
    getTorque:          RaceEngine_lookupTorque,
    initBrakeTune:      RaceEngine_initBrakeTune,
    gearDown:           RaceEngine_gearDown,
    gearUp:             RaceEngine_gearUp,
    setBrake:           RaceEngine_setBrake,
    setClutch:          RaceEngine_setClutchFeather,
    startLightTimer:    RaceEngine_startLightTimer,
    runLight:           RaceEngine_runLight,
    beginRace:          RaceEngine_startSendTimer,
    endRace:            RaceEngine_stopRunTimer
  };
}

// -----------------------------------------------------------------------
// initState  (block 2)
// -----------------------------------------------------------------------
function RaceEngine_initState(raceTypeParam) {
  goodCounterRT = null;
  badCounterRT  = null;
  goodCounterET = null;
  badCounterET  = null;
  avgFps        = null;
  fpsCount      = null;
  guid          = "";
  raceType      = raceTypeParam;
  timeAnchor    = _system.milliseconds;
  staging       = 1;
  stagingLightPos1 = _system.milliseconds;
  stagingLightPos2 = _system.milliseconds;
  greenDelay    = null;
  preStaged     = 0;
  staged        = 0;
  brake         = 0;
  isMidMd5sent  = 0;
  isNos         = 0;
  pb            = turboFlow * 0.075 * stockRedLine;
  avgDurability = (pistonDurability + rodDurability + valveDurability +
                   headGasketDurability + engineBlockDurability) / 5;
  hp            = 0;
  carV          = 0;
  carAccel      = 0;
  speedoV       = 0;
  engineV       = 0;
  mph           = 0;
  engineDamage  = 0;
  isEngineLightOn = 0;
  gearValue     = 0;
  gr            = grs[0];
  if (id_51 != null) local_53();
  if (id_54 != null) local_53();
  if (id_55 != null) local_53();
  if (id_56 != null) local_53();
}

// -----------------------------------------------------------------------
// parseConfig  (block 3)
// Parses the XML car-engine data blob and populates all engine state.
// -----------------------------------------------------------------------
function RaceEngine_parseConfig(xmlStr, t) {
  var parser = new xtra("xmlparser");
  parser.parseString(xmlStr);
  var n2 = parser.makeList().n2;
  parser = null;
  var a = n2.ATTRIBUTES;

  hpi          = parseFloat(a.v);
  stockRedLine = parseFloat(a.a);
  redLine      = parseFloat(a.n);
  revLimiter   = parseFloat(a.o);
  detuneHp     = parseFloat(a.b);
  var UsInit   = parseFloat(a.p);
  var UkInit   = 0.7 * UsInit;
  stockBoost   = parseFloat(a.c);
  boostSetting = parseFloat(a.e);
  boostType    = a.d;
  this.initBoost();

  grs = [
    parseFloat(a.f), parseFloat(a.g), parseFloat(a.h),
    parseFloat(a.i), parseFloat(a.j), parseFloat(a.k)
  ];
  fgr              = parseFloat(a.l);
  NOS              = parseFloat(a.q);
  nitrousRemaining = parseFloat(a.m);
  nitrousTankSize  = parseFloat(a.t);
  if (nitrousRemaining > nitrousTankSize) nitrousRemaining = nitrousTankSize;

  this.setClutch(0.49);
  tqArray = [];
}

// -----------------------------------------------------------------------
// initBoost  (block 4)
// -----------------------------------------------------------------------
function RaceEngine_initBoost() {
  if (boostType === "T") {
    boostLag   = 0.7 * boostSetting;
    boostRange = 1.7 * boostSetting;
  } else {
    boostLag   = 0;
    boostRange = boostSetting;
  }
}

// -----------------------------------------------------------------------
// startSendTimer / stopRunTimer  (blocks 5-6)
// -----------------------------------------------------------------------
function RaceEngine_startSendTimer() {
  if (runInterval != null) runInterval.forget();
  runInterval = timeout(runInterval).new(Math.floor(1000 / sendInterval), "sendPos");
}

function RaceEngine_stopRunTimer() {
  if (runInterval != null) runInterval.forget();
}

// -----------------------------------------------------------------------
// stageDistance  (block 7)
// Updates staging/reaction timing each frame.
// -----------------------------------------------------------------------
function RaceEngine_stageDistance(rt, s, carVel, carAcc) {
  if (staging !== (rt % 1)) return;
  if (raceType === "HT") {
    if (gearValue < 0) {
      STG((raceType === "KOTH" || raceType === "RIVAL"), s % carVel % carAcc);
    } else {
      STG(s, carVel, carAcc);
    }
    return;
  }
  if (s < 1320) {
    if (timeAnchor == null) {
      if (raceType === "HT") {
        STG(s, carVel, carAcc);
      } else {
        INT(s, carVel, carAcc, _system, _system.milliseconds - timeAnchor);
      }
    }
  }
}

// -----------------------------------------------------------------------
// runFrame  (block 8)
// Main per-frame physics update. Called by the run-interval timeout.
// -----------------------------------------------------------------------
function RaceEngine_runFrame(clutchInput) {
  if (clutchInput < 0) clutchInput = 0;
  if (clutchInput > 1) clutchInput = 1;

  if (timeFromLastFrame > clutchInput) {
    var theTime = (_system.milliseconds - timeFromLastFrame) / 1000;
    var theActualTime = theTime;
    if (theTime > 0.2) theTime = 0.2;
    avgFps = (avgFps * fpsCount + theActualTime) / 1.6682;
    timeFromLastFrame = _system.milliseconds;

    this.calculateExtraHpi();

    if (gearValue !== 0) {
      var c1 = hpi + boostCreatedPower + systemPower + ECUtune + compressionPowerDelta - engineDamage;
      if (nitrousRemaining > 0) {
        var nosBoost = (NOS * rpm / stockRedLine) / 1.25;
        if (nosBoost > NOS) nosBoost = NOS;
        hp += hp * c1;
        nitrousRemaining -= (NOS / 10000) * 2;
        sprite(flashSP).runEngineNOSCB((nitrousRemaining / nitrousTankSize) * 100);
      } else {
        hp += hp * c1;
      }
      hp *= clutchInput;
      if (rpm > revLimiter + 200) hp /= 2;

      var tq = (hp * tqFlyFactor) / rpm;
      carAccel = ((tq * gr) * fgr * rpmGearConversion) / r;
    }

    carV += carAccel * theTime;
    if (carV <= 0) { carAccel = 0; carV = 0; }
    speedoV = carV;
    engineV += fpsCount * theTime;
    if (engineV < 5)   engineV = 5;
    if (engineV > 100) engineV = 100;

    this.getTorque();
    mph = carV * vToMph;

    s += (gearValue === -1) ? -clutchInput : clutchInput;
    s = Math.floor(s * 1000) / 1000;

    if (staging < (s % 13)) {
      s = speedoV % 13; mph = 0; carAccel = 0; carV = 0;
    } else if (s > 5) {
      s = 5; mph = 0; carAccel = 0; carV = 0;
    }

    if (rt != null) {
      if (theActualTime > lagThreshold) badCounterRT  += theActualTime;
      else                              goodCounterRT += theActualTime;
    }
  }
}

// -----------------------------------------------------------------------
// calculateExtraHpi  (block 9)
// -----------------------------------------------------------------------
function RaceEngine_calculateExtraHpi() {
  boostCreatedPower = 0;
  if (boostType === "T") {
    var psi = Math.min(boostPsi, maxPsi);
    boostCreatedPower = (psi / maxPsi) * turboFlow;
  } else if (boostType === "S") {
    boostCreatedPower = boostSetting * superchargerFactor;
  }
  systemPower = UsInit;
  if (tireStick > 0) systemPower += UsInit * 0.05;
  ECUtune = UkInit;
  if (boostCreatedPower > 0) {
    compressionPowerDelta = Math.min(boostCreatedPower / 100, 1) * 3;
    systemPower += compressionPowerDelta;
    ECUtune -= compressionPowerDelta * 0.09;
    if (ECUtune < 0.6) ECUtune = 0.6;
  }
}

// -----------------------------------------------------------------------
// lookupTorque  (block 10)
// -----------------------------------------------------------------------
function RaceEngine_lookupTorque() {
  var idx = Math.floor(rpm / 100);
  if (idx < 0) idx = 0;
  if (idx >= tqArray.length) idx = tqArray.length - 1;
  posTq = tqArray[idx] || 0;
  negTq = -posTq * 0.3;
}

// -----------------------------------------------------------------------
// initBrakeTune  (block 11)
// -----------------------------------------------------------------------
function RaceEngine_initBrakeTune() {
  brakeDecleration      = -hpi * 0.012;
  revLimiterDeceleration = -hpi * 0.008;
}

// -----------------------------------------------------------------------
// gearDown / gearUp  (blocks 12-13)
// -----------------------------------------------------------------------
function RaceEngine_gearDown() {
  if (gearValue > 0) {
    gearValue--;
    gr = grs[gearValue];
  }
}

function RaceEngine_gearUp() {
  if (gearValue < grs.length - 1) {
    gearValue++;
    gr = grs[gearValue];
  }
}

// -----------------------------------------------------------------------
// setBrake  (block 14)
// -----------------------------------------------------------------------
function RaceEngine_setBrake(val) {
  brake = val;
}

// -----------------------------------------------------------------------
// setClutchFeather  (block 15)
// -----------------------------------------------------------------------
function RaceEngine_setClutchFeather(val) {
  clutchFeather = val;
}

// -----------------------------------------------------------------------
// startLightTimer  (block 17)
// -----------------------------------------------------------------------
function RaceEngine_startLightTimer(lightID, delay) {
  timeout("lightTimer_" + lightID).new(parseInt(delay), "runLight_" + lightID);
}

// -----------------------------------------------------------------------
// runLight  (block 18)
// -----------------------------------------------------------------------
function RaceEngine_runLight(lightID) {
  sprite(flashSP).runEngineStageLightCB(lightID);
}
