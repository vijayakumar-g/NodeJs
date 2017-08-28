/* onclick respective button id call respective the functions */
$('#signin').click(login);
$('#signup').click(signup);
$('#remove').click(remove);
$('#update').click(update);

/*submit handler is used to post the values
that are entered in the form by the user
and that values are posted to the file using the post method */
function signup()
{
  var testform = document.getElementById('form1');
  $.ajax({
    url: '/logging',
    type: 'POST',
    data: {
      Name: form1.name.value,
      Password:form1.pwd.value
    }
  }).done(function(result)
{
  console.log(result);
  //console.log(result);
  if(result.data=="false")
  {
    alert("User Already Registered");
  }
  else {
    alert("Registered Successfully");
  }
})
}
function remove()
{
  var testform = document.getElementById('form1');
  $.ajax({
    url: '/deleting',
    type: 'POST',
    data: {
      Name: form1.name.value,
      Password:form1.pwd.value
    }
  }).done(function(result)
{
  console.log(result);
  if(result.data=="true")
  {
    alert("User Removed");
  }
  else {
        alert("Sign Up First ");
  }
})
}
function update()
{
  var testform = document.getElementById('form1');
  $.ajax({
    url: '/updating',
    type: 'POST',
    data: {
      Name: form1.name.value,
      Password:form1.pwd.value
    }
  }).done(function(result)
{
  console.log(result);
  if(result.data=="true")
  {
    alert("Password Changed");
  }
  if(result.data=="false") {
    alert("Sign Up First ");
  }
})
}

function login()
{
  var testform = document.getElementById('form1');
  $.ajax({
    url: '/signingin',
    type: 'POST',
    data: {
      Name: form1.name.value,
      Password:form1.pwd.value
    }
  }).done(function(result)
{
  console.log(result);
  if(result.data=="false")
  {
    alert("Login Successfully");
  }
  else {
    alert("New User Signup");
  }
})
}
