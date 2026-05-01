## Lscr-104 Block 15520

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `15520`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `15520`, length `1448`.
- File offset `20128`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
66 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 7c 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 39 54 00 00 58 03 e8 1d 3a 00 01 58 03 e8 1e 55 00 00 51 3b 00 00 35 00 01 39 54 00 01 58 00 64 1d 3a 00 01 58 00 64 1e 55 00 01 51 3b 00 00 35 00 01 39 54 00 11 58 03 e8 1d 3a 00 01 58
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `652`: id `0`, kind `4`, len `4`, `Math`
- payload offset `672`: id `1`, kind `4`, len `5`, `floor`
- payload offset `696`: id `2`, kind `4`, len `5`, `trace`
- payload offset `720`: id `3`, kind `4`, len `9`, `before RD`
- payload offset `752`: id `4`, kind `4`, len `7`, `decrypt`
- payload offset `780`: id `5`, kind `4`, len `7`, `_global`
- payload offset `808`: id `6`, kind `4`, len `3`, `cwc`
- payload offset `828`: id `7`, kind `4`, len `12`, `CheckWindows`
- payload offset `864`: id `8`, kind `4`, len `2`, `cw`
- payload offset `880`: id `9`, kind `4`, len `17`, `CheckWindowsClass`
- payload offset `928`: id `10`, kind `4`, len `3`, `ssm`
- payload offset `948`: id `11`, kind `4`, len `2`, `RD`
- payload offset `964`: id `12`, kind `4`, len `6`, `String`
- payload offset `988`: id `13`, kind `4`, len `12`, `fromCharCode`
- payload offset `1024`: id `14`, kind `4`, len `20`, `isCheatEngineRunning`
- payload offset `1076`: id `15`, kind `4`, len `14`, `CheckProcesses`
- payload offset `1116`: id `16`, kind `4`, len `2`, `cp`
- payload offset `1132`: id `17`, kind `4`, len `8`, `after RD`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

