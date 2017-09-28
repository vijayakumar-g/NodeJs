/*clientid:1097826441573-ph1r8sdi6l0lhvjnurhbk143lq2ob4hi.apps.googleusercontent.com
client:secret:MUGKByT_EGJkoyjgdiqKaTAf
refresh token:1/JSZzIZSqHoF0Ore9RCNsUZEwVsx0FA0hDrWEHXWxprs
*/
var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');

var smtpTransport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
xoauth2: xoauth2.createXOAuth2Generator({
      user: "vkgvijay4@gmail.com", // Your gmail address.
      clientId: "1097826441573-ph1r8sdi6l0lhvjnurhbk143lq2ob4hi.apps.googleusercontent.com",
      clientSecret: "MUGKByT_EGJkoyjgdiqKaTAf",
      refreshToken: "1%2FJSZzIZSqHoF0Ore9RCNsUZEwVsx0FA0hDrWEHXWxprs"
    })
  }
  });

var mailOptions = {
  from: "vkgvijay4@gmail.com",
  to: "vkgvijay4@gmail.com",
  subject: "Hello",
  generateTextFromHTML: true,
  html: "<b>Hello world</b>"
};

smtpTransport.sendMail(mailOptions, function(error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
  smtpTransport.close();
});
