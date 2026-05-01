# Lscr-93 Pass 5 Control-Flow Notes

Pass 5 resolves hidden-VM bytecode operands against the block-1 constant table.
The full annotated disassembly is:

```text
chunks/Lscr-93.block1.annotated-disasm.md
```

## Stronger Opcode Hints

These are still working names, but the resolved operands make several patterns
much clearer.

| Opcode | Stronger meaning guess | Evidence |
|---|---|---|
| `3B id` | load global/function/name by table id | used for `trace`, `eval`, `decrypt`, `openURL`, `connectSocket` |
| `35 id` | property/member lookup by table id | `_global + gNetID`, `_system + gc`, `sprite + flashSP`, `_movie + go` |
| `3D id` | push constant/string or bind literal by table id | used with `"OK"`, `"Protocol Error"`, URL strings, message text |
| `3A n` | call/apply with argument count or call shape | follows function/member lookups and pushed args |
| `1B` | string concatenation or expression join | appears while building `propList(...)` and error messages |
| `51` | statement/call completion | follows call-like sequences |
| `56/57 id` | temp/local read/write or global slot access | used around `netDone`, `_global`, `checkedForOneClient` |
| `06/07/12/14` | branch/jump/test family | surrounds error and dispatch control flow |

## Early Connection/Process Flow

The start of block 1 now resolves as:

```text
0014: _global.checkedForOneClient
001F: netDone
0023: _global.checkProcessResult
0037: netError
0044: "OK"
004B: trace(netTextResult ...)
0060: CheckNittoProcessesCB(...)
0078: CheckNittoProcessesCB(1 ...)
008B: _global.gNetID.length
0098: _system.gc()
```

The readable shape is:

```lingo
if not _global.checkedForOneClient then
  -- check process / client environment
  CheckNittoProcessesCB(netTextResult, _global.checkProcessResult)
  CheckNittoProcessesCB(1)
end if

if _global.gNetID.length ... then
  _system.gc()
end if
```

The exact branch polarity still needs VM confirmation.

## Response Decode/Eval Flow

Around `0x00EF` and again around `0x016E`, the block builds an expression:

```text
eval
"propList("
netDone
")"
```

Around `0x0119`:

```text
_global.isEnc
decrypt(netDone)
netDone = decrypt(netDone)
```

Likely source shape:

```lingo
if _global.isEnc then
  netDone = decrypt(netDone)
end if

ex = eval("propList(" & netDone & ")")
```

This is one of the strongest semantic recoveries so far.

## Protocol Error Paths

There are repeated calls through `sprite.flashSP.showConnectionErrorCB`.

Typical cluster:

```text
sprite
flashSP
showConnectionErrorCB
"Protocol Error"
"Connection protocol could not be established. Action:"
_global.gNetID
...
```

Timeout cluster:

```text
showConnectionErrorCB
"Session Timed Out"
"I'm sorry, but your session has timed out, please restart the application. Last action: "
_global.lastAction
```

Later connection cluster:

```text
showConnectionErrorCB
"Connection Error"
"Connection could not be established. Action:"
_global.gNetID
```

Likely source shape:

```lingo
sprite(flashSP).showConnectionErrorCB("Protocol Error", \
  "Connection protocol could not be established. Action:" & _global.gNetID & ...)

sprite(flashSP).showConnectionErrorCB("Session Timed Out", \
  "I'm sorry, but your session has timed out, please restart the application. Last action: " & _global.lastAction)

sprite(flashSP).showConnectionErrorCB("Connection Error", \
  "Connection could not be established. Action:" & _global.gNetID & ...)
```

## XML Parse / Cache Flow

Two `xmlparser` clusters appear. The surrounding table entries are:

```text
xtra
xmlparser
parseString
getAProp
fetchCacheXMLDone
makeList
getcache
cache
downloadCacheInProgress
downloadCacheDone
```

Likely source shape:

```lingo
parser = xtra("xmlparser").new()
parser.parseString(...)
d = parser.getAProp(...)
fetchCacheXMLDone(...)
```

Near the end of the block there is a long dispatch-like region repeatedly
touching `_global.fileNetID`, then branching to cache/download/installer handlers:

```text
fileNetID
cache
downloadCacheInProgress
getStreamStatus
installer
downloadInstallerUpdateFlash
loadLocalAvatar
loadLocalUgg
downloadCacheDone
runInstaller
teamavatars
ugg
```

## Facebook / Login Flow

The URL-building area around `0x050C` resolves to:

```text
openURL
"http://www.facebook.com/connect/prompt_permissions.php?api_key="
facebookAPIKey
"&v=1.0&next=http://www.facebook.com/connect/login_success.html?xxRESULTTOKENxx&display=popup&ext_perm=publish_stream&enable_profile_selector=0"
```

There is another Facebook login region later:

```text
openURL
"https://login.facebook.com/login.php?api_key="
facebookAPIKey
facebookToken
fbRemoveFacebookCB
fbgetinviteurl
```

Likely source shape:

```lingo
openURL("http://www.facebook.com/connect/prompt_permissions.php?api_key=" & \
  facebookAPIKey & \
  "&v=1.0&next=http://www.facebook.com/connect/login_success.html?xxRESULTTOKENxx&display=popup&ext_perm=publish_stream&enable_profile_selector=0")
```

## Socket/Login Callback Flow

Around `0x059B`:

```text
connectSocket
loginCB
```

`loginCB` appears several times after this, so the block likely dispatches
multiple login callback cases from the decoded response object.

The table also includes many command names from `login` through `fbgetinviteurl`
and account/team/race operations, implying a broad command-dispatch table rather
than one small frame handler.

## Final Movie Navigation

The end of the instruction region resolves as:

```text
_movie.go
```

So one terminal branch navigates the Director movie, probably after a completed
download/cache/install path or connection failure path.

