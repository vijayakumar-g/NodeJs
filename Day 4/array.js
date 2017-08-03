function createArray()
{
var m=document.getElementById("m_value").value;
var n=document.getElementById("n_value").value;
var myArray = new Array(m);
for(var i = 0; i < m; i++)
{
    myArray[i] = new Array(m);
}

for(var i = 0; i < m; i++) //prompt user for input and fill the array
{
    for(var j = 0; j < n; j++)
    {
        myArray[i][j]= prompt("Enter a number","0");
        document.write("\narray["+i+"]["+j+"]:"+myArray[i][j]);
    }
}

  }
