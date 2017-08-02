var n=+process.argv[2];
var i=0;
prime(n);
function prime(n)
{
while (n%2==0)
{
console.log("2");
n=n/2;
}
var s=Math.sqrt(n);
for(i=3; i<=s; i+=2)
{
while(n%i==0)
{
console.log(i);
n=n/i;
}
}
if(n>2)
{
console.log(n);
}
}

