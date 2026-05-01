-- Lscr-105 rightful.ls
-- Mechanical Lingo reconstruction from .bin/.json.
-- Constraint: recovered bytecode evidence only; undecoded lines are not invented source.

on procSocket
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=0 length=112 codeLen=4
  -- registration/prologue markers=1 paddingBytes=1 -- 0x0014
end

on __embedded_lscr105_block01
  -- source-kind: embedded block without handler metadata
  -- offset=112 length=21124 codeLen=7589
  -- names: getAProp, ac, timeout, sockConnTO, forget, s, sprite, flashSP, loginCBS, ni, ns, tid, trp, trbp, _global, objRace, sendInterval, secondBuffer, heartBeatTO, symbol, sendHeartbeat, lagThreshold, parseFloat, lft, isConnected, noActivityCB, showBroadcastCB, m, addMoneyCB, c, updateCarListCB, d, updateBalanceCB, updatePointsCB, getNimMessage, i, n, r, sendNimCB, updateNimUser
  case param_getAProp.getAProp("ac") of -- default 0x1DB6 -- 0x0021
  -- L: goto 0x028E -- 0x0026
  -- LOUT: goto 0x03A9 -- 0x002A
  -- B: goto 0x03C6 -- 0x002E
  -- NMONEY: goto 0x03E8 -- 0x0032
  -- UCL: goto 0x040A -- 0x0036
  -- UB: goto 0x042C -- 0x003A
  -- UP: goto 0x044E -- 0x003E
  -- GN: goto 0x0470 -- 0x0042
  -- SNE: goto 0x04B9 -- 0x0046
  -- UNU: goto 0x04E8 -- 0x004A
  -- GNL: goto 0x0524 -- 0x004E
  -- AUR: goto 0x0546 -- 0x0052
  -- IU: goto 0x05AE -- 0x0056
  -- IA: goto 0x05D0 -- 0x005A
  -- RIU: goto 0x060C -- 0x005E
  -- AU: goto 0x063B -- 0x0062
  -- DU: goto 0x065D -- 0x0066
  -- RU: goto 0x068C -- 0x006A
  -- BU: goto 0x06AE -- 0x006E
  -- UU: goto 0x06D0 -- 0x0072
  -- DIU: goto 0x06F2 -- 0x0076
  -- DREQ: goto 0x0714 -- 0x007A
  -- GIR: goto 0x0736 -- 0x007E
  -- GOR: goto 0x0758 -- 0x0082
  -- LRCR: goto 0x077A -- 0x0086
  -- LRCR2: goto 0x079C -- 0x008A
  -- CRC: goto 0x07BE -- 0x008E
  -- JR: goto 0x0821 -- 0x0092
  -- LRCU: goto 0x0843 -- 0x0096
  -- UCU: goto 0x0865 -- 0x009A
  -- GC: goto 0x0887 -- 0x009E
  -- KRC: goto 0x08C3 -- 0x00A2
  -- TKCK: goto 0x08E5 -- 0x00A6
  -- TCR: goto 0x0907 -- 0x00AA
  -- TUB: goto 0x0929 -- 0x00AE
  -- TDEP: goto 0x094B -- 0x00B2
  -- TWDL: goto 0x096D -- 0x00B6
  -- TQ: goto 0x098F -- 0x00BA
  -- TACPT: goto 0x09B1 -- 0x00BE
  -- TDSP: goto 0x09D3 -- 0x00C2
  -- TNR: goto 0x09F5 -- 0x00C6
  -- TCRT: goto 0x0A24 -- 0x00CA
  -- TLSD: goto 0x0A87 -- 0x00CE
  -- R1: goto 0x0AA9 -- 0x00D2
  -- R2: goto 0x0ACA -- 0x00D6
  -- R4: goto 0x0AEB -- 0x00DA
  -- R1T: goto 0x0B0C -- 0x00DE
  -- R2T: goto 0x0B2D -- 0x00E2
  -- R4T: goto 0x0B4E -- 0x00E6
  -- R3: goto 0x0B6F -- 0x00EA
  -- UR: goto 0x0BA7 -- 0x00EE
  -- OR: goto 0x0BDF -- 0x00F2
  -- RINP: goto 0x0C00 -- 0x00F6
  -- JK: goto 0x0C22 -- 0x00FA
  -- KU: goto 0x0C44 -- 0x00FE
  -- NKR: goto 0x0C66 -- 0x0102
  -- RLE: goto 0x0C95 -- 0x0106
  -- NR: goto 0x0CC4 -- 0x010A
  -- KRDY: goto 0x0CE6 -- 0x010E
  -- KR: goto 0x0CFB -- 0x0112
  -- KOK: goto 0x0D6B -- 0x0116
  -- SV: goto 0x0D9A -- 0x011A
  -- V: goto 0x0DBC -- 0x011E
  -- RWIN: goto 0x0DF8 -- 0x0122
  -- KD: goto 0x0E1A -- 0x0126
  -- IO: goto 0x0E3C -- 0x012A
  -- I: goto 0x0EFE -- 0x012E
  -- KRTO: goto 0x0F20 -- 0x0132
  -- KRT: goto 0x0F42 -- 0x0136
  -- LRC: goto 0x0F71 -- 0x013A
  -- KTOUT: goto 0x0F74 -- 0x013E
  -- JQH: goto 0x0F96 -- 0x0142
  -- JQB: goto 0x0FB8 -- 0x0146
  -- LQH: goto 0x0FDA -- 0x014A
  -- LQB: goto 0x0FFC -- 0x014E
  -- QMRH: goto 0x101E -- 0x0152
  -- QMRB: goto 0x1040 -- 0x0156
  -- RRY: goto 0x1062 -- 0x015A
  -- R: goto 0x10D2 -- 0x015E
  -- RRT: goto 0x111B -- 0x0162
  -- RDONE: goto 0x113D -- 0x0166
  -- QWIN: goto 0x115F -- 0x016A
  -- TOUT: goto 0x1181 -- 0x016E
  -- QMSM: goto 0x11A3 -- 0x0172
  -- QMRM: goto 0x11C5 -- 0x0176
  -- QMLR: goto 0x1201 -- 0x017A
  -- QMUU: goto 0x1223 -- 0x017E
  -- LR: goto 0x125F -- 0x0182
  -- RRQ: goto 0x1281 -- 0x0186
  -- RCLG: goto 0x12D8 -- 0x018A
  -- RRS: goto 0x12FA -- 0x018E
  -- RDNY: goto 0x1329 -- 0x0192
  -- RN: goto 0x134B -- 0x0196
  -- RRA: goto 0x136D -- 0x019A
  -- RIVTOUT: goto 0x138F -- 0x019E
  -- RL: goto 0x13B1 -- 0x01A2
  -- RLFT: goto 0x13D3 -- 0x01A6
  -- RIVRDY: goto 0x13F5 -- 0x01AA
  -- RR: goto 0x140A -- 0x01AE
  -- RO: goto 0x147A -- 0x01B2
  -- RW: goto 0x149C -- 0x01B6
  -- RD: goto 0x14BE -- 0x01BA
  -- RIVRTO: goto 0x14E0 -- 0x01BE
  -- RIVRT: goto 0x1502 -- 0x01C2
  -- JT: goto 0x153E -- 0x01C6
  -- HQOK: goto 0x156D -- 0x01CA
  -- HQ32: goto 0x15E0 -- 0x01CE
  -- HTQ32A: goto 0x1602 -- 0x01D2
  -- HTQ32R: goto 0x1624 -- 0x01D6
  -- HQR: goto 0x1646 -- 0x01DA
  -- HTQD: goto 0x1668 -- 0x01DE
  -- HTQTO: goto 0x1697 -- 0x01E2
  -- HTEQ: goto 0x16AC -- 0x01E6
  -- HTA: goto 0x16CE -- 0x01EA
  -- HTAI: goto 0x16F0 -- 0x01EE
  -- HTTO: goto 0x1723 -- 0x01F2
  -- HTTR: goto 0x1745 -- 0x01F6
  -- HTR: goto 0x1767 -- 0x01FA
  -- HTRTO: goto 0x17D7 -- 0x01FE
  -- HTRT: goto 0x17F9 -- 0x0202
  -- HTD: goto 0x1828 -- 0x0206
  -- HTW: goto 0x184A -- 0x020A
  -- HTFT: goto 0x186C -- 0x020E
  -- HTS: goto 0x188E -- 0x0212
  -- HTI: goto 0x18B0 -- 0x0216
  -- HTAP: goto 0x18D2 -- 0x021A
  -- GTR: goto 0x18F4 -- 0x021E
  -- TRGT: goto 0x1916 -- 0x0222
  -- TRPRQ: goto 0x1938 -- 0x0226
  -- TRRQ: goto 0x1967 -- 0x022A
  -- TRCLG: goto 0x1996 -- 0x022E
  -- TRCT: goto 0x19B8 -- 0x0232
  -- TRRS: goto 0x19F4 -- 0x0236
  -- TRDNY: goto 0x1A30 -- 0x023A
  -- TRN: goto 0x1A52 -- 0x023E
  -- TRO: goto 0x1A74 -- 0x0242
  -- TROB: goto 0x1AC7 -- 0x0246
  -- TRTO: goto 0x1AE9 -- 0x024A
  -- TRS: goto 0x1AFE -- 0x024E
  -- TRR: goto 0x1B20 -- 0x0252
  -- TRRA: goto 0x1B4F -- 0x0256
  -- TRYRA: goto 0x1B7E -- 0x025A
  -- TRA: goto 0x1BAD -- 0x025E
  -- TRINP: goto 0x1BE5 -- 0x0262
  -- TRF: goto 0x1C07 -- 0x0266
  -- I2: goto 0x1C29 -- 0x026A
  -- RIVRT2: goto 0x1C7F -- 0x026E
  -- RD2: goto 0x1CAE -- 0x0272
  -- RW2: goto 0x1CD0 -- 0x0276
  -- JE: goto 0x1CF2 -- 0x027A
  -- EIL: goto 0x1D21 -- 0x027E
  -- ESI: goto 0x1D50 -- 0x0282
  -- ENI: goto 0x1D72 -- 0x0286
  -- EO: goto 0x1DA1 -- 0x028A
  -- else if ac = "L" then -- byte-backed AC dispatch target 0x028E
  -- pass26 AC-message span: "L" body 0x028E..before 0x03A9 (byte-backed AC dispatch)
  timeout(sockConnTO).forget() -- 0x029F
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x037E
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 208 -- 0x02AE
  sprite(flashSP).loginCBS(param_getAProp.getAProp("s"), param_getAProp.getAProp("ni"), param_getAProp.getAProp("ns"), param_getAProp.getAProp("tid"), param_getAProp.getAProp("trp"), param_getAProp.getAProp("trbp")) -- 0x0311
  sendInterval = param_getAProp.getAProp("ni") -- 0x0325
  _global.objRace -- 0x0328
  secondBuffer = param_getAProp.getAProp("ns") -- 0x033C
  _global.objRace -- 0x033F
  heartBeatTO = timeout(heartBeatTO).new(600000, symbol(sendHeartbeat)) -- 0x035A
  _global -- 0x035D
  lagThreshold = parseFloat(param_getAProp.getAProp("lft")) -- 0x0378
  _global.objRace -- 0x037B
  -- jump 42 -- 0x037C
  -- pass27 AC-branch-target: false path from 0x02AE for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  isConnected = 0 -- 0x0383
  _global -- 0x0386
  sprite(flashSP).loginCBS(param_getAProp.getAProp("s")) -- 0x03A5
  -- jump 6675 -- 0x03A6
  -- pass22 structured-control: end if
  -- else if ac = "LOUT" then -- byte-backed AC dispatch target 0x03A9
  -- pass26 AC-message span: "LOUT" body 0x03A9..before 0x03C6 (byte-backed AC dispatch)
  isConnected = 0 -- 0x03AD
  _global -- 0x03B0
  sprite(flashSP).noActivityCB() -- 0x03C2
  -- jump 6646 -- 0x03C3
  -- else if ac = "B" then -- byte-backed AC dispatch target 0x03C6
  -- pass26 AC-message span: "B" body 0x03C6..before 0x03E8 (byte-backed AC dispatch)
  sprite(flashSP).showBroadcastCB(param_getAProp.getAProp("m")) -- 0x03E4
  -- jump 6612 -- 0x03E5
  -- else if ac = "NMONEY" then -- byte-backed AC dispatch target 0x03E8
  -- pass26 AC-message span: "NMONEY" body 0x03E8..before 0x040A (byte-backed AC dispatch)
  sprite(flashSP).addMoneyCB(param_getAProp.getAProp("c")) -- 0x0406
  -- jump 6578 -- 0x0407
  -- else if ac = "UCL" then -- byte-backed AC dispatch target 0x040A
  -- pass26 AC-message span: "UCL" body 0x040A..before 0x042C (byte-backed AC dispatch)
  sprite(flashSP).updateCarListCB(param_getAProp.getAProp("d")) -- 0x0428
  -- jump 6544 -- 0x0429
  -- else if ac = "UB" then -- byte-backed AC dispatch target 0x042C
  -- pass26 AC-message span: "UB" body 0x042C..before 0x044E (byte-backed AC dispatch)
  sprite(flashSP).updateBalanceCB(param_getAProp.getAProp("d")) -- 0x044A
  -- jump 6510 -- 0x044B
  -- else if ac = "UP" then -- byte-backed AC dispatch target 0x044E
  -- pass26 AC-message span: "UP" body 0x044E..before 0x0470 (byte-backed AC dispatch)
  sprite(flashSP).updatePointsCB(param_getAProp.getAProp("d")) -- 0x046C
  -- jump 6476 -- 0x046D
  -- else if ac = "GN" then -- byte-backed AC dispatch target 0x0470
  -- pass26 AC-message span: "GN" body 0x0470..before 0x04B9 (byte-backed AC dispatch)
  sprite(flashSP).getNimMessage(param_getAProp.getAProp("i"), param_getAProp.getAProp("n"), param_getAProp.getAProp("r"), param_getAProp.getAProp("m")) -- 0x04B5
  -- jump 6403 -- 0x04B6
  -- else if ac = "SNE" then -- byte-backed AC dispatch target 0x04B9
  -- pass26 AC-message span: "SNE" body 0x04B9..before 0x04E8 (byte-backed AC dispatch)
  sprite(flashSP).sendNimCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("r")) -- 0x04E4
  -- jump 6356 -- 0x04E5
  -- else if ac = "UNU" then -- byte-backed AC dispatch target 0x04E8
  -- pass26 AC-message span: "UNU" body 0x04E8..before 0x0524 (byte-backed AC dispatch)
  sprite(flashSP).updateNimUser(param_getAProp.getAProp("i"), param_getAProp.getAProp("s"), param_getAProp.getAProp("ul")) -- 0x0520
  -- jump 6296 -- 0x0521
  -- else if ac = "GNL" then -- byte-backed AC dispatch target 0x0524
  -- pass26 AC-message span: "GNL" body 0x0524..before 0x0546 (byte-backed AC dispatch)
  sprite(flashSP).addNimUser(param_getAProp.getAProp("d")) -- 0x0542
  -- jump 6262 -- 0x0543
  -- else if ac = "AUR" then -- byte-backed AC dispatch target 0x0546
  -- pass26 AC-message span: "AUR" body 0x0546..before 0x05AE (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x05AA
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 86 -- 0x0554
  -- pass27 AC-branch-target: false path from 0x0554 for param_getAProp.getAProp("s") = TRUE
  sprite(flashSP).addSingleNimUser(param_getAProp.getAProp("i"), param_getAProp.getAProp("n"), param_getAProp.getAProp("us"), param_getAProp.getAProp("r"), param_getAProp.getAProp("ul")) -- 0x05AA
  -- jump 6158 -- 0x05AB
  -- pass22 structured-control: end if
  -- else if ac = "IU" then -- byte-backed AC dispatch target 0x05AE
  -- pass26 AC-message span: "IU" body 0x05AE..before 0x05D0 (byte-backed AC dispatch)
  sprite(flashSP).inquiryNimUserCB(param_getAProp.getAProp("s")) -- 0x05CC
  -- jump 6124 -- 0x05CD
  -- else if ac = "IA" then -- byte-backed AC dispatch target 0x05D0
  -- pass26 AC-message span: "IA" body 0x05D0..before 0x060C (byte-backed AC dispatch)
  sprite(flashSP).inquiryNimAnswerCB(param_getAProp.getAProp("i"), param_getAProp.getAProp("n"), param_getAProp.getAProp("s")) -- 0x0608
  -- jump 6064 -- 0x0609
  -- else if ac = "RIU" then -- byte-backed AC dispatch target 0x060C
  -- pass26 AC-message span: "RIU" body 0x060C..before 0x063B (byte-backed AC dispatch)
  sprite(flashSP).receiveNimInquiryCB(param_getAProp.getAProp("i"), param_getAProp.getAProp("n")) -- 0x0637
  -- jump 6017 -- 0x0638
  -- else if ac = "AU" then -- byte-backed AC dispatch target 0x063B
  -- pass26 AC-message span: "AU" body 0x063B..before 0x065D (byte-backed AC dispatch)
  sprite(flashSP).allowNimUserCB(param_getAProp.getAProp("s")) -- 0x0659
  -- jump 5983 -- 0x065A
  -- else if ac = "DU" then -- byte-backed AC dispatch target 0x065D
  -- pass26 AC-message span: "DU" body 0x065D..before 0x068C (byte-backed AC dispatch)
  sprite(flashSP).deleteNimUserCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("i")) -- 0x0688
  -- jump 5936 -- 0x0689
  -- else if ac = "RU" then -- byte-backed AC dispatch target 0x068C
  -- pass26 AC-message span: "RU" body 0x068C..before 0x06AE (byte-backed AC dispatch)
  sprite(flashSP).removeNimUserCB(param_getAProp.getAProp("i")) -- 0x06AA
  -- jump 5902 -- 0x06AB
  -- else if ac = "BU" then -- byte-backed AC dispatch target 0x06AE
  -- pass26 AC-message span: "BU" body 0x06AE..before 0x06D0 (byte-backed AC dispatch)
  sprite(flashSP).blockNimUserCB(param_getAProp.getAProp("s")) -- 0x06CC
  -- jump 5868 -- 0x06CD
  -- else if ac = "UU" then -- byte-backed AC dispatch target 0x06D0
  -- pass26 AC-message span: "UU" body 0x06D0..before 0x06F2 (byte-backed AC dispatch)
  sprite(flashSP).unblockNimUserCB(param_getAProp.getAProp("s")) -- 0x06EE
  -- jump 5834 -- 0x06EF
  -- else if ac = "DIU" then -- byte-backed AC dispatch target 0x06F2
  -- pass26 AC-message span: "DIU" body 0x06F2..before 0x0714 (byte-backed AC dispatch)
  sprite(flashSP).deleteNimInquiredUserCB(param_getAProp.getAProp("s")) -- 0x0710
  -- jump 5800 -- 0x0711
  -- else if ac = "DREQ" then -- byte-backed AC dispatch target 0x0714
  -- pass26 AC-message span: "DREQ" body 0x0714..before 0x0736 (byte-backed AC dispatch)
  sprite(flashSP).deleteNimInquireeUserCB(param_getAProp.getAProp("i")) -- 0x0732
  -- jump 5766 -- 0x0733
  -- else if ac = "GIR" then -- byte-backed AC dispatch target 0x0736
  -- pass26 AC-message span: "GIR" body 0x0736..before 0x0758 (byte-backed AC dispatch)
  sprite(flashSP).getNimIncomingRequestsCB(param_getAProp.getAProp("d")) -- 0x0754
  -- jump 5732 -- 0x0755
  -- else if ac = "GOR" then -- byte-backed AC dispatch target 0x0758
  -- pass26 AC-message span: "GOR" body 0x0758..before 0x077A (byte-backed AC dispatch)
  sprite(flashSP).getNimOutgoingRequestsCB(param_getAProp.getAProp("d")) -- 0x0776
  -- jump 5698 -- 0x0777
  -- else if ac = "LRCR" then -- byte-backed AC dispatch target 0x077A
  -- pass26 AC-message span: "LRCR" body 0x077A..before 0x079C (byte-backed AC dispatch)
  sprite(flashSP).chatListRoomCB(param_getAProp.getAProp("d")) -- 0x0798
  -- jump 5664 -- 0x0799
  -- else if ac = "LRCR2" then -- byte-backed AC dispatch target 0x079C
  -- pass26 AC-message span: "LRCR2" body 0x079C..before 0x07BE (byte-backed AC dispatch)
  sprite(flashSP).chatListRoom2CB(param_getAProp.getAProp("d")) -- 0x07BA
  -- jump 5630 -- 0x07BB
  -- else if ac = "CRC" then -- byte-backed AC dispatch target 0x07BE
  -- pass26 AC-message span: "CRC" body 0x07BE..before 0x0821 (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x07FE
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 50 -- 0x07CC
  sprite(flashSP).chatCreateRoomCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("d")) -- 0x07FB
  -- jump 34 -- 0x07FC
  -- pass27 AC-branch-target: false path from 0x07CC for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).chatCreateRoomCB(param_getAProp.getAProp("s")) -- 0x081D
  -- jump 5531 -- 0x081E
  -- pass22 structured-control: end if
  -- else if ac = "JR" then -- byte-backed AC dispatch target 0x0821
  -- pass26 AC-message span: "JR" body 0x0821..before 0x0843 (byte-backed AC dispatch)
  sprite(flashSP).chatJoinCB(param_getAProp.getAProp("s")) -- 0x083F
  -- jump 5497 -- 0x0840
  -- else if ac = "LRCU" then -- byte-backed AC dispatch target 0x0843
  -- pass26 AC-message span: "LRCU" body 0x0843..before 0x0865 (byte-backed AC dispatch)
  sprite(flashSP).chatListUsersCB(param_getAProp.getAProp("d")) -- 0x0861
  -- jump 5463 -- 0x0862
  -- else if ac = "UCU" then -- byte-backed AC dispatch target 0x0865
  -- pass26 AC-message span: "UCU" body 0x0865..before 0x0887 (byte-backed AC dispatch)
  sprite(flashSP).chatUpdateUserCB(param_getAProp.getAProp("d")) -- 0x0883
  -- jump 5429 -- 0x0884
  -- else if ac = "GC" then -- byte-backed AC dispatch target 0x0887
  -- pass26 AC-message span: "GC" body 0x0887..before 0x08C3 (byte-backed AC dispatch)
  sprite(flashSP).chatGetCB(param_getAProp.getAProp("c"), param_getAProp.getAProp("u"), param_getAProp.getAProp("m")) -- 0x08BF
  -- jump 5369 -- 0x08C0
  -- else if ac = "KRC" then -- byte-backed AC dispatch target 0x08C3
  -- pass26 AC-message span: "KRC" body 0x08C3..before 0x08E5 (byte-backed AC dispatch)
  sprite(flashSP).chatKickCB(param_getAProp.getAProp("d")) -- 0x08E1
  -- jump 5335 -- 0x08E2
  -- else if ac = "TKCK" then -- byte-backed AC dispatch target 0x08E5
  -- pass26 AC-message span: "TKCK" body 0x08E5..before 0x0907 (byte-backed AC dispatch)
  sprite(flashSP).teamKickCB(param_getAProp.getAProp("s")) -- 0x0903
  -- jump 5301 -- 0x0904
  -- else if ac = "TCR" then -- byte-backed AC dispatch target 0x0907
  -- pass26 AC-message span: "TCR" body 0x0907..before 0x0929 (byte-backed AC dispatch)
  sprite(flashSP).teamChangeRoleCB(param_getAProp.getAProp("s")) -- 0x0925
  -- jump 5267 -- 0x0926
  -- else if ac = "TUB" then -- byte-backed AC dispatch target 0x0929
  -- pass26 AC-message span: "TUB" body 0x0929..before 0x094B (byte-backed AC dispatch)
  sprite(flashSP).teamUpdateDealerMaxBetCB(param_getAProp.getAProp("s")) -- 0x0947
  -- jump 5233 -- 0x0948
  -- else if ac = "TDEP" then -- byte-backed AC dispatch target 0x094B
  -- pass26 AC-message span: "TDEP" body 0x094B..before 0x096D (byte-backed AC dispatch)
  sprite(flashSP).teamDepositCB(param_getAProp.getAProp("s")) -- 0x0969
  -- jump 5199 -- 0x096A
  -- else if ac = "TWDL" then -- byte-backed AC dispatch target 0x096D
  -- pass26 AC-message span: "TWDL" body 0x096D..before 0x098F (byte-backed AC dispatch)
  sprite(flashSP).teamWithdrawalCB(param_getAProp.getAProp("s")) -- 0x098B
  -- jump 5165 -- 0x098C
  -- else if ac = "TQ" then -- byte-backed AC dispatch target 0x098F
  -- pass26 AC-message span: "TQ" body 0x098F..before 0x09B1 (byte-backed AC dispatch)
  sprite(flashSP).teamQuitCB(param_getAProp.getAProp("s")) -- 0x09AD
  -- jump 5131 -- 0x09AE
  -- else if ac = "TACPT" then -- byte-backed AC dispatch target 0x09B1
  -- pass26 AC-message span: "TACPT" body 0x09B1..before 0x09D3 (byte-backed AC dispatch)
  sprite(flashSP).teamAcceptCB(param_getAProp.getAProp("s")) -- 0x09CF
  -- jump 5097 -- 0x09D0
  -- else if ac = "TDSP" then -- byte-backed AC dispatch target 0x09D3
  -- pass26 AC-message span: "TDSP" body 0x09D3..before 0x09F5 (byte-backed AC dispatch)
  sprite(flashSP).teamDisperseCB(param_getAProp.getAProp("s")) -- 0x09F1
  -- jump 5063 -- 0x09F2
  -- else if ac = "TNR" then -- byte-backed AC dispatch target 0x09F5
  -- pass26 AC-message span: "TNR" body 0x09F5..before 0x0A24 (byte-backed AC dispatch)
  sprite(flashSP).teamRoleCB(param_getAProp.getAProp("d"), param_getAProp.getAProp("m")) -- 0x0A20
  -- jump 5016 -- 0x0A21
  -- else if ac = "TCRT" then -- byte-backed AC dispatch target 0x0A24
  -- pass26 AC-message span: "TCRT" body 0x0A24..before 0x0A87 (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x0A64
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 50 -- 0x0A32
  sprite(flashSP).teamCreateCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("id")) -- 0x0A61
  -- jump 34 -- 0x0A62
  -- pass27 AC-branch-target: false path from 0x0A32 for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).teamCreateCB(param_getAProp.getAProp("s")) -- 0x0A83
  -- jump 4917 -- 0x0A84
  -- pass22 structured-control: end if
  -- else if ac = "TLSD" then -- byte-backed AC dispatch target 0x0A87
  -- pass26 AC-message span: "TLSD" body 0x0A87..before 0x0AA9 (byte-backed AC dispatch)
  sprite(flashSP).teamStepDownCB(param_getAProp.getAProp("s")) -- 0x0AA5
  -- jump 4883 -- 0x0AA6
  -- else if ac = "R1" then -- byte-backed AC dispatch target 0x0AA9
  -- pass26 AC-message span: "R1" body 0x0AA9..before 0x0ACA (byte-backed AC dispatch)
  _global.objRace.startLightTimer("1", param_getAProp.getAProp("td")) -- 0x0AC6
  -- jump 4850 -- 0x0AC7
  -- else if ac = "R2" then -- byte-backed AC dispatch target 0x0ACA
  -- pass26 AC-message span: "R2" body 0x0ACA..before 0x0AEB (byte-backed AC dispatch)
  _global.objRace.startLightTimer("2", param_getAProp.getAProp("td")) -- 0x0AE7
  -- jump 4817 -- 0x0AE8
  -- else if ac = "R4" then -- byte-backed AC dispatch target 0x0AEB
  -- pass26 AC-message span: "R4" body 0x0AEB..before 0x0B0C (byte-backed AC dispatch)
  _global.objRace.startLightTimer(s, param_getAProp.getAProp("td")) -- 0x0B08
  -- jump 4784 -- 0x0B09
  -- else if ac = "R1T" then -- byte-backed AC dispatch target 0x0B0C
  -- pass26 AC-message span: "R1T" body 0x0B0C..before 0x0B2D (byte-backed AC dispatch)
  _global.objRace.startLightTimer("1T", param_getAProp.getAProp("td")) -- 0x0B29
  -- jump 4751 -- 0x0B2A
  -- else if ac = "R2T" then -- byte-backed AC dispatch target 0x0B2D
  -- pass26 AC-message span: "R2T" body 0x0B2D..before 0x0B4E (byte-backed AC dispatch)
  _global.objRace.startLightTimer("2T", param_getAProp.getAProp("td")) -- 0x0B4A
  -- jump 4718 -- 0x0B4B
  -- else if ac = "R4T" then -- byte-backed AC dispatch target 0x0B4E
  -- pass26 AC-message span: "R4T" body 0x0B4E..before 0x0B6F (byte-backed AC dispatch)
  _global.objRace.startLightTimer(sT, param_getAProp.getAProp("td")) -- 0x0B6B
  -- jump 4685 -- 0x0B6C
  -- else if ac = "R3" then -- byte-backed AC dispatch target 0x0B6F
  -- pass26 AC-message span: "R3" body 0x0B6F..before 0x0BA7 (byte-backed AC dispatch)
  _global.objRace.startLightTimer(b, param_getAProp.getAProp("td")) -- 0x0B8C
  guid = param_getAProp.getAProp("guid") -- 0x0BA0
  _global.objRace -- 0x0BA3
  -- jump 4629 -- 0x0BA4
  -- else if ac = "UR" then -- byte-backed AC dispatch target 0x0BA7
  -- pass26 AC-message span: "UR" body 0x0BA7..before 0x0BDF (byte-backed AC dispatch)
  _global.objRace.startLightTimer(p, param_getAProp.getAProp("td")) -- 0x0BC4
  guid = param_getAProp.getAProp("guid") -- 0x0BD8
  _global.objRace -- 0x0BDB
  -- jump 4573 -- 0x0BDC
  -- else if ac = "OR" then -- byte-backed AC dispatch target 0x0BDF
  -- pass26 AC-message span: "OR" body 0x0BDF..before 0x0C00 (byte-backed AC dispatch)
  _global.objRace.startLightTimer(o, param_getAProp.getAProp("td")) -- 0x0BFC
  -- jump 4540 -- 0x0BFD
  -- else if ac = "RINP" then -- byte-backed AC dispatch target 0x0C00
  -- pass26 AC-message span: "RINP" body 0x0C00..before 0x0C22 (byte-backed AC dispatch)
  sprite(flashSP).raceEngineRaceInProgressCB(param_getAProp.getAProp("d")) -- 0x0C1E
  -- jump 4506 -- 0x0C1F
  -- else if ac = "JK" then -- byte-backed AC dispatch target 0x0C22
  -- pass26 AC-message span: "JK" body 0x0C22..before 0x0C44 (byte-backed AC dispatch)
  sprite(flashSP).chatKOTHJoinCB(param_getAProp.getAProp("s")) -- 0x0C40
  -- jump 4472 -- 0x0C41
  -- else if ac = "KU" then -- byte-backed AC dispatch target 0x0C44
  -- pass26 AC-message span: "KU" body 0x0C44..before 0x0C66 (byte-backed AC dispatch)
  sprite(flashSP).chatKOTHUsersCB(param_getAProp.getAProp("d")) -- 0x0C62
  -- jump 4438 -- 0x0C63
  -- else if ac = "NKR" then -- byte-backed AC dispatch target 0x0C66
  -- pass26 AC-message span: "NKR" body 0x0C66..before 0x0C95 (byte-backed AC dispatch)
  sprite(flashSP).chatKOTHNewRacerCB(param_getAProp.getAProp("aid"), param_getAProp.getAProp("acid")) -- 0x0C91
  -- jump 4391 -- 0x0C92
  -- else if ac = "RLE" then -- byte-backed AC dispatch target 0x0C95
  -- pass26 AC-message span: "RLE" body 0x0C95..before 0x0CC4 (byte-backed AC dispatch)
  sprite(flashSP).chatKOTHLeaveCB(param_getAProp.getAProp("aid"), param_getAProp.getAProp("ik")) -- 0x0CC0
  -- jump 4344 -- 0x0CC1
  -- else if ac = "NR" then -- byte-backed AC dispatch target 0x0CC4
  -- pass26 AC-message span: "NR" body 0x0CC4..before 0x0CE6 (byte-backed AC dispatch)
  sprite(flashSP).chatKOTHNRaceCB(param_getAProp.getAProp("d")) -- 0x0CE2
  -- jump 4310 -- 0x0CE3
  -- else if ac = "KRDY" then -- byte-backed AC dispatch target 0x0CE6
  -- pass26 AC-message span: "KRDY" body 0x0CE6..before 0x0CFB (byte-backed AC dispatch)
  sprite(flashSP).raceKOTHReadyOpponentCB() -- 0x0CF7
  -- jump 4289 -- 0x0CF8
  -- else if ac = "KR" then -- byte-backed AC dispatch target 0x0CFB
  -- pass26 AC-message span: "KR" body 0x0CFB..before 0x0D6B (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x0D48
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 63 -- 0x0D09
  sprite(flashSP).raceKOTHReadyCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("t"), param_getAProp.getAProp("t2")) -- 0x0D45
  -- jump 34 -- 0x0D46
  -- pass27 AC-branch-target: false path from 0x0D09 for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).raceKOTHReadyCB(param_getAProp.getAProp("s")) -- 0x0D67
  -- jump 4177 -- 0x0D68
  -- pass22 structured-control: end if
  -- else if ac = "KOK" then -- byte-backed AC dispatch target 0x0D6B
  -- pass26 AC-message span: "KOK" body 0x0D6B..before 0x0D9A (byte-backed AC dispatch)
  sprite(flashSP).raceKOTHOKCB(param_getAProp.getAProp("d"), param_getAProp.getAProp("t")) -- 0x0D96
  -- jump 4130 -- 0x0D97
  -- else if ac = "SV" then -- byte-backed AC dispatch target 0x0D9A
  -- pass26 AC-message span: "SV" body 0x0D9A..before 0x0DBC (byte-backed AC dispatch)
  sprite(flashSP).chatCheerVoteCB(param_getAProp.getAProp("s")) -- 0x0DB8
  -- jump 4096 -- 0x0DB9
  -- else if ac = "V" then -- byte-backed AC dispatch target 0x0DBC
  -- pass26 AC-message span: "V" body 0x0DBC..before 0x0DF8 (byte-backed AC dispatch)
  sprite(flashSP).chatCheerGetVoteCB(param_getAProp.getAProp("a"), param_getAProp.getAProp("d"), param_getAProp.getAProp("i")) -- 0x0DF4
  -- jump 4036 -- 0x0DF5
  -- else if ac = "RWIN" then -- byte-backed AC dispatch target 0x0DF8
  -- pass26 AC-message span: "RWIN" body 0x0DF8..before 0x0E1A (byte-backed AC dispatch)
  sprite(flashSP).raceKOTHResultCB(param_getAProp.getAProp("d")) -- 0x0E16
  -- jump 4002 -- 0x0E17
  -- else if ac = "KD" then -- byte-backed AC dispatch target 0x0E1A
  -- pass26 AC-message span: "KD" body 0x0E1A..before 0x0E3C (byte-backed AC dispatch)
  sprite(flashSP).raceKOTHFinishCB(param_getAProp.getAProp("d")) -- 0x0E38
  -- jump 3968 -- 0x0E39
  -- else if ac = "IO" then -- byte-backed AC dispatch target 0x0E3C
  -- pass26 AC-message span: "IO" body 0x0E3C..before 0x0EFE (byte-backed AC dispatch)
  -- pass26 AC-condition chain-member: _global.objRace.raceType = RIVAL -- compact 0x44 branch to 0x0E68
  -- pass22 structured-control: if _global.objRace.raceType = RIVAL then
  if not (_global.objRace.raceType = RIVAL) then -- jump 32 marker 0x44 -- 0x0E48
  -- pass26 AC-condition chain-member: _global.objRace.raceType = TEAMRIVAL -- compact 0x44 branch to 0x0E68
  if not (_global.objRace.raceType = TEAMRIVAL) then -- jump 16 marker 0x44 -- 0x0E58
  -- pass27 AC-branch-target: false path from 0x0E48 for _global.objRace.raceType = RIVAL
  -- pass27 AC-branch-target: false path from 0x0E58 for _global.objRace.raceType = TEAMRIVAL
  -- pass26 AC-condition: if _global.objRace.raceType = HT then -- false branch jumps to 0x0EB4
  if not (_global.objRace.raceType = HT) then -- jump 76 -- 0x0E68
  sprite(flashSP).raceRIVIntOpponentCB(param_getAProp.getAProp("d"), param_getAProp.getAProp("v"), param_getAProp.getAProp("a"), param_getAProp.getAProp("t")) -- 0x0EB1
  -- jump 73 -- 0x0EB2
  -- pass27 AC-branch-target: false path from 0x0E68 for _global.objRace.raceType = HT
  -- pass22 structured-control: else
  sprite(flashSP).raceKOTHIntOpponentCB(param_getAProp.getAProp("d"), param_getAProp.getAProp("v"), param_getAProp.getAProp("a"), param_getAProp.getAProp("t")) -- 0x0EFA
  -- jump 3774 -- 0x0EFB
  -- pass22 structured-control: end if
  -- else if ac = "I" then -- byte-backed AC dispatch target 0x0EFE
  -- pass26 AC-message span: "I" body 0x0EFE..before 0x0F20 (byte-backed AC dispatch)
  sprite(flashSP).raceSpectateCB(param_getAProp.getAProp("d")) -- 0x0F1C
  -- jump 3740 -- 0x0F1D
  -- else if ac = "KRTO" then -- byte-backed AC dispatch target 0x0F20
  -- pass26 AC-message span: "KRTO" body 0x0F20..before 0x0F42 (byte-backed AC dispatch)
  sprite(flashSP).raceKOTHRTOpponentCB(param_getAProp.getAProp("rt")) -- 0x0F3E
  -- jump 3706 -- 0x0F3F
  -- else if ac = "KRT" then -- byte-backed AC dispatch target 0x0F42
  -- pass26 AC-message span: "KRT" body 0x0F42..before 0x0F71 (byte-backed AC dispatch)
  sprite(flashSP).raceKOTHRTCB(param_getAProp.getAProp("r"), param_getAProp.getAProp("rt")) -- 0x0F6D
  -- jump 3659 -- 0x0F6E
  -- else if ac = "LRC" then -- byte-backed AC dispatch target 0x0F71
  -- pass26 AC-message span: "LRC" body 0x0F71..before 0x0F74 (byte-backed AC dispatch)
  -- jump 3656 -- 0x0F71
  -- else if ac = "KTOUT" then -- byte-backed AC dispatch target 0x0F74
  -- pass26 AC-message span: "KTOUT" body 0x0F74..before 0x0F96 (byte-backed AC dispatch)
  sprite(flashSP).raceKOTHTimeoutCB(param_getAProp.getAProp("s")) -- 0x0F92
  -- jump 3622 -- 0x0F93
  -- else if ac = "JQH" then -- byte-backed AC dispatch target 0x0F96
  -- pass26 AC-message span: "JQH" body 0x0F96..before 0x0FB8 (byte-backed AC dispatch)
  sprite(flashSP).chatQMHJoinCB(param_getAProp.getAProp("s")) -- 0x0FB4
  -- jump 3588 -- 0x0FB5
  -- else if ac = "JQB" then -- byte-backed AC dispatch target 0x0FB8
  -- pass26 AC-message span: "JQB" body 0x0FB8..before 0x0FDA (byte-backed AC dispatch)
  sprite(flashSP).chatQMBJoinCB(param_getAProp.getAProp("s")) -- 0x0FD6
  -- jump 3554 -- 0x0FD7
  -- else if ac = "LQH" then -- byte-backed AC dispatch target 0x0FDA
  -- pass26 AC-message span: "LQH" body 0x0FDA..before 0x0FFC (byte-backed AC dispatch)
  sprite(flashSP).chatQMHLeaveCB(param_getAProp.getAProp("s")) -- 0x0FF8
  -- jump 3520 -- 0x0FF9
  -- else if ac = "LQB" then -- byte-backed AC dispatch target 0x0FFC
  -- pass26 AC-message span: "LQB" body 0x0FFC..before 0x101E (byte-backed AC dispatch)
  sprite(flashSP).chatQMBLeaveCB(param_getAProp.getAProp("s")) -- 0x101A
  -- jump 3486 -- 0x101B
  -- else if ac = "QMRH" then -- byte-backed AC dispatch target 0x101E
  -- pass26 AC-message span: "QMRH" body 0x101E..before 0x1040 (byte-backed AC dispatch)
  sprite(flashSP).chatQMHRaceCB(param_getAProp.getAProp("d")) -- 0x103C
  -- jump 3452 -- 0x103D
  -- else if ac = "QMRB" then -- byte-backed AC dispatch target 0x1040
  -- pass26 AC-message span: "QMRB" body 0x1040..before 0x1062 (byte-backed AC dispatch)
  sprite(flashSP).chatQMBRaceCB(param_getAProp.getAProp("d")) -- 0x105E
  -- jump 3418 -- 0x105F
  -- else if ac = "RRY" then -- byte-backed AC dispatch target 0x1062
  -- pass26 AC-message span: "RRY" body 0x1062..before 0x10D2 (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x10AF
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 63 -- 0x1070
  sprite(flashSP).raceQMHReadyCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("t"), param_getAProp.getAProp("t2")) -- 0x10AC
  -- jump 34 -- 0x10AD
  -- pass27 AC-branch-target: false path from 0x1070 for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).raceQMHReadyCB(param_getAProp.getAProp("s")) -- 0x10CE
  -- jump 3306 -- 0x10CF
  -- pass22 structured-control: end if
  -- else if ac = "R" then -- byte-backed AC dispatch target 0x10D2
  -- pass26 AC-message span: "R" body 0x10D2..before 0x111B (byte-backed AC dispatch)
  sprite(flashSP).raceQMHIntOpponentCB(param_getAProp.getAProp("d"), param_getAProp.getAProp("v"), param_getAProp.getAProp("a"), param_getAProp.getAProp("t")) -- 0x1117
  -- jump 3233 -- 0x1118
  -- else if ac = "RRT" then -- byte-backed AC dispatch target 0x111B
  -- pass26 AC-message span: "RRT" body 0x111B..before 0x113D (byte-backed AC dispatch)
  sprite(flashSP).raceQMHRTOpponentCB(param_getAProp.getAProp("rt")) -- 0x1139
  -- jump 3199 -- 0x113A
  -- else if ac = "RDONE" then -- byte-backed AC dispatch target 0x113D
  -- pass26 AC-message span: "RDONE" body 0x113D..before 0x115F (byte-backed AC dispatch)
  sprite(flashSP).raceQMHFinishCB(param_getAProp.getAProp("d")) -- 0x115B
  -- jump 3165 -- 0x115C
  -- else if ac = "QWIN" then -- byte-backed AC dispatch target 0x115F
  -- pass26 AC-message span: "QWIN" body 0x115F..before 0x1181 (byte-backed AC dispatch)
  sprite(flashSP).raceQMHResultCB(param_getAProp.getAProp("d")) -- 0x117D
  -- jump 3131 -- 0x117E
  -- else if ac = "TOUT" then -- byte-backed AC dispatch target 0x1181
  -- pass26 AC-message span: "TOUT" body 0x1181..before 0x11A3 (byte-backed AC dispatch)
  sprite(flashSP).raceQMHTimeoutCB(param_getAProp.getAProp("s")) -- 0x119F
  -- jump 3097 -- 0x11A0
  -- else if ac = "QMSM" then -- byte-backed AC dispatch target 0x11A3
  -- pass26 AC-message span: "QMSM" body 0x11A3..before 0x11C5 (byte-backed AC dispatch)
  sprite(flashSP).chatQMLeaveCB(param_getAProp.getAProp("s")) -- 0x11C1
  -- jump 3063 -- 0x11C2
  -- else if ac = "QMRM" then -- byte-backed AC dispatch target 0x11C5
  -- pass26 AC-message span: "QMRM" body 0x11C5..before 0x1201 (byte-backed AC dispatch)
  sprite(flashSP).chatQMReceiveCB(param_getAProp.getAProp("i"), param_getAProp.getAProp("n"), param_getAProp.getAProp("m")) -- 0x11FD
  -- jump 3003 -- 0x11FE
  -- else if ac = "QMLR" then -- byte-backed AC dispatch target 0x1201
  -- pass26 AC-message span: "QMLR" body 0x1201..before 0x1223 (byte-backed AC dispatch)
  sprite(flashSP).chatQMLeaveCB(param_getAProp.getAProp("s")) -- 0x121F
  -- jump 2969 -- 0x1220
  -- else if ac = "QMUU" then -- byte-backed AC dispatch target 0x1223
  -- pass26 AC-message span: "QMUU" body 0x1223..before 0x125F (byte-backed AC dispatch)
  sprite(flashSP).chatQMLeaveOpponentCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("i"), param_getAProp.getAProp("n")) -- 0x125B
  -- jump 2909 -- 0x125C
  -- else if ac = "LR" then -- byte-backed AC dispatch target 0x125F
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
  -- else if ac = "JT" then -- byte-backed AC dispatch target 0x153E
  -- pass26 AC-message span: "JT" body 0x153E..before 0x156D (byte-backed AC dispatch)
  sprite(flashSP).htConnectCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("d")) -- 0x1569
  -- jump 2127 -- 0x156A
  -- else if ac = "HQOK" then -- byte-backed AC dispatch target 0x156D
  -- pass26 AC-message span: "HQOK" body 0x156D..before 0x15E0 (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x15B0
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 53 -- 0x157B
  sprite(flashSP).htQualifyOKCB(param_getAProp.getAProp("s"), id_154, param_getAProp.getAProp("t")) -- 0x15AD
  -- jump 47 -- 0x15AE
  -- pass27 AC-branch-target: false path from 0x157B for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).htQualifyOKCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("d")) -- 0x15DC
  -- jump 2012 -- 0x15DD
  -- pass22 structured-control: end if
  -- else if ac = "HQ32" then -- byte-backed AC dispatch target 0x15E0
  -- pass26 AC-message span: "HQ32" body 0x15E0..before 0x1602 (byte-backed AC dispatch)
  sprite(flashSP).htGetTop32CB(param_getAProp.getAProp("d")) -- 0x15FE
  -- jump 1978 -- 0x15FF
  -- else if ac = "HTQ32A" then -- byte-backed AC dispatch target 0x1602
  -- pass26 AC-message span: "HTQ32A" body 0x1602..before 0x1624 (byte-backed AC dispatch)
  sprite(flashSP).htTop32AddCB(param_getAProp.getAProp("d")) -- 0x1620
  -- jump 1944 -- 0x1621
  -- else if ac = "HTQ32R" then -- byte-backed AC dispatch target 0x1624
  -- pass26 AC-message span: "HTQ32R" body 0x1624..before 0x1646 (byte-backed AC dispatch)
  sprite(flashSP).htTop32RemoveCB(param_getAProp.getAProp("i")) -- 0x1642
  -- jump 1910 -- 0x1643
  -- else if ac = "HQR" then -- byte-backed AC dispatch target 0x1646
  -- pass26 AC-message span: "HQR" body 0x1646..before 0x1668 (byte-backed AC dispatch)
  sprite(flashSP).htQualifyReadyCB(param_getAProp.getAProp("s")) -- 0x1664
  -- jump 1876 -- 0x1665
  -- else if ac = "HTQD" then -- byte-backed AC dispatch target 0x1668
  -- pass26 AC-message span: "HTQD" body 0x1668..before 0x1697 (byte-backed AC dispatch)
  sprite(flashSP).htQualifyingResultCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("d")) -- 0x1693
  -- jump 1829 -- 0x1694
  -- else if ac = "HTQTO" then -- byte-backed AC dispatch target 0x1697
  -- pass26 AC-message span: "HTQTO" body 0x1697..before 0x16AC (byte-backed AC dispatch)
  sprite(flashSP).htQualifyingTimeoutCB() -- 0x16A8
  -- jump 1808 -- 0x16A9
  -- else if ac = "HTEQ" then -- byte-backed AC dispatch target 0x16AC
  -- pass26 AC-message span: "HTEQ" body 0x16AC..before 0x16CE (byte-backed AC dispatch)
  sprite(flashSP).htEndQualifyingCB(param_getAProp.getAProp("d")) -- 0x16CA
  -- jump 1774 -- 0x16CB
  -- else if ac = "HTA" then -- byte-backed AC dispatch target 0x16CE
  -- pass26 AC-message span: "HTA" body 0x16CE..before 0x16F0 (byte-backed AC dispatch)
  sprite(flashSP).htStartRaceCB(param_getAProp.getAProp("d")) -- 0x16EC
  -- jump 1740 -- 0x16ED
  -- else if ac = "HTAI" then -- byte-backed AC dispatch target 0x16F0
  -- pass26 AC-message span: "HTAI" body 0x16F0..before 0x1723 (byte-backed AC dispatch)
  sprite(flashSP).htStartRaceCB(param_getAProp.getAProp("d")) -- 0x170E
  _global.objRace.init(HT) -- 0x171F
  -- jump 1689 -- 0x1720
  -- else if ac = "HTTO" then -- byte-backed AC dispatch target 0x1723
  -- pass26 AC-message span: "HTTO" body 0x1723..before 0x1745 (byte-backed AC dispatch)
  sprite(flashSP).htTimeoutCB(param_getAProp.getAProp("s")) -- 0x1741
  -- jump 1655 -- 0x1742
  -- else if ac = "HTTR" then -- byte-backed AC dispatch target 0x1745
  -- pass26 AC-message span: "HTTR" body 0x1745..before 0x1767 (byte-backed AC dispatch)
  sprite(flashSP).htTreeResultCB(param_getAProp.getAProp("d")) -- 0x1763
  -- jump 1621 -- 0x1764
  -- else if ac = "HTR" then -- byte-backed AC dispatch target 0x1767
  -- pass26 AC-message span: "HTR" body 0x1767..before 0x17D7 (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x17B4
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 63 -- 0x1775
  sprite(flashSP).htReadyCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("t"), param_getAProp.getAProp("t2")) -- 0x17B1
  -- jump 34 -- 0x17B2
  -- pass27 AC-branch-target: false path from 0x1775 for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).htReadyCB(param_getAProp.getAProp("s")) -- 0x17D3
  -- jump 1509 -- 0x17D4
  -- pass22 structured-control: end if
  -- else if ac = "HTRTO" then -- byte-backed AC dispatch target 0x17D7
  -- pass26 AC-message span: "HTRTO" body 0x17D7..before 0x17F9 (byte-backed AC dispatch)
  sprite(flashSP).htRTOpponentCB(param_getAProp.getAProp("rt")) -- 0x17F5
  -- jump 1475 -- 0x17F6
  -- else if ac = "HTRT" then -- byte-backed AC dispatch target 0x17F9
  -- pass26 AC-message span: "HTRT" body 0x17F9..before 0x1828 (byte-backed AC dispatch)
  sprite(flashSP).htRTCB(param_getAProp.getAProp("r"), param_getAProp.getAProp("rt")) -- 0x1824
  -- jump 1428 -- 0x1825
  -- else if ac = "HTD" then -- byte-backed AC dispatch target 0x1828
  -- pass26 AC-message span: "HTD" body 0x1828..before 0x184A (byte-backed AC dispatch)
  sprite(flashSP).htFinishCB(param_getAProp.getAProp("d")) -- 0x1846
  -- jump 1394 -- 0x1847
  -- else if ac = "HTW" then -- byte-backed AC dispatch target 0x184A
  -- pass26 AC-message span: "HTW" body 0x184A..before 0x186C (byte-backed AC dispatch)
  sprite(flashSP).htResultCB(param_getAProp.getAProp("d")) -- 0x1868
  -- jump 1360 -- 0x1869
  -- else if ac = "HTFT" then -- byte-backed AC dispatch target 0x186C
  -- pass26 AC-message span: "HTFT" body 0x186C..before 0x188E (byte-backed AC dispatch)
  sprite(flashSP).htGetTournamentTreeCB(param_getAProp.getAProp("d")) -- 0x188A
  -- jump 1326 -- 0x188B
  -- else if ac = "HTS" then -- byte-backed AC dispatch target 0x188E
  -- pass26 AC-message span: "HTS" body 0x188E..before 0x18B0 (byte-backed AC dispatch)
  sprite(flashSP).htSpectateCB(param_getAProp.getAProp("d")) -- 0x18AC
  -- jump 1292 -- 0x18AD
  -- else if ac = "HTI" then -- byte-backed AC dispatch target 0x18B0
  -- pass26 AC-message span: "HTI" body 0x18B0..before 0x18D2 (byte-backed AC dispatch)
  sprite(flashSP).htInfoCB(param_getAProp.getAProp("d")) -- 0x18CE
  -- jump 1258 -- 0x18CF
  -- else if ac = "HTAP" then -- byte-backed AC dispatch target 0x18D2
  -- pass26 AC-message span: "HTAP" body 0x18D2..before 0x18F4 (byte-backed AC dispatch)
  sprite(flashSP).htAwardPrizeCB(param_getAProp.getAProp("d")) -- 0x18F0
  -- jump 1224 -- 0x18F1
  -- else if ac = "GTR" then -- byte-backed AC dispatch target 0x18F4
  -- pass26 AC-message span: "GTR" body 0x18F4..before 0x1916 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsGetRacersCB(param_getAProp.getAProp("d")) -- 0x1912
  -- jump 1190 -- 0x1913
  -- else if ac = "TRGT" then -- byte-backed AC dispatch target 0x1916
  -- pass26 AC-message span: "TRGT" body 0x1916..before 0x1938 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsGetTeamsCB(param_getAProp.getAProp("d")) -- 0x1934
  -- jump 1156 -- 0x1935
  -- else if ac = "TRPRQ" then -- byte-backed AC dispatch target 0x1938
  -- pass26 AC-message span: "TRPRQ" body 0x1938..before 0x1967 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsPreRequestCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("d")) -- 0x1963
  -- jump 1109 -- 0x1964
  -- else if ac = "TRRQ" then -- byte-backed AC dispatch target 0x1967
  -- pass26 AC-message span: "TRRQ" body 0x1967..before 0x1996 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsRequestCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("d")) -- 0x1992
  -- jump 1062 -- 0x1993
  -- else if ac = "TRCLG" then -- byte-backed AC dispatch target 0x1996
  -- pass26 AC-message span: "TRCLG" body 0x1996..before 0x19B8 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsIncomingChallengeCB(param_getAProp.getAProp("d")) -- 0x19B4
  -- jump 1028 -- 0x19B5
  -- else if ac = "TRCT" then -- byte-backed AC dispatch target 0x19B8
  -- pass26 AC-message span: "TRCT" body 0x19B8..before 0x19F4 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsCounterCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("i"), param_getAProp.getAProp("m")) -- 0x19F0
  -- jump 968 -- 0x19F1
  -- else if ac = "TRRS" then -- byte-backed AC dispatch target 0x19F4
  -- pass26 AC-message span: "TRRS" body 0x19F4..before 0x1A30 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsResponseCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("i"), param_getAProp.getAProp("m")) -- 0x1A2C
  -- jump 908 -- 0x1A2D
  -- else if ac = "TRDNY" then -- byte-backed AC dispatch target 0x1A30
  -- pass26 AC-message span: "TRDNY" body 0x1A30..before 0x1A52 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsDenyCB(param_getAProp.getAProp("r")) -- 0x1A4E
  -- jump 874 -- 0x1A4F
  -- else if ac = "TRN" then -- byte-backed AC dispatch target 0x1A52
  -- pass26 AC-message span: "TRN" body 0x1A52..before 0x1A74 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsNewQueueCB(param_getAProp.getAProp("d")) -- 0x1A70
  -- jump 840 -- 0x1A71
  -- else if ac = "TRO" then -- byte-backed AC dispatch target 0x1A74
  -- pass26 AC-message span: "TRO" body 0x1A74..before 0x1AC7 (byte-backed AC dispatch)
  -- pass26 AC-condition: if param_getAProp.getAProp("s") = TRUE then -- false branch jumps to 0x1AB1
  -- pass22 structured-control: if param_getAProp.getAProp("s") = TRUE then
  if not (param_getAProp.getAProp("s") = TRUE) then -- jump 47 -- 0x1A82
  raceType = TEAMRIVAL -- 0x1A8F
  _global.objRace -- 0x1A92
  executeCall(getonecarengine, ("acid=" & param_getAProp.getAProp("acid"))) -- 0x1AAE
  -- jump 21 -- 0x1AAF
  -- pass27 AC-branch-target: false path from 0x1A82 for param_getAProp.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).teamRivalsWrongBracketCB() -- 0x1AC3
  -- jump 757 -- 0x1AC4
  -- pass22 structured-control: end if
  -- else if ac = "TROB" then -- byte-backed AC dispatch target 0x1AC7
  -- pass26 AC-message span: "TROB" body 0x1AC7..before 0x1AE9 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsOKCB(param_getAProp.getAProp("d")) -- 0x1AE5
  -- jump 723 -- 0x1AE6
  -- else if ac = "TRTO" then -- byte-backed AC dispatch target 0x1AE9
  -- pass26 AC-message span: "TRTO" body 0x1AE9..before 0x1AFE (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsTimeoutCB() -- 0x1AFA
  -- jump 702 -- 0x1AFB
  -- else if ac = "TRS" then -- byte-backed AC dispatch target 0x1AFE
  -- pass26 AC-message span: "TRS" body 0x1AFE..before 0x1B20 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsStartStagingCB(param_getAProp.getAProp("t")) -- 0x1B1C
  -- jump 668 -- 0x1B1D
  -- else if ac = "TRR" then -- byte-backed AC dispatch target 0x1B20
  -- pass26 AC-message span: "TRR" body 0x1B20..before 0x1B4F (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsStagedCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("i")) -- 0x1B4B
  -- jump 621 -- 0x1B4C
  -- else if ac = "TRRA" then -- byte-backed AC dispatch target 0x1B4F
  -- pass26 AC-message span: "TRRA" body 0x1B4F..before 0x1B7E (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsNewRaceCB(param_getAProp.getAProp("d"), param_getAProp.getAProp("t")) -- 0x1B7A
  -- jump 574 -- 0x1B7B
  -- else if ac = "TRYRA" then -- byte-backed AC dispatch target 0x1B7E
  -- pass26 AC-message span: "TRYRA" body 0x1B7E..before 0x1BAD (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsYourRaceCB(param_getAProp.getAProp("d"), param_getAProp.getAProp("t")) -- 0x1BA9
  -- jump 527 -- 0x1BAA
  -- else if ac = "TRA" then -- byte-backed AC dispatch target 0x1BAD
  -- pass26 AC-message span: "TRA" body 0x1BAD..before 0x1BE5 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsNRaceCB(param_getAProp.getAProp("d")) -- 0x1BCB
  goodCounterRT = VOID -- 0x1BD3
  _global.objRace -- 0x1BD6
  badCounterRT = VOID -- 0x1BDE
  _global.objRace -- 0x1BE1
  -- jump 471 -- 0x1BE2
  -- else if ac = "TRINP" then -- byte-backed AC dispatch target 0x1BE5
  -- pass26 AC-message span: "TRINP" body 0x1BE5..before 0x1C07 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsRaceInProgressCB(param_getAProp.getAProp("d")) -- 0x1C03
  -- jump 437 -- 0x1C04
  -- else if ac = "TRF" then -- byte-backed AC dispatch target 0x1C07
  -- pass26 AC-message span: "TRF" body 0x1C07..before 0x1C29 (byte-backed AC dispatch)
  sprite(flashSP).teamRivalsFinishCB(param_getAProp.getAProp("d")) -- 0x1C25
  -- jump 403 -- 0x1C26
  -- else if ac = "I2" then -- byte-backed AC dispatch target 0x1C29
  -- pass26 AC-message span: "I2" body 0x1C29..before 0x1C7F (byte-backed AC dispatch)
  sprite(flashSP).raceTeamIntCB(param_getAProp.getAProp("d"), param_getAProp.getAProp("v"), param_getAProp.getAProp("a"), param_getAProp.getAProp("t"), param_getAProp.getAProp("r")) -- 0x1C7B
  -- jump 317 -- 0x1C7C
  -- else if ac = "RIVRT2" then -- byte-backed AC dispatch target 0x1C7F
  -- pass26 AC-message span: "RIVRT2" body 0x1C7F..before 0x1CAE (byte-backed AC dispatch)
  sprite(flashSP).raceTeamRTCB(param_getAProp.getAProp("r"), param_getAProp.getAProp("rt")) -- 0x1CAA
  -- jump 270 -- 0x1CAB
  -- else if ac = "RD2" then -- byte-backed AC dispatch target 0x1CAE
  -- pass26 AC-message span: "RD2" body 0x1CAE..before 0x1CD0 (byte-backed AC dispatch)
  sprite(flashSP).raceTeamFinishCB(param_getAProp.getAProp("d")) -- 0x1CCC
  -- jump 236 -- 0x1CCD
  -- else if ac = "RW2" then -- byte-backed AC dispatch target 0x1CD0
  -- pass26 AC-message span: "RW2" body 0x1CD0..before 0x1CF2 (byte-backed AC dispatch)
  sprite(flashSP).raceTeamResultCB(param_getAProp.getAProp("d")) -- 0x1CEE
  -- jump 202 -- 0x1CEF
  -- else if ac = "JE" then -- byte-backed AC dispatch target 0x1CF2
  -- pass26 AC-message span: "JE" body 0x1CF2..before 0x1D21 (byte-backed AC dispatch)
  sprite(flashSP).JoinElectionCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("d")) -- 0x1D1D
  -- jump 155 -- 0x1D1E
  -- else if ac = "EIL" then -- byte-backed AC dispatch target 0x1D21
  -- pass26 AC-message span: "EIL" body 0x1D21..before 0x1D50 (byte-backed AC dispatch)
  sprite(flashSP).GetElectionInterviewListCB(param_getAProp.getAProp("s"), param_getAProp.getAProp("d")) -- 0x1D4C
  -- jump 108 -- 0x1D4D
  -- else if ac = "ESI" then -- byte-backed AC dispatch target 0x1D50
  -- pass26 AC-message span: "ESI" body 0x1D50..before 0x1D72 (byte-backed AC dispatch)
  sprite(flashSP).ElectionStartInterviewCB(param_getAProp.getAProp("d")) -- 0x1D6E
  -- jump 74 -- 0x1D6F
  -- else if ac = "ENI" then -- byte-backed AC dispatch target 0x1D72
  -- pass26 AC-message span: "ENI" body 0x1D72..before 0x1DA1 (byte-backed AC dispatch)
  sprite(flashSP).ElectionNewIntervieweeCB(param_getAProp.getAProp("i"), param_getAProp.getAProp("s")) -- 0x1D9D
  -- jump 27 -- 0x1D9E
  -- else if ac = "EO" then -- byte-backed AC dispatch target 0x1DA1
  -- pass26 AC-message span: "EO" body 0x1DA1..0x1DB6 (byte-backed AC dispatch)
  sprite(flashSP).ElectionOverCB() -- 0x1DB2
  -- jump 6 -- 0x1DB3
  -- jump 3 -- 0x1DB6
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-105.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-105.aggressive-evidence.json
-- blocks=2 actions=154 branches=14 methodCalls=181
-- literalNames=360 callbackLikeNames=141 constants=2
-- todos=0 implicitSites=0
