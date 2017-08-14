//read the value for the square is to be calculated
for(var x=1,i=0; i<=process.argv[2]; i++)
{
console.log("2^%d=%d",i,x);
x+=x;
}
