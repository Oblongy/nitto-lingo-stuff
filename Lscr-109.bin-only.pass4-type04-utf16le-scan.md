# Lscr-109.bin-only pass 4: type-04 UTF-16LE scan

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Scan rule:
- start scanning at `0x0198`
- match:
  - little-endian `04 00 00 00`
  - little-endian `len`
  - `len * 2` bytes of printable UTF-16LE payload

Proven count:
- total matching records: `153`
- records with immediate `00 00` terminator after payload: `79`

Selected exact examples:
- `0x02DC`: `len=7`, payload `0x02E4`, `timeout`, `termOk=TRUE`
- `0x0330`: `len=15`, payload `0x0338`, `sockConnTimeout`, `termOk=TRUE`
- `0x0410`: `len=20`, payload `0x0418`, `socketMessageHandler`, `termOk=FALSE`
- `0x045C`: `len=17`, payload `0x0464`, `Connection Script`, `termOk=TRUE`
- `0x0560`: `len=21`, payload `0x0568`, `showConnectionErrorCB`, `termOk=TRUE`
- `0x11EC`: `len=58`, payload `0x11F4`, `Connection protocol could not be established. (Error: 010)`, `termOk=FALSE`
- `0x1DFC`: `len=9`, payload `0x1E04`, `getPCInfo`, `termOk=TRUE`
- `0x24A4`: `len=21`, payload `0x24AC`, `showConnectionErrorCB`, `termOk=TRUE`

Negative result:
- this pass treats the `04 00 00 00` shape as a repeated raw record pattern only
- this pass does not claim those records alone recover control flow or original handler bodies
