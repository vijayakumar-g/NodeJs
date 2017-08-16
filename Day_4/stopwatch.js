
var startTime = null;
var stopTime = null;
var running = false;

//reading the sysdate and time using this date function
function getTime() {
  
  var day = new Date();
  
    document.getElementById("stop").innerHTML = day.toLocaleTimeString();
    return day.getTime();
}
/*start() to note the current system when the stop watch is started */
function start() {
    if (running == true)
    return;
  
  else if (startTime != null)
    stopTime = null;

  
  running = true;
    startTime = getTime();

  return startTime;

}
/*return the current system time when the stopwatch is stopped*/
function stop() {
  
  if (running == false)
    return;
  
  stopTime = getTime();
  running = false;

  return stopTime;

}
   //claculate the difference between the stop and start time to find the duration 
function duration() {
 
  if (startTime == null || stopTime == null)
    return 'Undefined';
  else
 
    document.write((stopTime - startTime) / 1000);


}