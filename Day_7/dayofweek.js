var week={
  0:"sunday",
  1:"monday",
  2:"tuesday",
  3:"wednesday",
  4:"thursday",
  5:"friday",
  6:"saturday"
}
var months={
  1:"jan",
  2:"feb",
  3:"mar",
  4:"apr",
  5:"may",
  6:"jun",
  7:"jul",
  8:"aug",
  9:"sept",
  10:"oct",
  11:"nov",
  12:"dec"
}
//reading the command line arguments data month and year
var date=+process.argv[2];
var month=+process.argv[3];
var year=+process.argv[4];

var y0 = Math.floor(year-(14-month)/12);
var x = Math.floor(y0+y0/4-y0/100 + y0/400);
var m0 = Math.floor(month + 12 * ((14 - month) / 12) - 2);
var day = Math.floor((date + x + (31*m0)/12) % 7);
console.log("the week of given date "+date+"/"+month+"/"+year+":"+week[day]+"-"+months[month]);
