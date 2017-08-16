//reading the stake value of the player
var stake = +process.argv[2];
//reading that how much the player should wins in it
var goal = +process.argv[3];
//reading the number of times player has the chance
var number = +process.argv[4];

var i = 1;
var time_count = 0;
//variable to count the win
var win = 0;
//variable to count the loss
var loss = 0;
for (i = 1; i <= number; i++) {
  //incrementing the trial
  time_count++;
  console.log("trial no:" + i);
  //random function to get a chance
  var random = Math.random();
  if (random > 0.5) {
    //if person get a chance wins increment the win count
    win++;
    //increment the stake value also
    stake++;
    //display the winning time and the stake value that got increased
    console.log("winning " + win + " time");
    console.log("my current stake is increased to " + stake);
    //hecking for the goal condition that the player has to reached
    if (stake == goal) {
      //then make the trial time to trial
      var trial = time_count;
      //calculating the winning possibilities
      var winpossibilities = (win / time_count) * 100;
      //calculating the loosing possibilities
      var losspossibilities = (loss / time_count) * 100;
      break;
      console.log("came out");
    } else {
      //continuing the game to win /loss
      console.log("continuing");
      console.log("----------------------------------------");

      continue;
    }
  } else {
    //if person gets loss then his loss count should be incremented
    loss++;
    //stake value has to be decreased
    stake--;
    //displaying those values
    console.log("loosing " + loss + " time");
    console.log("now my current stake is reduced to " + stake);
    console.log("----------------------------------------");
  }




}
console.log("trial is over");
console.log("win:" + win);
console.log("loss:" + loss);
var winpossibilities = (win /time_count) * 100;
var losspossibilities = (loss /time_count) * 100;
console.log("win %:" + winpossibilities);
console.log("loss %:" + losspossibilities);
