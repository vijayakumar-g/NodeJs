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
/*converting the decimal value read by the user into the binary value*/
var toBinary = function(decimal) {
  var arr = [];
  var value=0;
  var quotient, remainder;
   var i = 0;
  //condition is checked and loop continues till decimal value becomes;
  while (decimal > 0 && decimal > 1) 
    {
    remainder = decimal % 2; 
    quotient = decimal / 2; 
    decimal = quotient;
    arr[i] = parseInt(Math.floor(remainder)); 
    i++;
  }
  var size = arr.length;
  var s = square(size); 

  var r = Math.pow(2, s);
// padding loop
  for (i = 0; i < r; i++) 
  {
    if (arr[i] == null) 
    {
      arr[i] = 0;
    }

  }
  display(arr);
}

/*reading the user input from html*/
function read() {
  var decimal = document.getElementById("dec").value;
  var result = toBinary(decimal); 
  document.write(result);
}
