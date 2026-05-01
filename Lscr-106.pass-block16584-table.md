## Lscr-106 Block 16584

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `16584`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `16584`, length `848`.
- File offset `18492`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
66 6e 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de a2 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 23 00 01 57 00 00 51 56 00 00 35 00 02 39 3d 00 03 3a 00 01 51 56 00 00 35 00 04 39 3d 00 05 3d 00 06 3a 00 02 57 00 01 51 56 00 01 07 00 6f 56 00 00 35 00 07 39 56 00 01 3a 00 01 51
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `180`: id `0`, kind `4`, len `4`, `xtra`
- payload offset `200`: id `1`, kind `4`, len `6`, `fileio`
- payload offset `224`: id `2`, kind `4`, len `13`, `setFilterMask`
- payload offset `264`: id `3`, kind `4`, len `16`, `Text Files,*.txt`
- payload offset `308`: id `4`, kind `4`, len `11`, `displaySave`
- payload offset `344`: id `5`, kind `4`, len `9`, `Save Dyno`
- payload offset `388`: id `7`, kind `4`, len `10`, `createFile`
- payload offset `420`: id `8`, kind `4`, len `8`, `openFile`
- payload offset `448`: id `9`, kind `4`, len `11`, `writeString`
- payload offset `484`: id `10`, kind `4`, len `1`, `|`
- payload offset `500`: id `11`, kind `4`, len `9`, `closeFile`
- payload offset `532`: id `12`, kind `4`, len `6`, `sprite`
- payload offset `556`: id `13`, kind `4`, len `7`, `flashSP`
- payload offset `584`: id `14`, kind `4`, len `16`, `garageDynoSaveCB`
- payload offset `628`: id `15`, kind `4`, len `14`, `getTxtFileName`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

