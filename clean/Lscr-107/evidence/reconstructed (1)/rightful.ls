-- Lscr-107 rightful.ls
-- Mechanical Lingo reconstruction from .bin/.json.
-- Constraint: recovered bytecode evidence only; undecoded lines are not invented source.

on prepareMovie
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=0 length=152 codeLen=40
  -- registration/prologue markers=10 paddingBytes=10 -- 0x0014
end

on startMovie
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=152 length=1760 codeLen=255
  -- names: lingoXtraNoDebug, lingoXtraInit, _global, ld, String, fromCharCode, aid, gNetID, Array, fileNetID, lastAction, mainURL, http://game.nittolegends.com/, gameURL, gameCode1_00.aspx, avatarMainURL, cacheURL, http://download.nittolegends.com/, socketURL, live.nittolegends.com, uggURL, http://ugg.nittolegends.com/, exeName, NittoLegendsBeta, socketBuffer, isEnc, initFileHandler, _system, gc, isIdle, isConnected, facebookToken, facebookID, facebookSessionSecret, facebookSessionKey
  lingoXtraNoDebug() -- 0x001B
  lingoXtraInit() -- 0x0023
  ld = String.fromCharCode(String) -- 0x0034
  _global -- 0x0037
  aid = VOID -- 0x003C
  _global -- 0x003F
  gNetID = (_global ^ Array) -- 0x004A
  fileNetID = (_global ^ Array) -- 0x0058
  lastAction = id_11 -- 0x0062
  _global -- 0x0065
  mainURL = "http://game.nittolegends.com/" -- 0x006C
  _global -- 0x006F
  gameURL = (_global.mainURL & "gameCode1_00.aspx") -- 0x007D
  _global -- 0x0080
  avatarMainURL = _global.mainURL -- 0x008A
  _global -- 0x008D
  cacheURL = "http://download.nittolegends.com/" -- 0x0094
  _global -- 0x0097
  socketURL = "live.nittolegends.com" -- 0x009E
  _global -- 0x00A1
  uggURL = "http://ugg.nittolegends.com/" -- 0x00A8
  _global -- 0x00AB
  exeName = NittoLegendsBeta -- 0x00B2
  _global -- 0x00B5
  socketBuffer = id_11 -- 0x00BC
  _global -- 0x00BF
  isEnc = 1 -- 0x00C4
  _global -- 0x00C7
  initFileHandler() -- 0x00CF
  _system.gc() -- 0x00DA
  isIdle = 0 -- 0x00DF
  _global -- 0x00E2
  isConnected = 0 -- 0x00E7
  _global -- 0x00EA
  facebookToken = id_11 -- 0x00F1
  _global -- 0x00F4
  facebookID = id_11 -- 0x00FB
  _global -- 0x00FE
  facebookSessionSecret = id_11 -- 0x0105
  _global -- 0x0108
  facebookSessionKey = id_11 -- 0x010F
  _global -- 0x0112
end

on stopMovie
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1912 length=292 codeLen=22
  -- names: resizeFlashSprite, _global, objRace, RaceEngine
  resizeFlashSprite() -- 0x001B
  objRace = (_global ^ RaceEngine) -- 0x0026
end

on resizeWindow
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2204 length=476 codeLen=66
  -- names: _global, gMultiuserInstance, ssm, LO, errCode, setNetMessageHandler, BreakConnection, Rick
  -- branch 60 -- 0x001A
  ssm(LO) -- 0x0027
  op_6d(errCode) -- 0x003D
  _global.gMultiuserInstance.BreakConnection(Rick) -- 0x004E
  -- 0x25 packed flush prefix raw=25 00 01 -- 0x0052
  _global -- 0x0055
end

on zoomWindow
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2680 length=180 codeLen=8
  -- names: resizeFlashSprite
  resizeFlashSprite() -- 0x001B
end

on resizeFlashSprite
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2860 length=200 codeLen=8
  -- names: resizeFlashSprite
  resizeFlashSprite() -- 0x001B
end

on setInactive
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=3060 length=528 codeLen=118
  -- names: rect, Math, round, _movie, stage, right, left, bottom, top, sprite, flashSP
  2.2528 -- 0x003D
  2.2528 -- 0x0069
  rect = implicit_callee_0x0072(implicit_arg_0x0072, rect, VOID, ((VOID((Math.round / (_movie.stage.rect.right - _movie.stage.rect.left))) * round)((Math.round / (_movie.stage.rect.bottom - _movie.stage.rect.top))) * round)) -- 0x0075
  rect = rect -- 0x0086
  sprite(flashSP) -- 0x0089
end

on sendHeartbeat
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=3588 length=672 codeLen=109
  -- names: _global, isConnected, isIdle, gMultiuserInstance, ssm, LO, errCode, setNetMessageHandler, BreakConnection, Rick, sprite, flashSP, noActivityCB
  -- branch 103 -- 0x001A
  isIdle = 1 -- 0x0021
  _global -- 0x0024
  -- branch 60 -- 0x002B
  ssm(LO) -- 0x0038
  op_6d(errCode) -- 0x004E
  _global.gMultiuserInstance.BreakConnection(Rick) -- 0x005F
  -- 0x25 packed flush prefix raw=25 00 03 -- 0x0063
  _global -- 0x0066
  sprite(flashSP).noActivityCB() -- 0x0078
  isConnected = 0 -- 0x007D
  _global -- 0x0080
end

on openURL
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=4260 length=236 codeLen=21
  -- names: _global, isIdle, ssm, H
  -- branch 14 -- 0x001B
  ssm(H) -- 0x0028
end

on clearFB
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=4496 length=220 codeLen=21
  -- names: gotoNetPage, unescape, _blank
  gotoNetPage(unescape(param_gotoNetPage), _blank) -- 0x0028
end

on __embedded_lscr107_block10
  -- source-kind: embedded block without handler metadata
  -- offset=4716 length=380 codeLen=40
  -- names: _global, facebookToken, facebookID, facebookSessionSecret, facebookSessionKey
  facebookToken = id_2 -- 0x001A
  _global -- 0x001D
  facebookID = id_2 -- 0x0024
  _global -- 0x0027
  facebookSessionSecret = id_2 -- 0x002E
  _global -- 0x0031
  facebookSessionKey = id_2 -- 0x0038
  _global -- 0x003B
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-107.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-107.aggressive-evidence.json
-- blocks=11 actions=0 branches=0 methodCalls=4
-- literalNames=61 callbackLikeNames=3 constants=2
-- todos=0 implicitSites=1
