# Lscr-102 Pass 19: Block 18 INT / RINT Prelude

## Finding

Block `18` has a repeated inner finish-prelude shape before several outer
completion callbacks. The byte-backed distinction is:

- `QM` uses `RINT`
- `KOTH`, the rivals-like arm, and the later `HT` arm use `INT`
- the `INT` variants pull a `_system.milliseconds - timeAnchor` time-delta
  source before the local `op_04` finalizer
- the `RINT` variant instead uses `theTime` and does **not** hit that local
  `op_04` shape before `RDONE`

This pass does **not** claim the final `INT` / `RINT` signatures are fully
solved, especially around the adjacent `1.4848` immediate.

## KOTH `INT` Prelude

```text
1139: 3B 00 8F     op_3B arg=143 ; "INT"
113C: 39           op_39
113D: 41           op_41
113E: 35 00 57     op_35 arg=87 ; "s"
1141: 41           op_41
1142: 35 00 0C     op_35 arg=12 ; "carV"
1145: 41           op_41
1146: 35 00 0E     op_35 arg=14 ; "carAccel"
1149: 3B 00 04     op_3B arg=4 ; "_system"
114C: 35 00 05     op_35 arg=5 ; "milliseconds"
114F: 41           op_41
1150: 35 00 90     op_35 arg=144 ; "timeAnchor"
1153: 1C           op_1C
1154: 83 3A 00     op_83 arg=14848
1157: 04           op_04
1158: 51           op_51
1159: 3B 00 91     op_3B arg=145 ; "KDONE"
```

What is proven:

- the prelude names are `INT`, `s`, `carV`, `carAccel`, `_system`,
  `milliseconds`, `timeAnchor`
- the time source is built from `_system.milliseconds` and `timeAnchor`
- the `INT` prelude is immediately followed by `op_04`, then `KDONE`

## QM `RINT` Prelude

```text
11C9: 3B 00 93     op_3B arg=147 ; "RINT"
11CC: 39           op_39
11CD: 41           op_41
11CE: 35 00 57     op_35 arg=87 ; "s"
11D1: 41           op_41
11D2: 35 00 0C     op_35 arg=12 ; "carV"
11D5: 41           op_41
11D6: 35 00 0E     op_35 arg=14 ; "carAccel"
11D9: 3A 00 03     op_3A arg=3 ; "theTime"
11DC: 51           op_51
11DD: 3B 00 94     op_3B arg=148 ; "RDONE"
```

What is proven:

- the prelude names are `RINT`, `s`, `carV`, `carAccel`, `theTime`
- this arm does **not** use the local `_system.milliseconds - timeAnchor`
  pattern before `RDONE`
- this arm does **not** show the adjacent `op_04` finalizer before `RDONE`

## Rivals-Like `INT` Prelude

```text
1258: 3B 00 8F     op_3B arg=143 ; "INT"
125B: 39           op_39
125C: 41           op_41
125D: 35 00 57     op_35 arg=87 ; "s"
1260: 41           op_41
1261: 35 00 0C     op_35 arg=12 ; "carV"
1264: 41           op_41
1265: 35 00 0E     op_35 arg=14 ; "carAccel"
1268: 3B 00 04     op_3B arg=4 ; "_system"
126B: 35 00 05     op_35 arg=5 ; "milliseconds"
126E: 41           op_41
126F: 35 00 90     op_35 arg=144 ; "timeAnchor"
1272: 1C           op_1C
1273: 83 3A 00     op_83 arg=14848
1276: 04           op_04
1277: 51           op_51
...
12AE: 3B 00 98     op_3B arg=152 ; "RIVDONE"
```

This matches the KOTH prelude shape, then diverges into the extra rivals-only
pre-damage snapshot before `RIVDONE`.

## Later HT `INT` Prelude

```text
150B: 3B 00 8F     op_3B arg=143 ; "INT"
150E: 39           op_39
150F: 41           op_41
1510: 35 00 57     op_35 arg=87 ; "s"
1513: 41           op_41
1514: 35 00 0C     op_35 arg=12 ; "carV"
1517: 41           op_41
1518: 35 00 0E     op_35 arg=14 ; "carAccel"
151B: 3B 00 04     op_3B arg=4 ; "_system"
151E: 35 00 05     op_35 arg=5 ; "milliseconds"
1521: 41           op_41
1522: 35 00 90     op_35 arg=144 ; "timeAnchor"
1525: 1C           op_1C
1526: 83 3A 00     op_83 arg=14848
1529: 04           op_04
152A: 51           op_51
152B: 3B 00 C1     op_3B arg=193 ; "HTD"
```

This confirms the `INT + time-delta + op_04 + outer done callback` shape is
not limited to KOTH.

## Promoted Conclusion

The most precise safe wording for block `18` is now:

- `RINT` is the QM-specific inner finish prelude and uses `theTime`
- `INT` is the repeated inner finish prelude for KOTH, rivals-like, and later
  HT-style finish arms
- the repeated `INT` shape includes `s`, `carV`, `carAccel`, and a
  `_system.milliseconds - timeAnchor` time-delta source
- the exact role of the adjacent `1.4848` immediate remains unresolved

## Changes Promoted

- `Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102.rebuilt-faithful.js`

Promoted change:

- block `18` comments now distinguish the `INT` and `RINT` inner preludes

Left unchanged:

- no executable logic changed
- no final callback signature was asserted
- `op_04` remains a local finalizer note, not a global opcode rename
