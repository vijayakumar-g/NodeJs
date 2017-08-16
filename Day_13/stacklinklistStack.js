
/*creating a node for the linklist function*/
function Node(data1,data2) {
  this.name = data1;
  this.symbol=data2
  this.next = null;
}
function symbols(data)
{
  this.symbol=data;
}
/*objects for the orderted list */
function linkedlist() {
  this.head = null;
}

function company_list(data)
  {
    this.share_name=data;
  }

/*display the node elements in the ordered list */
linkedlist.prototype.display = function()
 {
  currentNode = this.head;
  while (currentNode.next)
    {
  console.log("Company Name: "+currentNode.name.share_name+" Stock Symbol: "+currentNode.symbol.top.symbol);
    currentNode = currentNode.next;
  }
  console.log("Company Name: "+currentNode.name.share_name+" Stock Symbol: "+currentNode.symbol.top.symbol);
  //console.log(currentNode);
}

/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
linkedlist.prototype.add = function(value1,value2)
{
  var node = new Node(value1,value2);
  currentNode = this.head;
  if (currentNode == null)
  {
    this.head = node;
    console.log(" Purchasing By:"+node.name.share_name);
    return node;
  }
  while (currentNode.next)
  {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
    console.log(" Purchasing By:"+node.name.share_name);
  return node;

}

function stack()
{
  this.top =0;
}
function symbols(data)
{
  this.symbol=data;
}
stack.prototype.display = function()
{
  currentNode = this.top;
  if (currentNode == null)
  {
    console.log("Node is Empty");
  }
  while (currentNode)
  {
    console.log(currentNode.symbol);

    currentNode = currentNode.next;

  }
  console.log("------------------------");
}

stack.prototype.pushing=function(data) //pushing of the character
{
  var node=new symbols(data);
  if (this.top== null)
    {
    this.top=node;
    }
    else
    {
      node.next=this.top;
      this.top=node;
    }
  }
stack.prototype.popping=function(company)
{
  //console.log(company);
currentNode=this.top;
if(this.top==null)
{
  console.log("Stack is empty");
}
else {
  console.log(currentNode.symbol+" symbol was solded recently by "+company.share_name);
  currentNode=this.top.next;
  delete(this.top);
  this.top=currentNode;
}
}
var stock_symbols1=new stack();
var stock_symbols2=new stack();

var companys_transactions=new linkedlist();

var company1 =new company_list("Hindustan");
var company2 =new company_list("Bharat Petrol");

stock_symbols1.pushing("$");
stock_symbols1.pushing("₹");
stock_symbols1.pushing("€");

companys_transactions.add(company1,stock_symbols1);
stock_symbols1.display();

stock_symbols2.pushing("€");
stock_symbols2.pushing("$");

companys_transactions.add(company2,stock_symbols2);
stock_symbols2.display();

companys_transactions.display();

console.log("\n");
stock_symbols1.popping(company1);
stock_symbols1.popping(company1);
console.log("\n");
companys_transactions.display();
console.log("\n");

stock_symbols2.popping(company2);
console.log("\n");
companys_transactions.display();
