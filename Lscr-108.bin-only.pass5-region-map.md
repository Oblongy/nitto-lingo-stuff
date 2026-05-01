# Lscr-108.bin-only pass 5: region map

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-108.bin`

Proven region map:
- `0x0000..0x02C3`: header and early opaque region
- `0x02C4..0x053B`: pre-literal raw region
- `0x053C..0x0623`: late literal index region
- `0x0624..0x0787`: late ASCII literal region

Exact internal offset facts from the header:
- `0x001E = 708 = 0x02C4`
- `0x0052 = 1340 = 0x053C`
- `0x005A = 1572 = 0x0624`

Exact byte clusters observed inside the pre-literal raw region:
- around `0x02F0`, the raw bytes include exact absolute values `0x0534`, `0x0536`, and `0x0784`
- around `0x0310`, the byte stream becomes dense with non-printable repeated patterns and stays that way through the `0x053B` boundary

Negative result:
- this pass did not recover a second aligned literal table in `0x02C4..0x053B`
- this pass did not recover direct handler names from `0x02C4..0x053B`
- this pass does not assign opcode semantics to the raw bytes in `0x02C4..0x053B`
