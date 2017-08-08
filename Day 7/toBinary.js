var square = function(c) {
  var t = c;
  var epsilon = Math.exp(-15);
  while (Math.abs(t - (c / t)) > (epsilon * t)) //while condition is checked;
  {
    t = (((c / t) + t) / 2); //t value is replaced by finding average;
  }
  var result = Math.ceil(t); //to make as whole floor is used;
  return result;
}

function display(arr) //displaying the array value in reverse so that
{
  var size = arr.length;
    var arr2 = [];
  for (i = size; i >= 0; i--) {
    if(typeof arr[i]==="undefined")
    {
      var c=0;
    }
    else {
      document.write(arr[i]+", ");
    }

  }
}

var toBinary = function(decimal) {
  var arr = [];
  var value=0;
  var quotient, remainder;
  var i = 0;
  while (decimal > 0 && decimal > 1) //condition is checked and loop continues till decimal value becomes;
  {
    remainder = decimal % 2; //each binary value is found by taking %2 ;
    quotient = decimal / 2; //quotient is taken to find the next binary value;
    decimal = quotient;
    arr[i] = parseInt(Math.floor(remainder)); //floor is used to round off and parseInt is used to store it as integer
    i++;
  }
  var size = arr.length;
  var s = square(size); //to find how many padding element to add sqrt of binary length is calculated

  var r = Math.pow(2, s);

  for (i = 0; i < r; i++) // padding loop
  {
    if (arr[i] == null) //padding the value 0
    {
      arr[i] = 0;
    }

  }
  display(arr);
}


function read() {
  var decimal = document.getElementById("dec").value;
  var result = toBinary(decimal); //function call for decimal to binary conversion;
  document.write(result);
}
