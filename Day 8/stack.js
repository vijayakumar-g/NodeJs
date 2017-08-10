  var stk = [];
  var exp = "[()]";
  var top, i;
  top = -1;
  for (i = 0; exp[i] != '\0'; i++)
  {
    if (exp[i] == '(' || exp[i] == '[' || exp[i] == '{')
    {
      top++;
      stk[top] = exp[i];
    }
    else if (exp[i] == ')')
        {
          if (stk[top] == '(')
            top--;
          else
        {
          console.log("Unbalanced exp");
        }
       }
   else if (exp[i] == ']')
       {
        if (stk[top] == '[')
          top--;
        else
         {
          console.log("Unbalanced exp");
         }
      }
  else if (exp[i] == '}')
       {
        if (stk[top] == '{')
          top--;
        else
         {
          console.log("Unbalanced exp");
        }
      }
  }
  if (top == -1)
    console.log("Exp is balanced");
  else
    console.log("Exp is not balanced");
  
