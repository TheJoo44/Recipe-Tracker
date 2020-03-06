const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');

// Configure passport
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
    // profile parameter references the users google profile as an object
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in with OAuth
    User.findOne({'googleId': profile.id}, function(err, user) {
      console.log('Profile: ', profile)
      console.log('ProfileId', profile.id)
      if (err) return cb(err);
      if (user) {
        // returning user
        if (!user.avatar) {
          user.avatar = profile.photos[0].value;
          user.save(function(err) {
            return cb(null, user);
          });
        } else {
          return cb(null, user);
        }
      } else {
        // we have a new user via oauth
        var newUser = new User({
          name: profile.displayName,
          firstName: profile.name.givenName,
          email: profile.emails[0].value,
          userId: profile.id,
          googleId: profile.id
        });
        newUser.save(function(err) {
          if (err) return cb(err);
          return cb(null, newUser);
        });
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  // console.log('PASSPORT.SERIALIZE')
  done(null, user.id);
}),

passport.deserializeUser(function(id, done) {
  // console.log('PASSPORT.DESERIALIZE')
  User.findById(id, function(err, user) {
    done(err, user);
  });
});