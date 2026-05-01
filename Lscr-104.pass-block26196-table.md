## Lscr-104 Block 26196

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `26196`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `26196`, length `348`.
- File offset `30804`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
6c 75 65 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 28 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
51 3b 00 00 35 00 01 35 00 02 39 3b 00 03 35 00 04 3a 00 01 3c 00 05 13 07 00 08 43 57 00 00 51 56 00 00 05 06 00 00 00 00 00 00 00 04 00 00 00 07 00 00 00 5f 00 70 00 6c 00 61 00 79 00 65 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `56`: id `0`, kind `4`, len `7`, `_player`
- payload offset `84`: id `1`, kind `4`, len `15`, `applicationName`
- payload offset `128`: id `2`, kind `4`, len `6`, `search`
- payload offset `152`: id `3`, kind `4`, len `7`, `_global`
- payload offset `180`: id `4`, kind `4`, len `7`, `exeName`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

