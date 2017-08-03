var fs=require("fs");
var data='';

var rs=fs.createReadStream('input.txt');

var ws=fs.createWriteStream('pipe.txt');

rs.pipe(ws);

var ns=fs.createReadStream('input.txt');
ns.setEncoding("UTF8");
ns.on("data", function(chunk)
{
  data+=chunk;
});
ns.on("end",function()
{
  console.log(data);
});
