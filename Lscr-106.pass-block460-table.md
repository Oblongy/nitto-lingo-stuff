## Lscr-106 Block 460

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `460`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `460`, length `740`.
- File offset `2368`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 9d 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3b 00 01 3a 00 01 20 07 00 0e 3b 00 02 39 3b 00 01 3a 00 01 51 3b 00 00 39 3b 00 01 3d 00 03 1b 3a 00 01 20 07 00 12 3b 00 02 39 3b 00 01 3d 00 03 1b 3a 00 01 51 3b 00 00 39 3b 00 01 3d 00 04
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `176`: id `0`, kind `4`, len `19`, `baLingoFolderExists`
- payload offset `228`: id `1`, kind `4`, len `11`, `cacheFolder`
- payload offset `264`: id `2`, kind `4`, len `19`, `baLingoCreateFolder`
- payload offset `316`: id `3`, kind `4`, len `8`, `\avatars`
- payload offset `344`: id `4`, kind `4`, len `12`, `\teamAvatars`
- payload offset `380`: id `5`, kind `4`, len `4`, `\car`
- payload offset `400`: id `6`, kind `4`, len `15`, `\car\userDecals`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

