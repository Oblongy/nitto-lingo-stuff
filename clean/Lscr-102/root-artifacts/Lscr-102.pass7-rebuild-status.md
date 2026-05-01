# Lscr-102 Pass 7 Rebuild Status

This pass upgrades `Lscr-102.reconstructed.lingo` from a role skeleton into a
more complete rebuilt Lingo approximation.

## Current Reconstruction Coverage

| Area | Handler / block | Semantic confidence | Source-shape confidence | Notes |
|---|---|---:|---:|---|
| Public stub | `RaceEngine` | 100% | 100% | Visible bytecode is exact dispatcher stub. |
| Constructor table | block 0 | 85% | 55% | Repeated registration pattern is clear; exact object type/slot syntax is inferred. |
| Constants | block 1 | 75% | 45% | Many numeric constants are known from later tables; raw lookup initialization still encoded. |
| Race state init | block 2 | 90% | 70% | Variable names and zero/default state are clear. |
| XML config parse | block 3 | 90% | 70% | Parser/cast values are clear; exact `getAProp` paths may differ. |
| Boost lag/range | block 4 | 95% | 85% | Compact bytecode strongly supports current code. |
| Timer cleanup | blocks 5-6 | 85% | 70% | `forget`, `timeout`, `runInterval`, `sendInterval` are clear. |
| Staging state | block 7 | 75% | 55% | Race-type branches known; branch polarity and exact exit paths remain fuzzy. |
| Main physics loop | block 8 | 85% | 60% | Most variables and formulas recovered, but exact nesting/order still needs a real VM interpreter. |
| Boost/AFR/damage | block 9 | 85% | 65% | Arithmetic dependencies are strong; some formulas are still approximated. |
| Torque lookup | block 10 | 90% | 75% | RPM clamp and table indexing are clear; interpolation/positive-negative curve exactness uncertain. |
| Init wrapper | block 11 | 90% | 75% | Small block, clear `init` / `btd` behavior. |
| Gear/speed UI | block 12 | 85% | 65% | Callback names and state changes clear; exact callback args uncertain. |
| Gear shift | block 13 | 60% | 40% | Weakest medium block; table exposes only `gearValue`. |
| Brake setter | block 14 | 95% | 90% | Compact boolean setter. |
| Clutch setter | block 15 | 95% | 90% | Clamp to `0.05..0.2` strongly supported. |
| Timing counters | block 16 | 75% | 55% | Counter names clear; race-mode MD5 branches need more work. |
| Staging delay | block 17 | 80% | 60% | Timer/callback names clear. |
| Staging lights | block 18 | 80% | 60% | Amber/green/callback path clear. |
| Dyno/config/integrity | block 19 | 85% | 60% | Constants and MD5/checksum fields recovered; exact assignments need interpreter. |
| Random helper | block 20 | 70% | 50% | Math/log/random/round known; exact formula still approximated. |

## Overall Estimate

- Semantic recovery: **88-92%**
- Practical rebuilt Lingo usefulness: **70-78%**
- Byte-faithful source-level reconstruction: **60-68%**

The requested “north of 90%” is now plausible for understanding what the code
does, but not yet honest for exact recompilable Lingo.

## What Changed In Pass 7

`Lscr-102.reconstructed.lingo` now includes:

- global/property declarations for recovered race engine state,
- explicit numeric constant inventory,
- expanded XML/config extraction fields,
- tighter boost lag/range logic,
- improved brake/clutch setters,
- improved torque clamp and dual-index torque lookup hypothesis,
- stronger NOS/raceGas handling,
- stronger boost/air-fuel/damage calculation,
- speed conversion through `vToMph`,
- timing counter updates,
- MD5/integrity-check hints from block 19.

## Remaining Blockers

To get closer to exact source:

1. Implement a real hidden-VM stack interpreter with verified meanings for:
   `1B`, `1C`, `1D`, `1E`, `12`, `14`, `16`, `35`, `36`, `54`, `56`, `57`,
   `80`, `83`.
2. Split block 8 into basic blocks and rebuild branch nesting.
3. Decode mixed numeric records in block 1 and block 0 rather than inferring
   constants from later names.
4. Compare hidden-VM opcode sequences against normal `.lasm` bytecode idioms to
   verify operator polarity.

