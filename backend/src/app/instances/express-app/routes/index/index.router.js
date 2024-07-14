import {Router} from 'express';
import {renderWithLayout} from '../../../../helpers/renderWithLayout.js';

export const indexRouter = Router();

indexRouter.get('/', function (req, res) {
    renderWithLayout(res, 'index', {}, {
        pageTitle: 'Start Page',
    });
});
