# Lscr-93 Pass 19 Action-To-Callback Divergence

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass17-action-to-executable-surface.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass18-zero-helper-only-and-mixed-spans.md`

Scope:
- This pass tracks the visible `sprite(flashSP).<callback>(...)` names per
  action span.
- It does not invent semantic expansions for abbreviated action tokens.

## Whole-File Callback-Name Counts

Across the `159` action-span lines:

- `11` spans expose `0` visible `sprite(flashSP)` callback names
- `143` spans expose exactly `1` distinct callback name
- `5` spans expose `2` distinct callback names

No action span in the current lift exposes more than `2` distinct visible
callback names.

## Two-Callback Spans

Only five spans fan out to two distinct visible callback names:

- `["fbgetsession", "login"]`
  - `fbGetSessionCB`
  - `loginCB`

- `ctct`
  - `ctCreateCB`
  - `getOneCarEngineCB`

- `practice`
  - `getOneCarEngineCB`
  - `practiceCreateCB`

- `joinhumantournament`
  - `getOneCarEngineCB`
  - `htJoinTournamentCB`

- `getinstalledenginepartbyaccountcar`
  - `getInstalledEnginePartsCB`
  - `genericWebCB`

These are the only exported action spans where the visible callback surface is
not a single-name family.

## Zero-Callback Spans

The eleven zero-callback spans are exactly the helper-only and jump-only bodies
already isolated in pass 18:

- `changehomemachine`
- `markemailread`
- `getcache`
- `getavatarage`
- `getteamavatarage`
- `fbgetinviteurl`
- `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]`
- `["avatars", "teamavatars"]`
- `ugg`
- `cache`
- `installer`

So the callback-name surface is absent only in those helper/jump-oriented
regions.

## One-Callback Majority

`143` spans map to exactly one distinct visible callback name.

That majority still splits into two important subfamilies:

- direct-name families
- divergent-name families

## Direct-Name Families

Many action tokens track their callback names closely:

- `getinfo` -> `getInfoCB`
- `getuser` -> `getUserCB`
- `getusers` -> `getUsersCB`
- `getemail` -> `getEmailCB`
- `deleteemail` -> `deleteEmailCB`
- `sendemail` -> `sendEmailCB`
- `buycar` -> `buyCarCB`
- `sellcar` -> `sellCarCB`
- `teamsearch` -> `teamSearchCB`
- `checktestdrive` -> `checkTestDriveCB`

This direct family is the common case, but it is not the whole file.

## Divergent Single-Callback Families

The current lift also exposes strong one-callback divergence clusters where the
action token and callback token do not simply mirror each other.

### Purchase / membership alias cluster

- `activatepoints` -> `activatePurchaseCB`
- `activatemember` -> `activatePurchaseCB`

### Parts / engine alias cluster

- `buypart` -> `buyPartCB`
- `buyenginepart` -> `buyPartCB`
- `buyengine` -> `buyPartCB`
- `buypartugg` -> `uggBuyCycleCB`

- `installpart` -> `installPartCB`
- `installenginepart` -> `installPartCB`
- `swapengine` -> `installPartCB`

- `uninstallpart` -> `uninstallPartCB`
- `uninstallenginepart` -> `uninstallPartCB`

- `sellcarpart` -> `sellPartCB`
- `sellenginepart` -> `sellPartCB`
- `sellengine` -> `sellPartCB`

### Short-token engine cluster

- `egue` -> `engineListCB`
- `egep` -> `engineGetAllPartsCB`
- `ebep` -> `engineBuyPartCB`
- `esst` -> `engineSwapStartCB`
- `esfi` -> `engineSwapFinishCB`

These are exact export-backed divergences. This pass does not expand the short
action tokens beyond the visible callback names.

### Team/app divergence cluster

- `updateleadercomments` -> `teamUpdateLeaderCommentsCB`
- `updateteamreq` -> `teamUpdateTeamReqCB`
- `getteaminfo` -> `teamGetInfoCB`
- `getallteamapps` -> `teamGetAllAppsCB`
- `getallmyapps` -> `teamGetMyAppsCB`
- `deleteapp` -> `teamDeleteAppCB`
- `updateteamapp` -> `teamUpdateAppCB`
- `addteamapp` -> `teamAddAppCB`
- `setteamcolor` -> `teamUpdateBgColorCB`

### Late social/news divergence cluster

- `getnews` -> `getLatestNewsCB`
- `getspotlightracers` -> `getRacerSpotlightCB`
- `getinstalledenginepartbyaccountcar` includes `getInstalledEnginePartsCB`

## Tightest Split

The visible action-to-callback relationship in `Lscr-93` is therefore not just:

```text
action token -> one same-stem callback
```

It splits into:

- no-callback helper/jump spans
- one-callback direct-name spans
- one-callback divergent-name alias spans
- five two-callback mixed spans

That is the tightest whole-file callback-name crosswalk the current lift
supports without inventing expansions for the abbreviated action tokens.
