## Lscr-106 Block 20264

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `20264`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `20264`, length `1412`.
- File offset `22172`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
68 61 72 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 6f 01 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 23 00 01 57 00 00 51 56 00 00 35 00 02 39 3d 00 03 3f 3a 00 02 51 56 00 00 35 00 04 39 3a 00 00 57 00 01 51 3b 00 05 39 23 00 00 57 00 02 51 3d 00 06 57 00 03 51 3e 57 00 04 51 58 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `384`: id `0`, kind `4`, len `4`, `xtra`
- payload offset `404`: id `1`, kind `4`, len `6`, `fileio`
- payload offset `428`: id `2`, kind `4`, len `8`, `openFile`
- payload offset `456`: id `3`, kind `4`, len `11`, `servers.txt`
- payload offset `492`: id `4`, kind `4`, len `8`, `readFile`
- payload offset `520`: id `5`, kind `4`, len `5`, `Array`
- payload offset `556`: id `7`, kind `4`, len `6`, `length`
- payload offset `580`: id `8`, kind `4`, len `6`, `charAt`
- payload offset `604`: id `9`, kind `4`, len `1`, `<`
- payload offset `620`: id `10`, kind `4`, len `1`, `>`
- payload offset `636`: id `11`, kind `4`, len `9`, `closeFile`
- payload offset `668`: id `12`, kind `4`, len `7`, `_global`
- payload offset `696`: id `13`, kind `4`, len `9`, `socketURL`
- payload offset `728`: id `14`, kind `4`, len `10`, `socketPort`
- payload offset `760`: id `15`, kind `4`, len `7`, `mainURL`
- payload offset `788`: id `16`, kind `4`, len `7`, `gameURL`
- payload offset `816`: id `17`, kind `4`, len `17`, `gameCode1_00.aspx`
- payload offset `864`: id `18`, kind `4`, len `13`, `avatarMainURL`
- payload offset `904`: id `19`, kind `4`, len `8`, `cacheURL`
- payload offset `932`: id `20`, kind `4`, len `6`, `uggURL`
- payload offset `956`: id `21`, kind `4`, len `7`, `exeName`
- payload offset `984`: id `22`, kind `4`, len `4`, `true`
- payload offset `1004`: id `23`, kind `4`, len `5`, `isEnc`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

