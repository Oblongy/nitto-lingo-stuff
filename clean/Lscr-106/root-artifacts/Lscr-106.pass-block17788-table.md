## Lscr-106 Block 17788

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `17788`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `17788`, length `640`.
- File offset `19696`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
69 6c 65 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 8b 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 23 00 01 57 00 00 51 56 00 00 35 00 02 39 54 00 00 3a 00 01 51 56 00 00 35 00 03 39 54 00 00 58 00 02 3a 00 02 51 56 00 00 35 00 04 39 3b 00 05 39 54 00 01 3a 00 01 3a 00 01 51 56 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `156`: id `0`, kind `4`, len `4`, `xtra`
- payload offset `176`: id `1`, kind `4`, len `6`, `fileio`
- payload offset `200`: id `2`, kind `4`, len `10`, `createFile`
- payload offset `232`: id `3`, kind `4`, len `8`, `openFile`
- payload offset `260`: id `4`, kind `4`, len `11`, `writeString`
- payload offset `296`: id `5`, kind `4`, len `8`, `unescape`
- payload offset `324`: id `6`, kind `4`, len `6`, `status`
- payload offset `348`: id `7`, kind `4`, len `6`, `sprite`
- payload offset `372`: id `8`, kind `4`, len `7`, `flashSP`
- payload offset `400`: id `9`, kind `4`, len `10`, `saveFileCB`
- payload offset `432`: id `10`, kind `4`, len `9`, `closeFile`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

