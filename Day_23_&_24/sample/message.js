var socket = io();

function sendMessage(user) {

  var msg = document.getElementById('message').value;
  if (msg) {
    socket.emit('msg', {
      message: msg,
      user: user
    });
  }
}
socket.on('newmsg', function(data) {
  if (data.message) {
    document.getElementById('message-container').innerHTML += '<div><b>' + data.user + '</b>: ' + data.message + '</div>'
  }
})
