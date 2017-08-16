function flip() {
  //read the number of times the coin to be flipped
  var number = prompt("Enter the no of times the coin flips", "");
  var i;
  //variable to store the tail counts
  var tails = 0;
  //variable to store the heads counts
  var head = 0;;
  for (i = 0; i < number; i++) {
    //random function is called randomly the coin is tossed
    var random_m = Math.random();
    //checking for the condition to claculate the randomness of coin flip
    if (random_m < 0.5) {
      //tails count
      tails++;
    } else {
      //heads count
      head++;
    }
  }
  //displaying to the user the heads and tails count
  alert(tails + "%Head " + head + "%Tails");
}