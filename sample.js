var express = require('express');
var app = express();
var port = process.env.PORT || 6056;
var mongoose = require('mongoose');

var db=require('./config.js');

console.log(db.database.url);
