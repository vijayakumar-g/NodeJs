var queue = new Array();
var rear = -1;
var front = -1;
var bankbalance = 500000;//dynamic
/*enqueue is function in queue to add the element to the queue
and the element added should like a queue format so whenever
new element is inserted it should be wait in the queue
* here id is given for the user for depositing and withdrawing the amount*/
function enqueue(id, name, amount) {
  if (id == 1) {
    if (front == -1) {
      rear = rear + 1;
      front = front + 1;
      queue[front] = name;
      bankbalance = bankbalance + parseInt(amount);
    } else {
      front = front + 1;
      queue[front] = name;
      bankbalance = bankbalance + parseInt(amount);
    }

  }
  if (id == 2) {
    if (front == -1) {

      rear = rear + 1;
      front = front + 1;
      queue[front] == name;
      bankbalance = bankbalance - parseInt(amount);
    } else {
      front = front + 1;
      queue[front] = name;
      bankbalance = bankbalance - parseInt(amount);
    }
  }
}
/*dequeue function is used to remove the element the in the queue
the first person who enters the queue will leave first
is done in this dequeue*/
function dequeue() {
  if (rear == -1) {
    console.log("queue is empty")
  }
  var value = queue[rear];
  queue[rear] = "empty";
  console.log(value + ":leaving the queue");
  rear = rear + 1;
}
enqueue(1, "vijay", 5000);
enqueue(2, "bharathi", 5000);
enqueue(1, "aniketh", 5000);
console.log(queue);
dequeue();
enqueue(1, "deba", 5000);
console.log(queue);
dequeue();
console.log(queue);
console.log("BankBalance:" + bankbalance);
