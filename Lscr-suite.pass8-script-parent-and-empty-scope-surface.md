# Lscr Suite Script Number Parent And Empty Scope Surface

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

## Per-script rows
- `Lscr-93`: `scriptNumber = 1`, `parentNumber = -1`, `globals = []`, `properties = []`
- `Lscr-102`: `scriptNumber = 2`, `parentNumber = -1`, `globals = []`, `properties = []`
- `Lscr-103`: `scriptNumber = 3`, `parentNumber = -1`, `globals = []`, `properties = []`
- `Lscr-104`: `scriptNumber = 4`, `parentNumber = -1`, `globals = []`, `properties = []`
- `Lscr-105`: `scriptNumber = 5`, `parentNumber = -1`, `globals = []`, `properties = []`
- `Lscr-106`: `scriptNumber = 6`, `parentNumber = -1`, `globals = []`, `properties = []`
- `Lscr-107`: `scriptNumber = 7`, `parentNumber = -1`, `globals = []`, `properties = []`
- `Lscr-101`: `scriptNumber = 8`, `parentNumber = NULL`, `globals = []`, `properties = []`
- `Lscr-108`: `scriptNumber = 8`, `parentNumber = -1`, `globals = []`, `properties = []`
- `Lscr-109`: `scriptNumber = 9`, `parentNumber = -1`, `globals = []`, `properties = []`

## Tightest suite read
- Every active script in the current JSON surface has empty `globals` and empty `properties` arrays.
- `scriptNumber` is otherwise sequential across the active set except for the `8` collision between `Lscr-101` and `Lscr-108`.
- `Lscr-101` is the only active script whose `parentNumber` is `NULL` rather than `-1`.
