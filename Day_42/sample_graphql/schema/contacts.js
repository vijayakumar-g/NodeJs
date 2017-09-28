var mongoose = require('mongoose')
var Schema = mongoose.Schema
var graphql = require('graphql')
var graphQLObjectType = graphql.GraphQLObjectType
var graphQLBoolean = graphql.GraphQLBoolean
var graphQLID = graphql.GraphQLID
var graphQLString = graphql.GraphQLString
var graphQLDate = require('graphql-date')
var graphQLInt = graphql.GraphQLInt
var graphQLFloat = graphql.GraphQLFloat
var graphQLList = graphql.GraphQLList
var graphQLNonNull = graphql.GraphQLNonNull
var graphQLSchema = graphql.GraphQLSchema
var graphQLInputObjectType = graphql.GraphQLInputObjectType
var {Contacts}=require('./addresschema')
mongoose.Promise = Promise;
var url = 'mongodb://localhost:27017/graphql_db'
mongoose.connect(url,{useMongoClient: true}).catch(function (error) {
  console.error('mongo connection fail::',error);
}).then(function(mongodb) {
  console.log('mongo connected');
  });


var Contactstype=new graphQLObjectType(
  {
    name:'contacts',
    fields:()=>(
      {
        contactid:
        {
          type:graphQLID,
          description:"Contacts id"
        },
        firstName:
        {
          type:graphQLString,
          description:"FirstName"
        },
        lastName:
        {
          type:graphQLString,
          description:"LastName"
        },
        address:
        {
          type:graphQLString,
          description:"Address"
        },
        mobile:
        {
          type:graphQLString,
          description:"Mobile Number"
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

  var Querytype=new graphQLObjectType(
    {
      name:"Query",
      fields:() =>({
        contactlist:{
          type:new graphQLList(Contactstype),
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
          name:'Person FirstName',
          type:new graphQLNonNull(graphQLString)
        },
        lastName:
        {
          name:'Person LastName',
          type:new graphQLNonNull(graphQLString)
        },
        address:
        {
          name:'Person Address',
          type:new graphQLNonNull(graphQLString)
        },
        mobile:
        {
          name:'Person Mobile Number',
          type:new graphQLNonNull(graphQLString)
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
  var MutationUpdateContacts=
  {
    type:Contactstype,
    description:"Update Contact Details",
    args:
    {
      contactid:
      {
        name:"Id of the Person",
        type:new graphQLNonNull(graphQLString)
      },
      firstName:
      {
        name:'Person FirstName',
        type:new graphQLNonNull(graphQLString)
      },
      lastName:
      {
        name:'Person LastName',
        type:new graphQLNonNull(graphQLString)
      },
      address:
      {
        name:'Person Address',
        type:new graphQLNonNull(graphQLString)
      },
      mobile:
      {
        name:'Person Mobile Number',
        type:new graphQLNonNull(graphQLString)
      }
  }, resolve :(root,args)=>
  {
    return new Promise((resolve,reject)=>
    {
      Contacts.findOneAndUpdate({_id:args.contactid},args,{"new":true},function(err,data)
    {
      if(err) reject(err)
      else resolve(data);
    })
  })
  }
}
var MutationDeleteContacts =
{
  type:Contactstype,
  description:"Delete Contact",
  args:
  {
    contactid:
                                        {
      type: new graphQLNonNull(graphQLString),
      description:"Id of the Person"
    }
  },resolve: (root,args)=>
  {
      Contacts.findByIdAndRemove({_id:args.contactid},function(err,data)
      {
      if(err) reject(err);
      else console.log("deleted");
      })
  }
}
var Mutationtype=new graphQLObjectType(
  {
    name:'Mutation',
    fields:
    {
      addContact:MutationAddContacts,
      updateContact:MutationUpdateContacts,
      deleteContact:MutationDeleteContacts
    }
  });

module.exports=new graphQLSchema({
    query:Querytype,
    mutation:Mutationtype
  })
