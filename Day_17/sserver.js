var express =require("express");
var bodyParser=require("body-parser");
var path = require("path");
var app=express();
var fs=require('fs');
var PORT = process.env.PORT || 3001;
var array=[];
var json;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/",express.static('./sample'));

app.post('/saving',function(req, res)
{
res.setHeader('Content-Type', 'application/json');
// var d=JSON.stringify(req.body);
// res.send({firstName: req.body.firstName || null});
array.push(req.body);
res.send({array});
json=JSON.stringify(array);
console.log(json);
  data = JSON.parse(fs.readFileSync("add.json"));
console.log(data.length);
for(i=0; i<data.length; i++)
{
  if(data[i]!=null)
  {
    continue;
  }
  else {
    data.push(array);
  }
}
});

app.get('/get',function (req,res)
{
    res.send({array});
 var data=JSON.parse(json);
 console.log(data);
});


app.listen(PORT,function()
{
  console.log("server is listening to %s port",PORT);
})
