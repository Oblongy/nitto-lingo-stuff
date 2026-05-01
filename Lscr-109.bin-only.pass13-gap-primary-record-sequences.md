# Lscr-109.bin-only pass 13: primary aligned record sequences inside handler-anchor gaps

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Method:
- start from the exact handler-anchor offsets and exact ladder-start offsets already proven
- within each gap, keep the earliest non-overlapping aligned records that already have byte-proven printable payloads or recurring opaque first-byte signatures
- do not treat every overlapping 4-byte interpretation as a top-level record

Recovered primary gap sequences:

1. `connectSocket`
- gap: `0x01E0..0x02D7`
- primary sequence:
  - `0x01E0` `type0-utf16` len `13` -> `0x01E8` `connectSocket`
  - `0x0214` `type2-wrap-type1` len `7` -> `0x0220` `errCode`
  - `0x0230` `type0-opaque` firstBytes `00000000960000003B0000393D000158`

2. `sockConnTimeout`
- gap: `0x06D0..0x0813`
- primary sequence:
  - `0x06D0` `type0-utf16` len `15` -> `0x06D8` `sockConnTimeout`
  - `0x070C` `type1-ascii` len `5` -> `0x0714` `tryNo`
  - `0x071C` `type2-wrap-type1` len `7` -> `0x0728` `errCode`
  - `0x0738` `type0-opaque` firstBytes `00000000960000005400003F120700A4`

3. `socketMessageHandler`
- gap: `0x0C4C..0x0F57`
- primary sequence:
  - `0x0C4C` `type0-utf16` len `20` -> `0x0C54` `socketMessageHandler`
  - `0x0C8C` `type2-wrap-type1` len `10` -> `0x0C98` `newMessage`
  - `0x0CA4` `type2-wrap-type3` len `3` -> `0x0CB0` `idx`
  - `0x0CB4` `type2-wrap-type5` len `6` -> `0x0CC0` `retVal`
  - `0x0CC8` `type2-wrap-type7` len `9` -> `0x0CD4` `resultStr`
  - `0x0CE8` `type0-opaque` firstBytes `0000000096000000853B000035000135`

4. `executeCall`
- gap: `0x1808..0x1B43`
- primary sequence:
  - `0x1808` `type0-utf16` len `11` -> `0x1810` `executeCall`
  - `0x1828` `type2-opaque` subType `0` len `4` firstBytes `0200000000000000040000000000000001000000`
  - `0x183C` `type1-ascii` len `6` -> `0x1844` `action`
  - `0x1850` `type3-ascii` len `4` -> `0x1858` `data`
  - `0x185C` `type2-wrap-type1` len `12` -> `0x1868` `isBuyPartUgg`
  - `0x1874` `type2-wrap-type3` len `2` -> `0x1880` `qs`
  - `0x1884` `type2-wrap-type5` len `8` -> `0x1890` `xtra_md5`
  - `0x1898` `type2-wrap-type7` len `9` -> `0x18A4` `tempArray`
  - `0x18B8` `type0-opaque` firstBytes `0000000096000000560000515400003D`

5. `ssm`
- gap: `0x2250..0x2337`
- primary sequence:
  - `0x2250` `type0-utf16` len `3` -> `0x2258` `ssm`
  - `0x2260` `type2-opaque` subType `0` len `0` firstBytes `0200000000000000000000000000000001000000`
  - `0x2274` `type1-ascii` len `1` -> `0x227C` `s`
  - `0x2284` `type3-ascii` len `3` -> `0x228C` `dne`
  - `0x2298` `type0-opaque` firstBytes `00000000960000003B00003500010700`

Strict result:
- every handler-anchor gap now has an ordered primary aligned record sequence
- the end of each primary sequence is an opaque record whose first bytes are preserved exactly
- this is the tightest current bin-only pre-ladder skeleton for the five `Lscr-109` handler anchors

Still unresolved:
- the opaque records are not semantically decoded
- this pass does not claim argument order, locals, return slots, or control-flow meaning
