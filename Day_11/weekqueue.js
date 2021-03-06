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

  var m = document.getElementById("month").value; //reading the month from the user
  var y = document.getElementById("year").value; //reading the year from the user

  var cc = Math.floor(y / 100);
  var yy = y % 100;
  var c = Math.floor((cc / 4) - (2 * cc) - 1);
  var year = Math.floor(5 * (yy / 4) + c);
  var mon = Math.floor(((26 * (m + 1)) / 10) + year);
  var d = mon + 1;
  var day = Math.ceil(d % 7);
  //for the array no of week of the month week is taken in an account
  var dd = month[m];
  var w = dd % 7;
  var weeks = w + 2;
  //creating a array with the 2d to display the calendar
  var c = 0;
  var start = 1;
  document.write("javascript calender:" + m + " " + y);
  document.write("<br>" + monthExp[m] + " " + y);
  document.write("<br>sun&emsp;&ensp;mon&emsp;&ensp;tue&emsp;&ensp;wed&emsp;&ensp;thur&emsp;&ensp;fri&emsp;&ensp;sat <br>");

  /*creating a node*/
  function Node(d) {
    this.obj = d;
    this.next = null;
  }

  function queue() {
    this.rear = 0;
    this.front = 0;
  }
  /*weekdays is a function that contains the value such as day and date*/
  function week_withdays(d, da) {
    this.day = d;
    this.date = da;
  }

  /*enqueue is function in queue to add the element to the queue
  and the element added should like a queue format so whenever
  new element is inserted it should be wait in the queue*/
  queue.prototype.enqueue = function(d) {
    var node = new Node(d);
    if (this.rear == null) {
      this.rear = node;
      this.front = this.rear;
      document.write("<br>&emsp;&emsp;");
    } else {

      this.rear.next = this.rear;
      node.obj = d;
      this.rear = node;
    }
    document.write(this.rear.obj.date + "&emsp;&emsp;");

  }
  var Week = new queue();
  for (var i = 0; i <= weeks; i++) {

    for (var j = 0; j < 7; j++) {
      if (j < day) //to print the space value here my space value= 0 is taken to display in proper manner
      {
        document.write("&emsp;&emsp;&emsp;");

      } else if ((start != month[m] + 1)) {
        if (start <= 9) {
          var weekday = new week_withdays(week[j], "0" + start);
        } else {

          var weekday = new week_withdays(week[j], start);
        }
        start++;
        Week.enqueue(weekday);
      }

    }
    document.write("<br>");
    day = 0;
  }
}