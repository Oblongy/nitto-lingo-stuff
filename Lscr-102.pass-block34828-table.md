## Lscr-102 Block 34828

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `34828`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `34828`, length `196`.
- File offset `34996`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
65 6c 74 61
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 14 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
39 54 00 00 3a 00 01 51 41 54 00 01 36 00 01 51 02 00 00 00 00 00 00 00 04 00 00 00 04 00 00 00 69 00 6e 00 69 00 74 00 01 00 00 00 04 00 00 00 03 00 00 00 62 00 74 00 64 00 00 00 09 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `36`: id `0`, kind `4`, len `4`, `init`
- payload offset `56`: id `1`, kind `4`, len `3`, `btd`
- payload offset `112`: id `23`, kind `4`, len `6`, `gearUp`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

