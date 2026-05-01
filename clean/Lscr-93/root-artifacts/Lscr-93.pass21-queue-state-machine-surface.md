# Lscr-93 Pass 21 Queue State Machine Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`

Scope:
- This pass treats the `gNetID` and `fileNetID` regions as whole-file queue
  state machines.
- It keeps the positional-selector normalization byte-backed and explicit.

## Whole-File Queue Counts

Visible whole-file queue/state-machine surface counts:

- `14` lines mention `_global.gNetID`
- `20` lines mention `_global.fileNetID`
- `2` lines mention `netDone(`
- `9` lines mention `netError(`
- `3` lines mention `netTextResult(`
- `2` lines mention `getStreamStatus(`
- `2` lines mention `.splice(`
- `4` lines mention `showConnectionErrorCB(`

`lastAction` has one visible runtime read and one visible runtime write:

- read in the timeout surface at `0x021C`
- write from `gNetID` first item at `0x2C9E`

## Positional Selector Legend

The raw annotated disassembly confirms the same positional selectors already
isolated in earlier normalization work:

- `3E 37` = first item
- `3F 37` = second item
- `58 00 02 37` = third item

In the queue regions, that yields:

- `gNetID = Array(first item, second item)`
- `fileNetID = Array(first item, second item, third item)`

So the lift spellings `[VOID]` and `[netDone]` are mechanical mislabels for
positional item reads, not real field names.

## `gNetID` Whole-File Phases

### 1. Queue-length gate

Visible lift sites:

- `_global.gNetID -- 0x001D`
- `if not (_global < _global.gNetID.length) then -- 0x0094`

This is the whole-file entry gate for the web queue poll loop.

### 2. Early second-item status probes

The lift at `0x00CF` is mechanically broken:

- `if not (netDone(_global.gNetID[_global])(netError[_global.gNetID[_global]]) = OK) then -- 0x00CF`

Raw `0x00A3..0x00CC` shows that both probes actually read the `gNetID` second
item through `37 3F 37` before calling the probe functions:

- `netDone(second item)` via `00A3..00B6`
- `netError(second item)` via `00B9..00CC`

Then raw `0x00D7..0x00EA` shows:

- `netTextResult(second item)` stored into local `netDone`

So the tight whole-file read is:

- `gNetID` second item is the net/result handle used by `netDone`,
  `netError`, and `netTextResult`

### 3. Early protocol-error surface

The first item is exposed in the three protocol error messages:

- `Error: 010 -- 0x0168`
- `Error: 001 -- 0x01BD`
- `Error: 002 -- 0x01EE`

All three build:

```text
"Connection protocol could not be established. Action:" & gNetID first item
```

So the queue first item is already visible as an action token before the main
router case runs.

### 4. Early action dispatch

The main early router case is:

- `case _global.gNetID[_global][VOID] of -- 0x0232`

Raw `2C14..2C20` later repeats the same first-item selector chain
`... 37 3E 37 ...`, which keeps the first-item read byte-backed across both
early and late queue regions.

### 5. Late bridge and cleanup

The late `gNetID` region is not just a tail cleanup. It is its own bridge
surface:

- `genericWebCB(gNetID first item, s, d) -- 0x2C0D`
- `case gNetID first item of -- 0x2C20`
- late connection-error surface at `0x2C78`
- `if not (gNetID first item <> gettotalnewmail) then -- 0x2C8B`
- `lastAction = gNetID first item -- 0x2C9E`
- `_global.gNetID.splice(_global, TRUE) -- 0x2CB3`

Raw `2C5D..2C78` shows the late error message uses:

- first item in the `"Action:"` text
- second item inside `netError(second item)`

So the late queue bridge still preserves the same first-item / second-item
split as the early poll loop.

## `fileNetID` Whole-File Phases

### 1. Queue-length gate

Visible lift site:

- `if not (_global < _global.fileNetID.length) then -- 0x2CD0`

This is the file/download queue entry gate.

### 2. Pre-dispatch progress probes

Before the main `fileNetID` case, two tags are special-cased for progress
polling:

- `cache` -> `downloadCacheInProgress(getStreamStatus(fileNetID third item)) -- 0x2D03`
- `installer` -> `downloadInstallerUpdateFlash(getStreamStatus(fileNetID third item)) -- 0x2D36`

Raw proof:

- `2CEB..2D03` uses `58 00 02 37` before `getStreamStatus`
- `2D1E..2D36` does the same

So the third item is the stream/net handle used by `getStreamStatus(...)`.

### 3. Tag dispatch

The main file queue router is:

- `case _global.fileNetID[_global][VOID] of -- 0x2D5B`

Visible tag targets:

- `avatars`
- `teamavatars`
- `ugg`
- `cache`
- `installer`

This is a first-item dispatch surface, not a named-field dispatch surface.

### 4. Avatar completion branch

The lift shows:

- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 1) -- 0x2DB0`
- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 0) -- 0x2DD4`

Raw `2D94..2DB0` and `2DB8..2DD4` prove the real positional order is:

- second item via `3F 37`
- first item via `3E 37`
- boolean flag

So the normalized read is:

- `loadLocalAvatar(fileNetID second item, fileNetID first item, true/false)`

### 5. Ugg completion branch

The lift shows:

- `loadLocalUgg(_global.fileNetID[_global], 1) -- 0x2E08`
- `loadLocalUgg(_global.fileNetID[_global], 0) -- 0x2E20`

Raw `2DF8..2E08` and `2E10..2E20` prove the call actually reads the second item
through `3F 37` before the boolean flag.

So the normalized read is:

- `loadLocalUgg(fileNetID second item, true/false)`

### 6. Installer completion branch

The lift shows:

- `runInstaller(_global.fileNetID[_global]) -- 0x2E42`

Raw `2E33..2E42` proves it reads the second item through `3F 37` before the
call.

So the normalized read is:

- `runInstaller(fileNetID second item)`

### 7. Unified cleanup

All `fileNetID` branches converge into:

- `_global.fileNetID.splice(_global, TRUE) -- 0x2E57`

This mirrors the earlier `gNetID.splice(...)` cleanup pattern.

## Tightest Whole-File Split

The queue surfaces now read as two different state machines:

- `gNetID`
  - first item = action token
  - second item = net/result handle
  - early poll loop plus late `genericWebCB(...)` bridge

- `fileNetID`
  - first item = tag
  - second item = local payload
  - third item = stream/net handle
  - pre-dispatch progress probes plus completion helpers plus splice cleanup

That is tighter than treating the late tail as a loose bundle of helper calls.
The whole file exposes two separate queue machines with different item counts
and different pre-dispatch behavior.
