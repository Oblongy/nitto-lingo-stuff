// Source: MovieScript 10 - Connection Script.ls
// Rewritten from the dumped Lingo only. Unresolved markers are preserved verbatim.

export function connectSocket() {
  /* -- unk26 */
}

export function sockConnTimeout() {
  /* -- unk26 */
}

export function socketMessageHandler() {
  /* -- unk26 */
}

export function executeCall() {
  /* -- unk26 */
}

export function ssm() {
  /* -- unk26 */
}

// Source Lingo: reconstructed (1)/Lscr-109/rightful.ls:130-155
// Narrow export-backed helper for the recovered request-builder surface.
// This does not replace the unresolved full `ssm` handler.
// It also does not model the trailing `_global.gNetID.push(...)` exactly.
// The stronger export-backed minimum recovered after the first pass is:
// `Lscr-109` builds a 2-item `Array(...)` queue record from the action token
// and a `getNetText(...)` net slot before pushing into `_global.gNetID`.
// The exact temp names are still unresolved, and the `Lscr-93` read-side
// syntax for that second slot is still hidden behind undecoded property-chain
// markers in the current mechanical lift.
export function buildSsmRequest(ctx, param_buypartugg, param_buypart = "") {
  let buypart = ((((("action=" + param_buypartugg) + "&aid=") + ctx._global.aid) + "&sk=") + ctx._global.guid);

  if (param_buypartugg === "login") {
    buypart = buypart + ("&fbt=" + ctx._global.facebookToken);
    buypart = buypart + ("&fbi=" + ctx._global.facebookID);
  }

  if (param_buypartugg === "fbgetsession") {
    buypart = buypart + ("&fbt=" + ctx._global.facebookToken);
  }

  if (param_buypartugg === "agreetoterms") {
    buypart = buypart + ("&fbt=" + ctx._global.facebookToken);
    buypart = buypart + ("&fbi=" + ctx._global.facebookID);
  }

  if (
    param_buypartugg === "login" ||
    param_buypartugg === "createaccount" ||
    param_buypartugg === "fbgetsession"
  ) {
    const md5Xtra = new ctx.xtra("caluMD5");
    buypart = buypart + ("&md5=" + md5Xtra.getFileMD5(ctx._player.applicationPath + ctx._player.applicationName));
    buypart = buypart + ("&" + ctx.getPCInfo());
  } else {
    const appendPcInfoActions = new Set([
      "changehomemachine",
      "buycar",
      "buypart",
      "buyenginepart",
      "buyengine",
      "swapengine",
      "changeemail",
      "changepassword",
      "ebep",
      "sellcar",
      "sellcarpart",
      "sellenginepart",
      "sellengine",
      "buygears",
      "sellallspare",
      "activatepoints",
      "activatemember",
      "repairparts",
      "fbremovefacebook",
      "changepasswordreq",
    ]);

    if (appendPcInfoActions.has(param_buypartugg)) {
      buypart = buypart + ("&" + ctx.getPCInfo());
    } else {
      buypart = buypart + ("&" + param_buypart);
    }
  }

  if (ctx._global.isEnc) {
    return ((ctx._global.gameURL + "?") + ctx.escape(ctx.encrypt(buypart)));
  }

  return ((ctx._global.gameURL + "?") + buypart);
}
