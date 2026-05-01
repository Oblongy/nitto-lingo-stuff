## Lscr-104 Block 8392

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `8392`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `8392`, length `512`.
- File offset `13000`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
62 74 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 4e 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 3b 00 02 35 00 03 39 58 00 1e 3a 00 01 1b 54 00 00 1b 3b 00 02 35 00 03 39 58 00 1e 3a 00 01 1b 54 00 01 1b 3a 00 01 51 3b 00 04 35 00 05 3d 00 07 36 00 06 51 3b 00 08 39 3d 00 09 3d
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `96`: id `0`, kind `4`, len `3`, `ssm`
- payload offset `116`: id `1`, kind `4`, len `2`, `JK`
- payload offset `132`: id `2`, kind `4`, len `6`, `String`
- payload offset `156`: id `3`, kind `4`, len `12`, `fromCharCode`
- payload offset `192`: id `4`, kind `4`, len `7`, `_global`
- payload offset `220`: id `5`, kind `4`, len `7`, `objRace`
- payload offset `248`: id `6`, kind `4`, len `8`, `raceType`
- payload offset `276`: id `7`, kind `4`, len `4`, `KOTH`
- payload offset `296`: id `8`, kind `4`, len `11`, `executeCall`
- payload offset `332`: id `9`, kind `4`, len `15`, `getonecarengine`
- payload offset `376`: id `10`, kind `4`, len `5`, `acid=`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

