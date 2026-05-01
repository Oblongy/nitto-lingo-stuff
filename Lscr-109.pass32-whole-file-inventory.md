# Lscr-109 Whole-File Inventory

## Sources
- `Lscr-109.json`
- `reconstructed (1)\Lscr-109\rightful.ls`

## Whole-file counts
- `totalLength`: `9740`
- handler entries in JSON: `5`
- visible `on` blocks in `rightful.ls`: `6`
- visible embedded blocks in `rightful.ls`: `1`
- current combined pass markdown files: `32`
- `rightful.ls` line count: `221`

## JSON handler inventory
- `connectSocket`
- `sockConnTimeout`
- `socketMessageHandler`
- `executeCall`
- `ssm`

## Visible `on` blocks
- `connectSocket`
- `sockConnTimeout`
- `socketMessageHandler`
- `executeCall`
- `ssm`
- `__embedded_lscr109_block05`

## Coverage status
- Whole-file inventory coverage is present at the reconstructed-source level.
- The visible script surface is small but not flat: `5` named handlers plus `1` embedded block are exposed in the current artifacts.
- This pass inventories the full visible file while leaving the deeper unresolved bytecode regions to the prior `Lscr-109` block and bin-only passes.
