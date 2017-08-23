var Principal = +process.argv[2]; //reading the principal amount;
var Year = +process.argv[3]; //reading the no of years;
var Rate = +process.argv[4]; //reading the rate of interest;

/*function for calculatiing the payment by using p*n*r/1-(1+rate)*/
var payment = function(Principal, Year, Rate) {
  var no_of_years = 12 * Year;
  console.log("n:" + no_of_years);
  var rate = Rate / (12 * 100);
  console.log("r:" + rate);
  var deno1 = (-(1 - (1 + rate)));
  console.log("deno1:" + deno1);
  var denominator = Math.pow(deno1, no_of_years)
  console.log("denominator:" + denominator);
  var pay = Principal* rate / denominator; //calculating the payment for Principal,year,interest;
  return pay; //returning the payment amount;
}

var result = payment(Principal, Year, Rate);
console.log("-------------------------------")
console.log("Payment amount :" + result); //displaying result;
