# Lscr-93 Pass 9 Branch Signature Families

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`

Scope:
- This pass groups repeated callback shapes across the full `Lscr-93` action
  ladder.
- It uses only the existing mechanical branches and callback lines.

## Core Observation

`Lscr-93` is not dispatching `159` totally unrelated handlers. The file reuses
the same branch/callback signatures many times.

The repeated families below are byte-backed in the lift comments and callback
sites. This pass groups those families without renaming any opcodes or hidden
branches.

## Family A: `TRUE, d` vs `s`

The clearest repeated shape is:

```text
if checkedForOneClient.getAProp("s") = TRUE then
  callback(TRUE, checkedForOneClient.getAProp("d"))
else
  callback(checkedForOneClient.getAProp("s"))
end if
```

Whole-file examples:

- `getCarsCB(TRUE, d)` / `getCarsCB(s)` at `0x0E46` / `0x0E68`
- `getOneCarCB(TRUE, d)` / `getOneCarCB(s)` at `0x0E9D` / `0x0EBF`
- `getAllImCarsCB(TRUE, d)` / `getAllImCarsCB(s)` at `0x1041` / `0x1063`
- `getRepairPartsCB(TRUE, d)` / `getRepairPartsCB(s)` at `0x1995` / `0x19B7`
- `engineSwapStartCB(TRUE, d)` / `engineSwapStartCB(s)` at `0x16B9` / `0x16DB`
- `engineSwapFinishCB(TRUE, d)` / `engineSwapFinishCB(s)` at `0x1710` / `0x1732`

This family is one of the strongest whole-file response motifs.

## Family B: `s, d` vs `s`

Another repeated shape is:

```text
if checkedForOneClient.getAProp("s") = TRUE then
  callback(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d"))
else
  callback(checkedForOneClient.getAProp("s"))
end if
```

Whole-file examples:

- `racerSearchCB(s, d)` / `racerSearchCB(s)` at `0x0888` / `0x08AA`
- `racerSearchNoPageCB(s, d)` / `racerSearchNoPageCB(s)` at `0x08EB` / `0x090D`
- `engineListCB(s, d)` / `engineListCB(s)` at `0x1611` / `0x1633`
- `getSystemPartsCB(s, d)` / `getSystemPartsCB(s)` at `0x190F` / `0x1931`
- `getGearInfoCB(s, d)` / `getGearInfoCB(s)` at `0x1A1A` / `0x1A3C`
- `teamTransCB(s, d)` / `teamTransCB(s)` at `0x1B94` / `0x1BB6`
- `teamSearchCB(s, d)` / `teamSearchCB(s)` at `0x1BF7` / `0x1C19`
- `teamGetInfoCB(s, d)` / `teamGetInfoCB(s)` at `0x1C9E` / `0x1CC0`
- `teamGetAllAppsCB(s, d)` / `teamGetAllAppsCB(s)` at `0x1D01` / `0x1D23`
- `teamGetMyAppsCB(s, d)` / `teamGetMyAppsCB(s)` at `0x1D64` / `0x1D86`
- `htGetTournamentsCB(s, d)` / `htGetTournamentsCB(s)` at `0x220A` / `0x222C`
- `checkTestDriveCB(s, d)` / `checkTestDriveCB(s)` at `0x2894` / `0x28B6`

This family is especially common in team and search flows.

## Family C: `s, b` vs `s`

A purchase/result family appears as:

```text
callback(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"))
callback(checkedForOneClient.getAProp("s"))
```

Whole-file examples:

- `buyPaintCB(s, b)` / `buyPaintCB(s)` at `0x17B7` / `0x17D9`
- `buyVanityCB(s, b)` / `buyVanityCB(s)` at `0x18AC` / `0x18CE`
- `buyGearsCB(s, b)` / `buyGearsCB(s)` at `0x1A7D` / `0x1A9F`
- `buyTestDriveCarCB(s, b)` / `buyTestDriveCarCB(s)` at `0x2981` / `0x29A3`

Related but not identical shapes:

- `buyCarCB(s, b, d)` / `buyCarCB(s)` at `0x0F3C` / `0x0F5E`
- `buyPlateCB(s, b, i)` / `buyPlateCB(s)` at `0x1849` / `0x186B`

## Family D: `TRUE, b` vs `s`

Another repeated pattern is:

```text
callback(TRUE, checkedForOneClient.getAProp("b"))
callback(checkedForOneClient.getAProp("s"))
```

Whole-file examples:

- `sellCarCB(TRUE, b)` / `sellCarCB(s)` at `0x0F93` / `0x0FB5`
- `getCarOutOfImpoundCB(TRUE, b)` / `getCarOutOfImpoundCB(s)` at `0x1098` / `0x10BA`

This family is narrower than the `TRUE, d` group, but still repeats.

## Family E: Type-Tagged Part Families

The parts/engine section uses repeated constant-tag families instead of only
property-driven branches.

### buyPartCB

- `buyPartCB(c, d1, d) -- 0x12D9`
- `buyPartCB(e, d1, d) -- 0x130B`
- `buyPartCB(m, d1, d) -- 0x133D`

### installPartCB

- `installPartCB(c, d) -- 0x1391`
- `installPartCB(e, d) -- 0x13B6`
- `installPartCB(m, d) -- 0x13DB`

### uninstallPartCB

- `uninstallPartCB(c, d) -- 0x1400`
- `uninstallPartCB(e, d) -- 0x1425`

### sellPartCB

- `sellPartCB(c, s, b) -- 0x1469`
- `sellPartCB(c, s) -- 0x148E`
- `sellPartCB(e, TRUE, b) -- 0x14C6`
- `sellPartCB(e, s) -- 0x14EB`
- `sellPartCB(m, TRUE, b) -- 0x1523`
- `sellPartCB(m, s) -- 0x1548`

This is one of the strongest internal subfamilies in the file.

## Family F: Escaped Data Variants

Two late social/news callbacks share the same transform shape:

- `getLatestNewsCB(s, escape(d)) -- 0x2AB4`
- `getLatestNewsCB(s) -- 0x2AD6`
- `getRacerSpotlightCB(s, escape(d)) -- 0x2B1E`
- `getRacerSpotlightCB(s) -- 0x2B40`

This is a separate family because it reuses the same `escape(getAProp("d"))`
surface before falling back to a unary `s` form.

## Family G: `id_195` Fallbacks

Three race/tournament families share the unresolved placeholder `id_195`:

- `raceGetTwoRacersCarsCB(s, d)` / `raceGetTwoRacersCarsCB(s, id_195)` at
  `0x1ED6` / `0x1EFB`
- `getRacersCarsCB(s, d)` / `getRacersCarsCB(s, id_195)` at
  `0x1F3C` / `0x1F61`
- `htJoinTournamentCB(s, b, id_195)` / `htJoinTournamentCB(s, id_195, d)` at
  `0x228F` / `0x22F6`

This placeholder remains unresolved. The family is still useful because the
same unresolved slot appears in multiple race/tournament branches.

## Family H: Multi-Field Purchase / Election / Support

Several whole-file branches expand into wider argument packs rather than the
common unary/binary shapes.

Representative examples:

- `activatePurchaseCB(s, m, p, ma, va, d) -- 0x0A92`
- `activatePurchaseCB(s, m) -- 0x0AF5`
- `garageDynoBuyCB(s, b, !ATTRIBUTES.e, !ATTRIBUTES.u, !ATTRIBUTES.ad, !ATTRIBUTES.sl, !ATTRIBUTES.n) -- 0x119F`
- `getElectionPhaseCB(TRUE, p, t, i) -- 0x25DA`
- `getElectionPhaseCB(s, VOID, VOID, i) -- 0x260B`
- `acceptTestDriveCB(s, h, m, p, d) -- 0x291E`
- `getSupportCB(s, m, i, t) -- 0x2747`
- `getMisconductCountCB(oid, n, t) -- 0x2783`

These broader signatures are rarer, but they recur enough to form a real
whole-file family of their own.

## Late Queue Families

The late tail no longer follows the earlier `sprite(flashSP)` response ladder.
Instead it breaks into helper families:

- `genericWebCB(gNetID first item, s, d) -- 0x2C0D`
- `downloadCacheInProgress(getStreamStatus(fileNetID third item)) -- 0x2D03`
- `downloadInstallerUpdateFlash(getStreamStatus(fileNetID third item)) -- 0x2D36`
- `loadLocalAvatar(fileNetID second item, fileNetID first item, true/false) -- 0x2DB0 / 0x2DD4`
- `loadLocalUgg(fileNetID second item, true/false) -- 0x2E08 / 0x2E20`
- `runInstaller(fileNetID second item) -- 0x2E42`

These depend on the queue selector normalization proved in the later queue
passes.

## Preserved Contradictions

This pass does not resolve:

- the `compareAvatarAge(checkedForOneClient.getAProp("tids"), ...)` payload
  contradiction,
- the exact source meaning of `id_195`,
- the exact branch polarity behind each paired form.

It only groups the repeated surface patterns that are already visible in the
mechanical lift.
