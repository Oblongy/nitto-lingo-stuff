## Lscr-102 Block 35848

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `35848`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `35848`, length `916`.
- File offset `36016`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
08 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de db 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3c 00 01 16 45 00 07 41 35 00 02 83 44 00 15 41 35 00 00 41 35 00 03 16 45 00 08 41 35 00 02 20 83 07 00 b6 41 33 00 00 51 41 35 00 00 3c 00 01 12 07 00 35 41 41 35 00 05 3e 37 36 00 04 51 41
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `236`: id `0`, kind `4`, len `9`, `gearValue`
- payload offset `280`: id `2`, kind `4`, len `7`, `staging`
- payload offset `308`: id `3`, kind `4`, len `2`, `c0`
- payload offset `324`: id `4`, kind `4`, len `2`, `gr`
- payload offset `340`: id `5`, kind `4`, len `3`, `grs`
- payload offset `360`: id `6`, kind `4`, len `3`, `mph`
- payload offset `380`: id `7`, kind `4`, len `8`, `carAccel`
- payload offset `408`: id `8`, kind `4`, len `4`, `carV`
- payload offset `428`: id `9`, kind `4`, len `7`, `speedoV`
- payload offset `456`: id `10`, kind `4`, len `7`, `engineV`
- payload offset `484`: id `11`, kind `4`, len `4`, `slip`
- payload offset `504`: id `12`, kind `4`, len `6`, `sprite`
- payload offset `528`: id `13`, kind `4`, len `7`, `flashSP`
- payload offset `556`: id `14`, kind `4`, len `24`, `runEngineTractionLightCB`
- payload offset `616`: id `15`, kind `4`, len `2`, `hp`
- payload offset `632`: id `16`, kind `4`, len `21`, `runEngineGearUpdateCB`
- payload offset `828`: id `27`, kind `4`, len `8`, `setBrake`

Recovered loose UTF-16LE message fragments:
- `runEngineTractionLightCB`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

