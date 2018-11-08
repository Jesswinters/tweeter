// Update character counter on input:
// Occurs when the text content of an element is changed through the user interface

$(document).ready(function() {
  $('#new-tweet-form').on('input keyup', (event) => {
    const target = $(event.currentTarget);
    const tweetTextarea = target.find('.new-tweet-textarea').val();
    const submitButton = target.find('#new-tweet-button');
    const characterCounter = target.find('.counter');
    const errorMessage = target.find('.error-message');

    let maxLength = 140;
    let newCount = maxLength - tweetTextarea.length;
    characterCounter.html(newCount);

    // If current count of characters is longer than max length,
    // display error message and change counter to red
    if (tweetTextarea.length > maxLength) {
      errorMessage
        .html('Tweet content is over 140 characters.')
        .addClass('visible');
      characterCounter.addClass('error');
    } else {
      errorMessage
        .html('')
        .removeClass('visible');
      characterCounter.removeClass('error');
    }

    // If current count of characters is longer than max length or empty,
    // disable button and display error message
    if (tweetTextarea.length > maxLength || tweetTextarea.trim() === '') {
      submitButton
        .prop('disabled', true)
        .addClass('disabled');
      errorMessage
        .html('Please enter a message.')
        .addClass('visible');
    } else {
      submitButton
        .prop('disabled', false)
        .removeClass('disabled');
      errorMessage
        .html('')
        .removeClass('visible');
    }
  });
});
