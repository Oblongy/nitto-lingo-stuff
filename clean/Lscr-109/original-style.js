// Lscr-109 original-style JS translation
// Source: Lscr-109/original-style.lingo
// MovieScript 10 - Connection Script
// D = String.fromCharCode(30)  (field delimiter for socket messages)

function connectSocket() {
  // dispatch stub only
}

function sockConnTimeout() {
  timeout(sockConnTO).new(50000, "sockConnTimeout");
  _global.gMultiuserInstance = new xtra("Multiuser");
  var result = _global.gMultiuserInstance.setNetMessageHandler("socketMessageHandler", script("Connection Script"));
  result = _global.gMultiuserInstance.connectToNetServer("Rick", "MySecret", _global.socketURL, 3724, "CieServer", true);
  if (result == null) {
    sprite(flashSP).showConnectionErrorCB(
      "Connection Error",
      "Connection could not be established. Please check your firewall. (Error: 004-" + result + ")"
    );
  }
}

function socketMessageHandler(connected) {
  if (connected === true) {
    timeout(sockConnTO).forget();
    timeout(sockConnTO).new(50000, "sockConnTimeout");
    var result = _global.gMultiuserInstance.setNetMessageHandler("socketMessageHandler", script("Connection Script"));
    result = _global.gMultiuserInstance.connectToNetServer("Rick", "MySecret", _global.socketURL, 80, "CieServer", true);
    if (result == null) {
      sprite(flashSP).showConnectionErrorCB(
        "Connection Error",
        "Connection could not be established. Please check your firewall. (Error: 004-" + result + ")"
      );
    }
  } else {
    timeout(sockConnTO).forget();
    sprite(flashSP).showSocketConnectionErrorCB();
  }
}

function executeCall() {
  var msg = _global.gMultiuserInstance.getNetMessage();

  if (msg.errorCode == null) return;

  if (msg.content !== undefined) {
    _global.socketBuffer += msg.content;
    var pos = _global.socketBuffer.indexOf(_global.ld);
    while (pos > -1) {
      var raw = _global.socketBuffer.substr(0, pos);
      if (_global.isEnc) {
        raw = decrypt(raw);
      }
      var parsed = parsePropList(raw);
      procSocket(parsed);
      _global.socketBuffer = _global.socketBuffer.substr(pos + _global.ld.length);
      pos = _global.socketBuffer.indexOf(_global.ld);
    }
  }

  if (msg.subject === "ConnectToNetServer") {
    _global.isConnected = 1;
    LOGIN();
  } else if (msg.errorCode === -2147216214) {
    sprite(flashSP).showDisconnectedErrorCB(
      "Disconnected",
      "You have been disconnected from the game. Please restart the application to continue playing."
    );
  } else {
    sprite(flashSP).showConnectionErrorCB(
      "Connection Error",
      "Connection could not be established. (Error: 007-" + msg.errorCode + ")"
    );
  }

  _system.gc();
}

function ssm(action, params) {
  // Normalize buypartugg -> buypart
  if (action === "buypartugg") {
    action = "buypart";
    params = 1;
  }

  // Base query string
  var req = "action=" + action + "&aid=" + _global.aid + "&sk=" + _global.guid;

  // Facebook session fields
  if (action === "login") {
    req += "&fbt=" + _global.facebookToken;
    req += "&fbi=" + _global.facebookID;
  }
  if (action === "fbgetsession") {
    req += "&fbt=" + _global.facebookToken;
  }
  if (action === "agreetoterms") {
    req += "&fbt=" + _global.facebookToken;
    req += "&fbi=" + _global.facebookID;
  }

  // MD5 + PC info for sensitive actions
  if (action === "login" || action === "createaccount" || action === "fbgetsession") {
    var md5xtra = new xtra("caluMD5");
    req += "&md5=" + md5xtra.getFileMD5(_player.applicationPath + _player.applicationName);
    req += "&" + getPCInfo();
  } else if (
    action === "changehomemachine" || action === "buycar"    || action === "buypart"     ||
    action === "buyenginepart"     || action === "buyengine" || action === "swapengine"  ||
    action === "changeemail"       || action === "changepassword" || action === "ebep"   ||
    action === "sellcar"           || action === "sellcarpart"    || action === "sellenginepart" ||
    action === "sellengine"        || action === "buygears"       || action === "sellallspare"   ||
    action === "activatepoints"    || action === "activatemember" || action === "repairparts"    ||
    action === "fbremovefacebook"  || action === "changepasswordreq"
  ) {
    req += "&" + getPCInfo();
  } else {
    req += "&" + params;
  }

  // Encrypt if needed, then build full URL
  var url;
  if (_global.isEnc) {
    url = _global.gameURL + "?" + encodeURIComponent(encrypt(req));
  } else {
    url = _global.gameURL + "?" + req;
  }

  // Push [action, netTextHandle] onto the queue
  _global.gNetID.push([action, getNetText(url)]);
}

function sendSocketMessage(msg) {
  if (_global.isConnected) {
    if (_global.isEnc) {
      _global.gMultiuserInstance.sendNetMessage("System", "String", encrypt(msg) + _global.ld);
    } else {
      _global.gMultiuserInstance.sendNetMessage("System", "String", msg + _global.ld);
    }
  }
}
