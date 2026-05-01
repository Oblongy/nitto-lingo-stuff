## Lscr-102 Block 11992

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `11992`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `11992`, length `2020`.
- File offset `12160`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
08 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 2d 01 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
07 00 78 41 35 00 01 41 35 00 02 22 13 07 00 68 41 35 00 03 3d 00 04 12 44 00 21 41 35 00 03 3d 00 05 12 44 00 16 41 35 00 03 3d 00 06 12 44 00 0b 41 35 00 03 3d 00 07 12 07 00 3c 41 35 00 08
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `320`: id `0`, kind `4`, len `7`, `staging`
- payload offset `348`: id `1`, kind `4`, len `2`, `rt`
- payload offset `364`: id `2`, kind `4`, len `2`, `c1`
- payload offset `380`: id `3`, kind `4`, len `8`, `raceType`
- payload offset `408`: id `4`, kind `4`, len `4`, `KOTH`
- payload offset `428`: id `5`, kind `4`, len `5`, `RIVAL`
- payload offset `452`: id `6`, kind `4`, len `9`, `TEAMRIVAL`
- payload offset `484`: id `7`, kind `4`, len `2`, `HT`
- payload offset `500`: id `8`, kind `4`, len `9`, `gearValue`
- payload offset `532`: id `9`, kind `4`, len `2`, `c0`
- payload offset `548`: id `10`, kind `4`, len `3`, `STG`
- payload offset `568`: id `11`, kind `4`, len `1`, `s`
- payload offset `584`: id `12`, kind `4`, len `4`, `carV`
- payload offset `604`: id `13`, kind `4`, len `8`, `carAccel`
- payload offset `632`: id `14`, kind `4`, len `5`, `c1320`
- payload offset `656`: id `15`, kind `4`, len `10`, `timeAnchor`
- payload offset `688`: id `16`, kind `4`, len `3`, `INT`
- payload offset `708`: id `17`, kind `4`, len `7`, `_system`
- payload offset `736`: id `18`, kind `4`, len `12`, `milliseconds`
- payload offset `920`: id `15`, kind `4`, len `3`, `run`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

