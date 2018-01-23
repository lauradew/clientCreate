
var https = require('https');


function getHTML (options, callback) {
  var chunkBits = '';

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      chunkBits += data;
    });

    response.on('end', function() {
      callback(chunkBits);
    });
  });
}

function printHTML (html) {
  console.log(html);
}


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

module.exports = getHTML;
module.exports = printHTML;
