# Lscr-102 Pass 51: Block 5972 late wrapper ownership split

Scope:
- Script: `Lscr-102`
- Handler block: `5972` (`RaceEngine_parseConfig`)
- Narrow targets:
  - later wrapper/call family `0x0136..0x01CC`
  - carried rhs seam `0x0240`

Goal:
- gather stricter local ownership evidence for the late `initBoost` / `grs` / `fgr` family
- decide whether `0x0240` is still only a carried-rhs note or can be split more tightly
- stay at strict local block evidence only, without borrowing `xmlparser.initBoost` or `getAProp(...)` helper semantics

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass32-0240-0080-stopmap.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass34-block03-receiver-ownership.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass35-block03-callhead-grs-audit.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass36-block03-wrapper-family-stopmap.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block5972-table.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.stack-faithful.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.reconstructed.lingo`

## Exact raw windows

Relevant disasm rows:

```text
0136: 41           op_41
0137: 35 00 1F     op_35 arg=31 ; "initBoost"
013A: 39           op_39
013B: 3A 00 00     op_3A arg=0 ; "xtra"
013E: 51           op_51
013F: 41           op_41
0140: 3B 00 21     op_3B arg=33 ; "Array"
...
01B7: 36 00 20     op_36 arg=32 ; "grs"
01BA: 51           op_51
01BB: 41           op_41
01BC: 3B 00 0A     op_3B arg=10 ; "parseFloat"
...
01CC: 36 00 28     op_36 arg=40 ; "fgr"
01CF: 51           op_51
0230: 41           op_41
0231: 3B 00 21     op_3B arg=33 ; "Array"
0234: 39           op_39
0235: 3A 00 00     op_3A arg=0 ; "xtra"
0238: 36 00 32     op_36 arg=50
023B: 51           op_51
023C: 41           op_41
023D: 54 00 01     op_54 arg=1 ; "xmlparser"
0240: 36 00 32     op_36 arg=50
0243: 51           op_51
```

## Stricter local split found

Yes. The later family is tighter than the earlier generic prose implied.

Strict local ownership split:
- `0x0136..0x013E`
  - one unresolved `initBoost` call-head packet ending at `op_51`
- `0x013F..0x01B7`
  - one separate constructor payload ending in a clean named sink:
    - `op_36 arg=32 ; "grs"`
- `0x01BA`
  - packet terminator only
- `0x01BB..0x01CC`
  - one separate wrapper/coercer payload ending in a clean named sink:
    - `op_36 arg=40 ; "fgr"`
- `0x01CF`
  - packet terminator only
- `0x0230..0x0238`
  - separate constructor payload ending in:
    - `op_36 arg=50`
- `0x023B`
  - packet terminator only
- `0x023C..0x0240`
  - separate overwrite payload ending in:
    - `op_36 arg=50`
- `0x0243`
  - packet terminator only

## Surface corroboration

Normalized block surfaces:

```text
null.initBoost()()
grs = Array()(parseFloat()(xmlparser.initBoost.f), ...)
fgr = parseFloat()(xmlparser.initBoost.l)
tqArray = Array()()
tqArray = param_xmlparser
```

Faithful stack / JS surfaces:

```text
initBoost() -- 0x013E
grs = xmlparser("!ATTRIBUTES"(i), parseFloat, xmlparser, "!ATTRIBUTES"(j), parseFloat, xmlparser, "!ATTRIBUTES"(k)) -- 0x01B7
fgr = "!ATTRIBUTES"(l) -- 0x01CC
id_50 = param_xmlparser -- 0x0240
```

Important boundary:
- these corroborate the sink layout and the packet separation
- they do **not** justify promoting `xmlparser.initBoost.<field>` or `getAProp(...)` as the strict final source layer

## Ownership decisions

### `0x0136..0x013E`

No tighter decomposition found.

Why:
- raw bytes still expose only one compact packet
- `blocks.lingo` / `blocks.js` still preserve a receiver-bearing unresolved form
- `stack-faithful.lingo` / `rebuilt-faithful-full.js` still preserve only a broader `initBoost()`-family expression

Decision:
- `0x0136..0x013E` is already at its strict floor as one unresolved call-head packet

### `0x013F..0x01B7`

Stricter split confirmed.

Why:
- raw `0x013F..0x01B7` is a continuous constructor payload ending in a clean `grs` sink
- `0x01BA` is only the terminator after that sink
- the next real payload does not begin until `0x01BB`

Decision:
- `grs` is already a separate strict sink row
- no further pullback is required for the sink itself
- the unresolved part remains the wrapper/property abstraction layer, not row ownership

### `0x01BB..0x01CC`

Stricter split confirmed.

Why:
- raw `0x01BB..0x01CC` is a separate payload ending in a clean `fgr` sink
- it begins only after the `grs` packet has already closed at `0x01BA`

Decision:
- `fgr` is already a separate strict sink row
- no need to fuse it back into the earlier `grs` family

### `0x0240`

Stricter split confirmed.

Why:
- `0x0230..0x0238` is one earlier constructor payload ending in `tqArray`
- `0x023C..0x0240` is a separate overwrite payload ending in the same `tqArray` sink
- `stack-faithful.lingo` still preserves the latter as:
  - `id_50 = param_xmlparser -- 0x0240`
- `blocks.lingo` / `blocks.js` preserve the same two-row sequence:
  - `tqArray = Array()()`
  - `tqArray = param_xmlparser`

Decision:
- `0x0240` is not just a vague carried-rhs seam
- it is already the second of two separate strict sink rows on the same local:
  - first constructor row `0x0230..0x0238`
  - then overwrite row `0x023C..0x0240`
- the rhs is still at strict floor as `param_xmlparser`
- no cleaner rhs source is exposed locally

## Result

New strict local evidence found:
- yes, the later `5972` family can be split more tightly by packet ownership
- no, the `initBoost` call-head itself cannot be decomposed further from strict local evidence
- no, `0x0240` cannot be promoted to a cleaner rhs than `param_xmlparser`

Strict stop-map after this pass:
- unresolved call-head packet: `0x0136..0x013E`
- clean `grs` sink packet: `0x013F..0x01B7`
- clean `fgr` sink packet: `0x01BB..0x01CC`
- clean two-row `tqArray` sequence:
  - constructor packet `0x0230..0x0238`
  - overwrite packet `0x023C..0x0240`
