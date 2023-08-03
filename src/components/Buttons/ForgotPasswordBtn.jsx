import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ForgotPasswordWrapper } from './Button.styled';

export const ForgotPasswordBtn = ({ from,onOpen }) => {
  return (
    <>
      {from === 'loginPage' && (
        <ForgotPasswordWrapper>
          <button onClick={onOpen}>Forgot password?</button>
        </ForgotPasswordWrapper>
      )}
    </>
  );
};

ForgotPasswordBtn.propTypes = {
  from: PropTypes.string,
  onOpen:PropTypes.func
};
