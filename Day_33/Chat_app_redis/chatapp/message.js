var socket = io();
var currentdate = new Date();

/**function used to send the message to the database
and also broadcast the msg using socket broadcast**/

function sendMessage() {
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
socket.on('newmsg', function(data) {
  var uname = localStorage.getItem("uname");
  if (data.message) {
    if (data.user == uname) {
      document.getElementById('history').innerHTML += '<div class=well id="setcolor" ><span class="chat-img pull-right">\
          <img src="https://png.icons8.com/contacts-filled/ios7/25" title="Contacts Filled" width="35" height="35" alt="User Avatar" class="img-circle" />\
      </span>\
          <div class="chat-body clearfix">\
              <div class="header">\
                   <small class="text-muted"><span class="glyphicon glyphicon-time"></span>' + data.time + '</small>\
              </div>\
              <div class="pull-right primary-font" ><p>' + data.message + '</p><div>\
          </div></div><br>'
    } else {
      document.getElementById('history').innerHTML += '<div class=well><span class="chat-img pull-left">\
        <img src="https://png.icons8.com/contacts-filled/ios7/25" title="Contacts Filled" width="35" height="35" alt="User Avatar" class="img-circle" />\
      </span>\
        <div class="chat-body clearfix">\
            <div class="header">\
                    <strong class="primary-font">' + data.user + '</strong> <small class="pull-right text-muted">\
                    <span class="glyphicon glyphicon-time"></span>' + data.time + '</small>\
            </div>\
            <p>' + data.message + '</p>\
        </div></div><br>'
    }

  }
})

function database() {
  $.ajax({
    url: '/history',
    type: 'GET'
  }).done(function(data)
  {
    var name = localStorage.getItem("uname");
    if (name == null) {
      window.location.href = "index.html";
  }

    var sname = name[0].toUpperCase() + name.slice(1);
    var userslen=data.users.length;
    for(i=0; i<userslen; i++)
    {
      document.getElementById('status').innerHTML += data.users[i]+',&nbsp';
    }
    document.getElementById('status').innerHTML+='<br>&emsp;&emsp;&emsp;&emsp;Online';

 var len=data.db.length;
    for (i = 0; i < len; i++)
     {

      if (data.db[i].user == name) {
        var newElement = document.createElement('div');
        newElement.innerHTML = '<div class=well id="setcolor"> <span class="chat-img pull-right">\
        <img src="https://png.icons8.com/contacts-filled/ios7/25" title="Contacts Filled" width="35" height="35" alt="User Avatar" class="img-circle" />\
    </span>\
        <div class="chat-body clearfix">\
            <div class="header">\
                 <small class="text-muted"><span class="glyphicon glyphicon-time"></span>' + data.db[i].time + '</small>\
            </div>\
            <div class="pull-right primary-font"><p>' + data.db[i].message + '</p><div>\
        </div><div>'
        document.getElementById('history').appendChild(newElement);
      } else {
        var newElement = document.createElement('div');
        newElement.innerHTML = '<div class=well><span class="chat-img pull-left">\
          <img src="https://png.icons8.com/contacts-filled/ios7/25" title="Contacts Filled" width="35" height="35" alt="User Avatar" class="img-circle" />\
        </span>\
          <div class="chat-body clearfix">\
              <div class="header">\
                      <strong class="primary-font">' + data.db[i].user + '</strong>\
                      <small class="pull-right text-muted">\
                      <span class="glyphicon glyphicon-time"></span>' + data.db[i].time+ '</small>\
              </div>\
              <p>' + data.db[i].message + '</p>\
          </div></div>'
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
  }).done(function(data) {
    if (data.status == true) {
      window.location.href = "index.html";
    }
  });
}
