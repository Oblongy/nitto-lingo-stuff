## Lscr-106 Block 2604

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `2604`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `2604`, length `700`.
- File offset `4512`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
79 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 6c 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3a 00 00 51 3b 00 01 35 00 02 54 00 01 1b 3d 00 03 1b 3b 00 04 39 54 00 00 3a 00 01 1b 3d 00 05 1b 57 00 00 51 3b 00 06 39 54 00 01 54 00 00 3b 00 07 39 56 00 00 3b 00 08 3d 00 03 1b 54 00 01
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `124`: id `0`, kind `4`, len `10`, `clearCache`
- payload offset `156`: id `1`, kind `4`, len `7`, `_global`
- payload offset `184`: id `2`, kind `4`, len `13`, `avatarMainURL`
- payload offset `224`: id `3`, kind `4`, len `1`, `\`
- payload offset `240`: id `4`, kind `4`, len `14`, `avatarIDtoPath`
- payload offset `280`: id `5`, kind `4`, len `4`, `.jpg`
- payload offset `300`: id `6`, kind `4`, len `5`, `Array`
- payload offset `324`: id `7`, kind `4`, len `16`, `downloadNetThing`
- payload offset `368`: id `8`, kind `4`, len `11`, `cacheFolder`
- payload offset `404`: id `9`, kind `4`, len `9`, `fileNetID`
- payload offset `436`: id `10`, kind `4`, len `4`, `push`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

