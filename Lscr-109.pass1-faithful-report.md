## Lscr-109 Pass 1

Sources used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.json`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Resolved chunk header:
- `scriptNumber = 9`
- `handlersCount = 5`
- `handlersOffset = 92`
- `literalsCount = 7`
- `literalsDataOffset = 408`

Resolved handler order from `Lscr-109.json`:
1. `connectSocket`
2. `sockConnTimeout`
3. `socketMessageHandler`
4. `executeCall`
5. `ssm`

Recovered visible handler bodies:
- Every handler in `Lscr-109.json` has `compiledLen = 5`.
- Every handler bytecode sequence is exactly:
  - `[0] pushcons 1`
  - `[2] pushcons N`
  - `[4] unk26`
- The second `pushcons` operand is:
  - `2` for `connectSocket`
  - `3` for `sockConnTimeout`
  - `4` for `socketMessageHandler`
  - `5` for `executeCall`
  - `6` for `ssm`

Embedded code blocks listed in `Lscr-109.json`:
- block 0: offset `0`, length `140`, header `20 / 15 / 150`
- block 1: offset `140`, length `1288`, header `155 / 0 / 150`
- block 2: offset `1428`, length `1456`, header `205 / 0 / 150`
- block 3: offset `2884`, length `3024`, header `612 / 0 / 150`
- block 4: offset `5908`, length `2528`, header `638 / 0 / 150`
- extra block: offset `8436`, length `892`, header `146 / 0 / 150`

Literal-backed string evidence from `Lscr-109.json`:
- block `0`: `Function`, `errCode`
- block `1`: `tryNo`, `errCode`
- block `2`: `newMessage`, `retVal`, `resultStr`
- block `3`: `action`, `data`, `isBuyPartUgg`, `xtra_md5`, `tempArray`
- block `4`: `QBQV`

Artifacts written in this pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.reconstructed.lingo`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.rebuilt-faithful.js`

Faithfulness boundary:
- The reconstructed handler text preserves only names that appear verbatim in `Lscr-109.json`.
- `unk26` remains unresolved in every visible handler.
- No hidden-block semantics are claimed in this pass.
