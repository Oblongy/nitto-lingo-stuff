# Lscr-102.bin-only pass 10: `0x28C0..0x2D63`

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

Proven boundary:
- start `0x28C0`
- end exclusive `0x2D64`

Proven descriptor records:
- `0x2B3C`: `id=7`, `type=4`, `chars=9`, value `initBoost`
- `0x2CD0`: `id=9`, `type=4`, `chars=9`, value `beginRace`

Additional clean UTF-16 names inside the same bridge:
- `0x2BDC` `boostType`
- `0x2C0C` `boostLag`
- `0x2C28` `c0_7`
- `0x2C3C` `boostSetting`
- `0x2C60` `boostRange`
- `0x2C80` `c1_7`
- `0x2C94` `c0`

Most repeated 8-byte motifs:
- `c8 60 03 63 06 63 0d 63` : `38`
- `60 03 63 06 63 0d 63 11` : `38`
- `03 63 06 63 0d 63 11 b4` : `37`
- `b4 c8 60 03 63 06 63 0d` : `34`
- `00 00 00 00 00 00 00 00` : `32`

Not claimed:
- no opcode names
- no control-flow semantics
- no assumption that the repeated `0x96` fields in nearby descriptors are block lengths
