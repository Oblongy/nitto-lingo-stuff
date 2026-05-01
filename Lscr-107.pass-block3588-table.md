## Lscr-107 Block 3588

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `3588`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `3588`, length `672`.
- File offset `4296`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 6d 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 07 00 67 3b 00 00 43 36 00 02 51 3b 00 00 35 00 03 07 00 3c 3b 00 04 39 3d 00 05 3a 00 01 51 6c 00 06 3b 00 00 35 00 03 35 00 07 39 3e 3e 3a 00 02 6d 00 06 51 3b 00 00 35 00 03 35 00 08
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `128`: id `0`, kind `4`, len `7`, `_global`
- payload offset `156`: id `1`, kind `4`, len `11`, `isConnected`
- payload offset `192`: id `2`, kind `4`, len `6`, `isIdle`
- payload offset `216`: id `3`, kind `4`, len `18`, `gMultiuserInstance`
- payload offset `264`: id `4`, kind `4`, len `3`, `ssm`
- payload offset `284`: id `5`, kind `4`, len `2`, `LO`
- payload offset `300`: id `6`, kind `4`, len `7`, `errCode`
- payload offset `328`: id `7`, kind `4`, len `20`, `setNetMessageHandler`
- payload offset `380`: id `8`, kind `4`, len `15`, `BreakConnection`
- payload offset `424`: id `9`, kind `4`, len `4`, `Rick`
- payload offset `444`: id `10`, kind `4`, len `6`, `sprite`
- payload offset `468`: id `11`, kind `4`, len `7`, `flashSP`
- payload offset `496`: id `12`, kind `4`, len `12`, `noActivityCB`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

