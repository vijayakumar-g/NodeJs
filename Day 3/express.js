var express =require('express');
var app=express();

app.get('/',function(req, res)
{
  res.send("Hi welcome to learn Express");
});
app.post('/',function(req,res)
{
  res.send("closing the session")
});
app.get('/list_user',function(req,res)
{
  res.send("List the User")
});
app.post('/del_user',function(req,res)
{
  res.send("Del the user")
});
app.get('/ab*cd',function(req,res)
{
  res.send("pattern match")
});
var server=app.listen(8081,function()
{
  var host=server.address().address;
  var port=server.address().port;
  console.log("Host: "+host+" Port: "+port);
});
