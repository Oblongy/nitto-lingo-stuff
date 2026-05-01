## Lscr-106 Block 12108

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `12108`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `12108`, length `1488`.
- File offset `14016`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
5f 6d 64 35
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de be 01 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 00 51 56 00 00 54 00 01 35 00 00 15 07 01 ad 54 00 01 56 00 00 37 35 00 01 35 00 02 3d 00 03 12 07 00 5f 3b 00 04 39 54 00 00 54 00 01 56 00 00 37 35 00 01 35 00 05 1b 3a 00 01 20 07 00 1c
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `464`: id `0`, kind `4`, len `5`, `count`
- payload offset `488`: id `1`, kind `4`, len `11`, `!ATTRIBUTES`
- payload offset `524`: id `2`, kind `4`, len `1`, `t`
- payload offset `540`: id `3`, kind `4`, len `1`, `d`
- payload offset `556`: id `4`, kind `4`, len `19`, `baLingoFolderExists`
- payload offset `608`: id `5`, kind `4`, len `1`, `n`
- payload offset `624`: id `6`, kind `4`, len `19`, `baLingoCreateFolder`
- payload offset `676`: id `7`, kind `4`, len `18`, `createCacheFolders`
- payload offset `724`: id `8`, kind `4`, len `1`, `\`
- payload offset `740`: id `9`, kind `4`, len `1`, `f`
- payload offset `756`: id `10`, kind `4`, len `4`, `xtra`
- payload offset `776`: id `11`, kind `4`, len `7`, `caluMD5`
- payload offset `804`: id `12`, kind `4`, len `17`, `baLingoFileExists`
- payload offset `852`: id `13`, kind `4`, len `13`, `aryCacheFiles`
- payload offset `892`: id `14`, kind `4`, len `4`, `push`
- payload offset `912`: id `15`, kind `4`, len `17`, `aryCacheFileSizes`
- payload offset `960`: id `16`, kind `4`, len `8`, `parseInt`
- payload offset `988`: id `17`, kind `4`, len `1`, `s`
- payload offset `1004`: id `18`, kind `4`, len `14`, `totalCacheSize`
- payload offset `1044`: id `19`, kind `4`, len `10`, `getFileMD5`
- payload offset `1076`: id `20`, kind `4`, len `2`, `md`
- payload offset `1092`: id `21`, kind `4`, len `7`, `_system`
- payload offset `1120`: id `22`, kind `4`, len `2`, `gc`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

