# Lscr Suite Blocker Matrix

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
- `reconstructed (1)\Lscr-101\`
- `reconstructed (1)\Lscr-108\rightful.ls`

## Null-dispatch surface
- `Lscr-101`: `15` handler entries with both `dispatchBlockOffset = null` and `dispatchBlockLength = null`
- `Lscr-108`: `15` handler entries with both `dispatchBlockOffset = null` and `dispatchBlockLength = null`
- `Lscr-102`: `0`
- `Lscr-103`: `0`
- `Lscr-104`: `0`
- `Lscr-105`: `0`
- `Lscr-106`: `0`
- `Lscr-107`: `0`
- `Lscr-109`: `0`
- `Lscr-93`: `0`

## Null-compiled-length surface
- `Lscr-101`: `15` handler entries with `compiledLen = null`
- `Lscr-108`: `0`
- `Lscr-102`: `0`
- `Lscr-103`: `0`
- `Lscr-104`: `0`
- `Lscr-105`: `0`
- `Lscr-106`: `0`
- `Lscr-107`: `0`
- `Lscr-109`: `0`
- `Lscr-93`: `0`

## Reconstructed-surface blockers
- `Lscr-101`
  - reconstructed directory is present but empty in the current artifact set
  - no `rightful.ls`
  - `15` blank handler-name slots
  - `15` null dispatch pairs
  - `15` null compiled lengths
- `Lscr-108`
  - exported handler names are present
  - `15` null dispatch pairs remain
  - current `rightful.ls` is an appendix shell only
  - visible appendix reports `blocks=0 actions=0 branches=0 methodCalls=0`
  - visible `on` blocks in current `rightful.ls`: `0`

## Non-blocked scripts
- `Lscr-102`
- `Lscr-103`
- `Lscr-104`
- `Lscr-105`
- `Lscr-106`
- `Lscr-107`
- `Lscr-109`
- `Lscr-93`

## Tightest suite read
- `Lscr-101` is the only active script blocked at all three layers at once:
  - no visible names
  - no dispatch surface
  - no compiled-length surface
- `Lscr-108` is a narrower blocker:
  - names and compiled lengths survive
  - dispatch surface and executable reconstructed surface do not
