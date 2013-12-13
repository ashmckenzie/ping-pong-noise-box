var buttons;

$(document).ready(function() {

  buttons = $('.sounds a.btn');

  buttons.each(function(index, element) {
    hotkey = index + 1;
    hotkey_content = $('<span>').addClass('hotkey').html(hotkey);
    content = $('<span>').html('Play ' + hotkey_content[0].outerHTML);
    $(element).html(content[0].outerHTML);
    Mousetrap.bind(String(hotkey), function() { $(element).click(); });
  });

  buttons.on('click', function() {
    sound = $(this).data('sound');

    var player = new buzz.sound("/sounds/" + sound, {
        formats: [ "wav", "ogg", "mp3", "aac" ]
    });

    player.play().fadeIn();
  });

});
