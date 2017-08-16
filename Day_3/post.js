var express=require("express");
var app=express();
var bodyparser=require('body-parser');

var url=bodyparser.urlencoded({extended:false});

app.use(express.static("public"));
app.get("/index.html", function(req,res)
{
res.sendFile(__dirname+"/"+"index.html");
})

app.post("/process_post",function(req,res)
{
  response={
    f_name:req.query.f_name,
    l_name:req.query.l_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server=app.listen(8082,function()
{
  var host=server.address().address;
  var port=server.address().port;
  console.log(port);
});
