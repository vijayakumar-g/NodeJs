var uuid = require('uuid');
var secretKey = uuid.v4();
var CryptoJS = require("crypto-js");

// Encrypt
var ciphertext = CryptoJS.AES.encrypt('my message', secretKey);

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), secretKey);
var plaintext = bytes.toString(CryptoJS.enc.Utf8);

console.log(plaintext);
