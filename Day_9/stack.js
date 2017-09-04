 function balanced()
  {
  //creating a stack array so that the characters are pushed and popped
  var stack = new Array();
  var val = document.getElementById('exp').value;
  var value = val.toString();
  var top = 0;

  //pushing of the character into stack array
  function pushing(top, exp) {
    if (exp != null)
    {
      stack[top] = exp;
    }
  }

  //making the last inserted element to be deleting it from the array
  function popping(top, exp)
  {

    if (stack[top] == exp)
    {
          stack.splice(top, 1);
      return true;
    }
 else return false
  }
  for (i = 0; i < value.length; i++) {
    if (value[i] == "{" || value[i] == "[" || value[i] == "(") //checking for the special characters whether to be pushed /pop
    {
      top++; //if pushing then make the stack top +1
      pushing(top, value[i]);
      console.log(stack);
    } else if (value[i] == "}") //checking for this special character
    {
      var pvalue = "{";
      if(popping(top, pvalue)==true){
        top--;//decrementing the top
      }
      console.log(stack);
    } else if (value[i] == "]") {
      var pvalue = "[";
      if(popping(top, pvalue)==true){
        top--;
      }

      console.log(stack);
    } else if (value[i] == ")") {
      var pvalue = "(";
      if(popping(top, pvalue)==true){
        top--;
      }
      console.log(stack);
    }
  }
  console.log(top);
  if (top!= 0)
  {
    document.write("Input:" + value + "\t");
    document.write("Arithmetic Expression is not a balanced one");

  }
  if (top== 0)
  {
    document.write("Input:" + value + "\t");
    document.write("Arithmetic Expression is balanced one");
  }
}
