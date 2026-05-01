# LSCR Clean Consolidation

This tree groups the scattered `Lscr-*` artifacts by script without modifying the original workspace layout.

Folder layout inside each `Lscr-*` directory:
- top-level promoted files: key `rightful.*` artifacts plus the script mechanical report when present
- `root-artifacts\`: files that originally lived at workspace root and matched that script id
- `evidence\`: copied `reconstructed`, `reconstructed (1)`, and any script-specific extra evidence trees
- `sibling-artifacts\`: script-adjacent `js_rewrite` mirrors when present

## Summary

| Script | Preferred promoted source | Root artifacts copied | Evidence roots copied | Promoted files | JS rewrite copied |
| --- | --- | ---: | --- | --- | --- |
| Lscr-93 | `reconstructed (1)\Lscr-93` | 40 | reconstructed, reconstructed (1) | rightful.ls | True |
| Lscr-101 | `reconstructed\Lscr-101` | 1 | reconstructed, reconstructed (1) | rightful.ls | False |
| Lscr-102 | `reconstructed (1)\Lscr-102` | 88 | reconstructed, reconstructed (1) | rightful.ls, rightful.js, rightful.full-mechanical.js, rightful.from-lingo.js | True |
| Lscr-103 | `reconstructed (1)\Lscr-103` | 20 | reconstructed, reconstructed (1) | rightful.ls, rightful.js | True |
| Lscr-104 | `reconstructed (1)\Lscr-104` | 85 | reconstructed, reconstructed (1) | rightful.ls | True |
| Lscr-105 | `reconstructed (1)\Lscr-105` | 13 | reconstructed, reconstructed (1) | rightful.ls, rightful.js | True |
| Lscr-106 | `reconstructed (1)\Lscr-106` | 40 | reconstructed, reconstructed (1) | rightful.ls | True |
| Lscr-107 | `reconstructed (1)\Lscr-107` | 24 | reconstructed, reconstructed (1) | rightful.ls | True |
| Lscr-108 | `reconstructed (1)\Lscr-108` | 15 | reconstructed, reconstructed (1) | rightful.ls | True |
| Lscr-109 | `reconstructed (1)\Lscr-109` | 42 | reconstructed, reconstructed (1) | rightful.ls | True |

## Notes
- `Lscr-101` promotes the recovered `reconstructed\Lscr-101\rightful.ls` because `reconstructed (1)\Lscr-101` does not contain a matching `rightful.ls`.
- `Lscr-102` through `Lscr-109` and `Lscr-93` prefer the `reconstructed (1)` tree for promoted `rightful.ls` when that tree exists, while still preserving the alternate reconstruction tree under `evidence\`.
- The existing pass files and docs in the original workspace are left untouched so their current paths remain valid.

