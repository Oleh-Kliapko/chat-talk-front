import { Container, LogoContent } from '@/utils';
import { Wrapper } from './Pages.styled';

const RegisterPage = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContent widthLogo="80" heightLogo="80" title="LogIn to Talk" />
      </Wrapper>
    </Container>
  );
};

export default RegisterPage;
