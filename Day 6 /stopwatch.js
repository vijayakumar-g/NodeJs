var startTime = null;
var stopTime = null;
var running = false;

function getTime() {
  var day = new Date();
  document.getElementById("stop").innerHTML = day.toLocaleTimeString();
  return day.getTime();


}

function start() {
  document.write("hi");
  if (running == true)
    return;
  else if (startTime != null)
    stopTime = null;

  running = true;
  startTime = getTime();

  return startTime;

}

function stop() {
  if (running == false)
    return;

  stopTime = getTime();
  running = false;

  return stopTime;

}
function duration() {
  if (startTime == null || stopTime == null)
    return 'Undefined';
  else
  document.write((stopTime-startTime) / 1000);


 }
