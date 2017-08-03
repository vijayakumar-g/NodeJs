var x=+process.argv[2];
var y=+process.argv[2];

var xsquare=Math.pow(x,x);
var ysquare=Math.pow(y,y);

var distance=Math.sqrt((xsquare+ysquare));
console.log(distance);


