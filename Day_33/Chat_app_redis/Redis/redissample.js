var redis = require('redis');
var redisClient =redis.createClient({host:'localhost',port:6379});
redisClient.on('ready',function(err)
{
  if(err)console.log(err);
console.log("redis is ready");
})
// redisClient.set("company","Intellect",function(err,data)
// {
//   if(err)console.error(err);
//   console.log(data);
// })
// redisClient.get("company",function(err,data)
// {
//   if(err)console.error(err);
//   console.log(data);
// })
// var vj="Intellect"
// var key='frameworks'
// redisClient.hmset(key, 'javascript',vj,'css','Bootstrap','node','Express',function(err ,data)
// {
//   if(err)console.error(err);
//   console.log(data);
// });
// var array=[];
// redisClient.hgetall('frameworks',function(err,data)
// {
//   console.log(data.javascript);
// });
// redisClient.exists("vijay",function(err,reply) {
//  if(!err) {
//   if(reply === 1) {
//    console.log("Key exists");
//   } else {
//    console.log("Does't exists");
//   }
//  }
// });
redisClient.del("aniketh",function(err,data)
{
  console.log(data);
})
// redisClient.hmset("tools","webserver","expressjs","database","mongoDB","devops","jenkins",function(err,reply)
// {
//  console.log(err);
//  console.log(reply);
// });
//
// redisClient.hgetall("tools",function(err,reply) {
//  console.log(err);
//  console.log(reply);
// });
// redisClient.del('frameworks',function(err,reply)
// {
//   if(err)console.error(err);
//   if(reply==1)
//   {
//     console.log("DELETED");
//   }
//   else {
//     console.log("not exists");
//   }
// });
// redisClient.HMGET('frameworks', function (err, keys) {
//   if (err) return console.log(err);
//   array.push(keys);
//   console.log(keys);
// });

redisClient.quit();
