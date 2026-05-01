# Lscr-101 Whole-File Inventory

## Sources
- `tmp\lscr101-work\Lscr-101.json`
- `tmp\lscr101-work\Lnam-100.json`
- `reconstructed\Lscr-101\rightful.ls`
- `reconstructed\Lscr-101\Lscr-101.mechanical-report.md`

## Whole-file counts
- `totalLength`: `1916`
- handler entries in JSON: `15`
- visible `on` blocks in `rightful.ls`: `15`
- visible embedded blocks in `rightful.ls`: `0`
- current combined pass markdown files: `1`
- `rightful.ls` line count: `91`

## Resolved handler surface
- `tmp\lscr101-work\Lscr-101.json` exposes `15` handler slots with `nameID` values `123..137`.
- `tmp\lscr101-work\Lnam-100.json` resolves those slots to:
  - `lingoXtraNoDebug`
  - `lingoXtraInit`
  - `getPCInfo`
  - `baLingoFolderExists`
  - `baLingoCreateFolder`
  - `baLingoFileList`
  - `baLingoFileExists`
  - `baLingoTempFileName`
  - `baLingoFileAge`
  - `baLingoDeleteFile`
  - `baLingoFileDateEx`
  - `baLingoSetFileDate`
  - `baLingoSysFolder`
  - `baLingoRunProgram`
  - `isCheatEngineRunning`
- every resolved handler is present as a visible `on` block in `reconstructed\Lscr-101\rightful.ls`

## Compiled-length surface
- `lingoXtraNoDebug`: `68`
- `lingoXtraInit`: `40`
- `getPCInfo`: `130`
- `baLingoFolderExists`: `11`
- `baLingoCreateFolder`: `11`
- `baLingoFileList`: `13`
- `baLingoFileExists`: `11`
- `baLingoTempFileName`: `11`
- `baLingoFileAge`: `11`
- `baLingoDeleteFile`: `11`
- `baLingoFileDateEx`: `17`
- `baLingoSetFileDate`: `23`
- `baLingoSysFolder`: `11`
- `baLingoRunProgram`: `15`
- `isCheatEngineRunning`: `44`

## Coverage status
- Whole-file inventory coverage is present at the reconstructed-source level.
- `Lscr-101` is not metadata-only in the current workspace: the recovered `rightful.ls` exposes the full named handler set, and `Lnam-100.json` resolves every handler slot named by `Lscr-101.json`.
- This pass closes the whole-file inventory layer for `Lscr-101`; it does not claim additional semantic recovery beyond the local export-backed sources above.
