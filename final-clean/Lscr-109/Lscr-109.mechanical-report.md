# Mechanical Lingo Reconstruction Report

Inventory pass:
- Deliverable `rightful.ls`: `168` lines, `6` visible `on` blocks.
- Handler scan:
  - `connectSocket` at `rightful.ls:5-10`
  - `sockConnTimeout` at `rightful.ls:12-24`
  - `socketMessageHandler` at `rightful.ls:26-43`
  - `executeCall` at `rightful.ls:45-103`
  - `ssm` at `rightful.ls:105-143`
  - `__embedded_lscr109_block05` at `rightful.ls:145-160`
- Obvious unresolved scan hits: `6`.
  - `rightful.ls:63`, `67`, `70` -> packed `Object` / `ex` / `ex2` trap regions
  - `rightful.ls:141` -> unresolved intermediate temp names in the queue-shape lift
  - `rightful.ls:151`, `158` -> packed trap-marker / tail regions

Raw-evidence pass:
- Raw metadata: `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.json`
  - `scriptNumber = 9`
  - `handlersCount = 5`
  - `totalLength = 9740`
  - JSON handler inventory: `connectSocket`, `sockConnTimeout`, `socketMessageHandler`, `executeCall`, `ssm`
- Raw reconstructed surfaces:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.blocks.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.reconstructed.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.bin-only.reconstructed.lingo`
  - full `pass-block*.md` family for offsets `0`, `140`, `1428`, `2884`, `5908`, and `8436`
- Byte-pattern corroboration:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.pass32-whole-file-inventory.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.pass1-faithful-report.md`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.pass2-extra-block-notes.md`
  - `bin-only.pass1..22` family under `root-artifacts`

Reconstruction pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\evidence\reconstructed\rightful.ls`: `218` lines.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\evidence\reconstructed (1)\rightful.ls`: `213` lines.
- Deliverable `rightful.ls` does not hash-match either reconstruction tree.
- The promoted deliverable is the staged readable body from `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\rightful.ls`, which is more structured than the raw evidence-tree copies while still keeping trap tails explicit.

Readable-Lingo lift pass:
- Recovered Lingo artifact:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-109\rightful.ls`
- `executeCall` now keeps the buffer-scan body as a real `repeat while (gMultiuserInstance > -1)` loop. The raw block-2884 bytes first compute `_global.socketBuffer.indexOf(ld)`, test that value against `-1`, and later close with the backward jump `06 fe be`, so this pass promotes that span from loose jump comments to a structured repeat body without changing the trap-heavy decode inside it.
- The post-connect success path is now one step tighter at the side-effect layer. The raw byte run `3b 00 00 43 36 00 1f 51` is a real `_global.isConnected = 1` property store, and the following `3b 00 20 39 3a 00 00 51` remains a bare recovered `LOGIN()` call rather than an invented `_global.LOGIN()`.
- The disconnect/error branch is also now lifted positively. The `_global.isConnected` property-load guard before the `-2147216214` compare is explicit in the readable artifact, so the `showDisconnectedErrorCB(...)` and `Error: 007-...` bodies now sit under a real `else if _global.isConnected then`.
- The `executeCall` trap tails still remain explicit. I tightened the loop and the connect/error skeleton around them, but I did not invent a cleaner `Object` test or a cleaner packed `Error: 008` tail because the local bytes still stop at the same marker/prefix layer there.

| Block | Handler | Source | Offset | CodeLen | Lines | Unresolved | Names |
|---:|---|---|---:|---:|---:|---:|---:|
| 0 | connectSocket | named handler from metadata | 0 | 20 | 1 | 0 | 0 |
| 1 | sockConnTimeout | named handler from metadata | 140 | 155 | 10 | 0 | 23 |
| 2 | socketMessageHandler | named handler from metadata | 1428 | 205 | 13 | 0 | 23 |
| 3 | executeCall | named handler from metadata | 2884 | 612 | 74 | 0 | 40 |
| 4 | ssm | named handler from metadata | 5908 | 638 | 56 | 0 | 53 |
| 5 | __embedded_lscr109_block05 | embedded block without handler metadata | 8436 | 146 | 14 | 0 | 16 |

JS mirror pass:
- Accepted local mirror:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.rebuilt-faithful.js`
- Additional local corroboration:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-109\root-artifacts\Lscr-109.bin-only.rebuilt.js`

Unresolved:
- The readable-Lingo body still preserves explicit trap comments at `rightful.ls:64`, `68`, `71`, `141`, `151`, and `158`.
- In `executeCall`, the `getNetMessage -- 0x0073` stack-carried name push still remains explicit inside the now-structured repeat body because the local byte stream does not yet prove a cleaner named temporary or a tighter pre-eval call shape there. The surrounding raw block surface still breaks at the same two packed assignment windows:
  - `pass-block2884-table.md` plus `blocks.lingo:72-77` keep the pre-`eval` build at `0x0073..0x0099` as `getNetMessage` + `errorCode = _global.socketBuffer.substr(VOID, gMultiuserInstance)` followed by unresolved `getNetMessage = (? + ))`
  - `pass-block2884-table.md` plus `blocks.lingo:105-106` repeat the same unresolved shape at `0x00F3..0x010D` after the decrypt arm
- The `Object` / trap gates in `executeCall` are still blocker-limited at exact byte windows rather than missing string evidence:
  - `pass-block2884-table.md:47-50` proves ids `14=Object`, `15=ex`, `16=isEnc`, and `17=decrypt`
  - `blocks.lingo:87-100` still reduces the first trap family to `_global.isEnc`, `Object()`, and `if (Object()) { /* else goto @201 */ }` across `0x009C..0x00C8`
  - `blocks.lingo:166-169` still reduces the late `Error: 008` branch to `_global.isConnected`, `Object()`, and `?(?, (id_39 + ex))` across `0x0221..0x0246`
  - because those exact windows still stop at the same packed `Object` test layer, the deliverable keeps the trap tails explicit instead of inventing a cleaner exception predicate
- Block `5` remains embedded and unnamed beyond `__embedded_lscr109_block05`.
- Block `5` is also still blocker-limited at its own trap family. `pass-block8436-table.md:35-44` proves ids `1=isConnected`, `2=isEnc`, `3=gMultiuserInstance`, `4=sendNetMessage`, `5=System`, `6=String`, `7=encrypt`, `8=ld`, `9=Object`, and `10=ex`, but `blocks.lingo:269-273` still opens that hidden block as `_global.isConnected`, `(? && _global.isEnc)`, then a non-decoded jump into the send bodies. The final `Error: 009` path is therefore still preserved only as the literal-backed target call, not as a recovered trap predicate.

Verification:
- Inventory, raw-evidence, reconstruction, readable-Lingo lift, and JS mirror verification were not blocked.
- JS helper files remain outside `final-clean`.
