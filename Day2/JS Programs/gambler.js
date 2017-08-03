var stake=+process.argv[2];
var goal=+process.argv[2];
var no=+process.argv[2];

var i=1;var t=0;
var win=0;
var loss=0;
for(i=1; i<=no; i++)
{
			t++;
			console.log("trial no:"+i);
			var r=Math.random();
			if(r>0.5)
				{
				win++;
				stake++;
				console.log("winning "+win+" time");
				console.log("my current stake is increased to "+stake);
				if(stake==goal)
						{
						var trial=t;
						var winp=(win/t)*100;
						var lossp=(loss/t)*100;
						break;
						console.log("came out");
						}
					else
						{
						console.log("continuing");
						console.log("----------------------------------------");

						continue;
						}
				}
			else
				{
				loss++;
				stake--;
				console.log("loosing "+loss+" time");
				console.log("now my current stake is reduced to "+stake);
				console.log("----------------------------------------");
				}
			
		
			
			
}
console.log("trial is over");
console.log("win:"+win);
console.log("loss:"+loss);
var winp=(win/t)*100;
var lossp=(loss/t)*100;
console.log("win %:"+winp);
console.log("loss %:"+lossp);



 
