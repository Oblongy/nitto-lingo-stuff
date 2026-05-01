# Lscr-102.bin-only pass 14: mixed region starting at `0x328C`

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

Proven sampled boundary:
- start `0x328C`
- sampled through `0x3800`

Directly proven names:
- clean UTF-16:
  - `0x332C` `run`
- clear ASCII names:
  - `0x3364` `throttlePercent`
  - `0x3380` `sDelta`
  - `0x3394` `totalHPI`
  - `0x33A8` `availableNitrousPower`
  - `0x33CC` `tqFlywheel`
  - `0x33E4` `tQwheel`
  - `0x33F8` `wheelThrust`
  - `0x3410` `fnd`
  - `0x3420` `rpmZone`
  - `0x3434` `extraPower`
  - `0x344C` `wheelThrustApplied`
  - `0x346C` `engineAccel`
  - `0x3484` `raceGasUsed`
  - `0x349C` `engineResistanceTPercent`
  - `0x34C0` `engineResistance`
  - `0x34DC` `carInertia`
  - `0x34F4` `drivetrainFnd`
  - `0x3510` `carFnd`
  - `0x3524` `mphGrip`
  - `0x3558` `gripIncrease`
  - `0x3570` `speedoAccel`
  - `0x3588` `vDiff`
  - `0x359C` `speedTween`
  - `0x35B4` `clutchocity`
  - `0x35CC` `preStaged`
  - `0x35E4` `staged`
  - `0x35F8` `rtRandom`
  - `0x360C` `msNow`
  - `0x36C0` `bPD`
  - `0x36D0` `adjustedBoost`
  - `0x36EC` `nitrousDangerLevel`
  - `0x370C` `tmpFlow`
  - `0x3720` `tmpDangerLevel`
  - `0x373C` `newTmpFlow`
  - `0x3754` `newTmpDangerLevel`

Negative result:
- no additional clean UTF-16 runs were found in `0x3800..0x45FF`

Not claimed:
- no table model for this region
- no bytecode/opcode interpretation
- no assumption that adjacent numeric fields are ids, locals, or message selectors
