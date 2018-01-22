
var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML (options) {

  var chunkBits = [];

  https.get(options, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
        chunkBits.push(data);

    });
    response.on('end', function() {
      console.log(chunkBits.join());
    });
  });
}


getAndPrintHTML(requestOptions);