//Importing the modules
var http=require("http");

//creating the server
http.createServer(function(request,response)
{
//send the header with status and content type
response.writeHead(200,{'content-Type':'text/plain'});

//response message
response.end("Hello");

//writing the port where to execute
}).listen(8081);


