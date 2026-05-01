# Lscr-108.bin-only pass 1: header and tail structure

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-108.bin`

File size:
- decimal: `1928`
- hex: `0x0788`

Selected big-endian 16-bit header pairs:
- `0x000A = 1928`
- `0x000E = 1928`
- `0x0010 = 92`
- `0x0012 = 8`
- `0x0014 = 1`
- `0x0016 = 65535`
- `0x001E = 708`
- `0x0020 = 42052`
- `0x0028 = 2`
- `0x002C = 1`
- `0x002E = 17`
- `0x0040 = 92`
- `0x0042 = 1`
- `0x0048 = 15`
- `0x004C = 94`
- `0x004E = 29`
- `0x0052 = 1340`
- `0x0056 = 356`
- `0x005A = 1572`

Late big-endian 32-bit pair block at `0x05E0..0x0623`:
- `0x05E0`: `a=252`, `b=1`
- `0x05E8`: `a=266`, `b=1`
- `0x05F0`: `a=282`, `b=1`
- `0x05F8`: `a=306`, `b=1`
- `0x0600`: `a=316`, `b=1`
- `0x0608`: `a=322`, `b=1`
- `0x0610`: `a=330`, `b=1`
- `0x0618`: `a=338`, `b=1`
- `0x0620`: `a=346`, `b=7`

This pass does not assign semantic field names to those header values.
