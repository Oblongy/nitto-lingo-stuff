## Lscr-107 Pass 1

Sources used:
- `C:\Users\Dilldo\Music\Library\1320L\Lnam-100.json`
- `C:\Users\Dilldo\Music\Library\1320L\LSCR_CHUNK_HANDLER_MAPPING.md`
- `C:\Users\Dilldo\Music\Library\1320L\tmp_lingo_decompile\projectorrays_dump\NittoLegendsBeta_embedded_director\chunks\Lscr-107.json`
- `C:\Users\Dilldo\Music\Library\1320L\tmp_lingo_decompile\projectorrays_dump\NittoLegendsBeta_embedded_director\casts\Internal\MovieScript 15 - Initialization Script.ls`
- `C:\Users\Dilldo\Music\Library\1320L\tmp_lingo_decompile\projectorrays_dump\NittoLegendsBeta_embedded_director\casts\Internal\MovieScript 15 - Initialization Script.lasm`

Resolved chunk mapping:
- `Lscr-107.json`
- `scriptNumber = 7`
- `handlersCount = 10`
- exact dumped script = `MovieScript 15 - Initialization Script.ls`

Resolved handler order:
1. `prepareMovie`
2. `startMovie`
3. `stopMovie`
4. `resizeWindow`
5. `zoomWindow`
6. `resizeFlashSprite`
7. `setInactive`
8. `sendHeartbeat`
9. `openURL`
10. `clearFB`

Recovered body boundary:
- The dumped `.ls` source proves only `-- unk26` for all 10 handlers.
- The dumped `.lasm` listing proves each handler body is exactly:
  - `[  0] pushcons 1 <VOID>`
  - `[  2] pushcons N <VOID>`
  - `[  4] unk26 -- unk26`
- `N` is `2..11` in handler order.

Artifacts written in this pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.reconstructed.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-107.rebuilt-faithful.js`

Faithfulness boundary:
- The `.lingo` file preserves the exact recovered handler names and unresolved bodies from the dumped `.ls`.
- The `.js` file does not invent runtime semantics for `unk26`; it only carries the recovered handler names, dumped Lingo stub text, and exact opcode trail from the dumped `.lasm`.
- No browser, C#, FFDec guesswork, or invented handler logic was used in this pass.
