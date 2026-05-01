## Lscr-107 Block 2204

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `2204`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `2204`, length `476`.
- File offset `2912`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
6d 65 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 42 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 07 00 3c 3b 00 02 39 3d 00 03 3a 00 01 51 6c 00 04 3b 00 00 35 00 01 35 00 05 39 3e 3e 3a 00 02 6d 00 04 51 3b 00 00 35 00 01 35 00 06 39 3d 00 07 3a 00 01 51 3b 00 00 25 00 01 51 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `84`: id `0`, kind `4`, len `7`, `_global`
- payload offset `112`: id `1`, kind `4`, len `18`, `gMultiuserInstance`
- payload offset `160`: id `2`, kind `4`, len `3`, `ssm`
- payload offset `180`: id `3`, kind `4`, len `2`, `LO`
- payload offset `196`: id `4`, kind `4`, len `7`, `errCode`
- payload offset `224`: id `5`, kind `4`, len `20`, `setNetMessageHandler`
- payload offset `276`: id `6`, kind `4`, len `15`, `BreakConnection`
- payload offset `320`: id `7`, kind `4`, len `4`, `Rick`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

