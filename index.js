function showText(target, message, index, interval, delay) {   
  if (index < message.length) {
    if (message[index] == '^') {
      $(target).append('<br/>');
    } else {
      $(target).append(message[index]);
    }

    index++;
    setTimeout(function () {
      showText(target, message, index, interval, delay);
    }, (index % getRandom() == 0 ? delay : interval));
  }
}

function getRandom() {
  return (Math.floor(Math.random() * 20) + 1) + 50;
}

function readText(file) {
  $.ajax({
    url: 'ip.php',
    dataType: 'json',
    success: function(user_data) {
      $.get(file, function(file_text) {
        file_text =file_text.replace('[IP]', user_data.ip);
        showText('#body', file_text, 0, 30, 750);
      });
    },
    error: function() {
      $.get(file, function(file_text) {
        file_text =file_text.replace('[IP]', 'dear visitor');
        showText('#body', file_text, 0, 30, 750);
      });
    }
  });
}
