## Lscr-102 Pass 34: Block 5972 receiver-ownership split and front-edge residue check

Scope:
- Script: `Lscr-102`
- Handler block: `5972` (`RaceEngine_parseConfig`)
- Narrow windows:
  - front edge `0x0033..0x005C`
  - repeated `!ATTRIBUTES` / `xmlparser.initBoost` receiver family

Goal:
- Separate strict raw wrapper evidence from normalized block-surface receiver chains.
- Decide whether the staged standalone `xtra -- 0x0047` row is executable or just a terminator residue.
- Keep the larger receiver/property contradiction explicit instead of promoting a cleaner rewrite.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`
- `Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102.pass-block5972-table.md`

Raw front-edge disasm:

```text
0033: 35 00 03     op_35 arg=3 ; "makeList"
0036: 39           op_39
0037: 3A 00 00     op_3A arg=0 ; "xtra"
003A: 3F           op_3F
003B: 37           op_37
003C: 35 00 04     op_35 arg=4 ; "n2"
003F: 57 00 01     op_57 arg=1 ; "xmlparser"
0042: 51           op_51
0043: 3E           op_3E
0044: 57 00 00     op_57 arg=0 ; "xtra"
0047: 51           op_51
0048: 41           op_41
0049: 3B 00 06     op_3B arg=6 ; "parseInt"
004C: 39           op_39
004D: 56 00 01     op_56 arg=1 ; "xmlparser"
0050: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
0053: 35 00 08     op_35 arg=8 ; "r"
0056: 3A 00 01     op_3A arg=1 ; "xmlparser"
0059: 36 00 05     op_36 arg=5 ; "w"
005C: 51           op_51
```

Front-edge ownership decision:
- `0x003F..0x0042` still supports the promoted row:
  - `xmlparser = xtra.makeList().n2`
- `0x0044` still supports:
  - `xtra = VOID`
- `0x0047` does **not** support a standalone executable `xtra` row.
  - It is the `op_51` terminator immediately following the `op_57 arg=0 ; "xtra"` store.
  - The next real receiver-chain setup begins at `0x0048` and continues into the first `w = ...` assignment ending at `0x0059`.

Receiver-family split:
- Strict raw wrapper family:
  - `annotated-disasm.md`, `pass-block5972-table.md`, and `rebuilt-faithful-full.js` keep the repeated wrapper symbol as payload id `7 = !ATTRIBUTES`
  - example raw window:
    - `0x004D` local `xmlparser`
    - `0x0050` symbol `!ATTRIBUTES`
    - `0x0053` field `r`
    - `0x0059` store to `w`
- Normalized block-surface family:
  - `blocks.lingo` and `blocks.js` normalize the same repeated reads to `xmlparser.initBoost.<field>`
  - they also rename slot `7` to `initBoost` in their local names list
- Broader helper family:
  - `rebuilt-faithful-full.js` additionally carries a higher-level `getAProp("!ATTRIBUTES")` rewrite in its helper-side preface

Accepted floor:
- remove the staged standalone `xtra -- 0x0047` residue from the deliverable
- keep `xmlparser = xtra.makeList().n2`
- keep `xtra = VOID`
- keep the repeated wrapper reads in direct raw-backed form:
  - `parseInt("!ATTRIBUTES"(r))`
  - `parseFloat("!ATTRIBUTES"(v))`
  - etc.
- do **not** promote:
  - `xmlparser.initBoost.<field>` as the deliverable source form
  - a `getAProp(...)` rewrite

Conclusion:
- The front edge yields one safe cleanup: `0x0047` is terminator residue, not a standalone row.
- The larger receiver/property contradiction remains unresolved and must stay provenance-separated.
