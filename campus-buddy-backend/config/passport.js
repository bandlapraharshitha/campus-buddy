const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: '557622434609-3poo5ik8acmlj0u59hi31v2ugvuukfaa.apps.googleusercontent.com',
  clientSecret: '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',
  callbackURL: 'https://campus-buddy-backend.onrender.com/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  const email = profile.emails[0].value;
  if (!email.endsWith('@ced.alliance.edu.in')) {
    return done(null, false, { message: 'Not an Alliance University email.' });
  }
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});
