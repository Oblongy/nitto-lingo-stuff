## Lscr-102 Block 0

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `0`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `0`, length `344`.
- File offset `168`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 be b0
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de fb 00 00 00 03 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3b 00 01 35 00 02 80 00 04 36 00 03 02 3b 00 01 35 00 02 80 00 06 36 00 05 02 3b 00 01 35 00 02 80 00 08 36 00 07 02 3b 00 01 35 00 02 80 00 0a 36 00 09 02 3b 00 01 35 00 02 80 00 0c 36 00 0b
```

Recovered structured records (`kind = 4` UTF-16LE):
- no clean `kind = 4` inventory was recovered in this pass

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\02-race-engine.js`
- exported handlers: `RaceEngine`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

