# Lscr-102 Mechanical Report

## Script identity
- Script: `Lscr-102`
- Handler: `RaceEngine` (single named handler, 20 embedded blocks)
- Total length: 48988 bytes

## Block inventory

| Block | Offset | CodeLen | Role |
|------:|-------:|--------:|------|
| 0 | 0 | 251 | dispatch table registration |
| 1 | 344 | 456 | constants table |
| 2 | 3032 | 496 | initState |
| 3 | 5972 | 1268 | parseConfig (XML car data) |
| 4 | 10964 | 60 | initBoost |
| 5 | 11368 | 59 | startSendTimer |
| 6 | 11760 | 25 | stopRunTimer |
| 7 | 11992 | 301 | stageDistance |
| 8 | 14012 | 7823 | runFrame (main physics loop) |
| 9 | 31980 | 2264 | calculateExtraHpi |
| 10 | 34244 | 584 | lookupTorque |
| 11 | 34828 | 196 | initBrakeTune |
| 12 | 35024 | 824 | gearDown |
| 13 | 35848 | 916 | gearUp |
| 14 | 36764 | 200 | setBrake |
| 15 | 36964 | 288 | setClutchFeather |
| 16 | 37252 | 2068 | createMd5Hash |
| 17 | 39320 | 1796 | startLightTimer |
| 18 | 41116 | 2148 | runLight |
| 19 | 43264 | 4968 | buildMd5Source |
| 20 | 48232 | 756 | randomCurve |

## Coverage status
- All 20 handler blocks have been decoded and reconstructed.
- Full class-based JS implementation: `rightful.from-lingo.js`
- Sibling artifact: `sibling-artifacts/02-race-engine.js`

<!-- BEGIN AUTO:RAW-EVIDENCE -->
### Base artifacts
- `Lscr-102/evidence/reconstructed/data-manifest.json`
- `Lscr-102/evidence/reconstructed/raw-tails/manifest.json`
- `Lscr-102/evidence/reconstructed (1)/data-manifest.json`
- `Lscr-102/evidence/reconstructed (1)/raw-tails/manifest.json`
- `Lscr-102/root-artifacts/Lscr-102.all-block-tables.tsv`
- `Lscr-102/root-artifacts/Lscr-102.annotated-disasm.md`
- `Lscr-102/root-artifacts/Lscr-102.blocks.js`
- `Lscr-102/root-artifacts/Lscr-102.blocks.lingo`
- `Lscr-102/root-artifacts/Lscr-102.json`

### Block-table pass files
- `Lscr-102/root-artifacts/Lscr-102.pass-block0-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block10964-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block11368-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block11760-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block11992-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block14012-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block3032-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block31980-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block34244-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block344-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block34828-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block35024-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block35848-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block36764-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block36964-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block37252-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block39320-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block41116-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block43264-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block48232-table.md`
- `Lscr-102/root-artifacts/Lscr-102.pass-block5972-table.md`

### Pass reports
- `Lscr-102/root-artifacts/Lscr-102.pass1-tables.md`
- `Lscr-102/root-artifacts/Lscr-102.pass10-faithful-stack-lift.md`
- `Lscr-102/root-artifacts/Lscr-102.pass11-js-readable-rebuild.md`
- `Lscr-102/root-artifacts/Lscr-102.pass12-op83-immediates.md`
- `Lscr-102/root-artifacts/Lscr-102.pass13-inline-ints-and-light-timers.md`
- `Lscr-102/root-artifacts/Lscr-102.pass14-boundary-and-timeout-call-shape.md`
- `Lscr-102/root-artifacts/Lscr-102.pass15-compatible-script-fingerprint-and-marker-cleanup.md`
- `Lscr-102/root-artifacts/Lscr-102.pass16-rival-teamrival-connective.md`
- `Lscr-102/root-artifacts/Lscr-102.pass17-block18-finish-ladder.md`
- `Lscr-102/root-artifacts/Lscr-102.pass18-block18-integrity-tail.md`
- `Lscr-102/root-artifacts/Lscr-102.pass19-block18-int-rint-prelude.md`
- `Lscr-102/root-artifacts/Lscr-102.pass2-block-roles.md`
- `Lscr-102/root-artifacts/Lscr-102.pass20-archive-shape-and-safe-aliases.md`
- `Lscr-102/root-artifacts/Lscr-102.pass21-whole-file-inventory.md`
- `Lscr-102/root-artifacts/Lscr-102.pass22-hotspot-stack-trace-windows.md`
- `Lscr-102/root-artifacts/Lscr-102.pass23-hotspot-carry-tracer.md`
- `Lscr-102/root-artifacts/Lscr-102.pass23-strict-carry-tracer.md`
- `Lscr-102/root-artifacts/Lscr-102.pass24-block16-readable-line-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass25-block16-branch-tail-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass26-block19-strict-packet-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass27-block19-compare-window-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass28-block19-packet-anchor-decision.md`
- `Lscr-102/root-artifacts/Lscr-102.pass29-block19-row-anchor-split.md`
- `Lscr-102/root-artifacts/Lscr-102.pass3-branches.md`
- `Lscr-102/root-artifacts/Lscr-102.pass30-block19-packet-floor-exhaustion.md`
- `Lscr-102/root-artifacts/Lscr-102.pass31-block07-callhead-tightening.md`
- `Lscr-102/root-artifacts/Lscr-102.pass32-0240-0080-stopmap.md`
- `Lscr-102/root-artifacts/Lscr-102.pass33-block08-island-ownership.md`
- `Lscr-102/root-artifacts/Lscr-102.pass34-block03-receiver-ownership.md`
- `Lscr-102/root-artifacts/Lscr-102.pass35-block03-callhead-grs-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass36-block03-wrapper-family-stopmap.md`
- `Lscr-102/root-artifacts/Lscr-102.pass37-block10-tail-packet-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass38-block16-ct-handoff-split.md`
- `Lscr-102/root-artifacts/Lscr-102.pass39-block16-lightTO2-split.md`
- `Lscr-102/root-artifacts/Lscr-102.pass4-small-function-refinements.md`
- `Lscr-102/root-artifacts/Lscr-102.pass40-block16-final-ladder-exhaustion.md`
- `Lscr-102/root-artifacts/Lscr-102.pass41-block19-tail-terminator-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass42-block07-byte-window-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass43-block07-callhead-packet-split.md`
- `Lscr-102/root-artifacts/Lscr-102.pass44-cleanjs-corroboration-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass45-block07-second-stack-packet.md`
- `Lscr-102/root-artifacts/Lscr-102.pass46-block07-third-stack-packet.md`
- `Lscr-102/root-artifacts/Lscr-102.pass47-block07-int-packet-pullback.md`
- `Lscr-102/root-artifacts/Lscr-102.pass48-block07-terminator-residue-exhaustion.md`
- `Lscr-102/root-artifacts/Lscr-102.pass49-block07-family-ownership-shape.md`
- `Lscr-102/root-artifacts/Lscr-102.pass5-physics-clusters.md`
- `Lscr-102/root-artifacts/Lscr-102.pass50-block07-first-family-ownership-split.md`
- `Lscr-102/root-artifacts/Lscr-102.pass50-block10-tail-shape-classification.md`
- `Lscr-102/root-artifacts/Lscr-102.pass51-block03-late-wrapper-ownership-split.md`
- `Lscr-102/root-artifacts/Lscr-102.pass51-block07-stg-arm-template-compare.md`
- `Lscr-102/root-artifacts/Lscr-102.pass51-block08-guard-fallthrough-join-split.md`
- `Lscr-102/root-artifacts/Lscr-102.pass51-block10-op08-sibling-classification.md`
- `Lscr-102/root-artifacts/Lscr-102.pass51-block19-compare-subwindow-classification.md`
- `Lscr-102/root-artifacts/Lscr-102.pass52-block07-post-jump-classification.md`
- `Lscr-102/root-artifacts/Lscr-102.pass52-block16-ct-packet-ownership-tightening.md`
- `Lscr-102/root-artifacts/Lscr-102.pass53-block03-post-nitrous-attr-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass53-block08-guard-local-token-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass53-block10-arith-suffix-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass53-block16-startLightTimer-operand-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass53-block19-append-store-ownership.md`
- `Lscr-102/root-artifacts/Lscr-102.pass54-block08-pre-guard-carry-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass55-block03-damage-sink-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass55-block07-clean-arm-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass55-block10-prefix-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass55-block16-sink-packet-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass55-block19-threshold-rhs-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass56-block03-callhead-combiner-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass56-block07-int-packet-role-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass56-block10-op41-role-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass56-block16-ct-gate-packet-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass56-block19-compare-core-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass57-block03-grs-constructor-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass57-block07-callhead-head-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass57-block10-tail-consumer-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass57-block16-callhead-combiner-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass57-block19-guard-pair-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass58-block19-loop-seed-js-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass59-block08-guard-js-floor-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass6-stack-prototype.md`
- `Lscr-102/root-artifacts/Lscr-102.pass60-block19-loop-structure-ceiling.md`
- `Lscr-102/root-artifacts/Lscr-102.pass61-block19-anti-lag-tail-floor-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass62-block19-prelude-floor-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass63-block19-param-tail-floor-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass64-block19-tail-jump-label-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass65-block19-op51-placeholder-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass66-block19-op14-family-order-audit.md`
- `Lscr-102/root-artifacts/Lscr-102.pass67-block19-guard-ladder-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass68-block19-compare-ladder-sync.md`
- `Lscr-102/root-artifacts/Lscr-102.pass7-rebuild-status.md`
- `Lscr-102/root-artifacts/Lscr-102.pass8-vocabulary.md`
- `Lscr-102/root-artifacts/Lscr-102.pass9-tooling-results.md`

### Bin-only pass reports
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass1-report.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass10-boost-beginRace-region.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass11-table-2d64.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass12-endRace-sendPos-region.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass13-table-30c8.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass14-mixed-region-328c.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass15-table-560c.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass16-table-5f50.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass17-raw-gap-6fbc.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass18-tables-8074-8f67.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass19-tables-9460-98cf.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass2-report.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass20-table-9d04.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass21-tables-a420-bda0.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass22-frontier-be84-cfff.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass23-eof-tail.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass24-structured-region-map.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass25-gap-3800-560b.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass3-symbol-clusters.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass4-init-motifs.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass5-post-init-motifs.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass6-late-table.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass7-raw1658.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass8-startRace-region.md`
- `Lscr-102/root-artifacts/Lscr-102.bin-only.pass9-table-1d08.md`
<!-- END AUTO:RAW-EVIDENCE -->

<!-- BEGIN AUTO:CORROBORATION -->
### Rebuilt-faithful mirrors
- `Lscr-102/evidence/reconstructed/Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102/evidence/reconstructed (1)/Lscr-102.rebuilt-faithful.lingo`
- `Lscr-102/root-artifacts/Lscr-102.rebuilt-faithful-full.js`
- `Lscr-102/root-artifacts/Lscr-102.rebuilt-faithful.js`
- `Lscr-102/root-artifacts/Lscr-102.rebuilt-faithful.lingo`

### Reconstructed lingo / JS mirrors
- `Lscr-102/root-artifacts/Lscr-102.bin-only.reconstructed.lingo`
- `Lscr-102/root-artifacts/Lscr-102.reconstructed.lingo`

### Stack-faithful lingo mirrors
- `Lscr-102/evidence/reconstructed/Lscr-102.stack-faithful.lingo`
- `Lscr-102/evidence/reconstructed (1)/Lscr-102.stack-faithful.lingo`
- `Lscr-102/root-artifacts/Lscr-102.stack-faithful.lingo`
<!-- END AUTO:CORROBORATION -->

<!-- BEGIN AUTO:UNRESOLVED-ADDENDA -->
All expected artifact families are present.
<!-- END AUTO:UNRESOLVED-ADDENDA -->

<!-- BEGIN AUTO:JS-SURFACE -->
- **original-style.lingo**: `Lscr-102/original-style.lingo`
- **original-style.js**: `Lscr-102/original-style.js`
- **rightful.js**: `Lscr-102/rightful.js`
- **sibling (02-race-engine.js)**: `Lscr-102/sibling-artifacts/02-race-engine.js`
<!-- END AUTO:JS-SURFACE -->
