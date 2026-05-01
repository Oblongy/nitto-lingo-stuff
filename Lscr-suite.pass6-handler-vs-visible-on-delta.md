# Lscr Suite Handler Vs Visible On Delta

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

## Per-script delta rows
- `Lscr-101`: JSON handlers `15`, visible `on` blocks `MISSING`, embedded `MISSING`, delta `MISSING`
- `Lscr-102`: JSON handlers `1`, visible `on` blocks `22`, embedded `0`, delta `+21`
- `Lscr-103`: JSON handlers `10`, visible `on` blocks `11`, embedded `1`, delta `+1`
- `Lscr-104`: JSON handlers `75`, visible `on` blocks `76`, embedded `1`, delta `+1`
- `Lscr-105`: JSON handlers `1`, visible `on` blocks `2`, embedded `1`, delta `+1`
- `Lscr-106`: JSON handlers `30`, visible `on` blocks `31`, embedded `1`, delta `+1`
- `Lscr-107`: JSON handlers `10`, visible `on` blocks `11`, embedded `1`, delta `+1`
- `Lscr-108`: JSON handlers `15`, visible `on` blocks `0`, embedded `0`, delta `-15`
- `Lscr-109`: JSON handlers `5`, visible `on` blocks `6`, embedded `1`, delta `+1`
- `Lscr-93`: JSON handlers `1`, visible `on` blocks `2`, embedded `1`, delta `+1`

## Named-vs-embedded split where `rightful.ls` exists
- `Lscr-102`: named visible `on` blocks `22`, embedded `0`
- `Lscr-103`: named visible `on` blocks `10`, embedded `1`
- `Lscr-104`: named visible `on` blocks `75`, embedded `1`
- `Lscr-105`: named visible `on` blocks `1`, embedded `1`
- `Lscr-106`: named visible `on` blocks `30`, embedded `1`
- `Lscr-107`: named visible `on` blocks `10`, embedded `1`
- `Lscr-108`: named visible `on` blocks `0`, embedded `0`
- `Lscr-109`: named visible `on` blocks `5`, embedded `1`
- `Lscr-93`: named visible `on` blocks `1`, embedded `1`

## Tightest suite read
- `Lscr-103`, `Lscr-104`, `Lscr-105`, `Lscr-106`, `Lscr-107`, `Lscr-109`, and `Lscr-93` all follow the same visible pattern:
  - named visible `on` blocks exactly match JSON handler count
  - one additional embedded block produces the `+1` delta
- `Lscr-102` is the only positive outlier with a large `+21` delta and no embedded block.
- `Lscr-108` is the only negative outlier with exported handler names but zero visible `on` blocks.
