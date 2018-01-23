var {getHTML, printHTML} = require('../http-functions');
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {
  console.log(html.toUpperCase());
}


getHTML(requestOptions, printUpperCase);


// getHTML(
//   requestOptions,
//   printUpperCase
//   // html => console.log('my html:', html.slice(0,100).toUpperCase())
// );


  // getHTML(
  //   requestOptions,
    // console.log.bind(null, 'prefix:')
    //printUpperCase
    // html => console.log('my html:', html.slice(0,100).toUpperCase())
  // )
