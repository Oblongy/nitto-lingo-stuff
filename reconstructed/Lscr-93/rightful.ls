-- Lscr-93 rightful.ls
-- Mechanical Lingo reconstruction from .bin/.json.
-- Constraint: recovered bytecode evidence only; undecoded lines are not invented source.

on exitFrame
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=0 length=412 codeLen=25
  -- names: _global, gNetID, checkedForOneClient, checkProcessResult
  -- registration/prologue markers=1 paddingBytes=1 -- 0x0014
  gNetID -- 0x001D
  checkedForOneClient -- 0x0024
  checkProcessResult -- 0x002B
end

on __embedded_lscr93_block01
  -- source-kind: embedded block without handler metadata
  -- offset=412 length=33588 codeLen=11982
  -- names: _global, checkedForOneClient, netDone, checkProcessResult, netError, OK, trace, netTextResult, CheckNittoProcessesCB, 1, gNetID, length, _system, gc, eval, propList(, ), Object, ex, isEnc, decrypt, exEnc, sprite, flashSP, showConnectionErrorCB, Protocol Error, Connection protocol could not be established. Action:,  (Error: 010), ex2,  (Error: 001),  (Error: 002), "s",-100, Session Timed Out, I'm sorry, but your session has timed out, please restart the application. Last action: , lastAction, xtra, xmlparser, parseString, getAProp, d
  if not (checkedForOneClient = VOID) then -- jump 103 -- 0x001B
  -- branch 87 -- 0x002C
  checkedForOneClient = _global(checkProcessResult)[_global] -- 0x0033
  netDone -- 0x0036
  if not (_global(checkProcessResult) = OK) then -- jump 48 -- 0x0047
  netTextResult(_global(checkProcessResult)) -- 0x005F
  netTextResult(_global(checkProcessResult)) -- 0x0074
  -- jump 14 -- 0x0075
  CheckNittoProcessesCB("1") -- 0x0082
  _global = VOID -- 0x0084
  CheckNittoProcessesCB -- 0x0087
  if not (gNetID < length) then -- jump 11306 -- 0x0094
  gc() -- 0x00A2
  -- branch 11266 -- 0x00B6
  if not (_system(netDone[_global[gNetID[_global]]])(netError[_global[gNetID[_global]]]) = OK) then -- jump 11076 -- 0x00CF
  checkedForOneClient -- 0x00D6
  netDone = _global(netTextResult[_global[gNetID[_global]]]) -- 0x00EA
  _global -- 0x00ED
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
  "Protocol Error"("Connection protocol could not be established. Action:", ((_global & gNetID[_global][VOID]) & " (Error: 010)")) -- 0x0168
  -- 0x04 packed short-jump prefix raw=04 -- 0x0169
  -- jump 4 -- 0x016A
  -- 0x79 packed assignment prefix raw=79 00 01 -- 0x017D
  checkedForOneClient = (("propList(" & netDone) & ")") -- 0x0180
  eval -- 0x0183
  -- jump 63 -- 0x0184
  -- 0x75 packed prefix before name load raw=75 00 01 00 -- 0x0187
  -- 0x03 packed prefix before name load raw=03 -- 0x0194
  "Protocol Error"("Connection protocol could not be established. Action:", ((_global & gNetID[_global][VOID]) & " (Error: 001)")) -- 0x01BD
  -- 0x04 packed short-jump prefix raw=04 -- 0x01BE
  -- jump 4 -- 0x01BF
  -- jump 44 -- 0x01C3
  "Protocol Error"("Connection protocol could not be established. Action:", ((_global & gNetID[_global][VOID]) & " (Error: 002)")) -- 0x01EE
  -- 0x04 packed short-jump prefix raw=04 -- 0x01EF
  -- jump 4 -- 0x01F0
  if not (netDone = "\"s\",-100") then -- jump 37 -- 0x01FA
  "Session Timed Out"("I'm sorry, but your session has timed out, please restart the application. Last action: ", (_global & lastAction)) -- 0x021C
  -- jump 10740 -- 0x021D
  -- branch 10734 -- 0x0223
  case gNetID[_global][VOID] of -- default 0x2BD6 -- 0x0232
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
  checkProcessResult = (xtra ^ xmlparser) -- 0x04AD
  checkedForOneClient(getAProp(d)) -- 0x04C8
  fetchCacheXMLDone[checkProcessResult[makeList()]](n2) -- 0x04DF
  checkProcessResult = VOID -- 0x04E1
  parseString -- 0x04E4
  -- jump 10028 -- 0x04E5
  if not (checkProcessResult = checkedForOneClient[getAProp(s)]) then -- jump 245 -- 0x04F6
  if not (implicit_lhs_0x0508 = checkedForOneClient[getAProp(ftc)]) then -- jump 25 -- 0x0508
  "http://www.facebook.com/connect/prompt_permissions.php?api_key="(((_global & facebookAPIKey) & "&v=1.0&next=http://www.facebook.com/connect/login_success.html?xxRESULTTOKENxx&display=popup&ext_perm=publish_stream&enable_profile_selector=0")) -- 0x0521
  aid = getAProp(aid) -- 0x0532
  checkedForOneClient -- 0x0535
  guid = getAProp(guid) -- 0x0546
  checkedForOneClient -- 0x0549
  cp = checkedForOneClient(getAProp(cp)) -- 0x0561
  encrypt -- 0x0564
  cw = checkedForOneClient(getAProp(cw)) -- 0x057C
  encrypt -- 0x057F
  cwc = checkedForOneClient(getAProp(cwc)) -- 0x0597
  encrypt -- 0x059A
  connectSocket() -- 0x05A2
  getAProp(d)(checkedForOneClient, getAProp(at), checkedForOneClient, getAProp(am)) -- 0x05E8
  -- jump 416 -- 0x05E9
  if not (getAProp(s) = literal_59) then -- jump 60 marker 0x44 -- 0x05FC
  if not (getAProp(s) = literal_60) then -- jump 40 marker 0x44 -- 0x0610
  if not (getAProp(s) = -12) then -- jump 20 marker 0x44 -- 0x0624
  if not (getAProp(s) = literal_62) then -- jump 50 -- 0x0638
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x0667
  -- jump 289 -- 0x0668
  if not (getAProp(s) = -5) then -- jump 110 -- 0x067B
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x06AA
  installerURL = getAProp(url) -- 0x06BB
  checkedForOneClient -- 0x06BE
  installerFile = getAProp(fn) -- 0x06CF
  checkedForOneClient -- 0x06D2
  installerMD5 = getAProp(md5) -- 0x06E3
  checkedForOneClient -- 0x06E6
  -- jump 162 -- 0x06E7
  if not (getAProp(s) = literal_70) then -- jump 57 -- 0x06FA
  facebookID = getAProp(f) -- 0x070E
  checkedForOneClient -- 0x0711
  checkedForOneClient(getAProp(s)) -- 0x0730
  -- jump 88 -- 0x0731
  if not (getAProp(s) = literal_74) then -- jump 37 -- 0x0744
  checkedForOneClient(getAProp(s)) -- 0x0766
  -- jump 34 -- 0x0767
  checkedForOneClient(getAProp(s)) -- 0x0788
  -- jump 9352 -- 0x0789
  -- jump 9349 -- 0x078C
  if not (loginCB = checkedForOneClient[getAProp(s)]) then -- jump 34 -- 0x079D
  checkedForOneClient(getAProp(d)) -- 0x07BF
  -- jump 9297 -- 0x07C0
  checkedForOneClient(getAProp(d)) -- 0x07E1
  -- jump 9263 -- 0x07E2
  checkedForOneClient(getAProp(d)) -- 0x0803
  -- jump 9229 -- 0x0804
  checkedForOneClient(getAProp(s)) -- 0x0825
  -- jump 9195 -- 0x0826
  checkedForOneClient(getAProp(s)) -- 0x0847
  -- jump 9161 -- 0x0848
  if not (updateDefaultCarCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x0859
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x0888
  -- jump 34 -- 0x0889
  checkedForOneClient(getAProp(s)) -- 0x08AA
  -- jump 9062 -- 0x08AB
  if not (racerSearchCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x08BC
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x08EB
  -- jump 34 -- 0x08EC
  checkedForOneClient(getAProp(s)) -- 0x090D
  -- jump 8963 -- 0x090E
  checkedForOneClient(getAProp(s)) -- 0x092F
  -- jump 8929 -- 0x0930
  checkedForOneClient(getAProp(s)) -- 0x0951
  -- jump 8895 -- 0x0952
  checkedForOneClient(getAProp(s)) -- 0x0973
  -- jump 8861 -- 0x0974
  checkedForOneClient(getAProp(d)) -- 0x0995
  -- jump 8827 -- 0x0996
  checkedForOneClient(getAProp(s)) -- 0x09B7
  -- jump 8793 -- 0x09B8
  checkedForOneClient(getAProp(s)) -- 0x09D9
  -- jump 8759 -- 0x09DA
  checkedForOneClient(getAProp(s)) -- 0x09FB
  -- jump 8725 -- 0x09FC
  checkedForOneClient(getAProp(s)) -- 0x0A1D
  -- jump 8691 -- 0x0A1E
  if not (agreeToTermsCB = checkedForOneClient[getAProp(s)]) then -- jump 102 -- 0x0A2F
  getAProp(p)(checkedForOneClient, getAProp(ma), checkedForOneClient, getAProp(va), checkedForOneClient, getAProp(d)) -- 0x0A92
  -- jump 34 -- 0x0A93
  checkedForOneClient(getAProp(s)) -- 0x0AB4
  -- jump 8540 -- 0x0AB5
  if not (activatePurchaseCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x0AC6
  getAProp(s)(checkedForOneClient, getAProp(m)) -- 0x0AF5
  -- jump 34 -- 0x0AF6
  checkedForOneClient(getAProp(s)) -- 0x0B17
  -- jump 8441 -- 0x0B18
  getAProp(s)(checkedForOneClient, getAProp(gid)) -- 0x0B46
  -- jump 8394 -- 0x0B47
  checkedForOneClient(getAProp(d)) -- 0x0B68
  -- jump 8360 -- 0x0B69
  checkedForOneClient(getAProp(tids), avatars) -- 0x0B83
  -- jump 8333 -- 0x0B84
  checkedForOneClient(getAProp(tids), teamAvatars) -- 0x0B9E
  -- jump 8306 -- 0x0B9F
  checkedForOneClient(getAProp(s)) -- 0x0BC0
  -- jump 8272 -- 0x0BC1
  checkedForOneClient(getAProp(d)) -- 0x0BE2
  -- jump 8238 -- 0x0BE3
  getAProp(s)(checkedForOneClient, getAProp(m)) -- 0x0C11
  -- jump 8191 -- 0x0C12
  sprite(flashSP)[getEmailTotalNewCB](checkedForOneClient, getAProp(im)) -- 0x0C34
  -- jump 8156 -- 0x0C35
  checkedForOneClient(getAProp(d)) -- 0x0C56
  -- jump 8122 -- 0x0C57
  checkedForOneClient(getAProp(d)) -- 0x0C78
  -- jump 8088 -- 0x0C79
  getAProp(s)(checkedForOneClient, getAProp(eid)) -- 0x0CA7
  -- jump 8041 -- 0x0CA8
  checkedForOneClient(getAProp(d)) -- 0x0CC9
  -- jump 8007 -- 0x0CCA
  -- jump 8004 -- 0x0CCD
  checkedForOneClient(getAProp(s)) -- 0x0CEE
  -- jump 7970 -- 0x0CEF
  if not (addRemarkCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x0D00
  sprite(flashSP)[deleteRemarkCB](checkedForOneClient, getAProp(i)) -- 0x0D23
  -- jump 34 -- 0x0D24
  checkedForOneClient(getAProp(s)) -- 0x0D45
  -- jump 7883 -- 0x0D46
  checkedForOneClient(getAProp(d)) -- 0x0D67
  -- jump 7849 -- 0x0D68
  checkedForOneClient(getAProp(d)) -- 0x0D89
  -- jump 7815 -- 0x0D8A
  checkedForOneClient(getAProp(s)) -- 0x0DAB
  -- jump 7781 -- 0x0DAC
  checkedForOneClient(getAProp(s)) -- 0x0DCD
  -- jump 7747 -- 0x0DCE
  checkedForOneClient(getAProp(d)) -- 0x0DEF
  -- jump 7713 -- 0x0DF0
  checkedForOneClient(getAProp(d)) -- 0x0E11
  -- jump 7679 -- 0x0E12
  if not (viewShowroomCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x0E23
  sprite(flashSP)[getCarsCB](checkedForOneClient, getAProp(d)) -- 0x0E46
  -- jump 34 -- 0x0E47
  checkedForOneClient(getAProp(s)) -- 0x0E68
  -- jump 7592 -- 0x0E69
  if not (getCarsCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x0E7A
  sprite(flashSP)[getOneCarCB](checkedForOneClient, getAProp(d)) -- 0x0E9D
  -- jump 34 -- 0x0E9E
  checkedForOneClient(getAProp(s)) -- 0x0EBF
  -- jump 7505 -- 0x0EC0
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x0EEE
  -- jump 7458 -- 0x0EEF
  if not (checkedForOneClient >= checkedForOneClient[getAProp(s)]) then -- jump 63 -- 0x0F00
  checkedForOneClient(getAProp(b), checkedForOneClient, getAProp(d)) -- 0x0F3C
  -- jump 34 -- 0x0F3D
  checkedForOneClient(getAProp(s)) -- 0x0F5E
  -- jump 7346 -- 0x0F5F
  if not (buyCarCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x0F70
  sprite(flashSP)[sellCarCB](checkedForOneClient, getAProp(b)) -- 0x0F93
  -- jump 34 -- 0x0F94
  checkedForOneClient(getAProp(s)) -- 0x0FB5
  -- jump 7259 -- 0x0FB6
  if not (sellCarCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x0FC7
  sprite(flashSP)[getCarPriceCB](checkedForOneClient, getAProp(p)) -- 0x0FEA
  -- jump 34 -- 0x0FEB
  checkedForOneClient(getAProp(s)) -- 0x100C
  -- jump 7172 -- 0x100D
  if not (getCarPriceCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x101E
  sprite(flashSP)[getAllImCarsCB](checkedForOneClient, getAProp(d)) -- 0x1041
  -- jump 34 -- 0x1042
  checkedForOneClient(getAProp(s)) -- 0x1063
  -- jump 7085 -- 0x1064
  if not (getAllImCarsCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x1075
  sprite(flashSP)[getCarOutOfImpoundCB](checkedForOneClient, getAProp(b)) -- 0x1098
  -- jump 34 -- 0x1099
  checkedForOneClient(getAProp(s)) -- 0x10BA
  -- jump 6998 -- 0x10BB
  if not (getCarOutOfImpoundCB = checkedForOneClient[getAProp(s)]) then -- jump 214 -- 0x10CC
  getAProp(d)(checkedForOneClient, getAProp(t)) -- 0x10F7
  init(DYNO) -- 0x1108
  checkProcessResult = (xtra ^ xmlparser) -- 0x1113
  objRace -- 0x1116
  checkedForOneClient(getAProp(d)) -- 0x112E
  netError = n2 -- 0x113E
  parseString[checkProcessResult[makeList()]] -- 0x1141
  checkProcessResult = VOID -- 0x1143
  checkProcessResult -- 0x1146
  "!ATTRIBUTES"(ad, netError, "!ATTRIBUTES", sl, netError, "!ATTRIBUTES", n) -- 0x119F
  -- jump 34 -- 0x11A0
  checkedForOneClient(getAProp(s)) -- 0x11C1
  -- jump 6735 -- 0x11C2
  checkedForOneClient(getAProp(s)) -- 0x11E3
  -- jump 6701 -- 0x11E4
  checkedForOneClient(getAProp(s)) -- 0x1205
  -- jump 6667 -- 0x1206
  checkedForOneClient(getAProp(d)) -- 0x1227
  -- jump 6633 -- 0x1228
  checkedForOneClient(getAProp(d)) -- 0x1249
  -- jump 6599 -- 0x124A
  getAProp(d)(checkedForOneClient, getAProp(d1)) -- 0x1278
  -- jump 6552 -- 0x1279
  getAProp(d)(checkedForOneClient, getAProp(d1)) -- 0x12A7
  -- jump 6505 -- 0x12A8
  checkedForOneClient(getAProp(d1), checkedForOneClient, getAProp(d)) -- 0x12D9
  -- jump 6455 -- 0x12DA
  checkedForOneClient(getAProp(d1), checkedForOneClient, getAProp(d)) -- 0x130B
  -- jump 6405 -- 0x130C
  checkedForOneClient(getAProp(d1), checkedForOneClient, getAProp(d)) -- 0x133D
  -- jump 6355 -- 0x133E
  getAProp(d1)(checkedForOneClient, getAProp(d)) -- 0x136C
  -- jump 6308 -- 0x136D
  c(checkedForOneClient, getAProp(d)) -- 0x1391
  -- jump 6271 -- 0x1392
  e(checkedForOneClient, getAProp(d)) -- 0x13B6
  -- jump 6234 -- 0x13B7
  m(checkedForOneClient, getAProp(d)) -- 0x13DB
  -- jump 6197 -- 0x13DC
  c(checkedForOneClient, getAProp(d)) -- 0x1400
  -- jump 6160 -- 0x1401
  e(checkedForOneClient, getAProp(d)) -- 0x1425
  -- jump 6123 -- 0x1426
  if not (uninstallPartCB = checkedForOneClient[getAProp(s)]) then -- jump 53 -- 0x1437
  checkedForOneClient(getAProp(s), checkedForOneClient, getAProp(b)) -- 0x1469
  -- jump 37 -- 0x146A
  c(checkedForOneClient, getAProp(s)) -- 0x148E
  -- jump 6018 -- 0x148F
  if not (sellPartCB = checkedForOneClient[getAProp(s)]) then -- jump 41 -- 0x14A0
  sprite(flashSP)(sellPartCB[e], checkedForOneClient, getAProp(b)) -- 0x14C6
  -- jump 37 -- 0x14C7
  e(checkedForOneClient, getAProp(s)) -- 0x14EB
  -- jump 5925 -- 0x14EC
  if not (sellPartCB = checkedForOneClient[getAProp(s)]) then -- jump 41 -- 0x14FD
  sprite(flashSP)(sellPartCB[m], checkedForOneClient, getAProp(b)) -- 0x1523
  -- jump 37 -- 0x1524
  m(checkedForOneClient, getAProp(s)) -- 0x1548
  -- jump 5832 -- 0x1549
  checkedForOneClient(getAProp(d)) -- 0x156A
  -- jump 5798 -- 0x156B
  checkedForOneClient(getAProp(d)) -- 0x158C
  -- jump 5764 -- 0x158D
  checkedForOneClient(getAProp(d)) -- 0x15AE
  -- jump 5730 -- 0x15AF
  checkedForOneClient(getAProp(d)) -- 0x15D0
  -- jump 5696 -- 0x15D1
  if not (getCarPerformanceIncreasesCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x15E2
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1611
  -- jump 34 -- 0x1612
  checkedForOneClient(getAProp(s)) -- 0x1633
  -- jump 5597 -- 0x1634
  getAProp(d)(checkedForOneClient, getAProp(d1)) -- 0x1662
  -- jump 5550 -- 0x1663
  checkedForOneClient(getAProp(d1)) -- 0x1684
  -- jump 5516 -- 0x1685
  if not (engineBuyPartCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x1696
  sprite(flashSP)[engineSwapStartCB](checkedForOneClient, getAProp(d)) -- 0x16B9
  -- jump 34 -- 0x16BA
  checkedForOneClient(getAProp(s)) -- 0x16DB
  -- jump 5429 -- 0x16DC
  if not (engineSwapStartCB = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x16ED
  sprite(flashSP)[engineSwapFinishCB](checkedForOneClient, getAProp(d)) -- 0x1710
  -- jump 34 -- 0x1711
  checkedForOneClient(getAProp(s)) -- 0x1732
  -- jump 5342 -- 0x1733
  checkedForOneClient(getAProp(d)) -- 0x1754
  -- jump 5308 -- 0x1755
  checkedForOneClient(getAProp(d)) -- 0x1776
  -- jump 5274 -- 0x1777
  if not (getAProp(s) > VOID) then -- jump 50 -- 0x1788
  getAProp(s)(checkedForOneClient, getAProp(b)) -- 0x17B7
  -- jump 34 -- 0x17B8
  checkedForOneClient(getAProp(s)) -- 0x17D9
  -- jump 5175 -- 0x17DA
  checkedForOneClient(getAProp(d)) -- 0x17FB
  -- jump 5141 -- 0x17FC
  if not (getAProp(s) > VOID) then -- jump 63 -- 0x180D
  checkedForOneClient(getAProp(b), checkedForOneClient, getAProp(i)) -- 0x1849
  -- jump 34 -- 0x184A
  checkedForOneClient(getAProp(s)) -- 0x186B
  -- jump 5029 -- 0x186C
  if not (getAProp(s) > VOID) then -- jump 50 -- 0x187D
  getAProp(s)(checkedForOneClient, getAProp(b)) -- 0x18AC
  -- jump 34 -- 0x18AD
  checkedForOneClient(getAProp(s)) -- 0x18CE
  -- jump 4930 -- 0x18CF
  if not (getAProp(s) > VOID) then -- jump 50 -- 0x18E0
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x190F
  -- jump 34 -- 0x1910
  checkedForOneClient(getAProp(s)) -- 0x1931
  -- jump 4831 -- 0x1932
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1960
  -- jump 4784 -- 0x1961
  if not (checkedForOneClient = checkedForOneClient[getAProp(s)]) then -- jump 38 -- 0x1972
  sprite(flashSP)[getRepairPartsCB](checkedForOneClient, getAProp(d)) -- 0x1995
  -- jump 34 -- 0x1996
  checkedForOneClient(getAProp(s)) -- 0x19B7
  -- jump 4697 -- 0x19B8
  checkedForOneClient(getAProp(s)) -- 0x19D9
  -- jump 4663 -- 0x19DA
  if not (getAProp(s) > VOID) then -- jump 50 -- 0x19EB
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1A1A
  -- jump 34 -- 0x1A1B
  checkedForOneClient(getAProp(s)) -- 0x1A3C
  -- jump 4564 -- 0x1A3D
  if not (getAProp(s) > VOID) then -- jump 50 -- 0x1A4E
  getAProp(s)(checkedForOneClient, getAProp(b)) -- 0x1A7D
  -- jump 34 -- 0x1A7E
  checkedForOneClient(getAProp(s)) -- 0x1A9F
  -- jump 4465 -- 0x1AA0
  getAProp(s)(checkedForOneClient, getAProp(p)) -- 0x1ACE
  -- jump 4418 -- 0x1ACF
  getAProp(s)(checkedForOneClient, getAProp(b)) -- 0x1AFD
  -- jump 4371 -- 0x1AFE
  if not (checkedForOneClient = checkedForOneClient[getAProp(s)]) then -- jump 34 -- 0x1B0F
  checkedForOneClient(getAProp(d)) -- 0x1B31
  -- jump 4319 -- 0x1B32
  checkedForOneClient(getAProp(d)) -- 0x1B53
  -- jump 4285 -- 0x1B54
  if not (teamInfoCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x1B65
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1B94
  -- jump 34 -- 0x1B95
  checkedForOneClient(getAProp(s)) -- 0x1BB6
  -- jump 4186 -- 0x1BB7
  if not (teamTransCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x1BC8
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1BF7
  -- jump 34 -- 0x1BF8
  checkedForOneClient(getAProp(s)) -- 0x1C19
  -- jump 4087 -- 0x1C1A
  checkedForOneClient(getAProp(s)) -- 0x1C3B
  -- jump 4053 -- 0x1C3C
  checkedForOneClient(getAProp(s)) -- 0x1C5D
  -- jump 4019 -- 0x1C5E
  if not (teamUpdateTeamReqCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x1C6F
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1C9E
  -- jump 34 -- 0x1C9F
  checkedForOneClient(getAProp(s)) -- 0x1CC0
  -- jump 3920 -- 0x1CC1
  if not (teamGetInfoCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x1CD2
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1D01
  -- jump 34 -- 0x1D02
  checkedForOneClient(getAProp(s)) -- 0x1D23
  -- jump 3821 -- 0x1D24
  if not (teamGetAllAppsCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x1D35
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1D64
  -- jump 34 -- 0x1D65
  checkedForOneClient(getAProp(s)) -- 0x1D86
  -- jump 3722 -- 0x1D87
  checkedForOneClient(getAProp(s)) -- 0x1DA8
  -- jump 3688 -- 0x1DA9
  checkedForOneClient(getAProp(s)) -- 0x1DCA
  -- jump 3654 -- 0x1DCB
  checkedForOneClient(getAProp(s)) -- 0x1DEC
  -- jump 3620 -- 0x1DED
  checkedForOneClient(getAProp(s)) -- 0x1E0E
  -- jump 3586 -- 0x1E0F
  if not (teamUpdateBgColorCB = checkedForOneClient[getAProp(s)]) then -- jump 117 -- 0x1E20
  trace("director getOneCarEngineCB") -- 0x1E2E
  checkedForOneClient(getAProp(d)) -- 0x1E4D
  -- branch 66 -- 0x1E54
  getAProp(d)(checkedForOneClient, getAProp(t)) -- 0x1E7E
  objRace(raceType) -- 0x1E95
  -- jump 3451 -- 0x1E96
  if not (_global = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x1EA7
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1ED6
  -- jump 37 -- 0x1ED7
  checkedForOneClient(getAProp(s), id_195) -- 0x1EFB
  -- jump 3349 -- 0x1EFC
  if not (raceGetTwoRacersCarsCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x1F0D
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x1F3C
  -- jump 37 -- 0x1F3D
  checkedForOneClient(getAProp(s), id_195) -- 0x1F61
  -- jump 3247 -- 0x1F62
  if not (getRacersCarsCB = checkedForOneClient[getAProp(s)]) then -- jump 34 -- 0x1F73
  checkedForOneClient(getAProp(d)) -- 0x1F95
  -- jump 3195 -- 0x1F96
  checkedForOneClient(getAProp(s)) -- 0x1FB7
  -- jump 3161 -- 0x1FB8
  checkedForOneClient(getAProp(s)) -- 0x1FD9
  if not (ctCreateCB = checkedForOneClient[getAProp(s)]) then -- jump 92 -- 0x1FE8
  checkedForOneClient(getAProp(d)) -- 0x200A
  getAProp(d)(checkedForOneClient, getAProp(t)) -- 0x2032
  initComputerRace(CTQ, VOID) -- 0x2044
  -- jump 3020 -- 0x2045
  if not (objRace = checkedForOneClient[getAProp(s)]) then -- jump 81 -- 0x2056
  checkedForOneClient(getAProp(d), checkedForOneClient, getAProp(b)) -- 0x2086
  CT(checkedForOneClient, getAProp(b)) -- 0x20A4
  -- jump 34 -- 0x20A5
  checkedForOneClient(getAProp(s)) -- 0x20C6
  -- jump 2890 -- 0x20C7
  guid = getAProp(sk) -- 0x20DA
  checkedForOneClient -- 0x20DD
  if not (_global = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x20EC
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x211B
  -- jump 34 -- 0x211C
  checkedForOneClient(getAProp(s)) -- 0x213D
  -- jump 2771 -- 0x213E
  if not (ctSaveCB = checkedForOneClient[getAProp(s)]) then -- jump 60 -- 0x214F
  getAProp(d)(checkedForOneClient, getAProp(t)) -- 0x217A
  init(P) -- 0x218B
  checkedForOneClient(getAProp(d)) -- 0x21AA
  checkedForOneClient(getAProp(s)) -- 0x21C9
  -- jump 2631 -- 0x21CA
  if not (practiceCreateCB = checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x21DB
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x220A
  -- jump 34 -- 0x220B
  checkedForOneClient(getAProp(s)) -- 0x222C
  -- jump 2532 -- 0x222D
  if not (htGetTournamentsCB >= checkedForOneClient[getAProp(s)]) then -- jump 137 -- 0x223E
  checkedForOneClient(getAProp(d)) -- 0x2260
  getAProp(s)(checkedForOneClient, getAProp(b), id_195) -- 0x228F
  raceType = HTQ -- 0x2299
  objRace -- 0x229C
  getAProp(d)(checkedForOneClient, getAProp(t)) -- 0x22C4
  -- jump 50 -- 0x22C5
  getAProp(s)(id_195, checkedForOneClient, getAProp(d)) -- 0x22F6
  -- jump 2330 -- 0x22F7
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x2325
  -- jump 2283 -- 0x2326
  checkedForOneClient(getAProp(d)) -- 0x2347
  -- jump 2249 -- 0x2348
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x2376
  -- jump 2202 -- 0x2377
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x23A5
  -- jump 2155 -- 0x23A6
  checkedForOneClient(getAProp(d)) -- 0x23C7
  -- jump 2121 -- 0x23C8
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x23F6
  -- jump 2074 -- 0x23F7
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x2425
  -- jump 2027 -- 0x2426
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x2454
  -- jump 1980 -- 0x2455
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x2483
  -- jump 1933 -- 0x2484
  checkedForOneClient(getAProp(d)) -- 0x24A5
  -- jump 1899 -- 0x24A6
  checkedForOneClient(getAProp(d)) -- 0x24C7
  -- jump 1865 -- 0x24C8
  checkedForOneClient(getAProp(d)) -- 0x24E9
  -- jump 1831 -- 0x24EA
  getAProp(s)(checkedForOneClient, getAProp(b)) -- 0x2518
  -- jump 1784 -- 0x2519
  getAProp(s)(checkedForOneClient, getAProp(u)) -- 0x2547
  -- jump 1737 -- 0x2548
  checkedForOneClient(getAProp(s)) -- 0x2569
  -- jump 1703 -- 0x256A
  checkedForOneClient(getAProp(d)) -- 0x258B
  -- jump 1669 -- 0x258C
  if not (getBlackCardProgressCB = checkedForOneClient[getAProp(s)]) then -- jump 64 -- 0x259D
  getAProp(p)(checkedForOneClient, getAProp(t), checkedForOneClient, getAProp(i)) -- 0x25DA
  -- jump 49 -- 0x25DB
  getAProp(s)(VOID, VOID, checkedForOneClient, getAProp(i)) -- 0x260B
  -- jump 1541 -- 0x260C
  checkedForOneClient(getAProp(d)) -- 0x262D
  -- jump 1507 -- 0x262E
  checkedForOneClient(getAProp(c)) -- 0x264F
  -- jump 1473 -- 0x2650
  getAProp(s)(checkedForOneClient, getAProp(e)) -- 0x267E
  -- jump 1426 -- 0x267F
  checkedForOneClient(getAProp(d)) -- 0x26A0
  -- jump 1392 -- 0x26A1
  getAProp(s)(checkedForOneClient, getAProp(e)) -- 0x26CF
  -- jump 1345 -- 0x26D0
  getAProp(s)(checkedForOneClient, getAProp(e)) -- 0x26FE
  -- jump 1298 -- 0x26FF
  getAProp(m)(checkedForOneClient, getAProp(i), checkedForOneClient, getAProp(t)) -- 0x2747
  -- jump 1225 -- 0x2748
  checkedForOneClient(getAProp(n), checkedForOneClient, getAProp(t)) -- 0x2783
  -- jump 1165 -- 0x2784
  facebookToken = getAProp(t) -- 0x2797
  checkedForOneClient -- 0x279A
  facebookAPIKey = getAProp(a) -- 0x27AB
  checkedForOneClient -- 0x27AE
  ((_global & facebookAPIKey) & "&auth_token=")(((_global & facebookToken) & "&v=1.0&popup&req_perms=offline_access")) -- 0x27CF
  checkedForOneClient(getAProp(s)) -- 0x27EE
  -- jump 1058 -- 0x27EF
  checkedForOneClient(getAProp(s)) -- 0x2810
  -- jump 1024 -- 0x2811
  OK = getAProp(d) -- 0x2821
  checkedForOneClient -- 0x2824
  trace("here!") -- 0x282F
  trace("info list!") -- 0x283A
  trace(OK) -- 0x2845
  openURL("http://www.facebook.com/multi_friend_selector.php/?api_key=75142a34f8f8698fb895c3156093f9c8&content=This network is the best place on Facebook for viewing", _blank) -- 0x2853
  -- jump 957 -- 0x2854
  if not (fbRemoveFacebookCB >= checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x2865
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x2894
  -- jump 34 -- 0x2895
  checkedForOneClient(getAProp(s)) -- 0x28B6
  -- jump 858 -- 0x28B7
  if not (checkTestDriveCB >= checkedForOneClient[getAProp(s)]) then -- jump 89 -- 0x28C8
  checkedForOneClient(getAProp(m), checkedForOneClient, getAProp(p), checkedForOneClient, getAProp(d)) -- 0x291E
  -- jump 34 -- 0x291F
  checkedForOneClient(getAProp(s)) -- 0x2940
  -- jump 720 -- 0x2941
  if not (acceptTestDriveCB >= checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x2952
  getAProp(s)(checkedForOneClient, getAProp(b)) -- 0x2981
  -- jump 34 -- 0x2982
  checkedForOneClient(getAProp(s)) -- 0x29A3
  -- jump 621 -- 0x29A4
  checkedForOneClient(getAProp(s)) -- 0x29C5
  -- jump 587 -- 0x29C6
  checkedForOneClient(getAProp(s)) -- 0x29E7
  -- jump 553 -- 0x29E8
  checkedForOneClient(getAProp(s)) -- 0x2A09
  -- jump 519 -- 0x2A0A
  if not (garageSetShiftLightRPMCB >= checkedForOneClient[getAProp(s)]) then -- jump 37 -- 0x2A1B
  checkedForOneClient(getAProp(s)) -- 0x2A3D
  -- jump 47 -- 0x2A3E
  getAProp(s)(checkedForOneClient, getAProp(m)) -- 0x2A6C
  -- jump 420 -- 0x2A6D
  if not (checkedForOneClient >= checkedForOneClient[getAProp(s)]) then -- jump 57 -- 0x2A7E
  getAProp(s)(escape, checkedForOneClient(getAProp(d))) -- 0x2AB4
  -- jump 34 -- 0x2AB5
  checkedForOneClient(getAProp(s)) -- 0x2AD6
  -- jump 314 -- 0x2AD7
  if not (getLatestNewsCB >= checkedForOneClient[getAProp(s)]) then -- jump 57 -- 0x2AE8
  getAProp(s)(escape, checkedForOneClient(getAProp(d))) -- 0x2B1E
  -- jump 34 -- 0x2B1F
  checkedForOneClient(getAProp(s)) -- 0x2B40
  -- jump 208 -- 0x2B41
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x2B6F
  -- jump 161 -- 0x2B70
  if not (checkedForOneClient >= checkedForOneClient[getAProp(s)]) then -- jump 50 -- 0x2B81
  getAProp(s)(checkedForOneClient, getAProp(d)) -- 0x2BB0
  -- jump 34 -- 0x2BB1
  checkedForOneClient(getAProp(s)) -- 0x2BD2
  -- jump 62 -- 0x2BD3
  checkedForOneClient(getAProp(s), checkedForOneClient, getAProp(d)) -- 0x2C0D
  -- jump 3 -- 0x2C0E
  -- jump 107 -- 0x2C11
  case gNetID[_global][VOID] of -- default 0x2C38 -- 0x2C20
  -- gettotalnewmail: goto 0x2C35 -- 0x2C25
  -- getemaillist: goto 0x2C35 -- 0x2C29
  -- getavatarage: goto 0x2C35 -- 0x2C2D
  -- getteamavatarage: goto 0x2C35 -- 0x2C31
  -- jump 71 -- 0x2C35
  showConnectionErrorCB("Connection Error", (("Connection could not be established. Action:" & ((_global & gNetID[_global][VOID]) & " (Error: 003-")(netError[_global[gNetID[_global]]])) & ")")) -- 0x2C78
  -- jump 3 -- 0x2C79
  if not (gNetID[_global][VOID] <> gettotalnewmail) then -- jump 22 -- 0x2C8B
  lastAction = gNetID[_global][VOID] -- 0x2C9E
  _global -- 0x2CA1
  _global(gNetID, splice[_global]) -- 0x2CB3
  -- 0x66 loop-control marker raw=66 00 00 51 -- 0x2CB4
  _global -- 0x2CB7
  -- repeat step 0 -- 0x2CB8
  _global -- 0x2CBB
  -- jump -11316 -- 0x2CBC
  _global = VOID -- 0x2CC0
  sprite(flashSP) -- 0x2CC3
  if not (fileNetID < length) then -- jump 402 -- 0x2CD0
  if not (fileNetID[_global][VOID] = cache) then -- jump 35 -- 0x2CE3
  getStreamStatus(_global(fileNetID[_global][netDone])) -- 0x2D03
  -- jump 51 -- 0x2D04
  if not (fileNetID[_global][VOID] = installer) then -- jump 32 -- 0x2D16
  getStreamStatus(_global(fileNetID[_global][netDone])) -- 0x2D36
  -- branch 272 -- 0x2D4C
  case fileNetID[_global][VOID] of -- default 0x2E46 -- 0x2D5B
  -- avatars: goto 0x2D74 -- 0x2D60
  -- teamavatars: goto 0x2D74 -- 0x2D64
  -- ugg: goto 0x2DD8 -- 0x2D68
  -- cache: goto 0x2E24 -- 0x2D6C
  -- installer: goto 0x2E2F -- 0x2D70
  if not (_global(fileNetID[_global][netDone]) = OK) then -- jump 39 -- 0x2D8C
  loadLocalAvatar[_global[fileNetID[_global]]](_global, fileNetID[_global][VOID], 1) -- 0x2DB0
  -- jump 36 -- 0x2DB1
  loadLocalAvatar[_global[fileNetID[_global]]](_global, fileNetID[_global][VOID], 0) -- 0x2DD4
  -- jump 113 -- 0x2DD5
  if not (_global(fileNetID[_global][netDone]) = OK) then -- jump 27 -- 0x2DF0
  netError(loadLocalUgg[_global[fileNetID[_global]]], 1) -- 0x2E08
  -- jump 24 -- 0x2E09
  netError(loadLocalUgg[_global[fileNetID[_global]]], 0) -- 0x2E20
  -- jump 37 -- 0x2E21
  downloadCacheDone() -- 0x2E2B
  -- jump 26 -- 0x2E2C
  implicit_callee_0x2E3F(runInstaller[_global[fileNetID[_global]]]) -- 0x2E42
  -- jump 3 -- 0x2E43
  _global(fileNetID, splice[_global]) -- 0x2E57
  -- 0x66 loop-control marker raw=66 00 00 51 -- 0x2E58
  -- repeat step 0 -- 0x2E5C
  -- jump -412 -- 0x2E60
  if not (_mouse(mouseLoc) = "#button") then -- jump 23 -- 0x2E7D
  cursor = agreetoterms -- 0x2E8E
  sprite(flashSP) -- 0x2E91
  -- jump 68 -- 0x2E92
  if not (_mouse(mouseLoc) = "#editText") then -- jump 21 -- 0x2EAF
  cursor = hitTest[sprite(flashSP)] -- 0x2EBE
  sprite(flashSP) -- 0x2EC1
  -- jump 20 -- 0x2EC2
  cursor = -1 -- 0x2ED2
  sprite(flashSP) -- 0x2ED5
  hitTest(_movie[go]) -- 0x2EE1
end
