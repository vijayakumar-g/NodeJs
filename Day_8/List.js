var fs = require("fs");
var text = fs.readFileSync("number.txt").toString("UTF8");
var comma_sep = text.split(",");
var size = comma_sep.length;
var arr = [];
for (i = 0; i < size; i++) {
  arr[i] = parseInt(comma_sep[i]);
}
bubblesort(arr, size);

/*creating a node for the linklist function*/
function Node(data) {
  this.value = data;
  this.next = null;
}
/*objects for the orderted list */
function orderedList() {
  this.len = 0;
  this.head = null;
}
/*function used to traverse all the nodes in the ordered list
and print them in output txt file*/
orderedList.output = function() {
  var ws = fs.createWriteStream("ooutput.txt");
  currentNode = this.head;
  while (currentNode)
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
/*display the node elements in the ordered list */
orderedList.display = function() {
  currentNode = this.head;
  while (currentNode.next) {
    console.log(currentNode.value);
      currentNode = currentNode.next;
  }
  console.log(currentNode.value);

}


/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
orderedList.add = function(value)
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



/*check for the first element of the node to be deleted else
traversing till the value to be found and then deleting it*/
orderedList.remove = function(value) {
  var removeNode = null;
  var beforeNodeDelete = null;
  currentNode = this.head;
  if (currentNode.value == value) //
  {
    this.head = currentNode.next; //changing the head to the next
    removeNode = currentNode; //removing the current node
    currentnode = null; // current node is assigned to be null
    this.len--;
    console.log("removed node:" + removeNode.value);
  } else {
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
orderedList.search = function(value) {
  var flag = 0;
  currentNode = this.head;
  while (currentNode != null)
  {
    if (currentNode.value == value)
    {
      flag = 1;
      console.log("Element:" + value + " found");
      console.log("Removing:")
      orderedList.remove(value);
      break;
    }
    currentNode = currentNode.next;
  }
  if (flag == 0) {
    console.log("Element:" + value + " not found");
    console.log("Adding:")
    orderedList.insertAtPos(value, value);
  }
}

/*since the ordered list is sorted one using to insert the element
at sp[ecific position to maintain the sort*/
orderedList.insertAtPos = function(pos, value) {
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


for (i = 0; i < size; i++) {
  orderedList.add(arr[i]);
}
orderedList.search(4);
orderedList.search(4);
orderedList.display();
