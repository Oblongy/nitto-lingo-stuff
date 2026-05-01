## Lscr-107 Block 152

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `152`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `152`, length `1760`.
- File offset `860`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
6d 65 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de ff 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3a 00 00 51 3b 00 01 39 3a 00 00 51 3b 00 02 3b 00 04 35 00 05 39 58 00 04 3a 00 01 36 00 03 51 3b 00 02 3e 36 00 06 51 3b 00 02 3b 00 08 39 23 00 00 36 00 07 51 3b 00 02 3b 00 08 39 23 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `272`: id `0`, kind `4`, len `16`, `lingoXtraNoDebug`
- payload offset `316`: id `1`, kind `4`, len `13`, `lingoXtraInit`
- payload offset `356`: id `2`, kind `4`, len `7`, `_global`
- payload offset `384`: id `3`, kind `4`, len `2`, `ld`
- payload offset `400`: id `4`, kind `4`, len `6`, `String`
- payload offset `424`: id `5`, kind `4`, len `12`, `fromCharCode`
- payload offset `460`: id `6`, kind `4`, len `3`, `aid`
- payload offset `480`: id `7`, kind `4`, len `6`, `gNetID`
- payload offset `504`: id `8`, kind `4`, len `5`, `Array`
- payload offset `528`: id `9`, kind `4`, len `9`, `fileNetID`
- payload offset `560`: id `10`, kind `4`, len `10`, `lastAction`
- payload offset `604`: id `12`, kind `4`, len `7`, `mainURL`
- payload offset `632`: id `13`, kind `4`, len `29`, `http://game.nittolegends.com/`
- payload offset `704`: id `14`, kind `4`, len `7`, `gameURL`
- payload offset `732`: id `15`, kind `4`, len `17`, `gameCode1_00.aspx`
- payload offset `780`: id `16`, kind `4`, len `13`, `avatarMainURL`
- payload offset `820`: id `17`, kind `4`, len `8`, `cacheURL`
- payload offset `848`: id `18`, kind `4`, len `33`, `http://download.nittolegends.com/`
- payload offset `928`: id `19`, kind `4`, len `9`, `socketURL`
- payload offset `960`: id `20`, kind `4`, len `21`, `live.nittolegends.com`
- payload offset `1016`: id `21`, kind `4`, len `6`, `uggURL`
- payload offset `1040`: id `22`, kind `4`, len `28`, `http://ugg.nittolegends.com/`
- payload offset `1108`: id `23`, kind `4`, len `7`, `exeName`
- payload offset `1136`: id `24`, kind `4`, len `16`, `NittoLegendsBeta`
- payload offset `1180`: id `25`, kind `4`, len `12`, `socketBuffer`
- payload offset `1216`: id `26`, kind `4`, len `5`, `isEnc`
- payload offset `1240`: id `27`, kind `4`, len `15`, `initFileHandler`
- payload offset `1284`: id `28`, kind `4`, len `7`, `_system`
- payload offset `1312`: id `29`, kind `4`, len `2`, `gc`
- payload offset `1328`: id `30`, kind `4`, len `6`, `isIdle`
- payload offset `1352`: id `31`, kind `4`, len `11`, `isConnected`
- payload offset `1388`: id `32`, kind `4`, len `13`, `facebookToken`
- payload offset `1428`: id `33`, kind `4`, len `10`, `facebookID`
- payload offset `1460`: id `34`, kind `4`, len `21`, `facebookSessionSecret`
- payload offset `1516`: id `35`, kind `4`, len `18`, `facebookSessionKey`

Recovered loose UTF-16LE message fragments:
- `http://game.nittolegends.com/`
- `http://download.nittolegends.com/`
- `http://ugg.nittolegends.com/`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\15-initialization-script.js`
- exported handlers: `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

