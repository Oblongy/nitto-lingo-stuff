# Lscr-93 Pass 25 Non-Sprite Call Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`

Scope:
- This pass inventories the visible non-`sprite(flashSP).<callback>(...)`
  call-like surface in the current lift.
- It uses visible lines that begin with a call-like token and `(`, excluding the
  `sprite(flashSP).<callback>(...)` family already covered in earlier passes.
- It does not claim these are the only runtime calls in the raw bytecode; it is
  only a lift-surface pass.

## Whole-File Counts

Under that visible-call filter, the current lift exposes:

- `43` non-sprite call-like sites
- `23` distinct callee names
- `31` distinct visible top-level argument signatures
- `36` distinct `(callee name, signature)` pairs

So the non-callback executable surface is much smaller than the `206` visible
`sprite(flashSP)` callback sites, but it is still not just a handful of one-off
 helpers.

## Callee-Name Counts

Whole-file visible callee-name counts:

- `trace` -> `5`
- `_global.objRace.startRace` -> `5`
- `_global.objRace.init` -> `3`
- `openURL` -> `3`
- `sprite` -> `3`
- `_global.objRace.initComputerRace` -> `2`
- `CheckNittoProcessesCB` -> `2`
- `checkProcessResult.parseString` -> `2`
- `compareAvatarAge` -> `2`
- `loadLocalAvatar` -> `2`
- `loadLocalUgg` -> `2`
- `runInstaller` -> `1`
- `netDone` -> `1`
- `implicit_callee_0x2C75` -> `1`
- `downloadCacheDone` -> `1`
- `downloadInstallerUpdateFlash` -> `1`
- `downloadCacheInProgress` -> `1`
- `connectSocket` -> `1`
- `_system.gc` -> `1`
- `_movie.go` -> `1`
- `_global.gNetID.splice` -> `1`
- `fetchCacheXMLDone` -> `1`
- `_global.fileNetID.splice` -> `1`

This immediately splits the non-callback surface into a few repeated clusters:

- race bootstrap helpers
- parser / loader helpers
- queue completion helpers
- misc bootstrap / UI helpers

## Arity Split

Visible top-level arity split:

- arity `0` -> `3` call sites
- arity `1` -> `23` call sites
- arity `2` -> `15` call sites
- arity `3` -> `2` call sites

No non-sprite call-like site in the current lift exceeds arity `3`.

### Zero-arg sites

The zero-arg family is exact and tiny:

- `_system.gc() -- 0x00A2`
- `connectSocket() -- 0x05A2`
- `downloadCacheDone() -- 0x2E2B`

## Repeated Name+Signature Pairs

Only a few visible `(callee, signature)` pairs repeat:

- `_global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t"))` -> `5`
- `sprite(flashSP)` -> `3`
- `checkProcessResult.parseString(checkedForOneClient.getAProp("d"))` -> `2`

Everything else in the non-sprite call-like surface is a singleton
`(callee, signature)` pair.

So this surface is even more concentrated than the callback ladder once the
actual helper signatures are separated.

## Race Bootstrap Cluster

The visible race/bootstrap helper cluster is:

- `_global.objRace.startRace(d, t)` -> `5`
- `_global.objRace.init(DYNO)` -> `1`
- `_global.objRace.init(_global.objRace.raceType)` -> `1`
- `_global.objRace.init(P)` -> `1`
- `_global.objRace.initComputerRace(CTQ, VOID)` -> `1`
- `_global.objRace.initComputerRace(CT, b)` -> `1`

That is `10` visible non-callback helper sites concentrated in race/bootstrap
work alone.

## Parser / Loader Cluster

Visible parser/loader sites:

- `checkProcessResult.parseString(d)` -> `2`
- `fetchCacheXMLDone(checkProcessResult.makeList().n2)` -> `1`
- `compareAvatarAge(tids, avatars)` -> `1`
- `compareAvatarAge(tids, teamAvatars)` -> `1`
- `CheckNittoProcessesCB(netTextResult(_global.checkProcessResult))` -> `1`
- `CheckNittoProcessesCB("1")` -> `1`

This is the main non-callback surface where incoming text or parsed structures
are handed into later UI/runtime code without going through a
`sprite(flashSP).<callback>(...)` site first.

## Queue Completion Cluster

Visible queue-completion helper sites:

- `downloadCacheInProgress(getStreamStatus(_global.fileNetID[_global][netDone])) -- 0x2D03`
- `downloadInstallerUpdateFlash(getStreamStatus(_global.fileNetID[_global][netDone])) -- 0x2D36`
- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 1) -- 0x2DB0`
- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 0) -- 0x2DD4`
- `loadLocalUgg(_global.fileNetID[_global], 1) -- 0x2E08`
- `loadLocalUgg(_global.fileNetID[_global], 0) -- 0x2E20`
- `runInstaller(_global.fileNetID[_global]) -- 0x2E42`
- `_global.gNetID.splice(_global, TRUE) -- 0x2CB3`
- `_global.fileNetID.splice(_global, TRUE) -- 0x2E57`
- `implicit_callee_0x2C75(sprite(flashSP).showConnectionErrorCB, ...) -- 0x2C78`

This is the strongest whole-file helper cluster outside the race bootstrap
family.

## UI / Trace / URL Cluster

Visible UI/trace/open helper sites:

- `trace(...)` -> `5`
- `openURL(...)` -> `3`
- `sprite(flashSP)` -> `3`
- `_movie.go(TRUE) -> 1`

This cluster is small, but it is the main non-callback bridge into UI/browser
side effects.

## Boundary

This pass preserves the current lift surface exactly, including mechanically
unstable queue-argument forms such as:

- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 1)`
- `runInstaller(_global.fileNetID[_global])`

Earlier queue passes already proved those are positional-selector misrenders,
but this pass does not rewrite them. Its job is the visible non-sprite call
surface as printed by the current lift.
