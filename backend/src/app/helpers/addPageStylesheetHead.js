export function addPageStylesheetHead(res, stylesheet) {
    const pageStylesheetsHead = (res.locals.pageStylesheetsHead?.slice() || []);
    pageStylesheetsHead.push(stylesheet);
    res.locals.pageStylesheetsHead = pageStylesheetsHead;
}
