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
