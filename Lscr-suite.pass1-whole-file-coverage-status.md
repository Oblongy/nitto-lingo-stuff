# Lscr Suite Whole-File Coverage Status

## Sources
- `tmp\lscr101-work\Lscr-101.json`
- `tmp\lscr101-work\Lnam-100.json`
- `Lscr-102.json`
- `Lscr-103.json`
- `Lscr-104.json`
- `Lscr-105.json`
- `Lscr-106.json`
- `Lscr-107.json`
- `Lscr-108.json`
- `Lscr-109.json`
- `Lscr-93.json`
- `reconstructed\Lscr-101\rightful.ls`
- `reconstructed (1)\Lscr-102\rightful.ls`
- `reconstructed (1)\Lscr-103\rightful.ls`
- `reconstructed (1)\Lscr-104\rightful.ls`
- `reconstructed (1)\Lscr-105\rightful.ls`
- `reconstructed (1)\Lscr-106\rightful.ls`
- `reconstructed (1)\Lscr-107\rightful.ls`
- `reconstructed (1)\Lscr-108\rightful.ls`
- `reconstructed (1)\Lscr-109\rightful.ls`
- `reconstructed (1)\Lscr-93\rightful.ls`

## Active script set
- `Lscr-101`
- `Lscr-102`
- `Lscr-103`
- `Lscr-104`
- `Lscr-105`
- `Lscr-106`
- `Lscr-107`
- `Lscr-108`
- `Lscr-109`
- `Lscr-93`

## Coverage summary
- `Lscr-101`: whole-file inventory-covered from `tmp\lscr101-work\Lscr-101.json`, `tmp\lscr101-work\Lnam-100.json`, and `reconstructed\Lscr-101\rightful.ls`.
- `Lscr-102`: whole-file inventory-covered from `Lscr-102.json` plus `reconstructed (1)\Lscr-102\rightful.ls`.
- `Lscr-103`: whole-file inventory-covered from `Lscr-103.json` plus `reconstructed (1)\Lscr-103\rightful.ls`.
- `Lscr-104`: whole-file inventory-covered from `Lscr-104.json` plus `reconstructed (1)\Lscr-104\rightful.ls`.
- `Lscr-105`: whole-file inventory-covered from `Lscr-105.json` plus `reconstructed (1)\Lscr-105\rightful.ls`.
- `Lscr-106`: whole-file inventory-covered from `Lscr-106.json` plus `reconstructed (1)\Lscr-106\rightful.ls`.
- `Lscr-107`: whole-file inventory-covered from `Lscr-107.json` plus `reconstructed (1)\Lscr-107\rightful.ls`.
- `Lscr-108`: metadata-plus-appendix coverage only; `Lscr-108.json` exposes handler names and compiled lengths, but `reconstructed (1)\Lscr-108\rightful.ls` is an appendix shell with `blocks=0 actions=0 branches=0`.
- `Lscr-109`: whole-file inventory-covered from `Lscr-109.json` plus `reconstructed (1)\Lscr-109\rightful.ls`.
- `Lscr-93`: whole-file inventory-covered; existing whole-file passes already extend through `pass28`, and this suite pass treats it as complete at the inventory layer.

## Coverage split
- fully inventory-covered at reconstructed-source level: `Lscr-101`, `Lscr-102`, `Lscr-103`, `Lscr-104`, `Lscr-105`, `Lscr-106`, `Lscr-107`, `Lscr-109`, `Lscr-93`
- blocker-limited at metadata or appendix level: `Lscr-108`

## Notes
- This pass marks whole-file inventory coverage, not full semantic recovery.
- `Lscr-101` uses `reconstructed\Lscr-101\rightful.ls` because the parallel `reconstructed (1)\Lscr-101\` tree has no matching `rightful.ls` in the current workspace.
- `Lscr-108` remains blocked by exported-surface limits in the current artifacts.
- `Lscr-93` already had whole-file coverage before this suite pass; the new status here closes the suite-level inventory map rather than replacing the earlier detailed passes.
