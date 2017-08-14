function permutations() {
  //reading the string str as that to found the permutations
  var str = document.getElementById("s").value;
  //length of the string is calculated
  var size = str.length;
  //creating the array for the to store the values
  var arr = [];

  for (i = 0; i < size; i++) {
    //push each letter into in array
    arr.push(str[i]);
  }
  //calling the permute function to find the permutations of the string
  permute(arr, 0, size - 1);
  //l-starting index of string
  //r-last index of the string
  function permute(str, l, r) {
    //checking the string contains only one element are not
    if (l == r) {
      //if then display the single string
      document.write("\n");
      document.write("(" + str + ")");
    } else {
      //checking for the combination of the string
      for (var i = l; i <= r; i++) {
        swap(str, l, i);
        permute(str, l + 1, r);
        swap(str, l, i);
      }

    }
  }
  //swap functions
  function swap(str, i, j) {
    var temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
