// passwordPolicy.js
const passwordPolicy = {
    minLength: 8,
    complexityRegex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-_@$!%*?&])[A-Za-z\d-@$!%*?&]+$/,
    commonPasswords: ['password', '123456', 'qwerty', 'letmein'],
    repeatingRegex: /(.)\2+/,
  };
  
  const isPasswordSecure = (password) => {
    // Minimum length check
    if (password.length < passwordPolicy.minLength) {
      return 'Password must be at least 8 characters long.';
    }
  
    // Complexity requirements
    if (!passwordPolicy.complexityRegex.test(password)) {
      return 'Password must include uppercase, lowercase, number, and special character.';
    }
  
    // No common or easily guessable passwords
    if (passwordPolicy.commonPasswords.includes(password.toLowerCase())) {
      return 'Password is too common or easily guessable.';
    }
  
    // No repeating characters or sequences
    if (passwordPolicy.repeatingRegex.test(password)) {
      return 'Password cannot contain repeating characters or sequences.';
    }
  
    // Password meets all criteria
    return null;
  };
  
  export { passwordPolicy, isPasswordSecure };
  