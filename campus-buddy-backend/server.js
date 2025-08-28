const express = require('express');
const session = require('express-session');
const passport = require('passport');
require('./config/passport');

const authRoutes = require('./routes/auth');

const app = express();
app.use(express.json());

app.use(session({
  secret: 'campusbuddysecret',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoutes);

app.listen(4000, () => {
  console.log('Campus Buddy backend running on http://localhost:4000');
});
