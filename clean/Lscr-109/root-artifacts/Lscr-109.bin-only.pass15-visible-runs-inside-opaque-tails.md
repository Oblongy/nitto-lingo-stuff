# Lscr-109.bin-only pass 15: visible runs inside opaque gap tails

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Scope:
- the five opaque gap-tail blocks from pass14

Exact result:

1. `connectSocket` tail
- no ASCII runs of length `>= 4`
- no UTF-16LE runs of length `>= 4`

2. `sockConnTimeout` tail
- no ASCII runs of length `>= 4`
- no UTF-16LE runs of length `>= 4`

3. `socketMessageHandler` tail
- no ASCII runs of length `>= 4`
- no UTF-16LE runs of length `>= 4`

4. `executeCall` tail
- ASCII run:
  - `0x19C1` `QBQV`
- no UTF-16LE runs of length `>= 4`

5. `ssm` tail
- no ASCII runs of length `>= 4`
- no UTF-16LE runs of length `>= 4`

Strict result:
- four opaque tails are fully non-printable by this scan rule
- only `executeCall` has one internal printable marker: `QBQV` at `0x19C1`

Still unresolved:
- this pass does not assign any meaning to `QBQV`
- this pass does not decode the surrounding non-printable bytes
