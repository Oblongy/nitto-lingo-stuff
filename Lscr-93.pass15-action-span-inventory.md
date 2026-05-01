# Lscr-93 Pass 15 Action Span Inventory

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.pass6-whole-file-region-map.md`

Scope:
- This pass inventories the exported `pass26 action-response span:` markers
  across the full file.
- It does not expand abbreviations such as `ctgr`, `egue`, `esfi`, or `id_195`.

## Whole-File Counts

From the current `rightful.ls`:

- `159` action-span lines
- `3` grouped action-span lines using `[...]`
- `156` singleton action-span lines
- `164` expanded action names after splitting grouped lines
- `160` unique expanded action names

All exported action names in the current lift are lowercase alphabetic tokens.
No digit, underscore, or mixed-case action token appears in the span labels.

## Grouped Span Lines

The three grouped span lines are:

- `["fbgetsession", "login"]` at `0x04E8..before 0x078C`
- `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]` at `0x2C35..before 0x2D74`
- `["avatars", "teamavatars"]` at `0x2D74..before 0x2DD8`

So the whole-file router is mostly one-action-per-span, with only three visible
shared-body exceptions.

## Expanded-Name Duplicates

Only four expanded action names occur more than once in the span inventory:

- `gettotalnewmail` -> `2`
- `getemaillist` -> `2`
- `getavatarage` -> `2`
- `getteamavatarage` -> `2`

These are the only names that appear both:

- as earlier primary action spans
- and again inside the late grouped queue span at `0x2C35..before 0x2D74`

No other expanded action token repeats in the current span inventory.

## Lexical Action Families

Exact prefix counts over the `160` unique expanded action names:

- `get*` -> `59`
- `buy*` -> `12`
- `sell*` -> `5`
- `install*` -> `3`
- `uninstall*` -> `2`
- `update*` -> `5`
- `change*` -> `6`
- `set*` -> `4`
- `team*` -> `4`
- `fb*` -> `4`
- `ct*` -> `5`

This shows that the router is dominated lexically by `get*` actions, even
before looking at callback families.

## Abbreviation Clusters

The current span inventory still includes unresolved short tokens:

- `ctct`
- `ctgr`
- `ctjt`
- `ctrt`
- `ctst`
- `ebep`
- `egep`
- `egue`
- `esfi`
- `esst`

This pass leaves those tokens exactly as exported. It does not rename or expand
them.

## Region Anchors

The span inventory still respects the whole-file region split from pass 6.

Representative region anchors:

- bootstrap/login opens with `getcache`, then `["fbgetsession", "login"]`
- account/profile/avatar region runs through `movelocation`
- mail/remarks runs through `setdeletes`
- car/shop/garage runs from `getcarcategories` through `getdescription`
- team/race/tournament runs from `teaminfo` through `joinhumantournament`
- classified/trade/social runs from `putcaronclassified` through `setbadgevisible`
- election/support/news runs from `getblackcardprogress` through `claimpendinguclprofit`
- late queue tail runs from `getinstalledenginepartbyaccountcar` through
  `installer`

So the action-token inventory matches the same coarse regional split already
visible in the body offsets.

## Late Tail Split

The last five span blocks are structurally different from most of the file:

- `["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"]`
- `["avatars", "teamavatars"]`
- `ugg`
- `cache`
- `installer`

These are the whole-file action labels most tightly coupled to the queue/helper
tail rather than direct `sprite(flashSP).<callback>(...)` fanout.

## Boundary

The exported action-span surface is not just a callback-name list. It preserves:

- exact router token spelling
- grouped-body exceptions
- repeated late-tail action names
- abbreviation clusters

That makes it a separate whole-file layer from callback inventory and branch
signature inventory.
