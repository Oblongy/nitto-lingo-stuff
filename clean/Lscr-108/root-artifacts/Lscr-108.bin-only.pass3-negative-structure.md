# Lscr-108.bin-only pass 3: negative structure result

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-108.bin`

Negative result:
- no clean aligned UTF-16 `id,type,payload` table was found in this bin
- no direct handler names were recovered from raw ASCII or UTF-16 scans in this pass

This means the current `bin-only` reconstruction for `Lscr-108` is limited to:
- exact header words
- the late big-endian pair block
- the late ASCII literal table
