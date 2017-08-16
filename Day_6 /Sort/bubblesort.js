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
function display(arr,size)
{

    for (var i=0; i < size; i++)
        console.log(arr[i]);
}
var arr=["5","3","4","9","1"];
var n=arr.length;
bubblesort(arr,n);
display(arr,n);
