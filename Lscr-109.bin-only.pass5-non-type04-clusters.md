# Lscr-109.bin-only pass 5: non-type04 clusters

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Aligned printable non-type04 clusters:

1. `typeLE = 0`
- examples:
  - `0x01E0` -> `connectSocket`
  - `0x06D0` -> `sockConnTimeout`
  - `0x0C4C` -> `socketMessageHandler`
  - `0x1808` -> `executeCall`
  - `0x2250` -> `ssm`

2. `typeLE = 1`
- examples:
  - `0x01CC` -> `Function`
  - `0x0218` -> `errCode`
  - `0x070C` -> `tryNo`
  - `0x0720` -> `errCode`
  - `0x0C90` -> `newMessage`
  - `0x183C` -> `action`
  - `0x1860` -> `isBuyPartUgg`

3. `typeLE = 3`
- examples:
  - `0x0CA8` -> `idx`
  - `0x1850` -> `data`
  - `0x1878` -> `qs`
  - `0x2284` -> `dne`

4. `typeLE = 5`
- examples:
  - `0x0CB8` -> `retVal`
  - `0x1888` -> `xtra_md5`

5. `typeLE = 7`
- examples:
  - `0x0CCC` -> `resultStr`
  - `0x189C` -> `tempArray`

Negative result:
- this pass does not assign semantic names to the small integer type values

