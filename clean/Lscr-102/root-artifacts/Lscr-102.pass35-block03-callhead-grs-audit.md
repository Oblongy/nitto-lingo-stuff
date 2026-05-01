## Lscr-102 Pass 35: Block 5972 call-head and grs cluster audit

Scope:
- Script: `Lscr-102`
- Handler block: `5972` (`RaceEngine_parseConfig`)
- Narrow windows:
  - `0x0136..0x013E` (`boostType` tail into `initBoost` call packet)
  - `0x013F..0x01CC` (`grs` / `fgr` cluster)

Goal:
- Decide whether `initBoost() -- 0x013E` is still an acceptable readable line.
- Re-check whether `grs = Array(...)` and `fgr = ...` outrun the strict receiver-family proof.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`
- `Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102.pass-block5972-table.md`

Relevant raw window:

```text
0128: 41           op_41
0129: 56 00 01     op_56 arg=1 ; "xmlparser"
012C: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
012F: 35 00 1E     op_35 arg=30 ; "d"
0132: 36 00 1D     op_36 arg=29 ; "boostType"
0135: 51           op_51
0136: 41           op_41
0137: 35 00 1F     op_35 arg=31 ; "initBoost"
013A: 39           op_39
013B: 3A 00 00     op_3A arg=0 ; "xtra"
013E: 51           op_51
013F: 41           op_41
0140: 3B 00 21     op_3B arg=33 ; "Array"
0143: 39           op_39
0144: 3B 00 0A     op_3B arg=10 ; "parseFloat"
...
01B7: 36 00 20     op_36 arg=32 ; "grs"
01BA: 51           op_51
...
01CC: 36 00 28     op_36 arg=40 ; "fgr"
```

Surface comparison:

Strict / normalized block surfaces:
- `blocks.lingo` and `blocks.js` both preserve:
  - `null.initBoost()()`
  - `grs = Array()(parseFloat()(xmlparser.initBoost.f), ...)`
  - `fgr = parseFloat()(xmlparser.initBoost.l)`

Broader helper surface:
- `rebuilt-faithful-full.js` keeps:
  - `boostType = d` at `0x0132`
  - standalone `initBoost()` at `0x013E`
  - broader mixed assignment for `grs`
  - direct wrapper `fgr = "!ATTRIBUTES"(l)` at `0x01CC`

Ownership decisions:

### 0x013E call head

- The raw `0x0136..0x013E` window is a compact call packet.
- The strict block-owned surfaces do **not** preserve a clean bare `initBoost()` line.
- They instead preserve a receiver-bearing form:
  - `null.initBoost()()`
- Because the raw window still does not expose a cleaner proved receiver/source form, the readable deliverable should not keep the stronger bare `initBoost()` line.

Accepted floor:
- pull back `initBoost() -- 0x013E`
- replace it with an explicit unresolved call-head packet anchored to `0x013E`

### 0x01B7 grs cluster

- The `grs` store at `0x01B7` is still safely anchored:
  - raw ends with `op_36 arg=32 ; "grs"` at `0x01B7`
  - block surfaces agree on an `Array(...)` constructor family feeding that sink
- The receiver-family contradiction remains, but it is the same already-recorded `!ATTRIBUTES` vs `xmlparser.initBoost` split, not a new `grs`-specific ownership failure.
- `fgr` at `0x01CC` remains acceptable at the current readable floor for the same reason as the rest of the repeated wrapper family: the sink is clean, only the receiver/property normalization remains disputed.

Conclusion:
- `0x013E` should be tightened to an unresolved call-head packet.
- `0x01B7` and `0x01CC` stay promoted at the current readable floor.
