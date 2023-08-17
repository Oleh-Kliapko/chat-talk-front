import * as Yup from 'yup';
import { rules } from './rules';

const signUpSchema = Yup.object().shape({
 username: Yup.string()
    .required(rules.requiredField('username'))
    .matches(rules.namePattern, rules.namePatternErrorMessage),

  email: Yup.string()
    .required(rules.requiredField('Email'))
    .matches(rules.emailPattern, rules.emailPatternErrorMessage)
    .test('excluded-domains', 'Invalid email domain', (value) => {
      const excludedDomains = /@(rambler\.ru|mailinator\.com|mail\.ru)$/i;
      return !excludedDomains.test(value);
    })
    .max(64, rules.emailLengthErrorMessage),

  password: Yup.string()
    .required(rules.requiredField('Password'))
    .matches(rules.passwordPattern, rules.passwordPatternErrorMessage),

  confirmPassword: Yup.string()
    .required(rules.requiredField('Confirm password'))
    .oneOf([Yup.ref('password'), null], rules.confirmPasswordErrorMessage),
});

const emailSchema = Yup.object().shape({
  email: Yup.string()
    .required(rules.requiredField('Email'))
    .matches(rules.emailPattern, rules.emailPatternErrorMessage)
    .test('excluded-domains', 'Invalid email domain', (value) => {
      const excludedDomains = /@(rambler\.ru|mailinator\.com|mail\.ru)$/i;
      return !excludedDomains.test(value);
    })
    .max(64, rules.emailLengthErrorMessage),
})

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .required(rules.requiredField('Email'))
    .matches(rules.emailPattern, rules.emailPatternErrorMessage)
    .test('excluded-domains', 'Invalid email domain', (value) => {
      const excludedDomains = /@(rambler\.ru|mailinator\.com|mail\.ru)$/i;
      return !excludedDomains.test(value);
    })
    .max(64, rules.emailLengthErrorMessage),

  password: Yup.string()
    // .required(rules.requiredField('Password'))
    // .matches(rules.passwordPattern, rules.passwordPatternErrorMessage),
});

const recoveryPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .required(rules.requiredField('Password'))
    .matches(rules.passwordPattern, rules.passwordPatternErrorMessage),

  confirmPassword: Yup.string()
    .required(rules.requiredField('Confirm password'))
    .oneOf([Yup.ref('password'), null], rules.confirmPasswordErrorMessage),
});

export const validations = { signUpSchema, loginSchema, recoveryPasswordSchema,emailSchema };
