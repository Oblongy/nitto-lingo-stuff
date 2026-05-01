# Lscr-93 Pass 24 Callback Argument Source Mix

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`

Scope:
- This pass groups the visible `sprite(flashSP).<callback>(...)` lines by raw
  top-level argument source family.
- Unlike pass 23, this pass preserves whether each top-level arg is visibly:
  - a `checkedForOneClient.getAProp(...)` read
  - a raw literal such as `TRUE`, `VOID`, `id_195`, or a quoted string
  - a queue selector such as `_global.gNetID[_global][VOID]`
  - a `netError.!ATTRIBUTES.*` attribute fanout
  - an `escape(...)` wrapper around a property read

## Whole-File Split

Across the `206` visible `sprite(flashSP)` callback call sites, the raw
argument-source families split as:

- `166` `property_only_surface`
- `32` `property_plus_literal_surface`
- `3` `queue_string_surface`
- `2` `escaped_property_surface`
- `1` `attribute_surface`
- `1` `queue_plus_property_surface`
- `1` `state_or_string_surface`

So the callback surface is still dominated by direct property reads, but there
is a real whole-file minority of mixed-source calls that the normalized tuple
pass intentionally flattens.

## Property-Only Surface

`166` call sites use only visible `checkedForOneClient.getAProp(...)` reads as
top-level arguments.

Representative repeated callbacks:

- `loginCB` -> `4`
- `getOneCarEngineCB` -> `4`
- `fbGetSessionCB` -> `2`
- `ctSaveCB` -> `2`
- `teamGetAllAppsCB` -> `2`
- `teamGetInfoCB` -> `2`
- `teamGetMyAppsCB` -> `2`
- `checkTestDriveCB` -> `2`
- `buyPaintCB` -> `2`
- `buyPlateCB` -> `2`
- `buyVanityCB` -> `2`
- `buyTestDriveCarCB` -> `2`

This family includes both simple and high-arity property-only sites, for
example:

- `activatePurchaseCB(s, m, p, ma, va, d) -- 0x0A92`
- `acceptTestDriveCB(s, h, m, p, d) -- 0x291E`

So raw property-only fanout is not limited to the simple unary/binary surface.

## Property Plus Literal Surface

`32` call sites mix visible property reads with visible literals/constants.

Repeated callbacks in this family:

- `sellPartCB` -> `6`
- `buyPartCB` -> `3`
- `installPartCB` -> `3`
- `uninstallPartCB` -> `2`
- `htJoinTournamentCB` -> `2`
- `getElectionPhaseCB` -> `2`

Representative exact visible sites:

- `getCarsCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x0E46`
- `getOneCarCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x0E9D`
- `sellCarCB(TRUE, checkedForOneClient.getAProp("b")) -- 0x0F93`
- `buyPartCB(c, checkedForOneClient.getAProp("d1"), checkedForOneClient.getAProp("d")) -- 0x12D9`
- `installPartCB(e, checkedForOneClient.getAProp("d")) -- 0x13B6`
- `sellPartCB(m, TRUE, checkedForOneClient.getAProp("b")) -- 0x1523`
- `raceGetTwoRacersCarsCB(checkedForOneClient.getAProp("s"), id_195) -- 0x1EFB`
- `getRacersCarsCB(checkedForOneClient.getAProp("s"), id_195) -- 0x1F61`
- `htJoinTournamentCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), id_195) -- 0x228F`
- `getElectionPhaseCB(checkedForOneClient.getAProp("s"), VOID, VOID, checkedForOneClient.getAProp("i")) -- 0x260B`

This is the main whole-file family where raw constants like `TRUE`, `VOID`,
`id_195`, `c`, `e`, and `m` visibly mix with property reads.

## Queue String Surface

`3` callback sites use raw queue selectors plus string-building, but no visible
property reads:

- `showConnectionErrorCB("Protocol Error", (("Connection protocol could not be established. Action:" & _global.gNetID[_global][VOID]) & " (Error: 010)")) -- 0x0168`
- `showConnectionErrorCB("Protocol Error", (("Connection protocol could not be established. Action:" & _global.gNetID[_global][VOID]) & " (Error: 001)")) -- 0x01BD`
- `showConnectionErrorCB("Protocol Error", (("Connection protocol could not be established. Action:" & _global.gNetID[_global][VOID]) & " (Error: 002)")) -- 0x01EE`

These are whole-file queue-backed string surfaces, not ordinary property-bag
callbacks.

## Escaped Property Surface

Only `2` callback sites wrap a property read in `escape(...)`:

- `getLatestNewsCB(checkedForOneClient.getAProp("s"), escape(checkedForOneClient.getAProp("d"))) -- 0x2AB4`
- `getRacerSpotlightCB(checkedForOneClient.getAProp("s"), escape(checkedForOneClient.getAProp("d"))) -- 0x2B1E`

This remains a tiny but distinct source family.

## Attribute Surface

Only one callback line fans out through parsed attributes:

- `garageDynoBuyCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), netError.!ATTRIBUTES.e, netError.!ATTRIBUTES.u, netError.!ATTRIBUTES.ad, netError.!ATTRIBUTES.sl, netError.!ATTRIBUTES.n) -- 0x119F`

This is the only visible callback site where top-level args are drawn from a
parsed attribute object rather than direct property reads, literals, or queue
selectors.

## Queue Plus Property Surface

Only one callback mixes a queue selector with direct property reads:

- `genericWebCB(_global.gNetID[_global][VOID], checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2C0D`

This is the sole whole-file callback line where the queued `gNetID` first-item
surface and the current `checkedForOneClient` property surface appear together
as top-level args.

## State-Or-String Surface

Only one callback line is pure string/global-state fanout without queue
selectors or property reads:

- `showConnectionErrorCB("Session Timed Out", ("I'm sorry, but your session has timed out, please restart the application. Last action: " & _global.lastAction)) -- 0x021C`

This is the only visible callback site anchored to `_global.lastAction`.

## Tightest Contrast With Pass 23

Pass 23 says the file has `51` distinct normalized callback tuples.
This pass shows why that normalization cannot stand alone:

- normalized tuple shape hides whether an arg came from `getAProp("c")`
  or a literal `c`
- normalized tuple shape hides whether a callback is queue-backed,
  attribute-backed, escaped, or plain property-only

So the two passes are complementary:

- pass 23 = repeated visible tuple shape
- pass 24 = raw source mix of the top-level callback args
