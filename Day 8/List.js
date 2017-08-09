function Node(data) {
  this.value = data;
  this.next = null;
}

function orderedList() {
  this.len = 0;
  this.head = null;
}

orderedList.output = function() {
  var ws = fs.createWriteStream("ooutput.txt");
  currentNode = this.head;
  while (currentNode) //checking for node to be not null
  {
    var data = currentNode.value;
    var space = ",";
    console.log(data);
    ws.write(data, 'UTF8');
    ws.write(space, 'UTF8');
    currentNode = currentNode.next;
  }
  ws.end();
}

orderedList.display = function() {
  currentNode = this.head;
  while (currentNode.next) {
    console.log(currentNode.value);
    //  console.log(currentNode);
    currentNode = currentNode.next;
  }
  console.log(currentNode.value);
  //console.log(currentNode);
}



orderedList.add = function(value) //addin the element to the node
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




orderedList.remove = function(value) {
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




orderedList.search = function(value) {
  var flag = 0;
  currentNode = this.head;
  while (currentNode != null) //traverse till the last untill it becomes null
  {
    if (currentNode.value == value) //checking for the element that is being search
    {
      flag = 1; //if found make flag=1
      console.log("Element:" + value + " found");
      console.log("Removing:")
      orderedList.remove(value);
      break; //exit from the loop
    }
    currentNode = currentNode.next;
  }
  if (flag == 0) {
    console.log("Element:" + value + " not found");
    console.log("Adding:")
    orderedList.insertAtPos(value, value);
  }
}


orderedList.insertAtPos = function(pos, value) {
  var newnode = new Node(value);
  currentNode = this.head;
  var beforeNode = null;
  var afterNode = null;
  var c = 1;

  while (c != pos) {
    beforeNode = currentNode;
    currentNode = currentNode.next;
    c++;
  }
  beforeNode.next = newnode; // assigning the before node next to new node
  newnode.next = currentNode; // new node next to current node
  this.len++;
}


function bubblesort(arr, n) {
  var i, j;
  for (var i = 0; i < n - 1; i++)
    for (j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1])
        swap(arr, j, j + 1);
}

function swap(arr, i, j) {
  var temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


var fs = require("fs");
var text = fs.readFileSync("number.txt").toString("UTF8");
var comma_sep = text.split(",");
var size = comma_sep.length;
var arr = [];
for (i = 0; i < size; i++) {
  arr[i] = parseInt(comma_sep[i]);
}
bubblesort(arr, size);
for (i = 0; i < size; i++) {
  orderedList.add(arr[i]);
}
orderedList.search(4);
orderedList.search(4);
orderedList.display();
//orderedList.output();
