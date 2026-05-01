# Mechanical Lingo Reconstruction Report

Inventory pass:
- Deliverable `rightful.ls`: `1442` lines, `2` visible `on` blocks.
- Handler scan:
  - `exitFrame` at `rightful.ls:5-15`
  - `__embedded_lscr93_block01` at `rightful.ls:16-1442`
- Obvious unresolved scan hits: `0`.

Raw-evidence pass:
- Raw metadata: `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.json`
  - `scriptNumber = 1`
  - `handlersCount = 1`
  - `totalLength = 34204`
  - JSON handler inventory: `exitFrame`
- Raw reconstructed surfaces:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.blocks.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.reconstructed.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.pass-block0-table.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.pass-block412-table.md`
- Byte-pattern corroboration:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.block1.annotated-disasm.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.block1-table.tsv`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.pass3-block1-table.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.pass16-unresolved-placeholder-surface.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.pass29-whole-file-coverage-status.md`
  - The early login compare strip now has raw slot values for the formerly unresolved literals:
    - `block1-table.tsv:61` -> slot `59`, `number/special:-2`, used by opcode `0x3B` at `0x05FB` before branch `0x05FC`
    - `block1-table.tsv:62` -> slot `60`, `record-kind-3: -11`, used by opcode `0x3C` at `0x060F` before branch `0x0610`
    - `block1-table.tsv:64` -> slot `62`, `record-kind-3: -99`, used by opcode `0x3E` at `0x0637` before branch `0x0638`
    - `block1-table.tsv:72` -> slot `70`, `number/special:-14`, used by opcode `0x46` at `0x06F9` before branch `0x06FA`
    - `block1-table.tsv:76` -> slot `74`, `record-kind-3: -15`, used by opcode `0x4A` at `0x0743` before branch `0x0744`
  - The late callback argument slot formerly rendered as `id_195` is byte-backed as an empty-string literal:
    - `block1-table.tsv:197` -> slot `195`, kind `4`, value `0`, offset `0x4B0C`, no surfaced symbol text
    - `block1.annotated-disasm.md:3555-3557` -> `0x1EF5: op_3D arg=195 ; ""` consumed by the callback call at `0x1EFB`
    - `block1.annotated-disasm.md:3596-3598` -> `0x1F5B: op_3D arg=195 ; ""` consumed by the callback call at `0x1F61`
    - `block1.annotated-disasm.md:3927-3929` -> `0x2289: op_3D arg=195 ; ""` consumed by the callback call at `0x228F`
    - `block1.annotated-disasm.md:3963-3969` -> `0x22E3: op_3D arg=195 ; ""` consumed by the callback call at `0x22F6`

Reconstruction pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\evidence\reconstructed\rightful.ls`: `814` lines.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\evidence\reconstructed (1)\rightful.ls`: `1442` lines.
- Deliverable `rightful.ls` started from `evidence\reconstructed (1)\rightful.ls` but no longer hash-matches it because of the local byte-backed lifts documented below.
- The shorter `evidence\reconstructed\rightful.ls` was not promoted.

Readable-Lingo lift pass:
- Recovered Lingo artifact:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-93\rightful.ls`
- Safe byte-backed promotions made in this pass:
  - `rightful.ls:5-14` now keeps `exitFrame` as an explicit unresolved dispatcher stub instead of surfacing three over-lifted name lines.
  - Source evidence for that tightening is confined to the named-handler metadata and block-0 raw pass:
    - `Lscr-93.json:27-70` -> `compiledLen = 5` with bytecode `pushcons obj=1`, `pushcons obj=2`, `unk26`
    - `pass-block0-table.md:28-46` -> block-0 raw instruction-region bytes plus the string-record inventory only
    - `Lscr-93.reconstructed.lingo:19-27` -> local corroborating stub shape `pushcons 1`, `pushcons 2`, `unk26`
  - `rightful.ls:261-295` now renders the early login compare chain as `-2`, `-11`, `-99`, `-14`, and `-15` instead of `literal_59`, `literal_60`, `literal_62`, `literal_70`, and `literal_74`.
  - Source evidence for those promotions is confined to the local raw table plus the matching one-byte literal opcodes in the compare strip:
    - `block1-table.tsv:61-76`
    - `block1.annotated-disasm.md:933-973`
    - `block1.annotated-disasm.md:1045-1084`
  - The neighboring already-promoted compares `-12` and `-5` stay unchanged and corroborate the same contiguous slot pattern.
  - `rightful.ls:997`, `1009`, `1095`, and `1102` now render `""` instead of `id_195`.
  - Source evidence for those empty-string promotions is confined to the local raw slot record plus the four direct `op_3D arg=195 ; ""` pushes listed above.
  - `rightful.ls:1357` now renders the proven direct callback shell `sprite(flashSP).showConnectionErrorCB("Connection Error", ...)` instead of `implicit_callee_0x2C75(...)`.
  - Source evidence for that shell lift is confined to the late error-path opcodes:
    - `block1.annotated-disasm.md:4950-4957` -> `0x2C38..0x2C46` loads `sprite`, `flashSP`, `showConnectionErrorCB`, and the first argument `"Connection Error"`
    - `block1.annotated-disasm.md:4975-4980` -> `0x2C75..0x2C78` closes the same two-argument callback call
  - `rightful.ls:1357` now also renders the byte-backed message prefix and closing `")"` around the later-promoted indexed error-code term.
  - Source evidence for that narrower second-argument lift is confined to:
    - `block1.annotated-disasm.md:4957-4966` -> `0x2C49..0x2C5C` builds `("Connection could not be established. Action:" & _global.gNetID[_global][VOID]) & " (Error: 003-"`
    - `block1.annotated-disasm.md:4976-4978` -> `0x2C70..0x2C74` appends the trailing `")"`
  - `rightful.ls:1357` now renders the indexed error-code term as `netError[_global.gNetID[_global]]`.
  - Source evidence for that final promotion is confined to the exact repeated byte pattern:
    - `block1.annotated-disasm.md:76-84` -> `0x00B9..0x00C9` loads `netError[_global.gNetID[_global]]` before the `= OK` gate at `0x00CF`
    - `block1.annotated-disasm.md:4967-4975` -> `0x2C5D..0x2C6D` repeats the same `netError` + `_global.gNetID` byte sequence before concatenation
    - `evidence\\reconstructed\\rightful.ls:34` and `evidence\\reconstructed (1)\\rightful.ls:36` both already surface that earlier gate as `netError[_global.gNetID[_global]]`
  - Redundant property-chain marker comments were removed where the surrounding expression is already fully byte-backed in the local opcode run:
    - `rightful.ls:31-36` keeps only the readable `_global.gNetID` gate and `netTextResult(...)` assignment from `block1.annotated-disasm.md:66-99`
    - `rightful.ls:232-234` keeps only `fetchCacheXMLDone(checkProcessResult.makeList().n2)` from `block1.annotated-disasm.md:814-822`
    - `rightful.ls:597-601` keeps only `netError = checkProcessResult.makeList().n2` from `block1.annotated-disasm.md:2128-2134`
    - `rightful.ls:1352-1353` keeps only the readable `showConnectionErrorCB("Connection Error", ...)` call from `block1.annotated-disasm.md:4950-4980`
    - `rightful.ls:1385-1400` keeps only the readable `loadLocalAvatar(...)`, `loadLocalUgg(...)`, and `runInstaller(...)` calls from `block1.annotated-disasm.md:5145-5202`
  - Standalone variable-load residue lines were removed where the local byte run shows only `op_56 ...` followed by `op_51`, with the surrounding statement already represented:
    - `rightful.ls:23` removed trailing `_global -- 0x0036` after `checkedForOneClient = TRUE`; source window `block1.annotated-disasm.md:32-41`
    - `rightful.ls:35` removed trailing `checkedForOneClient -- 0x00D6` after the `_global.gNetID` success gate; source window `block1.annotated-disasm.md:84-92`
    - `rightful.ls:1353` removed trailing `_global -- 0x2CA1` after `lastAction = _global.gNetID[_global][VOID]`; source window `block1.annotated-disasm.md:4990-5004`
    - `rightful.ls:242-246` removed trailing `_global -- 0x0535`, `0x0549`, `0x0564`, `0x057F`, and `0x059A` after the already-lifted `aid`, `guid`, `cp`, `cw`, and `cwc` assignments; source window `block1.annotated-disasm.md:849-900`
    - `rightful.ls:270-278` removed trailing `_global -- 0x06BE`, `0x06D2`, `0x06E6`, and `0x0711` after the already-lifted `installerURL`, `installerFile`, `installerMD5`, and `facebookID` assignments; source window `block1.annotated-disasm.md:1039-1062`
    - `rightful.ls:1035-1078` removed trailing `_global -- 0x20DD` and `_global.objRace -- 0x229C` after the already-lifted `guid = checkedForOneClient.getAProp("sk")` and `raceType = HTQ` assignments; source windows `block1.annotated-disasm.md:3752-3753` and `block1.annotated-disasm.md:3933-3934`
    - `rightful.ls:1198-1211` removed trailing `_global -- 0x279A`, `_global -- 0x27AE`, and `_global.objRace -- 0x2824` after the already-lifted `facebookToken`, `facebookAPIKey`, and `OK` assignments; source windows `block1.annotated-disasm.md:4452-4461` and `block1.annotated-disasm.md:4510-4511`
    - `rightful.ls:1401-1411` removed standalone `sprite(flashSP)` residue at `0x2E91`, `0x2EC1`, and `0x2ED5`, because the local byte run shows each as a bare `op_51` terminator immediately after the already-lifted `cursor = ...` assignments at `0x2E8E`, `0x2EBE`, and `0x2ED2`; source window `block1.annotated-disasm.md:5232-5268`
  - Standalone post-statement residue lines were also removed where the raw run shows only a trailing `op_51` after the already-lifted statement shape, not a second independent executable line:
    - `rightful.ls:29-44` removed `netDone(_global.checkProcessResult) -- 0x0087`, `eval -- 0x0104`, `VOID -- 0x012E`, and `eval -- 0x0183`; source windows `block1.annotated-disasm.md:40-65`, `block1.annotated-disasm.md:97-112`, and `block1.annotated-disasm.md:136-175`

| Block | Handler | Source | Offset | CodeLen | Lines | Unresolved | Names |
|---:|---|---|---:|---:|---:|---:|---:|
| 0 | exitFrame | named handler from metadata | 0 | 25 | 4 | 0 | 4 |
| 1 | __embedded_lscr93_block01 | embedded block without handler metadata | 412 | 11982 | 801 | 0 | 433 |

JS mirror pass:
- Accepted local mirror:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-93\root-artifacts\Lscr-93.rebuilt-faithful.js`
- The mirror is not surfaced in `final-clean`.

Unresolved:
- The tiny named handler `exitFrame` remains provenance-limited. `Lscr-93.json:27-70` exposes only `compiledLen = 5` with bytecode `pushcons obj=1`, `pushcons obj=2`, and `unk26`, while `pass-block0-table.md:28-46` only proves the block-0 instruction-region bytes plus the presence of string records `_global`, `gNetID`, `checkedForOneClient`, and `checkProcessResult`. The deliverable now reflects that as an explicit unresolved dispatcher stub, and no stronger original statement model or callable embedded-handler linkage is claimed.
- The block table still treats block `1` as embedded and unnamed beyond `__embedded_lscr93_block01`. `Lscr-93.json:27-71` exposes only one handler entry, `exitFrame`, with `dispatchBlockIndex = 0` and `dispatchBlockOffset = 0`; `pass-block412-table.md:8-16` documents the later executable surface only as embedded block `412`, and `pass29-whole-file-coverage-status.md:39-42` confirms the second visible `on` block is a local lift artifact rather than export-backed handler metadata.
- Slot `195` still has no surfaced symbol text, so only its byte-backed empty-string value was promoted. `block1-table.tsv:196-198` shows the local callback cluster as `194 = raceGetTwoRacersCarsCB`, `195 = kind 4 / len 0 / offset 0x4B0C / empty`, `196 = getRacersCarsCB`; `pass-block412-table.md:217-220` preserves that same gap between neighboring named callback records, so no stronger name or callback-argument label is claimed.
- The major callback/call-expression placeholders have been eliminated, including the lifted `showConnectionErrorCB("Connection Error", ...)` path at `rightful.ls:1330`, but some byte-backed mechanical residue still remains outside those user-facing calls:
  - packed-prefix comments such as `0x79` / `0x75` / `0x03` in the early login and protocol-error spans. The highest-priority `eval` / `propList(...)` windows are now reduced to their packed cores: the fake standalone tail lines at `0x0104` and `0x0183` are already gone, and the remaining bytes at `block1.annotated-disasm.md:97-124` and `block1.annotated-disasm.md:135-155` are packed control/prefix opcodes (`op_85`, `op_79`, `op_75`, `op_03`, `op_06`) plus the readable assignment/callback surfaces, not another bare `op_51` residue line that can be removed safely.
  - loop-control residue at `rightful.ls:1335-1338` and `rightful.ls:1386-1388` from the `0x66` / repeat-step sequences. Those tails are now split into finer byte windows:
    - first tail marker-1 bytes `0x2CB4..0x2CB7`
    - first tail marker-2 bytes `0x2CB8..0x2CBB`
    - first tail back-jump bytes `0x2CBC..0x2CBE`
    - first proven post-tail write bytes `0x2CBF..0x2CC3`
    - first resumed length-check expression bytes `0x2CC4..0x2CCF`
    - first resumed length-check branch bytes `0x2CD0..0x2CD3`
    - first resumed cache-check expression bytes `0x2CD4..0x2CE2`
    - first resumed cache-check branch bytes `0x2CE3..0x2CE6`
    - first resumed cache-download call payload `0x2CE7..0x2D02`
    - first resumed cache-download terminator `0x2D03`
    - first resumed cache-download follow-on jump `0x2D04..0x2D06`
    - first resumed installer-check expression bytes `0x2D07..0x2D15`
    - first resumed installer-check branch bytes `0x2D16..0x2D19`
    - first resumed installer-download call payload `0x2D1A..0x2D35`
    - first resumed installer-download terminator `0x2D36`
    - first resumed pre-case expression bytes `0x2D37..0x2D4B`
    - first resumed pre-case branch bytes `0x2D4C..0x2D4E`
    - first resumed case-selector expression bytes `0x2D4F..0x2D5A`
    - first resumed case opcode byte `0x2D5B`
    - first resumed case default-target word `0x2D5C..0x2D5D`
    - first resumed case record-count word `0x2D5E..0x2D5F`
    - first resumed case record-table bytes `0x2D60..0x2D73`
    - second tail marker-1 bytes `0x2E58..0x2E5B`
    - second tail marker-2 bytes `0x2E5C..0x2E5F`
    - second tail back-jump bytes `0x2E60..0x2E62`
    - second resumed condition expression bytes `0x2E63..0x2E7C`
    - second resumed condition branch bytes `0x2E7D..0x2E80`
    - second resumed true-arm assignment payload `0x2E81..0x2E90`
    - second resumed true-arm terminator `0x2E91`
    - second resumed true-arm follow-on jump `0x2E92..0x2E94`
    - second resumed editText-expression bytes `0x2E95..0x2EAE`
    - second resumed editText-branch bytes `0x2EAF..0x2EB2`
    - second resumed editText true-arm assignment payload `0x2EB3..0x2EC0`
    - second resumed editText true-arm terminator `0x2EC1`
    - second resumed editText true-arm follow-on jump `0x2EC2..0x2EC4`
    - second resumed fallback assignment payload `0x2EC5..0x2ED4`
    - second resumed fallback terminator `0x2ED5`
    - final `_movie.go(TRUE)` call payload `0x2ED6..0x2EE0`
    - final `_movie.go(TRUE)` terminator `0x2EE1`
    `block1.annotated-disasm.md:5007-5063` and `block1.annotated-disasm.md:5212-5272` show why those `op_51` bytes are not removable standalone tails: the already-readable statements end earlier at `_global.gNetID.splice(_global, TRUE) -- 0x2CB3` and `_global.fileNetID.splice(_global, TRUE) -- 0x2E57`, then the raw run resumes with `op_66`, two raw `0x00` bytes, a trailing `op_51`, `op_64`, two raw `0x00` bytes, another `op_51`, and only after that the separate backward jump bytes. At the first tail, the bytes immediately after the jump are not part of that jump: `0x2CBF` is the same `op_3E` value-push shape used before the earlier proven `_global = VOID -- 0x0084` write at `block1.annotated-disasm.md:51-54`, so `0x2CBF..0x2CC3` is the first explicit post-tail statement payload and write/terminator for `_global = VOID -- 0x2CC0`. The next resumed checks and calls are now split one step tighter as well: `0x2CC4..0x2CCF` builds `_global < _global.fileNetID.length`, `0x2CD0..0x2CD3` carries that check's branch payload, `0x2CD4..0x2CE2` builds `_global.fileNetID[_global][VOID] = cache`, `0x2CE3..0x2CE6` carries that second check's branch payload, `0x2CE7..0x2D02` is the `downloadCacheInProgress(getStreamStatus(...))` call payload, `0x2D03` is its terminator, `0x2D04..0x2D06` is the follow-on jump, `0x2D07..0x2D15` builds `_global.fileNetID[_global][VOID] = installer`, `0x2D16..0x2D19` carries that branch payload, `0x2D1A..0x2D35` is the `downloadInstallerUpdateFlash(getStreamStatus(...))` call payload, `0x2D36` is its terminator, `0x2D37..0x2D4B` is the resumed pre-case expression run, `0x2D4C..0x2D4E` is the following branch payload, `0x2D4F..0x2D5A` rebuilds the `case _global.fileNetID[_global][VOID]` selector expression, `0x2D5B` is the case opcode byte, `0x2D5C..0x2D5D` is the default-target word `0x00EB`, `0x2D5E..0x2D5F` is the record-count word `0x0005`, and `0x2D60..0x2D73` is a fixed-width record table. The dedicated intermediate decoder artifact [Lscr-93.pass30-late-case-table-decoder.md](</C:/Users/Dilldo/Nitto/Lingo Stuff/clean/Lscr-93/root-artifacts/Lscr-93.pass30-late-case-table-decoder.md>) now proves the record roles without guessing arm semantics:
    - `0x2D60..0x2D63` = id `0x0064` / target `0x0019` -> `avatars` / `0x2D74`
    - `0x2D64..0x2D67` = id `0x01AF` / target `0x0019` -> `teamavatars` / `0x2D74`
    - `0x2D68..0x2D6B` = id `0x01B0` / target `0x007D` -> `ugg` / `0x2DD8`
    - `0x2D6C..0x2D6F` = id `0x01A6` / target `0x00C9` -> `cache` / `0x2E24`
    - `0x2D70..0x2D73` = id `0x01A9` / target `0x00D4` -> `installer` / `0x2E2F`
    The new artifact also tightens the formerly opaque tail bytes by role:
    - `0x2D71` is part of the final record's id word, not a standalone seam byte
    - `0x2D72..0x2D73` is the final record's target word, not an undecoded pre-body fragment
    No current local artifact exposes a stricter sub-boundary after the last visible anchor site at `0x2D70`: `block1.annotated-disasm.md:5101-5106` still reaches `0x2D74` before the next readable opcode sequence begins, while `pass15-action-span-inventory.md:30-31` and `pass6-whole-file-region-map.md:239-240` independently keep the grouped late span ending `before 0x2D74` and the `["avatars", "teamavatars"]` body starting at `0x2D74`. At the second tail, the resumed `sprite(flashSP).hitTest(_mouse.mouseLoc) = "#button"` condition is now split one level tighter: `0x2E63..0x2E7C` builds the condition expression, `0x2E7D..0x2E80` is the false-branch opcode payload that jumps forward to `0x2E94`, `0x2E81..0x2E90` is the `cursor = agreetoterms` payload, `0x2E91` is its terminator, and `0x2E92..0x2E94` is the follow-on jump. The editText arm is split the same way: `0x2E95..0x2EAE` builds the `hitTest(..., "#editText")` expression, `0x2EAF..0x2EB2` carries its branch payload, `0x2EB3..0x2EC0` is the `cursor = TRUE` payload, `0x2EC1` is its terminator, `0x2EC2..0x2EC4` is the follow-on jump, `0x2EC5..0x2ED4` is the fallback `cursor = -1` payload, `0x2ED5` is its terminator, and `0x2ED6..0x2EE1` is the final `_movie.go(TRUE)` call plus terminator. The bytes after that final terminator are only raw `0x00 0x00` at `0x2EE2..0x2EE3`, not another byte-backed statement tail. The strongest local block lift still breaks those tails as `?(_global.gNetID.splice(), !_global)` followed by `op_66`, `?`, `op_64`, `?`, then a raw goto at `blocks.lingo:1158-1164`, and as `?(_global.fileNetID.splice(), !_global)` followed by the same unresolved `op_66` / `op_64` pair at `blocks.lingo:1237-1243`. Both local reconstruction variants preserve the same undecoded tail instead of surfacing stronger loop syntax: `evidence\\reconstructed\\rightful.ls:766-772` and `evidence\\reconstructed (1)\\rightful.ls:1362-1366`, plus `evidence\\reconstructed (1)\\rightful.ls:1418-1421`.
  - `VOID` / queue-index forms that are byte-backed but not yet reduced to stronger original-style source without risking semantic drift. The queue cleanup operands were already flagged as mechanically suspect in `pass7-selector-and-queue-normalization.md:257-265`, because the `splice(...)` sites use bare `3F` before `3A 00 02` rather than the fuller `... 37 3F 37` queue-item read chain. The real write boundary after the first loop tail is now pinned precisely as `0x2CBF..0x2CC3`: `0x2CBF` is the pre-write `op_3E` value push, `0x2CC0..0x2CC2` is raw `op_57 arg=0 ; "_global"`, and `0x2CC3` is that write's own terminator at `block1.annotated-disasm.md:5016-5018`, not another removable standalone tail. 
  - The late Facebook-invite debug/callback strip at `rightful.ls:1202-1207` is also now fenced off as proven real calls and writes, not fake tails. `block1.annotated-disasm.md:4509-4536` splits that strip into exact byte-backed windows:
    - `0x2814..0x281A` -> `getAProp` setup for `OK`
    - `0x281B..0x281D` -> `"d"` argument push
    - `0x281E..0x2820` -> `getAProp("d")` call-arity bytes
    - `0x2821..0x2823` -> `OK` write bytes
    - `0x2824` -> `OK` terminator
    - `0x2825..0x2828` -> `trace` callee setup for `"here!"`
    - `0x2829..0x282B` -> `"here!"` argument push
    - `0x282C..0x282E` -> `trace("here!")` call-arity bytes
    - `0x282F` -> `trace("here!")` terminator
    - `0x2830..0x2833` -> `trace` callee setup for `"info list!"`
    - `0x2834..0x2836` -> `"info list!"` argument push
    - `0x2837..0x2839` -> `trace("info list!")` call-arity bytes
    - `0x283A` -> `trace("info list!")` terminator
    - `0x283B..0x283E` -> `trace` callee setup for `OK`
    - `0x283F..0x2841` -> `OK` argument load
    - `0x2842..0x2844` -> `trace(OK)` call-arity bytes
    - `0x2845` -> `trace(OK)` terminator
    - `0x2846..0x2849` -> `openURL` callee setup bytes
    - `0x284A..0x284F` -> literal argument pushes
    - `0x2850..0x2852` -> `openURL(..., _blank)` call-arity bytes
    - `0x2853` -> `openURL(..., _blank)` terminator
    - `0x2854..0x2856` -> the following jump into the next action span
    None of those windows is a removable bare standalone tail, because each visible line already consumes its own terminating `op_51`, and the very next bytes begin a different proven statement or control-transfer edge: `0x2825` starts the first `trace`, `0x2830` starts the second `trace`, `0x283B` starts `trace(OK)`, `0x2846` starts `openURL`, and `0x2854` starts the jump into the next action span.
  - The early process-check status strip at `rightful.ls:24-31` is likewise fenced off as proven real call/write boundaries, not fake standalone tails. `block1.annotated-disasm.md:29-65` shows `trace(netTextResult(_global.checkProcessResult)) -- 0x005F`, `CheckNittoProcessesCB(netTextResult(_global.checkProcessResult)) -- 0x0074`, `CheckNittoProcessesCB("1") -- 0x0082`, and `_system.gc() -- 0x00A2` each ending in their own `op_51`, while `_global = VOID -- 0x0084` is a separate raw write target with its own terminator at `0x0087`.

Verification:
- Inventory, raw-evidence, reconstruction, and readable-Lingo lift verification were not blocked.
- JS mirror verification was not blocked, but the mirror remains outside `final-clean`.
