var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/operations";

MongoClient.connect(url, function(err, data) {
  if (err) throw err;
  //
  // var obj = [{
  //     _id: 1,
  //     cust_id: "abc1",
  //     status: "A",
  //     amount: 50
  //   },{
  //     _id: 2,
  //     cust_id: "xyz1",
  //     status: "A",
  //     amount: 100
  //   }, {
  //     _id: 3,
  //     cust_id: "xyz1",
  //     status: "D",
  //     amount: 25
  //   }, {
  //     _id: 4,
  //     cust_id: "xyz1",
  //     status: "D",
  //     amount: 125
  //   }, {
  //     _id: 5,
  //     cust_id: "abc1",
  //     status: "A",
  //     amount: 25
  //   }
  // ];
  // data.collection("customers").insertMany(obj, function(err, objvalues) {
  //   if (err) throw err;
  // });
  data.collection("customers").aggregate([{
      $match: {
        status: "A"
      }
    },

    {
      $group: {
        _id: "$cust_id",
        total: {
          $sum: "$amount"
        }
      }
    }
  ]);
//   var query={cust_id:"2"};
//   data.collection("customers").deleteMany(query,function(err,data)
// {
// if(err)throw err;
// });
data.collection("customers").aggregate([
                     { $match: { status: "A" } },
                     { $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
                     { $sort: { total: -1 } }
                   ],function(err,data){
                     if(err)throw err;
                     console.log(data);
                   });
data.collection("customers").find({},{_id:true,cust_id:true,amount:true}).toArray(function(err,values)
{
  console.log(values);
})
  data.close();
});
