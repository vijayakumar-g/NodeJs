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

function create(First_name, Last_name, Address, City, State, Zip, Phone_no) {
  addressbook = {
    first_name: First_name,
    last_name: Last_name,
    address: Address,
    city: City,
    state: State,
    zip: Zip,
    phone_no: Phone_no
  };
  contacts.push(addressbook);
  return this;
}

function delete_contact(First_name) {

  for (i = 0; i < contacts.length; i++) {
    if (contacts[i].first_name === First_name) {
      var deleted_contact = contacts[i].first_name;
      delete contacts[i];
    }
  }
}

function Search_contact(First_name) {
  var flag = 0;
  for (i = 0; i < contacts.length; i++) {
    if (contacts[i] != null && contacts[i].first_name == First_name) {
      flag = 1;
      console.log("Contact Found");
    }
  }
  if (flag == 0) {
    console.log("Contact Not Found");
  }
}