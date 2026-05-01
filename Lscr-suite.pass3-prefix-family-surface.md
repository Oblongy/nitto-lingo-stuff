# Lscr Suite Prefix And Family Surface

## Sources
- `Lscr-102.json`
- `Lscr-103.json`
- `Lscr-104.json`
- `Lscr-105.json`
- `Lscr-106.json`
- `Lscr-107.json`
- `Lscr-108.json`
- `Lscr-109.json`
- `Lscr-93.json`
- `tmp\lscr101-work\Lscr-101.json`

## Exact-name uniqueness
- nonblank exported handler names in the active suite: `148`
- duplicate nonblank exported handler names across scripts: `0`
- every visible exported handler name currently appears exactly once in the JSON surface

## Exact prefix and family counts
- names starting with `TEAM`: `10`
- names starting with `HT`: `12`
- names starting with `TR`: `8`
- names starting with `RIV`: `4`
- names starting with `RR`: `2`
- names starting with `K`: `5`
- names starting with `runEngine`: `10`
- names starting with `baLingo`: `11`
- names starting with `download`: `8`
- names starting with `load`: `4`
- names starting with `get`: `7`
- names starting with `file`: `3`
- exact name `RaceEngine`: `1`
- names starting with `connect`: `1`
- names starting with `socket`: `1`
- names starting with `sock`: `2`
- names starting with `execute`: `1`
- exact name `ssm`: `1`

## High-surface clusters by script
- `Lscr-104` carries the uppercase room/team/chat/tournament family surface:
  - `TEAM*`, `HT*`, `TR*`, `RIV*`, `RR*`, `K*`
- `Lscr-103` carries the `runEngine*` wrapper family
- `Lscr-108` carries the `baLingo*` family
- `Lscr-106` carries most of the `download*`, `load*`, `get*`, and `file*` file-handler surface
- `Lscr-109` carries the socket/web-call cluster:
  - `connectSocket`
  - `sockConnTimeout`
  - `socketMessageHandler`
  - `executeCall`
  - `ssm`

## Notes
- This pass tracks exact exported name families only.
- It does not rename `int`, `m`, or `ssm`, and it does not merge names that only look semantically related.
