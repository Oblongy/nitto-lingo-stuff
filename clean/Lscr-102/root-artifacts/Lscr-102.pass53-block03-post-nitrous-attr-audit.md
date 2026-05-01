# Lscr-102 Pass 53: Block 5972 post-nitrous attribute audit

Scope:
- Script: `Lscr-102`
- Handler block: `5972` (`RaceEngine_parseConfig`)
- Narrow target:
  - post-`nitrousTankSize` region beginning at `0x0255`
  - late `id_51..id_114` family through `0x0507`

Goal:
- decide whether any names after `nitrousTankSize` can be attached at the strict raw-backed layer
- separate direct exported block-table evidence from broader corroboration layers
- state exactly what remains unmapped

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block5972-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass51-block03-late-wrapper-ownership-split.md`

Corroboration rule:
- strict decisions below are driven by `pass-block5972-table.md` plus `annotated-disasm.md`
- `rebuilt-faithful-full.js` and `stack-faithful.lingo` are corroboration only

## Raw name inventory for the post-nitrous family

The exported block-table already names the local ids that appear after `nitrousTankSize`:

- sink ids:
  - `51 = maxPsi`
  - `53 = airhpi`
  - `54 = turboFlow`
  - `56 = fuelFlowLimit`
  - `58 = overallAirFlowLimit`
  - `60 = cylinderNumber`
  - `62 = valveNumber`
  - `64 = pistonCompressionLevel`
  - `66 = chipSetting`
  - `68 = pistonDurability`
  - `70 = rodDurability`
  - `72 = valveDurability`
  - `74 = headGasketDurability`
  - `76 = engineBlockDurability`
  - `78 = oilDurability`
  - `80 = radiatorDurability`
  - `82 = oilFilterDurability`
  - `84 = coolantDurability`
  - `86 = pistonDamage`
  - `90 = rodDamage`
  - `92 = valveDamage`
  - `94 = headGasketDamage`
  - `96 = engineBlockDamage`
  - `98 = oilDamage`
  - `100 = oilFilterDamage`
  - `102 = coolantDamage`
  - `104 = raceGas`
  - `106 = tireStick`
  - `108 = launchControl`
  - `110 = beforePistonDamage`
  - `111 = thePD`
  - `112 = theBPD`
  - `113 = init`
  - `114 = raceType`
- direct key ids used in the same tail:
  - `52 = u`
  - `55 = x`
  - `57 = y`
  - `59 = z`
  - `61 = aa`
  - `63 = ab`
  - `65 = ac`
  - `67 = ad`
  - `69 = ae`
  - `71 = af`
  - `73 = ag`
  - `75 = ah`
  - `77 = ai`
  - `79 = ao`
  - `81 = at`
  - `83 = au`
  - `85 = aw`
  - `87 = aj`
  - `91 = ak`
  - `93 = al`
  - `95 = am`
  - `97 = an`
  - `99 = ap`
  - `101 = av`
  - `103 = ax`
  - `105 = aq`
  - `107 = ar`
  - `109 = as`
- supporting locals in the same tail:
  - `88 = c100`
  - `89 = partBreakPoint`
  - earlier block locals still reused:
    - `5 = w`
    - `7 = !ATTRIBUTES`
    - `10 = parseFloat`
    - `6 = parseInt`

## Exact raw windows

### Direct post-nitrous pull chain start

From `Lscr-102.annotated-disasm.md`:

```text
0245: 3B 00 0A     op_3B arg=10 ; "parseFloat"
0248: 39           op_39
0249: 56 00 01     op_56 arg=1 ; "xmlparser"
024C: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
024F: 35 00 34     op_35 arg=52
0252: 3A 00 01     op_3A arg=1 ; "xmlparser"
0255: 36 00 33     op_36 arg=51
...
025A: 3B 00 0A     op_3B arg=10 ; "parseFloat"
025D: 39
025E: 56 00 01     op_56 arg=1 ; "xmlparser"
0261: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
0264: 35 00 05     op_35 arg=5 ; "w"
0267: 3A 00 01     op_3A arg=1 ; "xmlparser"
026A: 36 00 35     op_36 arg=53
```

### Repeating direct key-pull family

From the same source:

```text
0276: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
0279: 35 00 37     op_35 arg=55
027C: 3A 00 01     op_3A arg=1 ; "xmlparser"
027F: 36 00 36     op_36 arg=54
...
04D9: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
04DC: 35 00 6D     op_35 arg=109
04DF: 3A 00 01     op_3A arg=1 ; "xmlparser"
04E2: 36 00 6C     op_36 arg=108
```

### Computed damage family and tail

From `Lscr-102.annotated-disasm.md`:

```text
03C6: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
03C9: 35 00 57     op_35 arg=87
03CC: 3A 00 01     op_3A arg=1 ; "xmlparser"
03CF: 41
03D0: 35 00 58     op_35 arg=88
03D3: 1E
03D4: 41
03D5: 35 00 59     op_35 arg=89
03D8: 1D
03D9: 41
03DA: 35 00 3C     op_35 arg=60
03DD: 1D
03DE: 36 00 56     op_36 arg=86
...
04E6: 41
04E7: 41
04E8: 35 00 56     op_35 arg=86
04EB: 36 00 6E     op_36 arg=110
04EF: 41
04F0: 3E
04F1: 36 00 6F     op_36 arg=111
04F5: 41
04F6: 3E
04F7: 36 00 70     op_36 arg=112
04FB: 41
04FC: 35 00 71     op_35 arg=113
04FF: 39
0500: 41
0501: 35 00 72     op_35 arg=114
0504: 3A 00 01     op_3A arg=1 ; "xmlparser"
0507: 51
```

## Strict raw-backed classification

### 1. Safe direct sink-name attachment exists for most of the post-nitrous family

Yes. At the strict raw-backed layer, the exported block-table gives the local names, and the disasm gives the exact store offsets.

Safe sink-name attachments:

| Offset | Raw store | Strict attachment |
|---|---|---|
| `0x0255` | `op_36 arg=51` | `maxPsi` |
| `0x026A` | `op_36 arg=53` | `airhpi` |
| `0x027F` | `op_36 arg=54` | `turboFlow` |
| `0x0294` | `op_36 arg=56` | `fuelFlowLimit` |
| `0x02A9` | `op_36 arg=58` | `overallAirFlowLimit` |
| `0x02BE` | `op_36 arg=60` | `cylinderNumber` |
| `0x02D3` | `op_36 arg=62` | `valveNumber` |
| `0x02E8` | `op_36 arg=64` | `pistonCompressionLevel` |
| `0x02FD` | `op_36 arg=66` | `chipSetting` |
| `0x0312` | `op_36 arg=68` | `pistonDurability` |
| `0x0327` | `op_36 arg=70` | `rodDurability` |
| `0x033C` | `op_36 arg=72` | `valveDurability` |
| `0x0351` | `op_36 arg=74` | `headGasketDurability` |
| `0x0366` | `op_36 arg=76` | `engineBlockDurability` |
| `0x037B` | `op_36 arg=78` | `oilDurability` |
| `0x0390` | `op_36 arg=80` | `radiatorDurability` |
| `0x03A5` | `op_36 arg=82` | `oilFilterDurability` |
| `0x03BA` | `op_36 arg=84` | `coolantDurability` |
| `0x03DE` | `op_36 arg=86` | `pistonDamage` |
| `0x0402` | `op_36 arg=90` | `rodDamage` |
| `0x0426` | `op_36 arg=92` | `valveDamage` |
| `0x0445` | `op_36 arg=94` | `headGasketDamage` |
| `0x0464` | `op_36 arg=96` | `engineBlockDamage` |
| `0x0479` | `op_36 arg=98` | `oilDamage` |
| `0x048E` | `op_36 arg=100` | `oilFilterDamage` |
| `0x04A3` | `op_36 arg=102` | `coolantDamage` |
| `0x04B8` | `op_36 arg=104` | `raceGas` |
| `0x04CD` | `op_36 arg=106` | `tireStick` |
| `0x04E2` | `op_36 arg=108` | `launchControl` |
| `0x04EB` | `op_36 arg=110` | `beforePistonDamage` |
| `0x04F1` | `op_36 arg=111` | `thePD` |
| `0x04F7` | `op_36 arg=112` | `theBPD` |

This part is safe because both sides are exported:
- lhs local ids are named in `pass-block5972-table.md`
- each store offset is named in `annotated-disasm.md`

### 2. Direct XML key attachment is safe for many rows, but not for every row

Safe direct key-to-sink attachment where the same raw packet explicitly contains:
- `op_35 arg=7 ; "!ATTRIBUTES"`
- a direct key id
- the sink store

Safe direct key pairs:

| Offset | Sink | Raw key id | Raw key name |
|---|---|---|---|
| `0x0255` | `maxPsi` | `52` | `u` |
| `0x027F` | `turboFlow` | `55` | `x` |
| `0x0294` | `fuelFlowLimit` | `57` | `y` |
| `0x02A9` | `overallAirFlowLimit` | `59` | `z` |
| `0x02BE` | `cylinderNumber` | `61` | `aa` |
| `0x02D3` | `valveNumber` | `63` | `ab` |
| `0x02E8` | `pistonCompressionLevel` | `65` | `ac` |
| `0x02FD` | `chipSetting` | `67` | `ad` |
| `0x0312` | `pistonDurability` | `69` | `ae` |
| `0x0327` | `rodDurability` | `71` | `af` |
| `0x033C` | `valveDurability` | `73` | `ag` |
| `0x0351` | `headGasketDurability` | `75` | `ah` |
| `0x0366` | `engineBlockDurability` | `77` | `ai` |
| `0x037B` | `oilDurability` | `79` | `ao` |
| `0x0390` | `radiatorDurability` | `81` | `at` |
| `0x03A5` | `oilFilterDurability` | `83` | `au` |
| `0x03BA` | `coolantDurability` | `85` | `aw` |
| `0x03DE` | `pistonDamage` | `87` | `aj` |
| `0x0402` | `rodDamage` | `91` | `ak` |
| `0x0426` | `valveDamage` | `93` | `al` |
| `0x0445` | `headGasketDamage` | `95` | `am` |
| `0x0464` | `engineBlockDamage` | `97` | `an` |
| `0x0479` | `oilDamage` | `99` | `ap` |
| `0x048E` | `oilFilterDamage` | `101` | `av` |
| `0x04A3` | `coolantDamage` | `103` | `ax` |
| `0x04B8` | `raceGas` | `105` | `aq` |
| `0x04CD` | `tireStick` | `107` | `ar` |
| `0x04E2` | `launchControl` | `109` | `as` |

### 3. `airhpi` is named safely, but its post-nitrous source is not a fresh direct key row

`airhpi` at `0x026A` is different.

Raw packet:

```text
025E: 56 00 01     op_56 arg=1 ; "xmlparser"
0261: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
0264: 35 00 05     op_35 arg=5 ; "w"
0267: 3A 00 01     op_3A arg=1 ; "xmlparser"
026A: 36 00 35     op_36 arg=53
```

Strict decision:
- safe:
  - the sink name `airhpi`
  - the fact that `0x026A` is part of the post-nitrous parse family
- not safe:
  - claiming a fresh direct key letter for `airhpi` inside this tail

Why:
- the raw packet does not use a new key id like `52 = u` or `55 = x`
- it uses earlier local `5 = w`
- `w` itself was established earlier in block `5972`, before the post-nitrous region

So `airhpi` is **mapped as a named sink**, but its immediate tail rhs remains:
- `!ATTRIBUTES(w)` on the strict raw-backed layer

### 4. The damage rows are named, but they are computed rows, not plain pulls

The rows at:
- `0x03DE`
- `0x0402`
- `0x0426`
- `0x0445`
- `0x0464`

are safe named sinks, but they are not simple direct pulls.

Raw structure shows:
- one `!ATTRIBUTES(<key>)` fetch
- division by `c100`
- multiply by `partBreakPoint`
- in three cases another multiply by a durability/count local

Strict classification:
- safe:
  - sink names `pistonDamage`, `rodDamage`, `valveDamage`, `headGasketDamage`, `engineBlockDamage`
  - direct source keys `aj`, `ak`, `al`, `am`, `an`
- unresolved:
  - any cleaner semantic description beyond the literal arithmetic chain already shown by the bytes

### 5. The tail after `0x04E2` is not additional attribute mapping

Rows after `launchControl`:

- `0x04EB`
  - `beforePistonDamage`
  - raw copy from `35 00 56` / id `86`
  - this is a local-to-local copy, not a new `!ATTRIBUTES(...)` row
- `0x04F1`
  - `thePD = VOID`
- `0x04F7`
  - `theBPD = VOID`
- `0x04FB..0x0507`
  - `35 00 71` / id `113 = init`
  - `35 00 72` / id `114 = raceType`
  - packet closes at `0x0507`

Strict decision:
- `beforePistonDamage`, `thePD`, and `theBPD` are safely named locals
- they are **not** post-nitrous XML attribute names
- `init` / `raceType` are exported names in the same tail, but `0x04FB..0x0507` is not a plain attribute-pull/store row
- no safe new XML-field attachment exists there beyond the already-exported names themselves

## Corroboration-only layer

`Lscr-102.rebuilt-faithful-full.js` agrees with the same row family:

```text
id_51 = "!ATTRIBUTES"(id_52) -- 0x0255
id_53 = "!ATTRIBUTES"(w) -- 0x026A
id_54 = "!ATTRIBUTES"(id_55) -- 0x027F
...
id_108 = "!ATTRIBUTES"(id_109) -- 0x04E2
id_110 = id_86 -- 0x04EB
id_113(id_114) -- 0x0507
```

Useful corroboration:
- confirms the direct/non-direct split above
- confirms `id_113(id_114)` is not a sink-store row

Not accepted as strict proof:
- any helper-side renaming beyond the exported ids already present in `pass-block5972-table.md`
- any `getAProp(...)` rewrite

## Result

Yes: post-nitrous names can be attached safely at the strict raw-backed layer, but only in a controlled way.

Safe at the strict layer:
- named sink attachment for `maxPsi` through `launchControl`
- named sink attachment for the tail locals `beforePistonDamage`, `thePD`, `theBPD`
- direct key-to-sink attachment for all rows that explicitly carry `!ATTRIBUTES(<exported key id>)`

Must remain narrower / unmapped:
- `airhpi` does **not** have a fresh direct post-nitrous key id in this tail; its immediate strict rhs remains `!ATTRIBUTES(w)`
- the computed damage rows should remain arithmetic-chain rows, not cleaned semantic formulas
- `0x04FB..0x0507` should remain an `init` / `raceType` call-expression tail, not a new attribute mapping

Strict stop-map after this pass:
- direct key-backed post-nitrous attr family: `0x0255`, `0x027F..0x04E2`
- named-but-not-fresh-direct-key row: `0x026A` (`airhpi`)
- computed damage family: `0x03DE..0x0464`
- non-attribute tail: `0x04EB..0x0507`
