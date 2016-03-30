// IMPORTS:
// --------------------------------------------------------------------------------

var React = require('react');
var ReactDOM = require('react-dom');
var TweetBox = require('./tweet-box.jsx');

// ENTRY POINT:
// --------------------------------------------------------------------------------

ReactDOM.render(
	
	<TweetBox
		url={'http://localhost:3000/api/tweets'}
		count={3}
		authorId={'clevertech'}
		pollInterval={2000} />,
		
	document.getElementById('content')
);