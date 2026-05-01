## Lscr-104 Block 4576

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `4576`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `4576`, length `368`.
- File offset `9184`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
69 6e 76 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 61 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
54 00 02 3a 00 01 55 00 02 51 3b 00 01 39 3d 00 02 3b 00 03 35 00 04 39 58 00 1e 3a 00 01 1b 54 00 00 1b 3b 00 03 35 00 04 39 58 00 1e 3a 00 01 1b 54 00 01 1b 3b 00 03 35 00 04 39 58 00 1e 3a
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `116`: id `0`, kind `4`, len `8`, `unescape`
- payload offset `144`: id `1`, kind `4`, len `3`, `ssm`
- payload offset `164`: id `2`, kind `4`, len `3`, `JRC`
- payload offset `184`: id `3`, kind `4`, len `6`, `String`
- payload offset `208`: id `4`, kind `4`, len `12`, `fromCharCode`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

