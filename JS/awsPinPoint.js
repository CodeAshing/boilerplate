
import './App.css';
import React, { useState } from "react";

function App() {

  //this is for sending message
  

    AWS.config.update({
      accessKeyId: 'AKIAYNI2EN5M2RFMNF52',
      secretAccessKey: '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',
      region: 'us-west-2'
    });

    console.log("Message = " + req.body.message);
    console.log("Number = " + req.body.number);
    console.log("Subject = " + req.body.subject);
    var params = {
        Message: req.body.message,
        PhoneNumber: '+' + req.body.number,
        MessageAttributes: {
            'AWS.SNS.SMS.SenderID': {
                'DataType': 'String',
                'StringValue': req.body.subject
            }
        }
    };   

    
    var publishTextPromise = new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
    publishTextPromise.then(
        function (data) {
            res.end(JSON.stringify({ MessageID: data.MessageId }));
        }).catch(
            function (err) {
                res.end(JSON.stringify({ Error: err }));
            });




  // this is for sending otp

    // The AWS Region that you want to use to send the message. For a list of
    // AWS Regions where the Amazon Pinpoint API is available, see
    // https://docs.aws.amazon.com/pinpoint/latest/apireference/.
    var aws_region = "us-west-2";

    // Specify that you're using a shared credentials file, and optionally specify
    // the profile that you want to use.
    var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
    AWS.config.credentials = credentials;

    // Specify the region.
    AWS.config.update({region:aws_region});

    //Create a new Pinpoint object.
    var pinpoint = new AWS.Pinpoint({apiVersion: '2016-12-01'});

    var params = {
      ApplicationId: 'b38e6c4df8064bd0bb5d8e281018eb9d', /* required */
      SendOTPMessageRequestParameters: { /* required */
        BrandName: 'Star Marketing', /* required */
        Channel: 'SMS', /* required */
        DestinationIdentity: '+923353011417', /* required */
        OriginationIdentity: '+5511', /* required */
        ReferenceId: '123456', /* required */
        // AllowedAttempts: 'NUMBER_VALUE',
        // CodeLength: 'NUMBER_VALUE',
        // EntityId: 'STRING_VALUE',
        // Language: 'STRING_VALUE',
        // TemplateId: 'STRING_VALUE',
        ValidityPeriod: 5
      }
    };

    //Try to send the message.

    pinpoint.sendOTPMessage(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });



  //this is for verifying message


    var params = {
      ApplicationId: 'b38e6c4df8064bd0bb5d8e281018eb9d', /* required */
      VerifyOTPMessageRequestParameters: { /* required */
        DestinationIdentity: '+923353011417', /* required */
        Otp: '618808', /* required */
        ReferenceId: '123456' /* required */
      }
    };
    pinpoint.verifyOTPMessage(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });


}

export default App;
