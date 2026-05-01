# Lscr-109.bin-only pass 1: header and region map

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Proven file size:
- `9740` bytes
- `0x260C`

Proven region map:
- `0x0000..0x015F`: header and prelude region
- `0x0160..0x0197`: small 8-byte record region
- `0x0198..0x260B`: late data region

Exact header-to-region matches:
- header `0x0052 = 352 = 0x0160` matches the small 8-byte record region start
- header `0x005A = 408 = 0x0198` matches the late data region start
- header `0x0056 = 9332 = 0x2474`
  - and `0x0198 + 0x2474 = 0x260C`
  - so that value exactly matches the late data region byte length
- header `0x004E = 7`
  - and `0x0198 - 0x0160 = 0x38 = 56 = 7 * 8`
  - so the small region is exactly seven 8-byte records long

Exact 8-byte records at `0x0160..0x0197`:
- `0x0160`: `a=0x0000000B`, `b=0x00000000`
- `0x0168`: `a=0x00000000`, `b=0x00000000`
- `0x0170`: `a=0x00000000`, `b=0x00000000`
- `0x0178`: `a=0x00000000`, `b=0x00000000`
- `0x0180`: `a=0x00000000`, `b=0x00000000`
- `0x0188`: `a=0x00000000`, `b=0x00000000`
- `0x0190`: `a=0x00000000`, `b=0x00000000`

Negative result:
- this pass does not assign semantics to the small 8-byte record region
