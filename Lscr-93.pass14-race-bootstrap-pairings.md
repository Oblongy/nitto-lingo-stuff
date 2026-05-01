# Lscr-93 Pass 14 Race Bootstrap Pairings

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass12-side-effect-and-helper-surface.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass13-s-status-comparator-families.md`

Scope:
- This pass pins the exact local windows around `_global.objRace.startRace(...)`,
  `_global.objRace.init(...)`, and `_global.objRace.initComputerRace(...)`.
- It does not infer hidden race semantics beyond the visible neighboring calls.

## Core Observation

The whole-file `_global.objRace` surface is not one flat repeated bootstrap.
There are five visible `startRace(d, t)` sites, but the surrounding windows
split into distinct pairing families.

## Window A: DYNO Pairing

Exact window `0x10CC..0x11C1`:

- `if not (checkedForOneClient.getAProp("s") = TRUE) then -- 0x10CC`
- `_global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x10F7`
- `_global.objRace.init(DYNO) -- 0x1108`
- `checkProcessResult = new xtra("xmlparser") -- 0x1113`
- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x112E`
- `netError = checkProcessResult.makeList().n2 -- 0x113E`
- `checkProcessResult = VOID -- 0x1143`
- `sprite(flashSP).garageDynoBuyCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), netError.!ATTRIBUTES.e, netError.!ATTRIBUTES.u, netError.!ATTRIBUTES.ad, netError.!ATTRIBUTES.sl, netError.!ATTRIBUTES.n) -- 0x119F`
- `sprite(flashSP).garageDynoBuyCB(checkedForOneClient.getAProp("s")) -- 0x11C1`

This is the only `_global.objRace` window that immediately chains:

- `startRace`
- `init(DYNO)`
- `xmlparser` parse
- `garageDynoBuyCB(...)`

## Window B: Engine-Preview / raceType Pairing

Exact window `0x1E20..0x1EFB`:

- `if not (checkedForOneClient.getAProp("s") = TRUE) then -- 0x1E20`
- `trace("director getOneCarEngineCB") -- 0x1E2E`
- `sprite(flashSP).getOneCarEngineCB(checkedForOneClient.getAProp("d")) -- 0x1E4D`
- `_global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x1E7E`
- `_global.objRace.init(_global.objRace.raceType) -- 0x1E95`

Then the file immediately transitions into a separate action span:

- `"gettworacerscars" body 0x1E99..before 0x1EFF`
- `raceGetTwoRacersCarsCB(s, d) -- 0x1ED6`
- `raceGetTwoRacersCarsCB(s, id_195) -- 0x1EFB`

So this start/init pair is directly adjacent to:

- a `getOneCarEngineCB(d)` callback
- a later `"gettworacerscars"` action span

## Window C: CTQ Pairing

Exact window `0x1FE8..0x2047`:

- `if not (checkedForOneClient.getAProp("s") = TRUE) then -- 0x1FE8`
- `sprite(flashSP).getOneCarEngineCB(checkedForOneClient.getAProp("d")) -- 0x200A`
- `_global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x2032`
- `_global.objRace.initComputerRace(CTQ, VOID) -- 0x2044`

This is the first visible `initComputerRace(...)` family. It is paired with:

- `getOneCarEngineCB(d)`
- `startRace(d, t)`
- `initComputerRace(CTQ, VOID)`

## Window D: CT Pairing

Exact window `0x2056..0x20C7`:

- `if not (checkedForOneClient.getAProp("s") = TRUE) then -- 0x2056`
- `sprite(flashSP).ctRequestCB(TRUE, checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("b")) -- 0x2086`
- `_global.objRace.initComputerRace(CT, checkedForOneClient.getAProp("b")) -- 0x20A4`
- `sprite(flashSP).ctRequestCB(checkedForOneClient.getAProp("s")) -- 0x20C6`

This second `initComputerRace(...)` family is different from the `CTQ` window:

- no visible `startRace(...)` call in this local branch
- `ctRequestCB(...)` is the paired callback instead
- the second argument is `checkedForOneClient.getAProp("b")`, not `VOID`

## Window E: Practice Pairing

Exact window `0x214F..0x21C9`:

- `if not (checkedForOneClient.getAProp("s") = TRUE) then -- 0x214F`
- `_global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x217A`
- `_global.objRace.init(P) -- 0x218B`
- `sprite(flashSP).getOneCarEngineCB(checkedForOneClient.getAProp("d")) -- 0x21AA`
- `sprite(flashSP).practiceCreateCB(checkedForOneClient.getAProp("s")) -- 0x21C9`

So the `P` init family is paired with:

- `startRace(d, t)`
- `getOneCarEngineCB(d)`
- `practiceCreateCB(s)`

## Window F: HTQ Pairing

Exact window `0x223E..0x22F6`:

- `if not (checkedForOneClient.getAProp("s") >= TRUE) then -- 0x223E`
- `sprite(flashSP).getOneCarEngineCB(checkedForOneClient.getAProp("d")) -- 0x2260`
- `sprite(flashSP).htJoinTournamentCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), id_195) -- 0x228F`
- `raceType = HTQ -- 0x2299`
- `_global.objRace -- 0x229C`
- `_global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x22C4`
- `sprite(flashSP).htJoinTournamentCB(checkedForOneClient.getAProp("s"), id_195, checkedForOneClient.getAProp("d")) -- 0x22F6`

This is the only visible `_global.objRace.startRace(...)` window in the current
lift that is gated by the `>= TRUE` comparator family rather than `= TRUE`.

It is also the only one that visibly exposes:

- `raceType = HTQ`
- a bare `_global.objRace` line
- two `htJoinTournamentCB(...)` forms around the `startRace(...)` call

## Whole-File Split

The visible bootstrap families are therefore:

- DYNO: `startRace` + `init(DYNO)` + xmlparser + `garageDynoBuyCB`
- raceType: `getOneCarEngineCB` + `startRace` + `init(_global.objRace.raceType)`
- CTQ: `getOneCarEngineCB` + `startRace` + `initComputerRace(CTQ, VOID)`
- CT: `ctRequestCB` + `initComputerRace(CT, b)`
- P: `startRace` + `init(P)` + `getOneCarEngineCB` + `practiceCreateCB`
- HTQ: `getOneCarEngineCB` + `htJoinTournamentCB` + `raceType = HTQ` +
  `startRace`

So the `_global.objRace` surface in `Lscr-93` is not one generic race-start
macro. The export-backed windows split it into multiple exact local pairings.
