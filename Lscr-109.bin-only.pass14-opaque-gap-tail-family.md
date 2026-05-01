# Lscr-109.bin-only pass 14: opaque gap-tail family

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Scope:
- the final opaque record block in each handler-anchor gap:
  - `0x0230..0x02D7`
  - `0x0738..0x0813`
  - `0x0CE8..0x0F57`
  - `0x18B8..0x1B43`
  - `0x2298..0x2337`

Exact family-level facts:
- all five blocks share the same first 8 bytes:
  - `0000000096000000`
- all five blocks share a trailing 3-byte suffix:
  - `000000`

Exact members:

1. `connectSocket`
- tail: `0x0230..0x02D7`
- length: `0x00A8`
- first32:
  - `00000000960000003B0000393D000158C3503B0002393D00033A00013F230004`

2. `sockConnTimeout`
- tail: `0x0738..0x0813`
- length: `0x00DC`
- first32:
  - `00000000960000005400003F120700A43B0000393D00013A0001350002393A00`

3. `socketMessageHandler`
- tail: `0x0CE8..0x0F57`
- length: `0x0270`
- first32:
  - `0000000096000000853B0000350001350002393A000057000051560000350003`

4. `executeCall`
- tail: `0x18B8..0x1B43`
- length: `0x028C`
- first32:
  - `0000000096000000560000515400003D00001207000F3D000155000051435700`

5. `ssm`
- tail: `0x2298..0x2337`
- length: `0x00A0`
- first32:
  - `00000000960000003B000035000107008C853B00003500024500075400012007`

Strict result:
- the last undecoded pre-ladder block is now pinned as a recurring five-member family
- only the first 8 bytes and trailing 3 bytes are shared across all five members
- the member lengths and the remaining interior bytes differ by handler

Still unresolved:
- this pass does not assign semantic meaning to the shared `0x96` field or the interior bytes
