var fs=require("fs");
var data='';
var zlib=require("zlib");

var rs=fs.createReadStream('input.txt');
var ws=fs.createWriteStream("output.txt");
rs.setEncoding('UTF8');
rs.on("data", function(c)
{
  data+=c;
  ws.write(data,'UTF8');
  ws.end();
  ws.on("error", function(err)
  {
    console.error(err);
  });
});
rs.on("end", function()
{
  console.log(data);
});
rs.on("error",function(err)
{
  console.error(err);
});
  console.log("program ends");
