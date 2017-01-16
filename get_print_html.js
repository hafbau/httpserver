function getAndPrintHTML () {

 const http = require('https');

 var requestOptions = {
   host: 'sytantris.github.io',
   path: '/http-examples/step2.html'
 };

 var data = ''

 http.get(requestOptions, function(response) {


  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  //
  response.on('data', (chunk) => {
    data += chunk;
  });

  //
  response.on('end', () => {
    console.log('All data received: \n' + data);

    console.log('Stream ends');
  });

 });

}

getAndPrintHTML();

// What kind(s) of variable could you buffer your data with?
// Is there a preferable type? new Buffer
// If so, what makes it preferable? cos it could store all resource types from the stream
