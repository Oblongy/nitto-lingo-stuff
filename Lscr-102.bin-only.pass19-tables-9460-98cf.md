# Lscr-102.bin-only pass 19: tables `0x9460` and `0x95C4`

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

`0x9460..0x95B8`
- `11` type=4 string records
- exact values:
  - `timeAnchor`, `c0`, `goodCounterRT`, `badCounterRT`, `goodCounterET`, `badCounterET`, `lightDelayTO`, `object`, `forget`, `staging`, `gearValue`

`0x95C4..0x98D0`
- `31` type=4 string records
- head:
  - `gearUp`, `raceType`, `KOTH`, `KREADY`, `createMd5Hash`, `QM`, `RREADY`, `RIVAL`, `TEAMRIVAL`, `RIVREADY`, `CTQ`, `P`, `startLightTimer`, `p`, `CT`, `btd`
- tail:
  - `timeout`, `c1000`, `c2`, `symbol`, `runLight`, `b`, `lightTO2`, `stagingLightPos2`, `HTQ`, `HTQREADY`, `HT`, `HTREADY`

This pass does not assign behavior to these names. It only proves that they exist in aligned string records at those offsets.
