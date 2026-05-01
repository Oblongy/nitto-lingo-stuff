// Lscr-106 original-style JS translation
// Source: Lscr-106/original-style.lingo
// MovieScript 6 - File / Cache / Avatar / UGG Handler

var cacheFolder, fileAgeCheck, aryCacheIndex, aryCacheFiles, aryCacheFileSizes;
var totalCacheSize, totalDownloadedCacheSize;

function initFileHandler() {
  cacheFolder = _player.applicationPath + "cache";
  fileAgeCheck = null;
  // servers.txt is parsed at script load (see bottom of file)
}

// -----------------------------------------------------------------------
// Avatar folder bootstrap
// -----------------------------------------------------------------------

function getAvatar() {
  if (!baLingoFolderExists(cacheFolder))           baLingoCreateFolder(cacheFolder);
  if (!baLingoFolderExists(cacheFolder + "\\avatars"))      baLingoCreateFolder(cacheFolder + "\\avatars");
  if (!baLingoFolderExists(cacheFolder + "\\teamAvatars"))  baLingoCreateFolder(cacheFolder + "\\teamAvatars");
  if (!baLingoFolderExists(cacheFolder + "\\car"))          baLingoCreateFolder(cacheFolder + "\\car");
  if (!baLingoFolderExists(cacheFolder + "\\car\\userDecals")) baLingoCreateFolder(cacheFolder + "\\car\\userDecals");
}

// -----------------------------------------------------------------------
// Avatar download / age-check
// -----------------------------------------------------------------------

function downloadAvatar(tids, avatarType) {
  tids = tids.split(",");
  var ageList = [];
  for (var i = 0; i < tids.length; i++) {
    var aid = tids[i];
    if (avatarType === true) {
      downloadAvatar(aid, avatarType);
    } else {
      var tmpFile = baLingoTempFileName("avage");
      var localPath = cacheFolder + "\\" + avatarType + "\\" + aid + ".jpg";
      if (baLingoFileExists(localPath)) {
        var fileAge  = baLingoFileAge(tmpFile);
        var localAge = baLingoFileAge(localPath);
        if ((fileAge - localAge) > fileAgeCheck) {
          ageList.push(aid);
        } else {
          loadLocalAvatar(aid, avatarType, 1);
          baLingoDeleteFile(tmpFile);
        }
      } else {
        downloadAvatar(aid, avatarType);
      }
    }
  }
  if (ageList.length > 0) {
    if (avatarType === "avatars") {
      executeCall("getavatarage", "tids=" + ageList.join(","));
    } else if (avatarType === "teamavatars") {
      executeCall("getteamavatarage", "tids=" + ageList.join(","));
    }
  }
}

function compareAvatarAge(tids, avatarType) {
  clearCache();
  var url = _global.avatarMainURL + tids + "\\" + avatarIDtoPath(avatarType) + ".jpg";
  var netHandle = downloadNetThing(url, cacheFolder + "\\" + tids + "\\" + avatarType + ".jpg");
  _global.fileNetID.push([tids, netHandle]);
}

// -----------------------------------------------------------------------
// Local avatar load / date-stamp management
// -----------------------------------------------------------------------

function loadLocalAvatar(aid, avatarType, useCache) {
  var tmpFile  = baLingoTempFileName("avage");
  var tmpAge   = baLingoFileAge(tmpFile);
  var dateParts = baLingoFileDateEx(tmpFile, "accessed", "yyyy|m|d|", "h|n|s").split("|");
  for (var i = 0; i < dateParts.length; i++) {
    if (dateParts[i][aid] > -1) {
      var localPath = cacheFolder + "\\" + avatarType + "\\" + dateParts[i][null] + ".jpg";
      var localAge  = baLingoFileAge(localPath);
      if (tmpAge - localAge > (dateParts[i][avatarType] - fileAgeCheck - 360)) {
        downloadAvatar(dateParts[i][null], avatarType);
      } else {
        loadLocalAvatar(dateParts[i][null], avatarType, 1);
        baLingoSetFileDate(localPath,
          parseInt(dateParts[null]), parseInt(dateParts[dateParts]),
          parseInt(dateParts[i]),    parseInt(dateParts["accessed"]),
          parseInt(dateParts["yyyy|m|d|"]));
      }
    } else {
      loadLocalAvatar(dateParts[i][null], avatarType, 0);
      baLingoDeleteFile(localPath);
    }
  }
  baLingoDeleteFile(tmpFile);
}

function avatarIDtoPath(avatarID, avatarType, cb) {
  sprite(flashSP).getAvatarCB(avatarID, avatarType, cb);
}

// -----------------------------------------------------------------------
// UGG (user-generated graphics) download / upload
// -----------------------------------------------------------------------

function downloadUgg(uggID) {
  // Path construction uses Math.floor/toString padding; see rightful.ls block
}

function loadLocalUgg(uggID) {
  var url = _global.uggURL + "cache/car/userDecals/" + uggID;
  var netHandle = downloadNetThing(url, cacheFolder + "\\car\\userDecals\\" + uggID);
  _global.fileNetID.push(["ugg", netHandle]);
}

function fileBrowse(p1, p2) {
  sprite(flashSP).downloadUggCB(p1, p2);
}

function uggUpload() {
  var fileName = baGetFilename("open", "openFile", "openFile",
    "JPG,PNG,GIF Images|*.jpg;*.jpeg;*.png;*.gif", 524288, "Select image file", 0, -1, null);
  var fileSize = baFileSize(fileName);
  sprite(flashSP).fileBrowseCB(fileName, fileName, fileSize);
}

function uggUploadSuccess(hoodImg, sideImg, frontImg, backImg) {
  var url = _global.uggURL + "/Upload.aspx?NeatUpload_PostBackID=" + _global.aid + "&accountID=" + _global.aid;
  gSimInet.FieldClear();
  if (hoodImg)  gSimInet.AddFieldFile("hoodImage",  hoodImg);
  if (sideImg)  gSimInet.AddFieldFile("sideImage",  sideImg);
  if (frontImg) gSimInet.AddFieldFile("frontImage", frontImg);
  if (backImg)  gSimInet.AddFieldFile("backImage",  backImg);
  gSimInet.SendField1(url, uggUploadSuccess, uggUploadFail);
}

function uggUploadFail(p1) {
  sprite(flashSP).uggUploadCB(true, p1);
}

function downloadNewInstaller() {
  sprite(flashSP).uggUploadCB(null, "servers.txt");
}

// -----------------------------------------------------------------------
// Installer download / run
// -----------------------------------------------------------------------

function downloadInstallerUpdateFlash() {
  var localPath = baLingoSysFolder("temp") + _global.installerFile;
  if (baLingoFileExists(localPath)) {
    var md5xtra = new xtra("caluMD5");
    if (md5xtra.getFileMD5(localPath) === _global.installerMD5) {
      runInstaller(localPath);
    } else {
      var netHandle = downloadNetThing(_global.installerURL + "/" + _global.installerFile, localPath);
      _global.fileNetID.push(["installer", netHandle]);
    }
  } else {
    var netHandle = downloadNetThing(_global.installerURL + "/" + _global.installerFile, localPath);
    _global.fileNetID.push(["installer", netHandle]);
  }
}

function runInstaller(localPath) {
  sprite(flashSP).loadUpdateCB(_global.installerFile,
    localPath.bytesSoFar, localPath.bytesTotal,
    localPath.bytesSoFar, localPath.bytesTotal);
}

// -----------------------------------------------------------------------
// Cache XML fetch / parse / download
// -----------------------------------------------------------------------

function fetchCacheXML(installerPath) {
  if (baLingoFileExists(installerPath)) {
    baLingoRunProgram(installerPath + " /silent", "normal", 0);
    _player.quit();
  } else {
    sprite(flashSP).showConnectionErrorCB("Download Failed",
      "I'm sorry, but the automatic updater is not working properly. Please visit http://www.nittolegends.com and download the latest version.");
  }
}

function fetchCacheXMLDone(xmlNode) {
  clearCache();
  totalCacheSize = 0;
  totalDownloadedCacheSize = 0;
  aryCacheIndex = 0;
  aryCacheFiles = [];
  aryCacheFileSizes = [];
  var netHandle = ["getcache", getNetText(_global.cacheURL + "content.htm")];
  aryCacheFileSizes = [];
  _global.gNetID.push(netHandle);
}

function createCacheFolders(basePath, xmlNode) {
  createCacheFolders(cacheFolder + "\\", basePath);
  downloadCacheDone();
}

function downloadCache(xmlNode) {
  var count = 1;
  while (count <= xmlNode.count) {
    if (xmlNode.t === "d") {
      if (!baLingoFolderExists(basePath + xmlNode.n)) {
        baLingoCreateFolder(basePath + xmlNode.n);
      }
      createCacheFolders(basePath + xmlNode.n, xmlNode[count]);
    } else if (xmlNode.t === "f") {
      var md5xtra = new xtra("caluMD5");
      var localPath = basePath + xmlNode.n;
      var fileSize  = parseInt(xmlNode.s);
      totalCacheSize += fileSize;
      if (baLingoFileExists(localPath)) {
        if (md5xtra.getFileMD5(localPath) !== xmlNode.md) {
          aryCacheFiles.push(localPath);
          aryCacheFileSizes.push(parseInt(xmlNode.s));
          totalCacheSize += fileSize;
        }
      } else {
        aryCacheFiles.push(localPath);
        aryCacheFileSizes.push(parseInt(xmlNode.s));
        totalCacheSize += fileSize;
      }
      md5xtra = null;
      _system.gc();
    }
    count++;
  }
}

function downloadCacheInProgress(streamStatus) {
  clearCache();
  var url = _global.cacheURL + streamStatus
    .split(_player.applicationPath).join("")
    .split("\\").join("/");
  var netHandle = downloadNetThing(url, streamStatus);
  _global.fileNetID.push(["cache", netHandle]);
}

function downloadCacheDone(bytesSoFar) {
  downloadCacheUpdateFlash(bytesSoFar);
}

function downloadCacheUpdateFlash(bytesSoFar) {
  if (aryCacheIndex >= 0) {
    totalDownloadedCacheSize += aryCacheFileSizes[aryCacheIndex];
    if (aryCacheIndex < aryCacheFiles.length) {
      downloadCache(aryCacheFiles[aryCacheIndex]);
    } else {
      sprite(flashSP).loadFinishCB();
    }
  }
}

function loadDyno(p1) {
  sprite(flashSP).loadUpdateCB(aryCacheFiles[aryCacheIndex], p1,
    aryCacheFileSizes[aryCacheIndex],
    totalDownloadedCacheSize + p1, totalCacheSize);
}

// -----------------------------------------------------------------------
// Dyno file save / load
// -----------------------------------------------------------------------

function saveDyno() {
  var fio = new xtra("fileio");
  fio.setFilterMask("Text Files,*.txt");
  var filePath = fio.displayOpen();
  if (filePath) {
    fio.openFile(filePath, true);
    if (fio.status() == null) {
      var data  = fio.readFile();
      var parts = data.split("|");
      sprite(flashSP).garageDynoLoadCB(getTxtFileName(filePath), parts[0], parts[1], parts[2]);
    }
    fio.closeFile();
  }
}

function getTxtFileName(p1, p2, p3, p4) {
  var fio = new xtra("fileio");
  fio.setFilterMask("Text Files,*.txt");
  var filePath = fio.displaySave("Save Dyno", null);
  if (filePath) {
    fio.createFile(filePath);
    fio.openFile(filePath, 0);
    fio.writeString(p1 + "|" + p2 + "|" + p3 + "|" + p4);
    fio.closeFile();
    sprite(flashSP).garageDynoSaveCB(getTxtFileName(filePath));
  }
}

// -----------------------------------------------------------------------
// Generic file save / open
// -----------------------------------------------------------------------

function saveFile(filePath) {
  var len = filePath.length - 1;
  while (len >= 0) {
    if (filePath.charAt(len) === "\\") {
      return filePath.substr(len + 1, filePath.length - len - 5);
    }
    len--;
  }
  return filePath;
}

function openfile(filePath, content) {
  var fio = new xtra("fileio");
  fio.createFile(filePath);
  fio.openFile(filePath, 0);
  fio.writeString(decodeURIComponent(content));
  if (fio.status() == null) {
    sprite(flashSP).saveFileCB(true, filePath);
  } else {
    sprite(flashSP).saveFileCB(null, filePath);
  }
  fio.closeFile();
}

function fileClearAllDecals(filePath) {
  var fio = new xtra("fileio");
  fio.openFile(filePath, true);
  if (fio.status() == null) {
    sprite(flashSP).openFileCB(true, filePath, fio.readFile());
  } else {
    sprite(flashSP).openFileCB(null, filePath);
  }
  fio.closeFile();
}

function fileClearADecal() {
  var fileList = baLingoFileList(cacheFolder + "\\car\\userDecals", "*.*");
  for (var i = 1; i <= fileList.count; i++) {
    baLingoDeleteFile(cacheFolder + "\\car\\userDecals\\" + fileList[i]);
  }
}

function loadExternalValues(decalID, typeID) {
  if (baLingoFileExists(decalID)) {
    baLingoDeleteFile(cacheFolder + "\\car\\userDecals\\" + decalID + "_" + typeID + ".swf");
  }
}

// -----------------------------------------------------------------------
// servers.txt parser (runs at script load)
// Reads server config and populates _global URL fields.
// -----------------------------------------------------------------------
function _parseServersTxt() {
  var fio = new xtra("fileio");
  fio.openFile("servers.txt", true);
  var raw = fio.readFile();
  fio.closeFile();

  var tokens = [];
  var token  = "";
  var inTag  = false;
  for (var i = 0; i < raw.length; i++) {
    var ch = raw.charAt(i);
    if (ch === "<") {
      inTag = true;
    } else if (inTag && ch !== ">") {
      token += ch;
    } else if (inTag && ch === ">") {
      tokens.push(token);
      token = "";
      inTag = false;
    }
  }

  _global.socketURL      = tokens[0];
  _global.socketPort     = tokens[1];
  _global.mainURL        = tokens[2];
  _global.gameURL        = _global.mainURL + "gameCode1_00.aspx";
  _global.avatarMainURL  = tokens[3];
  _global.cacheURL       = tokens[4];
  _global.uggURL         = tokens[5];
  _global.exeName        = tokens[6];
  _global.isEnc          = (tokens[7] === "true") ? 1 : 0;
}
