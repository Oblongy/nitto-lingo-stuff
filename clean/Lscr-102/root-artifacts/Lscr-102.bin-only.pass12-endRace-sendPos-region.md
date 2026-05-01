# Lscr-102.bin-only pass 12: `endRace` / `sendPos` bridge

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

Proven boundary:
- start `0x2E2C`
- end exclusive `0x30C8`

Proven descriptor records:
- `0x2E5C`: `id=11`, `type=4`, `chars=7`, value `endRace`
- `0x2F44`: `id=13`, `type=4`, `chars=7`, value `sendPos`

Proven short record cluster between them:
- `0x2ECC`: `id=0`, `type=4`, `chars=11`, `runInterval`
- `0x2EF0`: `id=1`, `type=4`, `chars=6`, `object`
- `0x2F08`: `id=2`, `type=4`, `chars=6`, `forget`

Raw block notes:
- `0x2E78..0x2ECC` is mostly zero-filled in this pass
- `0x2F60..0x30C8` is a distinct raw block

Most repeated 8-byte motifs in `0x2F60..0x30C8`:
- `39 41 35 00 0b 41 35 00` : `4`
- `41 35 00 0b 41 35 00 0c` : `4`
- `41 35 00 03 3d 00 04 12` : `3`
- `35 00 03 3d 00 04 12 44` : `3`
- `00 03 3d 00 04 12 44 00` : `3`

Not claimed:
- no executable meaning for `endRace` or `sendPos`
- no opcode names for the raw block
