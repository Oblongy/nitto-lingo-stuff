## Lscr-106 Block 4668

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `4668`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `4668`, length `256`.
- File offset `6576`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
62 6c 65 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 1b 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 3a 00 01 35 00 02 39 54 00 00 54 00 01 54 00 02 3a 00 03 51 00 03 00 00 00 00 00 00 00 04 00 00 00 06 00 00 00 73 00 70 00 72 00 69 00 74 00 65 00 01 00 00 00 04 00 00 00 07 00 00 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `44`: id `0`, kind `4`, len `6`, `sprite`
- payload offset `68`: id `1`, kind `4`, len `7`, `flashSP`
- payload offset `96`: id `2`, kind `4`, len `11`, `getAvatarCB`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

