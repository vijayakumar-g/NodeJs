/**requiring express module*/
var express = require("express");
/**requiring body-parser module*/
var bodyParser = require("body-parser");
/**requiring path module*/
var path = require("path");
var app = express();
/**requiring fs module**/
var fs = require('fs');

/**requiring http module**/
var http = require('http').Server(app);

/**requiring socket.io module**/
var io = require('socket.io')(http);

var session = require('express-session');

app.use(session({
  secret: 'ssshhhhh',
  saveUninitialized: true,
  resave: true
}));
var sess;

var PORT = process.env.PORT || 3005;
/**mongo db is connected to store the database**/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/chatApp";
MongoClient.connect(url, function(err, db) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  var user;
  var chatdb = [];
  /*making the folder static to update the changes over there*/
  app.use("/", express.static('./chatapp'));
  app.engine('html', require('ejs').renderFile);

  /*posting the details sent by the client side and update
  those details in the database for the future process*/

  app.post('/logging', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    var result = {
      status: true,
      message: "Successfully added"
    };
    db.collection("Storage").find({
      username: req.body.username
    }).toArray(function(err, data) {
      if (!err)
        if (data.length != 0) {
          res.json({
            data: "false"
          });
        }
      else {
        db.collection("Storage").insertOne({
          username: req.body.username,
          password: req.body.password
        }, function(err, result) {
          if (err) throw err;
        });
        res.json({
          data: "true"
        });
      }
    });
  });

  /**signing when the user enters the system and verifiying the username and
  password in the database**/
  app.post('/signingin', function(req, res) {
    req.session.name = req.body.username;
    req.session.cookie.expires=60*60;
    res.setHeader("Content-Type", "application/json");
    var result = {
      status: true,
      message: "Successfully added"
    };
    //inserting one value
    db.collection("Storage").find({
      username: req.body.username
    }).toArray(function(err, data) {
      if (!err)
        if (data.length != 0) {
          if (data[0].password == req.body.password) {
            var user = req.body.username;
            token=jwt.sign({userid: req.body.username,
                          password: req.body.password,
                          expiresIn:60*60},secretKey);

            res.json({
              data: "false",
              name: req.body.username
            });
          } else {
            res.json({
              data: "falsepwd",
              name: req.body.username
            });
          }
        }
      else {
        res.json({
          data: "true",
          name: req.body.username
        });
      }
    });
  });
  /*details of the old messages are being read by the usr and are send it
  to the user display**/
  app.get('/checkUserLogin', function(req, res)
  {
      var session=req.session;
      if(session.name)
    {
      session.isLogin=true;
      res.send(session);
    }
    else
    {
      session.isLogin=false;
      res.send(session);
    }
  });

app.get('/history',function(req,res)
{
  db.collection("ChatHistory").find({}, {
  _id: false,
  message: true,
  user: true,
  time: true
}).toArray(function(err, data) {
  if (err) throw err;
  res.send(data);
  });
});

app.get('/logout', function(req, res) {

  req.session.destroy(function(err) {
    if (err)
    {
      console.log(err);
    }
     else
     {
      res.json({status:true});
    }
  });
});

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
