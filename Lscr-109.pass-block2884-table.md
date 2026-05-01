## Lscr-109 Block 2884

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `2884`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `2884`, length `3024`.
- File offset `3292`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
72 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 64 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
35 00 01 35 00 02 39 3a 00 00 57 00 00 51 56 00 00 35 00 03 3e 12 07 01 a0 56 00 00 35 00 04 3b 00 05 13 07 01 73 3b 00 00 3b 00 00 35 00 06 56 00 00 35 00 04 1b 36 00 06 51 3b 00 00 35 00 06
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `628`: id `0`, kind `4`, len `7`, `_global`
- payload offset `656`: id `1`, kind `4`, len `18`, `gMultiuserInstance`
- payload offset `704`: id `2`, kind `4`, len `13`, `getNetMessage`
- payload offset `744`: id `3`, kind `4`, len `9`, `errorCode`
- payload offset `776`: id `4`, kind `4`, len `7`, `content`
- payload offset `804`: id `5`, kind `4`, len `9`, `undefined`
- payload offset `836`: id `6`, kind `4`, len `12`, `socketBuffer`
- payload offset `872`: id `7`, kind `4`, len `7`, `indexOf`
- payload offset `900`: id `8`, kind `4`, len `2`, `ld`
- payload offset `928`: id `10`, kind `4`, len `6`, `substr`
- payload offset `952`: id `11`, kind `4`, len `4`, `eval`
- payload offset `972`: id `12`, kind `4`, len `9`, `propList(`
- payload offset `1004`: id `13`, kind `4`, len `1`, `)`
- payload offset `1020`: id `14`, kind `4`, len `6`, `Object`
- payload offset `1044`: id `15`, kind `4`, len `2`, `ex`
- payload offset `1060`: id `16`, kind `4`, len `5`, `isEnc`
- payload offset `1084`: id `17`, kind `4`, len `7`, `decrypt`
- payload offset `1112`: id `18`, kind `4`, len `5`, `exEnc`
- payload offset `1136`: id `19`, kind `4`, len `6`, `sprite`
- payload offset `1160`: id `20`, kind `4`, len `7`, `flashSP`
- payload offset `1188`: id `21`, kind `4`, len `21`, `showConnectionErrorCB`
- payload offset `1244`: id `22`, kind `4`, len `14`, `Protocol Error`
- payload offset `1284`: id `23`, kind `4`, len `58`, `Connection protocol could not be established. (Error: 010)`
- payload offset `1412`: id `24`, kind `4`, len `3`, `ex2`
- payload offset `1432`: id `25`, kind `4`, len `58`, `Connection protocol could not be established. (Error: 005)`
- payload offset `1560`: id `26`, kind `4`, len `58`, `Connection protocol could not be established. (Error: 006)`
- payload offset `1688`: id `27`, kind `4`, len `10`, `procSocket`
- payload offset `1720`: id `28`, kind `4`, len `6`, `length`
- payload offset `1744`: id `29`, kind `4`, len `7`, `subject`
- payload offset `1772`: id `30`, kind `4`, len `18`, `ConnectToNetServer`
- payload offset `1820`: id `31`, kind `4`, len `11`, `isConnected`
- payload offset `1856`: id `32`, kind `4`, len `5`, `LOGIN`
- payload offset `1896`: id `34`, kind `4`, len `23`, `showDisconnectedErrorCB`
- payload offset `1956`: id `35`, kind `4`, len `12`, `Disconnected`
- payload offset `2192`: id `37`, kind `4`, len `16`, `Connection Error`
- payload offset `2236`: id `38`, kind `4`, len `49`, `Connection could not be established. (Error: 007-`
- payload offset `2460`: id `40`, kind `4`, len `7`, `_system`
- payload offset `2488`: id `41`, kind `4`, len `2`, `gc`

Recovered loose UTF-16LE message fragments:
- `Connection protocol could not be established. (Error: 010)`
- `Connection protocol could not be established. (Error: 005)`
- `Connection protocol could not be established. (Error: 006)`
- `You have been disconnected from the game. Please restart the application to continue playing.`
- `Connection could not be established. (Error: 007-`
- `Connection could not be established. (Error: 008)
(`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js`
- exported handlers: `connectSocket`, `sockConnTimeout`, `socketMessageHandler`, `executeCall`, `ssm`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

