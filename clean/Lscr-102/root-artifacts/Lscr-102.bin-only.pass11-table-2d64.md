# Lscr-102.bin-only pass 11: aligned table at `0x2D64`

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

Proven boundary:
- start `0x2D64`
- end exclusive `0x2E2C`

Exact string records:
- `0x2D64`: `id=0`, `type=4`, `chars=11`, `runInterval`
- `0x2D88`: `id=1`, `type=4`, `chars=6`, `object`
- `0x2DA0`: `id=2`, `type=4`, `chars=6`, `forget`
- `0x2DB8`: `id=3`, `type=4`, `chars=7`, `timeout`
- `0x2DD4`: `id=4`, `type=4`, `chars=12`, `sendInterval`
- `0x2DF8`: `id=5`, `type=4`, `chars=6`, `symbol`
- `0x2E10`: `id=6`, `type=4`, `chars=7`, `sendPos`

This pass only proves an aligned `id,type,chars,UTF-16` table in that range.
