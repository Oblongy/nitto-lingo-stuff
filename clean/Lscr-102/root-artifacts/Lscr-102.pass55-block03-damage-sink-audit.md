# Lscr-102 pass55 - block03 damage sink audit

Scope:
- script: `Lscr-102`
- handler / block: `RaceEngine_parseConfig` / block `5972`
- target window: post-plain-pull damage family after the durability rows, centered on
  - `pistonDamage`
  - `rodDamage`
  - `valveDamage`
  - `headGasketDamage`
  - `engineBlockDamage`

Goal:
- decompose the computed arithmetic sinks one level deeper into repeated raw packet roles
- keep them separate from the plain `!ATTRIBUTES(...)` pulls that follow
- do not promote them into invented helper abstractions

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.pass-block5972-table.md`
- `Lscr-102.blocks.lingo`
- corroboration only:
  - `Lscr-102.rebuilt-faithful-full.js`
  - `Lscr-102.pass53-block03-post-nitrous-attr-audit.md`

## 1. Safe sink names and source-key attachments

The block-table and the raw stores still support the same sink-name and direct key attachments already established in `pass53`:

| Store offset | Sink id | Sink name | Key id | Key name |
|---|---:|---|---:|---|
| `0x03DE` | `86` | `pistonDamage` | `87` | `aj` |
| `0x0402` | `90` | `rodDamage` | `91` | `ak` |
| `0x0426` | `92` | `valveDamage` | `93` | `al` |
| `0x0445` | `94` | `headGasketDamage` | `95` | `am` |
| `0x0464` | `96` | `engineBlockDamage` | `97` | `an` |

Those attachments are safe because each row ends in a direct `op_36` sink store, and `pass-block5972-table.md` gives the sink/key names verbatim.

## 2. Repeated raw packet roles inside the computed damage family

The arithmetic rows are not plain pulls. They fall into two repeated raw packet shapes.

### Family A: four-stage computed rows

Applies to:
- `pistonDamage`
- `rodDamage`
- `valveDamage`

Shared repeated role pattern:
1. `parseFloat` callhead and `!ATTRIBUTES(<key>)` fetch
2. divide by `c100`
3. multiply by `partBreakPoint`
4. multiply by a count / part-local scalar
5. store to named sink

#### `pistonDamage`

Raw bytes:

```text
03BF: 3B 00 0A     op_3B arg=10 ; "parseFloat"
03C2: 39           op_39
03C3: 56 00 01     op_56 arg=1 ; "xmlparser"
03C6: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
03C9: 35 00 57     op_35 arg=87
03CC: 3A 00 01     op_3A arg=1 ; "xmlparser"
03CF: 41           op_41
03D0: 35 00 58     op_35 arg=88
03D3: 1E           op_1E
03D4: 41           op_41
03D5: 35 00 59     op_35 arg=89
03D8: 1D           op_1D
03D9: 41           op_41
03DA: 35 00 3C     op_35 arg=60
03DD: 1D           op_1D
03DE: 36 00 56     op_36 arg=86
```

Strict role split:
- `0x03BF..0x03CC`: `parseFloat` callhead plus `!ATTRIBUTES(aj)` fetch
- `0x03CF..0x03D4`: divide-by-`c100` stage
- `0x03D5..0x03D9`: multiply-by-`partBreakPoint` stage
- `0x03DA..0x03DD`: multiply-by-`cylinderNumber` suffix
- `0x03DE`: sink store to `pistonDamage`

#### `rodDamage`

Raw bytes:

```text
03E3: 3B 00 0A     op_3B arg=10 ; "parseFloat"
03E6: 39           op_39
03E7: 56 00 01     op_56 arg=1 ; "xmlparser"
03EA: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
03ED: 35 00 5B     op_35 arg=91
03F0: 3A 00 01     op_3A arg=1 ; "xmlparser"
03F3: 41           op_41
03F4: 35 00 58     op_35 arg=88
03F7: 1E           op_1E
03F8: 41           op_41
03F9: 35 00 59     op_35 arg=89
03FC: 1D           op_1D
03FD: 41           op_41
03FE: 35 00 3C     op_35 arg=60
0401: 1D           op_1D
0402: 36 00 5A     op_36 arg=90
```

Strict role split:
- `0x03E3..0x03F0`: `parseFloat` callhead plus `!ATTRIBUTES(ak)` fetch
- `0x03F3..0x03F8`: divide-by-`c100` stage
- `0x03F9..0x03FD`: multiply-by-`partBreakPoint` stage
- `0x03FE..0x0401`: multiply-by-`cylinderNumber` suffix
- `0x0402`: sink store to `rodDamage`

#### `valveDamage`

Raw bytes:

```text
0407: 3B 00 0A     op_3B arg=10 ; "parseFloat"
040A: 39           op_39
040B: 56 00 01     op_56 arg=1 ; "xmlparser"
040E: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
0411: 35 00 5D     op_35 arg=93
0414: 3A 00 01     op_3A arg=1 ; "xmlparser"
0417: 41           op_41
0418: 35 00 58     op_35 arg=88
041B: 1E           op_1E
041C: 41           op_41
041D: 35 00 59     op_35 arg=89
0420: 1D           op_1D
0421: 41           op_41
0422: 35 00 3E     op_35 arg=62
0425: 1D           op_1D
0426: 36 00 5C     op_36 arg=92
```

Strict role split:
- `0x0407..0x0414`: `parseFloat` callhead plus `!ATTRIBUTES(al)` fetch
- `0x0417..0x041C`: divide-by-`c100` stage
- `0x041D..0x0421`: multiply-by-`partBreakPoint` stage
- `0x0422..0x0425`: multiply-by-`valveNumber` suffix
- `0x0426`: sink store to `valveDamage`

### Family B: three-stage computed rows

Applies to:
- `headGasketDamage`
- `engineBlockDamage`

Shared repeated role pattern:
1. `parseFloat` callhead and `!ATTRIBUTES(<key>)` fetch
2. divide by `c100`
3. multiply by `partBreakPoint`
4. store to named sink

#### `headGasketDamage`

Raw bytes:

```text
042B: 3B 00 0A     op_3B arg=10 ; "parseFloat"
042E: 39           op_39
042F: 56 00 01     op_56 arg=1 ; "xmlparser"
0432: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
0435: 35 00 5F     op_35 arg=95
0438: 3A 00 01     op_3A arg=1 ; "xmlparser"
043B: 41           op_41
043C: 35 00 58     op_35 arg=88
043F: 1E           op_1E
0440: 41           op_41
0441: 35 00 59     op_35 arg=89
0444: 1D           op_1D
0445: 36 00 5E     op_36 arg=94
```

Strict role split:
- `0x042B..0x0438`: `parseFloat` callhead plus `!ATTRIBUTES(am)` fetch
- `0x043B..0x0440`: divide-by-`c100` stage
- `0x0441..0x0444`: multiply-by-`partBreakPoint` suffix
- `0x0445`: sink store to `headGasketDamage`

#### `engineBlockDamage`

Raw bytes:

```text
044A: 3B 00 0A     op_3B arg=10 ; "parseFloat"
044D: 39           op_39
044E: 56 00 01     op_56 arg=1 ; "xmlparser"
0451: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
0454: 35 00 61     op_35 arg=97
0457: 3A 00 01     op_3A arg=1 ; "xmlparser"
045A: 41           op_41
045B: 35 00 58     op_35 arg=88
045E: 1E           op_1E
045F: 41           op_41
0460: 35 00 59     op_35 arg=89
0463: 1D           op_1D
0464: 36 00 60     op_36 arg=96
```

Strict role split:
- `0x044A..0x0457`: `parseFloat` callhead plus `!ATTRIBUTES(an)` fetch
- `0x045A..0x045F`: divide-by-`c100` stage
- `0x0460..0x0463`: multiply-by-`partBreakPoint` suffix
- `0x0464`: sink store to `engineBlockDamage`

## 3. Contrast family: plain damage-adjacent pulls

The rows immediately after the computed family are different and should stay separate:

| Window | Sink | Raw shape |
|---|---|---|
| `0x0469..0x0479` | `oilDamage` | `parseFloat` callhead plus direct `!ATTRIBUTES(ap)` fetch, then sink store |
| `0x047E..0x048E` | `oilFilterDamage` | `parseFloat` callhead plus direct `!ATTRIBUTES(av)` fetch, then sink store |
| `0x0493..0x04A3` | `coolantDamage` | `parseFloat` callhead plus direct `!ATTRIBUTES(ax)` fetch, then sink store |

Those three rows do not contain the extra divide/multiply arithmetic chain. So the block contains:
- a computed-damage family at `0x03BF..0x0464`
- then a plain-pull family at `0x0469..0x04A3`

## 4. What remains unresolved

Still unresolved on the strict raw-backed layer:
- the exact higher-level semantic name of each intermediate `op_41` stack-combiner site
- whether the repeated `parseFloat` callhead should be treated as a standalone role boundary or only as part of a larger continuous packet
- any broader abstraction such as a helper/function template for the computed rows

Not safe to claim from this pass:
- that these rows are plain XML pulls
- that they come from an exported helper like `partDamage(...)`
- that any extra symbolic names exist for the divide / multiply stages beyond the exported locals already cited

## 5. Strict conclusion

Yes: the post-attribute damage rows in block `5972` can be decomposed one level deeper into repeated raw packet roles.

Safe repeated-role split:
- Family A:
  - `!ATTRIBUTES(<key>)`
  - divide by `c100`
  - multiply by `partBreakPoint`
  - multiply by `cylinderNumber` or `valveNumber`
  - sink store
- Family B:
  - `!ATTRIBUTES(<key>)`
  - divide by `c100`
  - multiply by `partBreakPoint`
  - sink store

But they remain computed arithmetic rows, not plain attribute pulls, and the stack-combiner layer between each stage stays unresolved beyond the literal `op_41` / `op_1D` / `op_1E` byte-backed roles shown above.
