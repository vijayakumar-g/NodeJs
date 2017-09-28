// config/database.js
module.exports.database = {

	'url' :'mongodb://localhost:27017/admin'
};

module.exports.oAuth = {

    'facebookAuth' : {
        'clientID'      : '137947710159871',
        'clientSecret'  : '6cb0ba9a5368f9528c13c241d0fb7064',
        'callbackURL'   : '/auth/facebook/callback'
    },
    'googleAuth' : {
        'clientID'      : '1028167141946-4jl58lo7q4lrr34ets049emkkfdsripd.apps.googleusercontent.com',
        'clientSecret'  : 'TCMCukM57oKt8AVbJMdeUsQR',
        'callbackURL'   : '/auth/google/callback'
    }

};
