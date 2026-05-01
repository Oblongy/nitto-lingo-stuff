# Lscr-93 Pass 4 High-Value Disassembly Clusters

## CheckNittoProcessesCB

Hits: 2

```text
0052: 39           op_39
0053: 3B 00 00     op_3B arg=0 ; "_global"
0056: 35 00 03     op_35 arg=3 ; "checkProcessResult"
0059: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
005C: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
005F: 51           op_51
0060: 3B 00 08     op_3B arg=8 ; "CheckNittoProcessesCB"
0063: 39           op_39
0064: 3B 00 07     op_3B arg=7 ; "netTextResult"
0067: 39           op_39
0068: 3B 00 00     op_3B arg=0 ; "_global"
006B: 35 00 03     op_35 arg=3 ; "checkProcessResult"
006E: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0071: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0074: 51           op_51
0075: 06 00 0E     op_06 jump?/imm=14
0078: 3B 00 08     op_3B arg=8 ; "CheckNittoProcessesCB"
```

```text
0068: 3B 00 00     op_3B arg=0 ; "_global"
006B: 35 00 03     op_35 arg=3 ; "checkProcessResult"
006E: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0071: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0074: 51           op_51
0075: 06 00 0E     op_06 jump?/imm=14
0078: 3B 00 08     op_3B arg=8 ; "CheckNittoProcessesCB"
007B: 39           op_39
007C: 3D 00 09     op_3D arg=9 ; "1"
007F: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0082: 51           op_51
0083: 3E           op_3E
0084: 57 00 00     op_57 arg=0 ; "_global"
0087: 51           op_51
0088: 56 00 00     op_56 arg=0 ; "_global"
008B: 3B 00 00     op_3B arg=0 ; "_global"
008E: 35 00 0A     op_35 arg=10 ; "gNetID"
```

## eval

Hits: 2

```text
00E5: 3F           op_3F
00E6: 37           op_37
00E7: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
00EA: 57 00 02     op_57 arg=2 ; "netDone"
00ED: 51           op_51
00EE: 85           op_85
00EF: 3B 00 0E     op_3B arg=14 ; "eval"
00F2: 39           op_39
00F3: 3D 00 0F     op_3D arg=15 ; "propList("
00F6: 56 00 02     op_56 arg=2 ; "netDone"
00F9: 1B           op_1B
00FA: 3D 00 10     op_3D arg=16 ; ")"
00FD: 1B           op_1B
00FE: 79           op_79
00FF: 00           op_00
0100: 01           op_01
0101: 57 00 01     op_57 arg=1 ; "checkedForOneClient"
```

```text
0164: 1B           op_1B
0165: 3A 00 02     op_3A arg=2 ; "netDone"
0168: 51           op_51
0169: 04           op_04
016A: 06 00 04     op_06 jump?/imm=4
016D: 00           op_00
016E: 3B 00 0E     op_3B arg=14 ; "eval"
0171: 39           op_39
0172: 3D 00 0F     op_3D arg=15 ; "propList("
0175: 56 00 02     op_56 arg=2 ; "netDone"
0178: 1B           op_1B
0179: 3D 00 10     op_3D arg=16 ; ")"
017C: 1B           op_1B
017D: 79           op_79
017E: 00           op_00
017F: 01           op_01
0180: 57 00 01     op_57 arg=1 ; "checkedForOneClient"
```

## decrypt

Hits: 1

```text
0115: 03           op_03
0116: 3B 00 00     op_3B arg=0 ; "_global"
0119: 35 00 13     op_35 arg=19 ; "isEnc"
011C: 07 00 AA     op_07 jump?/imm=170
011F: 85           op_85
0120: 85           op_85
0121: 3B 00 14     op_3B arg=20 ; "decrypt"
0124: 39           op_39
0125: 56 00 02     op_56 arg=2 ; "netDone"
0128: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
012B: 57 00 02     op_57 arg=2 ; "netDone"
012E: 51           op_51
012F: 06 00 3F     op_06 jump?/imm=63
0132: 75           op_75
0133: 00           op_00
0134: 01           op_01
0135: 00           op_00
```

## showConnectionErrorCB

Hits: 5

```text
013E: 15           op_15
013F: 03           op_03
0140: 3B 00 16     op_3B arg=22 ; "sprite"
0143: 39           op_39
0144: 3D 00 17     op_3D arg=23 ; "flashSP"
0147: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
014A: 35 00 18     op_35 arg=24 ; "showConnectionErrorCB"
014D: 39           op_39
014E: 3D 00 19     op_3D arg=25 ; "Protocol Error"
0151: 3D 00 1A     op_3D arg=26 ; "Connection protocol could not be established. Action:"
0154: 3B 00 00     op_3B arg=0 ; "_global"
0157: 35 00 0A     op_35 arg=10 ; "gNetID"
015A: 56 00 00     op_56 arg=0 ; "_global"
015D: 37           op_37
015E: 3E           op_3E
015F: 37           op_37
0160: 1B           op_1B
```

```text
0193: 1C           op_1C
0194: 03           op_03
0195: 3B 00 16     op_3B arg=22 ; "sprite"
0198: 39           op_39
0199: 3D 00 17     op_3D arg=23 ; "flashSP"
019C: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
019F: 35 00 18     op_35 arg=24 ; "showConnectionErrorCB"
01A2: 39           op_39
01A3: 3D 00 19     op_3D arg=25 ; "Protocol Error"
01A6: 3D 00 1A     op_3D arg=26 ; "Connection protocol could not be established. Action:"
01A9: 3B 00 00     op_3B arg=0 ; "_global"
01AC: 35 00 0A     op_35 arg=10 ; "gNetID"
01AF: 56 00 00     op_56 arg=0 ; "_global"
01B2: 37           op_37
01B3: 3E           op_3E
01B4: 37           op_37
01B5: 1B           op_1B
```

```text
01C2: 00           op_00
01C3: 06 00 2C     op_06 jump?/imm=44
01C6: 3B 00 16     op_3B arg=22 ; "sprite"
01C9: 39           op_39
01CA: 3D 00 17     op_3D arg=23 ; "flashSP"
01CD: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
01D0: 35 00 18     op_35 arg=24 ; "showConnectionErrorCB"
01D3: 39           op_39
01D4: 3D 00 19     op_3D arg=25 ; "Protocol Error"
01D7: 3D 00 1A     op_3D arg=26 ; "Connection protocol could not be established. Action:"
01DA: 3B 00 00     op_3B arg=0 ; "_global"
01DD: 35 00 0A     op_35 arg=10 ; "gNetID"
01E0: 56 00 00     op_56 arg=0 ; "_global"
01E3: 37           op_37
01E4: 3E           op_3E
01E5: 37           op_37
01E6: 1B           op_1B
```

```text
01F7: 3D 00 1F     op_3D arg=31 ; "\"s\",-100"
01FA: 12 07 00 25  op_12 branch? target/imm=37
01FE: 3B 00 16     op_3B arg=22 ; "sprite"
0201: 39           op_39
0202: 3D 00 17     op_3D arg=23 ; "flashSP"
0205: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0208: 35 00 18     op_35 arg=24 ; "showConnectionErrorCB"
020B: 39           op_39
020C: 3D 00 20     op_3D arg=32 ; "Session Timed Out"
020F: 3D 00 21     op_3D arg=33 ; "I'm sorry, but your session has timed out, please restart the application. Last action: "
0212: 3B 00 00     op_3B arg=0 ; "_global"
0215: 35 00 22     op_35 arg=34 ; "lastAction"
0218: 1B           op_1B
0219: 3A 00 02     op_3A arg=2 ; "netDone"
021C: 51           op_51
021D: 06 29 F4     op_06 jump?/imm=10740
0220: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
```

```text
2C34: 15           op_15
2C35: 06 00 47     op_06 jump?/imm=71
2C38: 3B 00 16     op_3B arg=22 ; "sprite"
2C3B: 39           op_39
2C3C: 3D 00 17     op_3D arg=23 ; "flashSP"
2C3F: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2C42: 35 00 18     op_35 arg=24 ; "showConnectionErrorCB"
2C45: 39           op_39
2C46: 3D 01 A1     op_3D arg=417 ; "Connection Error"
2C49: 3D 01 A2     op_3D arg=418 ; "Connection could not be established. Action:"
2C4C: 3B 00 00     op_3B arg=0 ; "_global"
2C4F: 35 00 0A     op_35 arg=10 ; "gNetID"
2C52: 56 00 00     op_56 arg=0 ; "_global"
2C55: 37           op_37
2C56: 3E           op_3E
2C57: 37           op_37
2C58: 1B           op_1B
```

## xmlparser

Hits: 2

```text
049F: 01           op_01
04A0: A0           op_A0
04A1: 29           op_29
04A2: 41           op_41
04A3: 3B 00 23     op_3B arg=35 ; "xtra"
04A6: 39           op_39
04A7: 3D 00 24     op_3D arg=36 ; "xmlparser"
04AA: 23           op_23
04AB: 00           op_00
04AC: 01           op_01
04AD: 57 00 03     op_57 arg=3 ; "checkProcessResult"
04B0: 51           op_51
04B1: 56 00 03     op_56 arg=3 ; "checkProcessResult"
04B4: 35 00 25     op_35 arg=37 ; "parseString"
04B7: 39           op_39
04B8: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
04BB: 35 00 26     op_35 arg=38 ; "getAProp"
```

```text
1101: 39           op_39
1102: 3D 00 86     op_3D arg=134 ; "DYNO"
1105: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1108: 51           op_51
1109: 3B 00 23     op_3B arg=35 ; "xtra"
110C: 39           op_39
110D: 3D 00 24     op_3D arg=36 ; "xmlparser"
1110: 23           op_23
1111: 00           op_00
1112: 01           op_01
1113: 57 00 03     op_57 arg=3 ; "checkProcessResult"
1116: 51           op_51
1117: 56 00 03     op_56 arg=3 ; "checkProcessResult"
111A: 35 00 25     op_35 arg=37 ; "parseString"
111D: 39           op_39
111E: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
1121: 35 00 26     op_35 arg=38 ; "getAProp"
```

## openURL

Hits: 3

```text
04FD: 35 00 26     op_35 arg=38 ; "getAProp"
0500: 39           op_39
0501: 3D 00 2C     op_3D arg=44 ; "ftc"
0504: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0507: 3F           op_3F
0508: 12 07 00 19  op_12 branch? target/imm=25
050C: 3B 00 2D     op_3B arg=45 ; "openURL"
050F: 39           op_39
0510: 3D 00 2E     op_3D arg=46 ; "http://www.facebook.com/connect/prompt_permissions.php?api_key="
0513: 3B 00 00     op_3B arg=0 ; "_global"
0516: 35 00 2F     op_35 arg=47 ; "facebookAPIKey"
0519: 1B           op_1B
051A: 3D 00 30     op_3D arg=48 ; "&v=1.0&next=http://www.facebook.com/connect/login_success.html?xxRESULTTOKENxx&display=popup&ext_perm=publish_stream&enable_profile_selector=0"
051D: 1B           op_1B
051E: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0521: 51           op_51
0522: 3B 00 00     op_3B arg=0 ; "_global"
```

```text
27A1: 35 00 26     op_35 arg=38 ; "getAProp"
27A4: 39           op_39
27A5: 3D 00 EE     op_3D arg=238 ; "a"
27A8: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
27AB: 36 00 2F     op_36 arg=47 ; "facebookAPIKey"
27AE: 51           op_51
27AF: 3B 00 2D     op_3B arg=45 ; "openURL"
27B2: 39           op_39
27B3: 3D 00 EF     op_3D arg=239 ; "https://login.facebook.com/login.php?api_key="
27B6: 3B 00 00     op_3B arg=0 ; "_global"
27B9: 35 00 2F     op_35 arg=47 ; "facebookAPIKey"
27BC: 1B           op_1B
27BD: 3D 00 F0     op_3D arg=240 ; "&auth_token="
27C0: 1B           op_1B
27C1: 3B 00 00     op_3B arg=0 ; "_global"
27C4: 35 00 ED     op_35 arg=237 ; "facebookToken"
27C7: 1B           op_1B
```

```text
283A: 51           op_51
283B: 3B 00 06     op_3B arg=6 ; "trace"
283E: 39           op_39
283F: 56 00 05     op_56 arg=5 ; "OK"
2842: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2845: 51           op_51
2846: 3B 00 2D     op_3B arg=45 ; "openURL"
2849: 39           op_39
284A: 3D 00 F6     op_3D arg=246 ; "http://www.facebook.com/multi_friend_selector.php/?api_key=75142a34f8f8698fb895c3156093f9c8&content=This network is the best place on Facebook for viewing"
284D: 3D 00 F7     op_3D arg=247 ; "_blank"
2850: 3A 00 02     op_3A arg=2 ; "netDone"
2853: 51           op_51
2854: 06 03 BD     op_06 jump?/imm=957
2857: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
285A: 35 00 26     op_35 arg=38 ; "getAProp"
285D: 39           op_39
285E: 3D 00 2B     op_3D arg=43 ; "s"
```

## facebookAPIKey

Hits: 3

```text
0507: 3F           op_3F
0508: 12 07 00 19  op_12 branch? target/imm=25
050C: 3B 00 2D     op_3B arg=45 ; "openURL"
050F: 39           op_39
0510: 3D 00 2E     op_3D arg=46 ; "http://www.facebook.com/connect/prompt_permissions.php?api_key="
0513: 3B 00 00     op_3B arg=0 ; "_global"
0516: 35 00 2F     op_35 arg=47 ; "facebookAPIKey"
0519: 1B           op_1B
051A: 3D 00 30     op_3D arg=48 ; "&v=1.0&next=http://www.facebook.com/connect/login_success.html?xxRESULTTOKENxx&display=popup&ext_perm=publish_stream&enable_profile_selector=0"
051D: 1B           op_1B
051E: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0521: 51           op_51
0522: 3B 00 00     op_3B arg=0 ; "_global"
0525: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
0528: 35 00 26     op_35 arg=38 ; "getAProp"
052B: 39           op_39
052C: 3D 00 31     op_3D arg=49 ; "aid"
```

```text
279B: 3B 00 00     op_3B arg=0 ; "_global"
279E: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
27A1: 35 00 26     op_35 arg=38 ; "getAProp"
27A4: 39           op_39
27A5: 3D 00 EE     op_3D arg=238 ; "a"
27A8: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
27AB: 36 00 2F     op_36 arg=47 ; "facebookAPIKey"
27AE: 51           op_51
27AF: 3B 00 2D     op_3B arg=45 ; "openURL"
27B2: 39           op_39
27B3: 3D 00 EF     op_3D arg=239 ; "https://login.facebook.com/login.php?api_key="
27B6: 3B 00 00     op_3B arg=0 ; "_global"
27B9: 35 00 2F     op_35 arg=47 ; "facebookAPIKey"
27BC: 1B           op_1B
27BD: 3D 00 F0     op_3D arg=240 ; "&auth_token="
27C0: 1B           op_1B
27C1: 3B 00 00     op_3B arg=0 ; "_global"
```

```text
27AB: 36 00 2F     op_36 arg=47 ; "facebookAPIKey"
27AE: 51           op_51
27AF: 3B 00 2D     op_3B arg=45 ; "openURL"
27B2: 39           op_39
27B3: 3D 00 EF     op_3D arg=239 ; "https://login.facebook.com/login.php?api_key="
27B6: 3B 00 00     op_3B arg=0 ; "_global"
27B9: 35 00 2F     op_35 arg=47 ; "facebookAPIKey"
27BC: 1B           op_1B
27BD: 3D 00 F0     op_3D arg=240 ; "&auth_token="
27C0: 1B           op_1B
27C1: 3B 00 00     op_3B arg=0 ; "_global"
27C4: 35 00 ED     op_35 arg=237 ; "facebookToken"
27C7: 1B           op_1B
27C8: 3D 00 F1     op_3D arg=241 ; "&v=1.0&popup&req_perms=offline_access"
27CB: 1B           op_1B
27CC: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
27CF: 51           op_51
```

## connectSocket

Hits: 1

```text
058D: 39           op_39
058E: 3D 00 36     op_3D arg=54 ; "cwc"
0591: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0594: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0597: 36 00 36     op_36 arg=54 ; "cwc"
059A: 51           op_51
059B: 3B 00 37     op_3B arg=55 ; "connectSocket"
059E: 39           op_39
059F: 3A 00 00     op_3A arg=0 ; "_global"
05A2: 51           op_51
05A3: 3B 00 16     op_3B arg=22 ; "sprite"
05A6: 39           op_39
05A7: 3D 00 17     op_3D arg=23 ; "flashSP"
05AA: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
05AD: 35 00 38     op_35 arg=56 ; "loginCB"
05B0: 39           op_39
05B1: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
```

## loginCB

Hits: 4

```text
059F: 3A 00 00     op_3A arg=0 ; "_global"
05A2: 51           op_51
05A3: 3B 00 16     op_3B arg=22 ; "sprite"
05A6: 39           op_39
05A7: 3D 00 17     op_3D arg=23 ; "flashSP"
05AA: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
05AD: 35 00 38     op_35 arg=56 ; "loginCB"
05B0: 39           op_39
05B1: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
05B4: 35 00 26     op_35 arg=38 ; "getAProp"
05B7: 39           op_39
05B8: 3D 00 2B     op_3D arg=43 ; "s"
05BB: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
05BE: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
05C1: 35 00 26     op_35 arg=38 ; "getAProp"
05C4: 39           op_39
05C5: 3D 00 27     op_3D arg=39 ; "d"
```

```text
0637: 3E           op_3E
0638: 12 07 00 32  op_12 branch? target/imm=50
063C: 3B 00 16     op_3B arg=22 ; "sprite"
063F: 39           op_39
0640: 3D 00 17     op_3D arg=23 ; "flashSP"
0643: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0646: 35 00 38     op_35 arg=56 ; "loginCB"
0649: 39           op_39
064A: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
064D: 35 00 26     op_35 arg=38 ; "getAProp"
0650: 39           op_39
0651: 3D 00 2B     op_3D arg=43 ; "s"
0654: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0657: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
065A: 35 00 26     op_35 arg=38 ; "getAProp"
065D: 39           op_39
065E: 3D 00 27     op_3D arg=39 ; "d"
```

```text
067A: 3F           op_3F
067B: 12 07 00 6E  op_12 branch? target/imm=110
067F: 3B 00 16     op_3B arg=22 ; "sprite"
0682: 39           op_39
0683: 3D 00 17     op_3D arg=23 ; "flashSP"
0686: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0689: 35 00 38     op_35 arg=56 ; "loginCB"
068C: 39           op_39
068D: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
0690: 35 00 26     op_35 arg=38 ; "getAProp"
0693: 39           op_39
0694: 3D 00 2B     op_3D arg=43 ; "s"
0697: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
069A: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
069D: 35 00 26     op_35 arg=38 ; "getAProp"
06A0: 39           op_39
06A1: 3D 00 27     op_3D arg=39 ; "d"
```

```text
0766: 51           op_51
0767: 06 00 22     op_06 jump?/imm=34
076A: 3B 00 16     op_3B arg=22 ; "sprite"
076D: 39           op_39
076E: 3D 00 17     op_3D arg=23 ; "flashSP"
0771: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0774: 35 00 38     op_35 arg=56 ; "loginCB"
0777: 39           op_39
0778: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
077B: 35 00 26     op_35 arg=38 ; "getAProp"
077E: 39           op_39
077F: 3D 00 2B     op_3D arg=43 ; "s"
0782: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0785: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0788: 51           op_51
0789: 06 24 88     op_06 jump?/imm=9352
078C: 06 24 85     op_06 jump?/imm=9349
```

## downloadCacheDone

Hits: 1

```text
2E1A: 3F           op_3F
2E1B: 37           op_37
2E1C: 42           op_42
2E1D: 3A 00 02     op_3A arg=2 ; "netDone"
2E20: 51           op_51
2E21: 06 00 25     op_06 jump?/imm=37
2E24: 3B 01 AD     op_3B arg=429 ; "downloadCacheDone"
2E27: 39           op_39
2E28: 3A 00 00     op_3A arg=0 ; "_global"
2E2B: 51           op_51
2E2C: 06 00 1A     op_06 jump?/imm=26
2E2F: 3B 01 AE     op_3B arg=430 ; "runInstaller"
2E32: 39           op_39
2E33: 3B 00 00     op_3B arg=0 ; "_global"
2E36: 35 01 A5     op_35 arg=421 ; "fileNetID"
2E39: 56 00 00     op_56 arg=0 ; "_global"
2E3C: 37           op_37
```

## Connection Error

Hits: 1

```text
2C38: 3B 00 16     op_3B arg=22 ; "sprite"
2C3B: 39           op_39
2C3C: 3D 00 17     op_3D arg=23 ; "flashSP"
2C3F: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2C42: 35 00 18     op_35 arg=24 ; "showConnectionErrorCB"
2C45: 39           op_39
2C46: 3D 01 A1     op_3D arg=417 ; "Connection Error"
2C49: 3D 01 A2     op_3D arg=418 ; "Connection could not be established. Action:"
2C4C: 3B 00 00     op_3B arg=0 ; "_global"
2C4F: 35 00 0A     op_35 arg=10 ; "gNetID"
2C52: 56 00 00     op_56 arg=0 ; "_global"
2C55: 37           op_37
2C56: 3E           op_3E
2C57: 37           op_37
2C58: 1B           op_1B
2C59: 3D 01 A3     op_3D arg=419 ; " (Error: 003-"
2C5C: 1B           op_1B
```

## fileNetID

Hits: 17

```text
2CBC: 06 D3 CC     op_06 jump?/imm=54220
2CBF: 3E           op_3E
2CC0: 57 00 00     op_57 arg=0 ; "_global"
2CC3: 51           op_51
2CC4: 56 00 00     op_56 arg=0 ; "_global"
2CC7: 3B 00 00     op_3B arg=0 ; "_global"
2CCA: 35 01 A5     op_35 arg=421 ; "fileNetID"
2CCD: 35 00 0B     op_35 arg=11 ; "length"
2CD0: 14 07 01 92  op_14 branch? target/imm=402
2CD4: 3B 00 00     op_3B arg=0 ; "_global"
2CD7: 35 01 A5     op_35 arg=421 ; "fileNetID"
2CDA: 56 00 00     op_56 arg=0 ; "_global"
2CDD: 37           op_37
2CDE: 3E           op_3E
2CDF: 37           op_37
2CE0: 3D 01 A6     op_3D arg=422 ; "cache"
2CE3: 12 07 00 23  op_12 branch? target/imm=35
```

```text
2CC4: 56 00 00     op_56 arg=0 ; "_global"
2CC7: 3B 00 00     op_3B arg=0 ; "_global"
2CCA: 35 01 A5     op_35 arg=421 ; "fileNetID"
2CCD: 35 00 0B     op_35 arg=11 ; "length"
2CD0: 14 07 01 92  op_14 branch? target/imm=402
2CD4: 3B 00 00     op_3B arg=0 ; "_global"
2CD7: 35 01 A5     op_35 arg=421 ; "fileNetID"
2CDA: 56 00 00     op_56 arg=0 ; "_global"
2CDD: 37           op_37
2CDE: 3E           op_3E
2CDF: 37           op_37
2CE0: 3D 01 A6     op_3D arg=422 ; "cache"
2CE3: 12 07 00 23  op_12 branch? target/imm=35
2CE7: 3B 01 A7     op_3B arg=423 ; "downloadCacheInProgress"
2CEA: 39           op_39
2CEB: 3B 01 A8     op_3B arg=424 ; "getStreamStatus"
2CEE: 39           op_39
```

```text
2CE3: 12 07 00 23  op_12 branch? target/imm=35
2CE7: 3B 01 A7     op_3B arg=423 ; "downloadCacheInProgress"
2CEA: 39           op_39
2CEB: 3B 01 A8     op_3B arg=424 ; "getStreamStatus"
2CEE: 39           op_39
2CEF: 3B 00 00     op_3B arg=0 ; "_global"
2CF2: 35 01 A5     op_35 arg=421 ; "fileNetID"
2CF5: 56 00 00     op_56 arg=0 ; "_global"
2CF8: 37           op_37
2CF9: 58 00 02     op_58 arg=2 ; "netDone"
2CFC: 37           op_37
2CFD: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D00: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D03: 51           op_51
2D04: 06 00 33     op_06 jump?/imm=51
2D07: 3B 00 00     op_3B arg=0 ; "_global"
2D0A: 35 01 A5     op_35 arg=421 ; "fileNetID"
```

```text
2CFC: 37           op_37
2CFD: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D00: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D03: 51           op_51
2D04: 06 00 33     op_06 jump?/imm=51
2D07: 3B 00 00     op_3B arg=0 ; "_global"
2D0A: 35 01 A5     op_35 arg=421 ; "fileNetID"
2D0D: 56 00 00     op_56 arg=0 ; "_global"
2D10: 37           op_37
2D11: 3E           op_3E
2D12: 37           op_37
2D13: 3D 01 A9     op_3D arg=425 ; "installer"
2D16: 12 07 00 20  op_12 branch? target/imm=32
2D1A: 3B 01 AA     op_3B arg=426 ; "downloadInstallerUpdateFlash"
2D1D: 39           op_39
2D1E: 3B 01 A8     op_3B arg=424 ; "getStreamStatus"
2D21: 39           op_39
```

```text
2D16: 12 07 00 20  op_12 branch? target/imm=32
2D1A: 3B 01 AA     op_3B arg=426 ; "downloadInstallerUpdateFlash"
2D1D: 39           op_39
2D1E: 3B 01 A8     op_3B arg=424 ; "getStreamStatus"
2D21: 39           op_39
2D22: 3B 00 00     op_3B arg=0 ; "_global"
2D25: 35 01 A5     op_35 arg=421 ; "fileNetID"
2D28: 56 00 00     op_56 arg=0 ; "_global"
2D2B: 37           op_37
2D2C: 58 00 02     op_58 arg=2 ; "netDone"
2D2F: 37           op_37
2D30: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D33: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D36: 51           op_51
2D37: 3B 00 02     op_3B arg=2 ; "netDone"
2D3A: 39           op_39
2D3B: 3B 00 00     op_3B arg=0 ; "_global"
```

```text
2D30: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D33: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D36: 51           op_51
2D37: 3B 00 02     op_3B arg=2 ; "netDone"
2D3A: 39           op_39
2D3B: 3B 00 00     op_3B arg=0 ; "_global"
2D3E: 35 01 A5     op_35 arg=421 ; "fileNetID"
2D41: 56 00 00     op_56 arg=0 ; "_global"
2D44: 37           op_37
2D45: 58 00 02     op_58 arg=2 ; "netDone"
2D48: 37           op_37
2D49: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2D4C: 07 01 10     op_07 jump?/imm=272
2D4F: 3B 00 00     op_3B arg=0 ; "_global"
2D52: 35 01 A5     op_35 arg=421 ; "fileNetID"
2D55: 56 00 00     op_56 arg=0 ; "_global"
2D58: 37           op_37
```

Additional hits omitted here: 11

## downloadCacheInProgress

Hits: 1

```text
2CDA: 56 00 00     op_56 arg=0 ; "_global"
2CDD: 37           op_37
2CDE: 3E           op_3E
2CDF: 37           op_37
2CE0: 3D 01 A6     op_3D arg=422 ; "cache"
2CE3: 12 07 00 23  op_12 branch? target/imm=35
2CE7: 3B 01 A7     op_3B arg=423 ; "downloadCacheInProgress"
2CEA: 39           op_39
2CEB: 3B 01 A8     op_3B arg=424 ; "getStreamStatus"
2CEE: 39           op_39
2CEF: 3B 00 00     op_3B arg=0 ; "_global"
2CF2: 35 01 A5     op_35 arg=421 ; "fileNetID"
2CF5: 56 00 00     op_56 arg=0 ; "_global"
2CF8: 37           op_37
2CF9: 58 00 02     op_58 arg=2 ; "netDone"
2CFC: 37           op_37
2CFD: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
```

## runInstaller

Hits: 1

```text
2E21: 06 00 25     op_06 jump?/imm=37
2E24: 3B 01 AD     op_3B arg=429 ; "downloadCacheDone"
2E27: 39           op_39
2E28: 3A 00 00     op_3A arg=0 ; "_global"
2E2B: 51           op_51
2E2C: 06 00 1A     op_06 jump?/imm=26
2E2F: 3B 01 AE     op_3B arg=430 ; "runInstaller"
2E32: 39           op_39
2E33: 3B 00 00     op_3B arg=0 ; "_global"
2E36: 35 01 A5     op_35 arg=421 ; "fileNetID"
2E39: 56 00 00     op_56 arg=0 ; "_global"
2E3C: 37           op_37
2E3D: 3F           op_3F
2E3E: 37           op_37
2E3F: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
2E42: 51           op_51
2E43: 06 00 03     op_06 jump?/imm=3
```

## go

Hits: 8

```text
02CE: 39           op_39
02CF: 01           op_01
02D0: 2C           op_2C
02D1: 0B           op_0B
02D2: 5B 01 2D     op_5B arg=301 ; "setdeletes"
02D5: 0B           op_0B
02D6: 7D 01 2E     op_7D arg=302 ; "getcarcategories"
02D9: 0B           op_0B
02DA: 9F           op_9F
02DB: 01           op_01
02DC: 2F           op_2F
02DD: 0B           op_0B
02DE: C1           op_C1
02DF: 01           op_01
02E0: 30           op_30
02E1: 0B           op_0B
02E2: E3           op_E3
```

```text
0951: 51           op_51
0952: 06 22 BF     op_06 jump?/imm=8895
0955: 3B 00 16     op_3B arg=22 ; "sprite"
0958: 39           op_39
0959: 3D 00 17     op_3D arg=23 ; "flashSP"
095C: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
095F: 35 00 54     op_35 arg=84 ; "forgotPasswordCB"
0962: 39           op_39
0963: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
0966: 35 00 26     op_35 arg=38 ; "getAProp"
0969: 39           op_39
096A: 3D 00 2B     op_3D arg=43 ; "s"
096D: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0970: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0973: 51           op_51
0974: 06 22 9D     op_06 jump?/imm=8861
0977: 3B 00 16     op_3B arg=22 ; "sprite"
```

```text
0DCD: 51           op_51
0DCE: 06 1E 43     op_06 jump?/imm=7747
0DD1: 3B 00 16     op_3B arg=22 ; "sprite"
0DD4: 39           op_39
0DD5: 3D 00 17     op_3D arg=23 ; "flashSP"
0DD8: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0DDB: 35 00 77     op_35 arg=119 ; "getCarCategoriesCB"
0DDE: 39           op_39
0DDF: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
0DE2: 35 00 26     op_35 arg=38 ; "getAProp"
0DE5: 39           op_39
0DE6: 3D 00 27     op_3D arg=39 ; "d"
0DE9: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0DEC: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
0DEF: 51           op_51
0DF0: 06 1E 21     op_06 jump?/imm=7713
0DF3: 3B 00 16     op_3B arg=22 ; "sprite"
```

```text
1205: 51           op_51
1206: 06 1A 0B     op_06 jump?/imm=6667
1209: 3B 00 16     op_3B arg=22 ; "sprite"
120C: 39           op_39
120D: 3D 00 17     op_3D arg=23 ; "flashSP"
1210: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1213: 35 00 90     op_35 arg=144 ; "getPartCategoriesCB"
1216: 39           op_39
1217: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
121A: 35 00 26     op_35 arg=38 ; "getAProp"
121D: 39           op_39
121E: 3D 00 27     op_3D arg=39 ; "d"
1221: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1224: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1227: 51           op_51
1228: 06 19 E9     op_06 jump?/imm=6633
122B: 3B 00 16     op_3B arg=22 ; "sprite"
```

```text
1227: 51           op_51
1228: 06 19 E9     op_06 jump?/imm=6633
122B: 3B 00 16     op_3B arg=22 ; "sprite"
122E: 39           op_39
122F: 3D 00 17     op_3D arg=23 ; "flashSP"
1232: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1235: 35 00 91     op_35 arg=145 ; "getWheelsTiresPartCategoriesCB"
1238: 39           op_39
1239: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
123C: 35 00 26     op_35 arg=38 ; "getAProp"
123F: 39           op_39
1240: 3D 00 27     op_3D arg=39 ; "d"
1243: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1246: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1249: 51           op_51
124A: 06 19 C7     op_06 jump?/imm=6599
124D: 3B 00 16     op_3B arg=22 ; "sprite"
```

```text
1732: 51           op_51
1733: 06 14 DE     op_06 jump?/imm=5342
1736: 3B 00 16     op_3B arg=22 ; "sprite"
1739: 39           op_39
173A: 3D 00 17     op_3D arg=23 ; "flashSP"
173D: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1740: 35 00 A4     op_35 arg=164 ; "getPaintCategoriesCB"
1743: 39           op_39
1744: 56 00 01     op_56 arg=1 ; "checkedForOneClient"
1747: 35 00 26     op_35 arg=38 ; "getAProp"
174A: 39           op_39
174B: 3D 00 27     op_3D arg=39 ; "d"
174E: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1751: 3A 00 01     op_3A arg=1 ; "checkedForOneClient"
1754: 51           op_51
1755: 06 14 BC     op_06 jump?/imm=5308
1758: 3B 00 16     op_3B arg=22 ; "sprite"
```

Additional hits omitted here: 2
