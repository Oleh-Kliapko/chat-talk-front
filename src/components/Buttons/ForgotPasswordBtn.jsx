import PropTypes from 'prop-types';


import { ForgotPasswordWrapper } from './Button.styled';

export const ForgotPasswordBtn = ({ from,onOpen }) => {
  return (
    <>
      {from === 'loginPage' && (
        <ForgotPasswordWrapper>
          <p onClick={onOpen}>Forgot password?</p>
        </ForgotPasswordWrapper>
      )}
    </>
  );
};

ForgotPasswordBtn.propTypes = {
  from: PropTypes.string,
  onOpen:PropTypes.func
};
