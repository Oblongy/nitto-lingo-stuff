# Lscr-109.bin-only pass 17: repeated-token islands inside long opaque tails

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Method:
- tokenize the two longest opaque tails as aligned 16-bit words
- find repeated 4-word and 6-word n-grams
- cluster the repeated n-gram start offsets into islands with max gap `12` bytes

Recovered island map:

1. `socketMessageHandler` tail `0x0CE8..0x0F57`
- repeated4_count2 islands:
  - `0x0D2A..0x0D3A`
  - `0x0D50..0x0D52`
  - `0x0D66..0x0D82`
  - `0x0DA6..0x0E30`
  - `0x0E4C..0x0E4E`
  - `0x0E6C..0x0E7C`
  - `0x0EAA..0x0EAA`
  - `0x0EDC..0x0EE6`
  - `0x0F12..0x0F26`
- repeated4_count3 islands:
  - `0x0D2E..0x0D2E`
  - `0x0D50..0x0D50`
  - `0x0D82..0x0D82`
  - `0x0DAC..0x0DCC`
  - `0x0DF0..0x0E30`
  - `0x0E4C..0x0E4C`
  - `0x0E70..0x0E70`
  - `0x0EDC..0x0EE2`
  - `0x0F1C..0x0F24`

2. `executeCall` tail `0x18B8..0x1B43`
- repeated4_count2 islands:
  - `0x18F6..0x1972`
  - `0x1988..0x1988`
  - `0x19BA..0x19CE`
  - `0x1AA2..0x1AAC`
  - `0x1AC2..0x1AC2`
- repeated4_count3 islands:
  - `0x18F6..0x18F8`
  - `0x1906..0x190E`
  - `0x1924..0x1926`
  - `0x1934..0x1942`
  - `0x1950..0x1958`
  - `0x1976..0x1978`

Strict result:
- both long opaque tails now have internal motif-rich islands
- `socketMessageHandler` has a large dense island from `0x0DA6..0x0E30`
- `executeCall` has a dominant dense island from `0x18F6..0x1972`

Still unresolved:
- this pass does not assign semantic roles to those islands
