import { BtnTemplate } from './BtnTemplate';
import { themes } from '@/styles';
import { useNavigate } from 'react-router-dom';

export const HomeBtn = () => {
  const navigate = useNavigate();

  return (
    <BtnTemplate
      text="Get started"
      textSize={themes.fontSizes.m}
      color={themes.colors.white}
      width="100%"
      height={`${themes.spacing[12]}px`}
      gradient={themes.colors.mainBtnBgr}
      hoverGradient={themes.colors.accentBtnBgr}
      border={themes.border.main}
      borderRadius={themes.radii.main}
      // marginBottom="100px"
      marginTop="100px"
      onClick={() => navigate('/login')}
    />
  );
};
