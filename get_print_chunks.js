function getAndPrintHTMLChunks () {

 const http = require('https');

 var requestOptions = {
   host: 'sytantris.github.io',
   path: '/http-examples/step1.html'
 };

 var data = ''

 http.get(requestOptions, function(response) {


  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  //
  response.on('data', (chunk) => {
    console.log(chunk);

    data += chunk + '\n';
  });

  //
  response.on('end', () => {
    console.log('All data received: \n' + data);

    console.log('Stream ends');
  });

 });

}

getAndPrintHTMLChunks();
