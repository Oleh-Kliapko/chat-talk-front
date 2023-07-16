import { Container, LogoContent } from '@/utils';
import { LoginForm } from '../../components/Auth';

const RegisterPage = () => {
  return (
    <Container>
      <LogoContent widthLogo="80" heightLogo="80" title="Sign Up to Talk" />
      <LoginForm />
    </Container>
  );
};

export default RegisterPage;
