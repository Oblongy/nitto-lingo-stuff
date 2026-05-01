# Lscr Suite Arg And Local Signature Surface

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

## Suite-wide distributions
- argument-count distribution across all `163` handler slots:
  - `0`: `141`
  - `1`: `14`
  - `2`: `2`
  - `3`: `2`
  - `4`: `2`
  - `7`: `2`
- locals-count distribution across all `163` handler slots:
  - `0`: `157`
  - `1`: `4`
  - `2`: `2`

## Per-script signature rows
- `Lscr-101`
  - argument counts: `0:4, 1:7, 2:1, 3:1, 4:1, 7:1`
  - locals counts: `0:12, 1:2, 2:1`
- `Lscr-102`
  - argument counts: `0:1`
  - locals counts: `0:1`
- `Lscr-103`
  - argument counts: `0:10`
  - locals counts: `0:10`
- `Lscr-104`
  - argument counts: `0:75`
  - locals counts: `0:75`
- `Lscr-105`
  - argument counts: `0:1`
  - locals counts: `0:1`
- `Lscr-106`
  - argument counts: `0:30`
  - locals counts: `0:30`
- `Lscr-107`
  - argument counts: `0:10`
  - locals counts: `0:10`
- `Lscr-108`
  - argument counts: `0:4, 1:7, 2:1, 3:1, 4:1, 7:1`
  - locals counts: `0:12, 1:2, 2:1`
- `Lscr-109`
  - argument counts: `0:5`
  - locals counts: `0:5`
- `Lscr-93`
  - argument counts: `0:1`
  - locals counts: `0:1`

## Tightest suite read
- Only `Lscr-101` and `Lscr-108` break the otherwise uniform zero-arg/zero-local profile.
- `Lscr-101` and `Lscr-108` share the exact same argument-count and locals-count distributions in the current JSON surface.
- Every other active script in the suite is entirely `argumentCount = 0` and `localsCount = 0` at the handler-entry metadata layer.
