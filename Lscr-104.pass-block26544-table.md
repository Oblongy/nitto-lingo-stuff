## Lscr-104 Block 26544

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `26544`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `26544`, length `640`.
- File offset `31152`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
00 00 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 2b 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
00 01 3f 12 07 00 03 3b 00 02 3e 36 00 03 51 3b 00 02 3b 00 05 39 3b 00 02 35 00 06 3d 00 07 1b 3a 00 01 36 00 04 51 00 08 00 00 00 00 00 00 00 04 00 00 00 07 00 00 00 5f 00 70 00 6c 00 61 00
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `60`: id `0`, kind `4`, len `7`, `_player`
- payload offset `88`: id `1`, kind `4`, len `20`, `debugPlaybackEnabled`
- payload offset `140`: id `2`, kind `4`, len `7`, `_global`
- payload offset `168`: id `3`, kind `4`, len `19`, `checkedForOneClient`
- payload offset `220`: id `4`, kind `4`, len `18`, `checkProcessResult`
- payload offset `268`: id `5`, kind `4`, len `10`, `getNetText`
- payload offset `300`: id `6`, kind `4`, len `7`, `mainURL`
- payload offset `328`: id `7`, kind `4`, len `20`, `oneclient.html?hey=1`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

