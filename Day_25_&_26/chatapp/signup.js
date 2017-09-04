$('#signup').click(signup);

function signup() {
  var testform = document.getElementById('form1');
  $.ajax({
    url: '/logging',
    type: 'POST',
    data: {
      Name: form1.name.value,
      Password: form1.pwd.value
    }
  }).done(function(result) {
    console.log(result);
    //console.log(result);
    if (result.data == "false") {
      alert("User Already Registered");
    } else {
      alert("Registered Successfully");
    }
  })
}