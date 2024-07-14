import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import mustacheExpress from 'mustache-express';
import { adminRouter } from './routes/admin/admin.router.js';
import { indexRouter } from './routes/index/index.router.js';
import { loginRouter } from './routes/login/login.router.js';
import { logoutRouter } from './routes/logout/logout.router.js';
import { signupRouter } from './routes/signup/signup.router.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const expressAppInstance = express();

expressAppInstance.set('views', path.join(__dirname, '..', '..', 'views'));
expressAppInstance.set('view engine', 'mustache');
expressAppInstance.engine('mustache', mustacheExpress());

expressAppInstance.use('/public', express.static(path.join(__dirname, '..', '..', '..', 'public')));
expressAppInstance.use('/admin/', adminRouter);
expressAppInstance.use(indexRouter);
expressAppInstance.use(loginRouter);
expressAppInstance.use(logoutRouter);
expressAppInstance.use(signupRouter);
