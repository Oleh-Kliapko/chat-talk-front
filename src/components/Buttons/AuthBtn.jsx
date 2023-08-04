import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';
import { themes } from '@/styles';
import { BtnTemplate } from './BtnTemplate';

export const AuthBtn = ({ from }) => {
  const { handleSubmit} = useFormikContext();

  const changeTitle = () => {
    if (from === 'loginPage') {
      return 'Log in'
    } else if (from === 'recovey-password') {
      return " Log In with new password"
    } else {
      return 'Sign Up'
    }
  }
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
      marginTop={`${themes.spacing[8]}px`}
      type="button"
      onClick={handleSubmit}
    />
  );
};

AuthBtn.propTypes = {
  from: PropTypes.string,
};
