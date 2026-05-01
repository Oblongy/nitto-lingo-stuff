# Lscr-109.bin-only pass 11: handler-anchor to ladder adjacency

Source:
- `C:\Users\Dilldo\Nitto\Lingo Stuff\Lscr-109.bin`

Inputs reused from earlier bin-only passes:
- exact `typeLE=0` handler-anchor records
- exact overlapping wrapper->type04 ladder starts

This pass does not claim the ladders are final decompiled bodies.
It only proves that each recovered `typeLE=0` handler anchor is followed later in the file by one major ordered overlapping ladder.

Exact adjacency map:

1. `connectSocket`
- handler-anchor offset: `0x01E0`
- ladder: `A`
- ladder start: `0x02D8`
- gap: `0x00F8` bytes
- ladder count: `23`
- payload span: `timeout` .. `)`

2. `sockConnTimeout`
- handler-anchor offset: `0x06D0`
- ladder: `B`
- ladder start: `0x0814`
- gap: `0x0144` bytes
- ladder count: `23`
- payload span: `timeout` .. `showSocketConnectionErrorCB`

3. `socketMessageHandler`
- handler-anchor offset: `0x0C4C`
- ladder: `C`
- ladder start: `0x0F58`
- gap: `0x030C` bytes
- ladder count: `9`
- payload span: `_global` .. `ld`

4. `executeCall`
- handler-anchor offset: `0x1808`
- ladder: `D`
- ladder start: `0x1B44`
- gap: `0x033C` bytes
- ladder count: `53`
- payload span: `buypartugg` .. `push`

5. `ssm`
- handler-anchor offset: `0x2250`
- ladder: `E`
- ladder start: `0x2338`
- gap: `0x00E8` bytes
- ladder count: `15`
- payload span: `_global` .. `Connection Error`

Strict result:
- there is now a byte-proven one-to-one adjacency map between the five `typeLE=0` handler anchors and the five major ordered ladders
- this is the strongest current raw-bin bridge toward fuller header/body reconstruction for `Lscr-109.bin`

Still unresolved:
- the bytes inside each anchor-to-ladder gap are not yet decoded
- this pass does not claim those gap bytes are no-ops, locals, argument tables, or control-flow bytes
