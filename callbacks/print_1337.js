const getHTML = require('../http-functions');

function printLeetSpeak(data) {

  const subs = {
                  a : '4', e : '3', l : '1', o : '0', s : '5',
                  t : '7', 'ck' : 'x', 'er' : '0r', 'you' : 'j00'
                }

  var leetspk = '';

  leetspk = data.replace(/a/g, '4');
  leetspk = leetspk.replace(/er/g, '0r')
                    .replace(/l/g, '1')
                    .replace(/o/g, '0')
                    .replace(/s/g, '5')
                    .replace(/t/g, '7')
                    .replace(/ck/g, 'x')
                    .replace(/e/g, '3')
                    .replace(/you/g, 'j00');

  console.log(leetspk);
}

getHTML({
   host: 'sytantris.github.io',
   path: '/http-examples/step6/1337.html'
 }, printLeetSpeak);