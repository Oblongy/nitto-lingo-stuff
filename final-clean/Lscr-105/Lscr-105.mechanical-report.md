# Mechanical Lingo Reconstruction Report

Inventory pass:
- Deliverable `rightful.ls`: `915` lines, `2` visible `on` blocks.
- Handler scan:
  - `procSocket` at `rightful.ls:5-11`
  - `__embedded_lscr105_block01` at `rightful.ls:12-915`
- Obvious unresolved scan hits: `0` explicit `unk26` / `id_` / `implicit_` placeholders, but `12` branch-shape candidates still remain unresolved at the raw block layer.

Raw-evidence pass:
- Raw metadata: `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\root-artifacts\Lscr-105.json`
  - `scriptNumber = 5`
  - `handlersCount = 1`
  - `totalLength = 21408`
  - JSON handler inventory: `procSocket`
- Raw reconstructed surfaces:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\root-artifacts\Lscr-105.blocks.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\root-artifacts\Lscr-105.reconstructed.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\root-artifacts\Lscr-105.stack-faithful.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\root-artifacts\Lscr-105.pass-block0-table.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\root-artifacts\Lscr-105.pass-block112-table.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\root-artifacts\Lscr-105.pass3-whole-file-inventory.md`

Reconstruction pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\evidence\reconstructed\rightful.ls`: `537` lines.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\evidence\reconstructed (1)\rightful.ls`: `915` lines.
- The staged `clean\Lscr-105\rightful.ls` hash-matches `evidence\reconstructed (1)\rightful.ls`.
- `final-clean\Lscr-105\rightful.ls` now carries one extra byte-backed cleanup pass from `Lscr-105.stack-faithful.lingo` and `Lscr-105.rebuilt-faithful.js`: the second `htQualifyOKCB` argument at `0x15AD` is promoted from `id_154` to `EMPTY`.
- No further branch-shape promotion was accepted this pass. The remaining `pass22 structured-control` candidates still need polarity proof from the raw block layer, and the stronger contradictory surface is now `Lscr-105.stack-faithful.lingo`, which preserves malformed comparison leftovers such as `if not (... = param_getAProp[getAProp(s)])` at the same branch offsets instead of a trustworthy positive-condition chain.

Readable-Lingo lift pass:
- Recovered Lingo artifact:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-105\rightful.ls`

| Block | Handler | Source | Offset | CodeLen | Lines | Unresolved | Names |
|---:|---|---|---:|---:|---:|---:|---:|
| 0 | procSocket | named handler from metadata | 0 | 4 | 1 | 0 | 0 |
| 1 | __embedded_lscr105_block01 | embedded block without handler metadata | 112 | 7589 | 523 | 0 | 360 |

- The `HQOK` dispatch arm at `rightful.ls:687` now uses `EMPTY` as its middle argument, byte-backed by `Lscr-105.stack-faithful.lingo` at `0x15AD` and corroborated by `Lscr-105.rebuilt-faithful.js`, which annotates literal id `154` as `EMPTY` at `0x159A`.
- The `TRA` dispatch tail at `rightful.ls:859-863` keeps `goodCounterRT = VOID` at `0x1BD3` and `badCounterRT = VOID` at `0x1BDE`, directly corroborated by `Lscr-105.stack-faithful.lingo:637-640`. `Lscr-105.blocks.lingo:835-840` still renders those same slots as `false`, so only the two `VOID` resets are treated as proven; the adjacent bare `_global.objRace` stack values at `0x1BD6` and `0x1BE1` remain unresolved.

JS mirror pass:
- Accepted direct local mirror:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\rightful.js`
- Raw-export-side corroboration:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-105\root-artifacts\Lscr-105.rebuilt-faithful.js`

Unresolved:
- The current local block table reports `0` explicit unresolved counts, but it does not settle the remaining branch polarity disputes below.
- Block `1` remains embedded and unnamed beyond `__embedded_lscr105_block01`; no extra handler name was inferred.
- Branch-polarity blockers preserved without further lift:
  - `ac = "L"` at `rightful.ls:171-193`, offsets `0x028E..0x03A9`.
    - Raw anchors: `Lscr-105.blocks.lingo:350-368`; `Lscr-105.stack-faithful.lingo:298-304`.
    - Unresolved: `blocks.lingo` says `if (!?(s)) { /* else goto @878 */ }`, while `stack-faithful.lingo` preserves `if not ((/*stack*/ * /*stack*/)(sockConnTO) = param_getAProp[getAProp(s)]) then -- jump 208 -- 0x02AE`. That contradiction is not strong enough to prove which `loginCBS` arm is the positive branch.
  - `ac = "AUR"` at `rightful.ls:237-244`, offsets `0x0546..0x05AE`.
    - Raw anchors: `Lscr-105.blocks.lingo:404-408`; `Lscr-105.stack-faithful.lingo:336-338`.
    - Unresolved: the `addSingleNimUser` arm is present, but `stack-faithful.lingo` preserves `if not (addNimUser = param_getAProp[getAProp(s)]) then -- jump 86 -- 0x0554`, so the positive/negative arm naming is still not promotable.
  - `ac = "CRC"` at `rightful.ls:302-312`, offsets `0x07BE..0x0821`.
    - Raw anchors: `Lscr-105.blocks.lingo:449-453`; `Lscr-105.stack-faithful.lingo:367-370`.
    - Unresolved: the two `chatCreateRoomCB` arities are byte-backed, but `stack-faithful.lingo` preserves `if not (chatListRoom2CB = param_getAProp[getAProp(s)]) then -- jump 50 -- 0x07CC`, so the readable `if / else` orientation is not proven.
  - `ac = "TCRT"` at `rightful.ls:369-380`, offsets `0x0A24..0x0A87`.
    - Raw anchors: `Lscr-105.blocks.lingo:498-502`; `Lscr-105.stack-faithful.lingo:400-403`.
    - Unresolved: the raw surface again shows `if (!?(s))` before `teamCreateCB(s, id)`, and `stack-faithful.lingo` reduces that same test to `if not (param_getAProp = param_getAProp[getAProp(s)]) then -- jump 50 -- 0x0A32`, so branch polarity remains explicit blocker territory.
  - `ac = "KR"` at `rightful.ls:453-464`, offsets `0x0CFB..0x0D6B`.
    - Raw anchors: `Lscr-105.blocks.lingo:560-564`; `Lscr-105.stack-faithful.lingo:443-446`.
    - Unresolved: `raceKOTHReadyCB(s, t, t2)` and `raceKOTHReadyCB(s)` are both supported, but the governing condition degrades to `if not (sprite(flashSP) = param_getAProp[getAProp(s)]) then -- jump 63 -- 0x0D09`, so the `if (!?(s))` shell still cannot be normalized safely.
  - `ac = "IO"` at `rightful.ls:486-502`, offsets `0x0E3C..0x0EFE`.
    - Raw anchors: `Lscr-105.blocks.lingo:579-585`; `Lscr-105.stack-faithful.lingo:458-463`.
    - Unresolved: `blocks.lingo` drops the left-hand side entirely and only emits `if (RIVAL)`, `if (TEAMRIVAL)`, and `if (HT)`, while `stack-faithful.lingo` still only settles the tail as `if not (raceType = HT) then -- jump 76 -- 0x0E68` after an unresolved stack bundle at `0x0E5B`. That is not strong enough to prove a full `if / else if / else` chain.
  - `ac = "RRY"` at `rightful.ls:546-557`, offsets `0x1062..0x10D2`.
    - Raw anchors: `Lscr-105.blocks.lingo:620-624`; `Lscr-105.stack-faithful.lingo:485-488`.
    - Unresolved: `raceQMHReadyCB(s, t, t2)` versus `raceQMHReadyCB(s)` is present, but the governing branch still degrades to `if not (chatQMBRaceCB = param_getAProp[getAProp(s)]) then -- jump 63 -- 0x1070`.
  - `ac = "RRQ"` at `rightful.ls:598-608`, offsets `0x1281..0x12D8`.
    - Raw anchors: `Lscr-105.blocks.lingo:656-660`; `Lscr-105.stack-faithful.lingo:510-513`.
    - Unresolved: the success arm still renders as `!?(flashSP).chatRIVRequestCB()(r)` in `blocks.lingo`, and `stack-faithful.lingo` preserves `if not (chatRIVListCB = param_getAProp[getAProp(s)]) then -- jump 38 -- 0x128F`, so neither branch polarity nor the exact readable success-call shape is strong enough for another lift.
  - `ac = "RR"` at `rightful.ls:646-657`, offsets `0x140A..0x147A`.
    - Raw anchors: `Lscr-105.blocks.lingo:688-692`; `Lscr-105.stack-faithful.lingo:533-536`.
    - Unresolved: `raceRIVReadyCB(s, t, t2)` and `raceRIVReadyCB(s)` are both visible, but the same branch shell still degrades to `if not (sprite(flashSP) = param_getAProp[getAProp(s)]) then -- jump 63 -- 0x1418`.
  - `ac = "HQOK"` at `rightful.ls:685-693`, offsets `0x156D..0x15E0`.
    - Raw anchors: `Lscr-105.blocks.lingo:711-715`; `Lscr-105.stack-faithful.lingo:550-553`; `Lscr-105.rebuilt-faithful.js:886-893`.
    - Unresolved: the `EMPTY` literal lift at `0x15AD` is accepted, but the surrounding branch polarity is still not. `stack-faithful.lingo` preserves `if not (param_getAProp = param_getAProp[getAProp(s)]) then -- jump 53 -- 0x157B`, followed by `getAProp(s)(EMPTY, param_getAProp, getAProp(t))` and then `getAProp(s)(param_getAProp, getAProp(d))`, so only the literal cleanup was promoted.
  - `ac = "HTR"` at `rightful.ls:739-750`, offsets `0x1767..0x17D7`.
    - Raw anchors: `Lscr-105.blocks.lingo:753-757`; `Lscr-105.stack-faithful.lingo:578-581`.
    - Unresolved: `htReadyCB(s, t, t2)` versus `htReadyCB(s)` is recovered, but the branch still degrades to `if not (htTreeResultCB = param_getAProp[getAProp(s)]) then -- jump 63 -- 0x1775`.
  - `ac = "TRO"` at `rightful.ls:819-832`, offsets `0x1A74..0x1AC7`.
    - Raw anchors: `Lscr-105.blocks.lingo:809-815`; `Lscr-105.stack-faithful.lingo:617-622`; corroborating body bytes in `Lscr-105.rebuilt-faithful.js:1065-1073`.
    - Unresolved: the `TEAMRIVAL` side effect plus `executeCall(getonecarengine, ("acid=" & ...))` arm and the `teamRivalsWrongBracketCB()` arm are both real, but the branch still degrades to `if not (teamRivalsNewQueueCB = param_getAProp[getAProp(s)]) then -- jump 47 -- 0x1A82`, so I did not normalize it into a cleaner positive `if / else`.
- Object-side-effect tail blockers preserved without further lift:
  - Login/setup tail at `rightful.ls:178-185`, offsets `0x0328`, `0x033F`, `0x035D`, and `0x037B`.
    - Raw anchors: `Lscr-105.blocks.lingo:352-362`; `Lscr-105.stack-faithful.lingo:301-308`.
    - Unresolved: the readable wrapper currently leaves bare `_global.objRace` / `_global` residues after `sendInterval`, `secondBuffer`, `heartBeatTO`, and `lagThreshold`. The raw surfaces disagree on the shape: `blocks.lingo` collapses those spans into `_global.objRace(ni)`, `_global.objRace(ns)`, and `_global.objRace(parseFloat()(lft))`, while `stack-faithful.lingo` only preserves separate stack residues `param_getAProp -- 0x0328`, `param_getAProp -- 0x033F`, `heartBeatTO -- 0x035D`, and `parseFloat -- 0x037B`. That is not enough proof for a safer object-property or call lift.
  - `R3` / `UR` timer tails at `rightful.ls:411-419`, offsets `0x0BA3` and `0x0BDB`.
    - Raw anchors: `Lscr-105.blocks.lingo:526-532`; `Lscr-105.stack-faithful.lingo:421-425`; `Lscr-105.rebuilt-faithful.js:543-556`.
    - Unresolved: after `guid = param_getAProp.getAProp("guid")`, the wrapper leaves bare `_global.objRace` residues. `blocks.lingo` renders those spans as `guid = _global.objRace(guid)` followed by `?`, `stack-faithful.lingo` only preserves `param_getAProp -- 0x0BA3` and `param_getAProp -- 0x0BDB`, and `rebuilt-faithful.js` still stops at unresolved byte comments for targets `0x0B90` and `0x0BD4`. That is not enough to promote a readable `objRace` side effect without guessing.
  - `TRO` queue tail at `rightful.ls:825`, offset `0x1A92`.
    - Raw anchors: `Lscr-105.blocks.lingo:810-811`; `Lscr-105.stack-faithful.lingo:618-620`; `Lscr-105.rebuilt-faithful.js:1059-1061`.
    - Unresolved: `raceType = TEAMRIVAL` is byte-backed, but the following object-side-effect residue is not. `stack-faithful.lingo` preserves only `objRace -- 0x1A92` before `getonecarengine("acid=", ...)`, `blocks.lingo` reduces the same slot to `?`, and the faithful JS mirror still stops at unresolved case bytes for target `0x1A8F`. I therefore left the `_global.objRace` line explicit instead of inventing a stronger side effect.

Verification:
- Inventory, raw-evidence, reconstruction, readable-Lingo lift, and JS mirror verification were not blocked.
- JS helper files remain outside `final-clean`.
