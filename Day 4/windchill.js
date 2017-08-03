function windchill()
{
var temp=document.getElementById("tvalue").value;
var velocity=document.getElementById("vvalue").value;
var w;
w=35.74 + 0.62151*temp + ( 0.4275 * temp - 35.75) * (Math.pow(velocity,0.16));
document.write("WindCHill:"+w);
}
