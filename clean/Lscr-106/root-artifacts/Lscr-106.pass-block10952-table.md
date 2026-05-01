## Lscr-106 Block 10952

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `10952`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `10952`, length `772`.
- File offset `12860`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
79 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 6e 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3a 00 00 51 6c 00 01 3e 6d 00 01 51 6c 00 02 3e 6d 00 02 51 6c 00 03 3c 00 04 6d 00 03 51 6c 00 05 3b 00 06 39 23 00 00 6d 00 05 51 6c 00 07 3b 00 06 39 23 00 00 6d 00 07 51 3b 00 06 39 3d 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `128`: id `0`, kind `4`, len `10`, `clearCache`
- payload offset `160`: id `1`, kind `4`, len `14`, `totalCacheSize`
- payload offset `200`: id `2`, kind `4`, len `24`, `totalDownloadedCacheSize`
- payload offset `260`: id `3`, kind `4`, len `13`, `aryCacheIndex`
- payload offset `312`: id `5`, kind `4`, len `13`, `aryCacheFiles`
- payload offset `352`: id `6`, kind `4`, len `5`, `Array`
- payload offset `376`: id `7`, kind `4`, len `17`, `aryCacheFileSizes`
- payload offset `424`: id `8`, kind `4`, len `8`, `getcache`
- payload offset `452`: id `9`, kind `4`, len `10`, `getNetText`
- payload offset `484`: id `10`, kind `4`, len `7`, `_global`
- payload offset `512`: id `11`, kind `4`, len `8`, `cacheURL`
- payload offset `540`: id `12`, kind `4`, len `11`, `content.htm`
- payload offset `576`: id `13`, kind `4`, len `6`, `gNetID`
- payload offset `600`: id `14`, kind `4`, len `4`, `push`

Recovered loose UTF-16LE message fragments:
- `totalDownloadedCacheSize`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

