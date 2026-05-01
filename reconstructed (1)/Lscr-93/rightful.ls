-- Lscr-93 rightful.ls
-- Mechanical Lingo reconstruction from .bin/.json.
-- Constraint: recovered bytecode evidence only; undecoded lines are not invented source.

on exitFrame
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=0 length=412 codeLen=25
  -- names: _global, gNetID, checkedForOneClient, checkProcessResult
  -- registration/prologue markers=1 paddingBytes=1 -- 0x0014
  _global.gNetID -- 0x001D
  _global.checkedForOneClient -- 0x0024
  _global.checkProcessResult -- 0x002B
end

on __embedded_lscr93_block01
  -- source-kind: embedded block without handler metadata
  -- offset=412 length=33588 codeLen=11982
  -- names: _global, checkedForOneClient, netDone, checkProcessResult, netError, OK, trace, netTextResult, CheckNittoProcessesCB, 1, gNetID, length, _system, gc, eval, propList(, ), Object, ex, isEnc, decrypt, exEnc, sprite, flashSP, showConnectionErrorCB, Protocol Error, Connection protocol could not be established. Action:,  (Error: 010), ex2,  (Error: 001),  (Error: 002), "s",-100, Session Timed Out, I'm sorry, but your session has timed out, please restart the application. Last action: , lastAction, xtra, xmlparser, parseString, getAProp, d
  if not (_global.checkedForOneClient = VOID) then -- jump 103 -- 0x001B
  -- branch 87 -- 0x002C
  checkedForOneClient = TRUE -- 0x0033
  _global -- 0x0036
  if not (netError(_global.checkProcessResult) = OK) then -- jump 48 -- 0x0047
  trace(netTextResult(_global.checkProcessResult)) -- 0x005F
  CheckNittoProcessesCB(netTextResult(_global.checkProcessResult)) -- 0x0074
  -- jump 14 -- 0x0075
  CheckNittoProcessesCB("1") -- 0x0082
  _global = VOID -- 0x0084
  netDone(_global.checkProcessResult) -- 0x0087
  if not (_global < _global.gNetID.length) then -- jump 11306 -- 0x0094
  _system.gc() -- 0x00A2
  -- 0x3F property-chain marker -- 0x00B1
  -- branch 11266 -- 0x00B6
  -- 0x3F property-chain marker -- 0x00C7
  if not (netDone(_global.gNetID[_global])(netError[_global.gNetID[_global]]) = OK) then -- jump 11076 -- 0x00CF
  checkedForOneClient -- 0x00D6
  -- 0x3F property-chain marker -- 0x00E5
  netDone = netTextResult(_global.gNetID[_global]) -- 0x00EA
  -- 0x79 packed assignment prefix raw=79 00 01 -- 0x00FE
  checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0101
  eval -- 0x0104
  -- jump 239 -- 0x0105
  -- 0x75 packed prefix before name load raw=75 00 00 00 -- 0x0108
  -- 0x03 packed prefix before name load raw=03 -- 0x0115
  -- branch 170 -- 0x011C
  netDone = decrypt(netDone) -- 0x012B
  VOID -- 0x012E
  -- jump 63 -- 0x012F
  -- 0x75 packed prefix before name load raw=75 00 01 00 -- 0x0132
  -- 0x03 packed prefix before name load raw=03 -- 0x013F
  sprite(flashSP).showConnectionErrorCB("Protocol Error", (("Connection protocol could not be established. Action:" & _global.gNetID[_global][VOID]) & " (Error: 010)")) -- 0x0168
  -- 0x04 packed short-jump prefix raw=04 -- 0x0169
  -- jump 4 -- 0x016A
  -- 0x79 packed assignment prefix raw=79 00 01 -- 0x017D
  checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0180
  eval -- 0x0183
  -- jump 63 -- 0x0184
  -- 0x75 packed prefix before name load raw=75 00 01 00 -- 0x0187
  -- 0x03 packed prefix before name load raw=03 -- 0x0194
  sprite(flashSP).showConnectionErrorCB("Protocol Error", (("Connection protocol could not be established. Action:" & _global.gNetID[_global][VOID]) & " (Error: 001)")) -- 0x01BD
  -- 0x04 packed short-jump prefix raw=04 -- 0x01BE
  -- jump 4 -- 0x01BF
  -- jump 44 -- 0x01C3
  sprite(flashSP).showConnectionErrorCB("Protocol Error", (("Connection protocol could not be established. Action:" & _global.gNetID[_global][VOID]) & " (Error: 002)")) -- 0x01EE
  -- 0x04 packed short-jump prefix raw=04 -- 0x01EF
  -- jump 4 -- 0x01F0
  if not (netDone = "\"s\",-100") then -- jump 37 -- 0x01FA
  sprite(flashSP).showConnectionErrorCB("Session Timed Out", ("I'm sorry, but your session has timed out, please restart the application. Last action: " & _global.lastAction)) -- 0x021C
  -- jump 10740 -- 0x021D
  -- branch 10734 -- 0x0223
  case _global.gNetID[_global][VOID] of -- default 0x2BD6 -- 0x0232
  -- getcache: goto 0x04A3 -- 0x0237
  -- fbgetsession: goto 0x04E8 -- 0x023B
  -- login: goto 0x04E8 -- 0x023F
  -- changehomemachine: goto 0x078C -- 0x0243
  -- getinfo: goto 0x078F -- 0x0247
  -- getuser: goto 0x07C3 -- 0x024B
  -- getusers: goto 0x07E5 -- 0x024F
  -- updatebg: goto 0x0807 -- 0x0253
  -- updatedefaultcar: goto 0x0829 -- 0x0257
  -- racersearch: goto 0x084B -- 0x025B
  -- racersearchnopage: goto 0x08AE -- 0x025F
  -- changeemail: goto 0x0911 -- 0x0263
  -- changepassword: goto 0x0933 -- 0x0267
  -- forgotpw: goto 0x0955 -- 0x026B
  -- getstartershowroom: goto 0x0977 -- 0x026F
  -- createaccount: goto 0x0999 -- 0x0273
  -- verifyaccount: goto 0x09BB -- 0x0277
  -- resendactivation: goto 0x09DD -- 0x027B
  -- agreetoterms: goto 0x09FF -- 0x027F
  -- activatepoints: goto 0x0A21 -- 0x0283
  -- activatemember: goto 0x0AB8 -- 0x0287
  -- getcode: goto 0x0B1B -- 0x028B
  -- getbuddies: goto 0x0B4A -- 0x028F
  -- getavatarage: goto 0x0B6C -- 0x0293
  -- getteamavatarage: goto 0x0B87 -- 0x0297
  -- uploadrequest: goto 0x0BA2 -- 0x029B
  -- getlocations: goto 0x0BC4 -- 0x029F
  -- movelocation: goto 0x0BE6 -- 0x02A3
  -- gettotalnewmail: goto 0x0C15 -- 0x02A7
  -- getemaillist: goto 0x0C38 -- 0x02AB
  -- getemail: goto 0x0C5A -- 0x02AF
  -- deleteemail: goto 0x0C7C -- 0x02B3
  -- sendemail: goto 0x0CAB -- 0x02B7
  -- markemailread: goto 0x0CCD -- 0x02BB
  -- addremark: goto 0x0CD0 -- 0x02BF
  -- deleteremark: goto 0x0CF2 -- 0x02C3
  -- getremarks: goto 0x0D49 -- 0x02C7
  -- getuserremarks: goto 0x0D6B -- 0x02CB
  -- setnondeletes: goto 0x0D8D -- 0x02CF
  -- setdeletes: goto 0x0DAF -- 0x02D3
  -- getcarcategories: goto 0x0DD1 -- 0x02D7
  -- viewshowroom: goto 0x0DF3 -- 0x02DB
  -- getallcars: goto 0x0E15 -- 0x02DF
  -- getonecar: goto 0x0E6C -- 0x02E3
  -- getallotherusercars: goto 0x0EC3 -- 0x02E7
  -- buycar: goto 0x0EF2 -- 0x02EB
  -- sellcar: goto 0x0F62 -- 0x02EF
  -- getcarprice: goto 0x0FB9 -- 0x02F3
  -- getallimcars: goto 0x1010 -- 0x02F7
  -- getoutofimpound: goto 0x1067 -- 0x02FB
  -- buydyno: goto 0x10BE -- 0x02FF
  -- changeboost: goto 0x11C5 -- 0x0303
  -- changeairfuel: goto 0x11E7 -- 0x0307
  -- getallcats: goto 0x1209 -- 0x030B
  -- getwheelstirescats: goto 0x122B -- 0x030F
  -- getallparts: goto 0x124D -- 0x0313
  -- getallwheelstires: goto 0x127C -- 0x0317
  -- buypart: goto 0x12AB -- 0x031B
  -- buyenginepart: goto 0x12DD -- 0x031F
  -- buyengine: goto 0x130F -- 0x0323
  -- buypartugg: goto 0x1341 -- 0x0327
  -- installpart: goto 0x1370 -- 0x032B
  -- installenginepart: goto 0x1395 -- 0x032F
  -- swapengine: goto 0x13BA -- 0x0333
  -- uninstallpart: goto 0x13DF -- 0x0337
  -- uninstallenginepart: goto 0x1404 -- 0x033B
  -- sellcarpart: goto 0x1429 -- 0x033F
  -- sellenginepart: goto 0x1492 -- 0x0343
  -- sellengine: goto 0x14EF -- 0x0347
  -- getcarpartsbin: goto 0x154C -- 0x034B
  -- getpartsbin: goto 0x156E -- 0x034F
  -- getpartgroup: goto 0x1590 -- 0x0353
  -- getcarperformanceincreases: goto 0x15B2 -- 0x0357
  -- egue: goto 0x15D4 -- 0x035B
  -- egep: goto 0x1637 -- 0x035F
  -- ebep: goto 0x1666 -- 0x0363
  -- esst: goto 0x1688 -- 0x0367
  -- esfi: goto 0x16DF -- 0x036B
  -- getpaintcats: goto 0x1736 -- 0x036F
  -- getpaints: goto 0x1758 -- 0x0373
  -- buypaint: goto 0x177A -- 0x0377
  -- getlicenseplates: goto 0x17DD -- 0x037B
  -- buyplate: goto 0x17FF -- 0x037F
  -- buyvanity: goto 0x186F -- 0x0383
  -- getsystemparts: goto 0x18D2 -- 0x0387
  -- systemswap: goto 0x1935 -- 0x038B
  -- getrepairparts: goto 0x1964 -- 0x038F
  -- repairparts: goto 0x19BB -- 0x0393
  -- getgearinfo: goto 0x19DD -- 0x0397
  -- buygears: goto 0x1A40 -- 0x039B
  -- getspareprice: goto 0x1AA3 -- 0x039F
  -- sellallspare: goto 0x1AD2 -- 0x03A3
  -- getdescription: goto 0x1B01 -- 0x03A7
  -- teaminfo: goto 0x1B35 -- 0x03AB
  -- teamtrans: goto 0x1B57 -- 0x03AF
  -- teamsearch: goto 0x1BBA -- 0x03B3
  -- updateleadercomments: goto 0x1C1D -- 0x03B7
  -- updateteamreq: goto 0x1C3F -- 0x03BB
  -- getteaminfo: goto 0x1C61 -- 0x03BF
  -- getallteamapps: goto 0x1CC4 -- 0x03C3
  -- getallmyapps: goto 0x1D27 -- 0x03C7
  -- deleteapp: goto 0x1D8A -- 0x03CB
  -- updateteamapp: goto 0x1DAC -- 0x03CF
  -- addteamapp: goto 0x1DCE -- 0x03D3
  -- setteamcolor: goto 0x1DF0 -- 0x03D7
  -- getonecarengine: goto 0x1E12 -- 0x03DB
  -- gettworacerscars: goto 0x1E99 -- 0x03DF
  -- getracerscars: goto 0x1EFF -- 0x03E3
  -- ctgr: goto 0x1F65 -- 0x03E7
  -- ctjt: goto 0x1F99 -- 0x03EB
  -- ctct: goto 0x1FBB -- 0x03EF
  -- ctrt: goto 0x2048 -- 0x03F3
  -- ctst: goto 0x20CA -- 0x03F7
  -- practice: goto 0x2141 -- 0x03FB
  -- gethumantournaments: goto 0x21CD -- 0x03FF
  -- joinhumantournament: goto 0x2230 -- 0x0403
  -- putcaronclassified: goto 0x22FA -- 0x0407
  -- listclassified: goto 0x2329 -- 0x040B
  -- getclassifieddetail: goto 0x234B -- 0x040F
  -- buyfromclassified: goto 0x237A -- 0x0413
  -- classifiedhistory: goto 0x23A9 -- 0x0417
  -- cancelclassified: goto 0x23CB -- 0x041B
  -- requesttrade: goto 0x23FA -- 0x041F
  -- respondtrade: goto 0x2429 -- 0x0423
  -- canceltrade: goto 0x2458 -- 0x0427
  -- getoutgoingtradehistory: goto 0x2487 -- 0x042B
  -- getpendingtrades: goto 0x24A9 -- 0x042F
  -- getwinsandlosses: goto 0x24CB -- 0x0433
  -- earnincentive: goto 0x24ED -- 0x0437
  -- logintwitter: goto 0x251C -- 0x043B
  -- setbadgevisible: goto 0x254B -- 0x043F
  -- getblackcardprogress: goto 0x256D -- 0x0443
  -- getelectionphase: goto 0x258F -- 0x0447
  -- getelectionschedule: goto 0x260F -- 0x044B
  -- getnominatecount: goto 0x2631 -- 0x044F
  -- nominate: goto 0x2653 -- 0x0453
  -- getelectionresult: goto 0x2682 -- 0x0457
  -- electionvote: goto 0x26A4 -- 0x045B
  -- activateaccount: goto 0x26D3 -- 0x045F
  -- getsupport: goto 0x2702 -- 0x0463
  -- getmisconductcount: goto 0x274B -- 0x0467
  -- fbgettoken: goto 0x2787 -- 0x046B
  -- fbremovefacebook: goto 0x27F2 -- 0x046F
  -- fbgetinviteurl: goto 0x2814 -- 0x0473
  -- checktestdrive: goto 0x2857 -- 0x0477
  -- accepttestdrive: goto 0x28BA -- 0x047B
  -- buytestdrivecar: goto 0x2944 -- 0x047F
  -- removetestdrivecar: goto 0x29A7 -- 0x0483
  -- rejecttestdrive: goto 0x29C9 -- 0x0487
  -- changeshiftlightrpm: goto 0x29EB -- 0x048B
  -- joinspecialevent: goto 0x2A0D -- 0x048F
  -- getnews: goto 0x2A70 -- 0x0493
  -- getspotlightracers: goto 0x2ADA -- 0x0497
  -- claimpendinguclprofit: goto 0x2B44 -- 0x049B
  -- getinstalledenginepartbyaccountcar: goto 0x2B73 -- 0x049F
  -- else if action = "getcache" then -- byte-backed action dispatch target 0x04A3
  -- pass26 action-response span: "getcache" body 0x04A3..before 0x04E8 (byte-backed action dispatch)
  checkProcessResult = new xtra("xmlparser") -- 0x04AD
  checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x04C8
  -- 0x3F property-chain marker -- 0x04D7
  -- 0x37 property-chain marker -- 0x04D8
  fetchCacheXMLDone(checkProcessResult.makeList().n2) -- 0x04DF
  checkProcessResult = VOID -- 0x04E1
  -- jump 10028 -- 0x04E5
  -- else if action = "fbgetsession" then -- byte-backed action dispatch target 0x04E8
  -- else if action = "login" then -- byte-backed action dispatch target 0x04E8
  -- pass26 action-response span: ["fbgetsession", "login"] body 0x04E8..before 0x078C (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x05EB
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 245 -- 0x04F6
  -- pass26 action-condition: if checkedForOneClient.getAProp("ftc") = TRUE then -- false branch jumps to 0x0521
  if not (checkedForOneClient.getAProp("ftc") = TRUE) then -- jump 25 -- 0x0508
  -- pass27 action-branch-target: false path from 0x0508 for checkedForOneClient.getAProp("ftc") = TRUE
  openURL((("http://www.facebook.com/connect/prompt_permissions.php?api_key=" & _global.facebookAPIKey) & "&v=1.0&next=http://www.facebook.com/connect/login_success.html?xxRESULTTOKENxx&display=popup&ext_perm=publish_stream&enable_profile_selector=0")) -- 0x0521
  aid = checkedForOneClient.getAProp("aid") -- 0x0532
  _global -- 0x0535
  guid = checkedForOneClient.getAProp("guid") -- 0x0546
  _global -- 0x0549
  cp = encrypt(checkedForOneClient.getAProp("cp")) -- 0x0561
  _global -- 0x0564
  cw = encrypt(checkedForOneClient.getAProp("cw")) -- 0x057C
  _global -- 0x057F
  cwc = encrypt(checkedForOneClient.getAProp("cwc")) -- 0x0597
  _global -- 0x059A
  connectSocket() -- 0x05A2
  sprite(flashSP).loginCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("at"), checkedForOneClient.getAProp("am")) -- 0x05E8
  -- jump 416 -- 0x05E9
  -- pass27 action-branch-target: false path from 0x04F6 for checkedForOneClient.getAProp("s") = TRUE
  -- pass26 action-condition chain-member: checkedForOneClient.getAProp("s") = literal_59 -- compact 0x44 branch to 0x0638
  -- pass22 structured-control: else
  if not (checkedForOneClient.getAProp("s") = literal_59) then -- jump 60 marker 0x44 -- 0x05FC
  -- pass26 action-condition chain-member: checkedForOneClient.getAProp("s") = literal_60 -- compact 0x44 branch to 0x0638
  if not (checkedForOneClient.getAProp("s") = literal_60) then -- jump 40 marker 0x44 -- 0x0610
  -- pass26 action-condition chain-member: checkedForOneClient.getAProp("s") = -12 -- compact 0x44 branch to 0x0638
  if not (checkedForOneClient.getAProp("s") = -12) then -- jump 20 marker 0x44 -- 0x0624
  -- pass27 action-branch-target: false path from 0x05FC for checkedForOneClient.getAProp("s") = literal_59
  -- pass27 action-branch-target: false path from 0x0610 for checkedForOneClient.getAProp("s") = literal_60
  -- pass27 action-branch-target: false path from 0x0624 for checkedForOneClient.getAProp("s") = -12
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = literal_62 then -- false branch jumps to 0x066A
  if not (checkedForOneClient.getAProp("s") = literal_62) then -- jump 50 -- 0x0638
  sprite(flashSP).loginCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x0667
  -- jump 289 -- 0x0668
  -- pass27 action-branch-target: false path from 0x0638 for checkedForOneClient.getAProp("s") = literal_62
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = -5 then -- false branch jumps to 0x06E9
  if not (checkedForOneClient.getAProp("s") = -5) then -- jump 110 -- 0x067B
  sprite(flashSP).loginCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x06AA
  installerURL = checkedForOneClient.getAProp("url") -- 0x06BB
  _global -- 0x06BE
  installerFile = checkedForOneClient.getAProp("fn") -- 0x06CF
  _global -- 0x06D2
  installerMD5 = checkedForOneClient.getAProp("md5") -- 0x06E3
  _global -- 0x06E6
  -- jump 162 -- 0x06E7
  -- pass27 action-branch-target: false path from 0x067B for checkedForOneClient.getAProp("s") = -5
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = literal_70 then -- false branch jumps to 0x0733
  if not (checkedForOneClient.getAProp("s") = literal_70) then -- jump 57 -- 0x06FA
  facebookID = checkedForOneClient.getAProp("f") -- 0x070E
  _global -- 0x0711
  sprite(flashSP).fbGetSessionCB(checkedForOneClient.getAProp("s")) -- 0x0730
  -- jump 88 -- 0x0731
  -- pass27 action-branch-target: false path from 0x06FA for checkedForOneClient.getAProp("s") = literal_70
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = literal_74 then -- false branch jumps to 0x0769
  if not (checkedForOneClient.getAProp("s") = literal_74) then -- jump 37 -- 0x0744
  sprite(flashSP).fbGetSessionCB(checkedForOneClient.getAProp("s")) -- 0x0766
  -- jump 34 -- 0x0767
  -- pass27 action-branch-target: false path from 0x0744 for checkedForOneClient.getAProp("s") = literal_74
  sprite(flashSP).loginCB(checkedForOneClient.getAProp("s")) -- 0x0788
  -- jump 9352 -- 0x0789
  -- pass22 structured-control: end if
  -- else if action = "changehomemachine" then -- byte-backed action dispatch target 0x078C
  -- pass26 action-response span: "changehomemachine" body 0x078C..before 0x078F (byte-backed action dispatch)
  -- jump 9349 -- 0x078C
  -- else if action = "getinfo" then -- byte-backed action dispatch target 0x078F
  -- pass26 action-response span: "getinfo" body 0x078F..before 0x07C3 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x07BF
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 34 -- 0x079D
  -- pass27 action-branch-target: false path from 0x079D for checkedForOneClient.getAProp("s") = TRUE
  sprite(flashSP).getInfoCB(checkedForOneClient.getAProp("d")) -- 0x07BF
  -- jump 9297 -- 0x07C0
  -- pass22 structured-control: end if
  -- else if action = "getuser" then -- byte-backed action dispatch target 0x07C3
  -- pass26 action-response span: "getuser" body 0x07C3..before 0x07E5 (byte-backed action dispatch)
  sprite(flashSP).getUserCB(checkedForOneClient.getAProp("d")) -- 0x07E1
  -- jump 9263 -- 0x07E2
  -- else if action = "getusers" then -- byte-backed action dispatch target 0x07E5
  -- pass26 action-response span: "getusers" body 0x07E5..before 0x0807 (byte-backed action dispatch)
  sprite(flashSP).getUsersCB(checkedForOneClient.getAProp("d")) -- 0x0803
  -- jump 9229 -- 0x0804
  -- else if action = "updatebg" then -- byte-backed action dispatch target 0x0807
  -- pass26 action-response span: "updatebg" body 0x0807..before 0x0829 (byte-backed action dispatch)
  sprite(flashSP).updateBgColorCB(checkedForOneClient.getAProp("s")) -- 0x0825
  -- jump 9195 -- 0x0826
  -- else if action = "updatedefaultcar" then -- byte-backed action dispatch target 0x0829
  -- pass26 action-response span: "updatedefaultcar" body 0x0829..before 0x084B (byte-backed action dispatch)
  sprite(flashSP).updateDefaultCarCB(checkedForOneClient.getAProp("s")) -- 0x0847
  -- jump 9161 -- 0x0848
  -- else if action = "racersearch" then -- byte-backed action dispatch target 0x084B
  -- pass26 action-response span: "racersearch" body 0x084B..before 0x08AE (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x088B
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x0859
  sprite(flashSP).racerSearchCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x0888
  -- jump 34 -- 0x0889
  -- pass27 action-branch-target: false path from 0x0859 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).racerSearchCB(checkedForOneClient.getAProp("s")) -- 0x08AA
  -- jump 9062 -- 0x08AB
  -- pass22 structured-control: end if
  -- else if action = "racersearchnopage" then -- byte-backed action dispatch target 0x08AE
  -- pass26 action-response span: "racersearchnopage" body 0x08AE..before 0x0911 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x08EE
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x08BC
  sprite(flashSP).racerSearchNoPageCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x08EB
  -- jump 34 -- 0x08EC
  -- pass27 action-branch-target: false path from 0x08BC for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).racerSearchNoPageCB(checkedForOneClient.getAProp("s")) -- 0x090D
  -- jump 8963 -- 0x090E
  -- pass22 structured-control: end if
  -- else if action = "changeemail" then -- byte-backed action dispatch target 0x0911
  -- pass26 action-response span: "changeemail" body 0x0911..before 0x0933 (byte-backed action dispatch)
  sprite(flashSP).changeEmailCB(checkedForOneClient.getAProp("s")) -- 0x092F
  -- jump 8929 -- 0x0930
  -- else if action = "changepassword" then -- byte-backed action dispatch target 0x0933
  -- pass26 action-response span: "changepassword" body 0x0933..before 0x0955 (byte-backed action dispatch)
  sprite(flashSP).changePasswordCB(checkedForOneClient.getAProp("s")) -- 0x0951
  -- jump 8895 -- 0x0952
  -- else if action = "forgotpw" then -- byte-backed action dispatch target 0x0955
  -- pass26 action-response span: "forgotpw" body 0x0955..before 0x0977 (byte-backed action dispatch)
  sprite(flashSP).forgotPasswordCB(checkedForOneClient.getAProp("s")) -- 0x0973
  -- jump 8861 -- 0x0974
  -- else if action = "getstartershowroom" then -- byte-backed action dispatch target 0x0977
  -- pass26 action-response span: "getstartershowroom" body 0x0977..before 0x0999 (byte-backed action dispatch)
  sprite(flashSP).getStarterShowroomCB(checkedForOneClient.getAProp("d")) -- 0x0995
  -- jump 8827 -- 0x0996
  -- else if action = "createaccount" then -- byte-backed action dispatch target 0x0999
  -- pass26 action-response span: "createaccount" body 0x0999..before 0x09BB (byte-backed action dispatch)
  sprite(flashSP).createAccountCB(checkedForOneClient.getAProp("s")) -- 0x09B7
  -- jump 8793 -- 0x09B8
  -- else if action = "verifyaccount" then -- byte-backed action dispatch target 0x09BB
  -- pass26 action-response span: "verifyaccount" body 0x09BB..before 0x09DD (byte-backed action dispatch)
  sprite(flashSP).verifyAccountCB(checkedForOneClient.getAProp("s")) -- 0x09D9
  -- jump 8759 -- 0x09DA
  -- else if action = "resendactivation" then -- byte-backed action dispatch target 0x09DD
  -- pass26 action-response span: "resendactivation" body 0x09DD..before 0x09FF (byte-backed action dispatch)
  sprite(flashSP).resendActivationCB(checkedForOneClient.getAProp("s")) -- 0x09FB
  -- jump 8725 -- 0x09FC
  -- else if action = "agreetoterms" then -- byte-backed action dispatch target 0x09FF
  -- pass26 action-response span: "agreetoterms" body 0x09FF..before 0x0A21 (byte-backed action dispatch)
  sprite(flashSP).agreeToTermsCB(checkedForOneClient.getAProp("s")) -- 0x0A1D
  -- jump 8691 -- 0x0A1E
  -- else if action = "activatepoints" then -- byte-backed action dispatch target 0x0A21
  -- pass26 action-response span: "activatepoints" body 0x0A21..before 0x0AB8 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x0A95
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 102 -- 0x0A2F
  sprite(flashSP).activatePurchaseCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("m"), checkedForOneClient.getAProp("p"), checkedForOneClient.getAProp("ma"), checkedForOneClient.getAProp("va"), checkedForOneClient.getAProp("d")) -- 0x0A92
  -- jump 34 -- 0x0A93
  -- pass27 action-branch-target: false path from 0x0A2F for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).activatePurchaseCB(checkedForOneClient.getAProp("s")) -- 0x0AB4
  -- jump 8540 -- 0x0AB5
  -- pass22 structured-control: end if
  -- else if action = "activatemember" then -- byte-backed action dispatch target 0x0AB8
  -- pass26 action-response span: "activatemember" body 0x0AB8..before 0x0B1B (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x0AF8
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x0AC6
  sprite(flashSP).activatePurchaseCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("m")) -- 0x0AF5
  -- jump 34 -- 0x0AF6
  -- pass27 action-branch-target: false path from 0x0AC6 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).activatePurchaseCB(checkedForOneClient.getAProp("s")) -- 0x0B17
  -- jump 8441 -- 0x0B18
  -- pass22 structured-control: end if
  -- else if action = "getcode" then -- byte-backed action dispatch target 0x0B1B
  -- pass26 action-response span: "getcode" body 0x0B1B..before 0x0B4A (byte-backed action dispatch)
  sprite(flashSP).getCodeCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("gid")) -- 0x0B46
  -- jump 8394 -- 0x0B47
  -- else if action = "getbuddies" then -- byte-backed action dispatch target 0x0B4A
  -- pass26 action-response span: "getbuddies" body 0x0B4A..before 0x0B6C (byte-backed action dispatch)
  sprite(flashSP).getUserBuddiesCB(checkedForOneClient.getAProp("d")) -- 0x0B68
  -- jump 8360 -- 0x0B69
  -- else if action = "getavatarage" then -- byte-backed action dispatch target 0x0B6C
  -- pass26 action-response span: "getavatarage" body 0x0B6C..before 0x0B87 (byte-backed action dispatch)
  compareAvatarAge(checkedForOneClient.getAProp("tids"), avatars) -- 0x0B83
  -- jump 8333 -- 0x0B84
  -- else if action = "getteamavatarage" then -- byte-backed action dispatch target 0x0B87
  -- pass26 action-response span: "getteamavatarage" body 0x0B87..before 0x0BA2 (byte-backed action dispatch)
  compareAvatarAge(checkedForOneClient.getAProp("tids"), teamAvatars) -- 0x0B9E
  -- jump 8306 -- 0x0B9F
  -- else if action = "uploadrequest" then -- byte-backed action dispatch target 0x0BA2
  -- pass26 action-response span: "uploadrequest" body 0x0BA2..before 0x0BC4 (byte-backed action dispatch)
  sprite(flashSP).avatarUploadRequestCB(checkedForOneClient.getAProp("s")) -- 0x0BC0
  -- jump 8272 -- 0x0BC1
  -- else if action = "getlocations" then -- byte-backed action dispatch target 0x0BC4
  -- pass26 action-response span: "getlocations" body 0x0BC4..before 0x0BE6 (byte-backed action dispatch)
  sprite(flashSP).getLocationsCB(checkedForOneClient.getAProp("d")) -- 0x0BE2
  -- jump 8238 -- 0x0BE3
  -- else if action = "movelocation" then -- byte-backed action dispatch target 0x0BE6
  -- pass26 action-response span: "movelocation" body 0x0BE6..before 0x0C15 (byte-backed action dispatch)
  sprite(flashSP).moveLocationCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("m")) -- 0x0C11
  -- jump 8191 -- 0x0C12
  -- else if action = "gettotalnewmail" then -- byte-backed action dispatch target 0x0C15
  -- pass26 action-response span: "gettotalnewmail" body 0x0C15..before 0x0C38 (byte-backed action dispatch)
  sprite(flashSP).getEmailTotalNewCB(TRUE, checkedForOneClient.getAProp("im")) -- 0x0C34
  -- jump 8156 -- 0x0C35
  -- else if action = "getemaillist" then -- byte-backed action dispatch target 0x0C38
  -- pass26 action-response span: "getemaillist" body 0x0C38..before 0x0C5A (byte-backed action dispatch)
  sprite(flashSP).getEmailListCB(checkedForOneClient.getAProp("d")) -- 0x0C56
  -- jump 8122 -- 0x0C57
  -- else if action = "getemail" then -- byte-backed action dispatch target 0x0C5A
  -- pass26 action-response span: "getemail" body 0x0C5A..before 0x0C7C (byte-backed action dispatch)
  sprite(flashSP).getEmailCB(checkedForOneClient.getAProp("d")) -- 0x0C78
  -- jump 8088 -- 0x0C79
  -- else if action = "deleteemail" then -- byte-backed action dispatch target 0x0C7C
  -- pass26 action-response span: "deleteemail" body 0x0C7C..before 0x0CAB (byte-backed action dispatch)
  sprite(flashSP).deleteEmailCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("eid")) -- 0x0CA7
  -- jump 8041 -- 0x0CA8
  -- else if action = "sendemail" then -- byte-backed action dispatch target 0x0CAB
  -- pass26 action-response span: "sendemail" body 0x0CAB..before 0x0CCD (byte-backed action dispatch)
  sprite(flashSP).sendEmailCB(checkedForOneClient.getAProp("d")) -- 0x0CC9
  -- jump 8007 -- 0x0CCA
  -- else if action = "markemailread" then -- byte-backed action dispatch target 0x0CCD
  -- pass26 action-response span: "markemailread" body 0x0CCD..before 0x0CD0 (byte-backed action dispatch)
  -- jump 8004 -- 0x0CCD
  -- else if action = "addremark" then -- byte-backed action dispatch target 0x0CD0
  -- pass26 action-response span: "addremark" body 0x0CD0..before 0x0CF2 (byte-backed action dispatch)
  sprite(flashSP).addRemarkCB(checkedForOneClient.getAProp("s")) -- 0x0CEE
  -- jump 7970 -- 0x0CEF
  -- else if action = "deleteremark" then -- byte-backed action dispatch target 0x0CF2
  -- pass26 action-response span: "deleteremark" body 0x0CF2..before 0x0D49 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x0D26
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x0D00
  sprite(flashSP).deleteRemarkCB(TRUE, checkedForOneClient.getAProp("i")) -- 0x0D23
  -- jump 34 -- 0x0D24
  -- pass27 action-branch-target: false path from 0x0D00 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).deleteRemarkCB(checkedForOneClient.getAProp("s")) -- 0x0D45
  -- jump 7883 -- 0x0D46
  -- pass22 structured-control: end if
  -- else if action = "getremarks" then -- byte-backed action dispatch target 0x0D49
  -- pass26 action-response span: "getremarks" body 0x0D49..before 0x0D6B (byte-backed action dispatch)
  sprite(flashSP).getRemarksCB(checkedForOneClient.getAProp("d")) -- 0x0D67
  -- jump 7849 -- 0x0D68
  -- else if action = "getuserremarks" then -- byte-backed action dispatch target 0x0D6B
  -- pass26 action-response span: "getuserremarks" body 0x0D6B..before 0x0D8D (byte-backed action dispatch)
  sprite(flashSP).getUserRemarksCB(checkedForOneClient.getAProp("d")) -- 0x0D89
  -- jump 7815 -- 0x0D8A
  -- else if action = "setnondeletes" then -- byte-backed action dispatch target 0x0D8D
  -- pass26 action-response span: "setnondeletes" body 0x0D8D..before 0x0DAF (byte-backed action dispatch)
  sprite(flashSP).setRemarkNonDeletesCB(checkedForOneClient.getAProp("s")) -- 0x0DAB
  -- jump 7781 -- 0x0DAC
  -- else if action = "setdeletes" then -- byte-backed action dispatch target 0x0DAF
  -- pass26 action-response span: "setdeletes" body 0x0DAF..before 0x0DD1 (byte-backed action dispatch)
  sprite(flashSP).setRemarkDeletesCB(checkedForOneClient.getAProp("s")) -- 0x0DCD
  -- jump 7747 -- 0x0DCE
  -- else if action = "getcarcategories" then -- byte-backed action dispatch target 0x0DD1
  -- pass26 action-response span: "getcarcategories" body 0x0DD1..before 0x0DF3 (byte-backed action dispatch)
  sprite(flashSP).getCarCategoriesCB(checkedForOneClient.getAProp("d")) -- 0x0DEF
  -- jump 7713 -- 0x0DF0
  -- else if action = "viewshowroom" then -- byte-backed action dispatch target 0x0DF3
  -- pass26 action-response span: "viewshowroom" body 0x0DF3..before 0x0E15 (byte-backed action dispatch)
  sprite(flashSP).viewShowroomCB(checkedForOneClient.getAProp("d")) -- 0x0E11
  -- jump 7679 -- 0x0E12
  -- else if action = "getallcars" then -- byte-backed action dispatch target 0x0E15
  -- pass26 action-response span: "getallcars" body 0x0E15..before 0x0E6C (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x0E49
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x0E23
  sprite(flashSP).getCarsCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x0E46
  -- jump 34 -- 0x0E47
  -- pass27 action-branch-target: false path from 0x0E23 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getCarsCB(checkedForOneClient.getAProp("s")) -- 0x0E68
  -- jump 7592 -- 0x0E69
  -- pass22 structured-control: end if
  -- else if action = "getonecar" then -- byte-backed action dispatch target 0x0E6C
  -- pass26 action-response span: "getonecar" body 0x0E6C..before 0x0EC3 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x0EA0
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x0E7A
  sprite(flashSP).getOneCarCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x0E9D
  -- jump 34 -- 0x0E9E
  -- pass27 action-branch-target: false path from 0x0E7A for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getOneCarCB(checkedForOneClient.getAProp("s")) -- 0x0EBF
  -- jump 7505 -- 0x0EC0
  -- pass22 structured-control: end if
  -- else if action = "getallotherusercars" then -- byte-backed action dispatch target 0x0EC3
  -- pass26 action-response span: "getallotherusercars" body 0x0EC3..before 0x0EF2 (byte-backed action dispatch)
  sprite(flashSP).getOtherUserCarsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x0EEE
  -- jump 7458 -- 0x0EEF
  -- else if action = "buycar" then -- byte-backed action dispatch target 0x0EF2
  -- pass26 action-response span: "buycar" body 0x0EF2..before 0x0F62 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x0F3F
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 63 -- 0x0F00
  sprite(flashSP).buyCarCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), checkedForOneClient.getAProp("d")) -- 0x0F3C
  -- jump 34 -- 0x0F3D
  -- pass27 action-branch-target: false path from 0x0F00 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).buyCarCB(checkedForOneClient.getAProp("s")) -- 0x0F5E
  -- jump 7346 -- 0x0F5F
  -- pass22 structured-control: end if
  -- else if action = "sellcar" then -- byte-backed action dispatch target 0x0F62
  -- pass26 action-response span: "sellcar" body 0x0F62..before 0x0FB9 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x0F96
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x0F70
  sprite(flashSP).sellCarCB(TRUE, checkedForOneClient.getAProp("b")) -- 0x0F93
  -- jump 34 -- 0x0F94
  -- pass27 action-branch-target: false path from 0x0F70 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).sellCarCB(checkedForOneClient.getAProp("s")) -- 0x0FB5
  -- jump 7259 -- 0x0FB6
  -- pass22 structured-control: end if
  -- else if action = "getcarprice" then -- byte-backed action dispatch target 0x0FB9
  -- pass26 action-response span: "getcarprice" body 0x0FB9..before 0x1010 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x0FED
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x0FC7
  sprite(flashSP).getCarPriceCB(TRUE, checkedForOneClient.getAProp("p")) -- 0x0FEA
  -- jump 34 -- 0x0FEB
  -- pass27 action-branch-target: false path from 0x0FC7 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getCarPriceCB(checkedForOneClient.getAProp("s")) -- 0x100C
  -- jump 7172 -- 0x100D
  -- pass22 structured-control: end if
  -- else if action = "getallimcars" then -- byte-backed action dispatch target 0x1010
  -- pass26 action-response span: "getallimcars" body 0x1010..before 0x1067 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1044
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x101E
  sprite(flashSP).getAllImCarsCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x1041
  -- jump 34 -- 0x1042
  -- pass27 action-branch-target: false path from 0x101E for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getAllImCarsCB(checkedForOneClient.getAProp("s")) -- 0x1063
  -- jump 7085 -- 0x1064
  -- pass22 structured-control: end if
  -- else if action = "getoutofimpound" then -- byte-backed action dispatch target 0x1067
  -- pass26 action-response span: "getoutofimpound" body 0x1067..before 0x10BE (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x109B
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x1075
  sprite(flashSP).getCarOutOfImpoundCB(TRUE, checkedForOneClient.getAProp("b")) -- 0x1098
  -- jump 34 -- 0x1099
  -- pass27 action-branch-target: false path from 0x1075 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getCarOutOfImpoundCB(checkedForOneClient.getAProp("s")) -- 0x10BA
  -- jump 6998 -- 0x10BB
  -- pass22 structured-control: end if
  -- else if action = "buydyno" then -- byte-backed action dispatch target 0x10BE
  -- pass26 action-response span: "buydyno" body 0x10BE..before 0x11C5 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x11A2
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 214 -- 0x10CC
  _global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x10F7
  _global.objRace.init(DYNO) -- 0x1108
  checkProcessResult = new xtra("xmlparser") -- 0x1113
  checkProcessResult.parseString(checkedForOneClient.getAProp("d")) -- 0x112E
  -- 0x3F property-chain marker -- 0x1139
  -- 0x37 property-chain marker -- 0x113A
  netError = checkProcessResult.makeList().n2 -- 0x113E
  checkProcessResult = VOID -- 0x1143
  sprite(flashSP).garageDynoBuyCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), netError.!ATTRIBUTES.e, netError.!ATTRIBUTES.u, netError.!ATTRIBUTES.ad, netError.!ATTRIBUTES.sl, netError.!ATTRIBUTES.n) -- 0x119F
  -- jump 34 -- 0x11A0
  -- pass27 action-branch-target: false path from 0x10CC for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).garageDynoBuyCB(checkedForOneClient.getAProp("s")) -- 0x11C1
  -- jump 6735 -- 0x11C2
  -- pass22 structured-control: end if
  -- else if action = "changeboost" then -- byte-backed action dispatch target 0x11C5
  -- pass26 action-response span: "changeboost" body 0x11C5..before 0x11E7 (byte-backed action dispatch)
  sprite(flashSP).garageSetBoostCB(checkedForOneClient.getAProp("s")) -- 0x11E3
  -- jump 6701 -- 0x11E4
  -- else if action = "changeairfuel" then -- byte-backed action dispatch target 0x11E7
  -- pass26 action-response span: "changeairfuel" body 0x11E7..before 0x1209 (byte-backed action dispatch)
  sprite(flashSP).garageSetAFRatioCB(checkedForOneClient.getAProp("s")) -- 0x1205
  -- jump 6667 -- 0x1206
  -- else if action = "getallcats" then -- byte-backed action dispatch target 0x1209
  -- pass26 action-response span: "getallcats" body 0x1209..before 0x122B (byte-backed action dispatch)
  sprite(flashSP).getPartCategoriesCB(checkedForOneClient.getAProp("d")) -- 0x1227
  -- jump 6633 -- 0x1228
  -- else if action = "getwheelstirescats" then -- byte-backed action dispatch target 0x122B
  -- pass26 action-response span: "getwheelstirescats" body 0x122B..before 0x124D (byte-backed action dispatch)
  sprite(flashSP).getWheelsTiresPartCategoriesCB(checkedForOneClient.getAProp("d")) -- 0x1249
  -- jump 6599 -- 0x124A
  -- else if action = "getallparts" then -- byte-backed action dispatch target 0x124D
  -- pass26 action-response span: "getallparts" body 0x124D..before 0x127C (byte-backed action dispatch)
  sprite(flashSP).getPartsCB(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("d1")) -- 0x1278
  -- jump 6552 -- 0x1279
  -- else if action = "getallwheelstires" then -- byte-backed action dispatch target 0x127C
  -- pass26 action-response span: "getallwheelstires" body 0x127C..before 0x12AB (byte-backed action dispatch)
  sprite(flashSP).getWheelsTiresCB(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("d1")) -- 0x12A7
  -- jump 6505 -- 0x12A8
  -- else if action = "buypart" then -- byte-backed action dispatch target 0x12AB
  -- pass26 action-response span: "buypart" body 0x12AB..before 0x12DD (byte-backed action dispatch)
  sprite(flashSP).buyPartCB(c, checkedForOneClient.getAProp("d1"), checkedForOneClient.getAProp("d")) -- 0x12D9
  -- jump 6455 -- 0x12DA
  -- else if action = "buyenginepart" then -- byte-backed action dispatch target 0x12DD
  -- pass26 action-response span: "buyenginepart" body 0x12DD..before 0x130F (byte-backed action dispatch)
  sprite(flashSP).buyPartCB(e, checkedForOneClient.getAProp("d1"), checkedForOneClient.getAProp("d")) -- 0x130B
  -- jump 6405 -- 0x130C
  -- else if action = "buyengine" then -- byte-backed action dispatch target 0x130F
  -- pass26 action-response span: "buyengine" body 0x130F..before 0x1341 (byte-backed action dispatch)
  sprite(flashSP).buyPartCB(m, checkedForOneClient.getAProp("d1"), checkedForOneClient.getAProp("d")) -- 0x133D
  -- jump 6355 -- 0x133E
  -- else if action = "buypartugg" then -- byte-backed action dispatch target 0x1341
  -- pass26 action-response span: "buypartugg" body 0x1341..before 0x1370 (byte-backed action dispatch)
  sprite(flashSP).uggBuyCycleCB(checkedForOneClient.getAProp("d1"), checkedForOneClient.getAProp("d")) -- 0x136C
  -- jump 6308 -- 0x136D
  -- else if action = "installpart" then -- byte-backed action dispatch target 0x1370
  -- pass26 action-response span: "installpart" body 0x1370..before 0x1395 (byte-backed action dispatch)
  sprite(flashSP).installPartCB(c, checkedForOneClient.getAProp("d")) -- 0x1391
  -- jump 6271 -- 0x1392
  -- else if action = "installenginepart" then -- byte-backed action dispatch target 0x1395
  -- pass26 action-response span: "installenginepart" body 0x1395..before 0x13BA (byte-backed action dispatch)
  sprite(flashSP).installPartCB(e, checkedForOneClient.getAProp("d")) -- 0x13B6
  -- jump 6234 -- 0x13B7
  -- else if action = "swapengine" then -- byte-backed action dispatch target 0x13BA
  -- pass26 action-response span: "swapengine" body 0x13BA..before 0x13DF (byte-backed action dispatch)
  sprite(flashSP).installPartCB(m, checkedForOneClient.getAProp("d")) -- 0x13DB
  -- jump 6197 -- 0x13DC
  -- else if action = "uninstallpart" then -- byte-backed action dispatch target 0x13DF
  -- pass26 action-response span: "uninstallpart" body 0x13DF..before 0x1404 (byte-backed action dispatch)
  sprite(flashSP).uninstallPartCB(c, checkedForOneClient.getAProp("d")) -- 0x1400
  -- jump 6160 -- 0x1401
  -- else if action = "uninstallenginepart" then -- byte-backed action dispatch target 0x1404
  -- pass26 action-response span: "uninstallenginepart" body 0x1404..before 0x1429 (byte-backed action dispatch)
  sprite(flashSP).uninstallPartCB(e, checkedForOneClient.getAProp("d")) -- 0x1425
  -- jump 6123 -- 0x1426
  -- else if action = "sellcarpart" then -- byte-backed action dispatch target 0x1429
  -- pass26 action-response span: "sellcarpart" body 0x1429..before 0x1492 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x146C
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 53 -- 0x1437
  sprite(flashSP).sellPartCB(c, checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b")) -- 0x1469
  -- jump 37 -- 0x146A
  -- pass27 action-branch-target: false path from 0x1437 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).sellPartCB(c, checkedForOneClient.getAProp("s")) -- 0x148E
  -- jump 6018 -- 0x148F
  -- pass22 structured-control: end if
  -- else if action = "sellenginepart" then -- byte-backed action dispatch target 0x1492
  -- pass26 action-response span: "sellenginepart" body 0x1492..before 0x14EF (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x14C9
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 41 -- 0x14A0
  sprite(flashSP).sellPartCB(e, TRUE, checkedForOneClient.getAProp("b")) -- 0x14C6
  -- jump 37 -- 0x14C7
  -- pass27 action-branch-target: false path from 0x14A0 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).sellPartCB(e, checkedForOneClient.getAProp("s")) -- 0x14EB
  -- jump 5925 -- 0x14EC
  -- pass22 structured-control: end if
  -- else if action = "sellengine" then -- byte-backed action dispatch target 0x14EF
  -- pass26 action-response span: "sellengine" body 0x14EF..before 0x154C (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1526
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 41 -- 0x14FD
  sprite(flashSP).sellPartCB(m, TRUE, checkedForOneClient.getAProp("b")) -- 0x1523
  -- jump 37 -- 0x1524
  -- pass27 action-branch-target: false path from 0x14FD for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).sellPartCB(m, checkedForOneClient.getAProp("s")) -- 0x1548
  -- jump 5832 -- 0x1549
  -- pass22 structured-control: end if
  -- else if action = "getcarpartsbin" then -- byte-backed action dispatch target 0x154C
  -- pass26 action-response span: "getcarpartsbin" body 0x154C..before 0x156E (byte-backed action dispatch)
  sprite(flashSP).getCarPartsBinCB(checkedForOneClient.getAProp("d")) -- 0x156A
  -- jump 5798 -- 0x156B
  -- else if action = "getpartsbin" then -- byte-backed action dispatch target 0x156E
  -- pass26 action-response span: "getpartsbin" body 0x156E..before 0x1590 (byte-backed action dispatch)
  sprite(flashSP).getPartsBinCB(checkedForOneClient.getAProp("d")) -- 0x158C
  -- jump 5764 -- 0x158D
  -- else if action = "getpartgroup" then -- byte-backed action dispatch target 0x1590
  -- pass26 action-response span: "getpartgroup" body 0x1590..before 0x15B2 (byte-backed action dispatch)
  sprite(flashSP).getPartGroupCB(checkedForOneClient.getAProp("d")) -- 0x15AE
  -- jump 5730 -- 0x15AF
  -- else if action = "getcarperformanceincreases" then -- byte-backed action dispatch target 0x15B2
  -- pass26 action-response span: "getcarperformanceincreases" body 0x15B2..before 0x15D4 (byte-backed action dispatch)
  sprite(flashSP).getCarPerformanceIncreasesCB(checkedForOneClient.getAProp("d")) -- 0x15D0
  -- jump 5696 -- 0x15D1
  -- else if action = "egue" then -- byte-backed action dispatch target 0x15D4
  -- pass26 action-response span: "egue" body 0x15D4..before 0x1637 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1614
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x15E2
  sprite(flashSP).engineListCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1611
  -- jump 34 -- 0x1612
  -- pass27 action-branch-target: false path from 0x15E2 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).engineListCB(checkedForOneClient.getAProp("s")) -- 0x1633
  -- jump 5597 -- 0x1634
  -- pass22 structured-control: end if
  -- else if action = "egep" then -- byte-backed action dispatch target 0x1637
  -- pass26 action-response span: "egep" body 0x1637..before 0x1666 (byte-backed action dispatch)
  sprite(flashSP).engineGetAllPartsCB(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("d1")) -- 0x1662
  -- jump 5550 -- 0x1663
  -- else if action = "ebep" then -- byte-backed action dispatch target 0x1666
  -- pass26 action-response span: "ebep" body 0x1666..before 0x1688 (byte-backed action dispatch)
  sprite(flashSP).engineBuyPartCB(checkedForOneClient.getAProp("d1")) -- 0x1684
  -- jump 5516 -- 0x1685
  -- else if action = "esst" then -- byte-backed action dispatch target 0x1688
  -- pass26 action-response span: "esst" body 0x1688..before 0x16DF (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x16BC
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x1696
  sprite(flashSP).engineSwapStartCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x16B9
  -- jump 34 -- 0x16BA
  -- pass27 action-branch-target: false path from 0x1696 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).engineSwapStartCB(checkedForOneClient.getAProp("s")) -- 0x16DB
  -- jump 5429 -- 0x16DC
  -- pass22 structured-control: end if
  -- else if action = "esfi" then -- byte-backed action dispatch target 0x16DF
  -- pass26 action-response span: "esfi" body 0x16DF..before 0x1736 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1713
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x16ED
  sprite(flashSP).engineSwapFinishCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x1710
  -- jump 34 -- 0x1711
  -- pass27 action-branch-target: false path from 0x16ED for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).engineSwapFinishCB(checkedForOneClient.getAProp("s")) -- 0x1732
  -- jump 5342 -- 0x1733
  -- pass22 structured-control: end if
  -- else if action = "getpaintcats" then -- byte-backed action dispatch target 0x1736
  -- pass26 action-response span: "getpaintcats" body 0x1736..before 0x1758 (byte-backed action dispatch)
  sprite(flashSP).getPaintCategoriesCB(checkedForOneClient.getAProp("d")) -- 0x1754
  -- jump 5308 -- 0x1755
  -- else if action = "getpaints" then -- byte-backed action dispatch target 0x1758
  -- pass26 action-response span: "getpaints" body 0x1758..before 0x177A (byte-backed action dispatch)
  sprite(flashSP).getPaintsCB(checkedForOneClient.getAProp("d")) -- 0x1776
  -- jump 5274 -- 0x1777
  -- else if action = "buypaint" then -- byte-backed action dispatch target 0x177A
  -- pass26 action-response span: "buypaint" body 0x177A..before 0x17DD (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") > VOID then -- false branch jumps to 0x17BA
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") > VOID then
  if not (checkedForOneClient.getAProp("s") > VOID) then -- jump 50 -- 0x1788
  sprite(flashSP).buyPaintCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b")) -- 0x17B7
  -- jump 34 -- 0x17B8
  -- pass27 action-branch-target: false path from 0x1788 for checkedForOneClient.getAProp("s") > VOID
  -- pass22 structured-control: else
  sprite(flashSP).buyPaintCB(checkedForOneClient.getAProp("s")) -- 0x17D9
  -- jump 5175 -- 0x17DA
  -- pass22 structured-control: end if
  -- else if action = "getlicenseplates" then -- byte-backed action dispatch target 0x17DD
  -- pass26 action-response span: "getlicenseplates" body 0x17DD..before 0x17FF (byte-backed action dispatch)
  sprite(flashSP).getLicensePlatesCB(checkedForOneClient.getAProp("d")) -- 0x17FB
  -- jump 5141 -- 0x17FC
  -- else if action = "buyplate" then -- byte-backed action dispatch target 0x17FF
  -- pass26 action-response span: "buyplate" body 0x17FF..before 0x186F (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") > VOID then -- false branch jumps to 0x184C
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") > VOID then
  if not (checkedForOneClient.getAProp("s") > VOID) then -- jump 63 -- 0x180D
  sprite(flashSP).buyPlateCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), checkedForOneClient.getAProp("i")) -- 0x1849
  -- jump 34 -- 0x184A
  -- pass27 action-branch-target: false path from 0x180D for checkedForOneClient.getAProp("s") > VOID
  -- pass22 structured-control: else
  sprite(flashSP).buyPlateCB(checkedForOneClient.getAProp("s")) -- 0x186B
  -- jump 5029 -- 0x186C
  -- pass22 structured-control: end if
  -- else if action = "buyvanity" then -- byte-backed action dispatch target 0x186F
  -- pass26 action-response span: "buyvanity" body 0x186F..before 0x18D2 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") > VOID then -- false branch jumps to 0x18AF
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") > VOID then
  if not (checkedForOneClient.getAProp("s") > VOID) then -- jump 50 -- 0x187D
  sprite(flashSP).buyVanityCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b")) -- 0x18AC
  -- jump 34 -- 0x18AD
  -- pass27 action-branch-target: false path from 0x187D for checkedForOneClient.getAProp("s") > VOID
  -- pass22 structured-control: else
  sprite(flashSP).buyVanityCB(checkedForOneClient.getAProp("s")) -- 0x18CE
  -- jump 4930 -- 0x18CF
  -- pass22 structured-control: end if
  -- else if action = "getsystemparts" then -- byte-backed action dispatch target 0x18D2
  -- pass26 action-response span: "getsystemparts" body 0x18D2..before 0x1935 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") > VOID then -- false branch jumps to 0x1912
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") > VOID then
  if not (checkedForOneClient.getAProp("s") > VOID) then -- jump 50 -- 0x18E0
  sprite(flashSP).getSystemPartsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x190F
  -- jump 34 -- 0x1910
  -- pass27 action-branch-target: false path from 0x18E0 for checkedForOneClient.getAProp("s") > VOID
  -- pass22 structured-control: else
  sprite(flashSP).getSystemPartsCB(checkedForOneClient.getAProp("s")) -- 0x1931
  -- jump 4831 -- 0x1932
  -- pass22 structured-control: end if
  -- else if action = "systemswap" then -- byte-backed action dispatch target 0x1935
  -- pass26 action-response span: "systemswap" body 0x1935..before 0x1964 (byte-backed action dispatch)
  sprite(flashSP).systemSwapCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1960
  -- jump 4784 -- 0x1961
  -- else if action = "getrepairparts" then -- byte-backed action dispatch target 0x1964
  -- pass26 action-response span: "getrepairparts" body 0x1964..before 0x19BB (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1998
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 38 -- 0x1972
  sprite(flashSP).getRepairPartsCB(TRUE, checkedForOneClient.getAProp("d")) -- 0x1995
  -- jump 34 -- 0x1996
  -- pass27 action-branch-target: false path from 0x1972 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getRepairPartsCB(checkedForOneClient.getAProp("s")) -- 0x19B7
  -- jump 4697 -- 0x19B8
  -- pass22 structured-control: end if
  -- else if action = "repairparts" then -- byte-backed action dispatch target 0x19BB
  -- pass26 action-response span: "repairparts" body 0x19BB..before 0x19DD (byte-backed action dispatch)
  sprite(flashSP).repairPartsCB(checkedForOneClient.getAProp("s")) -- 0x19D9
  -- jump 4663 -- 0x19DA
  -- else if action = "getgearinfo" then -- byte-backed action dispatch target 0x19DD
  -- pass26 action-response span: "getgearinfo" body 0x19DD..before 0x1A40 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") > VOID then -- false branch jumps to 0x1A1D
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") > VOID then
  if not (checkedForOneClient.getAProp("s") > VOID) then -- jump 50 -- 0x19EB
  sprite(flashSP).getGearInfoCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1A1A
  -- jump 34 -- 0x1A1B
  -- pass27 action-branch-target: false path from 0x19EB for checkedForOneClient.getAProp("s") > VOID
  -- pass22 structured-control: else
  sprite(flashSP).getGearInfoCB(checkedForOneClient.getAProp("s")) -- 0x1A3C
  -- jump 4564 -- 0x1A3D
  -- pass22 structured-control: end if
  -- else if action = "buygears" then -- byte-backed action dispatch target 0x1A40
  -- pass26 action-response span: "buygears" body 0x1A40..before 0x1AA3 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") > VOID then -- false branch jumps to 0x1A80
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") > VOID then
  if not (checkedForOneClient.getAProp("s") > VOID) then -- jump 50 -- 0x1A4E
  sprite(flashSP).buyGearsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b")) -- 0x1A7D
  -- jump 34 -- 0x1A7E
  -- pass27 action-branch-target: false path from 0x1A4E for checkedForOneClient.getAProp("s") > VOID
  -- pass22 structured-control: else
  sprite(flashSP).buyGearsCB(checkedForOneClient.getAProp("s")) -- 0x1A9F
  -- jump 4465 -- 0x1AA0
  -- pass22 structured-control: end if
  -- else if action = "getspareprice" then -- byte-backed action dispatch target 0x1AA3
  -- pass26 action-response span: "getspareprice" body 0x1AA3..before 0x1AD2 (byte-backed action dispatch)
  sprite(flashSP).getSparePriceCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("p")) -- 0x1ACE
  -- jump 4418 -- 0x1ACF
  -- else if action = "sellallspare" then -- byte-backed action dispatch target 0x1AD2
  -- pass26 action-response span: "sellallspare" body 0x1AD2..before 0x1B01 (byte-backed action dispatch)
  sprite(flashSP).sellAllSpareCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b")) -- 0x1AFD
  -- jump 4371 -- 0x1AFE
  -- else if action = "getdescription" then -- byte-backed action dispatch target 0x1B01
  -- pass26 action-response span: "getdescription" body 0x1B01..before 0x1B35 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1B31
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 34 -- 0x1B0F
  -- pass27 action-branch-target: false path from 0x1B0F for checkedForOneClient.getAProp("s") = TRUE
  sprite(flashSP).getPartDescriptionCB(checkedForOneClient.getAProp("d")) -- 0x1B31
  -- jump 4319 -- 0x1B32
  -- pass22 structured-control: end if
  -- else if action = "teaminfo" then -- byte-backed action dispatch target 0x1B35
  -- pass26 action-response span: "teaminfo" body 0x1B35..before 0x1B57 (byte-backed action dispatch)
  sprite(flashSP).teamInfoCB(checkedForOneClient.getAProp("d")) -- 0x1B53
  -- jump 4285 -- 0x1B54
  -- else if action = "teamtrans" then -- byte-backed action dispatch target 0x1B57
  -- pass26 action-response span: "teamtrans" body 0x1B57..before 0x1BBA (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1B97
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x1B65
  sprite(flashSP).teamTransCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1B94
  -- jump 34 -- 0x1B95
  -- pass27 action-branch-target: false path from 0x1B65 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).teamTransCB(checkedForOneClient.getAProp("s")) -- 0x1BB6
  -- jump 4186 -- 0x1BB7
  -- pass22 structured-control: end if
  -- else if action = "teamsearch" then -- byte-backed action dispatch target 0x1BBA
  -- pass26 action-response span: "teamsearch" body 0x1BBA..before 0x1C1D (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1BFA
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x1BC8
  sprite(flashSP).teamSearchCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1BF7
  -- jump 34 -- 0x1BF8
  -- pass27 action-branch-target: false path from 0x1BC8 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).teamSearchCB(checkedForOneClient.getAProp("s")) -- 0x1C19
  -- jump 4087 -- 0x1C1A
  -- pass22 structured-control: end if
  -- else if action = "updateleadercomments" then -- byte-backed action dispatch target 0x1C1D
  -- pass26 action-response span: "updateleadercomments" body 0x1C1D..before 0x1C3F (byte-backed action dispatch)
  sprite(flashSP).teamUpdateLeaderCommentsCB(checkedForOneClient.getAProp("s")) -- 0x1C3B
  -- jump 4053 -- 0x1C3C
  -- else if action = "updateteamreq" then -- byte-backed action dispatch target 0x1C3F
  -- pass26 action-response span: "updateteamreq" body 0x1C3F..before 0x1C61 (byte-backed action dispatch)
  sprite(flashSP).teamUpdateTeamReqCB(checkedForOneClient.getAProp("s")) -- 0x1C5D
  -- jump 4019 -- 0x1C5E
  -- else if action = "getteaminfo" then -- byte-backed action dispatch target 0x1C61
  -- pass26 action-response span: "getteaminfo" body 0x1C61..before 0x1CC4 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1CA1
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x1C6F
  sprite(flashSP).teamGetInfoCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1C9E
  -- jump 34 -- 0x1C9F
  -- pass27 action-branch-target: false path from 0x1C6F for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).teamGetInfoCB(checkedForOneClient.getAProp("s")) -- 0x1CC0
  -- jump 3920 -- 0x1CC1
  -- pass22 structured-control: end if
  -- else if action = "getallteamapps" then -- byte-backed action dispatch target 0x1CC4
  -- pass26 action-response span: "getallteamapps" body 0x1CC4..before 0x1D27 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1D04
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x1CD2
  sprite(flashSP).teamGetAllAppsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1D01
  -- jump 34 -- 0x1D02
  -- pass27 action-branch-target: false path from 0x1CD2 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).teamGetAllAppsCB(checkedForOneClient.getAProp("s")) -- 0x1D23
  -- jump 3821 -- 0x1D24
  -- pass22 structured-control: end if
  -- else if action = "getallmyapps" then -- byte-backed action dispatch target 0x1D27
  -- pass26 action-response span: "getallmyapps" body 0x1D27..before 0x1D8A (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1D67
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x1D35
  sprite(flashSP).teamGetMyAppsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1D64
  -- jump 34 -- 0x1D65
  -- pass27 action-branch-target: false path from 0x1D35 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).teamGetMyAppsCB(checkedForOneClient.getAProp("s")) -- 0x1D86
  -- jump 3722 -- 0x1D87
  -- pass22 structured-control: end if
  -- else if action = "deleteapp" then -- byte-backed action dispatch target 0x1D8A
  -- pass26 action-response span: "deleteapp" body 0x1D8A..before 0x1DAC (byte-backed action dispatch)
  sprite(flashSP).teamDeleteAppCB(checkedForOneClient.getAProp("s")) -- 0x1DA8
  -- jump 3688 -- 0x1DA9
  -- else if action = "updateteamapp" then -- byte-backed action dispatch target 0x1DAC
  -- pass26 action-response span: "updateteamapp" body 0x1DAC..before 0x1DCE (byte-backed action dispatch)
  sprite(flashSP).teamUpdateAppCB(checkedForOneClient.getAProp("s")) -- 0x1DCA
  -- jump 3654 -- 0x1DCB
  -- else if action = "addteamapp" then -- byte-backed action dispatch target 0x1DCE
  -- pass26 action-response span: "addteamapp" body 0x1DCE..before 0x1DF0 (byte-backed action dispatch)
  sprite(flashSP).teamAddAppCB(checkedForOneClient.getAProp("s")) -- 0x1DEC
  -- jump 3620 -- 0x1DED
  -- else if action = "setteamcolor" then -- byte-backed action dispatch target 0x1DF0
  -- pass26 action-response span: "setteamcolor" body 0x1DF0..before 0x1E12 (byte-backed action dispatch)
  sprite(flashSP).teamUpdateBgColorCB(checkedForOneClient.getAProp("s")) -- 0x1E0E
  -- jump 3586 -- 0x1E0F
  -- else if action = "getonecarengine" then -- byte-backed action dispatch target 0x1E12
  -- pass26 action-response span: "getonecarengine" body 0x1E12..before 0x1E99 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1E95
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 117 -- 0x1E20
  trace("director getOneCarEngineCB") -- 0x1E2E
  sprite(flashSP).getOneCarEngineCB(checkedForOneClient.getAProp("d")) -- 0x1E4D
  -- branch 66 -- 0x1E54
  _global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x1E7E
  -- pass27 action-branch-target: false path from 0x1E20 for checkedForOneClient.getAProp("s") = TRUE
  _global.objRace.init(_global.objRace.raceType) -- 0x1E95
  -- jump 3451 -- 0x1E96
  -- pass22 structured-control: end if
  -- else if action = "gettworacerscars" then -- byte-backed action dispatch target 0x1E99
  -- pass26 action-response span: "gettworacerscars" body 0x1E99..before 0x1EFF (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1ED9
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x1EA7
  sprite(flashSP).raceGetTwoRacersCarsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1ED6
  -- jump 37 -- 0x1ED7
  -- pass27 action-branch-target: false path from 0x1EA7 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).raceGetTwoRacersCarsCB(checkedForOneClient.getAProp("s"), id_195) -- 0x1EFB
  -- jump 3349 -- 0x1EFC
  -- pass22 structured-control: end if
  -- else if action = "getracerscars" then -- byte-backed action dispatch target 0x1EFF
  -- pass26 action-response span: "getracerscars" body 0x1EFF..before 0x1F65 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1F3F
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x1F0D
  sprite(flashSP).getRacersCarsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x1F3C
  -- jump 37 -- 0x1F3D
  -- pass27 action-branch-target: false path from 0x1F0D for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getRacersCarsCB(checkedForOneClient.getAProp("s"), id_195) -- 0x1F61
  -- jump 3247 -- 0x1F62
  -- pass22 structured-control: end if
  -- else if action = "ctgr" then -- byte-backed action dispatch target 0x1F65
  -- pass26 action-response span: "ctgr" body 0x1F65..before 0x1F99 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x1F95
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 34 -- 0x1F73
  -- pass27 action-branch-target: false path from 0x1F73 for checkedForOneClient.getAProp("s") = TRUE
  sprite(flashSP).ctGetRacersCB(checkedForOneClient.getAProp("d")) -- 0x1F95
  -- jump 3195 -- 0x1F96
  -- pass22 structured-control: end if
  -- else if action = "ctjt" then -- byte-backed action dispatch target 0x1F99
  -- pass26 action-response span: "ctjt" body 0x1F99..before 0x1FBB (byte-backed action dispatch)
  sprite(flashSP).ctJoinCB(checkedForOneClient.getAProp("s")) -- 0x1FB7
  -- jump 3161 -- 0x1FB8
  -- else if action = "ctct" then -- byte-backed action dispatch target 0x1FBB
  -- pass26 action-response span: "ctct" body 0x1FBB..before 0x2048 (byte-backed action dispatch)
  sprite(flashSP).ctCreateCB(checkedForOneClient.getAProp("s")) -- 0x1FD9
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x2044
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 92 -- 0x1FE8
  sprite(flashSP).getOneCarEngineCB(checkedForOneClient.getAProp("d")) -- 0x200A
  _global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x2032
  -- pass27 action-branch-target: false path from 0x1FE8 for checkedForOneClient.getAProp("s") = TRUE
  _global.objRace.initComputerRace(CTQ, VOID) -- 0x2044
  -- jump 3020 -- 0x2045
  -- pass22 structured-control: end if
  -- else if action = "ctrt" then -- byte-backed action dispatch target 0x2048
  -- pass26 action-response span: "ctrt" body 0x2048..before 0x20CA (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x20A7
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 81 -- 0x2056
  sprite(flashSP).ctRequestCB(TRUE, checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("b")) -- 0x2086
  _global.objRace.initComputerRace(CT, checkedForOneClient.getAProp("b")) -- 0x20A4
  -- jump 34 -- 0x20A5
  -- pass27 action-branch-target: false path from 0x2056 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).ctRequestCB(checkedForOneClient.getAProp("s")) -- 0x20C6
  -- jump 2890 -- 0x20C7
  -- pass22 structured-control: end if
  -- else if action = "ctst" then -- byte-backed action dispatch target 0x20CA
  -- pass26 action-response span: "ctst" body 0x20CA..before 0x2141 (byte-backed action dispatch)
  guid = checkedForOneClient.getAProp("sk") -- 0x20DA
  _global -- 0x20DD
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x211E
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x20EC
  sprite(flashSP).ctSaveCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x211B
  -- jump 34 -- 0x211C
  -- pass27 action-branch-target: false path from 0x20EC for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).ctSaveCB(checkedForOneClient.getAProp("s")) -- 0x213D
  -- jump 2771 -- 0x213E
  -- pass22 structured-control: end if
  -- else if action = "practice" then -- byte-backed action dispatch target 0x2141
  -- pass26 action-response span: "practice" body 0x2141..before 0x21CD (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x218B
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 60 -- 0x214F
  _global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x217A
  -- pass27 action-branch-target: false path from 0x214F for checkedForOneClient.getAProp("s") = TRUE
  _global.objRace.init(P) -- 0x218B
  sprite(flashSP).getOneCarEngineCB(checkedForOneClient.getAProp("d")) -- 0x21AA
  sprite(flashSP).practiceCreateCB(checkedForOneClient.getAProp("s")) -- 0x21C9
  -- jump 2631 -- 0x21CA
  -- pass22 structured-control: end if
  -- else if action = "gethumantournaments" then -- byte-backed action dispatch target 0x21CD
  -- pass26 action-response span: "gethumantournaments" body 0x21CD..before 0x2230 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x220D
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 50 -- 0x21DB
  sprite(flashSP).htGetTournamentsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x220A
  -- jump 34 -- 0x220B
  -- pass27 action-branch-target: false path from 0x21DB for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).htGetTournamentsCB(checkedForOneClient.getAProp("s")) -- 0x222C
  -- jump 2532 -- 0x222D
  -- pass22 structured-control: end if
  -- else if action = "joinhumantournament" then -- byte-backed action dispatch target 0x2230
  -- pass26 action-response span: "joinhumantournament" body 0x2230..before 0x22FA (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x22C7
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 137 -- 0x223E
  sprite(flashSP).getOneCarEngineCB(checkedForOneClient.getAProp("d")) -- 0x2260
  sprite(flashSP).htJoinTournamentCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b"), id_195) -- 0x228F
  raceType = HTQ -- 0x2299
  _global.objRace -- 0x229C
  _global.objRace.startRace(checkedForOneClient.getAProp("d"), checkedForOneClient.getAProp("t")) -- 0x22C4
  -- jump 50 -- 0x22C5
  -- pass27 action-branch-target: false path from 0x223E for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).htJoinTournamentCB(checkedForOneClient.getAProp("s"), id_195, checkedForOneClient.getAProp("d")) -- 0x22F6
  -- jump 2330 -- 0x22F7
  -- pass22 structured-control: end if
  -- else if action = "putcaronclassified" then -- byte-backed action dispatch target 0x22FA
  -- pass26 action-response span: "putcaronclassified" body 0x22FA..before 0x2329 (byte-backed action dispatch)
  sprite(flashSP).putCarOnClassifiedCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2325
  -- jump 2283 -- 0x2326
  -- else if action = "listclassified" then -- byte-backed action dispatch target 0x2329
  -- pass26 action-response span: "listclassified" body 0x2329..before 0x234B (byte-backed action dispatch)
  sprite(flashSP).listClassifiedCB(checkedForOneClient.getAProp("d")) -- 0x2347
  -- jump 2249 -- 0x2348
  -- else if action = "getclassifieddetail" then -- byte-backed action dispatch target 0x234B
  -- pass26 action-response span: "getclassifieddetail" body 0x234B..before 0x237A (byte-backed action dispatch)
  sprite(flashSP).getClassifiedDetailCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2376
  -- jump 2202 -- 0x2377
  -- else if action = "buyfromclassified" then -- byte-backed action dispatch target 0x237A
  -- pass26 action-response span: "buyfromclassified" body 0x237A..before 0x23A9 (byte-backed action dispatch)
  sprite(flashSP).buyFromClassifiedCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x23A5
  -- jump 2155 -- 0x23A6
  -- else if action = "classifiedhistory" then -- byte-backed action dispatch target 0x23A9
  -- pass26 action-response span: "classifiedhistory" body 0x23A9..before 0x23CB (byte-backed action dispatch)
  sprite(flashSP).sellerClassifiedHistoryCB(checkedForOneClient.getAProp("d")) -- 0x23C7
  -- jump 2121 -- 0x23C8
  -- else if action = "cancelclassified" then -- byte-backed action dispatch target 0x23CB
  -- pass26 action-response span: "cancelclassified" body 0x23CB..before 0x23FA (byte-backed action dispatch)
  sprite(flashSP).cancelClassifiedCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x23F6
  -- jump 2074 -- 0x23F7
  -- else if action = "requesttrade" then -- byte-backed action dispatch target 0x23FA
  -- pass26 action-response span: "requesttrade" body 0x23FA..before 0x2429 (byte-backed action dispatch)
  sprite(flashSP).requestTradeCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2425
  -- jump 2027 -- 0x2426
  -- else if action = "respondtrade" then -- byte-backed action dispatch target 0x2429
  -- pass26 action-response span: "respondtrade" body 0x2429..before 0x2458 (byte-backed action dispatch)
  sprite(flashSP).respondTradeCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2454
  -- jump 1980 -- 0x2455
  -- else if action = "canceltrade" then -- byte-backed action dispatch target 0x2458
  -- pass26 action-response span: "canceltrade" body 0x2458..before 0x2487 (byte-backed action dispatch)
  sprite(flashSP).cancelTradeCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2483
  -- jump 1933 -- 0x2484
  -- else if action = "getoutgoingtradehistory" then -- byte-backed action dispatch target 0x2487
  -- pass26 action-response span: "getoutgoingtradehistory" body 0x2487..before 0x24A9 (byte-backed action dispatch)
  sprite(flashSP).outgoingTradeHistoryCB(checkedForOneClient.getAProp("d")) -- 0x24A5
  -- jump 1899 -- 0x24A6
  -- else if action = "getpendingtrades" then -- byte-backed action dispatch target 0x24A9
  -- pass26 action-response span: "getpendingtrades" body 0x24A9..before 0x24CB (byte-backed action dispatch)
  sprite(flashSP).pendingTradesCB(checkedForOneClient.getAProp("d")) -- 0x24C7
  -- jump 1865 -- 0x24C8
  -- else if action = "getwinsandlosses" then -- byte-backed action dispatch target 0x24CB
  -- pass26 action-response span: "getwinsandlosses" body 0x24CB..before 0x24ED (byte-backed action dispatch)
  sprite(flashSP).getWinsAndLossesCB(checkedForOneClient.getAProp("d")) -- 0x24E9
  -- jump 1831 -- 0x24EA
  -- else if action = "earnincentive" then -- byte-backed action dispatch target 0x24ED
  -- pass26 action-response span: "earnincentive" body 0x24ED..before 0x251C (byte-backed action dispatch)
  sprite(flashSP).earnIncentiveCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b")) -- 0x2518
  -- jump 1784 -- 0x2519
  -- else if action = "logintwitter" then -- byte-backed action dispatch target 0x251C
  -- pass26 action-response span: "logintwitter" body 0x251C..before 0x254B (byte-backed action dispatch)
  sprite(flashSP).loginTwitterCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("u")) -- 0x2547
  -- jump 1737 -- 0x2548
  -- else if action = "setbadgevisible" then -- byte-backed action dispatch target 0x254B
  -- pass26 action-response span: "setbadgevisible" body 0x254B..before 0x256D (byte-backed action dispatch)
  sprite(flashSP).setBadgeVisibleCB(checkedForOneClient.getAProp("s")) -- 0x2569
  -- jump 1703 -- 0x256A
  -- else if action = "getblackcardprogress" then -- byte-backed action dispatch target 0x256D
  -- pass26 action-response span: "getblackcardprogress" body 0x256D..before 0x258F (byte-backed action dispatch)
  sprite(flashSP).getBlackCardProgressCB(checkedForOneClient.getAProp("d")) -- 0x258B
  -- jump 1669 -- 0x258C
  -- else if action = "getelectionphase" then -- byte-backed action dispatch target 0x258F
  -- pass26 action-response span: "getelectionphase" body 0x258F..before 0x260F (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x25DD
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") = TRUE) then -- jump 64 -- 0x259D
  sprite(flashSP).getElectionPhaseCB(TRUE, checkedForOneClient.getAProp("p"), checkedForOneClient.getAProp("t"), checkedForOneClient.getAProp("i")) -- 0x25DA
  -- jump 49 -- 0x25DB
  -- pass27 action-branch-target: false path from 0x259D for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getElectionPhaseCB(checkedForOneClient.getAProp("s"), VOID, VOID, checkedForOneClient.getAProp("i")) -- 0x260B
  -- jump 1541 -- 0x260C
  -- pass22 structured-control: end if
  -- else if action = "getelectionschedule" then -- byte-backed action dispatch target 0x260F
  -- pass26 action-response span: "getelectionschedule" body 0x260F..before 0x2631 (byte-backed action dispatch)
  sprite(flashSP).getElectionScheduleCB(checkedForOneClient.getAProp("d")) -- 0x262D
  -- jump 1507 -- 0x262E
  -- else if action = "getnominatecount" then -- byte-backed action dispatch target 0x2631
  -- pass26 action-response span: "getnominatecount" body 0x2631..before 0x2653 (byte-backed action dispatch)
  sprite(flashSP).getNominateCountCB(checkedForOneClient.getAProp("c")) -- 0x264F
  -- jump 1473 -- 0x2650
  -- else if action = "nominate" then -- byte-backed action dispatch target 0x2653
  -- pass26 action-response span: "nominate" body 0x2653..before 0x2682 (byte-backed action dispatch)
  sprite(flashSP).nominateCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("e")) -- 0x267E
  -- jump 1426 -- 0x267F
  -- else if action = "getelectionresult" then -- byte-backed action dispatch target 0x2682
  -- pass26 action-response span: "getelectionresult" body 0x2682..before 0x26A4 (byte-backed action dispatch)
  sprite(flashSP).getElectionResultCB(checkedForOneClient.getAProp("d")) -- 0x26A0
  -- jump 1392 -- 0x26A1
  -- else if action = "electionvote" then -- byte-backed action dispatch target 0x26A4
  -- pass26 action-response span: "electionvote" body 0x26A4..before 0x26D3 (byte-backed action dispatch)
  sprite(flashSP).electionVoteCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("e")) -- 0x26CF
  -- jump 1345 -- 0x26D0
  -- else if action = "activateaccount" then -- byte-backed action dispatch target 0x26D3
  -- pass26 action-response span: "activateaccount" body 0x26D3..before 0x2702 (byte-backed action dispatch)
  sprite(flashSP).activateAccountCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("e")) -- 0x26FE
  -- jump 1298 -- 0x26FF
  -- else if action = "getsupport" then -- byte-backed action dispatch target 0x2702
  -- pass26 action-response span: "getsupport" body 0x2702..before 0x274B (byte-backed action dispatch)
  sprite(flashSP).getSupportCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("m"), checkedForOneClient.getAProp("i"), checkedForOneClient.getAProp("t")) -- 0x2747
  -- jump 1225 -- 0x2748
  -- else if action = "getmisconductcount" then -- byte-backed action dispatch target 0x274B
  -- pass26 action-response span: "getmisconductcount" body 0x274B..before 0x2787 (byte-backed action dispatch)
  sprite(flashSP).getMisconductCountCB(checkedForOneClient.getAProp("oid"), checkedForOneClient.getAProp("n"), checkedForOneClient.getAProp("t")) -- 0x2783
  -- jump 1165 -- 0x2784
  -- else if action = "fbgettoken" then -- byte-backed action dispatch target 0x2787
  -- pass26 action-response span: "fbgettoken" body 0x2787..before 0x27F2 (byte-backed action dispatch)
  facebookToken = checkedForOneClient.getAProp("t") -- 0x2797
  _global -- 0x279A
  facebookAPIKey = checkedForOneClient.getAProp("a") -- 0x27AB
  _global -- 0x27AE
  openURL((((("https://login.facebook.com/login.php?api_key=" & _global.facebookAPIKey) & "&auth_token=") & _global.facebookToken) & "&v=1.0&popup&req_perms=offline_access")) -- 0x27CF
  sprite(flashSP).fbGetTokenCB(checkedForOneClient.getAProp("s")) -- 0x27EE
  -- jump 1058 -- 0x27EF
  -- else if action = "fbremovefacebook" then -- byte-backed action dispatch target 0x27F2
  -- pass26 action-response span: "fbremovefacebook" body 0x27F2..before 0x2814 (byte-backed action dispatch)
  sprite(flashSP).fbRemoveFacebookCB(checkedForOneClient.getAProp("s")) -- 0x2810
  -- jump 1024 -- 0x2811
  -- else if action = "fbgetinviteurl" then -- byte-backed action dispatch target 0x2814
  -- pass26 action-response span: "fbgetinviteurl" body 0x2814..before 0x2857 (byte-backed action dispatch)
  OK = checkedForOneClient.getAProp("d") -- 0x2821
  _global.objRace -- 0x2824
  trace("here!") -- 0x282F
  trace("info list!") -- 0x283A
  trace(OK) -- 0x2845
  openURL("http://www.facebook.com/multi_friend_selector.php/?api_key=75142a34f8f8698fb895c3156093f9c8&content=This network is the best place on Facebook for viewing", _blank) -- 0x2853
  -- jump 957 -- 0x2854
  -- else if action = "checktestdrive" then -- byte-backed action dispatch target 0x2857
  -- pass26 action-response span: "checktestdrive" body 0x2857..before 0x28BA (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x2897
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 50 -- 0x2865
  sprite(flashSP).checkTestDriveCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2894
  -- jump 34 -- 0x2895
  -- pass27 action-branch-target: false path from 0x2865 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).checkTestDriveCB(checkedForOneClient.getAProp("s")) -- 0x28B6
  -- jump 858 -- 0x28B7
  -- pass22 structured-control: end if
  -- else if action = "accepttestdrive" then -- byte-backed action dispatch target 0x28BA
  -- pass26 action-response span: "accepttestdrive" body 0x28BA..before 0x2944 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x2921
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 89 -- 0x28C8
  sprite(flashSP).acceptTestDriveCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("h"), checkedForOneClient.getAProp("m"), checkedForOneClient.getAProp("p"), checkedForOneClient.getAProp("d")) -- 0x291E
  -- jump 34 -- 0x291F
  -- pass27 action-branch-target: false path from 0x28C8 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).acceptTestDriveCB(checkedForOneClient.getAProp("s")) -- 0x2940
  -- jump 720 -- 0x2941
  -- pass22 structured-control: end if
  -- else if action = "buytestdrivecar" then -- byte-backed action dispatch target 0x2944
  -- pass26 action-response span: "buytestdrivecar" body 0x2944..before 0x29A7 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x2984
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 50 -- 0x2952
  sprite(flashSP).buyTestDriveCarCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("b")) -- 0x2981
  -- jump 34 -- 0x2982
  -- pass27 action-branch-target: false path from 0x2952 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).buyTestDriveCarCB(checkedForOneClient.getAProp("s")) -- 0x29A3
  -- jump 621 -- 0x29A4
  -- pass22 structured-control: end if
  -- else if action = "removetestdrivecar" then -- byte-backed action dispatch target 0x29A7
  -- pass26 action-response span: "removetestdrivecar" body 0x29A7..before 0x29C9 (byte-backed action dispatch)
  sprite(flashSP).removeTestDriveCarCB(checkedForOneClient.getAProp("s")) -- 0x29C5
  -- jump 587 -- 0x29C6
  -- else if action = "rejecttestdrive" then -- byte-backed action dispatch target 0x29C9
  -- pass26 action-response span: "rejecttestdrive" body 0x29C9..before 0x29EB (byte-backed action dispatch)
  sprite(flashSP).rejectTestDriveCB(checkedForOneClient.getAProp("s")) -- 0x29E7
  -- jump 553 -- 0x29E8
  -- else if action = "changeshiftlightrpm" then -- byte-backed action dispatch target 0x29EB
  -- pass26 action-response span: "changeshiftlightrpm" body 0x29EB..before 0x2A0D (byte-backed action dispatch)
  sprite(flashSP).garageSetShiftLightRPMCB(checkedForOneClient.getAProp("s")) -- 0x2A09
  -- jump 519 -- 0x2A0A
  -- else if action = "joinspecialevent" then -- byte-backed action dispatch target 0x2A0D
  -- pass26 action-response span: "joinspecialevent" body 0x2A0D..before 0x2A70 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x2A40
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 37 -- 0x2A1B
  sprite(flashSP).joinSpecialEventCB(checkedForOneClient.getAProp("s")) -- 0x2A3D
  -- jump 47 -- 0x2A3E
  -- pass27 action-branch-target: false path from 0x2A1B for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).joinSpecialEventCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("m")) -- 0x2A6C
  -- jump 420 -- 0x2A6D
  -- pass22 structured-control: end if
  -- else if action = "getnews" then -- byte-backed action dispatch target 0x2A70
  -- pass26 action-response span: "getnews" body 0x2A70..before 0x2ADA (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x2AB7
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 57 -- 0x2A7E
  sprite(flashSP).getLatestNewsCB(checkedForOneClient.getAProp("s"), escape(checkedForOneClient.getAProp("d"))) -- 0x2AB4
  -- jump 34 -- 0x2AB5
  -- pass27 action-branch-target: false path from 0x2A7E for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getLatestNewsCB(checkedForOneClient.getAProp("s")) -- 0x2AD6
  -- jump 314 -- 0x2AD7
  -- pass22 structured-control: end if
  -- else if action = "getspotlightracers" then -- byte-backed action dispatch target 0x2ADA
  -- pass26 action-response span: "getspotlightracers" body 0x2ADA..before 0x2B44 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x2B21
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 57 -- 0x2AE8
  sprite(flashSP).getRacerSpotlightCB(checkedForOneClient.getAProp("s"), escape(checkedForOneClient.getAProp("d"))) -- 0x2B1E
  -- jump 34 -- 0x2B1F
  -- pass27 action-branch-target: false path from 0x2AE8 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getRacerSpotlightCB(checkedForOneClient.getAProp("s")) -- 0x2B40
  -- jump 208 -- 0x2B41
  -- pass22 structured-control: end if
  -- else if action = "claimpendinguclprofit" then -- byte-backed action dispatch target 0x2B44
  -- pass26 action-response span: "claimpendinguclprofit" body 0x2B44..before 0x2B73 (byte-backed action dispatch)
  sprite(flashSP).claimPendingUCLProfitCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2B6F
  -- jump 161 -- 0x2B70
  -- else if action = "getinstalledenginepartbyaccountcar" then -- byte-backed action dispatch target 0x2B73
  -- pass26 action-response span: "getinstalledenginepartbyaccountcar" body 0x2B73..before 0x2C35 (byte-backed action dispatch)
  -- pass26 action-condition: if checkedForOneClient.getAProp("s") = TRUE then -- false branch jumps to 0x2BB3
  -- pass22 success-gate-normalized: getAProp("s") + TRUE branch rendered in original-style equality; raw compare line retained below
  -- pass22 structured-control: if checkedForOneClient.getAProp("s") = TRUE then
  if not (checkedForOneClient.getAProp("s") >= TRUE) then -- jump 50 -- 0x2B81
  sprite(flashSP).getInstalledEnginePartsCB(checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2BB0
  -- jump 34 -- 0x2BB1
  -- pass27 action-branch-target: false path from 0x2B81 for checkedForOneClient.getAProp("s") = TRUE
  -- pass22 structured-control: else
  sprite(flashSP).getInstalledEnginePartsCB(checkedForOneClient.getAProp("s")) -- 0x2BD2
  -- jump 62 -- 0x2BD3
  sprite(flashSP).genericWebCB(_global.gNetID[_global][VOID], checkedForOneClient.getAProp("s"), checkedForOneClient.getAProp("d")) -- 0x2C0D
  -- jump 3 -- 0x2C0E
  -- jump 107 -- 0x2C11
  case _global.gNetID[_global][VOID] of -- default 0x2C38 -- 0x2C20
  -- gettotalnewmail: goto 0x2C35 -- 0x2C25
  -- getemaillist: goto 0x2C35 -- 0x2C29
  -- getavatarage: goto 0x2C35 -- 0x2C2D
  -- getteamavatarage: goto 0x2C35 -- 0x2C31
  -- pass22 structured-control: end if
  -- else if action = "gettotalnewmail" then -- byte-backed action dispatch target 0x2C35
  -- else if action = "getemaillist" then -- byte-backed action dispatch target 0x2C35
  -- else if action = "getavatarage" then -- byte-backed action dispatch target 0x2C35
  -- else if action = "getteamavatarage" then -- byte-backed action dispatch target 0x2C35
  -- pass26 action-response span: ["gettotalnewmail", "getemaillist", "getavatarage", "getteamavatarage"] body 0x2C35..before 0x2D74 (byte-backed action dispatch)
  -- jump 71 -- 0x2C35
  -- 0x3F property-chain marker -- 0x2C6B
  implicit_callee_0x2C75(sprite(flashSP).showConnectionErrorCB, (("Connection Error" & (("Connection could not be established. Action:" & _global.gNetID[_global][VOID]) & " (Error: 003-")(netError[_global.gNetID[_global]])) & ")")) -- 0x2C78
  -- jump 3 -- 0x2C79
  if not (_global.gNetID[_global][VOID] <> gettotalnewmail) then -- jump 22 -- 0x2C8B
  lastAction = _global.gNetID[_global][VOID] -- 0x2C9E
  _global -- 0x2CA1
  _global.gNetID.splice(_global, TRUE) -- 0x2CB3
  -- 0x66 loop-control marker raw=66 00 00 51 -- 0x2CB4
  -- repeat step 0 -- 0x2CB8
  -- jump -11316 -- 0x2CBC
  _global = VOID -- 0x2CC0
  if not (_global < _global.fileNetID.length) then -- jump 402 -- 0x2CD0
  if not (_global.fileNetID[_global][VOID] = cache) then -- jump 35 -- 0x2CE3
  downloadCacheInProgress(getStreamStatus(_global.fileNetID[_global][netDone])) -- 0x2D03
  -- jump 51 -- 0x2D04
  if not (_global.fileNetID[_global][VOID] = installer) then -- jump 32 -- 0x2D16
  downloadInstallerUpdateFlash(getStreamStatus(_global.fileNetID[_global][netDone])) -- 0x2D36
  -- branch 272 -- 0x2D4C
  case _global.fileNetID[_global][VOID] of -- default 0x2E46 -- 0x2D5B
  -- avatars: goto 0x2D74 -- 0x2D60
  -- teamavatars: goto 0x2D74 -- 0x2D64
  -- ugg: goto 0x2DD8 -- 0x2D68
  -- cache: goto 0x2E24 -- 0x2D6C
  -- installer: goto 0x2E2F -- 0x2D70
  -- else if action = "avatars" then -- byte-backed action dispatch target 0x2D74
  -- else if action = "teamavatars" then -- byte-backed action dispatch target 0x2D74
  -- pass26 action-response span: ["avatars", "teamavatars"] body 0x2D74..before 0x2DD8 (byte-backed action dispatch)
  -- pass26 action-condition: if netError(_global.fileNetID[_global][netDone]) = OK then -- false branch jumps to 0x2DB3
  -- pass22 structured-control: if netError(_global.fileNetID[_global][netDone]) = OK then
  if not (netError(_global.fileNetID[_global][netDone]) = OK) then -- jump 39 -- 0x2D8C
  -- 0x3F property-chain marker -- 0x2D9E
  loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 1) -- 0x2DB0
  -- jump 36 -- 0x2DB1
  -- pass27 action-branch-target: false path from 0x2D8C for netError(_global.fileNetID[_global][netDone]) = OK
  -- pass22 structured-control: else
  -- 0x3F property-chain marker -- 0x2DC2
  loadLocalAvatar(_global.fileNetID[_global], _global.fileNetID[_global][VOID], 0) -- 0x2DD4
  -- jump 113 -- 0x2DD5
  -- pass22 structured-control: end if
  -- else if action = "ugg" then -- byte-backed action dispatch target 0x2DD8
  -- pass26 action-response span: "ugg" body 0x2DD8..before 0x2E24 (byte-backed action dispatch)
  -- pass26 action-condition: if netError(_global.fileNetID[_global][netDone]) = OK then -- false branch jumps to 0x2E0B
  -- pass22 structured-control: if netError(_global.fileNetID[_global][netDone]) = OK then
  if not (netError(_global.fileNetID[_global][netDone]) = OK) then -- jump 27 -- 0x2DF0
  -- 0x3F property-chain marker -- 0x2E02
  loadLocalUgg(_global.fileNetID[_global], 1) -- 0x2E08
  -- jump 24 -- 0x2E09
  -- pass27 action-branch-target: false path from 0x2DF0 for netError(_global.fileNetID[_global][netDone]) = OK
  -- pass22 structured-control: else
  -- 0x3F property-chain marker -- 0x2E1A
  loadLocalUgg(_global.fileNetID[_global], 0) -- 0x2E20
  -- jump 37 -- 0x2E21
  -- pass22 structured-control: end if
  -- else if action = "cache" then -- byte-backed action dispatch target 0x2E24
  -- pass26 action-response span: "cache" body 0x2E24..before 0x2E2F (byte-backed action dispatch)
  downloadCacheDone() -- 0x2E2B
  -- jump 26 -- 0x2E2C
  -- else if action = "installer" then -- byte-backed action dispatch target 0x2E2F
  -- pass26 action-response span: "installer" body 0x2E2F..0x2EE1 (byte-backed action dispatch)
  -- 0x3F property-chain marker -- 0x2E3D
  runInstaller(_global.fileNetID[_global]) -- 0x2E42
  -- jump 3 -- 0x2E43
  _global.fileNetID.splice(_global, TRUE) -- 0x2E57
  -- 0x66 loop-control marker raw=66 00 00 51 -- 0x2E58
  -- repeat step 0 -- 0x2E5C
  -- jump -412 -- 0x2E60
  -- pass26 action-condition: if sprite(flashSP).hitTest(_mouse.mouseLoc) = "#button" then -- false branch jumps to 0x2E94
  if not (sprite(flashSP).hitTest(_mouse.mouseLoc) = "#button") then -- jump 23 -- 0x2E7D
  cursor = agreetoterms -- 0x2E8E
  sprite(flashSP) -- 0x2E91
  -- jump 68 -- 0x2E92
  -- pass27 action-branch-target: false path from 0x2E7D for sprite(flashSP).hitTest(_mouse.mouseLoc) = "#button"
  -- pass26 action-condition: if sprite(flashSP).hitTest(_mouse.mouseLoc) = "#editText" then -- false branch jumps to 0x2EC4
  if not (sprite(flashSP).hitTest(_mouse.mouseLoc) = "#editText") then -- jump 21 -- 0x2EAF
  cursor = TRUE -- 0x2EBE
  sprite(flashSP) -- 0x2EC1
  -- jump 20 -- 0x2EC2
  -- pass27 action-branch-target: false path from 0x2EAF for sprite(flashSP).hitTest(_mouse.mouseLoc) = "#editText"
  cursor = -1 -- 0x2ED2
  sprite(flashSP) -- 0x2ED5
  _movie.go(TRUE) -- 0x2EE1
end

-- pass41 aggressive evidence index
-- This appendix is byte/table evidence only; it does not add executable source.
-- evidence markdown: output/evidence/Lscr-93.aggressive-evidence.md
-- evidence json: output/evidence/Lscr-93.aggressive-evidence.json
-- blocks=2 actions=164 branches=73 methodCalls=209
-- literalNames=433 callbackLikeNames=164 constants=9
-- todos=0 implicitSites=1
