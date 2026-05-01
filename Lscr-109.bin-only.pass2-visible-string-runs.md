# Lscr-109.bin-only pass 2: visible string runs

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Selected exact visible ASCII runs:
- `0x01D4`: `Function`
- `0x0220`: `errCode`
- `0x0714`: `tryNo`
- `0x0728`: `errCode`
- `0x0C98`: `newMessage`
- `0x0CC0`: `retVal`
- `0x0CD4`: `resultStr`
- `0x1844`: `action`
- `0x1858`: `data`
- `0x1868`: `isBuyPartUgg`
- `0x1890`: `xtra_md5`
- `0x18A4`: `tempArray`
- `0x19C1`: `QBQV`

Selected exact visible UTF-16LE runs:
- `0x01E8`: `connectSocket`
- `0x0338`: `sockConnTimeout`
- `0x0418`: `socketMessageHandler`
- `0x0464`: `Connection Script`
- `0x0568`: `showConnectionErrorCB`
- `0x05CC`: `Connection could not be established. Please check your firewall. (Error: 004-`
- `0x0BA4`: `showSocketConnectionErrorCB`
- `0x0C54`: `socketMessageHandler`
- `0x11CC`: `Protocol Error`
- `0x11F4`: `Connection protocol could not be established. (Error: 010)`
- `0x1288`: `Connection protocol could not be established. (Error: 005)`
- `0x1308`: `Connection protocol could not be established. (Error: 006)`
- `0x1388`: `procSocket`
- `0x1430`: `LOGIN`
- `0x1458`: `showDisconnectedErrorCB`
- `0x14B8`: `You have been disconnected from the game. Please restart the application to continue playing.`
- `0x1810`: `executeCall`
- `0x1E04`: `getPCInfo`

Negative result:
- this pass does not treat visible strings as proven control flow
- this pass does not claim any handler body from those strings alone
