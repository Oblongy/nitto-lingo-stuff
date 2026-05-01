# Lscr-102 Pass 23: Strict Carry Tracer

Purpose:
- tighten carry ownership for the three remaining hotspot blocks without inventing lhs names
- turn `Lscr-102.pass22-hotspot-stack-trace-windows.md` into a block-scoped stop-map for future readable-Lingo lifts
- keep strict surfaces and broader helper carries separate

Primary source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass22-hotspot-stack-trace-windows.md`

Corroboration only:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.block08-islands.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`

Rule:
- all offsets here are block-local
- a carry is only accepted if the stricter block-scoped surface keeps ownership of the value across the exact window
- broader faithful rows may explain a candidate, but they do not prove a strict carry by themselves

## Block 14012 (`RaceEngine_runFrame`)

### carry owner map

| window | strict owner | safe carry | do not carry |
|---|---|---|---|
| `0x112C..0x1139` | island `383` branch row | `(rt mod c1)` into the branch at `0x1135` | `KDONE` backward from `0x1159..0x115C` |
| `0x1139..0x1159` | island `384` unresolved stack tail | `INT | s | carV | carAccel | _system | (milliseconds - timeAnchor)` through `0x1159` | any named lhs for `0x1135` |
| `0x1159..0x115C` | island `385` stack tail | `KDONE` only inside this island tail | `KDONE` into `0x1135` |
| `0x11BC..0x11C9` | island `390` branch row | `(rt mod c1)` into the branch at `0x11C5` | `KDONE` from the earlier island family |

### strict conclusions

- `0x1135` remains `if not (/*stack*/ <> (rt mod c1)) then goto 0x115C` at the strict island layer.
- `KDONE` is real as payload id `145`, but the strict owner for that symbol is the later island tail starting at `0x1159`.
- `0x11C5` remains a separate branch ownership site and does not inherit `KDONE` from the broader faithful helper.
- Future readable-Lingo lift rule:
  - do not rewrite either `0x1135` or `0x11C5` with a named lhs unless a stricter raw block trace proves that carry inside the same strict owner window.

## Block 37252 (`RaceEngine_createMd5Hash`)

### carry owner map

| window | strict owner | safe carry | do not carry |
|---|---|---|---|
| `0x0145` | broader faithful surface only | none | standalone `lightTO1` executable row in the strict block `16` surface |
| `0x0169..0x0174` | block `16` raw slice | the unresolved handoff cluster ending at `lightTO1` store and jump `123` | same-offset rows borrowed from block `31980` |
| `0x0174..0x0178` | block `16` jump edge | jump `123` only | standalone `timeout` or `lightTO1` rows imported from broader helpers |

### strict conclusions

- The only accepted strict hotspot window in this block is `0x016F..0x0174`.
- The same-offset `0x0170` packet from block `31980` is explicitly excluded from carry reasoning here.
- `lightTO1` and `timeout` remain part of the same unresolved block-`16` handoff cluster at the strict layer.
- Future readable-Lingo lift rule:
  - do not split `lightTO1` or `timeout` into separate readable lines unless block `16` itself exposes them as owned executable rows.

## Block 43264 (`RaceEngine_buildMd5Source`)

### carry owner map

| window | strict owner | safe carry | do not carry |
|---|---|---|---|
| `0x05F4..0x05F5` | raw gate edge | `op_51` followed by jump `74` | `(goodCounterRT = VOID)` from broader faithful rows |
| `0x063F..0x064C` | strict block `19` packet start | `xtra ^ caluMD5` into the compressed packet | broader helper names pushed past `0x064C` |
| `0x064D..0x0663` | strict block `19` compressed tail packet | `id_0 = ,.getStringMD5()(id_0)` and trailing `id_0` only | `EMPTY`, `0`, or `badCounterET` as strict executable rows |

### strict conclusions

- `0x05F4..0x05F5` stays minimal and unresolved at the strict layer.
- The strict block `19` packet ends at the compressed tail represented by:
  - `, = caluMD5`
  - `id_0 = ,.getStringMD5()(id_0)`
  - `// [0x064f] op_05`
  - `id_0`
- The broader faithful rows that continue through `0x065A` and `0x0663` remain contrast only.
- Future readable-Lingo lift rule:
  - do not pull `EMPTY`, `0`, or later helper-carried names back into the strict block `19` readable surface unless the block-local strict packet itself expands to those rows.

## Cross-block carry rules

- Block `14012`:
  - prefer `block08-islands.js` ownership over `rebuilt-faithful-full.js`
  - never carry `KDONE` backward across islands
- Block `37252`:
  - prefer the strict block `16` packet over any same-offset hit from other blocks
  - never use block `9` local offsets to clean block `16`
- Block `43264`:
  - treat the strict block `19` packet as the stop boundary
  - never let the broader faithful continuation past `0x064C` redefine the strict readable surface

Outcome:
- no new readable-Lingo line is promoted by this artifact
- this pass only narrows ownership so the next `Lscr-102` lift cannot silently borrow carries from a broader surface
