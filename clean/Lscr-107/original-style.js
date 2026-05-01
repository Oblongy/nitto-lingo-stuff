// Lscr-107 original-style JS translation
// Source: Lscr-107/original-style.lingo
// MovieScript 7 - Main/Startup Script

function prepareMovie() {
  // no-op
}

function startMovie() {
  lingoXtraNoDebug();
  lingoXtraInit();
  _global.ld = String.fromCharCode(30);
  _global.aid = null;
  _global.gNetID = [];
  _global.fileNetID = [];
  _global.lastAction = "";
  _global.mainURL = "http://game.nittolegends.com/";
  _global.gameURL = _global.mainURL + "gameCode1_00.aspx";
  _global.avatarMainURL = _global.mainURL;
  _global.cacheURL = "http://download.nittolegends.com/";
  _global.socketURL = "live.nittolegends.com";
  _global.uggURL = "http://ugg.nittolegends.com/";
  _global.exeName = "NittoLegendsBeta";
  _global.socketBuffer = "";
  _global.isEnc = 1;
  initFileHandler();
  _system.gc();
  _global.isIdle = 0;
  _global.isConnected = 0;
  _global.facebookToken = "";
  _global.facebookID = "";
  _global.facebookSessionSecret = "";
  _global.facebookSessionKey = "";
}

function stopMovie() {
  resizeFlashSprite();
  _global.objRace = new RaceEngine();
}

function resizeWindow() {
  if (_global.gMultiuserInstance) {
    ssm("LO");
    var errCode = null;
    _global.gMultiuserInstance.BreakConnection("Rick");
  }
}

function zoomWindow() {
  resizeFlashSprite();
}

function resizeFlashSprite() {
  resizeFlashSprite();
}

function setInactive() {
  sprite(flashSP).rect = {
    left: 0, top: 0,
    right: Math.round(_movie.stage.rect.right - _movie.stage.rect.left),
    bottom: Math.round(_movie.stage.rect.bottom - _movie.stage.rect.top)
  };
}

function sendHeartbeat() {
  if (_global.isConnected) {
    _global.isIdle = 1;
    if (_global.gMultiuserInstance) {
      ssm("LO");
      var errCode = null;
      _global.gMultiuserInstance.BreakConnection("Rick");
    }
    sprite(flashSP).noActivityCB();
    _global.isConnected = 0;
  }
}

function openURL(url) {
  if (_global.isIdle) {
    ssm("H");
  }
}

function clearFB(url) {
  gotoNetPage(decodeURIComponent(url), "_blank");
}

// -----------------------------------------------------------------------
// Facebook session clear (embedded block, runs on script load)
// -----------------------------------------------------------------------
function clearFacebookSession() {
  _global.facebookToken = "";
  _global.facebookID = "";
  _global.facebookSessionSecret = "";
  _global.facebookSessionKey = "";
}
