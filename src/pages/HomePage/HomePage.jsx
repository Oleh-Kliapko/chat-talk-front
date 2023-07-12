import { Container } from '@/utils/Container';
import { Wrapper, LogoWrapper, Title, Slogan } from './HomePage.styled';
import { Logo } from '@/images/svg';
import { LoginBtn } from '@/components/Buttons';

const HomePage = () => {
  return (
    <Container>
      <Wrapper>
        <LogoWrapper>
          <Logo width="160" height="160" />
          <Title>Talk</Title>
          <Slogan>Connect. Chat. Discover.</Slogan>
        </LogoWrapper>
        <LoginBtn />
      </Wrapper>
    </Container>
  );
};

export default HomePage;
