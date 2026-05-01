# Lscr-93 Pass 12 Side-Effect And Helper Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass8-callback-surface.md`

Scope:
- This pass inventories the whole-file side-effect and helper surface that is
  not just ordinary `sprite(flashSP).<callback>(...)` fanout.
- It keeps `genericWebCB` out of the non-sprite helper set, because the current
  lift shows `sprite(flashSP).genericWebCB(...) -- 0x2C0D`.

## Count Surface

Whole-file helper/sink counts from the current lift:

- `_global.objRace.startRace` = `5`
- `trace` = `5`
- `sprite(flashSP).showConnectionErrorCB` = `4`
- `_global.objRace.init` = `3`
- `_global.objRace.initComputerRace` = `2`
- `CheckNittoProcessesCB` = `2`
- `loadLocalAvatar` = `2`
- `loadLocalUgg` = `2`
- `connectSocket` = `1`
- `downloadCacheInProgress` = `1`
- `downloadInstallerUpdateFlash` = `1`
- `fetchCacheXMLDone` = `1`
- `runInstaller` = `1`

This surface is much smaller than the `sprite(flashSP)` callback ladder, but it
is where the file performs most of its direct stateful work.

## Bootstrap / Error Surface

The earliest side-effect family is bootstrap/process-check plus direct protocol
error reporting.

Exact sites:

- `trace(netTextResult(_global.checkProcessResult)) -- 0x005F`
- `CheckNittoProcessesCB(netTextResult(_global.checkProcessResult)) -- 0x0074`
- `CheckNittoProcessesCB("1") -- 0x0082`
- `sprite(flashSP).showConnectionErrorCB("Protocol Error", ... " (Error: 010)") -- 0x0168`
- `sprite(flashSP).showConnectionErrorCB("Protocol Error", ... " (Error: 001)") -- 0x01BD`
- `sprite(flashSP).showConnectionErrorCB("Protocol Error", ... " (Error: 002)") -- 0x01EE`
- `sprite(flashSP).showConnectionErrorCB("Session Timed Out", ... _global.lastAction) -- 0x021C`

This confirms that the file starts with direct error/reporting sinks before the
main action ladder.

## Process-Parse Helpers

Two distinct parse/helper chains appear:

- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x04C8`
- `fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF`

and later:

- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x112E`
- `netError = checkProcessResult.makeList().n2 -- 0x113E`

So the parsed-`d` helper chain is reused at least twice, but for different
downstream sinks.

## Socket / Session Bridge

One direct helper call sits at the login/session boundary:

- `connectSocket() -- 0x05A2`

This is a whole-file singleton in the current lift.

## `_global.objRace` Mutation Surface

The strongest stateful helper family is the `_global.objRace` call surface.

### startRace

There are `5` exact `startRace(d, t)` sites:

- `0x10F7`
- `0x1E7E`
- `0x2032`
- `0x217A`
- `0x22C4`

The lift prints all five in the same argument shape:

- `_global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t"))`

### init

There are `3` visible `init(...)` sites:

- `_global.objRace.init(DYNO) -- 0x1108`
- `_global.objRace.init(_global.objRace.raceType) -- 0x1E95`
- `_global.objRace.init(P) -- 0x218B`

### initComputerRace

There are `2` visible `initComputerRace(...)` sites:

- `_global.objRace.initComputerRace(CTQ, VOID) -- 0x2044`
- `_global.objRace.initComputerRace(CT, checkedForOneClient.getAProp("b")) -- 0x20A4`

So the `_global.objRace` surface is not one generic helper. It splits into
three exact call families.

## Debug Trace Surface

The whole-file `trace(...)` surface is small and explicit:

- `trace(netTextResult(_global.checkProcessResult)) -- 0x005F`
- `trace("director getOneCarEngineCB") -- 0x1E2E`
- `trace("here!") -- 0x282F`
- `trace("info list!") -- 0x283A`
- `trace(OK) -- 0x2845`

These are direct debug/trace sinks rather than callback dispatch.

## Direct Property-To-Variable Assignments

The current lift exposes a small group of one-off assignments that store
`checkedForOneClient.getAProp(...)` values directly into locals or globals:

- `aid = checkedForOneClient.getAProp("aid") -- 0x0532`
- `guid = checkedForOneClient.getAProp("guid") -- 0x0546`
- `installerURL = checkedForOneClient.getAProp("url") -- 0x06BB`
- `installerFile = checkedForOneClient.getAProp("fn") -- 0x06CF`
- `installerMD5 = checkedForOneClient.getAProp("md5") -- 0x06E3`
- `facebookID = checkedForOneClient.getAProp("f") -- 0x070E`
- `guid = checkedForOneClient.getAProp("sk") -- 0x20DA`
- `facebookToken = checkedForOneClient.getAProp("t") -- 0x2797`
- `facebookAPIKey = checkedForOneClient.getAProp("a") -- 0x27AB`
- `OK = checkedForOneClient.getAProp("d") -- 0x2821`

The current lift itself exposes the duplicate target name `guid` for two
different property reads. This pass leaves that contradiction visible.

## File Queue Completion Surface

The late file queue tail contains the whole-file local completion helpers:

- `downloadCacheInProgress(getStreamStatus(_global.fileNetID[_global][netDone])) -- 0x2D03`
- `downloadInstallerUpdateFlash(getStreamStatus(_global.fileNetID[_global][netDone])) -- 0x2D36`
- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 1) -- 0x2DB0`
- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 0) -- 0x2DD4`
- `loadLocalUgg(_global.fileNetID[_global], 1) -- 0x2E08`
- `loadLocalUgg(_global.fileNetID[_global], 0) -- 0x2E20`
- `runInstaller(_global.fileNetID[_global]) -- 0x2E42`

Per pass 7, these queue arguments need selector normalization before they are
read as positional array items. This pass only inventories the visible helper
surface.

## Boundary

This side-effect/helper surface is narrower than the `sprite(flashSP)` callback
surface from pass 8, but it is where the file:

- opens socket/session flow
- mutates `_global.objRace`
- stores one-off property values
- emits traces
- handles local download completion

That makes it a separate whole-file layer worth tracking directly.
