/* onclick respective button id call respective the functions */
$('#add').click(submithandler);
$('#delete').click(deleteContact);
$('#update').click(update);

/*submit handler is used to post the values
that are entered in the form by the user
and that values are posted to the file using the post method */
function submithandler() {
  var testform = document.getElementById('form1');

  $.ajax({
    url: '/saving',
    type: 'POST',
    data: {
      firstName: form1.fname.value,
      lastName: form1.lname.value,
      address: form1.address.value,
      city: form1.city.value,
      state: form1.state.value,
      zip: form1.zip.value,
      mobile: form1.mobile.value
    },
    sucess: function(data) {
      alert("sucess");
    }
  });
  alert("Created Successfully");
}
/* using get method the values in the files are readed
and are stored in temporary array where the array is sorted based
on the name and displayed to the user*/
function sortbyName() {
  var array = [];
  var promise = $.ajax({
    url: '/get',
    type: 'GET'
  }).done(function(data) {
    for (var i = 0; i <= data.length; i++) {
      if (data[i] != null) {
        array.push(data[i]);
      }
    }
    var i, j;
    for (var i = 0; i < array.length - 1; i++) {
      for (j = 0; j < array.length - i - 1; j++) {
        if (array[j].firstName > array[j + 1].firstName) {
          swap(array, j, j + 1);
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
    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th"); // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }
    for (var i = 0; i < array.length; i++) {
      tr = table.insertRow(-1);
      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = array[i][col[j]];
      }
    }
    var divContainer = document.getElementById("div1");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  })

  console.log(promise);
}

/* using get method the values in the files are readed
and are stored in temporary array where the array is sorted based
on  zip code  and displayed to the user*/
function sortbyZip() {
  var array = [];
  var promise = $.ajax({
    url: '/get',
    type: 'GET'
  }).done(function(data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i] != null) {
        array.push(data[i]);
      }
    }
    var i, j;
    for (var i = 0; i < array.length - 1; i++) {
      for (j = 0; j < array.length - i - 1; j++) {
        if (array[j].zip > array[j + 1].zip) {
          swap(array, j, j + 1);
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
    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th"); // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }
    for (var i = 0; i < array.length; i++) {
      tr = table.insertRow(-1);

      for (var j = 0; j < col.length; j++) {
        var tabCell = tr.insertCell(-1);
        tabCell.innerHTML = array[i][col[j]];
      }

    }
    var divContainer = document.getElementById("div1");
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
  })

  console.log(promise);
}
/* function to swap two data*/
function swap(data, i, j) {
  var temp;
  temp = data[i];
  data[i] = data[j];
  data[j] = temp;
  return data;
}
/*searching for a particular value in a file and the searched values
are retrieved and display to the user*/
function search() {
  var search_value = document.getElementById('fname').value;
  var promise = $.ajax({
    url: '/search',
    type: 'POST',
    data: {
      firstname: search_value,
    }
  }).done(function(results)
  {
    console.log(results);
    document.getElementById('status').innerHTML = `Time: ${results.took}ms`;
    if (results.hits.total > 0) {
      var len = results.hits.total;
      var table = document.createElement("table");
      var tr = table.insertRow(-1);
      var th1 = document.createElement("th"); // TABLE HEADER.
      th1.innerHTML = "FirstName";
      var th2 = document.createElement("th");
      th2.innerHTML = "LastName";
      var th3 = document.createElement("th");
      th3.innerHTML = "Address";
      var th4 = document.createElement("th");
      th4.innerHTML = "City";
      var th5 = document.createElement("th");
      th5.innerHTML = "State";
      var th6 = document.createElement("th");
      th6.innerHTML = "Zip";
      var th7 = document.createElement("th");
      th7.innerHTML = "Mobile";
      tr.appendChild(th1);
      tr.appendChild(th2);
      tr.appendChild(th3);
      tr.appendChild(th4);
      tr.appendChild(th5);
      tr.appendChild(th6);
      tr.appendChild(th7);
      for (i = 0; i < len; i++) {
        tr = table.insertRow(-1);
        var tabCell1 = tr.insertCell(-1);
        tabCell1.innerHTML = results.hits.hits[i]._source.firstName;
        var tabCell2 = tr.insertCell(-1);
        tabCell2.innerHTML = results.hits.hits[i]._source.lastName;
        var tabCell3 = tr.insertCell(-1);
        tabCell3.innerHTML = results.hits.hits[i]._source.address;
        var tabCell4 = tr.insertCell(-1);
        tabCell4.innerHTML = results.hits.hits[i]._source.city;
        var tabCell5 = tr.insertCell(-1);
        tabCell5.innerHTML = results.hits.hits[i]._source.state;
        var tabCell6 = tr.insertCell(-1);
        tabCell6.innerHTML = results.hits.hits[i]._source.zip;
        var tabCell7 = tr.insertCell(-1);
        tabCell7.innerHTML = results.hits.hits[i]._source.mobile;
      }
      var divContainer = document.getElementById("div1");
      divContainer.innerHTML = " ";
      divContainer.appendChild(table);
    }
    if (results.hits.hits.length == 0 || results.hits.hits.length == null) {
      document.getElementById('status').innerHTML = "Contact Not Found";
    }
  })
  console.log(promise);
}
/*deleting the value from the file using post method to
post the name of object which should be deleted
and after searching from the the value is deleted */
function deleteContact() {
  var testform = document.getElementById('form2');
  $.ajax({
    url: '/deleting',
    type: 'POST',
    data: {
      firstName: form2.fname.value,
    },
    sucess: function(data) {
      alert("sucess");
    }
  });
  alert("Deleted Successfully");
}

/*updating the contact value in the file and make some changes */
function update() {
  var testform = document.getElementById('form2');
  $.ajax({
    url: '/updating',
    type: 'POST',
    data: {
      firstName: form2.fname.value,
      lastName: form2.lname.value,
      address: form2.address.value,
      city: form2.city.value,
      state: form2.state.value,
      zip: form2.zip.value,
      mobile: form2.mobile.value
    },
    sucess: function(data) {
      alert("Updated");
    }
  });
  alert("Updated Successfully");
}

/*using get method reading the values in the file
and displaying it to the user in proper manner */

function displaying() {
  var promise = $.ajax({
    url: '/get',
    type: 'GET'
  }).done(function(data) {
    var col = [];
    for (var i = 0; i < data.length; i++) {
      for (var key in data[i]) {
        if (col.indexOf(key) === -1) {
          col.push(key);
        }
      }
    }
    var table = document.createElement("table");
    var tr = table.insertRow(-1); // TABLE ROW.

    for (var i = 0; i < col.length; i++) {
      var th = document.createElement("th"); // TABLE HEADER.
      th.innerHTML = col[i];
      tr.appendChild(th);
    }
    for (var i = 0; i < data.length; i++) {
      if (data[i] != null) {
        tr = table.insertRow(-1);

        for (var j = 0; j < col.length; j++) {
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


function updateindex() {
  $.ajax({
    url: '/updateindex',
    type: 'POST',
  }).done(function(results)
{
  console.log("updated");
});
}
