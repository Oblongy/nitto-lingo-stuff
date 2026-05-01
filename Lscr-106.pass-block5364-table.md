## Lscr-106 Block 5364

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `5364`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `5364`, length `576`.
- File offset `7272`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
79 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 49 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 3d 00 02 1b 54 00 00 1b 57 00 00 51 3b 00 03 39 3d 00 04 54 00 00 3b 00 05 39 56 00 00 3b 00 06 3d 00 07 1b 54 00 00 1b 3a 00 02 23 00 03 57 00 01 51 3b 00 00 35 00 08 35 00 09 39 56 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `92`: id `0`, kind `4`, len `7`, `_global`
- payload offset `120`: id `1`, kind `4`, len `6`, `uggURL`
- payload offset `144`: id `2`, kind `4`, len `21`, `cache/car/userDecals/`
- payload offset `200`: id `3`, kind `4`, len `5`, `Array`
- payload offset `224`: id `4`, kind `4`, len `3`, `ugg`
- payload offset `244`: id `5`, kind `4`, len `16`, `downloadNetThing`
- payload offset `288`: id `6`, kind `4`, len `11`, `cacheFolder`
- payload offset `324`: id `7`, kind `4`, len `16`, `\car\userDecals\`
- payload offset `368`: id `8`, kind `4`, len `9`, `fileNetID`
- payload offset `400`: id `9`, kind `4`, len `4`, `push`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

