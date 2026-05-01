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
  timeout(sockConnTO).new(50000, symbol(sockConnTimeout)) -- 0x002C
  _global.gMultiuserInstance = new xtra("Multiuser") -- 0x003A..0x003D
  timeout = _global.gMultiuserInstance.setNetMessageHandler(symbol(socketMessageHandler), script("Connection Script")) -- 0x005F
  timeout = _global.gMultiuserInstance.connectToNetServer(Rick, MySecret, _global.socketURL, 3724, CieServer, TRUE) -- 0x0083
  if not (timeout <> VOID) then -- jump 35 -- 0x008B
    sprite(flashSP).showConnectionErrorCB("Connection Error", (("Connection could not be established. Please check your firewall. (Error: 004-" & timeout) & ")")) -- 0x00AE
  end if
end

on socketMessageHandler
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1428 length=1456 codeLen=205
  -- names: timeout, sockConnTO, forget, symbol, sockConnTimeout, _global, gMultiuserInstance, setNetMessageHandler, socketMessageHandler, script, Connection Script, connectToNetServer, Rick, MySecret, socketURL, CieServer, sprite, flashSP, showConnectionErrorCB, Connection Error, Connection could not be established. Please check your firewall. (Error: 004-, ), showSocketConnectionErrorCB
  if param_timeout = TRUE then -- 0x0018..0x00BA
    timeout(sockConnTO).forget() -- 0x002D
    timeout(sockConnTO).new(50000, symbol(sockConnTimeout)) -- 0x0048..0x006D
    timeout = _global.gMultiuserInstance.setNetMessageHandler(symbol(socketMessageHandler), script("Connection Script")) -- 0x006A
    timeout = _global.gMultiuserInstance.connectToNetServer(Rick, MySecret, _global.socketURL, 80, CieServer, TRUE) -- 0x008E
    if not (timeout <> VOID) then -- jump 35 -- 0x0096
      sprite(flashSP).showConnectionErrorCB("Connection Error", (("Connection could not be established. Please check your firewall. (Error: 004-" & timeout) & ")")) -- 0x00B9
    end if
  else
    timeout(sockConnTO).forget() -- 0x00CE
    sprite(flashSP).showSocketConnectionErrorCB() -- 0x00E0
  end if
end

on executeCall
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2884 length=3024 codeLen=612
  -- names: _global, gMultiuserInstance, getNetMessage, errorCode, content, undefined, socketBuffer, indexOf, ld, substr, eval, propList(, ), Object, ex, isEnc, decrypt, exEnc, sprite, flashSP, showConnectionErrorCB, Protocol Error, Connection protocol could not be established. (Error: 010), ex2, Connection protocol could not be established. (Error: 005), Connection protocol could not be established. (Error: 006), procSocket, length, subject, ConnectToNetServer, isConnected, LOGIN, showDisconnectedErrorCB, Disconnected, You have been disconnected from the game. Please restart the application to continue playing., Connection Error, Connection could not be established. (Error: 007-, Connection could not be established. (Error: 008)
, _system, gc
  _global = _global.gMultiuserInstance.getNetMessage() -- 0x0022
  if _global.errorCode = VOID then -- non-VOID branch exits to the post-connect/error section at 0x01A0
    if _global.content <> undefined then -- missing content skips straight to the subject/connect section
      _global.socketBuffer = (_global.socketBuffer & _global.content) -- 0x004E..0x0051
      gMultiuserInstance = _global.socketBuffer.indexOf(ld) -- 0x0062
      repeat while (gMultiuserInstance > -1) -- compare at 0x006C with the back-jump at 0x01A8
        getNetMessage -- 0x0073
        errorCode = _global.socketBuffer.substr(VOID, gMultiuserInstance) -- 0x0085
        -- packed decode split 0x0099..0x015F
        if _global.isEnc then -- literal-backed `_global.isEnc` / `decrypt` branch -- 0x00A3..0x0138
          errorCode = decrypt(errorCode) -- 0x00C6
          getNetMessage = eval((("propList(" & errorCode) & ")")) -- 0x0107..0x010D
          -- unresolved exact Object/ex trap still routes to:
          sprite(flashSP).showConnectionErrorCB("Protocol Error", "Connection protocol could not be established. (Error: 010)") -- 0x00F2
        else
          getNetMessage = eval((("propList(" & errorCode) & ")")) -- 0x0099..0x009F
          -- unresolved exact Object/ex2 trap still routes to:
          sprite(flashSP).showConnectionErrorCB("Protocol Error", "Connection protocol could not be established. (Error: 005)") -- 0x0136
        end if
        -- unresolved exact Object test; the next literal-backed body is the alternate target -- 0x013C..0x015F
        sprite(flashSP).showConnectionErrorCB("Protocol Error", "Connection protocol could not be established. (Error: 006)") -- 0x0156
        procSocket(getNetMessage) -- 0x016C
        _global.socketBuffer = _global.socketBuffer.substr((gMultiuserInstance + length(ld)), _global.socketBuffer.length) -- 0x018F..0x0193
        gMultiuserInstance = _global.socketBuffer.indexOf(ld) -- 0x01A4
      end repeat
    end if
    if _global.subject = ConnectToNetServer then -- compare/store/call chain at 0x01B7..0x01CA
      _global.isConnected = 1 -- 0x01BF
      LOGIN() -- 0x01CA
    end if
  else if _global.isConnected then -- property-load guard before the disconnect/error branch
    if _global.errorCode = -2147216214 then -- jump 30 -- 0x01E0
      sprite(flashSP).showDisconnectedErrorCB(Disconnected, "You have been disconnected from the game. Please restart the application to continue playing.") -- 0x01FB
    else
      sprite(flashSP).showConnectionErrorCB("Connection Error", (("Connection could not be established. (Error: 007-" & _global.errorCode) & ")")) -- 0x0221
    end if
  end if
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
  if param_buypartugg = buypartugg then -- jump 15 -- 0x001E
    buypartugg = buypart -- 0x0025
    buypartugg = 1 -- 0x002A
  end if
  buypart = ((((("action=" & param_buypartugg) & "&aid=") & _global.aid) & "&sk=") & _global.guid) -- 0x004B
  if param_buypartugg = login then -- jump 39 -- 0x0055
    buypart = (buypart & ("&fbt=" & _global.facebookToken)) -- 0x0067
    buypart = (buypart & ("&fbi=" & _global.facebookID)) -- 0x0079
  end if
  if param_buypartugg = fbgetsession then -- jump 21 -- 0x0083
    buypart = (buypart & ("&fbt=" & _global.facebookToken)) -- 0x0095
  end if
  if param_buypartugg = agreetoterms then -- jump 39 -- 0x009F
    buypart = (buypart & ("&fbt=" & _global.facebookToken)) -- 0x00B1
    buypart = (buypart & ("&fbi=" & _global.facebookID)) -- 0x00C3
  end if
  if (param_buypartugg = login) or (param_buypartugg = createaccount) or (param_buypartugg = fbgetsession) then -- 0x00CD..0x012B
    "action=" = new xtra("caluMD5") -- 0x00EF
    buypart = (buypart & ("&md5=" & "action=".getFileMD5((_player.applicationPath & _player.applicationName)))) -- 0x0112
    buypart = (buypart & ("&" & getPCInfo())) -- 0x0127
  else if (param_buypartugg = changehomemachine) or (param_buypartugg = buycar) or (param_buypartugg = buypart) or (param_buypartugg = buyenginepart) or (param_buypartugg = buyengine) or (param_buypartugg = swapengine) or (param_buypartugg = changeemail) or (param_buypartugg = changepassword) or (param_buypartugg = ebep) or (param_buypartugg = sellcar) or (param_buypartugg = sellcarpart) or (param_buypartugg = sellenginepart) or (param_buypartugg = sellengine) or (param_buypartugg = buygears) or (param_buypartugg = sellallspare) or (param_buypartugg = activatepoints) or (param_buypartugg = activatemember) or (param_buypartugg = repairparts) or (param_buypartugg = fbremovefacebook) or (param_buypartugg = changepasswordreq) then -- 0x0134..0x020C
    -- `buypart` appears here exactly as recovered from the chunk-backed names and remains collision-prone with the local request buffer.
    buypart = (buypart & ("&" & getPCInfo())) -- 0x0205
  else
    buypart = (buypart & ("&" & param_buypart)) -- 0x021A
  end if
  if _global.isEnc then -- 0x0224..0x0247
    buypart = ((_global.gameURL & "?") & escape(encrypt(buypart))) -- 0x0243
  else
    buypart = ((_global.gameURL & "?") & buypart) -- 0x0258
  end if
  -- exact intermediate temp names remain unresolved, but the 2-slot Array shape is byte-backed by the surviving Lscr-109/Lscr-93/Lscr-106 queue sites.
  _global.gNetID.push(Array(param_buypartugg, getNetText(buypart))) -- 0x027C..0x0291
end

on __embedded_lscr109_block05
  -- source-kind: embedded block without handler metadata
  -- offset=8436 length=892 codeLen=146
  -- names: _global, isConnected, isEnc, gMultiuserInstance, sendNetMessage, System, String, encrypt, ld, Object, ex, sprite, flashSP, showConnectionErrorCB, Connection Error, Connection could not be established. (Error: 009)

  if _global.isConnected then -- 0x001A..0x0074
    -- unresolved 0x45/Object trap marker remains between `_global.isEnc` and the two literal-backed send bodies.
    if _global.isEnc then
      _global.gMultiuserInstance.sendNetMessage(System, String, (encrypt(param__global) & _global.ld)) -- 0x0052
    else
      _global.gMultiuserInstance.sendNetMessage(System, String, (param__global & _global.ld)) -- 0x0073
    end if
  end if
  -- unresolved 0x0077..0x00A2 trap tail still routes to:
  sprite(flashSP).showConnectionErrorCB("Connection Error", ("Connection could not be established. (Error: 009)\n" & ex)) -- 0x00A0
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-109.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-109.aggressive-evidence.json
-- blocks=6 actions=0 branches=35 methodCalls=20
-- literalNames=112 callbackLikeNames=8 constants=4
-- todos=0 implicitSites=0
