var socket = io();
/* onclick respective button id call respective the functions */
$('#signin').click(checklogin);
function checklogin()
{
  $.ajax({
      url: '/checkUserLogin',
      type: 'POST',
      data: {
        username: form1.name.value,
        password: form1.pwd.value,
        token:localStorage.getItem('token')
      }
    }).done(function(result)
  {
    console.log(result.token);
     if(result.status==true)
     {
       login();
     }
     else if(result.status==false)
     {
       alert("Already LoggedIn");
       window.location.href="chat1.html";
     }
  })
}
function login()
{
  $.ajax({
      url: '/login',
      type: 'POST',
      data: {
        username: form1.name.value,
        password: form1.pwd.value
        }
    }).done(function(result)
  {
  token=result.token;
  console.log(token);
  localStorage.setItem("token",token);
  if(result.status=="newlogin")
    {
      socket.emit("setUsername", result.username);
      socket.on('name', function(data) {
        uname = data.username;
        localStorage.setItem("uname", uname);
        window.location.href = "chat1.html";
      })
      }
      if (result.status == "false")
      {
         document.getElementById('error-container').innerHTML = "Invalid Username/Password !";
         localStorage.clear();
      }
      if (result.status == "register")
      {
         document.getElementById('error-container').innerHTML = "New User SignUp!";
         localStorage.clear();
      }
  })
}
$('[type=password]').keypress(function(e) {
  var $password = $(this),
      tooltipVisible = $('.tooltip').is(':visible'),
      s = String.fromCharCode(e.which);

  //Check if capslock is on. No easy way to test for this
  //Tests if letter is upper case and the shift key is NOT pressed.
  if ( s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey ) {
    if (!tooltipVisible)
    	$password.tooltip('show');
  } else {
    if (tooltipVisible)
    	$password.tooltip('hide');
  }

  //Hide the tooltip when moving away from the password field
  $password.blur(function(e) {
    $password.tooltip('hide');
  });
});

$('[type=text]').keypress(function(e) {
  var $text = $(this),
      tooltipVisible = $('.tooltip').is(':visible'),
      s = String.fromCharCode(e.which);

  //Check if capslock is on. No easy way to test for this
  //Tests if letter is upper case and the shift key is NOT pressed.
  if ( s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey ) {
    if (!tooltipVisible)
    	$text.tooltip('show');
  } else {
    if (tooltipVisible)
    	$text.tooltip('hide');
  }

  //Hide the tooltip when moving away from the password field
  $text.blur(function(e) {
    $text.tooltip('hide');
  });
});
