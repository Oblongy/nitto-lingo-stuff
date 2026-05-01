# Lscr-102 Pass 20: archive shape target and safe alias notes

This pass does not promote new executable logic. It records what
`reconstructed.rar` changes about the finish-state target, then limits the
current `Lscr-102.rebuilt-faithful.lingo` cleanup to block-local alias comments
that are directly supported by recovered tables and local callsites.

## 1. Archive-backed shape target

`reconstructed.rar` contains separate `Lscr-102` presentation artifacts:

- `Lscr-102/original-style.lingo`
- `Lscr-102/rightful.ls`
- `Lscr-102/Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102/Lscr-102.stack-faithful.lingo`

That archive layout matters because it shows the screenshot-style finish is a
separate presentation layer, not a reason to overwrite the stricter faithful
rebuild in place.

## 2. Safe alias evidence promoted only as comments

The following block-role aliases are strong enough to surface as comments in
`Lscr-102.rebuilt-faithful.lingo` without renaming executable handlers:

1. Block 3 -> parse/config role
Evidence:
- `Lscr-102.pass-block5972-table.md` recovers `xtra`, `xmlparser`,
  `parseString`, `makeList`, `!ATTRIBUTES`, `parseInt`, `parseFloat`,
  `initBoost`, `grs`, `NOS`, and `setClutch`.
- The executable body in `Lscr-102.rebuilt-faithful.lingo` is the concrete
  `carXML` parser/config routine.

2. Block 5 -> start/send timer role
Evidence:
- The block body is the concrete `runInterval` / `timeout` / `#sendPos`
  sequence.
- The vocabulary cluster cited earlier for block 5 matches
  `runInterval/object/forget/timeout/sendInterval/symbol/sendPos`.

3. Block 10 -> getTorque role
Evidence:
- `getTorque` appears in `Lscr-102.all-block-tables.tsv`.
- Block 8 calls `getTorque(rpm)` immediately before assigning `tq`.
- Block 10 is the direct torque lookup/clamp body over `tqArray`.

4. Block 11 -> init wrapper role
Evidence:
- `init` appears in `Lscr-102.all-block-tables.tsv`.
- The executable body here is literally `init(btd)`.

5. Block 15 -> clutch setter role
Evidence:
- `setClutch` is recovered in the block 3 parser/config vocabulary.
- Block 15 is the isolated clutch clamp/setter body over `clutchValue`.

6. Block 17 -> startLightTimer role
Evidence:
- `startLightTimer` appears in `Lscr-102.all-block-tables.tsv`.
- Block 17 is the timeout setup ladder that schedules the light sequence.

7. Block 18 -> runLight role
Evidence:
- `runLight` appears in `Lscr-102.all-block-tables.tsv`.
- Blocks 17 and 18 schedule `#runLight` directly via `timeout(...).new(...)`.

## 3. What stayed unresolved

- Block 9 still should not be renamed from the current faithful artifact based
  only on the present evidence. It is strongly connected to the boost/air-fuel
  cluster, but this pass does not prove a direct handler name promotion.
- Block 16 still mixes reset, ready-ladder, and integrity/hash duties, so this
  pass keeps it synthetic even though `createMd5Hash` is a byte-backed local
  call target.
- No executable `on <name>` handlers were added in this pass. The strict file
  only gained alias comments.
