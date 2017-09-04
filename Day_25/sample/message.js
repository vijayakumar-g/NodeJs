var socket = io();
var currentdate = new Date();
var uname = localStorage.getItem("uname");
var name=capitalizeFirstLetter(uname);
console.log(uname);

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
  document.getElementById("history").innerHTML="database";
}
function capitalizeFirstLetter(string)
{
    var name=string[0].toUpperCase() + string.slice(1);
    document.getElementById("status").innerHTML=name+"<br>Online";
    var promise = $.ajax({
      url: '/get',
      type: 'GET'
    }).done(function(data)
     {
       for(i=0; i<data.length; i++)
       {
//         document.getElementById('message-container').innerHTML += '<span class="label label-default"><b>' + data[i].user + '</b>: ' + data[i].message + '</span></div>'
       }
  })
    console.log(promise);
    return true;

}
