# Lscr-109.bin-only pass 6: type02 wrapper clusters

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Aligned `typeLE = 2` wrapper-like clusters:

- `02->01/07`
  - count `2`
  - offsets `0x0214`, `0x071C`
  - exact prefix `02 00 00 00 01 00 00 00 07 00 00 00`
  - payload examples: `errCode`, `errCode`

- `02->04/06`
  - count `2`
  - offsets `0x0314`, `0x0850`
  - exact prefix `02 00 00 00 04 00 00 00 06 00 00 00`
  - payload examples: `symbol`, `forget`

- `02->01/10`
  - offset `0x0C8C`
  - exact prefix `02 00 00 00 01 00 00 00 0A 00 00 00`
  - payload example: `newMessage`

- `02->03/03`
  - offset `0x0CA4`
  - exact prefix `02 00 00 00 03 00 00 00 03 00 00 00`
  - payload example: `idx`

- `02->05/06`
  - offset `0x0CB4`
  - exact prefix `02 00 00 00 05 00 00 00 06 00 00 00`
  - payload example: `retVal`

- `02->07/09`
  - count `2`
  - offsets `0x0CC8`, `0x1898`
  - exact prefix `02 00 00 00 07 00 00 00 09 00 00 00`
  - payload examples: `resultStr`, `tempArray`

- `02->01/12`
  - offset `0x185C`
  - exact prefix `02 00 00 00 01 00 00 00 0C 00 00 00`
  - payload example: `isBuyPartUgg`

- `02->03/02`
  - offset `0x1874`
  - exact prefix `02 00 00 00 03 00 00 00 02 00 00 00`
  - payload example: `qs`

- `02->05/08`
  - offset `0x1884`
  - exact prefix `02 00 00 00 05 00 00 00 08 00 00 00`
  - payload example: `xtra_md5`

- `02->04/13`
  - offset `0x0FA4`
  - exact prefix `02 00 00 00 04 00 00 00 0D 00 00 00`
  - payload example: `getNetMessage`

- `02->04/07`
  - offset `0x1B80`
  - exact prefix `02 00 00 00 04 00 00 00 07 00 00 00`
  - payload example: `action=`

- `02->04/05`
  - offset `0x2378`
  - exact prefix `02 00 00 00 04 00 00 00 05 00 00 00`
  - payload example: `isEnc`

- `02->00/00`
  - count `3`
  - offsets `0x0C3C`, `0x2260`, `0x25BC`
  - exact prefix `02 00 00 00 00 00 00 00 00 00 00 00`
  - treated as opaque zero-heavy records in this pass

Negative result:
- this pass does not claim semantic wrapper behavior
- it only groups exact aligned `typeLE = 2` prefixes with the printable payload pattern that immediately follows them
