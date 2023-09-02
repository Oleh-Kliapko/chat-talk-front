import PropTypes from 'prop-types';

import { RedirectWrapper, RedirectTitle } from './Button.styled.js';

export const RedirectBtn = ({ from }) => {
  return (
    <RedirectWrapper>
      <div>
        {from === 'loginPage'
          ? "Don't have an account?"
          : 'You already have an account?'}{' '}
      </div>
      {from === 'loginPage' ? (
        <RedirectTitle to="/register">Sign up</RedirectTitle>
      ) : (
        <RedirectTitle to="/login">Log In</RedirectTitle>
      )}
    </RedirectWrapper>
  );
};

RedirectBtn.propTypes = {
  from: PropTypes.string,
};
