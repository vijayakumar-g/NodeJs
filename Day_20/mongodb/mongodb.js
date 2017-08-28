var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/database";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;

      //creating the table;
/*  db.createCollection("Intellect",function(err,table)
//{
//  console.log("collection created");
});*/

      //inserting one value
/*var obj={name:"vijay",company:"Intellect"};
db.collection("Intellect").insertOne(obj,function(data,result)
{
  if(err)throw err;
  console.log(result);
// })*/

/*    //inserting many values
var obj=[
  {name:"bharathi", company:"Intellect"},
  {name:"aniketh", company:"Intellect"},
  {name:"akash", company:"Intellect"},
  {name:"deba", company:"Intellect"},
  {name:"vaishali", company:"Intellect"},
  {name:"pranati", company:"Intellect"},
  {name:"karan", company:"Intellect"},
  {name:"prateek", company:"Intellect"},
  {name:"dimitro", company:"Intellect"}
];
db.collection("Intellect").insertMany(obj,function(err,result)
{
  if(err)throw err;
// console.log(result);
});
*/
/*      //deleting a value
var del={name:"deba"};
db.collection("Intellect").deleteMany(del,function(err,d)
{
  if(err)throw err;
});*/

/*    //searching contact
var query={name:"bharathi"};
db.collection("Intellect").find(query,{_id:false,name:true,company:true}).toArray(function(err, result)  
{
  if(err)throw err;
  if(result)console.log(result);
});*/

/*    //sorting
var order={name:-1};
db.collection("Intellect").find().sort(order).toArray(function(err,sorted)
 {
   if(err)throw err;
   console.log(sorted);
})*/

// var query={company:"BridgeLabz"};
// var newquery={$set:{name:"vijay",company:"Intellect"}};
// db.collection("Intellect").updateMany(query,newquery,function(err,result)
// {
//   if(err)throw err;
//   //console.log(result.name+" "+result.company);
// });
// db.collection("Intellect").find({}, {_id:false, name:true,company:true}).toArray(function(err,f)
// {
//   if(err)throw err;
//   console.log(f);
// });
db.collection("Intellect").drop(function (err,result)
{
  if(err)
  console.log(err);;
  if(result)
  console.log("Deleted");
});
// db.collection("Intellect").find({}, {_id:false, name:true,}).toArray(function(err,f)
// {
//   if(err)throw err;
//   console.log(f);
// });

  db.close();
});
