"use strict";

/**
 * Lscr-102 promoted block implementations.
 *
 * Each method below is decoded from its corresponding __stack_Lscr102_block*
 * entry in Lscr102MechanicalTrace. Block numbers match the dispatch table in
 * RaceEngine_dispatchTable(). Unresolved id_N names are annotated inline.
 *
 * Cross-reference:
 *   block 01 → RaceEngine_constantsTable
 *   block 02 → RaceEngine_initState
 *   block 07 → RaceEngine_stageDistance  (sendPos timer handler)
 *   block 08 → RaceEngine_runFrame       (partial — missing launch/RPM cluster)
 */

// ─── Block 01: constantsTable ─────────────────────────────────────────────────
//
// offset=344  codeLen=456
// __names: "sendInterval, secondBuffer, DAfp, \x01\x00g"
//
// The name table only resolved the first 3 property names. Everything after
// DAfp is id_N. Values below are decoded by cross-referencing:
//   • numeric integer literals  (id_10=60, id_15=750, …)
//   • block-19 md5Source field order  (c0_5 → c1 sequence)
//   • block-08/09 __names lists  (usage confirms type/value)
//   • imm83 fixed-point table    (literal_3 = 1.6693)
//
// Entries still unresolved:
//   id_6=id_7   id_8=id_9   id_11=id_12   id_13=id_14
//   id_17=id_18  id_19=id_20  id_21=id_22
//   id_78=id_18  (reuse — same float value as id_17 group)
// These three groups are float pairs sitting between c0 and idleRPM.
// Best candidates: vToMph, rpmGearConversion, g (gravity 32.2 ft/s²).
// g=32.2, vToMph≈0.6818 (ft/s → mph), rpmGearConversion is car-specific.

function RaceEngine_constantsTable_block01() {
  // Host injects sendInterval / secondBuffer before parseConfig fires.
  // They stay VOID until then — do not overwrite if already set.
  if (this.sendInterval === undefined) this.sendInterval = undefined;
  if (this.secondBuffer === undefined) this.secondBuffer = undefined;

  // DAfp = literal_3 = imm83_16693 = 1.6693
  this.DAfp = 1.6693;

  // ── Float pairs: id_4=literal_5 → c0_5 ──────────────────────────────────
  this.c0_5   = 0.5;       // id_4  = literal_5  (first entry after DAfp)
  this.c0     = 0;         // id_6  = id_7

  // id_8=id_9, id_11=id_12, id_13=id_14 — 3 unresolved float pairs
  // vToMph / rpmGearConversion / g occupy these slots (order unknown).
  // Leaving as undefined; host must supply them via parseConfig.
  // this.vToMph            = ???;  // id_8  = id_9
  // this.rpmGearConversion = ???;  // id_11 = id_12
  // this.g                 = ???;  // id_13 = id_14

  // ── Integer literals ─────────────────────────────────────────────────────
  this.lagThreshold = 60;    // id_10 = 60   ms threshold for bad-frame counter
  this.idleRPM      = 750;   // id_15 = 750  rpm
  this.tqFlyFactor  = 5252;  // id_16 = 5252 (HP = TQ × RPM / 5252)

  // id_17=id_18, id_19=id_20, id_21=id_22 — 3 more unresolved float pairs
  // id_78 = id_18 reuse confirms id_18's value appears twice → likely c0_2 = 0.2
  this.c0_2 = 0.2;  // id_17=id_18 and id_78=id_18 both resolve to 0.2

  // partBreakPoint starts VOID; populated from carXML in parseConfig
  this.partBreakPoint = undefined;  // id_23 = VOID

  // ── Confirmed integer constants ───────────────────────────────────────────
  this.c100   = 100;    // id_24
  this.c1000  = 1000;   // id_25
  this.c10000 = 10000;  // id_26

  // ── Float constants from block-19 md5Source sequence ─────────────────────
  this.c0_0075 = 0.0075;  // id_27 = id_28
  this.c13     = 13;      // id_29  (staging step count / frame modulus)
  this.c0_4    = 0.4;     // id_30 = id_31  (also reused at id_83)
  this.c0_7    = 0.7;     // id_32 = id_33
  this.c1_7    = 1.7;     // id_34 = id_35
  this.c1_25   = 1.25;    // id_36 = id_37
  this.c9      = 9;       // id_38
  this.c299    = 299;     // id_39
  this.c300    = 300;     // id_40
  this.c5_5    = 5.5;     // id_41 = id_42

  // id_43 = DAfp → slot that receives DAfp's value.
  // In block-19 md5Source, c2 appears right after c5_5 in the sequence.
  // But DAfp=1.6693 ≠ 2, so id_43 may be a named copy of DAfp used internally.
  // c2 = 2 is confirmed by block-08 usage (hp / c2, NOS / c10000 * c2).
  this.c2 = 2;

  // id_44 = literal_5 = 0.5. Second usage of the same literal.
  // In block-19 md5Source, c5 appears after c2. c5 = 5 (integer).
  this.c5  = 5;
  this.c50 = 50;   // id_45
  this.c8  = 8;    // id_46

  // ── Remaining float pairs ─────────────────────────────────────────────────
  this.c0_005 = 0.005;   // id_47 = id_48
  this.c0_016 = 0.016;   // id_49 = id_50

  // id_51 = literal_3 = 1.6693 again. In md5Source order this maps to c3.
  // c3 = 3 is used as a multiplier throughout. literal_3 in the block-01
  // context may be encoding the integer 3 (Lingo stores small ints in the
  // literal table too). Using 3 here; flag for verification.
  this.c3 = 3;  // id_51 = literal_3  ← verify: could be 1.6693 if DAfp reused

  this.c0_09  = 0.09;   // id_52 = id_53
  this.c0_6   = 0.6;    // id_54 = id_55
  this.c10    = 10;     // id_56
  this.c0_015 = 0.015;  // id_57 = id_58
  this.c0_02  = 0.02;   // id_59 = id_60
  this.c200   = 200;    // id_61
  this.c0_18  = 0.18;   // id_62 = id_63
  this.c1320  = 1320;   // id_64  finish line (feet)
  this.c760   = 760;    // id_65  mid-track (feet) — triggers mid-run md5
  this.c7     = 7;      // id_66
  this.c7_5   = 7.5;    // id_67 = id_68
  this.c1_8   = 1.8;    // id_69 = id_70
  this.c1_15  = 1.15;   // id_71 = id_72
  this.c80    = 80;     // id_73
  this.c0_95  = 0.95;   // id_74 = id_75
  this.c0_05  = 0.05;   // id_76 = id_77
  // id_78 = id_18 → c0_2 = 0.2 (already set above)
  this.c0_1   = 0.1;    // id_79 = id_80  or  id_81 = id_82
  this.c0_65  = 0.65;   // id_83 = id_31  (reuse of c0_4 slot — suspicious;
                        //                 may mean c0_65 shares the same float
                        //                 encoding. Flag for verification.)
  this.c4     = 4;      // id_84 = id_85
  this.c0_07  = 0.07;   // id_86 = id_87
  // id_88 = implicit_object_0x01D7[implicit_index_0x01D7]
  // This is likely c2_5 = 2.5 (last float constant before c1 in md5Source).
  this.c2_5   = 2.5;
  this.c1     = 1;      // implicit from block-19 tail  (EMPTY + (c1 + ","))
}

// ─── Block 02: initState (supplement) ────────────────────────────────────────
//
// offset=3032  codeLen=496
// The promoted RaceEngine_initState covers the first half. Block-02 reveals
// additional fields that were still id_N in the __names list:
//
//   gearValue  = c0      (confirmed — gear starts in neutral=0)
//   gr         = grs[VOID]  (neutral gear ratio)
//   theTime    = literal_45  (a specific float — likely 0.016 or similar tick)
//   id_46      = literal_45  (timeFromLastFrame initialized same as theTime)
//   id_47      = VOID        (lightDelayTO)
//   id_48      = c0          (timeGreen = 0)
//   id_49      = c0          (timeStartLine = 0)
//   id_50      = pb          (copy of pb into another slot)
//
// Then four branches checking id_51/id_54/id_55/id_56 for VOID_SENTINEL and
// calling id_53() if not VOID — these are the timer forget() calls for any
// active light timers (lightTO1, lightTO2, lightDelayTO, runInterval).
//
// literal_45 value: in the bytecode literal table pos 45 — cross-referencing
// with sendInterval=30 (33ms = ~30fps), theTime would initialise to ~0.033.
// Not enough data to pin exactly; leaving as 0 (equivalent to VOID start).

function RaceEngine_initState_supplement_block02() {
  // Fields promoted from block-02 that weren't in the clean initState:
  this.gearValue       = 0;
  this.gr              = this.grs ? this.grs[undefined] : 0;
  this.theTime         = 0;          // literal_45 — tick accumulator seed
  this.timeFromLastFrame = 0;        // id_46 = literal_45
  this.lightDelayTO    = undefined;  // id_47 = VOID
  this.timeGreen       = 0;          // id_48 = c0
  this.timeStartLine   = 0;          // id_49 = c0

  // Four VOID-sentinel checks cancel any live timers on re-init.
  // Equivalent to the forget() calls in the clean RaceEngine_createMd5Hash.
  if (this.lightTO1   !== undefined && this.lightTO1?.forget)   this.lightTO1.forget();
  if (this.lightTO2   !== undefined && this.lightTO2?.forget)   this.lightTO2.forget();
  if (this.lightDelayTO !== undefined && this.lightDelayTO?.forget) this.lightDelayTO.forget();
  if (this.runInterval  !== undefined && this.runInterval?.forget)  this.runInterval.forget();
}

// ─── Block 07: stageDistance / sendPos ───────────────────────────────────────
//
// offset=11992  codeLen=301
// __names: staging, rt, c1, raceType, KOTH, RIVAL, TEAMRIVAL, HT,
//          gearValue, c0, STG, s, carV, carAccel, c1320, timeAnchor,
//          INT, _system, milliseconds
//
// This is the handler fired by the runInterval timer (symbol "sendPos").
// It sends position telemetry to the server on every tick.
//
// STG() = staging/pre-launch position packet
// INT() = in-race intermediate telemetry packet
//
// Decoded control flow:
//
//   branch 120 at 0x0018   → main staging guard
//   if staging != 0:
//     if raceType ∈ {KOTH, RIVAL, TEAMRIVAL, HT} (boolean chain):
//       if gearValue < 0:
//         STG(complex_pre_launch_params, …)   ← gearValue = -1 = reverse
//       else:
//         STG(s, carV, carAccel)
//     jump → end
//   else (not staging):
//     if s < 1320:           ← race in progress, before finish line
//       if timeAnchor = VOID:
//         if raceType != HT: STG(s, carV, carAccel)
//       else:
//         if raceType != HT: INT(s, carV, carAccel, _system, ms - timeAnchor)
//
// The "complex_pre_launch_params" path (0x0075) contains:
//   STG(((lhs or (raceType=KOTH)) > (raceType=RIVAL)), STG, (s mod carV) mod carAccel)
// This is an unresolved stack expression — likely encodes preStaged/staged flags.

function RaceEngine_stageDistance_block07() {
  const now = this._system().milliseconds;

  if (this.staging) {
    // Pre-launch / staging phase — send staging packet.
    const inRaceTypeGroup = (
      this.raceType === "KOTH"     ||
      this.raceType === "RIVAL"    ||
      this.raceType === "TEAMRIVAL"||
      this.raceType === "HT"
    );
    if (inRaceTypeGroup) {
      if (this.gearValue < 0) {
        // Gear is in reverse (-1): pre-stage packet with staged/preStaged flags.
        // The stack expression at 0x0075 is not fully resolved.
        // Best interpretation: encode preStaged and staged boolean flags.
        this.STG?.(
          (this.preStaged || (this.raceType === "KOTH")) > (this.raceType === "RIVAL"),
          this.STG,
          (this.s % this.carV) % this.carAccel,
        );
      } else {
        this.STG?.(this.s, this.carV, this.carAccel);
      }
    }
  } else {
    // Not staging — race telemetry path.
    if (this.s < 1320) {
      if (this.timeAnchor === undefined) {
        // timeAnchor not yet set: race hasn't started, still pre-green.
        if (this.raceType !== "HT") {
          this.STG?.(this.s, this.carV, this.carAccel);
        }
      } else {
        // Race is live: send intermediate telemetry.
        if (this.raceType !== "HT") {
          this.INT?.(
            this.s,
            this.carV,
            this.carAccel,
            this._system(),
            now - this.timeAnchor,
          );
        }
      }
    }
  }

  // Original stageDistance return value (rt accumulation) preserved:
  if (this.staging) {
    this.rt = now - this.timeAnchor;
  }
  if (this.carV >= 1320) {
    this.carAccel = 0;
  }
  return this.rt;
}

// ─── Block 08 supplement: launch control / RPM cluster ───────────────────────
//
// offset=14012  codeLen=7823  (the largest block by far)
//
// The clean RaceEngine_runFrame captures the main physics path but misses the
// full RPM / gear / launch-control cluster recovered from 0x0045-0x03A0.
//
// Key recovered expressions (not yet in clean runFrame):
//
//   0x0059  jump 7734  → the "imm83_7734" fast-path branch
//   0x0093  avgFps = ((avgFps * fpsCount) + theActualTime) / 1.6682
//           NOTE: divisor is 1.6682 in block-08, not 2 as in clean code.
//           This is likely a fixed-point averaging constant. Flag for review.
//
//   0x00D4  if (gearValue === 0) → 718 bytes of gear-0 physics (neutral path)
//
//   RPM cluster at 0x0215-0x03A0 — recovered expressions:
//     rpm accumulation:
//       if (theActualTime - c299) < theActualTime:
//         c0_2 = milliseconds - c1000
//         if c0_2 > 0:
//           rpm = rpm + (((theActualTime - c300) * 0.7299) / c300)
//         else:
//           rpm = (c1000 mod negTq) * c5_5
//       rpm ← clamp(rpm, 0)
//       rpm += stockRedLine  (this is actually the idle RPM floor, not literal stockRedLine)
//
//     revLimiter path (0x02BD):
//       if rpm > revLimiter:
//         fpsCount = revLimiterDeceleration    ← rpm decel rate
//       else:
//         carAccel = brakeDecleration          ← from brake flag
//         or:
//         carAccel = avgFps mod c2             ← traction-limited accel
//
//     tire scrub / launchControl cluster (0x0835-0x0902):
//       tireScrub = (carV + c10) < speedoV ? 1 : 0
//       if (carV + c0_015) < speedoV:
//         isNos (here used as slip delta) = speedoV - carV
//         if slip < c0_02: slip = 0
//         nitrousRemaining slot reused for clutch slip ratio
//         speedoV -= NOS * isNos
//
//     launchControl staging light integration (0x0B0C → symbol stagedAndReady):
//       preStaged / staged flags compared, trigger lightDelayTO timeout
//       runEngineStageLightCB(sprite(flashSP), staged, preStaged)
//
// The cluster at 0x0E96-0x0EA3 computes lag-adjusted ET:
//   rt_adjusted = (rt + lagTimeAddition(badCounterRT)) * (1.6693 / c1000)
//
// Full promotion of the 7823-byte block requires resolving ~60 more id_N names.
// The supplement below patches the known gaps into the clean runFrame signature.

function RaceEngine_runFrame_supplement_block08_notes() {
  // avgFps divisor correction: block-08 uses 1.6682, not 2.
  // In the clean method: ((avgFps * fpsCount) + theActualTime) / 2
  // Correct:             ((avgFps * fpsCount) + theActualTime) / 1.6682
  // (1.6682 ≈ 1.6693 rounded — the imm83 fixed-point averaging factor)
  this.avgFps = ((this.avgFps * this.fpsCount) + this.theActualTime) / 1.6682;

  // RPM accumulation (simplified decode of 0x0215-0x0284 cluster):
  if ((this.theActualTime - this.c299) < this.theActualTime) {
    const rpmDelta = this._system().milliseconds - this.c1000; // c1000 here is a temp var
    if (rpmDelta > 0) {
      this.rpm = this.rpm + (((this.theActualTime - this.c300) * 0.7299) / this.c300);
    } else {
      this.rpm = (this.c1000 % this.negTq) * this.c5_5;
    }
    if (this.rpm < 0) this.rpm = 0;
  }

  // Tire scrub flag (0x0835):
  this.tireScrub = (this.carV + 10) < this.speedoV ? 1 : 0;

  // Slip delta path (0x0855-0x0902):
  if ((this.carV + 0.015) < this.speedoV) {
    let slipDelta = this.speedoV - this.carV;
    if (slipDelta < 0.02) slipDelta = 0;
    const clutchSlip = this.clutchFeather + 0.18;  // 0x08E3
    this.speedoV -= clutchSlip * slipDelta;
  }
}

// ─── Block 19 supplement: buildMd5Source — extra integrity checks ─────────────
//
// offset=43264  codeLen=1616
// The clean RaceEngine_buildMd5Source ends with:
//   if (engineDamage < 0) md5Source += this.nogood;
//   // "Additional integrity checks at 0x05D5-0x063B can append nogood."
//
// Those checks are now decoded:

function RaceEngine_buildMd5Source_integrityChecks_block19(md5Source) {
  // 0x05C3: engineDamage < 0 → nogood (already in clean version)
  if (this.engineDamage < 0) md5Source += this.nogood;

  // 0x05D5-0x05F4: goodCounterET = VOID → nogood
  if (this.goodCounterET === undefined) {
    md5Source += this.nogood;
  } else {
    // 0x05F5-0x0619: lag ratio check for ET counters
    const etTotal = this.goodCounterET + this.badCounterET;
    const lagPctET = etTotal > 0 ? this.goodCounterET / etTotal : 1;
    if (0.7745 > lagPctET) {
      md5Source += this.nogood;
    }
  }

  // 0x061A-0x063B: same check for RT counters
  const rtTotal = this.goodCounterRT + this.badCounterRT;
  const lagPctRT = rtTotal > 0 ? this.goodCounterRT / rtTotal : 1;
  if (0.7745 > lagPctRT) {
    md5Source += this.nogood;
  }

  return md5Source;
}

module.exports = {
  RaceEngine_constantsTable_block01,
  RaceEngine_initState_supplement_block02,
  RaceEngine_stageDistance_block07,
  RaceEngine_runFrame_supplement_block08_notes,
  RaceEngine_buildMd5Source_integrityChecks_block19,
};
