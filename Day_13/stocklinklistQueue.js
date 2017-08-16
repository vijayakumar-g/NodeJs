
/*creating a node for the linklist function*/
function Node(data1,data2,data3) {
  this.name = data1;
  this.symbol=data2
  this.data_time=data3;
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

    console.log(currentNode);

  while (currentNode.next)
    {

    currentNode = currentNode.next;

  }
      console.log(currentNode);
}

/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
linkedlist.prototype.add = function(value1,value2,value3)
{
  //console.log(value3);
  var node = new Node(value1,value2,value3);
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
function queue()
{
  this.rear =0;
  this.front=0;
}
function date_time(data)
{
  this.systime=data;
}

queue.prototype.enqueue=function(data)
{
  var node=new date_time(data);
  if(this.rear==null)
  {
    this.rear=node;
    this.front=this.rear;
  }
  else {
      this.rear.next=node;
      this.rear=node;
      }
 console.log("Transaction Time:"+this.rear.systime.systime);
}

var stock_symbols1=new stack();
var stock_symbols2=new stack();
var d=new Date();
var company1_transactions=new queue();
var company2_transactions=new queue();
var companys_transactions=new linkedlist();


var company1 =new company_list("Hindustan");
var company2 =new company_list("Bharat Petrol");

stock_symbols1.pushing("$");
var transactions =new date_time(d.toString());
company1_transactions.enqueue(transactions);
companys_transactions.add(company1,stock_symbols1,company1_transactions);
stock_symbols1.pushing("₹");
var transactions =new date_time(d.toString());
company1_transactions.enqueue(transactions);
companys_transactions.add(company1,stock_symbols1,company1_transactions);
stock_symbols1.pushing("€");
var transactions =new date_time(d.toString());
company1_transactions.enqueue(transactions);
companys_transactions.add(company1,stock_symbols1,company1_transactions);
stock_symbols1.display();


stock_symbols2.pushing("€");
var transactions =new date_time(d.toString());
company2_transactions.enqueue(transactions);
stock_symbols2.pushing("$");
companys_transactions.add(company2,stock_symbols2,company2_transactions);
var transactions =new date_time(d.toString());
company2_transactions.enqueue(transactions);
companys_transactions.add(company2,stock_symbols2,company2_transactions);
stock_symbols2.display();
 console.log("\n");
 stock_symbols1.popping(company1);
 stock_symbols1.popping(company1);
 console.log("\n");
 stock_symbols2.popping(company2);
 console.log("\n");

//companys_transactions.display();
