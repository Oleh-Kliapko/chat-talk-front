import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ForgotPasswordWrapper } from './Button.styled';

export const ForgotPasswordBtn = ({ from }) => {
  return (
    <>
      {from === 'loginPage' && (
        <ForgotPasswordWrapper>
          <Link to="/register">Forgot password?</Link>
        </ForgotPasswordWrapper>
      )}
    </>
  );
};

ForgotPasswordBtn.propTypes = {
  from: PropTypes.string,
};
