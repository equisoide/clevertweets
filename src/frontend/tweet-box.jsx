// IMPORTS:
// --------------------------------------------------------------------------------

var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var TweetList = require('./tweet-list.jsx');
var TweetAuthorLink = require('./tweet-author-link.jsx');

// COMPONENT:
// --------------------------------------------------------------------------------

/**
 * React Component: Main container to display the list of tweets.
 *
 * props:
 * @param {Number} pollInterval - Refreshing interval (in milliseconds).
 * @param {String} authorId - The twitter account Id. E.g: 'juancuartas'.
 *
 * @return {ReactClass}
 * @author Juan Cuartas
 */
var TweetBox = React.createClass({
    loadTweetsFromServer: function() {
        var args = 'authorId=' + this.props.authorId + "&count=" + this.props.count;
        
        $.ajax({
            url: this.props.url + '?' + args,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount: function() {
        this.loadTweetsFromServer();
        setInterval(this.loadTweetsFromServer, this.props.pollInterval);
    },
    render: function() {
        var style = {
            margin: 20,
            fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
            fontSize: 15,
            lineHeight: 1.7
        };
        return (
            <div style={style}>
                <strong>Tweets by </strong>
                <TweetAuthorLink authorId={this.props.authorId} />
                <br /><br />
                <TweetList data={this.state.data} />
            </div>
        );
    }
});

// EXPORTS:
// --------------------------------------------------------------------------------

module.exports = TweetBox;