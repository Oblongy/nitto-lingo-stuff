# Mechanical Lingo Reconstruction Report

Inventory pass:
- Deliverable `rightful.ls`: `533` lines, `31` visible `on` blocks.
- Handler inventory is byte-backed by the block table below: JSON metadata covers `initFileHandler` through `loadExternalValues`, and the lifted body also preserves embedded block `__embedded_lscr106_block30`.
- Obvious unresolved scan hits: `4` explicit `implicit_*` markers, plus surviving block-local `id_*` gaps in `initFileHandler`, `uggUpload`, `downloadNewInstaller`, `downloadCacheInProgress`, `getTxtFileName`, and embedded block `30`.
  - `rightful.ls:97`, `99` -> stack-lifted conditional regions still carrying `implicit_object_*` / `implicit_lhs_*`
  - `rightful.ls:104`, `373` -> unresolved `implicit_callee_*` call lifts

Raw-evidence pass:
- Raw metadata: `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-106\root-artifacts\Lscr-106.json`
  - `scriptNumber = 6`
  - `handlersCount = 30`
  - `totalLength = 23588`
  - JSON handler inventory runs from `initFileHandler` through `loadExternalValues`
- Raw reconstructed surfaces:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-106\root-artifacts\Lscr-106.blocks.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-106\root-artifacts\Lscr-106.reconstructed.lingo`
  - per-block `pass-block*.md` tables under `root-artifacts`, with offsets `0`, `460`, `1200`, `2604`, `3304`, `4668`, `4924`, `5364`, `5940`, `6228`, `6924`, `7888`, `8124`, `8460`, `9440`, `9860`, `10952`, `11724`, `12108`, `13596`, `14292`, `14528`, `15132`, `15668`, `16584`, `17432`, `17788`, `18428`, `18980`, `19584`, and `20264`
- Byte-pattern corroboration:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-106\root-artifacts\Lscr-106.pass32-whole-file-inventory.md`
  - offset `N` in the table below maps directly to `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-106\root-artifacts\Lscr-106.pass-blockN-table.md`

Reconstruction pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-106\evidence\reconstructed\rightful.ls`: `524` lines.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-106\evidence\reconstructed (1)\rightful.ls`: `533` lines.
- The staged `clean\Lscr-106\rightful.ls` hash-matches `evidence\reconstructed (1)\rightful.ls`.
- The shorter `evidence\reconstructed\rightful.ls` was not promoted.
- `final-clean\Lscr-106\rightful.ls` now carries one extra byte-backed cleanup pass from `Lscr-106.blocks.lingo`: `"," = Array()` at `0x002C`, `uggURL = Object()` at `0x003B`, and `openFile = Array()` at `0x0046`.

Readable-Lingo lift pass:
- Recovered Lingo artifact:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-106\rightful.ls`

JS mirror pass:
- Accepted local mirror:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-106\root-artifacts\Lscr-106.rebuilt-faithful.js`
- The mirror is not surfaced in `final-clean`.

| Block | Handler | Source | Offset | CodeLen | Lines | Unresolved | Names |
|---:|---|---|---:|---:|---:|---:|---:|
| 0 | initFileHandler | named handler from metadata | 0 | 188 | 8 | 0 | 5 |
| 1 | getAvatar | named handler from metadata | 460 | 157 | 10 | 0 | 7 |
| 2 | downloadAvatar | named handler from metadata | 1200 | 344 | 29 | 0 | 24 |
| 3 | compareAvatarAge | named handler from metadata | 2604 | 108 | 6 | 0 | 11 |
| 4 | loadLocalAvatar | named handler from metadata | 3304 | 396 | 20 | 0 | 19 |
| 5 | avatarIDtoPath | named handler from metadata | 4668 | 27 | 1 | 0 | 3 |
| 6 | downloadUgg | named handler from metadata | 4924 | 122 | 6 | 0 | 4 |
| 7 | loadLocalUgg | named handler from metadata | 5364 | 73 | 5 | 0 | 10 |
| 8 | fileBrowse | named handler from metadata | 5940 | 24 | 1 | 0 | 3 |
| 9 | uggUpload | named handler from metadata | 6228 | 75 | 3 | 0 | 8 |
| 10 | uggUploadSuccess | named handler from metadata | 6924 | 178 | 12 | 0 | 17 |
| 11 | uggUploadFail | named handler from metadata | 7888 | 22 | 1 | 0 | 3 |
| 12 | downloadNewInstaller | named handler from metadata | 8124 | 22 | 1 | 0 | 3 |
| 13 | downloadInstallerUpdateFlash | named handler from metadata | 8460 | 210 | 16 | 0 | 17 |
| 14 | runInstaller | named handler from metadata | 9440 | 48 | 1 | 0 | 7 |
| 15 | fetchCacheXML | named handler from metadata | 9860 | 70 | 5 | 0 | 11 |
| 16 | fetchCacheXMLDone | named handler from metadata | 10952 | 110 | 10 | 0 | 14 |
| 17 | createCacheFolders | named handler from metadata | 11724 | 26 | 2 | 0 | 4 |
| 18 | downloadCache | named handler from metadata | 12108 | 446 | 39 | 0 | 23 |
| 19 | downloadCacheInProgress | named handler from metadata | 13596 | 112 | 6 | 0 | 14 |
| 20 | downloadCacheDone | named handler from metadata | 14292 | 14 | 1 | 0 | 2 |
| 21 | downloadCacheUpdateFlash | named handler from metadata | 14528 | 80 | 8 | 0 | 9 |
| 22 | loadDyno | named handler from metadata | 15132 | 45 | 1 | 0 | 8 |
| 23 | saveDyno | named handler from metadata | 15668 | 172 | 12 | 0 | 15 |
| 24 | getTxtFileName | named handler from metadata | 16584 | 162 | 9 | 0 | 15 |
| 25 | saveFile | named handler from metadata | 17432 | 79 | 7 | 0 | 4 |
| 26 | openfile | named handler from metadata | 17788 | 139 | 9 | 0 | 11 |
| 27 | fileClearAllDecals | named handler from metadata | 18428 | 112 | 7 | 0 | 9 |
| 28 | fileClearADecal | named handler from metadata | 18980 | 92 | 13 | 0 | 9 |
| 29 | loadExternalValues | named handler from metadata | 19584 | 87 | 6 | 0 | 8 |
| 30 | __embedded_lscr106_block30 | embedded block without handler metadata | 20264 | 367 | 51 | 0 | 22 |

Unresolved:
- The current local block table reports `0` explicit unresolved counts, but the promoted readable body still carries explicit `implicit_*` lift markers at `rightful.ls:97`, `99`, `104`, and `373`.
- The remaining `id_*` placeholders are now tied to concrete block-table gaps rather than loose decompiler noise:
  - block `0` recovers ids `0..4`, leaving `id_20..24` at `rightful.ls:13-17` unresolved
  - block `6228` omits `id_2`, leaving the two `baGetFilename(..., id_2, id_2, ...)` slots unresolved
  - block `8124` omits `id_3`, leaving `sprite(flashSP).uggUploadCB(VOID, id_3)` unresolved
  - block `13596` omits `id_7`, leaving the `join(id_7)` separator in `downloadCacheInProgress` unresolved
  - blocks `16584` and `20264` omit `id_6`, leaving the save/open helper default slot and embedded config index slot unresolved
- Block `6228` has a stricter provenance split than the staged body alone suggests: `Lscr-106.blocks.lingo` / `Lscr-106.blocks.js` annotate the handler comment with `2=upath`, but `Lscr-106.pass-block6228-table.md` does not recover any `kind = 4` string record for id `2`. The final deliverable keeps `id_2` instead of promoting `upath`.
- The remaining higher-level callback/index shapes in blocks `15668` and `20264` are still blocker-limited at the byte-pattern layer:
  - `Lscr-106.blocks.lingo:505-506` surfaces `garageDynoLoadCB` followed by placeholder extraction syntax `!false(!!setFilterMask, setFilterMask, !2, setFilterMask, !3)`, but the local pass tables do not decode those operators cleanly enough to promote them into a readable indexed callback argument list.
  - `Lscr-106.blocks.lingo:689-714` surfaces `socketURL = !false`, `socketPort = !!openFile`, `mainURL = !2`, `avatarMainURL = !3`, `cacheURL = !4`, `uggURL = !5`, and `exeName = !6`. Those lines strongly suggest slot-based extraction from `openFile`, and `Lscr-107` provides adjacent corroboration for the same property family, but the current byte-backed `Lscr-106` passes do not prove a normalized `openFile[N]` rewrite, so the promoted body keeps the explicit unresolved property-chain form.
- A second-pass constructor-like site remains blocker-limited at `rightful.ls:255` / `0x0070`: `Lscr-106.blocks.lingo` confirms `Array()` there, but the surviving local evidence does not prove the left-hand assignment target, so the line was not rewritten.
- The local reconstruction trees contradict each other on the same byte window inside `fetchCacheXMLDone` at `0x006D..0x0070`: `evidence\reconstructed\rightful.ls` lifts `clearCache = getcache` plus a standalone `Array`, while `evidence\reconstructed (1)\rightful.ls` lifts `clearCache = Array` plus a separate constructor-like `aryCacheFileSizes` site. That contradiction is preserved as a blocker instead of being silently normalized.
- Block `30` remains embedded and unnamed beyond `__embedded_lscr106_block30`; no additional handler name was invented.

Verification:
- Inventory, raw-evidence, reconstruction, readable-Lingo lift, and JS mirror verification were not blocked.
- JS helper omission from `final-clean` is intentional.
