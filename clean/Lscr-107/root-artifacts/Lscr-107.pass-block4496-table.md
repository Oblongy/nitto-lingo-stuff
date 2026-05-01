## Lscr-107 Block 4496

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `4496`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `4496`, length `220`.
- File offset `5204`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
75 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 15 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3b 00 01 39 54 00 00 3a 00 01 3d 00 02 3a 00 02 51 00 00 00 03 00 00 00 00 00 00 00 04 00 00 00 0b 00 00 00 67 00 6f 00 74 00 6f 00 4e 00 65 00 74 00 50 00 61 00 67 00 65 00 00 00 01 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `40`: id `0`, kind `4`, len `11`, `gotoNetPage`
- payload offset `76`: id `1`, kind `4`, len `8`, `unescape`
- payload offset `104`: id `2`, kind `4`, len `6`, `_blank`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

