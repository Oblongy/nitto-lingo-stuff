# H2H Wire Alignment: `Lscr-104` -> `Lscr-105`

Scope:

- Primary outbound truth: `reconstructed (1)\Lscr-104\rightful.ls`
- Primary inbound truth: `reconstructed (1)\Lscr-105\rightful.ls`
- Verbatim Lingo excerpt for this narrowed path: `docs\h2h-classic-rival-wire.ls`
- This document stays on the classic rival / H2H wire path only.
- `Lscr-102` / `Lscr-103` are intentionally excluded here unless the wire path crosses into the race engine.

## Root rule

Align by the actual emitted AC token in `Lscr-104`, not by the handler name.

Reason:

- Several `Lscr-104` handler names do not match the AC token they send.
- The live wire path has to be compared against `Lscr-105` by `ac`, because `Lscr-105` dispatches by `param_getAProp.getAProp("ac")`.

## Classic rival wire map

| `Lscr-104` handler | `Lscr-104` evidence | Emitted AC token | `Lscr-105` inbound AC | `Lscr-105` callback | Alignment |
|---|---|---|---|---|---|
| `GETRIVALS` | `rightful.ls:289-294` | `KR` | none found in classic rival window | none found | unpaired in `Lscr-105` rival window |
| `RREQ` | `rightful.ls:296-301` | `GR` | none found in classic rival window | none found | unpaired in `Lscr-105` rival window |
| `RRSP` | `rightful.ls:303-308` | `RRQ` | `RRQ` | `chatRIVRequestCB(...)` | aligned by AC, mismatched by handler name |
| `RLVE` | `rightful.ls:310-315` | `RRS` | `RRS` | `chatRIVResponseCB(s, i)` | aligned by AC, mismatched by handler name |
| `RIVOK` | `rightful.ls:317-322` | `RL` | `RL` | `chatRIVLeaveCB(s)` | aligned by AC, mismatched by handler name |
| `RIVREADY` | `rightful.ls:324-330` | `RO` | `RO` | `raceRIVOKCB(t)` | aligned by AC, mismatched by handler name |
| `RIVRT` | `rightful.ls:332-337` | `RR` | `RR` | `raceRIVReadyCB(...)` | aligned by AC, mismatched by handler name |
| `RIVDONE` | `rightful.ls:339-345` | `RIVRT` | `RIVRT` | `raceRIVRTCB(r, rt, i)` | aligned by AC, mismatched by handler name |

## `Lscr-105` classic rival inbound window

These are the classic rival AC values present in the dispatch window:

| Inbound AC | `Lscr-105` evidence | Callback |
|---|---|---|
| `LR` | `rightful.ls:596-599` | `chatRIVListCB(d)` |
| `RRQ` | `rightful.ls:600-609` | `chatRIVRequestCB(...)` |
| `RCLG` | `rightful.ls:610-613` | `chatRIVChallengeCB(d)` |
| `RRS` | `rightful.ls:614-617` | `chatRIVResponseCB(s, i)` |
| `RDNY` | `rightful.ls:618-621` | `chatRIVDeniedCB(r)` |
| `RN` | `rightful.ls:622-625` | `chatRIVJoinCB(d)` |
| `RRA` | `rightful.ls:626-629` | `chatRIVNRaceCB(d)` |
| `RIVTOUT` | `rightful.ls:630-633` | `raceRIVTimeoutCB(s)` |
| `RL` | `rightful.ls:634-637` | `chatRIVLeaveCB(s)` |
| `RLFT` | `rightful.ls:638-641` | `chatRIVLeftCB(d)` |
| `RIVRDY` | `rightful.ls:642-645` | `raceRIVReadyOpponentCB()` |
| `RR` | `rightful.ls:646-657` | `raceRIVReadyCB(...)` |
| `RO` | `rightful.ls:658-661` | `raceRIVOKCB(t)` |
| `RW` | `rightful.ls:662-665` | `raceRIVResultCB(d)` |
| `RD` | `rightful.ls:666-669` | `raceRIVFinishCB(d)` |
| `RIVRTO` | `rightful.ls:670-673` | `raceRIVRTOpponentCB(rt)` |
| `RIVRT` | `rightful.ls:674-676` | `raceRIVRTCB(r, rt, i)` |

## Exact practical takeaways

1. `Lscr-104` names are not safe wire-truth labels for classic rival H2H.
2. The strongest sender/receiver alignment is:
   `RRQ <-> RRSP`, `RRS <-> RLVE`, `RL <-> RIVOK`, `RO <-> RIVREADY`, `RR <-> RIVRT`, `RIVRT <-> RIVDONE`.
3. `RCLG`, `RN`, `RRA`, `RIVRDY`, `RW`, `RD`, and `RIVRTO` exist in `Lscr-105` inbound dispatch, but no matching classic rival sender was found in the narrowed `Lscr-104` window shown above.
4. `GETRIVALS` and `RREQ` in `Lscr-104` emit `KR` and `GR` respectively, and those AC tokens do not appear in the `Lscr-105` classic rival inbound window.

## Working boundary for live alignment

For live H2H wire work:

- Trust `Lscr-105` for inbound `ac` meaning and callback destination.
- Trust `Lscr-104` for outbound packet token and field order.
- Do not treat `Lscr-104` handler names as authoritative packet names when the emitted token disagrees.
- Only bring in `Lscr-102` / `Lscr-103` after the wire path reaches `RO`, `RR`, `RIVRT`, race start timing, or other engine/runtime callbacks.
