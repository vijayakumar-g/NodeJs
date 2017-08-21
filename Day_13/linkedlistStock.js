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

  /*the stoick buy by the user*/
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
var object = new StockAccount("Polaris");
object.printReport();

/*creating a node for the linklist function*/
function Node(data) {
  this.value = data;
  this.next = null;
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
  console.log("\n\t List of Company Shares ");
  var currentNode = this.head;
  while (currentNode.next) {
    console.log(currentNode.value.share_name);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value.share_name);
}

/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
linkedlist.prototype.add = function(value) {
  var node = new Node(value);
  var currentNode = this.head;
  if (currentNode == null) {
    this.head = node;
    return node;
  }
  while (currentNode.next) {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  return node;
}

/*check for the element that is being search
and find the element if it is found then delete the element
else add the element to the list*/
linkedlist.prototype.search = function(value) {

  var currentNode = this.head;
  while (currentNode != null) {
    if (currentNode.value == value) {
      console.log("Element:" + value + " found");
      break;
    }
    currentNode = currentNode.next;
  }
}
/*adding the company list to the linked list*/
var list_of_company_shares = new linkedlist();
var share1 = new company_list(object.name);
list_of_company_shares.add(share1);
list_of_company_shares.display();