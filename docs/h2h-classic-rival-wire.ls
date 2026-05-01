-- H2H classic rival wire excerpt
-- Evidence assembly only. This is not a standalone recovered Director script.
-- All handler names and bodies below are copied from the recovered export-backed Lingo.
--
-- Source citations:
-- - reconstructed (1)\Lscr-104\rightful.ls:335-399
-- - reconstructed (1)\Lscr-105\rightful.ls:595-676
--
-- Working rule for alignment:
-- Compare by emitted / received AC token, not by `Lscr-104` handler name.

-- Lscr-104 outbound classic rival handlers

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

-- Lscr-105 inbound classic rival dispatch slice

  -- pass26 AC-message span: "LR" body 0x125F..before 0x1281 (byte-backed AC dispatch)
  sprite(flashSP).chatRIVListCB(param_getAProp.getAProp("d")) -- 0x127D
  -- jump 2875 -- 0x127E
  -- else if ac = "RRQ" then -- byte-backed AC dispatch target 0x1281
  -- pass26 AC-message span: "RRQ" body 0x1281..before 0x12D8 (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x12B5
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 38 -- 0x128F
  sprite(flashSP).chatRIVRequestCB(TRUE, param_getAProp.getAProp("r")) -- 0x12B2
  -- jump 34 -- 0x12B3
  -- pass27 AC-branch-target: false path from 0x128F for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).chatRIVRequestCB(param_getAProp.getAProp("s")) -- 0x12D4
  -- jump 2788 -- 0x12D5
  -- pass22 structured-control: end if
  -- else if ac = "RCLG" then -- byte-backed AC dispatch target 0x12D8
  -- pass26 AC-message span: "RCLG" body 0x12D8..before 0x12FA (byte-backed AC dispatch)
  sprite(flashSP).chatRIVChallengeCB(param_getAProp.getAProp("d")) -- 0x12F6
  -- jump 2754 -- 0x12F7
  -- else if ac = "RRS" then -- byte-backed AC dispatch target 0x12FA
  -- pass26 AC-message span: "RRS" body 0x12FA..before 0x1329 (byte-backed AC dispatch)
  sprite(flashSP).chatRIVResponseCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("i")) -- 0x1325
  -- jump 2707 -- 0x1326
  -- else if ac = "RDNY" then -- byte-backed AC dispatch target 0x1329
  -- pass26 AC-message span: "RDNY" body 0x1329..before 0x134B (byte-backed AC dispatch)
  sprite(flashSP).chatRIVDeniedCB(param_getAProp.getAProp("r")) -- 0x1347
  -- jump 2673 -- 0x1348
  -- else if ac = "RN" then -- byte-backed AC dispatch target 0x134B
  -- pass26 AC-message span: "RN" body 0x134B..before 0x136D (byte-backed AC dispatch)
  sprite(flashSP).chatRIVJoinCB(param_getAProp.getAProp("d")) -- 0x1369
  -- jump 2639 -- 0x136A
  -- else if ac = "RRA" then -- byte-backed AC dispatch target 0x136D
  -- pass26 AC-message span: "RRA" body 0x136D..before 0x138F (byte-backed AC dispatch)
  sprite(flashSP).chatRIVNRaceCB(param_getAProp.getAProp("d")) -- 0x138B
  -- jump 2605 -- 0x138C
  -- else if ac = "RIVTOUT" then -- byte-backed AC dispatch target 0x138F
  -- pass26 AC-message span: "RIVTOUT" body 0x138F..before 0x13B1 (byte-backed AC dispatch)
  sprite(flashSP).raceRIVTimeoutCB(param_getAProp.getAProp("s")) -- 0x13AD
  -- jump 2571 -- 0x13AE
  -- else if ac = "RL" then -- byte-backed AC dispatch target 0x13B1
  -- pass26 AC-message span: "RL" body 0x13B1..before 0x13D3 (byte-backed AC dispatch)
  sprite(flashSP).chatRIVLeaveCB(param_getAProp.getAProp("s")) -- 0x13CF
  -- jump 2537 -- 0x13D0
  -- else if ac = "RLFT" then -- byte-backed AC dispatch target 0x13D3
  -- pass26 AC-message span: "RLFT" body 0x13D3..before 0x13F5 (byte-backed AC dispatch)
  sprite(flashSP).chatRIVLeftCB(param_getAProp.getAProp("d")) -- 0x13F1
  -- jump 2503 -- 0x13F2
  -- else if ac = "RIVRDY" then -- byte-backed AC dispatch target 0x13F5
  -- pass26 AC-message span: "RIVRDY" body 0x13F5..before 0x140A (byte-backed AC dispatch)
  sprite(flashSP).raceRIVReadyOpponentCB() -- 0x1406
  -- jump 2482 -- 0x1407
  -- else if ac = "RR" then -- byte-backed AC dispatch target 0x140A
  -- pass26 AC-message span: "RR" body 0x140A..before 0x147A (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x1457
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 63 -- 0x1418
  sprite(flashSP).raceRIVReadyCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("t"), param_getAProp.getAProp("t2")) -- 0x1454
  -- jump 34 -- 0x1455
  -- pass27 AC-branch-target: false path from 0x1418 for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).raceRIVReadyCB(param_getAProp.getAProp("s")) -- 0x1476
  -- jump 2370 -- 0x1477
  -- pass22 structured-control: end if
  -- else if ac = "RO" then -- byte-backed AC dispatch target 0x147A
  -- pass26 AC-message span: "RO" body 0x147A..before 0x149C (byte-backed AC dispatch)
  sprite(flashSP).raceRIVOKCB(param_getAProp.getAProp("t")) -- 0x1498
  -- jump 2336 -- 0x1499
  -- else if ac = "RW" then -- byte-backed AC dispatch target 0x149C
  -- pass26 AC-message span: "RW" body 0x149C..before 0x14BE (byte-backed AC dispatch)
  sprite(flashSP).raceRIVResultCB(param_getAProp.getAProp("d")) -- 0x14BA
  -- jump 2302 -- 0x14BB
  -- else if ac = "RD" then -- byte-backed AC dispatch target 0x14BE
  -- pass26 AC-message span: "RD" body 0x14BE..before 0x14E0 (byte-backed AC dispatch)
  sprite(flashSP).raceRIVFinishCB(param_getAProp.getAProp("d")) -- 0x14DC
  -- jump 2268 -- 0x14DD
  -- else if ac = "RIVRTO" then -- byte-backed AC dispatch target 0x14E0
  -- pass26 AC-message span: "RIVRTO" body 0x14E0..before 0x1502 (byte-backed AC dispatch)
  sprite(flashSP).raceRIVRTOpponentCB(param_getAProp.getAProp("rt")) -- 0x14FE
  -- jump 2234 -- 0x14FF
  -- else if ac = "RIVRT" then -- byte-backed AC dispatch target 0x1502
  -- pass26 AC-message span: "RIVRT" body 0x1502..before 0x153E (byte-backed AC dispatch)
  sprite(flashSP).raceRIVRTCB(param_getAProp.getAProp("r"), param_getAProp.getAProp("rt"), param_getAProp.getAProp("i")) -- 0x153A
  -- jump 2174 -- 0x153B
