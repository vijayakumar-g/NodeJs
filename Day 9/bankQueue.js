var queue = new Array();
var rear = -1;
var front = -1;
var bankbalance = 500000;

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
      bankbalance = bankbalance + parseInt(amount);
    } else {
      front = front + 1;
      queue[front] = name;
      bankbalance = bankbalance + parseInt(amount);
    }
  }
}

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