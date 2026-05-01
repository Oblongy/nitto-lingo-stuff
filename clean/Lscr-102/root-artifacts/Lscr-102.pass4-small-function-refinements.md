# Lscr-102 Pass 4 Small Function Refinements

This pass focuses on short blocks where the bytecode is compact enough to infer
source-level logic more confidently than the large physics loop.

## Block 4: Boost Lag / Range

Disassembly:

```text
boostType == "T" ?
  boostLag = c0_7 * boostSetting
  boostRange = c1_7 * boostSetting
else
  boostLag = c0
  boostRange = boostSetting
```

Likely Lingo:

```lingo
if boostType = "T" then
  boostLag = 0.7 * boostSetting
  boostRange = 1.7 * boostSetting
else
  boostLag = 0
  boostRange = boostSetting
end if
```

## Block 14: Brake Setter

This block takes one argument and normalizes it to a boolean-ish brake value.

Likely Lingo:

```lingo
on setBrake brakeState
  if brakeState then
    brake = 1
  else
    brake = 0
  end if
end
```

## Block 15: Clutch Setter

The bytecode compares the argument against constants `c0_05` and `c0_2`.

Likely Lingo:

```lingo
on setClutch clutchValue
  if clutchValue < 0.05 then
    clutchFeather = 0.05
  else if clutchValue > 0.2 then
    clutchFeather = 0.2
  else
    clutchFeather = clutchValue
  end if
end
```

This corrects the first reconstruction, which treated values below `0.05` as
zero. The bytecode stores `c0_05`, not `c0`.

## Block 10: Torque Lookup

This block clamps `rpm` before indexing `tqArray`.

Resolved structure:

```text
if rpm = undefined then rpm = idleRPM
if rpm < idleRPM then rpm = idleRPM
if rpm > c10000 then rpm = c10000
posTq = parseInt(rpm / c100)
...
```

Likely source shape:

```lingo
on getTorque rpm
  if voidP(rpm) then rpm = idleRPM
  if rpm < idleRPM then rpm = idleRPM
  if rpm > 10000 then rpm = 10000

  posTq = parseInt(rpm / 100)
  -- The remaining bytes combine posTq, c200, and tqArray. It likely indexes
  -- a positive/negative torque lookup table, but exact interpolation still
  -- needs one more opcode pass.
  return tqArray[posTq]
end
```

