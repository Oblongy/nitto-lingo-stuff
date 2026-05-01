# Lscr-102 Bin-Only Pass 7: Raw Block at `0x1658`

Source bin used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

This pass isolates the raw non-table region immediately after the late mixed tail.

## Proven boundary

- start: `0x1658`
- end: `0x174F`
- length: `248`

## High-frequency bytes

| byte | count |
| --- | ---: |
| `0xB4` | `47` |
| `0x01` | `38` |
| `0x62` | `36` |
| `0x64` | `25` |
| `0x63` | `20` |
| `0x05` | `18` |
| `0x02` | `15` |

## Strong repeated motifs

Most repeated motifs in the block:

| pattern | count |
| --- | ---: |
| `b4 62 01 63 05 b4` | `16` |
| `62 01 63 05 b4 62` | `15` |
| `62 02 b4 62 02 b4` | `8` |
| `64 04 b4 64 04 b4` | `4` |
| `b4 61 01 c9 08 64` | `4` |

## Structural result

This is another raw motif block, not part of the late aligned table. It ends before the `startRace` descriptor region begins.
