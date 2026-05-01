# Lscr-104 Whole-File Inventory

## Sources
- `Lscr-104.json`
- `reconstructed (1)\Lscr-104\rightful.ls`

## Whole-file counts
- `totalLength`: `32904`
- handler entries in JSON: `75`
- visible `on` blocks in `rightful.ls`: `76`
- visible embedded blocks in `rightful.ls`: `1`
- current combined pass markdown files: `77`
- `rightful.ls` line count: `673`

## JSON handler inventory
- `LOGIN`
- `SENDNIMMESSAGE`
- `UPDATENIMUSER`
- `DELETENIMUSER`
- `BLOCKNIMUSER`
- `UNBLOCKNIMUSER`
- `INQUIRYNIMUSER`
- `ALLOWNIMUSER`
- `NIMOKRESPONSE`
- `DELETENIMINQUIREDUSER`
- `GETNIMINREQUESTS`
- `GETNIMOUTREQUESTS`
- `LISTRACECHATROOMS2`
- `CREATECHATROOM`
- `JOINRACECHAT`
- `LEAVERACECHAT`
- `LISTRACECHATUSERS`
- `SENDRACECHAT`
- `TEAMKICK`
- `TEAMCHANGEROLE`
- `TEAMUPDATEMAXBET`
- `TEAMDEPOSIT`
- `TEAMWITHDRAW`
- `TEAMQUIT`
- `TEAMACCEPT`
- `TEAMDISPERSE`
- `TEAMCREATE`
- `TEAMSTEPDOWN`
- `GETKOTH`
- `JOINKOTH`
- `LEAVEKOTH`
- `KCNT`
- `SENDVOTE`
- `KDONE`
- `KRT`
- `STG`
- `int`
- `KOK`
- `KREADY`
- `GETRIVALS`
- `RREQ`
- `RRSP`
- `RLVE`
- `RIVOK`
- `RIVREADY`
- `RIVRT`
- `RIVDONE`
- `HTJOIN`
- `HQOK`
- `HTGET32`
- `HTGETTREE`
- `HTSPECTATE`
- `HTQUIT`
- `HTINFO`
- `HTQREADY`
- `HTQD`
- `HTQRT`
- `HTREADY`
- `HTD`
- `HTRT`
- `TRGETRACERS`
- `TRGETTEAMS`
- `TRPREREQUEST`
- `TRREQUEST`
- `TRCOUNTER`
- `TRRESPONSE`
- `TROK`
- `TRIVREADY`
- `JOINELECTION`
- `ELECTIONINTERVIEWLIST`
- `m`
- `CLOSEGAME`
- `IsMyProcessNameCorrect`
- `CheckNittoProcesses`
- `CheckNittoProcessesCB`

## Visible `on` blocks
- named `on` blocks from JSON: `75`
- additional embedded block: `__embedded_lscr104_block75`

## Prefix counts from visible handler names
- names starting with `TEAM`: `10`
- names starting with `HT`: `12`
- names starting with `TR`: `8`
- names starting with `RIV`: `4`
- names starting with `RR`: `2`
- names starting with `K`: `5`

## Coverage status
- Whole-file inventory coverage is present at the reconstructed-source level.
- The script surface is broad but not blocked: `75` named handlers plus `1` visible embedded block are exposed in the current artifacts.
- This pass inventories the entire visible handler surface without renaming or collapsing any exported handler names.
