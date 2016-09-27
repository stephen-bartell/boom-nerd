const calc = require('./lib');
const Hapi = require('hapi')

const port = process.argv[2] || 8000;
console.log(port)

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: '0.0.0.0',
    port: port
});

server.route({
    method: 'POST',
    path:'/calc',
    handler: function (request, reply) {
        return reply({ cost: calc(request.payload) });
    }
});

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
