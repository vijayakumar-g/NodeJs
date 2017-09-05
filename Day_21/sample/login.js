/* onclick respective button id call respective the functions */
$('#signin').click(login);
$('#signup').click(validate);
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
function validate()
{
  var name=document.getElementById("name").value;
  var pwd=document.getElementById("pwd").value;
  var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,8}$/;
  if(name.length==0)
  {
    document.getElementById("error").innerHTML="Not valid user name";
  }
  else if(name.length<5)
  {
    document.getElementById("error").innerHTML="Minimum Five Characters";
  }
  else if(/^[a-zA-Z0-9- ]*$/.test(name) == false)
  {
      document.getElementById("error").innerHTML="Username contains illegal characters";
  }
  else if(pwd.length==0)
  {
    document.getElementById("error").innerHTML="Not valid password";
  }
  else if(pwd.length<6)
  {
    document.getElementById("error").innerHTML="Password length minimum 6 characters";
  }
  else if(!pattern.test(pwd))
  {
  document.getElementById("error").innerHTML="Password should contain atleast one number and one special character";
  }
  else
  {
    signup();
  }
}
