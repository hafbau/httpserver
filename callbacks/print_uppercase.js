const getHTML = require('../http-functions');

function printUpper(data) {
  console.log(data.toUpperCase());
}

getHTML({
   host: 'sytantris.github.io',
   path: '/http-examples/step6.html'
 }, printUpper);
