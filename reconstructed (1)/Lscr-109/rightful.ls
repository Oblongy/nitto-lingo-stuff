-- Lscr-109 rightful.ls
-- Mechanical Lingo reconstruction from .bin/.json.
-- Constraint: recovered bytecode evidence only; undecoded lines are not invented source.

on connectSocket
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=0 length=140 codeLen=20
  -- registration/prologue markers=5 paddingBytes=5 -- 0x0014
end

on sockConnTimeout
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=140 length=1288 codeLen=155
  -- names: timeout, sockConnTO, symbol, sockConnTimeout, _global, gMultiuserInstance, xtra, Multiuser, setNetMessageHandler, socketMessageHandler, script, Connection Script, connectToNetServer, Rick, MySecret, socketURL, CieServer, sprite, flashSP, showConnectionErrorCB, Connection Error, Connection could not be established. Please check your firewall. (Error: 004-, )
  -- 0x04 packed flush prefix raw=04 -- 0x002B
  (symbol(sockConnTimeout) ^ TRUE) -- 0x002C
  gMultiuserInstance = new xtra("Multiuser") -- 0x003A
  _global -- 0x003D
  timeout = _global.gMultiuserInstance.setNetMessageHandler(symbol(socketMessageHandler), script("Connection Script")) -- 0x005F
  50000 -- 0x0062
  timeout = _global.gMultiuserInstance.connectToNetServer(Rick, MySecret, _global.socketURL, 3724, CieServer, TRUE) -- 0x0083
  sockConnTO -- 0x0086
  if not (timeout <> VOID) then -- jump 35 -- 0x008B
  sprite(flashSP).showConnectionErrorCB("Connection Error", (("Connection could not be established. Please check your firewall. (Error: 004-" & timeout) & ")")) -- 0x00AE
end

on socketMessageHandler
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1428 length=1456 codeLen=205
  -- names: timeout, sockConnTO, forget, symbol, sockConnTimeout, _global, gMultiuserInstance, setNetMessageHandler, socketMessageHandler, script, Connection Script, connectToNetServer, Rick, MySecret, socketURL, CieServer, sprite, flashSP, showConnectionErrorCB, Connection Error, Connection could not be established. Please check your firewall. (Error: 004-, ), showSocketConnectionErrorCB
  if not (param_timeout = TRUE) then -- jump 164 -- 0x0018
  timeout(sockConnTO).forget() -- 0x002D
  -- 0x04 packed flush prefix raw=04 -- 0x0047
  (symbol(sockConnTimeout) ^ forget) -- 0x0048
  timeout = _global.gMultiuserInstance.setNetMessageHandler(symbol(socketMessageHandler), script("Connection Script")) -- 0x006A
  50000 -- 0x006D
  timeout = _global.gMultiuserInstance.connectToNetServer(Rick, MySecret, _global.socketURL, 80, CieServer, TRUE) -- 0x008E
  sockConnTO -- 0x0091
  if not (timeout <> VOID) then -- jump 35 -- 0x0096
  sprite(flashSP).showConnectionErrorCB("Connection Error", (("Connection could not be established. Please check your firewall. (Error: 004-" & timeout) & ")")) -- 0x00B9
  -- jump 39 -- 0x00BA
  timeout(sockConnTO).forget() -- 0x00CE
  sprite(flashSP).showSocketConnectionErrorCB() -- 0x00E0
end

on executeCall
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2884 length=3024 codeLen=612
  -- names: _global, gMultiuserInstance, getNetMessage, errorCode, content, undefined, socketBuffer, indexOf, ld, substr, eval, propList(, ), Object, ex, isEnc, decrypt, exEnc, sprite, flashSP, showConnectionErrorCB, Protocol Error, Connection protocol could not be established. (Error: 010), ex2, Connection protocol could not be established. (Error: 005), Connection protocol could not be established. (Error: 006), procSocket, length, subject, ConnectToNetServer, isConnected, LOGIN, showDisconnectedErrorCB, Disconnected, You have been disconnected from the game. Please restart the application to continue playing., Connection Error, Connection could not be established. (Error: 007-, Connection could not be established. (Error: 008)
, _system, gc
  _global = _global.gMultiuserInstance.getNetMessage() -- 0x0022
  VOID -- 0x0025
  if not (_global.errorCode = VOID) then -- jump 416 -- 0x002D
  if not (_global.content <> undefined) then -- jump 371 -- 0x003A
  socketBuffer = (_global.socketBuffer & _global.content) -- 0x004E
  _global -- 0x0051
  gMultiuserInstance = _global.socketBuffer.indexOf(ld) -- 0x0062
  if not (gMultiuserInstance > -1) then -- jump 318 -- 0x006C
  getNetMessage -- 0x0073
  errorCode = _global.socketBuffer.substr(VOID, gMultiuserInstance) -- 0x0085
  -- 0x79 packed assignment prefix raw=79 00 01 -- 0x0099
  getNetMessage = (("propList(" & errorCode) & ")") -- 0x009C
  eval -- 0x009F
  -- jump 188 -- 0x00A0
  -- 0x75 packed prefix before name load raw=75 00 00 00 -- 0x00A3
  -- 0x0F marker -- 0x00AF
  -- 0x03 packed prefix before name load raw=03 -- 0x00B0
  -- branch 136 -- 0x00B7
  errorCode = decrypt(errorCode) -- 0x00C6
  VOID -- 0x00C9
  -- jump 46 -- 0x00CA
  -- 0x75 packed prefix before name load raw=75 00 01 00 -- 0x00CD
  -- 0x03 packed prefix before name load raw=03 -- 0x00DA
  sprite(flashSP).showConnectionErrorCB("Protocol Error", "Connection protocol could not be established. (Error: 010)") -- 0x00F2
  -- 0x04 packed short-jump prefix raw=04 -- 0x00F3
  -- jump 4 -- 0x00F4
  -- 0x79 packed assignment prefix raw=79 00 01 -- 0x0107
  getNetMessage = (("propList(" & errorCode) & ")") -- 0x010A
  eval -- 0x010D
  -- jump 46 -- 0x010E
  -- 0x75 packed prefix before name load raw=75 00 01 00 -- 0x0111
  -- 0x18 packed prefix before name-load prefix raw=18 -- 0x011D
  -- 0x03 packed prefix before name load raw=03 -- 0x011E
  sprite(flashSP).showConnectionErrorCB("Protocol Error", "Connection protocol could not be established. (Error: 005)") -- 0x0136
  -- 0x04 packed short-jump prefix raw=04 -- 0x0137
  -- jump 4 -- 0x0138
  -- jump 27 -- 0x013C
  sprite(flashSP).showConnectionErrorCB("Protocol Error", "Connection protocol could not be established. (Error: 006)") -- 0x0156
  -- 0x04 packed short-jump prefix raw=04 -- 0x0157
  -- jump 4 -- 0x0158
  -- branch 14 -- 0x015F
  procSocket(getNetMessage) -- 0x016C
  0.7226 -- 0x018F
  socketBuffer = gMultiuserInstance -- 0x0190
  _global.socketBuffer.length -- 0x0193
  gMultiuserInstance = _global.socketBuffer.indexOf(ld) -- 0x01A4
  (gMultiuserInstance & TRUE) -- 0x01A7
  -- jump -322 -- 0x01A8
  -- jump 32 -- 0x01AB
  if not (_global.subject = ConnectToNetServer) then -- jump 19 -- 0x01B7
  isConnected = 1 -- 0x01BF
  _global -- 0x01C2
  LOGIN() -- 0x01CA
  -- jump 87 -- 0x01CB
  -- branch 78 -- 0x01D4
  if not (_global.errorCode = -2147216214) then -- jump 30 -- 0x01E0
  sprite(flashSP).showDisconnectedErrorCB(Disconnected, "You have been disconnected from the game. Please restart the application to continue playing.") -- 0x01FB
  -- jump 38 -- 0x01FC
  sprite(flashSP).showConnectionErrorCB("Connection Error", (("Connection could not be established. (Error: 007-" & _global.errorCode) & ")")) -- 0x0221
  -- 0x72 packed jump prefix raw=72 00 48 -- 0x0222
  -- jump 83 -- 0x0225
  -- 0x75 packed prefix before name load raw=75 00 00 00 -- 0x0228
  -- 0x0F marker -- 0x0234
  -- 0x03 packed prefix before name load raw=03 -- 0x0235
  -- branch 31 -- 0x023C
  sprite(flashSP).showConnectionErrorCB("Connection Error", ("Connection could not be established. (Error: 008)\n" & ex)) -- 0x025A
  -- 0x04 packed jump-prefix prefix raw=04 -- 0x025B
  -- 0x72 packed jump prefix raw=72 00 0E -- 0x025C
  -- jump 25 -- 0x025F
  -- 0x75 packed prefix before 0x72 raw=75 00 00 -- 0x0262
  -- 0x72 packed prefix before 0x74 raw=72 00 05 -- 0x0265
  -- 0x74/0x6E/0x86 packed prefix before name load raw=74 6E 86 -- 0x0268
  _system.gc() -- 0x0275
  -- 0x73 packed terminal marker raw=73 00 -- 0x0276
end

on ssm
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=5908 length=2528 codeLen=638
  -- names: buypartugg, buypart, action=, &aid=, _global, aid, &sk=, guid, login, &fbt=, facebookToken, &fbi=, facebookID, fbgetsession, agreetoterms, createaccount, xtra, caluMD5, &md5=, getFileMD5, _player, applicationPath, applicationName, &, getPCInfo, changehomemachine, buycar, buyenginepart, buyengine, swapengine, changeemail, changepassword, ebep, sellcar, sellcarpart, sellenginepart, sellengine, buygears, sellallspare, activatepoints
  buypartugg -- 0x0017
  if not (param_buypartugg = buypartugg) then -- jump 15 -- 0x001E
  buypartugg = buypart -- 0x0025
  buypartugg = 1 -- 0x002A
  buypart = ((((("action=" & param_buypartugg) & "&aid=") & _global.aid) & "&sk=") & _global.guid) -- 0x004B
  if not (param_buypartugg = login) then -- jump 39 -- 0x0055
  buypart = (buypart & ("&fbt=" & _global.facebookToken)) -- 0x0067
  buypart = (buypart & ("&fbi=" & _global.facebookID)) -- 0x0079
  if not (param_buypartugg = fbgetsession) then -- jump 21 -- 0x0083
  buypart = (buypart & ("&fbt=" & _global.facebookToken)) -- 0x0095
  if not (param_buypartugg = agreetoterms) then -- jump 39 -- 0x009F
  buypart = (buypart & ("&fbt=" & _global.facebookToken)) -- 0x00B1
  buypart = (buypart & ("&fbi=" & _global.facebookID)) -- 0x00C3
  if not (param_buypartugg = login) then -- jump 20 marker 0x44 -- 0x00CD
  if not (param_buypartugg = createaccount) then -- jump 10 marker 0x44 -- 0x00D7
  if not (param_buypartugg = fbgetsession) then -- jump 76 -- 0x00E1
  "action=" = new xtra("caluMD5") -- 0x00EF
  buypart = (buypart & ("&md5=" & "action=".getFileMD5((_player.applicationPath & _player.applicationName)))) -- 0x0112
  0 -- 0x0117
  buypart = (buypart & ("&" & getPCInfo())) -- 0x0127
  -- jump 222 -- 0x012B
  if not (param_buypartugg = changehomemachine) then -- jump 190 marker 0x44 -- 0x0134
  if not (param_buypartugg = buycar) then -- jump 180 marker 0x44 -- 0x013E
  if not (param_buypartugg = buypart) then -- jump 170 marker 0x44 -- 0x0148
  if not (param_buypartugg = buyenginepart) then -- jump 160 marker 0x44 -- 0x0152
  if not (param_buypartugg = buyengine) then -- jump 150 marker 0x44 -- 0x015C
  if not (param_buypartugg = swapengine) then -- jump 140 marker 0x44 -- 0x0166
  if not (param_buypartugg = changeemail) then -- jump 130 marker 0x44 -- 0x0170
  if not (param_buypartugg = changepassword) then -- jump 120 marker 0x44 -- 0x017A
  if not (param_buypartugg = ebep) then -- jump 110 marker 0x44 -- 0x0184
  if not (param_buypartugg = sellcar) then -- jump 100 marker 0x44 -- 0x018E
  if not (param_buypartugg = sellcarpart) then -- jump 90 marker 0x44 -- 0x0198
  if not (param_buypartugg = sellenginepart) then -- jump 80 marker 0x44 -- 0x01A2
  if not (param_buypartugg = sellengine) then -- jump 70 marker 0x44 -- 0x01AC
  if not (param_buypartugg = buygears) then -- jump 60 marker 0x44 -- 0x01B6
  if not (param_buypartugg = sellallspare) then -- jump 50 marker 0x44 -- 0x01C0
  if not (param_buypartugg = activatepoints) then -- jump 40 marker 0x44 -- 0x01CA
  if not (param_buypartugg = activatemember) then -- jump 30 marker 0x44 -- 0x01D4
  if not (param_buypartugg = repairparts) then -- jump 20 marker 0x44 -- 0x01DE
  if not (param_buypartugg = fbremovefacebook) then -- jump 10 marker 0x44 -- 0x01E8
  if not (param_buypartugg = changepasswordreq) then -- jump 22 -- 0x01F2
  buypart = (buypart & ("&" & getPCInfo())) -- 0x0205
  -- branch 18 -- 0x020C
  buypart = (buypart & ("&" & param_buypart)) -- 0x021A
  param_buypart -- 0x021D
  -- branch 38 -- 0x0224
  buypart = ((_global.gameURL & "?") & escape(encrypt(buypart))) -- 0x0243
  _global.isEnc -- 0x0246
  -- jump 21 -- 0x0247
  buypart = ((_global.gameURL & "?") & buypart) -- 0x0258
  -- branch 10 -- 0x025F
  buypartugg = buypartugg -- 0x0265
  buypartugg -- 0x0268
  (param_buypartugg ^ getNetText(buypart)) -- 0x027C
  "&aid=" = Array -- 0x027D
  _global.gNetID.push("&aid=") -- 0x0291
end

on __embedded_lscr109_block05
  -- source-kind: embedded block without handler metadata
  -- offset=8436 length=892 codeLen=146
  -- names: _global, isConnected, isEnc, gMultiuserInstance, sendNetMessage, System, String, encrypt, ld, Object, ex, sprite, flashSP, showConnectionErrorCB, Connection Error, Connection could not be established. (Error: 009)

  -- branch 140 -- 0x001A
  -- 0x45 marker -- 0x0024
  -- branch 21504 -- 0x0026
  -- branch 43 -- 0x002B
  _global.gMultiuserInstance.sendNetMessage(System, String, (encrypt(param__global) & _global.ld)) -- 0x0052
  -- jump 33 -- 0x0053
  _global.gMultiuserInstance.sendNetMessage(System, String, (param__global & _global.ld)) -- 0x0073
  -- jump 50 -- 0x0074
  -- 0x75 packed prefix before name load raw=75 00 00 00 -- 0x0077
  -- 0x0A marker -- 0x0083
  -- 0x03 packed prefix before name load raw=03 -- 0x0084
  sprite(flashSP).showConnectionErrorCB("Connection Error", ("Connection could not be established. (Error: 009)\n" & ex)) -- 0x00A0
  -- 0x04 packed short-jump prefix raw=04 -- 0x00A1
  -- jump 4 -- 0x00A2
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-109.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-109.aggressive-evidence.json
-- blocks=6 actions=0 branches=35 methodCalls=20
-- literalNames=112 callbackLikeNames=8 constants=4
-- todos=0 implicitSites=0
