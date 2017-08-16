var startTime = null;
var stopTime = null;
var running = false;
function getTime() {
  var day = new Date();
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
/*reading the input array by the user and callingthe function based 
on the user selected option by the user */
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

/*displaying the result to the user*/
function display(arr, size) {

  for (var i = 0; i < size; i++)
    document.write("\n" + arr[i]);
}


//      BUBBLE SORT
/*sorting the elements by comparing the first element and
traversing the next element */
function bubblesort(arr, n) {
  var i, j;
  for (var i = 0; i < n - 1; i++)
    for (j = 0; j < n - i - 1; j++)
      if (arr[j] > arr[j + 1])
        swap(arr, j, j + 1);
}
/*swap function to swap the elements*/
function swap(arr, i, j) {
  var temp;
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


//      INSERTION SORT
/* sorting the element by setting the key element 
comparing the other elements via the key elements and 
sorting the list*/

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
