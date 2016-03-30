// IMPORTS:
// --------------------------------------------------------------------------------

var React = require('react');
var ReactDOM = require('react-dom');
var TweetAuthorLink = require('./tweet-author-link.jsx');

// COMPONENT:
// --------------------------------------------------------------------------------

/**
 * React Component: Displays author information (avatar, name, id).
 *
 * props:
 * @param {String} authorAvatar - Avatar URL. E.g: 'http://site/image.png'.
 * @param {String} authorName - Author name. E.g: 'Juan Cuartas'.
 * @param {String} authorId - Author id. E.g: '@juancuartas'.
 *
 * @return {ReactClass}
 * @author Juan Cuartas
 */
var TweetAuthor = React.createClass({
    render: function () {
        var styles= {
            image: {
                float: 'left',
                width: 32,
                height: 32,
                marginRight: 10
            },
            rightDiv: {
                lineHeight: 1
            },
            name: {
                color: '#808080',
                fontWeight: 'bold'
            }
        };
        return (
            <div>
                <img src={this.props.authorAvatar} style={styles.image} />
                <div style={styles.rightDiv}>
                    <div style={styles.name}>{this.props.authorName}</div>
                    <TweetAuthorLink authorId={this.props.authorId} />
                </div>
            </div>
        );
    }
});

// EXPORTS:
// --------------------------------------------------------------------------------

module.exports = TweetAuthor;