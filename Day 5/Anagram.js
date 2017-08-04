function anagram()
{
var string1=document.getElementById("str1").value;
var string2=document.getElementById("str2").value
var size1=string1.length;
var size2=string2.length;
var arr1=new Array(size1);
var arr2=new Array(size2);
var flag;
for(i=0; i<size1; i++)
{
  var va=string1.charCodeAt(i);
  arr1[i]=va;
}
for(i=0; i<size2; i++)
{
var va=string2.charCodeAt(i);
arr2[i]=va;
}
sorting(arr1,size1);
sorting(arr2,size2);
console.log(arr2);
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

for(i=0; i<size1; i++)
{
  if(arr1[i]==arr2[i])
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
