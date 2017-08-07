var temp_in_fah=+process.argv[2];
var temp_in_cel=+process.argv[3];
  function cel_to_fah(temp_in_cel)
{
  var Fahreheit=temp_in_cel*(9/5)+32;
    console.log("\n");
  console.log("In Celsius: °"+temp_in_cel+"C");
  console.log("In Fahreheit: °"+Fahreheit+"C");
}

function fah_to_cel(temp_in_fah)
{
  var Celsius=(temp_in_fah-32)*(5/9);

  console.log("In Fahreheit: °"+temp_in_fah+"F");
  console.log("In Celsius: °"+Celsius+"C");
}
fah_to_cel(temp_in_fah);
cel_to_fah(temp_in_cel);
