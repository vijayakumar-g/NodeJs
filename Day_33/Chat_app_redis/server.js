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

var jwt = require('jsonwebtoken');
var uuid = require('uuid');
var jwtDecode = require('jwt-decode');
var secretKey = uuid.v4();
var token;
var redis = require('redis');
var redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});
redisClient.on('ready', function(err) {
  if (err) console.log(err);
  console.log("Redis Started");
})

app.use(session({
  secret: 'ssshhhhh',
  saveUninitialized: true,
  resave: true
}));
var sess;
var array = [];
var PORT = process.env.PORT || 3006;
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
  var key;
  /*making the folder static to update the changes over there*/
  app.use("/", express.static('./chatapp'));
  app.engine('html', require('ejs').renderFile);

  /*posting the details sent by the client side and update
  those details in the database for the future process*/

  app.post('/logging', function(req, res) {
    res.setHeader("Content-Type", "application/json");
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
    req.session.cookie.expires = 60 * 60;
    res.setHeader("Content-Type", "application/json");
    //inserting one value
    db.collection("Storage").find({
      username: req.body.username
    }).toArray(function(err, data) {
      if (!err)
        if (data.length != 0) {
          if (data[0].password == req.body.password) {
            var user = req.body.username;

            res.json({
              token: token,
              status: "newlogin",
              name: req.body.username
            });
          }

        }
      else {
        res.json({
          status: "false",
          name: req.body.username
        });
      }
    });
  });
  /*details of the old messages are being read by the usr and are send it
  to the user display**/
  app.post('/checkUserLogin', function(req, res) {
    key = req.body.username;
    if (req.body.token == null || req.body.token == undefined || req.body.token == '') {
      res.json({
        status: true
      });
    } else {
      redisClient.exists(key, function(err, reply) {
        if (err) console.error(err);
        if (reply == 1) {
          res.json({
            status: "already present"
          });
        } else {
          res.json({
            status: "another user"
          });
        }
      })
    }

  });

  app.post('/login', function(req, res) {
    db.collection("Storage").find({
      username: req.body.username,
      password: req.body.password
    }).toArray(function(err, data) {
      if (err) console.error(err);
      if (data.length != 0) {
        var user = req.body.username;
        token = jwt.sign({
          username: req.body.username,
          expiresIn: 60 * 60
        }, secretKey);
        redisClient.hmset(user, 'token', token, function(err, reply) {
          if (err) console.error(err);
            })
        res.json({
          "token": token,
          status: "newlogin",
          username: req.body.username
        });
      } else if (data.length == 0) {
        res.json({
          status: "register",
          username: req.body.username
        });
      } else {
        res.json({
          status: "false"
        });
      }
    });
  });
var online=[];
  app.get('/history', function(req, res)
  {
    redisClient.keys('*',function(err,keys)
  {
    if(err)console.error(err);
    online=keys;
    console.log(online);
    db.collection("ChatHistory").find({}, {
      _id: false,
      message: true,
      user: true,
      time: true
    }).toArray(function(err, data)
    {
      if (err) throw err;
      res.json({db:data,users:online});
    });
  });

});
  app.get('/logout', function(req, res)
  {
    console.log(key);
    var index = array.indexOf(key);
    online.splice(index, 1);
    redisClient.del(key, function(err, reply)
    {
      if (err) console.error(err);
      res.send({
        status: true
      })
    });
  });

  app.post('/updating', function(req, res) {
    res.setHeader("Content-Type", "application/json");
    //deleting one value
    var name = {
      username: req.body.username
    };
    var change_pwd = {
      username: req.body.username,
      password: req.body.password
    };
    db.collection("Storage").find({
      username: req.body.username
    }).toArray(function(err, data) {
      if (!err)
        if (data.length != 0) {
          db.collection("Storage").updateOne(name, change_pwd, function(err, data) {
            if (err) throw err;
            res.json({
              data: "true"
            });
          });
        }
      else {
        res.json({
          data: "false"
        });
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
