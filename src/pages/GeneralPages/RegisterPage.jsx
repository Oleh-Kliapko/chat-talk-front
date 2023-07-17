import { Container, LogoContent } from '@/utils';
import { AuthForm } from '@/components/Auth';

const RegisterPage = () => {
  return (
    <Container>
      <LogoContent widthLogo="80" heightLogo="80" title="Sign Up to Talk" />
      <AuthForm />
    </Container>
  );
};

export default RegisterPage;
