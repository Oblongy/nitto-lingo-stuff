## Lscr-106 Block 19584

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `19584`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `19584`, length `680`.
- File offset `21492`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
64 69 64 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 57 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
39 3b 00 01 3d 00 02 1b 54 00 00 1b 3d 00 03 1b 54 00 01 1b 3d 00 04 1b 3a 00 01 07 00 22 3b 00 05 39 3b 00 01 3d 00 02 1b 54 00 00 1b 3d 00 03 1b 54 00 01 1b 3d 00 04 1b 3a 00 01 51 06 00 16
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `104`: id `0`, kind `4`, len `17`, `baLingoFileExists`
- payload offset `152`: id `1`, kind `4`, len `11`, `cacheFolder`
- payload offset `188`: id `2`, kind `4`, len `16`, `\car\userDecals\`
- payload offset `232`: id `3`, kind `4`, len `1`, `_`
- payload offset `248`: id `4`, kind `4`, len `4`, `.swf`
- payload offset `268`: id `5`, kind `4`, len `17`, `baLingoDeleteFile`
- payload offset `316`: id `6`, kind `4`, len `6`, `Object`
- payload offset `340`: id `7`, kind `4`, len `2`, `ex`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

