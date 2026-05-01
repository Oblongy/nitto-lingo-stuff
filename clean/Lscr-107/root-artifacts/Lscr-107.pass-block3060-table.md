## Lscr-107 Block 3060

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `3060`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `3060`, length `528`.
- File offset `3768`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
65 63 74 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 76 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3e 3e 3b 00 01 35 00 02 39 3b 00 03 35 00 04 35 00 00 35 00 05 3b 00 03 35 00 04 35 00 00 35 00 06 1c 83 58 00 02 1e 3a 00 01 58 00 02 1d 3b 00 01 35 00 02 39 3b 00 03 35 00 04 35 00 00 35 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `136`: id `0`, kind `4`, len `4`, `rect`
- payload offset `156`: id `1`, kind `4`, len `4`, `Math`
- payload offset `176`: id `2`, kind `4`, len `5`, `round`
- payload offset `200`: id `3`, kind `4`, len `6`, `_movie`
- payload offset `224`: id `4`, kind `4`, len `5`, `stage`
- payload offset `248`: id `5`, kind `4`, len `5`, `right`
- payload offset `272`: id `6`, kind `4`, len `4`, `left`
- payload offset `292`: id `7`, kind `4`, len `6`, `bottom`
- payload offset `316`: id `8`, kind `4`, len `3`, `top`
- payload offset `336`: id `9`, kind `4`, len `6`, `sprite`
- payload offset `360`: id `10`, kind `4`, len `7`, `flashSP`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

