# Lscr-109.bin-only pass 12: visible payloads inside handler-anchor gaps

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Gap definition used:
- `handlerAnchorOffset .. ladderStartOffset-1`
- handler anchors from the exact aligned `typeLE=0` records
- ladder starts from the exact overlapping wrapper->type04 ladders

Exact results:

1. `connectSocket`
- gap: `0x01E0..0x02D7`
- visible ASCII payloads:
  - `0x0220` `errCode`
- visible aligned `type04` payloads:
  - none

2. `sockConnTimeout`
- gap: `0x06D0..0x0813`
- visible ASCII payloads:
  - `0x0714` `tryNo`
  - `0x0728` `errCode`
- visible aligned `type04` payloads:
  - none

3. `socketMessageHandler`
- gap: `0x0C4C..0x0F57`
- visible ASCII payloads:
  - `0x0C98` `newMessage`
  - `0x0CC0` `retVal`
  - `0x0CD4` `resultStr`
- visible aligned `type04` payloads:
  - none

4. `executeCall`
- gap: `0x1808..0x1B43`
- visible ASCII payloads:
  - `0x1844` `action`
  - `0x1858` `data`
  - `0x1868` `isBuyPartUgg`
  - `0x1890` `xtra_md5`
  - `0x18A4` `tempArray`
  - `0x19C1` `QBQV`
- visible aligned `type04` payloads:
  - none

5. `ssm`
- gap: `0x2250..0x2337`
- visible ASCII payloads:
  - none
- visible aligned `type04` payloads:
  - none

Strict result:
- the handler-anchor gaps are now tighter:
  - no aligned printable `type04` payloads were found in any of the five gaps
  - the visible printable content in four gaps is limited to the ASCII payloads listed above

Still unresolved:
- the non-printable bytes inside those gaps are still undecoded
- this pass does not assign semantic roles such as params, locals, return slots, or control-flow records
