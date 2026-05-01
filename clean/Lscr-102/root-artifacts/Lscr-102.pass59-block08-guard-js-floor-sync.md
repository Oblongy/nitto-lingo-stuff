# Lscr-102 Pass 59: Block 08 Guard JS Floor Sync

## Purpose

- Re-check the canonical JS guard surfaces for block `14012` (`RaceEngine_runFrame`).
- Decide whether the promoted JS mirrors may keep named lhs tokens at guards `0x11C5` and `0x1254`.
- Sync the canonical JS mirrors back down to the readable-Lingo floor where the current promoted evidence already says the guard must remain unresolved.

## Scope

- Handler: `RaceEngine_runFrame`
- Focus offsets: `0x11C5` and `0x1254`
- This pass only synchronizes the canonical JS mirror with the already-promoted readable Lingo where the strict local passes support that downgrade.

## Sources

- `Lscr-102/rightful.ls` — authoritative promoted readable Lingo
- `Lscr-102/rightful.from-lingo.js` — canonical JS mirror
- `Lscr-102/rightful.js` — canonical JS mirror variant
- `Lscr-102/root-artifacts/Lscr-102.pass51-block08-guard-fallthrough-join-split.md`
- `Lscr-102/root-artifacts/Lscr-102.pass53-block08-guard-local-token-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass54-block08-pre-guard-carry-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass17-block18-finish-ladder.md`

## Existing promoted Lingo floor

The readable Lingo keeps both guard lhs values unresolved:

```text
if not (implicit_lhs_0x11C5 <> (rt mod c1)) then -- jump 23 -- 0x11C5
...
if not (implicit_lhs_0x1254 <> (rt mod c1)) then -- jump 35 -- 0x1254
```

## Existing JS mismatch

Before this pass, the canonical JS mirrors over-promoted one of those guards:

```text
0x11C5 -> if not (KDONE <> (rt mod c1)) then -- jump 23
0x1254 -> if not (RDONE <> (rt mod c1)) then -- jump 35
```

## What the strict local passes prove

### Guard `0x11C5`

`pass53` proves the guard-local island exposes only:

```text
rt
c1
```

and no guard-local lhs token beyond the current floor:

```text
if not (/*stack*/ <> (rt mod c1)) then ...
```

`pass51` further proves:

- the fallthrough payload arm is `0x11C9..0x11DC` (`RINT`)
- the skipped tail-symbol island is `0x11DD..0x11DF` (`RDONE`)
- the false edge resumes only at `0x11E0`

So neither `RINT` nor `RDONE` is part of the guard window, and `pass54` proves no stricter lhs is inherited from the immediate pre-guard carry either.

Safe conclusion for `0x11C5`:

```text
the canonical JS mirror must stay at the readable-Lingo floor:
if not (implicit_lhs_0x11C5 <> (rt mod c1)) then -- jump 23
```

### Guard `0x1254`

The promoted readable Lingo already carries a narrower explicit note for this exact guard window:

```text
-- pass45 byte-window: block 8 0x1240..0x1257 raw=41 35 00 6F 3D 00 76 12 07 00 BE 41 35 00 65 41 35 00 01 22 13 07 00 23
-- pass45 evidence: visible rhs is rt mod c1; lhs source is outside the local stack window, so this guard is not promoted.
if not (implicit_lhs_0x1254 <> (rt mod c1)) then -- jump 35 -- 0x1254
```

Corroborating structural surfaces agree with that floor:

- `rightful.js` island `388` keeps the guard unresolved and only resolves the false edge target:
  - `if not (implicit_lhs_0x1254 <> (rt mod c1)) then goto 0x127B`
- `pass17` proves the broader rivals-like arm is byte-backed as:
  - `RIVAL`
  - `TEAMRIVAL`
  - `INT` prelude
  - later `RIVDONE`

That broader arm inventory does not justify a named guard lhs at `0x1254`.

Safe conclusion for `0x1254`:

```text
the canonical JS mirror must stay at the readable-Lingo floor:
if not (implicit_lhs_0x1254 <> (rt mod c1)) then -- jump 35
```

## Safe promotion

Safe:

```text
0x11C5 JS guard
old -> if not (KDONE <> (rt mod c1)) then -- jump 23
new -> if not (implicit_lhs_0x11C5 <> (rt mod c1)) then -- jump 23

0x1254 JS guard
old -> if not (RDONE <> (rt mod c1)) then -- jump 35
new -> if not (implicit_lhs_0x1254 <> (rt mod c1)) then -- jump 35
```

Not safe in this pass:

```text
- promoting RDONE, RIVDONE, or any other named callback token into the 0x11C5 guard lhs
- promoting RDONE, RIVDONE, or any other named callback token into the 0x1254 guard lhs
```

## What remains unresolved

- The lhs consumed by the `0x11C5` guard remains unresolved.
- The lhs consumed by the `0x1254` guard remains unresolved.
