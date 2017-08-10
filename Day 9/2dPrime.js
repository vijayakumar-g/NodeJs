function isPrime(k)
{
var flag = 0;
for (j = 2; j <= k / 2; j++) {
      if (k % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      return true;

    }
}
var c=0;
var myArray=new Array(10);
var arr=new Array(1000);
for(var i=0; i<10; i++)
{
  myArray[i]=new Array(10);
}
for(i=2; i<1000; i++)
{
  if(isPrime(i)==true)
  {
    arr[i]=i;
    c++;
  }
}

//console.log(arr);
var x=0;
for(var i = 0; i < 10; i++) //prompt user for input and fill the array
{
    for(var j = 0; j < 100;j++)
    {
        myArray[i][j]=arr[x];
        x++;
    }
}
var a=0;b=100;
for(i=0; i<10; i++)
{
  console.log("\nDimension:"+(i+1)+" contains:"+a+"to"+b);
  a=a+100;
  b=b+100;
  for(j=0; j<100; j++)
  {
    if(myArray[i][j]!=null)
    {
      console.log("array["+i+"]["+j+"]:"+myArray[i][j]);
    }
  }
}
