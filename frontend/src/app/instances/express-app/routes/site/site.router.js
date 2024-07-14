import { Router } from 'express';
import { sitesPagesModel } from '../../../../models/sitesPages/sitesPages.model.js';

export const siteRouter = new Router();

siteRouter.get('/site/:siteId*',
    async (req, res, next) => {
        const { siteId, '0': sitePageUri } = req.params;
        try {
            const sitePage = await sitesPagesModel.findSitePageForSiteByUri(siteId, sitePageUri);
            res.render('sitePage',
                {
                    sitePage
                }
            );
        } catch (e) {
            res.json({
                error: e.message,
            });
        }
    },
);
