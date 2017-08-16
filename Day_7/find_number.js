/*finding the user thinked number using the binary search method*/
var binary_search = function(left, right)
 {
  if((left-right)==1)
  {
  return 1;
  }
    var mid = Math.ceil(left + (right - left) / 2); 
    var input=prompt("if x is greater than "+mid+" value type:t / if x is lesser than "+mid+" value type:f / value thinking: "+mid+" type o","");
     if(input=='t')
    {
      mid=binary_search(mid+1,right);
    }
    if(input=='f')
    {
      mid=binary_search(0,mid-1)
    }
    if(input=='o')
    {
  return mid;
  document.write("thinked number:"+mid);
    }
  }
  //reading the minimum n value from user
function find()
{
var number=document.getElementById('N').value; 
var power=(Math.pow(2,number))-1; // between the 0,N^number the value should be thinked
var mid=binary_search(0,power-1); // searching for the number
}
