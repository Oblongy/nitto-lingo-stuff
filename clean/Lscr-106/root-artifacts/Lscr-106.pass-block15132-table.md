## Lscr-106 Block 15132

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `15132`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `15132`, length `536`.
- File offset `17040`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
73 44 6c 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 2d 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 3a 00 01 35 00 02 39 3b 00 03 3b 00 04 37 54 00 00 3b 00 05 3b 00 04 37 3b 00 06 54 00 00 1b 3b 00 07 3a 00 05 51 00 00 00 08 00 00 00 00 00 00 00 04 00 00 00 06 00 00 00 73 00 70 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `64`: id `0`, kind `4`, len `6`, `sprite`
- payload offset `88`: id `1`, kind `4`, len `7`, `flashSP`
- payload offset `116`: id `2`, kind `4`, len `12`, `loadUpdateCB`
- payload offset `152`: id `3`, kind `4`, len `13`, `aryCacheFiles`
- payload offset `192`: id `4`, kind `4`, len `13`, `aryCacheIndex`
- payload offset `232`: id `5`, kind `4`, len `17`, `aryCacheFileSizes`
- payload offset `280`: id `6`, kind `4`, len `24`, `totalDownloadedCacheSize`
- payload offset `340`: id `7`, kind `4`, len `14`, `totalCacheSize`

Recovered loose UTF-16LE message fragments:
- `totalDownloadedCacheSize`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

