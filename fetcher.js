// Get the targetted URL address and Dest File
const outputArr = process.argv.slice(2);
const urlAddress = outputArr[0];
const destFile = outputArr[1];

const request = require('request');
request('http://www.example.com/', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});