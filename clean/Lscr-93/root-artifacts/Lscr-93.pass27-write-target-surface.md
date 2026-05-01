# Lscr-93 Pass 27 Write-Target Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`

Scope:
- This pass inventories the visible direct assignment surface in the current
  `Lscr-93` lift.
- It only counts visible `target = value -- 0x...` lines.
- It excludes conditions such as `if not (... = ...) then`, `case` lines, and
  non-assignment helper calls.

## Whole-File Counts

The current lift exposes exactly:

- `30` visible direct write sites
- `20` distinct visible assignment targets

So the whole-file state-write surface is very small compared with:

- `159` action spans
- `206` visible `sprite(flashSP)` callback call sites

## Target Counts

Visible write counts per target:

- `checkProcessResult` -> `4`
- `checkedForOneClient` -> `3`
- `cursor` -> `3`
- `_global` -> `2`
- `netDone` -> `2`
- `guid` -> `2`
- `aid` -> `1`
- `cp` -> `1`
- `cw` -> `1`
- `cwc` -> `1`
- `installerURL` -> `1`
- `installerFile` -> `1`
- `installerMD5` -> `1`
- `facebookID` -> `1`
- `netError` -> `1`
- `raceType` -> `1`
- `facebookToken` -> `1`
- `facebookAPIKey` -> `1`
- `OK` -> `1`
- `lastAction` -> `1`

Only `6` targets repeat at all:

- `checkProcessResult`
- `checkedForOneClient`
- `cursor`
- `_global`
- `netDone`
- `guid`

Everything else is a singleton visible write target.

## Value-Source Family Counts

Visible write values split into these source families:

- `10` direct property reads
- `4` literal `VOID`
- `3` `encrypt(...)` transforms
- `2` literal `TRUE`
- `2` `"propList(" & netDone & ")"` string builds
- `2` `new xtra("xmlparser")` constructions
- `1` `decrypt(netDone)` transform
- `1` literal `agreetoterms`
- `1` literal `HTQ`
- `1` literal `-1`
- `1` `checkProcessResult.makeList().n2`
- `1` `netTextResult(_global.gNetID[_global])`
- `1` queue first-item read from `_global.gNetID[_global][VOID]`

So the assignment surface is dominated by just three source families:

- property extraction
- explicit reset to `VOID`
- bridge/materializer transforms

## Property-Read Writes

`10` write sites are direct `checkedForOneClient.getAProp(...)` extraction:

- `aid = getAProp("aid") -- 0x0532`
- `guid = getAProp("guid") -- 0x0546`
- `installerURL = getAProp("url") -- 0x06BB`
- `installerFile = getAProp("fn") -- 0x06CF`
- `installerMD5 = getAProp("md5") -- 0x06E3`
- `facebookID = getAProp("f") -- 0x070E`
- `guid = getAProp("sk") -- 0x20DA`
- `facebookToken = getAProp("t") -- 0x2797`
- `facebookAPIKey = getAProp("a") -- 0x27AB`
- `OK = getAProp("d") -- 0x2821`

This is the largest visible write family in the file.

## Reset Surface

Only two visible targets are ever reset to `VOID`:

- `_global = VOID -- 0x0084`
- `_global = VOID -- 0x2CC0`
- `checkProcessResult = VOID -- 0x04E1`
- `checkProcessResult = VOID -- 0x1143`

That makes `VOID` reset behavior very narrow in the current lift.

Important whole-file fact:

- there are **no** visible dotted `_global.* = ...` assignment lines in the
  current lift
- the only visible `_global` assignment sites are the two bare `_global = VOID`
  resets above

## Transform-Build Writes

The bridge/materializer write family is:

- `netDone = netTextResult(_global.gNetID[_global]) -- 0x00EA`
- `netDone = decrypt(netDone) -- 0x012B`
- `checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0101`
- `checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0180`
- `checkProcessResult = new xtra("xmlparser") -- 0x04AD`
- `checkProcessResult = new xtra("xmlparser") -- 0x1113`
- `netError = checkProcessResult.makeList().n2 -- 0x113E`
- `lastAction = _global.gNetID[_global][VOID] -- 0x2C9E`

This is the strongest visible bridge-state write cluster in the whole file.

## Small UI/Flag Write Cluster

A small late UI/flag surface also stands out:

- `cursor = agreetoterms -- 0x2E8E`
- `cursor = TRUE -- 0x2EBE`
- `cursor = -1 -- 0x2ED2`
- `raceType = HTQ -- 0x2299`

These do not recur elsewhere as target families.

## Preserved Contradiction

The duplicate `guid` write target stays explicit:

- `guid = checkedForOneClient.getAProp("guid") -- 0x0546`
- `guid = checkedForOneClient.getAProp("sk") -- 0x20DA`

This pass does not resolve whether that is a real semantic alias,
mechanical-lift target reuse, or something else. It only records the visible
write surface as exported.
