function showText(target, message, index, interval, waitTime) {   
  if (index < message.length) {
    if (message[index] == '^'){
      $(target).append('<br/>');
    } else {
      $(target).append(message[index]);
    }
    
    index++;
    setTimeout(function () {
      showText(target, message, index, interval, waitTime);
    }, (index % getRandom() == 0 ? waitTime : interval));
  }
}

function getRandom() {
  return (Math.floor(Math.random() * 20) + 1) + 50;
}

function readText(file) {
  $.get(file, function(data) {
    showText('#body', data, 0, 30, 750);
  });
}
