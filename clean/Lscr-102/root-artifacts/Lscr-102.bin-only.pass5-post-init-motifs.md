# Lscr-102 Bin-Only Pass 5: Post-Init Motifs

Source bin used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

This pass covers the raw bytes immediately after the first `init` block:

- start: `0x0D2A`
- end inspected: `0x0E30`
- inspected length: `262`

No opcode names are assigned. This is still raw-pattern evidence only.

## Highest-frequency bytes

| byte | count |
| --- | ---: |
| `0x00` | `62` |
| `0x41` | `40` |
| `0x35` | `29` |
| `0x51` | `21` |
| `0x36` | `20` |
| `0x0A` | `10` |
| `0x1B` | `5` |
| `0x83` | `5` |
| `0x27` | `5` |

## Strong repeated motifs

Most repeated sequences in this region:

| pattern | count |
| --- | ---: |
| `51 41 41 35 00 0A 36 00` | `10` |
| `83 27 3D 00 34 12 07 00` | `4` |
| `35 00 35 39 3A 00 00 51` | `3` |
| `51 41 3C 00 2D` | `2` |

## Proven raw runs

The first bytes in the region are:

```text
0x0D2A  00 1a 1b 41 35 00 1b 1b 41 35 00 1c 1b 41 35 00
0x0D3A  1d 1b 83 41 35 00 1e 1e 36 00 18 51 41 41 35 00
```

The repeated `51 41 41 35 00 0A 36 00` family appears across:

```text
0x0D44  51 41 41 35 00 0a 36 00
0x0D4D  51 41 41 35 00 21 22 36
0x0D57  51 41 41 35 00 0a 36 00
0x0D60  51 41 41 35 00 0a 36 00
0x0D69  51 41 41 35 00 0a 36 00
0x0D72  51 41 41 35 00 0a 36 00
0x0D7B  51 41 41 35 00 0a 36 00
0x0D90  51 41 41 35 00 0a 36 00
0x0DBF  51 41 41 35 00 0a 36 00
0x0DC8  51 41 41 35 00 0a 36 00
```

The repeated `83 27 3D 00 34 12 07 00` family appears in:

```text
0x0DDE  83 27 3d 00 34 12 07 00
0x0DF4  83 27 3d 00 34 12 07 00
0x0E0E  83 27 3d 00 34 12 07 00
0x0E24  83 27 3d 00 34 12 07 00
```

The chained tail `35 00 35 39 3A 00 00 51` appears in:

```text
0x0DE8  35 00 35 39 3a 00 00 51
0x0DFE  35 00 35 39 3a 00 00 51
0x0E18  35 00 35 39 3a 00 00 51
```

## Structural result

The bytes after the first `init` block are not just trailing noise. They form a second repeated-pattern region with a different motif inventory from `0x0C94..0x0D29`.

That means the next decoding pass should treat:

- `0x0C94..0x0D29`
- `0x0D2A..0x0E30`

as two separate raw blocks.
