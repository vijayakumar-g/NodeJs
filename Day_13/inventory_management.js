//importing the fs module.
/****
 * @author
 * @purpose
 * @
 * @date
 *@file
 *****/
var fs = require('fs')
//assigning a file to variable
var file = 'inventory_details.json'
//reading the json file for further proces
var data = "";
var name = process.argv[2];
var weight = +process.argv[3];
var price_per_kg = +process.argv[4];
inventoryManager();


/* InventoryManager will call each Inventory Object in its list
to calculate the Inventory Price and then call the inventory Object to return the
JSON String.*/
function inventoryManager() {
  data = JSON.parse(fs.readFileSync(file));
  console.log(data);
  console.log("                      Inventory Details:\n");
  inventory_factory(name, weight, price_per_kg);
}

/*InventoryFactory to create Inventory
Object from  JSON.*/
function inventory_factory(name, weight, price) {
  data.Inventory_DB.push({
    "name": name,
    "weight": weight,
    "price_per_kg": price
  });
  for (i = 0; i < data.Inventory_DB.length; i++) {
    //displaying all the value in the json file
    console.log("Name      :" + data.Inventory_DB[i].name);
    console.log("Weight    :" + data.Inventory_DB[i].weight);
    console.log("Price(1kg):" + data.Inventory_DB[i].price_per_kg);
    var total_price = data.Inventory_DB[i].weight * data.Inventory_DB[i].price_per_kg;
    //data.Inventory_DB.push({"total_price":total_price});
    console.log("-----------------");
    console.log("Total     :" + total_price);
    console.log("-----------------");
    console.log("\n");
  }
}