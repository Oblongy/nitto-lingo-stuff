// Source: MovieScript 10 - Connection Script.ls
// Rewritten from the dumped Lingo only. Unresolved markers are preserved verbatim.

export function connectSocket() {
  /* -- unk26 */
}

export function sockConnTimeout(ctx) {
  ctx.timeout(ctx.sockConnTO).new(50000, ctx.symbol("sockConnTimeout"));
  ctx._global.gMultiuserInstance = new ctx.xtra("Multiuser");

  let timeout = ctx._global.gMultiuserInstance.setNetMessageHandler(
    ctx.symbol("socketMessageHandler"),
    ctx.script("Connection Script"),
  );
  timeout = ctx._global.gMultiuserInstance.connectToNetServer(
    ctx.Rick,
    ctx.MySecret,
    ctx._global.socketURL,
    3724,
    ctx.CieServer,
    true,
  );

  if (!(timeout !== ctx.VOID)) {
    ctx.sprite(ctx.flashSP).showConnectionErrorCB(
      "Connection Error",
      (("Connection could not be established. Please check your firewall. (Error: 004-" + timeout) + ")"),
    );
  }
}

export function socketMessageHandler(ctx, param_timeout) {
  if (param_timeout === true) {
    ctx.timeout(ctx.sockConnTO).forget();
    ctx.timeout(ctx.sockConnTO).new(50000, ctx.symbol("sockConnTimeout"));

    let timeout = ctx._global.gMultiuserInstance.setNetMessageHandler(
      ctx.symbol("socketMessageHandler"),
      ctx.script("Connection Script"),
    );
    timeout = ctx._global.gMultiuserInstance.connectToNetServer(
      ctx.Rick,
      ctx.MySecret,
      ctx._global.socketURL,
      80,
      ctx.CieServer,
      true,
    );

    if (!(timeout !== ctx.VOID)) {
      ctx.sprite(ctx.flashSP).showConnectionErrorCB(
        "Connection Error",
        (("Connection could not be established. Please check your firewall. (Error: 004-" + timeout) + ")"),
      );
    }
  } else {
    ctx.timeout(ctx.sockConnTO).forget();
    ctx.sprite(ctx.flashSP).showSocketConnectionErrorCB();
  }
}

export function executeCall(ctx) {
  const _global = ctx._global.gMultiuserInstance.getNetMessage();

  if (_global.errorCode === ctx.VOID) {
    if (_global.content !== undefined) {
      ctx._global.socketBuffer = ctx._global.socketBuffer + _global.content;

      let gMultiuserInstance = ctx._global.socketBuffer.indexOf(ctx.ld);
      while (gMultiuserInstance > -1) {
        let errorCode = ctx._global.socketBuffer.substr(ctx.VOID, gMultiuserInstance);
        let getNetMessage;

        if (ctx._global.isEnc) {
          errorCode = ctx.decrypt(errorCode);
          getNetMessage = ctx.eval((("propList(" + errorCode) + ")"));
          // Unresolved: exact Object/ex trap still routes to Error 010.
        } else {
          getNetMessage = ctx.eval((("propList(" + errorCode) + ")"));
          // Unresolved: exact Object/ex2 trap still routes to Error 005.
        }

        // Unresolved: exact Object test still chooses between Error 006 and procSocket(getNetMessage).
        ctx.procSocket(getNetMessage);

        ctx._global.socketBuffer = ctx._global.socketBuffer.substr(
          gMultiuserInstance + ctx.length(ctx.ld),
          ctx._global.socketBuffer.length,
        );
        gMultiuserInstance = ctx._global.socketBuffer.indexOf(ctx.ld);
      }

      if (_global.subject === ctx.ConnectToNetServer) {
        ctx.isConnected = 1;
        ctx.LOGIN();
      }
    }
  } else if (_global.errorCode === -2147216214) {
    ctx.sprite(ctx.flashSP).showDisconnectedErrorCB(
      ctx.Disconnected,
      "You have been disconnected from the game. Please restart the application to continue playing.",
    );
  } else {
    ctx.sprite(ctx.flashSP).showConnectionErrorCB(
      "Connection Error",
      (("Connection could not be established. (Error: 007-" + _global.errorCode) + ")"),
    );
    // Unresolved: exact 0x72/0x75/0x03 trap still routes to Error 008 with `ex`.
  }

  ctx._system.gc();
}

export function ssmQueueRecord(ctx, param_buypartugg, buypart) {
  return ctx._global.gNetID.push(Array(param_buypartugg, ctx.getNetText(buypart)));
}

// Source Lingo: clean/Lscr-109/rightful.ls:104-141
// This mirrors the recovered request-builder surface plus the 2-slot
// `_global.gNetID.push(Array(...))` queue record.
// The collision-prone `param_buypartugg = buypart` action test is preserved
// only in the Lingo artifact because the exact temp wiring around that prelude
// is still export-backed but mechanically awkward in JS.
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

export function sendConnectionScriptMessage(ctx, param__global) {
  if (ctx._global.isConnected) {
    if (ctx._global.isEnc) {
      ctx._global.gMultiuserInstance.sendNetMessage(
        ctx.System,
        ctx.String,
        (ctx.encrypt(param__global) + ctx._global.ld),
      );
    } else {
      ctx._global.gMultiuserInstance.sendNetMessage(
        ctx.System,
        ctx.String,
        (param__global + ctx._global.ld),
      );
    }
  }

  // Unresolved: exact 0x0077..0x00A2 trap still routes to Error 009 with `ex`.
}
