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
  __control(block, value, offset) { return this.__record("control", { block, value, offset }); }
  __marker(block, value, offset) { return this.__record("marker", { block, value, offset }); }
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
    this.__control(block, "offset=0 codeLen=251", null);
    this.__marker(block, "0x7D literal_0 prologue marker", "0x0014");
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
    this.__control(block, "offset=344 codeLen=456", null);
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
    this.__assign(block, "id_88", "implicit_object_0x01D7[implicit_index_0x01D7]", "0x01D8");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block02() {
    const block = "__stack_Lscr102_block02";
    this.__control(block, "offset=3032 codeLen=496", null);
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
    this.__assign(block, "avgDurability", "(implicit_lhs_0x00C1 / (((((pistonDurability + rodDurability) + valveDurability) + headGasketDurability) + engineBlockDurability) / 1.6693))", "0x00C2");
    this.__assign(block, "hp", "c0", "0x00CB");
    this.__assign(block, "s", "(implicit_lhs_0x00D4 mod c13)", "0x00D5");
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
    this.__branch(block, "if not (id_51 = VOID_SENTINEL) then -- jump 15", "0x0162");
    this.__expr(block, "id_53()", "0x0171");
    this.__branch(block, "if not (id_54 = VOID_SENTINEL) then -- jump 15", "0x017B");
    this.__expr(block, "id_53()", "0x018A");
    this.__branch(block, "if not (id_55 = VOID_SENTINEL) then -- jump 15", "0x0194");
    this.__expr(block, "id_53()", "0x01A3");
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
    this.__control(block, "offset=5972 codeLen=1268", null);
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
    this.__control(block, "offset=10964 codeLen=60", null);
    this.__names(block, "boostType, T, boostLag, c0_7, boostSetting, boostRange, c1_7, c0");
    this.__branch(block, "if not (boostType = T) then -- jump 34", "0x001B");
    this.__assign(block, "boostLag", "(c0_7 * boostSetting)", "0x0029");
    this.__assign(block, "boostRange", "(c1_7 * boostSetting)", "0x0037");
    this.__control(block, "jump 21", "0x003B");
    this.__assign(block, "boostLag", "c0", "0x0043");
    this.__assign(block, "boostRange", "boostSetting", "0x004C");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block05() {
    const block = "__stack_Lscr102_block05";
    this.__control(block, "offset=11368 codeLen=59", null);
    this.__names(block, "runInterval, object, forget, timeout, sendInterval, symbol, sendPos");
    this.__branch(block, "if not (runInterval = VOID_SENTINEL) then -- jump 15", "0x001D");
    this.__expr(block, "runInterval.forget()", "0x002C");
    this.__assign(block, "runInterval", "timeout(runInterval).new((1000 / sendInterval), symbol(sendPos))", "0x004B");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block06() {
    const block = "__stack_Lscr102_block06";
    this.__control(block, "offset=11760 codeLen=25", null);
    this.__names(block, "runInterval, object, forget");
    this.__branch(block, "if not (runInterval = VOID_SENTINEL) then -- jump 15", "0x001D");
    this.__expr(block, "runInterval.forget()", "0x002C");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block07() {
    const block = "__stack_Lscr102_block07";
    this.__control(block, "offset=11992 codeLen=301", null);
    this.__names(block, "staging, rt, c1, raceType, KOTH, RIVAL, TEAMRIVAL, HT, gearValue, c0, STG, s, carV, carAccel, c1320, timeAnchor, INT, _system, milliseconds");
    this.__control(block, "branch 120", "0x0018");
    this.__branch(block, "if not (staging <> (rt mod c1)) then -- jump 104", "0x0024");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = TEAMRIVAL)", "0x0048");
    this.__branch(block, "if not (raceType = HT) then -- jump 60", "0x0050");
    this.__branch(block, "if not (gearValue < c0) then -- jump 28", "0x005C");
    this.__expr(block, "STG(((implicit_lhs_0x0032 or (raceType = KOTH)) > (raceType = RIVAL)), STG, ((s mod carV) mod carAccel))", "0x0075");
    this.__control(block, "jump 23", "0x0076");
    this.__expr(block, "STG(s, carV, carAccel)", "0x008C");
    this.__control(block, "jump 180", "0x008D");
    this.__branch(block, "if not (s < c1320) then -- jump 155", "0x00A5");
    this.__branch(block, "if not (timeAnchor = VOID) then -- jump 70", "0x00AE");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = TEAMRIVAL)", "0x00D2");
    this.__branch(block, "if not (raceType = HT) then -- jump 23", "0x00DA");
    this.__expr(block, "STG(s, carV, carAccel)", "0x00F1");
    this.__control(block, "jump 79", "0x00F2");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = TEAMRIVAL)", "0x0115");
    this.__branch(block, "if not (raceType = HT) then -- jump 35", "0x011D");
    this.__marker(block, "0x83 call marker", "0x013C");
    this.__expr(block, "INT(s, carV, carAccel, _system, (milliseconds - timeAnchor))", "0x0140");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block08() {
    const block = "__stack_Lscr102_block08";
    this.__control(block, "offset=14012 codeLen=7823", null);
    this.__names(block, "c0, c1, timeFromLastFrame, theTime, _system, milliseconds, c1000, theActualTime, c0_2, avgFps, fpsCount, calculateExtraHpi, carV, c0_5, carAccel, gearValue, hpi, boostCreatedPower, systemPower, ECUtune, compressionPowerDelta, engineDamage, isNos, nitrousRemaining, NOS, rpm, stockRedLine, c1_25, hp, c10000, c2, sprite, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, gr");
    this.__branch(block, "if not (param_c0 < c0) then -- jump 14", "0x001B");
    this.__assign(block, "c0", "c0", "0x0023");
    this.__control(block, "jump 22", "0x0027");
    this.__branch(block, "if not (param_c0 > c1) then -- jump 11", "0x0031");
    this.__assign(block, "c0", "c1", "0x0039");
    this.__branch(block, "if not (timeFromLastFrame > c0) then -- jump 80", "0x0045");
    this.__control(block, "jump 7734", "0x0059");
    this.__marker(block, "0x03 marker", "0x005D");
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
    this.__expr(block, "(implicit_lhs_0x00FE = (carV * theTime)[isNos])", "0x0124");
    this.__branch(block, "if not (timeFromLastFrame > NOS) then -- jump 11", "0x012C");
    this.__assign(block, "timeFromLastFrame", "NOS", "0x0134");
    this.__expr(block, "((hp * c1) - 0.6966)", "0x014A");
    this.__assign(block, "nitrousRemaining", "(nitrousRemaining - ((NOS / c10000) * c2))", "0x015F");
    this.__expr(block, "hp", "0x0162");
    this.__expr(block, "sprite(flashSP).runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x0182");
    this.__control(block, "jump 21", "0x0183");
    this.__assign(block, "hp", "(hp + (hp * c1))", "0x0194");
    this.__assign(block, "hp", "(hp * param_c0)", "0x01A1");
    this.__branch(block, "if not (rpm > (revLimiter + c200)) then -- jump 17", "0x01B2");
    this.__assign(block, "hp", "(hp / c2)", "0x01C0");
    this.__assign(block, "theTime", "((hp * tqFlyFactor) / rpm)", "0x01D2");
    this.__assign(block, "_system", "(((theTime * gr) * fgr) * rpmGearConversion)", "0x01E8");
    this.__assign(block, "milliseconds", "(_system / r)", "0x01F4");
    this.__assign(block, "c1000", "(negTq * c9)", "0x0201");
    this.__control(block, "branch 20801", "0x0215");
    this.__assign(block, "id_16693", "0.5639", "0x0227");
    this.__marker(block, "0x19 marker", "0x022B");
    this.__branch(block, "if not ((theActualTime - c299) < theActualTime) then -- jump 60", "0x022F");
    this.__assign(block, "c0_2", "(milliseconds - c1000)", "0x023A");
    this.__expr(block, "rpm", "0x023D");
    this.__branch(block, "if not (c0_2 > c0) then -- jump 35", "0x0245");
    this.__assign(block, "c1000", "(rpm + (((theActualTime - c300) * 0.7299) / c300))", "0x0265");
    this.__expr(block, "c0_2", "0x0268");
    this.__control(block, "jump 17", "0x0269");
    this.__assign(block, "c1000", "((c1000 mod negTq) * c5_5)", "0x0276");
    this.__expr(block, "0.7511", "0x0279");
    this.__marker(block, "0x0B boolean-chain marker left=(c1000 < c0)", "0x0284");
    this.__branch(block, "if not (param_c0 = c0) then -- jump 11", "0x028C");
    this.__assign(block, "c1000", "c0", "0x0294");
    this.__expr(block, "(stockRedLine + c1000)", "0x0297");
    this.__assign(block, "avgFps", "(milliseconds - c1000)", "0x029F");
    this.__expr(block, "param_c0", "0x02A2");
    this.__expr(block, "0.7767", "0x02B4");
    this.__branch(block, "if not (rpm > revLimiter) then -- jump 11", "0x02BD");
    this.__assign(block, "fpsCount", "revLimiterDeceleration", "0x02C5");
    this.__expr(block, "(w / g)", "0x02C8");
    this.__control(block, "branch 15", "0x02CD");
    this.__assign(block, "carAccel", "brakeDecleration", "0x02D5");
    this.__expr(block, "brake", "0x02D8");
    this.__control(block, "jump 13", "0x02D9");
    this.__assign(block, "carAccel", "(avgFps mod c2)", "0x02E2");
    this.__assign(block, "carV", "(carV + (carAccel * theTime))", "0x02F5");
    this.__branch(block, "if not (carV <= c0) then -- jump 21", "0x0301");
    this.__assign(block, "carAccel", "c0", "0x030A");
    this.__assign(block, "carV", "c0", "0x0313");
    this.__assign(block, "speedoV", "carV", "0x031C");
    this.__assign(block, "engineV", "(engineV + (fpsCount * theTime))", "0x032E");
    this.__branch(block, "if not (engineV < c5) then -- jump 15", "0x033A");
    this.__assign(block, "engineV", "c5", "0x0343");
    this.__control(block, "jump 24", "0x0347");
    this.__branch(block, "if not (engineV > c100) then -- jump 12", "0x0352");
    this.__assign(block, "engineV", "c100", "0x035B");
    this.__marker(block, "0x19 marker", "0x0387");
    this.__expr(block, "0.7478", "0x0388");
    this.__expr(block, "getTorque()", "0x0391");
    this.__assign(block, "mph", "(carV * vToMph)", "0x039C");
    this.__expr(block, "(fgr * rpmGearConversion)", "0x039F");
    this.__control(block, "jump 1607", "0x03A0");
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
    this.__control(block, "jump 28", "0x0435");
    this.__assign(block, "c1", "(c1 + c0_02)", "0x0440");
    this.__assign(block, "raceGas", "(raceGas - calculateExtraHpi)", "0x044D");
    this.__branch(block, "if not (nitrousRemaining > c0) then -- jump 127", "0x0462");
    this.__assign(block, "timeFromLastFrame", "(((NOS * rpm) / stockRedLine) / c1_25)", "0x0479");
    this.__expr(block, "(hp = hp[isNos])", "0x047C");
    this.__branch(block, "if not (timeFromLastFrame > NOS) then -- jump 11", "0x0484");
    this.__assign(block, "timeFromLastFrame", "NOS", "0x048C");
    this.__expr(block, "2.2016", "0x04A0");
    this.__assign(block, "hp", "((hp = hp[isNos]) + (hp + (hp * c1)))", "0x04A3");
    this.__assign(block, "nitrousRemaining", "(nitrousRemaining - ((NOS / c10000) * c2))", "0x04BB");
    this.__expr(block, "sprite(flashSP).runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x04DE");
    this.__control(block, "jump 21", "0x04DF");
    this.__assign(block, "hp", "(hp + (hp * c1))", "0x04F0");
    this.__assign(block, "hp", "((c100 - detuneHp) * (0.7489 / c100))", "0x050D");
    this.__expr(block, "param_c0", "0x0510");
    this.__assign(block, "theTime", "((hp * tqFlyFactor) / rpm)", "0x051F");
    this.__expr(block, "hp", "0x0522");
    this.__assign(block, "_system", "(((theTime * gr) * fgr) * rpmGearConversion)", "0x0535");
    this.__assign(block, "milliseconds", "(_system / r)", "0x0541");
    this.__assign(block, "carV", "(param_c0 * c8)", "0x054D");
    this.__assign(block, "c0_5", "c0", "0x0555");
    this.__branch(block, "if not (carV < c1) then -- jump 22", "0x0560");
    this.__marker(block, "0x2B marker", "0x0570");
    this.__assign(block, "c0_5", "((hp = hp[isNos]) * ((c1 - carV) mod 1.6693))", "0x0573");
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
    this.__control(block, "branch 102", "0x0686");
    this.__expr(block, "0.7734", "0x06B0");
    this.__control(block, "jump 56", "0x06B1");
    this.__expr(block, "0.7734", "0x06C6");
    this.__assign(block, "speedoV", "carV", "0x06CC");
    this.__expr(block, "(w / g)", "0x06CF");
    this.__assign(block, "slip", "0", "0x06D2");
    this.__expr(block, "avgFps", "0x06D5");
    this.__expr(block, "sprite(flashSP).runEngineTractionLightCB(0)", "0x06E8");
    this.__control(block, "jump 108", "0x06E9");
    this.__expr(block, "0.7734", "0x0725");
    this.__assign(block, "slip", "1", "0x0728");
    this.__expr(block, "(w / g)", "0x072B");
    this.__expr(block, "sprite(flashSP).runEngineTractionLightCB(1)", "0x073E");
    this.__control(block, "jump 22", "0x073F");
    this.__expr(block, "0.7734", "0x0754");
    this.__expr(block, "((w / g) <= 0.7767)", "0x0766");
    this.__branch(block, "if not (carAccel < c0) then -- jump 23", "0x077B");
    this.__assign(block, "carAccel", "c0", "0x0784");
    this.__expr(block, "(carV < c3)", "0x0787");
    this.__assign(block, "engineDamage", "c0", "0x078C");
    this.__expr(block, "avgFps", "0x078F");
    this.__control(block, "jump 24", "0x0790");
    this.__branch(block, "if not (carV < c0) then -- jump 12", "0x079B");
    this.__assign(block, "carV", "c0", "0x07A4");
    this.__expr(block, "(w / g)", "0x07A7");
    this.__branch(block, "if not (rpm > revLimiter) then -- jump 20", "0x07B0");
    this.__assign(block, "carAccel", "revLimiterDeceleration", "0x07B9");
    this.__expr(block, "avgFps", "0x07BC");
    this.__assign(block, "engineDamage", "revLimiterDeceleration", "0x07C1");
    this.__expr(block, "(systemPower * N)", "0x07C4");
    this.__control(block, "branch 58", "0x07C9");
    this.__assign(block, "carAccel", "brakeDecleration", "0x07D1");
    this.__expr(block, "brake", "0x07D4");
    this.__assign(block, "engineDamage", "brakeDecleration", "0x07D9");
    this.__expr(block, "1.6693[id_5127]", "0x07DC");
    this.__branch(block, "if not (carV < c2) then -- jump 29", "0x07E5");
    this.__assign(block, "carAccel", "c0", "0x07EE");
    this.__expr(block, "(carV + c2)", "0x07F1");
    this.__assign(block, "engineDamage", "c0", "0x07F6");
    this.__expr(block, "((systemPower * N) = 0.5701)", "0x07F9");
    this.__assign(block, "carV", "c0", "0x07FF");
    this.__expr(block, "avgFps", "0x0802");
    this.__assign(block, "carV", "(carV + (carAccel * theTime))", "0x0812");
    this.__expr(block, "(w / g)", "0x0815");
    this.__assign(block, "speedoV", "(speedoV + (engineDamage * theTime))", "0x0824");
    this.__expr(block, "(ECUtune * N)", "0x0827");
    this.__branch(block, "if not ((carV + c10) < speedoV) then -- jump 12", "0x0835");
    this.__assign(block, "tireScrub", "1", "0x083B");
    this.__expr(block, "((ECUtune * N) / 0.5639)", "0x083E");
    this.__control(block, "jump 9", "0x083F");
    this.__assign(block, "tireScrub", "0", "0x0844");
    this.__expr(block, "avgFps", "0x0847");
    this.__branch(block, "if not ((carV + c0_015) < speedoV) then -- jump 234", "0x0855");
    this.__assign(block, "isNos", "(speedoV - carV)", "0x0862");
    this.__expr(block, "slip", "0x0865");
    this.__branch(block, "if not (isNos < c0_02) then -- jump 11", "0x086D");
    this.__assign(block, "isNos", "c0", "0x0875");
    this.__control(block, "branch 93", "0x087D");
    this.__assign(block, "nitrousRemaining", "(0.7299 / c200)", "0x0893");
    this.__expr(block, "(ECUtune * N)", "0x0896");
    this.__branch(block, "if not (nitrousRemaining < c0) then -- jump 14", "0x089E");
    this.__assign(block, "nitrousRemaining", "c0", "0x08A6");
    this.__expr(block, "avgFps", "0x08A9");
    this.__control(block, "jump 22", "0x08AA");
    this.__branch(block, "if not (nitrousRemaining > c1) then -- jump 11", "0x08B4");
    this.__assign(block, "nitrousRemaining", "c1", "0x08BC");
    this.__expr(block, "slip", "0x08BF");
    this.__assign(block, "speedoV", "((ECUtune * N) - (speedoV * ((c1 - nitrousRemaining) > 2.2016)))", "0x08D3");
    this.__control(block, "jump 102", "0x08D7");
    this.__assign(block, "NOS", "(clutchFeather + c0_18)", "0x08E3");
    this.__assign(block, "speedoV", "(speedoV - (NOS * isNos))", "0x08F4");
    this.__marker(block, "0x1F marker", "0x0902");
    this.__branch(block, "if not ((rpm / redLine) < (c8 / c10)) then -- jump 30", "0x091E");
    this.__expr(block, "0.7478", "0x093C");
    this.__control(block, "jump 12", "0x093D");
    this.__assign(block, "speedoV", "carV", "0x0945");
    this.__expr(block, "(((param_c0 > c0) > (mph = VOID))[(speedoV / c2)] - (rpm / redLine))", "0x0948");
    this.__marker(block, "0x19 marker", "0x0971");
    this.__expr(block, "0.7478", "0x0972");
    this.__expr(block, "getTorque()", "0x097B");
    this.__control(block, "branch 41", "0x0980");
    this.__assign(block, "mph", "(speedoV * vToMph)", "0x098D");
    this.__expr(block, "slip", "0x0990");
    this.__branch(block, "if not (mph < c0_02) then -- jump 12", "0x0999");
    this.__assign(block, "mph", "c0_02", "0x09A2");
    this.__expr(block, "(fgr * rpmGearConversion)", "0x09A5");
    this.__control(block, "jump 17", "0x09A6");
    this.__assign(block, "mph", "(carV * vToMph)", "0x09B3");
    this.__expr(block, "((0.7811 * gr) * c50)", "0x09B6");
    this.__branch(block, "if not (c0 < c0_02) then -- jump 40", "0x09BE");
    this.__control(block, "branch 16693", "0x09CC");
    this.__marker(block, "0x33 marker", "0x09D0");
    this.__control(block, "branch 14", "0x09D1");
    this.__assign(block, "c0", "c0", "0x09D8");
    this.__expr(block, "(gearValue = -1)", "0x09DB");
    this.__control(block, "jump 11", "0x09DC");
    this.__assign(block, "c0", "c0_02", "0x09E3");
    this.__expr(block, "(gConvSlipA * r)", "0x09E6");
    this.__branch(block, "if not (gearValue = -1) then -- jump 19", "0x09EE");
    this.__assign(block, "s", "(s - c0)", "0x09FB");
    this.__expr(block, "speedoV", "0x09FE");
    this.__control(block, "jump 16", "0x09FF");
    this.__assign(block, "s", "(s + c0)", "0x0A0B");
    this.__assign(block, "s", "(floor((s * c1000)) / c1000)", "0x0A28");
    this.__expr(block, "Math", "0x0A2B");
    this.__control(block, "branch 312", "0x0A30");
    this.__branch(block, "if not (staging < (s mod c13)) then -- jump 43", "0x0A3C");
    this.__assign(block, "s", "(speedoV mod c13)", "0x0A46");
    this.__assign(block, "mph", "c0", "0x0A4F");
    this.__assign(block, "carAccel", "c0", "0x0A58");
    this.__assign(block, "carV", "c0", "0x0A61");
    this.__control(block, "jump 256", "0x0A65");
    this.__branch(block, "if not (s > c5) then -- jump 42", "0x0A70");
    this.__assign(block, "s", "c5", "0x0A79");
    this.__assign(block, "mph", "c0", "0x0A82");
    this.__assign(block, "carAccel", "c0", "0x0A8B");
    this.__assign(block, "carV", "c0", "0x0A94");
    this.__control(block, "jump 205", "0x0A98");
    this.__assign(block, "rpm", "0", "0x0A9C");
    this.__assign(block, "stockRedLine", "0", "0x0AA1");
    this.__branch(block, "if not (s < c0) then -- jump 8", "0x0ABA");
    this.__assign(block, "rpm", "1", "0x0ABF");
    this.__expr(block, "(speedoV > (s mod c3))", "0x0AC2");
    this.__branch(block, "if not (s < c1) then -- jump 8", "0x0AD8");
    this.__assign(block, "stockRedLine", "1", "0x0ADD");
    this.__expr(block, "((speedoV > (s mod c3)) > (s mod c2))", "0x0AE0");
    this.__marker(block, "0x0B boolean-chain marker left=(preStaged <> rpm)", "0x0AEB");
    this.__branch(block, "if not (staged <> stockRedLine) then -- jump 113", "0x0AF3");
    this.__assign(block, "preStaged", "rpm", "0x0AFB");
    this.__assign(block, "staged", "stockRedLine", "0x0B03");
    this.__control(block, "jump 22016", "0x0B0C");
    this.__marker(block, "0x19 marker", "0x0B0F");
    this.__control(block, "branch 35", "0x0B10");
    this.__assign(block, "lightDelayTO", "timeout(lightDelayTO).new(5000, symbol(stagedAndReady))", "0x0B2C");
    this.__expr(block, "stockRedLine", "0x0B2F");
    this.__control(block, "jump 28", "0x0B30");
    this.__marker(block, "0x62 marker", "0x0B3B");
    this.__branch(block, "if not (lightDelayTO = VOID_SENTINEL) then -- jump 15", "0x0B3C");
    this.__expr(block, "lightDelayTO.forget()", "0x0B4B");
    this.__expr(block, "runEngineStageLightCB(sprite(flashSP)[runEngineStageLightCB], stockRedLine, rpm)", "0x0B64");
    this.__control(block, "jump 3239", "0x0B65");
    this.__branch(block, "if not (rt = undefined) then -- jump 823", "0x0B6F");
    this.__branch(block, "if not (theActualTime > lagThreshold) then -- jump 20", "0x0B7B");
    this.__assign(block, "badCounterRT", "(badCounterRT + theActualTime)", "0x0B89");
    this.__control(block, "jump 17", "0x0B8D");
    this.__assign(block, "goodCounterRT", "(goodCounterRT + theActualTime)", "0x0B9A");
    this.__branch(block, "if not (s >= c0) then -- jump 765", "0x0BA6");
    this.__assign(block, "c1_25", "c0", "0x0BAE");
    this.__assign(block, "timeStartLine", "milliseconds", "0x0BB9");
    this.__expr(block, "_system", "0x0BBC");
    this.__branch(block, "if not (timeGreen = c0) then -- jump 198", "0x0BC5");
    this.__assign(block, "rt", "(((speedoV > (s mod c3)) > (s mod c2)) mod c1)", "0x0BCF");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(p, red)", "0x0BEA");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 22", "0x0BF2");
    this.__expr(block, "KRT((KRT mod c1), EMPTY)", "0x0C05");
    this.__control(block, "jump 131", "0x0C06");
    this.__branch(block, "if not (raceType = QM) then -- jump 22", "0x0C10");
    this.__expr(block, "RRT((RRT mod c1), EMPTY)", "0x0C23");
    this.__control(block, "jump 101", "0x0C24");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = RIVAL)", "0x0C31");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 22", "0x0C39");
    this.__expr(block, "RIVRT((RIVRT mod c1), EMPTY)", "0x0C4C");
    this.__control(block, "jump 60", "0x0C4D");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 22", "0x0C57");
    this.__expr(block, "HTQRT((HTQRT mod c1), EMPTY)", "0x0C6A");
    this.__control(block, "jump 30", "0x0C6B");
    this.__branch(block, "if not (raceType = HT) then -- jump 19", "0x0C75");
    this.__expr(block, "HTRT((HTRT mod c1), EMPTY)", "0x0C88");
    this.__control(block, "jump 492", "0x0C89");
    this.__assign(block, "hp", "milliseconds", "0x0C92");
    this.__expr(block, "_system", "0x0C95");
    this.__control(block, "jump 7734", "0x0CA3");
    this.__marker(block, "0x65 marker", "0x0CA7");
    this.__expr(block, "1.6693", "0x0CA8");
    this.__branch(block, "if not (rt < c0_5) then -- jump 198", "0x0CB1");
    this.__assign(block, "rt", "((hp - timeGreen) mod c1)", "0x0CBB");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 22", "0x0CC6");
    this.__expr(block, "KRT((KRT mod c1), EMPTY)", "0x0CD9");
    this.__control(block, "jump 131", "0x0CDA");
    this.__branch(block, "if not (raceType = QM) then -- jump 22", "0x0CE4");
    this.__expr(block, "RRT((RRT mod c1), EMPTY)", "0x0CF7");
    this.__control(block, "jump 101", "0x0CF8");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = RIVAL)", "0x0D05");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 22", "0x0D0D");
    this.__expr(block, "RIVRT((RIVRT mod c1), EMPTY)", "0x0D20");
    this.__control(block, "jump 60", "0x0D21");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 22", "0x0D2B");
    this.__expr(block, "HTQRT((HTQRT mod c1), EMPTY)", "0x0D3E");
    this.__control(block, "jump 30", "0x0D3F");
    this.__branch(block, "if not (raceType = HT) then -- jump 19", "0x0D49");
    this.__expr(block, "HTRT((HTRT mod c1), EMPTY)", "0x0D5C");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(p, red)", "0x0D74");
    this.__control(block, "jump 256", "0x0D75");
    this.__branch(block, "if not (badCounterRT > VOID) then -- jump 19", "0x0D7D");
    this.__assign(block, "c1_25", "lagTimeAddition(badCounterRT)", "0x0D8D");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 36", "0x0D98");
    this.__control(block, "jump 7766", "0x0DAC");
    this.__expr(block, "KRT((KRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0DB9");
    this.__control(block, "jump 187", "0x0DBA");
    this.__branch(block, "if not (raceType = QM) then -- jump 36", "0x0DC4");
    this.__control(block, "jump 7766", "0x0DD8");
    this.__expr(block, "RRT((RRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0DE5");
    this.__control(block, "jump 143", "0x0DE6");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = RIVAL)", "0x0DF3");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 36", "0x0DFB");
    this.__control(block, "jump 7766", "0x0E0F");
    this.__expr(block, "RIVRT((RIVRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0E1C");
    this.__control(block, "jump 88", "0x0E1D");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 36", "0x0E27");
    this.__control(block, "jump 7766", "0x0E3B");
    this.__expr(block, "HTQRT((HTQRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0E48");
    this.__control(block, "jump 44", "0x0E49");
    this.__branch(block, "if not (raceType = HT) then -- jump 33", "0x0E53");
    this.__control(block, "jump 7766", "0x0E67");
    this.__expr(block, "HTRT((HTRT + ((hp - timeGreen) + 1.6693)), guid)", "0x0E74");
    this.__control(block, "jump 7482", "0x0E96");
    this.__expr(block, "(rt + c1_25)((1.6693 / c1000))", "0x0EA3");
    this.__control(block, "jump 46", "0x0EA4");
    this.__branch(block, "if not (theActualTime > lagThreshold) then -- jump 20", "0x0EAF");
    this.__assign(block, "badCounterET", "(badCounterET + theActualTime)", "0x0EBD");
    this.__expr(block, "floor", "0x0EC0");
    this.__control(block, "jump 17", "0x0EC1");
    this.__assign(block, "goodCounterET", "(goodCounterET + theActualTime)", "0x0ECE");
    this.__expr(block, "Math", "0x0ED1");
    this.__branch(block, "if not (s >= c1320) then -- jump 1704", "0x0EDA");
    this.__branch(block, "if not (et = undefined) then -- jump 1690", "0x0EE5");
    this.__assign(block, "hp", "milliseconds", "0x0EEF");
    this.__expr(block, "_system", "0x0EF2");
    this.__control(block, "jump 7734", "0x0F00");
    this.__marker(block, "0x82 id_20801 marker", "0x0F04");
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
    this.__branch(block, "if not (implicit_lhs_0x1135 <> (rt mod c1)) then -- jump 35", "0x1135");
    this.__marker(block, "0x83 call marker", "0x1154");
    this.__expr(block, "INT(s, carV, carAccel, _system, (milliseconds - timeAnchor))", "0x1158");
    this.__control(block, "jump 7745", "0x1169");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x11AD");
    this.__control(block, "jump 978", "0x11AE");
    this.__branch(block, "if not (raceType = QM) then -- jump 124", "0x11B8");
    this.__branch(block, "if not (KDONE <> (rt mod c1)) then -- jump 23", "0x11C5");
    this.__expr(block, "RINT(s, carV, carAccel)", "0x11DC");
    this.__control(block, "jump 7745", "0x11ED");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x1231");
    this.__control(block, "jump 846", "0x1232");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = RIVAL)", "0x123F");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 190", "0x1247");
    this.__branch(block, "if not (RDONE <> (rt mod c1)) then -- jump 35", "0x1254");
    this.__marker(block, "0x83 call marker", "0x1273");
    this.__expr(block, "INT(s, carV, carAccel, _system, (milliseconds - timeAnchor))", "0x1277");
    this.__assign(block, "gr", "(floor((((beforePistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x129A");
    this.__expr(block, "Math", "0x129D");
    this.__assign(block, "thePD", "c10000", "0x12A2");
    this.__assign(block, "theBPD", "gr", "0x12AA");
    this.__control(block, "jump 7745", "0x12BE");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x1302");
    this.__control(block, "jump 637", "0x1303");
    this.__branch(block, "if not (raceType = CT) then -- jump 306", "0x130D");
    this.__expr(block, "sprite(flashSP).ctFinishCB(et, ts)", "0x132A");
    this.__control(block, "jump 7811", "0x1341");
    this.__expr(block, "((CheckProcesses + decrypt(_global(cp))) + \"&cw=\")(((CheckWindows + decrypt(_global(cw))) + \"&cwc=\"), (CheckWindowsClass + decrypt(_global(cwc))))", "0x143C");
    this.__control(block, "jump 323", "0x143D");
    this.__branch(block, "if not (raceType = CTQ) then -- jump 32", "0x1447");
    this.__expr(block, "sprite(flashSP).ctFinishCB(et, ts)", "0x1464");
    this.__control(block, "jump 283", "0x1465");
    this.__branch(block, "if not (raceType = P) then -- jump 32", "0x146F");
    this.__expr(block, "sprite(flashSP).practiceFinishCB(et, ts)", "0x148C");
    this.__control(block, "jump 243", "0x148D");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 91", "0x1497");
    this.__control(block, "jump 7745", "0x14AB");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x14EF");
    this.__control(block, "jump 144", "0x14F0");
    this.__branch(block, "if not (raceType = HT) then -- jump 133", "0x14FA");
    this.__branch(block, "if not (HTQD <> (rt mod c1)) then -- jump 35", "0x1507");
    this.__marker(block, "0x83 call marker", "0x1526");
    this.__expr(block, "INT(s, carV, carAccel, _system, (milliseconds - timeAnchor))", "0x152A");
    this.__control(block, "jump 7745", "0x153B");
    this.__expr(block, "(hp - timeStartLine)(1.6693, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x157F");
    this.__control(block, "jump 652", "0x1580");
    this.__marker(block, "0x08 marker", "0x158E");
    this.__control(block, "branch 632", "0x1594");
    this.__assign(block, "isMidMd5sent", "1", "0x1599");
    this.__expr(block, "((s >= c760) and isMidMd5sent)", "0x159C");
    this.__marker(block, "0x2C marker", "0x15B2");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = HTQ)", "0x15D3");
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
    this.__expr(block, "(((raceType = QM) or (raceType = RIVAL)) > (raceType = TEAMRIVAL))", "0x1731");
    this.__branch(block, "if not (c2 > c100) then -- jump 11", "0x1739");
    this.__assign(block, "c2", "c100", "0x1741");
    this.__expr(block, "HTD[(raceType = KOTH)]", "0x1744");
    this.__branch(block, "if not (sprite > c100) then -- jump 11", "0x174C");
    this.__assign(block, "sprite", "c100", "0x1754");
    this.__expr(block, "(((((((((((((((((((((((((((((((((((((((((hp - timeStartLine) + 1.6693) + \"&rt=\") + rt) + \"&ts=\") + ts) + \"&pd=\") + c10000) + \"&vd=\") + sprite) + \"&rd=\") + c2) + \"&hd=\") + flashSP) + \"&bd=\") + runEngineNOSCB) + \"&od=\") + nitrousTankSize) + \"&fd=\") + c100) + \"&cd=\") + revLimiter) + \"&nr=\") + c200) + \"&rg=\") + tqFlyFactor) + \"&m=\") + createMd5Hash(1)) + \"&gr=\") + goodCounterRT) + \"&br=\") + badCounterRT) + \"&ge=\") + goodCounterET) + \"&be=\") + badCounterET) + \"&ce=\") + isCheatEngineRunning()) + \"&f=\") + avgFps) + \"&cp=\")", "0x1757");
    this.__branch(block, "if not (flashSP > c100) then -- jump 11", "0x175F");
    this.__assign(block, "flashSP", "c100", "0x1767");
    this.__expr(block, "\"et=\"", "0x176A");
    this.__branch(block, "if not (runEngineNOSCB > c100) then -- jump 11", "0x1772");
    this.__assign(block, "runEngineNOSCB", "c100", "0x177A");
    this.__expr(block, "ctst", "0x177D");
    this.__branch(block, "if not (nitrousTankSize > c100) then -- jump 11", "0x1785");
    this.__assign(block, "nitrousTankSize", "c100", "0x178D");
    this.__expr(block, "executeCall", "0x1790");
    this.__branch(block, "if not (c100 > c100) then -- jump 11", "0x1798");
    this.__assign(block, "c100", "c100", "0x17A0");
    this.__expr(block, "RIVDONE", "0x17A3");
    this.__branch(block, "if not (revLimiter > c100) then -- jump 11", "0x17AB");
    this.__assign(block, "revLimiter", "c100", "0x17B3");
    this.__branch(block, "if not (c200 > c100) then -- jump 11", "0x17BE");
    this.__assign(block, "c200", "c100", "0x17C6");
    this.__branch(block, "if not (tqFlyFactor > c100) then -- jump 11", "0x17D1");
    this.__assign(block, "tqFlyFactor", "c100", "0x17D9");
    this.__expr(block, "M(c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1))", "0x180B");
    this.__assign(block, "fgr", "(boostPsi - stockBoost)", "0x1815");
    this.__branch(block, "if not (fgr < VOID) then -- jump 8", "0x181D");
    this.__assign(block, "fgr", "VOID", "0x1822");
    this.__assign(block, "dangerLevel", "(dangerLevel + (fgr + (pistonCompressionLevel * c7)))", "0x1839");
    this.__branch(block, "if not (pistonCompressionLevel < c0) then -- jump 25", "0x1845");
    this.__assign(block, "engineDamageRisk", "(engineDamageRisk + (pistonCompressionLevel * c1_8))", "0x1858");
    this.__control(block, "jump 27", "0x185C");
    this.__assign(block, "engineDamageRisk", "(engineDamageRisk + ((boostPsi * pistonCompressionLevel) * c0_5))", "0x1873");
    this.__branch(block, "if not (engineDamageRisk < c0) then -- jump 9", "0x187F");
    this.__assign(block, "engineDamageRisk", "VOID", "0x1885");
    this.__branch(block, "if not (rpm > (stockRedLine * c1_15)) then -- jump 31", "0x1896");
    this.__assign(block, "dangerLevel", "(dangerLevel * c2)", "0x18A4");
    this.__assign(block, "engineDamageRisk", "(engineDamageRisk * c80)", "0x18B2");
    this.__assign(block, "rpmGearConversion", "((timeFromLastFrame / c1_8) - avgDurability)", "0x18C3");
    this.__branch(block, "if not (rpmGearConversion > c0) then -- jump 16", "0x18CE");
    this.__assign(block, "dangerLevel", "(dangerLevel + rpmGearConversion)", "0x18DB");
    this.__branch(block, "if not (oilDurability > c0) then -- jump 93", "0x18E7");
    this.__assign(block, "oilDamage", "((rpm / stockRedLine) + (0.7489 / c10000))", "0x1910");
    this.__expr(block, "(oilDamage / ((c100 - oilDurability) ^ 1.6693))", "0x1913");
    this.__branch(block, "if not (oilDamage >= c100) then -- jump 15", "0x191C");
    this.__assign(block, "oilDamage", "c100", "0x1925");
    this.__control(block, "jump 28", "0x1929");
    this.__assign(block, "dangerLevel", "(Math * (dangerLevel / ((c100 - oilDurability) ^ 1.6693)))", "0x1941");
    this.__assign(block, "beforeDangerLevel", "dangerLevel", "0x194A");
    this.__branch(block, "if not (radiatorDurability > c0) then -- jump 28", "0x1956");
    this.__assign(block, "dangerLevel", "(Math * (dangerLevel / ((c100 - radiatorDurability) ^ 1.6693)))", "0x196F");
    this.__branch(block, "if not (oilFilterDurability > c0) then -- jump 93", "0x197B");
    this.__assign(block, "oilFilterDamage", "((rpm / stockRedLine) + (0.7489 / c10000))", "0x19A4");
    this.__expr(block, "(oilFilterDamage / ((c100 - oilFilterDurability) ^ 1.6693))", "0x19A7");
    this.__branch(block, "if not (oilFilterDamage >= c100) then -- jump 15", "0x19B0");
    this.__assign(block, "oilFilterDamage", "c100", "0x19B9");
    this.__control(block, "jump 28", "0x19BD");
    this.__assign(block, "dangerLevel", "(Math * (dangerLevel / ((c100 - oilFilterDurability) ^ 1.6693)))", "0x19D5");
    this.__branch(block, "if not (coolantDurability > c0) then -- jump 93", "0x19E1");
    this.__assign(block, "coolantDamage", "((rpm / stockRedLine) + (0.7489 / c10000))", "0x1A0A");
    this.__expr(block, "(coolantDamage / ((c100 - coolantDurability) ^ 1.6693))", "0x1A0D");
    this.__branch(block, "if not (coolantDamage >= c100) then -- jump 15", "0x1A16");
    this.__assign(block, "coolantDamage", "c100", "0x1A1F");
    this.__control(block, "jump 28", "0x1A23");
    this.__assign(block, "dangerLevel", "(Math * (dangerLevel / ((c100 - coolantDurability) ^ 1.6693)))", "0x1A3B");
    this.__expr(block, "r", "0x1A42");
    this.__expr(block, "negTq", "0x1A46");
    this.__branch(block, "if not (pistonDurability < dangerLevel) then -- jump 19", "0x1A4F");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1A5C");
    this.__control(block, "jump 16", "0x1A60");
    this.__assign(block, "r", "(pistonDurability * c0_95)", "0x1A6C");
    this.__assign(block, "negTq", "(Math / ((dangerLevel - r) * 1.6693))", "0x1A7E");
    this.__expr(block, "c9", "0x1A85");
    this.__branch(block, "if not (pistonDurability < beforeDangerLevel) then -- jump 19", "0x1A8E");
    this.__assign(block, "c9", "(beforeDangerLevel * c0_95)", "0x1A9B");
    this.__control(block, "jump 16", "0x1A9F");
    this.__assign(block, "c9", "(pistonDurability * c0_95)", "0x1AAB");
    this.__assign(block, "c299", "(Math / ((beforeDangerLevel - c9) * 1.6693))", "0x1ABD");
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
    this.__control(block, "jump 16", "0x1B6D");
    this.__assign(block, "r", "(rodDurability * c0_95)", "0x1B79");
    this.__assign(block, "negTq", "(Math / ((dangerLevel - r) * 1.6693))", "0x1B8B");
    this.__branch(block, "if not (negTq < c0) then -- jump 11", "0x1B96");
    this.__assign(block, "negTq", "c0", "0x1B9E");
    this.__assign(block, "rodDamage", "(rodDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1BBE");
    this.__assign(block, "rodBroken", "floor((rodDamage / partBreakPoint))", "0x1BD6");
    this.__expr(block, "Math", "0x1BD9");
    this.__branch(block, "if not (rodBroken > cylinderNumber) then -- jump 12", "0x1BE2");
    this.__assign(block, "rodBroken", "cylinderNumber", "0x1BEB");
    this.__branch(block, "if not (valveDurability < dangerLevel) then -- jump 19", "0x1BF7");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1C04");
    this.__control(block, "jump 16", "0x1C08");
    this.__assign(block, "r", "(valveDurability * c0_95)", "0x1C14");
    this.__assign(block, "negTq", "(Math / ((dangerLevel - r) * 1.6693))", "0x1C26");
    this.__branch(block, "if not (negTq < c0) then -- jump 11", "0x1C31");
    this.__assign(block, "negTq", "c0", "0x1C39");
    this.__assign(block, "valveDamage", "(valveDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1C59");
    this.__assign(block, "valveBroken", "floor((valveDamage / partBreakPoint))", "0x1C71");
    this.__expr(block, "Math", "0x1C74");
    this.__branch(block, "if not (valveBroken > valveNumber) then -- jump 12", "0x1C7D");
    this.__assign(block, "valveBroken", "valveNumber", "0x1C86");
    this.__branch(block, "if not (engineBlockDurability < dangerLevel) then -- jump 19", "0x1C92");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1C9F");
    this.__control(block, "jump 16", "0x1CA3");
    this.__assign(block, "r", "(engineBlockDurability * c0_95)", "0x1CAF");
    this.__assign(block, "negTq", "(Math / ((dangerLevel - r) * 1.6693))", "0x1CC1");
    this.__branch(block, "if not (negTq < c0) then -- jump 11", "0x1CCC");
    this.__assign(block, "negTq", "c0", "0x1CD4");
    this.__assign(block, "engineBlockDamage", "(engineBlockDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1CF4");
    this.__assign(block, "engineBlockBroken", "floor((engineBlockDamage / partBreakPoint))", "0x1D0C");
    this.__expr(block, "Math", "0x1D0F");
    this.__branch(block, "if not (engineBlockBroken > c1) then -- jump 12", "0x1D18");
    this.__assign(block, "engineBlockBroken", "c1", "0x1D21");
    this.__branch(block, "if not (headGasketDurability < dangerLevel) then -- jump 19", "0x1D2D");
    this.__assign(block, "r", "(dangerLevel * c0_95)", "0x1D3A");
    this.__control(block, "jump 16", "0x1D3E");
    this.__assign(block, "r", "(headGasketDurability * c0_95)", "0x1D4A");
    this.__assign(block, "negTq", "(Math / ((dangerLevel - r) * 1.6693))", "0x1D5C");
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
    this.__expr(block, "(Math and isEngineLightOn)", "0x1E33");
    this.__expr(block, "sprite(flashSP).runEngineDamageLightCB()", "0x1E45");
    this.__branch(block, "if not (timeAnchor > VOID) then -- jump 52", "0x1E4B");
    this.__marker(block, "0x83 call marker", "0x1E78");
    this.__expr(block, "sprite(flashSP).runEngineCB(rpm, mph, s, boostPsi, _system, (milliseconds - timeAnchor))", "0x1E7C");
    this.__control(block, "jump 38", "0x1E7D");
    this.__expr(block, "sprite(flashSP).runEngineCB(rpm, mph, s, boostPsi, VOID)", "0x1EA2");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block09() {
    const block = "__stack_Lscr102_block09";
    this.__control(block, "offset=31980 codeLen=710", null);
    this.__names(block, "rpm, pb, c1, stockBoost, c0, c1_7, c0_7, boostSetting, c7_5, c100, boostRange, boostLag, boostPsi, compressionPowerDelta, pistonCompressionLevel, c4, c5, c2, maxPsi, turboFlow, overallAirFlowLimit, airFlowLimit, chipSetting, fuelFlowLimit, dangerLevel, airFuelMeter, airFuelDelta, Math, abs, engineDamageRisk, c0_09, c0_07, c2_5, c10, c0_1, ECUtune, systemPower, airhpi, boostCreatedPower");
    this.__assign(block, "rpm", "(rpm / pb)", "0x001D");
    this.__branch(block, "if not (rpm > c1) then -- jump 11", "0x0028");
    this.__assign(block, "rpm", "c1", "0x0030");
    this.__expr(block, "pb", "0x0037");
    this.__branch(block, "if not (stockBoost > c0) then -- jump 45", "0x0040");
    this.__control(block, "branch 16693", "0x0055");
    this.__marker(block, "0x03 marker", "0x0059");
    this.__assign(block, "pb", "((0.7489 * c7_5) / c100)", "0x0067");
    this.__expr(block, "(((rpm * c1_7) - c0_7) - 1.6693)", "0x006A");
    this.__control(block, "jump 31", "0x006B");
    this.__marker(block, "0x08 marker", "0x007F");
    this.__assign(block, "pb", "((((rpm * boostRange) - boostLag) * 1.6693) / c100)", "0x0086");
    this.__branch(block, "if not (pb < VOID) then -- jump 8", "0x008E");
    this.__assign(block, "pb", "VOID", "0x0093");
    this.__assign(block, "boostPsi", "((rpm * boostRange) - boostLag)", "0x00A5");
    this.__branch(block, "if not (boostPsi < c0) then -- jump 12", "0x00B1");
    this.__assign(block, "boostPsi", "c0", "0x00BA");
    this.__assign(block, "compressionPowerDelta", "c0", "0x00C3");
    this.__branch(block, "if not (pistonCompressionLevel < c0) then -- jump 61", "0x00CF");
    this.__assign(block, "compressionPowerDelta", "(((1.6693 * c5) mod 0.7299) / c100)", "0x00F1");
    this.__expr(block, "(implicit_lhs_0x00DD * (pistonCompressionLevel mod c4))", "0x00F4");
    this.__branch(block, "if not (compressionPowerDelta > c0) then -- jump 12", "0x00FD");
    this.__assign(block, "compressionPowerDelta", "c0", "0x0106");
    this.__control(block, "jump 40", "0x010A");
    this.__branch(block, "if not (pistonCompressionLevel > c0) then -- jump 28", "0x0115");
    this.__assign(block, "compressionPowerDelta", "(((pistonCompressionLevel * c2) - boostPsi) / 1.6693)", "0x012E");
    this.__assign(block, "c1", "c0", "0x0136");
    this.__branch(block, "if not (maxPsi > c0) then -- jump 24", "0x0142");
    this.__assign(block, "c1", "((boostPsi / maxPsi) * turboFlow)", "0x0154");
    this.__control(block, "jump 11", "0x0158");
    this.__assign(block, "c1", "turboFlow", "0x015F");
    this.__branch(block, "if not (overallAirFlowLimit > c1) then -- jump 26", "0x016A");
    this.__assign(block, "stockBoost", "(overallAirFlowLimit - c1)", "0x0176");
    this.__assign(block, "airFlowLimit", "c1", "0x017E");
    this.__control(block, "jump 24", "0x0182");
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
    this.__control(block, "jump 22", "0x0226");
    this.__assign(block, "engineDamageRisk", "((dangerLevel * airFuelDelta) * c0_07)", "0x0238");
    this.__assign(block, "c1_7", "(airFuelDelta * c2_5)", "0x0245");
    this.__branch(block, "if not (c1_7 > c10) then -- jump 11", "0x0250");
    this.__assign(block, "c1_7", "c10", "0x0258");
    this.__control(block, "jump 54", "0x025C");
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
    this.__control(block, "offset=34244 codeLen=110", null);
    this.__names(block, "rpm, undefined, idleRPM, c10000, posTq, tqArray, parseInt, c100, negTq, c200");
    this.__branch(block, "if not (rpm = undefined) then -- jump 15", "0x001B");
    this.__assign(block, "rpm", "idleRPM", "0x0024");
    this.__control(block, "jump 48", "0x0028");
    this.__branch(block, "if not (rpm < idleRPM) then -- jump 15", "0x0033");
    this.__assign(block, "rpm", "idleRPM", "0x003C");
    this.__control(block, "jump 24", "0x0040");
    this.__branch(block, "if not (rpm > c10000) then -- jump 12", "0x004B");
    this.__assign(block, "rpm", "c10000", "0x0054");
    this.__assign(block, "posTq", "tqArray[parseInt((rpm / c100))]", "0x006E");
    this.__marker(block, "0x08 marker", "0x0080");
    this.__expr(block, "0.8758", "0x0081");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block11() {
    const block = "__stack_Lscr102_block11";
    this.__control(block, "offset=34828 codeLen=20", null);
    this.__names(block, "init, btd");
    this.__expr(block, "init(param_init)", "0x001F");
    this.__assign(block, "btd", "param_btd", "0x0024");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block12() {
    const block = "__stack_Lscr102_block12";
    this.__control(block, "offset=35024 codeLen=198", null);
    this.__names(block, "gearValue, grs, c0, gr, mph, carAccel, carV, slip, sprite, flashSP, runEngineTractionLightCB, engineV, speedoV, hp, runEngineGearUpdateCB");
    this.__expr(block, "gearValue", "0x0017");
    this.__branch(block, "if not (gearValue < carV) then -- jump 18", "0x001F");
    this.__assign(block, "gearValue", "implicit_object_0x002D[(implicit_lhs_0x002C + grs[gearValue])]", "0x002E");
    this.__branch(block, "if not (gearValue > c0) then -- jump 160", "0x0039");
    this.__expr(block, "EMPTY", "0x0041");
    this.__assign(block, "gr", "gearValue", "0x0046");
    this.__branch(block, "if not (gearValue = c0) then -- jump 95", "0x0052");
    this.__assign(block, "mph", "c0", "0x005B");
    this.__assign(block, "carAccel", "c0", "0x0064");
    this.__assign(block, "carV", "c0", "0x006D");
    this.__control(block, "branch 40", "0x0075");
    this.__assign(block, "slip", "0", "0x007A");
    this.__expr(block, "slip", "0x007D");
    this.__expr(block, "sprite(flashSP).runEngineTractionLightCB(0)", "0x0090");
    this.__assign(block, "engineV", "speedoV", "0x0096");
    this.__control(block, "jump 12", "0x009A");
    this.__assign(block, "engineV", "carV", "0x00A2");
    this.__assign(block, "hp", "c0", "0x00AB");
    this.__control(block, "jump 21", "0x00AF");
    this.__branch(block, "if not (implicit_lhs_0x00B7 = implicit_object_0x00B6[gearValue]) then -- jump 12", "0x00B7");
    this.__assign(block, "speedoV", "engineV", "0x00C0");
    this.__expr(block, "sprite(flashSP).runEngineGearUpdateCB(gearValue)", "0x00D9");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block13() {
    const block = "__stack_Lscr102_block13";
    this.__control(block, "offset=35848 codeLen=219", null);
    this.__names(block, "gearValue, staging, c0, gr, grs, mph, carAccel, carV, speedoV, engineV, slip, sprite, flashSP, runEngineTractionLightCB, hp, runEngineGearUpdateCB");
    this.__control(block, "branch 16693", "0x001E");
    this.__expr(block, "(gearValue > -1)", "0x0022");
    this.__marker(block, "0x08 marker", "0x0032");
    this.__marker(block, "0xB6 marker", "0x003B");
    this.__marker(block, "0x33 marker", "0x003D");
    this.__expr(block, "0.1792", "0x0040");
    this.__branch(block, "if not (gearValue = -1) then -- jump 53", "0x0048");
    this.__assign(block, "gr", "grs[VOID]", "0x0053");
    this.__expr(block, "((gearValue > c0) and staging)", "0x0056");
    this.__assign(block, "mph", "c0", "0x005C");
    this.__expr(block, "(implicit_lhs_0x0026 <= 1.7408)", "0x005F");
    this.__assign(block, "carAccel", "c0", "0x0065");
    this.__assign(block, "carV", "c0", "0x006E");
    this.__assign(block, "speedoV", "engineV", "0x0077");
    this.__control(block, "jump 94", "0x007B");
    this.__branch(block, "if not (gearValue = c0) then -- jump 68", "0x0086");
    this.__control(block, "branch 40", "0x008E");
    this.__assign(block, "slip", "0", "0x0093");
    this.__expr(block, "slip", "0x0096");
    this.__expr(block, "sprite(flashSP).runEngineTractionLightCB(0)", "0x00A9");
    this.__assign(block, "engineV", "speedoV", "0x00AF");
    this.__control(block, "jump 12", "0x00B3");
    this.__assign(block, "engineV", "carV", "0x00BB");
    this.__assign(block, "hp", "c0", "0x00C4");
    this.__control(block, "jump 17", "0x00C8");
    this.__assign(block, "gr", "grs[gearValue]", "0x00D5");
    this.__expr(block, "sprite(flashSP).runEngineGearUpdateCB(gearValue)", "0x00EE");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block14() {
    const block = "__stack_Lscr102_block14";
    this.__control(block, "offset=36764 codeLen=23", null);
    this.__names(block, "brake");
    this.__branch(block, "if not (implicit_lhs_0x0018 = implicit_object_0x0017[param_brake]) then -- jump 12", "0x0018");
    this.__assign(block, "brake", "1", "0x001E");
    this.__control(block, "jump 9", "0x0022");
    this.__assign(block, "brake", "0", "0x0027");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block15() {
    const block = "__stack_Lscr102_block15";
    this.__control(block, "offset=36964 codeLen=54", null);
    this.__names(block, "c0_05, clutchFeather, c0_2");
    this.__branch(block, "if not (param_c0_05 < c0_05) then -- jump 15", "0x001B");
    this.__assign(block, "clutchFeather", "c0_05", "0x0024");
    this.__control(block, "jump 34", "0x0028");
    this.__branch(block, "if not (param_c0_05 > c0_2) then -- jump 15", "0x0032");
    this.__assign(block, "clutchFeather", "c0_2", "0x003B");
    this.__control(block, "jump 11", "0x003F");
    this.__assign(block, "clutchFeather", "param_c0_05", "0x0046");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block16() {
    const block = "__stack_Lscr102_block16";
    this.__control(block, "offset=37252 codeLen=539", null);
    this.__names(block, "timeAnchor, c0, goodCounterRT, badCounterRT, goodCounterET, badCounterET, lightDelayTO, object, forget, staging, gearValue, gearUp, raceType, KOTH, KREADY, createMd5Hash, QM, RREADY, RIVAL, TEAMRIVAL, RIVREADY, CTQ, P, startLightTimer, p, CT, btd, o, lightTO1, stagingLightPos1, timeout, c1000, c2, symbol, runLight, b, lightTO2, stagingLightPos2, HTQ, HTQREADY");
    this.__assign(block, "timeAnchor", "c0", "0x0019");
    this.__assign(block, "goodCounterRT", "VOID", "0x001F");
    this.__assign(block, "badCounterRT", "VOID", "0x0025");
    this.__assign(block, "goodCounterET", "VOID", "0x002B");
    this.__assign(block, "badCounterET", "VOID", "0x0031");
    this.__control(block, "branch 4615", "0x003D");
    this.__expr(block, "lightDelayTO.forget()", "0x004D");
    this.__control(block, "branch 477", "0x0052");
    this.__assign(block, "staging", "0", "0x0057");
    this.__expr(block, "staging", "0x005A");
    this.__branch(block, "if not (gearValue = -1) then -- jump 12", "0x0062");
    this.__expr(block, "gearUp()", "0x006E");
    this.__branch(block, "if not (raceType = KOTH) then -- jump 24", "0x0076");
    this.__expr(block, "KREADY(VOID, createMd5Hash(0))", "0x008B");
    this.__control(block, "jump 419", "0x008C");
    this.__branch(block, "if not (raceType = QM) then -- jump 24", "0x0096");
    this.__expr(block, "RREADY(VOID, createMd5Hash(0))", "0x00AB");
    this.__control(block, "jump 387", "0x00AC");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = RIVAL)", "0x00B9");
    this.__branch(block, "if not (raceType = TEAMRIVAL) then -- jump 24", "0x00C1");
    this.__expr(block, "RIVREADY(VOID, createMd5Hash(0))", "0x00D6");
    this.__control(block, "jump 344", "0x00D7");
    this.__marker(block, "0x0B boolean-chain marker left=(raceType = CTQ)", "0x00E4");
    this.__branch(block, "if not (raceType = P) then -- jump 19", "0x00EC");
    this.__expr(block, "startLightTimer(p, VOID)", "0x00FC");
    this.__control(block, "jump 306", "0x00FD");
    this.__branch(block, "if not (raceType = CT) then -- jump 234", "0x0107");
    this.__branch(block, "if not (btd < c0) then -- jump 99", "0x0113");
    this.__expr(block, "startLightTimer(o, VOID)", "0x0123");
    this.__control(block, "branch 4615", "0x012C");
    this.__expr(block, "lightTO1.forget()", "0x013C");
    this.__assign(block, "stagingLightPos1", "c0", "0x0142");
    this.__expr(block, "VOID_SENTINEL", "0x0145");
    this.__assign(block, "lightTO1", "timeout(lightTO1).new((((p mod btd) * c1000) + (c1000 / c2)), symbol(runLight))", "0x0170");
    this.__expr(block, "VOID_SENTINEL", "0x0173");
    this.__control(block, "jump 123", "0x0174");
    this.__branch(block, "if not (btd = c0) then -- jump 19", "0x017F");
    this.__expr(block, "startLightTimer(b, VOID)", "0x018F");
    this.__control(block, "jump 95", "0x0190");
    this.__control(block, "branch 4615", "0x019B");
    this.__expr(block, "lightTO2.forget()", "0x01AB");
    this.__assign(block, "stagingLightPos2", "c0", "0x01B1");
    this.__expr(block, "VOID_SENTINEL", "0x01B4");
    this.__assign(block, "lightTO2", "timeout(o).new(((btd * c1000) + (c1000 / c2)), symbol(runLight))", "0x01DE");
    this.__expr(block, "lightTO2", "0x01E1");
    this.__expr(block, "startLightTimer(p, VOID)", "0x01EE");
    this.__control(block, "jump 64", "0x01EF");
    this.__branch(block, "if not (raceType = HTQ) then -- jump 24", "0x01F9");
    this.__expr(block, "HTQREADY(VOID, createMd5Hash(0))", "0x020E");
    this.__control(block, "jump 32", "0x020F");
    this.__branch(block, "if not (raceType = HT) then -- jump 21", "0x0219");
    this.__expr(block, "HTREADY(VOID, createMd5Hash(0))", "0x022E");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block17() {
    const block = "__stack_Lscr102_block17";
    this.__control(block, "offset=39320 codeLen=681", null);
    this.__names(block, "greenDelay, parseInt, sprite, flashSP, setSpectateDelayCB, timeAnchor, c0, _system, milliseconds, lightTO1, object, forget, stagingLightPos1, timeout, symbol, runLight, secondBuffer, lightTO2, stagingLightPos2, p, b, 1, 1T, s, sT, o, 2, 2T");
    this.__assign(block, "greenDelay", "parseInt(param_parseInt)", "0x001F");
    this.__expr(block, "sprite(flashSP).setSpectateDelayCB(param_parseInt)", "0x0037");
    this.__expr(block, "case param_greenDelay of -- default 0x02BE", "0x003B");
    this.__control(block, "p: goto 0x0065", "0x003B");
    this.__control(block, "b: goto 0x0065", "0x003B");
    this.__control(block, "\"1\": goto 0x00BE", "0x003B");
    this.__control(block, "\"1T\": goto 0x0109", "0x003B");
    this.__control(block, "s: goto 0x014B", "0x003B");
    this.__control(block, "sT: goto 0x0196", "0x003B");
    this.__control(block, "o: goto 0x01D8", "0x003B");
    this.__control(block, "\"2\": goto 0x0231", "0x003B");
    this.__control(block, "\"2T\": goto 0x027C", "0x003B");
    this.__branch(block, "if not (timeAnchor = c0) then -- jump 14", "0x006C");
    this.__assign(block, "timeAnchor", "milliseconds", "0x0077");
    this.__expr(block, "_system", "0x007A");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x0084");
    this.__expr(block, "lightTO1.forget()", "0x0093");
    this.__assign(block, "stagingLightPos1", "c0", "0x0099");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x00B6");
    this.__control(block, "jump 515", "0x00BA");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x00C6");
    this.__expr(block, "lightTO1.forget()", "0x00D5");
    this.__assign(block, "stagingLightPos1", "c0", "0x00DB");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight))", "0x0101");
    this.__control(block, "jump 440", "0x0105");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x0111");
    this.__expr(block, "lightTO1.forget()", "0x0120");
    this.__assign(block, "stagingLightPos1", "c0", "0x0126");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x0143");
    this.__control(block, "jump 374", "0x0147");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x0153");
    this.__expr(block, "lightTO1.forget()", "0x0162");
    this.__assign(block, "stagingLightPos1", "c0", "0x0168");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight))", "0x018E");
    this.__control(block, "jump 299", "0x0192");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x019E");
    this.__expr(block, "lightTO1.forget()", "0x01AD");
    this.__assign(block, "stagingLightPos1", "c0", "0x01B3");
    this.__assign(block, "lightTO1", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x01D0");
    this.__control(block, "jump 233", "0x01D4");
    this.__branch(block, "if not (timeAnchor = c0) then -- jump 14", "0x01DF");
    this.__assign(block, "timeAnchor", "milliseconds", "0x01EA");
    this.__expr(block, "_system", "0x01ED");
    this.__branch(block, "if not (lightTO2 = VOID_SENTINEL) then -- jump 15", "0x01F7");
    this.__expr(block, "lightTO2.forget()", "0x0206");
    this.__assign(block, "stagingLightPos2", "c0", "0x020C");
    this.__assign(block, "lightTO2", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x0229");
    this.__control(block, "jump 144", "0x022D");
    this.__branch(block, "if not (lightTO2 = VOID_SENTINEL) then -- jump 15", "0x0239");
    this.__expr(block, "lightTO2.forget()", "0x0248");
    this.__assign(block, "stagingLightPos2", "c0", "0x024E");
    this.__assign(block, "lightTO2", "timeout(param_greenDelay).new((1500 + (secondBuffer * 1000)), symbol(runLight))", "0x0274");
    this.__control(block, "jump 69", "0x0278");
    this.__branch(block, "if not (lightTO2 = VOID_SENTINEL) then -- jump 15", "0x0284");
    this.__expr(block, "lightTO2.forget()", "0x0293");
    this.__assign(block, "stagingLightPos2", "c0", "0x0299");
    this.__assign(block, "lightTO2", "timeout(param_greenDelay).new(500, symbol(runLight))", "0x02B6");
    this.__control(block, "jump 3", "0x02BA");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block18() {
    const block = "__stack_Lscr102_block18";
    this.__control(block, "offset=41116 codeLen=708", null);
    this.__names(block, "period, name, stagingLightPos1, c0, sprite, flashSP, runEngineSetLightOnCB, amber1, greenDelay, amber2, amber3, forget, timeGreen, _system, milliseconds, lightTO2, timeout, symbol, runLight, p, 1, b, s, green, raceStartTimeCB, lightTO1, object, stagingLightPos2, raceType, CT, ctStartAnimateComputerCB, 1T, sT, o, 2, 2T");
    this.__assign(block, "period", "500", "0x001A");
    this.__expr(block, "param_period", "0x001D");
    this.__expr(block, "case name of -- default 0x02D9", "0x0024");
    this.__control(block, "p: goto 0x004E", "0x0024");
    this.__control(block, "\"1\": goto 0x004E", "0x0024");
    this.__control(block, "b: goto 0x004E", "0x0024");
    this.__control(block, "s: goto 0x004E", "0x0024");
    this.__control(block, "\"1T\": goto 0x004E", "0x0024");
    this.__control(block, "sT: goto 0x004E", "0x0024");
    this.__control(block, "o: goto 0x01F4", "0x0024");
    this.__control(block, "\"2\": goto 0x01F4", "0x0024");
    this.__control(block, "\"2T\": goto 0x01F4", "0x0024");
    this.__control(block, "branch 12", "0x0052");
    this.__assign(block, "stagingLightPos1", "c0", "0x005A");
    this.__expr(block, "(implicit_lhs_0x0051 and stagingLightPos1)", "0x005D");
    this.__expr(block, "EMPTY", "0x0061");
    this.__expr(block, "case stagingLightPos1 of -- default 0x01F0", "0x0067");
    this.__control(block, "1: goto 0x0076", "0x0067");
    this.__control(block, "2: goto 0x011D", "0x0067");
    this.__control(block, "3: goto 0x013B", "0x0067");
    this.__control(block, "4: goto 0x0182", "0x0067");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber1)", "0x0090");
    this.__branch(block, "if not (greenDelay > VOID) then -- jump 131", "0x0096");
    this.__expr(block, "EMPTY", "0x009D");
    this.__expr(block, "EMPTY", "0x00A2");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber2)", "0x00BE");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber3)", "0x00D9");
    this.__expr(block, "param_period.forget()", "0x00E4");
    this.__assign(block, "timeGreen", "((milliseconds + greenDelay) - 500)", "0x00F5");
    this.__expr(block, "_system", "0x00F8");
    this.__assign(block, "lightTO2", "timeout(param_period).new(greenDelay, symbol(runLight))", "0x0116");
    this.__control(block, "jump 214", "0x011A");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber2)", "0x0137");
    this.__control(block, "jump 184", "0x0138");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber3)", "0x0155");
    this.__expr(block, "case name of -- default 0x0180", "0x015C");
    this.__control(block, "p: goto 0x0172", "0x015C");
    this.__control(block, "\"1\": goto 0x0172", "0x015C");
    this.__control(block, "b: goto 0x0172", "0x015C");
    this.__control(block, "s: goto 0x0172", "0x015C");
    this.__assign(block, "timeGreen", "milliseconds", "0x0178");
    this.__expr(block, "_system", "0x017B");
    this.__control(block, "jump 3", "0x017C");
    this.__control(block, "jump 113", "0x017F");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, green)", "0x019C");
    this.__marker(block, "0x0D boolean-chain marker left=(name = p)", "0x01A9");
    this.__branch(block, "if not (name = b) then -- jump 21", "0x01B3");
    this.__expr(block, "sprite(flashSP).raceStartTimeCB()", "0x01C8");
    this.__expr(block, "param_period.forget()", "0x01D3");
    this.__branch(block, "if not (lightTO1 = VOID_SENTINEL) then -- jump 15", "0x01DD");
    this.__expr(block, "lightTO1.forget()", "0x01EC");
    this.__control(block, "jump 3", "0x01ED");
    this.__control(block, "jump 232", "0x01F0");
    this.__control(block, "branch 12", "0x01F8");
    this.__assign(block, "stagingLightPos2", "c0", "0x0200");
    this.__expr(block, "(param_period and stagingLightPos2)", "0x0203");
    this.__expr(block, "(param_period + EMPTY)", "0x0208");
    this.__expr(block, "case stagingLightPos2 of -- default 0x02D5", "0x020D");
    this.__control(block, "1: goto 0x021C", "0x020D");
    this.__control(block, "2: goto 0x023A", "0x020D");
    this.__control(block, "3: goto 0x0258", "0x020D");
    this.__control(block, "4: goto 0x0276", "0x020D");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber1)", "0x0236");
    this.__control(block, "jump 158", "0x0237");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber2)", "0x0254");
    this.__control(block, "jump 128", "0x0255");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, amber3)", "0x0272");
    this.__control(block, "jump 98", "0x0273");
    this.__expr(block, "sprite(flashSP).runEngineSetLightOnCB(param_period, name, green)", "0x0290");
    this.__branch(block, "if not (raceType = CT) then -- jump 21", "0x0298");
    this.__expr(block, "sprite(flashSP).ctStartAnimateComputerCB()", "0x02AD");
    this.__expr(block, "param_period.forget()", "0x02B8");
    this.__branch(block, "if not (lightTO2 = VOID_SENTINEL) then -- jump 15", "0x02C2");
    this.__expr(block, "lightTO2.forget()", "0x02D1");
    this.__control(block, "jump 3", "0x02D2");
    this.__control(block, "jump 3", "0x02D5");
    this.__expr(block, "end", null);
    return this.trace;
  }

  __stack_Lscr102_block19() {
    const block = "__stack_Lscr102_block19";
    this.__control(block, "offset=43264 codeLen=1616", null);
    this.__names(block, "stockRedLine, ,, detuneHp, stockBoost, boostType, boostSetting, grs, fgr, redLine, revLimiter, UsInit, NOS, w, r, nitrousTankSize, maxPsi, hpi, airhpi, turboFlow, fuelFlowLimit, overallAirFlowLimit, cylinderNumber, valveNumber, pistonCompressionLevel, chipSetting, pistonDurability, rodDurability, valveDurability, headGasketDurability, engineBlockDurability, oilDurability, tqArray, join, DAfp, g, rpmGearConversion, gConvSlipA, gConvSlipB, brakeDecleration, revLimiterDeceleration");
    this.__assign(block, "EMPTY", "EMPTY", "0x0017");
    this.__assign(block, "EMPTY", "(EMPTY + (stockRedLine + \",\"))", "0x0027");
    this.__assign(block, "EMPTY", "(EMPTY + (detuneHp + \",\"))", "0x0037");
    this.__assign(block, "EMPTY", "(EMPTY + (stockBoost + \",\"))", "0x0047");
    this.__assign(block, "EMPTY", "(EMPTY + (boostType + \",\"))", "0x0057");
    this.__assign(block, "EMPTY", "(EMPTY + (boostSetting + \",\"))", "0x0067");
    this.__assign(block, "stockRedLine", "implicit_object_0x006B[implicit_index_0x006B]", "0x006C");
    this.__branch(block, "if not (stockRedLine <= boostSetting) then -- jump 30", "0x0076");
    this.__assign(block, "EMPTY", "(EMPTY + (grs[stockRedLine] + \",\"))", "0x008A");
    this.__marker(block, "repeat step 1", "0x008E");
    this.__control(block, "jump -34", "0x0092");
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
    this.__assign(block, "EMPTY", "(EMPTY + (tqArray.join(\",\") + \",\"))", "0x022B");
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
    this.__control(block, "branch 106", "0x05D5");
    this.__branch(block, "if not (goodCounterET = VOID) then -- jump 17", "0x05E6");
    this.__assign(block, "EMPTY", "(EMPTY + nogood)", "0x05F1");
    this.__expr(block, "(goodCounterRT = VOID)", "0x05F4");
    this.__control(block, "jump 74", "0x05F5");
    this.__branch(block, "if not (0.7745 > lagPercent) then -- jump 17", "0x060B");
    this.__assign(block, "EMPTY", "(EMPTY + nogood)", "0x0616");
    this.__expr(block, "(goodCounterRT + badCounterRT)", "0x0619");
    this.__control(block, "jump 37", "0x061A");
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
    this.__control(block, "offset=48232 codeLen=118", null);
    this.__names(block, "Math, log, c1, random, c5, c0_6, c2, c0, round, c1000");
    this.__expr(block, "1.6693", "0x0027");
    this.__assign(block, "Math", "(0.7482 * param_Math)", "0x0041");
    this.__expr(block, "(Math + (random() / c5))", "0x0044");
    this.__branch(block, "if not (Math > c0_6) then -- jump 18", "0x004C");
    this.__assign(block, "Math", "(Math / c2)", "0x0058");
    this.__expr(block, "(param_Math + c1)", "0x005B");
    this.__control(block, "jump -23", "0x005C");
    this.__branch(block, "if not (Math < c0) then -- jump 11", "0x0066");
    this.__assign(block, "Math", "c0", "0x006E");
    this.__expr(block, "log", "0x0071");
    this.__expr(block, "(round((Math * c1000)) / c1000)", "0x0089");
    this.__expr(block, "end", null);
    return this.trace;
  }

}

/**
 * Block 8 independent-island appendix.
 *
 * This is an offset-preserving evidence layer only. It splits the original
 * block 8 bytecode into branch islands and records source-shaped lines
 * without promoting stack-hole lines into final game logic.
 */
// Lscr-102 block 8 island lift.
// Each island is lifted with an independent stack to avoid cross-branch contamination.

class Lscr102Block08Islands {
  constructor() { this.trace = []; }
  __record(island, kind, value, offset) { this.trace.push({ island, kind, value, offset }); return value; }
  runAll() {
    this.island_000();
    this.island_001();
    this.island_002();
    this.island_003();
    this.island_004();
    this.island_005();
    this.island_006();
    this.island_007();
    this.island_008();
    this.island_009();
    this.island_010();
    this.island_011();
    this.island_012();
    this.island_013();
    this.island_014();
    this.island_015();
    this.island_016();
    this.island_017();
    this.island_018();
    this.island_019();
    this.island_020();
    this.island_021();
    this.island_022();
    this.island_023();
    this.island_024();
    this.island_025();
    this.island_026();
    this.island_027();
    this.island_028();
    this.island_029();
    this.island_030();
    this.island_031();
    this.island_032();
    this.island_033();
    this.island_034();
    this.island_035();
    this.island_036();
    this.island_037();
    this.island_038();
    this.island_039();
    this.island_040();
    this.island_041();
    this.island_042();
    this.island_043();
    this.island_044();
    this.island_045();
    this.island_046();
    this.island_047();
    this.island_048();
    this.island_049();
    this.island_050();
    this.island_051();
    this.island_052();
    this.island_053();
    this.island_054();
    this.island_055();
    this.island_056();
    this.island_057();
    this.island_058();
    this.island_059();
    this.island_060();
    this.island_061();
    this.island_062();
    this.island_063();
    this.island_064();
    this.island_065();
    this.island_066();
    this.island_067();
    this.island_068();
    this.island_069();
    this.island_070();
    this.island_071();
    this.island_072();
    this.island_073();
    this.island_074();
    this.island_075();
    this.island_076();
    this.island_077();
    this.island_078();
    this.island_079();
    this.island_080();
    this.island_081();
    this.island_082();
    this.island_083();
    this.island_084();
    this.island_085();
    this.island_086();
    this.island_087();
    this.island_088();
    this.island_089();
    this.island_090();
    this.island_091();
    this.island_092();
    this.island_093();
    this.island_094();
    this.island_095();
    this.island_096();
    this.island_097();
    this.island_098();
    this.island_099();
    this.island_100();
    this.island_101();
    this.island_102();
    this.island_103();
    this.island_104();
    this.island_105();
    this.island_106();
    this.island_107();
    this.island_108();
    this.island_109();
    this.island_110();
    this.island_111();
    this.island_112();
    this.island_113();
    this.island_114();
    this.island_115();
    this.island_116();
    this.island_117();
    this.island_118();
    this.island_119();
    this.island_120();
    this.island_121();
    this.island_122();
    this.island_123();
    this.island_124();
    this.island_125();
    this.island_126();
    this.island_127();
    this.island_128();
    this.island_129();
    this.island_130();
    this.island_131();
    this.island_132();
    this.island_133();
    this.island_134();
    this.island_135();
    this.island_136();
    this.island_137();
    this.island_138();
    this.island_139();
    this.island_140();
    this.island_141();
    this.island_142();
    this.island_143();
    this.island_144();
    this.island_145();
    this.island_146();
    this.island_147();
    this.island_148();
    this.island_149();
    this.island_150();
    this.island_151();
    this.island_152();
    this.island_153();
    this.island_154();
    this.island_155();
    this.island_156();
    this.island_157();
    this.island_158();
    this.island_159();
    this.island_160();
    this.island_161();
    this.island_162();
    this.island_163();
    this.island_164();
    this.island_165();
    this.island_166();
    this.island_167();
    this.island_168();
    this.island_169();
    this.island_170();
    this.island_171();
    this.island_172();
    this.island_173();
    this.island_174();
    this.island_175();
    this.island_176();
    this.island_177();
    this.island_178();
    this.island_179();
    this.island_180();
    this.island_181();
    this.island_182();
    this.island_183();
    this.island_184();
    this.island_185();
    this.island_186();
    this.island_187();
    this.island_188();
    this.island_189();
    this.island_190();
    this.island_191();
    this.island_192();
    this.island_193();
    this.island_194();
    this.island_195();
    this.island_196();
    this.island_197();
    this.island_198();
    this.island_199();
    this.island_200();
    this.island_201();
    this.island_202();
    this.island_203();
    this.island_204();
    this.island_205();
    this.island_206();
    this.island_207();
    this.island_208();
    this.island_209();
    this.island_210();
    this.island_211();
    this.island_212();
    this.island_213();
    this.island_214();
    this.island_215();
    this.island_216();
    this.island_217();
    this.island_218();
    this.island_219();
    this.island_220();
    this.island_221();
    this.island_222();
    this.island_223();
    this.island_224();
    this.island_225();
    this.island_226();
    this.island_227();
    this.island_228();
    this.island_229();
    this.island_230();
    this.island_231();
    this.island_232();
    this.island_233();
    this.island_234();
    this.island_235();
    this.island_236();
    this.island_237();
    this.island_238();
    this.island_239();
    this.island_240();
    this.island_241();
    this.island_242();
    this.island_243();
    this.island_244();
    this.island_245();
    this.island_246();
    this.island_247();
    this.island_248();
    this.island_249();
    this.island_250();
    this.island_251();
    this.island_252();
    this.island_253();
    this.island_254();
    this.island_255();
    this.island_256();
    this.island_257();
    this.island_258();
    this.island_259();
    this.island_260();
    this.island_261();
    this.island_262();
    this.island_263();
    this.island_264();
    this.island_265();
    this.island_266();
    this.island_267();
    this.island_268();
    this.island_269();
    this.island_270();
    this.island_271();
    this.island_272();
    this.island_273();
    this.island_274();
    this.island_275();
    this.island_276();
    this.island_277();
    this.island_278();
    this.island_279();
    this.island_280();
    this.island_281();
    this.island_282();
    this.island_283();
    this.island_284();
    this.island_285();
    this.island_286();
    this.island_287();
    this.island_288();
    this.island_289();
    this.island_290();
    this.island_291();
    this.island_292();
    this.island_293();
    this.island_294();
    this.island_295();
    this.island_296();
    this.island_297();
    this.island_298();
    this.island_299();
    this.island_300();
    this.island_301();
    this.island_302();
    this.island_303();
    this.island_304();
    this.island_305();
    this.island_306();
    this.island_307();
    this.island_308();
    this.island_309();
    this.island_310();
    this.island_311();
    this.island_312();
    this.island_313();
    this.island_314();
    this.island_315();
    this.island_316();
    this.island_317();
    this.island_318();
    this.island_319();
    this.island_320();
    this.island_321();
    this.island_322();
    this.island_323();
    this.island_324();
    this.island_325();
    this.island_326();
    this.island_327();
    this.island_328();
    this.island_329();
    this.island_330();
    this.island_331();
    this.island_332();
    this.island_333();
    this.island_334();
    this.island_335();
    this.island_336();
    this.island_337();
    this.island_338();
    this.island_339();
    this.island_340();
    this.island_341();
    this.island_342();
    this.island_343();
    this.island_344();
    this.island_345();
    this.island_346();
    this.island_347();
    this.island_348();
    this.island_349();
    this.island_350();
    this.island_351();
    this.island_352();
    this.island_353();
    this.island_354();
    this.island_355();
    this.island_356();
    this.island_357();
    this.island_358();
    this.island_359();
    this.island_360();
    this.island_361();
    this.island_362();
    this.island_363();
    this.island_364();
    this.island_365();
    this.island_366();
    this.island_367();
    this.island_368();
    this.island_369();
    this.island_370();
    this.island_371();
    this.island_372();
    this.island_373();
    this.island_374();
    this.island_375();
    this.island_376();
    this.island_377();
    this.island_378();
    this.island_379();
    this.island_380();
    this.island_381();
    this.island_382();
    this.island_383();
    this.island_384();
    this.island_385();
    this.island_386();
    this.island_387();
    this.island_388();
    this.island_389();
    this.island_390();
    this.island_391();
    this.island_392();
    this.island_393();
    this.island_394();
    this.island_395();
    this.island_396();
    this.island_397();
    this.island_398();
    this.island_399();
    this.island_400();
    this.island_401();
    this.island_402();
    this.island_403();
    this.island_404();
    this.island_405();
    this.island_406();
    this.island_407();
    this.island_408();
    this.island_409();
    this.island_410();
    this.island_411();
    this.island_412();
    this.island_413();
    this.island_414();
    this.island_415();
    this.island_416();
    this.island_417();
    this.island_418();
    this.island_419();
    this.island_420();
    this.island_421();
    this.island_422();
    this.island_423();
    this.island_424();
    this.island_425();
    this.island_426();
    this.island_427();
    this.island_428();
    this.island_429();
    this.island_430();
    this.island_431();
    this.island_432();
    this.island_433();
    this.island_434();
    this.island_435();
    this.island_436();
    this.island_437();
    this.island_438();
    this.island_439();
    this.island_440();
    this.island_441();
    this.island_442();
    this.island_443();
    this.island_444();
    this.island_445();
    this.island_446();
    this.island_447();
    this.island_448();
    this.island_449();
    this.island_450();
    this.island_451();
    this.island_452();
    this.island_453();
    this.island_454();
    this.island_455();
    this.island_456();
    this.island_457();
    this.island_458();
    this.island_459();
    this.island_460();
    this.island_461();
    this.island_462();
    this.island_463();
    this.island_464();
    this.island_465();
    this.island_466();
    this.island_467();
    this.island_468();
    this.island_469();
    this.island_470();
    this.island_471();
    this.island_472();
    this.island_473();
    this.island_474();
    this.island_475();
    this.island_476();
    this.island_477();
    this.island_478();
    this.island_479();
    this.island_480();
    this.island_481();
    this.island_482();
    this.island_483();
    this.island_484();
    this.island_485();
    this.island_486();
    this.island_487();
    this.island_488();
    this.island_489();
    this.island_490();
    this.island_491();
    this.island_492();
    this.island_493();
    this.island_494();
    this.island_495();
    this.island_496();
    this.island_497();
    this.island_498();
    this.island_499();
    this.island_500();
    this.island_501();
    this.island_502();
    this.island_503();
    this.island_504();
    this.island_505();
    this.island_506();
    this.island_507();
    this.island_508();
    this.island_509();
    this.island_510();
    this.island_511();
    this.island_512();
    this.island_513();
    this.island_514();
    this.island_515();
    this.island_516();
    this.island_517();
    this.island_518();
    this.island_519();
    this.island_520();
    this.island_521();
    this.island_522();
    this.island_523();
    this.island_524();
    this.island_525();
    this.island_526();
    this.island_527();
    this.island_528();
    this.island_529();
    this.island_530();
    this.island_531();
    this.island_532();
    this.island_533();
    this.island_534();
    this.island_535();
    this.island_536();
    this.island_537();
    this.island_538();
    this.island_539();
    this.island_540();
    this.island_541();
    this.island_542();
    this.island_543();
    this.island_544();
    this.island_545();
    this.island_546();
    this.island_547();
    this.island_548();
    this.island_549();
    this.island_550();
    this.island_551();
    this.island_552();
    this.island_553();
    this.island_554();
    this.island_555();
    this.island_556();
    this.island_557();
    this.island_558();
    this.island_559();
    this.island_560();
    this.island_561();
    this.island_562();
    this.island_563();
    this.island_564();
    this.island_565();
    this.island_566();
    this.island_567();
    this.island_568();
    this.island_569();
    this.island_570();
    this.island_571();
    this.island_572();
    this.island_573();
    this.island_574();
    this.island_575();
    this.island_576();
    this.island_577();
    this.island_578();
    this.island_579();
    this.island_580();
    this.island_581();
    this.island_582();
    this.island_583();
    this.island_584();
    return this.trace;
  }

  island_000() {
    const island = { index: 0, start: "0x0014", end: "0x0017" };
    this.__record(island, "stackTail", "param_c0", "0x0017");
    return this.trace;
  }

  island_001() {
    const island = { index: 1, start: "0x0017", end: "0x0018" };
    return this.trace;
  }

  island_002() {
    const island = { index: 2, start: "0x0018", end: "0x001B" };
    this.__record(island, "stackTail", "c0", "0x001B");
    return this.trace;
  }

  island_003() {
    const island = { index: 3, start: "0x001B", end: "0x001F" };
    this.__record(island, "branch", "if not (implicit_lhs_0x001B < implicit_rhs_0x001B) then goto 0x002D", "0x001B");
    return this.trace;
  }

  island_004() {
    const island = { index: 4, start: "0x001F", end: "0x0020" };
    return this.trace;
  }

  island_005() {
    const island = { index: 5, start: "0x0020", end: "0x0023" };
    this.__record(island, "stackTail", "c0", "0x0023");
    return this.trace;
  }

  island_006() {
    const island = { index: 6, start: "0x0023", end: "0x0026" };
    this.__record(island, "assign", "c0 = implicit_value_0x0023", "0x0023");
    return this.trace;
  }

  island_007() {
    const island = { index: 7, start: "0x0026", end: "0x0027" };
    return this.trace;
  }

  island_008() {
    const island = { index: 8, start: "0x0027", end: "0x002A" };
    this.__record(island, "jump", "jump 22", "0x0027");
    return this.trace;
  }

  island_009() {
    const island = { index: 9, start: "0x002A", end: "0x002D" };
    this.__record(island, "stackTail", "param_c0", "0x002D");
    return this.trace;
  }

  island_010() {
    const island = { index: 10, start: "0x002D", end: "0x002E" };
    return this.trace;
  }

  island_011() {
    const island = { index: 11, start: "0x002E", end: "0x0035" };
    this.__record(island, "branch", "if not (implicit_lhs_0x0031 > c1) then jump 11", "0x0031");
    return this.trace;
  }

  island_012() {
    const island = { index: 12, start: "0x0035", end: "0x003C" };
    this.__record(island, "assign", "c0 = c1", "0x0039");
    return this.trace;
  }

  island_013() {
    const island = { index: 13, start: "0x003C", end: "0x003D" };
    return this.trace;
  }

  island_014() {
    const island = { index: 14, start: "0x003D", end: "0x0049" };
    this.__record(island, "branch", "if not (timeFromLastFrame > c0) then goto 0x0050", "0x0045");
    return this.trace;
  }

  island_015() {
    const island = { index: 15, start: "0x0049", end: "0x0050" };
    this.__record(island, "stackTail", "_system | milliseconds", "0x0050");
    return this.trace;
  }

  island_016() {
    const island = { index: 16, start: "0x0050", end: "0x005C" };
    this.__record(island, "jump", "jump 0x1E92", "0x0059");
    this.__record(island, "stackTail", "(implicit_lhs_0x0054 - timeFromLastFrame) | 1.6693", "0x005C");
    return this.trace;
  }

  island_017() {
    const island = { index: 17, start: "0x005C", end: "0x005D" };
    return this.trace;
  }

  island_018() {
    const island = { index: 18, start: "0x005D", end: "0x005F" };
    return this.trace;
  }

  island_019() {
    const island = { index: 19, start: "0x005F", end: "0x0068" };
    this.__record(island, "assign", "theActualTime = theTime", "0x0064");
    return this.trace;
  }

  island_020() {
    const island = { index: 20, start: "0x0068", end: "0x0074" };
    this.__record(island, "branch", "if not (theTime > c0_2) then jump 12", "0x0070");
    return this.trace;
  }

  island_021() {
    const island = { index: 21, start: "0x0074", end: "0x007C" };
    this.__record(island, "assign", "theTime = c0_2", "0x0079");
    return this.trace;
  }

  island_022() {
    const island = { index: 22, start: "0x007C", end: "0x007D" };
    return this.trace;
  }

  island_023() {
    const island = { index: 23, start: "0x007D", end: "0x007F" };
    return this.trace;
  }

  island_024() {
    const island = { index: 24, start: "0x007F", end: "0x0088" };
    this.__record(island, "stackTail", "(avgFps * fpsCount)", "0x0088");
    return this.trace;
  }

  island_025() {
    const island = { index: 25, start: "0x0088", end: "0x0096" };
    this.__record(island, "assign", "avgFps = ((implicit_lhs_0x008B + theActualTime) / 1.6682)", "0x0092");
    return this.trace;
  }

  island_026() {
    const island = { index: 26, start: "0x0096", end: "0x00A1" };
    this.__record(island, "assign", "timeFromLastFrame = milliseconds", "0x009D");
    this.__record(island, "expr", "_system", "0x00A0");
    return this.trace;
  }

  island_027() {
    const island = { index: 27, start: "0x00A1", end: "0x00AA" };
    this.__record(island, "expr", "calculateExtraHpi()", "0x00A9");
    return this.trace;
  }

  island_028() {
    const island = { index: 28, start: "0x00AA", end: "0x00CC" };
    this.__record(island, "assign", "c0 = 0.7451", "0x00C8");
    this.__record(island, "expr", "(theTime * theTime)", "0x00CB");
    this.__record(island, "stackTail", "(carV * theTime) | (c0_5 * carAccel)", "0x00CC");
    return this.trace;
  }

  island_029() {
    const island = { index: 29, start: "0x00CC", end: "0x00D8" };
    this.__record(island, "branch", "if not (gearValue = c0) then jump 718", "0x00D4");
    return this.trace;
  }

  island_030() {
    const island = { index: 30, start: "0x00D8", end: "0x00EA" };
    this.__record(island, "stackTail", "((hpi + boostCreatedPower) + systemPower) | ECUtune", "0x00EA");
    return this.trace;
  }

  island_031() {
    const island = { index: 31, start: "0x00EA", end: "0x00F9" };
    this.__record(island, "assign", "c1 = (((implicit_lhs_0x00EA + implicit_rhs_0x00EA) + compressionPowerDelta) - engineDamage)", "0x00F5");
    return this.trace;
  }

  island_032() {
    const island = { index: 32, start: "0x00F9", end: "0x010E" };
    this.__record(island, "branch", "if not (nitrousRemaining > c0) then jump 123", "0x010A");
    this.__record(island, "stackTail", "(implicit_lhs_0x00FE = implicit_object_0x00FD[isNos])", "0x010E");
    return this.trace;
  }

  island_033() {
    const island = { index: 33, start: "0x010E", end: "0x0125" };
    this.__record(island, "assign", "timeFromLastFrame = (((NOS * rpm) / stockRedLine) / c1_25)", "0x0121");
    return this.trace;
  }

  island_034() {
    const island = { index: 34, start: "0x0125", end: "0x0130" };
    this.__record(island, "branch", "if not (timeFromLastFrame > NOS) then jump 11", "0x012C");
    return this.trace;
  }

  island_035() {
    const island = { index: 35, start: "0x0130", end: "0x0138" };
    this.__record(island, "assign", "timeFromLastFrame = NOS", "0x0134");
    return this.trace;
  }

  island_036() {
    const island = { index: 36, start: "0x0138", end: "0x014B" };
    this.__record(island, "expr", "((hp * c1) - 0.6966)", "0x014A");
    this.__record(island, "stackTail", "hp", "0x014B");
    return this.trace;
  }

  island_037() {
    const island = { index: 37, start: "0x014B", end: "0x0163" };
    this.__record(island, "assign", "nitrousRemaining = (nitrousRemaining - ((NOS / c10000) * c2))", "0x015F");
    return this.trace;
  }

  island_038() {
    const island = { index: 38, start: "0x0163", end: "0x0183" };
    this.__record(island, "expr", "runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x0182");
    this.__record(island, "stackTail", "sprite(flashSP)", "0x0183");
    return this.trace;
  }

  island_039() {
    const island = { index: 39, start: "0x0183", end: "0x0186" };
    this.__record(island, "jump", "jump 21", "0x0183");
    return this.trace;
  }

  island_040() {
    const island = { index: 40, start: "0x0186", end: "0x0198" };
    this.__record(island, "assign", "hp = (hp + (hp * c1))", "0x0194");
    return this.trace;
  }

  island_041() {
    const island = { index: 41, start: "0x0198", end: "0x01A5" };
    this.__record(island, "assign", "hp = (hp * param_c0)", "0x01A1");
    return this.trace;
  }

  island_042() {
    const island = { index: 42, start: "0x01A5", end: "0x01B6" };
    this.__record(island, "branch", "if not (rpm > (revLimiter + c200)) then jump 17", "0x01B2");
    return this.trace;
  }

  island_043() {
    const island = { index: 43, start: "0x01B6", end: "0x01C4" };
    this.__record(island, "assign", "hp = (hp / c2)", "0x01C0");
    return this.trace;
  }

  island_044() {
    const island = { index: 44, start: "0x01C4", end: "0x01D6" };
    this.__record(island, "assign", "theTime = ((hp * tqFlyFactor) / rpm)", "0x01D2");
    return this.trace;
  }

  island_045() {
    const island = { index: 45, start: "0x01D6", end: "0x01EC" };
    this.__record(island, "assign", "_system = (((theTime * gr) * fgr) * rpmGearConversion)", "0x01E8");
    return this.trace;
  }

  island_046() {
    const island = { index: 46, start: "0x01EC", end: "0x01F8" };
    this.__record(island, "assign", "milliseconds = (_system / r)", "0x01F4");
    return this.trace;
  }

  island_047() {
    const island = { index: 47, start: "0x01F8", end: "0x0205" };
    this.__record(island, "assign", "c1000 = (negTq * c9)", "0x0201");
    return this.trace;
  }

  island_048() {
    const island = { index: 48, start: "0x0205", end: "0x0218" };
    this.__record(island, "jump", "branch 20801", "0x0215");
    this.__record(island, "stackTail", "param_c0 | (stockRedLine + c1000) | 0.7511", "0x0218");
    return this.trace;
  }

  island_049() {
    const island = { index: 49, start: "0x0218", end: "0x0233" };
    this.__record(island, "assign", "id_16693 = 0.5639", "0x0227");
    this.__record(island, "branch", "if not ((theActualTime - c299) < theActualTime) then goto 0x003C", "0x022F");
    this.__record(island, "stackTail", "rpm", "0x0233");
    return this.trace;
  }

  island_050() {
    const island = { index: 50, start: "0x0233", end: "0x023E" };
    this.__record(island, "assign", "c0_2 = (milliseconds - c1000)", "0x023A");
    return this.trace;
  }

  island_051() {
    const island = { index: 51, start: "0x023E", end: "0x0249" };
    this.__record(island, "branch", "if not (c0_2 > c0) then goto 0x026C", "0x0245");
    return this.trace;
  }

  island_052() {
    const island = { index: 52, start: "0x0249", end: "0x0269" };
    this.__record(island, "assign", "c1000 = (rpm + (((theActualTime - c300) * 0.7299) / c300))", "0x0265");
    this.__record(island, "expr", "c0_2", "0x0268");
    this.__record(island, "stackTail", "c1000", "0x0269");
    return this.trace;
  }

  island_053() {
    const island = { index: 53, start: "0x0269", end: "0x026C" };
    this.__record(island, "jump", "jump 0x027D", "0x0269");
    return this.trace;
  }

  island_054() {
    const island = { index: 54, start: "0x026C", end: "0x027A" };
    this.__record(island, "assign", "c1000 = ((implicit_lhs_0x0270 mod negTq) * c5_5)", "0x0276");
    return this.trace;
  }

  island_055() {
    const island = { index: 55, start: "0x027A", end: "0x027D" };
    this.__record(island, "stackTail", "c1000", "0x027D");
    return this.trace;
  }

  island_056() {
    const island = { index: 56, start: "0x027D", end: "0x028C" };
    this.__record(island, "stackTail", "(implicit_lhs_0x0281 < c0) | param_c0 | c0", "0x028C");
    return this.trace;
  }

  island_057() {
    const island = { index: 57, start: "0x028C", end: "0x0290" };
    this.__record(island, "branch", "if not (implicit_lhs_0x028C = implicit_rhs_0x028C) then goto 0x029B", "0x028C");
    return this.trace;
  }

  island_058() {
    const island = { index: 58, start: "0x0290", end: "0x0298" };
    this.__record(island, "assign", "c1000 = c0", "0x0294");
    return this.trace;
  }

  island_059() {
    const island = { index: 59, start: "0x0298", end: "0x029B" };
    this.__record(island, "stackTail", "milliseconds", "0x029B");
    return this.trace;
  }

  island_060() {
    const island = { index: 60, start: "0x029B", end: "0x02A3" };
    this.__record(island, "assign", "avgFps = (implicit_lhs_0x029E - c1000)", "0x029F");
    return this.trace;
  }

  island_061() {
    const island = { index: 61, start: "0x02A3", end: "0x02B5" };
    this.__record(island, "expr", "0.7767", "0x02B4");
    this.__record(island, "stackTail", "avgFps | (w / g)", "0x02B5");
    return this.trace;
  }

  island_062() {
    const island = { index: 62, start: "0x02B5", end: "0x02C1" };
    this.__record(island, "branch", "if not (rpm > revLimiter) then jump 11", "0x02BD");
    return this.trace;
  }

  island_063() {
    const island = { index: 63, start: "0x02C1", end: "0x02C9" };
    this.__record(island, "assign", "fpsCount = revLimiterDeceleration", "0x02C5");
    return this.trace;
  }

  island_064() {
    const island = { index: 64, start: "0x02C9", end: "0x02D0" };
    this.__record(island, "jump", "branch 15", "0x02CD");
    this.__record(island, "stackTail", "brake", "0x02D0");
    return this.trace;
  }

  island_065() {
    const island = { index: 65, start: "0x02D0", end: "0x02D9" };
    this.__record(island, "assign", "carAccel = brakeDecleration", "0x02D5");
    return this.trace;
  }

  island_066() {
    const island = { index: 66, start: "0x02D9", end: "0x02DC" };
    this.__record(island, "jump", "jump 13", "0x02D9");
    return this.trace;
  }

  island_067() {
    const island = { index: 67, start: "0x02DC", end: "0x02E6" };
    this.__record(island, "assign", "carAccel = (implicit_lhs_0x02E1 mod c2)", "0x02E2");
    return this.trace;
  }

  island_068() {
    const island = { index: 68, start: "0x02E6", end: "0x02F9" };
    this.__record(island, "assign", "carV = (carV + (carAccel * theTime))", "0x02F5");
    return this.trace;
  }

  island_069() {
    const island = { index: 69, start: "0x02F9", end: "0x0305" };
    this.__record(island, "branch", "if not (carV <= c0) then jump 21", "0x0301");
    return this.trace;
  }

  island_070() {
    const island = { index: 70, start: "0x0305", end: "0x030E" };
    this.__record(island, "assign", "carAccel = c0", "0x030A");
    return this.trace;
  }

  island_071() {
    const island = { index: 71, start: "0x030E", end: "0x0317" };
    this.__record(island, "assign", "carV = c0", "0x0313");
    return this.trace;
  }

  island_072() {
    const island = { index: 72, start: "0x0317", end: "0x0320" };
    this.__record(island, "assign", "speedoV = carV", "0x031C");
    return this.trace;
  }

  island_073() {
    const island = { index: 73, start: "0x0320", end: "0x0332" };
    this.__record(island, "assign", "engineV = (engineV + (fpsCount * theTime))", "0x032E");
    return this.trace;
  }

  island_074() {
    const island = { index: 74, start: "0x0332", end: "0x0337" };
    this.__record(island, "stackTail", "engineV", "0x0337");
    return this.trace;
  }

  island_075() {
    const island = { index: 75, start: "0x0337", end: "0x033E" };
    this.__record(island, "branch", "if not (implicit_lhs_0x033A < c5) then jump 15", "0x033A");
    return this.trace;
  }

  island_076() {
    const island = { index: 76, start: "0x033E", end: "0x0347" };
    this.__record(island, "assign", "engineV = c5", "0x0343");
    return this.trace;
  }

  island_077() {
    const island = { index: 77, start: "0x0347", end: "0x034A" };
    this.__record(island, "jump", "jump 0x0018", "0x0347");
    return this.trace;
  }

  island_078() {
    const island = { index: 78, start: "0x034A", end: "0x0356" };
    this.__record(island, "branch", "if not (engineV > c100) then jump 12", "0x0352");
    return this.trace;
  }

  island_079() {
    const island = { index: 79, start: "0x0356", end: "0x035F" };
    this.__record(island, "assign", "engineV = c100", "0x035B");
    return this.trace;
  }

  island_080() {
    const island = { index: 80, start: "0x035F", end: "0x0389" };
    this.__record(island, "expr", "0.7478", "0x0388");
    this.__record(island, "stackTail", "engineV | (gConvSlipA * r) | ((0.7811 * gr) * c50) | (fgr * rpmGearConversion)", "0x0389");
    return this.trace;
  }

  island_081() {
    const island = { index: 81, start: "0x0389", end: "0x0392" };
    this.__record(island, "expr", "getTorque()", "0x0391");
    return this.trace;
  }

  island_082() {
    const island = { index: 82, start: "0x0392", end: "0x03A0" };
    this.__record(island, "assign", "mph = (carV * vToMph)", "0x039C");
    return this.trace;
  }

  island_083() {
    const island = { index: 83, start: "0x03A0", end: "0x03A3" };
    this.__record(island, "jump", "jump 0x0647", "0x03A0");
    return this.trace;
  }

  island_084() {
    const island = { index: 84, start: "0x03A3", end: "0x03B3" };
    this.__record(island, "branch", "if not (implicit_lhs_0x03AF = slip[launchControl]) then jump 11", "0x03AF");
    return this.trace;
  }

  island_085() {
    const island = { index: 85, start: "0x03B3", end: "0x03BB" };
    this.__record(island, "assign", "c0 = c0", "0x03B7");
    return this.trace;
  }

  island_086() {
    const island = { index: 86, start: "0x03BB", end: "0x03CE" };
    this.__record(island, "assign", "hp = ((posTq * rpm) / tqFlyFactor)", "0x03CA");
    return this.trace;
  }

  island_087() {
    const island = { index: 87, start: "0x03CE", end: "0x03EF" };
    this.__record(island, "assign", "c1 = (((((hpi + boostCreatedPower) + systemPower) + ECUtune) + compressionPowerDelta) - engineDamage)", "0x03EB");
    return this.trace;
  }

  island_088() {
    const island = { index: 88, start: "0x03EF", end: "0x03F8" };
    this.__record(island, "branch", "if not (raceGas > VOID) then goto 0x005C", "0x03F4");
    return this.trace;
  }

  island_089() {
    const island = { index: 89, start: "0x03F8", end: "0x040F" };
    this.__record(island, "assign", "calculateExtraHpi = (((c5 * theActualTime) * hp) / c1000)", "0x040B");
    return this.trace;
  }

  island_090() {
    const island = { index: 90, start: "0x040F", end: "0x041A" };
    this.__record(island, "branch", "if not (calculateExtraHpi > raceGas) then goto 0x043B", "0x0416");
    return this.trace;
  }

  island_091() {
    const island = { index: 91, start: "0x041A", end: "0x042F" };
    this.__record(island, "assign", "c1 = (c1 + ((c0_02 * raceGas) / calculateExtraHpi))", "0x042B");
    return this.trace;
  }

  island_092() {
    const island = { index: 92, start: "0x042F", end: "0x0435" };
    this.__record(island, "assign", "raceGas = VOID", "0x0431");
    return this.trace;
  }

  island_093() {
    const island = { index: 93, start: "0x0435", end: "0x0438" };
    this.__record(island, "jump", "jump 28", "0x0435");
    return this.trace;
  }

  island_094() {
    const island = { index: 94, start: "0x0438", end: "0x043B" };
    this.__record(island, "stackTail", "c1", "0x043B");
    return this.trace;
  }

  island_095() {
    const island = { index: 95, start: "0x043B", end: "0x0444" };
    this.__record(island, "assign", "c1 = (implicit_lhs_0x043F + c0_02)", "0x0440");
    return this.trace;
  }

  island_096() {
    const island = { index: 96, start: "0x0444", end: "0x0451" };
    this.__record(island, "assign", "raceGas = (raceGas - calculateExtraHpi)", "0x044D");
    return this.trace;
  }

  island_097() {
    const island = { index: 97, start: "0x0451", end: "0x0466" };
    this.__record(island, "branch", "if not (nitrousRemaining > c0) then goto 0x007F", "0x0462");
    this.__record(island, "stackTail", "(implicit_lhs_0x0456 = implicit_object_0x0455[isNos])", "0x0466");
    return this.trace;
  }

  island_098() {
    const island = { index: 98, start: "0x0466", end: "0x047D" };
    this.__record(island, "assign", "timeFromLastFrame = (((NOS * rpm) / stockRedLine) / c1_25)", "0x0479");
    return this.trace;
  }

  island_099() {
    const island = { index: 99, start: "0x047D", end: "0x0488" };
    this.__record(island, "branch", "if not (timeFromLastFrame > NOS) then jump 11", "0x0484");
    return this.trace;
  }

  island_100() {
    const island = { index: 100, start: "0x0488", end: "0x0490" };
    this.__record(island, "assign", "timeFromLastFrame = NOS", "0x048C");
    return this.trace;
  }

  island_101() {
    const island = { index: 101, start: "0x0490", end: "0x04A1" };
    this.__record(island, "expr", "2.2016", "0x04A0");
    this.__record(island, "stackTail", "hp | (hp * c1)", "0x04A1");
    return this.trace;
  }

  island_102() {
    const island = { index: 102, start: "0x04A1", end: "0x04A7" };
    this.__record(island, "assign", "hp = (implicit_lhs_0x04A2 + (implicit_lhs_0x04A1 + implicit_rhs_0x04A1))", "0x04A3");
    return this.trace;
  }

  island_103() {
    const island = { index: 103, start: "0x04A7", end: "0x04BF" };
    this.__record(island, "assign", "nitrousRemaining = (nitrousRemaining - ((NOS / c10000) * c2))", "0x04BB");
    return this.trace;
  }

  island_104() {
    const island = { index: 104, start: "0x04BF", end: "0x04DF" };
    this.__record(island, "expr", "runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x04DE");
    this.__record(island, "stackTail", "sprite(flashSP)", "0x04DF");
    return this.trace;
  }

  island_105() {
    const island = { index: 105, start: "0x04DF", end: "0x04E2" };
    this.__record(island, "jump", "jump 21", "0x04DF");
    return this.trace;
  }

  island_106() {
    const island = { index: 106, start: "0x04E2", end: "0x04F4" };
    this.__record(island, "assign", "hp = (hp + (hp * c1))", "0x04F0");
    return this.trace;
  }

  island_107() {
    const island = { index: 107, start: "0x04F4", end: "0x0511" };
    this.__record(island, "assign", "hp = ((c100 - detuneHp) * (0.7489 / c100))", "0x050D");
    this.__record(island, "expr", "param_c0", "0x0510");
    this.__record(island, "stackTail", "hp", "0x0511");
    return this.trace;
  }

  island_108() {
    const island = { index: 108, start: "0x0511", end: "0x0523" };
    this.__record(island, "assign", "theTime = ((hp * tqFlyFactor) / rpm)", "0x051F");
    return this.trace;
  }

  island_109() {
    const island = { index: 109, start: "0x0523", end: "0x0539" };
    this.__record(island, "assign", "_system = (((theTime * gr) * fgr) * rpmGearConversion)", "0x0535");
    return this.trace;
  }

  island_110() {
    const island = { index: 110, start: "0x0539", end: "0x0545" };
    this.__record(island, "assign", "milliseconds = (_system / r)", "0x0541");
    return this.trace;
  }

  island_111() {
    const island = { index: 111, start: "0x0545", end: "0x0551" };
    this.__record(island, "assign", "carV = (param_c0 * c8)", "0x054D");
    return this.trace;
  }

  island_112() {
    const island = { index: 112, start: "0x0551", end: "0x0559" };
    this.__record(island, "assign", "c0_5 = c0", "0x0555");
    return this.trace;
  }

  island_113() {
    const island = { index: 113, start: "0x0559", end: "0x0564" };
    this.__record(island, "branch", "if not (carV < c1) then jump 22", "0x0560");
    return this.trace;
  }

  island_114() {
    const island = { index: 114, start: "0x0564", end: "0x0577" };
    this.__record(island, "assign", "c0_5 = (implicit_lhs_0x0572 * ((c1 - carV) mod 1.6693))", "0x0573");
    return this.trace;
  }

  island_115() {
    const island = { index: 115, start: "0x0577", end: "0x0589" };
    this.__record(island, "assign", "carAccel = ((w * c0_005) * carAccel)", "0x0585");
    return this.trace;
  }

  island_116() {
    const island = { index: 116, start: "0x0589", end: "0x059A" };
    this.__record(island, "assign", "gearValue = ((c0_016 * w) + c0_5)", "0x0596");
    return this.trace;
  }

  island_117() {
    const island = { index: 117, start: "0x059A", end: "0x05A5" };
    this.__record(island, "branch", "if not (gearValue < c0) then jump 11", "0x05A1");
    return this.trace;
  }

  island_118() {
    const island = { index: 118, start: "0x05A5", end: "0x05AD" };
    this.__record(island, "assign", "gearValue = c0", "0x05A9");
    return this.trace;
  }

  island_119() {
    const island = { index: 119, start: "0x05AD", end: "0x05C4" };
    this.__record(island, "assign", "hpi = ((carV * carV) + 0.751)", "0x05C0");
    this.__record(island, "expr", "DAfp", "0x05C3");
    return this.trace;
  }

  island_120() {
    const island = { index: 120, start: "0x05C4", end: "0x05CF" };
    this.__record(island, "branch", "if not (hpi < c0) then goto 0x05DA", "0x05CB");
    return this.trace;
  }

  island_121() {
    const island = { index: 121, start: "0x05CF", end: "0x05D7" };
    this.__record(island, "assign", "hpi = c0", "0x05D3");
    return this.trace;
  }

  island_122() {
    const island = { index: 122, start: "0x05D7", end: "0x05DA" };
    this.__record(island, "stackTail", "milliseconds", "0x05DA");
    return this.trace;
  }

  island_123() {
    const island = { index: 123, start: "0x05DA", end: "0x05E7" };
    this.__record(island, "expr", "0.7255", "0x05E6");
    this.__record(island, "stackTail", "(gearValue + hpi)", "0x05E7");
    return this.trace;
  }

  island_124() {
    const island = { index: 124, start: "0x05E7", end: "0x05F4" };
    this.__record(island, "assign", "boostCreatedPower = (carV * vToMph)", "0x05F0");
    return this.trace;
  }

  island_125() {
    const island = { index: 125, start: "0x05F4", end: "0x05FC" };
    this.__record(island, "assign", "systemPower = UsInit", "0x05F8");
    return this.trace;
  }

  island_126() {
    const island = { index: 126, start: "0x05FC", end: "0x0605" };
    this.__record(island, "branch", "if not (tireStick > VOID) then goto 0x0014", "0x0601");
    return this.trace;
  }

  island_127() {
    const island = { index: 127, start: "0x0605", end: "0x0616" };
    this.__record(island, "assign", "systemPower = (systemPower + (UsInit * c0_05))", "0x0612");
    return this.trace;
  }

  island_128() {
    const island = { index: 128, start: "0x0616", end: "0x061E" };
    this.__record(island, "assign", "ECUtune = UkInit", "0x061A");
    return this.trace;
  }

  island_129() {
    const island = { index: 129, start: "0x061E", end: "0x0629" };
    this.__record(island, "branch", "if not (boostCreatedPower > c0) then goto 0x0672", "0x0625");
    return this.trace;
  }

  island_130() {
    const island = { index: 130, start: "0x0629", end: "0x0635" };
    this.__record(island, "assign", "compressionPowerDelta = (boostCreatedPower / c100)", "0x0631");
    return this.trace;
  }

  island_131() {
    const island = { index: 131, start: "0x0635", end: "0x0640" };
    this.__record(island, "branch", "if not (compressionPowerDelta > c1) then goto 0x064B", "0x063C");
    return this.trace;
  }

  island_132() {
    const island = { index: 132, start: "0x0640", end: "0x0647" };
    this.__record(island, "assign", "compressionPowerDelta = c1", "0x0644");
    return this.trace;
  }

  island_133() {
    const island = { index: 133, start: "0x0647", end: "0x0648" };
    return this.trace;
  }

  island_134() {
    const island = { index: 134, start: "0x0648", end: "0x064B" };
    this.__record(island, "stackTail", "compressionPowerDelta", "0x064B");
    return this.trace;
  }

  island_135() {
    const island = { index: 135, start: "0x064B", end: "0x0654" };
    this.__record(island, "assign", "compressionPowerDelta = (implicit_lhs_0x064F * c3)", "0x0650");
    return this.trace;
  }

  island_136() {
    const island = { index: 136, start: "0x0654", end: "0x065F" };
    this.__record(island, "assign", "systemPower = (systemPower + compressionPowerDelta)", "0x065B");
    return this.trace;
  }

  island_137() {
    const island = { index: 137, start: "0x065F", end: "0x066F" };
    this.__record(island, "assign", "ECUtune = (ECUtune - (compressionPowerDelta * c0_09))", "0x066B");
    return this.trace;
  }

  island_138() {
    const island = { index: 138, start: "0x066F", end: "0x0672" };
    this.__record(island, "stackTail", "ECUtune", "0x0672");
    return this.trace;
  }

  island_139() {
    const island = { index: 139, start: "0x0672", end: "0x067A" };
    this.__record(island, "branch", "if not (implicit_lhs_0x0676 < c0_6) then jump 11", "0x0676");
    return this.trace;
  }

  island_140() {
    const island = { index: 140, start: "0x067A", end: "0x0682" };
    this.__record(island, "assign", "ECUtune = c0_6", "0x067E");
    return this.trace;
  }

  island_141() {
    const island = { index: 141, start: "0x0682", end: "0x0689" };
    this.__record(island, "jump", "branch 0x06EF", "0x0686");
    this.__record(island, "stackTail", "slip", "0x0689");
    return this.trace;
  }

  island_142() {
    const island = { index: 142, start: "0x0689", end: "0x06B1" };
    this.__record(island, "expr", "0.7734", "0x06B0");
    this.__record(island, "stackTail", "avgFps | ((ECUtune * N) / 0.5639) | (ECUtune * N) | (w / g)", "0x06B1");
    return this.trace;
  }

  island_143() {
    const island = { index: 143, start: "0x06B1", end: "0x06B4" };
    this.__record(island, "jump", "jump 0x06EC", "0x06B1");
    return this.trace;
  }

  island_144() {
    const island = { index: 144, start: "0x06B4", end: "0x06C7" };
    this.__record(island, "expr", "0.7734", "0x06C6");
    this.__record(island, "stackTail", "avgFps | (w / g)", "0x06C7");
    return this.trace;
  }

  island_145() {
    const island = { index: 145, start: "0x06C7", end: "0x06D0" };
    this.__record(island, "assign", "speedoV = carV", "0x06CC");
    return this.trace;
  }

  island_146() {
    const island = { index: 146, start: "0x06D0", end: "0x06D6" };
    this.__record(island, "assign", "slip = 0", "0x06D2");
    return this.trace;
  }

  island_147() {
    const island = { index: 147, start: "0x06D6", end: "0x06E9" };
    this.__record(island, "expr", "runEngineTractionLightCB(0)", "0x06E8");
    this.__record(island, "stackTail", "sprite(flashSP)", "0x06E9");
    return this.trace;
  }

  island_148() {
    const island = { index: 148, start: "0x06E9", end: "0x06EC" };
    this.__record(island, "jump", "jump 0x0758", "0x06E9");
    return this.trace;
  }

  island_149() {
    const island = { index: 149, start: "0x06EC", end: "0x06EF" };
    this.__record(island, "stackTail", "avgFps", "0x06EF");
    return this.trace;
  }

  island_150() {
    const island = { index: 150, start: "0x06EF", end: "0x0726" };
    this.__record(island, "expr", "0.7734", "0x0725");
    this.__record(island, "stackTail", "((systemPower * N) = 0.5701) | (carV + c2) | 1.6693[id_5127] | (systemPower * N) | (w / g)", "0x0726");
    return this.trace;
  }

  island_151() {
    const island = { index: 151, start: "0x0726", end: "0x072C" };
    this.__record(island, "assign", "slip = 1", "0x0728");
    return this.trace;
  }

  island_152() {
    const island = { index: 152, start: "0x072C", end: "0x073F" };
    this.__record(island, "expr", "runEngineTractionLightCB(1)", "0x073E");
    this.__record(island, "stackTail", "sprite(flashSP)", "0x073F");
    return this.trace;
  }

  island_153() {
    const island = { index: 153, start: "0x073F", end: "0x0742" };
    this.__record(island, "jump", "jump 0x0758", "0x073F");
    return this.trace;
  }

  island_154() {
    const island = { index: 154, start: "0x0742", end: "0x0755" };
    this.__record(island, "expr", "0.7734", "0x0754");
    this.__record(island, "stackTail", "avgFps | (w / g)", "0x0755");
    return this.trace;
  }

  island_155() {
    const island = { index: 155, start: "0x0755", end: "0x0758" };
    this.__record(island, "stackTail", "avgFps", "0x0758");
    return this.trace;
  }

  island_156() {
    const island = { index: 156, start: "0x0758", end: "0x0767" };
    this.__record(island, "expr", "((w / g) <= 0.7767)", "0x0766");
    return this.trace;
  }

  island_157() {
    const island = { index: 157, start: "0x0767", end: "0x077F" };
    this.__record(island, "branch", "if not (carAccel < c0) then goto 0x0017", "0x077B");
    this.__record(island, "stackTail", "(carV < c3)", "0x077F");
    return this.trace;
  }

  island_158() {
    const island = { index: 158, start: "0x077F", end: "0x0788" };
    this.__record(island, "assign", "carAccel = c0", "0x0784");
    return this.trace;
  }

  island_159() {
    const island = { index: 159, start: "0x0788", end: "0x0790" };
    this.__record(island, "assign", "engineDamage = c0", "0x078C");
    return this.trace;
  }

  island_160() {
    const island = { index: 160, start: "0x0790", end: "0x0793" };
    this.__record(island, "jump", "jump 0x0018", "0x0790");
    return this.trace;
  }

  island_161() {
    const island = { index: 161, start: "0x0793", end: "0x079F" };
    this.__record(island, "branch", "if not (carV < c0) then jump 12", "0x079B");
    return this.trace;
  }

  island_162() {
    const island = { index: 162, start: "0x079F", end: "0x07A8" };
    this.__record(island, "assign", "carV = c0", "0x07A4");
    return this.trace;
  }

  island_163() {
    const island = { index: 163, start: "0x07A8", end: "0x07B4" };
    this.__record(island, "branch", "if not (rpm > revLimiter) then goto 0x0014", "0x07B0");
    return this.trace;
  }

  island_164() {
    const island = { index: 164, start: "0x07B4", end: "0x07BD" };
    this.__record(island, "assign", "carAccel = revLimiterDeceleration", "0x07B9");
    return this.trace;
  }

  island_165() {
    const island = { index: 165, start: "0x07BD", end: "0x07C5" };
    this.__record(island, "assign", "engineDamage = revLimiterDeceleration", "0x07C1");
    return this.trace;
  }

  island_166() {
    const island = { index: 166, start: "0x07C5", end: "0x07CC" };
    this.__record(island, "jump", "branch 58", "0x07C9");
    this.__record(island, "stackTail", "brake", "0x07CC");
    return this.trace;
  }

  island_167() {
    const island = { index: 167, start: "0x07CC", end: "0x07D5" };
    this.__record(island, "assign", "carAccel = brakeDecleration", "0x07D1");
    return this.trace;
  }

  island_168() {
    const island = { index: 168, start: "0x07D5", end: "0x07DD" };
    this.__record(island, "assign", "engineDamage = brakeDecleration", "0x07D9");
    return this.trace;
  }

  island_169() {
    const island = { index: 169, start: "0x07DD", end: "0x07E9" };
    this.__record(island, "branch", "if not (carV < c2) then jump 29", "0x07E5");
    return this.trace;
  }

  island_170() {
    const island = { index: 170, start: "0x07E9", end: "0x07F2" };
    this.__record(island, "assign", "carAccel = c0", "0x07EE");
    return this.trace;
  }

  island_171() {
    const island = { index: 171, start: "0x07F2", end: "0x07FA" };
    this.__record(island, "assign", "engineDamage = c0", "0x07F6");
    return this.trace;
  }

  island_172() {
    const island = { index: 172, start: "0x07FA", end: "0x0803" };
    this.__record(island, "assign", "carV = c0", "0x07FF");
    return this.trace;
  }

  island_173() {
    const island = { index: 173, start: "0x0803", end: "0x0816" };
    this.__record(island, "assign", "carV = (carV + (carAccel * theTime))", "0x0812");
    return this.trace;
  }

  island_174() {
    const island = { index: 174, start: "0x0816", end: "0x0828" };
    this.__record(island, "assign", "speedoV = (speedoV + (engineDamage * theTime))", "0x0824");
    return this.trace;
  }

  island_175() {
    const island = { index: 175, start: "0x0828", end: "0x0839" };
    this.__record(island, "branch", "if not ((carV + c10) < speedoV) then jump 12", "0x0835");
    return this.trace;
  }

  island_176() {
    const island = { index: 176, start: "0x0839", end: "0x083F" };
    this.__record(island, "assign", "tireScrub = 1", "0x083B");
    return this.trace;
  }

  island_177() {
    const island = { index: 177, start: "0x083F", end: "0x0842" };
    this.__record(island, "jump", "jump 9", "0x083F");
    return this.trace;
  }

  island_178() {
    const island = { index: 178, start: "0x0842", end: "0x0848" };
    this.__record(island, "assign", "tireScrub = 0", "0x0844");
    return this.trace;
  }

  island_179() {
    const island = { index: 179, start: "0x0848", end: "0x0859" };
    this.__record(island, "branch", "if not ((carV + c0_015) < speedoV) then goto 0x00EA", "0x0855");
    return this.trace;
  }

  island_180() {
    const island = { index: 180, start: "0x0859", end: "0x0866" };
    this.__record(island, "assign", "isNos = (speedoV - carV)", "0x0862");
    return this.trace;
  }

  island_181() {
    const island = { index: 181, start: "0x0866", end: "0x0871" };
    this.__record(island, "branch", "if not (isNos < c0_02) then jump 11", "0x086D");
    return this.trace;
  }

  island_182() {
    const island = { index: 182, start: "0x0871", end: "0x0879" };
    this.__record(island, "assign", "isNos = c0", "0x0875");
    return this.trace;
  }

  island_183() {
    const island = { index: 183, start: "0x0879", end: "0x0880" };
    this.__record(island, "jump", "branch 0x005D", "0x087D");
    this.__record(island, "stackTail", "slip", "0x0880");
    return this.trace;
  }

  island_184() {
    const island = { index: 184, start: "0x0880", end: "0x0897" };
    this.__record(island, "assign", "nitrousRemaining = (0.7299 / c200)", "0x0893");
    this.__record(island, "expr", "(ECUtune * N)", "0x0896");
    this.__record(island, "stackTail", "avgFps", "0x0897");
    return this.trace;
  }

  island_185() {
    const island = { index: 185, start: "0x0897", end: "0x08A2" };
    this.__record(island, "branch", "if not (nitrousRemaining < c0) then goto 0x08B0", "0x089E");
    return this.trace;
  }

  island_186() {
    const island = { index: 186, start: "0x08A2", end: "0x08AA" };
    this.__record(island, "assign", "nitrousRemaining = c0", "0x08A6");
    return this.trace;
  }

  island_187() {
    const island = { index: 187, start: "0x08AA", end: "0x08AD" };
    this.__record(island, "jump", "jump 22", "0x08AA");
    return this.trace;
  }

  island_188() {
    const island = { index: 188, start: "0x08AD", end: "0x08B0" };
    this.__record(island, "stackTail", "nitrousRemaining", "0x08B0");
    return this.trace;
  }

  island_189() {
    const island = { index: 189, start: "0x08B0", end: "0x08B8" };
    this.__record(island, "branch", "if not (implicit_lhs_0x08B4 > c1) then jump 11", "0x08B4");
    return this.trace;
  }

  island_190() {
    const island = { index: 190, start: "0x08B8", end: "0x08C0" };
    this.__record(island, "assign", "nitrousRemaining = c1", "0x08BC");
    return this.trace;
  }

  island_191() {
    const island = { index: 191, start: "0x08C0", end: "0x08D7" };
    this.__record(island, "assign", "speedoV = (implicit_lhs_0x08D2 - (speedoV * ((c1 - nitrousRemaining) > 2.2016)))", "0x08D3");
    return this.trace;
  }

  island_192() {
    const island = { index: 192, start: "0x08D7", end: "0x08DA" };
    this.__record(island, "jump", "jump 0x0940", "0x08D7");
    return this.trace;
  }

  island_193() {
    const island = { index: 193, start: "0x08DA", end: "0x08E7" };
    this.__record(island, "assign", "NOS = (clutchFeather + c0_18)", "0x08E3");
    return this.trace;
  }

  island_194() {
    const island = { index: 194, start: "0x08E7", end: "0x08F8" };
    this.__record(island, "assign", "speedoV = (speedoV - (NOS * isNos))", "0x08F4");
    return this.trace;
  }

  island_195() {
    const island = { index: 195, start: "0x08F8", end: "0x0922" };
    this.__record(island, "branch", "if not ((rpm / redLine) < (c8 / c10)) then goto 0x0940", "0x091E");
    this.__record(island, "stackTail", "((param_c0 > c0) > (mph = VOID))", "0x0922");
    return this.trace;
  }

  island_196() {
    const island = { index: 196, start: "0x0922", end: "0x093D" };
    this.__record(island, "expr", "0.7478", "0x093C");
    this.__record(island, "stackTail", "(implicit_object_0x092C[(speedoV / c2)] - (rpm / redLine))", "0x093D");
    return this.trace;
  }

  island_197() {
    const island = { index: 197, start: "0x093D", end: "0x0940" };
    this.__record(island, "jump", "jump 12", "0x093D");
    return this.trace;
  }

  island_198() {
    const island = { index: 198, start: "0x0940", end: "0x0949" };
    this.__record(island, "assign", "speedoV = carV", "0x0945");
    return this.trace;
  }

  island_199() {
    const island = { index: 199, start: "0x0949", end: "0x0973" };
    this.__record(island, "expr", "0.7478", "0x0972");
    this.__record(island, "stackTail", "speedoV | (gConvSlipA * r) | ((0.7811 * gr) * c50) | (fgr * rpmGearConversion)", "0x0973");
    return this.trace;
  }

  island_200() {
    const island = { index: 200, start: "0x0973", end: "0x097C" };
    this.__record(island, "expr", "getTorque()", "0x097B");
    return this.trace;
  }

  island_201() {
    const island = { index: 201, start: "0x097C", end: "0x0983" };
    this.__record(island, "jump", "branch 41", "0x0980");
    this.__record(island, "stackTail", "slip", "0x0983");
    return this.trace;
  }

  island_202() {
    const island = { index: 202, start: "0x0983", end: "0x0991" };
    this.__record(island, "assign", "mph = (speedoV * vToMph)", "0x098D");
    return this.trace;
  }

  island_203() {
    const island = { index: 203, start: "0x0991", end: "0x099D" };
    this.__record(island, "branch", "if not (mph < c0_02) then goto 0x09A9", "0x0999");
    return this.trace;
  }

  island_204() {
    const island = { index: 204, start: "0x099D", end: "0x09A6" };
    this.__record(island, "assign", "mph = c0_02", "0x09A2");
    return this.trace;
  }

  island_205() {
    const island = { index: 205, start: "0x09A6", end: "0x09A9" };
    this.__record(island, "jump", "jump 0x09BA", "0x09A6");
    return this.trace;
  }

  island_206() {
    const island = { index: 206, start: "0x09A9", end: "0x09B7" };
    this.__record(island, "assign", "mph = (carV * vToMph)", "0x09B3");
    return this.trace;
  }

  island_207() {
    const island = { index: 207, start: "0x09B7", end: "0x09BA" };
    this.__record(island, "stackTail", "c0", "0x09BA");
    return this.trace;
  }

  island_208() {
    const island = { index: 208, start: "0x09BA", end: "0x09C2" };
    this.__record(island, "branch", "if not (implicit_lhs_0x09BE < c0_02) then jump 40", "0x09BE");
    return this.trace;
  }

  island_209() {
    const island = { index: 209, start: "0x09C2", end: "0x09CF" };
    this.__record(island, "jump", "branch 16693", "0x09CC");
    this.__record(island, "stackTail", "(gearValue = -1)", "0x09CF");
    return this.trace;
  }

  island_210() {
    const island = { index: 210, start: "0x09CF", end: "0x09D4" };
    this.__record(island, "jump", "branch 14", "0x09D1");
    return this.trace;
  }

  island_211() {
    const island = { index: 211, start: "0x09D4", end: "0x09DC" };
    this.__record(island, "assign", "c0 = c0", "0x09D8");
    return this.trace;
  }

  island_212() {
    const island = { index: 212, start: "0x09DC", end: "0x09DF" };
    this.__record(island, "jump", "jump 11", "0x09DC");
    return this.trace;
  }

  island_213() {
    const island = { index: 213, start: "0x09DF", end: "0x09E7" };
    this.__record(island, "assign", "c0 = c0_02", "0x09E3");
    return this.trace;
  }

  island_214() {
    const island = { index: 214, start: "0x09E7", end: "0x09F2" };
    this.__record(island, "branch", "if not (gearValue = -1) then jump 19", "0x09EE");
    return this.trace;
  }

  island_215() {
    const island = { index: 215, start: "0x09F2", end: "0x09FF" };
    this.__record(island, "assign", "s = (s - c0)", "0x09FB");
    return this.trace;
  }

  island_216() {
    const island = { index: 216, start: "0x09FF", end: "0x0A02" };
    this.__record(island, "jump", "jump 16", "0x09FF");
    return this.trace;
  }

  island_217() {
    const island = { index: 217, start: "0x0A02", end: "0x0A0F" };
    this.__record(island, "assign", "s = (s + c0)", "0x0A0B");
    return this.trace;
  }

  island_218() {
    const island = { index: 218, start: "0x0A0F", end: "0x0A2C" };
    this.__record(island, "assign", "s = (floor((s * c1000)) / c1000)", "0x0A28");
    this.__record(island, "expr", "Math", "0x0A2B");
    return this.trace;
  }

  island_219() {
    const island = { index: 219, start: "0x0A2C", end: "0x0A33" };
    this.__record(island, "jump", "branch 0x0138", "0x0A30");
    this.__record(island, "stackTail", "staging", "0x0A33");
    return this.trace;
  }

  island_220() {
    const island = { index: 220, start: "0x0A33", end: "0x0A40" };
    this.__record(island, "branch", "if not (implicit_lhs_0x0A3C < (s mod c13)) then jump 43", "0x0A3C");
    return this.trace;
  }

  island_221() {
    const island = { index: 221, start: "0x0A40", end: "0x0A4A" };
    this.__record(island, "assign", "s = (implicit_lhs_0x0A45 mod c13)", "0x0A46");
    return this.trace;
  }

  island_222() {
    const island = { index: 222, start: "0x0A4A", end: "0x0A53" };
    this.__record(island, "assign", "mph = c0", "0x0A4F");
    return this.trace;
  }

  island_223() {
    const island = { index: 223, start: "0x0A53", end: "0x0A5C" };
    this.__record(island, "assign", "carAccel = c0", "0x0A58");
    return this.trace;
  }

  island_224() {
    const island = { index: 224, start: "0x0A5C", end: "0x0A65" };
    this.__record(island, "assign", "carV = c0", "0x0A61");
    return this.trace;
  }

  island_225() {
    const island = { index: 225, start: "0x0A65", end: "0x0A68" };
    this.__record(island, "jump", "jump 0x0B68", "0x0A65");
    return this.trace;
  }

  island_226() {
    const island = { index: 226, start: "0x0A68", end: "0x0A74" };
    this.__record(island, "branch", "if not (s > c5) then goto 0x002A", "0x0A70");
    return this.trace;
  }

  island_227() {
    const island = { index: 227, start: "0x0A74", end: "0x0A7D" };
    this.__record(island, "assign", "s = c5", "0x0A79");
    return this.trace;
  }

  island_228() {
    const island = { index: 228, start: "0x0A7D", end: "0x0A86" };
    this.__record(island, "assign", "mph = c0", "0x0A82");
    return this.trace;
  }

  island_229() {
    const island = { index: 229, start: "0x0A86", end: "0x0A8F" };
    this.__record(island, "assign", "carAccel = c0", "0x0A8B");
    return this.trace;
  }

  island_230() {
    const island = { index: 230, start: "0x0A8F", end: "0x0A98" };
    this.__record(island, "assign", "carV = c0", "0x0A94");
    return this.trace;
  }

  island_231() {
    const island = { index: 231, start: "0x0A98", end: "0x0A9B" };
    this.__record(island, "jump", "jump 0x0B68", "0x0A98");
    return this.trace;
  }

  island_232() {
    const island = { index: 232, start: "0x0A9B", end: "0x0AA0" };
    this.__record(island, "assign", "rpm = 0", "0x0A9C");
    return this.trace;
  }

  island_233() {
    const island = { index: 233, start: "0x0AA0", end: "0x0AA5" };
    this.__record(island, "assign", "stockRedLine = 0", "0x0AA1");
    return this.trace;
  }

  island_234() {
    const island = { index: 234, start: "0x0AA5", end: "0x0ABE" };
    this.__record(island, "branch", "if not (s < c0) then jump 8", "0x0ABA");
    this.__record(island, "stackTail", "(implicit_lhs_0x0AAE > (s mod c3))", "0x0ABE");
    return this.trace;
  }

  island_235() {
    const island = { index: 235, start: "0x0ABE", end: "0x0AC3" };
    this.__record(island, "assign", "rpm = 1", "0x0ABF");
    return this.trace;
  }

  island_236() {
    const island = { index: 236, start: "0x0AC3", end: "0x0ADC" };
    this.__record(island, "branch", "if not (s < c1) then jump 8", "0x0AD8");
    this.__record(island, "stackTail", "(implicit_lhs_0x0ACC > (s mod c2))", "0x0ADC");
    return this.trace;
  }

  island_237() {
    const island = { index: 237, start: "0x0ADC", end: "0x0AE1" };
    this.__record(island, "assign", "stockRedLine = 1", "0x0ADD");
    return this.trace;
  }

  island_238() {
    const island = { index: 238, start: "0x0AE1", end: "0x0AF7" };
    this.__record(island, "branch", "if not (staged <> stockRedLine) then goto 0x0B68", "0x0AF3");
    this.__record(island, "stackTail", "(preStaged <> rpm)", "0x0AF7");
    return this.trace;
  }

  island_239() {
    const island = { index: 239, start: "0x0AF7", end: "0x0AFF" };
    this.__record(island, "assign", "preStaged = rpm", "0x0AFB");
    return this.trace;
  }

  island_240() {
    const island = { index: 240, start: "0x0AFF", end: "0x0B07" };
    this.__record(island, "assign", "staged = stockRedLine", "0x0B03");
    return this.trace;
  }

  island_241() {
    const island = { index: 241, start: "0x0B07", end: "0x0B0F" };
    this.__record(island, "jump", "jump 22016", "0x0B0C");
    this.__record(island, "stackTail", "stockRedLine", "0x0B0F");
    return this.trace;
  }

  island_242() {
    const island = { index: 242, start: "0x0B0F", end: "0x0B13" };
    this.__record(island, "jump", "branch 0x0023", "0x0B10");
    return this.trace;
  }

  island_243() {
    const island = { index: 243, start: "0x0B13", end: "0x0B30" };
    this.__record(island, "assign", "lightDelayTO = timeout(lightDelayTO).new(5000, symbol(stagedAndReady))", "0x0B2C");
    return this.trace;
  }

  island_244() {
    const island = { index: 244, start: "0x0B30", end: "0x0B33" };
    this.__record(island, "jump", "jump 0x0B4F", "0x0B30");
    return this.trace;
  }

  island_245() {
    const island = { index: 245, start: "0x0B33", end: "0x0B40" };
    this.__record(island, "marker", "0x62", "0x0B3B");
    this.__record(island, "branch", "if not (lightDelayTO = VOID_SENTINEL) then goto 0x0B4F", "0x0B3C");
    return this.trace;
  }

  island_246() {
    const island = { index: 246, start: "0x0B40", end: "0x0B4C" };
    this.__record(island, "expr", "forget()", "0x0B4B");
    this.__record(island, "stackTail", "lightDelayTO", "0x0B4C");
    return this.trace;
  }

  island_247() {
    const island = { index: 247, start: "0x0B4C", end: "0x0B4F" };
    this.__record(island, "stackTail", "sprite", "0x0B4F");
    return this.trace;
  }

  island_248() {
    const island = { index: 248, start: "0x0B4F", end: "0x0B65" };
    this.__record(island, "expr", "runEngineStageLightCB(implicit_callee_0x0B53(flashSP)[runEngineStageLightCB], stockRedLine, rpm)", "0x0B64");
    return this.trace;
  }

  island_249() {
    const island = { index: 249, start: "0x0B65", end: "0x0B68" };
    this.__record(island, "jump", "jump 0x0CA7", "0x0B65");
    return this.trace;
  }

  island_250() {
    const island = { index: 250, start: "0x0B68", end: "0x0B73" };
    this.__record(island, "branch", "if not (rt = undefined) then goto 0x0337", "0x0B6F");
    return this.trace;
  }

  island_251() {
    const island = { index: 251, start: "0x0B73", end: "0x0B7F" };
    this.__record(island, "branch", "if not (theActualTime > lagThreshold) then goto 0x0014", "0x0B7B");
    return this.trace;
  }

  island_252() {
    const island = { index: 252, start: "0x0B7F", end: "0x0B8D" };
    this.__record(island, "assign", "badCounterRT = (badCounterRT + theActualTime)", "0x0B89");
    return this.trace;
  }

  island_253() {
    const island = { index: 253, start: "0x0B8D", end: "0x0B90" };
    this.__record(island, "jump", "jump 17", "0x0B8D");
    return this.trace;
  }

  island_254() {
    const island = { index: 254, start: "0x0B90", end: "0x0B9E" };
    this.__record(island, "assign", "goodCounterRT = (goodCounterRT + theActualTime)", "0x0B9A");
    return this.trace;
  }

  island_255() {
    const island = { index: 255, start: "0x0B9E", end: "0x0BAA" };
    this.__record(island, "branch", "if not (s >= c0) then goto 0x0EA7", "0x0BA6");
    return this.trace;
  }

  island_256() {
    const island = { index: 256, start: "0x0BAA", end: "0x0BB2" };
    this.__record(island, "assign", "c1_25 = c0", "0x0BAE");
    return this.trace;
  }

  island_257() {
    const island = { index: 257, start: "0x0BB2", end: "0x0BBD" };
    this.__record(island, "assign", "timeStartLine = milliseconds", "0x0BB9");
    this.__record(island, "expr", "_system", "0x0BBC");
    return this.trace;
  }

  island_258() {
    const island = { index: 258, start: "0x0BBD", end: "0x0BC9" };
    this.__record(island, "branch", "if not (timeGreen = c0) then goto 0x0C8F", "0x0BC5");
    return this.trace;
  }

  island_259() {
    const island = { index: 259, start: "0x0BC9", end: "0x0BD3" };
    this.__record(island, "assign", "rt = (implicit_lhs_0x0BCE mod c1)", "0x0BCF");
    return this.trace;
  }

  island_260() {
    const island = { index: 260, start: "0x0BD3", end: "0x0BEB" };
    this.__record(island, "expr", "runEngineSetLightOnCB(p, red)", "0x0BEA");
    this.__record(island, "stackTail", "sprite(flashSP)", "0x0BEB");
    return this.trace;
  }

  island_261() {
    const island = { index: 261, start: "0x0BEB", end: "0x0BF6" };
    this.__record(island, "branch", "if not (raceType = KOTH) then jump 22", "0x0BF2");
    return this.trace;
  }

  island_262() {
    const island = { index: 262, start: "0x0BF6", end: "0x0C06" };
    this.__record(island, "expr", "KRT((KRT mod c1), EMPTY)", "0x0C05");
    return this.trace;
  }

  island_263() {
    const island = { index: 263, start: "0x0C06", end: "0x0C09" };
    this.__record(island, "jump", "jump 0x0C8C", "0x0C06");
    return this.trace;
  }

  island_264() {
    const island = { index: 264, start: "0x0C09", end: "0x0C14" };
    this.__record(island, "branch", "if not (raceType = QM) then jump 22", "0x0C10");
    return this.trace;
  }

  island_265() {
    const island = { index: 265, start: "0x0C14", end: "0x0C24" };
    this.__record(island, "expr", "RRT((RRT mod c1), EMPTY)", "0x0C23");
    return this.trace;
  }

  island_266() {
    const island = { index: 266, start: "0x0C24", end: "0x0C27" };
    this.__record(island, "jump", "jump 0x0C8C", "0x0C24");
    return this.trace;
  }

  island_267() {
    const island = { index: 267, start: "0x0C27", end: "0x0C3D" };
    this.__record(island, "branch", "if not (raceType = TEAMRIVAL) then jump 22", "0x0C39");
    this.__record(island, "stackTail", "(raceType = RIVAL)", "0x0C3D");
    return this.trace;
  }

  island_268() {
    const island = { index: 268, start: "0x0C3D", end: "0x0C4D" };
    this.__record(island, "expr", "RIVRT((RIVRT mod c1), EMPTY)", "0x0C4C");
    return this.trace;
  }

  island_269() {
    const island = { index: 269, start: "0x0C4D", end: "0x0C50" };
    this.__record(island, "jump", "jump 0x0C8C", "0x0C4D");
    return this.trace;
  }

  island_270() {
    const island = { index: 270, start: "0x0C50", end: "0x0C5B" };
    this.__record(island, "branch", "if not (raceType = HTQ) then jump 22", "0x0C57");
    return this.trace;
  }

  island_271() {
    const island = { index: 271, start: "0x0C5B", end: "0x0C6B" };
    this.__record(island, "expr", "HTQRT((HTQRT mod c1), EMPTY)", "0x0C6A");
    return this.trace;
  }

  island_272() {
    const island = { index: 272, start: "0x0C6B", end: "0x0C6E" };
    this.__record(island, "jump", "jump 0x0C8C", "0x0C6B");
    return this.trace;
  }

  island_273() {
    const island = { index: 273, start: "0x0C6E", end: "0x0C79" };
    this.__record(island, "branch", "if not (raceType = HT) then goto 0x0C8C", "0x0C75");
    return this.trace;
  }

  island_274() {
    const island = { index: 274, start: "0x0C79", end: "0x0C89" };
    this.__record(island, "expr", "HTRT((HTRT mod c1), EMPTY)", "0x0C88");
    return this.trace;
  }

  island_275() {
    const island = { index: 275, start: "0x0C89", end: "0x0C8C" };
    this.__record(island, "jump", "jump 0x0E78", "0x0C89");
    return this.trace;
  }

  island_276() {
    const island = { index: 276, start: "0x0C8C", end: "0x0C8F" };
    this.__record(island, "stackTail", "_system", "0x0C8F");
    return this.trace;
  }

  island_277() {
    const island = { index: 277, start: "0x0C8F", end: "0x0C96" };
    this.__record(island, "assign", "hp = milliseconds", "0x0C92");
    return this.trace;
  }

  island_278() {
    const island = { index: 278, start: "0x0C96", end: "0x0CA6" };
    this.__record(island, "jump", "jump 7734", "0x0CA3");
    this.__record(island, "stackTail", "(hp - timeGreen) | 1.6693", "0x0CA6");
    return this.trace;
  }

  island_279() {
    const island = { index: 279, start: "0x0CA6", end: "0x0CA7" };
    return this.trace;
  }

  island_280() {
    const island = { index: 280, start: "0x0CA7", end: "0x0CA9" };
    this.__record(island, "marker", "0x65", "0x0CA7");
    return this.trace;
  }

  island_281() {
    const island = { index: 281, start: "0x0CA9", end: "0x0CB5" };
    this.__record(island, "branch", "if not (rt < c0_5) then jump 198", "0x0CB1");
    return this.trace;
  }

  island_282() {
    const island = { index: 282, start: "0x0CB5", end: "0x0CBF" };
    this.__record(island, "assign", "rt = (implicit_lhs_0x0CBA mod c1)", "0x0CBB");
    return this.trace;
  }

  island_283() {
    const island = { index: 283, start: "0x0CBF", end: "0x0CCA" };
    this.__record(island, "branch", "if not (raceType = KOTH) then jump 22", "0x0CC6");
    return this.trace;
  }

  island_284() {
    const island = { index: 284, start: "0x0CCA", end: "0x0CDA" };
    this.__record(island, "expr", "KRT((KRT mod c1), EMPTY)", "0x0CD9");
    return this.trace;
  }

  island_285() {
    const island = { index: 285, start: "0x0CDA", end: "0x0CDD" };
    this.__record(island, "jump", "jump 0x0D60", "0x0CDA");
    return this.trace;
  }

  island_286() {
    const island = { index: 286, start: "0x0CDD", end: "0x0CE8" };
    this.__record(island, "branch", "if not (raceType = QM) then jump 22", "0x0CE4");
    return this.trace;
  }

  island_287() {
    const island = { index: 287, start: "0x0CE8", end: "0x0CF8" };
    this.__record(island, "expr", "RRT((RRT mod c1), EMPTY)", "0x0CF7");
    return this.trace;
  }

  island_288() {
    const island = { index: 288, start: "0x0CF8", end: "0x0CFB" };
    this.__record(island, "jump", "jump 0x0D60", "0x0CF8");
    return this.trace;
  }

  island_289() {
    const island = { index: 289, start: "0x0CFB", end: "0x0D11" };
    this.__record(island, "branch", "if not (raceType = TEAMRIVAL) then jump 22", "0x0D0D");
    this.__record(island, "stackTail", "(raceType = RIVAL)", "0x0D11");
    return this.trace;
  }

  island_290() {
    const island = { index: 290, start: "0x0D11", end: "0x0D21" };
    this.__record(island, "expr", "RIVRT((RIVRT mod c1), EMPTY)", "0x0D20");
    return this.trace;
  }

  island_291() {
    const island = { index: 291, start: "0x0D21", end: "0x0D24" };
    this.__record(island, "jump", "jump 0x0D60", "0x0D21");
    return this.trace;
  }

  island_292() {
    const island = { index: 292, start: "0x0D24", end: "0x0D2F" };
    this.__record(island, "branch", "if not (raceType = HTQ) then jump 22", "0x0D2B");
    return this.trace;
  }

  island_293() {
    const island = { index: 293, start: "0x0D2F", end: "0x0D3F" };
    this.__record(island, "expr", "HTQRT((HTQRT mod c1), EMPTY)", "0x0D3E");
    return this.trace;
  }

  island_294() {
    const island = { index: 294, start: "0x0D3F", end: "0x0D42" };
    this.__record(island, "jump", "jump 0x0D60", "0x0D3F");
    return this.trace;
  }

  island_295() {
    const island = { index: 295, start: "0x0D42", end: "0x0D4D" };
    this.__record(island, "branch", "if not (raceType = HT) then goto 0x0D60", "0x0D49");
    return this.trace;
  }

  island_296() {
    const island = { index: 296, start: "0x0D4D", end: "0x0D5D" };
    this.__record(island, "expr", "HTRT((HTRT mod c1), EMPTY)", "0x0D5C");
    return this.trace;
  }

  island_297() {
    const island = { index: 297, start: "0x0D5D", end: "0x0D60" };
    this.__record(island, "stackTail", "sprite", "0x0D60");
    return this.trace;
  }

  island_298() {
    const island = { index: 298, start: "0x0D60", end: "0x0D75" };
    this.__record(island, "expr", "runEngineSetLightOnCB(p, red)", "0x0D74");
    this.__record(island, "stackTail", "implicit_callee_0x0D64(flashSP)", "0x0D75");
    return this.trace;
  }

  island_299() {
    const island = { index: 299, start: "0x0D75", end: "0x0D78" };
    this.__record(island, "jump", "jump 0x0E78", "0x0D75");
    return this.trace;
  }

  island_300() {
    const island = { index: 300, start: "0x0D78", end: "0x0D81" };
    this.__record(island, "branch", "if not (badCounterRT > VOID) then jump 19", "0x0D7D");
    return this.trace;
  }

  island_301() {
    const island = { index: 301, start: "0x0D81", end: "0x0D91" };
    this.__record(island, "assign", "c1_25 = lagTimeAddition(badCounterRT)", "0x0D8D");
    return this.trace;
  }

  island_302() {
    const island = { index: 302, start: "0x0D91", end: "0x0D9C" };
    this.__record(island, "branch", "if not (raceType = KOTH) then jump 36", "0x0D98");
    return this.trace;
  }

  island_303() {
    const island = { index: 303, start: "0x0D9C", end: "0x0DAF" };
    this.__record(island, "jump", "jump 0x1E56", "0x0DAC");
    this.__record(island, "stackTail", "KRT | (hp - timeGreen) | 1.6693", "0x0DAF");
    return this.trace;
  }

  island_304() {
    const island = { index: 304, start: "0x0DAF", end: "0x0DBA" };
    this.__record(island, "expr", "implicit_callee_0x0DB6((implicit_lhs_0x0DB1 + (implicit_lhs_0x0DB0 + implicit_rhs_0x0DB0)), guid)", "0x0DB9");
    return this.trace;
  }

  island_305() {
    const island = { index: 305, start: "0x0DBA", end: "0x0DBD" };
    this.__record(island, "jump", "jump 0x0E78", "0x0DBA");
    return this.trace;
  }

  island_306() {
    const island = { index: 306, start: "0x0DBD", end: "0x0DC8" };
    this.__record(island, "branch", "if not (raceType = QM) then jump 36", "0x0DC4");
    return this.trace;
  }

  island_307() {
    const island = { index: 307, start: "0x0DC8", end: "0x0DDB" };
    this.__record(island, "jump", "jump 0x1E56", "0x0DD8");
    this.__record(island, "stackTail", "RRT | (hp - timeGreen) | 1.6693", "0x0DDB");
    return this.trace;
  }

  island_308() {
    const island = { index: 308, start: "0x0DDB", end: "0x0DE6" };
    this.__record(island, "expr", "implicit_callee_0x0DE2((implicit_lhs_0x0DDD + (implicit_lhs_0x0DDC + implicit_rhs_0x0DDC)), guid)", "0x0DE5");
    return this.trace;
  }

  island_309() {
    const island = { index: 309, start: "0x0DE6", end: "0x0DE9" };
    this.__record(island, "jump", "jump 0x0E78", "0x0DE6");
    return this.trace;
  }

  island_310() {
    const island = { index: 310, start: "0x0DE9", end: "0x0DFF" };
    this.__record(island, "branch", "if not (raceType = TEAMRIVAL) then jump 36", "0x0DFB");
    this.__record(island, "stackTail", "(raceType = RIVAL)", "0x0DFF");
    return this.trace;
  }

  island_311() {
    const island = { index: 311, start: "0x0DFF", end: "0x0E12" };
    this.__record(island, "jump", "jump 0x1E56", "0x0E0F");
    this.__record(island, "stackTail", "RIVRT | (hp - timeGreen) | 1.6693", "0x0E12");
    return this.trace;
  }

  island_312() {
    const island = { index: 312, start: "0x0E12", end: "0x0E1D" };
    this.__record(island, "expr", "implicit_callee_0x0E19((implicit_lhs_0x0E14 + (implicit_lhs_0x0E13 + implicit_rhs_0x0E13)), guid)", "0x0E1C");
    return this.trace;
  }

  island_313() {
    const island = { index: 313, start: "0x0E1D", end: "0x0E20" };
    this.__record(island, "jump", "jump 0x0E78", "0x0E1D");
    return this.trace;
  }

  island_314() {
    const island = { index: 314, start: "0x0E20", end: "0x0E2B" };
    this.__record(island, "branch", "if not (raceType = HTQ) then jump 36", "0x0E27");
    return this.trace;
  }

  island_315() {
    const island = { index: 315, start: "0x0E2B", end: "0x0E3E" };
    this.__record(island, "jump", "jump 0x1E56", "0x0E3B");
    this.__record(island, "stackTail", "HTQRT | (hp - timeGreen) | 1.6693", "0x0E3E");
    return this.trace;
  }

  island_316() {
    const island = { index: 316, start: "0x0E3E", end: "0x0E49" };
    this.__record(island, "expr", "implicit_callee_0x0E45((implicit_lhs_0x0E40 + (implicit_lhs_0x0E3F + implicit_rhs_0x0E3F)), guid)", "0x0E48");
    return this.trace;
  }

  island_317() {
    const island = { index: 317, start: "0x0E49", end: "0x0E4C" };
    this.__record(island, "jump", "jump 0x0E78", "0x0E49");
    return this.trace;
  }

  island_318() {
    const island = { index: 318, start: "0x0E4C", end: "0x0E57" };
    this.__record(island, "branch", "if not (raceType = HT) then goto 0x0E78", "0x0E53");
    return this.trace;
  }

  island_319() {
    const island = { index: 319, start: "0x0E57", end: "0x0E6A" };
    this.__record(island, "jump", "jump 0x1E56", "0x0E67");
    this.__record(island, "stackTail", "HTRT | (hp - timeGreen) | 1.6693", "0x0E6A");
    return this.trace;
  }

  island_320() {
    const island = { index: 320, start: "0x0E6A", end: "0x0E75" };
    this.__record(island, "expr", "implicit_callee_0x0E71((implicit_lhs_0x0E6C + (implicit_lhs_0x0E6B + implicit_rhs_0x0E6B)), guid)", "0x0E74");
    return this.trace;
  }

  island_321() {
    const island = { index: 321, start: "0x0E75", end: "0x0E78" };
    this.__record(island, "stackTail", "sprite", "0x0E78");
    return this.trace;
  }

  island_322() {
    const island = { index: 322, start: "0x0E78", end: "0x0E99" };
    this.__record(island, "jump", "jump 0x1D3A", "0x0E96");
    this.__record(island, "stackTail", "implicit_callee_0x0E7C(flashSP) | runEngineSetMyRTCB | Math | floor | (rt + c1_25) | 1.6693", "0x0E99");
    return this.trace;
  }

  island_323() {
    const island = { index: 323, start: "0x0E99", end: "0x0EA4" };
    this.__record(island, "expr", "implicit_callee_0x0EA0((implicit_lhs_0x0E9F / c1000))", "0x0EA3");
    return this.trace;
  }

  island_324() {
    const island = { index: 324, start: "0x0EA4", end: "0x0EA7" };
    this.__record(island, "jump", "jump 0x002E", "0x0EA4");
    return this.trace;
  }

  island_325() {
    const island = { index: 325, start: "0x0EA7", end: "0x0EB3" };
    this.__record(island, "branch", "if not (theActualTime > lagThreshold) then goto 0x0014", "0x0EAF");
    return this.trace;
  }

  island_326() {
    const island = { index: 326, start: "0x0EB3", end: "0x0EC1" };
    this.__record(island, "assign", "badCounterET = (badCounterET + theActualTime)", "0x0EBD");
    return this.trace;
  }

  island_327() {
    const island = { index: 327, start: "0x0EC1", end: "0x0EC4" };
    this.__record(island, "jump", "jump 17", "0x0EC1");
    return this.trace;
  }

  island_328() {
    const island = { index: 328, start: "0x0EC4", end: "0x0ED2" };
    this.__record(island, "assign", "goodCounterET = (goodCounterET + theActualTime)", "0x0ECE");
    return this.trace;
  }

  island_329() {
    const island = { index: 329, start: "0x0ED2", end: "0x0EDE" };
    this.__record(island, "branch", "if not (s >= c1320) then jump 1704", "0x0EDA");
    return this.trace;
  }

  island_330() {
    const island = { index: 330, start: "0x0EDE", end: "0x0EE9" };
    this.__record(island, "branch", "if not (et = undefined) then goto 0x1583", "0x0EE5");
    return this.trace;
  }

  island_331() {
    const island = { index: 331, start: "0x0EE9", end: "0x0EF3" };
    this.__record(island, "assign", "hp = milliseconds", "0x0EEF");
    this.__record(island, "expr", "_system", "0x0EF2");
    return this.trace;
  }

  island_332() {
    const island = { index: 332, start: "0x0EF3", end: "0x0F03" };
    this.__record(island, "jump", "jump 7734", "0x0F00");
    this.__record(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x0F03");
    return this.trace;
  }

  island_333() {
    const island = { index: 333, start: "0x0F03", end: "0x0F23" };
    this.__record(island, "marker", "0x82 id_20801", "0x0F04");
    this.__record(island, "assign", "ts = (floor((mph * c100)) / c100)", "0x0F1F");
    this.__record(island, "expr", "Math", "0x0F22");
    return this.trace;
  }

  island_334() {
    const island = { index: 334, start: "0x0F23", end: "0x0F49" };
    this.__record(island, "assign", "c10000 = (floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x0F45");
    this.__record(island, "expr", "Math", "0x0F48");
    return this.trace;
  }

  island_335() {
    const island = { index: 335, start: "0x0F49", end: "0x0F6F" };
    this.__record(island, "assign", "c2 = (floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x0F6B");
    this.__record(island, "expr", "Math", "0x0F6E");
    return this.trace;
  }

  island_336() {
    const island = { index: 336, start: "0x0F6F", end: "0x0F95" };
    this.__record(island, "assign", "sprite = (floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100)", "0x0F91");
    this.__record(island, "expr", "Math", "0x0F94");
    return this.trace;
  }

  island_337() {
    const island = { index: 337, start: "0x0F95", end: "0x0FB6" };
    this.__record(island, "assign", "flashSP = (floor(((headGasketDamage / partBreakPoint) * c10000)) / c100)", "0x0FB2");
    this.__record(island, "expr", "Math", "0x0FB5");
    return this.trace;
  }

  island_338() {
    const island = { index: 338, start: "0x0FB6", end: "0x0FD7" };
    this.__record(island, "assign", "runEngineNOSCB = (floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100)", "0x0FD3");
    this.__record(island, "expr", "Math", "0x0FD6");
    return this.trace;
  }

  island_339() {
    const island = { index: 339, start: "0x0FD7", end: "0x0FF3" };
    this.__record(island, "assign", "nitrousTankSize = (floor((oilDamage * c10000)) / c100)", "0x0FEF");
    this.__record(island, "expr", "Math", "0x0FF2");
    return this.trace;
  }

  island_340() {
    const island = { index: 340, start: "0x0FF3", end: "0x100F" };
    this.__record(island, "assign", "c100 = (floor((oilFilterDamage * c10000)) / c100)", "0x100B");
    this.__record(island, "expr", "Math", "0x100E");
    return this.trace;
  }

  island_341() {
    const island = { index: 341, start: "0x100F", end: "0x102B" };
    this.__record(island, "assign", "revLimiter = (floor((coolantDamage * c10000)) / c100)", "0x1027");
    this.__record(island, "expr", "Math", "0x102A");
    return this.trace;
  }

  island_342() {
    const island = { index: 342, start: "0x102B", end: "0x1047" };
    this.__record(island, "assign", "c200 = (floor((nitrousRemaining * c100)) / c100)", "0x1043");
    this.__record(island, "expr", "Math", "0x1046");
    return this.trace;
  }

  island_343() {
    const island = { index: 343, start: "0x1047", end: "0x1063" };
    this.__record(island, "assign", "tqFlyFactor = (floor((raceGas * c100)) / c100)", "0x105F");
    this.__record(island, "expr", "Math", "0x1062");
    return this.trace;
  }

  island_344() {
    const island = { index: 344, start: "0x1063", end: "0x106E" };
    this.__record(island, "branch", "if not (c10000 > c100) then goto 0x1079", "0x106A");
    return this.trace;
  }

  island_345() {
    const island = { index: 345, start: "0x106E", end: "0x1076" };
    this.__record(island, "assign", "c10000 = c100", "0x1072");
    return this.trace;
  }

  island_346() {
    const island = { index: 346, start: "0x1076", end: "0x1079" };
    this.__record(island, "stackTail", "c2", "0x1079");
    return this.trace;
  }

  island_347() {
    const island = { index: 347, start: "0x1079", end: "0x1081" };
    this.__record(island, "branch", "if not (implicit_lhs_0x107D > c100) then goto 0x108C", "0x107D");
    return this.trace;
  }

  island_348() {
    const island = { index: 348, start: "0x1081", end: "0x1089" };
    this.__record(island, "assign", "c2 = c100", "0x1085");
    return this.trace;
  }

  island_349() {
    const island = { index: 349, start: "0x1089", end: "0x108C" };
    this.__record(island, "stackTail", "sprite", "0x108C");
    return this.trace;
  }

  island_350() {
    const island = { index: 350, start: "0x108C", end: "0x1094" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1090 > c100) then goto 0x109F", "0x1090");
    return this.trace;
  }

  island_351() {
    const island = { index: 351, start: "0x1094", end: "0x109C" };
    this.__record(island, "assign", "sprite = c100", "0x1098");
    return this.trace;
  }

  island_352() {
    const island = { index: 352, start: "0x109C", end: "0x109F" };
    this.__record(island, "stackTail", "flashSP", "0x109F");
    return this.trace;
  }

  island_353() {
    const island = { index: 353, start: "0x109F", end: "0x10A7" };
    this.__record(island, "branch", "if not (implicit_lhs_0x10A3 > c100) then goto 0x10B2", "0x10A3");
    return this.trace;
  }

  island_354() {
    const island = { index: 354, start: "0x10A7", end: "0x10AF" };
    this.__record(island, "assign", "flashSP = c100", "0x10AB");
    return this.trace;
  }

  island_355() {
    const island = { index: 355, start: "0x10AF", end: "0x10B2" };
    this.__record(island, "stackTail", "runEngineNOSCB", "0x10B2");
    return this.trace;
  }

  island_356() {
    const island = { index: 356, start: "0x10B2", end: "0x10BA" };
    this.__record(island, "branch", "if not (implicit_lhs_0x10B6 > c100) then goto 0x10C5", "0x10B6");
    return this.trace;
  }

  island_357() {
    const island = { index: 357, start: "0x10BA", end: "0x10C2" };
    this.__record(island, "assign", "runEngineNOSCB = c100", "0x10BE");
    return this.trace;
  }

  island_358() {
    const island = { index: 358, start: "0x10C2", end: "0x10C5" };
    this.__record(island, "stackTail", "nitrousTankSize", "0x10C5");
    return this.trace;
  }

  island_359() {
    const island = { index: 359, start: "0x10C5", end: "0x10CD" };
    this.__record(island, "branch", "if not (implicit_lhs_0x10C9 > c100) then goto 0x10D8", "0x10C9");
    return this.trace;
  }

  island_360() {
    const island = { index: 360, start: "0x10CD", end: "0x10D5" };
    this.__record(island, "assign", "nitrousTankSize = c100", "0x10D1");
    return this.trace;
  }

  island_361() {
    const island = { index: 361, start: "0x10D5", end: "0x10D8" };
    this.__record(island, "stackTail", "c100", "0x10D8");
    return this.trace;
  }

  island_362() {
    const island = { index: 362, start: "0x10D8", end: "0x10E0" };
    this.__record(island, "branch", "if not (implicit_lhs_0x10DC > c100) then goto 0x10EB", "0x10DC");
    return this.trace;
  }

  island_363() {
    const island = { index: 363, start: "0x10E0", end: "0x10E8" };
    this.__record(island, "assign", "c100 = c100", "0x10E4");
    return this.trace;
  }

  island_364() {
    const island = { index: 364, start: "0x10E8", end: "0x10EB" };
    this.__record(island, "stackTail", "revLimiter", "0x10EB");
    return this.trace;
  }

  island_365() {
    const island = { index: 365, start: "0x10EB", end: "0x10F3" };
    this.__record(island, "branch", "if not (implicit_lhs_0x10EF > c100) then goto 0x10FE", "0x10EF");
    return this.trace;
  }

  island_366() {
    const island = { index: 366, start: "0x10F3", end: "0x10FB" };
    this.__record(island, "assign", "revLimiter = c100", "0x10F7");
    return this.trace;
  }

  island_367() {
    const island = { index: 367, start: "0x10FB", end: "0x10FE" };
    this.__record(island, "stackTail", "c200", "0x10FE");
    return this.trace;
  }

  island_368() {
    const island = { index: 368, start: "0x10FE", end: "0x1106" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1102 > c100) then goto 0x1111", "0x1102");
    return this.trace;
  }

  island_369() {
    const island = { index: 369, start: "0x1106", end: "0x110E" };
    this.__record(island, "assign", "c200 = c100", "0x110A");
    return this.trace;
  }

  island_370() {
    const island = { index: 370, start: "0x110E", end: "0x1111" };
    this.__record(island, "stackTail", "tqFlyFactor", "0x1111");
    return this.trace;
  }

  island_371() {
    const island = { index: 371, start: "0x1111", end: "0x1119" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1115 > c100) then jump 11", "0x1115");
    return this.trace;
  }

  island_372() {
    const island = { index: 372, start: "0x1119", end: "0x1121" };
    this.__record(island, "assign", "tqFlyFactor = c100", "0x111D");
    return this.trace;
  }

  island_373() {
    const island = { index: 373, start: "0x1121", end: "0x112C" };
    this.__record(island, "branch", "if not (raceType = KOTH) then goto 0x0088", "0x1128");
    return this.trace;
  }

  island_374() {
    const island = { index: 374, start: "0x112C", end: "0x1139" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1135 <> (rt mod c1)) then goto 0x115C", "0x1135");
    return this.trace;
  }

  island_375() {
    const island = { index: 375, start: "0x1139", end: "0x1159" };
    this.__record(island, "marker", "0x04", "0x1157");
    this.__record(island, "expr", "1.4848", "0x1158");
    this.__record(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x1159");
    return this.trace;
  }

  island_376() {
    const island = { index: 376, start: "0x1159", end: "0x115C" };
    this.__record(island, "stackTail", "KDONE", "0x115C");
    return this.trace;
  }

  island_377() {
    const island = { index: 377, start: "0x115C", end: "0x116C" };
    this.__record(island, "jump", "jump 0x1E41", "0x1169");
    this.__record(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x116C");
    return this.trace;
  }

  island_378() {
    const island = { index: 378, start: "0x116C", end: "0x11AE" };
    this.__record(island, "expr", "implicit_callee_0x11AA(implicit_arg_0x11AA, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x11AD");
    return this.trace;
  }

  island_379() {
    const island = { index: 379, start: "0x11AE", end: "0x11B1" };
    this.__record(island, "jump", "jump 0x1583", "0x11AE");
    return this.trace;
  }

  island_380() {
    const island = { index: 380, start: "0x11B1", end: "0x11BC" };
    this.__record(island, "branch", "if not (raceType = QM) then goto 0x007C", "0x11B8");
    return this.trace;
  }

  island_381() {
    const island = { index: 381, start: "0x11BC", end: "0x11C9" };
    this.__record(island, "branch", "if not (implicit_lhs_0x11C5 <> (rt mod c1)) then goto 0x11E0", "0x11C5");
    return this.trace;
  }

  island_382() {
    const island = { index: 382, start: "0x11C9", end: "0x11DD" };
    this.__record(island, "expr", "RINT(s, carV, carAccel)", "0x11DC");
    return this.trace;
  }

  island_383() {
    const island = { index: 383, start: "0x11DD", end: "0x11E0" };
    this.__record(island, "stackTail", "RDONE", "0x11E0");
    return this.trace;
  }

  island_384() {
    const island = { index: 384, start: "0x11E0", end: "0x11F0" };
    this.__record(island, "jump", "jump 0x1E41", "0x11ED");
    this.__record(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x11F0");
    return this.trace;
  }

  island_385() {
    const island = { index: 385, start: "0x11F0", end: "0x1232" };
    this.__record(island, "expr", "implicit_callee_0x122E(implicit_arg_0x122E, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x1231");
    return this.trace;
  }

  island_386() {
    const island = { index: 386, start: "0x1232", end: "0x1235" };
    this.__record(island, "jump", "jump 0x1583", "0x1232");
    return this.trace;
  }

  island_387() {
    const island = { index: 387, start: "0x1235", end: "0x124B" };
    this.__record(island, "branch", "if not (raceType = TEAMRIVAL) then jump 190", "0x1247");
    this.__record(island, "stackTail", "(raceType = RIVAL)", "0x124B");
    return this.trace;
  }

  island_388() {
    const island = { index: 388, start: "0x124B", end: "0x1258" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1254 <> (rt mod c1)) then goto 0x127B", "0x1254");
    return this.trace;
  }

  island_389() {
    const island = { index: 389, start: "0x1258", end: "0x1278" };
    this.__record(island, "marker", "0x04", "0x1276");
    this.__record(island, "expr", "1.4848", "0x1277");
    this.__record(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x1278");
    return this.trace;
  }

  island_390() {
    const island = { index: 390, start: "0x1278", end: "0x127B" };
    this.__record(island, "stackTail", "Math", "0x127B");
    return this.trace;
  }

  island_391() {
    const island = { index: 391, start: "0x127B", end: "0x129E" };
    this.__record(island, "assign", "gr = (floor((((beforePistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x129A");
    return this.trace;
  }

  island_392() {
    const island = { index: 392, start: "0x129E", end: "0x12A6" };
    this.__record(island, "assign", "thePD = c10000", "0x12A2");
    return this.trace;
  }

  island_393() {
    const island = { index: 393, start: "0x12A6", end: "0x12AE" };
    this.__record(island, "assign", "theBPD = gr", "0x12AA");
    return this.trace;
  }

  island_394() {
    const island = { index: 394, start: "0x12AE", end: "0x12C1" };
    this.__record(island, "jump", "jump 0x1E41", "0x12BE");
    this.__record(island, "stackTail", "RIVDONE | (hp - timeStartLine) | 1.6693", "0x12C1");
    return this.trace;
  }

  island_395() {
    const island = { index: 395, start: "0x12C1", end: "0x1303" };
    this.__record(island, "expr", "implicit_callee_0x12FF(implicit_arg_0x12FF, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x1302");
    return this.trace;
  }

  island_396() {
    const island = { index: 396, start: "0x1303", end: "0x1306" };
    this.__record(island, "jump", "jump 0x1583", "0x1303");
    return this.trace;
  }

  island_397() {
    const island = { index: 397, start: "0x1306", end: "0x1311" };
    this.__record(island, "branch", "if not (raceType = CT) then jump 306", "0x130D");
    return this.trace;
  }

  island_398() {
    const island = { index: 398, start: "0x1311", end: "0x132B" };
    this.__record(island, "expr", "ctFinishCB(et, ts)", "0x132A");
    this.__record(island, "stackTail", "sprite(flashSP)", "0x132B");
    return this.trace;
  }

  island_399() {
    const island = { index: 399, start: "0x132B", end: "0x1344" };
    this.__record(island, "jump", "jump 0x1E83", "0x1341");
    this.__record(island, "stackTail", "executeCall | ctst | \"et=\" | (hp - timeStartLine) | 1.6693", "0x1344");
    return this.trace;
  }

  island_400() {
    const island = { index: 400, start: "0x1344", end: "0x143D" };
    this.__record(island, "expr", "((CheckProcesses + decrypt(_global(cp))) + \"&cw=\")(((CheckWindows + decrypt(_global(cw))) + \"&cwc=\"), (CheckWindowsClass + decrypt(_global(cwc))))", "0x143C");
    this.__record(island, "stackTail", "((((((((((((((((((((((((((((((((((((((((implicit_lhs_0x1344 + implicit_rhs_0x1344) + \"&rt=\") + rt) + \"&ts=\") + ts) + \"&pd=\") + c10000) + \"&vd=\") + sprite) + \"&rd=\") + c2) + \"&hd=\") + flashSP) + \"&bd=\") + runEngineNOSCB) + \"&od=\") + nitrousTankSize) + \"&fd=\") + c100) + \"&cd=\") + revLimiter) + \"&nr=\") + c200) + \"&rg=\") + tqFlyFactor) + \"&m=\") + createMd5Hash(1)) + \"&gr=\") + goodCounterRT) + \"&br=\") + badCounterRT) + \"&ge=\") + goodCounterET) + \"&be=\") + badCounterET) + \"&ce=\") + isCheatEngineRunning()) + \"&f=\") + avgFps) + \"&cp=\")", "0x143D");
    return this.trace;
  }

  island_401() {
    const island = { index: 401, start: "0x143D", end: "0x1440" };
    this.__record(island, "jump", "jump 0x1583", "0x143D");
    return this.trace;
  }

  island_402() {
    const island = { index: 402, start: "0x1440", end: "0x144B" };
    this.__record(island, "branch", "if not (raceType = CTQ) then goto 0x0020", "0x1447");
    return this.trace;
  }

  island_403() {
    const island = { index: 403, start: "0x144B", end: "0x1465" };
    this.__record(island, "expr", "ctFinishCB(et, ts)", "0x1464");
    this.__record(island, "stackTail", "sprite(flashSP)", "0x1465");
    return this.trace;
  }

  island_404() {
    const island = { index: 404, start: "0x1465", end: "0x1468" };
    this.__record(island, "jump", "jump 0x1583", "0x1465");
    return this.trace;
  }

  island_405() {
    const island = { index: 405, start: "0x1468", end: "0x1473" };
    this.__record(island, "branch", "if not (raceType = P) then goto 0x0020", "0x146F");
    return this.trace;
  }

  island_406() {
    const island = { index: 406, start: "0x1473", end: "0x148D" };
    this.__record(island, "expr", "practiceFinishCB(et, ts)", "0x148C");
    this.__record(island, "stackTail", "sprite(flashSP)", "0x148D");
    return this.trace;
  }

  island_407() {
    const island = { index: 407, start: "0x148D", end: "0x1490" };
    this.__record(island, "jump", "jump 0x1583", "0x148D");
    return this.trace;
  }

  island_408() {
    const island = { index: 408, start: "0x1490", end: "0x149B" };
    this.__record(island, "branch", "if not (raceType = HTQ) then jump 91", "0x1497");
    return this.trace;
  }

  island_409() {
    const island = { index: 409, start: "0x149B", end: "0x14AE" };
    this.__record(island, "jump", "jump 0x1E41", "0x14AB");
    this.__record(island, "stackTail", "HTQD | (hp - timeStartLine) | 1.6693", "0x14AE");
    return this.trace;
  }

  island_410() {
    const island = { index: 410, start: "0x14AE", end: "0x14F0" };
    this.__record(island, "expr", "implicit_callee_0x14EC(implicit_arg_0x14EC, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x14EF");
    return this.trace;
  }

  island_411() {
    const island = { index: 411, start: "0x14F0", end: "0x14F3" };
    this.__record(island, "jump", "jump 0x1583", "0x14F0");
    return this.trace;
  }

  island_412() {
    const island = { index: 412, start: "0x14F3", end: "0x14FE" };
    this.__record(island, "branch", "if not (raceType = HT) then goto 0x1583", "0x14FA");
    return this.trace;
  }

  island_413() {
    const island = { index: 413, start: "0x14FE", end: "0x150B" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1507 <> (rt mod c1)) then goto 0x152E", "0x1507");
    return this.trace;
  }

  island_414() {
    const island = { index: 414, start: "0x150B", end: "0x152B" };
    this.__record(island, "marker", "0x04", "0x1529");
    this.__record(island, "expr", "1.4848", "0x152A");
    this.__record(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x152B");
    return this.trace;
  }

  island_415() {
    const island = { index: 415, start: "0x152B", end: "0x152E" };
    this.__record(island, "stackTail", "HTD", "0x152E");
    return this.trace;
  }

  island_416() {
    const island = { index: 416, start: "0x152E", end: "0x153E" };
    this.__record(island, "jump", "jump 0x1E41", "0x153B");
    this.__record(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x153E");
    return this.trace;
  }

  island_417() {
    const island = { index: 417, start: "0x153E", end: "0x1580" };
    this.__record(island, "expr", "implicit_callee_0x157C(implicit_arg_0x157C, ts, c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1), goodCounterRT, badCounterRT, goodCounterET, badCounterET, avgFps)", "0x157F");
    return this.trace;
  }

  island_418() {
    const island = { index: 418, start: "0x1580", end: "0x1583" };
    this.__record(island, "jump", "jump 0x028C", "0x1580");
    return this.trace;
  }

  island_419() {
    const island = { index: 419, start: "0x1583", end: "0x1597" };
    this.__record(island, "jump", "branch 632", "0x1594");
    this.__record(island, "stackTail", "((s >= c760) and isMidMd5sent)", "0x1597");
    return this.trace;
  }

  island_420() {
    const island = { index: 420, start: "0x1597", end: "0x159D" };
    this.__record(island, "assign", "isMidMd5sent = 1", "0x1599");
    return this.trace;
  }

  island_421() {
    const island = { index: 421, start: "0x159D", end: "0x15DF" };
    this.__record(island, "branch", "if not (raceType = HT) then jump 560", "0x15DB");
    this.__record(island, "stackTail", "implicit_object_0x15A7[(raceType = KOTH)] | (((raceType = QM) or (raceType = RIVAL)) > (raceType = TEAMRIVAL)) | (raceType = HTQ)", "0x15DF");
    return this.trace;
  }

  island_422() {
    const island = { index: 422, start: "0x15DF", end: "0x1605" };
    this.__record(island, "assign", "c10000 = (floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x1601");
    this.__record(island, "expr", "Math", "0x1604");
    return this.trace;
  }

  island_423() {
    const island = { index: 423, start: "0x1605", end: "0x162B" };
    this.__record(island, "assign", "c2 = (floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x1627");
    this.__record(island, "expr", "Math", "0x162A");
    return this.trace;
  }

  island_424() {
    const island = { index: 424, start: "0x162B", end: "0x1651" };
    this.__record(island, "assign", "sprite = (floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100)", "0x164D");
    this.__record(island, "expr", "Math", "0x1650");
    return this.trace;
  }

  island_425() {
    const island = { index: 425, start: "0x1651", end: "0x1672" };
    this.__record(island, "assign", "flashSP = (floor(((headGasketDamage / partBreakPoint) * c10000)) / c100)", "0x166E");
    this.__record(island, "expr", "Math", "0x1671");
    return this.trace;
  }

  island_426() {
    const island = { index: 426, start: "0x1672", end: "0x1693" };
    this.__record(island, "assign", "runEngineNOSCB = (floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100)", "0x168F");
    this.__record(island, "expr", "Math", "0x1692");
    return this.trace;
  }

  island_427() {
    const island = { index: 427, start: "0x1693", end: "0x16AF" };
    this.__record(island, "assign", "nitrousTankSize = (floor((oilDamage * c10000)) / c100)", "0x16AB");
    this.__record(island, "expr", "Math", "0x16AE");
    return this.trace;
  }

  island_428() {
    const island = { index: 428, start: "0x16AF", end: "0x16CB" };
    this.__record(island, "assign", "c100 = (floor((oilFilterDamage * c10000)) / c100)", "0x16C7");
    this.__record(island, "expr", "Math", "0x16CA");
    return this.trace;
  }

  island_429() {
    const island = { index: 429, start: "0x16CB", end: "0x16E7" };
    this.__record(island, "assign", "revLimiter = (floor((coolantDamage * c10000)) / c100)", "0x16E3");
    this.__record(island, "expr", "Math", "0x16E6");
    return this.trace;
  }

  island_430() {
    const island = { index: 430, start: "0x16E7", end: "0x1703" };
    this.__record(island, "assign", "c200 = (floor((nitrousRemaining * c100)) / c100)", "0x16FF");
    this.__record(island, "expr", "Math", "0x1702");
    return this.trace;
  }

  island_431() {
    const island = { index: 431, start: "0x1703", end: "0x171F" };
    this.__record(island, "assign", "tqFlyFactor = (floor((raceGas * c100)) / c100)", "0x171B");
    this.__record(island, "expr", "Math", "0x171E");
    return this.trace;
  }

  island_432() {
    const island = { index: 432, start: "0x171F", end: "0x172A" };
    this.__record(island, "branch", "if not (c10000 > c100) then goto 0x1735", "0x1726");
    return this.trace;
  }

  island_433() {
    const island = { index: 433, start: "0x172A", end: "0x1732" };
    this.__record(island, "assign", "c10000 = c100", "0x172E");
    return this.trace;
  }

  island_434() {
    const island = { index: 434, start: "0x1732", end: "0x1735" };
    this.__record(island, "stackTail", "c2", "0x1735");
    return this.trace;
  }

  island_435() {
    const island = { index: 435, start: "0x1735", end: "0x173D" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1739 > c100) then goto 0x1748", "0x1739");
    return this.trace;
  }

  island_436() {
    const island = { index: 436, start: "0x173D", end: "0x1745" };
    this.__record(island, "assign", "c2 = c100", "0x1741");
    return this.trace;
  }

  island_437() {
    const island = { index: 437, start: "0x1745", end: "0x1748" };
    this.__record(island, "stackTail", "sprite", "0x1748");
    return this.trace;
  }

  island_438() {
    const island = { index: 438, start: "0x1748", end: "0x1750" };
    this.__record(island, "branch", "if not (implicit_lhs_0x174C > c100) then goto 0x175B", "0x174C");
    return this.trace;
  }

  island_439() {
    const island = { index: 439, start: "0x1750", end: "0x1758" };
    this.__record(island, "assign", "sprite = c100", "0x1754");
    return this.trace;
  }

  island_440() {
    const island = { index: 440, start: "0x1758", end: "0x175B" };
    this.__record(island, "stackTail", "flashSP", "0x175B");
    return this.trace;
  }

  island_441() {
    const island = { index: 441, start: "0x175B", end: "0x1763" };
    this.__record(island, "branch", "if not (implicit_lhs_0x175F > c100) then goto 0x176E", "0x175F");
    return this.trace;
  }

  island_442() {
    const island = { index: 442, start: "0x1763", end: "0x176B" };
    this.__record(island, "assign", "flashSP = c100", "0x1767");
    return this.trace;
  }

  island_443() {
    const island = { index: 443, start: "0x176B", end: "0x176E" };
    this.__record(island, "stackTail", "runEngineNOSCB", "0x176E");
    return this.trace;
  }

  island_444() {
    const island = { index: 444, start: "0x176E", end: "0x1776" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1772 > c100) then goto 0x1781", "0x1772");
    return this.trace;
  }

  island_445() {
    const island = { index: 445, start: "0x1776", end: "0x177E" };
    this.__record(island, "assign", "runEngineNOSCB = c100", "0x177A");
    return this.trace;
  }

  island_446() {
    const island = { index: 446, start: "0x177E", end: "0x1781" };
    this.__record(island, "stackTail", "nitrousTankSize", "0x1781");
    return this.trace;
  }

  island_447() {
    const island = { index: 447, start: "0x1781", end: "0x1789" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1785 > c100) then goto 0x1794", "0x1785");
    return this.trace;
  }

  island_448() {
    const island = { index: 448, start: "0x1789", end: "0x1791" };
    this.__record(island, "assign", "nitrousTankSize = c100", "0x178D");
    return this.trace;
  }

  island_449() {
    const island = { index: 449, start: "0x1791", end: "0x1794" };
    this.__record(island, "stackTail", "c100", "0x1794");
    return this.trace;
  }

  island_450() {
    const island = { index: 450, start: "0x1794", end: "0x179C" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1798 > c100) then goto 0x17A7", "0x1798");
    return this.trace;
  }

  island_451() {
    const island = { index: 451, start: "0x179C", end: "0x17A4" };
    this.__record(island, "assign", "c100 = c100", "0x17A0");
    return this.trace;
  }

  island_452() {
    const island = { index: 452, start: "0x17A4", end: "0x17A7" };
    this.__record(island, "stackTail", "revLimiter", "0x17A7");
    return this.trace;
  }

  island_453() {
    const island = { index: 453, start: "0x17A7", end: "0x17AF" };
    this.__record(island, "branch", "if not (implicit_lhs_0x17AB > c100) then goto 0x17BA", "0x17AB");
    return this.trace;
  }

  island_454() {
    const island = { index: 454, start: "0x17AF", end: "0x17B7" };
    this.__record(island, "assign", "revLimiter = c100", "0x17B3");
    return this.trace;
  }

  island_455() {
    const island = { index: 455, start: "0x17B7", end: "0x17BA" };
    this.__record(island, "stackTail", "c200", "0x17BA");
    return this.trace;
  }

  island_456() {
    const island = { index: 456, start: "0x17BA", end: "0x17C2" };
    this.__record(island, "branch", "if not (implicit_lhs_0x17BE > c100) then goto 0x17CD", "0x17BE");
    return this.trace;
  }

  island_457() {
    const island = { index: 457, start: "0x17C2", end: "0x17CA" };
    this.__record(island, "assign", "c200 = c100", "0x17C6");
    return this.trace;
  }

  island_458() {
    const island = { index: 458, start: "0x17CA", end: "0x17CD" };
    this.__record(island, "stackTail", "tqFlyFactor", "0x17CD");
    return this.trace;
  }

  island_459() {
    const island = { index: 459, start: "0x17CD", end: "0x17D5" };
    this.__record(island, "branch", "if not (implicit_lhs_0x17D1 > c100) then goto 0x17E0", "0x17D1");
    return this.trace;
  }

  island_460() {
    const island = { index: 460, start: "0x17D5", end: "0x17DD" };
    this.__record(island, "assign", "tqFlyFactor = c100", "0x17D9");
    return this.trace;
  }

  island_461() {
    const island = { index: 461, start: "0x17DD", end: "0x17E0" };
    this.__record(island, "stackTail", "M", "0x17E0");
    return this.trace;
  }

  island_462() {
    const island = { index: 462, start: "0x17E0", end: "0x180C" };
    this.__record(island, "expr", "implicit_callee_0x1808(c10000, sprite, c2, flashSP, runEngineNOSCB, nitrousTankSize, c100, revLimiter, c200, tqFlyFactor, createMd5Hash(1))", "0x180B");
    return this.trace;
  }

  island_463() {
    const island = { index: 463, start: "0x180C", end: "0x1819" };
    this.__record(island, "assign", "fgr = (boostPsi - stockBoost)", "0x1815");
    return this.trace;
  }

  island_464() {
    const island = { index: 464, start: "0x1819", end: "0x1821" };
    this.__record(island, "branch", "if not (fgr < VOID) then jump 8", "0x181D");
    return this.trace;
  }

  island_465() {
    const island = { index: 465, start: "0x1821", end: "0x1826" };
    this.__record(island, "assign", "fgr = VOID", "0x1822");
    return this.trace;
  }

  island_466() {
    const island = { index: 466, start: "0x1826", end: "0x183D" };
    this.__record(island, "assign", "dangerLevel = (dangerLevel + (fgr + (pistonCompressionLevel * c7)))", "0x1839");
    return this.trace;
  }

  island_467() {
    const island = { index: 467, start: "0x183D", end: "0x1849" };
    this.__record(island, "branch", "if not (pistonCompressionLevel < c0) then jump 25", "0x1845");
    return this.trace;
  }

  island_468() {
    const island = { index: 468, start: "0x1849", end: "0x185C" };
    this.__record(island, "assign", "engineDamageRisk = (engineDamageRisk + (pistonCompressionLevel * c1_8))", "0x1858");
    return this.trace;
  }

  island_469() {
    const island = { index: 469, start: "0x185C", end: "0x185F" };
    this.__record(island, "jump", "jump 0x001B", "0x185C");
    return this.trace;
  }

  island_470() {
    const island = { index: 470, start: "0x185F", end: "0x1877" };
    this.__record(island, "assign", "engineDamageRisk = (engineDamageRisk + ((boostPsi * pistonCompressionLevel) * c0_5))", "0x1873");
    return this.trace;
  }

  island_471() {
    const island = { index: 471, start: "0x1877", end: "0x1883" };
    this.__record(island, "branch", "if not (engineDamageRisk < c0) then jump 9", "0x187F");
    return this.trace;
  }

  island_472() {
    const island = { index: 472, start: "0x1883", end: "0x1889" };
    this.__record(island, "assign", "engineDamageRisk = VOID", "0x1885");
    return this.trace;
  }

  island_473() {
    const island = { index: 473, start: "0x1889", end: "0x189A" };
    this.__record(island, "branch", "if not (rpm > (stockRedLine * c1_15)) then goto 0x18B9", "0x1896");
    return this.trace;
  }

  island_474() {
    const island = { index: 474, start: "0x189A", end: "0x18A8" };
    this.__record(island, "assign", "dangerLevel = (dangerLevel * c2)", "0x18A4");
    return this.trace;
  }

  island_475() {
    const island = { index: 475, start: "0x18A8", end: "0x18B6" };
    this.__record(island, "assign", "engineDamageRisk = (engineDamageRisk * c80)", "0x18B2");
    return this.trace;
  }

  island_476() {
    const island = { index: 476, start: "0x18B6", end: "0x18B9" };
    this.__record(island, "stackTail", "timeFromLastFrame", "0x18B9");
    return this.trace;
  }

  island_477() {
    const island = { index: 477, start: "0x18B9", end: "0x18C7" };
    this.__record(island, "assign", "rpmGearConversion = ((implicit_lhs_0x18BD / c1_8) - avgDurability)", "0x18C3");
    return this.trace;
  }

  island_478() {
    const island = { index: 478, start: "0x18C7", end: "0x18D2" };
    this.__record(island, "branch", "if not (rpmGearConversion > c0) then jump 16", "0x18CE");
    return this.trace;
  }

  island_479() {
    const island = { index: 479, start: "0x18D2", end: "0x18DF" };
    this.__record(island, "assign", "dangerLevel = (dangerLevel + rpmGearConversion)", "0x18DB");
    return this.trace;
  }

  island_480() {
    const island = { index: 480, start: "0x18DF", end: "0x18EB" };
    this.__record(island, "branch", "if not (oilDurability > c0) then goto 0x005D", "0x18E7");
    return this.trace;
  }

  island_481() {
    const island = { index: 481, start: "0x18EB", end: "0x1914" };
    this.__record(island, "assign", "oilDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x1910");
    this.__record(island, "expr", "(oilDamage / ((c100 - oilDurability) ^ 1.6693))", "0x1913");
    return this.trace;
  }

  island_482() {
    const island = { index: 482, start: "0x1914", end: "0x1920" };
    this.__record(island, "branch", "if not (oilDamage >= c100) then jump 15", "0x191C");
    return this.trace;
  }

  island_483() {
    const island = { index: 483, start: "0x1920", end: "0x1929" };
    this.__record(island, "assign", "oilDamage = c100", "0x1925");
    return this.trace;
  }

  island_484() {
    const island = { index: 484, start: "0x1929", end: "0x192C" };
    this.__record(island, "jump", "jump 28", "0x1929");
    return this.trace;
  }

  island_485() {
    const island = { index: 485, start: "0x192C", end: "0x1945" };
    this.__record(island, "assign", "dangerLevel = (implicit_lhs_0x1940 * (dangerLevel / ((c100 - oilDurability) ^ 1.6693)))", "0x1941");
    return this.trace;
  }

  island_486() {
    const island = { index: 486, start: "0x1945", end: "0x194E" };
    this.__record(island, "assign", "beforeDangerLevel = dangerLevel", "0x194A");
    return this.trace;
  }

  island_487() {
    const island = { index: 487, start: "0x194E", end: "0x195A" };
    this.__record(island, "branch", "if not (radiatorDurability > c0) then jump 28", "0x1956");
    return this.trace;
  }

  island_488() {
    const island = { index: 488, start: "0x195A", end: "0x1973" };
    this.__record(island, "assign", "dangerLevel = (implicit_lhs_0x196E * (dangerLevel / ((c100 - radiatorDurability) ^ 1.6693)))", "0x196F");
    return this.trace;
  }

  island_489() {
    const island = { index: 489, start: "0x1973", end: "0x197F" };
    this.__record(island, "branch", "if not (oilFilterDurability > c0) then goto 0x005D", "0x197B");
    return this.trace;
  }

  island_490() {
    const island = { index: 490, start: "0x197F", end: "0x19A8" };
    this.__record(island, "assign", "oilFilterDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x19A4");
    this.__record(island, "expr", "(oilFilterDamage / ((c100 - oilFilterDurability) ^ 1.6693))", "0x19A7");
    return this.trace;
  }

  island_491() {
    const island = { index: 491, start: "0x19A8", end: "0x19B4" };
    this.__record(island, "branch", "if not (oilFilterDamage >= c100) then jump 15", "0x19B0");
    return this.trace;
  }

  island_492() {
    const island = { index: 492, start: "0x19B4", end: "0x19BD" };
    this.__record(island, "assign", "oilFilterDamage = c100", "0x19B9");
    return this.trace;
  }

  island_493() {
    const island = { index: 493, start: "0x19BD", end: "0x19C0" };
    this.__record(island, "jump", "jump 28", "0x19BD");
    return this.trace;
  }

  island_494() {
    const island = { index: 494, start: "0x19C0", end: "0x19D9" };
    this.__record(island, "assign", "dangerLevel = (implicit_lhs_0x19D4 * (dangerLevel / ((c100 - oilFilterDurability) ^ 1.6693)))", "0x19D5");
    return this.trace;
  }

  island_495() {
    const island = { index: 495, start: "0x19D9", end: "0x19E5" };
    this.__record(island, "branch", "if not (coolantDurability > c0) then goto 0x1A42", "0x19E1");
    return this.trace;
  }

  island_496() {
    const island = { index: 496, start: "0x19E5", end: "0x1A0E" };
    this.__record(island, "assign", "coolantDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x1A0A");
    this.__record(island, "expr", "(coolantDamage / ((c100 - coolantDurability) ^ 1.6693))", "0x1A0D");
    return this.trace;
  }

  island_497() {
    const island = { index: 497, start: "0x1A0E", end: "0x1A1A" };
    this.__record(island, "branch", "if not (coolantDamage >= c100) then jump 15", "0x1A16");
    return this.trace;
  }

  island_498() {
    const island = { index: 498, start: "0x1A1A", end: "0x1A23" };
    this.__record(island, "assign", "coolantDamage = c100", "0x1A1F");
    return this.trace;
  }

  island_499() {
    const island = { index: 499, start: "0x1A23", end: "0x1A26" };
    this.__record(island, "jump", "jump 0x1A42", "0x1A23");
    return this.trace;
  }

  island_500() {
    const island = { index: 500, start: "0x1A26", end: "0x1A3F" };
    this.__record(island, "assign", "dangerLevel = (implicit_lhs_0x1A3A * (dangerLevel / ((c100 - coolantDurability) ^ 1.6693)))", "0x1A3B");
    return this.trace;
  }

  island_501() {
    const island = { index: 501, start: "0x1A3F", end: "0x1A42" };
    this.__record(island, "stackTail", "r", "0x1A42");
    return this.trace;
  }

  island_502() {
    const island = { index: 502, start: "0x1A42", end: "0x1A43" };
    return this.trace;
  }

  island_503() {
    const island = { index: 503, start: "0x1A43", end: "0x1A47" };
    this.__record(island, "expr", "negTq", "0x1A46");
    return this.trace;
  }

  island_504() {
    const island = { index: 504, start: "0x1A47", end: "0x1A53" };
    this.__record(island, "branch", "if not (pistonDurability < dangerLevel) then jump 19", "0x1A4F");
    return this.trace;
  }

  island_505() {
    const island = { index: 505, start: "0x1A53", end: "0x1A60" };
    this.__record(island, "assign", "r = (dangerLevel * c0_95)", "0x1A5C");
    return this.trace;
  }

  island_506() {
    const island = { index: 506, start: "0x1A60", end: "0x1A63" };
    this.__record(island, "jump", "jump 16", "0x1A60");
    return this.trace;
  }

  island_507() {
    const island = { index: 507, start: "0x1A63", end: "0x1A70" };
    this.__record(island, "assign", "r = (pistonDurability * c0_95)", "0x1A6C");
    return this.trace;
  }

  island_508() {
    const island = { index: 508, start: "0x1A70", end: "0x1A82" };
    this.__record(island, "assign", "negTq = (implicit_lhs_0x1A7D / ((dangerLevel - r) * 1.6693))", "0x1A7E");
    return this.trace;
  }

  island_509() {
    const island = { index: 509, start: "0x1A82", end: "0x1A86" };
    this.__record(island, "expr", "c9", "0x1A85");
    return this.trace;
  }

  island_510() {
    const island = { index: 510, start: "0x1A86", end: "0x1A92" };
    this.__record(island, "branch", "if not (pistonDurability < beforeDangerLevel) then jump 19", "0x1A8E");
    return this.trace;
  }

  island_511() {
    const island = { index: 511, start: "0x1A92", end: "0x1A9F" };
    this.__record(island, "assign", "c9 = (beforeDangerLevel * c0_95)", "0x1A9B");
    return this.trace;
  }

  island_512() {
    const island = { index: 512, start: "0x1A9F", end: "0x1AA2" };
    this.__record(island, "jump", "jump 16", "0x1A9F");
    return this.trace;
  }

  island_513() {
    const island = { index: 513, start: "0x1AA2", end: "0x1AAF" };
    this.__record(island, "assign", "c9 = (pistonDurability * c0_95)", "0x1AAB");
    return this.trace;
  }

  island_514() {
    const island = { index: 514, start: "0x1AAF", end: "0x1AC1" };
    this.__record(island, "assign", "c299 = (implicit_lhs_0x1ABC / ((beforeDangerLevel - c9) * 1.6693))", "0x1ABD");
    return this.trace;
  }

  island_515() {
    const island = { index: 515, start: "0x1AC1", end: "0x1ACC" };
    this.__record(island, "branch", "if not (c299 < c0) then goto 0x1AD7", "0x1AC8");
    return this.trace;
  }

  island_516() {
    const island = { index: 516, start: "0x1ACC", end: "0x1AD4" };
    this.__record(island, "assign", "c299 = c0", "0x1AD0");
    return this.trace;
  }

  island_517() {
    const island = { index: 517, start: "0x1AD4", end: "0x1AD7" };
    this.__record(island, "stackTail", "negTq", "0x1AD7");
    return this.trace;
  }

  island_518() {
    const island = { index: 518, start: "0x1AD7", end: "0x1ADF" };
    this.__record(island, "branch", "if not (implicit_lhs_0x1ADB < c0) then jump 11", "0x1ADB");
    return this.trace;
  }

  island_519() {
    const island = { index: 519, start: "0x1ADF", end: "0x1AE7" };
    this.__record(island, "assign", "negTq = c0", "0x1AE3");
    return this.trace;
  }

  island_520() {
    const island = { index: 520, start: "0x1AE7", end: "0x1B07" };
    this.__record(island, "assign", "pistonDamage = (pistonDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1B03");
    return this.trace;
  }

  island_521() {
    const island = { index: 521, start: "0x1B07", end: "0x1B27" };
    this.__record(island, "assign", "beforePistonDamage = (beforePistonDamage + (((engineDamageRisk / c100) * c299) + (c299 * c0_05)))", "0x1B23");
    return this.trace;
  }

  island_522() {
    const island = { index: 522, start: "0x1B27", end: "0x1B3F" };
    this.__record(island, "assign", "pistonBroken = floor((pistonDamage / partBreakPoint))", "0x1B3B");
    this.__record(island, "expr", "Math", "0x1B3E");
    return this.trace;
  }

  island_523() {
    const island = { index: 523, start: "0x1B3F", end: "0x1B4B" };
    this.__record(island, "branch", "if not (pistonBroken > cylinderNumber) then jump 12", "0x1B47");
    return this.trace;
  }

  island_524() {
    const island = { index: 524, start: "0x1B4B", end: "0x1B54" };
    this.__record(island, "assign", "pistonBroken = cylinderNumber", "0x1B50");
    return this.trace;
  }

  island_525() {
    const island = { index: 525, start: "0x1B54", end: "0x1B60" };
    this.__record(island, "branch", "if not (rodDurability < dangerLevel) then jump 19", "0x1B5C");
    return this.trace;
  }

  island_526() {
    const island = { index: 526, start: "0x1B60", end: "0x1B6D" };
    this.__record(island, "assign", "r = (dangerLevel * c0_95)", "0x1B69");
    return this.trace;
  }

  island_527() {
    const island = { index: 527, start: "0x1B6D", end: "0x1B70" };
    this.__record(island, "jump", "jump 16", "0x1B6D");
    return this.trace;
  }

  island_528() {
    const island = { index: 528, start: "0x1B70", end: "0x1B7D" };
    this.__record(island, "assign", "r = (rodDurability * c0_95)", "0x1B79");
    return this.trace;
  }

  island_529() {
    const island = { index: 529, start: "0x1B7D", end: "0x1B8F" };
    this.__record(island, "assign", "negTq = (implicit_lhs_0x1B8A / ((dangerLevel - r) * 1.6693))", "0x1B8B");
    return this.trace;
  }

  island_530() {
    const island = { index: 530, start: "0x1B8F", end: "0x1B9A" };
    this.__record(island, "branch", "if not (negTq < c0) then jump 11", "0x1B96");
    return this.trace;
  }

  island_531() {
    const island = { index: 531, start: "0x1B9A", end: "0x1BA2" };
    this.__record(island, "assign", "negTq = c0", "0x1B9E");
    return this.trace;
  }

  island_532() {
    const island = { index: 532, start: "0x1BA2", end: "0x1BC2" };
    this.__record(island, "assign", "rodDamage = (rodDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1BBE");
    return this.trace;
  }

  island_533() {
    const island = { index: 533, start: "0x1BC2", end: "0x1BDA" };
    this.__record(island, "assign", "rodBroken = floor((rodDamage / partBreakPoint))", "0x1BD6");
    this.__record(island, "expr", "Math", "0x1BD9");
    return this.trace;
  }

  island_534() {
    const island = { index: 534, start: "0x1BDA", end: "0x1BE6" };
    this.__record(island, "branch", "if not (rodBroken > cylinderNumber) then jump 12", "0x1BE2");
    return this.trace;
  }

  island_535() {
    const island = { index: 535, start: "0x1BE6", end: "0x1BEF" };
    this.__record(island, "assign", "rodBroken = cylinderNumber", "0x1BEB");
    return this.trace;
  }

  island_536() {
    const island = { index: 536, start: "0x1BEF", end: "0x1BFB" };
    this.__record(island, "branch", "if not (valveDurability < dangerLevel) then jump 19", "0x1BF7");
    return this.trace;
  }

  island_537() {
    const island = { index: 537, start: "0x1BFB", end: "0x1C08" };
    this.__record(island, "assign", "r = (dangerLevel * c0_95)", "0x1C04");
    return this.trace;
  }

  island_538() {
    const island = { index: 538, start: "0x1C08", end: "0x1C0B" };
    this.__record(island, "jump", "jump 16", "0x1C08");
    return this.trace;
  }

  island_539() {
    const island = { index: 539, start: "0x1C0B", end: "0x1C18" };
    this.__record(island, "assign", "r = (valveDurability * c0_95)", "0x1C14");
    return this.trace;
  }

  island_540() {
    const island = { index: 540, start: "0x1C18", end: "0x1C2A" };
    this.__record(island, "assign", "negTq = (implicit_lhs_0x1C25 / ((dangerLevel - r) * 1.6693))", "0x1C26");
    return this.trace;
  }

  island_541() {
    const island = { index: 541, start: "0x1C2A", end: "0x1C35" };
    this.__record(island, "branch", "if not (negTq < c0) then jump 11", "0x1C31");
    return this.trace;
  }

  island_542() {
    const island = { index: 542, start: "0x1C35", end: "0x1C3D" };
    this.__record(island, "assign", "negTq = c0", "0x1C39");
    return this.trace;
  }

  island_543() {
    const island = { index: 543, start: "0x1C3D", end: "0x1C5D" };
    this.__record(island, "assign", "valveDamage = (valveDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1C59");
    return this.trace;
  }

  island_544() {
    const island = { index: 544, start: "0x1C5D", end: "0x1C75" };
    this.__record(island, "assign", "valveBroken = floor((valveDamage / partBreakPoint))", "0x1C71");
    this.__record(island, "expr", "Math", "0x1C74");
    return this.trace;
  }

  island_545() {
    const island = { index: 545, start: "0x1C75", end: "0x1C81" };
    this.__record(island, "branch", "if not (valveBroken > valveNumber) then jump 12", "0x1C7D");
    return this.trace;
  }

  island_546() {
    const island = { index: 546, start: "0x1C81", end: "0x1C8A" };
    this.__record(island, "assign", "valveBroken = valveNumber", "0x1C86");
    return this.trace;
  }

  island_547() {
    const island = { index: 547, start: "0x1C8A", end: "0x1C96" };
    this.__record(island, "branch", "if not (engineBlockDurability < dangerLevel) then jump 19", "0x1C92");
    return this.trace;
  }

  island_548() {
    const island = { index: 548, start: "0x1C96", end: "0x1CA3" };
    this.__record(island, "assign", "r = (dangerLevel * c0_95)", "0x1C9F");
    return this.trace;
  }

  island_549() {
    const island = { index: 549, start: "0x1CA3", end: "0x1CA6" };
    this.__record(island, "jump", "jump 16", "0x1CA3");
    return this.trace;
  }

  island_550() {
    const island = { index: 550, start: "0x1CA6", end: "0x1CB3" };
    this.__record(island, "assign", "r = (engineBlockDurability * c0_95)", "0x1CAF");
    return this.trace;
  }

  island_551() {
    const island = { index: 551, start: "0x1CB3", end: "0x1CC5" };
    this.__record(island, "assign", "negTq = (implicit_lhs_0x1CC0 / ((dangerLevel - r) * 1.6693))", "0x1CC1");
    return this.trace;
  }

  island_552() {
    const island = { index: 552, start: "0x1CC5", end: "0x1CD0" };
    this.__record(island, "branch", "if not (negTq < c0) then jump 11", "0x1CCC");
    return this.trace;
  }

  island_553() {
    const island = { index: 553, start: "0x1CD0", end: "0x1CD8" };
    this.__record(island, "assign", "negTq = c0", "0x1CD4");
    return this.trace;
  }

  island_554() {
    const island = { index: 554, start: "0x1CD8", end: "0x1CF8" };
    this.__record(island, "assign", "engineBlockDamage = (engineBlockDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1CF4");
    return this.trace;
  }

  island_555() {
    const island = { index: 555, start: "0x1CF8", end: "0x1D10" };
    this.__record(island, "assign", "engineBlockBroken = floor((engineBlockDamage / partBreakPoint))", "0x1D0C");
    this.__record(island, "expr", "Math", "0x1D0F");
    return this.trace;
  }

  island_556() {
    const island = { index: 556, start: "0x1D10", end: "0x1D1C" };
    this.__record(island, "branch", "if not (engineBlockBroken > c1) then jump 12", "0x1D18");
    return this.trace;
  }

  island_557() {
    const island = { index: 557, start: "0x1D1C", end: "0x1D25" };
    this.__record(island, "assign", "engineBlockBroken = c1", "0x1D21");
    return this.trace;
  }

  island_558() {
    const island = { index: 558, start: "0x1D25", end: "0x1D31" };
    this.__record(island, "branch", "if not (headGasketDurability < dangerLevel) then jump 19", "0x1D2D");
    return this.trace;
  }

  island_559() {
    const island = { index: 559, start: "0x1D31", end: "0x1D3A" };
    this.__record(island, "stackTail", "(dangerLevel * c0_95)", "0x1D3A");
    return this.trace;
  }

  island_560() {
    const island = { index: 560, start: "0x1D3A", end: "0x1D3E" };
    this.__record(island, "assign", "r = implicit_value_0x1D3A", "0x1D3A");
    return this.trace;
  }

  island_561() {
    const island = { index: 561, start: "0x1D3E", end: "0x1D41" };
    this.__record(island, "jump", "jump 16", "0x1D3E");
    return this.trace;
  }

  island_562() {
    const island = { index: 562, start: "0x1D41", end: "0x1D4E" };
    this.__record(island, "assign", "r = (headGasketDurability * c0_95)", "0x1D4A");
    return this.trace;
  }

  island_563() {
    const island = { index: 563, start: "0x1D4E", end: "0x1D60" };
    this.__record(island, "assign", "negTq = (implicit_lhs_0x1D5B / ((dangerLevel - r) * 1.6693))", "0x1D5C");
    return this.trace;
  }

  island_564() {
    const island = { index: 564, start: "0x1D60", end: "0x1D6B" };
    this.__record(island, "branch", "if not (negTq < c0) then jump 11", "0x1D67");
    return this.trace;
  }

  island_565() {
    const island = { index: 565, start: "0x1D6B", end: "0x1D73" };
    this.__record(island, "assign", "negTq = c0", "0x1D6F");
    return this.trace;
  }

  island_566() {
    const island = { index: 566, start: "0x1D73", end: "0x1D93" };
    this.__record(island, "assign", "headGasketDamage = (headGasketDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1D8F");
    return this.trace;
  }

  island_567() {
    const island = { index: 567, start: "0x1D93", end: "0x1DAB" };
    this.__record(island, "assign", "headGasketBroken = floor((headGasketDamage / partBreakPoint))", "0x1DA7");
    this.__record(island, "expr", "Math", "0x1DAA");
    return this.trace;
  }

  island_568() {
    const island = { index: 568, start: "0x1DAB", end: "0x1DB7" };
    this.__record(island, "branch", "if not (headGasketBroken > c1) then jump 12", "0x1DB3");
    return this.trace;
  }

  island_569() {
    const island = { index: 569, start: "0x1DB7", end: "0x1DC0" };
    this.__record(island, "assign", "headGasketBroken = c1", "0x1DBC");
    return this.trace;
  }

  island_570() {
    const island = { index: 570, start: "0x1DC0", end: "0x1E05" };
    this.__record(island, "assign", "engineDamage = ((((((pistonBroken / cylinderNumber) * c0_4) + ((valveBroken / valveNumber) * c0_2)) + ((rodBroken / cylinderNumber) * c0_1)) + (headGasketBroken * c0_1)) + (engineBlockBroken * c0_4))", "0x1E01");
    return this.trace;
  }

  island_571() {
    const island = { index: 571, start: "0x1E05", end: "0x1E11" };
    this.__record(island, "branch", "if not (engineDamage > c0_65) then jump 12", "0x1E0D");
    return this.trace;
  }

  island_572() {
    const island = { index: 572, start: "0x1E11", end: "0x1E1A" };
    this.__record(island, "assign", "engineDamage = c0_65", "0x1E16");
    return this.trace;
  }

  island_573() {
    const island = { index: 573, start: "0x1E1A", end: "0x1E2E" };
    this.__record(island, "branch", "if not (engineDamage > c0) then goto 0x001B", "0x1E2A");
    this.__record(island, "stackTail", "(implicit_lhs_0x1E1E and isEngineLightOn)", "0x1E2E");
    return this.trace;
  }

  island_574() {
    const island = { index: 574, start: "0x1E2E", end: "0x1E34" };
    this.__record(island, "assign", "isEngineLightOn = 1", "0x1E30");
    return this.trace;
  }

  island_575() {
    const island = { index: 575, start: "0x1E34", end: "0x1E41" };
    this.__record(island, "stackTail", "sprite(flashSP) | runEngineDamageLightCB", "0x1E41");
    return this.trace;
  }

  island_576() {
    const island = { index: 576, start: "0x1E41", end: "0x1E46" };
    this.__record(island, "expr", "implicit_callee_0x1E42()", "0x1E45");
    return this.trace;
  }

  island_577() {
    const island = { index: 577, start: "0x1E46", end: "0x1E4F" };
    this.__record(island, "branch", "if not (timeAnchor > VOID) then goto 0x1E83", "0x1E4B");
    return this.trace;
  }

  island_578() {
    const island = { index: 578, start: "0x1E4F", end: "0x1E56" };
    this.__record(island, "stackTail", "sprite | flashSP", "0x1E56");
    return this.trace;
  }

  island_579() {
    const island = { index: 579, start: "0x1E56", end: "0x1E7C" };
    this.__record(island, "expr", "1.4848", "0x1E7B");
    this.__record(island, "stackTail", "implicit_callee_0x1E56(implicit_arg_0x1E56) | runEngineCB | rpm | mph | s | boostPsi | _system | (milliseconds - timeAnchor)", "0x1E7C");
    return this.trace;
  }

  island_580() {
    const island = { index: 580, start: "0x1E7C", end: "0x1E7D" };
    return this.trace;
  }

  island_581() {
    const island = { index: 581, start: "0x1E7D", end: "0x1E80" };
    this.__record(island, "jump", "jump 0x0026", "0x1E7D");
    return this.trace;
  }

  island_582() {
    const island = { index: 582, start: "0x1E80", end: "0x1E83" };
    this.__record(island, "stackTail", "sprite", "0x1E83");
    return this.trace;
  }

  island_583() {
    const island = { index: 583, start: "0x1E83", end: "0x1E92" };
    this.__record(island, "stackTail", "implicit_callee_0x1E87(flashSP) | runEngineCB | rpm", "0x1E92");
    return this.trace;
  }

  island_584() {
    const island = { index: 584, start: "0x1E92", end: "0x1EA3" };
    this.__record(island, "expr", "implicit_callee_0x1E9F(implicit_arg_0x1E9F, mph, s, boostPsi, VOID)", "0x1EA2");
    return this.trace;
  }

}

/**
 * Block 8 promoted safe-island readable appendix.
 *
 * Contains only island lines that have zero unresolved opcodes and no
 * stack-hole expressions. This is still offset-preserving evidence, not
 * guessed behavior.
 */
// Lscr-102 block 8 promotion-safe island appendix.
// These entries contain no unresolved opcode and no stack-hole expression.

class Lscr102Block08PromotedSafe {
  constructor(host = {}) {
    this.host = host;
    this.trace = [];
  }

  __line(island, kind, value, offset) {
    this.trace.push({ island, kind, value, offset });
    return value;
  }

  runPromotedBlock08() {
    this.island_000();
    this.island_002();
    this.island_005();
    this.island_008();
    this.island_009();
    this.island_012();
    this.island_014();
    this.island_015();
    this.island_019();
    this.island_020();
    this.island_021();
    this.island_024();
    this.island_026();
    this.island_027();
    this.island_028();
    this.island_029();
    this.island_030();
    this.island_033();
    this.island_034();
    this.island_035();
    this.island_036();
    this.island_037();
    this.island_038();
    this.island_039();
    this.island_040();
    this.island_041();
    this.island_042();
    this.island_043();
    this.island_044();
    this.island_045();
    this.island_046();
    this.island_047();
    this.island_048();
    this.island_049();
    this.island_050();
    this.island_051();
    this.island_052();
    this.island_053();
    this.island_055();
    this.island_058();
    this.island_059();
    this.island_061();
    this.island_062();
    this.island_063();
    this.island_064();
    this.island_065();
    this.island_066();
    this.island_068();
    this.island_069();
    this.island_070();
    this.island_071();
    this.island_072();
    this.island_073();
    this.island_074();
    this.island_076();
    this.island_077();
    this.island_078();
    this.island_079();
    this.island_080();
    this.island_081();
    this.island_082();
    this.island_083();
    this.island_085();
    this.island_086();
    this.island_087();
    this.island_088();
    this.island_089();
    this.island_090();
    this.island_091();
    this.island_092();
    this.island_093();
    this.island_094();
    this.island_096();
    this.island_098();
    this.island_099();
    this.island_100();
    this.island_101();
    this.island_103();
    this.island_104();
    this.island_105();
    this.island_106();
    this.island_107();
    this.island_108();
    this.island_109();
    this.island_110();
    this.island_111();
    this.island_112();
    this.island_113();
    this.island_115();
    this.island_116();
    this.island_117();
    this.island_118();
    this.island_119();
    this.island_120();
    this.island_121();
    this.island_122();
    this.island_123();
    this.island_124();
    this.island_125();
    this.island_126();
    this.island_127();
    this.island_128();
    this.island_129();
    this.island_130();
    this.island_131();
    this.island_132();
    this.island_134();
    this.island_136();
    this.island_137();
    this.island_138();
    this.island_140();
    this.island_141();
    this.island_142();
    this.island_143();
    this.island_144();
    this.island_145();
    this.island_146();
    this.island_147();
    this.island_148();
    this.island_149();
    this.island_150();
    this.island_151();
    this.island_152();
    this.island_153();
    this.island_154();
    this.island_155();
    this.island_156();
    this.island_157();
    this.island_158();
    this.island_159();
    this.island_160();
    this.island_161();
    this.island_162();
    this.island_163();
    this.island_164();
    this.island_165();
    this.island_166();
    this.island_167();
    this.island_168();
    this.island_169();
    this.island_170();
    this.island_171();
    this.island_172();
    this.island_173();
    this.island_174();
    this.island_175();
    this.island_176();
    this.island_177();
    this.island_178();
    this.island_179();
    this.island_180();
    this.island_181();
    this.island_182();
    this.island_183();
    this.island_184();
    this.island_185();
    this.island_186();
    this.island_187();
    this.island_188();
    this.island_190();
    this.island_192();
    this.island_193();
    this.island_194();
    this.island_195();
    this.island_197();
    this.island_198();
    this.island_199();
    this.island_200();
    this.island_201();
    this.island_202();
    this.island_203();
    this.island_204();
    this.island_205();
    this.island_206();
    this.island_207();
    this.island_209();
    this.island_210();
    this.island_211();
    this.island_212();
    this.island_213();
    this.island_214();
    this.island_215();
    this.island_216();
    this.island_217();
    this.island_218();
    this.island_219();
    this.island_222();
    this.island_223();
    this.island_224();
    this.island_225();
    this.island_226();
    this.island_227();
    this.island_228();
    this.island_229();
    this.island_230();
    this.island_231();
    this.island_232();
    this.island_233();
    this.island_235();
    this.island_237();
    this.island_238();
    this.island_239();
    this.island_240();
    this.island_241();
    this.island_242();
    this.island_243();
    this.island_244();
    this.island_245();
    this.island_246();
    this.island_247();
    this.island_249();
    this.island_250();
    this.island_251();
    this.island_252();
    this.island_253();
    this.island_254();
    this.island_255();
    this.island_256();
    this.island_257();
    this.island_258();
    this.island_260();
    this.island_261();
    this.island_262();
    this.island_263();
    this.island_264();
    this.island_265();
    this.island_266();
    this.island_267();
    this.island_268();
    this.island_269();
    this.island_270();
    this.island_271();
    this.island_272();
    this.island_273();
    this.island_274();
    this.island_275();
    this.island_276();
    this.island_277();
    this.island_278();
    this.island_280();
    this.island_281();
    this.island_283();
    this.island_284();
    this.island_285();
    this.island_286();
    this.island_287();
    this.island_288();
    this.island_289();
    this.island_290();
    this.island_291();
    this.island_292();
    this.island_293();
    this.island_294();
    this.island_295();
    this.island_296();
    this.island_297();
    this.island_299();
    this.island_300();
    this.island_301();
    this.island_302();
    this.island_303();
    this.island_305();
    this.island_306();
    this.island_307();
    this.island_309();
    this.island_310();
    this.island_311();
    this.island_313();
    this.island_314();
    this.island_315();
    this.island_317();
    this.island_318();
    this.island_319();
    this.island_321();
    this.island_324();
    this.island_325();
    this.island_326();
    this.island_327();
    this.island_328();
    this.island_329();
    this.island_330();
    this.island_331();
    this.island_332();
    this.island_333();
    this.island_334();
    this.island_335();
    this.island_336();
    this.island_337();
    this.island_338();
    this.island_339();
    this.island_340();
    this.island_341();
    this.island_342();
    this.island_343();
    this.island_344();
    this.island_345();
    this.island_346();
    this.island_348();
    this.island_349();
    this.island_351();
    this.island_352();
    this.island_354();
    this.island_355();
    this.island_357();
    this.island_358();
    this.island_360();
    this.island_361();
    this.island_363();
    this.island_364();
    this.island_366();
    this.island_367();
    this.island_369();
    this.island_370();
    this.island_372();
    this.island_373();
    this.island_375();
    this.island_376();
    this.island_377();
    this.island_379();
    this.island_380();
    this.island_382();
    this.island_383();
    this.island_384();
    this.island_386();
    this.island_387();
    this.island_389();
    this.island_390();
    this.island_391();
    this.island_392();
    this.island_393();
    this.island_394();
    this.island_396();
    this.island_397();
    this.island_398();
    this.island_399();
    this.island_401();
    this.island_402();
    this.island_403();
    this.island_404();
    this.island_405();
    this.island_406();
    this.island_407();
    this.island_408();
    this.island_409();
    this.island_411();
    this.island_412();
    this.island_414();
    this.island_415();
    this.island_416();
    this.island_418();
    this.island_419();
    this.island_420();
    this.island_422();
    this.island_423();
    this.island_424();
    this.island_425();
    this.island_426();
    this.island_427();
    this.island_428();
    this.island_429();
    this.island_430();
    this.island_431();
    this.island_432();
    this.island_433();
    this.island_434();
    this.island_436();
    this.island_437();
    this.island_439();
    this.island_440();
    this.island_442();
    this.island_443();
    this.island_445();
    this.island_446();
    this.island_448();
    this.island_449();
    this.island_451();
    this.island_452();
    this.island_454();
    this.island_455();
    this.island_457();
    this.island_458();
    this.island_460();
    this.island_461();
    this.island_463();
    this.island_464();
    this.island_465();
    this.island_466();
    this.island_467();
    this.island_468();
    this.island_469();
    this.island_470();
    this.island_471();
    this.island_472();
    this.island_473();
    this.island_474();
    this.island_475();
    this.island_476();
    this.island_478();
    this.island_479();
    this.island_480();
    this.island_481();
    this.island_482();
    this.island_483();
    this.island_484();
    this.island_486();
    this.island_487();
    this.island_489();
    this.island_490();
    this.island_491();
    this.island_492();
    this.island_493();
    this.island_495();
    this.island_496();
    this.island_497();
    this.island_498();
    this.island_499();
    this.island_501();
    this.island_503();
    this.island_504();
    this.island_505();
    this.island_506();
    this.island_507();
    this.island_509();
    this.island_510();
    this.island_511();
    this.island_512();
    this.island_513();
    this.island_515();
    this.island_516();
    this.island_517();
    this.island_519();
    this.island_520();
    this.island_521();
    this.island_522();
    this.island_523();
    this.island_524();
    this.island_525();
    this.island_526();
    this.island_527();
    this.island_528();
    this.island_530();
    this.island_531();
    this.island_532();
    this.island_533();
    this.island_534();
    this.island_535();
    this.island_536();
    this.island_537();
    this.island_538();
    this.island_539();
    this.island_541();
    this.island_542();
    this.island_543();
    this.island_544();
    this.island_545();
    this.island_546();
    this.island_547();
    this.island_548();
    this.island_549();
    this.island_550();
    this.island_552();
    this.island_553();
    this.island_554();
    this.island_555();
    this.island_556();
    this.island_557();
    this.island_558();
    this.island_559();
    this.island_561();
    this.island_562();
    this.island_564();
    this.island_565();
    this.island_566();
    this.island_567();
    this.island_568();
    this.island_569();
    this.island_570();
    this.island_571();
    this.island_572();
    this.island_574();
    this.island_575();
    this.island_577();
    this.island_578();
    this.island_581();
    this.island_582();
    return this.trace;
  }

  island_000() {
    const island = { index: 0, start: "0x0014", end: "0x0017" };
    this.__line(island, "stackTail", "param_c0", "0x0017");
    return this.trace;
  }

  island_002() {
    const island = { index: 2, start: "0x0018", end: "0x001B" };
    this.__line(island, "stackTail", "c0", "0x001B");
    return this.trace;
  }

  island_005() {
    const island = { index: 5, start: "0x0020", end: "0x0023" };
    this.__line(island, "stackTail", "c0", "0x0023");
    return this.trace;
  }

  island_008() {
    const island = { index: 8, start: "0x0027", end: "0x002A" };
    this.__line(island, "jump", "jump 22", "0x0027");
    return this.trace;
  }

  island_009() {
    const island = { index: 9, start: "0x002A", end: "0x002D" };
    this.__line(island, "stackTail", "param_c0", "0x002D");
    return this.trace;
  }

  island_012() {
    const island = { index: 12, start: "0x0035", end: "0x003C" };
    this.__line(island, "assign", "c0 = c1", "0x0039");
    return this.trace;
  }

  island_014() {
    const island = { index: 14, start: "0x003D", end: "0x0049" };
    this.__line(island, "branch", "if not (timeFromLastFrame > c0) then goto 0x0050", "0x0045");
    return this.trace;
  }

  island_015() {
    const island = { index: 15, start: "0x0049", end: "0x0050" };
    this.__line(island, "stackTail", "_system | milliseconds", "0x0050");
    return this.trace;
  }

  island_019() {
    const island = { index: 19, start: "0x005F", end: "0x0068" };
    this.__line(island, "assign", "theActualTime = theTime", "0x0064");
    return this.trace;
  }

  island_020() {
    const island = { index: 20, start: "0x0068", end: "0x0074" };
    this.__line(island, "branch", "if not (theTime > c0_2) then jump 12", "0x0070");
    return this.trace;
  }

  island_021() {
    const island = { index: 21, start: "0x0074", end: "0x007C" };
    this.__line(island, "assign", "theTime = c0_2", "0x0079");
    return this.trace;
  }

  island_024() {
    const island = { index: 24, start: "0x007F", end: "0x0088" };
    this.__line(island, "stackTail", "(avgFps * fpsCount)", "0x0088");
    return this.trace;
  }

  island_026() {
    const island = { index: 26, start: "0x0096", end: "0x00A1" };
    this.__line(island, "assign", "timeFromLastFrame = milliseconds", "0x009D");
    this.__line(island, "expr", "_system", "0x00A0");
    return this.trace;
  }

  island_027() {
    const island = { index: 27, start: "0x00A1", end: "0x00AA" };
    this.__line(island, "expr", "calculateExtraHpi()", "0x00A9");
    return this.trace;
  }

  island_028() {
    const island = { index: 28, start: "0x00AA", end: "0x00CC" };
    this.__line(island, "assign", "c0 = 0.7451", "0x00C8");
    this.__line(island, "expr", "(theTime * theTime)", "0x00CB");
    this.__line(island, "stackTail", "(carV * theTime) | (c0_5 * carAccel)", "0x00CC");
    return this.trace;
  }

  island_029() {
    const island = { index: 29, start: "0x00CC", end: "0x00D8" };
    this.__line(island, "branch", "if not (gearValue = c0) then jump 718", "0x00D4");
    return this.trace;
  }

  island_030() {
    const island = { index: 30, start: "0x00D8", end: "0x00EA" };
    this.__line(island, "stackTail", "((hpi + boostCreatedPower) + systemPower) | ECUtune", "0x00EA");
    return this.trace;
  }

  island_033() {
    const island = { index: 33, start: "0x010E", end: "0x0125" };
    this.__line(island, "assign", "timeFromLastFrame = (((NOS * rpm) / stockRedLine) / c1_25)", "0x0121");
    return this.trace;
  }

  island_034() {
    const island = { index: 34, start: "0x0125", end: "0x0130" };
    this.__line(island, "branch", "if not (timeFromLastFrame > NOS) then jump 11", "0x012C");
    return this.trace;
  }

  island_035() {
    const island = { index: 35, start: "0x0130", end: "0x0138" };
    this.__line(island, "assign", "timeFromLastFrame = NOS", "0x0134");
    return this.trace;
  }

  island_036() {
    const island = { index: 36, start: "0x0138", end: "0x014B" };
    this.__line(island, "expr", "((hp * c1) - 0.6966)", "0x014A");
    this.__line(island, "stackTail", "hp", "0x014B");
    return this.trace;
  }

  island_037() {
    const island = { index: 37, start: "0x014B", end: "0x0163" };
    this.__line(island, "assign", "nitrousRemaining = (nitrousRemaining - ((NOS / c10000) * c2))", "0x015F");
    return this.trace;
  }

  island_038() {
    const island = { index: 38, start: "0x0163", end: "0x0183" };
    this.__line(island, "expr", "runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x0182");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x0183");
    return this.trace;
  }

  island_039() {
    const island = { index: 39, start: "0x0183", end: "0x0186" };
    this.__line(island, "jump", "jump 21", "0x0183");
    return this.trace;
  }

  island_040() {
    const island = { index: 40, start: "0x0186", end: "0x0198" };
    this.__line(island, "assign", "hp = (hp + (hp * c1))", "0x0194");
    return this.trace;
  }

  island_041() {
    const island = { index: 41, start: "0x0198", end: "0x01A5" };
    this.__line(island, "assign", "hp = (hp * param_c0)", "0x01A1");
    return this.trace;
  }

  island_042() {
    const island = { index: 42, start: "0x01A5", end: "0x01B6" };
    this.__line(island, "branch", "if not (rpm > (revLimiter + c200)) then jump 17", "0x01B2");
    return this.trace;
  }

  island_043() {
    const island = { index: 43, start: "0x01B6", end: "0x01C4" };
    this.__line(island, "assign", "hp = (hp / c2)", "0x01C0");
    return this.trace;
  }

  island_044() {
    const island = { index: 44, start: "0x01C4", end: "0x01D6" };
    this.__line(island, "assign", "theTime = ((hp * tqFlyFactor) / rpm)", "0x01D2");
    return this.trace;
  }

  island_045() {
    const island = { index: 45, start: "0x01D6", end: "0x01EC" };
    this.__line(island, "assign", "_system = (((theTime * gr) * fgr) * rpmGearConversion)", "0x01E8");
    return this.trace;
  }

  island_046() {
    const island = { index: 46, start: "0x01EC", end: "0x01F8" };
    this.__line(island, "assign", "milliseconds = (_system / r)", "0x01F4");
    return this.trace;
  }

  island_047() {
    const island = { index: 47, start: "0x01F8", end: "0x0205" };
    this.__line(island, "assign", "c1000 = (negTq * c9)", "0x0201");
    return this.trace;
  }

  island_048() {
    const island = { index: 48, start: "0x0205", end: "0x0218" };
    this.__line(island, "jump", "branch 20801", "0x0215");
    this.__line(island, "stackTail", "param_c0 | (stockRedLine + c1000) | 0.7511", "0x0218");
    return this.trace;
  }

  island_049() {
    const island = { index: 49, start: "0x0218", end: "0x0233" };
    this.__line(island, "assign", "id_16693 = 0.5639", "0x0227");
    this.__line(island, "branch", "if not ((theActualTime - c299) < theActualTime) then goto 0x003C", "0x022F");
    this.__line(island, "stackTail", "rpm", "0x0233");
    return this.trace;
  }

  island_050() {
    const island = { index: 50, start: "0x0233", end: "0x023E" };
    this.__line(island, "assign", "c0_2 = (milliseconds - c1000)", "0x023A");
    return this.trace;
  }

  island_051() {
    const island = { index: 51, start: "0x023E", end: "0x0249" };
    this.__line(island, "branch", "if not (c0_2 > c0) then goto 0x026C", "0x0245");
    return this.trace;
  }

  island_052() {
    const island = { index: 52, start: "0x0249", end: "0x0269" };
    this.__line(island, "assign", "c1000 = (rpm + (((theActualTime - c300) * 0.7299) / c300))", "0x0265");
    this.__line(island, "expr", "c0_2", "0x0268");
    this.__line(island, "stackTail", "c1000", "0x0269");
    return this.trace;
  }

  island_053() {
    const island = { index: 53, start: "0x0269", end: "0x026C" };
    this.__line(island, "jump", "jump 0x027D", "0x0269");
    return this.trace;
  }

  island_055() {
    const island = { index: 55, start: "0x027A", end: "0x027D" };
    this.__line(island, "stackTail", "c1000", "0x027D");
    return this.trace;
  }

  island_058() {
    const island = { index: 58, start: "0x0290", end: "0x0298" };
    this.__line(island, "assign", "c1000 = c0", "0x0294");
    return this.trace;
  }

  island_059() {
    const island = { index: 59, start: "0x0298", end: "0x029B" };
    this.__line(island, "stackTail", "milliseconds", "0x029B");
    return this.trace;
  }

  island_061() {
    const island = { index: 61, start: "0x02A3", end: "0x02B5" };
    this.__line(island, "expr", "0.7767", "0x02B4");
    this.__line(island, "stackTail", "avgFps | (w / g)", "0x02B5");
    return this.trace;
  }

  island_062() {
    const island = { index: 62, start: "0x02B5", end: "0x02C1" };
    this.__line(island, "branch", "if not (rpm > revLimiter) then jump 11", "0x02BD");
    return this.trace;
  }

  island_063() {
    const island = { index: 63, start: "0x02C1", end: "0x02C9" };
    this.__line(island, "assign", "fpsCount = revLimiterDeceleration", "0x02C5");
    return this.trace;
  }

  island_064() {
    const island = { index: 64, start: "0x02C9", end: "0x02D0" };
    this.__line(island, "jump", "branch 15", "0x02CD");
    this.__line(island, "stackTail", "brake", "0x02D0");
    return this.trace;
  }

  island_065() {
    const island = { index: 65, start: "0x02D0", end: "0x02D9" };
    this.__line(island, "assign", "carAccel = brakeDecleration", "0x02D5");
    return this.trace;
  }

  island_066() {
    const island = { index: 66, start: "0x02D9", end: "0x02DC" };
    this.__line(island, "jump", "jump 13", "0x02D9");
    return this.trace;
  }

  island_068() {
    const island = { index: 68, start: "0x02E6", end: "0x02F9" };
    this.__line(island, "assign", "carV = (carV + (carAccel * theTime))", "0x02F5");
    return this.trace;
  }

  island_069() {
    const island = { index: 69, start: "0x02F9", end: "0x0305" };
    this.__line(island, "branch", "if not (carV <= c0) then jump 21", "0x0301");
    return this.trace;
  }

  island_070() {
    const island = { index: 70, start: "0x0305", end: "0x030E" };
    this.__line(island, "assign", "carAccel = c0", "0x030A");
    return this.trace;
  }

  island_071() {
    const island = { index: 71, start: "0x030E", end: "0x0317" };
    this.__line(island, "assign", "carV = c0", "0x0313");
    return this.trace;
  }

  island_072() {
    const island = { index: 72, start: "0x0317", end: "0x0320" };
    this.__line(island, "assign", "speedoV = carV", "0x031C");
    return this.trace;
  }

  island_073() {
    const island = { index: 73, start: "0x0320", end: "0x0332" };
    this.__line(island, "assign", "engineV = (engineV + (fpsCount * theTime))", "0x032E");
    return this.trace;
  }

  island_074() {
    const island = { index: 74, start: "0x0332", end: "0x0337" };
    this.__line(island, "stackTail", "engineV", "0x0337");
    return this.trace;
  }

  island_076() {
    const island = { index: 76, start: "0x033E", end: "0x0347" };
    this.__line(island, "assign", "engineV = c5", "0x0343");
    return this.trace;
  }

  island_077() {
    const island = { index: 77, start: "0x0347", end: "0x034A" };
    this.__line(island, "jump", "jump 0x0018", "0x0347");
    return this.trace;
  }

  island_078() {
    const island = { index: 78, start: "0x034A", end: "0x0356" };
    this.__line(island, "branch", "if not (engineV > c100) then jump 12", "0x0352");
    return this.trace;
  }

  island_079() {
    const island = { index: 79, start: "0x0356", end: "0x035F" };
    this.__line(island, "assign", "engineV = c100", "0x035B");
    return this.trace;
  }

  island_080() {
    const island = { index: 80, start: "0x035F", end: "0x0389" };
    this.__line(island, "expr", "0.7478", "0x0388");
    this.__line(island, "stackTail", "engineV | (gConvSlipA * r) | ((0.7811 * gr) * c50) | (fgr * rpmGearConversion)", "0x0389");
    return this.trace;
  }

  island_081() {
    const island = { index: 81, start: "0x0389", end: "0x0392" };
    this.__line(island, "expr", "getTorque()", "0x0391");
    return this.trace;
  }

  island_082() {
    const island = { index: 82, start: "0x0392", end: "0x03A0" };
    this.__line(island, "assign", "mph = (carV * vToMph)", "0x039C");
    return this.trace;
  }

  island_083() {
    const island = { index: 83, start: "0x03A0", end: "0x03A3" };
    this.__line(island, "jump", "jump 0x0647", "0x03A0");
    return this.trace;
  }

  island_085() {
    const island = { index: 85, start: "0x03B3", end: "0x03BB" };
    this.__line(island, "assign", "c0 = c0", "0x03B7");
    return this.trace;
  }

  island_086() {
    const island = { index: 86, start: "0x03BB", end: "0x03CE" };
    this.__line(island, "assign", "hp = ((posTq * rpm) / tqFlyFactor)", "0x03CA");
    return this.trace;
  }

  island_087() {
    const island = { index: 87, start: "0x03CE", end: "0x03EF" };
    this.__line(island, "assign", "c1 = (((((hpi + boostCreatedPower) + systemPower) + ECUtune) + compressionPowerDelta) - engineDamage)", "0x03EB");
    return this.trace;
  }

  island_088() {
    const island = { index: 88, start: "0x03EF", end: "0x03F8" };
    this.__line(island, "branch", "if not (raceGas > VOID) then goto 0x005C", "0x03F4");
    return this.trace;
  }

  island_089() {
    const island = { index: 89, start: "0x03F8", end: "0x040F" };
    this.__line(island, "assign", "calculateExtraHpi = (((c5 * theActualTime) * hp) / c1000)", "0x040B");
    return this.trace;
  }

  island_090() {
    const island = { index: 90, start: "0x040F", end: "0x041A" };
    this.__line(island, "branch", "if not (calculateExtraHpi > raceGas) then goto 0x043B", "0x0416");
    return this.trace;
  }

  island_091() {
    const island = { index: 91, start: "0x041A", end: "0x042F" };
    this.__line(island, "assign", "c1 = (c1 + ((c0_02 * raceGas) / calculateExtraHpi))", "0x042B");
    return this.trace;
  }

  island_092() {
    const island = { index: 92, start: "0x042F", end: "0x0435" };
    this.__line(island, "assign", "raceGas = VOID", "0x0431");
    return this.trace;
  }

  island_093() {
    const island = { index: 93, start: "0x0435", end: "0x0438" };
    this.__line(island, "jump", "jump 28", "0x0435");
    return this.trace;
  }

  island_094() {
    const island = { index: 94, start: "0x0438", end: "0x043B" };
    this.__line(island, "stackTail", "c1", "0x043B");
    return this.trace;
  }

  island_096() {
    const island = { index: 96, start: "0x0444", end: "0x0451" };
    this.__line(island, "assign", "raceGas = (raceGas - calculateExtraHpi)", "0x044D");
    return this.trace;
  }

  island_098() {
    const island = { index: 98, start: "0x0466", end: "0x047D" };
    this.__line(island, "assign", "timeFromLastFrame = (((NOS * rpm) / stockRedLine) / c1_25)", "0x0479");
    return this.trace;
  }

  island_099() {
    const island = { index: 99, start: "0x047D", end: "0x0488" };
    this.__line(island, "branch", "if not (timeFromLastFrame > NOS) then jump 11", "0x0484");
    return this.trace;
  }

  island_100() {
    const island = { index: 100, start: "0x0488", end: "0x0490" };
    this.__line(island, "assign", "timeFromLastFrame = NOS", "0x048C");
    return this.trace;
  }

  island_101() {
    const island = { index: 101, start: "0x0490", end: "0x04A1" };
    this.__line(island, "expr", "2.2016", "0x04A0");
    this.__line(island, "stackTail", "hp | (hp * c1)", "0x04A1");
    return this.trace;
  }

  island_103() {
    const island = { index: 103, start: "0x04A7", end: "0x04BF" };
    this.__line(island, "assign", "nitrousRemaining = (nitrousRemaining - ((NOS / c10000) * c2))", "0x04BB");
    return this.trace;
  }

  island_104() {
    const island = { index: 104, start: "0x04BF", end: "0x04DF" };
    this.__line(island, "expr", "runEngineNOSCB(((nitrousRemaining / nitrousTankSize) * c100))", "0x04DE");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x04DF");
    return this.trace;
  }

  island_105() {
    const island = { index: 105, start: "0x04DF", end: "0x04E2" };
    this.__line(island, "jump", "jump 21", "0x04DF");
    return this.trace;
  }

  island_106() {
    const island = { index: 106, start: "0x04E2", end: "0x04F4" };
    this.__line(island, "assign", "hp = (hp + (hp * c1))", "0x04F0");
    return this.trace;
  }

  island_107() {
    const island = { index: 107, start: "0x04F4", end: "0x0511" };
    this.__line(island, "assign", "hp = ((c100 - detuneHp) * (0.7489 / c100))", "0x050D");
    this.__line(island, "expr", "param_c0", "0x0510");
    this.__line(island, "stackTail", "hp", "0x0511");
    return this.trace;
  }

  island_108() {
    const island = { index: 108, start: "0x0511", end: "0x0523" };
    this.__line(island, "assign", "theTime = ((hp * tqFlyFactor) / rpm)", "0x051F");
    return this.trace;
  }

  island_109() {
    const island = { index: 109, start: "0x0523", end: "0x0539" };
    this.__line(island, "assign", "_system = (((theTime * gr) * fgr) * rpmGearConversion)", "0x0535");
    return this.trace;
  }

  island_110() {
    const island = { index: 110, start: "0x0539", end: "0x0545" };
    this.__line(island, "assign", "milliseconds = (_system / r)", "0x0541");
    return this.trace;
  }

  island_111() {
    const island = { index: 111, start: "0x0545", end: "0x0551" };
    this.__line(island, "assign", "carV = (param_c0 * c8)", "0x054D");
    return this.trace;
  }

  island_112() {
    const island = { index: 112, start: "0x0551", end: "0x0559" };
    this.__line(island, "assign", "c0_5 = c0", "0x0555");
    return this.trace;
  }

  island_113() {
    const island = { index: 113, start: "0x0559", end: "0x0564" };
    this.__line(island, "branch", "if not (carV < c1) then jump 22", "0x0560");
    return this.trace;
  }

  island_115() {
    const island = { index: 115, start: "0x0577", end: "0x0589" };
    this.__line(island, "assign", "carAccel = ((w * c0_005) * carAccel)", "0x0585");
    return this.trace;
  }

  island_116() {
    const island = { index: 116, start: "0x0589", end: "0x059A" };
    this.__line(island, "assign", "gearValue = ((c0_016 * w) + c0_5)", "0x0596");
    return this.trace;
  }

  island_117() {
    const island = { index: 117, start: "0x059A", end: "0x05A5" };
    this.__line(island, "branch", "if not (gearValue < c0) then jump 11", "0x05A1");
    return this.trace;
  }

  island_118() {
    const island = { index: 118, start: "0x05A5", end: "0x05AD" };
    this.__line(island, "assign", "gearValue = c0", "0x05A9");
    return this.trace;
  }

  island_119() {
    const island = { index: 119, start: "0x05AD", end: "0x05C4" };
    this.__line(island, "assign", "hpi = ((carV * carV) + 0.751)", "0x05C0");
    this.__line(island, "expr", "DAfp", "0x05C3");
    return this.trace;
  }

  island_120() {
    const island = { index: 120, start: "0x05C4", end: "0x05CF" };
    this.__line(island, "branch", "if not (hpi < c0) then goto 0x05DA", "0x05CB");
    return this.trace;
  }

  island_121() {
    const island = { index: 121, start: "0x05CF", end: "0x05D7" };
    this.__line(island, "assign", "hpi = c0", "0x05D3");
    return this.trace;
  }

  island_122() {
    const island = { index: 122, start: "0x05D7", end: "0x05DA" };
    this.__line(island, "stackTail", "milliseconds", "0x05DA");
    return this.trace;
  }

  island_123() {
    const island = { index: 123, start: "0x05DA", end: "0x05E7" };
    this.__line(island, "expr", "0.7255", "0x05E6");
    this.__line(island, "stackTail", "(gearValue + hpi)", "0x05E7");
    return this.trace;
  }

  island_124() {
    const island = { index: 124, start: "0x05E7", end: "0x05F4" };
    this.__line(island, "assign", "boostCreatedPower = (carV * vToMph)", "0x05F0");
    return this.trace;
  }

  island_125() {
    const island = { index: 125, start: "0x05F4", end: "0x05FC" };
    this.__line(island, "assign", "systemPower = UsInit", "0x05F8");
    return this.trace;
  }

  island_126() {
    const island = { index: 126, start: "0x05FC", end: "0x0605" };
    this.__line(island, "branch", "if not (tireStick > VOID) then goto 0x0014", "0x0601");
    return this.trace;
  }

  island_127() {
    const island = { index: 127, start: "0x0605", end: "0x0616" };
    this.__line(island, "assign", "systemPower = (systemPower + (UsInit * c0_05))", "0x0612");
    return this.trace;
  }

  island_128() {
    const island = { index: 128, start: "0x0616", end: "0x061E" };
    this.__line(island, "assign", "ECUtune = UkInit", "0x061A");
    return this.trace;
  }

  island_129() {
    const island = { index: 129, start: "0x061E", end: "0x0629" };
    this.__line(island, "branch", "if not (boostCreatedPower > c0) then goto 0x0672", "0x0625");
    return this.trace;
  }

  island_130() {
    const island = { index: 130, start: "0x0629", end: "0x0635" };
    this.__line(island, "assign", "compressionPowerDelta = (boostCreatedPower / c100)", "0x0631");
    return this.trace;
  }

  island_131() {
    const island = { index: 131, start: "0x0635", end: "0x0640" };
    this.__line(island, "branch", "if not (compressionPowerDelta > c1) then goto 0x064B", "0x063C");
    return this.trace;
  }

  island_132() {
    const island = { index: 132, start: "0x0640", end: "0x0647" };
    this.__line(island, "assign", "compressionPowerDelta = c1", "0x0644");
    return this.trace;
  }

  island_134() {
    const island = { index: 134, start: "0x0648", end: "0x064B" };
    this.__line(island, "stackTail", "compressionPowerDelta", "0x064B");
    return this.trace;
  }

  island_136() {
    const island = { index: 136, start: "0x0654", end: "0x065F" };
    this.__line(island, "assign", "systemPower = (systemPower + compressionPowerDelta)", "0x065B");
    return this.trace;
  }

  island_137() {
    const island = { index: 137, start: "0x065F", end: "0x066F" };
    this.__line(island, "assign", "ECUtune = (ECUtune - (compressionPowerDelta * c0_09))", "0x066B");
    return this.trace;
  }

  island_138() {
    const island = { index: 138, start: "0x066F", end: "0x0672" };
    this.__line(island, "stackTail", "ECUtune", "0x0672");
    return this.trace;
  }

  island_140() {
    const island = { index: 140, start: "0x067A", end: "0x0682" };
    this.__line(island, "assign", "ECUtune = c0_6", "0x067E");
    return this.trace;
  }

  island_141() {
    const island = { index: 141, start: "0x0682", end: "0x0689" };
    this.__line(island, "jump", "branch 0x06EF", "0x0686");
    this.__line(island, "stackTail", "slip", "0x0689");
    return this.trace;
  }

  island_142() {
    const island = { index: 142, start: "0x0689", end: "0x06B1" };
    this.__line(island, "expr", "0.7734", "0x06B0");
    this.__line(island, "stackTail", "avgFps | ((ECUtune * N) / 0.5639) | (ECUtune * N) | (w / g)", "0x06B1");
    return this.trace;
  }

  island_143() {
    const island = { index: 143, start: "0x06B1", end: "0x06B4" };
    this.__line(island, "jump", "jump 0x06EC", "0x06B1");
    return this.trace;
  }

  island_144() {
    const island = { index: 144, start: "0x06B4", end: "0x06C7" };
    this.__line(island, "expr", "0.7734", "0x06C6");
    this.__line(island, "stackTail", "avgFps | (w / g)", "0x06C7");
    return this.trace;
  }

  island_145() {
    const island = { index: 145, start: "0x06C7", end: "0x06D0" };
    this.__line(island, "assign", "speedoV = carV", "0x06CC");
    return this.trace;
  }

  island_146() {
    const island = { index: 146, start: "0x06D0", end: "0x06D6" };
    this.__line(island, "assign", "slip = 0", "0x06D2");
    return this.trace;
  }

  island_147() {
    const island = { index: 147, start: "0x06D6", end: "0x06E9" };
    this.__line(island, "expr", "runEngineTractionLightCB(0)", "0x06E8");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x06E9");
    return this.trace;
  }

  island_148() {
    const island = { index: 148, start: "0x06E9", end: "0x06EC" };
    this.__line(island, "jump", "jump 0x0758", "0x06E9");
    return this.trace;
  }

  island_149() {
    const island = { index: 149, start: "0x06EC", end: "0x06EF" };
    this.__line(island, "stackTail", "avgFps", "0x06EF");
    return this.trace;
  }

  island_150() {
    const island = { index: 150, start: "0x06EF", end: "0x0726" };
    this.__line(island, "expr", "0.7734", "0x0725");
    this.__line(island, "stackTail", "((systemPower * N) = 0.5701) | (carV + c2) | 1.6693[id_5127] | (systemPower * N) | (w / g)", "0x0726");
    return this.trace;
  }

  island_151() {
    const island = { index: 151, start: "0x0726", end: "0x072C" };
    this.__line(island, "assign", "slip = 1", "0x0728");
    return this.trace;
  }

  island_152() {
    const island = { index: 152, start: "0x072C", end: "0x073F" };
    this.__line(island, "expr", "runEngineTractionLightCB(1)", "0x073E");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x073F");
    return this.trace;
  }

  island_153() {
    const island = { index: 153, start: "0x073F", end: "0x0742" };
    this.__line(island, "jump", "jump 0x0758", "0x073F");
    return this.trace;
  }

  island_154() {
    const island = { index: 154, start: "0x0742", end: "0x0755" };
    this.__line(island, "expr", "0.7734", "0x0754");
    this.__line(island, "stackTail", "avgFps | (w / g)", "0x0755");
    return this.trace;
  }

  island_155() {
    const island = { index: 155, start: "0x0755", end: "0x0758" };
    this.__line(island, "stackTail", "avgFps", "0x0758");
    return this.trace;
  }

  island_156() {
    const island = { index: 156, start: "0x0758", end: "0x0767" };
    this.__line(island, "expr", "((w / g) <= 0.7767)", "0x0766");
    return this.trace;
  }

  island_157() {
    const island = { index: 157, start: "0x0767", end: "0x077F" };
    this.__line(island, "branch", "if not (carAccel < c0) then goto 0x0017", "0x077B");
    this.__line(island, "stackTail", "(carV < c3)", "0x077F");
    return this.trace;
  }

  island_158() {
    const island = { index: 158, start: "0x077F", end: "0x0788" };
    this.__line(island, "assign", "carAccel = c0", "0x0784");
    return this.trace;
  }

  island_159() {
    const island = { index: 159, start: "0x0788", end: "0x0790" };
    this.__line(island, "assign", "engineDamage = c0", "0x078C");
    return this.trace;
  }

  island_160() {
    const island = { index: 160, start: "0x0790", end: "0x0793" };
    this.__line(island, "jump", "jump 0x0018", "0x0790");
    return this.trace;
  }

  island_161() {
    const island = { index: 161, start: "0x0793", end: "0x079F" };
    this.__line(island, "branch", "if not (carV < c0) then jump 12", "0x079B");
    return this.trace;
  }

  island_162() {
    const island = { index: 162, start: "0x079F", end: "0x07A8" };
    this.__line(island, "assign", "carV = c0", "0x07A4");
    return this.trace;
  }

  island_163() {
    const island = { index: 163, start: "0x07A8", end: "0x07B4" };
    this.__line(island, "branch", "if not (rpm > revLimiter) then goto 0x0014", "0x07B0");
    return this.trace;
  }

  island_164() {
    const island = { index: 164, start: "0x07B4", end: "0x07BD" };
    this.__line(island, "assign", "carAccel = revLimiterDeceleration", "0x07B9");
    return this.trace;
  }

  island_165() {
    const island = { index: 165, start: "0x07BD", end: "0x07C5" };
    this.__line(island, "assign", "engineDamage = revLimiterDeceleration", "0x07C1");
    return this.trace;
  }

  island_166() {
    const island = { index: 166, start: "0x07C5", end: "0x07CC" };
    this.__line(island, "jump", "branch 58", "0x07C9");
    this.__line(island, "stackTail", "brake", "0x07CC");
    return this.trace;
  }

  island_167() {
    const island = { index: 167, start: "0x07CC", end: "0x07D5" };
    this.__line(island, "assign", "carAccel = brakeDecleration", "0x07D1");
    return this.trace;
  }

  island_168() {
    const island = { index: 168, start: "0x07D5", end: "0x07DD" };
    this.__line(island, "assign", "engineDamage = brakeDecleration", "0x07D9");
    return this.trace;
  }

  island_169() {
    const island = { index: 169, start: "0x07DD", end: "0x07E9" };
    this.__line(island, "branch", "if not (carV < c2) then jump 29", "0x07E5");
    return this.trace;
  }

  island_170() {
    const island = { index: 170, start: "0x07E9", end: "0x07F2" };
    this.__line(island, "assign", "carAccel = c0", "0x07EE");
    return this.trace;
  }

  island_171() {
    const island = { index: 171, start: "0x07F2", end: "0x07FA" };
    this.__line(island, "assign", "engineDamage = c0", "0x07F6");
    return this.trace;
  }

  island_172() {
    const island = { index: 172, start: "0x07FA", end: "0x0803" };
    this.__line(island, "assign", "carV = c0", "0x07FF");
    return this.trace;
  }

  island_173() {
    const island = { index: 173, start: "0x0803", end: "0x0816" };
    this.__line(island, "assign", "carV = (carV + (carAccel * theTime))", "0x0812");
    return this.trace;
  }

  island_174() {
    const island = { index: 174, start: "0x0816", end: "0x0828" };
    this.__line(island, "assign", "speedoV = (speedoV + (engineDamage * theTime))", "0x0824");
    return this.trace;
  }

  island_175() {
    const island = { index: 175, start: "0x0828", end: "0x0839" };
    this.__line(island, "branch", "if not ((carV + c10) < speedoV) then jump 12", "0x0835");
    return this.trace;
  }

  island_176() {
    const island = { index: 176, start: "0x0839", end: "0x083F" };
    this.__line(island, "assign", "tireScrub = 1", "0x083B");
    return this.trace;
  }

  island_177() {
    const island = { index: 177, start: "0x083F", end: "0x0842" };
    this.__line(island, "jump", "jump 9", "0x083F");
    return this.trace;
  }

  island_178() {
    const island = { index: 178, start: "0x0842", end: "0x0848" };
    this.__line(island, "assign", "tireScrub = 0", "0x0844");
    return this.trace;
  }

  island_179() {
    const island = { index: 179, start: "0x0848", end: "0x0859" };
    this.__line(island, "branch", "if not ((carV + c0_015) < speedoV) then goto 0x00EA", "0x0855");
    return this.trace;
  }

  island_180() {
    const island = { index: 180, start: "0x0859", end: "0x0866" };
    this.__line(island, "assign", "isNos = (speedoV - carV)", "0x0862");
    return this.trace;
  }

  island_181() {
    const island = { index: 181, start: "0x0866", end: "0x0871" };
    this.__line(island, "branch", "if not (isNos < c0_02) then jump 11", "0x086D");
    return this.trace;
  }

  island_182() {
    const island = { index: 182, start: "0x0871", end: "0x0879" };
    this.__line(island, "assign", "isNos = c0", "0x0875");
    return this.trace;
  }

  island_183() {
    const island = { index: 183, start: "0x0879", end: "0x0880" };
    this.__line(island, "jump", "branch 0x005D", "0x087D");
    this.__line(island, "stackTail", "slip", "0x0880");
    return this.trace;
  }

  island_184() {
    const island = { index: 184, start: "0x0880", end: "0x0897" };
    this.__line(island, "assign", "nitrousRemaining = (0.7299 / c200)", "0x0893");
    this.__line(island, "expr", "(ECUtune * N)", "0x0896");
    this.__line(island, "stackTail", "avgFps", "0x0897");
    return this.trace;
  }

  island_185() {
    const island = { index: 185, start: "0x0897", end: "0x08A2" };
    this.__line(island, "branch", "if not (nitrousRemaining < c0) then goto 0x08B0", "0x089E");
    return this.trace;
  }

  island_186() {
    const island = { index: 186, start: "0x08A2", end: "0x08AA" };
    this.__line(island, "assign", "nitrousRemaining = c0", "0x08A6");
    return this.trace;
  }

  island_187() {
    const island = { index: 187, start: "0x08AA", end: "0x08AD" };
    this.__line(island, "jump", "jump 22", "0x08AA");
    return this.trace;
  }

  island_188() {
    const island = { index: 188, start: "0x08AD", end: "0x08B0" };
    this.__line(island, "stackTail", "nitrousRemaining", "0x08B0");
    return this.trace;
  }

  island_190() {
    const island = { index: 190, start: "0x08B8", end: "0x08C0" };
    this.__line(island, "assign", "nitrousRemaining = c1", "0x08BC");
    return this.trace;
  }

  island_192() {
    const island = { index: 192, start: "0x08D7", end: "0x08DA" };
    this.__line(island, "jump", "jump 0x0940", "0x08D7");
    return this.trace;
  }

  island_193() {
    const island = { index: 193, start: "0x08DA", end: "0x08E7" };
    this.__line(island, "assign", "NOS = (clutchFeather + c0_18)", "0x08E3");
    return this.trace;
  }

  island_194() {
    const island = { index: 194, start: "0x08E7", end: "0x08F8" };
    this.__line(island, "assign", "speedoV = (speedoV - (NOS * isNos))", "0x08F4");
    return this.trace;
  }

  island_195() {
    const island = { index: 195, start: "0x08F8", end: "0x0922" };
    this.__line(island, "branch", "if not ((rpm / redLine) < (c8 / c10)) then goto 0x0940", "0x091E");
    this.__line(island, "stackTail", "((param_c0 > c0) > (mph = VOID))", "0x0922");
    return this.trace;
  }

  island_197() {
    const island = { index: 197, start: "0x093D", end: "0x0940" };
    this.__line(island, "jump", "jump 12", "0x093D");
    return this.trace;
  }

  island_198() {
    const island = { index: 198, start: "0x0940", end: "0x0949" };
    this.__line(island, "assign", "speedoV = carV", "0x0945");
    return this.trace;
  }

  island_199() {
    const island = { index: 199, start: "0x0949", end: "0x0973" };
    this.__line(island, "expr", "0.7478", "0x0972");
    this.__line(island, "stackTail", "speedoV | (gConvSlipA * r) | ((0.7811 * gr) * c50) | (fgr * rpmGearConversion)", "0x0973");
    return this.trace;
  }

  island_200() {
    const island = { index: 200, start: "0x0973", end: "0x097C" };
    this.__line(island, "expr", "getTorque()", "0x097B");
    return this.trace;
  }

  island_201() {
    const island = { index: 201, start: "0x097C", end: "0x0983" };
    this.__line(island, "jump", "branch 41", "0x0980");
    this.__line(island, "stackTail", "slip", "0x0983");
    return this.trace;
  }

  island_202() {
    const island = { index: 202, start: "0x0983", end: "0x0991" };
    this.__line(island, "assign", "mph = (speedoV * vToMph)", "0x098D");
    return this.trace;
  }

  island_203() {
    const island = { index: 203, start: "0x0991", end: "0x099D" };
    this.__line(island, "branch", "if not (mph < c0_02) then goto 0x09A9", "0x0999");
    return this.trace;
  }

  island_204() {
    const island = { index: 204, start: "0x099D", end: "0x09A6" };
    this.__line(island, "assign", "mph = c0_02", "0x09A2");
    return this.trace;
  }

  island_205() {
    const island = { index: 205, start: "0x09A6", end: "0x09A9" };
    this.__line(island, "jump", "jump 0x09BA", "0x09A6");
    return this.trace;
  }

  island_206() {
    const island = { index: 206, start: "0x09A9", end: "0x09B7" };
    this.__line(island, "assign", "mph = (carV * vToMph)", "0x09B3");
    return this.trace;
  }

  island_207() {
    const island = { index: 207, start: "0x09B7", end: "0x09BA" };
    this.__line(island, "stackTail", "c0", "0x09BA");
    return this.trace;
  }

  island_209() {
    const island = { index: 209, start: "0x09C2", end: "0x09CF" };
    this.__line(island, "jump", "branch 16693", "0x09CC");
    this.__line(island, "stackTail", "(gearValue = -1)", "0x09CF");
    return this.trace;
  }

  island_210() {
    const island = { index: 210, start: "0x09CF", end: "0x09D4" };
    this.__line(island, "jump", "branch 14", "0x09D1");
    return this.trace;
  }

  island_211() {
    const island = { index: 211, start: "0x09D4", end: "0x09DC" };
    this.__line(island, "assign", "c0 = c0", "0x09D8");
    return this.trace;
  }

  island_212() {
    const island = { index: 212, start: "0x09DC", end: "0x09DF" };
    this.__line(island, "jump", "jump 11", "0x09DC");
    return this.trace;
  }

  island_213() {
    const island = { index: 213, start: "0x09DF", end: "0x09E7" };
    this.__line(island, "assign", "c0 = c0_02", "0x09E3");
    return this.trace;
  }

  island_214() {
    const island = { index: 214, start: "0x09E7", end: "0x09F2" };
    this.__line(island, "branch", "if not (gearValue = -1) then jump 19", "0x09EE");
    return this.trace;
  }

  island_215() {
    const island = { index: 215, start: "0x09F2", end: "0x09FF" };
    this.__line(island, "assign", "s = (s - c0)", "0x09FB");
    return this.trace;
  }

  island_216() {
    const island = { index: 216, start: "0x09FF", end: "0x0A02" };
    this.__line(island, "jump", "jump 16", "0x09FF");
    return this.trace;
  }

  island_217() {
    const island = { index: 217, start: "0x0A02", end: "0x0A0F" };
    this.__line(island, "assign", "s = (s + c0)", "0x0A0B");
    return this.trace;
  }

  island_218() {
    const island = { index: 218, start: "0x0A0F", end: "0x0A2C" };
    this.__line(island, "assign", "s = (floor((s * c1000)) / c1000)", "0x0A28");
    this.__line(island, "expr", "Math", "0x0A2B");
    return this.trace;
  }

  island_219() {
    const island = { index: 219, start: "0x0A2C", end: "0x0A33" };
    this.__line(island, "jump", "branch 0x0138", "0x0A30");
    this.__line(island, "stackTail", "staging", "0x0A33");
    return this.trace;
  }

  island_222() {
    const island = { index: 222, start: "0x0A4A", end: "0x0A53" };
    this.__line(island, "assign", "mph = c0", "0x0A4F");
    return this.trace;
  }

  island_223() {
    const island = { index: 223, start: "0x0A53", end: "0x0A5C" };
    this.__line(island, "assign", "carAccel = c0", "0x0A58");
    return this.trace;
  }

  island_224() {
    const island = { index: 224, start: "0x0A5C", end: "0x0A65" };
    this.__line(island, "assign", "carV = c0", "0x0A61");
    return this.trace;
  }

  island_225() {
    const island = { index: 225, start: "0x0A65", end: "0x0A68" };
    this.__line(island, "jump", "jump 0x0B68", "0x0A65");
    return this.trace;
  }

  island_226() {
    const island = { index: 226, start: "0x0A68", end: "0x0A74" };
    this.__line(island, "branch", "if not (s > c5) then goto 0x002A", "0x0A70");
    return this.trace;
  }

  island_227() {
    const island = { index: 227, start: "0x0A74", end: "0x0A7D" };
    this.__line(island, "assign", "s = c5", "0x0A79");
    return this.trace;
  }

  island_228() {
    const island = { index: 228, start: "0x0A7D", end: "0x0A86" };
    this.__line(island, "assign", "mph = c0", "0x0A82");
    return this.trace;
  }

  island_229() {
    const island = { index: 229, start: "0x0A86", end: "0x0A8F" };
    this.__line(island, "assign", "carAccel = c0", "0x0A8B");
    return this.trace;
  }

  island_230() {
    const island = { index: 230, start: "0x0A8F", end: "0x0A98" };
    this.__line(island, "assign", "carV = c0", "0x0A94");
    return this.trace;
  }

  island_231() {
    const island = { index: 231, start: "0x0A98", end: "0x0A9B" };
    this.__line(island, "jump", "jump 0x0B68", "0x0A98");
    return this.trace;
  }

  island_232() {
    const island = { index: 232, start: "0x0A9B", end: "0x0AA0" };
    this.__line(island, "assign", "rpm = 0", "0x0A9C");
    return this.trace;
  }

  island_233() {
    const island = { index: 233, start: "0x0AA0", end: "0x0AA5" };
    this.__line(island, "assign", "stockRedLine = 0", "0x0AA1");
    return this.trace;
  }

  island_235() {
    const island = { index: 235, start: "0x0ABE", end: "0x0AC3" };
    this.__line(island, "assign", "rpm = 1", "0x0ABF");
    return this.trace;
  }

  island_237() {
    const island = { index: 237, start: "0x0ADC", end: "0x0AE1" };
    this.__line(island, "assign", "stockRedLine = 1", "0x0ADD");
    return this.trace;
  }

  island_238() {
    const island = { index: 238, start: "0x0AE1", end: "0x0AF7" };
    this.__line(island, "branch", "if not (staged <> stockRedLine) then goto 0x0B68", "0x0AF3");
    this.__line(island, "stackTail", "(preStaged <> rpm)", "0x0AF7");
    return this.trace;
  }

  island_239() {
    const island = { index: 239, start: "0x0AF7", end: "0x0AFF" };
    this.__line(island, "assign", "preStaged = rpm", "0x0AFB");
    return this.trace;
  }

  island_240() {
    const island = { index: 240, start: "0x0AFF", end: "0x0B07" };
    this.__line(island, "assign", "staged = stockRedLine", "0x0B03");
    return this.trace;
  }

  island_241() {
    const island = { index: 241, start: "0x0B07", end: "0x0B0F" };
    this.__line(island, "jump", "jump 22016", "0x0B0C");
    this.__line(island, "stackTail", "stockRedLine", "0x0B0F");
    return this.trace;
  }

  island_242() {
    const island = { index: 242, start: "0x0B0F", end: "0x0B13" };
    this.__line(island, "jump", "branch 0x0023", "0x0B10");
    return this.trace;
  }

  island_243() {
    const island = { index: 243, start: "0x0B13", end: "0x0B30" };
    this.__line(island, "assign", "lightDelayTO = timeout(lightDelayTO).new(5000, symbol(stagedAndReady))", "0x0B2C");
    return this.trace;
  }

  island_244() {
    const island = { index: 244, start: "0x0B30", end: "0x0B33" };
    this.__line(island, "jump", "jump 0x0B4F", "0x0B30");
    return this.trace;
  }

  island_245() {
    const island = { index: 245, start: "0x0B33", end: "0x0B40" };
    this.__line(island, "marker", "0x62", "0x0B3B");
    this.__line(island, "branch", "if not (lightDelayTO = VOID_SENTINEL) then goto 0x0B4F", "0x0B3C");
    return this.trace;
  }

  island_246() {
    const island = { index: 246, start: "0x0B40", end: "0x0B4C" };
    this.__line(island, "expr", "forget()", "0x0B4B");
    this.__line(island, "stackTail", "lightDelayTO", "0x0B4C");
    return this.trace;
  }

  island_247() {
    const island = { index: 247, start: "0x0B4C", end: "0x0B4F" };
    this.__line(island, "stackTail", "sprite", "0x0B4F");
    return this.trace;
  }

  island_249() {
    const island = { index: 249, start: "0x0B65", end: "0x0B68" };
    this.__line(island, "jump", "jump 0x0CA7", "0x0B65");
    return this.trace;
  }

  island_250() {
    const island = { index: 250, start: "0x0B68", end: "0x0B73" };
    this.__line(island, "branch", "if not (rt = undefined) then goto 0x0337", "0x0B6F");
    return this.trace;
  }

  island_251() {
    const island = { index: 251, start: "0x0B73", end: "0x0B7F" };
    this.__line(island, "branch", "if not (theActualTime > lagThreshold) then goto 0x0014", "0x0B7B");
    return this.trace;
  }

  island_252() {
    const island = { index: 252, start: "0x0B7F", end: "0x0B8D" };
    this.__line(island, "assign", "badCounterRT = (badCounterRT + theActualTime)", "0x0B89");
    return this.trace;
  }

  island_253() {
    const island = { index: 253, start: "0x0B8D", end: "0x0B90" };
    this.__line(island, "jump", "jump 17", "0x0B8D");
    return this.trace;
  }

  island_254() {
    const island = { index: 254, start: "0x0B90", end: "0x0B9E" };
    this.__line(island, "assign", "goodCounterRT = (goodCounterRT + theActualTime)", "0x0B9A");
    return this.trace;
  }

  island_255() {
    const island = { index: 255, start: "0x0B9E", end: "0x0BAA" };
    this.__line(island, "branch", "if not (s >= c0) then goto 0x0EA7", "0x0BA6");
    return this.trace;
  }

  island_256() {
    const island = { index: 256, start: "0x0BAA", end: "0x0BB2" };
    this.__line(island, "assign", "c1_25 = c0", "0x0BAE");
    return this.trace;
  }

  island_257() {
    const island = { index: 257, start: "0x0BB2", end: "0x0BBD" };
    this.__line(island, "assign", "timeStartLine = milliseconds", "0x0BB9");
    this.__line(island, "expr", "_system", "0x0BBC");
    return this.trace;
  }

  island_258() {
    const island = { index: 258, start: "0x0BBD", end: "0x0BC9" };
    this.__line(island, "branch", "if not (timeGreen = c0) then goto 0x0C8F", "0x0BC5");
    return this.trace;
  }

  island_260() {
    const island = { index: 260, start: "0x0BD3", end: "0x0BEB" };
    this.__line(island, "expr", "runEngineSetLightOnCB(p, red)", "0x0BEA");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x0BEB");
    return this.trace;
  }

  island_261() {
    const island = { index: 261, start: "0x0BEB", end: "0x0BF6" };
    this.__line(island, "branch", "if not (raceType = KOTH) then jump 22", "0x0BF2");
    return this.trace;
  }

  island_262() {
    const island = { index: 262, start: "0x0BF6", end: "0x0C06" };
    this.__line(island, "expr", "KRT((KRT mod c1), EMPTY)", "0x0C05");
    return this.trace;
  }

  island_263() {
    const island = { index: 263, start: "0x0C06", end: "0x0C09" };
    this.__line(island, "jump", "jump 0x0C8C", "0x0C06");
    return this.trace;
  }

  island_264() {
    const island = { index: 264, start: "0x0C09", end: "0x0C14" };
    this.__line(island, "branch", "if not (raceType = QM) then jump 22", "0x0C10");
    return this.trace;
  }

  island_265() {
    const island = { index: 265, start: "0x0C14", end: "0x0C24" };
    this.__line(island, "expr", "RRT((RRT mod c1), EMPTY)", "0x0C23");
    return this.trace;
  }

  island_266() {
    const island = { index: 266, start: "0x0C24", end: "0x0C27" };
    this.__line(island, "jump", "jump 0x0C8C", "0x0C24");
    return this.trace;
  }

  island_267() {
    const island = { index: 267, start: "0x0C27", end: "0x0C3D" };
    this.__line(island, "branch", "if not (raceType = TEAMRIVAL) then jump 22", "0x0C39");
    this.__line(island, "stackTail", "(raceType = RIVAL)", "0x0C3D");
    return this.trace;
  }

  island_268() {
    const island = { index: 268, start: "0x0C3D", end: "0x0C4D" };
    this.__line(island, "expr", "RIVRT((RIVRT mod c1), EMPTY)", "0x0C4C");
    return this.trace;
  }

  island_269() {
    const island = { index: 269, start: "0x0C4D", end: "0x0C50" };
    this.__line(island, "jump", "jump 0x0C8C", "0x0C4D");
    return this.trace;
  }

  island_270() {
    const island = { index: 270, start: "0x0C50", end: "0x0C5B" };
    this.__line(island, "branch", "if not (raceType = HTQ) then jump 22", "0x0C57");
    return this.trace;
  }

  island_271() {
    const island = { index: 271, start: "0x0C5B", end: "0x0C6B" };
    this.__line(island, "expr", "HTQRT((HTQRT mod c1), EMPTY)", "0x0C6A");
    return this.trace;
  }

  island_272() {
    const island = { index: 272, start: "0x0C6B", end: "0x0C6E" };
    this.__line(island, "jump", "jump 0x0C8C", "0x0C6B");
    return this.trace;
  }

  island_273() {
    const island = { index: 273, start: "0x0C6E", end: "0x0C79" };
    this.__line(island, "branch", "if not (raceType = HT) then goto 0x0C8C", "0x0C75");
    return this.trace;
  }

  island_274() {
    const island = { index: 274, start: "0x0C79", end: "0x0C89" };
    this.__line(island, "expr", "HTRT((HTRT mod c1), EMPTY)", "0x0C88");
    return this.trace;
  }

  island_275() {
    const island = { index: 275, start: "0x0C89", end: "0x0C8C" };
    this.__line(island, "jump", "jump 0x0E78", "0x0C89");
    return this.trace;
  }

  island_276() {
    const island = { index: 276, start: "0x0C8C", end: "0x0C8F" };
    this.__line(island, "stackTail", "_system", "0x0C8F");
    return this.trace;
  }

  island_277() {
    const island = { index: 277, start: "0x0C8F", end: "0x0C96" };
    this.__line(island, "assign", "hp = milliseconds", "0x0C92");
    return this.trace;
  }

  island_278() {
    const island = { index: 278, start: "0x0C96", end: "0x0CA6" };
    this.__line(island, "jump", "jump 7734", "0x0CA3");
    this.__line(island, "stackTail", "(hp - timeGreen) | 1.6693", "0x0CA6");
    return this.trace;
  }

  island_280() {
    const island = { index: 280, start: "0x0CA7", end: "0x0CA9" };
    this.__line(island, "marker", "0x65", "0x0CA7");
    return this.trace;
  }

  island_281() {
    const island = { index: 281, start: "0x0CA9", end: "0x0CB5" };
    this.__line(island, "branch", "if not (rt < c0_5) then jump 198", "0x0CB1");
    return this.trace;
  }

  island_283() {
    const island = { index: 283, start: "0x0CBF", end: "0x0CCA" };
    this.__line(island, "branch", "if not (raceType = KOTH) then jump 22", "0x0CC6");
    return this.trace;
  }

  island_284() {
    const island = { index: 284, start: "0x0CCA", end: "0x0CDA" };
    this.__line(island, "expr", "KRT((KRT mod c1), EMPTY)", "0x0CD9");
    return this.trace;
  }

  island_285() {
    const island = { index: 285, start: "0x0CDA", end: "0x0CDD" };
    this.__line(island, "jump", "jump 0x0D60", "0x0CDA");
    return this.trace;
  }

  island_286() {
    const island = { index: 286, start: "0x0CDD", end: "0x0CE8" };
    this.__line(island, "branch", "if not (raceType = QM) then jump 22", "0x0CE4");
    return this.trace;
  }

  island_287() {
    const island = { index: 287, start: "0x0CE8", end: "0x0CF8" };
    this.__line(island, "expr", "RRT((RRT mod c1), EMPTY)", "0x0CF7");
    return this.trace;
  }

  island_288() {
    const island = { index: 288, start: "0x0CF8", end: "0x0CFB" };
    this.__line(island, "jump", "jump 0x0D60", "0x0CF8");
    return this.trace;
  }

  island_289() {
    const island = { index: 289, start: "0x0CFB", end: "0x0D11" };
    this.__line(island, "branch", "if not (raceType = TEAMRIVAL) then jump 22", "0x0D0D");
    this.__line(island, "stackTail", "(raceType = RIVAL)", "0x0D11");
    return this.trace;
  }

  island_290() {
    const island = { index: 290, start: "0x0D11", end: "0x0D21" };
    this.__line(island, "expr", "RIVRT((RIVRT mod c1), EMPTY)", "0x0D20");
    return this.trace;
  }

  island_291() {
    const island = { index: 291, start: "0x0D21", end: "0x0D24" };
    this.__line(island, "jump", "jump 0x0D60", "0x0D21");
    return this.trace;
  }

  island_292() {
    const island = { index: 292, start: "0x0D24", end: "0x0D2F" };
    this.__line(island, "branch", "if not (raceType = HTQ) then jump 22", "0x0D2B");
    return this.trace;
  }

  island_293() {
    const island = { index: 293, start: "0x0D2F", end: "0x0D3F" };
    this.__line(island, "expr", "HTQRT((HTQRT mod c1), EMPTY)", "0x0D3E");
    return this.trace;
  }

  island_294() {
    const island = { index: 294, start: "0x0D3F", end: "0x0D42" };
    this.__line(island, "jump", "jump 0x0D60", "0x0D3F");
    return this.trace;
  }

  island_295() {
    const island = { index: 295, start: "0x0D42", end: "0x0D4D" };
    this.__line(island, "branch", "if not (raceType = HT) then goto 0x0D60", "0x0D49");
    return this.trace;
  }

  island_296() {
    const island = { index: 296, start: "0x0D4D", end: "0x0D5D" };
    this.__line(island, "expr", "HTRT((HTRT mod c1), EMPTY)", "0x0D5C");
    return this.trace;
  }

  island_297() {
    const island = { index: 297, start: "0x0D5D", end: "0x0D60" };
    this.__line(island, "stackTail", "sprite", "0x0D60");
    return this.trace;
  }

  island_299() {
    const island = { index: 299, start: "0x0D75", end: "0x0D78" };
    this.__line(island, "jump", "jump 0x0E78", "0x0D75");
    return this.trace;
  }

  island_300() {
    const island = { index: 300, start: "0x0D78", end: "0x0D81" };
    this.__line(island, "branch", "if not (badCounterRT > VOID) then jump 19", "0x0D7D");
    return this.trace;
  }

  island_301() {
    const island = { index: 301, start: "0x0D81", end: "0x0D91" };
    this.__line(island, "assign", "c1_25 = lagTimeAddition(badCounterRT)", "0x0D8D");
    return this.trace;
  }

  island_302() {
    const island = { index: 302, start: "0x0D91", end: "0x0D9C" };
    this.__line(island, "branch", "if not (raceType = KOTH) then jump 36", "0x0D98");
    return this.trace;
  }

  island_303() {
    const island = { index: 303, start: "0x0D9C", end: "0x0DAF" };
    this.__line(island, "jump", "jump 0x1E56", "0x0DAC");
    this.__line(island, "stackTail", "KRT | (hp - timeGreen) | 1.6693", "0x0DAF");
    return this.trace;
  }

  island_305() {
    const island = { index: 305, start: "0x0DBA", end: "0x0DBD" };
    this.__line(island, "jump", "jump 0x0E78", "0x0DBA");
    return this.trace;
  }

  island_306() {
    const island = { index: 306, start: "0x0DBD", end: "0x0DC8" };
    this.__line(island, "branch", "if not (raceType = QM) then jump 36", "0x0DC4");
    return this.trace;
  }

  island_307() {
    const island = { index: 307, start: "0x0DC8", end: "0x0DDB" };
    this.__line(island, "jump", "jump 0x1E56", "0x0DD8");
    this.__line(island, "stackTail", "RRT | (hp - timeGreen) | 1.6693", "0x0DDB");
    return this.trace;
  }

  island_309() {
    const island = { index: 309, start: "0x0DE6", end: "0x0DE9" };
    this.__line(island, "jump", "jump 0x0E78", "0x0DE6");
    return this.trace;
  }

  island_310() {
    const island = { index: 310, start: "0x0DE9", end: "0x0DFF" };
    this.__line(island, "branch", "if not (raceType = TEAMRIVAL) then jump 36", "0x0DFB");
    this.__line(island, "stackTail", "(raceType = RIVAL)", "0x0DFF");
    return this.trace;
  }

  island_311() {
    const island = { index: 311, start: "0x0DFF", end: "0x0E12" };
    this.__line(island, "jump", "jump 0x1E56", "0x0E0F");
    this.__line(island, "stackTail", "RIVRT | (hp - timeGreen) | 1.6693", "0x0E12");
    return this.trace;
  }

  island_313() {
    const island = { index: 313, start: "0x0E1D", end: "0x0E20" };
    this.__line(island, "jump", "jump 0x0E78", "0x0E1D");
    return this.trace;
  }

  island_314() {
    const island = { index: 314, start: "0x0E20", end: "0x0E2B" };
    this.__line(island, "branch", "if not (raceType = HTQ) then jump 36", "0x0E27");
    return this.trace;
  }

  island_315() {
    const island = { index: 315, start: "0x0E2B", end: "0x0E3E" };
    this.__line(island, "jump", "jump 0x1E56", "0x0E3B");
    this.__line(island, "stackTail", "HTQRT | (hp - timeGreen) | 1.6693", "0x0E3E");
    return this.trace;
  }

  island_317() {
    const island = { index: 317, start: "0x0E49", end: "0x0E4C" };
    this.__line(island, "jump", "jump 0x0E78", "0x0E49");
    return this.trace;
  }

  island_318() {
    const island = { index: 318, start: "0x0E4C", end: "0x0E57" };
    this.__line(island, "branch", "if not (raceType = HT) then goto 0x0E78", "0x0E53");
    return this.trace;
  }

  island_319() {
    const island = { index: 319, start: "0x0E57", end: "0x0E6A" };
    this.__line(island, "jump", "jump 0x1E56", "0x0E67");
    this.__line(island, "stackTail", "HTRT | (hp - timeGreen) | 1.6693", "0x0E6A");
    return this.trace;
  }

  island_321() {
    const island = { index: 321, start: "0x0E75", end: "0x0E78" };
    this.__line(island, "stackTail", "sprite", "0x0E78");
    return this.trace;
  }

  island_324() {
    const island = { index: 324, start: "0x0EA4", end: "0x0EA7" };
    this.__line(island, "jump", "jump 0x002E", "0x0EA4");
    return this.trace;
  }

  island_325() {
    const island = { index: 325, start: "0x0EA7", end: "0x0EB3" };
    this.__line(island, "branch", "if not (theActualTime > lagThreshold) then goto 0x0014", "0x0EAF");
    return this.trace;
  }

  island_326() {
    const island = { index: 326, start: "0x0EB3", end: "0x0EC1" };
    this.__line(island, "assign", "badCounterET = (badCounterET + theActualTime)", "0x0EBD");
    return this.trace;
  }

  island_327() {
    const island = { index: 327, start: "0x0EC1", end: "0x0EC4" };
    this.__line(island, "jump", "jump 17", "0x0EC1");
    return this.trace;
  }

  island_328() {
    const island = { index: 328, start: "0x0EC4", end: "0x0ED2" };
    this.__line(island, "assign", "goodCounterET = (goodCounterET + theActualTime)", "0x0ECE");
    return this.trace;
  }

  island_329() {
    const island = { index: 329, start: "0x0ED2", end: "0x0EDE" };
    this.__line(island, "branch", "if not (s >= c1320) then jump 1704", "0x0EDA");
    return this.trace;
  }

  island_330() {
    const island = { index: 330, start: "0x0EDE", end: "0x0EE9" };
    this.__line(island, "branch", "if not (et = undefined) then goto 0x1583", "0x0EE5");
    return this.trace;
  }

  island_331() {
    const island = { index: 331, start: "0x0EE9", end: "0x0EF3" };
    this.__line(island, "assign", "hp = milliseconds", "0x0EEF");
    this.__line(island, "expr", "_system", "0x0EF2");
    return this.trace;
  }

  island_332() {
    const island = { index: 332, start: "0x0EF3", end: "0x0F03" };
    this.__line(island, "jump", "jump 7734", "0x0F00");
    this.__line(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x0F03");
    return this.trace;
  }

  island_333() {
    const island = { index: 333, start: "0x0F03", end: "0x0F23" };
    this.__line(island, "marker", "0x82 id_20801", "0x0F04");
    this.__line(island, "assign", "ts = (floor((mph * c100)) / c100)", "0x0F1F");
    this.__line(island, "expr", "Math", "0x0F22");
    return this.trace;
  }

  island_334() {
    const island = { index: 334, start: "0x0F23", end: "0x0F49" };
    this.__line(island, "assign", "c10000 = (floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x0F45");
    this.__line(island, "expr", "Math", "0x0F48");
    return this.trace;
  }

  island_335() {
    const island = { index: 335, start: "0x0F49", end: "0x0F6F" };
    this.__line(island, "assign", "c2 = (floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x0F6B");
    this.__line(island, "expr", "Math", "0x0F6E");
    return this.trace;
  }

  island_336() {
    const island = { index: 336, start: "0x0F6F", end: "0x0F95" };
    this.__line(island, "assign", "sprite = (floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100)", "0x0F91");
    this.__line(island, "expr", "Math", "0x0F94");
    return this.trace;
  }

  island_337() {
    const island = { index: 337, start: "0x0F95", end: "0x0FB6" };
    this.__line(island, "assign", "flashSP = (floor(((headGasketDamage / partBreakPoint) * c10000)) / c100)", "0x0FB2");
    this.__line(island, "expr", "Math", "0x0FB5");
    return this.trace;
  }

  island_338() {
    const island = { index: 338, start: "0x0FB6", end: "0x0FD7" };
    this.__line(island, "assign", "runEngineNOSCB = (floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100)", "0x0FD3");
    this.__line(island, "expr", "Math", "0x0FD6");
    return this.trace;
  }

  island_339() {
    const island = { index: 339, start: "0x0FD7", end: "0x0FF3" };
    this.__line(island, "assign", "nitrousTankSize = (floor((oilDamage * c10000)) / c100)", "0x0FEF");
    this.__line(island, "expr", "Math", "0x0FF2");
    return this.trace;
  }

  island_340() {
    const island = { index: 340, start: "0x0FF3", end: "0x100F" };
    this.__line(island, "assign", "c100 = (floor((oilFilterDamage * c10000)) / c100)", "0x100B");
    this.__line(island, "expr", "Math", "0x100E");
    return this.trace;
  }

  island_341() {
    const island = { index: 341, start: "0x100F", end: "0x102B" };
    this.__line(island, "assign", "revLimiter = (floor((coolantDamage * c10000)) / c100)", "0x1027");
    this.__line(island, "expr", "Math", "0x102A");
    return this.trace;
  }

  island_342() {
    const island = { index: 342, start: "0x102B", end: "0x1047" };
    this.__line(island, "assign", "c200 = (floor((nitrousRemaining * c100)) / c100)", "0x1043");
    this.__line(island, "expr", "Math", "0x1046");
    return this.trace;
  }

  island_343() {
    const island = { index: 343, start: "0x1047", end: "0x1063" };
    this.__line(island, "assign", "tqFlyFactor = (floor((raceGas * c100)) / c100)", "0x105F");
    this.__line(island, "expr", "Math", "0x1062");
    return this.trace;
  }

  island_344() {
    const island = { index: 344, start: "0x1063", end: "0x106E" };
    this.__line(island, "branch", "if not (c10000 > c100) then goto 0x1079", "0x106A");
    return this.trace;
  }

  island_345() {
    const island = { index: 345, start: "0x106E", end: "0x1076" };
    this.__line(island, "assign", "c10000 = c100", "0x1072");
    return this.trace;
  }

  island_346() {
    const island = { index: 346, start: "0x1076", end: "0x1079" };
    this.__line(island, "stackTail", "c2", "0x1079");
    return this.trace;
  }

  island_348() {
    const island = { index: 348, start: "0x1081", end: "0x1089" };
    this.__line(island, "assign", "c2 = c100", "0x1085");
    return this.trace;
  }

  island_349() {
    const island = { index: 349, start: "0x1089", end: "0x108C" };
    this.__line(island, "stackTail", "sprite", "0x108C");
    return this.trace;
  }

  island_351() {
    const island = { index: 351, start: "0x1094", end: "0x109C" };
    this.__line(island, "assign", "sprite = c100", "0x1098");
    return this.trace;
  }

  island_352() {
    const island = { index: 352, start: "0x109C", end: "0x109F" };
    this.__line(island, "stackTail", "flashSP", "0x109F");
    return this.trace;
  }

  island_354() {
    const island = { index: 354, start: "0x10A7", end: "0x10AF" };
    this.__line(island, "assign", "flashSP = c100", "0x10AB");
    return this.trace;
  }

  island_355() {
    const island = { index: 355, start: "0x10AF", end: "0x10B2" };
    this.__line(island, "stackTail", "runEngineNOSCB", "0x10B2");
    return this.trace;
  }

  island_357() {
    const island = { index: 357, start: "0x10BA", end: "0x10C2" };
    this.__line(island, "assign", "runEngineNOSCB = c100", "0x10BE");
    return this.trace;
  }

  island_358() {
    const island = { index: 358, start: "0x10C2", end: "0x10C5" };
    this.__line(island, "stackTail", "nitrousTankSize", "0x10C5");
    return this.trace;
  }

  island_360() {
    const island = { index: 360, start: "0x10CD", end: "0x10D5" };
    this.__line(island, "assign", "nitrousTankSize = c100", "0x10D1");
    return this.trace;
  }

  island_361() {
    const island = { index: 361, start: "0x10D5", end: "0x10D8" };
    this.__line(island, "stackTail", "c100", "0x10D8");
    return this.trace;
  }

  island_363() {
    const island = { index: 363, start: "0x10E0", end: "0x10E8" };
    this.__line(island, "assign", "c100 = c100", "0x10E4");
    return this.trace;
  }

  island_364() {
    const island = { index: 364, start: "0x10E8", end: "0x10EB" };
    this.__line(island, "stackTail", "revLimiter", "0x10EB");
    return this.trace;
  }

  island_366() {
    const island = { index: 366, start: "0x10F3", end: "0x10FB" };
    this.__line(island, "assign", "revLimiter = c100", "0x10F7");
    return this.trace;
  }

  island_367() {
    const island = { index: 367, start: "0x10FB", end: "0x10FE" };
    this.__line(island, "stackTail", "c200", "0x10FE");
    return this.trace;
  }

  island_369() {
    const island = { index: 369, start: "0x1106", end: "0x110E" };
    this.__line(island, "assign", "c200 = c100", "0x110A");
    return this.trace;
  }

  island_370() {
    const island = { index: 370, start: "0x110E", end: "0x1111" };
    this.__line(island, "stackTail", "tqFlyFactor", "0x1111");
    return this.trace;
  }

  island_372() {
    const island = { index: 372, start: "0x1119", end: "0x1121" };
    this.__line(island, "assign", "tqFlyFactor = c100", "0x111D");
    return this.trace;
  }

  island_373() {
    const island = { index: 373, start: "0x1121", end: "0x112C" };
    this.__line(island, "branch", "if not (raceType = KOTH) then goto 0x0088", "0x1128");
    return this.trace;
  }

  island_375() {
    const island = { index: 375, start: "0x1139", end: "0x1159" };
    this.__line(island, "marker", "0x04", "0x1157");
    this.__line(island, "expr", "1.4848", "0x1158");
    this.__line(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x1159");
    return this.trace;
  }

  island_376() {
    const island = { index: 376, start: "0x1159", end: "0x115C" };
    this.__line(island, "stackTail", "KDONE", "0x115C");
    return this.trace;
  }

  island_377() {
    const island = { index: 377, start: "0x115C", end: "0x116C" };
    this.__line(island, "jump", "jump 0x1E41", "0x1169");
    this.__line(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x116C");
    return this.trace;
  }

  island_379() {
    const island = { index: 379, start: "0x11AE", end: "0x11B1" };
    this.__line(island, "jump", "jump 0x1583", "0x11AE");
    return this.trace;
  }

  island_380() {
    const island = { index: 380, start: "0x11B1", end: "0x11BC" };
    this.__line(island, "branch", "if not (raceType = QM) then goto 0x007C", "0x11B8");
    return this.trace;
  }

  island_382() {
    const island = { index: 382, start: "0x11C9", end: "0x11DD" };
    this.__line(island, "expr", "RINT(s, carV, carAccel)", "0x11DC");
    return this.trace;
  }

  island_383() {
    const island = { index: 383, start: "0x11DD", end: "0x11E0" };
    this.__line(island, "stackTail", "RDONE", "0x11E0");
    return this.trace;
  }

  island_384() {
    const island = { index: 384, start: "0x11E0", end: "0x11F0" };
    this.__line(island, "jump", "jump 0x1E41", "0x11ED");
    this.__line(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x11F0");
    return this.trace;
  }

  island_386() {
    const island = { index: 386, start: "0x1232", end: "0x1235" };
    this.__line(island, "jump", "jump 0x1583", "0x1232");
    return this.trace;
  }

  island_387() {
    const island = { index: 387, start: "0x1235", end: "0x124B" };
    this.__line(island, "branch", "if not (raceType = TEAMRIVAL) then jump 190", "0x1247");
    this.__line(island, "stackTail", "(raceType = RIVAL)", "0x124B");
    return this.trace;
  }

  island_389() {
    const island = { index: 389, start: "0x1258", end: "0x1278" };
    this.__line(island, "marker", "0x04", "0x1276");
    this.__line(island, "expr", "1.4848", "0x1277");
    this.__line(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x1278");
    return this.trace;
  }

  island_390() {
    const island = { index: 390, start: "0x1278", end: "0x127B" };
    this.__line(island, "stackTail", "Math", "0x127B");
    return this.trace;
  }

  island_391() {
    const island = { index: 391, start: "0x127B", end: "0x129E" };
    this.__line(island, "assign", "gr = (floor((((beforePistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x129A");
    return this.trace;
  }

  island_392() {
    const island = { index: 392, start: "0x129E", end: "0x12A6" };
    this.__line(island, "assign", "thePD = c10000", "0x12A2");
    return this.trace;
  }

  island_393() {
    const island = { index: 393, start: "0x12A6", end: "0x12AE" };
    this.__line(island, "assign", "theBPD = gr", "0x12AA");
    return this.trace;
  }

  island_394() {
    const island = { index: 394, start: "0x12AE", end: "0x12C1" };
    this.__line(island, "jump", "jump 0x1E41", "0x12BE");
    this.__line(island, "stackTail", "RIVDONE | (hp - timeStartLine) | 1.6693", "0x12C1");
    return this.trace;
  }

  island_396() {
    const island = { index: 396, start: "0x1303", end: "0x1306" };
    this.__line(island, "jump", "jump 0x1583", "0x1303");
    return this.trace;
  }

  island_397() {
    const island = { index: 397, start: "0x1306", end: "0x1311" };
    this.__line(island, "branch", "if not (raceType = CT) then jump 306", "0x130D");
    return this.trace;
  }

  island_398() {
    const island = { index: 398, start: "0x1311", end: "0x132B" };
    this.__line(island, "expr", "ctFinishCB(et, ts)", "0x132A");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x132B");
    return this.trace;
  }

  island_399() {
    const island = { index: 399, start: "0x132B", end: "0x1344" };
    this.__line(island, "jump", "jump 0x1E83", "0x1341");
    this.__line(island, "stackTail", "executeCall | ctst | \"et=\" | (hp - timeStartLine) | 1.6693", "0x1344");
    return this.trace;
  }

  island_401() {
    const island = { index: 401, start: "0x143D", end: "0x1440" };
    this.__line(island, "jump", "jump 0x1583", "0x143D");
    return this.trace;
  }

  island_402() {
    const island = { index: 402, start: "0x1440", end: "0x144B" };
    this.__line(island, "branch", "if not (raceType = CTQ) then goto 0x0020", "0x1447");
    return this.trace;
  }

  island_403() {
    const island = { index: 403, start: "0x144B", end: "0x1465" };
    this.__line(island, "expr", "ctFinishCB(et, ts)", "0x1464");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x1465");
    return this.trace;
  }

  island_404() {
    const island = { index: 404, start: "0x1465", end: "0x1468" };
    this.__line(island, "jump", "jump 0x1583", "0x1465");
    return this.trace;
  }

  island_405() {
    const island = { index: 405, start: "0x1468", end: "0x1473" };
    this.__line(island, "branch", "if not (raceType = P) then goto 0x0020", "0x146F");
    return this.trace;
  }

  island_406() {
    const island = { index: 406, start: "0x1473", end: "0x148D" };
    this.__line(island, "expr", "practiceFinishCB(et, ts)", "0x148C");
    this.__line(island, "stackTail", "sprite(flashSP)", "0x148D");
    return this.trace;
  }

  island_407() {
    const island = { index: 407, start: "0x148D", end: "0x1490" };
    this.__line(island, "jump", "jump 0x1583", "0x148D");
    return this.trace;
  }

  island_408() {
    const island = { index: 408, start: "0x1490", end: "0x149B" };
    this.__line(island, "branch", "if not (raceType = HTQ) then jump 91", "0x1497");
    return this.trace;
  }

  island_409() {
    const island = { index: 409, start: "0x149B", end: "0x14AE" };
    this.__line(island, "jump", "jump 0x1E41", "0x14AB");
    this.__line(island, "stackTail", "HTQD | (hp - timeStartLine) | 1.6693", "0x14AE");
    return this.trace;
  }

  island_411() {
    const island = { index: 411, start: "0x14F0", end: "0x14F3" };
    this.__line(island, "jump", "jump 0x1583", "0x14F0");
    return this.trace;
  }

  island_412() {
    const island = { index: 412, start: "0x14F3", end: "0x14FE" };
    this.__line(island, "branch", "if not (raceType = HT) then goto 0x1583", "0x14FA");
    return this.trace;
  }

  island_414() {
    const island = { index: 414, start: "0x150B", end: "0x152B" };
    this.__line(island, "marker", "0x04", "0x1529");
    this.__line(island, "expr", "1.4848", "0x152A");
    this.__line(island, "stackTail", "INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)", "0x152B");
    return this.trace;
  }

  island_415() {
    const island = { index: 415, start: "0x152B", end: "0x152E" };
    this.__line(island, "stackTail", "HTD", "0x152E");
    return this.trace;
  }

  island_416() {
    const island = { index: 416, start: "0x152E", end: "0x153E" };
    this.__line(island, "jump", "jump 0x1E41", "0x153B");
    this.__line(island, "stackTail", "(hp - timeStartLine) | 1.6693", "0x153E");
    return this.trace;
  }

  island_418() {
    const island = { index: 418, start: "0x1580", end: "0x1583" };
    this.__line(island, "jump", "jump 0x028C", "0x1580");
    return this.trace;
  }

  island_419() {
    const island = { index: 419, start: "0x1583", end: "0x1597" };
    this.__line(island, "jump", "branch 632", "0x1594");
    this.__line(island, "stackTail", "((s >= c760) and isMidMd5sent)", "0x1597");
    return this.trace;
  }

  island_420() {
    const island = { index: 420, start: "0x1597", end: "0x159D" };
    this.__line(island, "assign", "isMidMd5sent = 1", "0x1599");
    return this.trace;
  }

  island_422() {
    const island = { index: 422, start: "0x15DF", end: "0x1605" };
    this.__line(island, "assign", "c10000 = (floor((((pistonDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x1601");
    this.__line(island, "expr", "Math", "0x1604");
    return this.trace;
  }

  island_423() {
    const island = { index: 423, start: "0x1605", end: "0x162B" };
    this.__line(island, "assign", "c2 = (floor((((rodDamage / partBreakPoint) / cylinderNumber) * c10000)) / c100)", "0x1627");
    this.__line(island, "expr", "Math", "0x162A");
    return this.trace;
  }

  island_424() {
    const island = { index: 424, start: "0x162B", end: "0x1651" };
    this.__line(island, "assign", "sprite = (floor((((valveDamage / partBreakPoint) / valveNumber) * c10000)) / c100)", "0x164D");
    this.__line(island, "expr", "Math", "0x1650");
    return this.trace;
  }

  island_425() {
    const island = { index: 425, start: "0x1651", end: "0x1672" };
    this.__line(island, "assign", "flashSP = (floor(((headGasketDamage / partBreakPoint) * c10000)) / c100)", "0x166E");
    this.__line(island, "expr", "Math", "0x1671");
    return this.trace;
  }

  island_426() {
    const island = { index: 426, start: "0x1672", end: "0x1693" };
    this.__line(island, "assign", "runEngineNOSCB = (floor(((engineBlockDamage / partBreakPoint) * c10000)) / c100)", "0x168F");
    this.__line(island, "expr", "Math", "0x1692");
    return this.trace;
  }

  island_427() {
    const island = { index: 427, start: "0x1693", end: "0x16AF" };
    this.__line(island, "assign", "nitrousTankSize = (floor((oilDamage * c10000)) / c100)", "0x16AB");
    this.__line(island, "expr", "Math", "0x16AE");
    return this.trace;
  }

  island_428() {
    const island = { index: 428, start: "0x16AF", end: "0x16CB" };
    this.__line(island, "assign", "c100 = (floor((oilFilterDamage * c10000)) / c100)", "0x16C7");
    this.__line(island, "expr", "Math", "0x16CA");
    return this.trace;
  }

  island_429() {
    const island = { index: 429, start: "0x16CB", end: "0x16E7" };
    this.__line(island, "assign", "revLimiter = (floor((coolantDamage * c10000)) / c100)", "0x16E3");
    this.__line(island, "expr", "Math", "0x16E6");
    return this.trace;
  }

  island_430() {
    const island = { index: 430, start: "0x16E7", end: "0x1703" };
    this.__line(island, "assign", "c200 = (floor((nitrousRemaining * c100)) / c100)", "0x16FF");
    this.__line(island, "expr", "Math", "0x1702");
    return this.trace;
  }

  island_431() {
    const island = { index: 431, start: "0x1703", end: "0x171F" };
    this.__line(island, "assign", "tqFlyFactor = (floor((raceGas * c100)) / c100)", "0x171B");
    this.__line(island, "expr", "Math", "0x171E");
    return this.trace;
  }

  island_432() {
    const island = { index: 432, start: "0x171F", end: "0x172A" };
    this.__line(island, "branch", "if not (c10000 > c100) then goto 0x1735", "0x1726");
    return this.trace;
  }

  island_433() {
    const island = { index: 433, start: "0x172A", end: "0x1732" };
    this.__line(island, "assign", "c10000 = c100", "0x172E");
    return this.trace;
  }

  island_434() {
    const island = { index: 434, start: "0x1732", end: "0x1735" };
    this.__line(island, "stackTail", "c2", "0x1735");
    return this.trace;
  }

  island_436() {
    const island = { index: 436, start: "0x173D", end: "0x1745" };
    this.__line(island, "assign", "c2 = c100", "0x1741");
    return this.trace;
  }

  island_437() {
    const island = { index: 437, start: "0x1745", end: "0x1748" };
    this.__line(island, "stackTail", "sprite", "0x1748");
    return this.trace;
  }

  island_439() {
    const island = { index: 439, start: "0x1750", end: "0x1758" };
    this.__line(island, "assign", "sprite = c100", "0x1754");
    return this.trace;
  }

  island_440() {
    const island = { index: 440, start: "0x1758", end: "0x175B" };
    this.__line(island, "stackTail", "flashSP", "0x175B");
    return this.trace;
  }

  island_442() {
    const island = { index: 442, start: "0x1763", end: "0x176B" };
    this.__line(island, "assign", "flashSP = c100", "0x1767");
    return this.trace;
  }

  island_443() {
    const island = { index: 443, start: "0x176B", end: "0x176E" };
    this.__line(island, "stackTail", "runEngineNOSCB", "0x176E");
    return this.trace;
  }

  island_445() {
    const island = { index: 445, start: "0x1776", end: "0x177E" };
    this.__line(island, "assign", "runEngineNOSCB = c100", "0x177A");
    return this.trace;
  }

  island_446() {
    const island = { index: 446, start: "0x177E", end: "0x1781" };
    this.__line(island, "stackTail", "nitrousTankSize", "0x1781");
    return this.trace;
  }

  island_448() {
    const island = { index: 448, start: "0x1789", end: "0x1791" };
    this.__line(island, "assign", "nitrousTankSize = c100", "0x178D");
    return this.trace;
  }

  island_449() {
    const island = { index: 449, start: "0x1791", end: "0x1794" };
    this.__line(island, "stackTail", "c100", "0x1794");
    return this.trace;
  }

  island_451() {
    const island = { index: 451, start: "0x179C", end: "0x17A4" };
    this.__line(island, "assign", "c100 = c100", "0x17A0");
    return this.trace;
  }

  island_452() {
    const island = { index: 452, start: "0x17A4", end: "0x17A7" };
    this.__line(island, "stackTail", "revLimiter", "0x17A7");
    return this.trace;
  }

  island_454() {
    const island = { index: 454, start: "0x17AF", end: "0x17B7" };
    this.__line(island, "assign", "revLimiter = c100", "0x17B3");
    return this.trace;
  }

  island_455() {
    const island = { index: 455, start: "0x17B7", end: "0x17BA" };
    this.__line(island, "stackTail", "c200", "0x17BA");
    return this.trace;
  }

  island_457() {
    const island = { index: 457, start: "0x17C2", end: "0x17CA" };
    this.__line(island, "assign", "c200 = c100", "0x17C6");
    return this.trace;
  }

  island_458() {
    const island = { index: 458, start: "0x17CA", end: "0x17CD" };
    this.__line(island, "stackTail", "tqFlyFactor", "0x17CD");
    return this.trace;
  }

  island_460() {
    const island = { index: 460, start: "0x17D5", end: "0x17DD" };
    this.__line(island, "assign", "tqFlyFactor = c100", "0x17D9");
    return this.trace;
  }

  island_461() {
    const island = { index: 461, start: "0x17DD", end: "0x17E0" };
    this.__line(island, "stackTail", "M", "0x17E0");
    return this.trace;
  }

  island_463() {
    const island = { index: 463, start: "0x180C", end: "0x1819" };
    this.__line(island, "assign", "fgr = (boostPsi - stockBoost)", "0x1815");
    return this.trace;
  }

  island_464() {
    const island = { index: 464, start: "0x1819", end: "0x1821" };
    this.__line(island, "branch", "if not (fgr < VOID) then jump 8", "0x181D");
    return this.trace;
  }

  island_465() {
    const island = { index: 465, start: "0x1821", end: "0x1826" };
    this.__line(island, "assign", "fgr = VOID", "0x1822");
    return this.trace;
  }

  island_466() {
    const island = { index: 466, start: "0x1826", end: "0x183D" };
    this.__line(island, "assign", "dangerLevel = (dangerLevel + (fgr + (pistonCompressionLevel * c7)))", "0x1839");
    return this.trace;
  }

  island_467() {
    const island = { index: 467, start: "0x183D", end: "0x1849" };
    this.__line(island, "branch", "if not (pistonCompressionLevel < c0) then jump 25", "0x1845");
    return this.trace;
  }

  island_468() {
    const island = { index: 468, start: "0x1849", end: "0x185C" };
    this.__line(island, "assign", "engineDamageRisk = (engineDamageRisk + (pistonCompressionLevel * c1_8))", "0x1858");
    return this.trace;
  }

  island_469() {
    const island = { index: 469, start: "0x185C", end: "0x185F" };
    this.__line(island, "jump", "jump 0x001B", "0x185C");
    return this.trace;
  }

  island_470() {
    const island = { index: 470, start: "0x185F", end: "0x1877" };
    this.__line(island, "assign", "engineDamageRisk = (engineDamageRisk + ((boostPsi * pistonCompressionLevel) * c0_5))", "0x1873");
    return this.trace;
  }

  island_471() {
    const island = { index: 471, start: "0x1877", end: "0x1883" };
    this.__line(island, "branch", "if not (engineDamageRisk < c0) then jump 9", "0x187F");
    return this.trace;
  }

  island_472() {
    const island = { index: 472, start: "0x1883", end: "0x1889" };
    this.__line(island, "assign", "engineDamageRisk = VOID", "0x1885");
    return this.trace;
  }

  island_473() {
    const island = { index: 473, start: "0x1889", end: "0x189A" };
    this.__line(island, "branch", "if not (rpm > (stockRedLine * c1_15)) then goto 0x18B9", "0x1896");
    return this.trace;
  }

  island_474() {
    const island = { index: 474, start: "0x189A", end: "0x18A8" };
    this.__line(island, "assign", "dangerLevel = (dangerLevel * c2)", "0x18A4");
    return this.trace;
  }

  island_475() {
    const island = { index: 475, start: "0x18A8", end: "0x18B6" };
    this.__line(island, "assign", "engineDamageRisk = (engineDamageRisk * c80)", "0x18B2");
    return this.trace;
  }

  island_476() {
    const island = { index: 476, start: "0x18B6", end: "0x18B9" };
    this.__line(island, "stackTail", "timeFromLastFrame", "0x18B9");
    return this.trace;
  }

  island_478() {
    const island = { index: 478, start: "0x18C7", end: "0x18D2" };
    this.__line(island, "branch", "if not (rpmGearConversion > c0) then jump 16", "0x18CE");
    return this.trace;
  }

  island_479() {
    const island = { index: 479, start: "0x18D2", end: "0x18DF" };
    this.__line(island, "assign", "dangerLevel = (dangerLevel + rpmGearConversion)", "0x18DB");
    return this.trace;
  }

  island_480() {
    const island = { index: 480, start: "0x18DF", end: "0x18EB" };
    this.__line(island, "branch", "if not (oilDurability > c0) then goto 0x005D", "0x18E7");
    return this.trace;
  }

  island_481() {
    const island = { index: 481, start: "0x18EB", end: "0x1914" };
    this.__line(island, "assign", "oilDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x1910");
    this.__line(island, "expr", "(oilDamage / ((c100 - oilDurability) ^ 1.6693))", "0x1913");
    return this.trace;
  }

  island_482() {
    const island = { index: 482, start: "0x1914", end: "0x1920" };
    this.__line(island, "branch", "if not (oilDamage >= c100) then jump 15", "0x191C");
    return this.trace;
  }

  island_483() {
    const island = { index: 483, start: "0x1920", end: "0x1929" };
    this.__line(island, "assign", "oilDamage = c100", "0x1925");
    return this.trace;
  }

  island_484() {
    const island = { index: 484, start: "0x1929", end: "0x192C" };
    this.__line(island, "jump", "jump 28", "0x1929");
    return this.trace;
  }

  island_486() {
    const island = { index: 486, start: "0x1945", end: "0x194E" };
    this.__line(island, "assign", "beforeDangerLevel = dangerLevel", "0x194A");
    return this.trace;
  }

  island_487() {
    const island = { index: 487, start: "0x194E", end: "0x195A" };
    this.__line(island, "branch", "if not (radiatorDurability > c0) then jump 28", "0x1956");
    return this.trace;
  }

  island_489() {
    const island = { index: 489, start: "0x1973", end: "0x197F" };
    this.__line(island, "branch", "if not (oilFilterDurability > c0) then goto 0x005D", "0x197B");
    return this.trace;
  }

  island_490() {
    const island = { index: 490, start: "0x197F", end: "0x19A8" };
    this.__line(island, "assign", "oilFilterDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x19A4");
    this.__line(island, "expr", "(oilFilterDamage / ((c100 - oilFilterDurability) ^ 1.6693))", "0x19A7");
    return this.trace;
  }

  island_491() {
    const island = { index: 491, start: "0x19A8", end: "0x19B4" };
    this.__line(island, "branch", "if not (oilFilterDamage >= c100) then jump 15", "0x19B0");
    return this.trace;
  }

  island_492() {
    const island = { index: 492, start: "0x19B4", end: "0x19BD" };
    this.__line(island, "assign", "oilFilterDamage = c100", "0x19B9");
    return this.trace;
  }

  island_493() {
    const island = { index: 493, start: "0x19BD", end: "0x19C0" };
    this.__line(island, "jump", "jump 28", "0x19BD");
    return this.trace;
  }

  island_495() {
    const island = { index: 495, start: "0x19D9", end: "0x19E5" };
    this.__line(island, "branch", "if not (coolantDurability > c0) then goto 0x1A42", "0x19E1");
    return this.trace;
  }

  island_496() {
    const island = { index: 496, start: "0x19E5", end: "0x1A0E" };
    this.__line(island, "assign", "coolantDamage = ((rpm / stockRedLine) + (0.7489 / c10000))", "0x1A0A");
    this.__line(island, "expr", "(coolantDamage / ((c100 - coolantDurability) ^ 1.6693))", "0x1A0D");
    return this.trace;
  }

  island_497() {
    const island = { index: 497, start: "0x1A0E", end: "0x1A1A" };
    this.__line(island, "branch", "if not (coolantDamage >= c100) then jump 15", "0x1A16");
    return this.trace;
  }

  island_498() {
    const island = { index: 498, start: "0x1A1A", end: "0x1A23" };
    this.__line(island, "assign", "coolantDamage = c100", "0x1A1F");
    return this.trace;
  }

  island_499() {
    const island = { index: 499, start: "0x1A23", end: "0x1A26" };
    this.__line(island, "jump", "jump 0x1A42", "0x1A23");
    return this.trace;
  }

  island_501() {
    const island = { index: 501, start: "0x1A3F", end: "0x1A42" };
    this.__line(island, "stackTail", "r", "0x1A42");
    return this.trace;
  }

  island_503() {
    const island = { index: 503, start: "0x1A43", end: "0x1A47" };
    this.__line(island, "expr", "negTq", "0x1A46");
    return this.trace;
  }

  island_504() {
    const island = { index: 504, start: "0x1A47", end: "0x1A53" };
    this.__line(island, "branch", "if not (pistonDurability < dangerLevel) then jump 19", "0x1A4F");
    return this.trace;
  }

  island_505() {
    const island = { index: 505, start: "0x1A53", end: "0x1A60" };
    this.__line(island, "assign", "r = (dangerLevel * c0_95)", "0x1A5C");
    return this.trace;
  }

  island_506() {
    const island = { index: 506, start: "0x1A60", end: "0x1A63" };
    this.__line(island, "jump", "jump 16", "0x1A60");
    return this.trace;
  }

  island_507() {
    const island = { index: 507, start: "0x1A63", end: "0x1A70" };
    this.__line(island, "assign", "r = (pistonDurability * c0_95)", "0x1A6C");
    return this.trace;
  }

  island_509() {
    const island = { index: 509, start: "0x1A82", end: "0x1A86" };
    this.__line(island, "expr", "c9", "0x1A85");
    return this.trace;
  }

  island_510() {
    const island = { index: 510, start: "0x1A86", end: "0x1A92" };
    this.__line(island, "branch", "if not (pistonDurability < beforeDangerLevel) then jump 19", "0x1A8E");
    return this.trace;
  }

  island_511() {
    const island = { index: 511, start: "0x1A92", end: "0x1A9F" };
    this.__line(island, "assign", "c9 = (beforeDangerLevel * c0_95)", "0x1A9B");
    return this.trace;
  }

  island_512() {
    const island = { index: 512, start: "0x1A9F", end: "0x1AA2" };
    this.__line(island, "jump", "jump 16", "0x1A9F");
    return this.trace;
  }

  island_513() {
    const island = { index: 513, start: "0x1AA2", end: "0x1AAF" };
    this.__line(island, "assign", "c9 = (pistonDurability * c0_95)", "0x1AAB");
    return this.trace;
  }

  island_515() {
    const island = { index: 515, start: "0x1AC1", end: "0x1ACC" };
    this.__line(island, "branch", "if not (c299 < c0) then goto 0x1AD7", "0x1AC8");
    return this.trace;
  }

  island_516() {
    const island = { index: 516, start: "0x1ACC", end: "0x1AD4" };
    this.__line(island, "assign", "c299 = c0", "0x1AD0");
    return this.trace;
  }

  island_517() {
    const island = { index: 517, start: "0x1AD4", end: "0x1AD7" };
    this.__line(island, "stackTail", "negTq", "0x1AD7");
    return this.trace;
  }

  island_519() {
    const island = { index: 519, start: "0x1ADF", end: "0x1AE7" };
    this.__line(island, "assign", "negTq = c0", "0x1AE3");
    return this.trace;
  }

  island_520() {
    const island = { index: 520, start: "0x1AE7", end: "0x1B07" };
    this.__line(island, "assign", "pistonDamage = (pistonDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1B03");
    return this.trace;
  }

  island_521() {
    const island = { index: 521, start: "0x1B07", end: "0x1B27" };
    this.__line(island, "assign", "beforePistonDamage = (beforePistonDamage + (((engineDamageRisk / c100) * c299) + (c299 * c0_05)))", "0x1B23");
    return this.trace;
  }

  island_522() {
    const island = { index: 522, start: "0x1B27", end: "0x1B3F" };
    this.__line(island, "assign", "pistonBroken = floor((pistonDamage / partBreakPoint))", "0x1B3B");
    this.__line(island, "expr", "Math", "0x1B3E");
    return this.trace;
  }

  island_523() {
    const island = { index: 523, start: "0x1B3F", end: "0x1B4B" };
    this.__line(island, "branch", "if not (pistonBroken > cylinderNumber) then jump 12", "0x1B47");
    return this.trace;
  }

  island_524() {
    const island = { index: 524, start: "0x1B4B", end: "0x1B54" };
    this.__line(island, "assign", "pistonBroken = cylinderNumber", "0x1B50");
    return this.trace;
  }

  island_525() {
    const island = { index: 525, start: "0x1B54", end: "0x1B60" };
    this.__line(island, "branch", "if not (rodDurability < dangerLevel) then jump 19", "0x1B5C");
    return this.trace;
  }

  island_526() {
    const island = { index: 526, start: "0x1B60", end: "0x1B6D" };
    this.__line(island, "assign", "r = (dangerLevel * c0_95)", "0x1B69");
    return this.trace;
  }

  island_527() {
    const island = { index: 527, start: "0x1B6D", end: "0x1B70" };
    this.__line(island, "jump", "jump 16", "0x1B6D");
    return this.trace;
  }

  island_528() {
    const island = { index: 528, start: "0x1B70", end: "0x1B7D" };
    this.__line(island, "assign", "r = (rodDurability * c0_95)", "0x1B79");
    return this.trace;
  }

  island_530() {
    const island = { index: 530, start: "0x1B8F", end: "0x1B9A" };
    this.__line(island, "branch", "if not (negTq < c0) then jump 11", "0x1B96");
    return this.trace;
  }

  island_531() {
    const island = { index: 531, start: "0x1B9A", end: "0x1BA2" };
    this.__line(island, "assign", "negTq = c0", "0x1B9E");
    return this.trace;
  }

  island_532() {
    const island = { index: 532, start: "0x1BA2", end: "0x1BC2" };
    this.__line(island, "assign", "rodDamage = (rodDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1BBE");
    return this.trace;
  }

  island_533() {
    const island = { index: 533, start: "0x1BC2", end: "0x1BDA" };
    this.__line(island, "assign", "rodBroken = floor((rodDamage / partBreakPoint))", "0x1BD6");
    this.__line(island, "expr", "Math", "0x1BD9");
    return this.trace;
  }

  island_534() {
    const island = { index: 534, start: "0x1BDA", end: "0x1BE6" };
    this.__line(island, "branch", "if not (rodBroken > cylinderNumber) then jump 12", "0x1BE2");
    return this.trace;
  }

  island_535() {
    const island = { index: 535, start: "0x1BE6", end: "0x1BEF" };
    this.__line(island, "assign", "rodBroken = cylinderNumber", "0x1BEB");
    return this.trace;
  }

  island_536() {
    const island = { index: 536, start: "0x1BEF", end: "0x1BFB" };
    this.__line(island, "branch", "if not (valveDurability < dangerLevel) then jump 19", "0x1BF7");
    return this.trace;
  }

  island_537() {
    const island = { index: 537, start: "0x1BFB", end: "0x1C08" };
    this.__line(island, "assign", "r = (dangerLevel * c0_95)", "0x1C04");
    return this.trace;
  }

  island_538() {
    const island = { index: 538, start: "0x1C08", end: "0x1C0B" };
    this.__line(island, "jump", "jump 16", "0x1C08");
    return this.trace;
  }

  island_539() {
    const island = { index: 539, start: "0x1C0B", end: "0x1C18" };
    this.__line(island, "assign", "r = (valveDurability * c0_95)", "0x1C14");
    return this.trace;
  }

  island_541() {
    const island = { index: 541, start: "0x1C2A", end: "0x1C35" };
    this.__line(island, "branch", "if not (negTq < c0) then jump 11", "0x1C31");
    return this.trace;
  }

  island_542() {
    const island = { index: 542, start: "0x1C35", end: "0x1C3D" };
    this.__line(island, "assign", "negTq = c0", "0x1C39");
    return this.trace;
  }

  island_543() {
    const island = { index: 543, start: "0x1C3D", end: "0x1C5D" };
    this.__line(island, "assign", "valveDamage = (valveDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1C59");
    return this.trace;
  }

  island_544() {
    const island = { index: 544, start: "0x1C5D", end: "0x1C75" };
    this.__line(island, "assign", "valveBroken = floor((valveDamage / partBreakPoint))", "0x1C71");
    this.__line(island, "expr", "Math", "0x1C74");
    return this.trace;
  }

  island_545() {
    const island = { index: 545, start: "0x1C75", end: "0x1C81" };
    this.__line(island, "branch", "if not (valveBroken > valveNumber) then jump 12", "0x1C7D");
    return this.trace;
  }

  island_546() {
    const island = { index: 546, start: "0x1C81", end: "0x1C8A" };
    this.__line(island, "assign", "valveBroken = valveNumber", "0x1C86");
    return this.trace;
  }

  island_547() {
    const island = { index: 547, start: "0x1C8A", end: "0x1C96" };
    this.__line(island, "branch", "if not (engineBlockDurability < dangerLevel) then jump 19", "0x1C92");
    return this.trace;
  }

  island_548() {
    const island = { index: 548, start: "0x1C96", end: "0x1CA3" };
    this.__line(island, "assign", "r = (dangerLevel * c0_95)", "0x1C9F");
    return this.trace;
  }

  island_549() {
    const island = { index: 549, start: "0x1CA3", end: "0x1CA6" };
    this.__line(island, "jump", "jump 16", "0x1CA3");
    return this.trace;
  }

  island_550() {
    const island = { index: 550, start: "0x1CA6", end: "0x1CB3" };
    this.__line(island, "assign", "r = (engineBlockDurability * c0_95)", "0x1CAF");
    return this.trace;
  }

  island_552() {
    const island = { index: 552, start: "0x1CC5", end: "0x1CD0" };
    this.__line(island, "branch", "if not (negTq < c0) then jump 11", "0x1CCC");
    return this.trace;
  }

  island_553() {
    const island = { index: 553, start: "0x1CD0", end: "0x1CD8" };
    this.__line(island, "assign", "negTq = c0", "0x1CD4");
    return this.trace;
  }

  island_554() {
    const island = { index: 554, start: "0x1CD8", end: "0x1CF8" };
    this.__line(island, "assign", "engineBlockDamage = (engineBlockDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1CF4");
    return this.trace;
  }

  island_555() {
    const island = { index: 555, start: "0x1CF8", end: "0x1D10" };
    this.__line(island, "assign", "engineBlockBroken = floor((engineBlockDamage / partBreakPoint))", "0x1D0C");
    this.__line(island, "expr", "Math", "0x1D0F");
    return this.trace;
  }

  island_556() {
    const island = { index: 556, start: "0x1D10", end: "0x1D1C" };
    this.__line(island, "branch", "if not (engineBlockBroken > c1) then jump 12", "0x1D18");
    return this.trace;
  }

  island_557() {
    const island = { index: 557, start: "0x1D1C", end: "0x1D25" };
    this.__line(island, "assign", "engineBlockBroken = c1", "0x1D21");
    return this.trace;
  }

  island_558() {
    const island = { index: 558, start: "0x1D25", end: "0x1D31" };
    this.__line(island, "branch", "if not (headGasketDurability < dangerLevel) then jump 19", "0x1D2D");
    return this.trace;
  }

  island_559() {
    const island = { index: 559, start: "0x1D31", end: "0x1D3A" };
    this.__line(island, "stackTail", "(dangerLevel * c0_95)", "0x1D3A");
    return this.trace;
  }

  island_561() {
    const island = { index: 561, start: "0x1D3E", end: "0x1D41" };
    this.__line(island, "jump", "jump 16", "0x1D3E");
    return this.trace;
  }

  island_562() {
    const island = { index: 562, start: "0x1D41", end: "0x1D4E" };
    this.__line(island, "assign", "r = (headGasketDurability * c0_95)", "0x1D4A");
    return this.trace;
  }

  island_564() {
    const island = { index: 564, start: "0x1D60", end: "0x1D6B" };
    this.__line(island, "branch", "if not (negTq < c0) then jump 11", "0x1D67");
    return this.trace;
  }

  island_565() {
    const island = { index: 565, start: "0x1D6B", end: "0x1D73" };
    this.__line(island, "assign", "negTq = c0", "0x1D6F");
    return this.trace;
  }

  island_566() {
    const island = { index: 566, start: "0x1D73", end: "0x1D93" };
    this.__line(island, "assign", "headGasketDamage = (headGasketDamage + (((engineDamageRisk / c100) * negTq) + (negTq * c0_05)))", "0x1D8F");
    return this.trace;
  }

  island_567() {
    const island = { index: 567, start: "0x1D93", end: "0x1DAB" };
    this.__line(island, "assign", "headGasketBroken = floor((headGasketDamage / partBreakPoint))", "0x1DA7");
    this.__line(island, "expr", "Math", "0x1DAA");
    return this.trace;
  }

  island_568() {
    const island = { index: 568, start: "0x1DAB", end: "0x1DB7" };
    this.__line(island, "branch", "if not (headGasketBroken > c1) then jump 12", "0x1DB3");
    return this.trace;
  }

  island_569() {
    const island = { index: 569, start: "0x1DB7", end: "0x1DC0" };
    this.__line(island, "assign", "headGasketBroken = c1", "0x1DBC");
    return this.trace;
  }

  island_570() {
    const island = { index: 570, start: "0x1DC0", end: "0x1E05" };
    this.__line(island, "assign", "engineDamage = ((((((pistonBroken / cylinderNumber) * c0_4) + ((valveBroken / valveNumber) * c0_2)) + ((rodBroken / cylinderNumber) * c0_1)) + (headGasketBroken * c0_1)) + (engineBlockBroken * c0_4))", "0x1E01");
    return this.trace;
  }

  island_571() {
    const island = { index: 571, start: "0x1E05", end: "0x1E11" };
    this.__line(island, "branch", "if not (engineDamage > c0_65) then jump 12", "0x1E0D");
    return this.trace;
  }

  island_572() {
    const island = { index: 572, start: "0x1E11", end: "0x1E1A" };
    this.__line(island, "assign", "engineDamage = c0_65", "0x1E16");
    return this.trace;
  }

  island_574() {
    const island = { index: 574, start: "0x1E2E", end: "0x1E34" };
    this.__line(island, "assign", "isEngineLightOn = 1", "0x1E30");
    return this.trace;
  }

  island_575() {
    const island = { index: 575, start: "0x1E34", end: "0x1E41" };
    this.__line(island, "stackTail", "sprite(flashSP) | runEngineDamageLightCB", "0x1E41");
    return this.trace;
  }

  island_577() {
    const island = { index: 577, start: "0x1E46", end: "0x1E4F" };
    this.__line(island, "branch", "if not (timeAnchor > VOID) then goto 0x1E83", "0x1E4B");
    return this.trace;
  }

  island_578() {
    const island = { index: 578, start: "0x1E4F", end: "0x1E56" };
    this.__line(island, "stackTail", "sprite | flashSP", "0x1E56");
    return this.trace;
  }

  island_581() {
    const island = { index: 581, start: "0x1E7D", end: "0x1E80" };
    this.__line(island, "jump", "jump 0x0026", "0x1E7D");
    return this.trace;
  }

  island_582() {
    const island = { index: 582, start: "0x1E80", end: "0x1E83" };
    this.__line(island, "stackTail", "sprite", "0x1E83");
    return this.trace;
  }

}

module.exports = {
  Lscr102RaceEngine,
  Lscr102MechanicalTrace,
  Lscr102Block08Islands,
  Lscr102Block08PromotedSafe,
  VOID,
  EMPTY,
};
