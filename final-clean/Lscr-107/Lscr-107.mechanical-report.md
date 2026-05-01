# Mechanical Lingo Reconstruction Report

Inventory pass:
- Deliverable `rightful.ls`: `142` lines, `11` visible `on` blocks.
- Handler scan:
  - `prepareMovie`, `startMovie`, `stopMovie`, `resizeWindow`, `zoomWindow`, `resizeFlashSprite`, `setInactive`, `sendHeartbeat`, `openURL`, `clearFB`, `__embedded_lscr107_block10`
- Obvious unresolved scan hits: `1` explicit `implicit_*` marker, plus repeated unresolved payload ids at `rightful.ls:23`, `31`, `37`, `38`, `39`, `40`, `130`, `131`, `132`, and `133`.
  - `rightful.ls:88` -> `implicit_callee_0x0072(implicit_arg_0x0072, ...)`

Raw-evidence pass:
- Raw metadata: `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.json`
  - `scriptNumber = 7`
  - `handlersCount = 10`
  - `totalLength = 5854`
- Raw reconstructed surfaces:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.blocks.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.reconstructed.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.stack-faithful.lingo`
  - full `pass-block*.md` family for offsets `0`, `152`, `1912`, `2204`, `2680`, `2860`, `3060`, `3588`, `4260`, `4496`, and `4716`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.pass13-whole-file-inventory.md`
- Byte-pattern anchors used in this pass:
  - `Lscr-107.pass-block152-table.md`: recovered ids `0..10`, gap at `11`, then resumed ids `12..35`
  - `Lscr-107.pass-block3060-table.md`: `setInactive` now splits into a still-packed math/call core plus a resolved property-write tail
  - `Lscr-107.pass-block4716-table.md`: recovered ids `0`, `1`, `3`, `4`, `5`, with id `2` still absent from the block-local string table
  - `Lscr-107.pass-chain-templates.md`: exact repeated `_global ... 3d ... 36 ... 51` families for block `152` and block `4716`
  - direct block-`152` code bytes at file offset `860 + 16`: repeated `... 51 3b 00 02 ... 36 .. 51` chains show the surviving `_global` lines are still backed by live receiver loads, not standalone terminators

Reconstruction pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\evidence\reconstructed\rightful.ls`: `150` lines.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\evidence\reconstructed (1)\rightful.ls`: `155` lines.
- The staged `clean\Lscr-107\rightful.ls` hash-matches `evidence\reconstructed (1)\rightful.ls`.
- `final-clean\Lscr-107\rightful.ls` now carries one extra byte-backed cleanup pass from `Lscr-107.blocks.lingo`: `_global`-scoped constructor lifts `_global.gNetID = Array()` at `0x004A` and `_global.fileNetID = Array()` at `0x0058`.
- `final-clean\Lscr-107\rightful.ls` now also carries one new byte-backed `setInactive` tail lift from block `3060`: `sprite(flashSP).rect = rect` at `0x0089`, backed by raw bytes `3b 00 09 39 3d 00 0a 3a 00 01 56 00 00 36 00 00 51`. The intermediate `56 00 00` value-read at `0x0086` is no longer kept as a fake standalone line, because inside that same proven receiver/write tail it only supplies the rhs `rect` consumed by the final `36 00 00 51` property store.
- `final-clean\Lscr-107\rightful.ls` now also removes one fake standalone `_global` line from the `sendHeartbeat` tail. After the packed flush prefix, the raw bytes run directly `25 00 03 51 3b 00 0a 39 3d 00 0b 3a 00 01 35 00 0c 39 ...`, so the callback receiver starts immediately with the `sprite(flashSP).noActivityCB()` chain; there is no separate byte-backed `_global` read before that callback.
- `final-clean\Lscr-107\rightful.ls` now also removes the final fake standalone `_global` line from the `sendHeartbeat` tail. The raw block ends `... 3a 00 00 51 3b 00 00 42 36 00 01 51`, so the tail closes on the single `_global.isConnected = FALSE` receiver/write chain itself; there is no surviving opcode after `36 00 01 51` that could justify a separate trailing `_global` line.
- `final-clean\Lscr-107\rightful.ls` now also removes the final fake standalone `_global` line from the `resizeWindow` tail. The raw body ends `... 3d 00 07 3a 00 01 51 3b 00 00`, so the handler already closes on the `BreakConnection(Rick)` call chain at the preceding `51`; the final `3b 00 00` is a bare `_global` load with no consuming opcode after it.
- `final-clean\Lscr-107\rightful.ls` now also removes the final fake standalone `_global` line from embedded block `4716`. The raw body ends `... 3b 00 00 3d 00 02 36 00 05 51`, so the last live chain already closes on `facebookSessionKey = id_2`; there is no trailing byte after that final `51` to justify a separate `_global` line at `0x003B`.
- `final-clean\Lscr-107\rightful.ls` now also tightens the missing-value store windows in block `152` and embedded block `4716` without inventing the unresolved ids. The raw windows already prove `_global.<field> = id_11` and `_global.<field> = id_2`, so those lines no longer need the weaker split form `field = id_*` plus an implied receiver. The following `_global` separators remain in place where they are still the next live receiver load.
- `final-clean\Lscr-107\rightful.ls` now also carries the first controlled lift from `Lscr-107.pass-chain-templates.md`. In block `152`, the exact repeated store families now justify direct receiver-carried lines for `_global.aid = VOID`, `_global.gNetID = Array()`, `_global.fileNetID = Array()`, `_global.mainURL = "http://game.nittolegends.com/"`, `_global.gameURL = (_global.mainURL & "gameCode1_00.aspx")`, `_global.avatarMainURL = _global.mainURL`, `_global.cacheURL = "http://download.nittolegends.com/"`, `_global.socketURL = "live.nittolegends.com"`, `_global.uggURL = "http://ugg.nittolegends.com/"`, `_global.exeName = NittoLegendsBeta`, `_global.isEnc = 1`, `_global.isIdle = 0`, and `_global.isConnected = 0`. In block `4716`, the same template family now justifies direct `_global.facebook* = id_2` lines without the older split-form separator rows between them.

Readable-Lingo lift pass:
- Recovered Lingo artifact:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-107\rightful.ls`

| Block | Handler | Source | Offset | CodeLen | Lines | Unresolved | Names |
|---:|---|---|---:|---:|---:|---:|---:|
| 0 | prepareMovie | named handler from metadata | 0 | 40 | 1 | 0 | 0 |
| 1 | startMovie | named handler from metadata | 152 | 255 | 25 | 0 | 35 |
| 2 | stopMovie | named handler from metadata | 1912 | 22 | 2 | 0 | 4 |
| 3 | resizeWindow | named handler from metadata | 2204 | 66 | 6 | 0 | 8 |
| 4 | zoomWindow | named handler from metadata | 2680 | 8 | 1 | 0 | 1 |
| 5 | resizeFlashSprite | named handler from metadata | 2860 | 8 | 1 | 0 | 1 |
| 6 | setInactive | named handler from metadata | 3060 | 118 | 5 | 0 | 11 |
| 7 | sendHeartbeat | named handler from metadata | 3588 | 109 | 12 | 0 | 13 |
| 8 | openURL | named handler from metadata | 4260 | 21 | 2 | 0 | 4 |
| 9 | clearFB | named handler from metadata | 4496 | 21 | 1 | 0 | 3 |
| 10 | __embedded_lscr107_block10 | embedded block without handler metadata | 4716 | 40 | 4 | 0 | 5 |

JS mirror pass:
- Accepted local mirror:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.rebuilt-faithful.js`
- Additional local corroboration:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-107\root-artifacts\Lscr-107.stack-faithful.js`

Unresolved:
- The current block table reports `0` explicit unresolved counts, but the readable-Lingo scan still preserves the unresolved packed math/call core in `setInactive` at `rightful.ls:88`.
  - raw core bytes: `1c 83 58 00 02 1e 3a 00 01 58 00 02 1d ... 1c 83 58 00 02 1e 3a 00 01 58 00 02 1d 3a 00 04 57 00 00 51`
  - resolved tail bytes after that core: `3b 00 09 39 3d 00 0a 3a 00 01 56 00 00 36 00 00 51`, now lifted as a single `sprite(flashSP).rect = rect` property-write tail instead of the weaker staged pair `rect = rect` plus a separate unresolved store line
- Block `152` recovers the surrounding start-movie names through `id 10 = lastAction` and then resumes at `id 12 = mainURL`, so the repeated initializer token still lands on a true missing `id_11` slot.
  - affected offsets: `0x0062`, `0x00BC`, `0x00F1`, `0x00FB`, `0x0105`, `0x010F`
  - affected lines: `rightful.ls:23`, `31`, `37`, `38`, `39`, `40`
  - exact raw store windows:
    - `0x0048..0x0053`: `3b 00 02 3d 00 0b 36 00 0a 51` -> `_global.lastAction = id_11`
    - `0x00A4..0x00AF`: `3b 00 02 3d 00 0b 36 00 19 51` -> `_global.socketBuffer = id_11`
    - `0x00DC..0x00E7`: `3b 00 02 3d 00 0b 36 00 20 51` -> `_global.facebookToken = id_11`
    - `0x00E8..0x00F3`: `3b 00 02 3d 00 0b 36 00 21 51` -> `_global.facebookID = id_11`
    - `0x00F4..0x00FF`: `3b 00 02 3d 00 0b 36 00 22 51` -> `_global.facebookSessionSecret = id_11`
    - `0x0100..0x010B`: `3b 00 02 3d 00 0b 36 00 23 51` -> `_global.facebookSessionKey = id_11`
  - accepted tightening in this pass: `Lscr-107.pass-chain-templates.md` now supports direct receiver-carried lines for the full block-`152` store families, so `rightful.ls` no longer keeps separate `_global` separator rows for `aid`, `gNetID`, `fileNetID`, `mainURL`, `gameURL`, `avatarMainURL`, `cacheURL`, `socketURL`, `uggURL`, `exeName`, `isEnc`, `isIdle`, or `isConnected`
  - still unresolved:
    - only the payload id itself remains unresolved in the six `id_11` stores above
    - the trailing `_global -- 0x0112` after `_global.facebookSessionKey = id_11` is still not promotable from `Lscr-107.pass-chain-templates.md` alone
- Block `4716` recovers `id 0 = _global`, `id 1 = facebookToken`, then resumes at `id 3 = facebookID`, `id 4 = facebookSessionSecret`, and `id 5 = facebookSessionKey`, so the reset value still lands on a true missing `id_2` slot.
  - affected offsets: `0x001A`, `0x0024`, `0x002E`, `0x0038`
  - affected lines: `rightful.ls:130`, `131`, `132`, `133`
  - exact raw store windows:
    - `0x0000..0x000D`: `3b 00 00 3d 00 02 36 00 01 51` -> `_global.facebookToken = id_2`
    - `0x000E..0x001B`: `3b 00 00 3d 00 02 36 00 03 51` -> `_global.facebookID = id_2`
    - `0x0014..0x0021`: `3b 00 00 3d 00 02 36 00 04 51` -> `_global.facebookSessionSecret = id_2`
    - `0x001E..0x002B`: `3b 00 00 3d 00 02 36 00 05 51` -> `_global.facebookSessionKey = id_2`
  - accepted tightening in this pass: the exact repeated family `3b 00 00 3d 00 02 36 00 nn 51` now justifies all four direct `_global.facebook* = id_2` lines without any remaining separator rows between them
  - still unresolved: only the payload id itself remains unresolved; no extra byte-backed executable line survives after the final `51`
- Block `3060` is now narrower than before. The trailing receiver/write sequence is resolved, but the earlier packed call region still does not prove a safer rewrite for `implicit_callee_0x0072(implicit_arg_0x0072, ...)`.
  - still-unresolved core span: `0x003D..0x007D`
  - now-resolved tail span: `0x0080..0x0089`, ending in the single property-write line `sprite(flashSP).rect = rect`
  - no further byte-backed tail cleanup was accepted in this pass
- Block `3588` now has one tail cleanup accepted, but the remaining `_global` residue there is still not removable.
  - removed as fake standalone line: the pre-callback `_global` formerly staged before `sprite(flashSP).noActivityCB()`
  - raw proof: after `-- 0x25 packed flush prefix raw=25 00 03`, the bytes continue directly into `3b 00 0a 39 3d 00 0b 3a 00 01 35 00 0c 39`, which is the callback receiver chain itself
  - removed as fake standalone line: the trailing `_global` formerly staged after `isConnected = 0`
  - raw proof: the remaining tail bytes end `... 3a 00 00 51 3b 00 00 42 36 00 01 51`, and that whole tail is consumed by the single `_global.isConnected = FALSE` receiver/write chain with no extra opcode after the final `51`
- Block `4260` / `openURL` was checked as a cleanup candidate, but no standalone tail line was removable there.
  - raw code body: `3b 00 00 35 00 01 20 07 00 0e 3b 00 02 39 3d 00 03`
  - that body is too short to prove any extra terminator-only receiver line beyond the current guarded `ssm(H)` surface, and it ends before any trailing store/read pair comparable to the cleaned `sendHeartbeat` tail appears, so this pass leaves `openURL` unchanged
- Block `1912` / `stopMovie` was also checked as a short-tail cleanup candidate, but no extra standalone line was removable there.
  - raw code body: `3b 00 00 39 3a 00 00 51 3b 00 01 3b 00 03 39 23 00 00`
  - that body closes inside the existing `resizeFlashSprite()` call plus `_global.objRace = RaceEngine` chain and does not leave a surviving receiver/read byte after the final `23 00 00`
- Block `2204` / `resizeWindow` now has a confirmed short-tail cleanup.
  - removed as fake standalone line: the final `_global` formerly staged after `-- 0x25 packed flush prefix raw=25 00 01`
  - raw proof: the body ends `... 3d 00 07 3a 00 01 51 3b 00 00`
  - because the final `3b 00 00` has no consuming opcode after it, the live chain already closes at the preceding `51`
- Block `4496` / `clearFB` was checked as a short-tail cleanup candidate, but no extra standalone line was removable there.
  - raw code body: `3b 00 00 39 3b 00 01 39 54 00 00 3a 00 01 3d 00 02`
  - the block ends before any final `51`-terminated read/store tail appears, so the current single `gotoNetPage(unescape(param_gotoNetPage), _blank)` line remains the narrowest honest lift
- Block `2680` / `zoomWindow` and block `2860` / `resizeFlashSprite` were checked as shortest-tail cleanup candidates, but neither exposes an extra standalone line.
  - both raw bodies are exactly `3b 00 00 39 3a 00 00 51`
  - that means each handler is already nothing more than the single `resizeFlashSprite()` call chain, closed by its final `51`
- Block `4716` / `__embedded_lscr107_block10` now has one final-tail cleanup accepted.
  - removed as fake standalone line: the last `_global` formerly staged after `facebookSessionKey = id_2`
  - raw proof: the block ends `... 3b 00 00 3d 00 02 36 00 05 51`
  - no earlier separator rows remain in `rightful.ls`; the exact repeated store family now supports all four direct `_global.facebook* = id_2` lines
- Short-tail exhaustion status in the current `Lscr-107` deliverable is now:
  - exhausted and already cleaned where byte-backed proof existed: `resizeWindow`, `sendHeartbeat`, embedded block `4716`, and the `setInactive` property-write tail
  - exhausted but unchanged because no fake final standalone line exists: `zoomWindow`, `resizeFlashSprite`, `stopMovie`, `openURL`, and `clearFB`
  - still off-limits for this cleanup rule because the surviving standalone line sits after a proved store family but is not yet semantically promotable from the current artifact set: the trailing `_global -- 0x0112` in `startMovie`
- Block `10` remains embedded and unnamed beyond `__embedded_lscr107_block10`.

Verification:
- Inventory, raw-evidence, reconstruction, readable-Lingo lift, and JS mirror verification were not blocked.
- JS helper files remain outside `final-clean`.
