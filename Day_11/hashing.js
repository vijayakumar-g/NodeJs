var fs = require("fs");
var ws = fs.createWriteStream("output.txt");
//array with key-pairs to store the elements in the respective index
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
/*adding the new element to list if list empty then create new else
traverse the list till the last and insert /add it*/
LinkedList.prototype.add = function(value) {
  var node = new Node(value);
  currentNode = this.head;
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
/*display the node elements in the list */
LinkedList.prototype.display = function() {
  currentNode = this.head;
  while (currentNode) {
    if (currentNode.value == null) break;
    else {
      var value = currentNode.value;
      console.log(currentNode.value);
      currentNode = currentNode.next;

    }
  }
  return value;
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
  console.log("\n")
}