//finding the square root of the given number 
var square = function(c) {
  var t = c;
  var epsilon = Math.exp(-15);
  while (Math.abs(t - (c / t)) > (epsilon * t)) 
  {
    t = (((c / t) + t) / 2); 
  }
  var result = Math.ceil(t); 
  return result;
}
//displaying the array value in reverse 
function display(arr) 
{
  var size = arr.length;
  var arr2 = [];
  for (i = size; i >= 0; i--) {
    if (typeof arr[i] === "undefined") {
      var c = 0;
    } else {
      document.write(arr[i] + ", ");
    }

  }
}
/*converting the decimal value read by the user into the binary value 
and then swapping the binary value by 4digits to get different value*/
var toBinary = function(decimal) {
  var arr = [];
  var quotient, remainder;
  var i = 0;
  var value = 0;

  while (decimal > 0 && decimal > 1) 
  {
    remainder = decimal % 2; 
    quotient = decimal / 2; 
    decimal = quotient;
    arr[i] = parseInt(Math.floor(remainder)); 
    i++;
  }
  var size = arr.length;
  var s = square(size); //to find how many padding element to add sqrt of binary length is calculated

  var r = Math.pow(2, s);

//padding the value 0
  for (i = 0; i < r; i++) 
  {
    if (arr[i] == null) 
    {
      arr[i] = 0;
    }
  }
  // Just printing the order of binary value of decimal
  arr.reverse(); 
  var arr2 = [];
  var arr3 = [];
  //splitting the binary as nibbles nibble 1;
  for (i = 0; i < r / 2; i++) 
  {
    arr2.push(arr[i]);
  }
  for (i = r / 2; i < r; i++) // nibble 2
  {
    arr3.push(arr[i]);
  }

  var swap = [];
  //swapping and joining the nibbles
  for (i = 0, j = r / 2; i < r / 2, j < r; i++, j++) 
  {
    swap[i] = parseInt(arr3[i]);
    swap[j] = parseInt(arr2[i]);
  }
    i = 0;
    // calculating the swap binary value
  for (var j = r - 1; j >= 0; j--) {
    value += (swap[j] * (Math.pow(2, i))); 
    i++;
  }
  document.write("the swap nibbles of binary array is: "+value);
}
/*reading the user input from html*/
function read() {
  var decimal = document.getElementById("dec").value;
  toBinary(decimal); 
}
