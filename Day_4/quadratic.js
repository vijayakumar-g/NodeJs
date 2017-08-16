/*calculate the quadratic value for the given a,b,c*/
function quadratic() {
  
  var a = document.getElementById("A").value;
  var b = document.getElementById("B").value;
  var c = document.getElementById("C").value;

  
  var delta = Math.pow(b, 2) - 4 * a * c;
  
  var root1 = (-b + Math.sqrt(Math.abs(delta))) / (2 * a);
  var root2 = (-b - Math.sqrt(Math.abs(delta))) / (2 * a);

  
  document.write("\nRoot1: " + root1);
  "<br>"
  document.write("\nRoot2: " + root2);
  "<br>"
}