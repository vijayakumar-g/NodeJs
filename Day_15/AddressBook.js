var fs = require('fs')
//assigning a file to variable
var file = 'Address.json'
//reading the json file for further proces
var data = "";
data = JSON.parse(fs.readFileSync(file));
var addressbook = {
  first_name: "",
  last_name: "",
  address: "",
  city: "",
  state: "",
  zip: "",
  phone_no: "",
};
var contacts = [];

function create() {
  var first_name = document.getElementById("fname").value;
  var last_name = document.getElementById("lname").value;
  var add = document.getElementById("address").value;
  var cit = document.getElementById("city").value;
  var sta = document.getElementById("state").value;
  var zp = document.getElementById("zip").value;
  var phone_no = document.getElementById("phone_no").value;
  data.Address.push({
    "fname": first_name,
    "lname": last_name,
    "address": add,
    "city": cit,
    "state": sta,
    "zip": zp,
    "mobile": phone_no
  });
}

function delete_contact(First_name) {

  for (i = 0; i < data.Address.length; i++) {
    if (data.Address[i].fname === First_name) {
      var deleted_contact = data.Address[i].fname;
      delete data.Address[i];
    }
  }
}

function Search_contact(First_name) {
  var flag = 0;
  for (i = 0; i < data.Address.length; i++) {
    if (data.Address[i].fname != null && data.Address[i].fname == First_name) {
      flag = 1;
      console.log("Contact Found");
    }
  }
  if (flag == 0) {
    console.log("Contact Not Found");
  }
}

function Display_Contact() {
  for (i = 0; i < data.Address.length; i++) {

    if (data.Address[i] != null) {
      console.log("\n");
      console.log("Name      :" + data.Address[i].fname);
      console.log("lname    :" + data.Address[i].lname);
      console.log("address:" + data.Address[i].address);
    }
  }
}

function Sort_contact() {
  var i, j;
  for (var i = 0; i < data.Address.length - 1; i++)
    for (j = 0; j < data.Address.length - i - 1; j++)
      if (data.Address[j].fname > data.Address[j + 1].fname) {
        swap(j, j + 1);
      }

  return data;
}

function swap(i, j) {
  var temp;
  temp = data.Address[i];
  data.Address[i] = data.Address[j];
  data.Address[j] = temp;
}

function Edit_Contact(name, given) {
  for (i = 0; i < data.Address.length; i++) {
    if (data.Address[i].fname == name) {
      data.Address[i].lname = given;
      break;
    }
  }
}