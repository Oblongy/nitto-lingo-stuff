# Lscr-102.bin-only pass 23: true EOF tail

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

Proven file size:
- decimal: `48988`
- hex: `0xBF5C`

True remaining undecoded tail:
- start `0xBE84`
- end exclusive `0xBF5C`

Negative result:
- no clean aligned `id,type,payload` table found in `0xBE84..0xBF5B`
- no clean UTF-16 runs found in `0xBE84..0xBF5B`

Repeated motif:
- `00 00 00 00 00 00 00 00` : `8`

This is the actual end-of-file boundary for the current bin-only decode path.
