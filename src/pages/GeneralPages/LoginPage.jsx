import { Container, LogoContent } from '@/utils';
import { Wrapper } from './Pages.styled';
import { LoginForm } from '../../components/Auth';

const LoginPage = () => {
  return (
    <Container>
      <Wrapper>
        <LogoContent widthLogo="80" heightLogo="80" title="LogIn to Talk" />
        <LoginForm />
      </Wrapper>
    </Container>
  );
};

export default LoginPage;
