## Lscr-104 Block 14292

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `14292`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `14292`, length `308`.
- File offset `18900`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 1c 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 3a 00 01 51 3b 00 02 35 00 03 35 00 04 39 3d 00 05 3a 00 01 51 06 00 00 00 00 00 00 00 04 00 00 00 03 00 00 00 73 00 73 00 6d 00 00 00 01 00 00 00 04 00 00 00 02 00 00 00 52 00 4f 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `44`: id `0`, kind `4`, len `3`, `ssm`
- payload offset `64`: id `1`, kind `4`, len `2`, `RO`
- payload offset `80`: id `2`, kind `4`, len `7`, `_global`
- payload offset `108`: id `3`, kind `4`, len `7`, `objRace`
- payload offset `136`: id `4`, kind `4`, len `4`, `init`
- payload offset `156`: id `5`, kind `4`, len `5`, `RIVAL`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

