# Lscr-102 Pass 9 Tooling Results

This pass adds actual local decompiler tooling instead of only hand-written
reconstruction.

## New Tools

```text
chunks/decompile_lscr_hidden_vm.js
chunks/lift_lscr102_peephole.js
```

## New Machine Outputs

```text
chunks/Lscr-102.auto-decompiled.lingo
chunks/Lscr-102.auto-decompile-report.md
chunks/Lscr-102.peephole-lifted.lingo
```

## What The Tooling Proved

### Block 4: Boost Type Logic

Peephole-lifted output:

```lingo
if not (boostType = T) then -- jump 34
boostLag = c0_7 * boostSetting
boostRange = c1_7 * boostSetting
boostLag = c0
boostRange = boostSetting
```

Faithful source shape:

```lingo
if boostType = "T" then
  boostLag = 0.7 * boostSetting
  boostRange = 1.7 * boostSetting
else
  boostLag = 0
  boostRange = boostSetting
end if
```

Confidence: very high.

### Block 10: Torque RPM Clamp

Peephole-lifted output confirms:

```lingo
if rpm = undefined then rpm = idleRPM
if rpm < idleRPM then rpm = idleRPM
if rpm > c10000 then rpm = c10000
posTq = parseInt(rpm / c100)
```

The tail uses:

```lingo
negTq = posTq + c200
tqArray
```

Confidence: high for clamp and positive index; medium for final interpolation.

### Block 14: Brake Setter

Peephole and stack output confirm a boolean-style setter:

```lingo
if brakeState then
  brake = 1
else
  brake = 0
end if
```

Confidence: very high.

### Block 15: Clutch Clamp

Peephole-lifted output confirms the clamp constants:

```lingo
if clutchValue < c0_05 then
  clutchFeather = c0_05
else if clutchValue > c0_2 then
  clutchFeather = c0_2
else
  clutchFeather = clutchValue
end if
```

Confidence: very high.

### Block 9: Boost Power / AFR / Damage

Peephole-lifted output improves the formula:

```lingo
rpm = rpm / pb
if rpm < c1 then rpm = c1
pb = ((rpm * c1_7) - c0_7 ...) * c7_5 / c100
pb = ((rpm * boostRange) - boostLag ...) / c100
boostPsi = (rpm * boostRange) - boostLag
if boostPsi < c0 then boostPsi = c0
compressionPowerDelta = ...
airFuelDelta = Math.abs(airFuelMeter)
engineDamageRisk = airFuelDelta * c0_09 or airFuelDelta * c0_07
ECUtune = chipSetting / c100
boostCreatedPower = (pb * boostSetting) / c100
```

Confidence: high for involved variables and broad formula shape, medium for
branch nesting and exact constants in the middle of the calculation.

## Auto-Decompile Report Summary

The first mechanical stack pass produced all 21 blocks.

Worst unresolved blocks:

- Block 8: main physics loop, 216 unresolved markers out of 975 lines.
- Block 18: staging light runner, 99 unresolved markers out of 154 lines.
- Block 17: staging timer setup, 61 unresolved markers out of 128 lines.
- Block 7: staging state, 38 unresolved markers out of 53 lines.

Best mechanical blocks:

- Block 4, 14, 15: compact and now close to source-level.
- Block 10: mostly source-level except final torque interpolation.
- Block 11: compact init wrapper.

## Current Best Files

Use this for original-faithful reading:

```text
Lscr-102.rebuilt-faithful.lingo
```

Use this for raw machine evidence:

```text
Lscr-102.peephole-lifted.lingo
Lscr-102.auto-decompiled.lingo
```

Use this only as hypothesis/simulation:

```text
Lscr-102.rebuilt-aggressive.lingo
```

