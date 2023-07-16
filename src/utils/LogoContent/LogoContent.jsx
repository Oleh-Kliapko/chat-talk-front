import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import { LogoWrapper, Title, Slogan } from './LogoContent.styled';
import { Logo } from '@/images/svg';

export const LogoContent = ({ widthLogo, heightLogo, title, slogan, from }) => {
  const res = useParams();
  console.log('🚀 ~ res:', res);

  return (
    <LogoWrapper from={from}>
      <Logo width={widthLogo} height={heightLogo} />
      <Title from={from}>{title}</Title>
      {slogan && <Slogan>{slogan}</Slogan>}
    </LogoWrapper>
  );
};

LogoContent.propTypes = {
  widthLogo: PropTypes.string,
  heightLogo: PropTypes.string,
  title: PropTypes.string,
  slogan: PropTypes.string,
  from: PropTypes.string.isRequired,
};
