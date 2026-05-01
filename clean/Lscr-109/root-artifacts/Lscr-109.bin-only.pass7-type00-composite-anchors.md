# Lscr-109.bin-only pass 7: type00 composite anchors

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Composite anchor windows around aligned `typeLE = 0` printable records:

1. Anchor `0x01E0`
- value: `connectSocket`
- local window: `0x01CC..0x023F`
- exact neighboring structure:
  - type01 ASCII `Function` at `0x01CC`
  - zero-heavy bytes at `0x0200..0x020F`
  - aligned `type02->01/07` `errCode` at `0x0214`

2. Anchor `0x06D0`
- value: `sockConnTimeout`
- local window: `0x06B0..0x072F`
- exact neighboring structure:
  - zero-heavy bytes at `0x06B0..0x06CF`
  - type01 ASCII `tryNo` at `0x070C`
  - aligned `type02->01/07` `errCode` at `0x071C`

3. Anchor `0x0C4C`
- value: `socketMessageHandler`
- local window: `0x0C2C..0x0C9F`
- exact neighboring structure:
  - aligned `type02->00/00` opaque zero-heavy block at `0x0C3C`
  - zero-heavy bytes at `0x0C7C..0x0C83`
  - exact bytes `04 00 00 00 80 00 00 00` at `0x0C84`
  - aligned `type02->01/10` `newMessage` at `0x0C8C`

4. Anchor `0x1808`
- value: `executeCall`
- local window: `0x17F8..0x187F`
- exact neighboring structure:
  - zero-heavy bytes at `0x17F8..0x1803`
  - aligned `type02->00/04` block at `0x1828`
  - type01 ASCII `action` at `0x183C`
  - type03 ASCII `data` at `0x1850`
  - aligned `type02->01/12` `isBuyPartUgg` at `0x185C`

5. Anchor `0x2250`
- value: `ssm`
- local window: `0x2230..0x229F`
- exact neighboring structure:
  - zero-heavy bytes and exact `04 00 00 00 00 00 00 00` at `0x2240`
  - aligned `type02->00/00` opaque zero-heavy block at `0x2260`
  - type01 UTF-16LE `s` at `0x2274`
  - type03 ASCII `dne` at `0x2284`

Negative result:
- this pass does not claim these composite windows are complete handler boundaries
- it only records the exact neighboring record shapes around the aligned `typeLE = 0` printable anchors
