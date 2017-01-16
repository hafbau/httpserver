const getHTML = require('../http-functions');

function printReverse(data) {
  let reversed = ''
  for (var i = data.length - 1; i >= 0; i--) {
    reversed += data[i];
  }
  console.log(reversed);
}

getHTML({
   host: 'sytantris.github.io',
   path: '/http-examples/step6.html'
 }, printReverse);
