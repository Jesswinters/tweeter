// Update character counter on keyup
// Variables with $ denote jQuery object

$(document).ready(function() {
  $('#new-tweet-form').on('keyup', () => {
    const maxLength = 140;
    const $currentLength = $(this).find('.new-tweet-textarea').val().length;
    const $characterCounter = $(this).find('.counter');
    let newCount = maxLength - $currentLength;

    $characterCounter.html(newCount);

    if ($currentLength > maxLength) {
      $characterCounter.addClass('error');
    } else {
      $characterCounter.removeClass('error');
    }
  });
});
