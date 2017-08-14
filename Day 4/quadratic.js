function quadratic() {
  //read the quadratic values input values from user
  var a = document.getElementById("A").value;
  var b = document.getElementById("B").value;
  var c = document.getElementById("C").value;

  //find the delta value for the a,b,c
  var delta = Math.pow(b, 2) - 4 * a * c;
  //finding the root of those values
  var root1 = (-b + Math.sqrt(Math.abs(delta))) / (2 * a);
  var root2 = (-b - Math.sqrt(Math.abs(delta))) / (2 * a);

  //display the result
  document.write("\nRoot1: " + root1);
  "<br>"
  document.write("\nRoot2: " + root2);
  "<br>"
}