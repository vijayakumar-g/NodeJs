function isPrime(k) {
  var flag = 0;
  for (j = 2; j <= k / 2; j++) { //checking for the prime conditio till the half of the element
    if (k % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    return true; //if prime then return true

  }
}
var c = 0;
var myArray = new Array(10); //2d array to print the prime number values
var arr = new Array(1000);  //single dimension to store the prime values
for (var i = 0; i < 10; i++) {
  myArray[i] = new Array(10);
}
for (i = 2; i < 1000; i++) {
  if (isPrime(i) == true) { //checking for the prime condition
    arr[i] = i;
    }
}

var x = 0;
for (var i = 0; i < 10; i++)
{
  for (var j = 0; j < 100; j++) {
    myArray[i][j] = arr[x]; //allocating the prime values in the 1d array into the 2d array
    x++;
  }
}
var a = 0;
var b = 100; //displayin the 2d array that contains the elements of the prime numbers between the range 0 to 1000
for (i = 0; i < 10; i++) {
  console.log("\nDimension:" + (i + 1) + " contains:" + a + "to" + b);
  a = a + 100;
  b = b + 100;
  for (j = 0; j < 100; j++) {
    if (myArray[i][j] != null) {
      console.log("array[" + i + "][" + j + "]:" + myArray[i][j]);
    }
  }
}
