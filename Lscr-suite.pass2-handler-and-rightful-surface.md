# Lscr Suite Handler And Rightful Surface

## Sources
- `tmp\lscr101-work\Lscr-101.json`
- `Lscr-102.json`
- `Lscr-103.json`
- `Lscr-104.json`
- `Lscr-105.json`
- `Lscr-106.json`
- `Lscr-107.json`
- `Lscr-108.json`
- `Lscr-109.json`
- `Lscr-93.json`
- `reconstructed (1)\Lscr-102\rightful.ls`
- `reconstructed (1)\Lscr-103\rightful.ls`
- `reconstructed (1)\Lscr-104\rightful.ls`
- `reconstructed (1)\Lscr-105\rightful.ls`
- `reconstructed (1)\Lscr-106\rightful.ls`
- `reconstructed (1)\Lscr-107\rightful.ls`
- `reconstructed (1)\Lscr-108\rightful.ls`
- `reconstructed (1)\Lscr-109\rightful.ls`
- `reconstructed (1)\Lscr-93\rightful.ls`

## Suite totals
- active scripts: `10`
- aggregate `totalLength`: `185910`
- aggregate handler slots from JSON: `163`
- nonblank exported handler names: `148`
- blank handler-name slots: `15`
- scripts with `rightful.ls`: `9`
- visible `on` blocks across all present `rightful.ls` files: `161`
- visible embedded `on __embedded_*` blocks across all present `rightful.ls` files: `7`
- aggregate `rightful.ls` line count across present files: `5997`

## Per-script surface
- `Lscr-101`: `15` handler slots, `0` nonblank handler names, no `rightful.ls`
- `Lscr-102`: `1` handler slot, `1` nonblank handler name, `22` visible `on` blocks, `0` embedded blocks
- `Lscr-103`: `10` handler slots, `10` nonblank handler names, `11` visible `on` blocks, `1` embedded block
- `Lscr-104`: `75` handler slots, `75` nonblank handler names, `76` visible `on` blocks, `1` embedded block
- `Lscr-105`: `1` handler slot, `1` nonblank handler name, `2` visible `on` blocks, `1` embedded block
- `Lscr-106`: `30` handler slots, `30` nonblank handler names, `31` visible `on` blocks, `1` embedded block
- `Lscr-107`: `10` handler slots, `10` nonblank handler names, `11` visible `on` blocks, `1` embedded block
- `Lscr-108`: `15` handler slots, `15` nonblank handler names, `0` visible `on` blocks, `0` embedded blocks
- `Lscr-109`: `5` handler slots, `5` nonblank handler names, `6` visible `on` blocks, `1` embedded block
- `Lscr-93`: `1` handler slot, `1` nonblank handler name, `2` visible `on` blocks, `1` embedded block

## Tight observations
- All `15` blank exported handler-name slots in the active suite are confined to `Lscr-101`.
- `Lscr-108` is the only script with nonblank exported handler names but zero visible `on` blocks in its current `rightful.ls`.
- `Lscr-102` is the only script with one JSON handler slot but a wide helper surface of `22` visible `on` blocks in reconstructed source.
- `Lscr-104` is the largest visible handler surface in the suite by both JSON handler count (`75`) and visible `on` count (`76`).
