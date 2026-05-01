# Lscr-109.bin-only pass 8: opaque recurring non-type clusters

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Recurring opaque non-type04 groups with more than one occurrence:

1. `00/150`
- `typeLE = 0`
- `lenLE = 150`
- count `5`
- offsets:
  - `0x0230`
  - `0x0738`
  - `0x0CE8`
  - `0x18B8`
  - `0x2298`
- example first bytes:
  - `00 00 00 00 96 00 00 00 3B 00 00 39 3D 00 01 58`
  - `00 00 00 00 96 00 00 00 54 00 00 3F 12 07 00 A4`
  - `00 00 00 00 96 00 00 00 85 3B 00 00 35 00 01 35`

2. `02/00`
- `typeLE = 2`
- `lenLE = 0`
- count `4`
- offsets:
  - `0x0C3C`
  - `0x1828`
  - `0x2260`
  - `0x25BC`
- example first bytes:
  - `02 00 00 00 00 00 00 00 00 00 00 00 01 00 00 00`
  - `02 00 00 00 00 00 00 00 04 00 00 00 00 00 00 00`
  - `02 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00`

3. `01/41`
- `typeLE = 1`
- `lenLE = 41`
- count `3`
- offsets:
  - `0x0670`
  - `0x0B90`
  - `0x10D8`
- example first bytes:
  - `01 00 00 00 29 00 00 00 30 00 00 00 B0 D1 60 07`
  - `01 00 00 00 29 00 00 00 16 00 00 00 04 00 00 00`
  - `01 00 00 00 29 00 00 00 0E 00 00 00 04 00 00 00`

Negative result:
- this pass records recurrence only
- it does not assign semantics to the opaque payload bytes in those clusters
