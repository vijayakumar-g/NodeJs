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
  //single dimension to store the prime values
var arr = new Array(1000);
for (i = 2; i < 1000; i++) {
  if (isPrime(i) == true) {
    arr[i] = i;
    }
}
var size = arr.length;
var arr2=[];
var agram=new Array(1000);
var notAgram=new Array(1000);
anagram(arr, size);
var x, y;
/*reads the two strings and check for the anagram condition
if it is satisfied then one string is the anagram of the other */
function anagram(arr, size) {
  var flag;
  var x=0;

  for (i = 0; i < size; i++) {
    if (arr[i] > 10) {
      var no1 = arr[i];
      var a = Math.floor(no1 / 10);
      var b = no1 - a * 10;
      for (j = i + 1; j < size; j++) {
        var no2 = arr[j];
        var c = Math.floor(no2 / 10);
        var d = no2 - c * 10;
        if (a == d && b == c) {
        agram[x]=arr[j];
          x++;
          break;

        } else {
          continue;
        }
      }
    }
        if (arr[i] > 100) {
      var no1 = arr[i];
      var a = Math.floor(no1 / 100);
      var b = no1 - a * 100;
      var c = Math.floor(b / 10);
      var d = b - c * 10;
      for (j = i + 1; j < size; j++) {

        var no2 = arr[j];
        var e = Math.floor(no2 / 100);
        var f = no2 - e * 100;
        var g = Math.floor(f / 10);
        var h = f - g * 10;
        arr2.push(e);
        arr2.push(g);
        arr2.push(h);
        arr2.sort();

        var a1 = arr2[0];
        var a2 = arr2[1];
        var a3 = arr2[2];
        arr2 = [];
        if ((a == a1) && (c == a2) && (d == a3)) {
          agram[x]=arr[j];
          x++;
          break;
        } else {
          continue;
        }
      }
    }
  }
}
for(i=0; i<1000; i++)
{
  if(arr[i]!=null)
  {
    //storing all the prime number values
    notAgram[i]=arr[i];
  }
}
// deleting all the anagram value from the 1d array
for(i=0; i<1000; i++)
{
  if(agram[i]!=null)
  {
    for(j=0; j<1000; j++)
    {
      if(notAgram[j]!=null && notAgram[j]==agram[i])
      {
        delete(notAgram[j]);
      }
    }
  }
}
var anagram_array = new Array(10); //2d array to print the prime Anagram number values
var notanagram_array =new Array(10); //2d array to print the Non-prime Anagram number values
for (var i = 0; i < 10; i++) {
  anagram_array[i] = new Array(10);
  notanagram_array[i] = new Array(10);
}
var b=0;
//allocating the Prime Anagram values in the 1d array into the 2d array
for (var i = 0; i < 10; i++)
{
  for (var j = 0; j < 10; j++) {
    anagram_array[i][j] = agram[b];
    b++;
  }
}
//allocating the Non-Prime Anagram value in the 2d array
var c=0;
for (var i = 0; i < 10; i++)
{
  for (var j = 0; j < 100; j++) {
    notanagram_array[i][j] = notAgram[c];
    c++;
  }
}
console.log("\nAnagrams: Range 0 to 1000");
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
    if (anagram_array[i][j] != null) {
      console.log(anagram_array[i][j]);
    }
  }
}
var a = 0;
var b = 100;
console.log("\nNot Anagrams:");
for (i = 0; i < 10; i++)
{
    console.log("\nDimension:" + (i + 1) + " contains:" + a + "to" + b);
  a = a + 100;
  b = b + 100;
    for (j = 0; j < 100; j++) {
    if (notanagram_array[i][j] != null) {
      console.log(notanagram_array[i][j]);
    }
  }
}
