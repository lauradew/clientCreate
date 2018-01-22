
var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var chunkBits = [];

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
        chunkBits.push(data);

    });
    response.on('end', function() {
      console.log(chunkBits.join());
    });
  });

}

getAndPrintHTMLChunks();