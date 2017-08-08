var c = +process.argv[2]; //read the input ;
var t = c;
var epsilon = Math.exp(-15);
while (Math.abs(t - (c / t)) > (epsilon * t)) //while condition is checked;
{
  t = (((c / t) + t) / 2); //t value is replaced by finding average;
}
var result = Math.floor(t); //to make as whole floor is used;
console.log("Square Root of " + c + " : " + result); // display the result;
