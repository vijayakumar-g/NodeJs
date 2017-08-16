/*used to create a 2d array and store the m*n values in the 2d array
and display the result*/ 
function createArray() {
 
  var m = document.getElementById("m_value").value;
  var n = document.getElementById("n_value").value;
 
  var array = new Array(m);
  for (var i = 0; i < m; i++) {

    array[i] = new Array(m);
  }
 
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
       array[i][j] = prompt("Enter a number", "0");
      document.write("\narray[" + i + "][" + j + "]:" + array[i][j]);
    }
  }

}
