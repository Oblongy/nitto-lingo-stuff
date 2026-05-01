## Lscr-107 Block 0

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `0`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `0`, length `152`.
- File offset `708`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 13 e8
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 28 00 00 00 1e 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 7d 00 02 7d 00 03 7d 00 04 7d 00 05 7d 00 06 7d 00 07 7d 00 08 7d 00 09 00 00 00 00 00 00 00 00 00 00 0a 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00 08 00 00 00 46 75 6e 63 74 69 6f 6e
```

Recovered `kind = 4` UTF-16LE string records:
- no clean `kind = 4` inventory was recovered in this pass

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

