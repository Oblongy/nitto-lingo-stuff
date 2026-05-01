## Lscr-106 Block 13596

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `13596`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `13596`, length `696`.
- File offset `15504`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
79 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 70 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3a 00 00 51 3b 00 01 35 00 02 54 00 00 35 00 03 39 3b 00 04 35 00 05 3a 00 01 35 00 06 39 3d 00 07 3a 00 01 35 00 03 39 3d 00 08 3a 00 01 35 00 06 39 3d 00 09 3a 00 01 1b 57 00 00 51 3b 00 0a
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `128`: id `0`, kind `4`, len `10`, `clearCache`
- payload offset `160`: id `1`, kind `4`, len `7`, `_global`
- payload offset `188`: id `2`, kind `4`, len `8`, `cacheURL`
- payload offset `216`: id `3`, kind `4`, len `5`, `split`
- payload offset `240`: id `4`, kind `4`, len `7`, `_player`
- payload offset `268`: id `5`, kind `4`, len `15`, `applicationPath`
- payload offset `312`: id `6`, kind `4`, len `4`, `join`
- payload offset `344`: id `8`, kind `4`, len `1`, `\`
- payload offset `360`: id `9`, kind `4`, len `1`, `/`
- payload offset `376`: id `10`, kind `4`, len `5`, `Array`
- payload offset `400`: id `11`, kind `4`, len `5`, `cache`
- payload offset `424`: id `12`, kind `4`, len `16`, `downloadNetThing`
- payload offset `468`: id `13`, kind `4`, len `9`, `fileNetID`
- payload offset `500`: id `14`, kind `4`, len `4`, `push`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

