function create()
{
  var first_name = document.getElementById("fname").value;
  var last_name= document.getElementById("lname").value;
  var add= document.getElementById("address").value;
  var cit= document.getElementById("city").value;
  var sta= document.getElementById("state").value;
  var zp= document.getElementById("zip").value;
  var phone_no= document.getElementById("phone_no").value;
//document.write("calling");
$.getJSON( "Address.json", function( data ) {
  // now data is JSON converted to an object / array for you to use.
data.push({
    "fname": first_name,
    "lname":last_name,
    "address": add,
    "city": cit,
    "state": sta,
    "zip":zp,
    "mobile":phone_no
 });
});
}
function read()
{
  $(document).ready(function ()
   {
    $('#get-data').click(function ()
     {
      $.getJSON('Address.json', function (data)
      {
        var items = data.Address.map(function (item)
        {
          document.write(item.fname+" "+item.lname+"<br>");
          document.write(item.address+" "+item.city+"<br>");
          document.write(item.state+" "+item.zip+"<br>");
          document.write(item.mobile);
        });
      });
    });
  });
}
