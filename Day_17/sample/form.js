$('#add').click(submithandler);
$('#delete').click(deleteContact);
$('#update').click(update);
function submithandler()
{
  var testform=document.getElementById('form1');

  $.ajax({
    url:'/saving',
    type:'POST',
    data: {
      firstName:form1.fname.value,
      lastName:form1.lname.value,
      address:form1.address.value,
      city:form1.city.value,
      state:form1.state.value,
      zip:form1.zip.value,
      mobile:form1.mobile.value
    },
    sucess: function(data)
    {
        alert("sucess");
    }
  });
  alert("Created Successfully");
}
function sortbyName()
{
  var array=[];
  var promise = $.ajax({
    url:'/get',
    type:'GET'
  }).done(function(data)
  {
    for (var i = 0; i < data.length; i++)
    {
        array.push(data[i]);
    }
    var i, j;
    for (var i = 0; i < array.length - 1; i++)
    {
      for (j = 0; j <array.length - i - 1; j++)
      {
        if (array[j].firstName > array[j + 1].firstName)
        {
          swap(array,j, j + 1);
        }
      }
    }
    console.log(array);
    var col = [];
    for (var i = 0; i < array.length; i++) {
        for (var key in array[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
      var table = document.createElement("table");
      var tr = table.insertRow(-1);                   // TABLE ROW.

      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }
      for (var i = 0; i < array.length; i++) {

        if(data[i]!=null)
        {
          tr = table.insertRow(-1);

          for (var j = 0; j < col.length; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = array[i][col[j]];
          }
      }
      }
      var divContainer = document.getElementById("div1");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
})

console.log(promise);
}
function sortbyZip()
{
  var array=[];
  var promise = $.ajax({
    url:'/get',
    type:'GET'
  }).done(function(data)
  {
    for (var i = 0; i < data.length; i++)
    {
        array.push(data[i]);
    }
    var i, j;
    for (var i = 0; i < array.length - 1; i++)
    {
      for (j = 0; j <array.length - i - 1; j++)
      {
        if (array[j].zip > array[j + 1].zip)
        {
          swap(array,j, j + 1);
        }
      }
    }
    var col = [];
    for (var i = 0; i < array.length; i++) {
        for (var key in array[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
      var table = document.createElement("table");
      var tr = table.insertRow(-1);                   // TABLE ROW.

      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }
      for (var i = 0; i < array.length; i++) {
        if(data[i]!=null)
        {
          tr = table.insertRow(-1);

          for (var j = 0; j < col.length; j++) {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = array[i][col[j]];
          }
      }
      }
      var divContainer = document.getElementById("div1");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
})

console.log(promise);
}

function swap(data,i, j)
{
  var temp;
  temp = data[i];
  data[i] = data[j];
  data[j] = temp;
  return data;
}
function search()
{
  var First_name=document.getElementById('fname').value;
  var promise = $.ajax({
    url:'/get',
    type:'GET'
  }).done(function(data)
  {
    var flag = 0;
    for (i = 0; i < data.length; i++) {
      if (data[i]!= null)
        {
        if(data[i].firstName == First_name) {
        flag = 1;
        document.write(data[i].firstName+"<br>");
        document.write(data[i].lastName+"<br>");
        document.write(data[i].address+"<br>");
        document.write(data[i].city+"<br>");
        document.write(data[i].state+"<br>");
        document.write(data[i].zip+"<br>");
        document.write(data[i].mobile+"<br>");
        }
    }
  }
    if (flag == 0) {
      document.write("Contact Not Found");
    }
  })
console.log(promise);
}

function deleteContact()
{
  var testform=document.getElementById('form2');
    $.ajax({
    url:'/deleting',
    type:'POST',
    data: {
      firstName:form2.fname.value,
      },
    sucess: function(data)
    {
      alert("sucess");
    }
  });
  alert("Deleted Successfully");
}
function update()
{
  var testform=document.getElementById('form2');
    $.ajax({
    url:'/updating',
    type:'POST',
    data: {
      firstName:form2.fname.value,
      lastName:form2.lname.value,
      address:form2.address.value,
      city:form2.city.value,
      state:form2.state.value,
      zip:form2.zip.value,
      mobile:form2.mobile.value
      },
    sucess: function(data)
    {
      alert("Updated");
    }
  });
  alert("Updated Successfully");
}
function displaying()
{
  var promise = $.ajax({
    url:'/get',
    type:'GET'
  }).done(function(data)
  {
    var col = [];
    for (var i = 0; i < data.length; i++) {
        for (var key in data[i]) {
            if (col.indexOf(key) === -1) {
                col.push(key);
            }
        }
    }
      var table = document.createElement("table");
      var tr = table.insertRow(-1);                   // TABLE ROW.

      for (var i = 0; i < col.length; i++) {
          var th = document.createElement("th");      // TABLE HEADER.
          th.innerHTML = col[i];
          tr.appendChild(th);
      }
      for (var i = 0; i < data.length; i++)
      {
        if(data[i]!=null)
        {
          tr = table.insertRow(-1);

          for (var j = 0; j < col.length; j++)
          {
              var tabCell = tr.insertCell(-1);
              tabCell.innerHTML = data[i][col[j]];
          }
      }
    }
      var divContainer = document.getElementById("div1");
      divContainer.innerHTML = "";
      divContainer.appendChild(table);
  })
console.log(promise);
}
