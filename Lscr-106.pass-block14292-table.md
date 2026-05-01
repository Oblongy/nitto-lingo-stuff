## Lscr-106 Block 14292

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `14292`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `14292`, length `236`.
- File offset `16200`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
61 74 75 73
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 0e 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
54 00 00 35 00 01 3a 00 01 51 00 00 02 00 00 00 00 00 00 00 04 00 00 00 18 00 00 00 64 00 6f 00 77 00 6e 00 6c 00 6f 00 61 00 64 00 43 00 61 00 63 00 68 00 65 00 55 00 70 00 64 00 61 00 74 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `32`: id `0`, kind `4`, len `24`, `downloadCacheUpdateFlash`
- payload offset `92`: id `1`, kind `4`, len `10`, `bytesSoFar`

Recovered loose UTF-16LE message fragments:
- `downloadCacheUpdateFlash`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\14-file-handler.js`
- exported handlers: `initFileHandler`, `getAvatar`, `downloadAvatar`, `compareAvatarAge`, `loadLocalAvatar`, `avatarIDtoPath`, `downloadUgg`, `loadLocalUgg`, `fileBrowse`, `uggUpload`, `uggUploadSuccess`, `uggUploadFail`, `downloadNewInstaller`, `downloadInstallerUpdateFlash`, `runInstaller`, `fetchCacheXML`, `fetchCacheXMLDone`, `createCacheFolders`, `downloadCache`, `downloadCacheInProgress`, `downloadCacheDone`, `downloadCacheUpdateFlash`, `loadDyno`, `saveDyno`, `getTxtFileName`, `saveFile`, `openfile`, `fileClearAllDecals`, `fileClearADecal`, `loadExternalValues`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

