//importing the json module
var jsonfile = require('jsonfile')
//assigning a file to variable
var file = 'inventory_details.json'
//reading the json file for further proces
jsonfile.readFile(file, function(err, obj) {
  //this throws error
  if (err) throw err;
  console.log("Inventory Details:");
  for (i = 0; i < obj.length; i++) {
    //displaying all the value in the json file
    console.log("Name:" + obj[i].name);
    console.log("Weight:" + obj[i].weight);
    console.log("Price_Per_kg:" + obj[i].price_per_kg);
    console.log("\n");
  }
})