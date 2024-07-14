import { sitesPagesModel } from '../../../../../../../../models/sitesPages/sitesPages.model.js';
import { renderErrorWithAdminLayout } from '../../../../../../../../helpers/renderErrorWithAdminLayout.js';
import { renderExceptionWithAdminLayout } from '../../../../../../../../helpers/renderExceptionWithAdminLayout.js';

export async function loadSitePageFromParams(req, res, next) {
    try {
        const sitePage = await sitesPagesModel.findSitePageForSite(res.locals.site.id, req.params.id);
        if (!sitePage) {
            return renderErrorWithAdminLayout(res, 'Site Page Not Found');
        }

        res.locals.sitePage = sitePage;

        next();
    } catch (e) {
        renderExceptionWithAdminLayout(res, e);
    }
}
