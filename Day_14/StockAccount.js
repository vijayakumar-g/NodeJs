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
    document.write("Buying the Share symbol: " + symbol + " for " + amount+"<br>");
    buy.push(symbol + " time:" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ",Date: " + d.getDate());
    this.value = this.value - amount;
  }
  /*the stock value sold by the user*/
  sell(amount, symbol) {
    document.write("Selling the Share symbol: " + symbol + " for " + amount+"<br>");
    sell.push(symbol + " time:" + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + ",Date: " + d.getDate() + " ");
    for (var i = 0; i < buy.length; i++)
    {
      if (buy[i] == symbol)
      {
        delete buy[i];
        break;
      }
    }
    this.value += parseInt(amount);
  }
  /*printing the entire report */
  printReport() {
    document.write("\tStock Account Inventory<br>");
    document.write("Account Name     : " + this.name);
    document.write("Account Balance  : " + this.value+"<br>");
    document.write("------------------------------<br>");
    var buysize=prompt("How many shares you want to Buy","");

    for(var i=1; i<=buysize; i++)
    {
    var amount=prompt("enter the amount of share "+i+":","");
    var name=prompt("enter the name of share "+i+":","");
    this.buy(amount,name);
    }

    // this.buy(300000, "₹-Infosys");
    // this.buy(400000, "€-Intellect");
    document.write("------------------------------<br>");
    document.write("Shares in Account: " + buy+"<br>");
    document.write("------------------------------<br>");
    var sellsize=prompt("How many shares you want to Sell","");
    for(var i=1; i<=sellsize; i++)
    {
    var amount=prompt("enter the amount of share "+i+":","");
    var name=prompt("enter the name of share "+i+":","");
    this.sell(amount,name);
    }
    document.write("------------------------------<br>");
    document.write("Shares Sold      : " + sell+"<br>");
    document.write("------------------------------<br>");
    document.write("Account Balance  : " + this.value+"<br>");
  }

}
function read()
{
  var name=document.getElementById('name').value;
  var balance=document.getElementById('bal').value;
  var object = new StockAccount(name);
  object.valueOf(balance);
  object.printReport();
}
