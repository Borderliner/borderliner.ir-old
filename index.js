function showText(target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}

function readText(file) {
  $.get(file, function(data) {
    showText('#body', data, 0, 500);
  });
}
