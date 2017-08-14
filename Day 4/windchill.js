function windchill() {
  //reading the temperature and velocity from html given by user
  var temp = document.getElementById("tvalue").value;
  var velocity = document.getElementById("vvalue").value;

  var windchill;
  //calculating the windchill
  windchill = 35.74 + 0.62151 * temp + (0.4275 * temp - 35.75) * (Math.pow(velocity, 0.16));
  document.write("WindCHill:" + w);
}
