var week={
  0:"sunday",
  1:"monday",
  2:"tuesday",
  3:"wednesday",
  4:"thursday",
  5:"friday",
  6:"saturday"
}
var month={
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
var d=+process.argv[2];
var m=+process.argv[3];
var y=+process.argv[4];

var y0 = Math.floor(y-(14-m)/12);
var x = Math.floor(y0+y0/4-y0/100 + y0/400);
var m0 = Math.floor(m + 12 * ((14 - m) / 12) - 2);
var day = Math.floor((d + x + (31*m0)/12) % 7);
console.log("the week of given date "+d+"/"+m+"/"+y+":"+week[day]+"-"+month[m]);

// d=2+ ((153 * (month + 12 * ((14 - month) / 12) - 3) + 2) / 5)+
// (365 * (year + 4800 -((14-month) / 12)))+ ((year + 4800 - ((14 - month) / 12)) / 4)-
// ((year + 4800 - ((14 - month) /12)) / 100)+ ((year + 4800 - ((14 - month) / 12)) / 400)- 32045;
//