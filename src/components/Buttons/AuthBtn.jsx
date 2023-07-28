import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

import { themes } from '@/styles';
import { BtnTemplate } from './BtnTemplate';
// import { useDispatch } from 'react-redux';
// import {logIn} from "../../redux/auth/operations"
export const AuthBtn = ({ from }) => {
  // const dispatch = useDispatch();
  const { handleSubmit} = useFormikContext();

  return (
    <BtnTemplate
      text={from === 'loginPage' ? 'Log in' : 'Sign Up'}
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
