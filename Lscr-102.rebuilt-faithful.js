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
    // Byte-backed from block 16 0x00B3-0x00C5: RIVAL and TEAMRIVAL share RIVREADY.
    else if (this.raceType === "RIVAL" || this.raceType === "TEAMRIVAL") this.RIVREADY?.(VOID, hash);
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
    // Block 18 is not only the light runner. Later bytecode in the same block
    // contains a second finish ladder with byte-backed callback names:
    // KOTH -> KDONE, QM -> RDONE, RIVAL/TEAMRIVAL -> RIVDONE,
    // CT/CTQ -> ctFinishCB, P -> practiceFinishCB, HTQ -> HTQD, HT -> HTD.
    // Several of those arms converge into the same integrity/report tail
    // carrying ts, damage percentages, createMd5Hash(1), RT/ET counters, and
    // avgFps. The rivals-like arm also records beforePistonDamage -> gr ->
    // thePD/theBPD before RIVDONE.
    // Inner finish-prelude distinction now pinned down by the bytes:
    // QM uses RINT with theTime, while KOTH / rivals-like / later HT use INT
    // with a _system.milliseconds - timeAnchor source before the local op_04
    // finalizer. The adjacent 1.4848 immediate is still unresolved.
    // The exact completion payload boundaries are still only partially lifted.
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

module.exports = {
  Lscr102RaceEngine,
  VOID,
  EMPTY,
};
