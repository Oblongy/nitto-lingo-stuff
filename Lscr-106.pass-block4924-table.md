## Lscr-106 Block 4924

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `4924`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `4924`, length `440`.
- File offset `6832`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
61 69 64 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 7a 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 39 54 00 00 3c 00 02 1e 3a 00 01 35 00 03 39 3a 00 00 3d 00 04 1b 3b 00 00 35 00 01 39 54 00 00 58 27 10 1e 83 58 00 64 1f 3a 00 01 35 00 03 39 3a 00 00 1b 3d 00 04 1b 3b 00 00 35 00 01
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `140`: id `0`, kind `4`, len `4`, `Math`
- payload offset `160`: id `1`, kind `4`, len `5`, `floor`
- payload offset `196`: id `3`, kind `4`, len `8`, `toString`
- payload offset `224`: id `4`, kind `4`, len `1`, `\`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

