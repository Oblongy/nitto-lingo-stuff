# Lscr-109.bin-only pass 22: repeated-token core subfamilies

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Method:
- use pass20 flank data and pass21 position templates
- split repeated-core instances into exact subfamilies where multiple fields co-vary together

Recovered subfamilies:

1. `socketMessageHandler` `count5_word7_window15`
- family A
  - offsets:
    - `0x0DB8`
    - `0x0DFC`
    - `0x0E1C`
  - distinguishing fields:
    - `pos11 = 1600`
    - `pos14 = 0200`
  - shared post4:
    - `00163D00`
- family B
  - offsets:
    - `0x0EDC`
    - `0x0F1C`
  - distinguishing fields:
    - `pos11 = 2500`
  - shared post4:
    - `00253D00`

2. `executeCall` `count3_word8_window16`
- family A
  - offsets:
    - `0x1906`
    - `0x1950`
  - distinguishing fields:
    - `pos3 = 5627`
    - `pos12 = 5651`
    - `pos13 = 0100`
    - `pos15 = 3B0B`
  - shared flanks:
    - pre4 `07002756`
    - post4 `51560001`
- family B
  - offset:
    - `0x1934`
  - distinguishing fields:
    - `pos3 = 5615`
    - `pos12 = 5451`
    - `pos13 = 0000`
    - `pos15 = 120E`
  - shared flanks:
    - pre4 `07001556`
    - post4 `51540000`

Strict result:
- the repeated cores are not single uniform templates
- they split into smaller exact subfamilies with consistent co-varying fields

Still unresolved:
- this pass does not assign semantic names to any of the varying fields
