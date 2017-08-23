var value =process.argv.splice(2);
var size = value.length;
var flag = 0;

/*node is created for the dequeue operation */
function Node(data) {
  this.value = data;
  this.next = null;
}
/*double ended queue with their respective objects means we can insert at both ends*/
function dequeue() {
  this.rear = 0;
  this.front = 0;
}
/*adding the element to the node at front at first
 checking whether the node add to be the first node of the element else
 traverse the nodes and insert it*/
dequeue.enqueueAtFront = function(value) {
  var node = new Node(value);
  if (dequeue.rear == null) {
    dequeue.rear = node;
    dequeue.front = node;
  } else {
    dequeue.front.next = node;
    dequeue.front = node;
  }
  return node.value;
}
/*adding the element to the node at rear
checking whether the node add to be the first node of the element
else traverse adnd insert it */
dequeue.enqueueAtRear = function(value) {
  var node = new Node(value);
  if (dequeue.rear == null) {
    dequeue.rear = node;
    dequeue.front = node;
  } else {
    node.next = dequeue.rear;
    dequeue.rear = node;

  }
  return node.value;
}
/*checking for the palindrome by enqueing at both ends and
comparing the elements whether it is a p[alindrome or not*/
for (i = 0, j = size - 1; i <= size, j >= 0; i++, j--) {
  if (dequeue.enqueueAtRear(value[i]) == dequeue.enqueueAtFront(value[j])) {
    continue;
    flag == 0;
  } else {
    flag=1;
    break;
  }
}
if (flag == 0) {
  console.log(value + " is a palindrome ");
}
else {
  console.log(value + " is not a palindrome");
}
