/**requiring express module*/
var express = require("express");
/**requiring body-parser module*/
var bodyParser = require("body-parser");
/**requiring path module*/
var path = require("path");
var app = express();
/**requiring fs module*/
var fs = require('fs');
var PORT = process.env.PORT || 3002;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/database";
var session = require('express-session');
app.use(session({
  secret: 'ssshhhhh',
  saveUninitialized: true,
  resave: true
}));
var sess;
MongoClient.connect(url,function(err,db)
{
var json;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

/*making the folder static to update the changes over there*/
app.use("/", express.static('./sample'));
app.engine('html', require('ejs').renderFile);
/*posting the details sent by the client side and update
those details in the file for the future process*/

app.post('/logging', function(req, res)
{
  res.setHeader("Content-Type","application/json");
  var result = {
    status: true,
    message: "Successfully added"
};
  //inserting one value
db.collection("Intellect").find({Name:req.body.Name}).toArray(function(err,data)
{
  if(!err)
  if(data.length!=0)
  {
    res.json({data:"false"});
  }
  else
  {
    db.collection("Intellect").insertOne({Name:req.body.Name,Password:req.body.Password},function(err,result)
      {
          if(err)throw err;
      });
      res.json({data:"true"});
  }
});
});
app.post('/signingin', function(req, res)
{
  	console.log("its calling me 2 ");
  sess = req.session;
  sess.name = req.body.Name;
  res.setHeader("Content-Type","application/json");
  var result = {
    status: true,
    message: "Successfully added"
};
  //inserting one value
db.collection("Intellect").find({Name:req.body.Name}).toArray(function(err,data)
{
  if(!err)
  if(data.length!=0)
  {
    res.json({data:"false"});
  }
  else
  {
    res.json({data:"true"});
  }
});
});
app.get('/admin', function(req, res) {
console.log("its calling me 3 ");
  sess = req.session;
  if (sess.name)
  {
    console.log("coming with user name");
    res.write('<h1>Hello ' + sess.name + '</h1><br>');
    res.end('<a href=' + '/logout' + '>Logout</a>');
  }
  else {
    console.log("no username ");
    res.write('<h1>Please login first.</h1>');
    res.end('<a href=' + '/' + '>Login</a>');
  }
});

app.get('/', function(req, res)
{
  	console.log("its calling me 1");
  sess = req.session;
  if (sess.name)
  {
    res.render('chat.html');
  } else
  {
    res.render('index.html');
  }
db.collection("Intellect").find({},{_id:false, Name:true, Password:true}).toArray(function (err, data)
    {
  if(err)throw err;
  res.send(data);
    });
  db.close();
});


app.get('/logout', function(req, res) {

  req.session.destroy(function(err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });

});
});
app.listen(PORT, function() {
  console.log("server is listening to %s port", PORT);
})
