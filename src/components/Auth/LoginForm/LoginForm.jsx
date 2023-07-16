import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { Wrapper } from './LoginForm.styled';

import { AuthBtn, RedirectBtn, ForgotPasswordBtn } from '@/components/Buttons';

export const LoginForm = ({ from }) => {
  return (
    <Wrapper>
      <ForgotPasswordBtn from={from} />
      <AuthBtn from={from} />
      <RedirectBtn from={from} />
    </Wrapper>
  );
};

LoginForm.propTypes = {
  from: PropTypes.string,
};
