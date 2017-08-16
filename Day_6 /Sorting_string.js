/*displaying the result to the user*/
function display(arr,size)
{

    for (var i=0; i < size; i++)
        document.write("\n"+arr[i]);
}
//      INSERTION SORT
/* sorting the element by setting the key element 
comparing the other elements via the key elements and 
sorting the list*/

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
//      BUBBLE SORT
/*sorting the elements by comparing the first element and
traversing the next element */
function bubblesort( arr, n)
{
  var i, j;
   for (var i = 0; i < n-1; i++)
       for (j = 0; j < n-i-1; j++)
           if (arr[j] > arr[j+1])
              swap(arr,j, j+1);
}
/*swap function to swap the elements*/
function swap(arr,i,j)
{
  var temp;
  temp=arr[i];
  arr[i]=arr[j];
  arr[j]=temp;
}
/*reading the input array by the user and callingthe function based 
on the user selected option by the user */
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
}
