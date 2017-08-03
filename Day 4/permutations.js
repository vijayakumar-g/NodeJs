function permutations()
{
var s=document.getElementById("s").value;
var size=s.length;
var arr=[];
for(i=0; i<size; i++)
{
  arr.push(s[i]);
}
permute(arr,0,size-1);
function permute(s,l,r)
{
    if(l == r)
  {  document.write("\n");
    document.write("("+s+")");}
else
	{
		for(var i=l; i<=r; i++)
		{
		  swap(s,l,i);
			permute(s,l+1,r);
			swap(s,l,i);
  	}

	}
}
function swap(s,i,j)
{
	var temp;
	temp = arr[i];
	arr[i]=arr[j];
	arr[j]=temp;
}
}
