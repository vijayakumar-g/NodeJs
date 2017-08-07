var fs = require("fs");
var text = fs.readFileSync("input.txt").toString('UTF8');
var comma_sep = text.split(",");
var size = comma_sep.length;
var x ="vijay";
comma_sep.sort();
console.log(comma_sep);
var binary_search = function(arr, l, r, x) {
  if (r >= l) {
    var mid = Math.ceil(l + (r - l) / 2);
    if (arr[mid] == x) return mid;
    if (arr[mid] > x) return binary_search(arr, l, mid - 1, x);
    else return binary_search(arr, mid + 1, r, x);
  }
  return -1
}
var result = binary_search(comma_sep, 0, size - 1, x);
if (result == -1) {
  console.log("string is not present there in input.txt ");
} else {
  console.log("string is present in input.txt ");
}
