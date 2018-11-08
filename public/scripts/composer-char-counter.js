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

    // If current count of characters is longer than max length or empty, disable button
    if (tweetTextarea.length > maxLength || tweetTextarea.trim() === '') {
      submitButton
        .prop('disabled', true)
        .addClass('disabled');
    } else {
      submitButton
        .prop('disabled', false)
        .removeClass('disabled');
    }

    // If current count of characters is longer than max length or empty,
    // display related error message and change character count to red
    if (tweetTextarea.length > maxLength) {
      characterCounter.addClass('error');
      errorMessage
        .html('Tweet content is over 140 characters.')
        .addClass('visible');
    } else if (tweetTextarea.trim() === '') {
      errorMessage
        .html('Please enter a message.')
        .addClass('visible');
    } else {
      characterCounter.removeClass('error');
      errorMessage
        .html('')
        .removeClass('visible');
    }
  });
});
