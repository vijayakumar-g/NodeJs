function validateyear() {
  //readin the year value from the user
  var year = document.forms["myForm"]["year"].value;
  //checking for the valid year
  if (year == "" || year.length > 4 || year.length < 4) {
    alert("enter a valid year");
    return false;
  } else {
    //leap year condition is checked
    var condition1 = year % 4;
    // if yes/no then display the result
    if (condition1 == 0) {
      alert("It is leap year");
    } else {
      alert("Not a leap year");
    }
  }

}
