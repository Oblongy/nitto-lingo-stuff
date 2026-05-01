# Lscr-93 Pass 22 Callback Arity Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`

Scope:
- This pass counts top-level argument arity across the visible
  `sprite(flashSP).<callback>(...)` call surface.
- It does not rename callbacks or reinterpret nested expressions.

## Whole-File Counts

The current lift exposes `206` visible `sprite(flashSP).<callback>(...)` call
sites. Their top-level arity splits as:

- `111` unary call sites
- `75` binary call sites
- `13` ternary call sites
- `4` four-arg call sites
- `1` five-arg call site
- `1` six-arg call site
- `1` seven-arg call site

So the callback surface is heavily concentrated in arity `1` and `2`. Only
`7` call sites in the whole file exceed arity `3`.

## Unary Majority

Unary callbacks account for `111` call sites across `106` distinct callback
names.

Most callback names appear only once in unary form. The only notable visible
repeats are:

- `getOneCarEngineCB` -> `4`
- `activatePurchaseCB` -> `2`
- `fbGetSessionCB` -> `2`

Representative unary examples:

- `getInfoCB(d) -- 0x07BF`
- `getUserCB(d) -- 0x07E1`
- `getCarsCB(s) -- 0x0E68`
- `practiceCreateCB(s) -- 0x21C9`
- `joinSpecialEventCB(s) -- 0x2A6C`

This is the dominant whole-file callback shape.

## Binary Family

Binary callbacks account for `75` call sites across `64` distinct callback
names.

Visible repeat leaders:

- `showConnectionErrorCB` -> `4`
- `installPartCB` -> `3`
- `sellPartCB` -> `3`
- `uninstallPartCB` -> `2`
- `loginCB` -> `2`
- `getRacersCarsCB` -> `2`
- `raceGetTwoRacersCarsCB` -> `2`

Representative binary examples:

- `showConnectionErrorCB("Protocol Error", ...) -- 0x0168`
- `racerSearchCB(s, d) -- 0x0888`
- `buyPaintCB(s, b) -- 0x17B7`
- `teamTransCB(s, d) -- 0x1B94`
- `getLatestNewsCB(s, escape(d)) -- 0x2AB4`

So the binary family is the main mixed surface where error, status, and
payload-carrying callbacks all meet.

## Ternary Family

Ternary callbacks account for `13` call sites across `8` distinct callback
names.

Visible distribution:

- `buyPartCB` -> `3`
- `sellPartCB` -> `3`
- `htJoinTournamentCB` -> `2`
- `buyCarCB` -> `1`
- `buyPlateCB` -> `1`
- `ctRequestCB` -> `1`
- `genericWebCB` -> `1`
- `getMisconductCountCB` -> `1`

Representative ternary examples:

- `buyCarCB(s, b, d) -- 0x0F3C`
- `buyPartCB(c, d1, d) -- 0x12D9`
- `ctRequestCB(TRUE, d, b) -- 0x2086`
- `genericWebCB(gNetID first item, s, d) -- 0x2C0D`

This is the tightest whole-file arity bucket where the late queue bridge still
joins the ordinary callback surface.

## Four-Arg Surface

Only `4` call sites use top-level arity `4`, across `3` distinct callbacks:

- `loginCB(s, d, at, am) -- 0x05E8`
- `getElectionPhaseCB(TRUE, p, t, i) -- 0x25DA`
- `getElectionPhaseCB(s, VOID, VOID, i) -- 0x260B`
- `getSupportCB(s, m, i, t) -- 0x2747`

So the visible four-arg surface is rare and concentrated in login, election,
and support flows.

## Highest-Arity Solitary Sites

Only three callback sites exceed arity `4`:

- arity `5`
  - `acceptTestDriveCB(s, h, m, p, d) -- 0x291E`

- arity `6`
  - `activatePurchaseCB(s, m, p, ma, va, d) -- 0x0A92`

- arity `7`
  - `garageDynoBuyCB(s, b, netError.!ATTRIBUTES.e, netError.!ATTRIBUTES.u, netError.!ATTRIBUTES.ad, netError.!ATTRIBUTES.sl, netError.!ATTRIBUTES.n) -- 0x119F`

That is the entire visible high-arity callback surface in the file.

## Tightest Whole-File Read

The `sprite(flashSP)` callback surface is not evenly distributed across many
argument counts.

It is strongly front-loaded:

- `186 / 206` call sites are unary or binary
- `199 / 206` call sites are arity `3` or less

The heavier signatures are real, but they are isolated to a very small set of
export-backed flows:

- login
- purchase activation
- garage dyno attribute fanout
- election/support
- test-drive acceptance

This is a different whole-file cut from pass 19. Pass 19 tracks callback
names per action span; this pass tracks the top-level call shape of the
callback surface itself.
