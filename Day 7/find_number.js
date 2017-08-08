var binary_search = function(l, r)
 {
  if((l-r)==1)
  {
  return 1;
  }
    var mid = Math.ceil(l + (r - l) / 2); //finding the number
    var a=prompt("if x is greater than "+mid+" value type:t / if x is lesser than "+mid+" value type:f / value thinking: "+mid+" type o","");
    //checking for the condition
    if(a=='t')
    {
      mid=binary_search(mid+1,r);
    }
    if(a=='f')
    {
      mid=binary_search(0,mid-1)
    }
    if(a=='o')
    {
  return mid;
  document.write("thinked number:"+mid);
    }
  }
function find()
{
var n=document.getElementById('N').value; //reading the minimum n
var power=(Math.pow(2,n))-1; // between the 0,N^n the value should be thinked
var mid=binary_search(0,power-1); // searching for the number
}
