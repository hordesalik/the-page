import { httpServerInstance } from './app/instances/http-server/http-server.instance.js';
import { mongooseInstance } from './app/instances/mongoose/mongoose.instance.js';

const HTTP_SERVER_PORT = process.env.HTTP_SERVER_PORT || '80';

await mongooseInstance.connect();

httpServerInstance.listen(HTTP_SERVER_PORT, () => {
    console.log(`Listening on port ${HTTP_SERVER_PORT}`);
});
