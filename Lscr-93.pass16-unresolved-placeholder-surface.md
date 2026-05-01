# Lscr-93 Pass 16 Unresolved Placeholder Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass7-selector-and-queue-normalization.md`

Scope:
- This pass inventories the unresolved placeholder surface still visible in the
  current mechanical lift.
- It does not normalize placeholders beyond what earlier passes already proved.

## Raw Placeholder Counts

Visible whole-file counts in the current lift:

- `id_195` -> `4` lines
- `literal_59` -> `3` lines
- `literal_60` -> `3` lines
- `literal_62` -> `3` lines
- `literal_70` -> `3` lines
- `literal_74` -> `3` lines
- `VOID` -> `46` lines
- `0x3F property-chain marker` -> `11` lines
- `0x37 property-chain marker` -> `2` lines
- `implicit_callee_0x2C75` -> `1` line

These placeholders are not all the same kind of unresolved artifact.

## `id_195`

`id_195` appears only in late race/tournament callback arguments:

- `raceGetTwoRacersCarsCB(checkedForOneClient.getAProp("s"), id_195) -- 0x1EFB`
- `getRacersCarsCB(checkedForOneClient.getAProp("s"), id_195) -- 0x1F61`
- `htJoinTournamentCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), id_195) -- 0x228F`
- `htJoinTournamentCB(checkedForOneClient.getAProp("s"), id_195, checkedForOneClient.getAProp("d")) -- 0x22F6`

So `id_195` is concentrated in one late race/tournament strip, not scattered
through the whole file.

## `literal_*`

The `literal_*` family is confined to the early login/bootstrap chain:

- `literal_59`
- `literal_60`
- `literal_62`
- `literal_70`
- `literal_74`

Each appears in three visible lift lines:

- one pass26 condition comment
- one executable `if not (...) then` branch
- one pass27 false-path comment

This family does not appear later in the file.

## `VOID` Is Overloaded

The current lift prints `VOID` in multiple distinct roles. The `46` total lines
split by visible role as follows:

- gate/reset role -> `5` lines
- comparator role -> `24` lines
- selector-placeholder role -> `14` lines
- explicit-argument role -> `2` lines
- standalone raw token -> `1` line

### Gate / Reset role

Representative lines:

- `if not (_global.checkedForOneClient = VOID) then -- 0x001B`
- `_global = VOID -- 0x0084`
- `checkProcessResult = VOID -- 0x04E1`
- `checkProcessResult = VOID -- 0x1143`
- `_global = VOID -- 0x2CC0`

### Comparator role

This is the mid-file `s > VOID` strip already isolated in pass 13:

- `if not (checkedForOneClient.getAProp("s") > VOID) then -- 0x1788`
- `if not (checkedForOneClient.getAProp("s") > VOID) then -- 0x180D`
- `if not (checkedForOneClient.getAProp("s") > VOID) then -- 0x187D`
- `if not (checkedForOneClient.getAProp("s") > VOID) then -- 0x18E0`
- `if not (checkedForOneClient.getAProp("s") > VOID) then -- 0x19EB`
- `if not (checkedForOneClient.getAProp("s") > VOID) then -- 0x1A4E`

The count of `24` includes the paired pass26/pass22/pass27 comment lines around
those six executable branches.

### Selector-placeholder role

This is the bad bracket placeholder already normalized in pass 7:

- `_global.gNetID[_global][VOID]`
- `_global.fileNetID[_global][VOID]`

Representative lines:

- `case _global.gNetID[_global][VOID] of -- 0x0232`
- `sprite(flashSP).genericWebCB(_global.gNetID[_global][VOID], ... ) -- 0x2C0D`
- `case _global.fileNetID[_global][VOID] of -- 0x2D5B`
- `loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 1) -- 0x2DB0`

This role is structurally different from both reset and comparator `VOID`.

### Explicit-argument role

Two visible sites pass `VOID` directly as an argument:

- `_global.objRace.initComputerRace(CTQ, VOID) -- 0x2044`
- `sprite(flashSP).getElectionPhaseCB(checkedForOneClient.getAProp("s"), VOID, VOID, checkedForOneClient.getAProp("i")) -- 0x260B`

### Standalone raw token

One line is just:

- `VOID -- 0x012E`

This pass leaves that token unresolved as printed.

## Property-Chain Markers

The raw property-chain marker comments are concentrated in a few windows:

Early bootstrap:

- `0x00B1`
- `0x00C7`
- `0x00E5`

Early `getcache` parse:

- `0x04D7`
- `0x04D8`

Garage parse:

- `0x1139`
- `0x113A`

Late queue tail:

- `0x2C6B`
- `0x2D9E`
- `0x2DC2`
- `0x2E02`
- `0x2E1A`
- `0x2E3D`

The `0x3F property-chain marker` comments dominate this family:

- `11` `0x3F` lines
- `2` `0x37` lines

So the late queue tail remains the densest unresolved property-chain region in
the current lift.

## `implicit_callee_0x2C75`

There is one visible synthetic callee placeholder:

- `implicit_callee_0x2C75(sprite(flashSP).showConnectionErrorCB, ...) -- 0x2C78`

This placeholder appears only in the late `gNetID` error path.

## Whole-File Correction

The unresolved surface in `Lscr-93` is not one generic “decompiler noise”
bucket. The visible placeholder families are:

- early login literals
- race/tournament `id_195`
- overloaded `VOID`
- raw property-chain markers
- one synthetic implicit callee

That split matters because only some of those families were safely normalized by
later queue passes, while others remain unresolved exactly as printed.
