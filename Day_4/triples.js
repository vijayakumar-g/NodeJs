/*checking triplets of the array by 
calculating the array values given as input by the user */
function array() {
  var k = 0;
  var flag = 0;
  var i = 0;
  var j = 0;
  
  var m = document.getElementById("m_value").value;
  
  var myArray = new Array(m);
  for (var i = 0; i < m; i++) {
    myArray[i] = new Array(m);
  }
    for (var i = 0; i < m; i++) {
    myArray[i] = prompt("Enter a number", "0");
    document.write("\narray[" + i + "]:" + myArray[i]);
  }
  
  for (var i = 0; i < m; i++) {

    for (var j = i + 1; j < m; j++) {
  
      if (myArray[j - 1] > myArray[j]) {
        var temp = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = temp;
      }
    }

  }
  for (i = 0; i < m - 2; i++) {

    if (i == 0 || myArray[i] > myArray[i - 1]) {
      j = i + 1;
      k = m - 1;
      while (j < k) {

  
        if (myArray[i] + myArray[j] + myArray[k] == 0) {
          document.write("Distinct Triples:" + myArray[i] + " " + myArray[j] + " " + myArray[k]);
          j++;
          k--;
          flag++; 
          document.write(flag);
          while (j < k && myArray[j] == myArray[j - 1])
            j++;
          while (j < k && myArray[k] == myArray[k + 1])
            k--;
        } else if (myArray[i] + myArray[j] + myArray[k] < 0)
          j++;

        else
          k--;
      }
    }
  }

  if (flag == 0)
    document.write("No Triples found");



}
