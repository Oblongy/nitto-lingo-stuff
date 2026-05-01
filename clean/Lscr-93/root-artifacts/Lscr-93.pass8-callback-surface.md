# Lscr-93 Pass 8 Callback Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass-block412-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`

Scope:
- This pass inventories the whole-file callback surface exposed by the current
  mechanical lift.
- It does not rename unresolved placeholders such as `id_195`.

## Counts

The current `reconstructed (1)\Lscr-93\rightful.ls` exposes:

- `206` `sprite(flashSP).<callback>(...)` call sites
- `143` distinct callback names
- `49` callback names that appear more than once

These counts do not include the non-sprite helper calls such as:

- `fetchCacheXMLDone(...)`
- `connectSocket()`
- `compareAvatarAge(...)`
- `downloadCacheInProgress(...)`
- `downloadInstallerUpdateFlash(...)`
- `loadLocalAvatar(...)`
- `loadLocalUgg(...)`
- `runInstaller(...)`

So the whole-file response surface is broader than the `sprite(flashSP)` count
alone.

## Earliest Callback Surface

The first visible callback family is the protocol/error gate:

- `showConnectionErrorCB("Protocol Error", ... " (Error: 010)") -- 0x0168`
- `showConnectionErrorCB("Protocol Error", ... " (Error: 001)") -- 0x01BD`
- `showConnectionErrorCB("Protocol Error", ... " (Error: 002)") -- 0x01EE`
- `showConnectionErrorCB("Session Timed Out", ... _global.lastAction) -- 0x021C`

Then the non-sprite bootstrap helpers appear:

- `fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF`
- `connectSocket() -- 0x05A2`

Then the main login/router callback surface starts:

- `loginCB(... at, am) -- 0x05E8`
- `fbGetSessionCB(...) -- 0x0730`
- `loginCB(... s) -- 0x0788`

## Distinct Callback Families

The callback names are wide enough to split into whole-file families.

### Login / Account / Profile

Representative callbacks:

- `loginCB`
- `fbGetSessionCB`
- `getInfoCB`
- `getUserCB`
- `getUsersCB`
- `updateBgColorCB`
- `updateDefaultCarCB`
- `racerSearchCB`
- `racerSearchNoPageCB`
- `changeEmailCB`
- `changePasswordCB`
- `forgotPasswordCB`
- `getStarterShowroomCB`
- `createAccountCB`
- `verifyAccountCB`
- `resendActivationCB`
- `agreeToTermsCB`
- `activatePurchaseCB`
- `getCodeCB`
- `getUserBuddiesCB`
- `avatarUploadRequestCB`
- `getLocationsCB`
- `moveLocationCB`

### Mail / Remarks

Representative callbacks:

- `getEmailTotalNewCB`
- `getEmailListCB`
- `getEmailCB`
- `deleteEmailCB`
- `sendEmailCB`
- `addRemarkCB`
- `deleteRemarkCB`
- `getRemarksCB`
- `getUserRemarksCB`
- `setRemarkNonDeletesCB`
- `setRemarkDeletesCB`

### Cars / Showroom / Garage / Parts / Paint

Representative callbacks:

- `getCarCategoriesCB`
- `viewShowroomCB`
- `getCarsCB`
- `getOneCarCB`
- `getOtherUserCarsCB`
- `buyCarCB`
- `sellCarCB`
- `getCarPriceCB`
- `getAllImCarsCB`
- `getCarOutOfImpoundCB`
- `garageDynoBuyCB`
- `garageSetBoostCB`
- `garageSetAFRatioCB`
- `getPartCategoriesCB`
- `getWheelsTiresPartCategoriesCB`
- `getPartsCB`
- `getWheelsTiresCB`
- `buyPartCB`
- `uggBuyCycleCB`
- `installPartCB`
- `uninstallPartCB`
- `sellPartCB`
- `getCarPartsBinCB`
- `getPartsBinCB`
- `getPartGroupCB`
- `getCarPerformanceIncreasesCB`
- `engineListCB`
- `engineGetAllPartsCB`
- `engineBuyPartCB`
- `engineSwapStartCB`
- `engineSwapFinishCB`
- `getPaintCategoriesCB`
- `getPaintsCB`
- `buyPaintCB`
- `getLicensePlatesCB`
- `buyPlateCB`
- `buyVanityCB`
- `getSystemPartsCB`
- `systemSwapCB`
- `getRepairPartsCB`
- `repairPartsCB`
- `getGearInfoCB`
- `buyGearsCB`
- `getSparePriceCB`
- `sellAllSpareCB`
- `getPartDescriptionCB`

### Team / Race / Tournament

Representative callbacks:

- `teamInfoCB`
- `teamTransCB`
- `teamSearchCB`
- `teamUpdateLeaderCommentsCB`
- `teamUpdateTeamReqCB`
- `teamGetInfoCB`
- `teamGetAllAppsCB`
- `teamGetMyAppsCB`
- `teamDeleteAppCB`
- `teamUpdateAppCB`
- `teamAddAppCB`
- `teamUpdateBgColorCB`
- `getOneCarEngineCB`
- `raceGetTwoRacersCarsCB`
- `getRacersCarsCB`
- `ctGetRacersCB`
- `ctJoinCB`
- `ctCreateCB`
- `ctRequestCB`
- `ctSaveCB`
- `practiceCreateCB`
- `htGetTournamentsCB`
- `htJoinTournamentCB`

### Classified / Trade / Social / Election / News

Representative callbacks:

- `putCarOnClassifiedCB`
- `listClassifiedCB`
- `getClassifiedDetailCB`
- `buyFromClassifiedCB`
- `sellerClassifiedHistoryCB`
- `cancelClassifiedCB`
- `requestTradeCB`
- `respondTradeCB`
- `cancelTradeCB`
- `outgoingTradeHistoryCB`
- `pendingTradesCB`
- `getWinsAndLossesCB`
- `earnIncentiveCB`
- `loginTwitterCB`
- `setBadgeVisibleCB`
- `getBlackCardProgressCB`
- `getElectionPhaseCB`
- `getElectionScheduleCB`
- `getNominateCountCB`
- `nominateCB`
- `getElectionResultCB`
- `electionVoteCB`
- `activateAccountCB`
- `getSupportCB`
- `getMisconductCountCB`
- `fbGetTokenCB`
- `fbRemoveFacebookCB`
- `checkTestDriveCB`
- `acceptTestDriveCB`
- `buyTestDriveCarCB`
- `removeTestDriveCarCB`
- `rejectTestDriveCB`
- `garageSetShiftLightRPMCB`
- `joinSpecialEventCB`
- `getLatestNewsCB`
- `getRacerSpotlightCB`
- `claimPendingUCLProfitCB`

### Late Generic / Queue

Representative callbacks:

- `getInstalledEnginePartsCB`
- `genericWebCB`

These sit at the end of the primary action ladder just before the dedicated
`fileNetID` dispatch tail.

## Repeated High-Surface Callbacks

The most repeated callback names in the current lift are:

| Count | Callback |
|---:|---|
| 6 | `sellPartCB` |
| 4 | `showConnectionErrorCB` |
| 4 | `activatePurchaseCB` |
| 4 | `getOneCarEngineCB` |
| 4 | `loginCB` |
| 3 | `installPartCB` |
| 3 | `buyPartCB` |

This is useful because repeated names usually mark branch families rather than
isolated one-off handlers.

## Non-Sprite Helper Surface

The whole-file non-sprite helper calls that matter most are:

- `fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF`
- `connectSocket() -- 0x05A2`
- `compareAvatarAge(checkedForOneClient.getAProp("tids"), avatars) -- 0x0B83`
- `compareAvatarAge(checkedForOneClient.getAProp("tids"), teamAvatars) -- 0x0B9E`
- `downloadCacheInProgress(getStreamStatus(fileNetID third item)) -- 0x2D03`
- `downloadInstallerUpdateFlash(getStreamStatus(fileNetID third item)) -- 0x2D36`
- `loadLocalAvatar(fileNetID second item, fileNetID first item, true/false) -- 0x2DB0 / 0x2DD4`
- `loadLocalUgg(fileNetID second item, true/false) -- 0x2E08 / 0x2E20`
- `runInstaller(fileNetID second item) -- 0x2E42`

The last four lines depend on the selector normalization proved in the later
queue passes rather than the broken bracket text in the raw lift.

## Unresolved

- This pass inventories the callback surface but does not infer source-level
  semantics for callbacks whose only evidence is name-plus-arguments.
- Names such as `id_195` remain unresolved placeholders from the current lift.
- The `compareAvatarAge(... "tids" ...)` contradiction is preserved, not
  resolved, because the downstream file queue still treats that payload as
  nested indexable data.
