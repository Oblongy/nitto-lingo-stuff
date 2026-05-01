# Mechanical Lingo Reconstruction Report

Inventory pass:
- Deliverable `rightful.ls`: `1841` lines, `22` visible `on` blocks.
- Handler scan: `RaceEngine`, `RaceEngine_dispatchTable`, `RaceEngine_constantsTable`, `RaceEngine_initState`, `RaceEngine_parseConfig`, `RaceEngine_initBoost`, `RaceEngine_startSendTimer`, `RaceEngine_stopRunTimer`, `RaceEngine_stageDistance`, `RaceEngine_runFrame`, `RaceEngine_calculateExtraHpi`, `RaceEngine_lookupTorque`, `RaceEngine_initBrakeTune`, `RaceEngine_gearDown`, `RaceEngine_gearUp`, `RaceEngine_setBrake`, `RaceEngine_setClutchFeather`, `RaceEngine_createMd5Hash`, `RaceEngine_startLightTimer`, `RaceEngine_runLight`, `RaceEngine_buildMd5Source`, `RaceEngine_randomCurve`.
- Obvious unresolved scan hits: `8`.
  - `rightful.ls:189` -> block `5972`, typed `!ATTRIBUTES(...)` batch is promoted, but `blocks.lingo` / `blocks.js` resolve `xmlparser.initBoost.<field>` while `annotated-disasm.md` / `pass-block5972-table.md` / `rebuilt-faithful-full.js` still keep raw id `7` as `!ATTRIBUTES`
  - `rightful.ls:213` -> block `5972`, offset `0x0240`, `tqArray = param_xmlparser` remains a carried placeholder; `blocks.lingo` / `blocks.js` already agree on `tqArray`, but no stricter local block surface exposes a cleaner rhs than `param_xmlparser`
  - `rightful.ls:308-309` -> block `11992`, offset `0x0075`, `needs-stack-context`, `implicit_arg_0x0072`
  - `rightful.ls:901-902` -> block `14012`, offset `0x1135`, visible rhs `rt mod c1`, unresolved lhs source; `block08-islands.js` island `383` spans `0x112C..0x1139` and still records `/*stack*/`, while `KDONE` does not appear until separate island `385` at `0x1159..0x115C`
  - `rightful.ls:913-916` -> block `14012`, offset `0x11C5`, visible rhs `rt mod c1`; `block08-islands.js` island `390` spans `0x11BC..0x11C9` and still records `/*stack*/`, while `pass-block14012-table.md` proves payload id `145` = `KDONE` and `annotated-disasm.md` loads `op_3B arg=145` at `0x1159` only in earlier island `385`
  - pass65 tightening for block `14012`: `pass-block14012-table.md` proves payload id `145` = `KDONE`, and `annotated-disasm.md` loads `op_3B arg=145` at `0x1159`; that proves symbol presence in island `385`, not raw guard-lhs ownership in islands `383` or `390`
  - `rightful.ls:1337-1338` -> block `34244`, offsets `0x0080..0x0081`, raw tail remains unresolved stack `[(posTq + c200), 0.8758]`
- `rightful.ls:1490-1493` -> block `37252`, CT subwindow `0x0145..0x0174` still splits between faithful/full-only residue rows at `0x0145` / `0x0173` and the real packed blocker at `0x016F..0x0174`; `pass23-hotspot-carry-tracer.md` tightens the strict ownership to a raw build packet at `0x0161..0x016E` naming `symbol` / `runLight`, a minimal strict named sink at `0x0170 op_36 arg=29 ; "lightTO1"`, and an in-band unresolved tail at `0x0173 op_51` plus `0x0174 op_06 jump 123`
  - `rightful.ls:1508` -> block `37252` default arm still has no recovered executable body; `rebuilt-faithful-full.js` falls directly to `end` after the `HT` branch ladder, with the last proved ladder edge at byte window `0x0219..0x022E`
  - `rightful.ls:1806` -> block `43264`, `goodCounterRT` gate plus final hash tail still split between standalone raw expr residue at `0x05F4` / `0x064C` and the real packed blockers; annotated-disasm keeps the broader gate anchored upstream at `0x05DD`, the minimal non-removable gate core is `0x05F4..0x05F5`, and the strict `blocks.js` / `blocks.lingo` tail surface preserves only the row packet `, = caluMD5`, `?`, `id_0 = ,.getStringMD5()(id_0)`, `?`, `// [0x064f] op_05`, `id_0`, never independently reaching `0x065A` or `0x0663`

Raw-evidence pass:
- Raw metadata: `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.json`
  - `scriptNumber = 2`
  - `handlersCount = 1`
  - `totalLength = 48988`
  - direct JSON handler inventory: `RaceEngine`
- Raw reconstructed surfaces:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.reconstructed.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.bin-only.reconstructed.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- Byte-pattern corroboration:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.all-block-tables.tsv`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.bin-only.pass1-report.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass21-whole-file-inventory.md`
  - full `pass-block*.md` family for offsets `0`, `344`, `3032`, `5972`, `10964`, `11368`, `11760`, `11992`, `14012`, `31980`, `34244`, `34828`, `35024`, `35848`, `36764`, `36964`, `37252`, `39320`, `41116`, `43264`, and `48232`
  - front-edge and typed `!ATTRIBUTES(...)` corroboration for block `3`: `Lscr-102.annotated-disasm.md`, `Lscr-102.blocks.js`, `Lscr-102.blocks.lingo`, `Lscr-102.pass-block5972-table.md`
  - stack-gap corroboration for block `7`: `Lscr-102.pass-block11992-table.md`, `Lscr-102.pass3-branches.md`, `Lscr-102.rebuilt-faithful-full.js`
  - stack-gap corroboration for block `8`: `Lscr-102.pass-block14012-table.md`, `Lscr-102.pass3-branches.md`, `Lscr-102.block08-islands.js`, `Lscr-102.rebuilt-faithful-full.js`
  - tail-gap corroboration for block `10`: `Lscr-102.pass-block34244-table.md`, `Lscr-102.blocks.lingo`

Reconstruction pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\evidence\reconstructed\rightful.ls`: `1815` lines.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\evidence\reconstructed (1)\rightful.ls`: `1866` lines.
- The staged `clean\Lscr-102\rightful.ls` hash-matches `evidence\reconstructed (1)\rightful.ls`.
- The shorter `evidence\reconstructed\rightful.ls` was not promoted.
- `final-clean\Lscr-102\rightful.ls` now carries one extra byte-backed cleanup pass from `Lscr-102.bin-only.pass1-report.md`: `brakeDecleration = -40` at `0x004C` and `revLimiterDeceleration = -30` at `0x0054`.

Readable-Lingo lift pass:
- Recovered Lingo artifact:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-102\rightful.ls`

| Block | Handler | Source | Offset | CodeLen | `rightful.ls` line | Unresolved |
|---:|---|---|---:|---:|---:|---|
| stub | `RaceEngine` | named handler stub from raw metadata plus recovered wrapper | n/a | 5 | 16 | none |
| 0 | `RaceEngine_dispatchTable` | local reconstructed block 0 | 0 | 251 | 20 | none |
| 1 | `RaceEngine_constantsTable` | local reconstructed block 1 | 344 | 456 | 48 | none |
| 2 | `RaceEngine_initState` | local reconstructed block 2 | 3032 | 496 | 113 | none |
| 3 | `RaceEngine_parseConfig` | local reconstructed block 3 | 5972 | 1268 | 178 | front edge plus typed `!ATTRIBUTES(...)` reads through `launchControl` are promoted; `blocks.lingo` / `blocks.js` vs `annotated-disasm.md` / `pass-block5972-table.md` / `rebuilt-faithful-full.js` still disagree on one cleaner receiver chain, and `tqArray = param_xmlparser` at `rightful.ls:213` remains unresolved |
| 4 | `RaceEngine_initBoost` | local reconstructed block 4 | 10964 | 60 | 249 | none |
| 5 | `RaceEngine_startSendTimer` | local reconstructed block 5 | 11368 | 59 | 264 | none |
| 6 | `RaceEngine_stopRunTimer` | local reconstructed block 6 | 11760 | 25 | 276 | none |
| 7 | `RaceEngine_stageDistance` | local reconstructed block 7 | 11992 | 301 | 287 | stack gap remains explicit at `rightful.ls:308-309`; the `0x0075` first `STG(...)` argument still depends on an unresolved carried stack value |
| 8 | `RaceEngine_runFrame` | local reconstructed block 8 | 14012 | 7823 | 342 | stack-context TODOs remain at `rightful.ls:901` and `914`; `0x1135` and `0x11C5` still prove only the rhs `rt mod c1` locally, while `0x1254` plus the repeated `RIVAL`/`TEAMRIVAL` `RIVRT(...)` dispatch ladders are now promoted from contiguous island stack tails |
| 9 | `RaceEngine_calculateExtraHpi` | local reconstructed block 9 | 31980 | 710 | 1227 | none |
| 10 | `RaceEngine_lookupTorque` | local reconstructed block 10 | 34244 | 110 | 1324 | `0x006E` lookup is safe, but `rightful.ls:1337-1338` still preserve the raw tail stack `[(posTq + c200), 0.8758]` at `0x0080..0x0081` |
| 11 | `RaceEngine_initBrakeTune` | local reconstructed block 11 | 34828 | 20 | 1345 | none |
| 12 | `RaceEngine_gearDown` | local reconstructed block 12 | 35024 | 198 | 1354 | none |
| 13 | `RaceEngine_gearUp` | local reconstructed block 13 | 35848 | 219 | 1389 | none |
| 14 | `RaceEngine_setBrake` | local reconstructed block 14 | 36764 | 23 | 1428 | none |
| 15 | `RaceEngine_setClutchFeather` | local reconstructed block 15 | 36964 | 54 | 1441 | none |
| 16 | `RaceEngine_createMd5Hash` | local reconstructed block 16 | 37252 | 539 | 1456 | timeout `forget()` guards plus `RIVAL, TEAMRIVAL` and `CTQ, P` case arms are now promoted; the CT subwindow at `0x0145..0x0174` still contains faithful/full-only residue at `0x0145` / `0x0173`, while the stricter block-owned proof narrows only to a raw build packet at `0x0161..0x016E` naming `symbol` / `runLight`, a minimal strict named sink at `0x0170 op_36 arg=29 ; "lightTO1"`, and an in-band unresolved tail `op_51` / `op_06` at `0x0173..0x0174`; the following branch-tail seam at `0x0177..0x018F` still proves only a `btd` / `c0` branch root plus a compact call-shaped packet carrying `b`, not a strictly proven final readable `startLightTimer(b, VOID)` line; `otherwise` still remains empty after the final proved `HT` ladder edge (`rightful.ls:1508`) |
| 17 | `RaceEngine_startLightTimer` | local reconstructed block 17 | 39320 | 681 | 1515 | none |
| 18 | `RaceEngine_runLight` | local reconstructed block 18 | 41116 | 708 | 1593 | none |
| 19 | `RaceEngine_buildMd5Source` | local reconstructed block 19 | 43264 | 1616 | 1685 | anti-lag/integrity cluster still remains explicit at `0x05D5..0x063E`; standalone expr residue survives at `0x05F4` and `0x064C`, the broader gate remains anchored upstream at `0x05DD`, the minimal in-band gate core remains `op_51` / `op_06` at `0x05F4..0x05F5`, and the strict `blocks.js` / `blocks.lingo` tail surface preserves only the row packet `, = caluMD5`, `?`, `id_0 = ,.getStringMD5()(id_0)`, `?`, `// [0x064f] op_05`, `id_0`, never independently reaching `0x065A` or `0x0663` |
| 20 | `RaceEngine_randomCurve` | local reconstructed block 20 | 48232 | 118 | 1814 | none |

- Block `1` now promotes `brakeDecleration = -40` and `revLimiterDeceleration = -30` at `rightful.ls:60-61`, byte-backed by the typed table in `Lscr-102.bin-only.pass1-report.md` and corroborated by the matching `c_12` / `c_14` slots in `Lscr-102.blocks.lingo` and `Lscr-102.blocks.js`.
- Block `3` now promotes `xtra.parseString(param_xtra)` at `0x002F`, `xmlparser = xtra.makeList().n2` at `0x003F..0x0042`, the typed `parseInt/parseFloat("!ATTRIBUTES"(…))` assignment batch through `launchControl` at `0x0059..0x04E2`, and the full `grs = Array(...)` rebuild at `0x01B7`. Those lifts are byte-backed by `Lscr-102.annotated-disasm.md` plus the matching `blocks.lingo` / `blocks.js` surfaces, and they remove a large set of stray post-assignment marker lines from the earlier stack-faithful copy.
- Block `8` now also promotes the `0x1254` branch as `if not ((raceType = RIVAL) <> (rt mod c1)) then`, plus the repeated `RIVAL`/`TEAMRIVAL` `RIVRT(...)` dispatch ladders at `0x0C2E..0x0C4C`, `0x0D02..0x0D20`, and `0x0DF0..0x0E1C`, because `Lscr-102.block08-islands.js` carries the contiguous `(raceType = RIVAL)` stack tails directly into those branch windows. The nearby `0x1135` guard stays unresolved for the opposite reason: island `383` still records `/*stack*/`, and island `385` carries `KDONE` only after the `0x115C` branch target.
- A deeper re-check around block `2` / `0x0125` and block `8` / `0x0A46` did not justify new executable lifts, but it did narrow two suspicious-looking forms:
  - `gr = grs[VOID]` at `0x0125` is preserved intentionally because block `2` and the downstream shift helpers all repeat that exact recovered index form; no safer constant or symbolic gear alias is exposed locally.
  - `s = (((param_c0 > c0) > (mph = VOID)) mod c13)` at `0x0A46` still stays as-is because both `Lscr-102.rebuilt-faithful-full.js` and `Lscr-102.block08-islands.js` collapse the lhs to a carried stack value immediately before the final `mod c13`.
- Block `10` remains intentionally short of `negTq = posTq + c200`: `pass6-stack-prototype.md`, `pass9-tooling-results.md`, `reconstructed.lingo`, and `rebuilt-faithful-full.js` all suggest that assignment, but the stricter `blocks.lingo` / `blocks.js` / `pass-block34244-table.md` surface still stops at the raw tail stack `[(posTq + c200), 0.8758]`, so no assignment target was promoted into the deliverable.
- Block `16` now promotes the `lightDelayTO`, `lightTO1`, and `lightTO2` `<> VOID` / `forget()` guards plus the merged `RIVAL, TEAMRIVAL` and `CTQ, P` `case` arms. Those lifts are backed by the block-16 branch windows preserved in `Lscr-102.rebuilt-faithful-full.js` and the matching local recovered body in `reconstructed (1)\original-style.lingo`. One CT subwindow is now split more cleanly: faithful/full is still the only local surface that breaks out residue-style `lightTO1` at `0x0145` and `timeout` at `0x0173`, while the stricter block-owned proof only reaches a raw build packet at `0x0161..0x016E` naming `symbol` / `runLight`, a minimal strict named sink `0x0170 op_36 arg=29 ; "lightTO1"`, and an in-band unresolved tail `0x0173 op_51` plus `0x0174 op_06 jump 123`. The next branch-tail seam is also narrower on the strict surface than in the readable body: raw rows name `btd`, `c0`, `startLightTimer`, and `b` through `0x018B`, but the stricter block-owned surface still compresses that region to `null.btd`, `if (null.c0) { /* else goto @386 */ }`, and `?(b, false)`. That means both the current readable line at `rightful.ls:1492` and the later `startLightTimer(b, VOID)` at `rightful.ls:1496` are broader than the strict block-owned proof, and no narrower byte-backed split is promoted from this pass. The remaining default arm is still pinned to the exact tail window `0x0219..0x022E`: `if not (raceType = HT) then -- jump 21` followed by `HTREADY(VOID, createMd5Hash(0))`, then direct fallthrough to `end`.
- Block `19` now also promotes the `grs[...]` collector at `0x006C..0x0092` into a real loop while preserving the odd recovered loop variable mismatch `stockRedLine`, promotes the tail expression at `0x05F4` from the weaker staged placeholder to the stricter faithful/full form `(goodCounterRT = VOID)`, and promotes the final Xtra hash handoff at `0x0649..0x0663` as `guid = xtra("caluMD5").getStringMD5(EMPTY)`. The surrounding anti-lag/integrity branches at `0x05D5..0x063B` still remain only partially structured, but the lower-level `blocks.js` / `blocks.lingo` rows now explicitly anchor the surviving compare lhs expressions at `0x0619` and `0x063E` as `(goodCounterRT + badCounterRT)` and `(goodCounterET + badCounterET)`. Those same rows still expose the threshold in a raw `1982773` form, while `pass12-op83-immediates.md` plus `rebuilt-faithful-full.js` express the nearby faithful threshold as `0.7745`, so that condition is still preserved as a blocker instead of being normalized into a final `if` rewrite. The exact unresolved byte window for this cluster is now pinned as `0x05D5..0x063E`, with branch-table targets `106`, `17`, `74`, `17`, `37`, and `14`. Within that cluster, raw expr `(goodCounterRT = VOID)` at `0x05F4` and expr `badCounterET` at `0x064C` are now separated out as standalone residue rows, while the still-real packed blockers remain the broader upstream gate anchor `0x05DD`, the minimal non-removable gate core `op_51` / `op_06` at `0x05F4..0x05F5`, and a strict `blocks.js` / `blocks.lingo` tail surface that preserves only the row packet `, = caluMD5`, `?`, `id_0 = ,.getStringMD5()(id_0)`, `?`, `// [0x064f] op_05`, `id_0`, never independently reaching `0x065A` or `0x0663`. The minimal non-removable gate/tail cores do not shrink past `op_51` / `op_06` and the `0x064F..0x0663` tail span.
- The remaining flagged regions around block `3` receiver-chain normalization and `tqArray = param_xmlparser` at `0x0240`, plus `0x0075`, `0x1135`, `0x11C5`, and `0x0080..0x0081`, were re-checked and left unresolved because the local block surfaces still split between carried stack placeholders, raw tail markers, or contradictory receiver/name interpretations before the final comparison/call site. In particular, `0x11C5` is still a live contradiction between `Lscr-102.rebuilt-faithful-full.js` (`KDONE`) and `Lscr-102.block08-islands.js` (`/*stack*/`), so the deliverable keeps the branch explicit instead of picking one silently.

JS mirror pass:
- Accepted direct local mirror:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\rightful.from-lingo.js`
- Extended local mechanical mirror:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\rightful.full-mechanical.js`
- Raw-export-side corroboration:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful.js`

Unresolved:
- `Lscr-102.json` alone still exposes only the single named handler `RaceEngine`; helper block names come from the recovered `rightful.ls` body and stay preserved exactly as recovered.
- `RaceEngine_parseConfig` now safely promotes the front-edge receiver/property chain at `0x002F` and `0x003F..0x0042` plus the typed `!ATTRIBUTES(...)` assignment batch through `launchControl`, but two blockers remain explicit: `blocks.lingo` / `blocks.js` resolve that repeated chain as `xmlparser.initBoost.<field>`, while `annotated-disasm.md`, `pass-block5972-table.md`, and `rebuilt-faithful-full.js` still preserve raw id `7` as `!ATTRIBUTES`, so neither a cleaner property chain nor a `getAProp(...)` rewrite is promoted; and `tqArray = param_xmlparser` at `0x0240` still preserves an unresolved carried value instead of a named source.
- `RaceEngine_stageDistance` retains the explicit stack-context gap at `0x0075`. `Lscr-102.rebuilt-faithful-full.js` folds more of the boolean chain there, but the leftmost carried stack value is still unresolved in the local byte-backed lift.
- `RaceEngine_runFrame` retains the explicit stack-context gaps at `0x1135` and `0x11C5`. `Lscr-102.block08-islands.js` still records each lhs as `/*stack*/`; more tightly, `0x1135` sits in island `383` (`0x112C..0x1139`) and `0x11C5` sits in island `390` (`0x11BC..0x11C9`). `Lscr-102.rebuilt-faithful-full.js` carries `KDONE` into `0x11C5`, but that carry is not promoted because the local raw island trace does not prove it. `pass-block14012-table.md` proves payload id `145` = `KDONE`, and `annotated-disasm.md` loads `op_3B arg=145` at `0x1159`, but that only proves symbol presence in earlier island `385` (`0x1159..0x115C`), not raw guard-lhs ownership in islands `383` or `390`. The `0x1254` guard and the nearby `RIVRT(...)` `RIVAL`/`TEAMRIVAL` ladders are no longer in this unresolved set because the island trace supplies contiguous `(raceType = RIVAL)` stack tails immediately before those branch windows.
- `RaceEngine_lookupTorque` retains the explicit raw tail marker at `0x0080..0x0081`. `Lscr-102.blocks.lingo` proves only the preceding `posTq = tqArray[parseInt((rpm / c100))]` plus the remaining stack pair `[(posTq + c200), 0.8758]`; helper rebuilds carry a stronger `negTq`/return shape, but that shape is not promoted because the raw local block does not expose its assignment target.
- `RaceEngine_createMd5Hash` now carries the promoted timeout guards and merged `case` arms, but it still keeps two explicit blockers: the CT packed handoff at `0x016F..0x0174` after separating faithful/full-only residue rows at `0x0145` and `0x0173`, with the stricter block-owned proof only reaching the raw build packet `0x0161..0x016E`, the named sink `0x0170 op_36 arg=29 ; "lightTO1"`, the in-band unresolved tail `0x0173 op_51` plus `0x0174 op_06 jump 123`, and then a narrower-than-readable branch-tail seam `0x0177..0x018F` that still compresses to `null.btd`, `if (null.c0) { /* else goto @386 */ }`, and `?(b, false)` on the strict surface; and the empty `otherwise` after the final proved `HT` ladder edge at `rightful.ls:1508`.
- `RaceEngine_buildMd5Source` still keeps the anti-lag cluster and the final hash tail explicit after separating raw residue rows at `0x05F4` and `0x064C`; the broader gate remains anchored at `0x05DD`, the minimal gate core remains `0x05F4..0x05F5`, and the strict `blocks.js` / `blocks.lingo` tail preserves only the row packet `, = caluMD5`, `?`, `id_0 = ,.getStringMD5()(id_0)`, `?`, `// [0x064f] op_05`, `id_0`, never independently reaching `0x065A` or `0x0663`.

Verification:
- Inventory, raw-evidence, reconstruction, readable-Lingo lift, and JS mirror verification were not blocked.
- JS helper files were intentionally excluded from `final-clean`.
