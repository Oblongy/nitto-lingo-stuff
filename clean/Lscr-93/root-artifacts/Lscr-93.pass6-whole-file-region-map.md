# Lscr-93 Pass 6 Whole-File Region Map

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass-block412-table.md`

Scope:
- This pass treats the entire active `Lscr-93` payload, not just local queue or
  avatar slices.
- No opcode glossary beyond already-export-backed patterns is introduced here.

## Whole-File Shape

The visible handler stub in `Lscr-93.json` still dispatches into embedded block
`412`, which is the large active payload already extracted in
`Lscr-93.pass-block412-table.md`.

The mechanical lift in `reconstructed (1)\Lscr-93\rightful.ls` exposes:

- an early pre-dispatch/protocol-gate region up to the first action case at
  `0x0232`,
- a primary action case rooted at `_global.gNetID[...]` starting at `0x0232`,
- a late queue follow-up region around `0x2BD6..0x2EE1`,
- a terminal file-queue cleanup rooted at `_global.fileNetID[...]`.

The current mechanical comments expose `159` byte-backed
`-- pass26 action-response span:` markers across the active block.

## Primary Anchors

The whole-file anchors that split the payload are:

- `0x0014..0x0231`: pre-dispatch process / protocol / decode gate
- `0x0232`: primary `case _global.gNetID[...] of`
- `0x2BD6..0x2D74`: late `gNetID` follow-up / `genericWebCB` / queue cleanup
- `0x2D5B..0x2EE1`: `fileNetID` dispatch and file/download cleanup

The strongest user-facing anchors inside those regions are:

- `showConnectionErrorCB` protocol/error paths at `0x0168`, `0x01BD`,
  `0x01EE`, `0x021C`, `0x2C78`
- `fetchCacheXMLDone(checkProcessResult.makeList().n2)` at `0x04DF`
- `connectSocket()` at `0x05A2`
- `sprite(flashSP).loginCB(...)` at `0x05E8`, `0x0667`, `0x06AA`, `0x0788`
- `sprite(flashSP).genericWebCB(...)` at `0x2C0D`
- `downloadCacheInProgress(...)` at `0x2D03`
- `downloadInstallerUpdateFlash(...)` at `0x2D36`
- `runInstaller(...)` at `0x2E42`

## Region Families

The `159` action spans split cleanly into these offset families:

| Region | Span | Count | Representative anchors |
|---|---|---:|---|
| bootstrap/login | `0x04A3..0x078C` | 2 | `fetchCacheXMLDone`, `connectSocket`, `loginCB` |
| account/profile/avatar/location | `0x078C..0x0C15` | 25 | `getInfoCB`, `getUserCB`, `compareAvatarAge`, `avatarUploadRequestCB` |
| mail/remarks | `0x0C15..0x0DD1` | 12 | `getEmailTotalNewCB`, `getEmailListCB`, `getEmailCB`, `getRemarksCB` |
| car/shop/garage | `0x0DD1..0x1B35` | 53 | `getCarsCB`, `buyCarCB`, `garageDynoBuyCB`, `buyPartCB`, `engineListCB`, `getPaintCategoriesCB` |
| team/race/tournament | `0x1B35..0x2230` | 22 | `teamInfoCB`, `teamGetInfoCB`, `raceGetTwoRacersCarsCB`, `practice`, `joinhumantournament` |
| classified/trade/social | `0x2230..0x256D` | 16 | classified flows, trade flows, `loginTwitterCB` |
| election/support/news | `0x256D..0x2B73` | 23 | `getelectionphase`, `getelectionresult`, `getSupportCB`, `fbgettoken`, `checktestdrive`, `getnews` |
| late queue tail | `0x2B73..0x2EE1` | 6 | `getinstalledenginepartbyaccountcar`, late web-follow-up, file-queue dispatch |

The region counts sum to the full `159` exposed action spans.

## Region Detail

### Bootstrap / Login

This family starts with:

- `"getcache"` at `0x04A3..before 0x04E8`
- `["fbgetsession", "login"]` sharing `0x04E8..before 0x078C`

Representative lines in the lift:

- `fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF`
- `connectSocket() -- 0x05A2`
- `sprite(flashSP).loginCB(... at, am) -- 0x05E8`
- `sprite(flashSP).loginCB(... d) -- 0x0667`
- `sprite(flashSP).loginCB(... s) -- 0x0788`

This is the strongest whole-file proof that the block is not only a generic
HTTP callback table. It contains bootstrap/cache/login control flow before the
long action ladder settles into narrower callback families.

### Account / Profile / Avatar / Location

This family runs from `changehomemachine` at `0x078C` through `movelocation`
ending before `0x0C15`.

Representative anchors:

- `getInfoCB`
- `getUserCB`
- `getUsersCB`
- `racerSearchCB`
- `racerSearchNoPageCB`
- `createAccountCB`
- `verifyAccountCB`
- `compareAvatarAge(checkedForOneClient.getAProp("tids"), avatars) -- 0x0B83`
- `compareAvatarAge(checkedForOneClient.getAProp("tids"), teamAvatars) -- 0x0B9E`
- `avatarUploadRequestCB`
- `getLocationsCB`
- `moveLocationCB`

The avatar-age path is important because it later reappears in the late queue
tail at `0x2C35..0x2D74`.

### Mail / Remarks

This family covers:

- `gettotalnewmail`
- `getemaillist`
- `getemail`
- `deleteemail`
- `sendemail`
- `markemailread`
- `addremark`
- `deleteremark`
- `getremarks`
- `getuserremarks`
- `setnondeletes`
- `setdeletes`

It is a compact middle ladder from `0x0C15` to `0x0DD1` before the larger car
and garage families start.

### Car / Shop / Garage

This is the largest region: `53` spans from `0x0DD1` to `0x1B35`.

Representative anchors:

- `sprite(flashSP).getCarsCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x0E46`
- `sprite(flashSP).buyCarCB(... "b", "d") -- 0x0F3C`
- `sprite(flashSP).garageDynoBuyCB(... !ATTRIBUTES.e/u/ad/sl/n) -- 0x119F`
- `sprite(flashSP).buyPartCB(c, ...) -- 0x12D9`
- `sprite(flashSP).buyPartCB(e, ...) -- 0x130B`
- `sprite(flashSP).buyPartCB(m, ...) -- 0x133D`
- `sprite(flashSP).engineListCB(...) -- 0x1611`
- `sprite(flashSP).engineBuyPartCB(...) -- 0x1684`
- `sprite(flashSP).getPaintCategoriesCB(...) -- 0x1754`

This region contains the densest callback vocabulary in the whole file and is
the clearest evidence that `Lscr-93` is a broad response router, not a
single-purpose network helper.

### Team / Race / Tournament

This family spans `0x1B35..0x2230`.

Representative anchors:

- `sprite(flashSP).teamInfoCB(...) -- 0x1B53`
- `sprite(flashSP).teamGetInfoCB(... "d") -- 0x1C9E`
- `sprite(flashSP).raceGetTwoRacersCarsCB(... "d") -- 0x1ED6`
- `sprite(flashSP).raceGetTwoRacersCarsCB(... id_195) -- 0x1EFB`
- `ctgr`, `ctjt`, `ctct`, `ctrt`, `ctst`
- `practice`
- `gethumantournaments`
- `joinhumantournament`

The `ct*` cluster remains byte-backed but semantically unresolved in this pass.
It stays grouped here because its spans are contiguous with the race/tournament
callbacks.

### Classified / Trade / Social

This family spans `0x2230..0x256D`.

Representative spans:

- `putcaronclassified`
- `listclassified`
- `getclassifieddetail`
- `buyfromclassified`
- `classifiedhistory`
- `cancelclassified`
- `requesttrade`
- `respondtrade`
- `canceltrade`
- `getoutgoingtradehistory`
- `getpendingtrades`
- `getwinsandlosses`
- `earnincentive`
- `logintwitter`
- `setbadgevisible`

Representative callback anchor:

- `sprite(flashSP).loginTwitterCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("u")) -- 0x2547`

### Election / Support / News

This family spans `0x256D..0x2B73`.

Representative anchors:

- `getelectionphase`
- `getelectionschedule`
- `getnominatecount`
- `nominate`
- `getelectionresult`
- `electionvote`
- `activateaccount`
- `getsupport`
- `getmisconductcount`
- `fbgettoken`
- `fbremovefacebook`
- `fbgetinviteurl`
- `checktestdrive`
- `accepttestdrive`
- `buytestdrivecar`
- `removetestdrivecar`
- `rejecttestdrive`
- `changeshiftlightrpm`
- `joinspecialevent`
- `getnews`
- `getspotlightracers`
- `claimpendinguclprofit`

Representative callback anchor:

- `sprite(flashSP).getSupportCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("m"), checkedForOneClient.getAProp("i"), checkedForOneClient.getAProp("t")) -- 0x2747`

### Late Queue Tail

The last six spans are structurally different from the earlier long action
ladder:

- `"getinstalledenginepartbyaccountcar"` at `0x2B73..before 0x2C35`
- `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]`
  sharing `0x2C35..before 0x2D74`
- `["avatars", "teamavatars"]` sharing `0x2D74..before 0x2DD8`
- `"ugg"` at `0x2DD8..before 0x2E24`
- `"cache"` at `0x2E24..before 0x2E2F`
- `"installer"` at `0x2E2F..0x2EE1`

This is where the file switches from the primary action ladder into late queue
cleanup:

- `sprite(flashSP).genericWebCB(...) -- 0x2C0D`
- `lastAction = _global.gNetID[...] -- 0x2C9E`
- `_global.gNetID.splice(...) -- 0x2CB3`
- `downloadCacheInProgress(getStreamStatus(...)) -- 0x2D03`
- `downloadInstallerUpdateFlash(getStreamStatus(...)) -- 0x2D36`
- `runInstaller(...) -- 0x2E42`
- `_global.fileNetID.splice(...) -- 0x2E57`

This tail is the strongest whole-file proof that `Lscr-93` is doing both:

- primary web response dispatch through `gNetID`
- secondary file/download response dispatch through `fileNetID`

## Shared-Span Cases

Three shared-span cases matter for whole-file reasoning:

1. `["fbgetsession", "login"]` share `0x04E8..before 0x078C`.
2. `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]`
   share `0x2C35..before 0x2D74`.
3. `["avatars", "teamavatars"]` share `0x2D74..before 0x2DD8`.

These should not be silently flattened into four independent late handlers or
two independent file handlers when reading the mechanical lift.

## Unresolved

- This pass groups the whole file by span and callback family, but it does not
  rename unresolved opcodes.
- The `ctgr` / `ctjt` / `ctct` / `ctrt` / `ctst` cluster remains unresolved.
- The late avatar-age path still carries the `tids` contradiction documented in
  newer queue/selector work; this pass preserves that contradiction instead of
  smoothing it over.
