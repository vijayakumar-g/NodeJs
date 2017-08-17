var fs = require("fs");
var ws = fs.createWriteStream("output.txt");
var hmap = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0
}

function Node(data) {
  this.value = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
}

LinkedList.prototype.add = function(value) //addin the element to the node
{
  var node = new Node(value);
  currentNode = this.head;
  if (currentNode == null) // checking whether the node add to be the first node of the element
  {
    this.head = node;
    return node;
  }
  while (currentNode.next) //if not first element then traverse till the last insert at that position
  {
    currentNode = currentNode.next;
  }
  currentNode.next = node;
  //  console.log(node.value);
  return node;
}
LinkedList.prototype.display = function() {
  currentNode = this.head;
  while (currentNode) {
    if (currentNode.value == null) break;
    else {
      var v = currentNode.value;
      console.log(currentNode.value);
      currentNode = currentNode.next;

    }
  }
  return v;
}
for (i = 0; i < 11; i++) {
  hmap[i] = new LinkedList();
}
var arr = [77, 44, 55, 26, 93, 17, 31, 20, 54];
var size = arr.length;

for (i = 0; i < size; i++) {
  var a = arr[i] % 11;
  hmap[a].add(arr[i]);
}
for (i = 0; i < 11; i++) {
  console.log("map[" + i + "]")
  hmap[i].display();
  //ws.write(toString(h),'UTF8');	
  console.log("\n")
}