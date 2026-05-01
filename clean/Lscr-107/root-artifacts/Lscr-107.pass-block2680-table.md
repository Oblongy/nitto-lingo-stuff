## Lscr-107 Block 2680

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `2680`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `2680`, length `180`.
- File offset `3388`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
6d 65 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 08 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3a 00 00 51 01 00 00 00 00 00 00 00 04 00 00 00 11 00 00 00 72 00 65 00 73 00 69 00 7a 00 65 00 46 00 6c 00 61 00 73 00 68 00 53 00 70 00 72 00 69 00 74 00 65 00 00 00 04 00 00 00 b0 64 04 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `24`: id `0`, kind `4`, len `17`, `resizeFlashSprite`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

