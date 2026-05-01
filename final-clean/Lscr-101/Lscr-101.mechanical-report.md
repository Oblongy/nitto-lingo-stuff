# Mechanical Lingo Reconstruction Report

Inventory pass:
- Deliverable `rightful.ls`: `91` lines total, including the `7`-line provenance header, `1` global declaration, and `15` visible `on` blocks.
- Handler scan:
  - `lingoXtraNoDebug`, `lingoXtraInit`, `getPCInfo`, `baLingoFolderExists`, `baLingoCreateFolder`, `baLingoFileList`, `baLingoFileExists`, `baLingoTempFileName`, `baLingoFileAge`, `baLingoDeleteFile`, `baLingoFileDateEx`, `baLingoSetFileDate`, `baLingoSysFolder`, `baLingoRunProgram`, `isCheatEngineRunning`
- Obvious unresolved scan hits: `0` explicit `unk26` / `implicit_` markers in the promoted body.

Raw-evidence pass:
- Raw metadata used:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-101\evidence\lscr101-work\Lscr-101.json`
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-101\evidence\lscr101-work\Lnam-100.json`
  - `scriptNumber = 8`
  - `scriptBehavior = 2`
  - `handlersCount = 15`
  - `propertiesCount = 0`
  - `globalsCount = 1`
  - `totalLength = 1916`
  - `handlerVectorsCount = 0`
  - `handlerVectorsOffset = 1916`
  - `handlerVectorsSize = 0`
  - `compiledOffset` span `784..1276`
  - `literalsOffset = 1328`
  - `literalsDataOffset = 1560`
  - `literalsDataCount = 356`
  - handler slots keyed by `nameID` values `123..137`
  - `globalNameIDs = [145]`
- Adjacent cast corroboration from `C:\Users\Dilldo\Music\Library\1320L\tmp_lingo_decompile\projectorrays_dump\NittoLegendsBeta_embedded_director\chunks\CASt-83.json` reports:
  - `scriptId = 9`
  - `name = "LingoXtra"`
  - `member.scriptType = 3`
- These numeric/script identifiers do not align cleanly across evidence classes:
  - raw LSCR metadata says `scriptNumber = 8`
  - the adjacent cast says `scriptId = 9`
  - the recovered text file is named `MovieScript 17 - LingoXtra.ls`
- That mismatch is preserved as-is here. The report relies on direct body matches, not on normalizing those identifiers into a single numbering scheme.
- Whole-file inventory anchor:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-101\root-artifacts\Lscr-101.pass1-whole-file-inventory.md`
- Top-level file-header bytes `0..94` also expose a partially decodable big-endian layout before the handler-record table begins:
  - `8..12`: `00 00 07 7C` -> `totalLength = 1916`
  - `12..16`: `00 00 07 7C` -> `totalLength2 = 1916`
  - `16..18`: `00 5C` -> `headerLength = 92`
  - `18..20`: `00 08` -> `scriptNumber = 8`
  - `40..42`: `00 02` -> `scriptBehavior = 2`
  - `52..56`: `00 00 07 7C` -> `handlerVectorsOffset = 1916`
  - `64..66`: `00 5C` -> `propertiesOffset = 92`
  - `66..68`: `00 01` -> `globalsCount = 1`
  - `68..72`: `00 00 00 5C` -> `globalsOffset = 92`
  - `72..74`: `00 0F` -> `handlersCount = 15`
  - `74..78`: `00 00 00 5E` -> `handlersOffset = 94`
  - `78..80`: `00 1D` -> `literalsCount = 29`
  - `80..84`: `00 00 05 30` -> `literalsOffset = 1328`
  - `84..88`: `00 00 01 64` -> `literalsDataCount = 356`
  - `88..92`: `00 00 06 18` -> `literalsDataOffset = 1560`
  - `92..94`: `00 91` -> first and only `globalNameID = 145`
- The middle words of that top-level header are still only partially resolved from local evidence:
  - `20..24`: `00 03 FF FF`
  - `24..40`: four zero words
  - `42..48`: `00 00 00 03 00 11`
  - `48..52`: `FF FF 00 00`
  - `56..64`: four zero words
  - those bytes are therefore preserved as raw header structure rather than assigned invented semantics
- The raw handler metadata header is itself structurally regular:
  - `handlersOffset = 94`
  - first compiled body begins at `784`
  - so the metadata header span is `94..784` = `690` bytes
  - `690 / 15 handlers = 46` bytes per handler record exactly
  - this means the pre-body handler area is a fixed-width table, not a variable-length packed prelude
  - those `46`-byte records decode cleanly as big-endian integer fields matching the exported JSON layout:
    - `u16 nameID`
    - `u16 vectorPos`
    - `u32 compileLen`
    - `u32 compiledOffset`
    - `u16 argumentCount`
    - `u32 argumentOffset`
    - `u16 localsCount`
    - `u32 localsOffset`
    - `u16 unknown0Count`
    - `u32 unknown0Offset`
    - `u16 unknown1`
    - `u16 unknown2`
    - `u16 lineCount`
    - `u32 lineOffset`
    - `u32 stackHeight`
  - first-record byte proof at `94..140`:
    - `00 7B` -> `nameID = 123`
    - `FF FF` -> `vectorPos = 65535`
    - `00 00 00 44` -> `compileLen = 68`
    - `00 00 03 10` -> `compiledOffset = 784`
    - `00 00` -> `argumentCount = 0`
    - `00 00 03 54` -> `argumentOffset = 852`
    - `00 01` -> `localsCount = 1`
    - `00 00 03 54` -> `localsOffset = 852`
    - `00 00` -> `unknown0Count = 0`
    - `00 00 03 56` -> `unknown0Offset = 854`
    - `00 24` -> `unknown1 = 36`
    - `00 03` -> `unknown2 = 3`
    - `00 07` -> `lineCount = 7`
    - `00 00 03 56` -> `lineOffset = 854`
    - `00 00 00 04` -> `stackHeight = 4`
- Handler-level byte anchors recovered directly from `Lscr-101.json`:

| Index | Handler | nameID | compiledOffset | compileLen | Args | Locals | lineCount | lineOffset | source-line anchor |
|---:|---|---:|---:|---:|---:|---:|---:|---:|---:|
| 0 | `lingoXtraNoDebug` | 123 | 784 | 68 | 0 | 1 | 7 | 854 | 3 |
| 1 | `lingoXtraInit` | 124 | 862 | 40 | 0 | 0 | 5 | 902 | 13 |
| 2 | `getPCInfo` | 125 | 908 | 130 | 0 | 2 | 9 | 1042 | 21 |
| 3 | `baLingoFolderExists` | 126 | 1052 | 11 | 1 | 0 | 1 | 1066 | 33 |
| 4 | `baLingoCreateFolder` | 127 | 1068 | 11 | 1 | 0 | 1 | 1082 | 37 |
| 5 | `baLingoFileList` | 128 | 1084 | 13 | 2 | 0 | 1 | 1102 | 41 |
| 6 | `baLingoFileExists` | 129 | 1104 | 11 | 1 | 0 | 1 | 1118 | 45 |
| 7 | `baLingoTempFileName` | 130 | 1120 | 11 | 1 | 0 | 1 | 1134 | 49 |
| 8 | `baLingoFileAge` | 131 | 1136 | 11 | 1 | 0 | 1 | 1150 | 53 |
| 9 | `baLingoDeleteFile` | 132 | 1152 | 11 | 1 | 0 | 1 | 1166 | 57 |
| 10 | `baLingoFileDateEx` | 133 | 1168 | 17 | 4 | 0 | 1 | 1194 | 61 |
| 11 | `baLingoSetFileDate` | 134 | 1196 | 23 | 7 | 0 | 1 | 1234 | 65 |
| 12 | `baLingoSysFolder` | 135 | 1236 | 11 | 1 | 0 | 1 | 1250 | 69 |
| 13 | `baLingoRunProgram` | 136 | 1252 | 15 | 3 | 0 | 1 | 1274 | 73 |
| 14 | `isCheatEngineRunning` | 137 | 1276 | 44 | 0 | 1 | 6 | 1322 | 77 |

- Literal corroboration from `Lscr-101.json` matches the promoted Lingo body:
  - offset `0`: `fileio`
  - offset `54`: `agree with the usage terms`
  - offset `86`: `setInactive`
  - offset `102`: `simInet`
  - offset `202`: `SOFTWARE\\Microsoft\\Windows\\CurrentVersion`
  - offsets `322`, `330`, `338`, `346`: `"ch" & "eat" & " en" & "gine"`
- Global corroboration from `Lnam-100.json` also matches the promoted body:
  - `globalNameIDs[145] = gSimInet`
  - this aligns with the lone promoted global declaration at `rightful.ls:8`
- Non-handler symbol corroboration from `Lnam-100.json` matches the promoted body for names such as `debugPlaybackEnabled`, `new`, `xtra`, `status`, `quit`, `caluMD5_register`, `string`, `baDiskInfo`, `baSysFolder`, `offset`, `char`, `baCpuInfo`, `To3GetMacAddress`, `baReadRegString`, `baComputerName`, `baFolderExists`, `baCreateFolder`, `baFileList`, `baFileExists`, `baTempFileName`, `baFileAge`, `baDeleteFile`, `baFileDateEx`, `baSetFileDate`, `baRunProgram`, `baWindowList`, and `count`.
- `openfile` is the exception in the promoted body: it does not appear in `Lnam-100.json`, so it is preserved here as a recovered source token from `MovieScript 17 - LingoXtra.ls` / `CASt-83.json.info.scriptSrcText`, not as a raw LSCR name-table resolution.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-101\evidence\root-shared\Lnam-100.json` is an empty stub (`namesCount = 0`) and was not used for handler-name resolution.
- No local `pass-block*.md`, `*.blocks.lingo`, or `*.blocks.js` family exists for `Lscr-101`, so the local byte-pattern layer stops at handler metadata plus literal tables rather than per-block stack traces.
- `handlerVectorsCount = 0` with `handlerVectorsOffset = totalLength = 1916` is consistent with that stop point: the raw LSCR surface does not advertise any separate embedded handler-vector region to recover locally.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-101\evidence\lscr101-work\tools\decompile-summary.json` records a failed local decompile attempt for this script: `Cannot read properties of undefined (reading 'length')`.
- The matching local cause is visible in the raw handler records themselves: `Lscr-101.json` handler entries expose metadata fields such as `compiledOffset`, `compileLen`, `lineOffset`, and `unknown2`, but no `bytecode` field for the stack walker in `tools\decompile_all.mjs` to consume.
- Packed layout observations from the raw LSCR are also stable:
  - compiled handler bodies occupy the span `784..1320`
  - argument/local/line tables occupy the packed span `852..1334`
  - the literal-entry table occupies `1328..1560`, which matches `29` literals at `8` bytes per entry
  - the handler metadata header begins at `handlersOffset = 94`, leaving a raw pre-body gap `94..784` that is not decoded further here
  - most handlers then follow the pattern `compiled bytes -> argument cells -> local cells -> line table`, with `0` bytes between args/locals/lines and usually `1` byte between compiled body end and argument table start when arguments are present
  - the wrapper-family offset math is internally consistent about widths even though the cell semantics stay opaque:
    - argument cells occupy `2 * argumentCount` bytes
    - local cells occupy `2 * localsCount` bytes
    - line tables occupy `lineCount + 1` bytes
    - `unknown0Count` is `0` for all `15` handlers
    - `unknown0Offset` equals `lineOffset` for all `15` handlers, so the current raw surface does not expose a distinct post-local pre-line region
  - concrete checks:
    - `baLingoFolderExists`: args `1064..1066` (`2` bytes for `1` arg), lines `1066..1068` (`2` bytes for `1` line)
    - `baLingoFileList`: args `1098..1102` (`4` bytes for `2` args), lines `1102..1104` (`2` bytes for `1` line)
    - `baLingoSetFileDate`: args `1220..1234` (`14` bytes for `7` args), lines `1234..1236` (`2` bytes for `1` line)
    - `lingoXtraInit`: lines `902..908` (`6` bytes for `5` lines)
    - `getPCInfo`: locals `1038..1042` (`4` bytes for `2` locals), lines `1042..1052` (`10` bytes for `9` lines)
- That packing creates a real raw-layout overlap at the tail:
  - the last handler's naive local-plus-line-table math reaches `1334`
  - the literal-entry table begins at `1328`
  - so offsets `1328..1334` are claimed by both views and are preserved here as a raw-structure contradiction rather than normalized away
- Exact inter-handler compiled gaps from the raw metadata are:
  - `lingoXtraNoDebug -> lingoXtraInit`: `10`
  - `lingoXtraInit -> getPCInfo`: `6`
  - `getPCInfo -> baLingoFolderExists`: `14`
  - `baLingoFolderExists -> baLingoCreateFolder`: `5`
  - `baLingoCreateFolder -> baLingoFileList`: `5`
  - `baLingoFileList -> baLingoFileExists`: `7`
  - `baLingoFileExists -> baLingoTempFileName`: `5`
  - `baLingoTempFileName -> baLingoFileAge`: `5`
  - `baLingoFileAge -> baLingoDeleteFile`: `5`
  - `baLingoDeleteFile -> baLingoFileDateEx`: `5`
  - `baLingoFileDateEx -> baLingoSetFileDate`: `11`
  - `baLingoSetFileDate -> baLingoSysFolder`: `17`
  - `baLingoSysFolder -> baLingoRunProgram`: `5`
  - `baLingoRunProgram -> isCheatEngineRunning`: `9`
- The smallest wrapper handlers also expose their table cells directly, but those cells do not decode into an obvious uniform semantic scheme from local evidence alone:
  - `baLingoFolderExists`: args `00 1C`, lines `14 14`
  - `baLingoCreateFolder`: args `9C 01`, lines `00 00`
  - `baLingoFileList`: args `01 00 00 A0`, lines `0D 0A`
  - `baLingoFileExists`: args `9C 01`, lines `00 00`
  - `baLingoTempFileName`: args `01 57`, lines `9C 01`
  - `baLingoFileAge`: args `42 01`, lines `57 9C`
  - `baLingoDeleteFile`: args `A6 42`, lines `01 57`
  - `baLingoFileDateEx`: args `01 00 00 A0 0D 0A 00 4B`, lines `00 4B`
  - `isCheatEngineRunning`: locals `03 57`, lines `B0 52 00 4C 00 61 B1 03 10 95 00 0C`
- Direct `Lnam` resolution checks fail for those cells, so the report keeps them raw instead of upgrading them into names:
  - `baLingoFolderExists` takes `1` argument in the promoted body, but its arg cell `00 1C` does not match the raw `param1` name index `160`
  - `lingoXtraNoDebug` uses local `myFile` in the promoted body, but its lone local cell at `852..854` is `42 00`, not the raw `myFile` name index `143`
- The non-wrapper families also stay opaque when inspected byte-for-byte:
  - `lingoXtraNoDebug`: locals `42 00`, lines `57 8E 03 52 00 01 00 8F`
  - `lingoXtraInit`: lines `57 8C 43 01 67 8B`
  - `getPCInfo`: locals `44 17 0D 0A`, lines `43 00 57 9B 0D 0A 52 01 4C 01`
  - `isCheatEngineRunning`: locals `03 57`, lines `B0 52 00 4C 00 61 B1`
- Those larger-handler cells are specifically not promoted into source-line semantics here:
  - `getPCInfo` local-table bytes already contain `0D 0A`, so raw CR-like values appear inside the local cell region itself
  - the line-table byte counts do match `lineCount + 1`, but the byte values do not directly equal the raw `source-line anchor` values (`3`, `13`, `21`, `77`) or simple monotonic line-number sequences
- Those cells are therefore preserved here as raw table evidence only. The report does not claim that the argument or local cells are direct little-endian or big-endian `Lnam` IDs, and it does not claim that the line-table cells are direct line numbers.
- Two residual byte ranges are present in `Lscr-101.bin` and are left unresolved rather than guessed:
  - `1320..1328`: `03 57 B0 52 00 4C 00 61`
  - `1328..1334`: overlap zone between the tail of the last handler's local/line-table arithmetic and the start of the 29-entry literal table
  - `1334..1560`: remainder of the literal-entry table immediately before literal-data storage begins at `1560`
- The literal area is only partially self-consistent, and that split is now explicit:
  - entry-table bytes `1360..1528` decode cleanly as repeated little-endian records of the form `u16 type`, `u16 zero`, `u32 offset`
  - examples:
    - `1360..1368`: `01 00 00 00 00 00 00 00` -> `type = 1`, `offset = 0`
    - `1368..1376`: `01 00 00 00 0C 00 00 00` -> `type = 1`, `offset = 12`
    - `1520..1528`: `01 00 00 00 FC 00 00 00` -> `type = 1`, `offset = 252`
  - but the leading and trailing literal-entry edges do not follow that clean pattern:
    - `1328..1360` (entries `0..3`) remain contaminated by the tail overlap
    - `1528..1560` (entries `21..24`) are still irregular and unresolved
    - `1560..1592` (entries `25..28`) decode differently from the middle family: `u16 type`, `u32 offset`, `u16 zero` in big-endian order
    - examples:
      - `1560..1568`: `00 01 00 00 01 42 00 00` -> `type = 1`, `offset = 322`
      - `1568..1576`: `00 01 00 00 01 4A 00 00` -> `type = 1`, `offset = 330`
      - `1576..1584`: `00 01 00 00 01 52 00 00` -> `type = 1`, `offset = 338`
      - `1584..1592`: `00 01 00 00 01 5A 00 00` -> `type = 1`, `offset = 346`
  - the physical file is longer than the exported `totalLength`:
    - raw `totalLength = 1916`
    - on-disk `Lscr-101.bin` length = `1947`
  - that extra physical tail resolves the earlier out-of-range worry for the last literal offsets
  - the clean string-record blob begins at `1590`, not at the exported `literalsDataOffset = 1560`
  - that is a `30`-byte delta from the exported top-level literal-data base
  - the literal offsets line up against that `1590` base at the start of each stored string record:
    - `offset = 0` -> `1590..` for `fileio`
    - `offset = 12` -> `1602..` for `l`
    - `offset = 54` -> `1644..` for `agree with the usage terms`
    - `offset = 252` -> `1842..` for `ProductId`
    - `offset = 322` -> `1912..` for `ch`
    - `offset = 346` -> `1936..` for `gine`
  - the visible string-record blob at `1590..1947` has a stable on-disk shape:
    - `1590..1602`: `00 00 00 07 66 69 6C 65 69 6F 00 00` for `fileio`
    - `1602..1608`: `00 00 00 02 6C 00` for `l`
    - `1644..1676`: `00 00 00 1B 61 67 72 65 65 20 77 69 74 68 20 74 68 65 20 75 73 61 67 65 20 74 65 72 6D 73 00` for `agree with the usage terms`
    - `1912..1920`: `00 00 00 03 63 68 00 00` for `ch`
  - those payload examples are consistent with a `u32` big-endian length field carrying `string_length + 1`, followed by string bytes, a terminating `00`, and minimal padding
  - the remaining literal-side contradiction is narrower now:
    - exported top-level field still says `literalsDataOffset = 1560`
    - but the first confirmed string-record start is `1590`
    - `1528..1560` remains the unresolved bridge between the clean middle entry family and the confirmed string-record blob
    - the apparent tail-entry decode at `1584..1592` and the first confirmed string-record decode at `1590..1602` also overlap on bytes `1590..1591`, so those two interpretations are not fully disjoint

Reconstruction pass:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-101\evidence\reconstructed\rightful.ls` is the only local recovered body for this script.
- No local `evidence\reconstructed (1)\rightful.ls` body exists for `Lscr-101`.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-101\sibling-artifacts` is also empty, so no alternate same-script corroboration layer is staged locally.
- `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-101\rightful.ls` matches `evidence\reconstructed\rightful.ls` exactly.
- The promoted body also preserves the upstream provenance header pointing at:
  - `C:\Users\Dilldo\Music\Library\1320L\tmp_lingo_decompile\projectorrays_dump\NittoLegendsBeta_embedded_director\casts\Internal\MovieScript 17 - LingoXtra.ls`
  - `C:\Users\Dilldo\Music\Library\1320L\tmp_lingo_decompile\projectorrays_dump\NittoLegendsBeta_embedded_director\chunks\CASt-83.json`
- A direct local compare now confirms that `MovieScript 17 - LingoXtra.ls` matches the promoted `rightful.ls` body exactly once the `7`-line provenance header is removed from `final-clean\Lscr-101\rightful.ls`.
- A second local compare against `CASt-83.json.info.scriptSrcText` matches the same promoted body after CR-style line splitting, with only a trailing blank-line normalization difference at the end of the embedded text surface.

Readable-Lingo lift pass:
- Recovered Lingo artifact:
  - `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-101\rightful.ls`
- No new safe byte-backed lift emerged in this pass. The current promoted body already matches the only local recovered readable source.
- The raw handler `source-line anchor` values from `Lscr-101.json` also line up exactly with the real start lines in `MovieScript 17 - LingoXtra.ls`.
- For this script, the raw `lineCount` values match the executable body lines inside those handlers rather than the outer `on` / `end` wrapper lines.
- The adjacent raw `unknown1` field does not behave like a simple handler-start character offset into the recovered source text:
  - examples: `lingoXtraNoDebug = 36`, `lingoXtraInit = 257`, `getPCInfo = 470`, `baLingoFolderExists = 941`, `isCheatEngineRunning = 1829`
  - direct checks against `CASt-83.json.info.scriptSrcText` show those values landing inside prior text tails or just before the next `on` line, not cleanly on the handler start positions
  - checking against the original adjacent cast text with its native `\r` separators tightens that failure mode:
    - `lingoXtraNoDebug`, `lingoXtraInit`, and `getPCInfo` land at `bodyChar - 1` (`36/37`, `257/258`, `470/471`)
    - the wrapper-family handlers do not follow that rule; for example `baLingoFolderExists = 941` while its `on` line begins at `945`, and `baLingoSetFileDate = 1510` while its `on` line begins at `1515`
    - `isCheatEngineRunning = 1829` also lands near but not on the final handler header, whose `on` line begins at `1832`
  - so `unknown1` is not a uniform `on`-line offset, body-line offset, or handler-end offset across the full script surface
  - the report therefore preserves `unknown1` as a raw field only and does not assign it a stronger semantic label

| Index | Handler | Source | nameID | compiledOffset | compileLen | Args | Locals | source-line anchor | MovieScript lines | `rightful.ls` lines |
|---:|---|---|---:|---:|---:|---:|---:|---:|---|---|
| 0 | `lingoXtraNoDebug` | recovered ProjectorRays-backed `rightful.ls` body | 123 | 784 | 68 | 0 | 1 | 3 | `3-11` | `10-18` |
| 1 | `lingoXtraInit` | recovered ProjectorRays-backed `rightful.ls` body | 124 | 862 | 40 | 0 | 0 | 13 | `13-19` | `20-26` |
| 2 | `getPCInfo` | recovered ProjectorRays-backed `rightful.ls` body | 125 | 908 | 130 | 0 | 2 | 21 | `21-31` | `28-38` |
| 3 | `baLingoFolderExists` | recovered ProjectorRays-backed `rightful.ls` body | 126 | 1052 | 11 | 1 | 0 | 33 | `33-35` | `40-42` |
| 4 | `baLingoCreateFolder` | recovered ProjectorRays-backed `rightful.ls` body | 127 | 1068 | 11 | 1 | 0 | 37 | `37-39` | `44-46` |
| 5 | `baLingoFileList` | recovered ProjectorRays-backed `rightful.ls` body | 128 | 1084 | 13 | 2 | 0 | 41 | `41-43` | `48-50` |
| 6 | `baLingoFileExists` | recovered ProjectorRays-backed `rightful.ls` body | 129 | 1104 | 11 | 1 | 0 | 45 | `45-47` | `52-54` |
| 7 | `baLingoTempFileName` | recovered ProjectorRays-backed `rightful.ls` body | 130 | 1120 | 11 | 1 | 0 | 49 | `49-51` | `56-58` |
| 8 | `baLingoFileAge` | recovered ProjectorRays-backed `rightful.ls` body | 131 | 1136 | 11 | 1 | 0 | 53 | `53-55` | `60-62` |
| 9 | `baLingoDeleteFile` | recovered ProjectorRays-backed `rightful.ls` body | 132 | 1152 | 11 | 1 | 0 | 57 | `57-59` | `64-66` |
| 10 | `baLingoFileDateEx` | recovered ProjectorRays-backed `rightful.ls` body | 133 | 1168 | 17 | 4 | 0 | 61 | `61-63` | `68-70` |
| 11 | `baLingoSetFileDate` | recovered ProjectorRays-backed `rightful.ls` body | 134 | 1196 | 23 | 7 | 0 | 65 | `65-67` | `72-74` |
| 12 | `baLingoSysFolder` | recovered ProjectorRays-backed `rightful.ls` body | 135 | 1236 | 11 | 1 | 0 | 69 | `69-71` | `76-78` |
| 13 | `baLingoRunProgram` | recovered ProjectorRays-backed `rightful.ls` body | 136 | 1252 | 15 | 3 | 0 | 73 | `73-75` | `80-82` |
| 14 | `isCheatEngineRunning` | recovered ProjectorRays-backed `rightful.ls` body | 137 | 1276 | 44 | 0 | 1 | 77 | `77-84` | `84-91` |

JS mirror pass:
- No local same-body JS mirror was found for `Lscr-101`.
- A workspace-wide filename search under `C:\Users\Dilldo\Nitto\Lingo Stuff` found no `Lscr-101` JS artifact beyond the local helper source `evidence\lscr101-work\tools\decompile_all.mjs`.
- Because readable Lingo exists but no local readable mechanical JS artifact is staged for the same recovered body, no verified JS lift was possible in this pass.

Unresolved:
- No unresolved handlers remain inside the promoted `rightful.ls` body.
- The remaining blocker is evidence depth, not missing recovered text: `Lscr-101` has handler-level metadata and literal tables, but no local per-block `pass-block*.md` / `blocks.lingo` / `blocks.js` surfaces to justify additional byte-backed restructuring.
- The local stack-decompile path is also blocked: `tools\decompile-summary.json` shows the current `decompile_all.mjs` run failed on `Lscr-101`, and the raw JSON does not provide the `bytecode` arrays that tool path expects.
- Raw literal offset `316` is an empty string entry in `Lscr-101.json`, but no distinct placement for that literal can be proven from the current local evidence because the handler `bytecode` arrays are absent.
- Same-body JS mirror verification remains blocked because no local `Lscr-101` JS artifact is staged in the current workspace.

Verification:
- `Compare-Object` between `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-101\evidence\reconstructed\rightful.ls` and `C:\Users\Dilldo\Nitto\Lingo Stuff\final-clean\Lscr-101\rightful.ls` returned no differences.
- `Compare-Object` between `MovieScript 17 - LingoXtra.ls` and `final-clean\Lscr-101\rightful.ls` after skipping the local `7`-line provenance header returned no differences.
- This pass updated report provenance and blocker wording only. `rightful.ls` was left unchanged.
- JS mirror verification is still blocked for the reason above.
