var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

//app.use("/", express.static('./chat_app'));

app.get('/',function(req,res)
{
  res.sendfile('index.html');

});
/*bradcast*/
// var clients=0;
// io.on('connection',function(socket)
// {
//   clients++;
//
// socket.emit("newClient",{description:clients+" Welcome!"});
// socket.broadcast.emit("newClient",{description:clients+" connected!"});
// socket.on('disconnect',function()
// {
//   clients--;
//   socket.broadcast.emit("broadcast",{description: clients+" connected!"});
// });
// });
var namespace=io.of('/vijay');
namespace.on('connection',function(socket)
{
  console.log("someone connected");
  namespace.emit('hi',"hi everyone");
});
http.listen(3003,function()
{
  console.log("server listening to port:3003");
});
