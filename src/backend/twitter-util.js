// IMPORTS:
// --------------------------------------------------------------------------------

var Twitter = require('twitter');
var Promise = require('bluebird');
var settings = require('./settings');

// PRIVATE:
// --------------------------------------------------------------------------------

/**
 * Client to perform the Twitter API requests.
 *
 * @private
 */
var twitterClient = new Twitter({
    consumer_key: settings.TWITTER_CONSUMER_KEY,
    consumer_secret: settings.TWITTER_CONSUMER_SECRET,
    access_token_key: '',
    access_token_secret: ''
});

// PUBLIC:
// --------------------------------------------------------------------------------

/**
 * Provides some utility functions to work with the Twitter API.
 * 
 * @namespace
 * @autor Juan Cuartas
 */
var twitterUtil = {};

/**
 * Retrieves the latest tweets from a twitter account.
 * 
 * @param {String} authorId - Author id. E.g: '@juancuartas'.
 * @param {Number} count - The number of tweets to be retrieved.
 *
 * @return {Promise}
 */
twitterUtil.getLatestTweets = function (authorId, count) {
    var params = {
        screen_name: authorId,
        count: count
    };
        
    return new Promise(function (resolve, reject) {
        twitterClient.get(settings.TWITTER_API_URI, params, function (error, tweets) {
            if (!error) {
                var data = [];
                for (var i = 0; i < tweets.length; i++) {
                    data.push({
                        authorAvatar: tweets[i].user.profile_image_url,
                        authorName: tweets[i].user.name,
                        authorId: tweets[i].user.screen_name,
                        text: tweets[i].text,
                        date: tweets[i].created_at.substring(0, 16)
                    });
                }
                resolve(data);
            } else {
                reject(error);
            }
        });
    });
};

// EXPORTS:
// --------------------------------------------------------------------------------

module.exports = twitterUtil;