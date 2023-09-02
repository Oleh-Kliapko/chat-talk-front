const emailPattern =
  /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
const emailPatternErrorMessage = 'Must be valid email';
const emailLengthErrorMessage ='Email must be less than or equal to 64 characters';
const emailForbidden = ['mailinator.com', 'rambler.ru', 'mail.ru'];
const emailForbiddenErrorMessage = 'Invalid email provider';

const namePattern = /^[\p{L}\s]+$/u; // only Latin or Cyrillic characters
const namePatternErrorMessage = 'only of Latin or Cyrillic characters';

const passwordPattern = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,32}/g
  // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
const passwordPatternErrorMessage =
  '6-32 characters, at least one uppercase, lowercase and special character each';
const confirmPasswordErrorMessage = 'The password you entered does not match';

const requiredField = fieldName => `${fieldName} is required`;

export const rules = {
  namePattern,
  namePatternErrorMessage,
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
