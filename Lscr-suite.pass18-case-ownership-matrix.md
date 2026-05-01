# Lscr Suite Case Ownership Matrix

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

## Per-script case rows
- `Lscr-101`: uppercase `0`, lowercase `0`, mixed-case `0`
- `Lscr-102`: uppercase `0`, lowercase `0`, mixed-case `1`
- `Lscr-103`: uppercase `0`, lowercase `0`, mixed-case `10`
- `Lscr-104`: uppercase `70`, lowercase `2`, mixed-case `3`
- `Lscr-105`: uppercase `0`, lowercase `0`, mixed-case `1`
- `Lscr-106`: uppercase `0`, lowercase `1`, mixed-case `29`
- `Lscr-107`: uppercase `0`, lowercase `0`, mixed-case `10`
- `Lscr-108`: uppercase `0`, lowercase `0`, mixed-case `15`
- `Lscr-109`: uppercase `0`, lowercase `1`, mixed-case `4`
- `Lscr-93`: uppercase `0`, lowercase `0`, mixed-case `1`

## Ownership notes
- all-uppercase surface is entirely concentrated in `Lscr-104`
- lowercase names are split across:
  - `Lscr-104`: `m`, `int`
  - `Lscr-106`: `openfile`
  - `Lscr-109`: `ssm`
- every named script except `Lscr-104` is mixed-case dominant

## Tightest suite read
- `Lscr-104` is the only script that carries any all-uppercase handler names.
- `Lscr-106` and `Lscr-109` each contribute exactly one lowercase outlier.
- The active suite is structurally mixed-case by script count, but uppercase-heavy by total-name volume because of `Lscr-104`.
