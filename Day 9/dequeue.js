function Node(data) {
  this.value = data;
  this.next = null;
}

function dequeue() {
  this.rear = 0;
  this.front = 0;
}
dequeue.enqueueAtFront = function(value) //addin the element to the node at front
{
  var node = new Node(value);
  if (dequeue.rear == null) // checking whether the node add to be the first node of the element
  {
    dequeue.rear = node;
    dequeue.front = node;
  } else {
    dequeue.front.next = node;
    dequeue.front = node;
  }
  return node.value;
}
dequeue.enqueueAtRear = function(value) //addin the element to the node at rear
{
  var node = new Node(value);
  if (dequeue.rear == null) // checking whether the node add to be the first node of the element
  {
    dequeue.rear = node;
    dequeue.front = node;
  } else {
    node.next = dequeue.rear;
    dequeue.rear = node;
    //console.log(dequeue.rear.value);
  }
  return node.value;
}
var value = "appa";
var size = value.length;
var flag = 0;
for (i = 0, j = size - 1; i <= size, j >= 0; i++, j--) {
  if (dequeue.enqueueAtRear(value[i]) == dequeue.enqueueAtFront(value[j])) {
    continue;
    flag == 0;
  } else {
    console.log(value + " is not a palindrome");
    break;
  }
}
if (flag == 0) {
  console.log(value + " is a palindrome ");
}