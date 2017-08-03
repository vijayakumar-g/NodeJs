var fs =require("fs");
var http=require("http");
var url=require("url");

http.createServer(function(req, res)
{
var path=url.parse(req.url).path;
console.log("Request for " + path+ " received.");

fs.readFile(path.substr(1),function(err,data)
{
  if(err)
  {
    console.log(err);
    res.writeHead(404,{"content-Type":'text/html'});
  }
  else
  {
    res.writeHead(200,{"content-Type":'text/html'});
      res.write(data.toString());
  }
  res.end();
});
}).listen(8081);
