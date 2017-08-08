var fs = require("fs");
var text = fs.readFileSync("input.txt").toString('UTF8');
var comma_sep = text.split(",");
var size = comma_sep.length;
var x =+process.argv.slice(2);
document.write(x);
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
  document.write("string is not present there in input.txt ");
} else {
  document.write("string is present in input.txt ");
}
}
