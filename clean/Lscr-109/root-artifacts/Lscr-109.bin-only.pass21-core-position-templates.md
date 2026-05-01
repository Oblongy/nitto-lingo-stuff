# Lscr-109.bin-only pass 21: repeated-token core position templates

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Method:
- for each repeated-core window from pass20
- compare instances word-by-word
- mark each word position as fixed or varying

Exact templates:

1. `socketMessageHandler` `count5_word7_window15`
- fixed positions:
  - `4=1300`
  - `5=3D39`
  - `6=1400`
  - `7=003A`
  - `8=3501`
  - `9=1500`
  - `10=3D39`
  - `12=003D`
- varying positions:
  - `0 in {5939,0006,003A,3500}`
  - `1 in {8274,0004,5102,1F00}`
  - `2 in {1200,1800,0006,0007}`
  - `3 in {3B03,3B1B,3B26,3B1F}`
  - `11 in {1600,2500}`
  - `13 in {3A17,3A19,3A1A,5626,3B27}`
  - `14 in {0200,0000,0F00}`

2. `executeCall` `count4_word5_window13`
- fixed positions:
  - `4=571B`
  - `5=0100`
  - `6=5451`
  - `7=0000`
  - `8=003D`
- varying positions:
  - `0 in {1B06,3B0B,3B09}`
  - `1 in {003B,0400}`
  - `2 in {3504,0035}`
  - `3 in {0700,1B0C,1B0A}`
  - `9 in {1208,120D,120E}`
  - `10 in {0007,0044}`
  - `11 in {5627,5615,5414}`
  - `12 in {0100,0000}`

3. `executeCall` `count3_word8_window16`
- fixed positions:
  - `0=003D`
  - `2=0007`
  - `4=0100`
  - `5=003D`
  - `6=3B09`
  - `7=0400`
  - `8=0035`
  - `9=1B0A`
  - `10=571B`
  - `11=0100`
  - `14=003D`
- varying positions:
  - `1 in {1208,120D,120E}`
  - `3 in {5627,5615}`
  - `12 in {5651,5451}`
  - `13 in {0100,0000}`
  - `15 in {3B0B,120E}`

Strict result:
- these repeated cores are now exact fixed/varying templates, not just repeated substrings
- this is the tightest current bin-only structure inside the long opaque islands

Still unresolved:
- the template words are still undecoded as semantics
