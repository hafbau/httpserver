const getHTML = require('../http-functions');

function printLower(data) {
  console.log(data.toLowerCase());
}

getHTML({
   host: 'sytantris.github.io',
   path: '/http-examples/step6.html'
 }, printLower);
