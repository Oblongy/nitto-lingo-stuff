## Lscr-102 Pass 36: Block 5972 repeated wrapper family stop-map

Scope:
- Script: `Lscr-102`
- Handler block: `5972` (`RaceEngine_parseConfig`)
- Repeated wrapper span: `0x0059..0x04E2`

Goal:
- Separate the repeated assignment family into evidence layers.
- Decide whether any rows inside the family need to be pulled back or can stay promoted.
- Record exactly what remains unresolved.

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.blocks.lingo`
- `Lscr-102.blocks.js`
- `Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102.pass-block5972-table.md`

## Layer 1: strict raw wrapper family

The raw disasm repeats the same local shape through the whole span:
- push coercer (`parseInt` or `parseFloat`) or direct wrapper read
- load local `xmlparser`
- load payload id `7 = !ATTRIBUTES`
- load field symbol
- sink into a named local store

Representative raw rows:
- `0x0059`: `w`
  - `56 00 01 ; "xmlparser"`
  - `35 00 07 ; "!ATTRIBUTES"`
  - `35 00 08 ; "r"`
  - `36 00 05 ; "w"`
- `0x0132`: `boostType`
  - `56 00 01 ; "xmlparser"`
  - `35 00 07 ; "!ATTRIBUTES"`
  - `35 00 1E ; "d"`
  - `36 00 1D ; "boostType"`
- `0x01B7`: `grs`
  - repeated `parseFloat + xmlparser + !ATTRIBUTES + field` subpackets
  - final `36 00 20 ; "grs"`
- `0x04E2`: `launchControl`
  - same family ending in `36 00 6C ; "launchControl"`

This layer supports the current readable deliverable rows such as:
- `w = parseInt("!ATTRIBUTES"(r))`
- `hpi = parseFloat("!ATTRIBUTES"(v))`
- `boostType = "!ATTRIBUTES"(d)`
- `grs = Array(parseFloat("!ATTRIBUTES"(f)), ...)`
- `launchControl = parseInt("!ATTRIBUTES"(as))`

## Layer 2: normalized block-surface family

`blocks.lingo` and `blocks.js` keep the same sinks, but normalize the shared receiver/property chain to:
- `xmlparser.initBoost.<field>`

Representative normalized rows:
- `w = parseInt()(xmlparser.initBoost.r)`
- `boostType = xmlparser.initBoost.d`
- `grs = Array()(parseFloat()(xmlparser.initBoost.f), ...)`
- `launchControl = parseInt()(xmlparser.initBoost.as)`

Important detail:
- these surfaces also rename local slot `7` to `initBoost` in their names table
- that normalization is consistent inside those two artifacts, but it is still a higher abstraction than the strict raw wrapper family

## Layer 3: broader helper rewrite

`rebuilt-faithful-full.js` contains an even broader helper-side abstraction:
- `const attrs = parsed.getAProp("!ATTRIBUTES");`
- then repeated `attrs.getAProp(...)` reads

This layer is useful corroboration, but it is not promoted because:
- it introduces a helper object `attrs`
- it folds the repeated wrapper family into a cleaner API not directly exposed by the strict block-owned surfaces

## Decision by row family

Safe to keep promoted at current deliverable floor:
- the repeated sink rows themselves from `0x0059` through `0x04E2`
- arithmetic rows that consume those sinks directly, such as:
  - `UkInit = (c0_7 * UsInit)` at `0x00FA`
  - the part-damage formulas at `0x03DE..0x0464`

Not safe to promote further:
- `xmlparser.initBoost.<field>` as final readable source
- `getAProp("!ATTRIBUTES")` / `attrs.getAProp(...)`

No new pullback required inside the repeated wrapper family:
- each current readable row still has a clean named sink at the raw level
- the unresolved part is the shared receiver/property abstraction layer, not the existence of the sink rows themselves

Conclusion:
- The current deliverable floor for the repeated family is correct:
  - keep direct raw-backed wrapper calls in `rightful.ls`
  - reject the normalized `xmlparser.initBoost.<field>` rewrite as final source
  - reject the broader `getAProp(...)` rewrite as final source
