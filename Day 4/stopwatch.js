//keeping the starttime,stoptime running variable as null
var startTime = null;
var stopTime = null;
var running = false;

function getTime() {
  //reading the sysdate and time using this date function
  var day = new Date();
  //during stop the current time is noted
  document.getElementById("stop").innerHTML = day.toLocaleTimeString();
  //returning the time
  return day.getTime();
}

function start() {
  //if the clock is already started then running is true
  if (running == true)
    return;
  //checking that clock is started
  else if (startTime != null)
    stopTime = null;

  //if abopve conditons fails then the running is set as true
  running = true;
  //getting the current system time when the start function is call
  startTime = getTime();

  return startTime;

}

function stop() {
  //if the clock is not started then running is false
  if (running == false)
    return;
  //getting the current system time when the stop function is call
  stopTime = getTime();
  running = false;

  return stopTime;

}

function duration() {
  //if start and stop time is null then stopwatch is not on
  if (startTime == null || stopTime == null)
    return 'Undefined';
  else
    //claculate the difference between the stop and start time to find the duration 
    document.write((stopTime - startTime) / 1000);


}