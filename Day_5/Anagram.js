
/*sort the array values from the lowest value to highest value */
function sorting(arr,size)
{
for(i=0; i<size; i++)
{
  for(j=i+1; j<size; j++)
  {
    if(arr[i]>=arr[j])
    {
      temp=arr[i];
      arr[i]=arr[j];
      arr[j]=temp;
    }
  }
}
}

/*reads the two strings and check for the anagram condition 
if it is satisfied then one string is the anagram of the other */
function anagram()
{
var string1=document.getElementById("str1").value;
var string2=document.getElementById("str2").value
var size1=string1.length;
var size2=string2.length;
var array1=new Array(size1);
var array2=new Array(size2);
var flag;
for(i=0; i<size1; i++)
{
  var va=string1.charCodeAt(i);
  array1[i]=va;
}
for(i=0; i<size2; i++)
{
var va=string2.charCodeAt(i);
array2[i]=va;
}
sorting(array1,size1);
sorting(array2,size2);

for(i=0; i<size1; i++)
{
  if(array1[i]==array2[i])
  {
    flag=0;
    continue;
  }
  else
   {
  flag++;
  document.write(string1+" and "+string2+" are not Anagram");
  break;
  }
}
if(flag==0)
{
  document.write(string1+" and "+string2+" are Anagram");
}
}
