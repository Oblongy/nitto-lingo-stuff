## Lscr-109 Block 5908

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `5908`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `5908`, length `2528`.
- File offset `6316`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
79 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 7e 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
54 00 00 3d 00 00 12 07 00 0f 3d 00 01 55 00 00 51 43 57 00 00 51 3d 00 02 54 00 00 1b 3d 00 03 1b 3b 00 04 35 00 05 1b 3d 00 06 1b 3b 00 04 35 00 07 1b 57 00 01 51 54 00 00 3d 00 08 12 07 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `656`: id `0`, kind `4`, len `10`, `buypartugg`
- payload offset `688`: id `1`, kind `4`, len `7`, `buypart`
- payload offset `716`: id `2`, kind `4`, len `7`, `action=`
- payload offset `744`: id `3`, kind `4`, len `5`, `&aid=`
- payload offset `768`: id `4`, kind `4`, len `7`, `_global`
- payload offset `796`: id `5`, kind `4`, len `3`, `aid`
- payload offset `816`: id `6`, kind `4`, len `4`, `&sk=`
- payload offset `836`: id `7`, kind `4`, len `4`, `guid`
- payload offset `856`: id `8`, kind `4`, len `5`, `login`
- payload offset `880`: id `9`, kind `4`, len `5`, `&fbt=`
- payload offset `904`: id `10`, kind `4`, len `13`, `facebookToken`
- payload offset `944`: id `11`, kind `4`, len `5`, `&fbi=`
- payload offset `968`: id `12`, kind `4`, len `10`, `facebookID`
- payload offset `1000`: id `13`, kind `4`, len `12`, `fbgetsession`
- payload offset `1036`: id `14`, kind `4`, len `12`, `agreetoterms`
- payload offset `1072`: id `15`, kind `4`, len `13`, `createaccount`
- payload offset `1112`: id `16`, kind `4`, len `4`, `xtra`
- payload offset `1132`: id `17`, kind `4`, len `7`, `caluMD5`
- payload offset `1160`: id `18`, kind `4`, len `5`, `&md5=`
- payload offset `1184`: id `19`, kind `4`, len `10`, `getFileMD5`
- payload offset `1216`: id `20`, kind `4`, len `7`, `_player`
- payload offset `1244`: id `21`, kind `4`, len `15`, `applicationPath`
- payload offset `1288`: id `22`, kind `4`, len `15`, `applicationName`
- payload offset `1332`: id `23`, kind `4`, len `1`, `&`
- payload offset `1348`: id `24`, kind `4`, len `9`, `getPCInfo`
- payload offset `1380`: id `25`, kind `4`, len `17`, `changehomemachine`
- payload offset `1428`: id `26`, kind `4`, len `6`, `buycar`
- payload offset `1452`: id `27`, kind `4`, len `13`, `buyenginepart`
- payload offset `1492`: id `28`, kind `4`, len `9`, `buyengine`
- payload offset `1524`: id `29`, kind `4`, len `10`, `swapengine`
- payload offset `1556`: id `30`, kind `4`, len `11`, `changeemail`
- payload offset `1592`: id `31`, kind `4`, len `14`, `changepassword`
- payload offset `1632`: id `32`, kind `4`, len `4`, `ebep`
- payload offset `1652`: id `33`, kind `4`, len `7`, `sellcar`
- payload offset `1680`: id `34`, kind `4`, len `11`, `sellcarpart`
- payload offset `1716`: id `35`, kind `4`, len `14`, `sellenginepart`
- payload offset `1756`: id `36`, kind `4`, len `10`, `sellengine`
- payload offset `1788`: id `37`, kind `4`, len `8`, `buygears`
- payload offset `1816`: id `38`, kind `4`, len `12`, `sellallspare`
- payload offset `1852`: id `39`, kind `4`, len `14`, `activatepoints`
- payload offset `1892`: id `40`, kind `4`, len `14`, `activatemember`
- payload offset `1932`: id `41`, kind `4`, len `11`, `repairparts`
- payload offset `1968`: id `42`, kind `4`, len `16`, `fbremovefacebook`
- payload offset `2012`: id `43`, kind `4`, len `17`, `changepasswordreq`
- payload offset `2060`: id `44`, kind `4`, len `5`, `isEnc`
- payload offset `2084`: id `45`, kind `4`, len `7`, `gameURL`
- payload offset `2112`: id `46`, kind `4`, len `1`, `?`
- payload offset `2128`: id `47`, kind `4`, len `6`, `escape`
- payload offset `2152`: id `48`, kind `4`, len `7`, `encrypt`
- payload offset `2180`: id `49`, kind `4`, len `5`, `Array`
- payload offset `2204`: id `50`, kind `4`, len `10`, `getNetText`
- payload offset `2236`: id `51`, kind `4`, len `6`, `gNetID`
- payload offset `2260`: id `52`, kind `4`, len `4`, `push`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\10-connection-script.js`
- exported handlers: `connectSocket`, `sockConnTimeout`, `socketMessageHandler`, `executeCall`, `ssm`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

