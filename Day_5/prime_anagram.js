var array = [];
var array2 =[];
var x, y;
var flag;
prime_start_end(0, 1000);

/*to calculate the prime value between the start and end value 
and use this result to find the anagram*/
function prime_start_end(s, e) {
  var start = s;
  var end = e;
  var flag = 0;
  for (i = start; i <= end; i++) {
    flag = 0;
    for (j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      array.push(i);
    }
  }
}
var size = array.length;
anagram(array, size);

/*finding the anagram between the prime value 
by comparing the one prime value with the other value 
if the prime range below 99 then check the anagram between that by separating into a 
two digits else three digits and check the anagram */
function anagram(array, size) {
  
  for (i = 0; i < size; i++) {
    if (array[i] > 10) {
      var number1 = array[i];
      var a = Math.floor(number1 / 10);
      var b = number1 - a * 10;
      for (j = i + 1; j < size; j++) {
        var number2 = array[j];
        var c = Math.floor(number2 / 10);
        var d = number2 - c * 10;
        if (a == d && b == c) {

          console.log(number2 + " is a anagram of " + number1);
          break;

        } else {
          continue;
        }
      }
    }
    if (array[i] > 100) {
      var number1 = array[i];
      var a = Math.floor(number1 / 100);
      var b = number1 - a * 100;
      var c = Math.floor(b / 10);
      var d = b - c * 10;
      for (j = i + 1; j < size; j++) {

        var number2 = array[j];
        var e = Math.floor(number2 / 100);
        var f = number2 - e * 100;
        var g = Math.floor(f / 10);
        var h = f - g * 10;
        array2.push(e);
        array2.push(g);
        array2.push(h);
        array2.sort();

        var a1 = array2[0];
        var a2 = array2[1];
        var a3 = array2[2];
        array2 = [];
        if ((a == a1) && (c == a2) && (d == a3)) {
          console.log(number2 + " is a anagram of " + number1);
          break;
        } else {
          continue;
        }
      }
    }


  }
}
