## Lscr-107 Block 4716

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `4716`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `4716`, length `380`.
- File offset `5424`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 28 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 02 36 00 01 51 3b 00 00 3d 00 02 36 00 03 51 3b 00 00 3d 00 02 36 00 04 51 3b 00 00 3d 00 02 36 00 05 51 06 00 00 00 00 00 00 00 04 00 00 00 07 00 00 00 5f 00 67 00 6c 00 6f 00 62 00 61 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `56`: id `0`, kind `4`, len `7`, `_global`
- payload offset `84`: id `1`, kind `4`, len `13`, `facebookToken`
- payload offset `136`: id `3`, kind `4`, len `10`, `facebookID`
- payload offset `168`: id `4`, kind `4`, len `21`, `facebookSessionSecret`
- payload offset `224`: id `5`, kind `4`, len `18`, `facebookSessionKey`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

