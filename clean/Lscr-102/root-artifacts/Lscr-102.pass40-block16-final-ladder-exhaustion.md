## Lscr-102 pass40: block 16 final ladder exhaustion

Source files:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.annotated-disasm.md`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.rebuilt-faithful-full.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.blocks.js`
- `C:\Users\Dilldo\Nitto\Lingo Stuff\clean\Lscr-102\root-artifacts\Lscr-102.pass-block37252-table.md`

Handler:
- `RaceEngine_createMd5Hash`

Focus window:
- block `37252`
- final branch ladder `0x01F2..0x022E`

Raw byte-backed window:

```text
01F2: 41           op_41
01F3: 35 00 0D     op_35 arg=13 ; "raceType"
01F6: 3D 00 27     op_3D arg=39 ; "HTQ"
01F9: 12 07 00 18  op_12 branch? target/imm=24
01FD: 3B 00 28     op_3B arg=40 ; "HTQREADY"
0200: 39           op_39
0201: 3E           op_3E
0202: 41           op_41
0203: 35 00 10     op_35 arg=16 ; "createMd5Hash"
0206: 39           op_39
0207: 42           op_42
0208: 3A 00 01     op_3A arg=1 ; "c0"
020B: 3A 00 02     op_3A arg=2 ; "goodCounterRT"
020E: 51           op_51
020F: 06 00 20     op_06 jump?/imm=32
0212: 41           op_41
0213: 35 00 0D     op_35 arg=13 ; "raceType"
0216: 3D 00 29     op_3D arg=41 ; "HT"
0219: 12 07 00 15  op_12 branch? target/imm=21
021D: 3B 00 2A     op_3B arg=42 ; "HTREADY"
0220: 39           op_39
0221: 3E           op_3E
0222: 41           op_41
0223: 35 00 10     op_35 arg=16 ; "createMd5Hash"
0226: 39           op_39
0227: 42           op_42
0228: 3A 00 01     op_3A arg=1 ; "c0"
022B: 3A 00 02     op_3A arg=2 ; "goodCounterRT"
022E: 51           op_51
```

Faithful/full corroboration:
- `if not (raceType = HTQ) then -- jump 24` at `0x01F9`
- `HTQREADY(VOID, createMd5Hash(0))` at `0x020E`
- `if not (raceType = HT) then -- jump 21` at `0x0219`
- `HTREADY(VOID, createMd5Hash(0))` at `0x022E`
- then direct `end`

Strict block surface corroboration:
- `blocks.js` carries only:
  - `if (HTQ) { /* else goto @513 */ }`
  - `HTQREADY()(false, null.createMd5Hash()(0))`
  - `if (HT) { /* else goto @542 */ }`
  - `HTREADY()(false, null.createMd5Hash()(0))`
- no extra default-arm packet appears after the `HTREADY` sink

Decision:
- keep `HTQREADY(VOID, createMd5Hash(0)) -- 0x020E`
- keep `HTREADY(VOID, createMd5Hash(0)) -- 0x022E`
- do not fabricate an `otherwise` executable body

What remains unresolved:
- nothing new inside `0x01F2..0x022E`
- the only remaining ambiguity is structural wording: the case ladder has a logical default arm in the readable reconstruction, but the raw block ends after the `HT` arm and exposes no separate default packet to decode
