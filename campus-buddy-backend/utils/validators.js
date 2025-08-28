function validateEmail(email) {
  const domain = '@ced.alliance.edu.in';
  if (!email.endsWith(domain)) {
    return { valid: false, message: 'Please use your Alliance University email ID.' };
  }
  return { valid: true };
}

function validatePassword(password) {
  const errors = [];

  if (password.length < 6) errors.push('Minimum length is 6 characters.');
  if (!/[A-Z]/.test(password)) errors.push('Must include at least one uppercase letter.');
  if (!/[a-z]/.test(password)) errors.push('Must include at least one lowercase letter.');
  if (!/[0-9]/.test(password)) errors.push('Must include at least one number.');
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) errors.push('Must include at least one special character.');

  if (errors.length > 0) {
    return { valid: false, message: errors.join(' ') };
  }

  return { valid: true };
}

module.exports = { validateEmail, validatePassword };
