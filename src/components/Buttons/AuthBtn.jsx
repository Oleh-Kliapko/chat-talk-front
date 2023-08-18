import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { themes } from '@/styles';
import { BtnTemplate } from './BtnTemplate';
import { useCallback } from 'react';

export const AuthBtn = ({ from }) => {
  const { handleSubmit} = useFormikContext();
  const changeTitle = useCallback(() => {
    if (from === 'loginPage') {
      return 'Log in'
    } else if (from === 'recovey-password') {
      return "Log In with new password"
    } else if (from === 'emailModal') {
      return "Continue"
    } else if (from === 'change-password') {
      return "Change password"
    } else {
      return 'Sign Up'
    }
  }, [from]);

  return (
    <BtnTemplate
    text={changeTitle()}
      textSize={themes.fontSizes.m}
      color={themes.colors.white}
      width="100%"
      height={`${themes.spacing[12]}px`}
      gradient={themes.colors.mainBtnBgr}
      hoverGradient={themes.colors.accentBtnBgr}
      border={themes.border.main}
      borderRadius={themes.radii.main}
      marginBottom={`${themes.spacing[6]}px`}
      marginTop={from==="emailModal"?"84px":`${themes.spacing[8]}px`}
      type="button"
      onClick={handleSubmit}
    />
  );
};

AuthBtn.propTypes = {
  from: PropTypes.string,
};
