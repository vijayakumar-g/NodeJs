var socket = io();
var currentdate = new Date();
var uname = localStorage.getItem("uname");

function sendMessage()
{
  var msg = document.getElementById('message').value;
  var now = currentdate.getDate() + "/" + (currentdate.getMonth() + 1) + "/" + currentdate.getFullYear() + " @ " +
    currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
  if (msg) {
    socket.emit('msg', {
      message: msg,
      user: uname,
      time: now
    });
  }
}
socket.on('messages', function(data) {
  if (data.message) {
    document.getElementById('message-container').innerHTML += '<div>' + data.message + '</div>'
  }
})
socket.on('newmsg', function(data) {
  if (data.message) {
    document.getElementById('message-container').innerHTML += '<div><b>' + data.user + '</b>: ' + data.message + '</div>'
  }
})

function display()
{
  document.body.innerHTML="database"
}
