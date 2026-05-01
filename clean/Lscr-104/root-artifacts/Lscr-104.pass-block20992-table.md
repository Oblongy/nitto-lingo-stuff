## Lscr-104 Block 20992

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `20992`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `20992`, length `1252`.
- File offset `25600`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
66 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 19 02 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 39 54 00 00 58 03 e8 1d 3a 00 01 58 03 e8 1e 55 00 00 51 3b 00 00 35 00 01 39 54 00 01 58 00 64 1d 3a 00 01 58 00 64 1e 55 00 01 51 3b 00 00 35 00 01 39 54 00 11 58 03 e8 1d 3a 00 01 58
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `556`: id `0`, kind `4`, len `4`, `Math`
- payload offset `576`: id `1`, kind `4`, len `5`, `floor`
- payload offset `600`: id `2`, kind `4`, len `3`, `ssm`
- payload offset `620`: id `3`, kind `4`, len `3`, `HTD`
- payload offset `640`: id `4`, kind `4`, len `6`, `String`
- payload offset `664`: id `5`, kind `4`, len `12`, `fromCharCode`
- payload offset `700`: id `6`, kind `4`, len `20`, `isCheatEngineRunning`
- payload offset `752`: id `7`, kind `4`, len `14`, `CheckProcesses`
- payload offset `792`: id `8`, kind `4`, len `7`, `decrypt`
- payload offset `820`: id `9`, kind `4`, len `7`, `_global`
- payload offset `848`: id `10`, kind `4`, len `2`, `cp`
- payload offset `864`: id `11`, kind `4`, len `12`, `CheckWindows`
- payload offset `900`: id `12`, kind `4`, len `2`, `cw`
- payload offset `916`: id `13`, kind `4`, len `17`, `CheckWindowsClass`
- payload offset `964`: id `14`, kind `4`, len `3`, `cwc`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

