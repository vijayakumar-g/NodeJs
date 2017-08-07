var startTime = null;
var stopTime = null;
var running = false;
function getTime() {
  var day = new Date();
  //document.getElementById("stop").innerHTML = day.toLocaleTimeString();
  return day.getTime();
}

function start() {
if (running)
    return;
  else if (startTime != null)
    stopTime = null;

  running = true;
  startTime = getTime();

  return startTime;

}

function stop() {
  if (running == false)
    return;

  stopTime = getTime();
  running = false;

  return stopTime;

}

function duration() {
  if (startTime == null || stopTime == null)
    return 'Undefined';
  else
    document.write((stopTime - startTime) / 1000);
}

function read(s) {

  var size = document.getElementById("n").value;
  var arr = new Array(size);
  for (i = 0; i < size; i++) {
    var no = prompt("enter the value", "");
    arr[i] = parseInt(no);
  }
  var n = s;
  if (n == 1) {
    document.write("Insertion Sort:Before");
    display(arr, size);
    document.write("<br>");
    start();
    insertionSort(arr, size);
      document.write("Insertion Sort:After");
      display(arr, size);

      document.write("<br>");
   stop();

   document.write("Elapsed Time:");
  duration();
  }

  else if (n == 2) {
    document.write("Bubble Sort:Before");
    display(arr, size);
      document.write("<br>");
    start();
    bubblesort(arr, size);
    document.write("\nBubble Sort:After");
    display(arr, size);
      document.write("<br>");
    stop();
     document.write("Elapsed Time:");
    duration();

  }

   else if (n == 3) {
    document.write("Binary Search:");
    insertionSort(arr, size);
    var y = prompt("enter the element to found", "");
    var x = parseInt(y);
    display(arr, size);
    var result = binary_search(arr, 0, size - 1, x);
    console.log(result);
    if (result == -1) {
      console.log("element is not present there");
    } else {
      console.log("element is present ");
    }
  }
}


function display(arr, size) {

  for (var i = 0; i < size; i++)
    document.write("\n" + arr[i]);
}


//      BUBBLE SORT
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


//      INSERTION SORT

function insertionSort(arr, size) {
  for (i = 0; i < size; i++) {
    var key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
}



//    BINARY SEARCH
var binary_search = function(arr, l, r, x) {
  if (r >= l) {
    var mid = Math.ceil(l + (r - l) / 2);

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return binary_search(arr, l, mid - 1, x);

    return binary_search(arr, mid + 1, r, x);
  }
  return -1
}
