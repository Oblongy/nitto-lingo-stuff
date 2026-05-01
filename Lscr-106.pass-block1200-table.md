## Lscr-106 Block 1200

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `1200`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `1200`, length `1404`.
- File offset `3108`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
4e 6f 77 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 58 01 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 00 39 3d 00 01 3a 00 01 57 00 00 51 3b 00 02 39 23 00 00 57 00 01 51 3e 57 00 02 51 56 00 02 56 00 00 35 00 03 14 07 00 d3 6c 00 04 56 00 00 56 00 02 37 6d 00 04 51 54 00 02 3f 12 07 00 14
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `360`: id `0`, kind `4`, len `5`, `split`
- payload offset `384`: id `1`, kind `4`, len `1`, `,`
- payload offset `400`: id `2`, kind `4`, len `5`, `Array`
- payload offset `424`: id `3`, kind `4`, len `6`, `length`
- payload offset `448`: id `4`, kind `4`, len `3`, `aid`
- payload offset `468`: id `5`, kind `4`, len `14`, `downloadAvatar`
- payload offset `508`: id `6`, kind `4`, len `17`, `baLingoFileExists`
- payload offset `556`: id `7`, kind `4`, len `11`, `cacheFolder`
- payload offset `592`: id `8`, kind `4`, len `1`, `\`
- payload offset `608`: id `9`, kind `4`, len `4`, `.jpg`
- payload offset `628`: id `10`, kind `4`, len `19`, `baLingoTempFileName`
- payload offset `680`: id `11`, kind `4`, len `5`, `avage`
- payload offset `704`: id `12`, kind `4`, len `14`, `baLingoFileAge`
- payload offset `744`: id `13`, kind `4`, len `12`, `fileAgeCheck`
- payload offset `780`: id `14`, kind `4`, len `4`, `push`
- payload offset `800`: id `15`, kind `4`, len `15`, `loadLocalAvatar`
- payload offset `844`: id `16`, kind `4`, len `17`, `baLingoDeleteFile`
- payload offset `892`: id `17`, kind `4`, len `7`, `avatars`
- payload offset `920`: id `18`, kind `4`, len `11`, `executeCall`
- payload offset `956`: id `19`, kind `4`, len `12`, `getavatarage`
- payload offset `992`: id `20`, kind `4`, len `5`, `tids=`
- payload offset `1016`: id `21`, kind `4`, len `4`, `join`
- payload offset `1036`: id `22`, kind `4`, len `11`, `teamavatars`
- payload offset `1072`: id `23`, kind `4`, len `16`, `getteamavatarage`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

