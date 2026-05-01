# Lscr-102 Bin-Only Pass 4: Init Motifs

Source bin used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

This pass only describes repeated raw byte motifs inside the first `init` block at `0x0C94..0x0D29`. It does not assign opcode names.

## Raw block

- start: `0x0C94`
- length: `0x96` (`150`)

## Byte frequency

Highest-frequency bytes in the block:

| byte | count |
| --- | ---: |
| `0x00` | `31` |
| `0x41` | `29` |
| `0x36` | `19` |
| `0x51` | `19` |
| `0x35` | `9` |
| `0x3E` | `7` |
| `0x0A` | `4` |
| `0x42` | `4` |
| `0x1D` | `2` |

## Strong repeated motifs

Highest-signal repeated byte patterns:

| pattern | count |
| --- | ---: |
| `36 00` | `19` |
| `51 41` | `19` |
| `41 35 00` | `8` |
| `41 3E 36` | `7` |
| `3E 36 00` | `7` |
| `51 41 3E` | `6` |
| `51 41 41` | `6` |
| `41 41 35` | `6` |
| `35 00 0A` | `4` |
| `41 42 36` | `4` |
| `42 36 00` | `4` |

## Proven raw runs

The start of the block is a clean six-run sequence:

```text
0x0C94  41 3e 36 00 00 51
0x0C9A  41 3e 36 00 01 51
0x0CA0  41 3e 36 00 02 51
0x0CA6  41 3e 36 00 03 51
0x0CAC  41 3e 36 00 04 51
0x0CB2  41 3e 36 00 05 51
```

Later repeated runs in the same block:

```text
0x0CE9  41 3e 36 00 0e 51
0x0CEF  41 42 36 00 0f 51
0x0CF5  41 42 36 00 10 51
0x0CFB  41 42 36 00 11 51
0x0D01  41 42 36 00 12 51
```

And there are six repeated `41 41 35 00 nn` runs:

```text
0x0CC8  41 41 35 00 0a
0x0CD7  41 41 35 00 0a
0x0CE0  41 41 35 00 0a
0x0D07  41 41 35 00 0a
0x0D10  41 41 35 00 15
0x0D23  41 41 35 00 19
```

Two `41 35 00 nn 1d` tails also repeat:

```text
0x0D15  41 35 00 16 1d
0x0D1A  41 35 00 17 1d
```

## Structural result

The block is not random bytes. It is built from a small repeated motif set:

- `41 3E 36 00 nn 51`
- `41 42 36 00 nn 51`
- `41 41 35 00 nn`
- `41 35 00 nn 1d`

The unresolved part is still the meaning of those motifs, not whether the motif structure exists.
