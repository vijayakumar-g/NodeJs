var fs = require("fs");
var text = fs.readFileSync("input.txt").toString("UTF8");
var comma_sep = text.split(",");
var size = comma_sep.length;

/*creating a node for the linklist function*/
function Node(data) {
  this.value = data;
  this.next = null;
}
/*objects for the unorderedList */
function unorderedList() {
  this.len = 0;
  this.head = null;
}
/*function used to traverse all the nodes in the ordered list
and print them in output txt file*/
unorderedList.output = function() {
  var ws = fs.createWriteStream("output.txt");
  currentNode = this.head;
  while (currentNode)
  {
    var data = currentNode.value;
    var space = " ";
    ws.write(data, 'UTF8');
    ws.write(space, 'UTF8');
    currentNode = currentNode.next;
  }
  ws.end();
}
/*display the node elements in the unordered list */
unorderedList.display = function()
{
  currentNode = this.head;
  //checking for empty node
  if (currentNode == null)
  {
    console.log("Node is Empty");
  }
  //checking for node to be not null
  while (currentNode)
  {
    console.log(currentNode.value);

    currentNode = currentNode.next;
  }
}

/*check for the first element of the node to be deleted else
traversing till the value to be found and then deleting it*/
unorderedList.popAtPos = function(pos) {
  currentNode = this.head;
  var beforeNode = null;
  var afterNode = null;
  var count = 1;
  //checking for the position where the element to be pop
  while (count != pos)
  {
    beforeNode = currentNode;
    currentNode = currentNode.next;
    count++;
  }
  beforeNode.next = currentNode.next;
  currentNode = null;
}
/* to find the size of the lisat traversing till the list
and counting when traverse through each node*/

unorderedList.size = function() {
  currentNode = this.head;
  var count = 0;
  while (currentNode.next)
  {
    count++;
    currentNode = currentNode.next;
  }
  count++;
  console.log("No of Items in the List:" + count);
}
/*checking whether the value is matched with the current node index
to find the index of that value*/
unorderedList.indexof = function(value) {
  currentNode = this.head;
  var count = 0;
  while (currentNode != null)
  {
    count++;
    if (currentNode.value == value)
    {
      console.log("Index of Element: " + value + " is in the List is :" + count);
      break;
    }
    currentNode = currentNode.next;
  }
  return count;
}
/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
unorderedList.add = function(value)
{
  var node = new Node(value);
  currentNode = this.head;
  if (currentNode == null)
  {
    this.head = node;
    this.len++;
    return node;
  }
  while (currentNode.next)
  {
    currentNode = currentNode.next;
  }
  currentNode.next = node;

  this.len++;
  return node;
}
/*one using to insert the element
at specific position to maintain the as per the user */
unorderedList.insertAtPos = function(value, pos) {
  var newnode = new Node(value);
  currentNode = this.head;
  var beforeNode = null;
  var afterNode = null;
  var count = 1;

  while (count != pos) {
    beforeNode = currentNode;

    currentNode = currentNode.next;

    count++;
  }
  beforeNode.next = newnode;
  newnode.next = currentNode;
  this.len++;
}
/*check for the first element of the node to be deleted else
traversing till the value to be found and then deleting it*/
unorderedList.remove = function(value) {
  var removeNode = null;
  var beforeNodeDelete = null;
  currentNode = this.head;
  if (currentNode.value == value)
  {
    this.head = currentNode.next;
    removeNode = currentNode;

    currentnode = null;
    this.len--;
    console.log("removed node:" + removeNode.value);
  } else {
    //traversing till the value to be found
    while (currentNode.value != value)
    {
      beforeNodeDelete = currentNode;
      currentNode = currentNode.next;
    }
    beforeNodeDelete.next = currentNode.next;
    removeNode = currentNode;
    currentNode = null;
    this.len--;
    console.log("removed node:" + removeNode.value);
  }
}
/*check for the element that is being search
and find the element if it is found then delete the element
else add the element to the list*/
unorderedList.search = function(value) {
  var flag = 0;
  currentNode = this.head;
  while (currentNode != null)
  {
    if (currentNode.value == value)
    {
      flag = 1;
      console.log("Element:" + value + " found");
      console.log("Removing:")
      unorderedList.remove(value);
      break;
    }
    currentNode = currentNode.next;
  }
  if (flag == 0) {
    console.log("Element:" + value + " not found");
    console.log("Adding:" + value);
    unorderedList.add(value);
  }
}

for (i = 0; i < size; i++) {
  unorderedList.add(comma_sep[i]);
}
unorderedList.search("bharathi");
unorderedList.search("krish");
unorderedList.display(Node);
unorderedList.output();
