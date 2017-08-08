var temp_in_fah = +process.argv[2]; //read temperature in fahrenheit;
var temp_in_cel = +process.argv[3]; //read temperature in celsius;
function cel_to_fah(temp_in_cel) //conversion function for celsius to fahreheit;
{
  var Fahreheit = temp_in_cel * (9 / 5) + 32;
  console.log("\n");
  console.log("In Celsius: °" + temp_in_cel + "C");
  console.log("In Fahreheit: °" + Fahreheit + "C"); //displaying result;
}

function fah_to_cel(temp_in_fah) //conversion function for fahreheit to celsius;
{
  var Celsius = (temp_in_fah - 32) * (5 / 9);

  console.log("In Fahreheit: °" + temp_in_fah + "F");
  console.log("In Celsius: °" + Celsius + "C"); //displaying result;
}
fah_to_cel(temp_in_fah); //calling function;
cel_to_fah(temp_in_cel); //calling function;
