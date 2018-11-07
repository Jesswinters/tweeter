/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  // Fake data taken from tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit. <b>test</b>"
      },
      "created_at": 1461113796368
    }
  ];

  // Escape HTML from Tweet content/text
  function escapeContent(string) {		
    const escapedText = document.createElement('span');

		escapedText.appendChild(document.createTextNode(string));
		return escapedText.innerHTML;
  }

  function renderTweets(data) {
    data.forEach((tweetData) => {
      $('#tweets-container').append(createTweetElement(tweetData));
    });
  }

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

  renderTweets(data);
});
