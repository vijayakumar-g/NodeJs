/*finding the prime values between the start and 
end value given by the user*/
function prime_start_end() {
  var start = document.getElementById("start").value;
  var end = document.getElementById("stop").value;
  var flag = 0;
  for (i = start; i <= end; i++) {
    flag = 0;
    for (j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (flag == 0) {
      document.write(i+"<br>");
    }
    }
}
