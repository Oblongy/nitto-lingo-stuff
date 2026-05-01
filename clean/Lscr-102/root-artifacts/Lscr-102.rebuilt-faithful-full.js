"use strict";

/**
 * Lscr-102 faithful JavaScript reconstruction.
 *
 * This is not a clean-room game rewrite. It is a readable JS rendering of the
 * recovered Lingo/hidden-VM bytecode. Names, block boundaries, and uncertain
 * comments are preserved so this can be checked against:
 *
 *   Lscr-102.rebuilt-faithful.lingo
 *   Lscr-102.stack-faithful.lingo
 *
 * imm83_* constants preserve the original op_83 byte operands while exposing
 * their decoded fixed-point value.
 */

const VOID = undefined;
const EMPTY = "";

const imm83_16693 = 1.6693;
const imm83_7482 = 0.7482;
const imm83_7489 = 0.7489;
const imm83_7510 = 0.751;
const imm83_7734 = 0.7734;
const imm83_7767 = 0.7767;
const imm83_8758 = 0.8758;

function voidP(value) {
  return value === undefined || value === null;
}

function lingoSymbol(name) {
  return Symbol.for(String(name));
}

class Lscr102RaceEngine {
  constructor(host = {}) {
    this.host = host;
    this.handlers = this.__Lscr102_block00();
    this.__Lscr102_block01();
    this.__Lscr102_block02();
  }

  RaceEngine() {
    return this.__Lscr102_block00();
  }

  __Lscr102_block00() {
    return {
      1: this.__Lscr102_block01.bind(this),
      2: this.__Lscr102_block02.bind(this),
      3: this.__Lscr102_block03.bind(this),
      4: this.__Lscr102_block04.bind(this),
      5: this.__Lscr102_block05.bind(this),
      6: this.__Lscr102_block06.bind(this),
      7: this.__Lscr102_block07.bind(this),
      8: this.__Lscr102_block08.bind(this),
      9: this.__Lscr102_block09.bind(this),
      10: this.__Lscr102_block10.bind(this),
      11: this.__Lscr102_block11.bind(this),
      12: this.__Lscr102_block12.bind(this),
      13: this.__Lscr102_block13.bind(this),
      14: this.__Lscr102_block14.bind(this),
      15: this.__Lscr102_block15.bind(this),
      16: this.__Lscr102_block16.bind(this),
      17: this.__Lscr102_block17.bind(this),
      18: this.__Lscr102_block18.bind(this),
      19: this.__Lscr102_block19.bind(this),
      20: this.__Lscr102_block20.bind(this),
    };
  }

  __Lscr102_block01() {
    // Constants/table init block. The table contains mixed encoded records.
    this.sendInterval = this.sendInterval;
    this.secondBuffer = this.secondBuffer;
    this.DAfp = this.DAfp;
  }

  __Lscr102_block02() {
    Object.assign(this, {
      goodCounterRT: 0,
      badCounterRT: 0,
      goodCounterET: 0,
      badCounterET: 0,
      avgFps: 0,
      fpsCount: 0,
      guid: EMPTY,
      raceType: EMPTY,
      timeAnchor: 0,
      staging: 0,
      stagingLightPos1: 0,
      stagingLightPos2: 0,
      greenDelay: 0,
      preStaged: 0,
      staged: 0,
      brake: 0,
      isMidMd5sent: 0,
      isNos: 0,
      pb: 0,
      turboFlow: 0,
      stockRedLine: 0,
      avgDurability: 0,
      pistonDurability: 0,
      rodDurability: 0,
      valveDurability: 0,
      headGasketDurability: 0,
      engineBlockDurability: 0,
      hp: 0,
      carV: 0,
      carAccel: 0,
      speedoV: 0,
      engineV: 0,
      mph: 0,
      engineDamage: 0,
      isEngineLightOn: 0,
      gearValue: 0,
      gr: 0,
      grs: [],
      theTime: 0,
    });
  }

  __Lscr102_block03(carXML) {
    const parser = this.xtra("xmlparser");
    parser.parseString(carXML);
    const parsed = parser.makeList();
    const attrs = parsed.getAProp("!ATTRIBUTES");

    this.w = attrs.getAProp("w");
    this.r = attrs.getAProp("r");
    this.hpi = parseInt(attrs.getAProp("hpi"), 10);
    this.stockRedLine = parseInt(attrs.getAProp("stockRedLine"), 10);
    this.redLine = parseInt(attrs.getAProp("redLine"), 10);
    this.revLimiter = parseInt(attrs.getAProp("revLimiter"), 10);
    this.detuneHp = parseFloat(attrs.getAProp("detuneHp"));
    this.UsInit = parseFloat(attrs.getAProp("UsInit"));
    this.UkInit = parseFloat(attrs.getAProp("UkInit"));
    this.stockBoost = parseFloat(attrs.getAProp("stockBoost"));
    this.boostSetting = parseFloat(attrs.getAProp("boostSetting"));
    this.boostType = attrs.getAProp("boostType");
    this.initBoost = parseFloat(attrs.getAProp("initBoost"));
    this.grs = attrs.getAProp("grs");
    this.fgr = parseFloat(attrs.getAProp("fgr"));
    this.NOS = attrs.getAProp("NOS");
    this.nitrousRemaining = parseFloat(attrs.getAProp("nitrousRemaining"));
    this.nitrousTankSize = parseFloat(attrs.getAProp("nitrousTankSize"));

    if (this.nitrousRemaining > this.nitrousTankSize) {
      this.nitrousRemaining = this.nitrousTankSize;
    }
    this.__Lscr102_block15(0);
  }

  __Lscr102_block04() {
    if (this.boostType === "T") {
      this.boostLag = 0.7 * this.boostSetting;
      this.boostRange = 1.7 * this.boostSetting;
    } else {
      this.boostLag = 0;
      this.boostRange = this.boostSetting;
    }
  }

  __Lscr102_block05() {
    if (this.runInterval !== VOID && this.runInterval?.forget) {
      this.runInterval.forget();
    }
    this.runInterval = this.timeout(this.runInterval)?.new?.(
      1000 / this.sendInterval,
      lingoSymbol("sendPos"),
    );
  }

  __Lscr102_block06() {
    if (this.runInterval !== VOID && this.runInterval?.forget) {
      this.runInterval.forget();
    }
  }

  __Lscr102_block07() {
    if (this.staging) {
      this.rt = this._system().milliseconds - this.timeAnchor;
    }
    if (this.carV >= 1320) {
      this.carAccel = 0;
    }
    return this.rt;
  }

  __Lscr102_block08(frameInput = 0) {
    // Main frame/physics block. This is source-shaped from stack-faithful
    // output, but still not byte-perfect.
    const throttle = Math.max(0, Math.min(1, frameInput));

    const now = this._system().milliseconds;
    this.theActualTime = this.theTime;
    this.theTime = now - this.timeFromLastFrame;
    if (this.theTime > 0.2) this.theTime = 0.2;
    this.avgFps = ((this.avgFps * this.fpsCount) + this.theActualTime) / 2;
    this.timeFromLastFrame = now;

    this.calculateExtraHpi?.();

    let power =
      this.hpi +
      this.boostCreatedPower +
      this.systemPower +
      this.ECUtune +
      this.compressionPowerDelta -
      this.engineDamage;

    if (this.nitrousRemaining > 0 && this.isNos) {
      let nosDelta = ((this.NOS * this.rpm) / this.stockRedLine) / 1.25;
      if (nosDelta > this.NOS) nosDelta = this.NOS;
      this.hp = this.hp + (this.hp * power);
      this.nitrousRemaining -= (this.NOS / 10000) * 2;
      this.sprite(this.flashSP)?.runEngineNOSCB?.(
        (this.nitrousRemaining / this.nitrousTankSize) * 100,
      );
    } else {
      this.hp = this.hp + (this.hp * power);
    }

    if (this.rpm > this.revLimiter + 200) {
      this.hp = this.hp / 2;
    }

    this.theTime = (this.hp * this.tqFlyFactor) / this.rpm;
    this.engineV = (((this.theTime * this.gr) * this.fgr) * this.rpmGearConversion);
    this.speedoV = this.engineV / this.r;
    this.mph = this.carV * this.vToMph;

    if (this.brake) {
      this.carAccel = this.brakeDecleration;
    }
    this.carV += this.carAccel * this.theTime;
    if (this.carV <= 0) {
      this.carAccel = 0;
      this.carV = 0;
      this.speedoV = this.carV;
    }

    this.engineV += this.fpsCount * this.theTime;
    if (this.engineV < 5) this.engineV = 5;
    if (this.engineV > 100) this.engineV = 100;

    const tq = this.__Lscr102_block10(this.rpm);
    this.hp = (tq * this.rpm) / this.tqFlyFactor;

    // Race gas / traction / aero cluster recovered around 0x03F4-0x067E.
    if (this.raceGas > VOID) {
      const usedRaceGas = ((5 * this.theActualTime) * this.hp) / 1000;
      if (usedRaceGas > this.raceGas) {
        power += (0.02 * this.raceGas) / usedRaceGas;
        this.raceGas = VOID;
      } else {
        power += 0.02;
        this.raceGas -= usedRaceGas;
      }
    }

    this.hp = ((100 - this.detuneHp) * (imm83_7489 / 100));
    this.carV = throttle * 8;
    this.hpi = (this.carV * this.carV) + imm83_7510;
    if (this.hpi < 0) this.hpi = 0;
    this.boostCreatedPower = this.carV * this.vToMph;
    this.systemPower = this.UsInit;
    if (this.tireStick > VOID) {
      this.systemPower += this.UsInit * 0.05;
    }
    this.ECUtune = this.UkInit;

    if (this.boostCreatedPower > 0) {
      this.compressionPowerDelta = this.boostCreatedPower / 100;
      if (this.compressionPowerDelta > power) this.compressionPowerDelta = power;
      this.compressionPowerDelta *= 3;
      this.systemPower += this.compressionPowerDelta;
      this.ECUtune -= this.compressionPowerDelta * 0.09;
      if (this.ECUtune < 0.6) this.ECUtune = 0.6;
    }

    this.slip = this.carAccel > 0;
    this.sprite(this.flashSP)?.runEngineTractionLightCB?.(this.slip ? 1 : 0);

    this.applyRecoveredDamageCluster();
    this.sprite(this.flashSP)?.runEngineCB?.(
      this.rpm,
      this.mph,
      this.s,
      this.boostPsi,
      VOID,
    );
  }

  __Lscr102_block09(rpm) {
    rpm = rpm / this.pb;
    if (rpm > 1) rpm = 1;

    if (this.stockBoost > 0) {
      this.pb = (((rpm * 1.7) - 0.7) * 7.5) / 100;
    } else {
      this.pb = (((rpm * this.boostRange) - this.boostLag) * imm83_16693) / 100;
    }

    if (this.pb < VOID) this.pb = VOID;
    this.boostPsi = (rpm * this.boostRange) - this.boostLag;
    if (this.boostPsi < 0) this.boostPsi = 0;

    this.compressionPowerDelta = 0;
    if (this.pistonCompressionLevel < 0) {
      this.compressionPowerDelta = imm83_16693;
    } else if (this.pistonCompressionLevel > 0) {
      this.compressionPowerDelta =
        ((this.pistonCompressionLevel * 2) - this.boostPsi) / imm83_16693;
    }
    if (this.compressionPowerDelta > 0) this.compressionPowerDelta = 0;

    let turboAir = 0;
    if (this.maxPsi > 0) {
      turboAir = (this.boostPsi / this.maxPsi) * this.turboFlow;
    } else {
      turboAir = this.turboFlow;
    }

    if (this.overallAirFlowLimit > turboAir) {
      this.stockBoost = this.overallAirFlowLimit - turboAir;
      this.airFlowLimit = turboAir;
    } else {
      this.stockBoost = turboAir - this.overallAirFlowLimit;
      this.airFlowLimit = this.overallAirFlowLimit;
    }

    let tunedFuel = this.airFlowLimit + this.chipSetting;
    if (tunedFuel > this.fuelFlowLimit) tunedFuel = this.fuelFlowLimit;

    this.dangerLevel = this.airFlowLimit;
    this.airFuelMeter = tunedFuel - this.airFlowLimit;
    this.airFuelDelta = Math.abs(this.airFuelMeter);
    if (this.airFuelDelta < 1) this.airFuelDelta = 1;

    let tuneScale;
    if (this.airFlowLimit > 0) {
      if (this.airFuelDelta > 5) {
        this.engineDamageRisk = this.dangerLevel * this.airFuelDelta * 0.09;
      } else {
        this.engineDamageRisk = this.dangerLevel * this.airFuelDelta * 0.07;
      }
      tuneScale = this.airFuelDelta * 2.5;
      if (tuneScale > 10) tuneScale = 10;
    } else {
      this.engineDamageRisk = (this.dangerLevel / this.airFuelDelta) / 100;
      tuneScale = 1 / this.airFuelDelta;
      if (tuneScale < 0.1) tuneScale = 0;
    }

    const halfStockBoost = this.stockBoost / 2;
    this.boostSetting = this.airFlowLimit - halfStockBoost;
    this.ECUtune = tuneScale / 100;
    this.systemPower = this.airhpi - (halfStockBoost / 100);
    this.boostCreatedPower = (this.pb * this.boostSetting) / 100;
    return this.boostCreatedPower;
  }

  __Lscr102_block10(rpm) {
    if (voidP(rpm)) rpm = this.idleRPM;
    if (rpm < this.idleRPM) rpm = this.idleRPM;
    if (rpm > 10000) rpm = 10000;

    const posTq = this.tqArray?.[parseInt(rpm / 100, 10)];
    // Tail still has imm83_8758 plus (posTq + 200).
    this.negTq = posTq + 200;
    return posTq;
  }

  __Lscr102_block11(init, btd) {
    init?.(init);
    this.btd = btd;
  }

  __Lscr102_block12() {
    if (this.gearValue > 0) {
      this.gr = this.grs[this.gearValue];
    } else {
      this.mph = 0;
      this.carAccel = 0;
      this.carV = 0;
    }

    this.slip = this.carAccel > this.carV;
    this.sprite(this.flashSP)?.runEngineTractionLightCB?.(this.slip);
    this.sprite(this.flashSP)?.runEngineGearUpdateCB?.(
      this.gearValue,
      this.engineV,
      this.speedoV,
      this.hp,
    );
  }

  __Lscr102_block13(direction) {
    this.gearValue += direction;
    if (this.gearValue === -1) {
      this.gr = this.grs[VOID];
      this.mph = 0;
      this.carAccel = 0;
      this.carV = 0;
      this.speedoV = this.engineV;
    } else if (this.gearValue === 0) {
      this.slip = 0;
      this.sprite(this.flashSP)?.runEngineTractionLightCB?.(0);
      this.engineV = this.speedoV;
    } else {
      this.gr = this.grs[this.gearValue];
    }
    this.sprite(this.flashSP)?.runEngineGearUpdateCB?.(this.gearValue);
  }

  __Lscr102_block14(brakeState) {
    this.brake = brakeState ? 1 : 0;
  }

  __Lscr102_block15(clutchValue) {
    if (clutchValue < 0.05) {
      this.clutchFeather = 0.05;
    } else if (clutchValue > 0.2) {
      this.clutchFeather = 0.2;
    } else {
      this.clutchFeather = clutchValue;
    }
  }

  __Lscr102_block16() {
    this.timeAnchor = 0;
    this.goodCounterRT = VOID;
    this.badCounterRT = VOID;
    this.goodCounterET = VOID;
    this.badCounterET = VOID;

    if (this.lightDelayTO !== VOID && this.lightDelayTO?.forget) {
      this.lightDelayTO.forget();
    }

    this.staging = 0;
    if (this.gearValue === -1) this.gearUp?.();

    const hash = this.createMd5Hash?.(0);
    if (this.raceType === "KOTH") this.KREADY?.(VOID, hash);
    else if (this.raceType === "QM") this.RREADY?.(VOID, hash);
    else if (this.raceType === "TEAMRIVAL") this.RIVREADY?.(VOID, hash);
    else if (this.raceType === "HTQ") this.HTQREADY?.(VOID, hash);
    else if (this.raceType === "HT") this.HTREADY?.(VOID, hash);
  }

  __Lscr102_block17(greenDelay) {
    const rawGreenDelay = greenDelay ?? this.greenDelay;
    this.greenDelay = parseInt(rawGreenDelay, 10);
    this.sprite(this.flashSP)?.setSpectateDelayCB?.(this.greenDelay);
    if (this.timeAnchor === 0) this.timeAnchor = this._system().milliseconds;

    // Bytecode dispatch table covers "1", "1T", "s", "sT", "o", "2", "2T".
    switch (String(rawGreenDelay)) {
      case "1":
      case "s":
      case "o":
        if (this.lightTO1 !== VOID && this.lightTO1?.forget) this.lightTO1.forget();
        this.stagingLightPos1 = 0;
        this.lightTO1 = this.timeout(String(rawGreenDelay))?.new?.(500, lingoSymbol("runLight"));
        break;
      case "1T":
      case "sT":
        if (this.lightTO1 !== VOID && this.lightTO1?.forget) this.lightTO1.forget();
        this.stagingLightPos1 = 0;
        this.lightTO1 = this.timeout(String(rawGreenDelay))?.new?.(
          1500 + (this.secondBuffer * 1000),
          lingoSymbol("runLight"),
        );
        break;
      case "2":
        if (this.lightTO2 !== VOID && this.lightTO2?.forget) this.lightTO2.forget();
        this.stagingLightPos2 = 0;
        this.lightTO2 = this.timeout(String(rawGreenDelay))?.new?.(500, lingoSymbol("runLight"));
        break;
      case "2T":
        if (this.lightTO2 !== VOID && this.lightTO2?.forget) this.lightTO2.forget();
        this.stagingLightPos2 = 0;
        this.lightTO2 = this.timeout(String(rawGreenDelay))?.new?.(
          1500 + (this.secondBuffer * 1000),
          lingoSymbol("runLight"),
        );
        break;
      default:
        break;
    }
  }

  __Lscr102_block18(period, name) {
    period = 500;
    this.sprite(this.flashSP)?.runEngineSetLightOnCB?.(name, this.amber1);

    if (this.greenDelay > VOID) {
      this.sprite(this.flashSP)?.runEngineSetLightOnCB?.(name, this.amber2);
      this.sprite(this.flashSP)?.runEngineSetLightOnCB?.(name, this.amber3);
      this.forget?.();
      this.timeGreen = (this._system().milliseconds + this.greenDelay) - 500;
      this.lightTO2 = this.timeout(period)?.new?.(this.greenDelay, lingoSymbol("runLight"));
    }

    if (name === this.p) {
      this.sprite(this.flashSP)?.runEngineSetLightOnCB?.(name, this.green);
    }

    if (name === this.b) {
      this.timeGreen = this._system().milliseconds;
      this.sprite(this.flashSP)?.raceStartTimeCB?.();
      this.forget?.();
      if (this.lightTO1 !== VOID && this.lightTO1?.forget) this.lightTO1.forget();
    }

    if (this.raceType === "CT" || this.raceType === this.CT) {
      this.sprite(this.flashSP)?.ctStartAnimateComputerCB?.();
      this.forget?.();
      if (this.lightTO2 !== VOID && this.lightTO2?.forget) this.lightTO2.forget();
    }
  }

  __Lscr102_block19() {
    let md5Source = EMPTY;
    md5Source += `${this.stockRedLine},`;
    md5Source += `${this.detuneHp},`;
    md5Source += `${this.stockBoost},`;
    md5Source += `${this.boostType},`;
    md5Source += `${this.boostSetting},`;

    for (let i = 1; i <= this.boostSetting; i++) {
      md5Source += `${this.grs?.[i]},`;
    }

    const fields = [
      this.fgr,
      this.redLine,
      this.revLimiter,
      this.UsInit,
      this.NOS,
      this.w,
      this.r,
      this.nitrousTankSize,
      this.maxPsi,
      this.hpi,
      this.airhpi,
      this.turboFlow,
      this.fuelFlowLimit,
      this.overallAirFlowLimit,
      this.cylinderNumber,
      this.valveNumber,
      this.pistonCompressionLevel,
      this.chipSetting,
      this.pistonDurability,
      this.rodDurability,
      this.valveDurability,
      this.headGasketDurability,
      this.engineBlockDurability,
      this.oilDurability,
      this.tqArray?.join?.(","),
      this.DAfp,
      this.g,
      this.rpmGearConversion,
      this.gConvSlipA,
      this.gConvSlipB,
      this.brakeDecleration,
      this.revLimiterDeceleration,
      this.idleRPM,
      this.tqFlyFactor,
      this.partBreakPoint,
      this.vToMph,
    ];
    md5Source += fields.map((field) => `${field},`).join("");
    md5Source += this.guid;

    if (this.engineDamage < 0) md5Source += this.nogood;
    // Additional integrity checks at 0x05D5-0x063B can append nogood.

    this.guid = this.xtra("caluMD5").getStringMD5(md5Source);
    return this.guid;
  }

  __Lscr102_block20(value) {
    let work = imm83_7482 * value;
    work += Math.random() / 5;
    while (work > 0.6) {
      work /= 2;
    }
    if (work < 0) work = 0;
    return Math.round(work * 1000) / 1000;
  }

  applyRecoveredDamageCluster() {
    // Recovered from block 8 tail. Still source-shaped rather than byte-perfect.
    this.engineDamageRisk += this.pistonCompressionLevel < 0
      ? this.pistonCompressionLevel * 1.8
      : (this.boostPsi * this.pistonCompressionLevel) * 0.5;

    if (this.engineDamageRisk < 0) this.engineDamageRisk = VOID;
    if (this.rpm > this.stockRedLine * 1.15) {
      this.dangerLevel *= 2;
      this.engineDamageRisk *= 80;
    }

    const partDamage = (durability, damageName, brokenName, maxBroken) => {
      let r = durability < this.dangerLevel
        ? this.dangerLevel * 0.95
        : durability * 0.95;
      let negTq = (this.dangerLevel - r) * imm83_16693;
      if (negTq < 0) negTq = 0;

      this[damageName] =
        (this[damageName] || 0) +
        (((this.engineDamageRisk / 100) * negTq) + (negTq * 0.05));
      this[brokenName] = Math.floor(this[damageName] / this.partBreakPoint);
      if (this[brokenName] > maxBroken) this[brokenName] = maxBroken;
    };

    partDamage(this.pistonDurability, "pistonDamage", "pistonBroken", this.cylinderNumber);
    partDamage(this.rodDurability, "rodDamage", "rodBroken", this.cylinderNumber);
    partDamage(this.valveDurability, "valveDamage", "valveBroken", this.valveNumber);
    partDamage(this.engineBlockDurability, "engineBlockDamage", "engineBlockBroken", 1);
    partDamage(this.headGasketDurability, "headGasketDamage", "headGasketBroken", 1);

    this.engineDamage =
      ((this.pistonBroken / this.cylinderNumber) * 0.4) +
      ((this.valveBroken / this.valveNumber) * 0.2) +
      ((this.rodBroken / this.cylinderNumber) * 0.1) +
      (this.headGasketBroken * 0.1) +
      (this.engineBlockBroken * 0.4);

    if (this.engineDamage > 0.65) this.engineDamage = 0.65;
    if (this.engineDamage > 0 && !this.isEngineLightOn) {
      this.isEngineLightOn = 1;
      this.sprite(this.flashSP)?.runEngineDamageLightCB?.();
    }
  }

  sprite(id) {
    return this.host.sprite?.(id);
  }

  timeout(name) {
    return this.host.timeout?.(name);
  }

  xtra(name) {
    return this.host.xtra?.(name);
  }

  _system() {
    return this.host._system || { milliseconds: Date.now() };
  }
}

/**
 * Full mechanical stack-lift appendix.
 *
 * This preserves the additional bytecode-supported lines that have not yet
 * been safely promoted into the hand-readable RaceEngine methods above.
 * Values are stored as source expressions plus original byte offsets, so no
 * guessed semantics are introduced.
 */
class Lscr102MechanicalTrace {
  constructor(host = {}) {
    this.host = host;
    this.trace = [];
  }

  __record(kind, payload) {
    this.trace.push({ kind, ...payload });
    return payload.value;
  }

  __names(block, names) { return this.__record("names", { block, names }); }
  __assign(block, name, value, offset) { return this.__record("assign", { block, name, value, offset }); }
  __expr(block, value, offset) { return this.__record("expr", { block, value, offset }); }
  __branch(block, value, offset) { return this.__record("branch", { block, value, offset }); }
  __unresolved(block, value, offset) { return this.__record("unresolved", { block, value, offset }); }

  runAll() {
    this.__stack_Lscr102_block00();
    this.__stack_Lscr102_block01();
    this.__stack_Lscr102_block02();
    this.__stack_Lscr102_block03();
    this.__stack_Lscr102_block04();
    this.__stack_Lscr102_block05();
    this.__stack_Lscr102_block06();
    this.__stack_Lscr102_block07();
    this.__stack_Lscr102_block08();
    this.__stack_Lscr102_block09();
    this.__stack_Lscr102_block10();
    this.__stack_Lscr102_block11();
    this.__stack_Lscr102_block12();
    this.__stack_Lscr102_block13();
    this.__stack_Lscr102_block14();
    this.__stack_Lscr102_block15();
    this.__stack_Lscr102_block16();
    this.__stack_Lscr102_block17();
    this.__stack_Lscr102_block18();
    this.__stack_Lscr102_block19();
    this.__stack_Lscr102_block20();
    return this.trace;
  }

  __stack_Lscr102_block00() {
    const block = "__stack_Lscr102_block00";
    this.__unresolved(block, "offset=0 codeLen=251", null);
    this.__unresolved(block, "0x7D literal_0 unresolved stack=[]", "0x0014");
    this.__assign(block, "id_3", "function_4", "0x0021");
    this.__expr(block, "id_2", "0x0024");
    this.__assign(block, "id_5", "function_6", "0x002E");
    this.__expr(block, "id_2", "0x0031");
    this.__assign(block, "id_7", "function_8", "0x003B");
    this.__expr(block, "id_2", "0x003E");
    this.__assign(block, "id_9", "function_10", "0x0048");
    this.__expr(block, "id_2", "0x004B");
    this.__assign(block, "id_11", "function_12", "0x0055");
    this.__expr(block, "id_2", "0x0058");
    this.__assign(block, "id_13", "function_14", "0x0062");
    this.__expr(block, "id_2", "0x0065");
    this.__assign(block, "id_15", "function_16", "0x006F");
    this.__expr(block, "id_2", "0x0072");
    this.__assign(block, "id_17", "function_18", "0x007C");
    this.__expr(block, "id_2", "0x007F");
    this.__assign(block, "id_19", "function_20", "0x0089");
    this.__expr(block, "id_2", "0x008C");
    this.__assign(block, "id_21", "function_22", "0x0096");
    this.__expr(block, "id_2", "0x0099");
    this.__assign(block, "id_23", "function_24", "0x00A3");
    this.__expr(block, "id_2", "0x00A6");
    this.__assign(block, "id_25", "function_26", "0x00B0");
    this.__expr(block, "id_2", "0x00B3");
    this.__assign(block, "id_27", "function_28", "0x00BD");
    this.__expr(block, "id_2", "0x00C0");
    this.__assign(block, "id_29", "function_30", "0x00CA");
    this.__expr(block, "id_2", "0x00CD");
    this.__assign(block, "id_31", "function_32", "0x00D7");
    this.__expr(block, "id_2", "0x00DA");
    this.__assign(block, "id_33", "function_34", "0x00E4");
    this.__expr(block, "id_2", "0x00E7");
    this.__assign(block, "id_35", "function_36", "0x00F1");
    this.__expr(block, "id_2", "0x00F4");
    this.__assign(block, "id_37", "function_38", "0x00FE");
    this.__expr(block, "id_2", "0x0101");
    this.__assign(block, "id_39", "function_40", "0x010B");
    this.__expr(block, "id_2", "0x010E");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block01() {
    const block = "__stack_Lscr102_block01";
    this.__unresolved(block, "offset=344 codeLen=456", null);
    this.__names(block, "sendInterval, secondBuffer, DAfp, \u0001\u0000g");
    this.__assign(block, "sendInterval", "VOID", "0x0016");
    this.__assign(block, "secondBuffer", "VOID", "0x001C");
    this.__assign(block, "DAfp", "literal_3", "0x0024");
    this.__assign(block, "id_4", "literal_5", "0x002C");
    this.__assign(block, "id_6", "id_7", "0x0034");
    this.__assign(block, "id_8", "id_9", "0x003C");
    this.__assign(block, "id_10", "60", "0x0044");
    this.__assign(block, "id_11", "id_12", "0x004C");
    this.__assign(block, "id_13", "id_14", "0x0054");
    this.__assign(block, "id_15", "750", "0x005C");
    this.__assign(block, "id_16", "5252", "0x0064");
    this.__assign(block, "id_17", "id_18", "0x006C");
    this.__assign(block, "id_19", "id_20", "0x0074");
    this.__assign(block, "id_21", "id_22", "0x007C");
    this.__assign(block, "id_23", "VOID", "0x0082");
    this.__assign(block, "id_24", "100", "0x008A");
    this.__assign(block, "id_25", "1000", "0x0092");
    this.__assign(block, "id_26", "10000", "0x009A");
    this.__assign(block, "id_27", "id_28", "0x00A2");
    this.__assign(block, "id_29", "13", "0x00AA");
    this.__assign(block, "id_30", "id_31", "0x00B2");
    this.__assign(block, "id_32", "id_33", "0x00BA");
    this.__assign(block, "id_34", "id_35", "0x00C2");
    this.__assign(block, "id_36", "id_37", "0x00CA");
    this.__assign(block, "id_38", "9", "0x00D2");
    this.__assign(block, "id_39", "299", "0x00DA");
    this.__assign(block, "id_40", "300", "0x00E2");
    this.__assign(block, "id_41", "id_42", "0x00EA");
    this.__assign(block, "id_43", "DAfp", "0x00F2");
    this.__assign(block, "id_44", "literal_5", "0x00FA");
    this.__assign(block, "id_45", "50", "0x0102");
    this.__assign(block, "id_46", "8", "0x010A");
    this.__assign(block, "id_47", "id_48", "0x0112");
    this.__assign(block, "id_49", "id_50", "0x011A");
    this.__assign(block, "id_51", "literal_3", "0x0122");
    this.__assign(block, "id_52", "id_53", "0x012A");
    this.__assign(block, "id_54", "id_55", "0x0132");
    this.__assign(block, "id_56", "10", "0x013A");
    this.__assign(block, "id_57", "id_58", "0x0142");
    this.__assign(block, "id_59", "id_60", "0x014A");
    this.__assign(block, "id_61", "200", "0x0152");
    this.__assign(block, "id_62", "id_63", "0x015A");
    this.__assign(block, "id_64", "1320", "0x0162");
    this.__assign(block, "id_65", "760", "0x016A");
    this.__assign(block, "id_66", "7", "0x0172");
    this.__assign(block, "id_67", "id_68", "0x017A");
    this.__assign(block, "id_69", "id_70", "0x0182");
    this.__assign(block, "id_71", "id_72", "0x018A");
    this.__assign(block, "id_73", "80", "0x0192");
    this.__assign(block, "id_74", "id_75", "0x019A");
    this.__assign(block, "id_76", "id_77", "0x01A2");
    this.__assign(block, "id_78", "id_18", "0x01AA");
    this.__assign(block, "id_79", "id_80", "0x01B2");
    this.__assign(block, "id_81", "id_82", "0x01BA");
    this.__assign(block, "id_83", "id_31", "0x01C2");
    this.__assign(block, "id_84", "id_85", "0x01CA");
    this.__assign(block, "id_86", "id_87", "0x01D2");
    this.__assign(block, "id_88", "/*stack*/[/*stack*/]", "0x01D8");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block02() {
    const block = "__stack_Lscr102_block02";
    this.__unresolved(block, "offset=3032 codeLen=496", null);
    this.__names(block, "goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps, fpsCount, guid, raceType, timeAnchor, c0, staging, stagingLightPos1, stagingLightPos2, greenDelay, preStaged, staged, brake, isMidMd5sent, isNos, pb, turboFlow, c0_0075, stockRedLine, avgDurability, pistonDurability, rodDurability, valveDurability, headGasketDurability, engineBlockDurability, c5, hp, s, c13, carV, carAccel, speedoV, engineV, mph, engineDamage, isEngineLightOn");
    this.__assign(block, "goodCounterRT", "VOID", "0x0016");
    this.__assign(block, "badCounterRT", "VOID", "0x001C");
    this.__assign(block, "goodCounterET", "VOID", "0x0022");
    this.__assign(block, "badCounterET", "VOID", "0x0028");
    this.__assign(block, "avgFps", "VOID", "0x002E");
    this.__assign(block, "fpsCount", "VOID", "0x0034");
    this.__assign(block, "guid", "EMPTY", "0x003C");
    this.__assign(block, "raceType", "param_goodCounterRT", "0x0044");
    this.__assign(block, "timeAnchor", "c0", "0x004D");
    this.__assign(block, "staging", "1", "0x0053");
    this.__assign(block, "stagingLightPos1", "c0", "0x005C");
    this.__assign(block, "stagingLightPos2", "c0", "0x0065");
    this.__assign(block, "greenDelay", "VOID", "0x006B");
    this.__assign(block, "preStaged", "0", "0x0071");
    this.__assign(block, "staged", "0", "0x0077");
    this.__assign(block, "brake", "0", "0x007D");
    this.__assign(block, "isMidMd5sent", "0", "0x0083");
    this.__assign(block, "isNos", "c0", "0x008C");
    this.__assign(block, "pb", "((turboFlow * c0_0075) * stockRedLine)", "0x009F");
    this.__assign(block, "avgDurability", "(/*stack*/ / (((((pistonDurability + rodDurability) + valveDurability) + headGasketDurability) + engineBlockDurability) / 1.6693))", "0x00C2");
    this.__assign(block, "hp", "c0", "0x00CB");
    this.__assign(block, "s", "(/*stack*/ mod c13)", "0x00D5");
    this.__assign(block, "carV", "c0", "0x00DE");
    this.__assign(block, "carAccel", "c0", "0x00E7");
    this.__assign(block, "speedoV", "c0", "0x00F0");
    this.__assign(block, "engineV", "c0", "0x00F9");
    this.__assign(block, "mph", "c0", "0x0102");
    this.__assign(block, "engineDamage", "c0", "0x010B");
    this.__assign(block, "isEngineLightOn", "0", "0x0111");
    this.__assign(block, "gearValue", "c0", "0x011A");
    this.__assign(block, "gr", "grs[VOID]", "0x0125");
    this.__assign(block, "theTime", "literal_45", "0x012D");
    this.__assign(block, "id_46", "literal_45", "0x0135");
    this.__assign(block, "id_47", "VOID", "0x013B");
    this.__assign(block, "id_48", "c0", "0x0144");
    this.__assign(block, "id_49", "c0", "0x014D");
    this.__assign(block, "id_50", "pb", "0x0155");
    this.__unresolved(block, "0x34 unresolved stack=[id_51, VOID_SENTINEL]", "0x0161");
    this.__branch(block, "if not (id_51 = VOID_SENTINEL) then -- jump 15", "0x0162");
    this.__expr(block, "id_53()", "0x0171");
    this.__unresolved(block, "0x34 unresolved stack=[id_51, id_54, VOID_SENTINEL]", "0x017A");
    this.__branch(block, "if not (id_54 = VOID_SENTINEL) then -- jump 15", "0x017B");
    this.__expr(block, "id_53()", "0x018A");
    this.__unresolved(block, "0x34 unresolved stack=[id_51, id_54, id_55, VOID_SENTINEL]", "0x0193");
    this.__branch(block, "if not (id_55 = VOID_SENTINEL) then -- jump 15", "0x0194");
    this.__expr(block, "id_53()", "0x01A3");
    this.__unresolved(block, "0x34 unresolved stack=[id_51, id_54, id_55, id_56, VOID_SENTINEL]", "0x01AC");
    this.__branch(block, "if not (id_56 = VOID_SENTINEL) then -- jump 15", "0x01AD");
    this.__expr(block, "id_53()", "0x01BC");
    this.__assign(block, "id_57", "id_58", "0x01C1");
    this.__expr(block, "id_56", "0x01C4");
    this.__assign(block, "id_59", "id_58", "0x01C9");
    this.__expr(block, "id_55", "0x01CC");
    this.__assign(block, "id_60", "id_58", "0x01D1");
    this.__expr(block, "id_54", "0x01D4");
    this.__assign(block, "id_61", "c0", "0x01DA");
    this.__expr(block, "id_51", "0x01DD");
    this.__assign(block, "id_62", "0", "0x01E0");
    this.__assign(block, "id_63", "id_64", "0x01E9");
    this.__assign(block, "id_65", "(id_66 * id_67)", "0x01F7");
    this.__expr(block, "id_68()", "0x0203");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block03() {
    const block = "__stack_Lscr102_block03";
    this.__unresolved(block, "offset=5972 codeLen=1268", null);
    this.__names(block, "xtra, xmlparser, parseString, makeList, n2, w, parseInt, !ATTRIBUTES, r, hpi, parseFloat, v, stockRedLine, a, redLine, n, revLimiter, o, s, detuneHp, b, UsInit, p, UkInit, c0_7, stockBoost, c, boostSetting, e, boostType, d, initBoost, grs, Array, f, g, h, i, j, k");
    this.__assign(block, "xtra", "(xtra ^ xmlparser)", "0x001E");
    this.__expr(block, "parseString(param_xtra)", "0x002F");
    this.__assign(block, "xmlparser", "n2", "0x003F");
    this.__expr(block, "xtra[xtra[makeList()]]", "0x0042");
    this.__assign(block, "xtra", "VOID", "0x0044");
    this.__assign(block, "w", "\"!ATTRIBUTES\"(r)", "0x0059");
    this.__expr(block, "xmlparser", "0x005C");
    this.__assign(block, "hpi", "\"!ATTRIBUTES\"(v)", "0x006E");
    this.__expr(block, "xmlparser", "0x0071");
    this.__assign(block, "stockRedLine", "\"!ATTRIBUTES\"(a)", "0x0083");
    this.__expr(block, "xmlparser", "0x0086");
    this.__assign(block, "redLine", "\"!ATTRIBUTES\"(n)", "0x0098");
    this.__expr(block, "xmlparser", "0x009B");
    this.__assign(block, "revLimiter", "\"!ATTRIBUTES\"(o)", "0x00AD");
    this.__expr(block, "xmlparser", "0x00B0");
    this.__assign(block, "r", "\"!ATTRIBUTES\"(s)", "0x00C2");
    this.__expr(block, "xmlparser", "0x00C5");
    this.__assign(block, "detuneHp", "\"!ATTRIBUTES\"(b)", "0x00D7");
    this.__expr(block, "xmlparser", "0x00DA");
    this.__assign(block, "UsInit", "\"!ATTRIBUTES\"(p)", "0x00EC");
    this.__expr(block, "xmlparser", "0x00EF");
    this.__assign(block, "UkInit", "(c0_7 * UsInit)", "0x00FA");
    this.__expr(block, "parseFloat", "0x00FD");
    this.__assign(block, "stockBoost", "\"!ATTRIBUTES\"(c)", "0x010F");
    this.__expr(block, "xmlparser", "0x0112");
    this.__assign(block, "boostSetting", "\"!ATTRIBUTES\"(e)", "0x0124");
    this.__expr(block, "xmlparser", "0x0127");
    this.__assign(block, "boostType", "d", "0x0132");
    this.__expr(block, "\"!ATTRIBUTES\"", "0x0135");
    this.__expr(block, "initBoost()", "0x013E");
    this.__assign(block, "grs", "xmlparser(\"!ATTRIBUTES\"(i), parseFloat, xmlparser, \"!ATTRIBUTES\"(j), parseFloat, xmlparser, \"!ATTRIBUTES\"(k))", "0x01B7");
    this.__expr(block, "parseFloat", "0x01BA");
    this.__assign(block, "fgr", "\"!ATTRIBUTES\"(l)", "0x01CC");
    this.__expr(block, "xmlparser", "0x01CF");
    this.__assign(block, "NOS", "\"!ATTRIBUTES\"(q)", "0x01E1");
    this.__expr(block, "xmlparser", "0x01E4");
    this.__assign(block, "nitrousRemaining", "\"!ATTRIBUTES\"(m)", "0x01F6");
    this.__expr(block, "xmlparser", "0x01F9");
    this.__assign(block, "nitrousTankSize", "\"!ATTRIBUTES\"(t)", "0x020B");
    this.__expr(block, "xmlparser", "0x020E");
    this.__branch(block, "if not (nitrousRemaining > nitrousTankSize) then -- jump 12", "0x0217");
    this.__assign(block, "nitrousRemaining", "nitrousTankSize", "0x0220");
    this.__expr(block, "parseFloat", "0x0223");
    this.__expr(block, "setClutch(literal_49)", "0x022F");
    this.__assign(block, "id_50", "Array()", "0x0238");
    this.__expr(block, "parseFloat", "0x023B");
    this.__assign(block, "id_50", "param_xmlparser", "0x0240");
    this.__expr(block, "parseInt", "0x0243");
    this.__assign(block, "id_51", "\"!ATTRIBUTES\"(id_52)", "0x0255");
    this.__expr(block, "xmlparser", "0x0258");
    this.__assign(block, "id_53", "\"!ATTRIBUTES\"(w)", "0x026A");
    this.__expr(block, "xmlparser", "0x026D");
    this.__assign(block, "id_54", "\"!ATTRIBUTES\"(id_55)", "0x027F");
    this.__expr(block, "xmlparser", "0x0282");
    this.__assign(block, "id_56", "\"!ATTRIBUTES\"(id_57)", "0x0294");
    this.__expr(block, "xmlparser", "0x0297");
    this.__assign(block, "id_58", "\"!ATTRIBUTES\"(id_59)", "0x02A9");
    this.__expr(block, "xmlparser", "0x02AC");
    this.__assign(block, "id_60", "\"!ATTRIBUTES\"(id_61)", "0x02BE");
    this.__expr(block, "xmlparser", "0x02C1");
    this.__assign(block, "id_62", "\"!ATTRIBUTES\"(id_63)", "0x02D3");
    this.__expr(block, "xmlparser", "0x02D6");
    this.__assign(block, "id_64", "\"!ATTRIBUTES\"(id_65)", "0x02E8");
    this.__expr(block, "xmlparser", "0x02EB");
    this.__assign(block, "id_66", "\"!ATTRIBUTES\"(id_67)", "0x02FD");
    this.__expr(block, "xmlparser", "0x0300");
    this.__assign(block, "id_68", "\"!ATTRIBUTES\"(id_69)", "0x0312");
    this.__expr(block, "xmlparser", "0x0315");
    this.__assign(block, "id_70", "\"!ATTRIBUTES\"(id_71)", "0x0327");
    this.__expr(block, "xmlparser", "0x032A");
    this.__assign(block, "id_72", "\"!ATTRIBUTES\"(id_73)", "0x033C");
    this.__expr(block, "xmlparser", "0x033F");
    this.__assign(block, "id_74", "\"!ATTRIBUTES\"(id_75)", "0x0351");
    this.__expr(block, "xmlparser", "0x0354");
    this.__assign(block, "id_76", "\"!ATTRIBUTES\"(id_77)", "0x0366");
    this.__expr(block, "xmlparser", "0x0369");
    this.__assign(block, "id_78", "\"!ATTRIBUTES\"(id_79)", "0x037B");
    this.__expr(block, "xmlparser", "0x037E");
    this.__assign(block, "id_80", "\"!ATTRIBUTES\"(id_81)", "0x0390");
    this.__expr(block, "xmlparser", "0x0393");
    this.__assign(block, "id_82", "\"!ATTRIBUTES\"(id_83)", "0x03A5");
    this.__expr(block, "xmlparser", "0x03A8");
    this.__assign(block, "id_84", "\"!ATTRIBUTES\"(id_85)", "0x03BA");
    this.__expr(block, "xmlparser", "0x03BD");
    this.__assign(block, "id_86", "(((\"!ATTRIBUTES\"(id_87) / id_88) * id_89) * id_60)", "0x03DE");
    this.__expr(block, "xmlparser", "0x03E1");
    this.__assign(block, "id_90", "(((\"!ATTRIBUTES\"(id_91) / id_88) * id_89) * id_60)", "0x0402");
    this.__expr(block, "xmlparser", "0x0405");
    this.__assign(block, "id_92", "(((\"!ATTRIBUTES\"(id_93) / id_88) * id_89) * id_62)", "0x0426");
    this.__expr(block, "xmlparser", "0x0429");
    this.__assign(block, "id_94", "((\"!ATTRIBUTES\"(id_95) / id_88) * id_89)", "0x0445");
    this.__expr(block, "xmlparser", "0x0448");
    this.__assign(block, "id_96", "((\"!ATTRIBUTES\"(id_97) / id_88) * id_89)", "0x0464");
    this.__expr(block, "xmlparser", "0x0467");
    this.__assign(block, "id_98", "\"!ATTRIBUTES\"(id_99)", "0x0479");
    this.__expr(block, "xmlparser", "0x047C");
    this.__assign(block, "id_100", "\"!ATTRIBUTES\"(id_101)", "0x048E");
    this.__expr(block, "xmlparser", "0x0491");
    this.__assign(block, "id_102", "\"!ATTRIBUTES\"(id_103)", "0x04A3");
    this.__expr(block, "xmlparser", "0x04A6");
    this.__assign(block, "id_104", "\"!ATTRIBUTES\"(id_105)", "0x04B8");
    this.__expr(block, "xmlparser", "0x04BB");
    this.__assign(block, "id_106", "\"!ATTRIBUTES\"(id_107)", "0x04CD");
    this.__expr(block, "xmlparser", "0x04D0");
    this.__assign(block, "id_108", "\"!ATTRIBUTES\"(id_109)", "0x04E2");
    this.__expr(block, "xmlparser", "0x04E5");
    this.__assign(block, "id_110", "id_86", "0x04EB");
    this.__expr(block, "parseInt", "0x04EE");
    this.__assign(block, "id_111", "VOID", "0x04F1");
    this.__expr(block, "parseFloat", "0x04F4");
    this.__assign(block, "id_112", "VOID", "0x04F7");
    this.__expr(block, "parseFloat", "0x04FA");
    this.__expr(block, "id_113(id_114)", "0x0507");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block04() {
    const block = "__stack_Lscr102_block04";
    this.__unresolved(block, "offset=10964 codeLen=60", null);
    this.__names(block, "boostType, T, boostLag, c0_7, boostSetting, boostRange, c1_7, c0");
    this.__branch(block, "if not (boostType = T) then -- jump 34", "0x001B");
    this.__assign(block, "boostLag", "(c0_7 * boostSetting)", "0x0029");
    this.__assign(block, "boostRange", "(c1_7 * boostSetting)", "0x0037");
    this.__unresolved(block, "jump 21", "0x003B");
    this.__assign(block, "boostLag", "c0", "0x0043");
    this.__assign(block, "boostRange", "boostSetting", "0x004C");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block05() {
    const block = "__stack_Lscr102_block05";
    this.__unresolved(block, "offset=11368 codeLen=59", null);
    this.__names(block, "runInterval, object, forget, timeout, sendInterval, symbol, sendPos");
    this.__branch(block, "if not (runInterval = VOID_SENTINEL) then -- jump 15", "0x001D");
    this.__expr(block, "forget()", "0x002C");
    this.__assign(block, "runInterval", "timeout(runInterval).new((1000 / sendInterval), symbol(sendPos))", "0x004B");
    this.__expr(block, "runInterval", "0x004E");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block06() {
    const block = "__stack_Lscr102_block06";
    this.__unresolved(block, "offset=11760 codeLen=25", null);
    this.__names(block, "runInterval, object, forget");
    this.__branch(block, "if not (runInterval = VOID_SENTINEL) then -- jump 15", "0x001D");
    this.__expr(block, "forget()", "0x002C");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block07() {
    const block = "__stack_Lscr102_block07";
    this.__unresolved(block, "offset=11992 codeLen=301", null);
    this.__names(block, "staging, rt, c1, raceType, KOTH, RIVAL, TEAMRIVAL, HT, gearValue, c0, STG, s, carV, carAccel, c1320, timeAnchor, INT, _system, milliseconds");
    this.__unresolved(block, "branch 120", "0x0018");
    this.__branch(block, "if not (staging <> (rt mod c1)) then -- jump 104", "0x0024");
    this.__unresolved(block, "0x0B unresolved stack=[((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)]", "0x0048");
    this.__branch(block, "if not (raceType = HT) then -- jump 60", "0x0050");
    this.__branch(block, "if not (gearValue < c0) then -- jump 28", "0x005C");
    this.__expr(block, "((/*stack*/ or (raceType = KOTH)) > (raceType = RIVAL))((raceType = TEAMRIVAL), STG, ((s mod carV) mod carAccel))", "0x0075");
    this.__unresolved(block, "jump 23", "0x0076");
    this.__expr(block, "STG(s, carV, carAccel)", "0x008C");
    this.__unresolved(block, "jump 180", "0x008D");
    this.__branch(block, "if not (s < c1320) then -- jump 155", "0x00A5");
    this.__branch(block, "if not (timeAnchor = VOID) then -- jump 70", "0x00AE");
    this.__unresolved(block, "0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)]", "0x00D2");
    this.__branch(block, "if not (raceType = HT) then -- jump 23", "0x00DA");
    this.__expr(block, "STG(s, carV, carAccel)", "0x00F1");
    this.__unresolved(block, "jump 79", "0x00F2");
    this.__unresolved(block, "0x0B unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL)]", "0x0115");
    this.__branch(block, "if not (raceType = HT) then -- jump 35", "0x011D");
    this.__unresolved(block, "0x04 unresolved stack=[(((/*stack*/ <> (rt mod c1)) or (raceType = KOTH)) > (raceType = RIVAL)), (((raceType = TEAMRIVAL) or (raceType = KOTH)) > (raceType = RIVAL)), (raceType = TEAMRIVAL), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848]", "0x013F");
    this.__expr(block, "1.4848", "0x0140");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block08() {
    const block = "__stack_Lscr102_block08";
    this.__unresolved(block, "offset=14012 codeLen=7823", null);
    this.__names(block, "c0, c1, timeFromLastFrame, theTime, _system, milliseconds, c1000, theActualTime, c0_2, avgFps, fpsCount, calculateExtraHpi, carV, c0_5, carAccel, gearValue, hpi, boostCreatedPower, systemPower, ECUtune, compressionPowerDelta, engineDamage, isNos, nitrousRemaining, NOS, rpm, stockRedLine, c1_25, hp, c10000, c2, sprite, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, gr");
    this.__branch(block, "if not (param_c0 < c0) then -- jump 14", "0x001B");
    this.__assign(block, "c0", "c0", "0x0023");
    this.__unresolved(block, "jump 22", "0x0027");
    this.__branch(block, "if not (param_c0 > c1) then -- jump 11", "0x0031");
    this.__assign(block, "c0", "c1", "0x0039");
    this.__branch(block, "if not (timeFromLastFrame > c0) then -- jump 80", "0x0045");
    this.__unresolved(block, "jump 7734", "0x0059");
    this.__unresolved(block, "0x03 unresolved stack=[_system, (milliseconds - timeFromLastFrame), 1.6693]", "0x005D");
    this.__expr(block, "1.6693", "0x005E");
    this.__assign(block, "theActualTime", "theTime", "0x0064");
    this.__expr(block, "(milliseconds - timeFromLastFrame)", "0x0067");
    this.__branch(block, "if not (theTime > c0_2) then -- jump 12", "0x0070");
    this.__assign(block, "theTime", "c0_2", "0x0079");
    this.__expr(block, "_system", "0x007C");
    this.__assign(block, "avgFps", "(((avgFps * fpsCount) + theActualTime) / 1.6682)", "0x0092");
    this.__assign(block, "timeFromLastFrame", "milliseconds", "0x009D");
    this.__expr(block, "_system", "0x00A0");
    this.__expr(block, "calculateExtraHpi()", "0x00A9");
    this.__assign(block, "c0", "0.7451", "0x00C8");
    this.__expr(block, "(theTime * theTime)", "0x00CB");
    this.__branch(block, "if not (gearValue = c0) then -- jump 718", "0x00D4");
    this.__assign(block, "c1", "(((((hpi + boostCreatedPower) + systemPower) + ECUtune) + compressionPowerDelta) - engineDamage)", "0x00F5");
    this.__expr(block, "(c0_5 * carAccel)", "0x00F8");
    this.__branch(block, "if not (nitrousRemaining > c0) then -- jump 123", "0x010A");
    this.__assign(block, "timeFromLastFrame", "(((NOS * rpm) / stockRedLine) / c1_25)", "0x0121");
    this.__expr(block, "(/*stack*/ = (carV * theTime)[isNos])", "0x0124");
    this.__branch(block, "if not (timeFromLastFrame > NOS) then -- jump 11", "0x012C");
    this.__assign(block, "timeFromLastFrame", "NOS", "0x0134");
    this.__expr(block, "((hp * c1) - 0.6966)", "0x014A");
    this.__assign(block, "nitrousRemaining", "(nitrousRemaining - ((NOS / c10000) * c2))", "0x015F");
    this.__expr(block, "hp", "0x0162");
    this.__expr(block, "runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x0182");
    this.__unresolved(block, "jump 21", "0x0183");
    this.__assign(block, "hp", "(hp + (hp * c1))", "0x0194");
    this.__expr(block, "sprite(flashSP)", "0x0197");
    this.__assign(block, "hp", "(hp * param_c0)", "0x01A1");
    this.__branch(block, "if not (rpm > (revLimiter + c200)) then -- jump 17", "0x01B2");
    this.__assign(block, "hp", "(hp / c2)", "0x01C0");
    this.__assign(block, "theTime", "((hp * tqFlyFactor) / rpm)", "0x01D2");
    this.__assign(block, "_system", "(((theTime * gr) * fgr) * rpmGearConversion)", "0x01E8");
    this.__assign(block, "milliseconds", "(_system / r)", "0x01F4");
    this.__assign(block, "c1000", "(negTq * c9)", "0x0201");
    this.__unresolved(block, "branch 20801", "0x0215");
    this.__assign(block, "id_16693", "0.5639", "0x0227");
    this.__unresolved(block, "0x19 unresolved stack=[param_c0, (stockRedLine + c1000), 0.7511, rpm, (theActualTime - c299)]", "0x022B");
    this.__branch(block, "if not ((theActualTime - c299) < theActualTime) then -- jump 60", "0x022F");
    this.__assign(block, "c0_2", "(milliseconds - c1000)", "0x023A");
    this.__expr(block, "rpm", "0x023D");
    this.__branch(block, "if not (c0_2 > c0) then -- jump 35", "0x0245");
    this.__assign(block, "c1000", "(rpm + (((theActualTime - c300) * 0.7299) / c300))", "0x0265");
    this.__expr(block, "c0_2", "0x0268");
    this.__unresolved(block, "jump 17", "0x0269");
    this.__assign(block, "c1000", "((c1000 mod negTq) * c5_5)", "0x0276");
    this.__expr(block, "0.7511", "0x0279");
    this.__unresolved(block, "0x0B unresolved stack=[param_c0, (stockRedLine + c1000), (c1000 < c0)]", "0x0284");
    this.__branch(block, "if not (param_c0 = c0) then -- jump 11", "0x028C");
    this.__assign(block, "c1000", "c0", "0x0294");
    this.__expr(block, "(c1000 < c0)", "0x0297");
    this.__assign(block, "avgFps", "(milliseconds - c1000)", "0x029F");
    this.__expr(block, "(stockRedLine + c1000)", "0x02A2");
    this.__expr(block, "0.7767", "0x02B4");
    this.__branch(block, "if not (rpm > revLimiter) then -- jump 11", "0x02BD");
    this.__assign(block, "fpsCount", "revLimiterDeceleration", "0x02C5");
    this.__expr(block, "(w / g)", "0x02C8");
    this.__unresolved(block, "branch 15", "0x02CD");
    this.__assign(block, "carAccel", "brakeDecleration", "0x02D5");
    this.__expr(block, "brake", "0x02D8");
    this.__unresolved(block, "jump 13", "0x02D9");
    this.__assign(block, "carAccel", "(avgFps mod c2)", "0x02E2");
    this.__expr(block, "param_c0", "0x02E5");
    this.__assign(block, "carV", "(carV + (carAccel * theTime))", "0x02F5");
    this.__branch(block, "if not (carV <= c0) then -- jump 21", "0x0301");
    this.__assign(block, "carAccel", "c0", "0x030A");
    this.__assign(block, "carV", "c0", "0x0313");
    this.__assign(block, "speedoV", "carV", "0x031C");
    this.__assign(block, "engineV", "(engineV + (fpsCount * theTime))", "0x032E");
    this.__branch(block, "if not (engineV < c5) then -- jump 15", "0x033A");
    this.__assign(block, "engineV", "c5", "0x0343");
    this.__unresolved(block, "jump 24", "0x0347");
    this.__branch(block, "if not (engineV > c100) then -- jump 12", "0x0352");
    this.__assign(block, "engineV", "c100", "0x035B");
    this.__unresolved(block, "0x19 unresolved stack=[engineV, (gConvSlipA * r), ((0.7811 * gr) * c50), (fgr * rpmGearConversion), 0.7478]", "0x0387");
    this.__expr(block, "0.7478", "0x0388");
    this.__expr(block, "getTorque()", "0x0391");
    this.__assign(block, "mph", "(carV * vToMph)", "0x039C");
    this.__expr(block, "(fgr * rpmGearConversion)", "0x039F");
    this.__unresolved(block, "jump 1607", "0x03A0");
    this.__branch(block, "if not (((0.7811 * gr) * c50) = slip[launchControl]) then -- jump 11", "0x03AF");
    this.__assign(block, "c0", "c0", "0x03B7");
    this.__expr(block, "(gConvSlipA * r)", "0x03BA");
    this.__assign(block, "hp", "((posTq * rpm) / tqFlyFactor)", "0x03CA");
    this.__expr(block, "engineV", "0x03CD");
    this.__assign(block, "c1", "(((((hpi + boostCreatedPower) + systemPower) + ECUtune) + compressionPowerDelta) - engineDamage)", "0x03EB");
    this.__branch(block, "if not (raceGas > VOID) then -- jump 92", "0x03F4");
    this.__assign(block, "calculateExtraHpi", "(((c5 * theActualTime) * hp) / c1000)", "0x040B");
    this.__branch(block, "if not (calculateExtraHpi > raceGas) then -- jump 33", "0x0416");
    this.__assign(block, "c1", "(c1 + ((c0_02 * raceGas) / calculateExtraHpi))", "0x042B");
    this.__assign(block, "raceGas", "VOID", "0x0431");
    this.__unresolved(block, "jump 28", "0x0435");
    this.__assign(block, "c1", "(c1 + c0_02)", "0x0440");
    this.__assign(block, "raceGas", "(raceGas - calculateExtraHpi)", "0x044D");
    this.__branch(block, "if not (nitrousRemaining > c0) then -- jump 127", "0x0462");
    this.__assign(block, "timeFromLastFrame", "(((NOS * rpm) / stockRedLine) / c1_25)", "0x0479");
    this.__expr(block, "(/*stack*/ = /*stack*/[isNos])", "0x047C");
    this.__branch(block, "if not (timeFromLastFrame > NOS) then -- jump 11", "0x0484");
    this.__assign(block, "timeFromLastFrame", "NOS", "0x048C");
    this.__expr(block, "2.2016", "0x04A0");
    this.__assign(block, "hp", "(/*stack*/ + (hp + (hp * c1)))", "0x04A3");
    this.__assign(block, "nitrousRemaining", "(nitrousRemaining - ((NOS / c10000) * c2))", "0x04BB");
    this.__expr(block, "runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x04DE");
    this.__unresolved(block, "jump 21", "0x04DF");
    this.__assign(block, "hp", "(hp + (hp * c1))", "0x04F0");
    this.__expr(block, "sprite(flashSP)", "0x04F3");
    this.__assign(block, "hp", "((c100 - detuneHp) * (0.7489 / c100))", "0x050D");
    this.__expr(block, "param_c0", "0x0510");
    this.__assign(block, "theTime", "((hp * tqFlyFactor) / rpm)", "0x051F");
    this.__expr(block, "hp", "0x0522");
    this.__assign(block, "_system", "(((theTime * gr) * fgr) * rpmGearConversion)", "0x0535");
    this.__assign(block, "milliseconds", "(_system / r)", "0x0541");
    this.__assign(block, "carV", "(param_c0 * c8)", "0x054D");
    this.__assign(block, "c0_5", "c0", "0x0555");
    this.__branch(block, "if not (carV < c1) then -- jump 22", "0x0560");
    this.__unresolved(block, "0x2B unresolved stack=[(c1 - carV), 1.6693]", "0x0570");
    this.__assign(block, "c0_5", "(/*stack*/ * ((c1 - carV) mod 1.6693))", "0x0573");
    this.__assign(block, "carAccel", "((w * c0_005) * carAccel)", "0x0585");
    this.__assign(block, "gearValue", "((c0_016 * w) + c0_5)", "0x0596");
    this.__branch(block, "if not (gearValue < c0) then -- jump 11", "0x05A1");
    this.__assign(block, "gearValue", "c0", "0x05A9");
    this.__assign(block, "hpi", "((carV * carV) + 0.751)", "0x05C0");
    this.__expr(block, "DAfp", "0x05C3");
    this.__branch(block, "if not (hpi < c0) then -- jump 11", "0x05CB");
    this.__assign(block, "hpi", "c0", "0x05D3");
    this.__expr(block, "0.7255", "0x05E6");
    this.__assign(block, "boostCreatedPower", "(carV * vToMph)", "0x05F0");
    this.__expr(block, "(gearValue + hpi)", "0x05F3");
    this.__assign(block, "systemPower", "UsInit", "0x05F8");
    this.__expr(block, "milliseconds", "0x05FB");
    this.__branch(block, "if not (tireStick > VOID) then -- jump 20", "0x0601");
    this.__assign(block, "systemPower", "(systemPower + (UsInit * c0_05))", "0x0612");
    this.__assign(block, "ECUtune", "UkInit", "0x061A");
    this.__branch(block, "if not (boostCreatedPower > c0) then -- jump 73", "0x0625");
    this.__assign(block, "compressionPowerDelta", "(boostCreatedPower / c100)", "0x0631");
    this.__branch(block, "if not (compressionPowerDelta > c1) then -- jump 11", "0x063C");
    this.__assign(block, "compressionPowerDelta", "c1", "0x0644");
    this.__assign(block, "compressionPowerDelta", "(compressionPowerDelta * c3)", "0x0650");
    this.__assign(block, "systemPower", "(systemPower + compressionPowerDelta)", "0x065B");
    this.__assign(block, "ECUtune", "(ECUtune - (compressionPowerDelta * c0_09))", "0x066B");
    this.__branch(block, "if not (ECUtune < c0_6) then -- jump 11", "0x0676");
    this.__assign(block, "ECUtune", "c0_6", "0x067E");
    this.__unresolved(block, "branch 102", "0x0686");
    this.__expr(block, "0.7734", "0x06B0");
    this.__unresolved(block, "jump 56", "0x06B1");
    this.__expr(block, "0.7734", "0x06C6");
    this.__assign(block, "speedoV", "carV", "0x06CC");
    this.__expr(block, "(w / g)", "0x06CF");
    this.__assign(block, "slip", "0", "0x06D2");
    this.__expr(block, "avgFps", "0x06D5");
    this.__expr(block, "runEngineTractionLightCB(0)", "0x06E8");
    this.__unresolved(block, "jump 108", "0x06E9");
    this.__expr(block, "0.7734", "0x0725");
    this.__assign(block, "slip", "1", "0x0728");
    this.__expr(block, "(w / g)", "0x072B");
    this.__expr(block, "runEngineTractionLightCB(1)", "0x073E");
    this.__unresolved(block, "jump 22", "0x073F");
    this.__expr(block, "0.7734", "0x0754");
    this.__expr(block, "((w / g) <= 0.7767)", "0x0766");
    this.__branch(block, "if not (carAccel < c0) then -- jump 23", "0x077B");
    this.__assign(block, "carAccel", "c0", "0x0784");
    this.__expr(block, "(carV < c3)", "0x0787");
    this.__assign(block, "engineDamage", "c0", "0x078C");
    this.__expr(block, "avgFps", "0x078F");
    this.__unresolved(block, "jump 24", "0x0790");
    this.__branch(block, "if not (carV < c0) then -- jump 12", "0x079B");
    this.__assign(block, "carV", "c0", "0x07A4");
    this.__expr(block, "(w / g)", "0x07A7");
    this.__branch(block, "if not (rpm > revLimiter) then -- jump 20", "0x07B0");
    this.__assign(block, "carAccel", "revLimiterDeceleration", "0x07B9");
    this.__expr(block, "avgFps", "0x07BC");
    this.__assign(block, "engineDamage", "revLimiterDeceleration", "0x07C1");
    this.__expr(block, "sprite(flashSP)", "0x07C4");
    this.__unresolved(block, "branch 58", "0x07C9");
    this.__assign(block, "carAccel", "brakeDecleration", "0x07D1");
    this.__expr(block, "brake", "0x07D4");
    this.__assign(block, "engineDamage", "brakeDecleration", "0x07D9");
    this.__expr(block, "(systemPower * N)", "0x07DC");
    this.__branch(block, "if not (carV < c2) then -- jump 29", "0x07E5");
    this.__assign(block, "carAccel", "c0", "0x07EE");
    this.__expr(block, "1.6693[id_5127]", "0x07F1");
    this.__assign(block, "engineDamage", "c0", "0x07F6");
    this.__expr(block, "(carV + c2)", "0x07F9");
    this.__assign(block, "carV", "c0", "0x07FF");
    this.__expr(block, "((systemPower * N) = 0.5701)", "0x0802");
    this.__assign(block, "carV", "(carV + (carAccel * theTime))", "0x0812");
    this.__expr(block, "avgFps", "0x0815");
    this.__assign(block, "speedoV", "(speedoV + (engineDamage * theTime))", "0x0824");
    this.__expr(block, "sprite(flashSP)", "0x0827");
    this.__branch(block, "if not ((carV + c10) < speedoV) then -- jump 12", "0x0835");
    this.__assign(block, "tireScrub", "1", "0x083B");
    this.__expr(block, "(w / g)", "0x083E");
    this.__unresolved(block, "jump 9", "0x083F");
    this.__assign(block, "tireScrub", "0", "0x0844");
    this.__expr(block, "(ECUtune * N)", "0x0847");
    this.__branch(block, "if not ((carV + c0_015) < speedoV) then -- jump 234", "0x0855");
    this.__assign(block, "isNos", "(speedoV - carV)", "0x0862");
    this.__expr(block, "((ECUtune * N) / 0.5639)", "0x0865");
    this.__branch(block, "if not (isNos < c0_02) then -- jump 11", "0x086D");
    this.__assign(block, "isNos", "c0", "0x0875");
    this.__expr(block, "avgFps", "0x0878");
    this.__unresolved(block, "branch 93", "0x087D");
    this.__assign(block, "nitrousRemaining", "(0.7299 / c200)", "0x0893");
    this.__expr(block, "(ECUtune * N)", "0x0896");
    this.__branch(block, "if not (nitrousRemaining < c0) then -- jump 14", "0x089E");
    this.__assign(block, "nitrousRemaining", "c0", "0x08A6");
    this.__expr(block, "avgFps", "0x08A9");
    this.__unresolved(block, "jump 22", "0x08AA");
    this.__branch(block, "if not (nitrousRemaining > c1) then -- jump 11", "0x08B4");
    this.__assign(block, "nitrousRemaining", "c1", "0x08BC");
    this.__expr(block, "slip", "0x08BF");
    this.__assign(block, "speedoV", "(slip - (speedoV * ((c1 - nitrousRemaining) > 2.2016)))", "0x08D3");
    this.__unresolved(block, "jump 102", "0x08D7");
    this.__assign(block, "NOS", "(clutchFeather + c0_18)", "0x08E3");
    this.__assign(block, "speedoV", "(speedoV - (NOS * isNos))", "0x08F4");
    this.__unresolved(block, "0x1F unresolved stack=[(param_c0 > c0)]", "0x0902");
    this.__branch(block, "if not ((rpm / redLine) < (c8 / c10)) then -- jump 30", "0x091E");
    this.__expr(block, "0.7478", "0x093C");
    this.__unresolved(block, "jump 12", "0x093D");
    this.__assign(block, "speedoV", "carV", "0x0945");
    this.__expr(block, "(((param_c0 > c0) > (mph = VOID))[(speedoV / c2)] - (rpm / redLine))", "0x0948");
    this.__unresolved(block, "0x19 unresolved stack=[speedoV, (gConvSlipA * r), ((0.7811 * gr) * c50), (fgr * rpmGearConversion), 0.7478]", "0x0971");
    this.__expr(block, "0.7478", "0x0972");
    this.__expr(block, "getTorque()", "0x097B");
    this.__unresolved(block, "branch 41", "0x0980");
    this.__assign(block, "mph", "(speedoV * vToMph)", "0x098D");
    this.__expr(block, "slip", "0x0990");
    this.__branch(block, "if not (mph < c0_02) then -- jump 12", "0x0999");
    this.__assign(block, "mph", "c0_02", "0x09A2");
    this.__expr(block, "(fgr * rpmGearConversion)", "0x09A5");
    this.__unresolved(block, "jump 17", "0x09A6");
    this.__assign(block, "mph", "(carV * vToMph)", "0x09B3");
    this.__expr(block, "((0.7811 * gr) * c50)", "0x09B6");
    this.__branch(block, "if not (c0 < c0_02) then -- jump 40", "0x09BE");
    this.__unresolved(block, "branch 16693", "0x09CC");
    this.__unresolved(block, "0x33 unresolved stack=[speedoV, (gConvSlipA * r), (gearValue = -1)]", "0x09D0");
    this.__unresolved(block, "branch 14", "0x09D1");
    this.__assign(block, "c0", "c0", "0x09D8");
    this.__expr(block, "(gearValue = -1)", "0x09DB");
    this.__unresolved(block, "jump 11", "0x09DC");
    this.__assign(block, "c0", "c0_02", "0x09E3");
    this.__expr(block, "(gConvSlipA * r)", "0x09E6");
    this.__branch(block, "if not (gearValue = -1) then -- jump 19", "0x09EE");
    this.__assign(block, "s", "(s - c0)", "0x09FB");
    this.__expr(block, "speedoV", "0x09FE");
    this.__unresolved(block, "jump 16", "0x09FF");
    this.__assign(block, "s", "(s + c0)", "0x0A0B");
    this.__assign(block, "s", "(floor((s * c1000)) / c1000)", "0x0A28");
    this.__expr(block, "Math", "0x0A2B");
    this.__unresolved(block, "branch 312", "0x0A30");
    this.__branch(block, "if not (staging < (s mod c13)) then -- jump 43", "0x0A3C");
    this.__assign(block, "s", "(/*stack*/ mod c13)", "0x0A46");
    this.__assign(block, "mph", "c0", "0x0A4F");
    this.__assign(block, "carAccel", "c0", "0x0A58");
    this.__assign(block, "carV", "c0", "0x0A61");
    this.__unresolved(block, "jump 256", "0x0A65");
    this.__branch(block, "if not (s > c5) then -- jump 42", "0x0A70");
    this.__assign(block, "s", "c5", "0x0A79");
    this.__assign(block, "mph", "c0", "0x0A82");
    this.__assign(block, "carAccel", "c0", "0x0A8B");
    this.__assign(block, "carV", "c0", "0x0A94");
    this.__unresolved(block, "jump 205", "0x0A98");
    this.__assign(block, "rpm", "0", "0x0A9C");
    this.__assign(block, "stockRedLine", "0", "0x0AA1");
    this.__branch(block, "if not (s < c0) then -- jump 8", "0x0ABA");
    this.__assign(block, "rpm", "1", "0x0ABF");
    this.__expr(block, "(/*stack*/ > (s mod c3))", "0x0AC2");
    this.__branch(block, "if not (s < c1) then -- jump 8", "0x0AD8");
    this.__assign(block, "stockRedLine", "1", "0x0ADD");
    this.__expr(block, "(/*stack*/ > (s mod c2))", "0x0AE0");
    this.__unresolved(block, "0x0B unresolved stack=[(preStaged <> rpm)]", "0x0AEB");
    this.__branch(block, "if not (staged <> stockRedLine) then -- jump 113", "0x0AF3");
    this.__assign(block, "preStaged", "rpm", "0x0AFB");
    this.__expr(block, "(preStaged <> rpm)", "0x0AFE");
    this.__assign(block, "staged", "stockRedLine", "0x0B03");
    this.__unresolved(block, "jump 22016", "0x0B0C");
    this.__unresolved(block, "0x19 unresolved stack=[stockRedLine]", "0x0B0F");
    this.__unresolved(block, "branch 35", "0x0B10");
    this.__assign(block, "lightDelayTO", "timeout(lightDelayTO).new(5000, symbol(stagedAndReady))", "0x0B2C");
    this.__expr(block, "stockRedLine", "0x0B2F");
    this.__unresolved(block, "jump 28", "0x0B30");
    this.__unresolved(block, "0x62 unresolved stack=[lightDelayTO, VOID_SENTINEL]", "0x0B3B");
    this.__branch(block, "if not (lightDelayTO = VOID_SENTINEL) then -- jump 15", "0x0B3C");
    this.__expr(block, "forget()", "0x0B4B");
    this.__expr(block, "lightDelayTO(sprite(flashSP)[runEngineStageLightCB], stockRedLine, rpm)", "0x0B64");
    this.__unresolved(block, "jump 3239", "0x0B65");
    this.__branch(block, "if not (rt = undefined) then -- jump 823", "0x0B6F");
    this.__branch(block, "if not (theActualTime > lagThreshold) then -- jump 20", "0x0B7B");
    this.__assign(block, "badCounterRT", "(badCounterRT + theActualTime)", "0x0B89");
    this.__unresolved(block, "jump 17", "0x0B8D");
    this.__assign(block, "goodCounterRT", "(goodCounterRT + theActualTime)", "0x0B9A");
    this.__branch(block, "if not (s >= c0) then -- jump 765", "0x0BA6");
    this.__assign(block, "c1_25", "c0", "0x0BAE");
    this.__assign(block, "timeStartLine", "milliseconds", "0x0BB9");
    this.__expr(block, "_system", "0x0BBC");
    this.__branch(block, "if not (timeGreen = c0) then -- jump 198", "0x0BC5");
    this.__assign(block, "rt", "(/*stack*/ mod c1)", "0x0BCF");
    this.__expr(block, "runEngineSetLightOnCB(p, red)", "0x0BEA");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 22", "0x0BF2");
    this.__expr(block, "sprite(flashSP)((KRT mod c1), EMPTY)", "0x0C05");
    this.__unresolved(block, "jump 131", "0x0C06");
    this.__branch(block, "if not (raceType = QM) then -- jump 22", "0x0C10");
    this.__expr(block, "/*stack*/((RRT mod c1), EMPTY)", "0x0C23");
    this.__unresolved(block, "jump 101", "0x0C24");
    this.__unresolved(block, "0x0B unresolved stack=[(raceType = RIVAL)]", "0x0C31");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 22", "0x0C39");
    this.__expr(block, "(raceType = RIVAL)((RIVRT mod c1), EMPTY)", "0x0C4C");
    this.__unresolved(block, "jump 60", "0x0C4D");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 22", "0x0C57");
    this.__expr(block, "/*stack*/((HTQRT mod c1), EMPTY)", "0x0C6A");
    this.__unresolved(block, "jump 30", "0x0C6B");
    this.__branch(block, "if not (raceType = HT) then -- jump 19", "0x0C75");
    this.__expr(block, "/*stack*/((HTRT mod c1), EMPTY)", "0x0C88");
    this.__unresolved(block, "jump 492", "0x0C89");
    this.__assign(block, "hp", "milliseconds", "0x0C92");
    this.__expr(block, "_system", "0x0C95");
    this.__unresolved(block, "jump 7734", "0x0CA3");
    this.__unresolved(block, "0x65 unresolved stack=[(hp - timeGreen), 1.6693]", "0x0CA7");
    this.__expr(block, "1.6693", "0x0CA8");
    this.__branch(block, "if not (rt < c0_5) then -- jump 198", "0x0CB1");
    this.__assign(block, "rt", "((hp - timeGreen) mod c1)", "0x0CBB");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 22", "0x0CC6");
    this.__expr(block, "/*stack*/((KRT mod c1), EMPTY)", "0x0CD9");
    this.__unresolved(block, "jump 131", "0x0CDA");
    this.__branch(block, "if not (raceType = QM) then -- jump 22", "0x0CE4");
    this.__expr(block, "/*stack*/((RRT mod c1), EMPTY)", "0x0CF7");
    this.__unresolved(block, "jump 101", "0x0CF8");
    this.__unresolved(block, "0x0B unresolved stack=[(raceType = RIVAL)]", "0x0D05");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 22", "0x0D0D");
    this.__expr(block, "(raceType = RIVAL)((RIVRT mod c1), EMPTY)", "0x0D20");
    this.__unresolved(block, "jump 60", "0x0D21");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 22", "0x0D2B");
    this.__expr(block, "/*stack*/((HTQRT mod c1), EMPTY)", "0x0D3E");
    this.__unresolved(block, "jump 30", "0x0D3F");
    this.__branch(block, "if not (raceType = HT) then -- jump 19", "0x0D49");
    this.__expr(block, "/*stack*/((HTRT mod c1), EMPTY)", "0x0D5C");
    this.__expr(block, "runEngineSetLightOnCB(p, red)", "0x0D74");
    this.__unresolved(block, "jump 256", "0x0D75");
    this.__branch(block, "if not (badCounterRT > VOID) then -- jump 19", "0x0D7D");
    this.__assign(block, "c1_25", "lagTimeAddition(badCounterRT)", "0x0D8D");
    this.__expr(block, "sprite(flashSP)", "0x0D90");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 36", "0x0D98");
    this.__unresolved(block, "jump 7766", "0x0DAC");
    this.__expr(block, "/*stack*/((KRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0DB9");
    this.__unresolved(block, "jump 187", "0x0DBA");
    this.__branch(block, "if not (raceType = QM) then -- jump 36", "0x0DC4");
    this.__unresolved(block, "jump 7766", "0x0DD8");
    this.__expr(block, "/*stack*/((RRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0DE5");
    this.__unresolved(block, "jump 143", "0x0DE6");
    this.__unresolved(block, "0x0B unresolved stack=[(raceType = RIVAL)]", "0x0DF3");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 36", "0x0DFB");
    this.__unresolved(block, "jump 7766", "0x0E0F");
    this.__expr(block, "(raceType = RIVAL)((RIVRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0E1C");
    this.__unresolved(block, "jump 88", "0x0E1D");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 36", "0x0E27");
    this.__unresolved(block, "jump 7766", "0x0E3B");
    this.__expr(block, "/*stack*/((HTQRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0E48");
    this.__unresolved(block, "jump 44", "0x0E49");
    this.__branch(block, "if not (raceType = HT) then -- jump 33", "0x0E53");
    this.__unresolved(block, "jump 7766", "0x0E67");
    this.__expr(block, "/*stack*/((HTRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0E74");
    this.__unresolved(block, "jump 7482", "0x0E96");
    this.__expr(block, "(rt + c1_25)((1.6693 / c1000))", "0x0EA3");
    this.__unresolved(block, "jump 46", "0x0EA4");
    this.__branch(block, "if not (theActualTime > lagThreshold) then -- jump 20", "0x0EAF");
    this.__assign(block, "badCounterET", "(badCounterET + theActualTime)", "0x0EBD");
    this.__expr(block, "floor", "0x0EC0");
    this.__unresolved(block, "jump 17", "0x0EC1");
    this.__assign(block, "goodCounterET", "(goodCounterET + theActualTime)", "0x0ECE");
    this.__expr(block, "Math", "0x0ED1");
    this.__branch(block, "if not (s >= c1320) then -- jump 1704", "0x0EDA");
    this.__branch(block, "if not (et = undefined) then -- jump 1690", "0x0EE5");
    this.__assign(block, "hp", "milliseconds", "0x0EEF");
    this.__expr(block, "_system", "0x0EF2");
    this.__unresolved(block, "jump 7734", "0x0F00");
    this.__unresolved(block, "0x82 id_20801 unresolved stack=[sprite(flashSP), runEngineSetMyRTCB, (hp - timeStartLine), 1.6693]", "0x0F04");
    this.__assign(block, "ts", "(floor((mph * c100)) / c100)", "0x0F1F");
    this.__expr(block, "Math", "0x0F22");
    this.__assign(block, "c10000", "(floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x0F45");
    this.__expr(block, "Math", "0x0F48");
    this.__assign(block, "c2", "(floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x0F6B");
    this.__expr(block, "Math", "0x0F6E");
    this.__assign(block, "sprite", "(floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100)", "0x0F91");
    this.__expr(block, "Math", "0x0F94");
    this.__assign(block, "flashSP", "(floor(((headGasketDamage / partBreakPoint) * c10000)) / c100)", "0x0FB2");
    this.__expr(block, "Math", "0x0FB5");
    this.__assign(block, "runEngineNOSCB", "(floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100)", "0x0FD3");
    this.__expr(block, "Math", "0x0FD6");
    this.__assign(block, "nitrousTankSize", "(floor((oilDamage * c10000)) / c100)", "0x0FEF");
    this.__expr(block, "Math", "0x0FF2");
    this.__assign(block, "c100", "(floor((oilFilterDamage * c10000)) / c100)", "0x100B");
    this.__expr(block, "Math", "0x100E");
    this.__assign(block, "revLimiter", "(floor((coolantDamage * c10000)) / c100)", "0x1027");
    this.__expr(block, "Math", "0x102A");
    this.__assign(block, "c200", "(floor((nitrousRemaining * c100)) / c100)", "0x1043");
    this.__expr(block, "Math", "0x1046");
    this.__assign(block, "tqFlyFactor", "(floor((raceGas * c100)) / c100)", "0x105F");
    this.__expr(block, "Math", "0x1062");
    this.__branch(block, "if not (c10000 > c100) then -- jump 11", "0x106A");
    this.__assign(block, "c10000", "c100", "0x1072");
    this.__expr(block, "1.6693", "0x1075");
    this.__branch(block, "if not (c2 > c100) then -- jump 11", "0x107D");
    this.__assign(block, "c2", "c100", "0x1085");
    this.__expr(block, "(hp - timeStartLine)", "0x1088");
    this.__branch(block, "if not (sprite > c100) then -- jump 11", "0x1090");
    this.__assign(block, "sprite", "c100", "0x1098");
    this.__expr(block, "runEngineSetMyRTCB", "0x109B");
    this.__branch(block, "if not (flashSP > c100) then -- jump 11", "0x10A3");
    this.__assign(block, "flashSP", "c100", "0x10AB");
    this.__expr(block, "sprite(flashSP)", "0x10AE");
    this.__branch(block, "if not (runEngineNOSCB > c100) then -- jump 11", "0x10B6");
    this.__assign(block, "runEngineNOSCB", "c100", "0x10BE");
    this.__branch(block, "if not (nitrousTankSize > c100) then -- jump 11", "0x10C9");
    this.__assign(block, "nitrousTankSize", "c100", "0x10D1");
    this.__branch(block, "if not (c100 > c100) then -- jump 11", "0x10DC");
    this.__assign(block, "c100", "c100", "0x10E4");
    this.__branch(block, "if not (revLimiter > c100) then -- jump 11", "0x10EF");
    this.__assign(block, "revLimiter", "c100", "0x10F7");
    this.__branch(block, "if not (c200 > c100) then -- jump 11", "0x1102");
    this.__assign(block, "c200", "c100", "0x110A");
    this.__branch(block, "if not (tqFlyFactor > c100) then -- jump 11", "0x1115");
    this.__assign(block, "tqFlyFactor", "c100", "0x111D");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 136", "0x1128");
    this.__branch(block, "if not (/*stack*/ <> (rt mod c1)) then -- jump 35", "0x1135");
    this.__unresolved(block, "0x04 unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848]", "0x1157");
    this.__expr(block, "1.4848", "0x1158");
    this.__unresolved(block, "jump 7745", "0x1169");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x11AD");
    this.__unresolved(block, "jump 978", "0x11AE");
    this.__branch(block, "if not (raceType = QM) then -- jump 124", "0x11B8");
    this.__branch(block, "if not (KDONE <> (rt mod c1)) then -- jump 23", "0x11C5");
    this.__expr(block, "RINT(s, carV, carAccel)", "0x11DC");
    this.__unresolved(block, "jump 7745", "0x11ED");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x1231");
    this.__unresolved(block, "jump 846", "0x1232");
    this.__unresolved(block, "0x0B unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), RDONE, (raceType = RIVAL)]", "0x123F");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 190", "0x1247");
    this.__branch(block, "if not ((raceType = RIVAL) <> (rt mod c1)) then -- jump 35", "0x1254");
    this.__unresolved(block, "0x04 unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), RDONE, INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848]", "0x1276");
    this.__expr(block, "1.4848", "0x1277");
    this.__assign(block, "gr", "(floor((((beforePistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x129A");
    this.__expr(block, "Math", "0x129D");
    this.__assign(block, "thePD", "c10000", "0x12A2");
    this.__expr(block, "(milliseconds - timeAnchor)", "0x12A5");
    this.__assign(block, "theBPD", "gr", "0x12AA");
    this.__expr(block, "_system", "0x12AD");
    this.__unresolved(block, "jump 7745", "0x12BE");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x1302");
    this.__unresolved(block, "jump 637", "0x1303");
    this.__branch(block, "if not (raceType = CT) then -- jump 306", "0x130D");
    this.__expr(block, "ctFinishCB(et, ts)", "0x132A");
    this.__unresolved(block, "jump 7811", "0x1341");
    this.__expr(block, "((CheckProcesses + decrypt(_global(cp))) + \"&cw=\")(((CheckWindows + decrypt(_global(cw))) + \"&cwc=\"), (CheckWindowsClass + decrypt(_global(cwc))))", "0x143C");
    this.__unresolved(block, "jump 323", "0x143D");
    this.__branch(block, "if not (raceType = CTQ) then -- jump 32", "0x1447");
    this.__expr(block, "ctFinishCB(et, ts)", "0x1464");
    this.__unresolved(block, "jump 283", "0x1465");
    this.__branch(block, "if not (raceType = P) then -- jump 32", "0x146F");
    this.__expr(block, "practiceFinishCB(et, ts)", "0x148C");
    this.__unresolved(block, "jump 243", "0x148D");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 91", "0x1497");
    this.__unresolved(block, "jump 7745", "0x14AB");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x14EF");
    this.__unresolved(block, "jump 144", "0x14F0");
    this.__branch(block, "if not (raceType = HT) then -- jump 133", "0x14FA");
    this.__branch(block, "if not (HTQD <> (rt mod c1)) then -- jump 35", "0x1507");
    this.__unresolved(block, "0x04 unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), RDONE, INT, s, carV, carAccel, RIVDONE, sprite(flashSP), executeCall, ctst, \"et=\", (((((((((((((((((((((((((((((((((((((((((hp - timeStartLine) + 1.6693) + \"&rt=\") + rt) + \"&ts=\") + ts) + \"&pd=\") + c10000) + \"&vd=\") + sprite) + \"&rd=\") + c2) + \"&hd=\") + flashSP) + \"&bd=\") + runEngineNOSCB) + \"&od=\") + nitrousTankSize) + \"&fd=\") + c100) + \"&cd=\") + revLimiter) + \"&nr=\") + c200) + \"&rg=\") + tqFlyFactor) + \"&m=\") + createMd5Hash(1)) + \"&gr=\") + goodCounterRT) + \"&br=\") + badCounterRT) + \"&ge=\") + goodCounterET) + \"&be=\") + badCounterET) + \"&ce=\") + isCheatEngineRunning()) + \"&f=\") + avgFps) + \"&cp=\"), sprite(flashSP), sprite(flashSP), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), 1.4848]", "0x1529");
    this.__expr(block, "1.4848", "0x152A");
    this.__unresolved(block, "jump 7745", "0x153B");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x157F");
    this.__unresolved(block, "jump 652", "0x1580");
    this.__unresolved(block, "0x08 unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), RDONE, INT, s, carV, carAccel, RIVDONE, sprite(flashSP), executeCall, ctst, \"et=\", (((((((((((((((((((((((((((((((((((((((((hp - timeStartLine) + 1.6693) + \"&rt=\") + rt) + \"&ts=\") + ts) + \"&pd=\") + c10000) + \"&vd=\") + sprite) + \"&rd=\") + c2) + \"&hd=\") + flashSP) + \"&bd=\") + runEngineNOSCB) + \"&od=\") + nitrousTankSize) + \"&fd=\") + c100) + \"&cd=\") + revLimiter) + \"&nr=\") + c200) + \"&rg=\") + tqFlyFactor) + \"&m=\") + createMd5Hash(1)) + \"&gr=\") + goodCounterRT) + \"&br=\") + badCounterRT) + \"&ge=\") + goodCounterET) + \"&be=\") + badCounterET) + \"&ce=\") + isCheatEngineRunning()) + \"&f=\") + avgFps) + \"&cp=\"), sprite(flashSP), sprite(flashSP), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), HTD, (s >= c760)]", "0x158E");
    this.__unresolved(block, "branch 632", "0x1594");
    this.__assign(block, "isMidMd5sent", "1", "0x1599");
    this.__expr(block, "((s >= c760) and isMidMd5sent)", "0x159C");
    this.__unresolved(block, "0x2C unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), RDONE, INT, s, carV, carAccel, RIVDONE, sprite(flashSP), executeCall, ctst, \"et=\", (((((((((((((((((((((((((((((((((((((((((hp - timeStartLine) + 1.6693) + \"&rt=\") + rt) + \"&ts=\") + ts) + \"&pd=\") + c10000) + \"&vd=\") + sprite) + \"&rd=\") + c2) + \"&hd=\") + flashSP) + \"&bd=\") + runEngineNOSCB) + \"&od=\") + nitrousTankSize) + \"&fd=\") + c100) + \"&cd=\") + revLimiter) + \"&nr=\") + c200) + \"&rg=\") + tqFlyFactor) + \"&m=\") + createMd5Hash(1)) + \"&gr=\") + goodCounterRT) + \"&br=\") + badCounterRT) + \"&ge=\") + goodCounterET) + \"&be=\") + badCounterET) + \"&ce=\") + isCheatEngineRunning()) + \"&f=\") + avgFps) + \"&cp=\"), sprite(flashSP), sprite(flashSP), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), HTD[(raceType = KOTH)], (raceType = QM)]", "0x15B2");
    this.__unresolved(block, "0x0B unresolved stack=[INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), RDONE, INT, s, carV, carAccel, RIVDONE, sprite(flashSP), executeCall, ctst, \"et=\", (((((((((((((((((((((((((((((((((((((((((hp - timeStartLine) + 1.6693) + \"&rt=\") + rt) + \"&ts=\") + ts) + \"&pd=\") + c10000) + \"&vd=\") + sprite) + \"&rd=\") + c2) + \"&hd=\") + flashSP) + \"&bd=\") + runEngineNOSCB) + \"&od=\") + nitrousTankSize) + \"&fd=\") + c100) + \"&cd=\") + revLimiter) + \"&nr=\") + c200) + \"&rg=\") + tqFlyFactor) + \"&m=\") + createMd5Hash(1)) + \"&gr=\") + goodCounterRT) + \"&br=\") + badCounterRT) + \"&ge=\") + goodCounterET) + \"&be=\") + badCounterET) + \"&ce=\") + isCheatEngineRunning()) + \"&f=\") + avgFps) + \"&cp=\"), sprite(flashSP), sprite(flashSP), INT, s, carV, carAccel, _system, (milliseconds - timeAnchor), HTD[(raceType = KOTH)], (((raceType = QM) or (raceType = RIVAL)) > (raceType = TEAMRIVAL)), (raceType = HTQ)]", "0x15D3");
    this.__branch(block, "if not (raceType = HT) then -- jump 560", "0x15DB");
    this.__assign(block, "c10000", "(floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x1601");
    this.__expr(block, "Math", "0x1604");
    this.__assign(block, "c2", "(floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x1627");
    this.__expr(block, "Math", "0x162A");
    this.__assign(block, "sprite", "(floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100)", "0x164D");
    this.__expr(block, "Math", "0x1650");
    this.__assign(block, "flashSP", "(floor(((headGasketDamage / partBreakPoint) * c10000)) / c100)", "0x166E");
    this.__expr(block, "Math", "0x1671");
    this.__assign(block, "runEngineNOSCB", "(floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100)", "0x168F");
    this.__expr(block, "Math", "0x1692");
    this.__assign(block, "nitrousTankSize", "(floor((oilDamage * c10000)) / c100)", "0x16AB");
    this.__expr(block, "Math", "0x16AE");
    this.__assign(block, "c100", "(floor((oilFilterDamage * c10000)) / c100)", "0x16C7");
    this.__expr(block, "Math", "0x16CA");
    this.__assign(block, "revLimiter", "(floor((coolantDamage * c10000)) / c100)", "0x16E3");
    this.__expr(block, "Math", "0x16E6");
    this.__assign(block, "c200", "(floor((nitrousRemaining * c100)) / c100)", "0x16FF");
    this.__expr(block, "Math", "0x1702");
    this.__assign(block, "tqFlyFactor", "(floor((raceGas * c100)) / c100)", "0x171B");
    this.__expr(block, "Math", "0x171E");
    this.__branch(block, "if not (c10000 > c100) then -- jump 11", "0x1726");
    this.__assign(block, "c10000", "c100", "0x172E");
    this.__expr(block, "(raceType = HTQ)", "0x1731");
    this.__branch(block, "if not (c2 > c100) then -- jump 11", "0x1739");
    this.__assign(block, "c2", "c100", "0x1741");
    this.__expr(block, "(((raceType = QM) or (raceType = RIVAL)) > (raceType = TEAMRIVAL))", "0x1744");
    this.__branch(block, "if not (sprite > c100) then -- jump 11", "0x174C");
    this.__assign(block, "sprite", "c100", "0x1754");
    this.__expr(block, "HTD[(raceType = KOTH)]", "0x1757");
    this.__branch(block, "if not (flashSP > c100) then -- jump 11", "0x175F");
    this.__assign(block, "flashSP", "c100", "0x1767");
    this.__expr(block, "(milliseconds - timeAnchor)", "0x176A");
    this.__branch(block, "if not (runEngineNOSCB > c100) then -- jump 11", "0x1772");
    this.__assign(block, "runEngineNOSCB", "c100", "0x177A");
    this.__expr(block, "_system", "0x177D");
    this.__branch(block, "if not (nitrousTankSize > c100) then -- jump 11", "0x1785");
    this.__assign(block, "nitrousTankSize", "c100", "0x178D");
    this.__expr(block, "carAccel", "0x1790");
    this.__branch(block, "if not (c100 > c100) then -- jump 11", "0x1798");
    this.__assign(block, "c100", "c100", "0x17A0");
    this.__expr(block, "carV", "0x17A3");
    this.__branch(block, "if not (revLimiter > c100) then -- jump 11", "0x17AB");
    this.__assign(block, "revLimiter", "c100", "0x17B3");
    this.__expr(block, "s", "0x17B6");
    this.__branch(block, "if not (c200 > c100) then -- jump 11", "0x17BE");
    this.__assign(block, "c200", "c100", "0x17C6");
    this.__expr(block, "INT", "0x17C9");
    this.__branch(block, "if not (tqFlyFactor > c100) then -- jump 11", "0x17D1");
    this.__assign(block, "tqFlyFactor", "c100", "0x17D9");
    this.__expr(block, "sprite(flashSP)", "0x17DC");
    this.__expr(block, "M(c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1))", "0x180B");
    this.__assign(block, "fgr", "(boostPsi - stockBoost)", "0x1815");
    this.__expr(block, "sprite(flashSP)", "0x1818");
    this.__branch(block, "if not (fgr < VOID) then -- jump 8", "0x181D");
    this.__assign(block, "fgr", "VOID", "0x1822");
    this.__expr(block, "(((((((((((((((((((((((((((((((((((((((((hp - timeStartLine) + 1.6693) + \"&rt=\") + rt) + \"&ts=\") + ts) + \"&pd=\") + c10000) + \"&vd=\") + sprite) + \"&rd=\") + c2) + \"&hd=\") + flashSP) + \"&bd=\") + runEngineNOSCB) + \"&od=\") + nitrousTankSize) + \"&fd=\") + c100) + \"&cd=\") + revLimiter) + \"&nr=\") + c200) + \"&rg=\") + tqFlyFactor) + \"&m=\") + createMd5Hash(1)) + \"&gr=\") + goodCounterRT) + \"&br=\") + badCounterRT) + \"&ge=\") + goodCounterET) + \"&be=\") + badCounterET) + \"&ce=\") + isCheatEngineRunning()) + \"&f=\") + avgFps) + \"&cp=\")", "0x1825");
    this.__assign(block, "dangerLevel", "(dangerLevel + (fgr + (pistonCompressionLevel * c7)))", "0x1839");
    this.__expr(block, "\"et=\"", "0x183C");
    this.__branch(block, "if not (pistonCompressionLevel < c0) then -- jump 25", "0x1845");
    this.__assign(block, "engineDamageRisk", "(engineDamageRisk + (pistonCompressionLevel * c1_8))", "0x1858");
    this.__expr(block, "ctst", "0x185B");
    this.__unresolved(block, "jump 27", "0x185C");
    this.__assign(block, "engineDamageRisk", "(engineDamageRisk + ((boostPsi * pistonCompressionLevel) * c0_5))", "0x1873");
    this.__expr(block, "executeCall", "0x1876");
    this.__branch(block, "if not (engineDamageRisk < c0) then -- jump 9", "0x187F");
    this.__assign(block, "engineDamageRisk", "VOID", "0x1885");
    this.__expr(block, "sprite(flashSP)", "0x1888");
    this.__branch(block, "if not (rpm > (stockRedLine * c1_15)) then -- jump 31", "0x1896");
    this.__assign(block, "dangerLevel", "(dangerLevel * c2)", "0x18A4");
    this.__expr(block, "RIVDONE", "0x18A7");
    this.__assign(block, "engineDamageRisk", "(engineDamageRisk * c80)", "0x18B2");
    this.__expr(block, "carAccel", "0x18B5");
    this.__assign(block, "rpmGearConversion", "((timeFromLastFrame / c1_8) - avgDurability)", "0x18C3");
    this.__expr(block, "carV", "0x18C6");
    this.__branch(block, "if not (rpmGearConversion > c0) then -- jump 16", "0x18CE");
    this.__assign(block, "dangerLevel", "(dangerLevel + rpmGearConversion)", "0x18DB");
    this.__expr(block, "s", "0x18DE");
    this.__branch(block, "if not (oilDurability > c0) then -- jump 93", "0x18E7");
    this.__assign(block, "oilDamage", "((rpm / stockRedLine) + (0.7489 / c10000))", "0x1910");
    this.__expr(block, "(oilDamage / ((c100 - oilDurability) ^ 1.6693))", "0x1913");
    this.__branch(block, "if not (oilDamage >= c100) then -- jump 15", "0x191C");
    this.__assign(block, "oilDamage", "c100", "0x1925");
    this.__expr(block, "INT", "0x1928");
    this.__unresolved(block, "jump 28", "0x1929");
    this.__assign(block, "dangerLevel", "(RDONE * (dangerLevel / ((c100 - oilDurability) ^ 1.6693)))", "0x1941");
    this.__expr(block, "(milliseconds - timeAnchor)", "0x1944");
    this.__assign(block, "beforeDangerLevel", "dangerLevel", "0x194A");
    this.__expr(block, "_system", "0x194D");
    this.__branch(block, "if not (radiatorDurability > c0) then -- jump 28", "0x1956");
    this.__assign(block, "dangerLevel", "(carAccel * (dangerLevel / ((c100 - radiatorDurability) ^ 1.6693)))", "0x196F");
    this.__expr(block, "carV", "0x1972");
    this.__branch(block, "if not (oilFilterDurability > c0) then -- jump 93", "0x197B");
    this.__assign(block, "oilFilterDamage", "((rpm / stockRedLine) + (0.7489 / c10000))", "0x19A4");
    this.__expr(block, "(oilFilterDamage / ((c100 - oilFilterDurability) ^ 1.6693))", "0x19A7");
    this.__branch(block, "if not (oilFilterDamage >= c100) then -- jump 15", "0x19B0");
    this.__assign(block, "oilFilterDamage", "c100", "0x19B9");
    this.__expr(block, "s", "0x19BC");
    this.__unresolved(block, "jump 28", "0x19BD");
    this.__assign(block, "dangerLevel", "(INT * (dangerLevel / ((c100 - oilFilterDurability) ^ 1.6693)))", "0x19D5");
    this.__branch(block, "if not (coolantDurability > c0) then -- jump 93", "0x19E1");
    this.__assign(block, "coolantDamage", "((rpm / stockRedLine) + (0.7489 / c10000))", "0x1A0A");
    this.__expr(block, "(coolantDamage / ((c100 - coolantDurability) ^ 1.6693))", "0x1A0D");
    this.__branch(block, "if not (coolantDamage >= c100) then -- jump 15", "0x1A16");
    this.__assign(block, "coolantDamage", "c100", "0x1A1F");
    this.__unresolved(block, "jump 28", "0x1A23");
    this.__assign(block, "dangerLevel", "(/*stack*/ * (dangerLevel / ((c100 - coolantDurability) ^ 1.6693)))", "0x1A3B");
    this.__expr(block, "r", "0x1A42");
    this.__expr(block, "negTq", "0x1A46");
    this.__branch(block, "if not (pistonDurability < dangerLevel) then -- jump 19", "0x1A4F");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1A5C");
    this.__unresolved(block, "jump 16", "0x1A60");
    this.__assign(block, "r", "(pistonDurability * c0_95)", "0x1A6C");
    this.__assign(block, "negTq", "(/*stack*/ / ((dangerLevel - r) * 1.6693))", "0x1A7E");
    this.__expr(block, "c9", "0x1A85");
    this.__branch(block, "if not (pistonDurability < beforeDangerLevel) then -- jump 19", "0x1A8E");
    this.__assign(block, "c9", "(beforeDangerLevel * c0_95)", "0x1A9B");
    this.__unresolved(block, "jump 16", "0x1A9F");
    this.__assign(block, "c9", "(pistonDurability * c0_95)", "0x1AAB");
    this.__assign(block, "c299", "(/*stack*/ / ((beforeDangerLevel - c9) * 1.6693))", "0x1ABD");
    this.__branch(block, "if not (c299 < c0) then -- jump 11", "0x1AC8");
    this.__assign(block, "c299", "c0", "0x1AD0");
    this.__branch(block, "if not (negTq < c0) then -- jump 11", "0x1ADB");
    this.__assign(block, "negTq", "c0", "0x1AE3");
    this.__assign(block, "pistonDamage", "(pistonDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1B03");
    this.__assign(block, "beforePistonDamage", "(beforePistonDamage + (((engineDamageRisk / c100) * c299) + (c299 * c0_05)))", "0x1B23");
    this.__assign(block, "pistonBroken", "floor((pistonDamage / partBreakPoint))", "0x1B3B");
    this.__expr(block, "Math", "0x1B3E");
    this.__branch(block, "if not (pistonBroken > cylinderNumber) then -- jump 12", "0x1B47");
    this.__assign(block, "pistonBroken", "cylinderNumber", "0x1B50");
    this.__branch(block, "if not (rodDurability < dangerLevel) then -- jump 19", "0x1B5C");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1B69");
    this.__unresolved(block, "jump 16", "0x1B6D");
    this.__assign(block, "r", "(rodDurability * c0_95)", "0x1B79");
    this.__assign(block, "negTq", "(/*stack*/ / ((dangerLevel - r) * 1.6693))", "0x1B8B");
    this.__branch(block, "if not (negTq < c0) then -- jump 11", "0x1B96");
    this.__assign(block, "negTq", "c0", "0x1B9E");
    this.__assign(block, "rodDamage", "(rodDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1BBE");
    this.__assign(block, "rodBroken", "floor((rodDamage / partBreakPoint))", "0x1BD6");
    this.__expr(block, "Math", "0x1BD9");
    this.__branch(block, "if not (rodBroken > cylinderNumber) then -- jump 12", "0x1BE2");
    this.__assign(block, "rodBroken", "cylinderNumber", "0x1BEB");
    this.__branch(block, "if not (valveDurability < dangerLevel) then -- jump 19", "0x1BF7");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1C04");
    this.__unresolved(block, "jump 16", "0x1C08");
    this.__assign(block, "r", "(valveDurability * c0_95)", "0x1C14");
    this.__assign(block, "negTq", "(/*stack*/ / ((dangerLevel - r) * 1.6693))", "0x1C26");
    this.__branch(block, "if not (negTq < c0) then -- jump 11", "0x1C31");
    this.__assign(block, "negTq", "c0", "0x1C39");
    this.__assign(block, "valveDamage", "(valveDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1C59");
    this.__assign(block, "valveBroken", "floor((valveDamage / partBreakPoint))", "0x1C71");
    this.__expr(block, "Math", "0x1C74");
    this.__branch(block, "if not (valveBroken > valveNumber) then -- jump 12", "0x1C7D");
    this.__assign(block, "valveBroken", "valveNumber", "0x1C86");
    this.__branch(block, "if not (engineBlockDurability < dangerLevel) then -- jump 19", "0x1C92");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1C9F");
    this.__unresolved(block, "jump 16", "0x1CA3");
    this.__assign(block, "r", "(engineBlockDurability * c0_95)", "0x1CAF");
    this.__assign(block, "negTq", "(/*stack*/ / ((dangerLevel - r) * 1.6693))", "0x1CC1");
    this.__branch(block, "if not (negTq < c0) then -- jump 11", "0x1CCC");
    this.__assign(block, "negTq", "c0", "0x1CD4");
    this.__assign(block, "engineBlockDamage", "(engineBlockDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1CF4");
    this.__assign(block, "engineBlockBroken", "floor((engineBlockDamage / partBreakPoint))", "0x1D0C");
    this.__expr(block, "Math", "0x1D0F");
    this.__branch(block, "if not (engineBlockBroken > c1) then -- jump 12", "0x1D18");
    this.__assign(block, "engineBlockBroken", "c1", "0x1D21");
    this.__branch(block, "if not (headGasketDurability < dangerLevel) then -- jump 19", "0x1D2D");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1D3A");
    this.__unresolved(block, "jump 16", "0x1D3E");
    this.__assign(block, "r", "(headGasketDurability * c0_95)", "0x1D4A");
    this.__assign(block, "negTq", "(/*stack*/ / ((dangerLevel - r) * 1.6693))", "0x1D5C");
    this.__branch(block, "if not (negTq < c0) then -- jump 11", "0x1D67");
    this.__assign(block, "negTq", "c0", "0x1D6F");
    this.__assign(block, "headGasketDamage", "(headGasketDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1D8F");
    this.__assign(block, "headGasketBroken", "floor((headGasketDamage / partBreakPoint))", "0x1DA7");
    this.__expr(block, "Math", "0x1DAA");
    this.__branch(block, "if not (headGasketBroken > c1) then -- jump 12", "0x1DB3");
    this.__assign(block, "headGasketBroken", "c1", "0x1DBC");
    this.__assign(block, "engineDamage", "((((((pistonBroken / cylinderNumber) * c0_4) + ((valveBroken / valveNumber) * c0_2)) + ((rodBroken / cylinderNumber) * c0_1)) + (headGasketBroken * c0_1)) + (engineBlockBroken * c0_4))", "0x1E01");
    this.__branch(block, "if not (engineDamage > c0_65) then -- jump 12", "0x1E0D");
    this.__assign(block, "engineDamage", "c0_65", "0x1E16");
    this.__branch(block, "if not (engineDamage > c0) then -- jump 27", "0x1E2A");
    this.__assign(block, "isEngineLightOn", "1", "0x1E30");
    this.__expr(block, "(/*stack*/ and isEngineLightOn)", "0x1E33");
    this.__expr(block, "runEngineDamageLightCB()", "0x1E45");
    this.__branch(block, "if not (timeAnchor > VOID) then -- jump 52", "0x1E4B");
    this.__expr(block, "1.4848", "0x1E7B");
    this.__expr(block, "(milliseconds - timeAnchor)", "0x1E7C");
    this.__unresolved(block, "jump 38", "0x1E7D");
    this.__expr(block, "runEngineCB(rpm, mph, s, boostPsi, VOID)", "0x1EA2");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block09() {
    const block = "__stack_Lscr102_block09";
    this.__unresolved(block, "offset=31980 codeLen=710", null);
    this.__names(block, "rpm, pb, c1, stockBoost, c0, c1_7, c0_7, boostSetting, c7_5, c100, boostRange, boostLag, boostPsi, compressionPowerDelta, pistonCompressionLevel, c4, c5, c2, maxPsi, turboFlow, overallAirFlowLimit, airFlowLimit, chipSetting, fuelFlowLimit, dangerLevel, airFuelMeter, airFuelDelta, Math, abs, engineDamageRisk, c0_09, c0_07, c2_5, c10, c0_1, ECUtune, systemPower, airhpi, boostCreatedPower");
    this.__assign(block, "rpm", "(rpm / pb)", "0x001D");
    this.__branch(block, "if not (rpm > c1) then -- jump 11", "0x0028");
    this.__assign(block, "rpm", "c1", "0x0030");
    this.__expr(block, "pb", "0x0037");
    this.__branch(block, "if not (stockBoost > c0) then -- jump 45", "0x0040");
    this.__unresolved(block, "branch 16693", "0x0055");
    this.__unresolved(block, "0x03 unresolved stack=[((rpm * c1_7) - c0_7), 1.6693]", "0x0059");
    this.__assign(block, "pb", "((0.7489 * c7_5) / c100)", "0x0067");
    this.__expr(block, "(((rpm * c1_7) - c0_7) - 1.6693)", "0x006A");
    this.__unresolved(block, "jump 31", "0x006B");
    this.__unresolved(block, "0x08 unresolved stack=[((rpm * boostRange) - boostLag), 1.6693]", "0x007F");
    this.__assign(block, "pb", "((((rpm * boostRange) - boostLag) * 1.6693) / c100)", "0x0086");
    this.__branch(block, "if not (pb < VOID) then -- jump 8", "0x008E");
    this.__assign(block, "pb", "VOID", "0x0093");
    this.__assign(block, "boostPsi", "((rpm * boostRange) - boostLag)", "0x00A5");
    this.__branch(block, "if not (boostPsi < c0) then -- jump 12", "0x00B1");
    this.__assign(block, "boostPsi", "c0", "0x00BA");
    this.__assign(block, "compressionPowerDelta", "c0", "0x00C3");
    this.__branch(block, "if not (pistonCompressionLevel < c0) then -- jump 61", "0x00CF");
    this.__assign(block, "compressionPowerDelta", "(((1.6693 * c5) mod 0.7299) / c100)", "0x00F1");
    this.__expr(block, "(/*stack*/ * (pistonCompressionLevel mod c4))", "0x00F4");
    this.__branch(block, "if not (compressionPowerDelta > c0) then -- jump 12", "0x00FD");
    this.__assign(block, "compressionPowerDelta", "c0", "0x0106");
    this.__unresolved(block, "jump 40", "0x010A");
    this.__branch(block, "if not (pistonCompressionLevel > c0) then -- jump 28", "0x0115");
    this.__assign(block, "compressionPowerDelta", "(((pistonCompressionLevel * c2) - boostPsi) / 1.6693)", "0x012E");
    this.__assign(block, "c1", "c0", "0x0136");
    this.__branch(block, "if not (maxPsi > c0) then -- jump 24", "0x0142");
    this.__assign(block, "c1", "((boostPsi / maxPsi) * turboFlow)", "0x0154");
    this.__unresolved(block, "jump 11", "0x0158");
    this.__assign(block, "c1", "turboFlow", "0x015F");
    this.__branch(block, "if not (overallAirFlowLimit > c1) then -- jump 26", "0x016A");
    this.__assign(block, "stockBoost", "(overallAirFlowLimit - c1)", "0x0176");
    this.__assign(block, "airFlowLimit", "c1", "0x017E");
    this.__unresolved(block, "jump 24", "0x0182");
    this.__assign(block, "stockBoost", "(c1 - overallAirFlowLimit)", "0x018D");
    this.__assign(block, "airFlowLimit", "overallAirFlowLimit", "0x0196");
    this.__assign(block, "c0", "(airFlowLimit + chipSetting)", "0x01A3");
    this.__branch(block, "if not (c0 > fuelFlowLimit) then -- jump 11", "0x01AE");
    this.__assign(block, "c0", "fuelFlowLimit", "0x01B6");
    this.__assign(block, "dangerLevel", "airFlowLimit", "0x01BF");
    this.__assign(block, "airFuelMeter", "(c0 - airFlowLimit)", "0x01CC");
    this.__assign(block, "airFuelDelta", "abs(airFuelMeter)", "0x01DF");
    this.__expr(block, "Math", "0x01E2");
    this.__branch(block, "if not (airFuelDelta < c1) then -- jump 12", "0x01EB");
    this.__assign(block, "airFuelDelta", "c1", "0x01F4");
    this.__expr(block, "c1_7", "0x01FB");
    this.__branch(block, "if not (airFlowLimit > c0) then -- jump 91", "0x0203");
    this.__branch(block, "if not (airFuelDelta > c5) then -- jump 25", "0x020F");
    this.__assign(block, "engineDamageRisk", "((dangerLevel * airFuelDelta) * c0_09)", "0x0222");
    this.__unresolved(block, "jump 22", "0x0226");
    this.__assign(block, "engineDamageRisk", "((dangerLevel * airFuelDelta) * c0_07)", "0x0238");
    this.__assign(block, "c1_7", "(airFuelDelta * c2_5)", "0x0245");
    this.__branch(block, "if not (c1_7 > c10) then -- jump 11", "0x0250");
    this.__assign(block, "c1_7", "c10", "0x0258");
    this.__unresolved(block, "jump 54", "0x025C");
    this.__assign(block, "engineDamageRisk", "((dangerLevel / airFuelDelta) / c100)", "0x026E");
    this.__assign(block, "c1_7", "(c1 / airFuelDelta)", "0x027B");
    this.__branch(block, "if not (c1_7 < c0_1) then -- jump 11", "0x0286");
    this.__assign(block, "c1_7", "c0", "0x028E");
    this.__assign(block, "c0_7", "(stockBoost / c2)", "0x029A");
    this.__assign(block, "boostSetting", "(airFlowLimit - c0_7)", "0x02A6");
    this.__assign(block, "ECUtune", "(c1_7 / c100)", "0x02B3");
    this.__assign(block, "systemPower", "(airhpi - (c0_7 / c100))", "0x02C5");
    this.__assign(block, "boostCreatedPower", "((pb * boostSetting) / c100)", "0x02D6");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block10() {
    const block = "__stack_Lscr102_block10";
    this.__unresolved(block, "offset=34244 codeLen=110", null);
    this.__names(block, "rpm, undefined, idleRPM, c10000, posTq, tqArray, parseInt, c100, negTq, c200");
    this.__branch(block, "if not (rpm = undefined) then -- jump 15", "0x001B");
    this.__assign(block, "rpm", "idleRPM", "0x0024");
    this.__unresolved(block, "jump 48", "0x0028");
    this.__branch(block, "if not (rpm < idleRPM) then -- jump 15", "0x0033");
    this.__assign(block, "rpm", "idleRPM", "0x003C");
    this.__unresolved(block, "jump 24", "0x0040");
    this.__branch(block, "if not (rpm > c10000) then -- jump 12", "0x004B");
    this.__assign(block, "rpm", "c10000", "0x0054");
    this.__assign(block, "posTq", "tqArray[parseInt((rpm / c100))]", "0x006E");
    this.__unresolved(block, "0x08 unresolved stack=[(posTq + c200), 0.8758]", "0x0080");
    this.__expr(block, "0.8758", "0x0081");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block11() {
    const block = "__stack_Lscr102_block11";
    this.__unresolved(block, "offset=34828 codeLen=20", null);
    this.__names(block, "init, btd");
    this.__expr(block, "init(param_init)", "0x001F");
    this.__assign(block, "btd", "param_btd", "0x0024");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block12() {
    const block = "__stack_Lscr102_block12";
    this.__unresolved(block, "offset=35024 codeLen=198", null);
    this.__names(block, "gearValue, grs, c0, gr, mph, carAccel, carV, slip, sprite, flashSP, runEngineTractionLightCB, engineV, speedoV, hp, runEngineGearUpdateCB");
    this.__expr(block, "gearValue", "0x0017");
    this.__branch(block, "if not (gearValue < carV) then -- jump 18", "0x001F");
    this.__assign(block, "gearValue", "/*stack*/[(/*stack*/ + grs[gearValue])]", "0x002E");
    this.__branch(block, "if not (gearValue > c0) then -- jump 160", "0x0039");
    this.__expr(block, "EMPTY", "0x0041");
    this.__assign(block, "gr", "gearValue", "0x0046");
    this.__branch(block, "if not (gearValue = c0) then -- jump 95", "0x0052");
    this.__assign(block, "mph", "c0", "0x005B");
    this.__assign(block, "carAccel", "c0", "0x0064");
    this.__assign(block, "carV", "c0", "0x006D");
    this.__unresolved(block, "branch 40", "0x0075");
    this.__assign(block, "slip", "0", "0x007A");
    this.__expr(block, "slip", "0x007D");
    this.__expr(block, "runEngineTractionLightCB(0)", "0x0090");
    this.__assign(block, "engineV", "speedoV", "0x0096");
    this.__expr(block, "sprite(flashSP)", "0x0099");
    this.__unresolved(block, "jump 12", "0x009A");
    this.__assign(block, "engineV", "carV", "0x00A2");
    this.__assign(block, "hp", "c0", "0x00AB");
    this.__unresolved(block, "jump 21", "0x00AF");
    this.__branch(block, "if not (/*stack*/ = /*stack*/[gearValue]) then -- jump 12", "0x00B7");
    this.__assign(block, "speedoV", "engineV", "0x00C0");
    this.__expr(block, "runEngineGearUpdateCB(gearValue)", "0x00D9");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block13() {
    const block = "__stack_Lscr102_block13";
    this.__unresolved(block, "offset=35848 codeLen=219", null);
    this.__names(block, "gearValue, staging, c0, gr, grs, mph, carAccel, carV, speedoV, engineV, slip, sprite, flashSP, runEngineTractionLightCB, hp, runEngineGearUpdateCB");
    this.__unresolved(block, "branch 16693", "0x001E");
    this.__expr(block, "(gearValue > -1)", "0x0022");
    this.__unresolved(block, "0x08 unresolved stack=[(/*stack*/ <= 1.7408), (gearValue > c0)]", "0x0032");
    this.__unresolved(block, "0xB6 unresolved stack=[(/*stack*/ <= 1.7408), ((gearValue > c0) and staging), 0.1792]", "0x003B");
    this.__unresolved(block, "0x33 unresolved stack=[(/*stack*/ <= 1.7408), ((gearValue > c0) and staging), 0.1792]", "0x003D");
    this.__expr(block, "0.1792", "0x0040");
    this.__branch(block, "if not (gearValue = -1) then -- jump 53", "0x0048");
    this.__assign(block, "gr", "grs[VOID]", "0x0053");
    this.__expr(block, "((gearValue > c0) and staging)", "0x0056");
    this.__assign(block, "mph", "c0", "0x005C");
    this.__expr(block, "(/*stack*/ <= 1.7408)", "0x005F");
    this.__assign(block, "carAccel", "c0", "0x0065");
    this.__assign(block, "carV", "c0", "0x006E");
    this.__assign(block, "speedoV", "engineV", "0x0077");
    this.__unresolved(block, "jump 94", "0x007B");
    this.__branch(block, "if not (gearValue = c0) then -- jump 68", "0x0086");
    this.__unresolved(block, "branch 40", "0x008E");
    this.__assign(block, "slip", "0", "0x0093");
    this.__expr(block, "slip", "0x0096");
    this.__expr(block, "runEngineTractionLightCB(0)", "0x00A9");
    this.__assign(block, "engineV", "speedoV", "0x00AF");
    this.__expr(block, "sprite(flashSP)", "0x00B2");
    this.__unresolved(block, "jump 12", "0x00B3");
    this.__assign(block, "engineV", "carV", "0x00BB");
    this.__assign(block, "hp", "c0", "0x00C4");
    this.__unresolved(block, "jump 17", "0x00C8");
    this.__assign(block, "gr", "grs[gearValue]", "0x00D5");
    this.__expr(block, "runEngineGearUpdateCB(gearValue)", "0x00EE");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block14() {
    const block = "__stack_Lscr102_block14";
    this.__unresolved(block, "offset=36764 codeLen=23", null);
    this.__names(block, "brake");
    this.__branch(block, "if not (/*stack*/ = /*stack*/[param_brake]) then -- jump 12", "0x0018");
    this.__assign(block, "brake", "1", "0x001E");
    this.__unresolved(block, "jump 9", "0x0022");
    this.__assign(block, "brake", "0", "0x0027");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block15() {
    const block = "__stack_Lscr102_block15";
    this.__unresolved(block, "offset=36964 codeLen=54", null);
    this.__names(block, "c0_05, clutchFeather, c0_2");
    this.__branch(block, "if not (param_c0_05 < c0_05) then -- jump 15", "0x001B");
    this.__assign(block, "clutchFeather", "c0_05", "0x0024");
    this.__unresolved(block, "jump 34", "0x0028");
    this.__branch(block, "if not (param_c0_05 > c0_2) then -- jump 15", "0x0032");
    this.__assign(block, "clutchFeather", "c0_2", "0x003B");
    this.__unresolved(block, "jump 11", "0x003F");
    this.__assign(block, "clutchFeather", "param_c0_05", "0x0046");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block16() {
    const block = "__stack_Lscr102_block16";
    this.__unresolved(block, "offset=37252 codeLen=539", null);
    this.__names(block, "timeAnchor, c0, goodCounterRT, badCounterRT, goodCounterET, badCounterET, lightDelayTO, object, forget, staging, gearValue, gearUp, raceType, KOTH, KREADY, createMd5Hash, QM, RREADY, RIVAL, TEAMRIVAL, RIVREADY, CTQ, P, startLightTimer, p, CT, btd, o, lightTO1, stagingLightPos1, timeout, c1000, c2, symbol, runLight, b, lightTO2, stagingLightPos2, HTQ, HTQREADY");
    this.__assign(block, "timeAnchor", "c0", "0x0019");
    this.__assign(block, "goodCounterRT", "VOID", "0x001F");
    this.__assign(block, "badCounterRT", "VOID", "0x0025");
    this.__assign(block, "goodCounterET", "VOID", "0x002B");
    this.__assign(block, "badCounterET", "VOID", "0x0031");
    this.__unresolved(block, "branch 4615", "0x003D");
    this.__expr(block, "forget()", "0x004D");
    this.__unresolved(block, "branch 477", "0x0052");
    this.__assign(block, "staging", "0", "0x0057");
    this.__expr(block, "staging", "0x005A");
    this.__branch(block, "if not (gearValue = -1) then -- jump 12", "0x0062");
    this.__expr(block, "gearUp()", "0x006E");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 24", "0x0076");
    this.__expr(block, "KREADY(VOID, createMd5Hash(0))", "0x008B");
    this.__unresolved(block, "jump 419", "0x008C");
    this.__branch(block, "if not (raceType = QM) then -- jump 24", "0x0096");
    this.__expr(block, "RREADY(VOID, createMd5Hash(0))", "0x00AB");
    this.__unresolved(block, "jump 387", "0x00AC");
    this.__unresolved(block, "0x0B unresolved stack=[lightDelayTO, VOID_SENTINEL, lightDelayTO, (raceType = RIVAL)]", "0x00B9");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 24", "0x00C1");
    this.__expr(block, "RIVREADY(VOID, createMd5Hash(0))", "0x00D6");
    this.__unresolved(block, "jump 344", "0x00D7");
    this.__unresolved(block, "0x0B unresolved stack=[lightDelayTO, VOID_SENTINEL, lightDelayTO, (raceType = RIVAL), (raceType = CTQ)]", "0x00E4");
    this.__branch(block, "if not (raceType = P) then -- jump 19", "0x00EC");
    this.__expr(block, "startLightTimer(p, VOID)", "0x00FC");
    this.__unresolved(block, "jump 306", "0x00FD");
    this.__branch(block, "if not (raceType = CT) then -- jump 234", "0x0107");
    this.__branch(block, "if not (btd < c0) then -- jump 99", "0x0113");
    this.__expr(block, "startLightTimer(o, VOID)", "0x0123");
    this.__unresolved(block, "branch 4615", "0x012C");
    this.__expr(block, "forget()", "0x013C");
    this.__assign(block, "stagingLightPos1", "c0", "0x0142");
    this.__expr(block, "lightTO1", "0x0145");
    this.__unresolved(block, "0x04 unresolved stack=[lightDelayTO, VOID_SENTINEL, lightDelayTO, (raceType = RIVAL), (raceType = CTQ), lightTO1, VOID_SENTINEL, timeout, ((((p mod btd) * c1000) + (c1000 / c2)) ^ symbol(runLight))]", "0x016F");
    this.__assign(block, "lightTO1", "((((p mod btd) * c1000) + (c1000 / c2)) ^ symbol(runLight))", "0x0170");
    this.__expr(block, "timeout", "0x0173");
    this.__unresolved(block, "jump 123", "0x0174");
    this.__branch(block, "if not (btd = c0) then -- jump 19", "0x017F");
    this.__expr(block, "startLightTimer(b, VOID)", "0x018F");
    this.__unresolved(block, "jump 95", "0x0190");
    this.__unresolved(block, "branch 4615", "0x019B");
    this.__expr(block, "forget()", "0x01AB");
    this.__assign(block, "stagingLightPos2", "c0", "0x01B1");
    this.__expr(block, "lightTO2", "0x01B4");
    this.__assign(block, "lightTO2", "timeout(o).new(((btd * c1000) + (c1000 / c2)), symbol(runLight))", "0x01DE");
    this.__expr(block, "VOID_SENTINEL", "0x01E1");
    this.__expr(block, "startLightTimer(p, VOID)", "0x01EE");
    this.__unresolved(block, "jump 64", "0x01EF");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 24", "0x01F9");
    this.__expr(block, "HTQREADY(VOID, createMd5Hash(0))", "0x020E");
    this.__unresolved(block, "jump 32", "0x020F");
    this.__branch(block, "if not (raceType = HT) then -- jump 21", "0x0219");
    this.__expr(block, "HTREADY(VOID, createMd5Hash(0))", "0x022E");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block17() {
    const block = "__stack_Lscr102_block17";
    this.__unresolved(block, "offset=39320 codeLen=681", null);
    this.__names(block, "greenDelay, parseInt, sprite, flashSP, setSpectateDelayCB, timeAnchor, c0, _system, milliseconds, lightTO1, object, forget, stagingLightPos1, timeout, symbol, runLight, secondBuffer, lightTO2, stagingLightPos2, p, b, 1, 1T, s, sT, o, 2, 2T");
    this.__assign(block, "greenDelay", "parseInt(param_parseInt)", "0x001F");
    this.__expr(block, "setSpectateDelayCB(param_parseInt)", "0x0037");
    this.__unresolved(block, "0x47 unresolved stack=[sprite(flashSP), param_greenDelay]", "0x003B");
    this.__expr(block, "param_greenDelay", "0x003C");
    this.__unresolved(block, "0x82 lightTO1 unresolved stack=[sprite(flashSP)]", "0x003D");
    this.__unresolved(block, "0x29 unresolved stack=[(/*stack*/ <> sprite(flashSP))]", "0x0043");
    this.__unresolved(block, "0x29 unresolved stack=[(/*stack*/ < (/*stack*/ <> sprite(flashSP)))]", "0x0047");
    this.__unresolved(block, "0x82 \"1T\" unresolved stack=[(/*stack*/ <= (/*stack*/ < (/*stack*/ <> sprite(flashSP))))]", "0x004B");
    this.__unresolved(block, "0xCD unresolved stack=[(/*stack*/ <= (/*stack*/ < (/*stack*/ <> sprite(flashSP))))]", "0x004F");
    this.__unresolved(block, "0x18 unresolved stack=[(/*stack*/ >= (/*stack*/ <= (/*stack*/ < (/*stack*/ <> sprite(flashSP)))))]", "0x0055");
    this.__unresolved(block, "0x5A o unresolved stack=[(/*stack*/ >= (/*stack*/ <= (/*stack*/ < (/*stack*/ <> sprite(flashSP)))))]", "0x0057");
    this.__unresolved(block, "0x9C unresolved stack=[(/*stack*/ >= (/*stack*/ <= (/*stack*/ < (/*stack*/ <> sprite(flashSP)))))]", "0x005B");
    this.__unresolved(block, "0xF5 unresolved stack=[(/*stack*/ >= (/*stack*/ <= (/*stack*/ < (/*stack*/ <> sprite(flashSP)))))]", "0x005F");
    this.__expr(block, "(/*stack*/ + (/*stack*/ >= (/*stack*/ <= (/*stack*/ < (/*stack*/ <> sprite(flashSP))))))", "0x0062");
    this.__unresolved(block, "0x40 unresolved stack=[]", "0x0063");
    this.__branch(block, "if not (timeAnchor = c0) then -- jump 14", "0x006C");
    this.__assign(block, "timeAnchor", "milliseconds", "0x0077");
    this.__expr(block, "_system", "0x007A");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x0084");
    this.__expr(block, "forget()", "0x0093");
    this.__assign(block, "stagingLightPos1", "c0", "0x0099");
    this.__expr(block, "lightTO1", "0x009C");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x00B6");
    this.__unresolved(block, "jump 515", "0x00BA");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x00C6");
    this.__expr(block, "forget()", "0x00D5");
    this.__assign(block, "stagingLightPos1", "c0", "0x00DB");
    this.__expr(block, "lightTO1", "0x00DE");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight))", "0x0101");
    this.__unresolved(block, "jump 440", "0x0105");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x0111");
    this.__expr(block, "forget()", "0x0120");
    this.__assign(block, "stagingLightPos1", "c0", "0x0126");
    this.__expr(block, "lightTO1", "0x0129");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x0143");
    this.__unresolved(block, "jump 374", "0x0147");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x0153");
    this.__expr(block, "forget()", "0x0162");
    this.__assign(block, "stagingLightPos1", "c0", "0x0168");
    this.__expr(block, "lightTO1", "0x016B");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight))", "0x018E");
    this.__unresolved(block, "jump 299", "0x0192");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x019E");
    this.__expr(block, "forget()", "0x01AD");
    this.__assign(block, "stagingLightPos1", "c0", "0x01B3");
    this.__expr(block, "lightTO1", "0x01B6");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x01D0");
    this.__unresolved(block, "jump 233", "0x01D4");
    this.__branch(block, "if not (timeAnchor = c0) then -- jump 14", "0x01DF");
    this.__assign(block, "timeAnchor", "milliseconds", "0x01EA");
    this.__expr(block, "_system", "0x01ED");
    this.__branch(block, "if not (lightTO2 = VOID_SENTINEL) then -- jump 15", "0x01F7");
    this.__expr(block, "forget()", "0x0206");
    this.__assign(block, "stagingLightPos2", "c0", "0x020C");
    this.__expr(block, "lightTO2", "0x020F");
    this.__assign(block, "lightTO2", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x0229");
    this.__unresolved(block, "jump 144", "0x022D");
    this.__branch(block, "if not (lightTO2 = VOID_SENTINEL) then -- jump 15", "0x0239");
    this.__expr(block, "forget()", "0x0248");
    this.__assign(block, "stagingLightPos2", "c0", "0x024E");
    this.__expr(block, "lightTO2", "0x0251");
    this.__assign(block, "lightTO2", "timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight))", "0x0274");
    this.__unresolved(block, "jump 69", "0x0278");
    this.__branch(block, "if not (lightTO2 = VOID_SENTINEL) then -- jump 15", "0x0284");
    this.__expr(block, "forget()", "0x0293");
    this.__assign(block, "stagingLightPos2", "c0", "0x0299");
    this.__expr(block, "lightTO2", "0x029C");
    this.__assign(block, "lightTO2", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x02B6");
    this.__unresolved(block, "jump 3", "0x02BA");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block18() {
    const block = "__stack_Lscr102_block18";
    this.__unresolved(block, "offset=41116 codeLen=708", null);
    this.__names(block, "period, name, stagingLightPos1, c0, sprite, flashSP, runEngineSetLightOnCB, amber1, greenDelay, amber2, amber3, forget, timeGreen, _system, milliseconds, lightTO2, timeout, symbol, runLight, p, 1, b, s, green, raceStartTimeCB, lightTO1, object, stagingLightPos2, raceType, CT, ctStartAnimateComputerCB, 1T, sT, o, 2, 2T");
    this.__assign(block, "period", "500", "0x001A");
    this.__expr(block, "param_period", "0x001D");
    this.__unresolved(block, "0x47 unresolved stack=[param_period, name]", "0x0024");
    this.__expr(block, "name", "0x0025");
    this.__unresolved(block, "0xB4 unresolved stack=[param_period]", "0x0026");
    this.__unresolved(block, "0x29 unresolved stack=[(/*stack*/ <> param_period)]", "0x002C");
    this.__unresolved(block, "0x29 unresolved stack=[(/*stack*/ < (/*stack*/ <> param_period))]", "0x0030");
    this.__unresolved(block, "0x29 unresolved stack=[(/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period)))]", "0x0034");
    this.__unresolved(block, "0x29 unresolved stack=[(/*stack*/ > (/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period))))]", "0x0038");
    this.__unresolved(block, "0x1F unresolved stack=[(/*stack*/ > (/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period))))]", "0x003A");
    this.__unresolved(block, "0x29 unresolved stack=[(/*stack*/ > (/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period))))]", "0x003C");
    this.__unresolved(block, "0x29 unresolved stack=[(/*stack*/ and (/*stack*/ > (/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period)))))]", "0x0040");
    this.__unresolved(block, "0xCF unresolved stack=[(/*stack*/ or (/*stack*/ and (/*stack*/ > (/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period))))))]", "0x0044");
    this.__unresolved(block, "0xCF unresolved stack=[(/*stack*/ mod (/*stack*/ or (/*stack*/ and (/*stack*/ > (/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period)))))))]", "0x0048");
    this.__unresolved(block, "0xCF unresolved stack=[(/*stack*/ ^ (/*stack*/ mod (/*stack*/ or (/*stack*/ and (/*stack*/ > (/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period))))))))]", "0x004C");
    this.__unresolved(block, "branch 12", "0x0052");
    this.__assign(block, "stagingLightPos1", "c0", "0x005A");
    this.__expr(block, "((/*stack*/ ^ (/*stack*/ mod (/*stack*/ or (/*stack*/ and (/*stack*/ > (/*stack*/ <= (/*stack*/ < (/*stack*/ <> param_period)))))))) and stagingLightPos1)", "0x005D");
    this.__expr(block, "EMPTY", "0x0061");
    this.__unresolved(block, "0x46 unresolved stack=[stagingLightPos1]", "0x0067");
    this.__unresolved(block, "0x89 unresolved stack=[stagingLightPos1]", "0x0069");
    this.__unresolved(block, "0x04 unresolved stack=[stagingLightPos1]", "0x006D");
    this.__unresolved(block, "0xB6 unresolved stack=[stagingLightPos1]", "0x0071");
    this.__unresolved(block, "0xD4 unresolved stack=[stagingLightPos1]", "0x0073");
    this.__expr(block, "param_period(name, amber1)", "0x0090");
    this.__branch(block, "if not (greenDelay > VOID) then -- jump 131", "0x0096");
    this.__expr(block, "EMPTY", "0x009D");
    this.__expr(block, "runEngineSetLightOnCB", "0x009E");
    this.__expr(block, "EMPTY", "0x00A2");
    this.__expr(block, "sprite(flashSP)", "0x00A3");
    this.__expr(block, "param_period(name, amber2)", "0x00BE");
    this.__expr(block, "param_period(name, amber3)", "0x00D9");
    this.__expr(block, "forget()", "0x00E4");
    this.__assign(block, "timeGreen", "((milliseconds + greenDelay) - 500)", "0x00F5");
    this.__expr(block, "_system", "0x00F8");
    this.__assign(block, "lightTO2", "timeout(param_period).new(greenDelay, symbol(runLight))", "0x0116");
    this.__expr(block, "param_period", "0x0119");
    this.__unresolved(block, "jump 214", "0x011A");
    this.__expr(block, "param_period(name, amber2)", "0x0137");
    this.__unresolved(block, "jump 184", "0x0138");
    this.__expr(block, "param_period(name, amber3)", "0x0155");
    this.__unresolved(block, "0x47 unresolved stack=[(/*stack*/ + stagingLightPos1), sprite(flashSP), runEngineSetLightOnCB, sprite(flashSP), runEngineSetLightOnCB, sprite(flashSP), runEngineSetLightOnCB, sprite(flashSP), runEngineSetLightOnCB, param_period, name]", "0x015C");
    this.__unresolved(block, "0x04 unresolved stack=[(/*stack*/ + stagingLightPos1), sprite(flashSP), runEngineSetLightOnCB, sprite(flashSP), runEngineSetLightOnCB, sprite(flashSP), runEngineSetLightOnCB, sprite(flashSP), runEngineSetLightOnCB, (param_period ^ name)]", "0x0160");
    this.__assign(block, "timeGreen", "milliseconds", "0x0178");
    this.__expr(block, "_system", "0x017B");
    this.__unresolved(block, "jump 3", "0x017C");
    this.__unresolved(block, "jump 113", "0x017F");
    this.__expr(block, "param_period(name, green)", "0x019C");
    this.__unresolved(block, "0x0D unresolved stack=[(/*stack*/ + stagingLightPos1), (sprite(flashSP) <= (runEngineSetLightOnCB > (sprite(flashSP) <= (runEngineSetLightOnCB <= (sprite(flashSP) <= (runEngineSetLightOnCB < (sprite(flashSP) <= (runEngineSetLightOnCB <> (param_period ^ name))))))))), sprite(flashSP), runEngineSetLightOnCB, param_period, (name = p)]", "0x01A9");
    this.__branch(block, "if not (name = b) then -- jump 21", "0x01B3");
    this.__expr(block, "raceStartTimeCB()", "0x01C8");
    this.__expr(block, "forget()", "0x01D3");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x01DD");
    this.__expr(block, "forget()", "0x01EC");
    this.__unresolved(block, "jump 3", "0x01ED");
    this.__unresolved(block, "jump 232", "0x01F0");
    this.__unresolved(block, "branch 12", "0x01F8");
    this.__assign(block, "stagingLightPos2", "c0", "0x0200");
    this.__expr(block, "(lightTO1 and stagingLightPos2)", "0x0203");
    this.__expr(block, "(param_period + EMPTY)", "0x0208");
    this.__unresolved(block, "0x46 unresolved stack=[(/*stack*/ + stagingLightPos1), (sprite(flashSP) <= (runEngineSetLightOnCB > (sprite(flashSP) <= (runEngineSetLightOnCB <= (sprite(flashSP) <= (runEngineSetLightOnCB < (sprite(flashSP) <= (runEngineSetLightOnCB <> (param_period ^ name))))))))), sprite(flashSP), runEngineSetLightOnCB, param_period, (name = p), param_period, sprite(flashSP), stagingLightPos2]", "0x020D");
    this.__unresolved(block, "0xC8 unresolved stack=[(/*stack*/ + stagingLightPos1), (sprite(flashSP) <= (runEngineSetLightOnCB > (sprite(flashSP) <= (runEngineSetLightOnCB <= (sprite(flashSP) <= (runEngineSetLightOnCB < (sprite(flashSP) <= (runEngineSetLightOnCB <> (param_period ^ name))))))))), sprite(flashSP), runEngineSetLightOnCB, param_period, (name = p), param_period, sprite(flashSP), stagingLightPos2]", "0x020F");
    this.__unresolved(block, "0x04 unresolved stack=[(/*stack*/ + stagingLightPos1), (sprite(flashSP) <= (runEngineSetLightOnCB > (sprite(flashSP) <= (runEngineSetLightOnCB <= (sprite(flashSP) <= (runEngineSetLightOnCB < (sprite(flashSP) <= (runEngineSetLightOnCB <> (param_period ^ name))))))))), sprite(flashSP), runEngineSetLightOnCB, param_period, (name = p), param_period, sprite(flashSP), stagingLightPos2]", "0x0213");
    this.__unresolved(block, "0x2D unresolved stack=[(/*stack*/ + stagingLightPos1), (sprite(flashSP) <= (runEngineSetLightOnCB > (sprite(flashSP) <= (runEngineSetLightOnCB <= (sprite(flashSP) <= (runEngineSetLightOnCB < (sprite(flashSP) <= (runEngineSetLightOnCB <> (param_period ^ name))))))))), sprite(flashSP), runEngineSetLightOnCB, param_period, (name = p), param_period, sprite(flashSP), stagingLightPos2]", "0x0217");
    this.__unresolved(block, "0x4B unresolved stack=[(/*stack*/ + stagingLightPos1), (sprite(flashSP) <= (runEngineSetLightOnCB > (sprite(flashSP) <= (runEngineSetLightOnCB <= (sprite(flashSP) <= (runEngineSetLightOnCB < (sprite(flashSP) <= (runEngineSetLightOnCB <> (param_period ^ name))))))))), sprite(flashSP), runEngineSetLightOnCB, param_period, (name = p), param_period, sprite(flashSP), stagingLightPos2]", "0x0219");
    this.__unresolved(block, "0x69 unresolved stack=[(/*stack*/ + stagingLightPos1), (sprite(flashSP) <= (runEngineSetLightOnCB > (sprite(flashSP) <= (runEngineSetLightOnCB <= (sprite(flashSP) <= (runEngineSetLightOnCB < (sprite(flashSP) <= (runEngineSetLightOnCB <> (param_period ^ name))))))))), sprite(flashSP), runEngineSetLightOnCB, param_period, (name = p), param_period, sprite(flashSP), stagingLightPos2]", "0x021B");
    this.__expr(block, "param_period(name, amber1)", "0x0236");
    this.__unresolved(block, "jump 158", "0x0237");
    this.__expr(block, "param_period(name, amber2)", "0x0254");
    this.__unresolved(block, "jump 128", "0x0255");
    this.__expr(block, "param_period(name, amber3)", "0x0272");
    this.__unresolved(block, "jump 98", "0x0273");
    this.__expr(block, "param_period(name, green)", "0x0290");
    this.__branch(block, "if not (raceType = CT) then -- jump 21", "0x0298");
    this.__expr(block, "ctStartAnimateComputerCB()", "0x02AD");
    this.__expr(block, "forget()", "0x02B8");
    this.__branch(block, "if not (lightTO2 = VOID_SENTINEL) then -- jump 15", "0x02C2");
    this.__expr(block, "forget()", "0x02D1");
    this.__unresolved(block, "jump 3", "0x02D2");
    this.__unresolved(block, "jump 3", "0x02D5");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block19() {
    const block = "__stack_Lscr102_block19";
    this.__unresolved(block, "offset=43264 codeLen=1616", null);
    this.__names(block, "stockRedLine, ,, detuneHp, stockBoost, boostType, boostSetting, grs, fgr, redLine, revLimiter, UsInit, NOS, w, r, nitrousTankSize, maxPsi, hpi, airhpi, turboFlow, fuelFlowLimit, overallAirFlowLimit, cylinderNumber, valveNumber, pistonCompressionLevel, chipSetting, pistonDurability, rodDurability, valveDurability, headGasketDurability, engineBlockDurability, oilDurability, tqArray, join, DAfp, g, rpmGearConversion, gConvSlipA, gConvSlipB, brakeDecleration, revLimiterDeceleration");
    this.__assign(block, "EMPTY", "EMPTY", "0x0017");
    this.__assign(block, "EMPTY", "(EMPTY + (stockRedLine + \",\"))", "0x0027");
    this.__assign(block, "EMPTY", "(EMPTY + (detuneHp + \",\"))", "0x0037");
    this.__assign(block, "EMPTY", "(EMPTY + (stockBoost + \",\"))", "0x0047");
    this.__assign(block, "EMPTY", "(EMPTY + (boostType + \",\"))", "0x0057");
    this.__assign(block, "EMPTY", "(EMPTY + (boostSetting + \",\"))", "0x0067");
    this.__assign(block, "stockRedLine", "/*stack*/[/*stack*/]", "0x006C");
    this.__branch(block, "if not (stockRedLine <= boostSetting) then -- jump 30", "0x0076");
    this.__assign(block, "EMPTY", "(EMPTY + (grs[stockRedLine] + \",\"))", "0x008A");
    this.__unresolved(block, "0x64 unresolved stack=[]", "0x008E");
    this.__unresolved(block, "jump -34", "0x0092");
    this.__assign(block, "EMPTY", "(EMPTY + (fgr + \",\"))", "0x00A1");
    this.__assign(block, "EMPTY", "(EMPTY + (redLine + \",\"))", "0x00B1");
    this.__assign(block, "EMPTY", "(EMPTY + (revLimiter + \",\"))", "0x00C1");
    this.__assign(block, "EMPTY", "(EMPTY + (UsInit + \",\"))", "0x00D1");
    this.__assign(block, "EMPTY", "(EMPTY + (NOS + \",\"))", "0x00E1");
    this.__assign(block, "EMPTY", "(EMPTY + (w + \",\"))", "0x00F1");
    this.__assign(block, "EMPTY", "(EMPTY + (r + \",\"))", "0x0101");
    this.__assign(block, "EMPTY", "(EMPTY + (nitrousTankSize + \",\"))", "0x0111");
    this.__assign(block, "EMPTY", "(EMPTY + (maxPsi + \",\"))", "0x0121");
    this.__assign(block, "EMPTY", "(EMPTY + (hpi + \",\"))", "0x0131");
    this.__assign(block, "EMPTY", "(EMPTY + (airhpi + \",\"))", "0x0141");
    this.__assign(block, "EMPTY", "(EMPTY + (turboFlow + \",\"))", "0x0151");
    this.__assign(block, "EMPTY", "(EMPTY + (fuelFlowLimit + \",\"))", "0x0161");
    this.__assign(block, "EMPTY", "(EMPTY + (overallAirFlowLimit + \",\"))", "0x0171");
    this.__assign(block, "EMPTY", "(EMPTY + (cylinderNumber + \",\"))", "0x0181");
    this.__assign(block, "EMPTY", "(EMPTY + (valveNumber + \",\"))", "0x0191");
    this.__assign(block, "EMPTY", "(EMPTY + (pistonCompressionLevel + \",\"))", "0x01A1");
    this.__assign(block, "EMPTY", "(EMPTY + (chipSetting + \",\"))", "0x01B1");
    this.__assign(block, "EMPTY", "(EMPTY + (pistonDurability + \",\"))", "0x01C1");
    this.__assign(block, "EMPTY", "(EMPTY + (rodDurability + \",\"))", "0x01D1");
    this.__assign(block, "EMPTY", "(EMPTY + (valveDurability + \",\"))", "0x01E1");
    this.__assign(block, "EMPTY", "(EMPTY + (headGasketDurability + \",\"))", "0x01F1");
    this.__assign(block, "EMPTY", "(EMPTY + (engineBlockDurability + \",\"))", "0x0201");
    this.__assign(block, "EMPTY", "(EMPTY + (oilDurability + \",\"))", "0x0211");
    this.__assign(block, "EMPTY", "(tqArray + (join(\",\") + \",\"))", "0x022B");
    this.__expr(block, "EMPTY", "0x022E");
    this.__assign(block, "EMPTY", "(EMPTY + (DAfp + \",\"))", "0x023B");
    this.__assign(block, "EMPTY", "(EMPTY + (g + \",\"))", "0x024B");
    this.__assign(block, "EMPTY", "(EMPTY + (rpmGearConversion + \",\"))", "0x025B");
    this.__assign(block, "EMPTY", "(EMPTY + (gConvSlipA + \",\"))", "0x026B");
    this.__assign(block, "EMPTY", "(EMPTY + (gConvSlipB + \",\"))", "0x027B");
    this.__assign(block, "EMPTY", "(EMPTY + (brakeDecleration + \",\"))", "0x028B");
    this.__assign(block, "EMPTY", "(EMPTY + (revLimiterDeceleration + \",\"))", "0x029B");
    this.__assign(block, "EMPTY", "(EMPTY + (idleRPM + \",\"))", "0x02AB");
    this.__assign(block, "EMPTY", "(EMPTY + (tqFlyFactor + \",\"))", "0x02BB");
    this.__assign(block, "EMPTY", "(EMPTY + (partBreakPoint + \",\"))", "0x02CB");
    this.__assign(block, "EMPTY", "(EMPTY + (vToMph + \",\"))", "0x02DB");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_5 + \",\"))", "0x02EB");
    this.__assign(block, "EMPTY", "(EMPTY + (c0 + \",\"))", "0x02FB");
    this.__assign(block, "EMPTY", "(EMPTY + (c100 + \",\"))", "0x030B");
    this.__assign(block, "EMPTY", "(EMPTY + (c1000 + \",\"))", "0x031B");
    this.__assign(block, "EMPTY", "(EMPTY + (c10000 + \",\"))", "0x032B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_0075 + \",\"))", "0x033B");
    this.__assign(block, "EMPTY", "(EMPTY + (c13 + \",\"))", "0x034B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_4 + \",\"))", "0x035B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_7 + \",\"))", "0x036B");
    this.__assign(block, "EMPTY", "(EMPTY + (c1_7 + \",\"))", "0x037B");
    this.__assign(block, "EMPTY", "(EMPTY + (c1_25 + \",\"))", "0x038B");
    this.__assign(block, "EMPTY", "(EMPTY + (c9 + \",\"))", "0x039B");
    this.__assign(block, "EMPTY", "(EMPTY + (c299 + \",\"))", "0x03AB");
    this.__assign(block, "EMPTY", "(EMPTY + (c300 + \",\"))", "0x03BB");
    this.__assign(block, "EMPTY", "(EMPTY + (c5_5 + \",\"))", "0x03CB");
    this.__assign(block, "EMPTY", "(EMPTY + (c2 + \",\"))", "0x03DB");
    this.__assign(block, "EMPTY", "(EMPTY + (c5 + \",\"))", "0x03EB");
    this.__assign(block, "EMPTY", "(EMPTY + (c50 + \",\"))", "0x03FB");
    this.__assign(block, "EMPTY", "(EMPTY + (c8 + \",\"))", "0x040B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_005 + \",\"))", "0x041B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_016 + \",\"))", "0x042B");
    this.__assign(block, "EMPTY", "(EMPTY + (c3 + \",\"))", "0x043B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_09 + \",\"))", "0x044B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_6 + \",\"))", "0x045B");
    this.__assign(block, "EMPTY", "(EMPTY + (c10 + \",\"))", "0x046B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_015 + \",\"))", "0x047B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_02 + \",\"))", "0x048B");
    this.__assign(block, "EMPTY", "(EMPTY + (c200 + \",\"))", "0x049B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_18 + \",\"))", "0x04AB");
    this.__assign(block, "EMPTY", "(EMPTY + (c1320 + \",\"))", "0x04BB");
    this.__assign(block, "EMPTY", "(EMPTY + (c760 + \",\"))", "0x04CB");
    this.__assign(block, "EMPTY", "(EMPTY + (c7 + \",\"))", "0x04DB");
    this.__assign(block, "EMPTY", "(EMPTY + (c7_5 + \",\"))", "0x04EB");
    this.__assign(block, "EMPTY", "(EMPTY + (c1_8 + \",\"))", "0x04FB");
    this.__assign(block, "EMPTY", "(EMPTY + (c1_15 + \",\"))", "0x050B");
    this.__assign(block, "EMPTY", "(EMPTY + (c80 + \",\"))", "0x051B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_95 + \",\"))", "0x052B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_05 + \",\"))", "0x053B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_2 + \",\"))", "0x054B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_1 + \",\"))", "0x055B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_65 + \",\"))", "0x056B");
    this.__assign(block, "EMPTY", "(EMPTY + (c4 + \",\"))", "0x057B");
    this.__assign(block, "EMPTY", "(EMPTY + (c0_07 + \",\"))", "0x058B");
    this.__assign(block, "EMPTY", "(EMPTY + (c2_5 + \",\"))", "0x059B");
    this.__assign(block, "EMPTY", "(EMPTY + (c1 + \",\"))", "0x05AB");
    this.__assign(block, "EMPTY", "(EMPTY + guid)", "0x05B7");
    this.__branch(block, "if not (engineDamage < c0) then -- jump 14", "0x05C3");
    this.__assign(block, "EMPTY", "(EMPTY + nogood)", "0x05CE");
    this.__unresolved(block, "branch 106", "0x05D5");
    this.__branch(block, "if not (goodCounterET = VOID) then -- jump 17", "0x05E6");
    this.__assign(block, "EMPTY", "(EMPTY + nogood)", "0x05F1");
    this.__expr(block, "(goodCounterRT = VOID)", "0x05F4");
    this.__unresolved(block, "jump 74", "0x05F5");
    this.__branch(block, "if not (0.7745 > lagPercent) then -- jump 17", "0x060B");
    this.__assign(block, "EMPTY", "(EMPTY + nogood)", "0x0616");
    this.__expr(block, "(goodCounterRT + badCounterRT)", "0x0619");
    this.__unresolved(block, "jump 37", "0x061A");
    this.__branch(block, "if not (0.7745 > lagPercent) then -- jump 14", "0x0630");
    this.__assign(block, "EMPTY", "(EMPTY + nogood)", "0x063B");
    this.__expr(block, "(goodCounterET + badCounterET)", "0x063E");
    this.__expr(block, "\",\" = (xtra ^ caluMD5)", "0x0649");
    this.__expr(block, "badCounterET", "0x064C");
    this.__assign(block, "EMPTY", "getStringMD5(EMPTY)", "0x065A");
    this.__expr(block, "\",\"", "0x065D");
    this.__expr(block, "0", "0x065F");
    this.__expr(block, "EMPTY", "0x0663");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block20() {
    const block = "__stack_Lscr102_block20";
    this.__unresolved(block, "offset=48232 codeLen=118", null);
    this.__names(block, "Math, log, c1, random, c5, c0_6, c2, c0, round, c1000");
    this.__expr(block, "1.6693", "0x0027");
    this.__assign(block, "Math", "(0.7482 * param_Math)", "0x0041");
    this.__expr(block, "(Math + (random() / c5))", "0x0044");
    this.__branch(block, "if not (Math > c0_6) then -- jump 18", "0x004C");
    this.__assign(block, "Math", "(Math / c2)", "0x0058");
    this.__expr(block, "(param_Math + c1)", "0x005B");
    this.__unresolved(block, "jump -23", "0x005C");
    this.__branch(block, "if not (Math < c0) then -- jump 11", "0x0066");
    this.__assign(block, "Math", "c0", "0x006E");
    this.__expr(block, "log", "0x0071");
    this.__expr(block, "(round((Math * c1000)) / c1000)", "0x0089");
    this.__expr(block, "end", null);
    return this.trace;
  }

}

module.exports = {
  Lscr102RaceEngine,
  Lscr102MechanicalTrace,
  VOID,
  EMPTY,
};
