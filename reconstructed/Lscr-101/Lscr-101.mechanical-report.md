# Mechanical Lingo Reconstruction Report

Sources used:
- `C:\Users\Dilldo\Music\Library\1320L\Lscr-101.json`
- `C:\Users\Dilldo\Music\Library\1320L\Lnam-100.json`
- `C:\Users\Dilldo\Music\Library\1320L\tmp_lingo_decompile\projectorrays_dump\NittoLegendsBeta_embedded_director\casts\Internal\MovieScript 17 - LingoXtra.ls`
- `C:\Users\Dilldo\Music\Library\1320L\tmp_lingo_decompile\projectorrays_dump\NittoLegendsBeta_embedded_director\chunks\CASt-83.json`

Evidence summary:
- `Lscr-101.json` reports `scriptNumber = 8`, `handlersCount = 15`, and handler nameIDs `123..137`.
- `Lnam-100.json` resolves those nameIDs to `lingoXtraNoDebug`, `lingoXtraInit`, `getPCInfo`, `baLingoFolderExists`, `baLingoCreateFolder`, `baLingoFileList`, `baLingoFileExists`, `baLingoTempFileName`, `baLingoFileAge`, `baLingoDeleteFile`, `baLingoFileDateEx`, `baLingoSetFileDate`, `baLingoSysFolder`, `baLingoRunProgram`, and `isCheatEngineRunning`.
- `MovieScript 17 - LingoXtra.ls` and `CASt-83.json.info.scriptSrcText` provide recovered source for the same handler set and matching literals including `fileio`, `simInet`, `setInactive`, `SOFTWARE\\Microsoft\\Windows\\CurrentVersion`, and `"ch" & "eat" & " en" & "gine"`.

| Index | Handler | Source | nameID | CodeLen | Args | Locals | Source lines |
|---:|---|---|---:|---:|---:|---:|---|
| 0 | `lingoXtraNoDebug` | recovered ProjectorRays movie script export | 123 | 68 | 0 | 1 | `3-11` |
| 1 | `lingoXtraInit` | recovered ProjectorRays movie script export | 124 | 40 | 0 | 0 | `13-19` |
| 2 | `getPCInfo` | recovered ProjectorRays movie script export | 125 | 130 | 0 | 2 | `21-31` |
| 3 | `baLingoFolderExists` | recovered ProjectorRays movie script export | 126 | 11 | 1 | 0 | `33-35` |
| 4 | `baLingoCreateFolder` | recovered ProjectorRays movie script export | 127 | 11 | 1 | 0 | `37-39` |
| 5 | `baLingoFileList` | recovered ProjectorRays movie script export | 128 | 13 | 2 | 0 | `41-43` |
| 6 | `baLingoFileExists` | recovered ProjectorRays movie script export | 129 | 11 | 1 | 0 | `45-47` |
| 7 | `baLingoTempFileName` | recovered ProjectorRays movie script export | 130 | 11 | 1 | 0 | `49-51` |
| 8 | `baLingoFileAge` | recovered ProjectorRays movie script export | 131 | 11 | 1 | 0 | `53-55` |
| 9 | `baLingoDeleteFile` | recovered ProjectorRays movie script export | 132 | 11 | 1 | 0 | `57-59` |
| 10 | `baLingoFileDateEx` | recovered ProjectorRays movie script export | 133 | 17 | 4 | 0 | `61-63` |
| 11 | `baLingoSetFileDate` | recovered ProjectorRays movie script export | 134 | 23 | 7 | 0 | `65-67` |
| 12 | `baLingoSysFolder` | recovered ProjectorRays movie script export | 135 | 11 | 1 | 0 | `69-71` |
| 13 | `baLingoRunProgram` | recovered ProjectorRays movie script export | 136 | 15 | 3 | 0 | `73-75` |
| 14 | `isCheatEngineRunning` | recovered ProjectorRays movie script export | 137 | 44 | 0 | 1 | `77-84` |

Unresolved:
- No unresolved handlers remain in the recovered ProjectorRays source used for `rightful.ls`.
- No additional handlers, names, or callback aliases were inferred beyond the evidence above.
