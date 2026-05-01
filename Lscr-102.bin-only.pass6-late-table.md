# Lscr-102 Bin-Only Pass 6: Late Table

Source bin used:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-102.bin`

This pass covers the aligned table that resumes after the second raw byte-pattern region.

## Proven boundaries

- first clean start: `0x0E88`
- first subregion end: `0x13D4`
- mixed tail start: `0x13D4`
- mixed tail end: `0x1658`

## Subregion A: `0x0E88..0x13D4`

This subregion parses as aligned `id,type=4,chars,string` records. It contains `45` records.

High-signal entries:

| off | id | chars | value |
| --- | ---: | ---: | --- |
| `0x0E88` | `0` | `13` | `goodCounterRT` |
| `0x0EB0` | `1` | `12` | `badCounterRT` |
| `0x0ED4` | `2` | `13` | `goodCounterET` |
| `0x0EFC` | `3` | `12` | `badCounterET` |
| `0x0F20` | `4` | `6` | `avgFps` |
| `0x0F38` | `5` | `8` | `fpsCount` |
| `0x0F54` | `6` | `4` | `guid` |
| `0x0F68` | `7` | `0` | `` |
| `0x0F74` | `8` | `8` | `raceType` |
| `0x0F90` | `9` | `10` | `timeAnchor` |
| `0x0FB0` | `10` | `2` | `c0` |
| `0x0FC0` | `11` | `7` | `staging` |
| `0x0FDC` | `12` | `16` | `stagingLightPos1` |
| `0x1008` | `13` | `16` | `stagingLightPos2` |
| `0x1034` | `14` | `10` | `greenDelay` |
| `0x1054` | `15` | `9` | `preStaged` |
| `0x1074` | `16` | `6` | `staged` |
| `0x108C` | `17` | `5` | `brake` |
| `0x10A4` | `18` | `12` | `isMidMd5sent` |
| `0x10C8` | `19` | `5` | `isNos` |
| `0x10E0` | `20` | `2` | `pb` |
| `0x10F0` | `21` | `9` | `turboFlow` |
| `0x1110` | `22` | `7` | `c0_0075` |
| `0x112C` | `23` | `12` | `stockRedLine` |
| `0x1150` | `24` | `13` | `avgDurability` |
| `0x1178` | `25` | `16` | `pistonDurability` |
| `0x11A4` | `26` | `13` | `rodDurability` |
| `0x11CC` | `27` | `15` | `valveDurability` |
| `0x11F8` | `28` | `20` | `headGasketDurability` |
| `0x122C` | `29` | `21` | `engineBlockDurability` |
| `0x1264` | `30` | `2` | `c5` |
| `0x1274` | `31` | `2` | `hp` |
| `0x1284` | `32` | `1` | `s` |
| `0x1294` | `33` | `3` | `c13` |
| `0x12A8` | `34` | `4` | `carV` |
| `0x12BC` | `35` | `8` | `carAccel` |
| `0x12D8` | `36` | `7` | `speedoV` |
| `0x12F4` | `37` | `7` | `engineV` |
| `0x1310` | `38` | `3` | `mph` |
| `0x1324` | `39` | `12` | `engineDamage` |
| `0x1348` | `40` | `15` | `isEngineLightOn` |
| `0x1374` | `41` | `9` | `gearValue` |
| `0x1394` | `42` | `2` | `gr` |
| `0x13A4` | `43` | `3` | `grs` |
| `0x13B8` | `44` | `7` | `theTime` |

## Subregion B: `0x13D4..0x1658`

This tail is mixed. It begins with one proven scalar record:

| off | id | type | value |
| --- | ---: | ---: | ---: |
| `0x13D4` | `45` | `2` | `0.033` |

Then aligned string records resume:

| off | id | chars | value |
| --- | ---: | ---: | --- |
| `0x13E4` | `46` | `13` | `theActualTime` |
| `0x140C` | `47` | `17` | `timeFromLastFrame` |
| `0x143C` | `48` | `9` | `timeGreen` |
| `0x145C` | `49` | `13` | `timeStartLine` |
| `0x1484` | `50` | `16` | `stagingTimeLimit` |
| `0x14B0` | `51` | `12` | `lightDelayTO` |
| `0x14D4` | `52` | `6` | `object` |
| `0x14EC` | `53` | `6` | `forget` |
| `0x1504` | `54` | `8` | `lightTO1` |
| `0x1520` | `55` | `8` | `lightTO2` |
| `0x153C` | `56` | `11` | `runInterval` |
| `0x1560` | `57` | `2` | `rt` |
| `0x1570` | `58` | `9` | `undefined` |
| `0x1590` | `59` | `2` | `et` |
| `0x15A0` | `60` | `2` | `ts` |
| `0x15B0` | `61` | `2` | `bt` |
| `0x15C0` | `62` | `4` | `slip` |
| `0x15D4` | `63` | `3` | `rpm` |
| `0x15E8` | `64` | `7` | `idleRPM` |
| `0x1604` | `65` | `1` | `N` |
| `0x1614` | `66` | `1` | `w` |
| `0x1624` | `67` | `4` | `c0_4` |
| `0x1638` | `68` | `9` | `getTorque` |

At `0x1658`, the aligned table shape ends and the next raw block begins.

## Structural result

The later symbol neighborhood is not just one cluster of stray UTF-16 strings. It is a real aligned table with:

- a long string-only run from `id=0..44`
- one scalar record at `id=45`
- another short mixed tail from `id=46..68`

That is strong bin-only evidence for a named-state table following the two earlier raw bytecode-pattern regions.
