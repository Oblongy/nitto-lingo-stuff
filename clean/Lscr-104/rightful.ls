-- Lscr-104 rightful.ls
-- Mechanical Lingo reconstruction from .bin/.json.
-- Constraint: recovered bytecode evidence only; undecoded lines are not invented source.

on LOGIN
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=0 length=384 codeLen=300
  -- registration/prologue markers=75 paddingBytes=75 -- 0x0014
end

on SENDNIMMESSAGE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=384 length=332 codeLen=32
  -- names: ssm, L, String, fromCharCode, _global, guid
  ssm(((L & String.fromCharCode(30)) & _global.guid)) -- 0x0033
end

on UPDATENIMUSER
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=716 length=328 codeLen=54
  -- names: ssm, SN, String, fromCharCode, unescape
  ssm(((((SN & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & unescape(param_SN))) -- 0x0049
end

on DELETENIMUSER
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1044 length=272 codeLen=29
  -- names: ssm, UNU, String, fromCharCode
  ssm(((UNU & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on BLOCKNIMUSER
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1316 length=264 codeLen=29
  -- names: ssm, DU, String, fromCharCode
  ssm(((DU & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on UNBLOCKNIMUSER
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1580 length=268 codeLen=29
  -- names: ssm, BU, String, fromCharCode
  ssm(((BU & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on INQUIRYNIMUSER
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1848 length=272 codeLen=29
  -- names: ssm, UU, String, fromCharCode
  ssm(((UU & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on ALLOWNIMUSER
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2120 length=312 codeLen=36
  -- names: ssm, IU, String, fromCharCode, unescape
  ssm(((IU & String.fromCharCode(30)) & unescape(param_ssm))) -- 0x0037
end

on NIMOKRESPONSE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2432 length=288 codeLen=47
  -- names: ssm, AU, String, fromCharCode
  ssm(((((AU & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_AU)) -- 0x0042
end

on DELETENIMINQUIREDUSER
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2720 length=284 codeLen=29
  -- names: ssm, OR, String, fromCharCode
  ssm(((OR & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on GETNIMINREQUESTS
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=3004 length=260 codeLen=29
  -- names: ssm, DIU, String, fromCharCode
  ssm(((DIU & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on GETNIMOUTREQUESTS
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=3264 length=176 codeLen=11
  -- names: ssm, GIR
  ssm(GIR) -- 0x001E
end

on LISTRACECHATROOMS2
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=3440 length=208 codeLen=11
  -- names: ssm, GOR
  ssm(GOR) -- 0x001E
end

on CREATECHATROOM
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=3648 length=412 codeLen=47
  -- names: ssm, LRCR2, String, fromCharCode
  ssm(((((LRCR2 & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_LRCR2)) -- 0x0042
end

on JOINRACECHAT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=4060 length=516 codeLen=165
  -- names: unescape, ssm, CRC, String, fromCharCode
  CRC = unescape(param_CRC) -- 0x001E
  fromCharCode = unescape(param_fromCharCode) -- 0x002C
  ssm(((((((((((((((CRC & String.fromCharCode(30)) & param_unescape) & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_CRC) & String.fromCharCode(30)) & param_String) & String.fromCharCode(30)) & param_fromCharCode) & String.fromCharCode(30)) & param_id_5) & String.fromCharCode(30)) & param_id_6)) -- 0x00B8
end

on LEAVERACECHAT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=4576 length=368 codeLen=97
  -- names: unescape, ssm, JRC, String, fromCharCode
  JRC = unescape(param_JRC) -- 0x001E
  ssm(((((((((JRC & String.fromCharCode(30)) & param_unescape) & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_JRC) & String.fromCharCode(30)) & param_String)) -- 0x0074
end

on LISTRACECHATUSERS
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=4944 length=176 codeLen=11
  -- names: ssm, LRC
  ssm(LRC) -- 0x001E
end

on SENDRACECHAT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=5120 length=180 codeLen=11
  -- names: ssm, LRCU
  ssm(LRCU) -- 0x001E
end

on TEAMKICK
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=5300 length=304 codeLen=43
  -- names: unescape, ssm, SRC, String, fromCharCode
  unescape = unescape(param_unescape) -- 0x001E
  ssm(((SRC & String.fromCharCode(30)) & param_unescape)) -- 0x003E
end

on TEAMCHANGEROLE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=5604 length=300 codeLen=29
  -- names: ssm, TK, String, fromCharCode
  ssm(((TK & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on TEAMUPDATEMAXBET
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=5904 length=336 codeLen=65
  -- names: ssm, TCR, String, fromCharCode
  ssm(((((((TCR & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_TCR) & String.fromCharCode(30)) & param_String)) -- 0x0054
end

on TEAMDEPOSIT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=6240 length=288 codeLen=47
  -- names: ssm, TUB, String, fromCharCode
  ssm(((((TUB & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_TUB)) -- 0x0042
end

on TEAMWITHDRAW
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=6528 length=268 codeLen=29
  -- names: ssm, TDP, String, fromCharCode
  ssm(((TDP & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on TEAMQUIT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=6796 length=240 codeLen=29
  -- names: ssm, TW, String, fromCharCode
  ssm(((TW & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on TEAMACCEPT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=7036 length=172 codeLen=11
  -- names: ssm, TQ
  ssm(TQ) -- 0x001E
end

on TEAMDISPERSE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=7208 length=284 codeLen=29
  -- names: ssm, TAT, String, fromCharCode
  ssm(((TAT & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on TEAMCREATE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=7492 length=284 codeLen=47
  -- names: ssm, TDB, String, fromCharCode
  ssm(((((TDB & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_TDB)) -- 0x0042
end

on TEAMSTEPDOWN
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=7776 length=280 codeLen=36
  -- names: ssm, TC, String, fromCharCode, unescape
  ssm(((TC & String.fromCharCode(30)) & unescape(param_ssm))) -- 0x0037
end

on GETKOTH
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=8056 length=152 codeLen=11
  -- names: ssm, TL
  ssm(TL) -- 0x001E
end

on JOINKOTH
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=8208 length=184 codeLen=11
  -- names: ssm, GK
  ssm(GK) -- 0x001E
end

on LEAVEKOTH
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=8392 length=512 codeLen=78
  -- names: ssm, JK, String, fromCharCode, _global, objRace, raceType, KOTH, executeCall, getonecarengine, acid=
  ssm(((((JK & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_JK)) -- 0x0042
  raceType = KOTH -- 0x004C
  _global.objRace -- 0x004F
  executeCall(getonecarengine, ("acid=" & param_ssm)) -- 0x0061
end

on KCNT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=8904 length=176 codeLen=11
  -- names: ssm, LK
  ssm(LK) -- 0x001E
end

on SENDVOTE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=9080 length=416 codeLen=64
  -- names: ssm, KC, String, fromCharCode, _global, objRace, init, KOTH
  ssm(((((KC & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_KC)) -- 0x0042
  _global.objRace.init(KOTH) -- 0x0053
end

on KDONE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=9496 length=544 codeLen=47
  -- names: ssm, SV, String, fromCharCode
  ssm(((((SV & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_SV)) -- 0x0042
end

on KRT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=10040 length=1248 codeLen=537
  -- names: Math, floor, ssm, KD, String, fromCharCode, isCheatEngineRunning, CheckProcesses, decrypt, _global, cp, CheckWindows, cw, CheckWindowsClass, cwc
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  floor = (Math.floor((param_floor * 100)) / 100) -- 0x0042
  afterRD = (Math.floor((param_afterRD * 1000)) / 1000) -- 0x005B
  ssm(((((((((((((((((((((((((((((((((((((((((((((KD & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor) & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_KD) & String.fromCharCode(30)) & param_String) & String.fromCharCode(30)) & param_fromCharCode) & String.fromCharCode(30)) & param_isCheatEngineRunning) & String.fromCharCode(30)) & param_CheckProcesses) & String.fromCharCode(30)) & param_decrypt) & String.fromCharCode(30)) & param__global) & String.fromCharCode(30)) & param_cp) & String.fromCharCode(30)) & param_CheckWindows) & String.fromCharCode(30)) & param_cw) & String.fromCharCode(30)) & param_CheckWindowsClass) & String.fromCharCode(30)) & param_cwc) & String.fromCharCode(30)) & param_CheckProcesses) & String.fromCharCode(30)) & param_cp) & String.fromCharCode(30)) & isCheatEngineRunning()) & String.fromCharCode(30)) & param_afterRD) & String.fromCharCode(30)) & CheckProcesses(decrypt(_global.cp))) & String.fromCharCode(30)) & CheckWindows(decrypt(_global.cw))) & String.fromCharCode(30)) & CheckWindowsClass(decrypt(_global.cwc)))) -- 0x022C
end

on STG
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=11288 length=380 codeLen=72
  -- names: Math, floor, ssm, KRT, String, fromCharCode
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  ssm(((((KRT & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor)) -- 0x005B
end

on int
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=11668 length=480 codeLen=140
  -- names: Math, floor, ssm, S, String, fromCharCode
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  floor = (Math.floor((param_floor * 1000)) / 1000) -- 0x0042
  ssm = (Math.floor((param_ssm * 1000)) / 1000) -- 0x005B
  ssm(((((((S & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor) & String.fromCharCode(30)) & param_ssm)) -- 0x009F
end

on KOK
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=12148 length=456 codeLen=158
  -- names: Math, floor, ssm, I, String, fromCharCode
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  floor = (Math.floor((param_floor * 1000)) / 1000) -- 0x0042
  ssm = (Math.floor((param_ssm * 1000)) / 1000) -- 0x005B
  ssm(((((((((I & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor) & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_I)) -- 0x00B1
end

on KREADY
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=12604 length=392 codeLen=46
  -- names: ssm, KOK, String, fromCharCode, _global, objRace, init, KOTH
  ssm(((KOK & String.fromCharCode(30)) & param_ssm)) -- 0x0030
  _global.objRace.init(KOTH) -- 0x0041
end

on GETRIVALS
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=12996 length=264 codeLen=47
  -- names: ssm, KR, String, fromCharCode
  ssm(((((KR & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_KR)) -- 0x0042
end

on RREQ
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=13260 length=228 codeLen=11
  -- names: ssm, GR
  ssm(GR) -- 0x001E
end

on RRSP
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=13488 length=376 codeLen=101
  -- names: ssm, RRQ, String, fromCharCode
  ssm(((((((((((RRQ & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_RRQ) & String.fromCharCode(30)) & param_String) & String.fromCharCode(30)) & param_fromCharCode) & String.fromCharCode(30)) & param_id_4)) -- 0x0078
end

on RLVE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=13864 length=280 codeLen=65
  -- names: ssm, RRS, String, fromCharCode
  ssm(((((((RRS & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_RRS) & String.fromCharCode(30)) & param_String)) -- 0x0054
end

on RIVOK
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=14144 length=148 codeLen=11
  -- names: ssm, RL
  ssm(RL) -- 0x001E
end

on RIVREADY
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=14292 length=308 codeLen=28
  -- names: ssm, RO, _global, objRace, init, RIVAL
  ssm(RO) -- 0x001E
  _global.objRace.init(RIVAL) -- 0x002F
end

on RIVRT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=14600 length=288 codeLen=47
  -- names: ssm, RR, String, fromCharCode
  ssm(((((RR & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_RR)) -- 0x0042
end

on RIVDONE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=14888 length=632 codeLen=72
  -- names: Math, floor, ssm, RIVRT, String, fromCharCode
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  ssm(((((RIVRT & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor)) -- 0x005B
end

on HTJOIN
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=15520 length=1448 codeLen=636
  -- names: Math, floor, trace, before RD, decrypt, _global, cwc, CheckWindows, cw, CheckWindowsClass, ssm, RD, String, fromCharCode, isCheatEngineRunning, CheckProcesses, cp, after RD
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  floor = (Math.floor((param_floor * 100)) / 100) -- 0x0042
  "after RD" = (Math.floor((param_"after RD" * 1000)) / 1000) -- 0x005B
  trace("before RD") -- 0x0069
  trace(decrypt(_global.cwc)) -- 0x007E
  trace(CheckWindows(decrypt(_global.cw))) -- 0x009A
  trace(CheckWindowsClass(decrypt(_global.cwc))) -- 0x00B6
  ssm(((((((((((((((((((((((((((((((((((((((((((((RD & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor) & String.fromCharCode(30)) & param_trace) & String.fromCharCode(30)) & param_"before RD") & String.fromCharCode(30)) & param_decrypt) & String.fromCharCode(30)) & param__global) & String.fromCharCode(30)) & param_cwc) & String.fromCharCode(30)) & param_CheckWindows) & String.fromCharCode(30)) & param_cw) & String.fromCharCode(30)) & param_CheckWindowsClass) & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_RD) & String.fromCharCode(30)) & param_String) & String.fromCharCode(30)) & param_fromCharCode) & String.fromCharCode(30)) & param_isCheatEngineRunning) & String.fromCharCode(30)) & param_CheckProcesses) & String.fromCharCode(30)) & param_cp) & String.fromCharCode(30)) & isCheatEngineRunning()) & String.fromCharCode(30)) & param_"after RD") & String.fromCharCode(30)) & CheckProcesses(decrypt(_global.cp))) & String.fromCharCode(30)) & CheckWindows(decrypt(_global.cw))) & String.fromCharCode(30)) & CheckWindowsClass(decrypt(_global.cwc)))) -- 0x0284
  trace("after RD") -- 0x028F
end

on HQOK
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=16968 length=248 codeLen=29
  -- names: ssm, JT, String, fromCharCode
  ssm(((JT & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on HTGET32
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=17216 length=244 codeLen=29
  -- names: ssm, HQOK, String, fromCharCode
  ssm(((HQOK & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on HTGETTREE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=17460 length=160 codeLen=11
  -- names: ssm, HQ32
  ssm(HQ32) -- 0x001E
end

on HTSPECTATE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=17620 length=160 codeLen=11
  -- names: ssm, HTFT
  ssm(HTFT) -- 0x001E
end

on HTQUIT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=17780 length=152 codeLen=11
  -- names: ssm, HTS
  ssm(HTS) -- 0x001E
end

on HTINFO
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=17932 length=156 codeLen=11
  -- names: ssm, HTQUIT
  ssm(HTQUIT) -- 0x001E
end

on HTQREADY
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=18088 length=188 codeLen=11
  -- names: ssm, HTI
  ssm(HTI) -- 0x001E
end

on HTQD
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=18276 length=544 codeLen=47
  -- names: ssm, HQR, String, fromCharCode
  ssm(((((HQR & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_HQR)) -- 0x0042
end

on HTQRT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=18820 length=1256 codeLen=537
  -- names: Math, floor, ssm, HTQD, String, fromCharCode, isCheatEngineRunning, CheckProcesses, decrypt, _global, cp, CheckWindows, cw, CheckWindowsClass, cwc
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  floor = (Math.floor((param_floor * 100)) / 100) -- 0x0042
  afterRD = (Math.floor((param_afterRD * 1000)) / 1000) -- 0x005B
  ssm(((((((((((((((((((((((((((((((((((((((((((((HTQD & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor) & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_HTQD) & String.fromCharCode(30)) & param_String) & String.fromCharCode(30)) & param_fromCharCode) & String.fromCharCode(30)) & param_isCheatEngineRunning) & String.fromCharCode(30)) & param_CheckProcesses) & String.fromCharCode(30)) & param_decrypt) & String.fromCharCode(30)) & param__global) & String.fromCharCode(30)) & param_cp) & String.fromCharCode(30)) & param_CheckWindows) & String.fromCharCode(30)) & param_cw) & String.fromCharCode(30)) & param_CheckWindowsClass) & String.fromCharCode(30)) & param_cwc) & String.fromCharCode(30)) & param_CheckProcesses) & String.fromCharCode(30)) & param_cp) & String.fromCharCode(30)) & isCheatEngineRunning()) & String.fromCharCode(30)) & param_afterRD) & String.fromCharCode(30)) & CheckProcesses(decrypt(_global.cp))) & String.fromCharCode(30)) & CheckWindows(decrypt(_global.cw))) & String.fromCharCode(30)) & CheckWindowsClass(decrypt(_global.cwc)))) -- 0x022C
end

on HTREADY
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=20076 length=372 codeLen=72
  -- names: Math, floor, ssm, HQRT, String, fromCharCode
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  ssm(((((HQRT & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor)) -- 0x005B
end

on HTD
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=20448 length=544 codeLen=47
  -- names: ssm, HTR, String, fromCharCode
  ssm(((((HTR & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_HTR)) -- 0x0042
end

on HTRT
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=20992 length=1252 codeLen=537
  -- names: Math, floor, ssm, HTD, String, fromCharCode, isCheatEngineRunning, CheckProcesses, decrypt, _global, cp, CheckWindows, cw, CheckWindowsClass, cwc
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  floor = (Math.floor((param_floor * 100)) / 100) -- 0x0042
  afterRD = (Math.floor((param_afterRD * 1000)) / 1000) -- 0x005B
  ssm(((((((((((((((((((((((((((((((((((((((((((((HTD & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor) & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_HTD) & String.fromCharCode(30)) & param_String) & String.fromCharCode(30)) & param_fromCharCode) & String.fromCharCode(30)) & param_isCheatEngineRunning) & String.fromCharCode(30)) & param_CheckProcesses) & String.fromCharCode(30)) & param_decrypt) & String.fromCharCode(30)) & param__global) & String.fromCharCode(30)) & param_cp) & String.fromCharCode(30)) & param_CheckWindows) & String.fromCharCode(30)) & param_cw) & String.fromCharCode(30)) & param_CheckWindowsClass) & String.fromCharCode(30)) & param_cwc) & String.fromCharCode(30)) & param_CheckProcesses) & String.fromCharCode(30)) & param_cp) & String.fromCharCode(30)) & isCheatEngineRunning()) & String.fromCharCode(30)) & param_afterRD) & String.fromCharCode(30)) & CheckProcesses(decrypt(_global.cp))) & String.fromCharCode(30)) & CheckWindows(decrypt(_global.cw))) & String.fromCharCode(30)) & CheckWindowsClass(decrypt(_global.cwc)))) -- 0x022C
end

on TRGETRACERS
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=22244 length=348 codeLen=72
  -- names: Math, floor, ssm, HTRT, String, fromCharCode
  Math = (Math.floor((param_Math * 1000)) / 1000) -- 0x0029
  ssm(((((HTRT & String.fromCharCode(30)) & param_Math) & String.fromCharCode(30)) & param_floor)) -- 0x005B
end

on TRGETTEAMS
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=22592 length=160 codeLen=11
  -- names: ssm, GTR
  ssm(GTR) -- 0x001E
end

on TRPREREQUEST
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=22752 length=180 codeLen=11
  -- names: ssm, TRGT
  ssm(TRGT) -- 0x001E
end

on TRREQUEST
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=22932 length=484 codeLen=29
  -- names: ssm, TRPRQ, String, fromCharCode
  ssm(((TRPRQ & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on TRCOUNTER
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=23416 length=448 codeLen=155
  -- names: ssm, TRRQ, String, fromCharCode
  ssm(((((((((((((((((TRRQ & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_TRRQ) & String.fromCharCode(30)) & param_String) & String.fromCharCode(30)) & param_fromCharCode) & String.fromCharCode(30)) & param_id_4) & String.fromCharCode(30)) & param_id_5) & String.fromCharCode(30)) & param_id_6) & String.fromCharCode(30)) & param_id_7)) -- 0x00AE
end

on TRRESPONSE
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=23864 length=304 codeLen=47
  -- names: ssm, TRCT, String, fromCharCode
  ssm(((((TRCT & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_TRCT)) -- 0x0042
end

on TROK
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=24168 length=280 codeLen=47
  -- names: ssm, TRRS, String, fromCharCode
  ssm(((((TRRS & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_TRRS)) -- 0x0042
end

on TRIVREADY
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=24448 length=280 codeLen=29
  -- names: ssm, TRO, String, fromCharCode
  ssm(((TRO & String.fromCharCode(30)) & param_ssm)) -- 0x0030
end

on JOINELECTION
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=24728 length=272 codeLen=47
  -- names: ssm, TRR, String, fromCharCode
  ssm(((((TRR & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_TRR)) -- 0x0042
end

on ELECTIONINTERVIEWLIST
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=25000 length=180 codeLen=11
  -- names: ssm, JE
  ssm(JE) -- 0x001E
end

on m
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=25180 length=320 codeLen=11
  -- names: ssm, EIL
  ssm(EIL) -- 0x001E
end

on CLOSEGAME
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=25500 length=476 codeLen=209
  -- names: ssm, M, String, fromCharCode
  ssm(((((((((((((((((((((((M & String.fromCharCode(30)) & param_ssm) & String.fromCharCode(30)) & param_M) & String.fromCharCode(30)) & param_String) & String.fromCharCode(30)) & param_fromCharCode) & String.fromCharCode(30)) & param_id_4) & String.fromCharCode(30)) & param_id_5) & String.fromCharCode(30)) & param_id_6) & String.fromCharCode(30)) & param_id_7) & String.fromCharCode(30)) & param_id_8) & String.fromCharCode(30)) & param_id_9) & String.fromCharCode(30)) & param_id_10)) -- 0x00E4
end

on IsMyProcessNameCorrect
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=25976 length=220 codeLen=11
  -- names: _player, quit
  _player.quit() -- 0x001E
end

on CheckNittoProcesses
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=26196 length=348 codeLen=40
  -- names: _player, applicationName, search, _global, exeName
  _player = 0 -- 0x0015
  if not (_player.applicationName.search(_global.exeName) <> -1) then -- jump 8 -- 0x002F
  _player = 1 -- 0x0034
  _player -- 0x003B
end

on CheckNittoProcessesCB
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=26544 length=640 codeLen=43
  -- names: _player, debugPlaybackEnabled, _global, checkedForOneClient, checkProcessResult, getNetText, mainURL, oneclient.html?hey=1
  if not (_player.debugPlaybackEnabled = TRUE) then -- jump 3 -- 0x001B
  checkedForOneClient = VOID -- 0x0023
  _global -- 0x0026
  checkProcessResult = getNetText((_global.mainURL & "oneclient.html?hey=1")) -- 0x003B
  _global -- 0x003E
end

on __embedded_lscr104_block75
  -- source-kind: embedded block without handler metadata
  -- offset=27184 length=1108 codeLen=145
  -- names: trace, result: , 0, CheckProcesses, _global, exeName, split, ,, length, IsMyProcessNameCorrect, flashReturnValue: , sprite, flashSP, CheckNittoProcessesCB
  trace(("result: " & param_trace)) -- 0x0022
  trace = VOID -- 0x0024
  if not (param_trace <> "0") then -- jump 82 -- 0x002E
  "result: " = CheckProcesses(_global.exeName) -- 0x003F
  "0" = "result: ".split(",") -- 0x0050
  CheckProcesses = "0".length -- 0x005A
  if not (CheckProcesses > TRUE) then -- jump 11 -- 0x0062
  trace = TRUE -- 0x0067
  -- jump 22 -- 0x006B
  if not (IsMyProcessNameCorrect() = 0) then -- jump 10 -- 0x0076
  trace = "0" -- 0x007D
  trace(("flashReturnValue: " & trace)) -- 0x008F
  sprite(flashSP).CheckNittoProcessesCB(trace) -- 0x00A4
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-104.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-104.aggressive-evidence.json
-- blocks=76 actions=0 branches=5 methodCalls=12
-- literalNames=119 callbackLikeNames=6 constants=3
-- todos=0 implicitSites=0
