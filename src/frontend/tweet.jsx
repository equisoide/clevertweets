// IMPORTS:
// --------------------------------------------------------------------------------

var React = require('react');
var ReactDOM = require('react-dom');
var TweetAuthor = require('./tweet-author.jsx');

// COMPONENT:
// --------------------------------------------------------------------------------

/**
 * React Component: Displays a single tweet.
 *
 * props:
 * @param {String} key - The tweet unique identifier.
 * @param {String} authorAvatar - Avatar URL. E.g: 'http://site/image.png'.
 * @param {String} authorName - Author name. E.g: 'Juan Cuartas'.
 * @param {String} authorId - Author id. E.g: '@juancuartas'.
 * @param {String} text - The text of the tweet. E.g: 'This is a tweet!'.
 * @param {String} date - The date of the tweet. E.g: '30 Mar'.
 *
 * @return {ReactClass}
 * @author Juan Cuartas
 */
var Tweet = React.createClass({
    render: function () {
        var styles = {
            tweet: {
                clear: 'left'
            },
            date: {
                fontSize: 12,
                color: '#808080',
                textAlign: 'right'
            },
            hr: {
                marginTop: 0,
                marginBottom: 20 
            }
        };
        return (
            <div key={this.props.key}>
                <TweetAuthor
                    authorAvatar={this.props.authorAvatar}
                    authorName={this.props.authorName}
                    authorId={this.props.authorId} />
                <div style={styles.tweet}>
                    {this.props.text}
                </div>
                <div style={styles.date}>
                    {this.props.date}
                </div>
                <hr style={styles.hr} />
            </div>
        );
    }
});

// EXPORTS:
// --------------------------------------------------------------------------------

module.exports = Tweet;