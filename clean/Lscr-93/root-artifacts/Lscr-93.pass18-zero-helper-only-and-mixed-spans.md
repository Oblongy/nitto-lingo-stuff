# Lscr-93 Pass 18 Zero, Helper-Only, And Mixed Spans

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass17-action-to-executable-surface.md`

Scope:
- This pass isolates the action spans that do not follow the simple
  one-callback pattern.
- It uses the same executable-line filter as pass 17.

## Zero-Exec Spans

Only two action spans have no visible executable lines under the anchored
filter:

- `changehomemachine` at `0x078C..before 0x078F`
- `markemailread` at `0x0CCD..before 0x0CD0`

Exact visible bodies:

- `changehomemachine`
  - `-- jump 9349 -- 0x078C`

- `markemailread`
  - `-- jump 8004 -- 0x0CCD`

So these two spans are the only exported router bodies that currently collapse
to raw jump-only shells.

## Helper-Only Spans

Nine action spans have executable lines, but no visible
`sprite(flashSP).<callback>(...)` lines:

- `getcache`
- `getavatarage`
- `getteamavatarage`
- `fbgetinviteurl`
- `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]`
- `["avatars", "teamavatars"]`
- `ugg`
- `cache`
- `installer`

### Helper-only single-line spans

- `getcache` -> `fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF`
- `getavatarage` -> `compareAvatarAge(checkedForOneClient.getAProp("tids"), avatars) -- 0x0B83`
- `getteamavatarage` -> `compareAvatarAge(checkedForOneClient.getAProp("tids"), teamAvatars) -- 0x0B9E`
- `cache` -> `downloadCacheDone() -- 0x2E2B`

### Helper-only multi-line spans

- `fbgetinviteurl`
  - `OK = checkedForOneClient.getAProp("d")`
  - `trace("here!")`
  - `trace("info list!")`
  - `trace(OK)`
  - `openURL(...)`

- `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]`
  - `_global.gNetID.splice(_global, TRUE)`
  - `downloadCacheInProgress(...)`
  - `downloadInstallerUpdateFlash(...)`

- `["avatars", "teamavatars"]`
  - `loadLocalAvatar(..., 1)`
  - `loadLocalAvatar(..., 0)`

- `ugg`
  - `loadLocalUgg(..., 1)`
  - `loadLocalUgg(..., 0)`

- `installer`
  - `runInstaller(_global.fileNetID[_global])`
  - `_global.fileNetID.splice(_global, TRUE)`

So the late queue tail is dominated by helper-only bodies rather than direct
Flash callback fanout.

## Mixed Spans

Ten spans mix visible callback lines with non-callback executable lines:

- `["fbgetsession", "login"]`
- `buydyno`
- `getonecarengine`
- `ctct`
- `ctrt`
- `ctst`
- `practice`
- `joinhumantournament`
- `fbgettoken`
- `getinstalledenginepartbyaccountcar`

### Mixed login/bootstrap shared body

`["fbgetsession", "login"]` mixes:

- `openURL(...)`
- direct property assignments (`aid`, `guid`, `installerURL`, `installerFile`,
  `installerMD5`, `facebookID`)
- `connectSocket()`
- `loginCB(...)`
- `fbGetSessionCB(...)`

### Mixed race/bootstrap spans

- `buydyno`
  - `_global.objRace.startRace(...)`
  - `_global.objRace.init(DYNO)`
  - `garageDynoBuyCB(...)`

- `getonecarengine`
  - `trace("director getOneCarEngineCB")`
  - `getOneCarEngineCB(d)`
  - `_global.objRace.startRace(...)`
  - `_global.objRace.init(_global.objRace.raceType)`

- `ctct`
  - `ctCreateCB(s)`
  - `getOneCarEngineCB(d)`
  - `_global.objRace.startRace(...)`
  - `_global.objRace.initComputerRace(CTQ, VOID)`

- `ctrt`
  - `ctRequestCB(TRUE, d, b)`
  - `_global.objRace.initComputerRace(CT, b)`
  - `ctRequestCB(s)`

- `ctst`
  - `guid = checkedForOneClient.getAProp("sk")`
  - `ctSaveCB(s, d)`
  - `ctSaveCB(s)`

- `practice`
  - `_global.objRace.startRace(...)`
  - `_global.objRace.init(P)`
  - `getOneCarEngineCB(d)`
  - `practiceCreateCB(s)`

- `joinhumantournament`
  - `getOneCarEngineCB(d)`
  - `htJoinTournamentCB(...)`
  - `_global.objRace.startRace(...)`

### Mixed social / late-tail spans

- `fbgettoken`
  - `facebookToken = ...`
  - `facebookAPIKey = ...`
  - `openURL(...)`
  - `fbGetTokenCB(s)`

- `getinstalledenginepartbyaccountcar`
  - `getInstalledEnginePartsCB(s, d)`
  - `getInstalledEnginePartsCB(s)`
  - `genericWebCB(...)`

This last span is especially important because it is the point where the main
action ladder visibly hands off into the late `gNetID` bridge.

## Tightest Structural Split

With the stricter executable filter, the non-simple spans break down as:

- `2` zero-exec spans
- `9` helper-only spans
- `10` mixed spans

Everything else in the file stays inside the simpler callback-only families
already documented in earlier passes.
