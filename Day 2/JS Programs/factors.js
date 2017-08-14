//read the command line argument to find the prime factorization
var number = +process.argv[2];
var i = 0;
//calling the prime function
prime(number);
/**/
function prime(number) {
  //checking for the number 2 is prime
  while (number % 2 == 0) {
    //printing the number in the console
    console.log("2");
    number = number / 2;
  }
  //finding the square root of the number
  var square = Math.sqrt(number);
  //for loops run till the square root of that number
  for (i = 3; i <= square; i += 2) {
    //checking for the number prime factorization
    while (number % i == 0) {
      //displaying the factors of that numbers
      console.log(i);
      //making that divison of number for further factorization
      number = number / i;
    }
  }
  if (number > 2) {
    console.log(number);
  }
}
