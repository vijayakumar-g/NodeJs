//importing the fs module 
var fs = require("fs");
//read file in sync mode 
var text = fs.readFileSync("input.txt").toString('UTF8');
var comma_sep = text.split(",");
var size = comma_sep.length;
var find =process.argv.slice(2);
comma_sep.sort();
console.log(comma_sep);
/*binary_search funcionis used to search the element 
that given by the user by left and right sub arrays */
var binary_search = function(arr, left, right, find) {
  if (right >= left) {
    var mid = Math.ceil(l + (right - left) / 2);
    if (arr[mid] == find) return mid;
    if (arr[mid] > find) return binary_search(arr, left, mid - 1, find);
    else return binary_search(arr, mid + 1, right, find);
  }
  return -1
}
var result = binary_search(comma_sep, 0, size - 1, find);
if (result == -1) {
  console.log("string is not present there in input.txt ");
} else {
  console.log("string is present in input.txt ");
}

