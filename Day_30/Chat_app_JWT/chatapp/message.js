var socket = io();
var currentdate = new Date();

/**function used to send the message to the database
and also broadcast the msg using socket broadcast**/

function sendMessage()
{
 var uname = localStorage.getItem("uname");
  var msg = document.getElementById('btn-input').value;
  var hours = currentdate.getHours();
  var minutes = currentdate.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var Time = hours + ':' + minutes + ' ' + ampm;
  if (msg) {
    socket.emit('msg', {
      message: msg,
      user: uname,
      time: Time
    });
  }
}
/* socket which is reading the message from the user**/
socket.on('messages', function(data) {
  if (data.message) {
    document.getElementById('message-container').innerHTML += '<div>' + data.message + '</div>'
  }
})

/**broadcasting the message to everyone**/
socket.on('newmsg', function(data)
{
   var uname = localStorage.getItem("uname");
     if (data.message)
  {
    if(data.user==uname)
    {
      document.getElementById('history').innerHTML+='<div class=well><span class="chat-img pull-right">\
          <img src="http://placehold.it/50/FA6F57/fff&text=U" alt="User Avatar" class="img-circle" />\
      </span>\
          <div class="chat-body clearfix">\
              <div class="header">\
                   <small class="text-muted"><span class="glyphicon glyphicon-time"></span>'+data.time +'</small>\
              </div>\
              <div class="pull-right primary-font"><p>' + data.message + '</p><div>\
          </div></div><br>'
      }
      else
      {
        document.getElementById('history').innerHTML+='<div class=well><span class="chat-img pull-left">\
        <img src="http://placehold.it/50/55C1E7/fff&text=M" alt="User Avatar" class="img-circle" />\
      </span>\
        <div class="chat-body clearfix">\
            <div class="header">\
                    <strong class="primary-font">'+data.user+'</strong> <small class="pull-right text-muted">\
                    <span class="glyphicon glyphicon-time"></span>'+data.time +'</small>\
            </div>\
            <p>' + data.message + '</p>\
        </div></div><br>'
      }

}
})
function database()
{
  $.ajax({
    url: '/history',
    type: 'GET'
  }).done(function(data)
  {
    var name = localStorage.getItem("uname");
    var sname = name[0].toUpperCase() + name.slice(1);
  document.getElementById('status').innerHTML+=sname+'<br>&emsp;Online';

    for (i = 0; i < data.length; i++)
    {

if(data[i].user==name)
{
    var newElement=document.createElement('div');
    newElement.innerHTML ='<div class=well> <span class="chat-img pull-right">\
        <img src="http://placehold.it/50/FA6F57/fff&text=U" alt="User Avatar" class="img-circle" />\
    </span>\
        <div class="chat-body clearfix">\
            <div class="header">\
                 <small class="text-muted"><span class="glyphicon glyphicon-time"></span>'+data[i].time +'</small>\
            </div>\
            <div class="pull-right primary-font"><p>' + data[i].message + '</p><div>\
        </div><div><br>'
          document.getElementById('history').appendChild(newElement);
        }
        else
        {
          var newElement=document.createElement('div');
          newElement.innerHTML ='<div class=well><span class="chat-img pull-left">\
          <img src="http://placehold.it/50/55C1E7/fff&text=M" alt="User Avatar" class="img-circle" />\
        </span>\
          <div class="chat-body clearfix">\
              <div class="header">\
                      <strong class="primary-font">'+data[i].user+'</strong>\
                      <small class="pull-right text-muted">\
                      <span class="glyphicon glyphicon-time"></span>'+data[i].time +'</small>\
              </div>\
              <p>' + data[i].message + '</p>\
          </div></div><br>'
          document.getElementById('history').appendChild(newElement);
        }

}

});
}
function logout()
{
    localStorage.clear();
    var promise = $.ajax({
    url: '/logout',
    type: 'GET',
  }).done(function(data)
{
  if(data.status==true)
  {
    window.location.href="index.html";
  }
});
}
