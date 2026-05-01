# Lscr Suite CompiledLen Surface

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

## Suite-wide compiled-length distribution
- `5`: `133`
- `11`: `7`
- `13`: `1`
- `15`: `1`
- `17`: `1`
- `23`: `1`
- `40`: `1`
- `44`: `1`
- `68`: `1`
- `143`: `1`

## Per-script rows
- `Lscr-101`: non-null `compiledLen` entries `0`, null `compiledLen` entries `15`
- `Lscr-102`: non-null `1`, null `0`, sum `5`, all visible handler entries at `5`
- `Lscr-103`: non-null `10`, null `0`, sum `50`, all visible handler entries at `5`
- `Lscr-104`: non-null `75`, null `0`, sum `375`, all visible handler entries at `5`
- `Lscr-105`: non-null `1`, null `0`, sum `5`, all visible handler entries at `5`
- `Lscr-106`: non-null `30`, null `0`, sum `150`, all visible handler entries at `5`
- `Lscr-107`: non-null `10`, null `0`, sum `50`, all visible handler entries at `5`
- `Lscr-108`: non-null `15`, null `0`, sum `440`, spread values `11, 13, 15, 17, 23, 40, 44, 68, 143`
- `Lscr-109`: non-null `5`, null `0`, sum `25`, all visible handler entries at `5`
- `Lscr-93`: non-null `1`, null `0`, sum `5`, all visible handler entries at `5`

## Tightest suite read
- `Lscr-101` is the only active script with every `compiledLen` entry null.
- `Lscr-108` is the only active script with a real multi-value `compiledLen` spread.
- Every other active script is flat at `compiledLen = 5` for every handler entry in the current JSON surface.
