# Lscr-93 Pass 11 Response Source Split

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass7-selector-and-queue-normalization.md`

Scope:
- This pass splits the whole file by response-source family.
- It is meant to prevent the entire file from being treated as one uniform
  `checkedForOneClient.getAProp(...)` ladder.

## Whole-File Counts

Counts from the current mechanical lift:

- `457` lines contain `checkedForOneClient.getAProp(...)`
- `4` lines assign `checkedForOneClient = ...`
- `2` lines call `checkProcessResult.parseString(...)`
- `2` lines call `checkProcessResult.makeList()`
- `14` lines mention `_global.gNetID`
- `20` lines mention `_global.fileNetID`
- `1` line mixes `checkedForOneClient.getAProp(...)` with `netError.!ATTRIBUTES`

These counts already show that the file has multiple response-source layers.

## Source Family A: Process-Check Bootstrap

The earliest source family is not the main property ladder at all.

Bootstrap lines:

- `if not (_global.checkedForOneClient = VOID) then -- 0x001B`
- `checkedForOneClient = TRUE -- 0x0033`
- `if not (netError(_global.checkProcessResult) = OK) then -- 0x0047`
- `trace(netTextResult(_global.checkProcessResult)) -- 0x005F`
- `CheckNittoProcessesCB(netTextResult(_global.checkProcessResult)) -- 0x0074`
- `netDone(_global.checkProcessResult) -- 0x0087`

This is a separate bootstrap/process-check surface before the main `gNetID`
router starts.

## Source Family B: `gNetID` Text-to-PropList Bridge

The next source family is the `gNetID` bridge that turns queued text into the
property surface later read through `checkedForOneClient.getAProp(...)`.

Representative lines:

- `if not (netDone(_global.gNetID[_global])(netError[_global.gNetID[_global]]) = OK) then -- 0x00CF`
- `netDone = netTextResult(_global.gNetID[_global]) -- 0x00EA`
- `checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0101`
- `checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0180`
- `case _global.gNetID[_global][VOID] of -- 0x0232`

So the whole-file `checkedForOneClient.getAProp(...)` layer is downstream of
this explicit text-to-`propList(...)` bridge.

## Source Family C: Main Property-Bag Ladder

This is the dominant whole-file family.

Representative sites:

- `loginCB(s, d, at, am) -- 0x05E8`
- `getInfoCB(d) -- 0x07BF`
- `activatePurchaseCB(s, m, p, ma, va, d) -- 0x0A92`
- `_global.objRace.startRace(d, t) -- 0x10F7`
- `teamGetInfoCB(s, d) -- 0x1C9E`
- `getElectionPhaseCB(TRUE, p, t, i) -- 0x25DA`
- `acceptTestDriveCB(s, h, m, p, d) -- 0x291E`
- `getInstalledEnginePartsCB(s, d) -- 0x2BB0`

This is the only family that covers most of the action ladder, but it is not
the only family in the file.

## Source Family D: Parsed Sub-Objects From `d`

Two sites explicitly parse the `d` property into a separate object and then use
`.makeList().n2` off that parsed result.

Early site:

- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x04C8`
- `fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF`

Garage site:

- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x112E`
- `netError = checkProcessResult.makeList().n2 -- 0x113E`

So not every `d` consumer is a direct callback argument. Some branches create a
secondary parsed object first.

## Source Family E: Mixed Property + Attribute Site

One callback line mixes the `checkedForOneClient` property bag with
`netError.!ATTRIBUTES`.

Exact site:

- `sprite(flashSP).garageDynoBuyCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), netError.!ATTRIBUTES.e, netError.!ATTRIBUTES.u, netError.!ATTRIBUTES.ad, netError.!ATTRIBUTES.sl, netError.!ATTRIBUTES.n) -- 0x119F`

This is the only whole-file line where the current lift visibly combines those
two response-source surfaces in one callback call.

## Source Family F: Late `gNetID` Generic Callback

The late web-queue tail still uses fresh `checkedForOneClient` properties, but
the action selector comes from the queued `gNetID` entry, not from a fresh
property read.

Exact site:

- `sprite(flashSP).genericWebCB(_global.gNetID[_global][VOID], checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2C0D`

Then the file pivots to queue cleanup:

- `if not (_global.gNetID[_global][VOID] <> gettotalnewmail) then -- 0x2C8B`
- `lastAction = _global.gNetID[_global][VOID] -- 0x2C9E`
- `_global.gNetID.splice(_global, TRUE) -- 0x2CB3`

So this tail is neither a pure `getAProp(...)` callback nor a pure queue-only
callback. It is a mixed bridge.

## Source Family G: File Queue / Stream-Handle Tail

After the main `gNetID` cleanup, the file switches to the file queue and stops
using fresh `checkedForOneClient.getAProp(...)` reads.

Exact sites:

- `if not (_global.fileNetID[_global][VOID] = cache) then -- 0x2CE3`
- `downloadCacheInProgress(getStreamStatus(_global.fileNetID[_global][netDone])) -- 0x2D03`
- `if not (_global.fileNetID[_global][VOID] = installer) then -- 0x2D16`
- `downloadInstallerUpdateFlash(getStreamStatus(_global.fileNetID[_global][netDone])) -- 0x2D36`
- `if not (netError(_global.fileNetID[_global][netDone]) = OK) then -- 0x2D8C`
- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 1) -- 0x2DB0`
- `loadLocalUgg(_global.fileNetID[_global], 1) -- 0x2E08`
- `runInstaller(_global.fileNetID[_global]) -- 0x2E42`
- `_global.fileNetID.splice(_global, TRUE) -- 0x2E57`

Per pass 7, these queue reads need selector normalization before they are read
as positional array items. But even before that normalization, this tail is a
separate response-source family from the main property ladder.

## Whole-File Correction

The whole-file response path is not:

```text
net text -> checkedForOneClient.getAProp(...) everywhere
```

It is closer to:

```text
process check
-> gNetID net text
-> propList(...) / checkedForOneClient
-> main getAProp(...) ladder
-> one mixed property/attribute callback site
-> late gNetID generic callback bridge
-> fileNetID stream-handle tail
```

That split is export-backed in the current mechanical lift and keeps the late
queue helpers from being flattened into the main `checkedForOneClient`
property-bag surface.
