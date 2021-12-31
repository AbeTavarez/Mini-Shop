import Hapi, { server } from '@hapi/hapi';

const start = async () => {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
    });

    //* Routes
    server.route({
        method: 'GET',
        path: '/',
        handler: (req, h) => {
            return h.response('Welcome').code(200);
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