function read(s)
{

var size=document.getElementById("n").value;
var arr=new Array(size);
for(i=0; i<size; i++)
{
arr[i]=prompt("enter the value","");
}
var n=s;
if(n==1)
{
  document.write("Insertion Sort:Before");
  display(arr,size);
  insertionSort(arr,size);
  document.write("\nInsertion Sort:After");
  display(arr,size);
}
else if(n==2)
{
  document.write("Bubble Sort:Before");
display(arr,size);
bubblesort(arr,size);
document.write("\nBubble Sort:After");
display(arr,size);
}
else if(n==3)
{
  document.write("Binary Search:");
  insertionSort(arr,size);
  var x=prompt("enter the element to found","");
  display(arr,size)
 var result = binary_search(arr, 0, size - 1, x);
 if (result == -1) {
   console.log("string is not present there");
 } else {
   console.log("string is present ");
 }
}
}
function display(arr,size)
{

    for (var i=0; i < size; i++)
        document.write("\n"+arr[i]);
}
//      BUBBLE SORT
function bubblesort( arr, n)
{
  var i, j;
   for (var i = 0; i < n-1; i++)
       for (j = 0; j < n-i-1; j++)
           if (arr[j] > arr[j+1])
              swap(arr,j, j+1);
}
function swap(arr,i,j)
{
  var temp;
  temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
}
//      INSERTION SORT

function insertionSort(arr,size)
{

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
