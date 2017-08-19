/*function use to read te string and push the string
values into an array*/
function permutations() {

  var str = document.getElementById("s").value;

  document.write(str);

  var size = str.length;

  var arr = [];

  for (i = 0; i < size; i++) {

    arr.push(str[i]);
  }

  permute(arr, 0, size - 1);

  /*permute the combinations of how the string can be display*/
  function permute(str, l, r) {

    if (l == r) {

      document.write("\n");
      document.write("(" + str + ")");
    } else {
        for (var i = l; i <= r; i++) {
        swap(str, l, i);
        permute(str, l + 1, r);
        swap(str, l, i);
      }

    }
  }
  /*swapping the two values */
  function swap(str, i, j) {
    var temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}
