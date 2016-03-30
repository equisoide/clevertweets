// IMPORTS:
// --------------------------------------------------------------------------------

var React = require('react');
var ReactDOM = require('react-dom');
var Tweet = require('./tweet.jsx');

// COMPONENT:
// --------------------------------------------------------------------------------

/**
 * React Component: Displays a list of tweets.
 *
 * props:
 * @param {Object[
 *    authorAvatar: string,
 *    authorName: string,
 *    authorId: string,
 *    text: string,
 *    date: string]} data - The list of tweets to be displayed.
 *
 * @return {ReactClass}
 * @author Juan Cuartas
 */
var TweetList = React.createClass({
    render: function() {
        var tweets = this.props.data.map(function (tweet) {
            return (
                <Tweet
                    key={tweet.id}
                    authorAvatar={tweet.authorAvatar}
                    authorName={tweet.authorName}
                    authorId={tweet.authorId}
                    text={tweet.text}
                    date={tweet.date} />
            );
        });
        return (
            <div>
                {tweets}
            </div>
        );
    }
});

// EXPORTS:
// --------------------------------------------------------------------------------

module.exports = TweetList;