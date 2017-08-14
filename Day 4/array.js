function createArray() {
  //readin the matrix m*n from the user
  var m = document.getElementById("m_value").value;
  var n = document.getElementById("n_value").value;
  //initializing the array with matrix row value
  var array = new Array(m);
  for (var i = 0; i < m; i++) {

    array[i] = new Array(m);
  }
  //prompt user for input and fill the array
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      //reading the array value form the user using prompt
      array[i][j] = prompt("Enter a number", "0");
      //displayin that array value
      document.write("\narray[" + i + "][" + j + "]:" + array[i][j]);
    }
  }

}
