# Twitter Feed Clone

This project simulates a Twitter-like feed with functionalities to like, retweet, reply, and post tweets. The code handles dynamic data updates and rendering of tweets, likes, retweets, and replies on the page using JavaScript and a simple HTML structure.

## Features

- **Like Tweets:** Users can like/unlike a tweet, which updates the like count and toggles the UI indicator.
- **Retweet Tweets:** Users can retweet/unretweet, which changes the retweet count and toggles the UI indicator.
- **Reply to Tweets:** Users can view or hide replies to each tweet.
- **Post New Tweets:** Users can submit new tweets, which appear at the top of the feed.

## Project Structure

- **data.js:** Contains `tweetsData`, an array of tweet objects each with details such as handle, profilePic, tweetText, likes, retweets, replies, and UUID for unique identification.
- **UUID Dependency:** Uses the `uuid` library for generating unique IDs for each tweet.

## Code Breakdown

### Event Listeners

The main event listener listens for clicks on elements with specific `data-*` attributes to identify like, retweet, and reply actions. Additionally, it handles new tweet submissions when the "Tweet" button is clicked.

### Key Functions

- **handleLikeClick(likeID):** Handles like/unlike functionality and toggles the like indicator for each tweet.
- **handleRetweet(retweetID):** Handles retweet/unretweet functionality and toggles the retweet indicator.
- **handleReplies(replyID):** Shows or hides the reply section for a tweet.
- **handleTweetBtn():** Processes new tweet submissions, adding the tweet to the `tweetsData` array and re-rendering the feed.
- **getFeedHtml():** Generates the HTML structure for each tweet in the `tweetsData` array and its associated details (like count, retweet count, replies).
- **render():** Renders the generated HTML to the page, keeping the feed updated in real-time.

## How to Run

1. Clone this repository.
2. Open `index.html` in a browser.
3. Interact with the feed to test liking, retweeting, replying, and adding new tweets.

## Dependencies

- [uuid](https://jspm.dev/uuid): Used for generating unique identifiers for each tweet.

## License

This project is open-source and available for modification and distribution.
