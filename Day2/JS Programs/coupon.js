var n=+process.argv[2];

var arr = [];
var g=0;
for(i=1; i<=n; i++)
	{
	var b=Math.ceil((Math.random()*26));
	var a=String.fromCharCode(64+Math.floor(b+1));
	var c=Math.ceil((Math.random()*26))
	var d=String.fromCharCode(64+Math.floor(b+1));
	var coupon=(a+b+c+d);
	g++;
	arr.push(coupon);
		for(j=1; j<i; j++)
		{
			while(arr[i]==arr[j])
			{ 
			console.log("coupon already is there");
			g++;
			var b=Math.ceil((Math.random()*26));
		var a=String.fromCharCode(64+Math.floor(b+1));
		var c=Math.ceil((Math.random()*26))
		var d=String.fromCharCode(64+Math.floor(b+1));
		var coupon=(a+b+c+d);
			console.log("Generate New One");
			}
		}
	}

for (i=0; i<arr.length; i++)
{
console.log(arr[i]);
}
console.log("Generated count:"+g);

