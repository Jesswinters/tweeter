/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Escape HTML from Tweet content/text
  function escapeContent(string) {		
    const escapedText = document.createElement('span');

		escapedText.appendChild(document.createTextNode(string));
		return escapedText.innerHTML;
  }

  // Loop through tweet data to pass to create function
  function renderTweets(data) {
    data.forEach((tweetData) => {
      $('#tweets-container').prepend(createTweetElement(tweetData));
    });
  }

  // Create tweet element from data using template literals
  function createTweetElement(tweetData) {
    const tweetText = escapeContent(tweetData.content.text);

    return `<article class="tweet">
        <header>
          <img class="avatar" src="${tweetData.user.avatars.regular}" alt="User Avatar">
          <h2 class="full-name">${tweetData.user.name}</h2>
          <span class="username">${tweetData.user.handle}</span>
        </header>
        <div class="content">
          ${tweetText}
        </div>
        <footer>
          <span class="created-at">${tweetData.created_at}</span>
          <span class="tweet-actions">🚩 🎺 💚</span>
        </footer>
      </article>`;
  }

  function fetchTweets() {
    $.getJSON('/tweets')
      .done((data) => {
        renderTweets(data);
      });
  }

  $('#new-tweet-button').on('click submit', (event) => {
    event.preventDefault();
    const $form = $(this).find('#new-tweet-form');

    $.ajax({
      type: 'POST',
      url:  '/tweets',
      data: $form.serialize(),
    })
    .done(() => {
      fetchTweets();
    });
  });

  fetchTweets();

  $('[data-compose-tweet-button]').on('click', () => {
    $('[data-new-tweet-container]').slideToggle(() => {
      $('[data-new-tweet-textarea]').focus();
    });
  });
});
