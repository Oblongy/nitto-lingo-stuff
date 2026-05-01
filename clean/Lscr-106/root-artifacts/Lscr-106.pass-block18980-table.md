## Lscr-106 Block 18980

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `18980`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `18980`, length `604`.
- File offset `20888`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
69 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 5c 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
39 3b 00 01 3d 00 02 1b 3d 00 03 3a 00 02 57 00 00 51 3f 57 00 01 51 56 00 01 56 00 00 35 00 04 15 07 00 21 3b 00 05 39 3b 00 01 3d 00 06 1b 56 00 00 56 00 01 37 1b 3a 00 01 51 64 00 01 51 06
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `108`: id `0`, kind `4`, len `15`, `baLingoFileList`
- payload offset `152`: id `1`, kind `4`, len `11`, `cacheFolder`
- payload offset `188`: id `2`, kind `4`, len `15`, `\car\userDecals`
- payload offset `232`: id `3`, kind `4`, len `3`, `*.*`
- payload offset `252`: id `4`, kind `4`, len `5`, `count`
- payload offset `276`: id `5`, kind `4`, len `17`, `baLingoDeleteFile`
- payload offset `324`: id `6`, kind `4`, len `16`, `\car\userDecals\`
- payload offset `368`: id `7`, kind `4`, len `6`, `Object`
- payload offset `392`: id `8`, kind `4`, len `2`, `ex`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

