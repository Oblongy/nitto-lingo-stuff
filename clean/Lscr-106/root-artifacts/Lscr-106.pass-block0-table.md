## Lscr-106 Block 0

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `0`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `0`, length `460`.
- File offset `1908`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 54 ac
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de bc 00 00 00 6f 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 04 7d 00 05 7d 00 06 7d 00 07 7d 00 08 7d 00 09 7d 00 0a 7d 00 0b 7d 00 0c 7d 00 0d 7d 00 0e 7d 00 0f 7d 00 10 7d 00 11 7d 00 12 7d 00 13 7f 00 14 7f 00 15 7f 00 16 7f 00 17 7f 00 18 7d 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `204`: id `0`, kind `4`, len `11`, `cacheFolder`
- payload offset `240`: id `1`, kind `4`, len `7`, `_player`
- payload offset `268`: id `2`, kind `4`, len `15`, `applicationPath`
- payload offset `312`: id `3`, kind `4`, len `5`, `cache`
- payload offset `336`: id `4`, kind `4`, len `12`, `fileAgeCheck`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

