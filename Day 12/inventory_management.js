var name=process.argv[2];
var weight=+process.argv[3];
var price=+process.argv[4];

//importing the json module
var jsonfile = require('jsonfile')
//assigning a file to variable
var file = 'inventory_details.json'
//reading the json file for further proces
jsonfile.readFile(file, function(err, obj) {
  //this throws error
  if (err) throw err;
//inventoryManager(obj);
inventory_factory(name,weight,price,obj);
  })
function inventoryManager(obj)
{
  console.log("                      Inventory Details:\n");
  for (i = 0; i < obj.length; i++) {
    //displaying all the value in the json file
    console.log("Name      :" + obj[i].name);
    console.log("Weight    :" + obj[i].weight);
    console.log("Price(1kg):" + obj[i].price_per_kg);
    var price = obj[i].weight * obj[i].price_per_kg;
    console.log("-----------------");
    console.log("Total     :" + price);
    console.log("-----------------");
    console.log("\n");

}
}
function inventory_factory(name,weight,price,obj)
{
  obj.push[
    "name":name,
    "weight":weight,
    "price":price
  ]
}
