## Lscr-106 Block 18428

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `18428`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `18428`, length `552`.
- File offset `20336`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
69 6c 65 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 70 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 23 00 01 57 00 00 51 56 00 00 35 00 02 39 54 00 00 3f 3a 00 02 51 56 00 00 35 00 03 39 3a 00 00 3e 12 07 00 26 3b 00 04 39 3d 00 05 3a 00 01 35 00 06 39 3f 54 00 00 56 00 00 35 00 07
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `128`: id `0`, kind `4`, len `4`, `xtra`
- payload offset `148`: id `1`, kind `4`, len `6`, `fileio`
- payload offset `172`: id `2`, kind `4`, len `8`, `openFile`
- payload offset `200`: id `3`, kind `4`, len `6`, `status`
- payload offset `224`: id `4`, kind `4`, len `6`, `sprite`
- payload offset `248`: id `5`, kind `4`, len `7`, `flashSP`
- payload offset `276`: id `6`, kind `4`, len `10`, `openFileCB`
- payload offset `308`: id `7`, kind `4`, len `8`, `readFile`
- payload offset `336`: id `8`, kind `4`, len `9`, `closeFile`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

