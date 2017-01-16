function getHTML (requestOptions, callback) {

 const http = require('https');

 var data = ''

 http.get(requestOptions, function(response) {


  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  //
  response.on('data', (chunk) => {
    data += chunk;
  });

  //
  response.on('end', () => callback(data));

 });

}

getHTML({
   host: 'sytantris.github.io',
   path: '/http-examples/step3.html'
 }, (data) => {
    console.log('All data received: \n' + data);

    console.log('Stream ends');
  });