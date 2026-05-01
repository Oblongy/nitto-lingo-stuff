## Lscr-107 Stack-Faithful Pass

This file is stricter than `Lscr-107.reconstructed.lingo`.

What it preserves:
- exact handler order from `Lscr-107.json`
- exact handler names resolved through `Lnam-100.json`
- exact unresolved body marker from `MovieScript 15 - Initialization Script.ls`
- exact three-line opcode pattern from `MovieScript 15 - Initialization Script.lasm`

Per-handler compiled shape:
- `compiledLen = 5` for all 10 handlers
- `stackHeight = 2` for all 10 handlers
- opcode pattern is `pushcons 1`, `pushcons N`, `unk26`

Operand mapping:
- `prepareMovie -> 2`
- `startMovie -> 3`
- `stopMovie -> 4`
- `resizeWindow -> 5`
- `zoomWindow -> 6`
- `resizeFlashSprite -> 7`
- `setInactive -> 8`
- `sendHeartbeat -> 9`
- `openURL -> 10`
- `clearFB -> 11`

Faithfulness boundary:
- This pass is still not a semantic recovery of `unk26`.
- It is a stricter carrier for the dumped opcode trail, not a guessed decompilation.
