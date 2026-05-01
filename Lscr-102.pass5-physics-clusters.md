# Lscr-102 Pass 5 Main Physics Clusters

## timeFromLastFrame

Hits: 31

```text
0031: 16 07 00 0B  op_16 branch? target/imm=11
0035: 41           op_41
0036: 35 00 01     op_35 arg=1 ; "c1"
0039: 55 00 00     op_55 arg=0 ; "c0"
003C: 51           op_51
003D: 41           op_41
003E: 35 00 02     op_35 arg=2 ; "timeFromLastFrame"
0041: 41           op_41
0042: 35 00 00     op_35 arg=0 ; "c0"
0045: 16 07 00 50  op_16 branch? target/imm=80
0049: 41           op_41
004A: 3B 00 04     op_3B arg=4 ; "_system"
004D: 35 00 05     op_35 arg=5 ; "milliseconds"
0050: 41           op_41
0051: 35 00 02     op_35 arg=2 ; "timeFromLastFrame"
0054: 1C           op_1C
```

```text
0042: 35 00 00     op_35 arg=0 ; "c0"
0045: 16 07 00 50  op_16 branch? target/imm=80
0049: 41           op_41
004A: 3B 00 04     op_3B arg=4 ; "_system"
004D: 35 00 05     op_35 arg=5 ; "milliseconds"
0050: 41           op_41
0051: 35 00 02     op_35 arg=2 ; "timeFromLastFrame"
0054: 1C           op_1C
0055: 83 41 35     op_83 arg=16693
0058: 00           op_00
0059: 06 1E 36     op_06 jump?/imm=7734
005C: 00           op_00
005D: 03           op_03
005E: 51           op_51
005F: 41           op_41
0060: 41           op_41
```

```text
0091: 1E           op_1E
0092: 36 00 09     op_36 arg=9 ; "avgFps"
0095: 51           op_51
0096: 41           op_41
0097: 3B 00 04     op_3B arg=4 ; "_system"
009A: 35 00 05     op_35 arg=5 ; "milliseconds"
009D: 36 00 02     op_36 arg=2 ; "timeFromLastFrame"
00A0: 51           op_51
00A1: 41           op_41
00A2: 35 00 0B     op_35 arg=11 ; "calculateExtraHpi"
00A5: 39           op_39
00A6: 3A 00 00     op_3A arg=0 ; "c0"
00A9: 51           op_51
00AA: 41           op_41
00AB: 35 00 0C     op_35 arg=12 ; "carV"
00AE: 41           op_41
```

```text
0117: 41           op_41
0118: 35 00 1A     op_35 arg=26 ; "stockRedLine"
011B: 1E           op_1E
011C: 41           op_41
011D: 35 00 1B     op_35 arg=27 ; "c1_25"
0120: 1E           op_1E
0121: 57 00 02     op_57 arg=2 ; "timeFromLastFrame"
0124: 51           op_51
0125: 56 00 02     op_56 arg=2 ; "timeFromLastFrame"
0128: 41           op_41
0129: 35 00 18     op_35 arg=24 ; "NOS"
012C: 16 07 00 0B  op_16 branch? target/imm=11
0130: 41           op_41
0131: 35 00 18     op_35 arg=24 ; "NOS"
0134: 57 00 02     op_57 arg=2 ; "timeFromLastFrame"
0137: 51           op_51
```

Additional hits omitted: 27

## calculateExtraHpi

Hits: 6

```text
0096: 41           op_41
0097: 3B 00 04     op_3B arg=4 ; "_system"
009A: 35 00 05     op_35 arg=5 ; "milliseconds"
009D: 36 00 02     op_36 arg=2 ; "timeFromLastFrame"
00A0: 51           op_51
00A1: 41           op_41
00A2: 35 00 0B     op_35 arg=11 ; "calculateExtraHpi"
00A5: 39           op_39
00A6: 3A 00 00     op_3A arg=0 ; "c0"
00A9: 51           op_51
00AA: 41           op_41
00AB: 35 00 0C     op_35 arg=12 ; "carV"
00AE: 41           op_41
00AF: 35 00 03     op_35 arg=3 ; "theTime"
00B2: 1D           op_1D
00B3: 41           op_41
```

```text
0401: 41           op_41
0402: 35 00 1C     op_35 arg=28 ; "hp"
0405: 1D           op_1D
0406: 41           op_41
0407: 35 00 06     op_35 arg=6 ; "c1000"
040A: 1E           op_1E
040B: 57 00 0B     op_57 arg=11 ; "calculateExtraHpi"
040E: 51           op_51
040F: 56 00 0B     op_56 arg=11 ; "calculateExtraHpi"
0412: 41           op_41
0413: 35 00 40     op_35 arg=64 ; "raceGas"
0416: 16 07 00 21  op_16 branch? target/imm=33
041A: 56 00 01     op_56 arg=1 ; "c1"
041D: 41           op_41
041E: 35 00 41     op_35 arg=65 ; "c0_02"
0421: 41           op_41
```

```text
0405: 1D           op_1D
0406: 41           op_41
0407: 35 00 06     op_35 arg=6 ; "c1000"
040A: 1E           op_1E
040B: 57 00 0B     op_57 arg=11 ; "calculateExtraHpi"
040E: 51           op_51
040F: 56 00 0B     op_56 arg=11 ; "calculateExtraHpi"
0412: 41           op_41
0413: 35 00 40     op_35 arg=64 ; "raceGas"
0416: 16 07 00 21  op_16 branch? target/imm=33
041A: 56 00 01     op_56 arg=1 ; "c1"
041D: 41           op_41
041E: 35 00 41     op_35 arg=65 ; "c0_02"
0421: 41           op_41
0422: 35 00 40     op_35 arg=64 ; "raceGas"
0425: 1D           op_1D
```

```text
041A: 56 00 01     op_56 arg=1 ; "c1"
041D: 41           op_41
041E: 35 00 41     op_35 arg=65 ; "c0_02"
0421: 41           op_41
0422: 35 00 40     op_35 arg=64 ; "raceGas"
0425: 1D           op_1D
0426: 56 00 0B     op_56 arg=11 ; "calculateExtraHpi"
0429: 1E           op_1E
042A: 1B           op_1B
042B: 57 00 01     op_57 arg=1 ; "c1"
042E: 51           op_51
042F: 41           op_41
0430: 3E           op_3E
0431: 36 00 40     op_36 arg=64 ; "raceGas"
0434: 51           op_51
0435: 06 00 1C     op_06 jump?/imm=28
```

Additional hits omitted: 2

## boostCreatedPower

Hits: 6

```text
00D0: 41           op_41
00D1: 35 00 00     op_35 arg=0 ; "c0"
00D4: 12 07 02 CE  op_12 branch? target/imm=718
00D8: 41           op_41
00D9: 35 00 10     op_35 arg=16 ; "hpi"
00DC: 41           op_41
00DD: 35 00 11     op_35 arg=17 ; "boostCreatedPower"
00E0: 1B           op_1B
00E1: 41           op_41
00E2: 35 00 12     op_35 arg=18 ; "systemPower"
00E5: 1B           op_1B
00E6: 41           op_41
00E7: 35 00 13     op_35 arg=19 ; "ECUtune"
00EA: 1B           op_1B
00EB: 41           op_41
00EC: 35 00 14     op_35 arg=20 ; "compressionPowerDelta"
```

```text
03C9: 1E           op_1E
03CA: 36 00 1C     op_36 arg=28 ; "hp"
03CD: 51           op_51
03CE: 41           op_41
03CF: 35 00 10     op_35 arg=16 ; "hpi"
03D2: 41           op_41
03D3: 35 00 11     op_35 arg=17 ; "boostCreatedPower"
03D6: 1B           op_1B
03D7: 41           op_41
03D8: 35 00 12     op_35 arg=18 ; "systemPower"
03DB: 1B           op_1B
03DC: 41           op_41
03DD: 35 00 13     op_35 arg=19 ; "ECUtune"
03E0: 1B           op_1B
03E1: 41           op_41
03E2: 35 00 14     op_35 arg=20 ; "compressionPowerDelta"
```

```text
05E6: 51           op_51
05E7: 41           op_41
05E8: 35 00 0C     op_35 arg=12 ; "carV"
05EB: 41           op_41
05EC: 35 00 3C     op_35 arg=60 ; "vToMph"
05EF: 1D           op_1D
05F0: 57 00 11     op_57 arg=17 ; "boostCreatedPower"
05F3: 51           op_51
05F4: 41           op_41
05F5: 35 00 47     op_35 arg=71 ; "UsInit"
05F8: 57 00 12     op_57 arg=18 ; "systemPower"
05FB: 51           op_51
05FC: 41           op_41
05FD: 35 00 48     op_35 arg=72 ; "tireStick"
0600: 3E           op_3E
0601: 16 07 00 14  op_16 branch? target/imm=20
```

```text
0612: 57 00 12     op_57 arg=18 ; "systemPower"
0615: 51           op_51
0616: 41           op_41
0617: 35 00 4A     op_35 arg=74 ; "UkInit"
061A: 57 00 13     op_57 arg=19 ; "ECUtune"
061D: 51           op_51
061E: 56 00 11     op_56 arg=17 ; "boostCreatedPower"
0621: 41           op_41
0622: 35 00 00     op_35 arg=0 ; "c0"
0625: 16 07 00 49  op_16 branch? target/imm=73
0629: 56 00 11     op_56 arg=17 ; "boostCreatedPower"
062C: 41           op_41
062D: 35 00 23     op_35 arg=35 ; "c100"
0630: 1E           op_1E
0631: 57 00 14     op_57 arg=20 ; "compressionPowerDelta"
0634: 51           op_51
```

Additional hits omitted: 2

## engineDamage

Hits: 13

```text
00FF: 35 00 0A     op_35 arg=10 ; "c0"
0102: 36 00 26     op_36 arg=38 ; "mph"
0105: 51           op_51
0106: 41           op_41
0107: 41           op_41
0108: 35 00 0A     op_35 arg=10 ; "c0"
010B: 36 00 27     op_36 arg=39 ; "engineDamage"
010E: 51           op_51
010F: 41           op_41
0110: 42           op_42
0111: 36 00 28     op_36 arg=40 ; "isEngineLightOn"
0114: 51           op_51
0115: 41           op_41
0116: 41           op_41
0117: 35 00 0A     op_35 arg=10 ; "c0"
011A: 36 00 29     op_36 arg=41 ; "gearValue"
```

```text
00E7: 35 00 13     op_35 arg=19 ; "ECUtune"
00EA: 1B           op_1B
00EB: 41           op_41
00EC: 35 00 14     op_35 arg=20 ; "compressionPowerDelta"
00EF: 1B           op_1B
00F0: 41           op_41
00F1: 35 00 15     op_35 arg=21 ; "engineDamage"
00F4: 1C           op_1C
00F5: 57 00 01     op_57 arg=1 ; "c1"
00F8: 51           op_51
00F9: 41           op_41
00FA: 35 00 16     op_35 arg=22 ; "isNos"
00FD: 3F           op_3F
00FE: 12           op_12
00FF: 45           op_45
0100: 00           op_00
```

```text
03DD: 35 00 13     op_35 arg=19 ; "ECUtune"
03E0: 1B           op_1B
03E1: 41           op_41
03E2: 35 00 14     op_35 arg=20 ; "compressionPowerDelta"
03E5: 1B           op_1B
03E6: 41           op_41
03E7: 35 00 15     op_35 arg=21 ; "engineDamage"
03EA: 1C           op_1C
03EB: 57 00 01     op_57 arg=1 ; "c1"
03EE: 51           op_51
03EF: 41           op_41
03F0: 35 00 40     op_35 arg=64 ; "raceGas"
03F3: 3E           op_3E
03F4: 16 07 00 5C  op_16 branch? target/imm=92
03F8: 41           op_41
03F9: 35 00 37     op_35 arg=55 ; "c5"
```

```text
0780: 41           op_41
0781: 35 00 00     op_35 arg=0 ; "c0"
0784: 36 00 0E     op_36 arg=14 ; "carAccel"
0787: 51           op_51
0788: 41           op_41
0789: 35 00 00     op_35 arg=0 ; "c0"
078C: 57 00 15     op_57 arg=21 ; "engineDamage"
078F: 51           op_51
0790: 06 00 18     op_06 jump?/imm=24
0793: 41           op_41
0794: 35 00 0C     op_35 arg=12 ; "carV"
0797: 41           op_41
0798: 35 00 00     op_35 arg=0 ; "c0"
079B: 14 07 00 0C  op_14 branch? target/imm=12
079F: 41           op_41
07A0: 41           op_41
```

Additional hits omitted: 9

## runEngineNOSCB

Hits: 15

```text
015F: 36 00 17     op_36 arg=23 ; "nitrousRemaining"
0162: 51           op_51
0163: 3B 00 1F     op_3B arg=31 ; "sprite"
0166: 39           op_39
0167: 3D 00 20     op_3D arg=32 ; "flashSP"
016A: 3A 00 01     op_3A arg=1 ; "c1"
016D: 35 00 21     op_35 arg=33 ; "runEngineNOSCB"
0170: 39           op_39
0171: 41           op_41
0172: 35 00 17     op_35 arg=23 ; "nitrousRemaining"
0175: 41           op_41
0176: 35 00 22     op_35 arg=34 ; "nitrousTankSize"
0179: 1E           op_1E
017A: 41           op_41
017B: 35 00 23     op_35 arg=35 ; "c100"
017E: 1D           op_1D
```

```text
04BB: 36 00 17     op_36 arg=23 ; "nitrousRemaining"
04BE: 51           op_51
04BF: 3B 00 1F     op_3B arg=31 ; "sprite"
04C2: 39           op_39
04C3: 3D 00 20     op_3D arg=32 ; "flashSP"
04C6: 3A 00 01     op_3A arg=1 ; "c1"
04C9: 35 00 21     op_35 arg=33 ; "runEngineNOSCB"
04CC: 39           op_39
04CD: 41           op_41
04CE: 35 00 17     op_35 arg=23 ; "nitrousRemaining"
04D1: 41           op_41
04D2: 35 00 22     op_35 arg=34 ; "nitrousTankSize"
04D5: 1E           op_1E
04D6: 41           op_41
04D7: 35 00 23     op_35 arg=35 ; "c100"
04DA: 1D           op_1D
```

```text
0FC7: 35 00 1D     op_35 arg=29 ; "c10000"
0FCA: 1D           op_1D
0FCB: 3A 00 01     op_3A arg=1 ; "c1"
0FCE: 41           op_41
0FCF: 35 00 23     op_35 arg=35 ; "c100"
0FD2: 1E           op_1E
0FD3: 57 00 21     op_57 arg=33 ; "runEngineNOSCB"
0FD6: 51           op_51
0FD7: 3B 00 58     op_3B arg=88 ; "Math"
0FDA: 35 00 59     op_35 arg=89 ; "floor"
0FDD: 39           op_39
0FDE: 41           op_41
0FDF: 35 00 8C     op_35 arg=140 ; "oilDamage"
0FE2: 41           op_41
0FE3: 35 00 1D     op_35 arg=29 ; "c10000"
0FE6: 1D           op_1D
```

```text
10A0: 35 00 23     op_35 arg=35 ; "c100"
10A3: 16 07 00 0B  op_16 branch? target/imm=11
10A7: 41           op_41
10A8: 35 00 23     op_35 arg=35 ; "c100"
10AB: 57 00 20     op_57 arg=32 ; "flashSP"
10AE: 51           op_51
10AF: 56 00 21     op_56 arg=33 ; "runEngineNOSCB"
10B2: 41           op_41
10B3: 35 00 23     op_35 arg=35 ; "c100"
10B6: 16 07 00 0B  op_16 branch? target/imm=11
10BA: 41           op_41
10BB: 35 00 23     op_35 arg=35 ; "c100"
10BE: 57 00 21     op_57 arg=33 ; "runEngineNOSCB"
10C1: 51           op_51
10C2: 56 00 22     op_56 arg=34 ; "nitrousTankSize"
10C5: 41           op_41
```

Additional hits omitted: 11

## getTorque

Hits: 2

```text
0382: 1D           op_1D
0383: 83 1D 36     op_83 arg=7478
0386: 00           op_00
0387: 19           op_19
0388: 51           op_51
0389: 41           op_41
038A: 35 00 3A     op_35 arg=58 ; "getTorque"
038D: 39           op_39
038E: 3A 00 00     op_3A arg=0 ; "c0"
0391: 51           op_51
0392: 41           op_41
0393: 41           op_41
0394: 35 00 0C     op_35 arg=12 ; "carV"
0397: 41           op_41
0398: 35 00 3C     op_35 arg=60 ; "vToMph"
039B: 1D           op_1D
```

```text
096C: 1D           op_1D
096D: 83 1D 36     op_83 arg=7478
0970: 00           op_00
0971: 19           op_19
0972: 51           op_51
0973: 41           op_41
0974: 35 00 3A     op_35 arg=58 ; "getTorque"
0977: 39           op_39
0978: 3A 00 00     op_3A arg=0 ; "c0"
097B: 51           op_51
097C: 41           op_41
097D: 35 00 3D     op_35 arg=61 ; "slip"
0980: 07 00 29     op_07 jump?/imm=41
0983: 41           op_41
0984: 41           op_41
0985: 35 00 35     op_35 arg=53 ; "speedoV"
```

## raceGas

Hits: 8

```text
03E6: 41           op_41
03E7: 35 00 15     op_35 arg=21 ; "engineDamage"
03EA: 1C           op_1C
03EB: 57 00 01     op_57 arg=1 ; "c1"
03EE: 51           op_51
03EF: 41           op_41
03F0: 35 00 40     op_35 arg=64 ; "raceGas"
03F3: 3E           op_3E
03F4: 16 07 00 5C  op_16 branch? target/imm=92
03F8: 41           op_41
03F9: 35 00 37     op_35 arg=55 ; "c5"
03FC: 41           op_41
03FD: 35 00 07     op_35 arg=7 ; "theActualTime"
0400: 1D           op_1D
0401: 41           op_41
0402: 35 00 1C     op_35 arg=28 ; "hp"
```

```text
0407: 35 00 06     op_35 arg=6 ; "c1000"
040A: 1E           op_1E
040B: 57 00 0B     op_57 arg=11 ; "calculateExtraHpi"
040E: 51           op_51
040F: 56 00 0B     op_56 arg=11 ; "calculateExtraHpi"
0412: 41           op_41
0413: 35 00 40     op_35 arg=64 ; "raceGas"
0416: 16 07 00 21  op_16 branch? target/imm=33
041A: 56 00 01     op_56 arg=1 ; "c1"
041D: 41           op_41
041E: 35 00 41     op_35 arg=65 ; "c0_02"
0421: 41           op_41
0422: 35 00 40     op_35 arg=64 ; "raceGas"
0425: 1D           op_1D
0426: 56 00 0B     op_56 arg=11 ; "calculateExtraHpi"
0429: 1E           op_1E
```

```text
0413: 35 00 40     op_35 arg=64 ; "raceGas"
0416: 16 07 00 21  op_16 branch? target/imm=33
041A: 56 00 01     op_56 arg=1 ; "c1"
041D: 41           op_41
041E: 35 00 41     op_35 arg=65 ; "c0_02"
0421: 41           op_41
0422: 35 00 40     op_35 arg=64 ; "raceGas"
0425: 1D           op_1D
0426: 56 00 0B     op_56 arg=11 ; "calculateExtraHpi"
0429: 1E           op_1E
042A: 1B           op_1B
042B: 57 00 01     op_57 arg=1 ; "c1"
042E: 51           op_51
042F: 41           op_41
0430: 3E           op_3E
0431: 36 00 40     op_36 arg=64 ; "raceGas"
```

```text
0429: 1E           op_1E
042A: 1B           op_1B
042B: 57 00 01     op_57 arg=1 ; "c1"
042E: 51           op_51
042F: 41           op_41
0430: 3E           op_3E
0431: 36 00 40     op_36 arg=64 ; "raceGas"
0434: 51           op_51
0435: 06 00 1C     op_06 jump?/imm=28
0438: 56 00 01     op_56 arg=1 ; "c1"
043B: 41           op_41
043C: 35 00 41     op_35 arg=65 ; "c0_02"
043F: 1B           op_1B
0440: 57 00 01     op_57 arg=1 ; "c1"
0443: 51           op_51
0444: 41           op_41
```

Additional hits omitted: 4

## runEngineTractionLightCB

Hits: 4

```text
06D2: 36 00 3D     op_36 arg=61 ; "slip"
06D5: 51           op_51
06D6: 3B 00 1F     op_3B arg=31 ; "sprite"
06D9: 39           op_39
06DA: 3D 00 20     op_3D arg=32 ; "flashSP"
06DD: 3A 00 01     op_3A arg=1 ; "c1"
06E0: 35 00 4F     op_35 arg=79 ; "runEngineTractionLightCB"
06E3: 39           op_39
06E4: 42           op_42
06E5: 3A 00 01     op_3A arg=1 ; "c1"
06E8: 51           op_51
06E9: 06 00 6C     op_06 jump?/imm=108
06EC: 56 00 09     op_56 arg=9 ; "avgFps"
06EF: 56 00 12     op_56 arg=18 ; "systemPower"
06F2: 41           op_41
06F3: 35 00 4E     op_35 arg=78 ; "N"
```

```text
0728: 36 00 3D     op_36 arg=61 ; "slip"
072B: 51           op_51
072C: 3B 00 1F     op_3B arg=31 ; "sprite"
072F: 39           op_39
0730: 3D 00 20     op_3D arg=32 ; "flashSP"
0733: 3A 00 01     op_3A arg=1 ; "c1"
0736: 35 00 4F     op_35 arg=79 ; "runEngineTractionLightCB"
0739: 39           op_39
073A: 43           op_43
073B: 3A 00 01     op_3A arg=1 ; "c1"
073E: 51           op_51
073F: 06 00 16     op_06 jump?/imm=22
0742: 41           op_41
0743: 56 00 09     op_56 arg=9 ; "avgFps"
0746: 41           op_41
0747: 35 00 30     op_35 arg=48 ; "w"
```

```text
007A: 36 00 07     op_36 arg=7 ; "slip"
007D: 51           op_51
007E: 3B 00 08     op_3B arg=8 ; "sprite"
0081: 39           op_39
0082: 3D 00 09     op_3D arg=9 ; "flashSP"
0085: 3A 00 01     op_3A arg=1 ; "grs"
0088: 35 00 0A     op_35 arg=10 ; "runEngineTractionLightCB"
008B: 39           op_39
008C: 42           op_42
008D: 3A 00 01     op_3A arg=1 ; "grs"
0090: 51           op_51
0091: 41           op_41
0092: 41           op_41
0093: 35 00 0C     op_35 arg=12 ; "speedoV"
0096: 36 00 0B     op_36 arg=11 ; "engineV"
0099: 51           op_51
```

```text
0093: 36 00 0B     op_36 arg=11 ; "slip"
0096: 51           op_51
0097: 3B 00 0C     op_3B arg=12 ; "sprite"
009A: 39           op_39
009B: 3D 00 0D     op_3D arg=13 ; "flashSP"
009E: 3A 00 01     op_3A arg=1 ; "<special 7:-1>"
00A1: 35 00 0E     op_35 arg=14 ; "runEngineTractionLightCB"
00A4: 39           op_39
00A5: 42           op_42
00A6: 3A 00 01     op_3A arg=1 ; "<special 7:-1>"
00A9: 51           op_51
00AA: 41           op_41
00AB: 41           op_41
00AC: 35 00 09     op_35 arg=9 ; "speedoV"
00AF: 36 00 0A     op_36 arg=10 ; "engineV"
00B2: 51           op_51
```

## clutchFeather

Hits: 4

```text
08D1: 1D           op_1D
08D2: 1C           op_1C
08D3: 36 00 35     op_36 arg=53 ; "speedoV"
08D6: 51           op_51
08D7: 06 00 66     op_06 jump?/imm=102
08DA: 41           op_41
08DB: 35 00 53     op_35 arg=83 ; "clutchFeather"
08DE: 41           op_41
08DF: 35 00 54     op_35 arg=84 ; "c0_18"
08E2: 1B           op_1B
08E3: 57 00 18     op_57 arg=24 ; "NOS"
08E6: 51           op_51
08E7: 41           op_41
08E8: 0C           op_0C
08E9: 35 00 35     op_35 arg=53 ; "speedoV"
08EC: 56 00 18     op_56 arg=24 ; "NOS"
```

```text
0017: 41           op_41
0018: 35 00 00     op_35 arg=0 ; "c0_05"
001B: 14 07 00 0F  op_14 branch? target/imm=15
001F: 41           op_41
0020: 41           op_41
0021: 35 00 00     op_35 arg=0 ; "c0_05"
0024: 36 00 01     op_36 arg=1 ; "clutchFeather"
0027: 51           op_51
0028: 06 00 22     op_06 jump?/imm=34
002B: 54 00 00     op_54 arg=0 ; "c0_05"
002E: 41           op_41
002F: 35 00 02     op_35 arg=2 ; "c0_2"
0032: 16 07 00 0F  op_16 branch? target/imm=15
0036: 41           op_41
0037: 41           op_41
0038: 35 00 02     op_35 arg=2 ; "c0_2"
```

```text
002E: 41           op_41
002F: 35 00 02     op_35 arg=2 ; "c0_2"
0032: 16 07 00 0F  op_16 branch? target/imm=15
0036: 41           op_41
0037: 41           op_41
0038: 35 00 02     op_35 arg=2 ; "c0_2"
003B: 36 00 01     op_36 arg=1 ; "clutchFeather"
003E: 51           op_51
003F: 06 00 0B     op_06 jump?/imm=11
0042: 41           op_41
0043: 54 00 00     op_54 arg=0 ; "c0_05"
0046: 36 00 01     op_36 arg=1 ; "clutchFeather"
0049: 51           op_51
```

## Block 16 offset=37252 length=2068 codeLen=539
```

```text
0038: 35 00 02     op_35 arg=2 ; "c0_2"
003B: 36 00 01     op_36 arg=1 ; "clutchFeather"
003E: 51           op_51
003F: 06 00 0B     op_06 jump?/imm=11
0042: 41           op_41
0043: 54 00 00     op_54 arg=0 ; "c0_05"
0046: 36 00 01     op_36 arg=1 ; "clutchFeather"
0049: 51           op_51
```

## Block 16 offset=37252 length=2068 codeLen=539

Names: timeAnchor, c0, goodCounterRT, badCounterRT, goodCounterET, badCounterET, lightDelayTO, object, forget, staging, gearValue, gearUp, raceType, KOTH, KREADY, createMd5Hash, QM, RREADY, RIVAL, TEAMRIVAL

```text
0014: 41           op_41
```

## redLine

Hits: 4

```text
0088: 3B 00 06     op_3B arg=6 ; "parseInt"
008B: 39           op_39
008C: 56 00 01     op_56 arg=1 ; "xmlparser"
008F: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
0092: 35 00 0F     op_35 arg=15 ; "n"
0095: 3A 00 01     op_3A arg=1 ; "xmlparser"
0098: 36 00 0E     op_36 arg=14 ; "redLine"
009B: 51           op_51
009C: 41           op_41
009D: 3B 00 06     op_3B arg=6 ; "parseInt"
00A0: 39           op_39
00A1: 56 00 01     op_56 arg=1 ; "xmlparser"
00A4: 35 00 07     op_35 arg=7 ; "!ATTRIBUTES"
00A7: 35 00 11     op_35 arg=17 ; "o"
00AA: 3A 00 01     op_3A arg=1 ; "xmlparser"
00AD: 36 00 10     op_36 arg=16 ; "revLimiter"
```

```text
0909: 45           op_45
090A: 00           op_00
090B: 16           op_16
090C: 41           op_41
090D: 35 00 19     op_35 arg=25 ; "rpm"
0910: 41           op_41
0911: 35 00 55     op_35 arg=85 ; "redLine"
0914: 1E           op_1E
0915: 41           op_41
0916: 35 00 43     op_35 arg=67 ; "c8"
0919: 41           op_41
091A: 35 00 50     op_35 arg=80 ; "c10"
091D: 1E           op_1E
091E: 14 07 00 1E  op_14 branch? target/imm=30
0922: 41           op_41
0923: 41           op_41
```

```text
0928: 35 00 1E     op_35 arg=30 ; "c2"
092B: 1E           op_1E
092C: 3F           op_3F
092D: 41           op_41
092E: 35 00 19     op_35 arg=25 ; "rpm"
0931: 41           op_41
0932: 35 00 55     op_35 arg=85 ; "redLine"
0935: 1E           op_1E
0936: 1C           op_1C
0937: 83 1D 36     op_83 arg=7478
093A: 00           op_00
093B: 0C           op_0C
093C: 51           op_51
093D: 06 00 0C     op_06 jump?/imm=12
0940: 41           op_41
0941: 41           op_41
```

```text
009F: 1B           op_1B
00A0: 1B           op_1B
00A1: 57 00 00     op_57 arg=0 ; ""
00A4: 51           op_51
00A5: 56 00 00     op_56 arg=0 ; ""
00A8: 41           op_41
00A9: 35 00 09     op_35 arg=9 ; "redLine"
00AC: 3D 00 02     op_3D arg=2 ; ","
00AF: 1B           op_1B
00B0: 1B           op_1B
00B1: 57 00 00     op_57 arg=0 ; ""
00B4: 51           op_51
00B5: 56 00 00     op_56 arg=0 ; ""
00B8: 41           op_41
00B9: 35 00 0A     op_35 arg=10 ; "revLimiter"
00BC: 3D 00 02     op_3D arg=2 ; ","
```

## brakeDecleration

Hits: 4

```text
02C8: 51           op_51
02C9: 41           op_41
02CA: 35 00 33     op_35 arg=51 ; "brake"
02CD: 07 00 0F     op_07 jump?/imm=15
02D0: 41           op_41
02D1: 41           op_41
02D2: 35 00 34     op_35 arg=52 ; "brakeDecleration"
02D5: 36 00 0E     op_36 arg=14 ; "carAccel"
02D8: 51           op_51
02D9: 06 00 0D     op_06 jump?/imm=13
02DC: 41           op_41
02DD: 41           op_41
02DE: 35 00 1E     op_35 arg=30 ; "c2"
02E1: 22           op_22
02E2: 36 00 0E     op_36 arg=14 ; "carAccel"
02E5: 51           op_51
```

```text
07C4: 51           op_51
07C5: 41           op_41
07C6: 35 00 33     op_35 arg=51 ; "brake"
07C9: 07 00 3A     op_07 jump?/imm=58
07CC: 41           op_41
07CD: 41           op_41
07CE: 35 00 34     op_35 arg=52 ; "brakeDecleration"
07D1: 36 00 0E     op_36 arg=14 ; "carAccel"
07D4: 51           op_51
07D5: 41           op_41
07D6: 35 00 34     op_35 arg=52 ; "brakeDecleration"
07D9: 57 00 15     op_57 arg=21 ; "engineDamage"
07DC: 51           op_51
07DD: 41           op_41
07DE: 35 00 0C     op_35 arg=12 ; "carV"
07E1: 41           op_41
```

```text
07CC: 41           op_41
07CD: 41           op_41
07CE: 35 00 34     op_35 arg=52 ; "brakeDecleration"
07D1: 36 00 0E     op_36 arg=14 ; "carAccel"
07D4: 51           op_51
07D5: 41           op_41
07D6: 35 00 34     op_35 arg=52 ; "brakeDecleration"
07D9: 57 00 15     op_57 arg=21 ; "engineDamage"
07DC: 51           op_51
07DD: 41           op_41
07DE: 35 00 0C     op_35 arg=12 ; "carV"
07E1: 41           op_41
07E2: 35 00 1E     op_35 arg=30 ; "c2"
07E5: 14 07 00 1D  op_14 branch? target/imm=29
07E9: 41           op_41
07EA: 41           op_41
```

```text
0279: 1B           op_1B
027A: 1B           op_1B
027B: 57 00 00     op_57 arg=0 ; ""
027E: 51           op_51
027F: 56 00 00     op_56 arg=0 ; ""
0282: 41           op_41
0283: 35 00 27     op_35 arg=39 ; "brakeDecleration"
0286: 3D 00 02     op_3D arg=2 ; ","
0289: 1B           op_1B
028A: 1B           op_1B
028B: 57 00 00     op_57 arg=0 ; ""
028E: 51           op_51
028F: 56 00 00     op_56 arg=0 ; ""
0292: 41           op_41
0293: 35 00 28     op_35 arg=40 ; "revLimiterDeceleration"
0296: 3D 00 02     op_3D arg=2 ; ","
```

## rpmGearConversion

Hits: 8

```text
01DA: 35 00 27     op_35 arg=39 ; "gr"
01DD: 1D           op_1D
01DE: 41           op_41
01DF: 35 00 28     op_35 arg=40 ; "fgr"
01E2: 1D           op_1D
01E3: 41           op_41
01E4: 35 00 29     op_35 arg=41 ; "rpmGearConversion"
01E7: 1D           op_1D
01E8: 57 00 04     op_57 arg=4 ; "_system"
01EB: 51           op_51
01EC: 56 00 04     op_56 arg=4 ; "_system"
01EF: 41           op_41
01F0: 35 00 2A     op_35 arg=42 ; "r"
01F3: 1E           op_1E
01F4: 57 00 05     op_57 arg=5 ; "milliseconds"
01F7: 51           op_51
```

```text
0375: 41           op_41
0376: 35 00 39     op_35 arg=57 ; "c50"
0379: 1D           op_1D
037A: 41           op_41
037B: 35 00 28     op_35 arg=40 ; "fgr"
037E: 41           op_41
037F: 35 00 29     op_35 arg=41 ; "rpmGearConversion"
0382: 1D           op_1D
0383: 83 1D 36     op_83 arg=7478
0386: 00           op_00
0387: 19           op_19
0388: 51           op_51
0389: 41           op_41
038A: 35 00 3A     op_35 arg=58 ; "getTorque"
038D: 39           op_39
038E: 3A 00 00     op_3A arg=0 ; "c0"
```

```text
0527: 35 00 27     op_35 arg=39 ; "gr"
052A: 1D           op_1D
052B: 41           op_41
052C: 35 00 28     op_35 arg=40 ; "fgr"
052F: 1D           op_1D
0530: 41           op_41
0531: 35 00 29     op_35 arg=41 ; "rpmGearConversion"
0534: 1D           op_1D
0535: 57 00 04     op_57 arg=4 ; "_system"
0538: 51           op_51
0539: 56 00 04     op_56 arg=4 ; "_system"
053C: 41           op_41
053D: 35 00 2A     op_35 arg=42 ; "r"
0540: 1E           op_1E
0541: 57 00 05     op_57 arg=5 ; "milliseconds"
0544: 51           op_51
```

```text
095F: 41           op_41
0960: 35 00 39     op_35 arg=57 ; "c50"
0963: 1D           op_1D
0964: 41           op_41
0965: 35 00 28     op_35 arg=40 ; "fgr"
0968: 41           op_41
0969: 35 00 29     op_35 arg=41 ; "rpmGearConversion"
096C: 1D           op_1D
096D: 83 1D 36     op_83 arg=7478
0970: 00           op_00
0971: 19           op_19
0972: 51           op_51
0973: 41           op_41
0974: 35 00 3A     op_35 arg=58 ; "getTorque"
0977: 39           op_39
0978: 3A 00 00     op_3A arg=0 ; "c0"
```

Additional hits omitted: 4

## speedoV

Hits: 20

```text
00E4: 35 00 0A     op_35 arg=10 ; "c0"
00E7: 36 00 23     op_36 arg=35 ; "carAccel"
00EA: 51           op_51
00EB: 41           op_41
00EC: 41           op_41
00ED: 35 00 0A     op_35 arg=10 ; "c0"
00F0: 36 00 24     op_36 arg=36 ; "speedoV"
00F3: 51           op_51
00F4: 41           op_41
00F5: 41           op_41
00F6: 35 00 0A     op_35 arg=10 ; "c0"
00F9: 36 00 25     op_36 arg=37 ; "engineV"
00FC: 51           op_51
00FD: 41           op_41
00FE: 41           op_41
00FF: 35 00 0A     op_35 arg=10 ; "c0"
```

```text
0310: 35 00 00     op_35 arg=0 ; "c0"
0313: 36 00 0C     op_36 arg=12 ; "carV"
0316: 51           op_51
0317: 41           op_41
0318: 41           op_41
0319: 35 00 0C     op_35 arg=12 ; "carV"
031C: 36 00 35     op_36 arg=53 ; "speedoV"
031F: 51           op_51
0320: 41           op_41
0321: 0C           op_0C
0322: 35 00 36     op_35 arg=54 ; "engineV"
0325: 56 00 0A     op_56 arg=10 ; "fpsCount"
0328: 41           op_41
0329: 35 00 03     op_35 arg=3 ; "theTime"
032C: 1D           op_1D
032D: 1B           op_1B
```

```text
06C4: 00           op_00
06C5: 0E           op_0E
06C6: 51           op_51
06C7: 41           op_41
06C8: 41           op_41
06C9: 35 00 0C     op_35 arg=12 ; "carV"
06CC: 36 00 35     op_36 arg=53 ; "speedoV"
06CF: 51           op_51
06D0: 41           op_41
06D1: 42           op_42
06D2: 36 00 3D     op_36 arg=61 ; "slip"
06D5: 51           op_51
06D6: 3B 00 1F     op_3B arg=31 ; "sprite"
06D9: 39           op_39
06DA: 3D 00 20     op_3D arg=32 ; "flashSP"
06DD: 3A 00 01     op_3A arg=1 ; "c1"
```

```text
0810: 1D           op_1D
0811: 1B           op_1B
0812: 36 00 0C     op_36 arg=12 ; "carV"
0815: 51           op_51
0816: 41           op_41
0817: 0C           op_0C
0818: 35 00 35     op_35 arg=53 ; "speedoV"
081B: 56 00 15     op_56 arg=21 ; "engineDamage"
081E: 41           op_41
081F: 35 00 03     op_35 arg=3 ; "theTime"
0822: 1D           op_1D
0823: 1B           op_1B
0824: 36 00 35     op_36 arg=53 ; "speedoV"
0827: 51           op_51
0828: 41           op_41
0829: 35 00 0C     op_35 arg=12 ; "carV"
```

Additional hits omitted: 16

## engineV

Hits: 14

```text
00ED: 35 00 0A     op_35 arg=10 ; "c0"
00F0: 36 00 24     op_36 arg=36 ; "speedoV"
00F3: 51           op_51
00F4: 41           op_41
00F5: 41           op_41
00F6: 35 00 0A     op_35 arg=10 ; "c0"
00F9: 36 00 25     op_36 arg=37 ; "engineV"
00FC: 51           op_51
00FD: 41           op_41
00FE: 41           op_41
00FF: 35 00 0A     op_35 arg=10 ; "c0"
0102: 36 00 26     op_36 arg=38 ; "mph"
0105: 51           op_51
0106: 41           op_41
0107: 41           op_41
0108: 35 00 0A     op_35 arg=10 ; "c0"
```

```text
0318: 41           op_41
0319: 35 00 0C     op_35 arg=12 ; "carV"
031C: 36 00 35     op_36 arg=53 ; "speedoV"
031F: 51           op_51
0320: 41           op_41
0321: 0C           op_0C
0322: 35 00 36     op_35 arg=54 ; "engineV"
0325: 56 00 0A     op_56 arg=10 ; "fpsCount"
0328: 41           op_41
0329: 35 00 03     op_35 arg=3 ; "theTime"
032C: 1D           op_1D
032D: 1B           op_1B
032E: 36 00 36     op_36 arg=54 ; "engineV"
0331: 51           op_51
0332: 41           op_41
0333: 35 00 36     op_35 arg=54 ; "engineV"
```

```text
0322: 35 00 36     op_35 arg=54 ; "engineV"
0325: 56 00 0A     op_56 arg=10 ; "fpsCount"
0328: 41           op_41
0329: 35 00 03     op_35 arg=3 ; "theTime"
032C: 1D           op_1D
032D: 1B           op_1B
032E: 36 00 36     op_36 arg=54 ; "engineV"
0331: 51           op_51
0332: 41           op_41
0333: 35 00 36     op_35 arg=54 ; "engineV"
0336: 41           op_41
0337: 35 00 37     op_35 arg=55 ; "c5"
033A: 14 07 00 0F  op_14 branch? target/imm=15
033E: 41           op_41
033F: 41           op_41
0340: 35 00 37     op_35 arg=55 ; "c5"
```

```text
0329: 35 00 03     op_35 arg=3 ; "theTime"
032C: 1D           op_1D
032D: 1B           op_1B
032E: 36 00 36     op_36 arg=54 ; "engineV"
0331: 51           op_51
0332: 41           op_41
0333: 35 00 36     op_35 arg=54 ; "engineV"
0336: 41           op_41
0337: 35 00 37     op_35 arg=55 ; "c5"
033A: 14 07 00 0F  op_14 branch? target/imm=15
033E: 41           op_41
033F: 41           op_41
0340: 35 00 37     op_35 arg=55 ; "c5"
0343: 36 00 36     op_36 arg=54 ; "engineV"
0346: 51           op_51
0347: 06 00 18     op_06 jump?/imm=24
```

Additional hits omitted: 10
