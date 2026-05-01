# Lscr-109.bin-only pass 18: longest repeated token cores inside long opaque tails

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Method:
- tokenize the two longest opaque tails as aligned 16-bit words
- find the longest repeated contiguous token sequences at several minimum hit counts

Recovered exact repeated cores:

1. `socketMessageHandler`
- strongest count-5 core:
  - word count: `7`
  - offsets:
    - `0x0DB8`
    - `0x0DFC`
    - `0x0E1C`
    - `0x0EDC`
    - `0x0F1C`
  - words:
    - `1300 3D39 1400 003A 3501 1500 3D39`
- strongest count-3 longer core:
  - word count: `9`
  - offsets:
    - `0x0DB8`
    - `0x0DFC`
    - `0x0E1C`
  - words:
    - `1300 3D39 1400 003A 3501 1500 3D39 1600 003D`
- strongest count-2 longer core:
  - word count: `12`
  - offsets:
    - `0x0D2A`
    - `0x0E6C`
  - words:
    - `0036 5106 003B 3500 0600 0035 3907 003B 3A08 0100 0057 5101`

2. `executeCall`
- strongest count-4 core:
  - word count: `5`
  - offsets:
    - `0x18F6`
    - `0x1924`
    - `0x1940`
    - `0x196E`
  - words:
    - `571B 0100 5451 0000 003D`
- strongest count-3 longer core:
  - word count: `8`
  - offsets:
    - `0x1906`
    - `0x1934`
    - `0x1950`
  - words:
    - `0100 003D 3B09 0400 0035 1B0A 571B 0100`
- strongest count-2 longer core:
  - word count: `20`
  - offsets:
    - `0x1902`
    - `0x194C`
  - words:
    - `0007 5627 0100 003D 3B09 0400 0035 1B0A 571B 0100 5651 0100 003D 3B0B 0400 0035 1B0C 571B 0100 5451`

Strict result:
- the long opaque tails now have exact repeated token templates
- those templates are the strongest current byte-proven candidates for internal sub-block skeletons

Still unresolved:
- this pass does not assign opcode, argument, or control-flow meaning to any token word
