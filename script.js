// function([string1, string2],target id,[color1,color2])    
 consoleText(['Quality Assurance Services', 'Your partner in QA testing and automation services.'], 'text',['#79c31a','#79c31a']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

(function() {
    emailjs.init("stpkmqg3cLxYptABY");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID'
    emailjs.sendForm('service_q5x4paa', 'template_kdw0hok', this)
        .then(function() {
            alert('Your message has been sent successfully!');
        }, function(error) {
            alert('Failed to send your message, please try again later.');
        });
});