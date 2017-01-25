/* Imports */
var AWS = require('aws-sdk');

exports.handler = function(event, context){
  var ses = new AWS.SES({apiVersion:'2010-12-01'});

  var params = {
    EmailAddress:event.email
  };
  ses.verifyEmailIdentity(params,function(err,data){
    if(err){
      context.fail(err);
    }
    else{
      context.succeed({result:true});
    }
  });
}