## Lscr-102 Block 35024

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `35024`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `35024`, length `824`.
- File offset `35192`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
65 61 72 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de c6 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
41 35 00 00 58 00 06 14 07 00 12 41 35 00 01 41 35 00 00 3f 1b 37 57 00 00 51 56 00 00 41 35 00 02 16 07 00 a0 41 30 00 00 51 41 56 00 00 36 00 03 51 41 35 00 00 41 35 00 02 12 07 00 5f 41 41
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `216`: id `0`, kind `4`, len `9`, `gearValue`
- payload offset `248`: id `1`, kind `4`, len `3`, `grs`
- payload offset `268`: id `2`, kind `4`, len `2`, `c0`
- payload offset `284`: id `3`, kind `4`, len `2`, `gr`
- payload offset `300`: id `4`, kind `4`, len `3`, `mph`
- payload offset `320`: id `5`, kind `4`, len `8`, `carAccel`
- payload offset `348`: id `6`, kind `4`, len `4`, `carV`
- payload offset `368`: id `7`, kind `4`, len `4`, `slip`
- payload offset `388`: id `8`, kind `4`, len `6`, `sprite`
- payload offset `412`: id `9`, kind `4`, len `7`, `flashSP`
- payload offset `440`: id `10`, kind `4`, len `24`, `runEngineTractionLightCB`
- payload offset `500`: id `11`, kind `4`, len `7`, `engineV`
- payload offset `528`: id `12`, kind `4`, len `7`, `speedoV`
- payload offset `556`: id `13`, kind `4`, len `2`, `hp`
- payload offset `572`: id `14`, kind `4`, len `21`, `runEngineGearUpdateCB`
- payload offset `756`: id `25`, kind `4`, len `8`, `gearDown`

Recovered loose UTF-16LE message fragments:
- `runEngineTractionLightCB`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

