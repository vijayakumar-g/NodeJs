var arr=["vijay","bharathi","aniketh","akash","deba"];
var size=arr.length;
for(i=1; i<size; i++)
{
var key=arr[i];
j=i-1;
while(j>=0 && arr[j]>key)
{
arr[j+1]=arr[j];
j--;
}
arr[j+1]=key;
}
console.log(arr);
