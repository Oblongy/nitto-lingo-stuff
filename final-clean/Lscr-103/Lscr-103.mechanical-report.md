# Mechanical Lingo Reconstruction Report

Inventory pass:
- Deliverable `rightful.ls`: `136` lines, `11` visible `on` blocks.
- Handler scan:
  - `runEngineStart`, `runEngineStop`, `runEngine`, `runEngineGaugeInit`, `runEngineGearUp`, `runEngineGearDown`, `runEngineSetBrake`, `runEngineSetClutch`, `runEngineSetNOS`, `runEngineDyno`, `__embedded_lscr103_block10`
- Obvious unresolved scan hits: `0`.

Raw-evidence pass:
- Raw metadata: `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-103\root-artifacts\Lscr-103.json`
  - `scriptNumber = 3`
  - `handlersCount = 10`
  - `totalLength = 5380`
- Raw reconstructed surfaces:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-103\root-artifacts\Lscr-103.blocks.lingo`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-103\root-artifacts\Lscr-103.reconstructed.lingo`
  - full `pass-block*.md` family for offsets `0`, `140`, `364`, `604`, `840`, `1356`, `1592`, `1852`, `2124`, `2388`, and `2788`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-103\root-artifacts\Lscr-103.pass12-whole-file-inventory.md`

Reconstruction pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-103\evidence\reconstructed\rightful.ls`: `125` lines.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-103\evidence\reconstructed (1)\rightful.ls`: `127` lines.
- The staged `clean\Lscr-103\rightful.ls` hash-matches `evidence\reconstructed (1)\rightful.ls`.
- `final-clean\Lscr-103\rightful.ls` now carries several extra byte-backed cleanup passes beyond the staged body:
  - block `2388`: `_global.objRace.isNos = param__global` at `0x001D`
  - block `2788`: `_global.objRace.boostSetting = param__global` at `0x0035` and `_global.objRace.chipSetting = param_objRace` at `0x0064`
  - block `2788`: the top `0x0018/0x0028` guard pair is now lifted as one combined bounds check, `if ((param__global >= FALSE) and (param__global <= _global.objRace.maxPsi)) then`, around the shared boost-setting body
  - block `2788`: the `0x0057/0x0064` compare-and-skip pair is now lifted as a real `if (param_objRace <= -5) then ... end if` around the `chipSetting` store
  - block `2788`: `_global = Array()` at `0x006F`, `objRace = Array()` at `0x007A`, `maxPsi = Array()` at `0x0085`, and `boostSetting = Array()` at `0x0090`
  - block `2788`: `initBoost = 17` at `0x00A8`
  - block `2788`: `initBoost = 17` at `0x00A8`, plus the positive `if (initBoost < _global.objRace.tqArray.length) then` body guard at `0x00BB`
  - block `2788`: `if ((initBoost * 100) < _global.objRace.revLimiter) then` at `0x00D0`
  - block `2788`: `_global.objRace.rpm = (initBoost * 100)` at `0x00E4`
  - block `2788`: dropped the standalone `_global.objRace -- 0x00E7` residue because the surrounding bytes already lift cleanly to `_global.objRace.getTorque()` and `_global.objRace.calculateExtraHpi()`
  - block `2788`: the `id_5` RHS now keeps the raw `blocks.lingo` sum-chain shape at `0x0137..0x0154`, but the `op_83` immediate is now tightened to the fixed-point constant `0.7512`
  - block `2788`: unresolved local `id_5` is now preserved explicitly as the store target at `0x0154` and as the `_global.push(id_5)` argument at `0x0165`
  - block `2788`: the `0x00D0/0x00D4` jump pair is now lifted as a real `if ((initBoost * 100) < _global.objRace.revLimiter) then ... end if`
  - block `2788`: the `0x01B4/0x01C4` jump pair is now lifted as a real `if ... then boostSetting.push(FALSE) else boostSetting.push(TRUE) end if`
  - named wrapper handlers now preserve a tighter raw-prelude split instead of generic `branch` markers: each prelude begins with the proved receiver bytes `3b 00 00 35 00 01` (`_global.objRace`), and only the following skip bytes remain unresolved: `07 00 14` for blocks `604`, `1852`, and `2124`, `07 00 11` for blocks `1356` and `1592`, and `07 00 39` for block `840`

Readable-Lingo lift pass:
- Recovered Lingo artifact:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-103\rightful.ls`
- Inline offset comments in `final-clean\Lscr-103\rightful.ls` still preserve the inherited staged readable-body labels for continuity. The raw-byte proofs below cite exact byte slices separately whenever those staged labels drift from the instruction-region positions in `Lscr-103.bin`.
- Store-proof anchors:
  - `Lscr-103.json` / `pass-block2388-table.md` record block `2388` as hex `3b 00 00 35 00 01 54 00 00 36 00 02 51`, which matches the split `blocks.lingo` surface `_global.objRace` + `isNos = param__global`; this pass lifts that site as `_global.objRace.isNos = param__global`.
  - The raw `Lscr-103.bin` slice for block `2788` begins `... 3b 00 00 35 00 01 35 00 02 ...`, the same receiver-plus-get pattern already surfaced in `blocks.lingo` as `_global.objRace.maxPsi`, and later contains `... 3b 00 00 35 00 01 54 00 00 36 00 03 51 ...` plus `... 3b 00 00 35 00 01 54 00 01 36 00 06 51 ...`; this pass treats those as the matching store form on the same `_global.objRace` receiver.
  - The top guard pair at `0x0018` and `0x0028` now lifts one step deeper. The raw `blocks.lingo` surface explicitly starts with `false`, `param__global`, `// goto @54`, then `_global.objRace.maxPsi`, `param__global`, `// goto @54`, followed by the shared `_global.objRace` / `boostSetting = param__global` / `initBoost()()` body. The two raw branches both skip to the same post-body target, so the readable lift can collapse them into one combined bounds check around the shared body: `if ((param__global >= FALSE) and (param__global <= _global.objRace.maxPsi)) then ... end if`. This also corrects the staged constant from `VOID` to the byte-backed `FALSE`.
  - The `chipSetting` write now gets the same branch-shape cleanup: after the marker region, the raw bytes move through `58 00 05 15 07 00 10 ... 54 00 01 36 00 06 51 ...`, which is the compare-and-skip form directly preceding the proven `_global.objRace.chipSetting = param_objRace` store. This pass preserves the existing staged `param_objRace <= -5` condition reading, but now wraps the store in a real `if` body instead of leaving it as a flat `if not ... jump` line.
  - The named wrapper blocks also tighten one step further at the prelude layer. Their raw starts are `3b 00 00 35 00 01 07 00 14` for blocks `604`, `1852`, and `2124`, `3b 00 00 35 00 01 07 00 11` for blocks `1356` and `1592`, and `3b 00 00 35 00 01 07 00 39` for block `840`. The first six bytes are the same `_global.objRace` receiver load already surfaced by `blocks.lingo`; only the trailing `07 00 xx` skip remains unresolved, so `final-clean\Lscr-103\rightful.ls` now records the proved receiver and leaves only that skip explicit.
  - The staged readable-body line labeled `0x00A8` is now corrected from the weaker `reconstructed (1)` reading: the raw setup bytes contain `58 00 11 57 00 04 51`, and nearby block `2788` uses the same `58` opcode form for literal constants such as `5` and `100`, so this site is a byte-backed `initBoost = 17`, not `initBoost = floor`.
  - The outer pre-test remains a positive body guard, not a fully normalized loop header. Those same raw setup bytes `58 00 11 57 00 04 51` set local slot `4 = initBoost` to `17`, and the following compare bytes `56 00 04 3b 00 00 35 00 01 35 00 0a 35 00 0b 14 07 01 1e ...` prove the guard `initBoost < _global.objRace.tqArray.length`. A prior pass over-read the raw tail `64 00 04 51 06 fe d5` as a proven `repeat step` form; this pass corrects that and leaves the tail explicit again because the raw `blocks.lingo` surface still marks that region as unresolved `op_64` / `op_04` / `op_d5`.
  - The rev-limiter compare immediately before the `rpm` store is now cleaned up at the receiver/name layer: `blocks.lingo` already surfaces the comparison operator as `>=`, and the local bytes `... 3b 00 00 35 00 01 35 00 0c 16 07 00 06 ...` prove the compared property chain is `_global.objRace.revLimiter`, not the staged pseudo-receiver `1.5104.objRace.revLimiter`.
  - The staged readable-body conditional labeled `0x00D0` is now structured positively in `rightful.ls`: the `if-not` plus unconditional-jump pair means the body runs only when `((initBoost * 100) >= _global.objRace.revLimiter)` is false, so the readable lift is `if ((initBoost * 100) < _global.objRace.revLimiter) then ... end if`.
  - The staged readable-body `rpm` line labeled `0x00E4` is now lifted as a real `_global.objRace` side effect: the raw byte run contains `... 3b 00 00 35 00 01 56 00 04 58 00 64 1d 36 00 0d 51 ...`, which matches the earlier proven receiver-plus-property-store form and uses recovered name id `13 = rpm`.
  - The standalone staged `_global.objRace` residue labeled `0x00E7` is no longer kept as executable source. The following byte runs `... 3b 00 00 35 00 01 35 00 0e 39 3a 00 00 51 ...` and `... 3b 00 00 35 00 01 35 00 0f 39 3a 00 00 51 ...` already decode as the full `_global.objRace.getTorque()` and `_global.objRace.calculateExtraHpi()` calls, so preserving a separate receiver-only line there was weaker than the byte-backed lift.
  - The `id_5` assignment is now tightened at the constant layer while narrowing the unresolved span. `blocks.lingo` still spells the sum chain as `Math.floor()(... compressionPowerDelta ...)`, but the raw bytes at this site are `... 3b 00 10 35 00 11 39 ... 35 00 17 1b 83 1d 58 00 64 1d 3a 00 01 58 00 64 1e 57 00 05 51 ...`. Local `Lscr-102.pass12-op83-immediates.md` proves that `op_83` immediates decode as fixed-point `/10000` constants, making `83 1D 58` a byte-backed `0.7512` constant here. The readable deliverable therefore now treats the trailing `/ 100` plus `57 00 05 51` local-slot-`5` store as proven; the only unresolved piece left inside that lifted line is the single unary `3F` byte immediately after the `posTq` name load.
  - The staged readable-body store/push pair labeled `0x0154` / `0x0165` is now tightened to the explicit unresolved local name used by the raw block surfaces: the local bytes end `... 57 00 05 51 56 00 00 35 00 18 39 56 00 05 3a 00 01 51 ...`, which proves a completed store to local slot `5` followed immediately by `_global.push(id_5)`. This pass preserves that name exactly as `id_5` instead of the staged `-5` pseudo-target, and it also means the weaker `blocks.lingo` standalone `?` between those two lines is not kept as executable source because no intervening byte-backed statement exists there.
  - From the `id_5` store onward, the inherited staged inline labels drift by a consistent `+0x14` from the raw instruction-region positions. The raw local-slot store begins at `0x0140`, the `_global.push(id_5)` call closes at raw `0x0151`, `objRace.push(_global.objRace.airFlowLimit)` closes at raw `0x0165`, `maxPsi.push(_global.objRace.airFuelMeter)` closes at raw `0x0179`, the `FALSE` arm closes at raw `0x01AF`, the `TRUE` arm closes at raw `0x01BE`, and the unresolved tail begins at raw `0x01BF`; the staged inline comments keep the later `0x0154` / `0x0165` / `0x0179` / `0x018D` / `0x01C3` / `0x01D2` / `0x01D3` labels only for continuity with the inherited readable body.
  - The branch pair at `0x01C3` / `0x01D2` is now structured as a real `if / else`: the local byte slice contains `... 56 00 03 35 00 18 39 3e 3a 00 01 51 ...` for the first `boostSetting.push(...)` arm and `... 56 00 03 35 00 18 39 3f 3a 00 01 51 ...` for the second, with the `0x01B4` conditional and `06 00 0f` skip proving the fallthrough/else shape. This also means the weaker `blocks.lingo` `// [0x01b2] op_0f` plus `?(!boostSetting.push())` surface is not kept as executable source: it is a lower-fidelity rendering of the unconditional jump between the two proven branch arms, not a third standalone statement.
  - The callback chain is still cleanly byte-backed even though the tail packing before it is not. The raw bytes `64 00 04 51 06 fe d5 3b 00 1e 39 3d 00 1f 3a 00 01 35 00 20 39 ... 3a 00 04 51 23 00 00 00 ...` prove an exact adjacency and three tighter internal seams: the unresolved three-byte backward-jump slice ends at raw `0x01C5`, the callback chain starts at the very next byte, raw `0x01C6`, and that first callback-start span `3b 00 1e 39 3d 00 1f 3a 00 01` is already the resolved receiver setup for `sprite(flashSP)`. That receiver setup closes at raw `0x01CF`, and the first callback-argument load begins immediately after at raw `0x01D0` with `35 00 20 39`. The final four-argument call close ends at raw `0x020B`, and the very next bytes at raw `0x020C` begin block trailer data (`23 00 00 00 ...`), so no spacer opcode or additional proven executable line sits either before, within, or after the callback body.
  - The same raw window also resolves the remaining fake standalone surfaces from `blocks.lingo` in exact-offset terms. The isolated `?` immediately after `// [0x01c1] op_04` is not kept as executable source because the raw bytes from `0x01C3..0x01C5` are already fully consumed by the unresolved backward-jump slice `06 fe d5`; there is no separate byte-backed statement boundary there. Likewise, the trailing `?(?, ?, ?, ?(flashSP).garageDynoRunCB()(,)(,)(,)(,))` blob is not kept as executable source because raw `0x01C6..0x020B` already splits into the resolved `sprite(flashSP)` receiver setup, callback-argument loads, and final call close, followed immediately by non-code trailer bytes at `0x020C`.
  - The inherited staged offsets on the final three lines are now treated as contradictory, not authoritative. The staged `rightful.ls` / `rightful.js` family labels the tail as `repeat step 4 -- 0x01D3`, `jump -299 -- 0x01D7`, and `garageDynoRunCB(...) -- 0x021F`, but the raw byte slice in `Lscr-103.bin` places those sequences earlier in the code region: `64 00 04 51` at raw `0x01BF`, `06 fe d5` at raw `0x01C3`, and the callback chain beginning at raw `0x01C6` with the final `3a 00 04 51` close at raw `0x0208..0x020B`. That first tail slice is now tightened one step further: `64 00 04 51` definitely consumes local slot `4`, and block `2788` names local slot `4` as `initBoost`, so the deliverable now records the tail as an `initBoost`-touching backward-jump region rather than a totally anonymous opcode blob. The loop-control form itself still remains unresolved.

| Block | Handler | Source | Offset | CodeLen | Lines | Unresolved | Names |
|---:|---|---|---:|---:|---:|---:|---:|
| 0 | runEngineStart | named handler from metadata | 0 | 40 | 1 | 0 | 0 |
| 1 | runEngineStop | named handler from metadata | 140 | 14 | 1 | 0 | 3 |
| 2 | runEngine | named handler from metadata | 364 | 14 | 1 | 0 | 3 |
| 3 | runEngineGaugeInit | named handler from metadata | 604 | 26 | 2 | 0 | 3 |
| 4 | runEngineGearUp | named handler from metadata | 840 | 63 | 2 | 0 | 9 |
| 5 | runEngineGearDown | named handler from metadata | 1356 | 23 | 2 | 0 | 3 |
| 6 | runEngineSetBrake | named handler from metadata | 1592 | 23 | 2 | 0 | 3 |
| 7 | runEngineSetClutch | named handler from metadata | 1852 | 26 | 2 | 0 | 3 |
| 8 | runEngineSetNOS | named handler from metadata | 2124 | 26 | 2 | 0 | 3 |
| 9 | runEngineDyno | named handler from metadata | 2388 | 13 | 1 | 0 | 3 |
| 10 | __embedded_lscr103_block10 | embedded block without handler metadata | 2788 | 524 | 40 | 0 | 34 |

JS mirror pass:
- No exact same-body JS mirror for the promoted `reconstructed (1)\rightful.ls` body was found locally.
- Closest local mirrors:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-103\rightful.js`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-103\root-artifacts\Lscr-103.rebuilt-faithful.js`

Unresolved:
- The current local block table reports `0` explicit unresolved counts.
- Block `10` remains embedded and unnamed beyond `__embedded_lscr103_block10`; no additional handler name was invented.
- Adjacent JSON literal strings `aryDynoTq`, `aryAirFlow`, `aryAirFuelRatio`, `aryMaxIcon`, and `newTq` are real local evidence in the `runEngineDyno` block family, but no byte-backed local-slot binding ties them directly to block `2788` ids `0`, `1`, `2`, `3`, or `5`. This pass therefore leaves `_global`, `objRace`, `maxPsi`, `boostSetting`, and `id_5` exactly as recovered instead of renaming them speculatively.
- The named wrapper handlers at offsets `604`, `840`, `1356`, `1592`, `1852`, and `2124` still retain unresolved prelude skips before their recovered call bodies. The local pass tables now prove that each prelude starts with a real `_global.objRace` receiver load (`3b 00 00 35 00 01`), but the following `07 00 14`, `07 00 11`, or `07 00 39` bytes still do not prove whether the skip is a guard, dispatcher remnant, or some other call setup, so this pass keeps the recovered calls and marks only that trailing skip explicit instead of inventing a higher-level condition.
- No further `_global.objRace` receiver collapse is proved after the `rpm` lift at `0x00E4`; the `getTorque()` / `calculateExtraHpi()` call chain that follows is now kept as the two full method calls above, and it still does not expose another `36 00 <id> 51` store-form anchor in the local byte slice.
- The packed `Math.floor` RHS at `0x0137..0x0157` remains partially unresolved even after the deeper lift: the sum chain and the `op_83` fixed-point constant `0.7512` are now safer, but the stack-built packing around raw `op_64` / `op_00` still does not justify a cleaner normalized Lingo rewrite or a recovered name beyond local slot `id_5`.
- The outer body shape remains a guard, not a proven normalized `repeat` header. `initBoost = 17` and `initBoost < _global.objRace.tqArray.length` are byte-backed, but the tail bytes immediately before the callback are still marked as unresolved `op_64` / `op_04` / `op_d5` by the raw block surfaces.
- The tail offsets remain provenance-split: inherited staged labels say `0x01D3` / `0x01D7` / `0x021F`, while the raw byte slice places the unresolved tail packing and callback chain earlier, at raw `0x01BF`, `0x01C1`, `0x01C5`, and `0x01C6..0x020B`. That contradiction is now surfaced explicitly instead of being silently normalized away.

Verification:
- Inventory, raw-evidence, reconstruction, and readable-Lingo lift verification were not blocked.
- Exact same-body JS mirror verification is blocked because no separate local `reconstructed (1)\rightful.js` exists for `Lscr-103`.
