# Lscr-102 Pass 57: Block 5972 grs constructor audit

Scope:
- script: `Lscr-102`
- handler / block: `RaceEngine_parseConfig` / block `5972`
- narrow target window: `0x013F..0x01B7`
- accepted sink left unchanged: `grs = Array(...) -- 0x01B7`

Goal:
- classify the internal role groups of the `grs` constructor packet one level deeper
- keep the accepted `grs` sink line unchanged
- do not promote helper abstractions like `xmlparser.initBoost` or `getAProp(...)`
- keep unresolved combiner boundaries explicit

Primary sources:
- `Lscr-102.annotated-disasm.md`
- `Lscr-102.pass-block5972-table.md`
- `Lscr-102.blocks.lingo`
- corroboration only:
  - `Lscr-102.stack-faithful.lingo`
  - `Lscr-102.pass51-block03-late-wrapper-ownership-split.md`
  - `Lscr-102.pass56-block03-callhead-combiner-audit.md`

## 1. Exact raw window

From `Lscr-102.annotated-disasm.md` for block `5972`:

```text
013F: 41           op_41
0140: 3B 00 21     op_3B arg=33 ; "Array"
0143: 39           op_39
0144: 3B 00 0A     op_3B arg=10 ; "parseFloat"
0147: 39           op_39
0148: 56 00 01     op_56 arg=1 ; "xmlparser"
014B: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
014E: 35 00 22     op_35 arg=34 ; "f"
0151: 3A 00 01     op_3A arg=1 ; "xmlparser"
0154: 3B 00 0A     op_3B arg=10 ; "parseFloat"
0157: 39           op_39
0158: 56 00 01     op_56 arg=1 ; "xmlparser"
015B: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
015E: 35 00 22     op_35 arg=34 ; "f"
0161: 3A 00 01     op_3A arg=1 ; "xmlparser"
0164: 3B 00 0A     op_3B arg=10 ; "parseFloat"
0167: 39           op_39
0168: 56 00 01     op_56 arg=1 ; "xmlparser"
016B: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
016E: 35 00 23     op_35 arg=35 ; "g"
0171: 3A 00 01     op_3A arg=1 ; "xmlparser"
0174: 3B 00 0A     op_3B arg=10 ; "parseFloat"
0177: 39           op_39
0178: 56 00 01     op_56 arg=1 ; "xmlparser"
017B: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
017E: 35 00 24     op_35 arg=36 ; "h"
0181: 3A 00 01     op_3A arg=1 ; "xmlparser"
0184: 3B 00 0A     op_3B arg=10 ; "parseFloat"
0187: 39           op_39
0188: 56 00 01     op_56 arg=1 ; "xmlparser"
018B: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
018E: 35 00 25     op_35 arg=37 ; "i"
0191: 3A 00 01     op_3A arg=1 ; "xmlparser"
0194: 3B 00 0A     op_3B arg=10 ; "parseFloat"
0197: 39           op_39
0198: 56 00 01     op_56 arg=1 ; "xmlparser"
019B: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
019E: 35 00 26     op_35 arg=38 ; "j"
01A1: 3A 00 01     op_3A arg=1 ; "xmlparser"
01A4: 3B 00 0A     op_3B arg=10 ; "parseFloat"
01A7: 39           op_39
01A8: 56 00 01     op_56 arg=1 ; "xmlparser"
01AB: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
01AE: 35 00 27     op_35 arg=39 ; "k"
01B1: 3A 00 01     op_3A arg=1 ; "xmlparser"
01B4: 23 00 07     op_23 pusharglist? imm=7
01B7: 36 00 20     op_36 arg=32 ; "grs"
01BA: 51           op_51
```

## 2. Safe named-token inventory inside the packet

Using `Lscr-102.pass-block5972-table.md`:

- `arg=33` -> `Array`
- `arg=10` -> `parseFloat`
- `arg=1` -> `xmlparser`
- `arg=7` -> `!ATTRIBUTES`
- `arg=34` -> `f`
- `arg=35` -> `g`
- `arg=36` -> `h`
- `arg=37` -> `i`
- `arg=38` -> `j`
- `arg=39` -> `k`
- `arg=32` -> `grs`

These names are safe because they are direct table-backed token loads or direct sink stores in the raw window above.

## 3. Stricter internal role groups

The packet can be decomposed one level deeper into stable local groups.

### 3.1 Constructor head

- `0x013F`
  - `op_41`
  - unresolved packet seed / constructor head byte
- `0x0140..0x0142`
  - `op_3B arg=33 ; "Array"`
  - safe named token load
- `0x0143`
  - `op_39`
  - unresolved combiner boundary tying the constructor head to the first payload item

### 3.2 Repeated payload item shape

Each payload item from here onward uses the same local shape:
1. `parseFloat` token load
2. unresolved `op_39` combiner boundary
3. `xmlparser` token load
4. `!ATTRIBUTES` token load
5. single-letter key token load
6. trailing `xmlparser` token load

That repeated item shape appears seven times:

#### Item 1: key `f`

- `0x0144..0x0146`
  - `op_3B arg=10 ; "parseFloat"`
- `0x0147`
  - unresolved combiner `op_39`
- `0x0148..0x014A`
  - `op_56 arg=1 ; "xmlparser"`
- `0x014B..0x014D`
  - `op_35 arg=7 ; "!ATTRIBUTES"`
- `0x014E..0x0150`
  - `op_35 arg=34 ; "f"`
- `0x0151..0x0153`
  - `op_3A arg=1 ; "xmlparser"`

#### Item 2: key `f`

- `0x0154..0x0156`
  - `op_3B arg=10 ; "parseFloat"`
- `0x0157`
  - unresolved combiner `op_39`
- `0x0158..0x015A`
  - `op_56 arg=1 ; "xmlparser"`
- `0x015B..0x015D`
  - `op_35 arg=7 ; "!ATTRIBUTES"`
- `0x015E..0x0160`
  - `op_35 arg=34 ; "f"`
- `0x0161..0x0163`
  - `op_3A arg=1 ; "xmlparser"`

#### Item 3: key `g`

- `0x0164..0x0166`
  - `op_3B arg=10 ; "parseFloat"`
- `0x0167`
  - unresolved combiner `op_39`
- `0x0168..0x016A`
  - `op_56 arg=1 ; "xmlparser"`
- `0x016B..0x016D`
  - `op_35 arg=7 ; "!ATTRIBUTES"`
- `0x016E..0x0170`
  - `op_35 arg=35 ; "g"`
- `0x0171..0x0173`
  - `op_3A arg=1 ; "xmlparser"`

#### Item 4: key `h`

- `0x0174..0x0176`
  - `op_3B arg=10 ; "parseFloat"`
- `0x0177`
  - unresolved combiner `op_39`
- `0x0178..0x017A`
  - `op_56 arg=1 ; "xmlparser"`
- `0x017B..0x017D`
  - `op_35 arg=7 ; "!ATTRIBUTES"`
- `0x017E..0x0180`
  - `op_35 arg=36 ; "h"`
- `0x0181..0x0183`
  - `op_3A arg=1 ; "xmlparser"`

#### Item 5: key `i`

- `0x0184..0x0186`
  - `op_3B arg=10 ; "parseFloat"`
- `0x0187`
  - unresolved combiner `op_39`
- `0x0188..0x018A`
  - `op_56 arg=1 ; "xmlparser"`
- `0x018B..0x018D`
  - `op_35 arg=7 ; "!ATTRIBUTES"`
- `0x018E..0x0190`
  - `op_35 arg=37 ; "i"`
- `0x0191..0x0193`
  - `op_3A arg=1 ; "xmlparser"`

#### Item 6: key `j`

- `0x0194..0x0196`
  - `op_3B arg=10 ; "parseFloat"`
- `0x0197`
  - unresolved combiner `op_39`
- `0x0198..0x019A`
  - `op_56 arg=1 ; "xmlparser"`
- `0x019B..0x019D`
  - `op_35 arg=7 ; "!ATTRIBUTES"`
- `0x019E..0x01A0`
  - `op_35 arg=38 ; "j"`
- `0x01A1..0x01A3`
  - `op_3A arg=1 ; "xmlparser"`

#### Item 7: key `k`

- `0x01A4..0x01A6`
  - `op_3B arg=10 ; "parseFloat"`
- `0x01A7`
  - unresolved combiner `op_39`
- `0x01A8..0x01AA`
  - `op_56 arg=1 ; "xmlparser"`
- `0x01AB..0x01AD`
  - `op_35 arg=7 ; "!ATTRIBUTES"`
- `0x01AE..0x01B0`
  - `op_35 arg=39 ; "k"`
- `0x01B1..0x01B3`
  - `op_3A arg=1 ; "xmlparser"`

### 3.3 Final aggregation and sink

- `0x01B4..0x01B6`
  - `op_23 pusharglist? imm=7`
  - safe only as the exported terminal arglist/consumer token with immediate `7`
- `0x01B7..0x01B9`
  - `op_36 arg=32 ; "grs"`
  - clean named sink store
- `0x01BA`
  - `op_51`
  - packet terminator

## 4. Corroboration boundary

Normalized block surface:

```text
grs = Array()(parseFloat()(xmlparser.initBoost.f), parseFloat()(xmlparser.initBoost.f), parseFloat()(xmlparser.initBoost.g), parseFloat()(xmlparser.initBoost.h), parseFloat()(xmlparser.initBoost.i), parseFloat()(xmlparser.initBoost.j), parseFloat()(xmlparser.initBoost.k))
```

Faithful stack surface:

```text
grs = xmlparser("!ATTRIBUTES"(i), parseFloat, xmlparser, "!ATTRIBUTES"(j), parseFloat, xmlparser, "!ATTRIBUTES"(k)) -- 0x01B7
```

These are useful only as corroboration that:
- the packet is one constructor-family payload ending at the `grs` sink
- the payload contains repeated `parseFloat` / `!ATTRIBUTES` / single-letter-key structure

They are not safe grounds for promoting:
- `xmlparser.initBoost.<field>`
- `getAProp(...)`
- a helper abstraction for the repeated items

## 5. What remains unresolved

Still unresolved at the strict raw-backed layer:
- the exact semantics of every `op_39` combiner site
- whether `op_41` is only a constructor seed or also consumes carried state
- whether each trailing `op_3A arg=1 ; "xmlparser"` is best read as receiver reuse, call-local token return, or another in-band combiner operand
- the exact semantic name of `op_23 pusharglist? imm=7` beyond its exported immediate and terminal role

Not safe from this pass:
- any helper abstraction like `attrs.getAProp(...)`
- any normalization beyond the exported tokens above
- any change to the accepted sink line `grs = Array(...) -- 0x01B7`

## 6. Strict conclusion

Yes: the `grs` constructor packet `0x013F..0x01B7` can be classified one level deeper.

Safe internal role groups are:
- constructor head:
  - unresolved seed `0x013F`
  - named `Array` token `0x0140..0x0142`
  - unresolved combiner `0x0143`
- seven repeated payload items:
  - `parseFloat`
  - unresolved `op_39`
  - `xmlparser`
  - `!ATTRIBUTES`
  - key token (`f`, `f`, `g`, `h`, `i`, `j`, `k`)
  - trailing `xmlparser`
- terminal aggregator and sink:
  - `op_23 pusharglist? imm=7`
  - `grs`
  - terminator

The accepted `grs` sink line stays unchanged. The deeper gain here is packet-role classification, not a new readable-Lingo promotion.
