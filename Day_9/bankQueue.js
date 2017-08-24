var queue = new Array();
var rear = -1;
var front = -1;
var bankbalance = 0; //dynamic
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
    document.write("<br>queue is empty")
  }
  var value = queue[rear];
  queue[rear] = "empty";
  document.write("<br>" + value + ":leaving the queue<br>");
  rear = rear + 1;
}

function read() {

  var size = document.getElementById("n").value;
  bankbalance = prompt("Enter the Bank Balance @ initial", "");
  for (i = 1; i <= size; i++) {
    var id = prompt("enter the Transaction Id Person " + i + ":", "");
    var name = prompt("enter the name of Person " + i + ":", "");
    var amount = prompt("enter the amount of Person " + i + ":", "");
    enqueue(id, name, amount);
  }
  document.write("Persons In the Queue<br>");
  document.write(queue + "<br>");
  dequeue();
  document.write("Persons In the Queue<br>");
  document.write(queue);
  dequeue();
  document.write("Persons In the Queue<br>");
  document.write(queue);
  document.write("<br>BankBalance:" + bankbalance);
}