# Lscr-102 Bin-Only Pass 8: `startRace` Region

Source bin used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

## Proven descriptor markers

Within `0x1750..0x1D07`, the only clean UTF-16 function name is:

- `0x1770`: `startRace`

The same region also contains clean ASCII names:

- `0x17B4`: `carXML`
- `0x17C8`: `torqueArray`
- `0x17E0`: `gParserObject`
- `0x17FC`: `c`

## Corrected boundary

An earlier assumption that the field at `0x180C` (`0x96`) was the full block length was not supported by later bytes.

What the bin actually proves is:

- structured `startRace`-adjacent region starts at `0x1750`
- raw motif stream continues from `0x1810` through at least `0x1D07`
- the next clean aligned table does not begin until `0x1D08`

## Raw motif stream `0x1810..0x1D07`

- length: `1272`

Strong repeated motifs:

| pattern | count |
| --- | ---: |
| `56 00 01 35 00 07 35 00` | `51` |
| `39 56 00 01 35 00 07 35` | `50` |
| `3b 00 0a 39 56 00 01 35` | `40` |
| `51 41 3b 00 0a 39 56 00` | `33` |
| `51 41 3b 00 06 39 56 00` | `10` |
| `3a 00 01 3b 00 0a 39 56` | `6` |
| `3a 00 01 41 35 00 58 1e` | `5` |

This region should be treated as one unresolved raw block associated with the `startRace` descriptor, not as a short `0x96`-byte block.
