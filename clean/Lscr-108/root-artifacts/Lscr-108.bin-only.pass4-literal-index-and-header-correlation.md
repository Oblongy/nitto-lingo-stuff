# Lscr-108.bin-only pass 4: literal index and header correlation

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-108.bin`

Proven structure:
- the late literal index region starts at `0x053C`
- the late ASCII literal region starts at `0x0624`
- the late ASCII literal region ends exclusive at `0x0788`
- the late literal index region is `29 * 8 = 232` bytes long
- `0x053C + 232 = 0x0624`, so the index region stops exactly where the late literal region begins

Exact header-to-structure matches:
- header `0x004E = 29` matches the late ASCII literal record count
- header `0x0052 = 1340 = 0x053C` matches the late literal index region start
- header `0x0056 = 356 = 0x0164` matches the late ASCII literal region byte length
- header `0x005A = 1572 = 0x0624` matches the late ASCII literal region start

Exact late literal index record format:
- each record is 8 bytes:
  - 4-byte big-endian relative record start
  - 4-byte big-endian opaque value
- base for the relative record starts is `0x0624`

Exact record-to-literal alignment:
- first index record at `0x053C` has relative start `0x0000`, which resolves to literal record start `0x0624`
- second index record at `0x0544` has relative start `0x000C`, which resolves to literal record start `0x0630`
- last index record at `0x061C` has relative start `0x015A`, which resolves to literal record start `0x077E`

Opaque-value result:
- `28` records use opaque value `0x00000001`
- the final record uses opaque value `0x00000007`
- this pass does not assign semantics to that second field
