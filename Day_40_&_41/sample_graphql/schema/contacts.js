var mongoose = require('mongoose')
var Schema = mongoose.Schema
var graphql = require('graphql')
var GraphQLObjectType = graphql.GraphQLObjectType
var GraphQLBoolean = graphql.GraphQLBoolean
var GraphQLID = graphql.GraphQLID
var GraphQLString = graphql.GraphQLString
var GraphQLDate = require('graphql-date')
var GraphQLInt = graphql.GraphQLInt
var GraphQLFloat = graphql.GraphQLFloat
var GraphQLList = graphql.GraphQLList
var GraphQLNonNull = graphql.GraphQLNonNull
var GraphQLSchema = graphql.GraphQLSchema
var GraphQLInputObjectType = graphql.GraphQLInputObjectType
var {Contacts}=require('./addresschema')
mongoose.Promise = Promise;
var COMPOSE_URI_DEFAULT = 'mongodb://localhost:27017/sample'
mongoose.connect(process.env.COMPOSE_URI || COMPOSE_URI_DEFAULT,
  {useMongoClient: true}).catch(function (error) {
  console.error('mongo connection fail::',error);
}).then(function(mongodb) {
  console.log('mongo connected');
  });

var Contactstype=new GraphQLObjectType(
  {
    fields:()=>(
      {
        contactid:
        {
          type:GraphQLID,
          description:"Contacts id"
        },
        firstName:
        {
          type:GraphQLString,
          description:"Username"
        }

      })
  })

  var promiseListAll=()=>
  {
    return new Promise((resolve,reject) =>
    {
      Contacts.find((err,data)=>
      {
        if(err)reject(err);
        else resolve(data);
      })
    })
  }

  var Querytype=new GraphQLObjectType(
    {
      name:"Query",
      fields:() =>({
        contactlist:{
          type:new GraphQLList(Contactstype),
          resolve: ()=>
          {
            return promiseListAll()
          }
        }
      })
    })

    var MutationAddContacts={
      type:Contactstype,
      description:"Add New Contact",
      args:
      {
        firstName:
        {
          name:'Person Name',
          type:new GraphQLNonNull(GraphQLString)
        }
    },resolve:(root,args) =>
    {
      var newContact=new Contacts(args);
      newContact.contactid=newContact._id;
      return new Promise((resolve, reject)=> {
        newContact.save(function(err)
      {
        if(err)reject(err);
        else resolve(newContact);
      });
      });
    }
  }

var Mutationtype=new GraphQLObjectType(
  {
    name:'Mutation',
    fields:
    {
      addContact:MutationAddContacts
    }
  });

module.exports=new GraphQLSchema({
    query:Querytype,
    mutation:Mutationtype
  })
