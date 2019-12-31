'use strict';

module.exports.hello = async event => {
 
  const now = new Date();

  const message = `The time is ${now}`;

  console.log(message);

  return {
    message: message
  }
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
