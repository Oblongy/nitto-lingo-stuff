# Lscr Suite Blocker Pressure Vs Pass Allocation

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
- root pass markdown files matching `Lscr-*.pass*.md`
- root pass markdown files matching `Lscr-*.bin-only.pass*.md`

## Per-script rows
- `Lscr-101`: blank-name share `100%`, null-dispatch share `100%`, pass per blocked slot `0.03`
- `Lscr-102`: blank-name share `0%`, null-dispatch share `0%`, pass per blocked slot `NA`
- `Lscr-103`: blank-name share `0%`, null-dispatch share `0%`, pass per blocked slot `NA`
- `Lscr-104`: blank-name share `0%`, null-dispatch share `0%`, pass per blocked slot `NA`
- `Lscr-105`: blank-name share `0%`, null-dispatch share `0%`, pass per blocked slot `NA`
- `Lscr-106`: blank-name share `0%`, null-dispatch share `0%`, pass per blocked slot `NA`
- `Lscr-107`: blank-name share `0%`, null-dispatch share `0%`, pass per blocked slot `NA`
- `Lscr-108`: blank-name share `0%`, null-dispatch share `100%`, pass per blocked slot `0.47`
- `Lscr-109`: blank-name share `0%`, null-dispatch share `0%`, pass per blocked slot `NA`
- `Lscr-93`: blank-name share `0%`, null-dispatch share `0%`, pass per blocked slot `NA`

## Tightest suite read
- Only `Lscr-101` and `Lscr-108` still carry any blocker-slot pressure at all in the current suite.
- `Lscr-108` has far more pass allocation per blocked slot than `Lscr-101`.
- `Lscr-101` remains the least-covered blocker surface by current pass allocation.
