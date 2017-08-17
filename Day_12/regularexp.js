//reading the user input message inot a string
var message = "Hello <<name>>,we have your full name as <<full name>> in our system. your contact number is 91-xxxxxxxxxx.Please let us know in case of any clarification Thank you BridgeLabz xx-xx-xxxx."
//storing the pattern that found in the message to be changed
var pattern1 = /<<name>>/i;
var pattern2 = /<<full name>>/i;
var pattern3 = /91-xxxxxxxxxx/i;
var pattern4 = /xx-xx-xxxx/i;
//replacing every pattern with the correct value using regex methods
var result = message.replace(pattern1, "vijay");
var result = result.replace(pattern2, "vijayakumar");
var result = result.replace(pattern3, "91-9750786991");
var result = result.replace(pattern4, "14/07/2017");
console.log(result);