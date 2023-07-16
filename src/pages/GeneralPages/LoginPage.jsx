import { Container, LogoContent } from '@/utils';
import { LoginForm } from '../../components/Auth';

const LoginPage = () => {
  return (
    <Container>
      <LogoContent widthLogo="80" heightLogo="80" title="LogIn to Talk" />
      <LoginForm from="loginPage" />
    </Container>
  );
};

export default LoginPage;
