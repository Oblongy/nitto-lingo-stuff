# Lscr-93 Pass 20 D-Payload Sink Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`

Scope:
- This pass maps every visible `checkedForOneClient.getAProp("d")` read in the
  current `Lscr-93` lift.
- It does not assign a source-level type or meaning to `d`.

## Whole-File Count

The current lift exposes exactly `100` visible
`checkedForOneClient.getAProp("d")` reads.

They split into these sink families:

- `37` unary `sprite(flashSP)` callback sites
- `28` simple `sprite(flashSP)` `s, d` callback sites
- `18` other `sprite(flashSP)` callback sites that still carry `d`, but not in
  the simple unary / `s, d` / `TRUE, d` forms
- `6` `sprite(flashSP)` `TRUE, d` callback sites
- `5` `_global.objRace.startRace(d, t)` sites
- `2` escaped callback sites: `escape(d)`
- `2` parser sites: `parseString(d)`
- `1` direct assignment site: `OK = d`
- `1` late queue bridge site: `genericWebCB(gNetID first item, s, d)`

So `92` of the `100` visible `d` reads still end up in visible
`sprite(flashSP)` callback calls, while the remaining `8` split across parser,
race bootstrap, and one direct assignment.

## Parse / Materialize Pair

`d` is parsed only twice:

- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x04C8`
- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x112E`

Both parser sites immediately feed `makeList().n2` consumers:

- `fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF`
- `netError = checkProcessResult.makeList().n2 -- 0x113E`

That is the tightest export-backed proof that `d` is sometimes treated as
parseable text, but only at those two exact whole-file sites.

## Race Bootstrap Surface

`d` enters `_global.objRace.startRace(...)` exactly `5` times:

- `0x10F7`
- `0x1E7E`
- `0x2032`
- `0x217A`
- `0x22C4`

All five are the same visible shape:

```text
_global.objRace.startRace(checkedForOneClient.getAProp("d"),
 checkedForOneClient.getAProp("t"))
```

This is a separate sink family from callback fanout. It is visible race
bootstrap input, not a `sprite(flashSP)` callback line.

## Escaped `d`

Only two visible callback sites wrap `d` in `escape(...)`:

- `getLatestNewsCB(s, escape(d)) -- 0x2AB4`
- `getRacerSpotlightCB(s, escape(d)) -- 0x2B1E`

No other visible `d` site in the file uses `escape(...)`.

## Direct Assignment

There is only one direct assignment of raw `d` to a local name:

- `OK = checkedForOneClient.getAProp("d") -- 0x2821`

This stays isolated to the `fbgetinviteurl` region.

## Late Queue Bridge

The only visible `d` site that crosses directly into the late `gNetID` bridge
is:

- `sprite(flashSP).genericWebCB(_global.gNetID[_global][VOID], checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2C0D`

This is the only whole-file site where `d` is paired with the queued `gNetID`
first-item selector in the same visible call.

## Simple Callback Families

### Unary `d`

`37` sites use the simple unary callback form:

```text
sprite(flashSP).CallbackName(checkedForOneClient.getAProp("d"))
```

Representative examples:

- `getInfoCB(d) -- 0x07BF`
- `getUserCB(d) -- 0x07E1`
- `getUsersCB(d) -- 0x0803`
- `getEmailListCB(d) -- 0x0C56`
- `getCarCategoriesCB(d) -- 0x0DEF`
- `getOneCarEngineCB(d) -- 0x1E4D`, `0x200A`, `0x21AA`, `0x2260`
- `getElectionScheduleCB(d) -- 0x262D`

This is the most common visible `d` callback shape.

### `s, d`

`28` sites use the simple two-arg callback form:

```text
sprite(flashSP).CallbackName(checkedForOneClient.getAProp("s"),
 checkedForOneClient.getAProp("d"))
```

Representative examples:

- `racerSearchCB(s, d) -- 0x0888`
- `racerSearchNoPageCB(s, d) -- 0x08EB`
- `engineListCB(s, d) -- 0x1611`
- `getSystemPartsCB(s, d) -- 0x190F`
- `teamSearchCB(s, d) -- 0x1BF7`
- `checkTestDriveCB(s, d) -- 0x2894`
- `claimPendingUCLProfitCB(s, d) -- 0x2B6F`

### `TRUE, d`

`6` sites use the `TRUE, d` shape:

```text
sprite(flashSP).CallbackName(TRUE, checkedForOneClient.getAProp("d"))
```

These are:

- `getCarsCB(TRUE, d) -- 0x0E46`
- `getOneCarCB(TRUE, d) -- 0x0E9D`
- `getAllImCarsCB(TRUE, d) -- 0x1041`
- `getRepairPartsCB(TRUE, d) -- 0x1995`
- `engineSwapStartCB(TRUE, d) -- 0x16B9`
- `engineSwapFinishCB(TRUE, d) -- 0x1710`

## Other Callback Surfaces Carrying `d`

The remaining `18` callback sites still carry `d`, but not in the simple
unary / `s, d` / `TRUE, d` shapes.

Exact visible sites:

- `loginCB(s, d, at, am) -- 0x05E8`
- `activatePurchaseCB(s, m, p, ma, va, d) -- 0x0A92`
- `buyCarCB(s, b, d) -- 0x0F3C`
- `getPartsCB(d, d1) -- 0x1278`
- `getWheelsTiresCB(d, d1) -- 0x12A7`
- `buyPartCB(c, d1, d) -- 0x12D9`
- `buyPartCB(e, d1, d) -- 0x130B`
- `buyPartCB(m, d1, d) -- 0x133D`
- `uggBuyCycleCB(d1, d) -- 0x136C`
- `installPartCB(c, d) -- 0x1391`
- `installPartCB(e, d) -- 0x13B6`
- `installPartCB(m, d) -- 0x13DB`
- `uninstallPartCB(c, d) -- 0x1400`
- `uninstallPartCB(e, d) -- 0x1425`
- `engineGetAllPartsCB(d, d1) -- 0x1662`
- `ctRequestCB(TRUE, d, b) -- 0x2086`
- `htJoinTournamentCB(s, id_195, d) -- 0x22F6`
- `acceptTestDriveCB(s, h, m, p, d) -- 0x291E`

This is the tightest whole-file list of the non-simple `d` callback surfaces.

## Preserved Constraint

This pass does not collapse `d` to one runtime type.

The same visible `d` surface is:

- parsed as text in two sites,
- escaped in two sites,
- fed into `_global.objRace.startRace(...)` five times,
- and routed through many callback arity families.

That contradiction stays explicit here. The export shows the sinks; it does not
name one shared source-level meaning for `d`.
