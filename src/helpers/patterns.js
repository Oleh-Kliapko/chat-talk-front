const namePattern = /^[\p{L}\s]+$/u; // only Latin or Cyrillic characters
const namePatternErrorMessage = 'only of Latin or Cyrillic characters';
const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const emailPatternErrorMessage = 'must be valid email';
const passwordPattern = /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/; // 6 characters, at lest one upperCase and one lowercase
const passwordPatternErrorMessage =
  '6 and more characters, at least one uppercase and one lowercase';

export const patterns = {
  namePattern,
  namePatternErrorMessage,
  emailPattern,
  emailPatternErrorMessage,
  passwordPattern,
  passwordPatternErrorMessage,
};
