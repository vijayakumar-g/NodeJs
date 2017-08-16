function swap(x,y)
{
  var temp;
  x=temp;
  x=y;
  y=temp;
// console.log(x);
  return x,y;
}
function sort(a,b,c)
{
  if(a>b)
  {
    swap(a,b);
  }
  else if(a>c)
  {
    swap(a,c);
  }// console.log(e+""+g);}
console.log(a+" "+b+" "+c);
  if(b>a)
  {
    swap(b,a);
  }
  else if(b>c)
  {
    swap(b,c);
  }// console.log(e+""+g);}
  console.log(a+" "+b+" "+c);
  if(c>a)
  {
    swap(c,b);
  }
  else if(c>b)
  {
    swap(c,b);
  }

  console.log(a+" "+b+" "+c);

}
var arr2=[];
function anagram()
{
  var no1=119;
  var a = Math.floor(no1/100);
  var b = no1-a*100;
  var c=Math.floor(b/10);
  var d=b-c*10;

  var no2=191;
  var e=Math.floor(no2/100);
  var f=no2-(e*100);
  var g=Math.floor(f/10);
  var h=f-g*10;
  //sort(e,g,h);

arr2.push(e);
arr2.push(g);
arr2.push(h);
arr2.sort();
var a1=arr2[0];
var a2=arr2[1];
var a3=arr2[2];
if((a==a1) && (c==a2)&& (d==a3))
{
  console.log(no2+" is a anagram of "+no1);
  
}
  else {
    console.log("no hi");
  }
}
anagram();
