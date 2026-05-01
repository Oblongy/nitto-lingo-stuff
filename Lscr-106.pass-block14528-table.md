## Lscr-106 Block 14528

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `14528`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `14528`, length `604`.
- File offset `16436`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 50 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
17 07 00 16 6c 00 01 0c 35 00 01 3b 00 02 3b 00 00 37 1b 6d 00 01 51 2f 00 00 51 3b 00 00 3b 00 03 35 00 04 14 07 00 15 3b 00 05 39 3b 00 03 3b 00 00 37 3a 00 01 51 06 00 15 3b 00 06 39 3d 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `96`: id `0`, kind `4`, len `13`, `aryCacheIndex`
- payload offset `136`: id `1`, kind `4`, len `24`, `totalDownloadedCacheSize`
- payload offset `196`: id `2`, kind `4`, len `17`, `aryCacheFileSizes`
- payload offset `244`: id `3`, kind `4`, len `13`, `aryCacheFiles`
- payload offset `284`: id `4`, kind `4`, len `6`, `length`
- payload offset `308`: id `5`, kind `4`, len `13`, `downloadCache`
- payload offset `348`: id `6`, kind `4`, len `6`, `sprite`
- payload offset `372`: id `7`, kind `4`, len `7`, `flashSP`
- payload offset `400`: id `8`, kind `4`, len `12`, `loadFinishCB`

Recovered loose UTF-16LE message fragments:
- `totalDownloadedCacheSize`
- `downloadCacheUpdateFlash`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

