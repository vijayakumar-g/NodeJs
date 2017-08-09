function Node(data) {
  this.value = data;
  this.next = null;
}

function unorderedList() {
  this.len = 0;
  this.head = null;
}
unorderedList.output = function() {
  var ws = fs.createWriteStream("output.txt");
  currentNode = this.head;
  while (currentNode) //checking for node to be not null
  {
    var data = currentNode.value;
    var space = " ";
    ws.write(data, 'UTF8');
    ws.write(space, 'UTF8');
    currentNode = currentNode.next;
  }
  ws.end();
}
unorderedList.display = function() //display the elements in the node
{
  currentNode = this.head;
  if (currentNode == null) //checking for empty node
  {
    console.log("Node is Empty");
  }
  while (currentNode) //checking for node to be not null
  {
    console.log(currentNode.value); //traversing till the last

    currentNode = currentNode.next;
  }
  //  console.log(currentNode.value); // displaying the values

}


unorderedList.popAtPos = function(pos) {
  currentNode = this.head;
  var beforeNode = null;
  var afterNode = null;
  var c = 1;
  while (c != pos) //checking for the position where the element to be pop
  {
    beforeNode = currentNode;
    currentNode = currentNode.next;
    c++;
  }
  beforeNode.next = currentNode.next; //making the node before points to the next node
  currentNode = null; //making that current node position as null
}

unorderedList.size = function() {
  currentNode = this.head;
  var c = 0;
  while (currentNode.next) //traversing till the last element of the node untill becomes null
  {
    c++; //counting the elements in the list
    currentNode = currentNode.next;
  }
  c++;
  console.log("No of Items in the List:" + c);
}
unorderedList.indexof = function(value) {
  currentNode = this.head;
  var c = 0;
  while (currentNode != null) //traversing till the last element of the node untill becomes null
  {
    c++;
    if (currentNode.value == value) //checking whether the value is matched with the current node
    {
      console.log("Index of Element: " + value + " is in the List is :" + c); //if match print the index of that node
      break;
    }
    currentNode = currentNode.next;
  }
  return c;
}

unorderedList.add = function(value) //addin the element to the node
{
  var node = new Node(value);
  currentNode = this.head;
  if (currentNode == null) // checking whether the node add to be the first node of the element
  {
    this.head = node;
    this.len++;
    return node;
  }
  while (currentNode.next) //if not first element then traverse till the last insert at that position
  {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  //  console.log(node.value);
  this.len++;
  return node;
}
unorderedList.insertAtPos = function(value, pos) {
  var newnode = new Node(value);
  currentNode = this.head;
  var beforeNode = null;
  var afterNode = null;
  var c = 1;

  while (c != pos) {
    beforeNode = currentNode;
    //console.log("BeforeNode:"+beforeNode.value);
    currentNode = currentNode.next;
    //console.log("currentNode:"+currentNode.value);
    c++;
  }
  beforeNode.next = newnode; // assigning the before node next to new node
  newnode.next = currentNode; // new node next to current node
  this.len++;
}
unorderedList.remove = function(value) {
  var removeNode = null;
  var beforeNodeDelete = null;
  currentNode = this.head;
  if (currentNode.value == value) //checking for the first element of the node to be deleted then
  {
    this.head = currentNode.next; //changing the head to the next
    removeNode = currentNode; //removing the current node
    currentnode = null; // current node is assigned to be null
    this.len--;
    console.log("removed node:" + removeNode.value);
  } else {
    while (currentNode.value != value) //traversing till the value to be found
    {
      beforeNodeDelete = currentNode; //assigning current before element
      currentNode = currentNode.next; //current next to done
    }
    beforeNodeDelete.next = currentNode.next;
    removeNode = currentNode; //removing the current nbode
    currentNode = null;
    this.len--;
    console.log("removed node:" + removeNode.value);
  }
}
unorderedList.search = function(value) {
  var flag = 0;
  currentNode = this.head;
  while (currentNode != null) //traverse till the last untill it becomes null
  {
    if (currentNode.value == value) //checking for the element that is being search
    {
      flag = 1; //if found make flag=1
      console.log("Element:" + value + " found");
      console.log("Removing:")
      unorderedList.remove(value);
      break; //exit from the loop
    }
    currentNode = currentNode.next;
  }
  if (flag == 0) {
    console.log("Element:" + value + " not found");
    console.log("Adding:" + value);
    unorderedList.add(value);
  }
}
var fs = require("fs");
var text = fs.readFileSync("input.txt").toString("UTF8");
var comma_sep = text.split(",");
var size = comma_sep.length;
for (i = 0; i < size; i++) {
  unorderedList.add(comma_sep[i]);
}
unorderedList.search("bharathi");
unorderedList.search("krish");
unorderedList.display(Node);
unorderedList.output();
