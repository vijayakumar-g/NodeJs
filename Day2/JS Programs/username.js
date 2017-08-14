function read() {
  //reading the user name form the html
  var username = prompt("please enter your name", "");

  //basic username condition
  if (username != null && username.length >= 3) {
    //displayin the result
    document.write("Hello " + username + " How are you?");
  } else {
    //char is less print the error
    document.write("Char is less than 3");
  }
}
