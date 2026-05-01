# Lscr-93 Pass 3 Block 1 Table Extraction

Pass 3 finds that the large block is not mostly opaque after all. Its active
instruction region ends around block offset `0x2EE4`, where a 442-entry mixed
constant/name table begins.

The extracted full table is in:

```text
chunks/Lscr-93.block1-table.tsv
```

## Table Summary

| Kind | Count | Notes |
|---:|---:|---|
| `4` | 434 | UTF-16LE strings/names/constants |
| `1` | 1 | numeric/special record |
| `3` | 3 | numeric/special records |
| `5` | 2 | numeric/special records |
| `7` | 2 | numeric/special records |

The important part: 434 of 442 entries are readable UTF-16 strings.

## First Meaningful Entries

| Index | Value |
|---:|---|
| 0 | `_global` |
| 1 | `checkedForOneClient` |
| 2 | `netDone` |
| 3 | `checkProcessResult` |
| 4 | `netError` |
| 5 | `OK` |
| 6 | `trace` |
| 7 | `netTextResult` |
| 8 | `CheckNittoProcessesCB` |
| 10 | `gNetID` |
| 12 | `_system` |
| 13 | `gc` |
| 14 | `eval` |
| 19 | `isEnc` |
| 20 | `decrypt` |
| 21 | `exEnc` |
| 24 | `showConnectionErrorCB` |
| 35 | `xtra` |
| 36 | `xmlparser` |
| 37 | `parseString` |
| 38 | `getAProp` |
| 40 | `fetchCacheXMLDone` |
| 45 | `openURL` |
| 52 | `encrypt` |
| 55 | `connectSocket` |
| 56 | `loginCB` |

## Network, Login, Facebook, Cache

The table strongly identifies this as a backend/network callback and integration
script rather than only a frame idle check.

Selected entries:

| Index | Value |
|---:|---|
| 46 | `http://www.facebook.com/connect/prompt_permissions.php?api_key=` |
| 47 | `facebookAPIKey` |
| 48 | `&v=1.0&next=http://www.facebook.com/connect/login_success.html?xxRESULTTOKENxx&display=popup&ext_perm=publish_stream&enable_profile_selector=0` |
| 64 | `installerURL` |
| 66 | `installerFile` |
| 68 | `installerMD5` |
| 71 | `facebookID` |
| 73 | `fbGetSessionCB` |
| 75 | `getInfoCB` |
| 76 | `getUserCB` |
| 77 | `getUsersCB` |
| 83 | `changePasswordCB` |
| 86 | `createAccountCB` |
| 87 | `verifyAccountCB` |
| 224 | `loginTwitterCB` |
| 237 | `facebookToken` |
| 239 | `https://login.facebook.com/login.php?api_key=` |
| 243 | `fbRemoveFacebookCB` |
| 262 | `getcache` |
| 264 | `login` |
| 391 | `logintwitter` |
| 404 | `fbremovefacebook` |
| 405 | `fbgetinviteurl` |
| 421 | `fileNetID` |
| 422 | `cache` |
| 423 | `downloadCacheInProgress` |
| 429 | `downloadCacheDone` |

## Error/User-Facing Text

Selected entries:

| Index | Value |
|---:|---|
| 25 | `Protocol Error` |
| 26 | `Connection protocol could not be established. Action:` |
| 27 | ` (Error: 010)` |
| 29 | ` (Error: 001)` |
| 30 | ` (Error: 002)` |
| 32 | `Session Timed Out` |
| 33 | `I'm sorry, but your session has timed out, please restart the application. Last action: ` |
| 417 | `Connection Error` |
| 419 | ` (Error: 003-` |

## Translation Impact

The earlier reconstruction treated block 1 as mostly encoded because the JSON
ASCII string scanner only saw short tokens like `7?7:`. The real constant table
is UTF-16LE and gives us a high-confidence semantic map:

- block 1 checks connection/client state,
- it calls or references `CheckNittoProcessesCB`,
- it uses `_system.gc` and `eval`,
- it decrypts/encrypts payload data,
- it parses XML via `xtra("xmlparser")`,
- it builds Facebook login/permission URLs,
- it handles installer/cache metadata,
- it contains many backend callback names for account, user, team, race, cache,
  and social flows.

The next reconstruction pass should use `Lscr-93.block1-table.tsv` to annotate
each `op_3B` / `op_35` / `op_3D` / `op_56` / `op_57` table index with the
resolved string value.

