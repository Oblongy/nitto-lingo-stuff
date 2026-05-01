## Lscr-102 Block 10964

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `10964`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `10964`, length `404`.
- File offset `11132`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
08 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 3c 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 12 07 00 22 41 41 35 00 03 41 35 00 04 1d 36 00 02 51 41 41 35 00 06 41 35 00 04 1d 36 00 05 51 06 00 15 41 41 35 00 07 36 00 02 51 41 41 35 00 04 36 00 05 51 08 00 00 00 00 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `76`: id `0`, kind `4`, len `9`, `boostType`
- payload offset `108`: id `1`, kind `4`, len `1`, `T`
- payload offset `124`: id `2`, kind `4`, len `8`, `boostLag`
- payload offset `152`: id `3`, kind `4`, len `4`, `c0_7`
- payload offset `172`: id `4`, kind `4`, len `12`, `boostSetting`
- payload offset `208`: id `5`, kind `4`, len `10`, `boostRange`
- payload offset `240`: id `6`, kind `4`, len `4`, `c1_7`
- payload offset `260`: id `7`, kind `4`, len `2`, `c0`
- payload offset `332`: id `9`, kind `4`, len `9`, `beginRace`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

