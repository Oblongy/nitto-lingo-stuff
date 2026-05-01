# Lscr-109.bin-only pass 3: string record families

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Observed raw string-record families:

1. Family A
- region start `0x01CC`
- exact prefix bytes:
  - `01 00 00 00 08 00 00 00`
- exact ASCII payload:
  - `0x01D4`: `Function`

2. Family B
- region start `0x01DC`
- exact prefix bytes:
  - `01 00 00 00 00 00 00 00 0D 00 00 00`
- exact UTF-16LE payload:
  - `0x01E8`: `connectSocket`

3. Family C
- repeated UTF-16LE record shape with exact 8-byte prefixes:
  - `0x0330`: `04 00 00 00 0F 00 00 00` -> `0x0338` `sockConnTimeout`
  - `0x040C`: `04 00 00 00 14 00 00 00` -> `0x0418` `socketMessageHandler`
  - `0x045C`: `04 00 00 00 11 00 00 00` -> `0x0464` `Connection Script`
  - `0x0560`: `04 00 00 00 15 00 00 00` -> `0x0568` `showConnectionErrorCB`
  - `0x11C4`: `04 00 00 00 0E 00 00 00` -> `0x11CC` `Protocol Error`

4. Family D
- region start `0x1808`
- exact prefix bytes:
  - `00 00 00 00 0B 00 00 00`
- exact UTF-16LE payload:
  - `0x1810`: `executeCall`

Negative result:
- this pass does not assign semantic field meanings to those prefixes
- this pass only groups exact repeated byte shapes around exact visible string payloads
