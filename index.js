var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({ 
    port: 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/hello', 
    handler: function (request, reply) {
       reply('hello world');
    }
});

// Start the server
server.start(function(err) {
    if (err) {
      console.log(err);
    }
     console.log('Server running at:', server.info.uri);
});
