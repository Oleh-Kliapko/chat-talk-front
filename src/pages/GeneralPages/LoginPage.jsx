import { Container, LogoContent } from '@/utils';
import { AuthForm } from '@/components/Auth';

const LoginPage = () => {
  return (
    <Container>
      <LogoContent widthLogo="80" heightLogo="80" title="LogIn to Talk" />
      <AuthForm from="loginPage" />
    </Container>
  );
};

export default LoginPage;
