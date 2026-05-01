## Lscr-106 Block 9860

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `9860`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `9860`, length `1092`.
- File offset `11768`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
69 6f 6e 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 46 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
54 00 00 3a 00 01 07 00 24 3b 00 01 39 54 00 00 3d 00 02 1b 3d 00 03 42 3a 00 03 51 3b 00 04 35 00 05 39 3a 00 00 51 06 00 1b 3b 00 06 39 3d 00 07 3a 00 01 35 00 08 39 3d 00 09 3d 00 0a 3a 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `88`: id `0`, kind `4`, len `17`, `baLingoFileExists`
- payload offset `136`: id `1`, kind `4`, len `17`, `baLingoRunProgram`
- payload offset `184`: id `2`, kind `4`, len `8`, ` /silent`
- payload offset `212`: id `3`, kind `4`, len `6`, `normal`
- payload offset `236`: id `4`, kind `4`, len `7`, `_player`
- payload offset `264`: id `5`, kind `4`, len `4`, `quit`
- payload offset `284`: id `6`, kind `4`, len `6`, `sprite`
- payload offset `308`: id `7`, kind `4`, len `7`, `flashSP`
- payload offset `336`: id `8`, kind `4`, len `21`, `showConnectionErrorCB`
- payload offset `392`: id `9`, kind `4`, len `15`, `Download Failed`
- payload offset `768`: id `20`, kind `4`, len `13`, `aryCacheFiles`
- payload offset `808`: id `21`, kind `4`, len `17`, `aryCacheFileSizes`
- payload offset `856`: id `22`, kind `4`, len `14`, `totalCacheSize`
- payload offset `896`: id `23`, kind `4`, len `24`, `totalDownloadedCacheSize`
- payload offset `956`: id `24`, kind `4`, len `13`, `aryCacheIndex`

Recovered loose UTF-16LE message fragments:
- `I'm sorry, but the automatic updater is not working properly. Please visit http://www.nittolegends.com and download the latest version.`
- `totalDownloadedCacheSize`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

