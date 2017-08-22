var express =require("express");
var bodyParser=require("body-parser");
var path = require("path");
var app=express();
var fs=require('fs');
var PORT = process.env.PORT || 3001;
var json;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",express.static('./sample'));

app.post('/saving',function(req, res)
{
  var result = {status:true,message:"Successfully added"};

res.setHeader('Content-Type', 'application/json');

fs.readFile("filename.json","utf8",function (err,data) {
  try {
    data = JSON.parse(data);
  } catch (e) {
    console.log(e);
    data = [];
  }
  if (!(data instanceof Array)) {
    data = [];
  }
  data.push(req.body);

fs.writeFile("filename.json",JSON.stringify(data),"utf8",function (err,data) {
    try {
      if (err) {
        throw err;
      }
      res.send(result);

    } catch (e) {
      result.status = false;
      result.message = "failed set";
      res.send(result);
    }
  });
});
});
app.post('/deleting',function(req, res)
{
  var result = {status:true,message:"Successfully added"};

res.setHeader('Content-Type', 'application/json');

fs.readFile("filename.json","utf8",function (err,data) {
  try {
    data = JSON.parse(data);
    console.log("sucess");
      }
      catch (e)
       {
    console.log(e);
    data = [];
      }
      for(i=0; i<data.length; i++)
      {
        if(data[i]!=null)
          {
          if(data[i].firstName==req.body.firstName)
            {
              delete data[i];
            }
          }
      }
  if (!(data instanceof Array))
  {
    data = [];
  }

fs.writeFile("filename.json",JSON.stringify(data),"utf8",function (err,data) {
    try {
      if (err) {
        throw err;
      }
      res.send(result);

    } catch (e) {
      result.status = false;
      result.message = "failed set";
      res.send(result);
    }
  });
});
});
app.post('/updating',function(req, res)
{
  var result = {status:true,message:"Successfully added"};

res.setHeader('Content-Type', 'application/json');

fs.readFile("filename.json","utf8",function (err,data) {
  try {
    data = JSON.parse(data);
    console.log("sucess");
      }
      catch (e)
       {
    console.log(e);
    data = [];
      }
      for(i=0; i<data.length; i++)
      {
        if(data[i]!=null)
          {
          if(data[i].firstName==req.body.firstName)
            {
              data[i].firstName=req.body.firstName;
              data[i].lastName=req.body.lastName;
              data[i].address=req.body.address;
              data[i].city=req.body.city;
              data[i].state=req.body.state;
              data[i].zip=req.body.zip;
              data[i].mobile=req.body.mobile;
            }
          }
      }
  if (!(data instanceof Array))
  {
    data = [];
  }

fs.writeFile("filename.json",JSON.stringify(data),"utf8",function (err,data) {
    try {
      if (err) {
        throw err;
      }
      res.send(result);

    } catch (e) {
      result.status = false;
      result.message = "failed set";
      res.send(result);
    }
  });
});
});

app.get('/get',function (req,res)
{
  fs.readFile("filename.json","utf8",function (err,data) {
    try {
      data = JSON.parse(data);
    } catch (e) {
      console.log(e);
      data = [];
    }
    if (!(data instanceof Array)) {
      data = [];
      }
      res.send(data);
    });
});

app.listen(PORT,function()
{
  console.log("server is listening to %s port",PORT);
})
