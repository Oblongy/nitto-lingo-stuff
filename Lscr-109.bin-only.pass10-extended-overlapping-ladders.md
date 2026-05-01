# Lscr-109.bin-only pass 10: extended overlapping wrapper->type04 ladders

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Rule used:
- aligned wrapper start at `off`
- `u32le(off)` is recorded as the wrapper type number
- immediately overlapping aligned record at `off+4` must be:
  - `u32le(off+4) == 4`
  - `u32le(off+8) == char count`
  - UTF-16LE payload at `off+12`
- the next candidate wrapper start is the padded end of that UTF-16LE payload

Recovered extended ladders:

1. Ladder A
- start `0x02D8`
- entry count `23`
- runs through wrapper types `0..22`
- tail proves:
  - `0x0594` type20 -> `0x0598` `Connection Error`
  - `0x05C0` type21 -> `0x05C4` `Connection could not be established. Please check your firewall. (Error: 004-`
  - `0x0668` type22 -> `0x066C` `)`

2. Ladder B
- start `0x0814`
- entry count `23`
- runs through wrapper types `0..22`
- extends the shorter pass9 ladder by:
  - `0x0960` type9 -> `0x0964` `script`
  - `0x0978` type10 -> `0x097C` `Connection Script`
  - `0x09A8` type11 -> `0x09AC` `connectToNetServer`
  - `0x09D8` type12 -> `0x09DC` `Rick`
  - `0x09EC` type13 -> `0x09F0` `MySecret`
  - `0x0A08` type14 -> `0x0A0C` `socketURL`
  - `0x0A28` type15 -> `0x0A2C` `CieServer`
  - `0x0A48` type16 -> `0x0A4C` `sprite`
  - `0x0A60` type17 -> `0x0A64` `flashSP`
  - `0x0A7C` type18 -> `0x0A80` `showConnectionErrorCB`
  - `0x0AB4` type19 -> `0x0AB8` `Connection Error`
  - `0x0AE0` type20 -> `0x0AE4` `Connection could not be established. Please check your firewall. (Error: 004-`
  - `0x0B88` type21 -> `0x0B8C` `)`
  - `0x0B98` type22 -> `0x0B9C` `showSocketConnectionErrorCB`

3. Ladder C
- start `0x0F58`
- entry count `9`
- runs through wrapper types `0..8`
- no further aligned printable overlap found after `0x1068` in this ladder

4. Ladder D
- start `0x1B44`
- entry count `53`
- runs through wrapper types `0..52`
- this is the strongest current byte-proven body skeleton in `Lscr-109.bin`
- first segment:
  - `0x1B44` type0 -> `0x1B48` `buypartugg`
  - `0x1B64` type1 -> `0x1B68` `buypart`
  - `0x1B80` type2 -> `0x1B84` `action=`
  - `0x1B9C` type3 -> `0x1BA0` `&aid=`
  - `0x1BB4` type4 -> `0x1BB8` `_global`
  - `0x1BD0` type5 -> `0x1BD4` `aid`
  - `0x1BE4` type6 -> `0x1BE8` `&sk=`
  - `0x1BF8` type7 -> `0x1BFC` `guid`
  - `0x1C0C` type8 -> `0x1C10` `login`
- middle segment includes:
  - `facebookToken`
  - `facebookID`
  - `fbgetsession`
  - `agreetoterms`
  - `createaccount`
  - `caluMD5`
  - `getFileMD5`
  - `_player`
  - `applicationPath`
  - `applicationName`
  - `getPCInfo`
  - `changehomemachine`
  - `buycar`
  - `buyenginepart`
  - `buyengine`
  - `swapengine`
  - `changeemail`
  - `changepassword`
  - `sellcar`
  - `sellcarpart`
  - `sellenginepart`
  - `sellengine`
  - `buygears`
  - `sellallspare`
  - `activatepoints`
  - `activatemember`
  - `repairparts`
  - `fbremovefacebook`
- tail proves:
  - `0x2090` type43 -> `0x2094` `changepasswordreq`
  - `0x20C0` type44 -> `0x20C4` `isEnc`
  - `0x20D8` type45 -> `0x20DC` `gameURL`
  - `0x20F4` type46 -> `0x20F8` `?`
  - `0x2104` type47 -> `0x2108` `escape`
  - `0x211C` type48 -> `0x2120` `encrypt`
  - `0x2138` type49 -> `0x213C` `Array`
  - `0x2150` type50 -> `0x2154` `getNetText`
  - `0x2170` type51 -> `0x2174` `gNetID`
  - `0x2188` type52 -> `0x218C` `push`

5. Ladder E
- start `0x2338`
- entry count `15`
- runs through wrapper types `0..14`
- extends the shorter pass9 ladder by:
  - `0x2444` type9 -> `0x2448` `Object`
  - `0x245C` type10 -> `0x2460` `ex`
  - `0x246C` type11 -> `0x2470` `sprite`
  - `0x2484` type12 -> `0x2488` `flashSP`
  - `0x24A0` type13 -> `0x24A4` `showConnectionErrorCB`
  - `0x24D8` type14 -> `0x24DC` `Connection Error`

Negative result:
- this pass still does not assign semantic meaning to wrapper type numbers
- it only proves ordered overlap chains and exact printable payloads
