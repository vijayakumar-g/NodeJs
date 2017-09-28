/**requiring express module*/
var express = require("express");
var app = express();
/**requiring body-parser module*/
var bodyParser = require("body-parser");
/**requiring path module*/
var path = require("path");
/**requiring fs module**/
var fs = require('fs');
/**requiring http module**/
var http = require('http').Server(app);
/**requiring socket.io module**/
var io = require('socket.io')(http);
var router = express.Router();
var PORT = process.env.PORT || 3006;
/**mongo db is connected to store the database**/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/chatApp";
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


/*making the folder static to update the changes over there*/
app.use("/", express.static('./views'));
app.use(require('./controller/chat'));

app.get('/', function (req, res) {
    res.render('index.jade', {"result": ""})
});
app.get('/new_pwd', function (req, res) {
    res.render('new_pwd.jade', {"result": ""})
});
app.get('/chat', function (req, res) {
    res.render('chat.jade', {"result": ""})
});

MongoClient.connect(url, function(err, db)
{
/**sockets messages are received and the username are set to the
socket and the messages are broadcasted to every users**/
io.on('connection', function(socket) {
  socket.on('setUsername', function(data) {
    socket.emit('name', {
      username: data
    });
  });
  socket.on('msg', function(data) {
    db.collection("ChatHistory").insertOne(data);
    io.sockets.emit('newmsg', data);
  })
});
});
http.listen(PORT, function() {
  console.log("server is listening to %s port", PORT);
});
