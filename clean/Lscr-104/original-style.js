// Lscr-104 original-style JS translation
// Source: Lscr-104/original-style.lingo
// MovieScript 4 - Socket Send Commands
// Each function builds a chr(30)-delimited socket message and calls ssm() to send it.

const D = String.fromCharCode(30);

// -----------------------------------------------------------------------
// Session
// -----------------------------------------------------------------------

function LOGIN() {
  // no-op (login is initiated via ssm in Lscr-109)
}

// -----------------------------------------------------------------------
// NIM (Buddy) Commands
// -----------------------------------------------------------------------

function SENDNIMMESSAGE() {
  ssm("L" + D + _global.guid);
}

function UPDATENIMUSER(userID, userName) {
  ssm("SN" + D + userID + D + decodeURIComponent(userName));
}

function DELETENIMUSER(userID) {
  ssm("UNU" + D + userID);
}

function BLOCKNIMUSER(userID) {
  ssm("DU" + D + userID);
}

function UNBLOCKNIMUSER(userID) {
  ssm("BU" + D + userID);
}

function INQUIRYNIMUSER(userID) {
  ssm("UU" + D + userID);
}

function ALLOWNIMUSER(userName) {
  ssm("IU" + D + decodeURIComponent(userName));
}

function NIMOKRESPONSE(userID, status) {
  ssm("AU" + D + userID + D + status);
}

function DELETENIMINQUIREDUSER(userID) {
  ssm("OR" + D + userID);
}

function GETNIMINREQUESTS(userID) {
  ssm("DIU" + D + userID);
}

function GETNIMOUTREQUESTS() {
  ssm("GIR");
}

// -----------------------------------------------------------------------
// Race Chat Rooms
// -----------------------------------------------------------------------

function LISTRACECHATROOMS2() {
  ssm("GOR");
}

function CREATECHATROOM(roomID, roomName) {
  ssm("LRCR2" + D + roomID + D + roomName);
}

function JOINRACECHAT(roomName, roomPass, p1, p2, p3, p4, p5) {
  roomName = decodeURIComponent(roomName);
  roomPass = decodeURIComponent(roomPass);
  ssm("CRC" + D + roomName + D + roomPass + D + p1 + D + p2 + D + p3 + D + p4 + D + p5);
}

function LEAVERACECHAT(roomName, p1, p2, p3, p4) {
  roomName = decodeURIComponent(roomName);
  ssm("JRC" + D + roomName + D + p1 + D + p2 + D + p3 + D + p4);
}

function LISTRACECHATUSERS() {
  ssm("LRC");
}

function SENDRACECHAT() {
  ssm("LRCU");
}

// -----------------------------------------------------------------------
// Team Commands
// -----------------------------------------------------------------------

function TEAMKICK(userName) {
  userName = decodeURIComponent(userName);
  ssm("SRC" + D + userName);
}

function TEAMCHANGEROLE(userID) {
  ssm("TK" + D + userID);
}

function TEAMUPDATEMAXBET(p1, p2, p3) {
  ssm("TCR" + D + p1 + D + p2 + D + p3);
}

function TEAMDEPOSIT(amount, p2) {
  ssm("TUB" + D + amount + D + p2);
}

function TEAMWITHDRAW(amount) {
  ssm("TDP" + D + amount);
}

function TEAMQUIT(teamID) {
  ssm("TW" + D + teamID);
}

function TEAMACCEPT() {
  ssm("TQ");
}

function TEAMDISPERSE(teamID) {
  ssm("TAT" + D + teamID);
}

function TEAMCREATE(teamName, teamTag) {
  ssm("TDB" + D + teamName + D + teamTag);
}

function TEAMSTEPDOWN(teamID) {
  ssm("TC" + D + decodeURIComponent(teamID));
}

// -----------------------------------------------------------------------
// KOTH (King of the Hill)
// -----------------------------------------------------------------------

function GETKOTH() {
  ssm("TL");
}

function JOINKOTH() {
  ssm("GK");
}

function LEAVEKOTH(roomID, acid) {
  ssm("JK" + D + roomID + D + acid);
  _global.objRace.raceType = "KOTH";
  executeCall("getonecarengine", "acid=" + roomID);
}

function KCNT() {
  ssm("LK");
}

function SENDVOTE(roomID, voteTarget) {
  ssm("KC" + D + roomID + D + voteTarget);
  _global.objRace.init("KOTH");
}

function KDONE(p1, p2) {
  ssm("SV" + D + p1 + D + p2);
}

function KRT(rt, rd, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15) {
  rt = Math.floor(rt * 1000) / 1000;
  rd = Math.floor(rd * 100) / 100;
  var afterRD = Math.floor(arguments[2] * 1000) / 1000;
  ssm("KD" + D + rt + D + rd +
    D + p1 + D + p2 + D + p3 + D + p4 + D + p5 + D + p6 + D + p7 +
    D + p8 + D + p9 + D + p10 + D + p11 + D + p12 + D + p13 +
    D + isCheatEngineRunning() +
    D + afterRD +
    D + CheckProcesses(decrypt(_global.cp)) +
    D + CheckWindows(decrypt(_global.cw)) +
    D + CheckWindowsClass(decrypt(_global.cwc)));
}

function STG(rt, rd) {
  rt = Math.floor(rt * 1000) / 1000;
  ssm("KRT" + D + rt + D + rd);
}

function int(p1, p2, p3) {
  p1 = Math.floor(p1 * 1000) / 1000;
  p2 = Math.floor(p2 * 1000) / 1000;
  p3 = Math.floor(p3 * 1000) / 1000;
  ssm("S" + D + p1 + D + p2 + D + p3);
}

function KOK(p1, p2, p3, p4) {
  p1 = Math.floor(p1 * 1000) / 1000;
  p2 = Math.floor(p2 * 1000) / 1000;
  p3 = Math.floor(p3 * 1000) / 1000;
  ssm("I" + D + p1 + D + p2 + D + p3 + D + p4);
}

function KREADY(raceID) {
  ssm("KOK" + D + raceID);
  _global.objRace.init("KOTH");
}

// -----------------------------------------------------------------------
// Rival Race
// -----------------------------------------------------------------------

function GETRIVALS(p1, p2) {
  ssm("KR" + D + p1 + D + p2);
}

function RREQ() {
  ssm("GR");
}

function RRSP(p1, p2, p3, p4, p5) {
  ssm("RRQ" + D + p1 + D + p2 + D + p3 + D + p4 + D + p5);
}

function RLVE(p1, p2, p3) {
  ssm("RRS" + D + p1 + D + p2 + D + p3);
}

function RIVOK() {
  ssm("RL");
}

function RIVREADY() {
  ssm("RO");
  _global.objRace.init("RIVAL");
}

function RIVRT(p1, p2) {
  ssm("RR" + D + p1 + D + p2);
}

function RIVDONE(rt, rd) {
  rt = Math.floor(rt * 1000) / 1000;
  ssm("RIVRT" + D + rt + D + rd);
}

// -----------------------------------------------------------------------
// Human Tournament (HT)
// -----------------------------------------------------------------------

function HTJOIN(rt, rd, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15) {
  rt = Math.floor(rt * 1000) / 1000;
  rd = Math.floor(rd * 100) / 100;
  var afterRD = Math.floor(arguments[2] * 1000) / 1000;
  console.log("before RD");
  console.log(decrypt(_global.cwc));
  console.log(CheckWindows(decrypt(_global.cw)));
  console.log(CheckWindowsClass(decrypt(_global.cwc)));
  ssm("RD" + D + rt + D + rd +
    D + p1 + D + p2 + D + p3 + D + p4 + D + p5 + D + p6 + D + p7 +
    D + p8 + D + p9 + D + p10 + D + p11 + D + p12 + D + p13 +
    D + isCheatEngineRunning() +
    D + afterRD +
    D + CheckProcesses(decrypt(_global.cp)) +
    D + CheckWindows(decrypt(_global.cw)) +
    D + CheckWindowsClass(decrypt(_global.cwc)));
  console.log("after RD");
}

function HQOK(qualifyID) {
  ssm("JT" + D + qualifyID);
}

function HTGET32(qualifyID) {
  ssm("HQOK" + D + qualifyID);
}

function HTGETTREE() {
  ssm("HQ32");
}

function HTSPECTATE() {
  ssm("HTFT");
}

function HTQUIT() {
  ssm("HTS");
}

function HTINFO() {
  ssm("HTQUIT");
}

function HTQREADY() {
  ssm("HTI");
}

function HTQD(p1, p2) {
  ssm("HQR" + D + p1 + D + p2);
}

function HTQRT(rt, rd, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15) {
  rt = Math.floor(rt * 1000) / 1000;
  rd = Math.floor(rd * 100) / 100;
  var afterRD = Math.floor(arguments[2] * 1000) / 1000;
  ssm("HTQD" + D + rt + D + rd +
    D + p1 + D + p2 + D + p3 + D + p4 + D + p5 + D + p6 + D + p7 +
    D + p8 + D + p9 + D + p10 + D + p11 + D + p12 + D + p13 +
    D + isCheatEngineRunning() +
    D + afterRD +
    D + CheckProcesses(decrypt(_global.cp)) +
    D + CheckWindows(decrypt(_global.cw)) +
    D + CheckWindowsClass(decrypt(_global.cwc)));
}

function HTREADY(rt, rd) {
  rt = Math.floor(rt * 1000) / 1000;
  ssm("HQRT" + D + rt + D + rd);
}

function HTD(p1, p2) {
  ssm("HTR" + D + p1 + D + p2);
}

function HTRT(rt, rd, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15) {
  rt = Math.floor(rt * 1000) / 1000;
  rd = Math.floor(rd * 100) / 100;
  var afterRD = Math.floor(arguments[2] * 1000) / 1000;
  ssm("HTD" + D + rt + D + rd +
    D + p1 + D + p2 + D + p3 + D + p4 + D + p5 + D + p6 + D + p7 +
    D + p8 + D + p9 + D + p10 + D + p11 + D + p12 + D + p13 +
    D + isCheatEngineRunning() +
    D + afterRD +
    D + CheckProcesses(decrypt(_global.cp)) +
    D + CheckWindows(decrypt(_global.cw)) +
    D + CheckWindowsClass(decrypt(_global.cwc)));
}

// -----------------------------------------------------------------------
// Team Rivals
// -----------------------------------------------------------------------

function TRGETRACERS(rt, rd) {
  rt = Math.floor(rt * 1000) / 1000;
  ssm("HTRT" + D + rt + D + rd);
}

function TRGETTEAMS() {
  ssm("GTR");
}

function TRPREREQUEST() {
  ssm("TRGT");
}

function TRREQUEST(teamID) {
  ssm("TRPRQ" + D + teamID);
}

function TRCOUNTER(p1, p2, p3, p4, p5, p6, p7, p8) {
  ssm("TRRQ" + D + p1 + D + p2 + D + p3 + D + p4 + D + p5 + D + p6 + D + p7 + D + p8);
}

function TRRESPONSE(p1, p2) {
  ssm("TRCT" + D + p1 + D + p2);
}

function TROK(p1, p2) {
  ssm("TRRS" + D + p1 + D + p2);
}

function TRIVREADY(teamID) {
  ssm("TRO" + D + teamID);
}

function JOINELECTION(p1, p2) {
  ssm("TRR" + D + p1 + D + p2);
}

// -----------------------------------------------------------------------
// Election
// -----------------------------------------------------------------------

function ELECTIONINTERVIEWLIST() {
  ssm("JE");
}

function m() {
  ssm("EIL");
}

function CLOSEGAME(p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11) {
  ssm("M" + D + p1 + D + p2 + D + p3 + D + p4 + D + p5 + D + p6 +
      D + p7 + D + p8 + D + p9 + D + p10 + D + p11);
}

// -----------------------------------------------------------------------
// Process / Anti-cheat
// -----------------------------------------------------------------------

function IsMyProcessNameCorrect() {
  _player.quit();
}

function CheckNittoProcesses() {
  var result = 0;
  if (_player.applicationName.search(_global.exeName) !== -1) {
    result = 1;
  }
  return result;
}

function CheckNittoProcessesCB(param1) {
  if (_player.debugPlaybackEnabled !== true) {
    _global.checkedForOneClient = null;
    _global.checkProcessResult = getNetText(_global.mainURL + "oneclient.html?hey=1");
  }
}

// -----------------------------------------------------------------------
// Process check callback (embedded block)
// -----------------------------------------------------------------------
function _processCheckCallback(param1) {
  console.log("result: " + param1);
  param1 = null;
  var cheat;
  if (param1 !== "0") {
    var result = CheckProcesses(_global.exeName);
    var parts = result.split(",");
    var count = parts.length;
    if (count > 1) {
      cheat = true;
    } else {
      if (IsMyProcessNameCorrect() === 0) {
        cheat = "0";
      }
    }
  }
  console.log("flashReturnValue: " + cheat);
  sprite(flashSP).CheckNittoProcessesCB(cheat);
}
