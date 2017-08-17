'use strict'
var buy = [];
var sell = [];
var d = new Date();
class StockAccount {
  constructor(name) {
    this.name = name;
  }

  valueOf(value) {
    this.value = value;
  }

  buy(amount, symbol) {
    console.log("Buying the Share symbol: " + symbol + " for " + amount);
    buy.push(symbol);
    this.value = this.value - amount;
  }

  sell(amount, symbol) {
    console.log("Selling the Share symbol: " + symbol + " for " + amount);
    sell.push(symbol);
    for (var i = 0; i < buy.length; i++) {
      if (buy[i] == symbol) {
        delete buy[i];
        break;
      }
    }
    this.value = this.value + amount;
  }

  printReport() {
    console.log("\tStock Account Inventory");
    console.log("Account Name     : " + this.name);
    this.valueOf(10000000);
    console.log("Account Balance  : " + this.value);
    console.log("------------------------------");
    }

}
var object = new StockAccount("Microsoft");
object.printReport();

/*creating a node for the linklist function*/
function Node(data1, data2) {
  this.name = data1;
  this.symbol = data2
  this.next = null;
}

function symbols(data) {
  this.symbol = data;
}
/*objects for the orderted list */
function linkedlist() {
  this.head = null;
}

function company_list(data) {
  this.share_name = data;
}

/*display the node elements in the ordered list */
linkedlist.prototype.display = function() {
  var currentNode = this.head;
  while (currentNode.next) {
    console.log("Company Name: " + currentNode.name.share_name + ", Stock Symbol: " + currentNode.symbol.top.symbol);
    currentNode = currentNode.next;
  }
  console.log("Company Name: " + currentNode.name.share_name + " Stock Symbol: " + currentNode.symbol.top.symbol);
}

/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
linkedlist.prototype.add = function(value1, value2) {
  var node = new Node(value1, value2);
  var currentNode = this.head;
  if (currentNode == null) {
    this.head = node;
    console.log("\nPurchased By:" + node.name.share_name);
    return node;
  }
  while (currentNode.next) {
    var currentNode = currentNode.next;
  }
  currentNode.next = node;
  console.log(" Purchased By:" + node.name.share_name);
  return node;

}

function stack() {
  this.top = 0;
}

function symbols(data) {
  this.symbol = data;
}
stack.prototype.display = function() {
    var currentNode = this.top;
  if (currentNode == null) {
    console.log("Node is Empty");
  }
  while (currentNode) {
    console.log(currentNode.symbol);

    currentNode = currentNode.next;

  }
  console.log("------------------------");
}

stack.prototype.pushing = function(data) //pushing of the character
{
  var node = new symbols(data);
  if (this.top == null) {
    this.top = node;
  } else {
    node.next = this.top;
    this.top = node;
  }
}
stack.prototype.popping = function(company) {
  //console.log(company);
  var currentNode = this.top;
  if (this.top == null) {
    console.log("Stack is empty");
  } else {
    console.log(currentNode.symbol + " symbol was solded recently by " + company.share_name);
    currentNode = this.top.next;
    delete(this.top);
    this.top = currentNode;
  }
}



var stock_symbols = new stack();
var companys_transactions = new linkedlist();
var company1 = new company_list(object.name);
object.buy(200000, "$-TCS");
object.buy(300000, "₹-Infosys");
object.buy(400000, "€-Intellect");
stock_symbols.pushing(buy);
companys_transactions.add(company1, stock_symbols);
companys_transactions.display();
console.log("------------------------------");
object.sell(300000, "$-TCS");
companys_transactions.display();
console.log("Account Balance  : " + object.value);
