// Source: reconstructed (1)/Lscr-93/rightful.ls:590-616
// Rewritten from the dumped Lingo only. Unresolved markers are preserved verbatim.

function spriteCall(ctx, method, ...args) {
  return ctx.sprite(ctx.flashSP)[method](...args);
}

function parseDynoXml(ctx, xmlText) {
  const parser = new ctx.xtra("xmlparser");
  parser.parseString(xmlText);
  const netError = parser.makeList().n2;
  return netError;
}

// Source Lingo: reconstructed (1)/Lscr-93/rightful.ls:590-607
export function handleBuyDynoResponse(ctx, checkedForOneClient) {
  if (!(checkedForOneClient.getAProp("s") === true)) {
    return spriteCall(ctx, "garageDynoBuyCB", checkedForOneClient.getAProp("s"));
  }

  ctx._global.objRace.startRace(
    checkedForOneClient.getAProp("d"),
    checkedForOneClient.getAProp("t"),
  );
  ctx._global.objRace.init("DYNO");

  const netError = parseDynoXml(ctx, checkedForOneClient.getAProp("d"));
  return spriteCall(
    ctx,
    "garageDynoBuyCB",
    checkedForOneClient.getAProp("s"),
    checkedForOneClient.getAProp("b"),
    netError["!ATTRIBUTES"].e,
    netError["!ATTRIBUTES"].u,
    netError["!ATTRIBUTES"].ad,
    netError["!ATTRIBUTES"].sl,
    netError["!ATTRIBUTES"].n,
  );
}

// Source Lingo: reconstructed (1)/Lscr-93/rightful.ls:610-612
export function handleChangeBoostResponse(ctx, checkedForOneClient) {
  return spriteCall(ctx, "garageSetBoostCB", checkedForOneClient.getAProp("s"));
}

// Source Lingo: reconstructed (1)/Lscr-93/rightful.ls:614-616
export function handleChangeAirFuelResponse(ctx, checkedForOneClient) {
  return spriteCall(ctx, "garageSetAFRatioCB", checkedForOneClient.getAProp("s"));
}

// Source Lingo: reconstructed (1)/Lscr-93/rightful.ls:123-125,590-616
// Narrow dyno-only slice of the larger action-dispatch table in __embedded_lscr93_block01.
export function dispatchDynoProcSocketAction(ctx, action, checkedForOneClient) {
  switch (action) {
    case "buydyno":
      return handleBuyDynoResponse(ctx, checkedForOneClient);
    case "changeboost":
      return handleChangeBoostResponse(ctx, checkedForOneClient);
    case "changeairfuel":
      return handleChangeAirFuelResponse(ctx, checkedForOneClient);
    default:
      return { unresolved: true, action };
  }
}
