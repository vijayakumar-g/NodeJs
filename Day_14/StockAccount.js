'use strict'
var buy = [];
var sell = [];
var d = new Date();
/*class is creating the stock Account of each user
and its constructor class to name the stock account user
and defined with some methods*/
class StockAccount {
  constructor(name) {
    this.name = name;
  }
  /*value of each user is initialized*/
  valueOf(value) {
    this.value = value;
  }
  /*the stock buy by the user*/
  buy(amount, symbol) {
    console.log("Buying the Share symbol: " + symbol + " for " + amount);
    buy.push(symbol + " time:" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ",Date: " + d.getDate());
    this.value = this.value - amount;
  }
  /*the stock value sold by the user*/
  sell(amount, symbol) {
    console.log("Selling the Share symbol: " + symbol + " for " + amount);
    sell.push(symbol + " time:" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ",Date: " + d.getDate() + " ");
    for (var i = 0; i < buy.length; i++) {
      if (buy[i] == symbol) {
        delete buy[i];
        break;
      }
    }
    this.value = this.value + amount;
  }
  /*printing the entire report */
  printReport() {
    console.log("\tStock Account Inventory");
    console.log("Account Name     : " + this.name);
    this.valueOf(10000000);
    console.log("Account Balance  : " + this.value);
    console.log("------------------------------");
    this.buy(200000, "$-TCS");
    this.buy(300000, "₹-Infosys");
    this.buy(400000, "€-Intellect");
    console.log("------------------------------");
    console.log("Shares in Account: " + buy);
    console.log("------------------------------");
    this.sell(300000, "$-TCS");
    console.log("------------------------------");
    console.log("Shares Sold      : " + sell);
    console.log("------------------------------");
    console.log("Account Balance  : " + this.value);
  }

}
var object = new StockAccount("vijay");
object.printReport();