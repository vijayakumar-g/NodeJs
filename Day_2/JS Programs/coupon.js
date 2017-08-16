//reading command line argument no of coupons to generated
var number=+process.argv[2];
//array to store the coupons;
var arr = [];
var count=0;
for(i=1; i<=number; i++)
	{
		//char 1 that has to be added in coupon
	var b=Math.ceil((Math.random()*26));
	//char 2 that has to be added in coupon
	var a=String.fromCharCode(64+Math.floor(b+1));
	//char 3 that has to be added in coupon
	var c=Math.ceil((Math.random()*26))
	//char 4 that has to be added in coupon
	var d=String.fromCharCode(64+Math.floor(b+1));
	//coupon has the random value generated above
	var coupon=(a+b+c+d);
	count++;
	//pushing the coupon value s into the array
	arr.push(coupon);
		for(j=1; j<i; j++)
		{
			//checking for the duplication of the coupon value in the array
			while(arr[i]==arr[j])
			{
			console.log("coupon already is there");
			//if the repeated coupon is found then increased the count and generate a new coupon
			count++;
			//char 1 that has to be added in coupon
			var b=Math.ceil((Math.random()*26));
			//char 2 that has to be added in coupon
		var a=String.fromCharCode(64+Math.floor(b+1));
		//char 3 that has to be added in coupon
		var c=Math.ceil((Math.random()*26))
		//char 4 that has to be added in coupon
		var d=String.fromCharCode(64+Math.floor(b+1));
		//coupon has the random value generated above
		var coupon=(a+b+c+d);

			console.log("Generate New One");
			}
		}
	}
//displaying the coupons in the array
for (i=0; i<arr.length; i++)
{
console.log(arr[i]);
}
//displaying the count of the coupon including the new if generated dude to replication
console.log("Generated count:"+count);
