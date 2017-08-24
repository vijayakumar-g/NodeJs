function calendar() {
  //week array has the day with the corresponding index value
  var week = {
    0: "sun",
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat"
  }
  // month array has the no of days for each month that has
  var month = {
    1: 31,
    2: 28,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31
  }
  //month array with respective month details
  var monthExp = {
    1: "jan",
    2: "feb",
    3: "mar",
    4: "apr",
    5: "may",
    6: "jun",
    7: "jul",
    8: "aug",
    9: "sept",
    10: "oct",
    11: "nov",
    12: "dec"
  }

  function Node(d) {
    this.obj = d;
    this.next = null;
  }

  function queue() {
    this.rear = 0;
    this.front = 0;
  }

  /*enqueue is function in queue to add the element to the queue
  and the element added should like a queue format so whenever
  new element is inserted it should be wait in the queue*/
  queue.prototype.enqueue = function(d) {
    var node = new Node(d);
    if (this.rear == null) {
      this.rear = node;
      this.front = this.rear;
    } else {
      this.rear.next = node;
      node.obj = d;
      this.rear = node;
    }
    document.write(this.rear.obj.top.obj.date + "&emsp;&emsp;");
  }

  /*dequeue function is used to remove the element the in the queue
  the first person who enters the queue will leave first
  is done in this dequeue*/
  queue.prototype.dequeue = function() {
    if (stack1 == null) {
      console.log("queue is empty");
    } else {
      while (stack1 != null) {
        x = stack1.popping();
        stack2.pushing(x);
      }
    }
    x = stack2.popping();
    return x;
  }

  function stack() {
    this.top = 0;
  }

  function week_withdays(d, da) {
    this.day = d;
    this.date = da;
  }
  //pushing of the element into stack array
  stack.prototype.pushing = function(data) //pushing of the character
  {
    var node = new Node(data);
    if (this.top == null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  //making the last inserted element to be deleting it from the array
  stack.prototype.popping = function() {
    currentNode = this.top;
    if (this.top == null) {
      console.log("Stack is empty");
    } else {
      console.log(currentNode.value);
      currentNode = this.top.next;
      delete(this.top);
      this.top = currentNode;
    }
  }

  var m = document.getElementById("month").value; //reading the month from the user
  var y = document.getElementById("year").value; //reading the year from the user
  document.write("javascript calender:" + m + " " + y);
  document.write("<br>" + monthExp[m] + " " + y);
  document.write("<br>sun&emsp;&ensp;mon&emsp;&ensp;tue&emsp;&ensp;wed&emsp;&ensp;thur&emsp;&ensp;fri&emsp;&ensp;sat <br>");
  var cc = Math.floor(y / 100);
  // console.log("cc:"+cc);
  var yy = y % 100;
  // console.log("yy:"+yy);
  var c1 = cc / 4;
  // console.log("c1:"+c1);

  var c2 = (2 * cc);
  // console.log("c2:"+c2);
  var c3 = c1 - c2;
  // console.log("c3:"+c3);
  var c = (c1 - c2 - 1);
  // console.log("c:"+c);
  var year = Math.floor(5 * (yy / 4) + c);
  // console.log("year"+year);
  var mon = Math.floor(((26 * (m + 1)) / 10) + year);
  // console.log("mon"+mon);
  var d = mon;
  var day = Math.ceil((d) % 7);
  // console.log(day);
  var dd = month[m];
  var w = dd % 7;
  var weeks = w + 2;
  //creating a array with the 2d to display the calendar
  var c = 0;
  var start = 1;

  var stack1 = new stack();
  var qweek = new queue();
  for (var i = 0; i <= weeks; i++) {

    for (var j = 0; j < 7; j++) {
      if (j < day) //to print the space value here my space value= 0 is taken to display in proper manner
      {

        document.write("&emsp;&emsp;&emsp;");


      } else if ((start != month[m] + 1)) {
        if (start <= 9) {
          console.log(start);
          var weekday = new week_withdays(week[j], "0" + start);
        } else {
          console.log(start);
          var weekday = new week_withdays(week[j], start);
        }
        start++;
        stack1.pushing(weekday);
        qweek.enqueue(stack1);
      } else {
        break;
      }


    }
    document.write("<br>");
    day = 0;
  }
}