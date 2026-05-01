# Lscr-102 Bin-Only Pass 2

Source bins used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lnam-100.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

Files intentionally not used for this pass:
- `Lscr-102.json`
- `Lscr-102.*.md`
- `Lscr-102.*.lingo`
- `Lscr-102.*.js`

## Proven boundaries

- `0x03E0..0x0B1C`: aligned typed table
- `0x0BF8..0x0C4B`: secondary symbol table
- `0x0C90`: raw `init` bytecode length header
- `0x0C94..0x0D29`: raw `init` bytecode payload

## Aligned typed table

The first pass treated the table as variable-width records but missed one rule:

- `type = 4` UTF-16 string payloads are padded to a 4-byte boundary

With that alignment rule, the table walks cleanly from `0x03E0` through the final valid string at `0x0B1C`.

### Adjacent name/value pairs

These pairs are proven only because a `type = 4` string record is immediately followed by a numeric record:

| nameOff | name | valueOff | type | value |
| --- | --- | --- | --- | --- |
| `0x0428` | `DAfp` | `0x043C` | `double` | `0.009235545` |
| `0x044C` | `g` | `0x045C` | `double` | `32.1768` |
| `0x046C` | `rpmGearConversion` | `0x049C` | `double` | `0.85` |
| `0x04AC` | `gConvSlipA` | `0x04CC` | `double` | `6.28` |
| `0x04FC` | `brakeDecleration` | `0x0528` | `int32` | `-40` |
| `0x0534` | `revLimiterDeceleration` | `0x056C` | `int32` | `-30` |
| `0x05B8` | `partBreakPoint` | `0x05E0` | `double` | `0.2` |
| `0x05F0` | `vToMph` | `0x0608` | `double` | `0.68181818` |
| `0x0618` | `c0_5` | `0x062C` | `double` | `0.5` |
| `0x0690` | `c0_0075` | `0x06AC` | `double` | `0.0075` |
| `0x06D0` | `c0_4` | `0x06E4` | `double` | `0.4` |
| `0x06F4` | `c0_7` | `0x0708` | `double` | `0.7` |
| `0x0718` | `c1_7` | `0x072C` | `double` | `1.7` |
| `0x073C` | `c1_25` | `0x0754` | `double` | `1.25` |
| `0x079C` | `c5_5` | `0x07B0` | `double` | `5.5` |
| `0x0804` | `c0_005` | `0x081C` | `double` | `0.005` |
| `0x082C` | `c0_016` | `0x0844` | `double` | `0.016` |
| `0x0864` | `c0_09` | `0x087C` | `double` | `0.09` |
| `0x088C` | `c0_6` | `0x08A0` | `double` | `0.6` |
| `0x08C4` | `c0_015` | `0x08DC` | `double` | `0.015` |
| `0x08EC` | `c0_02` | `0x0904` | `double` | `0.02` |
| `0x0928` | `c0_18` | `0x0940` | `double` | `0.18` |
| `0x098C` | `c7_5` | `0x09A0` | `double` | `7.5` |
| `0x09B0` | `c1_8` | `0x09C4` | `double` | `1.8` |
| `0x09D4` | `c1_15` | `0x09EC` | `double` | `1.15` |
| `0x0A10` | `c0_95` | `0x0A28` | `double` | `0.95` |
| `0x0A38` | `c0_05` | `0x0A50` | `double` | `0.05` |
| `0x0A74` | `c0_1` | `0x0A88` | `double` | `0.1` |
| `0x0A98` | `c0_65` | `0x0AB0` | `double` | `0.65` |
| `0x0AD0` | `c0_07` | `0x0AE8` | `double` | `0.07` |
| `0x0AF8` | `c2_5` | `0x0B0C` | `double` | `2.5` |

### Names without adjacent scalar payload

These names are present as typed string records, but this pass does not claim a value because no numeric record follows immediately:

- `0x03E0 sendInterval`
- `0x0404 secondBuffer`
- `0x04DC gConvSlipB`
- `0x0578 idleRPM`
- `0x0594 tqFlyFactor`
- `0x063C c0`
- `0x064C c100`
- `0x0660 c1000`
- `0x0678 c10000`
- `0x06BC c13`
- `0x0764 c9`
- `0x0774 c299`
- `0x0788 c300`
- `0x07C0 c2`
- `0x07D0 c5`
- `0x07E0 c50`
- `0x07F4 c8`
- `0x0854 c3`
- `0x08B0 c10`
- `0x0914 c200`
- `0x0950 c1320`
- `0x0968 c760`
- `0x097C c7`
- `0x09FC c80`
- `0x0A60 c0_2`
- `0x0AC0 c4`
- `0x0B1C c1`

## Secondary symbol table

The separate table at `0x0BF8` decodes cleanly as three aligned `type = 4` string records:

| off | id | type | chars | value |
| --- | --- | --- | --- | --- |
| `0x0BF8` | `1` | `4` | `10` | `RaceEngine` |
| `0x0C18` | `2` | `4` | `9` | `prototype` |
| `0x0C38` | `3` | `4` | `4` | `init` |

This is the strongest bin-only evidence so far for the scaffold shape used in the Lingo and JS files.

## Raw init bytecode block

- `0x0C90`: `0x00000096`
- `0x0C94..0x0D29`: 150 raw payload bytes

Hex payload:

```text
41 3e 36 00 00 51 41 3e 36 00 01 51 41 3e 36 00
02 51 41 3e 36 00 03 51 41 3e 36 00 04 51 41 3e
36 00 05 51 41 3d 00 07 36 00 06 51 41 54 00 00
36 00 08 51 41 41 35 00 0a 36 00 09 51 41 43 36
00 0b 51 41 41 35 00 0a 36 00 0c 51 41 41 35 00
0a 36 00 0d 51 41 3e 36 00 0e 51 41 42 36 00 0f
51 41 42 36 00 10 51 41 42 36 00 11 51 41 42 36
00 12 51 41 41 35 00 0a 36 00 13 51 41 41 35 00
15 41 35 00 16 1d 41 35 00 17 1d 36 00 14 51 41
41 35 00 19 41 35
```

This pass preserves the exact bytes but does not assign opcode names or semantics to them.

## Output files updated from this pass

- [Lscr-102.bin-only.reconstructed.lingo](C:/Users/Dilldo/Nitto/Lingo%20Stuff/Lscr-102.bin-only.reconstructed.lingo)
- [Lscr-102.bin-only.rebuilt.js](C:/Users/Dilldo/Nitto/Lingo%20Stuff/Lscr-102.bin-only.rebuilt.js)

## Limits that still hold

- No sidecar JSON, markdown, or prior reconstructions were used as evidence.
- No opcode names, jump targets, or statement semantics are claimed from the `init` byte block yet.
- The JS file is a data-preserving translation, not an executable-equivalent rebuild.
