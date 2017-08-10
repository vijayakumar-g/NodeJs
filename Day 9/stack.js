var stack = new Array(); //creating a stack array so that the characters are pushed and popped
var value = "(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)"; //input
var top = 0; //top is kept for the last element to pulled out
function pushing(top, exp) //pushing of the character
{
  if (exp != null) {
    stack[top] = exp;
  }
}

function popping(top, exp) {
  if (stack[top] == exp) {
    stack.splice(top, 1); //making the last inserted element to be deleting it from the array
  }
  return top;
}
for (i = 0; i < value.length; i++) {
  if (value[i] == "{" || value[i] == "[" || value[i] == "(") //checking for the special characters whether to be pushed /pop
  {
    top++; //if pushing then make the stack top +1
    pushing(top, value[i]);
    console.log(stack);
  } else if (value[i] == "}") //checking for this special character
  {
    popping(top, pvalue);
    var pvalue = "{"; //then the opening of this spl character should be popped out
    top--; //decrementing the top
    console.log(stack);
  } else if (value[i] == "]") //checking for this special character
  {
    var pvalue = "["; //then the opening of this spl character should be popped out
    popping(top, pvalue);
    top--; //decrementing the top
    console.log(stack);
  } else if (value[i] == ")") //checking for this special character
  {
    var pvalue = "(";
    popping(top, pvalue); //then the opening of this spl character should be popped out
    top--; //decrementing the top
    console.log(stack);
  }
}
if (top != 0) {
  console.log("Input:" + value);
  console.log("Arithmetic Expression is not a balanced one");

}
if (top == 0) {
  console.log("Input:" + value);
  console.log("Arithmetic Expression is balanced one");
}