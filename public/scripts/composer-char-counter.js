// Update character counter on input:
// Occurs when the text content of an element is changed through the user interface

$(document).ready(function() {
  $('#new-tweet-form').on('input', (event) => {
    const target = $(event.currentTarget);
    const currentLength = target.find('.new-tweet-textarea').val().length;
    const characterCounter = target.find('.counter');
    const maxLength = 140;
    let newCount = maxLength - currentLength;

    characterCounter.html(newCount);

    if (currentLength > maxLength) {
      characterCounter.addClass('error');
    } else {
      characterCounter.removeClass('error');
    }
  });
});
