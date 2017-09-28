var mongoose = require('mongoose')
var Schema = mongoose.Schema

var Contacts=mongoose.model('contacts',new Schema(
  {
    contactid:mongoose.Schema.Types.ObjectId,
    firstName:
    {
      type:String,
      trim:true,
      default:""
    },
    lastName:
    {
      type:String,
      trim:true,
      default:""
    },
    address:
    {
      type:String,
      trim:true,
      default:""
    },
    mobile:
    {
      type:String,
      trim:true,
      default:""
    }
  }
));
module.exports.Contacts=Contacts;
