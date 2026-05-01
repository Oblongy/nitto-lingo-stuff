# Lscr-93 Pass 7 Selector And Queue Normalization

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-106\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.pass-block20264-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-106.pass-block3304-table.md`

Scope:
- This pass normalizes the fake bracketed reads in `Lscr-93` against the raw
  bytecode and the plain-array proof from `Lscr-106`.
- No invented symbolic field names are introduced.

## Core Rule

The broken lift is not exposing real field names in queue reads. It is
misprinting positional `Array` item selectors.

Plain-array proof comes from `Lscr-106.loadExternalValues`, where raw
`Lscr-106.bin` `0x578A..0x5803` shows:

- `... 3E 37 ...` first item
- `... 3F 37 ...` second item
- `... 58 00 02 37 ...` third item
- `... 58 00 03 37 ...` fourth item
- `... 58 00 04 37 ...` fifth item
- `... 58 00 05 37 ...` sixth item
- `... 58 00 06 37 ...` seventh item
- `... 58 00 07 37 ...` eighth item

So the only safe whole-file normalization in `Lscr-93` is positional:

- `3E 37` = first item
- `3F 37` = second item
- `58 00 02 37` = third item

This pass applies that rule only to the full selector chains. Bare `3E` or bare
`3F` elsewhere are not normalized by this pass.

## gNetID

The main `gNetID` chains in `Lscr-93` are:

### First item chain

Raw examples:

- `2BEC..2BEF`
- `2C1C..2C1F`
- `2C54..2C57`
- `2C9A..2C9D`

All share:

```text
... 37 3E 37
```

The current lift misprints this as `_global.gNetID[_global][VOID]`.

Safe normalization:

- first item of the current `gNetID` entry

Whole-file uses:

- primary action case key at [rightful.ls:72](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:72>)
- protocol-error action text at [52](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:52>), [61](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:61>), [65](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:65>)
- `genericWebCB` action argument at [1341](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1341>)
- late `lastAction` capture at [1360](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1360>)

### Second item chain

Raw example:

- `2C67..2C6D`

Shared chain:

```text
... 37 3F 37
```

Safe normalization:

- second item of the current `gNetID` entry

Whole-file uses:

- late `netError(...)` argument at `0x2C5D..0x2C6D`
- earlier `netDone`, `netError`, `netTextResult` paths in the prologue region
  also use the same hidden queue-entry payload even though the current lift
  collapses those reads into `_global.gNetID[_global]`

### gNetID shape

Given the writer-side `Array` construction in `Lscr-109` and the reader-side
chains above, the strongest whole-file-safe model remains:

```text
gNetID entry = Array(first item, second item)
```

where:

- first item = action token
- second item = async web/result handle

## fileNetID

The `fileNetID` chains in `Lscr-93` are:

### First item chain

Raw examples:

- `2CDA..2CDF`
- `2D0D..2D12`
- `2D55..2D5A`

Shared chain:

```text
... 37 3E 37
```

Safe normalization:

- first item of the current `fileNetID` entry

Whole-file uses:

- `cache` test at [1368](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1368>)
- `installer` test at [1371](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1371>)
- file action case key at [1374](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1374>)

### Second item chain

Raw examples:

- `2D9D..2D9F`
- `2DC1..2DC3`
- `2E01..2E03`
- `2E19..2E1B`
- `2E3C..2E3E`

Shared chain:

```text
... 37 3F 37
```

Safe normalization:

- second item of the current `fileNetID` entry

This is the file payload later passed to:

- `loadLocalAvatar(...)`
- `loadLocalUgg(...)`
- `runInstaller(...)`

### Third item chain

Raw examples:

- `2CF8..2CFC`
- `2D2B..2D2F`
- `2D44..2D48`
- `2D81..2D85`
- `2DE5..2DE9`

Shared chain:

```text
... 58 00 02 37
```

The lift misprints this as `[netDone]`, but the plain-array proof from
`Lscr-106` shows it is the third positional item, not a field named `netDone`.

Safe normalization:

- third item of the current `fileNetID` entry

Whole-file uses:

- `getStreamStatus(...)` feed at [1369](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1369>) and [1372](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1372>)
- `netError(...)` feed at [1385](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1385>) and [1399](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1399>)

### fileNetID shape

Given the writer-side `Array(..., ..., ...)` construction in `Lscr-106` and
the chains above, the strongest whole-file-safe model remains:

```text
fileNetID entry = Array(first item, second item, third item)
```

where:

- first item = file action tag
- second item = local payload/context
- third item = async download/stream handle

## Whole-File Lift Corrections

These are the strongest direct corrections to the current `Lscr-93` lift:

- [rightful.ls:52](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:52>)
  `_global.gNetID[_global][VOID]`
  -> current `gNetID` first item

- [rightful.ls:72](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:72>)
  `case _global.gNetID[_global][VOID]`
  -> case on current `gNetID` first item

- [rightful.ls:1341](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1341>)
  `genericWebCB(_global.gNetID[_global][VOID], ...)`
  -> `genericWebCB(current gNetID first item, ...)`

- [rightful.ls:1360](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1360>)
  `lastAction = _global.gNetID[_global][VOID]`
  -> `lastAction = current gNetID first item`

- [rightful.ls:1369](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1369>)
  `_global.fileNetID[_global][netDone]`
  -> current `fileNetID` third item

- [rightful.ls:1387](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1387>)
  `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 1)`
  -> raw `2D90..2DB0` shows `loadLocalAvatar(second item, first item, true)`

- [rightful.ls:1392](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1392>)
  -> raw `2DB4..2DD4` shows `loadLocalAvatar(second item, first item, false)`

- [rightful.ls:1401](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1401>)
  `loadLocalUgg(_global.fileNetID[_global], 1)`
  -> raw `2DF4..2E08` shows `loadLocalUgg(second item, true)`

- [rightful.ls:1406](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1406>)
  -> raw `2E0C..2E20` shows `loadLocalUgg(second item, false)`

- [rightful.ls:1416](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1416>)
  `runInstaller(_global.fileNetID[_global])`
  -> raw `2E2F..2E42` shows `runInstaller(second item)`

## What Not To Normalize

The splice sites are not safe to normalize with the same rule:

- `2CAC..2CB0`
- `2E50..2E54`

Those use bare `3F` before `3A 00 02`, not the full queue-item read chain
`... 37 3F 37`. So:

- [rightful.ls:1362](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1362>)
  `_global.gNetID.splice(_global, TRUE)`
- [rightful.ls:1418](</C:/Users/Dilldo/Nitto/Lingo Stuff/reconstructed (1)/Lscr-93/rightful.ls:1418>)
  `_global.fileNetID.splice(_global, TRUE)`

stay mechanically suspect. This pass does not rename those operands.

## Preserved Contradiction

The `getavatarage` / `getteamavatarage` path remains contradictory and should
stay that way until another block proves more.

Raw `Lscr-93` call sites are explicit:

- `0x0B6C..0x0B83`: `compareAvatarAge(checkedForOneClient.getAProp("tids"), "avatars")`
- `0x0B87..0x0B9E`: `compareAvatarAge(checkedForOneClient.getAProp("tids"), "teamAvatars")`

But downstream `Lscr-106.loadLocalAvatar` treats the payload later threaded into
`fileNetID` as nested indexable data, not as a plain scalar id. So:

- `"tids"` is a real property name in `Lscr-93`
- the exact source-level shape of that payload remains unresolved

This pass preserves that contradiction instead of flattening it into a fake
field name or a guessed source type.
