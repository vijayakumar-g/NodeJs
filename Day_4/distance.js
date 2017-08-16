//reading the x and y as command line arguments to find the distamce of the given formula
var x = +process.argv[2];
var y = +process.argv[3];

//finding the square root for both x & y
var xsquare = Math.pow(x, x);
var ysquare = Math.pow(y, y);
//calculating the distance between the x & y
var distance = Math.sqrt((xsquare + ysquare));
console.log(distance);
