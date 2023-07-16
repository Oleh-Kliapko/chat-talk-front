const emailPattern =
  /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
const emailPatternErrorMessage = 'Must be valid email';
const emailLengthErrorMessage =
  'Email must be less than or equal to 64 characters';
const emailForbidden = ['mailinator.com', 'rambler.ru', 'mail.ru'];
const emailForbiddenErrorMessage = 'Invalid email provider';

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
const passwordPatternErrorMessage =
  '8-32 characters, at least one uppercase, lowercase and special character each';
const confirmPasswordErrorMessage = 'Passwords must match';

const requiredField = fieldName => `${fieldName} is required`;

export const rules = {
  emailPattern,
  emailPatternErrorMessage,
  emailLengthErrorMessage,
  emailForbidden,
  emailForbiddenErrorMessage,

  passwordPattern,
  passwordPatternErrorMessage,
  confirmPasswordErrorMessage,

  requiredField,
};
