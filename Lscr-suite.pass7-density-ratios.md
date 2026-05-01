# Lscr Suite Density Ratios

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

## Bytes per JSON handler slot
- `Lscr-101`: `1916 / 15 = 127.73`
- `Lscr-102`: `48988 / 1 = 48988`
- `Lscr-103`: `5380 / 10 = 538`
- `Lscr-104`: `32904 / 75 = 438.72`
- `Lscr-105`: `21408 / 1 = 21408`
- `Lscr-106`: `23588 / 30 = 786.27`
- `Lscr-107`: `5854 / 10 = 585.4`
- `Lscr-108`: `1928 / 15 = 128.53`
- `Lscr-109`: `9740 / 5 = 1948`
- `Lscr-93`: `34204 / 1 = 34204`

## Relative shape observations
- smallest bytes-per-handler surface:
  - `Lscr-101`: `127.73`
  - `Lscr-108`: `128.53`
- largest bytes-per-handler surface:
  - `Lscr-102`: `48988`
  - `Lscr-93`: `34204`
  - `Lscr-105`: `21408`
- highest multi-handler density among non-blocked scripts:
  - `Lscr-104`: `438.72`
- broadest file-handler body among multi-handler scripts:
  - `Lscr-106`: `786.27`

## Tightest suite read
- `Lscr-101` and `Lscr-108` cluster together not just by blocker shape, but also by nearly identical bytes-per-handler density.
- `Lscr-102`, `Lscr-105`, and `Lscr-93` are the extreme one-handler bodies in the active suite.
- `Lscr-104` is the widest named-handler surface while still maintaining the tightest bytes-per-handler ratio among the non-blocked multi-handler scripts.
