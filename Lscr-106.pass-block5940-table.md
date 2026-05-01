## Lscr-106 Block 5940

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `5940`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `5940`, length `288`.
- File offset `7848`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
62 6c 65 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 18 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 3a 00 01 35 00 02 39 54 00 00 54 00 01 3a 00 02 51 03 00 00 00 00 00 00 00 04 00 00 00 06 00 00 00 73 00 70 00 72 00 69 00 74 00 65 00 01 00 00 00 04 00 00 00 07 00 00 00 66 00 6c 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `40`: id `0`, kind `4`, len `6`, `sprite`
- payload offset `64`: id `1`, kind `4`, len `7`, `flashSP`
- payload offset `92`: id `2`, kind `4`, len `13`, `downloadUggCB`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

