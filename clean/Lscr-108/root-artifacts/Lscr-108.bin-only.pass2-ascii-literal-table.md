# Lscr-108.bin-only pass 2: ASCII literal table

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-108.bin`

Proven table:
- start `0x0624`
- end exclusive `0x0788`
- `29` records
- each record uses:
  - 4-byte big-endian length
  - ASCII payload including trailing `0x00`
  - 2-byte alignment before the next record

Exact records:
- `0x0624`: `len=7`, `fileio`
- `0x0630`: `len=2`, `l`
- `0x0636`: `len=2`, `i`
- `0x063C`: `len=2`, `n`
- `0x0642`: `len=2`, `g`
- `0x0648`: `len=2`, `o`
- `0x064E`: `len=2`, `.`
- `0x0654`: `len=2`, `I`
- `0x065A`: `len=27`, `agree with the usage terms`
- `0x067A`: `len=12`, `setInactive`
- `0x068A`: `len=8`, `simInet`
- `0x0696`: `len=8`, `windows`
- `0x06A2`: `len=7`, `number`
- `0x06AE`: `len=5`, `mid=`
- `0x06B8`: `len=7`, `vendor`
- `0x06C4`: `len=5`, `type`
- `0x06CE`: `len=6`, `model`
- `0x06D8`: `len=6`, `&nid=`
- `0x06E2`: `len=7`, `&prid=`
- `0x06EE`: `len=45`, `SOFTWARE\\Microsoft\\Windows\\CurrentVersion`
- `0x0720`: `len=10`, `ProductId`
- `0x072E`: `len=12`, `NoProductId`
- `0x073E`: `len=19`, `HKEY_LOCAL_MACHINE`
- `0x0756`: `len=6`, `&cna=`
- `0x0760`: `len=1`, empty string
- `0x0766`: `len=3`, `ch`
- `0x076E`: `len=4`, `eat`
- `0x0776`: `len=4`, ` en`
- `0x077E`: `len=5`, `gine`

Directly visible string relationships only:
- `l`, `i`, `n`, `g`, `o`, `.`, `I` are separate one-character records, not a single recovered token
- `ch`, `eat`, ` en`, `gine` are separate records, not a single recovered token
