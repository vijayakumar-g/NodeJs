var express =require("express");
var app=express();

app.use(express.static("public"));
app.get("/index.html", function(req,res)
{
//res.sendFile(__dirname+"/"+"index.html");
})

app.get("/process_get",function(req,res)
{
  response={
    f_name:req.query.f_name,
    l_name:req.query.l_name
  };
  console.log(response);
  res.end(JSON.stringify(response));
})

var server=app.listen(8083,function()
{
  var host=server.address().address;
  var port=server.address().port;
  console.log(port);
});
