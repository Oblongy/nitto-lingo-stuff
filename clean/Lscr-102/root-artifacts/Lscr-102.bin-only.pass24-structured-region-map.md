# Lscr-102.bin-only pass 24: structured region map

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

File size:
- `0xBF5C` (`48988`)

Proven structured or explicitly characterized regions, in order:

- `0x03E0..0x0B1C`
  - aligned typed table with scalar/name records from the early constant/state region

- `0x0BF8..0x0C4B`
  - secondary symbol table
  - includes `RaceEngine`, `prototype`, `init`

- `0x0C94..0x0D29`
  - raw init byte block

- `0x0D2A..0x0E30`
  - raw post-init block

- `0x0E88..0x1658`
  - aligned late table and mixed aligned tail
  - includes counters, staging/light names, timing names, `getTorque`

- `0x1658..0x1750`
  - raw block with repeated motifs

- `0x1750..0x1D08`
  - `startRace` bridge / raw region

- `0x1D08..0x28C0`
  - aligned table
  - includes XML/parser, boost, nitrous, durability, damage names

- `0x28C0..0x2D64`
  - `initBoost` / `beginRace` bridge with repeated raw motifs

- `0x2D64..0x2E2C`
  - aligned 7-record table ending at `sendPos`

- `0x2E2C..0x30C8`
  - `endRace` / `sendPos` bridge

- `0x30C8..0x328C`
  - aligned 19-record table
  - includes `KOTH`, `RIVAL`, `TEAMRIVAL`, `HT`

- `0x328C..0x3800`
  - mixed region
  - sampled names include `throttlePercent`, `totalHPI`, `engineAccel`, `nitrousDangerLevel`

- `0x3800..0x560B`
  - checked negative gap
  - no clean aligned table found
  - no clean UTF-16 runs found

- `0x560C..0x5F44`
  - aligned 86-record table

- `0x5F50..0x6FBC`
  - aligned 142-record table
  - includes `runEngineStageLightCB`, `runEngineSetLightOnCB`, `runEngineDamageLightCB`, `runEngineCB`

- `0x6FBC..0x8074`
  - raw gap with repeated motifs

- `0x8074..0x84D4`
  - aligned 39-record table
  - boost/psi/compression/engine-risk names

- `0x86F4..0x87EC`
  - aligned 10-record table

- `0x8A58..0x8BF4`
  - aligned 15-record table

- `0x8DD0..0x8F68`
  - aligned 15-record table

- `0x9460..0x95B8`
  - aligned 11-record table

- `0x95C4..0x98D0`
  - aligned 31-record table
  - includes `gearUp`, `KREADY`, `startLightTimer`, `HTQREADY`, `HTREADY`

- `0x9D04..0x9FD8`
  - aligned 28-record table
  - includes `setSpectateDelayCB`

- `0xA420..0xA7DC`
  - aligned 36-record table
  - includes `runEngineSetLightOnCB`, `raceStartTimeCB`, `ctStartAnimateComputerCB`

- `0xB010..0xBAD0`
  - aligned 101-record table
  - includes `caluMD5`, `getStringMD5`

- `0xBDA0..0xBE84`
  - aligned 10-record table
  - includes `Math`, `log`, `random`, `round`

- `0xBE84..0xBF5C`
  - true EOF tail
  - no clean aligned table
  - no clean UTF-16 runs

Unresolved gaps still present:
- this map lists only regions that were directly characterized
- gaps between listed regions remain unresolved unless a specific pass above says otherwise
