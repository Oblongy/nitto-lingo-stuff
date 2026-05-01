-- Lscr-106 rightful.ls
-- Mechanical Lingo reconstruction from .bin/.json.
-- Constraint: recovered bytecode evidence only; undecoded lines are not invented source.

on initFileHandler
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=0 length=460 codeLen=188
  -- names: cacheFolder, _player, applicationPath, cache, fileAgeCheck
  -- registration/prologue markers=30 paddingBytes=30 -- 0x0014
  op_6d(cacheFolder) -- 0x0093
  op_6d(fileAgeCheck) -- 0x009D
  id_20 -- 0x00B0
  id_21 -- 0x00B4
  id_22 -- 0x00B8
  id_23 -- 0x00BC
  id_24 -- 0x00C0
end

on getAvatar
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=460 length=740 codeLen=157
  -- names: baLingoFolderExists, cacheFolder, baLingoCreateFolder, \avatars, \teamAvatars, \car, \car\userDecals
  -- branch 14 -- 0x001F
  baLingoCreateFolder(cacheFolder) -- 0x002C
  -- branch 18 -- 0x003C
  baLingoCreateFolder((cacheFolder & "\\avatars")) -- 0x004D
  -- branch 18 -- 0x005D
  baLingoCreateFolder((cacheFolder & "\\teamAvatars")) -- 0x006E
  -- branch 18 -- 0x007E
  baLingoCreateFolder((cacheFolder & "\\car")) -- 0x008F
  -- branch 18 -- 0x009F
  baLingoCreateFolder((cacheFolder & "\\car\\userDecals")) -- 0x00B0
end

on downloadAvatar
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=1200 length=1404 codeLen=344
  -- names: split, ,, Array, length, aid, downloadAvatar, baLingoFileExists, cacheFolder, \, .jpg, baLingoTempFileName, avage, baLingoFileAge, fileAgeCheck, push, loadLocalAvatar, baLingoDeleteFile, avatars, executeCall, getavatarage, tids=, join, teamavatars, getteamavatarage
  split = split(",") -- 0x0021
  param_split -- 0x0024
  "," = (implicit_lhs_0x0029 ^ Array) -- 0x002C
  Array = VOID -- 0x0031
  if not (split < length) then -- jump 211 -- 0x003E
  op_6d(aid) -- 0x004F
  if not (op_6c(aid) = split[Array][param_Array]) then -- jump 20 -- 0x0054
  downloadAvatar(aid, param_",") -- 0x0065
  -- jump 165 -- 0x0066
  -- branch 118 -- 0x0087
  length = baLingoTempFileName(avage) -- 0x0094
  baLingoFileExists((((((cacheFolder & "\\") & param_",") & "\\") & aid) & ".jpg")) -- 0x0097
  aid = baLingoFileAge(length) -- 0x00A2
  Array -- 0x00A5
  if not ((aid - baLingoFileAge((((((cacheFolder & "\\") & param_",") & "\\") & aid) & ".jpg"))) > fileAgeCheck) then -- jump 20 -- 0x00CB
  push(aid) -- 0x00DC
  -- jump 18 -- 0x00DD
  loadLocalAvatar(aid, param_",", 1) -- 0x00EE
  baLingoDeleteFile(length) -- 0x00F9
  -- jump 17 -- 0x00FA
  downloadAvatar(aid, param_",") -- 0x010A
  -- repeat step 2 -- 0x010B
  "," -- 0x010E
  -- jump -218 -- 0x010F
  if not (length > VOID) then -- jump 82 -- 0x0119
  if not (param_"," = avatars) then -- jump 34 -- 0x0123
  getavatarage("tids=", ("," & join(","))) -- 0x0142
  -- jump 41 -- 0x0143
  if not (param_"," = teamavatars) then -- jump 31 -- 0x014C
  getteamavatarage("tids=", ("," & join(","))) -- 0x016B
end

on compareAvatarAge
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=2604 length=700 codeLen=108
  -- names: clearCache, _global, avatarMainURL, \, avatarIDtoPath, .jpg, Array, downloadNetThing, cacheFolder, fileNetID, push
  clearCache() -- 0x001B
  clearCache = ((((avatarMainURL & param__global) & "\\") & avatarIDtoPath(param_clearCache)) & ".jpg") -- 0x0039
  _global -- 0x003C
  -- 0x03 packed assignment prefix raw=03 -- 0x006A
  _global = (param_clearCache ^ downloadNetThing(clearCache, (((((cacheFolder & "\\") & param__global) & "\\") & param_clearCache) & ".jpg"))) -- 0x006B
  param__global -- 0x006E
  push(_global) -- 0x007F
end

on loadLocalAvatar
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=3304 length=1364 codeLen=396
  -- names: baLingoTempFileName, avage, baLingoFileAge, baLingoFileDateEx, accessed, yyyy|m|d|, h|n|s, split, |, length, cacheFolder, \, .jpg, fileAgeCheck, downloadAvatar, loadLocalAvatar, baLingoSetFileDate, parseInt, baLingoDeleteFile
  baLingoTempFileName = baLingoTempFileName(avage) -- 0x001E
  avage = baLingoFileAge(baLingoTempFileName) -- 0x002C
  baLingoFileAge = split("|") -- 0x004D
  baLingoFileDateEx(baLingoTempFileName, accessed, "yyyy|m|d|", "h|n|s") -- 0x0050
  baLingoFileDateEx = VOID -- 0x0052
  if not (param_baLingoTempFileName < length) then -- jump 309 -- 0x005F
  if not (implicit_object_0x006B[baLingoFileDateEx[param_baLingoTempFileName[baLingoFileDateEx]]] > -1) then -- jump 228 -- 0x006F
  if not (implicit_lhs_0x00AC > ((implicit_object_0x00A3[(avage - baLingoFileAge((((((cacheFolder & "\\") & param_avage) & "\\") & param_baLingoTempFileName[baLingoFileDateEx][VOID]) & ".jpg")))[param_baLingoTempFileName[baLingoFileDateEx]]] - fileAgeCheck) - 360)) then -- jump 26 -- 0x00AC
  downloadAvatar(param_baLingoTempFileName[baLingoFileDateEx][VOID], param_avage) -- 0x00C3
  -- jump 141 -- 0x00C4
  loadLocalAvatar(param_baLingoTempFileName[baLingoFileDateEx][VOID], param_avage, 1) -- 0x00DB
  implicit_callee_0x014D(implicit_arg_0x014D, baLingoSetFileDate, (((((cacheFolder & "\\") & param_avage) & "\\") & param_baLingoTempFileName[baLingoFileDateEx][VOID]) & ".jpg")(parseInt(baLingoFileAge[VOID])[parseInt[baLingoFileAge]]), parseInt(baLingoFileAge[baLingoFileAge]), parseInt(baLingoFileAge[baLingoFileDateEx]), parseInt(baLingoFileAge[accessed]), parseInt(baLingoFileAge["yyyy|m|d|"])) -- 0x0150
  -- jump 61 -- 0x0151
  loadLocalAvatar(param_baLingoTempFileName[baLingoFileDateEx][VOID], param_avage, 0) -- 0x0168
  baLingoDeleteFile((((((cacheFolder & "\\") & param_avage) & "\\") & param_baLingoTempFileName[baLingoFileDateEx][VOID]) & ".jpg")) -- 0x018D
  -- repeat step 3 -- 0x018E
  -- jump -316 -- 0x0192
  baLingoDeleteFile(baLingoTempFileName) -- 0x019F
end

on avatarIDtoPath
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=4668 length=256 codeLen=27
  -- names: sprite, flashSP, getAvatarCB
  getAvatarCB(param_sprite, param_flashSP, param_getAvatarCB) -- 0x002E
end

on downloadUgg
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=4924 length=440 codeLen=122
  -- names: Math, floor, toString, \
  -- 0x64 packed call/operator prefix raw=64 -- 0x0041
  -- 0x1F packed call/operator prefix raw=1F -- 0x0042
  -- 0x64 packed call/operator prefix raw=64 -- 0x0063
  -- 0x1F packed call/operator prefix raw=1F -- 0x0064
  -- 0x1F packed call/operator prefix raw=1F -- 0x0081
  (param_Math(100) & toString()) -- 0x008D
end

on loadLocalUgg
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=5364 length=576 codeLen=73
  -- names: _global, uggURL, cache/car/userDecals/, Array, ugg, downloadNetThing, cacheFolder, \car\userDecals\, fileNetID, push
  _global = ((uggURL & "cache/car/userDecals/") & param__global) -- 0x0022
  _global -- 0x0025
  -- 0x03 packed assignment prefix raw=03 -- 0x0047
  uggURL = (param__global ^ downloadNetThing(_global, ((cacheFolder & "\\car\\userDecals\\") & param__global))) -- 0x0048
  ugg -- 0x004B
  push(uggURL) -- 0x005C
end

on fileBrowse
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=5940 length=288 codeLen=24
  -- names: sprite, flashSP, downloadUggCB
  downloadUggCB(param_sprite, param_flashSP) -- 0x002B
end

on uggUpload
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=6228 length=696 codeLen=75
  -- names: baGetFilename, open, JPG,PNG,GIF Images|*.jpg;*.jpeg;*.png;*.gif, Select image file, baFileSize, sprite, flashSP, fileBrowseCB
  baGetFilename = baGetFilename(open, id_2, id_2, "JPG,PNG,GIF Images|*.jpg;*.jpeg;*.png;*.gif", 524288, "Select image file", 0, -1, VOID) -- 0x0032
  open = baFileSize(baGetFilename) -- 0x0040
  fileBrowseCB(param_baGetFilename, baGetFilename, open) -- 0x005E
end

on uggUploadSuccess
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=6924 length=964 codeLen=178
  -- names: _global, uggURL, /Upload.aspx?NeatUpload_PostBackID=, aid, &accountID=, Object, gSimInet, FieldClear, length, AddFieldFile, hoodImage, sideImage, frontImage, backImage, SendField1, uggUploadSuccess, uggUploadFail
  _global = (_global & aid) -- 0x0030
  ((_global & aid) & "&accountID=") -- 0x0033
  uggURL = ((uggURL & "/Upload.aspx?NeatUpload_PostBackID=") ^ Object) -- 0x003B
  _global -- 0x003E
  FieldClear() -- 0x0049
  -- branch 20 -- 0x0050
  AddFieldFile(hoodImage, param__global) -- 0x0063
  -- branch 20 -- 0x006A
  AddFieldFile(sideImage, param_uggURL) -- 0x007D
  -- branch 20 -- 0x0084
  AddFieldFile(frontImage, param_"/Upload.aspx?NeatUpload_PostBackID=") -- 0x0097
  -- branch 20 -- 0x009E
  AddFieldFile(backImage, param_aid) -- 0x00B1
  SendField1(_global, uggUploadSuccess, uggUploadFail) -- 0x00C5
end

on uggUploadFail
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=7888 length=236 codeLen=22
  -- names: sprite, flashSP, uggUploadCB
  implicit_callee_0x0026(sprite(flashSP)[uggUploadCB], param_sprite) -- 0x0029
end

on downloadNewInstaller
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=8124 length=336 codeLen=22
  -- names: sprite, flashSP, uggUploadCB
  uggUploadCB(VOID, id_3) -- 0x0029
end

on downloadInstallerUpdateFlash
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=8460 length=980 codeLen=210
  -- names: baLingoSysFolder, temp, _global, installerFile, baLingoFileExists, xtra, caluMD5, getFileMD5, installerMD5, runInstaller, Array, installer, downloadNetThing, installerURL, /, fileNetID, push
  baLingoSysFolder = (_global & installerFile) -- 0x0025
  baLingoSysFolder(temp) -- 0x0028
  -- branch 118 -- 0x0033
  temp = (xtra ^ caluMD5) -- 0x0040
  baLingoFileExists(baLingoSysFolder) -- 0x0043
  if not (_global = installerMD5) then -- jump 17 -- 0x0057
  runInstaller(baLingoSysFolder) -- 0x0065
  -- jump 64 -- 0x0066
  -- 0x03 packed assignment prefix raw=03 -- 0x0090
  _global = (_global ^ (installerURL & "/")((_global & installerFile), baLingoSysFolder)) -- 0x0091
  downloadNetThing -- 0x0094
  push(_global) -- 0x00A5
  -- jump 64 -- 0x00A6
  -- 0x03 packed assignment prefix raw=03 -- 0x00D0
  _global = (_global ^ (installerURL & "/")((_global & installerFile), baLingoSysFolder)) -- 0x00D1
  downloadNetThing -- 0x00D4
  push(_global) -- 0x00E5
end

on runInstaller
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=9440 length=420 codeLen=48
  -- names: sprite, flashSP, loadUpdateCB, _global, installerFile, bytesSoFar, bytesTotal
  param_sprite(bytesTotal, param_sprite, bytesSoFar, param_sprite, bytesTotal) -- 0x0043
end

on fetchCacheXML
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=9860 length=1092 codeLen=70
  -- names: baLingoFileExists, baLingoRunProgram,  /silent, normal, _player, quit, sprite, flashSP, showConnectionErrorCB, Download Failed, I'm sorry, but the automatic updater is not working properly. Please visit http://www.nittolegends.com and download the latest version.
  -- branch 36 -- 0x001E
  baLingoRunProgram((param_baLingoFileExists & " /silent"), normal, 0) -- 0x0033
  quit() -- 0x003E
  -- jump 27 -- 0x003F
  showConnectionErrorCB("Download Failed", "I'm sorry, but the automatic updater is not working properly. Please visit http://www.nittolegends.com and download the latest version.") -- 0x0059
end

on fetchCacheXMLDone
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=10952 length=772 codeLen=110
  -- names: clearCache, totalCacheSize, totalDownloadedCacheSize, aryCacheIndex, aryCacheFiles, Array, aryCacheFileSizes, getcache, getNetText, _global, cacheURL, content.htm, gNetID, push
  clearCache() -- 0x001B
  op_6d(totalCacheSize) -- 0x0023
  op_6d(totalDownloadedCacheSize) -- 0x002B
  op_6d(aryCacheIndex) -- 0x0035
  op_6d(aryCacheFiles) -- 0x0043
  op_6d(aryCacheFileSizes) -- 0x0051
  (getNetText ^ _global((cacheURL & "content.htm"))) -- 0x006C
  clearCache = getcache -- 0x006D
  Array -- 0x0070
  push(clearCache) -- 0x0081
end

on createCacheFolders
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=11724 length=384 codeLen=26
  -- names: createCacheFolders, cacheFolder, \, downloadCacheDone
  createCacheFolders((cacheFolder & "\\"), param_createCacheFolders) -- 0x0025
  downloadCacheDone() -- 0x002D
end

on downloadCache
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=12108 length=1488 codeLen=446
  -- names: count, !ATTRIBUTES, t, d, baLingoFolderExists, n, baLingoCreateFolder, createCacheFolders, \, f, xtra, caluMD5, baLingoFileExists, aryCacheFiles, push, aryCacheFileSizes, parseInt, s, totalCacheSize, getFileMD5, md, _system, gc
  count = t -- 0x0017
  if not (param_"!ATTRIBUTES" <= count) then -- jump 429 -- 0x0024
  if not (t = d) then -- jump 95 -- 0x0038
  -- branch 28 -- 0x0055
  param_"!ATTRIBUTES"[count](("!ATTRIBUTES" & n)) -- 0x0070
  param_"!ATTRIBUTES"[count]((("!ATTRIBUTES" & n) & "\\"), param_"!ATTRIBUTES"[count]) -- 0x0094
  -- jump 310 -- 0x0095
  if not (t = f) then -- jump 290 -- 0x00A8
  "!ATTRIBUTES" = (xtra ^ caluMD5) -- 0x00B6
  "!ATTRIBUTES" -- 0x00B9
  -- branch 97 -- 0x00D3
  param_"!ATTRIBUTES"[count](("!ATTRIBUTES" & n)) -- 0x00F1
  param_"!ATTRIBUTES"[count]("!ATTRIBUTES"(s)) -- 0x0110
  op_6d(totalCacheSize) -- 0x0130
  -- jump 138 -- 0x0131
  if not ("!ATTRIBUTES" <> md) then -- jump 94 -- 0x015C
  param_"!ATTRIBUTES"[count](("!ATTRIBUTES" & n)) -- 0x017B
  param_"!ATTRIBUTES"[count]("!ATTRIBUTES"(s)) -- 0x019A
  op_6d(totalCacheSize) -- 0x01BA
  "!ATTRIBUTES" = VOID -- 0x01BC
  (param_"!ATTRIBUTES"[count] & "!ATTRIBUTES"(s)) -- 0x01BF
  gc() -- 0x01CA
  -- repeat step 0 -- 0x01CB
  _system -- 0x01CE
  -- jump -436 -- 0x01CF
end

on downloadCacheInProgress
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=13596 length=696 codeLen=112
  -- names: clearCache, _global, cacheURL, split, _player, applicationPath, join, \, /, Array, cache, downloadNetThing, fileNetID, push
  clearCache() -- 0x001B
  clearCache = (split("\\") & join("/")) -- 0x0051
  join(id_7) -- 0x0054
  -- 0x03 packed assignment prefix raw=03 -- 0x006E
  _global = (param_clearCache ^ downloadNetThing(clearCache, param_clearCache)) -- 0x006F
  cache -- 0x0072
  push(_global) -- 0x0083
end

on downloadCacheDone
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=14292 length=236 codeLen=14
  -- names: downloadCacheUpdateFlash, bytesSoFar
  param_downloadCacheUpdateFlash(bytesSoFar) -- 0x0021
end

on downloadCacheUpdateFlash
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=14528 length=604 codeLen=80
  -- names: aryCacheIndex, totalDownloadedCacheSize, aryCacheFileSizes, aryCacheFiles, length, downloadCache, sprite, flashSP, loadFinishCB
  if not (aryCacheIndex >= VOID) then -- jump 22 -- 0x0018
  op_6d(totalDownloadedCacheSize) -- 0x002E
  -- 0x2F packed flush prefix raw=2F 00 00 -- 0x002F
  (totalDownloadedCacheSize & aryCacheFileSizes[aryCacheIndex]) -- 0x0032
  if not (aryCacheFiles < length) then -- jump 21 -- 0x003C
  downloadCache(aryCacheFiles[aryCacheIndex]) -- 0x004E
  -- jump 21 -- 0x004F
  loadFinishCB() -- 0x0063
end

on loadDyno
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=15132 length=536 codeLen=45
  -- names: sprite, flashSP, loadUpdateCB, aryCacheFiles, aryCacheIndex, aryCacheFileSizes, totalDownloadedCacheSize, totalCacheSize
  loadUpdateCB(aryCacheFiles[aryCacheIndex], param_sprite, aryCacheFileSizes[aryCacheIndex], (totalDownloadedCacheSize & param_sprite), totalCacheSize) -- 0x0040
end

on saveDyno
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=15668 length=916 codeLen=172
  -- names: xtra, fileio, setFilterMask, Text Files,*.txt, displayOpen, openFile, status, readFile, split, |, sprite, flashSP, garageDynoLoadCB, getTxtFileName, closeFile
  xtra = (xtra ^ fileio) -- 0x001E
  setFilterMask("Text Files,*.txt") -- 0x002F
  fileio = displayOpen() -- 0x003A
  xtra -- 0x003D
  -- branch 116 -- 0x0041
  fileio(xtra, openFile[fileio]) -- 0x0052
  if not (status() = VOID) then -- jump 86 -- 0x005E
  setFilterMask = readFile() -- 0x006C
  xtra -- 0x006F
  setFilterMask = split("|") -- 0x007D
  setFilterMask -- 0x0080
  xtra(sprite(flashSP), garageDynoLoadCB, getTxtFileName(fileio)[setFilterMask[VOID][setFilterMask]], setFilterMask[setFilterMask], setFilterMask["Text Files,*.txt"]) -- 0x00B4
  closeFile() -- 0x00BF
end

on getTxtFileName
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=16584 length=848 codeLen=162
  -- names: xtra, fileio, setFilterMask, Text Files,*.txt, displaySave, Save Dyno, createFile, openFile, writeString, |, closeFile, sprite, flashSP, garageDynoSaveCB, getTxtFileName
  xtra = (xtra ^ fileio) -- 0x001E
  setFilterMask("Text Files,*.txt") -- 0x002F
  fileio = displaySave("Save Dyno", id_6) -- 0x0040
  xtra -- 0x0043
  -- branch 111 -- 0x0047
  createFile(fileio) -- 0x0057
  openFile(fileio, setFilterMask) -- 0x0068
  writeString(((((((param_xtra & "|") & param_fileio) & "|") & param_setFilterMask) & "|") & param_"Text Files,*.txt")) -- 0x008E
  closeFile() -- 0x0099
  garageDynoSaveCB(getTxtFileName(fileio)) -- 0x00B5
end

on saveFile
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=17432 length=356 codeLen=79
  -- names: length, charAt, \, substr
  length = length -- 0x001A
  param_length -- 0x001D
  if not (length >= VOID) then -- jump 60 -- 0x0022
  if not (charAt(length) = "\\") then -- jump 33 -- 0x0036
  (param_length & substr[length])(param_length, ((length - length) - 5)) -- 0x0057
  -- 0x66 loop-control marker raw=66 00 00 51 -- 0x0058
  param_length -- 0x005B
  -- jump -62 -- 0x005C
  param_length -- 0x0062
end

on openfile
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=17788 length=640 codeLen=139
  -- names: xtra, fileio, createFile, openFile, writeString, unescape, status, sprite, flashSP, saveFileCB, closeFile
  xtra = (xtra ^ fileio) -- 0x001E
  createFile(param_xtra) -- 0x002F
  openFile(param_xtra, createFile) -- 0x0040
  writeString(unescape(param_fileio)) -- 0x0055
  if not (status() = VOID) then -- jump 28 -- 0x0061
  xtra(sprite(flashSP)[saveFileCB], param_xtra) -- 0x007A
  -- jump 25 -- 0x007B
  saveFileCB(VOID, param_xtra) -- 0x0093
  closeFile() -- 0x009E
end

on fileClearAllDecals
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=18428 length=552 codeLen=112
  -- names: xtra, fileio, openFile, status, sprite, flashSP, openFileCB, readFile, closeFile
  xtra = (xtra ^ fileio) -- 0x001E
  implicit_callee_0x002D(xtra, openFile[param_xtra]) -- 0x0030
  if not (status() = VOID) then -- jump 38 -- 0x003C
  sprite(flashSP)[openFileCB](param_xtra, xtra, readFile()) -- 0x005F
  -- jump 25 -- 0x0060
  openFileCB(VOID, param_xtra) -- 0x0078
  closeFile() -- 0x0083
end

on fileClearADecal
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=18980 length=604 codeLen=92
  -- names: baLingoFileList, cacheFolder, \car\userDecals, *.*, count, baLingoDeleteFile, \car\userDecals\, Object, ex
  baLingoFileList = baLingoFileList((cacheFolder & "\\car\\userDecals"), "*.*") -- 0x0026
  VOID -- 0x0029
  cacheFolder = implicit_object_0x002A[implicit_index_0x002A] -- 0x002B
  if not (baLingoFileList <= count) then -- jump 33 -- 0x0038
  baLingoDeleteFile(((cacheFolder & "\\car\\userDecals\\") & baLingoFileList[cacheFolder])) -- 0x0052
  -- repeat step 1 -- 0x0053
  cacheFolder -- 0x0056
  -- jump -40 -- 0x0057
  -- jump 22 -- 0x005A
  -- 0x75 packed prefix before name load raw=75 00 00 00 -- 0x005D
  -- 0x08 packed short-jump prefix raw=08 -- 0x0069
  -- 0x03 packed short-jump prefix raw=03 -- 0x006A
  -- 0x04 packed short-jump prefix raw=04 -- 0x006B
  -- jump 4 -- 0x006C
end

on loadExternalValues
  -- source-kind: named handler from metadata
  -- metadata-argument-count=0
  -- offset=19584 length=680 codeLen=87
  -- names: baLingoFileExists, cacheFolder, \car\userDecals\, _, .swf, baLingoDeleteFile, Object, ex
  -- branch 34 -- 0x0033
  baLingoDeleteFile((((((cacheFolder & "\\car\\userDecals\\") & param_baLingoFileExists) & _) & param_cacheFolder) & ".swf")) -- 0x0054
  -- jump 22 -- 0x0055
  -- 0x75 packed prefix before name load raw=75 00 00 00 -- 0x0058
  -- branch 772 -- 0x0064
  -- jump 4 -- 0x0067
end

on __embedded_lscr106_block30
  -- source-kind: embedded block without handler metadata
  -- offset=20264 length=1412 codeLen=367
  -- names: xtra, fileio, openFile, servers.txt, readFile, Array, length, charAt, >, closeFile, _global, socketURL, socketPort, mainURL, gameURL, gameCode1_00.aspx, avatarMainURL, cacheURL, uggURL, exeName, true, isEnc
  xtra = (xtra ^ fileio) -- 0x001E
  implicit_callee_0x002D(xtra, openFile["servers.txt"]) -- 0x0030
  fileio = readFile() -- 0x003B
  xtra -- 0x003E
  openFile = (implicit_lhs_0x0043 ^ Array) -- 0x0046
  "servers.txt" = id_6 -- 0x004D
  readFile = VOID -- 0x0052
  Array = charAt -- 0x0059
  id_6 = VOID -- 0x005E
  if not (fileio < length) then -- jump 120 -- 0x006B
  length = charAt(id_6) -- 0x007C
  fileio -- 0x007F
  if not (length = "<") then -- jump 86 -- 0x0086
  -- 0x38 packed flush prefix raw=38 -- 0x0093
  id_6 -- 0x0094
  if not ("servers.txt" <> ">") then -- jump 41 -- 0x009B
  -- 0x64 packed flush prefix raw=64 00 06 -- 0x009F
  readFile -- 0x00A2
  -- 0x0D boolean-chain marker left=readFile -- 0x00A9
  -- 0x38 packed flush prefix raw=38 -- 0x00AF
  (openFile[openFile] & "servers.txt") -- 0x00B0
  "servers.txt" = charAt(id_6) -- 0x00BE
  fileio -- 0x00C1
  -- jump -45 -- 0x00C2
  "servers.txt" = id_6 -- 0x00C8
  id_6 -- 0x00CB
  -- 0x64 packed flush prefix raw=64 00 04 -- 0x00CC
  if not (readFile >= Array) then -- jump 6 -- 0x00D6
  -- jump 10 -- 0x00DA
  -- repeat step 6 -- 0x00DD
  -- jump -127 -- 0x00E1
  closeFile() -- 0x00EE
  socketURL = openFile[VOID] -- 0x00F7
  _global -- 0x00FA
  socketPort = xtra[_global[openFile]] -- 0x0103
  mainURL = openFile[openFile] -- 0x0111
  _global -- 0x0114
  gameURL = (mainURL & "gameCode1_00.aspx") -- 0x0122
  _global -- 0x0125
  avatarMainURL = openFile["servers.txt"] -- 0x0130
  _global -- 0x0133
  cacheURL = openFile[readFile] -- 0x013E
  _global -- 0x0141
  uggURL = openFile[Array] -- 0x014C
  _global -- 0x014F
  exeName = openFile[id_6] -- 0x015A
  _global -- 0x015D
  if not (openFile[length] = true) then -- jump 14 -- 0x0168
  isEnc = 1 -- 0x0170
  _global -- 0x0173
  -- jump 11 -- 0x0174
  isEnc = 0 -- 0x017B
  _global -- 0x017E
  openFile -- 0x0182
end
