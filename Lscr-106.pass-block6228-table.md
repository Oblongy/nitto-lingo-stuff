## Lscr-106 Block 6228

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `6228`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `6228`, length `696`.
- File offset `8136`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
65 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 4b 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 3d 00 02 3d 00 02 3d 00 03 3c 00 04 3d 00 05 42 3c 00 06 3e 3a 00 09 57 00 00 51 3b 00 07 39 56 00 00 3a 00 01 57 00 01 51 3b 00 08 39 3d 00 09 3a 00 01 35 00 0a 39 54 00 00 56 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `92`: id `0`, kind `4`, len `13`, `baGetFilename`
- payload offset `132`: id `1`, kind `4`, len `4`, `open`
- payload offset `164`: id `3`, kind `4`, len `43`, `JPG,PNG,GIF Images|*.jpg;*.jpeg;*.png;*.gif`
- payload offset `276`: id `5`, kind `4`, len `17`, `Select image file`
- payload offset `336`: id `7`, kind `4`, len `10`, `baFileSize`
- payload offset `368`: id `8`, kind `4`, len `6`, `sprite`
- payload offset `392`: id `9`, kind `4`, len `7`, `flashSP`
- payload offset `420`: id `10`, kind `4`, len `12`, `fileBrowseCB`

Recovered loose UTF-16LE message fragments:
- `JPG,PNG,GIF Images|*.jpg;*.jpeg;*.png;*.gif`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

