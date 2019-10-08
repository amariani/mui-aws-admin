import * as Yup from 'yup';

const passRegexLoweLetter = /^(?=.*[a-z])/;
const passRegexUpperLetter = /^(?=.*[A-Z])/;
const passRegexNumber = /^(?=.*[0-9])/;
const passRegexSpecialChar = /^(?=.*[!@#$%^&*])/;

export default Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required field'),
  verificationcode: Yup.string()
    .min(3, 'Too short.')
    .required('Required field'),
  newpassword: Yup.string()
    .min(8, 'Not secure, at least 8 characters.')
    .matches(passRegexLoweLetter, 'Not secure, at least one lowercase letter.')
    .matches(passRegexUpperLetter, 'Not secure, at least one uppercase letter.')
    .matches(
      passRegexSpecialChar,
      'Not secure, at least one special character.'
    )
    .matches(passRegexNumber, 'Not secure, at least one number.')
    .required('Required field'),
});
