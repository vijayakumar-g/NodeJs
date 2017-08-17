//creating a stack array so that the characters are pushed and popped
var stack = new Array();
var value = "(5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3)";
var top = 0;

//pushing of the character into stack array
function pushing(top, exp) {
  if (exp != null) {
    stack[top] = exp;
  }
}

//making the last inserted element to be deleting it from the array
function popping(top, exp) {
  if (stack[top] == exp) {
    stack.splice(top, 1);
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
  } else if (value[i] == "]") {
    var pvalue = "[";
    popping(top, pvalue);
    top--;
    console.log(stack);
  } else if (value[i] == ")") {
    var pvalue = "(";
    popping(top, pvalue);
    top--;
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