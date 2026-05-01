## Lscr-107 Block 4260

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `4260`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `4260`, length `236`.
- File offset `4968`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 15 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 20 07 00 0e 3b 00 02 39 3d 00 03 3a 00 01 51 00 00 00 04 00 00 00 00 00 00 00 04 00 00 00 07 00 00 00 5f 00 67 00 6c 00 6f 00 62 00 61 00 6c 00 00 00 01 00 00 00 04 00 00 00 06 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `40`: id `0`, kind `4`, len `7`, `_global`
- payload offset `68`: id `1`, kind `4`, len `6`, `isIdle`
- payload offset `92`: id `2`, kind `4`, len `3`, `ssm`
- payload offset `112`: id `3`, kind `4`, len `1`, `H`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

