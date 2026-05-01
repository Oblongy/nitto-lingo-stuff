# Lscr-109.bin-only pass 20: repeated-token core instance flanks

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Method:
- use the repeated cores from pass18
- record the exact 4 bytes immediately before and immediately after each core instance

Exact result:

1. `socketMessageHandler` count5_word7 core
- core byte length: `14`
- instance flanks:
  - `0x0DB8..0x0DC5` pre4 `0012033B` post4 `00163D00`
  - `0x0DFC..0x0E09` pre4 `0018033B` post4 `00163D00`
  - `0x0E1C..0x0E29` pre4 `06001B3B` post4 `00163D00`
  - `0x0EDC..0x0EE9` pre4 `0600263B` post4 `00253D00`
  - `0x0F1C..0x0F29` pre4 `07001F3B` post4 `00253D00`
- strict observation:
  - first three instances share post4 `00163D00`
  - last two instances share post4 `00253D00`

2. `executeCall` count4_word5 core
- core byte length: `10`
- instance flanks:
  - `0x18F6..0x18FF` pre4 `04350007` post4 `08120700`
  - `0x1924..0x192D` pre4 `35000C1B` post4 `0D120700`
  - `0x1940..0x1949` pre4 `35000A1B` post4 `0E120700`
  - `0x196E..0x1977` pre4 `35000C1B` post4 `08124400`

3. `executeCall` count3_word8 core
- core byte length: `16`
- instance flanks:
  - `0x1906..0x1915` pre4 `07002756` post4 `51560001`
  - `0x1934..0x1943` pre4 `07001556` post4 `51540000`
  - `0x1950..0x195F` pre4 `07002756` post4 `51560001`
- strict observation:
  - first and third instances share both pre4 and post4
  - the middle instance differs on both sides

Strict result:
- the repeated cores are not isolated; they sit inside partially stable local templates
- `socketMessageHandler` shows a two-suffix split on the count5 core
- `executeCall` shows stable flanks for some repeated-core instances but not all

Still unresolved:
- this pass does not assign semantic meaning to any flank bytes
