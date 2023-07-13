import { Container, LogoContent } from '@/utils';
import { Wrapper } from './Pages.styled';

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContent widthLogo="80" heightLogo="80" title="LogIn to Talk" />
        {/* <HomeBtn /> */}
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
