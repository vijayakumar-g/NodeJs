var express = require("express");
var bodyParser = require("body-parser");
/**requiring path module*/
var path = require("path");
var app = express();
var http = require('http').Server(app);

/**requiring socket.io module**/
var io = require('socket.io')(http);
var users = [];

app.get('/', function (req, res) {

res.sendfile(__dirname + '/test.html');
    });

io.sockets.on('connection', function (socket) {

    socket.on('adduser', function (user) {
        socket.user = user;
        users.push(user);
        updateClients();
    });

    socket.on('disconnect', function () {
        for(var i=0; i<users.length; i++) {
            if(users[i] == socket.user) {
                delete users[users[i]];
            }
        }
        updateClients();
    });

    function updateClients() {
        io.sockets.emit('update', users);
    }
});
http.listen(8080, function() {
  console.log("server is listening to %s port", 8080);
});
