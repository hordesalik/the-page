export function addPageScriptBodyEnd(res, script) {
    const pageScriptsBodyEnd = (res.locals.pageScriptsBodyEnd?.slice() || []);
    pageScriptsBodyEnd.push(script);
    res.locals.pageScriptsBodyEnd = pageScriptsBodyEnd;
}
