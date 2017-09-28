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
/**requiring express-session module to create session**/
var session = require('express-session');
/**requiring jsonwebtoken module to create a token on server side**/
var jwt = require('jsonwebtoken');
/**requiring uuid module to generate keys**/
var uuid = require('uuid');
/**requiring jwt-decode module to decode the tokens**/
var jwtDecode = require('jwt-decode');
/**v4 is random version where v1 timestamp will be taken as key**/
var secretKey = uuid.v4();
/**requiring redis module cache memory**/
var secretmsg = uuid.v1();
var redis = require('redis');
var htmlEncode = require('js-htmlencode').htmlEncode;
var htmlDecode = require('js-htmlencode').htmlDecode;
var redisClient = redis.createClient({
  host: 'localhost',
  port: 6379
});
var token;
var user;
var online=[];
var key;
/**starting the redis**/
redisClient.on('ready', function(err) {
  if (err) console.log(err);
})
/**creating a session with secret**/
app.use(session({
  secret: 'ssshhhhh',
  saveUninitialized: true,
  resave: true
}));
var PORT = process.env.PORT || 3006;
/**mongo db is connected to store the database**/
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/chatApp";
MongoClient.connect(url, function(err, db) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  /*making the folder static to update the changes over there*/
  app.use("/", express.static('./views'));
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
  /**checking wther already a user is present or new user
    is logging into the system**/
  app.post('/checkUserLogin', function(req, res)
  {
      res.setHeader("Content-Type", "application/json");
      if (req.body.token == null || req.body.token == undefined || req.body.token == '') {
      res.json({
        status: true
      });
    }
    else if(token!=null)
      {
      var decoded=jwtDecode(req.body.token)
          if(decoded.username==req.body.username)
          {
            redisClient.exists(decoded.username, function(err, reply)
            {
              if (err) console.error(err);
              if (reply == 1)
              {
                res.json({
                  status: "alreadypresent"
                });
              }
            })
          }
          else
          {
            console.log("coming not same");
            res.json({status:false});
          }
      }
});
/**if new user then login into the system and then
generates a token and store the user name as key and token in redis**/
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
            console.log(token);
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
  /**loading the database to read the messages stored in the database
  and it also retrieves the number of users connected
  using the redis cache and sends to the user*/
  app.get('/history', function(req, res)
  {
    redisClient.keys('*',function(err,keys)
  {
    if(err)console.error(err);
    online=keys;
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

/**logout module clears all the local storage and then
clear the user name from redis so that user is removed
when that particular user logouts**/
  app.post('/logout', function(req, res)
  {
    console.log(req.body.username);
    var index = online.indexOf(req.body.username);
    online.splice(index, 1);
    redisClient.del(req.body.username, function(err, reply)
    {
      if (err) console.error(err);
      res.send({
        status: true
      })
    });
  });
/**changing the password or forgetting the password are
done by the this updating api**/
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
app.post('/encode', function(req, res)
{
var msg=htmlEncode(req.body.message);
console.log(msg);
res.json({"msg":msg});
});
  /**sockets messages are received and the username are set to the
  socket and the messages are broadcasted to every users**/
  io.on('connection', function(socket) {
    socket.on('setUsername', function(data) {
      socket.emit('name', {
        username: data
      });
    });
    socket.on('msg', function(data)
    {
      db.collection("ChatHistory").insertOne(data);
      io.sockets.emit('newmsg', data);
    })
  });
});
http.listen(PORT, function() {
  console.log("server is listening to %s port", PORT);
});
module.exports=app;
