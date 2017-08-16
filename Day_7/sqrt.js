var c = +process.argv[2]; //read the input ;
var t = c;
var epsilon = Math.exp(-15);
//t value is replaced by finding average;
while (Math.abs(t - (c / t)) > (epsilon * t)) 
{
 t = (((c / t) + t) / 2); 
}
var result = Math.floor(t); 
console.log("Square Root of " + c + " : " + result); // display the result;
