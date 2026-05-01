# Lscr-93 Pass 2 Analysis

This pass tightens the first reconstruction by reading the hidden block as a
structured embedded-code record instead of only scanning printable strings.

## Dispatch

The visible `exitFrame` handler is still just the ProjectorRays dispatcher stub:

```lingo
on exitFrame
  pushcons 1
  pushcons 2
  unk26
end
```

The existing v12 rule maps this to embedded block index `0` because the second
constant is `2` and `2 - 2 = 0`.

## Embedded Block 0 Layout

The JSON says block 0 starts at literal offset `0`, length `412`. In the raw
literal data, the first four bytes before the marker are:

```text
00 00 84 D0
```

Then the hidden block marker/header begins:

```text
03 00 AD DE 19 00 00 00 03 00 00 00 96 00 00 00
```

Interpreted as:

| Field | Value |
|---|---:|
| marker | `03 00 AD DE` |
| headerWord0 | `25` |
| headerWord1 | `3` |
| headerWord2 | `150` |

`headerWord0 = 25` matches the active instruction bytes before alignment/pad.
The table area starts at block-relative offset `0x30`.

## Block 0 Instruction Area

Block-relative offsets:

```text
0014: 7D 00 04    op_7D arg=4
0017: 3B 00 00    op_3B arg=0
001A: 35 00 01    op_35 arg=1
001D: 02          op_02
001E: 3B 00 00    op_3B arg=0
0021: 35 00 02    op_35 arg=2
0024: 02          op_02
0025: 3B 00 00    op_3B arg=0
0028: 35 00 03    op_35 arg=3
002B: 02          op_02
002C: 00 00 00 00 pad/alignment
```

Given table A below, the repeated pattern probably references:

```text
_global.gNetID
_global.checkedForOneClient
_global.checkProcessResult
```

So `op_3B 0` is a strong candidate for loading table entry `0` (`_global`), and
`op_35 N` is a strong candidate for a property/member lookup by table entry.
`op_02` may be a statement terminator, pop, or return/store marker for this
hidden VM.

## Block 0 Table A

Parsed at block-relative offset `0x30` as:

| Index | id | kind | encoding | value |
|---:|---:|---:|---|---|
| 0 | 0 | 4 | UTF-16LE | `_global` |
| 1 | 1 | 4 | UTF-16LE | `gNetID` |
| 2 | 2 | 4 | UTF-16LE | `checkedForOneClient` |
| 3 | 3 | 4 | UTF-16LE | `checkProcessResult` |
| 4 | 4 | 0 | mixed record | starts a non-UTF16 record; see below |

The first four entries are now solid evidence, not just string-scan hints.
Entry `4` changes record format and appears to begin the next table or a mixed
constant/function record.

## Block 0 Mixed Records

After the four clean UTF-16 entries, the remaining block-0 data contains these
recoverable records:

| Approx offset | Encoding | Value |
|---:|---|---|
| `0xD4` | ASCII | `Function` |
| `0xE8` | UTF-16LE | `exitFrame` |
| `0x118` | ASCII | `me` |
| `0x128` | ASCII | `i` |
| `0x138` | ASCII | `retVal` |
| `0x14C` | ASCII | `resultStr` |
| `0x164` | ASCII | `gParserObject` |
| `0x180` | UTF-16LE-ish / short record | `c` |
| `0x190` | ASCII | `fbURL` |

This suggests the block contains at least:

- a global/property name table,
- a function/handler metadata record (`Function`, `exitFrame`),
- a local-variable table (`me`, `i`, `retVal`, `resultStr`, `c`),
- object/string identifiers (`gParserObject`, `fbURL`).

## Embedded Block 1 Layout

Block 1 starts immediately after block 0, at JSON literal offset `412`, length
`33588`.

Header:

| Field | Value |
|---|---:|
| marker | `03 00 AD DE` |
| headerWord0 | `11982` |
| headerWord1 | `0` |
| headerWord2 | `150` |

This block is the large payload. The JSON-visible printable strings still look
encoded rather than like source-level identifiers.

## Block 1 First-Region Heuristic Disassembly

This is intentionally offset-preserving. Opcode names are placeholders until
the hidden VM mapping is proved.

```text
0014: 3B 00 00    op_3B arg=0
0017: 35 00 01    op_35 arg=1
001A: 3E          op_3E
001B: 12 07 00 67 op_12/op_07 branch-like target/imm=103
001F: 3B 00 02    op_3B arg=2
0022: 39          op_39
0023: 3B 00 00    op_3B arg=0
0026: 35 00 03    op_35 arg=3
0029: 3A 00 01    op_3A arg=1
002C: 07 00 57    likely branch/immediate bytes, parser uncertain
0033: 36 00 01    op_36 arg=1
0036: 51          op_51
0037: 3B 00 04    op_3B arg=4
003A: 39          op_39
003B: 3B 00 00    op_3B arg=0
003E: 35 00 03    op_35 arg=3
0041: 3A 00 01    op_3A arg=1
0044: 3D 00 05    op_3D arg=5
0047: 12 07 00 30 op_12/op_07 branch-like target/imm=48
004B: 3B 00 06    op_3B arg=6
004E: 39          op_39
004F: 3B 00 07    op_3B arg=7
0052: 39          op_39
0053: 3B 00 00    op_3B arg=0
0056: 35 00 03    op_35 arg=3
0059: 3A 00 01    op_3A arg=1
005C: 3A 00 01    op_3A arg=1
005F: 51          op_51
0060: 3B 00 08    op_3B arg=8
0063: 39          op_39
0064: 3B 00 07    op_3B arg=7
0067: 39          op_39
0068: 3B 00 00    op_3B arg=0
006B: 35 00 03    op_35 arg=3
006E: 3A 00 01    op_3A arg=1
0071: 3A 00 01    op_3A arg=1
0074: 51          op_51
0075: 06 00 0E    likely jump +14
0078: 3B 00 08    op_3B arg=8
007B: 39          op_39
007C: 3D 00 09    op_3D arg=9
007F: 3A 00 01    op_3A arg=1
0082: 51          op_51
0083: 3E          op_3E
0084: 57 00 00    op_57 arg=0
0087: 51          op_51
0088: 56 00 00    op_56 arg=0
008B: 3B 00 00    op_3B arg=0
008E: 35 00 0A    op_35 arg=10
0091: 35 00 0B    op_35 arg=11
0094: 14 07 2C 2A op_14/op_07 branch-like target/imm=11306
```

## New Working Hypotheses

| Opcode | Current hypothesis | Evidence |
|---|---|---|
| `3B nn nn` | load name/symbol/table entry | repeatedly indexes table values |
| `35 nn nn` | property/member lookup | `3B 0` + `35 1/2/3` aligns with `_global.name` |
| `3A nn nn` | call or apply with argument count/index | appears after lookup pairs |
| `3D nn nn` | store local/temp or bind | appears before branch tests and repeated locals |
| `39` | dereference/get value | follows `3B` entries in block 1 |
| `51` | statement boundary/pop/store completion | frequent after call-like sequences |
| `56/57 nn nn` | local/temp load/store | appears in repeated temporary-expression areas |
| `06/07/12/14` | branch/immediate family | used around control-flow-looking offsets |
| `02` | block-0 expression terminator | follows each `_global.property` sequence |
| `7D nn nn` | function/prologue/import setup | first op in block 0; argument `4` matches table A final id |

## Translation Impact

The first reconstruction can now be improved from:

```lingo
-- touches gNetID, checkedForOneClient, checkProcessResult
```

to the stronger statement:

```lingo
-- block 0 explicitly evaluates or registers:
--   _global.gNetID
--   _global.checkedForOneClient
--   _global.checkProcessResult
```

The next pass should parse the mixed block-0 records into named sections and
then apply the same parser to block 1 so its table indices can be resolved.

