## Lscr-106 Block 15668

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `15668`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `15668`, length `916`.
- File offset `17576`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
79 6e 6f 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de ac 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 23 00 01 57 00 00 51 56 00 00 35 00 02 39 3d 00 03 3a 00 01 51 56 00 00 35 00 04 39 3a 00 00 57 00 01 51 56 00 01 07 00 74 56 00 00 35 00 05 39 56 00 01 3f 3a 00 02 51 56 00 00 35 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `188`: id `0`, kind `4`, len `4`, `xtra`
- payload offset `208`: id `1`, kind `4`, len `6`, `fileio`
- payload offset `232`: id `2`, kind `4`, len `13`, `setFilterMask`
- payload offset `272`: id `3`, kind `4`, len `16`, `Text Files,*.txt`
- payload offset `316`: id `4`, kind `4`, len `11`, `displayOpen`
- payload offset `352`: id `5`, kind `4`, len `8`, `openFile`
- payload offset `380`: id `6`, kind `4`, len `6`, `status`
- payload offset `404`: id `7`, kind `4`, len `8`, `readFile`
- payload offset `432`: id `8`, kind `4`, len `5`, `split`
- payload offset `456`: id `9`, kind `4`, len `1`, `|`
- payload offset `472`: id `10`, kind `4`, len `6`, `sprite`
- payload offset `496`: id `11`, kind `4`, len `7`, `flashSP`
- payload offset `524`: id `12`, kind `4`, len `16`, `garageDynoLoadCB`
- payload offset `568`: id `13`, kind `4`, len `14`, `getTxtFileName`
- payload offset `608`: id `14`, kind `4`, len `9`, `closeFile`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

