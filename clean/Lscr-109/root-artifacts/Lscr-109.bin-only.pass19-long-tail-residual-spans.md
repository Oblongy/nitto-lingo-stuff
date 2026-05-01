# Lscr-109.bin-only pass 19: residual spans after repeated-token islands

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Method:
- start from pass17 repeated-token islands
- compute the complement spans within each long opaque tail
- scan each complement span for ASCII runs `>= 4` and UTF-16LE runs `>= 4`

Exact result:

1. `socketMessageHandler` residual spans
- `0x0CE8..0x0D29`
- `0x0D3B..0x0D4F`
- `0x0D53..0x0D65`
- `0x0D83..0x0DA5`
- `0x0E31..0x0E4B`
- `0x0E4F..0x0E6B`
- `0x0E7D..0x0EA9`
- `0x0EAB..0x0EDB`
- `0x0EE7..0x0F11`
- `0x0F27..0x0F57`
- each residual span has:
  - no ASCII runs `>= 4`
  - no UTF-16LE runs `>= 4`

2. `executeCall` residual spans
- `0x18B8..0x18F5`
- `0x1973..0x1987`
- `0x1989..0x19B9`
- `0x19CF..0x1AA1`
- `0x1AAD..0x1AC1`
- `0x1AC3..0x1B43`
- each residual span has:
  - no ASCII runs `>= 4`
  - no UTF-16LE runs `>= 4`

Strict result:
- after isolating the repeated-token islands, the remaining bytes in both long tails are fully non-printable by this scan rule
- this narrows future decoding work to the repeated-token islands themselves

Still unresolved:
- this pass does not assign semantic meaning to the residual spans
