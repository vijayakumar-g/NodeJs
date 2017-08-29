var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res)
{
  res.sendfile("index.html");
})
var users=[];
io.on('connection',function(socket)
{
  socket.on('adduser',function(data)
{
  //console.log(users.indexOf(data));
  if(users.indexOf(data)>-1)
  {
      socket.emit("userexists","user already exists try new username")
  }
  else
  {
      users.push(data);
      console.log("user added");
      socket.emit('useradded',{username:data});
  }
});
socket.on('newmsg',function(data)
{
  console.log("message is coming");
  io.sockets.emit('everyone',data);
});
});

http.listen(3005,function()
{
  console.log("server is listening to port: 3005");
});
