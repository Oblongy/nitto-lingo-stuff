## Lscr-104 Block 27184

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.bin`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-104.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js` (corroborating sibling artifact only)

Scope:
- This pass documents embedded block `27184`.
- No opcode semantics are inferred by this pass.

Raw header evidence:
- JSON block offset `27184`, length `1108`.
- File offset `31792`.
- Pre-marker prefix length `4`.

Pre-marker bytes:
```text
65 73 00 00
```
- Marker-relative offset inside block slice `4`.

Marker bytes:
```text
03 00 ad de 91 00 00 00 00 00 00 00 96 00 00 00
```

First instruction-region bytes:
```text
3d 00 01 54 00 00 1b 3a 00 01 51 3e 57 00 00 51 54 00 00 3d 00 02 13 07 00 52 3b 00 03 39 3b 00 04 35 00 05 3a 00 01 57 00 01 51 56 00 01 35 00 06 39 3d 00 07 3a 00 01 57 00 02 51 56 00 02 35
```

Recovered `kind = 4` UTF-16LE string records:
- payload offset `164`: id `0`, kind `4`, len `5`, `trace`
- payload offset `188`: id `1`, kind `4`, len `8`, `result: `
- payload offset `216`: id `2`, kind `4`, len `1`, `0`
- payload offset `232`: id `3`, kind `4`, len `14`, `CheckProcesses`
- payload offset `272`: id `4`, kind `4`, len `7`, `_global`
- payload offset `300`: id `5`, kind `4`, len `7`, `exeName`
- payload offset `328`: id `6`, kind `4`, len `5`, `split`
- payload offset `352`: id `7`, kind `4`, len `1`, `,`
- payload offset `368`: id `8`, kind `4`, len `6`, `length`
- payload offset `392`: id `9`, kind `4`, len `22`, `IsMyProcessNameCorrect`
- payload offset `448`: id `10`, kind `4`, len `18`, `flashReturnValue: `
- payload offset `496`: id `11`, kind `4`, len `6`, `sprite`
- payload offset `520`: id `12`, kind `4`, len `7`, `flashSP`
- payload offset `548`: id `13`, kind `4`, len `21`, `CheckNittoProcessesCB`

Corroborating sibling artifact:
- file: `C:\Users\Dilldo\Nitto\Lingo Stuff\js_rewrite\12-socket-client-to-server.js`
- exported handlers: `LOGIN`, `SENDNIMMESSAGE`, `UPDATENIMUSER`, `DELETENIMUSER`, `BLOCKNIMUSER`, `UNBLOCKNIMUSER`, `INQUIRYNIMUSER`, `ALLOWNIMUSER`, `NIMOKRESPONSE`, `DELETENIMINQUIREDUSER`, `GETNIMINREQUESTS`, `GETNIMOUTREQUESTS`, `LISTRACECHATROOMS2`, `CREATECHATROOM`, `JOINRACECHAT`, `LEAVERACECHAT`, `LISTRACECHATUSERS`, `SENDRACECHAT`, `TEAMKICK`, `TEAMCHANGEROLE`, `TEAMUPDATEMAXBET`, `TEAMDEPOSIT`, `TEAMWITHDRAW`, `TEAMQUIT`, `TEAMACCEPT`, `TEAMDISPERSE`, `TEAMCREATE`, `TEAMSTEPDOWN`, `GETKOTH`, `JOINKOTH`, `LEAVEKOTH`, `KCNT`, `SENDVOTE`, `KDONE`, `KRT`, `STG`, `int`, `KOK`, `KREADY`, `GETRIVALS`, `RREQ`, `RRSP`, `RLVE`, `RIVOK`, `RIVREADY`, `RIVRT`, `RIVDONE`, `HTJOIN`, `HQOK`, `HTGET32`, `HTGETTREE`, `HTSPECTATE`, `HTQUIT`, `HTINFO`, `HTQREADY`, `HTQD`, `HTQRT`, `HTREADY`, `HTD`, `HTRT`, `TRGETRACERS`, `TRGETTEAMS`, `TRPREREQUEST`, `TRREQUEST`, `TRCOUNTER`, `TRRESPONSE`, `TROK`, `TRIVREADY`, `JOINELECTION`, `ELECTIONINTERVIEWLIST`, `m`, `CLOSEGAME`, `IsMyProcessNameCorrect`, `CheckNittoProcesses`, `CheckNittoProcessesCB`
- This section is corroboration only and does not replace byte-backed evidence.

Unresolved:
- Opcode meanings remain unresolved in this pass.
- Any bytes not represented above remain byte-backed but uninterpreted.

