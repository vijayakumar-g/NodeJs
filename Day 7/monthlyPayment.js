var P = +process.argv[2]; //reading the principal amount;
var Y = +process.argv[3]; //reading the no of years;
var R = +process.argv[4]; //reading the rate of interest;
var payment = function(P, Y, R) {
  var n = 12 * Y;
  console.log("n:" + n);
  var r = R / (12 * 100);
  console.log("r:" + r);
  var deno1 = (-(1 - (1 + r)));
  console.log("deno1:" + deno1);
  var denominator = Math.pow(deno1, n)
  console.log("denominator:" + denominator);
  var pay = P * r / denominator; //calculating the payment for Principal,year,interest;
  return pay; //returning the payment amount;
}
var result = payment(P, Y, R);
console.log("-------------------------------")
console.log("Payment amount :" + result; //displaying result;
