const express = require('express');
const router = express.Router();
const { validateEmail, validatePassword } = require('../utils/validators');
const passport = require('passport');

// Signup
router.post('/signup', (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;

  const emailCheck = validateEmail(email);
  if (!emailCheck.valid) return res.status(400).json({ error: emailCheck.message });

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  const passwordCheck = validatePassword(password);
  if (!passwordCheck.valid) return res.status(400).json({ error: passwordCheck.message });

  res.status(200).json({ message: 'Signup successful (mock)' });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const emailCheck = validateEmail(email);
  if (!emailCheck.valid) return res.status(400).json({ error: emailCheck.message });

  const passwordCheck = validatePassword(password);
  if (!passwordCheck.valid) return res.status(400).json({ error: passwordCheck.message });

  res.status(200).json({ message: 'Login successful (mock)' });
});

// Google OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  (req, res) => {
    res.json({ message: 'Google login successful', user: req.user });
  }
);

router.get('/google/failure', (req, res) => {
  res.status(401).json({ error: 'Google login failed. Use your Alliance University email.' });
});

module.exports = router;
