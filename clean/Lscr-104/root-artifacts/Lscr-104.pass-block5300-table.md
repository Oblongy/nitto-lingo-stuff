## Lscr-104 Block 5300

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `5300`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `5300`, length `304`.
- File offset `9908`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
6d 73 67 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 2b 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
54 00 00 3a 00 01 55 00 00 51 3b 00 01 39 3d 00 02 3b 00 03 35 00 04 39 58 00 1e 3a 00 01 1b 54 00 00 1b 3a 00 01 51 00 05 00 00 00 00 00 00 00 04 00 00 00 08 00 00 00 75 00 6e 00 65 00 73 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `60`: id `0`, kind `4`, len `8`, `unescape`
- payload offset `88`: id `1`, kind `4`, len `3`, `ssm`
- payload offset `108`: id `2`, kind `4`, len `3`, `SRC`
- payload offset `128`: id `3`, kind `4`, len `6`, `String`
- payload offset `152`: id `4`, kind `4`, len `12`, `fromCharCode`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

