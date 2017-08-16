function harmonic() {
  //reading the number of the harmonic series gets to calculated
  var number = prompt("enter the N value", "");
  // initial harmonmic series value is 0
  var value = 0;
  //checking for nonzero
  if (number != 0) {
    for (var i = 1; i <= number; i++) {
      //  calculating the harmonic series
        value += 1 / i;
    }
    //display the harmonic series result
    document.write("Harmon Series for " + number + " is " + value);
  } else {
    //display the n value not null error
    document.write("N cannot be null value");
  }

}
