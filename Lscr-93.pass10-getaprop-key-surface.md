# Lscr-93 Pass 10 getAProp Key Surface

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\reconstructed (1)\Lscr-93\rightful.ls`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-93.block1.annotated-disasm.md`

Scope:
- This pass inventories the exact `checkedForOneClient.getAProp("...")` keys
  exposed by the current whole-file mechanical lift.
- It does not rename any key or assign semantics that are not visible in the
  export.

## Counts

Whole-file counts from the current `rightful.ls`:

- `545` total `checkedForOneClient.getAProp("...")` reads
- `34` distinct literal property keys

Frequency table:

```text
s    364
d    100
b    17
t    9
d1   8
m    6
i    5
p    5
e    3
ftc  3
tids 2
a    1
aid  1
am   1
at   1
c    1
cp   1
cw   1
cwc  1
eid  1
f    1
fn   1
gid  1
guid 1
h    1
im   1
ma   1
md5  1
n    1
oid  1
sk   1
u    1
url  1
va   1
```

The dominant whole-file fact is that the ladder is heavily concentrated on the
literal keys `s` and `d`. Together they account for `464` of the `545`
`getAProp(...)` reads.

## Dominant Repeated Keys

### `s`

The literal key `s` is the strongest branch/callback driver in the file.

Representative sites:

- `if not (checkedForOneClient.getAProp("s") = TRUE) then -- 0x04F6`
- `sprite(flashSP).loginCB(checkedForOneClient.getAProp("s")) -- 0x0788`
- `sprite(flashSP).buyCarCB(checkedForOneClient.getAProp("s")) -- 0x0F5E`
- `sprite(flashSP).teamGetInfoCB(checkedForOneClient.getAProp("s")) -- 0x1CC0`
- `sprite(flashSP).acceptTestDriveCB(checkedForOneClient.getAProp("s")) -- 0x2940`
- `sprite(flashSP).genericWebCB(_global.gNetID[_global][VOID], checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2C0D`

This confirms that the late `gNetID` callback tail still reuses `s` after the
main action ladder.

### `d`

The literal key `d` is the strongest non-branch property key.

Representative sites:

- `checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x04C8`
- `sprite(flashSP).getInfoCB(checkedForOneClient.getAProp("d")) -- 0x07BF`
- `sprite(flashSP).activatePurchaseCB(... checkedForOneClient.getAProp("d")) -- 0x0A92`
- `_global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x10F7`
- `sprite(flashSP).getLatestNewsCB(checkedForOneClient.getAProp("s"), escape(checkedForOneClient.getAProp("d"))) -- 0x2AB4`
- `sprite(flashSP).genericWebCB(_global.gNetID[_global][VOID], checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2C0D`

So `d` is not confined to one callback family. It is threaded through parse,
UI callback, race, and late generic-web sites.

## Structured Mid-Frequency Keys

### `b`

The literal key `b` appears in repeated purchase/result families:

- `buyCarCB(s, b, d) -- 0x0F3C`
- `sellCarCB(TRUE, b) -- 0x0F93`
- `getCarOutOfImpoundCB(TRUE, b) -- 0x1098`
- `garageDynoBuyCB(s, b, ...attrs...) -- 0x119F`
- `sellPartCB(c, s, b) -- 0x1469`
- `buyPaintCB(s, b) -- 0x17B7`
- `buyPlateCB(s, b, i) -- 0x1849`
- `buyVanityCB(s, b) -- 0x18AC`
- `buyGearsCB(s, b) -- 0x1A7D`
- `ctRequestCB(TRUE, d, b) -- 0x2086`
- `htJoinTournamentCB(s, b, id_195) -- 0x228F`
- `earnIncentiveCB(s, b) -- 0x2518`
- `buyTestDriveCarCB(s, b) -- 0x2981`

### `t`

The literal key `t` is concentrated in race/support sites:

- `_global.objRace.startRace(d, t) -- 0x10F7`
- `_global.objRace.startRace(d, t) -- 0x1E7E`
- `_global.objRace.startRace(d, t) -- 0x2032`
- `_global.objRace.startRace(d, t) -- 0x217A`
- `_global.objRace.startRace(d, t) -- 0x22C4`
- `getElectionPhaseCB(TRUE, p, t, i) -- 0x25DA`
- `getSupportCB(s, m, i, t) -- 0x2747`
- `getMisconductCountCB(oid, n, t) -- 0x2783`
- `facebookToken = checkedForOneClient.getAProp("t") -- 0x2797`

The repeated `_global.objRace.startRace(d, t)` sites are the strongest
whole-file recurrence for `t`.

### `d1`

The literal key `d1` is concentrated in parts/engine flows:

- `getPartsCB(d, d1) -- 0x1278`
- `getWheelsTiresCB(d, d1) -- 0x12A7`
- `buyPartCB(c, d1, d) -- 0x12D9`
- `buyPartCB(e, d1, d) -- 0x130B`
- `buyPartCB(m, d1, d) -- 0x133D`
- `uggBuyCycleCB(d1, d) -- 0x136C`
- `engineGetAllPartsCB(d, d1) -- 0x166C`
- `engineBuyPartCB(d1) -- 0x1691`

### `m`, `i`, `p`

These keys reappear in mixed argument callbacks rather than dominating whole
branches:

- `activatePurchaseCB(s, m, p, ma, va, d) -- 0x0A92`
- `moveLocationCB(s, m) -- 0x0C11`
- `getElectionPhaseCB(TRUE, p, t, i) -- 0x25DA`
- `getSupportCB(s, m, i, t) -- 0x2747`
- `acceptTestDriveCB(s, h, m, p, d) -- 0x291E`

## Rare-Key Clusters

### Login / Installer cluster

This early file cluster contains most of the one-off login/install keys:

- `ftc` at `0x0508`
- `aid` at `0x0532`
- `guid` at `0x0546`
- `cp` at `0x0561`
- `cw` at `0x057C`
- `cwc` at `0x0597`
- `at` and `am` in `loginCB(... at, am) -- 0x05E8`
- `url` at `0x06BB`
- `fn` at `0x06CF`
- `md5` at `0x06E3`
- `f` at `0x070E`

### Account / mail / avatar cluster

The next narrow cluster contains:

- `gid` in `getCodeCB(s, gid) -- 0x0B46`
- `tids` in `compareAvatarAge(checkedForOneClient.getAProp("tids"), avatars) -- 0x0B83`
- `tids` in `compareAvatarAge(checkedForOneClient.getAProp("tids"), teamAvatars) -- 0x0B9E`
- `im` in `getEmailTotalNewCB(TRUE, im) -- 0x0C34`
- `eid` in `deleteEmailCB(s, eid) -- 0x0CA7`

The `tids` contradiction stays open here. The export only proves the exact
property name and the exact call sites above.

### Election / support / late social cluster

The rare late keys are concentrated in the election/support/news area:

- `c` in `getNominateCountCB(c) -- 0x264F`
- `e` in `nominateCB(s, e) -- 0x267E`, `electionVoteCB(s, e) -- 0x26CF`,
  `activateAccountCB(s, e) -- 0x26FE`
- `oid` and `n` in `getMisconductCountCB(oid, n, t) -- 0x2783`
- `a` in `facebookAPIKey = checkedForOneClient.getAProp("a") -- 0x27AB`
- `u` in `loginTwitterCB(s, u) -- 0x2547`
- `h` in `acceptTestDriveCB(s, h, m, p, d) -- 0x291E`

## Whole-File Boundary

The `getAProp(...)` inventory does not cover the whole file by itself.

The late queue tail still depends on:

- `_global.gNetID[...]` selectors
- `_global.fileNetID[...]` selectors
- `netError(...)`
- `getStreamStatus(...)`

So the exact property-key surface is a dominant whole-file layer, but it is not
the only response surface in `Lscr-93`.
