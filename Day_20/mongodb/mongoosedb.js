var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/mongoosedb',
{
  useMongoClient:true,
});
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(err, data)
{
  if(err)throw err;
});
var studentschema=mongoose.Schema({
  name:'string',
  college:'string',
  company:'string'
});
var student=mongoose.model('student',studentschema);
var obj1=new student({ name:'vijay',college:"MIT",company:'Intellect'});
obj1.save(function(err,obj)
{
  if(err) throw err;
console.log(obj);
});
