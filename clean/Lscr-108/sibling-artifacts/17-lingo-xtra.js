// Source: MovieScript 17 - LingoXtra.ls
// Rewritten from the dumped Lingo only.
// Director/Xtra calls are preserved by original name.
// `lingoNew(...)` and `charRange(...)` are syntax bridges only; no runtime semantics are invented here.

export let gSimInet;

export function lingoXtraNoDebug() {
  the.debugPlaybackEnabled = 0;
  let myFile = lingoNew(xtra("fileio"));
  openfile(myFile, "l" + "i" + "n" + "g" + "o" + "." + "i" + "n" + "i", 1);
  if (status(myFile) == 0) {
    quit();
  }
  myFile = 0;
}

export function lingoXtraInit() {
  the.debugPlaybackEnabled = 1;
  caluMD5_register("I", "agree with the usage terms");
  the.timeoutLength = 216000;
  the.timeoutScript = "setInactive";
  gSimInet = xtra("simInet").new();
}

export function getPCInfo() {
  let bdi = string(baDiskInfo(baSysFolder("windows"), "number"));
  if (offset(".", bdi) > 0) {
    bdi = charRange(bdi, 1, offset(".", bdi) - 1);
  }
  let qs = "mid=" + bdi + baCpuInfo("vendor") + baCpuInfo("type") + baCpuInfo("model");
  qs = qs + "&nid=" + charRange(To3GetMacAddress(), 1, 17);
  qs = qs + "&prid=" + baReadRegString("SOFTWARE\\\\Microsoft\\\\Windows\\\\CurrentVersion", "ProductId", "NoProductId", "HKEY_LOCAL_MACHINE");
  qs = qs + "&cna=" + baComputerName();
  return qs;
}

export function baLingoFolderExists(param1) {
  return baFolderExists(param1);
}

export function baLingoCreateFolder(param1) {
  return baCreateFolder(param1);
}

export function baLingoFileList(param1, param2) {
  return baFileList(param1, param2);
}

export function baLingoFileExists(param1) {
  return baFileExists(param1);
}

export function baLingoTempFileName(param1) {
  return baTempFileName(param1);
}

export function baLingoFileAge(param1) {
  return baFileAge(param1);
}

export function baLingoDeleteFile(param1) {
  return baDeleteFile(param1);
}

export function baLingoFileDateEx(param1, param2, param3, param4) {
  return baFileDateEx(param1, param2, param3, param4);
}

export function baLingoSetFileDate(param1, param2, param3, param4, param5, param6, param7) {
  return baSetFileDate(param1, param2, param3, param4, param5, param6, param7);
}

export function baLingoSysFolder(param1) {
  return baSysFolder(param1);
}

export function baLingoRunProgram(param1, param2, param3) {
  return baRunProgram(param1, param2, param3);
}

export function isCheatEngineRunning() {
  let ceHandle = baWindowList(EMPTY, "ch" + "eat" + " en" + "gine", 0);
  if (ceHandle.count > 0) {
    return 1;
  } else {
    return 0;
  }
}
