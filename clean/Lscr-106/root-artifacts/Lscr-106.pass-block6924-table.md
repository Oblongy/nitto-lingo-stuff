## Lscr-106 Block 6924

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `6924`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `6924`, length `964`.
- File offset `8832`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
6f 62 6a 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de b2 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 3d 00 02 1b 3b 00 00 35 00 03 1b 3d 00 04 1b 3b 00 00 35 00 03 1b 57 00 00 51 3b 00 05 39 23 00 00 57 00 01 51 3b 00 06 35 00 07 39 3a 00 00 51 54 00 00 35 00 08 07 00 14 3b 00 06 35 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `196`: id `0`, kind `4`, len `7`, `_global`
- payload offset `224`: id `1`, kind `4`, len `6`, `uggURL`
- payload offset `248`: id `2`, kind `4`, len `35`, `/Upload.aspx?NeatUpload_PostBackID=`
- payload offset `332`: id `3`, kind `4`, len `3`, `aid`
- payload offset `352`: id `4`, kind `4`, len `11`, `&accountID=`
- payload offset `388`: id `5`, kind `4`, len `6`, `Object`
- payload offset `412`: id `6`, kind `4`, len `8`, `gSimInet`
- payload offset `440`: id `7`, kind `4`, len `10`, `FieldClear`
- payload offset `472`: id `8`, kind `4`, len `6`, `length`
- payload offset `496`: id `9`, kind `4`, len `12`, `AddFieldFile`
- payload offset `532`: id `10`, kind `4`, len `9`, `hoodImage`
- payload offset `564`: id `11`, kind `4`, len `9`, `sideImage`
- payload offset `596`: id `12`, kind `4`, len `10`, `frontImage`
- payload offset `628`: id `13`, kind `4`, len `9`, `backImage`
- payload offset `660`: id `14`, kind `4`, len `10`, `SendField1`
- payload offset `692`: id `15`, kind `4`, len `16`, `uggUploadSuccess`
- payload offset `736`: id `16`, kind `4`, len `13`, `uggUploadFail`

Recovered loose UTF-16LE message fragments:
- `/Upload.aspx?NeatUpload_PostBackID=`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

