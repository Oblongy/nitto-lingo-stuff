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
  case getAProp(ac) of -- default 0x1DB6 -- 0x0021
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
  forget() -- 0x029F
  if not (timeout(sockConnTO) = param_getAProp[getAProp(s)]) then -- jump 208 -- 0x02AE
  getAProp(ns)(param_getAProp, getAProp(tid), param_getAProp, getAProp(trp), param_getAProp, getAProp(trbp)) -- 0x0311
  sendInterval = getAProp(ni) -- 0x0325
  param_getAProp -- 0x0328
  secondBuffer = getAProp(ns) -- 0x033C
  param_getAProp -- 0x033F
  heartBeatTO = timeout(heartBeatTO).new(600000, symbol(sendHeartbeat)) -- 0x035A
  _global -- 0x035D
  lagThreshold = param_getAProp(getAProp(lft)) -- 0x0378
  parseFloat -- 0x037B
  -- jump 42 -- 0x037C
  isConnected = 0 -- 0x0383
  _global -- 0x0386
  param_getAProp(getAProp(s)) -- 0x03A5
  -- jump 6675 -- 0x03A6
  isConnected = 0 -- 0x03AD
  _global -- 0x03B0
  noActivityCB() -- 0x03C2
  -- jump 6646 -- 0x03C3
  param_getAProp(getAProp(m)) -- 0x03E4
  -- jump 6612 -- 0x03E5
  param_getAProp(getAProp(c)) -- 0x0406
  -- jump 6578 -- 0x0407
  param_getAProp(getAProp(d)) -- 0x0428
  -- jump 6544 -- 0x0429
  param_getAProp(getAProp(d)) -- 0x044A
  -- jump 6510 -- 0x044B
  param_getAProp(getAProp(d)) -- 0x046C
  -- jump 6476 -- 0x046D
  getAProp(n)(param_getAProp, getAProp(r), param_getAProp, getAProp(m)) -- 0x04B5
  -- jump 6403 -- 0x04B6
  getAProp(s)(param_getAProp, getAProp(r)) -- 0x04E4
  -- jump 6356 -- 0x04E5
  param_getAProp(getAProp(s), param_getAProp, getAProp(ul)) -- 0x0520
  -- jump 6296 -- 0x0521
  param_getAProp(getAProp(d)) -- 0x0542
  -- jump 6262 -- 0x0543
  if not (addNimUser = param_getAProp[getAProp(s)]) then -- jump 86 -- 0x0554
  param_getAProp(getAProp(us), param_getAProp, getAProp(r), param_getAProp, getAProp(ul)) -- 0x05AA
  -- jump 6158 -- 0x05AB
  param_getAProp(getAProp(s)) -- 0x05CC
  -- jump 6124 -- 0x05CD
  param_getAProp(getAProp(n), param_getAProp, getAProp(s)) -- 0x0608
  -- jump 6064 -- 0x0609
  getAProp(i)(param_getAProp, getAProp(n)) -- 0x0637
  -- jump 6017 -- 0x0638
  param_getAProp(getAProp(s)) -- 0x0659
  -- jump 5983 -- 0x065A
  getAProp(s)(param_getAProp, getAProp(i)) -- 0x0688
  -- jump 5936 -- 0x0689
  param_getAProp(getAProp(i)) -- 0x06AA
  -- jump 5902 -- 0x06AB
  param_getAProp(getAProp(s)) -- 0x06CC
  -- jump 5868 -- 0x06CD
  param_getAProp(getAProp(s)) -- 0x06EE
  -- jump 5834 -- 0x06EF
  param_getAProp(getAProp(s)) -- 0x0710
  -- jump 5800 -- 0x0711
  param_getAProp(getAProp(i)) -- 0x0732
  -- jump 5766 -- 0x0733
  param_getAProp(getAProp(d)) -- 0x0754
  -- jump 5732 -- 0x0755
  param_getAProp(getAProp(d)) -- 0x0776
  -- jump 5698 -- 0x0777
  param_getAProp(getAProp(d)) -- 0x0798
  -- jump 5664 -- 0x0799
  param_getAProp(getAProp(d)) -- 0x07BA
  -- jump 5630 -- 0x07BB
  if not (chatListRoom2CB = param_getAProp[getAProp(s)]) then -- jump 50 -- 0x07CC
  getAProp(s)(param_getAProp, getAProp(d)) -- 0x07FB
  -- jump 34 -- 0x07FC
  param_getAProp(getAProp(s)) -- 0x081D
  -- jump 5531 -- 0x081E
  param_getAProp(getAProp(s)) -- 0x083F
  -- jump 5497 -- 0x0840
  param_getAProp(getAProp(d)) -- 0x0861
  -- jump 5463 -- 0x0862
  param_getAProp(getAProp(d)) -- 0x0883
  -- jump 5429 -- 0x0884
  param_getAProp(getAProp(u), param_getAProp, getAProp(m)) -- 0x08BF
  -- jump 5369 -- 0x08C0
  param_getAProp(getAProp(d)) -- 0x08E1
  -- jump 5335 -- 0x08E2
  param_getAProp(getAProp(s)) -- 0x0903
  -- jump 5301 -- 0x0904
  param_getAProp(getAProp(s)) -- 0x0925
  -- jump 5267 -- 0x0926
  param_getAProp(getAProp(s)) -- 0x0947
  -- jump 5233 -- 0x0948
  param_getAProp(getAProp(s)) -- 0x0969
  -- jump 5199 -- 0x096A
  param_getAProp(getAProp(s)) -- 0x098B
  -- jump 5165 -- 0x098C
  param_getAProp(getAProp(s)) -- 0x09AD
  -- jump 5131 -- 0x09AE
  param_getAProp(getAProp(s)) -- 0x09CF
  -- jump 5097 -- 0x09D0
  param_getAProp(getAProp(s)) -- 0x09F1
  -- jump 5063 -- 0x09F2
  getAProp(d)(param_getAProp, getAProp(m)) -- 0x0A20
  -- jump 5016 -- 0x0A21
  if not (param_getAProp = param_getAProp[getAProp(s)]) then -- jump 50 -- 0x0A32
  getAProp(s)(param_getAProp, getAProp(id)) -- 0x0A61
  -- jump 34 -- 0x0A62
  param_getAProp(getAProp(s)) -- 0x0A83
  -- jump 4917 -- 0x0A84
  param_getAProp(getAProp(s)) -- 0x0AA5
  -- jump 4883 -- 0x0AA6
  "1"(param_getAProp, getAProp(td)) -- 0x0AC6
  -- jump 4850 -- 0x0AC7
  "2"(param_getAProp, getAProp(td)) -- 0x0AE7
  -- jump 4817 -- 0x0AE8
  s(param_getAProp, getAProp(td)) -- 0x0B08
  -- jump 4784 -- 0x0B09
  "1T"(param_getAProp, getAProp(td)) -- 0x0B29
  -- jump 4751 -- 0x0B2A
  "2T"(param_getAProp, getAProp(td)) -- 0x0B4A
  -- jump 4718 -- 0x0B4B
  sT(param_getAProp, getAProp(td)) -- 0x0B6B
  -- jump 4685 -- 0x0B6C
  b(param_getAProp, getAProp(td)) -- 0x0B8C
  guid = getAProp(guid) -- 0x0BA0
  param_getAProp -- 0x0BA3
  -- jump 4629 -- 0x0BA4
  p(param_getAProp, getAProp(td)) -- 0x0BC4
  guid = getAProp(guid) -- 0x0BD8
  param_getAProp -- 0x0BDB
  -- jump 4573 -- 0x0BDC
  o(param_getAProp, getAProp(td)) -- 0x0BFC
  -- jump 4540 -- 0x0BFD
  param_getAProp(getAProp(d)) -- 0x0C1E
  -- jump 4506 -- 0x0C1F
  param_getAProp(getAProp(s)) -- 0x0C40
  -- jump 4472 -- 0x0C41
  param_getAProp(getAProp(d)) -- 0x0C62
  -- jump 4438 -- 0x0C63
  getAProp(aid)(param_getAProp, getAProp(acid)) -- 0x0C91
  -- jump 4391 -- 0x0C92
  getAProp(aid)(param_getAProp, getAProp(ik)) -- 0x0CC0
  -- jump 4344 -- 0x0CC1
  param_getAProp(getAProp(d)) -- 0x0CE2
  -- jump 4310 -- 0x0CE3
  raceKOTHReadyOpponentCB() -- 0x0CF7
  -- jump 4289 -- 0x0CF8
  if not (sprite(flashSP) = param_getAProp[getAProp(s)]) then -- jump 63 -- 0x0D09
  param_getAProp(getAProp(t), param_getAProp, getAProp(t2)) -- 0x0D45
  -- jump 34 -- 0x0D46
  param_getAProp(getAProp(s)) -- 0x0D67
  -- jump 4177 -- 0x0D68
  getAProp(d)(param_getAProp, getAProp(t)) -- 0x0D96
  -- jump 4130 -- 0x0D97
  param_getAProp(getAProp(s)) -- 0x0DB8
  -- jump 4096 -- 0x0DB9
  param_getAProp(getAProp(d), param_getAProp, getAProp(i)) -- 0x0DF4
  -- jump 4036 -- 0x0DF5
  param_getAProp(getAProp(d)) -- 0x0E16
  -- jump 4002 -- 0x0E17
  param_getAProp(getAProp(d)) -- 0x0E38
  -- jump 3968 -- 0x0E39
  if not (raceType = RIVAL) then -- jump 32 marker 0x44 -- 0x0E48
  if not (raceType = TEAMRIVAL) then -- jump 16 marker 0x44 -- 0x0E58
  if not (raceType = HT) then -- jump 76 -- 0x0E68
  getAProp(v)(param_getAProp, getAProp(a), param_getAProp, getAProp(t)) -- 0x0EB1
  -- jump 73 -- 0x0EB2
  getAProp(v)(param_getAProp, getAProp(a), param_getAProp, getAProp(t)) -- 0x0EFA
  -- jump 3774 -- 0x0EFB
  param_getAProp(getAProp(d)) -- 0x0F1C
  -- jump 3740 -- 0x0F1D
  param_getAProp(getAProp(rt)) -- 0x0F3E
  -- jump 3706 -- 0x0F3F
  getAProp(r)(param_getAProp, getAProp(rt)) -- 0x0F6D
  -- jump 3659 -- 0x0F6E
  -- jump 3656 -- 0x0F71
  param_getAProp(getAProp(s)) -- 0x0F92
  -- jump 3622 -- 0x0F93
  param_getAProp(getAProp(s)) -- 0x0FB4
  -- jump 3588 -- 0x0FB5
  param_getAProp(getAProp(s)) -- 0x0FD6
  -- jump 3554 -- 0x0FD7
  param_getAProp(getAProp(s)) -- 0x0FF8
  -- jump 3520 -- 0x0FF9
  param_getAProp(getAProp(s)) -- 0x101A
  -- jump 3486 -- 0x101B
  param_getAProp(getAProp(d)) -- 0x103C
  -- jump 3452 -- 0x103D
  param_getAProp(getAProp(d)) -- 0x105E
  -- jump 3418 -- 0x105F
  if not (chatQMBRaceCB = param_getAProp[getAProp(s)]) then -- jump 63 -- 0x1070
  param_getAProp(getAProp(t), param_getAProp, getAProp(t2)) -- 0x10AC
  -- jump 34 -- 0x10AD
  param_getAProp(getAProp(s)) -- 0x10CE
  -- jump 3306 -- 0x10CF
  getAProp(v)(param_getAProp, getAProp(a), param_getAProp, getAProp(t)) -- 0x1117
  -- jump 3233 -- 0x1118
  param_getAProp(getAProp(rt)) -- 0x1139
  -- jump 3199 -- 0x113A
  param_getAProp(getAProp(d)) -- 0x115B
  -- jump 3165 -- 0x115C
  param_getAProp(getAProp(d)) -- 0x117D
  -- jump 3131 -- 0x117E
  param_getAProp(getAProp(s)) -- 0x119F
  -- jump 3097 -- 0x11A0
  param_getAProp(getAProp(s)) -- 0x11C1
  -- jump 3063 -- 0x11C2
  param_getAProp(getAProp(n), param_getAProp, getAProp(m)) -- 0x11FD
  -- jump 3003 -- 0x11FE
  param_getAProp(getAProp(s)) -- 0x121F
  -- jump 2969 -- 0x1220
  param_getAProp(getAProp(i), param_getAProp, getAProp(n)) -- 0x125B
  -- jump 2909 -- 0x125C
  param_getAProp(getAProp(d)) -- 0x127D
  -- jump 2875 -- 0x127E
  if not (chatRIVListCB = param_getAProp[getAProp(s)]) then -- jump 38 -- 0x128F
  sprite(flashSP)[chatRIVRequestCB](param_getAProp, getAProp(r)) -- 0x12B2
  -- jump 34 -- 0x12B3
  param_getAProp(getAProp(s)) -- 0x12D4
  -- jump 2788 -- 0x12D5
  param_getAProp(getAProp(d)) -- 0x12F6
  -- jump 2754 -- 0x12F7
  getAProp(s)(param_getAProp, getAProp(i)) -- 0x1325
  -- jump 2707 -- 0x1326
  param_getAProp(getAProp(r)) -- 0x1347
  -- jump 2673 -- 0x1348
  param_getAProp(getAProp(d)) -- 0x1369
  -- jump 2639 -- 0x136A
  param_getAProp(getAProp(d)) -- 0x138B
  -- jump 2605 -- 0x138C
  param_getAProp(getAProp(s)) -- 0x13AD
  -- jump 2571 -- 0x13AE
  param_getAProp(getAProp(s)) -- 0x13CF
  -- jump 2537 -- 0x13D0
  param_getAProp(getAProp(d)) -- 0x13F1
  -- jump 2503 -- 0x13F2
  raceRIVReadyOpponentCB() -- 0x1406
  -- jump 2482 -- 0x1407
  if not (sprite(flashSP) = param_getAProp[getAProp(s)]) then -- jump 63 -- 0x1418
  param_getAProp(getAProp(t), param_getAProp, getAProp(t2)) -- 0x1454
  -- jump 34 -- 0x1455
  param_getAProp(getAProp(s)) -- 0x1476
  -- jump 2370 -- 0x1477
  param_getAProp(getAProp(t)) -- 0x1498
  -- jump 2336 -- 0x1499
  param_getAProp(getAProp(d)) -- 0x14BA
  -- jump 2302 -- 0x14BB
  param_getAProp(getAProp(d)) -- 0x14DC
  -- jump 2268 -- 0x14DD
  param_getAProp(getAProp(rt)) -- 0x14FE
  -- jump 2234 -- 0x14FF
  param_getAProp(getAProp(rt), param_getAProp, getAProp(i)) -- 0x153A
  -- jump 2174 -- 0x153B
  getAProp(s)(param_getAProp, getAProp(d)) -- 0x1569
  -- jump 2127 -- 0x156A
  if not (param_getAProp = param_getAProp[getAProp(s)]) then -- jump 53 -- 0x157B
  getAProp(s)(id_154, param_getAProp, getAProp(t)) -- 0x15AD
  -- jump 47 -- 0x15AE
  getAProp(s)(param_getAProp, getAProp(d)) -- 0x15DC
  -- jump 2012 -- 0x15DD
  param_getAProp(getAProp(d)) -- 0x15FE
  -- jump 1978 -- 0x15FF
  param_getAProp(getAProp(d)) -- 0x1620
  -- jump 1944 -- 0x1621
  param_getAProp(getAProp(i)) -- 0x1642
  -- jump 1910 -- 0x1643
  param_getAProp(getAProp(s)) -- 0x1664
  -- jump 1876 -- 0x1665
  getAProp(s)(param_getAProp, getAProp(d)) -- 0x1693
  -- jump 1829 -- 0x1694
  htQualifyingTimeoutCB() -- 0x16A8
  -- jump 1808 -- 0x16A9
  param_getAProp(getAProp(d)) -- 0x16CA
  -- jump 1774 -- 0x16CB
  param_getAProp(getAProp(d)) -- 0x16EC
  -- jump 1740 -- 0x16ED
  param_getAProp(getAProp(d)) -- 0x170E
  init(HT) -- 0x171F
  -- jump 1689 -- 0x1720
  param_getAProp(getAProp(s)) -- 0x1741
  -- jump 1655 -- 0x1742
  param_getAProp(getAProp(d)) -- 0x1763
  -- jump 1621 -- 0x1764
  if not (htTreeResultCB = param_getAProp[getAProp(s)]) then -- jump 63 -- 0x1775
  param_getAProp(getAProp(t), param_getAProp, getAProp(t2)) -- 0x17B1
  -- jump 34 -- 0x17B2
  param_getAProp(getAProp(s)) -- 0x17D3
  -- jump 1509 -- 0x17D4
  param_getAProp(getAProp(rt)) -- 0x17F5
  -- jump 1475 -- 0x17F6
  getAProp(r)(param_getAProp, getAProp(rt)) -- 0x1824
  -- jump 1428 -- 0x1825
  param_getAProp(getAProp(d)) -- 0x1846
  -- jump 1394 -- 0x1847
  param_getAProp(getAProp(d)) -- 0x1868
  -- jump 1360 -- 0x1869
  param_getAProp(getAProp(d)) -- 0x188A
  -- jump 1326 -- 0x188B
  param_getAProp(getAProp(d)) -- 0x18AC
  -- jump 1292 -- 0x18AD
  param_getAProp(getAProp(d)) -- 0x18CE
  -- jump 1258 -- 0x18CF
  param_getAProp(getAProp(d)) -- 0x18F0
  -- jump 1224 -- 0x18F1
  param_getAProp(getAProp(d)) -- 0x1912
  -- jump 1190 -- 0x1913
  param_getAProp(getAProp(d)) -- 0x1934
  -- jump 1156 -- 0x1935
  getAProp(s)(param_getAProp, getAProp(d)) -- 0x1963
  -- jump 1109 -- 0x1964
  getAProp(s)(param_getAProp, getAProp(d)) -- 0x1992
  -- jump 1062 -- 0x1993
  param_getAProp(getAProp(d)) -- 0x19B4
  -- jump 1028 -- 0x19B5
  param_getAProp(getAProp(i), param_getAProp, getAProp(m)) -- 0x19F0
  -- jump 968 -- 0x19F1
  param_getAProp(getAProp(i), param_getAProp, getAProp(m)) -- 0x1A2C
  -- jump 908 -- 0x1A2D
  param_getAProp(getAProp(r)) -- 0x1A4E
  -- jump 874 -- 0x1A4F
  param_getAProp(getAProp(d)) -- 0x1A70
  -- jump 840 -- 0x1A71
  if not (teamRivalsNewQueueCB = param_getAProp[getAProp(s)]) then -- jump 47 -- 0x1A82
  raceType = TEAMRIVAL -- 0x1A8F
  objRace -- 0x1A92
  getonecarengine("acid=", (param_getAProp & getAProp(acid))) -- 0x1AAE
  -- jump 21 -- 0x1AAF
  teamRivalsWrongBracketCB() -- 0x1AC3
  -- jump 757 -- 0x1AC4
  param_getAProp(getAProp(d)) -- 0x1AE5
  -- jump 723 -- 0x1AE6
  teamRivalsTimeoutCB() -- 0x1AFA
  -- jump 702 -- 0x1AFB
  param_getAProp(getAProp(t)) -- 0x1B1C
  -- jump 668 -- 0x1B1D
  getAProp(s)(param_getAProp, getAProp(i)) -- 0x1B4B
  -- jump 621 -- 0x1B4C
  getAProp(d)(param_getAProp, getAProp(t)) -- 0x1B7A
  -- jump 574 -- 0x1B7B
  getAProp(d)(param_getAProp, getAProp(t)) -- 0x1BA9
  -- jump 527 -- 0x1BAA
  param_getAProp(getAProp(d)) -- 0x1BCB
  goodCounterRT = VOID -- 0x1BD3
  objRace -- 0x1BD6
  badCounterRT = VOID -- 0x1BDE
  objRace -- 0x1BE1
  -- jump 471 -- 0x1BE2
  param_getAProp(getAProp(d)) -- 0x1C03
  -- jump 437 -- 0x1C04
  param_getAProp(getAProp(d)) -- 0x1C25
  -- jump 403 -- 0x1C26
  param_getAProp(getAProp(a), param_getAProp, getAProp(t), param_getAProp, getAProp(r)) -- 0x1C7B
  -- jump 317 -- 0x1C7C
  getAProp(r)(param_getAProp, getAProp(rt)) -- 0x1CAA
  -- jump 270 -- 0x1CAB
  param_getAProp(getAProp(d)) -- 0x1CCC
  -- jump 236 -- 0x1CCD
  param_getAProp(getAProp(d)) -- 0x1CEE
  -- jump 202 -- 0x1CEF
  getAProp(s)(param_getAProp, getAProp(d)) -- 0x1D1D
  -- jump 155 -- 0x1D1E
  getAProp(s)(param_getAProp, getAProp(d)) -- 0x1D4C
  -- jump 108 -- 0x1D4D
  param_getAProp(getAProp(d)) -- 0x1D6E
  -- jump 74 -- 0x1D6F
  getAProp(i)(param_getAProp, getAProp(s)) -- 0x1D9D
  -- jump 27 -- 0x1D9E
  ElectionOverCB() -- 0x1DB2
  -- jump 6 -- 0x1DB3
  -- jump 3 -- 0x1DB6
end
