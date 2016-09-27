const calc = require('./lib');
const Hapi = require('hapi')

console.log(process.env)
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
    host: 'localhost',
    port: process.env.$PORT || 8000
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
