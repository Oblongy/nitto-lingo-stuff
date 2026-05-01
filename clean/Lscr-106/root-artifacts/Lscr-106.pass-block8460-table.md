## Lscr-106 Block 8460

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `8460`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `8460`, length `980`.
- File offset `10368`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
79 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de d2 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 3a 00 01 3b 00 02 35 00 03 1b 57 00 00 51 3b 00 04 39 56 00 00 3a 00 01 07 00 76 3b 00 05 39 3d 00 06 23 00 01 57 00 01 51 56 00 01 35 00 07 39 56 00 00 3a 00 01 3b 00 02 35 00 08 12
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `228`: id `0`, kind `4`, len `16`, `baLingoSysFolder`
- payload offset `272`: id `1`, kind `4`, len `4`, `temp`
- payload offset `292`: id `2`, kind `4`, len `7`, `_global`
- payload offset `320`: id `3`, kind `4`, len `13`, `installerFile`
- payload offset `360`: id `4`, kind `4`, len `17`, `baLingoFileExists`
- payload offset `408`: id `5`, kind `4`, len `4`, `xtra`
- payload offset `428`: id `6`, kind `4`, len `7`, `caluMD5`
- payload offset `456`: id `7`, kind `4`, len `10`, `getFileMD5`
- payload offset `488`: id `8`, kind `4`, len `12`, `installerMD5`
- payload offset `524`: id `9`, kind `4`, len `12`, `runInstaller`
- payload offset `560`: id `10`, kind `4`, len `5`, `Array`
- payload offset `584`: id `11`, kind `4`, len `9`, `installer`
- payload offset `616`: id `12`, kind `4`, len `16`, `downloadNetThing`
- payload offset `660`: id `13`, kind `4`, len `12`, `installerURL`
- payload offset `696`: id `14`, kind `4`, len `1`, `/`
- payload offset `712`: id `15`, kind `4`, len `9`, `fileNetID`
- payload offset `744`: id `16`, kind `4`, len `4`, `push`

Recovered loose UTF-16LE message fragments:
- `downloadInstallerUpdateFlash`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

