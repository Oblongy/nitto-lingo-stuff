# Lscr-93 Pass 17 Action-To-Executable Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass15-action-span-inventory.md`

Scope:
- This pass maps each exported action span to visible executable lines inside
  that span.
- The executable filter is anchored to actual lift lines, not pass26/pass27
  comment text.

## Executable-Line Filter

This pass counts these visible executable-line families:

- `sprite(flashSP).<callback>(...)`
- `_global.objRace.<method>(...)`
- `_global.gNetID.splice(...)`
- `_global.fileNetID.splice(...)`
- direct helper calls such as:
  - `fetchCacheXMLDone(...)`
  - `connectSocket()`
  - `compareAvatarAge(...)`
  - `downloadCacheInProgress(...)`
  - `downloadInstallerUpdateFlash(...)`
  - `downloadCacheDone()`
  - `loadLocalAvatar(...)`
  - `loadLocalUgg(...)`
  - `runInstaller(...)`
  - `trace(...)`
  - `CheckNittoProcessesCB(...)`
  - `openURL(...)`
- direct property assignments of the form:
  - `name = checkedForOneClient.getAProp("...")`

This pass does not count pass26/pass27 comment lines as executable.

## Whole-File Counts

Under that filter, the `159` action-span lines split as:

- `2` spans with `0` executable lines
- `102` spans with `1` executable line
- `43` spans with `2` executable lines
- `4` spans with `3` executable lines
- `6` spans with `4` executable lines
- `1` span with `5` executable lines
- `1` span with `14` executable lines

So most action spans still collapse to one visible executable line, but there is
now a tight long tail of multi-line spans.

## Highest-Density Span

The densest span by far is:

- `["fbgetsession", "login"]` at `0x04E8..before 0x078C` with `14` executable lines

Visible executable lines in that shared body:

- one `openURL(...)` line at `0x0521`
- two direct property assignments: `aid`, `guid`
- `connectSocket()`
- three installer/facebook assignment lines: `installerURL`, `installerFile`,
  `installerMD5`
- one `facebookID` assignment
- six callbacks:
  - `loginCB(s, d, at, am)`
  - `loginCB(s, d)` twice
  - `fbGetSessionCB(s)` twice
  - `loginCB(s)`

This is the strongest whole-file shared-body span.

## Four-Executable Spans

The four-exec family is concentrated in mixed helper/callback windows:

- `buydyno`
- `getonecarengine`
- `ctct`
- `practice`
- `joinhumantournament`
- `fbgettoken`

Representative shapes:

- `buydyno`:
  - `_global.objRace.startRace(...)`
  - `_global.objRace.init(DYNO)`
  - `garageDynoBuyCB(...)`
  - `garageDynoBuyCB(s)`

- `getonecarengine`:
  - `trace("director getOneCarEngineCB")`
  - `getOneCarEngineCB(d)`
  - `_global.objRace.startRace(...)`
  - `_global.objRace.init(_global.objRace.raceType)`

- `ctct`:
  - `ctCreateCB(s)`
  - `getOneCarEngineCB(d)`
  - `_global.objRace.startRace(...)`
  - `_global.objRace.initComputerRace(CTQ, VOID)`

- `practice`:
  - `_global.objRace.startRace(...)`
  - `_global.objRace.init(P)`
  - `getOneCarEngineCB(d)`
  - `practiceCreateCB(s)`

- `joinhumantournament`:
  - `getOneCarEngineCB(d)`
  - `htJoinTournamentCB(s, b, id_195)`
  - `_global.objRace.startRace(...)`
  - `htJoinTournamentCB(s, id_195, d)`

- `fbgettoken`:
  - `facebookToken = ...`
  - `facebookAPIKey = ...`
  - `openURL(...)`
  - `fbGetTokenCB(s)`

## Three-Executable Spans

The `3`-exec spans are:

- `ctrt`
- `ctst`
- `getinstalledenginepartbyaccountcar`
- `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]`

These are structurally different:

- `ctrt` mixes `ctRequestCB(...)` with `_global.objRace.initComputerRace(CT, b)`
- `ctst` mixes `guid = getAProp("sk")` with two `ctSaveCB(...)` forms
- `getinstalledenginepartbyaccountcar` ends with:
  - `getInstalledEnginePartsCB(s, d)`
  - `getInstalledEnginePartsCB(s)`
  - `genericWebCB(...)`
- the grouped late queue span contains only queue/stream maintenance:
  - `_global.gNetID.splice(...)`
  - `downloadCacheInProgress(...)`
  - `downloadInstallerUpdateFlash(...)`

## Single-Line Majority

`102` spans still expose exactly one executable line.

Representative examples:

- `getinfo` -> `getInfoCB(d)`
- `getuser` -> `getUserCB(d)`
- `changeemail` -> `changeEmailCB(s)`
- `getcode` -> `getCodeCB(s, gid)`
- `getcarcategories` -> `getCarCategoriesCB(d)`
- `systemswap` -> `systemSwapCB(s, d)`
- `teaminfo` -> `teamInfoCB(d)`
- `fbremovefacebook` -> `fbRemoveFacebookCB(s)`
- `cache` -> `downloadCacheDone()`
- `installer` is not in this group; it has two executable lines

So the one-line callback/helper model is still the dominant whole-file shape.

## Boundary

This pass is narrower than the action-token inventory from pass 15 and stricter
than callback counting from pass 8. It answers a different question:

- not just what action tokens exist
- not just what callback names exist
- but what visible executable lines each action span actually contains

That is the tightest whole-file crosswalk between the exported router spans and
their visible executable bodies.
