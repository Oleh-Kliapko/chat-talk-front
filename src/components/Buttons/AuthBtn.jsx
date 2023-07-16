import { themes } from '@/styles';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { BtnTemplate } from './BtnTemplate';

export const AuthBtn = ({ from }) => {
  const navigate = useNavigate();

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
      marginBottom="24px"
      onClick={() => navigate('/channels')}
    />
  );
};

AuthBtn.propTypes = {
  from: PropTypes.string,
};
