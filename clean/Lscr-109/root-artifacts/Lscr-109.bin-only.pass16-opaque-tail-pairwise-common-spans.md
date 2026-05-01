# Lscr-109.bin-only pass 16: pairwise strongest common spans across opaque tails

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Method:
- for each pair of opaque tail members from pass14
- compute the longest contiguous shared byte span

Exact strongest spans:

1. `connectSocket` <-> `sockConnTimeout`
- length: `18`
- offsets: `0x02A3` <-> `0x07B6`
- hex:
  - `3F3A0006570000515600003E130700233B00`

2. `connectSocket` <-> `ssm`
- length: `11`
- offsets: `0x0230` <-> `0x2298`
- hex:
  - `00000000960000003B0000`

3. `sockConnTimeout` <-> `socketMessageHandler`
- length: `9`
- offsets: `0x0750` <-> `0x0CF5`
- hex:
  - `0001350002393A0000`

4. `socketMessageHandler` <-> `ssm`
- length: `9`
- offsets: `0x0DCB` <-> `0x2329`
- hex:
  - `3A0002510406000400`

5. Remaining strongest pairs
- all other best pairwise spans collapse to the shared family prefix:
  - length `8`
  - hex `0000000096000000`

Strict result:
- the opaque family is not uniformly related
- `connectSocket` and `sockConnTimeout` share the strongest non-prefix interior span
- `sockConnTimeout` and `socketMessageHandler` share a smaller interior span
- `socketMessageHandler` and `ssm` share a different smaller interior span

Still unresolved:
- this pass does not assign semantic meaning to any of those byte spans
- it only proves which opaque tails are structurally closest by contiguous shared bytes
