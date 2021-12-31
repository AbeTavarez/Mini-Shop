import Hapi, { server } from '@hapi/hapi';

const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    //* Routes
    // server.route({
    //     method: 'GET',
    //     path: '/',
    //     handler: (req, h) => {
    //         return h.response('Hello from Backend').code(200);
    //     }
    // });
    server.route({
        method: 'POST',
        path: '/',
        handler: (req, h) => {
            const payload = req.payload;
            const msg = payload.msg;
            return `Message: ${msg}`;
        }
    });

    await server.start()
    console.log(`Server is listening on ${server.info.uri}`);
};



process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
});

start();