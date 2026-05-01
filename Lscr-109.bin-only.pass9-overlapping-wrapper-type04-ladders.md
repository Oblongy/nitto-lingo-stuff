# Lscr-109.bin-only pass 9: overlapping wrapper->type04 ladders

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Rule used:
- aligned wrapper start at `off`
- wrapper has small `typeLE`
- immediately overlapping aligned record at `off+4` is a printable `type04` UTF-16LE record

Recovered ordered ladders:

1. Ladder A
- `0x02D8` type0 -> `0x02DC` `timeout`
- `0x02F4` type1 -> `0x02F8` `sockConnTO`
- `0x0314` type2 -> `0x0318` `symbol`
- `0x032C` type3 -> `0x0330` `sockConnTimeout`
- `0x0358` type4 -> `0x035C` `_global`
- `0x0374` type5 -> `0x0378` `gMultiuserInstance`
- `0x03A4` type6 -> `0x03A8` `xtra`
- `0x03B8` type7 -> `0x03BC` `Multiuser`
- `0x03D8` type8 -> `0x03DC` `setNetMessageHandler`

2. Ladder B
- `0x0814` type0 -> `0x0818` `timeout`
- `0x0830` type1 -> `0x0834` `sockConnTO`
- `0x0850` type2 -> `0x0854` `forget`
- `0x0868` type3 -> `0x086C` `symbol`
- `0x0880` type4 -> `0x0884` `sockConnTimeout`
- `0x08AC` type5 -> `0x08B0` `_global`
- `0x08C8` type6 -> `0x08CC` `gMultiuserInstance`
- `0x08F8` type7 -> `0x08FC` `setNetMessageHandler`
- `0x092C` type8 -> `0x0930` `socketMessageHandler`

3. Ladder C
- `0x0F58` type0 -> `0x0F5C` `_global`
- `0x0F74` type1 -> `0x0F78` `gMultiuserInstance`
- `0x0FA4` type2 -> `0x0FA8` `getNetMessage`
- `0x0FCC` type3 -> `0x0FD0` `errorCode`
- `0x0FEC` type4 -> `0x0FF0` `content`
- `0x1008` type5 -> `0x100C` `undefined`
- `0x1028` type6 -> `0x102C` `socketBuffer`
- `0x104C` type7 -> `0x1050` `indexOf`
- `0x1068` type8 -> `0x106C` `ld`

4. Ladder D
- `0x1B44` type0 -> `0x1B48` `buypartugg`
- `0x1B64` type1 -> `0x1B68` `buypart`
- `0x1B80` type2 -> `0x1B84` `action=`
- `0x1B9C` type3 -> `0x1BA0` `&aid=`
- `0x1BB4` type4 -> `0x1BB8` `_global`
- `0x1BD0` type5 -> `0x1BD4` `aid`
- `0x1BE4` type6 -> `0x1BE8` `&sk=`
- `0x1BF8` type7 -> `0x1BFC` `guid`
- `0x1C0C` type8 -> `0x1C10` `login`

5. Ladder E
- `0x2338` type0 -> `0x233C` `_global`
- `0x2354` type1 -> `0x2358` `isConnected`
- `0x2378` type2 -> `0x237C` `isEnc`
- `0x2390` type3 -> `0x2394` `gMultiuserInstance`
- `0x23C0` type4 -> `0x23C4` `sendNetMessage`
- `0x23E8` type5 -> `0x23EC` `System`
- `0x2400` type6 -> `0x2404` `String`
- `0x2418` type7 -> `0x241C` `encrypt`
- `0x2434` type8 -> `0x2438` `ld`

Negative result:
- this pass proves the ordered overlapping ladders only
- it does not claim semantic meaning for the wrapper type numbers beyond their byte order and pairing
