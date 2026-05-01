# Lscr-93 Pass 13 `s` Status Comparator Families

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`

Scope:
- This pass groups the executable `if not (...) then` branches that compare
  `checkedForOneClient.getAProp("s")`.
- It does not count the duplicated pass26/pass22 comment lines as executable
  branches.

## Executable Branch Counts

Actual `if not (checkedForOneClient.getAProp("s") ... ) then` branch counts:

- `= TRUE` -> `37`
- `>= TRUE` -> `9`
- `> VOID` -> `6`
- `= literal_59` -> `1`
- `= literal_60` -> `1`
- `= -12` -> `1`
- `= literal_62` -> `1`
- `= -5` -> `1`
- `= literal_70` -> `1`
- `= literal_74` -> `1`

So the file does not use one uniform status test for `s`. It uses four visible
families:

- early literal/negative chain
- broad `= TRUE` family
- mid-file `> VOID` strip
- late `>= TRUE` strip

## Family A: Early Literal / Negative Chain

This family is tightly clustered in the login/bootstrap strip.

Exact branch sites:

- `if not (checkedForOneClient.getAProp("s") = literal_59) then -- 0x05FC`
- `if not (checkedForOneClient.getAProp("s") = literal_60) then -- 0x0610`
- `if not (checkedForOneClient.getAProp("s") = -12) then -- 0x0624`
- `if not (checkedForOneClient.getAProp("s") = literal_62) then -- 0x0638`
- `if not (checkedForOneClient.getAProp("s") = -5) then -- 0x067B`
- `if not (checkedForOneClient.getAProp("s") = literal_70) then -- 0x06FA`
- `if not (checkedForOneClient.getAProp("s") = literal_74) then -- 0x0744`

This is the only whole-file region where `s` is tested against this many
distinct literal/non-TRUE values.

## Family B: `= TRUE`

This is the dominant executable branch family with `37` actual branch sites.

Representative spread:

- `0x04F6` login gate
- `0x079D` account/info gate
- `0x0A2F` activate-purchase gate
- `0x10CC` garage-dyno gate
- `0x1437` / `0x14A0` / `0x14FD` sell-part gates
- `0x1C6F` / `0x1CD2` / `0x1D35` team-info/application gates
- `0x1E20` / `0x1EA7` / `0x1F0D` race/tournament gates
- `0x2056` / `0x20EC` / `0x214F` computer-race / save / practice gates
- `0x259D` election-phase gate

This family spans most of the file, not just one subsystem.

## Family C: `> VOID`

This family is narrower and contiguous.

Exact branch sites:

- `0x1788`
- `0x180D`
- `0x187D`
- `0x18E0`
- `0x19EB`
- `0x1A4E`

The associated callback strip is:

- `buyPaintCB`
- `buyPlateCB`
- `buyVanityCB`
- `getSystemPartsCB`
- `getGearInfoCB`
- `buyGearsCB`

So `> VOID` is a local mid-file comparator strip, not a whole-file default.

## Family D: `>= TRUE`

This family is later and more mixed than the `> VOID` strip.

Exact branch sites:

- `0x0F00`
- `0x223E`
- `0x2865`
- `0x28C8`
- `0x2952`
- `0x2A1B`
- `0x2A7E`
- `0x2AE8`
- `0x2B81`

The associated callback strip includes:

- `buyCarCB`
- `htJoinTournamentCB`
- `checkTestDriveCB`
- `acceptTestDriveCB`
- `buyTestDriveCarCB`
- `joinSpecialEventCB`
- `getLatestNewsCB`
- `getRacerSpotlightCB`
- `getInstalledEnginePartsCB`

So `>= TRUE` is not just one purchase test. It is a broader late-file family.

## Whole-File Correction

The whole-file `s` surface is not reducible to:

```text
if s = TRUE then success else fallback
```

The exported branch surface is closer to:

```text
login strip: literal / negative comparisons
main ladder: = TRUE
paint/system strip: > VOID
late car/news strip: >= TRUE
```

That split is visible directly in the executable `if not (...) then` lines and
keeps the comparator families from being flattened into one fake status model.
