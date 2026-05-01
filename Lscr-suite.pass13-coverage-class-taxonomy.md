# Lscr Suite Coverage Class Taxonomy

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

## Coverage classes

### `no-rightful`
- `Lscr-101`

Definition:
- no `rightful.ls` present

### `named-json-appendix-only`
- `Lscr-108`

Definition:
- nonblank handler names survive in JSON
- dispatch surface is fully null
- current `rightful.ls` exists but has `0` visible `on` blocks

### `helper-expanded-no-embedded`
- `Lscr-102`

Definition:
- nonblank handler names survive in JSON
- dispatch surface is non-null
- visible `on` count is greater than JSON handler count
- visible embedded block count is `0`

### `json-plus-one-embedded`
- `Lscr-103`
- `Lscr-104`
- `Lscr-105`
- `Lscr-106`
- `Lscr-107`
- `Lscr-109`
- `Lscr-93`

Definition:
- nonblank handler names survive in JSON
- dispatch surface is non-null
- visible named `on` count matches JSON handler count
- exactly one embedded `on __embedded_*` block is present

## Tightest suite read
- The active suite now splits cleanly into `4` artifact coverage classes.
- `Lscr-102` is no longer blurred together with the simple `+1 embedded` scripts.
- `Lscr-101` and `Lscr-108` are still the only blocker-side classes.
