var {getHTML, printHTML} = require('../http-functions');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function reverse (html) {
  var str = html.split('').reverse().join('');
  console.log(str);
}


getHTML(requestOptions, reverse);