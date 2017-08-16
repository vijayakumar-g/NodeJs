var arr = [4, 12, 2, 3, 40];
function insertionSort(arr)
{
  var size = arr.length;
for (i = 0; i < size; i++) {
  var key = arr[i];
  j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}
}
insertionSort(arr);
console.log(arr);
