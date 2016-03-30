// IMPORTS:
// --------------------------------------------------------------------------------

var React = require('react');
var ReactDOM = require('react-dom');

// COMPONENT:
// --------------------------------------------------------------------------------

/**
 * React Component: Link to the user account.
 *
 * props:
 * @param {String} authorId - The twitter account Id. E.g: 'juancuartas'.
 *
 * @return {ReactClass}
 * @author Juan Cuartas
 */
var TweetAuthorLink = React.createClass({
    render: function () {
        var href = 'https://twitter.com/' + this.props.authorId;
        var title = '@' + this.props.authorId + ' on Twitter';
        
        var styles = {
            link: {
                color: '#F7501D',
                fontSize: 12,
                textDecoration: 'none'
            }
        };
        
        return (
            <a href={href} title={title} style={styles.link}>
                @{this.props.authorId}
            </a>
        );
    }
});

// EXPORTS:
// --------------------------------------------------------------------------------

module.exports = TweetAuthorLink;