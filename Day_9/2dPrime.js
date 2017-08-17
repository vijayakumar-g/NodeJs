/*checking whether it is prime value or not given by the user*/
function isPrime(k) {
  var flag = 0;
  for (j = 2; j <= k / 2; j++) {
    if (k % j == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    return true;

  }
}

//2d array to print the prime number values
var prime_array = new Array(10);
//single dimension to store the prime values
var arr = new Array(1000);
for (var i = 0; i < 10; i++) {
  prime_array[i] = new Array(10);
}
for (i = 2; i < 1000; i++) {
  if (isPrime(i) == true) {
    arr[i] = i;
  }
}

var x = 0;
//allocating the prime values in the 1d array into the 2d array
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 100; j++) {
    prime_array[i][j] = arr[x];
    x++;
  }
}
var range_a = 0;
var range_b = 100;
//displayin the 2d array that contains the elements of the prime numbers between the range 0 to 1000
for (i = 0; i < 10; i++) {
  console.log("\nDimension:" + (i + 1) + " contains:" + range_a + "to" + range_b);
  range_a = range_a + 100;
  range_b = range_b + 100;
  for (j = 0; j < 100; j++) {
    if (prime_array[i][j] != null) {
      console.log("array[" + i + "][" + j + "]:" + prime_array[i][j]);
    }
  }
}