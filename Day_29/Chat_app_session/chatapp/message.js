var socket = io();
var currentdate = new Date();

function sessionEstablish()
{
var name=session().then(function (data) {
console.log(data);
}).catch(function (error) {
console.log(error);
});
}

/**function used to send the message to the database
and also broadcast the msg using socket broadcast**/

function sendMessage()
{
 var uname = localStorage.getItem("uname");
  var msg = document.getElementById('message').value;
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
  if (data.message) {
    document.getElementById('history').innerHTML += '<div><h4><span class="label label-default"><b>' + data.user + '</b>: ' + data.message + '</span></h4>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + data.time + '</div>';
  }
})

/*function retrieve the old messages whenever the user gets login into the
application**/
function session()
{
  return new Promise(function(resolve, reject) {
  var promise = $.ajax({
    url: '/checkUserLogin',
    type: 'GET',
    headers:{"Content-Type":"application/json"}
  }).done(function(data)
  {
    var name=data.name;
    //var name = name.charAt(0).toUpperCase() + name.slice(1);
    if(data.isLogin)
    {
    document.getElementById("status").innerHTML = name + "<br>Online";
    database();
    }
    else
    {
    if (window.location.href !== "index.html") {
      window.location.href = "index.html";
    }
  }
resolve(data);
  });

});
}
function database()
{
  $.ajax({
    url: '/history',
    type: 'GET'
  }).done(function(data)
  {
    for (i = 0; i < data.length; i++)
    {
     document.getElementById('history').innerHTML += '<div><h4><span class="label label-default"><b>' + data[i].user + '</b>: ' + data[i].message + '</span></h4>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;' + data[i].time + '</div>';
    }
});
}
function logout()
{
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
