var arr = [4, 12, 2, 3, 40];
var x = +process.argv[2];
var size = arr.length;
var binary_search = function(arr, l, r, x) {
  if (r >= l) {
    var mid = Math.ceil(l + (r - l) / 2);

    if (arr[mid] == x) return mid;

    if (arr[mid] > x) return binary_search(arr, l, mid - 1, x);

    return binary_search(arr, mid + 1, r, x);
  }
  return -1
}

arr.sort(function(a,b){return a-b});
console.log(arr);
var result = binary_search(arr, 0, size-1, x);
if (result == -1) {
  console.log("element is not present there");
} else {
  console.log("element is present");
}
