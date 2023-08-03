import { Container, LogoContent } from '@/utils';
import { AuthForm } from '@/components/Auth';
      import { CreateModal } from '../../components/Modal';
import { SingingUpModal } from '../../components/Modal/SingingUpModal';
import { useState } from 'react';
const RegisterPage = () => {
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false);
  const onOpen = () => setShowModal(true);
  return (
    <Container>
      <LogoContent widthLogo="80" heightLogo="80" title="Sign Up to Talk" />
      <AuthForm onOpen={onOpen} />
     {showModal && <CreateModal onClose={onClose}>
        <SingingUpModal onClose={onClose} />
      </CreateModal >}
    </Container>
  );
};

export default RegisterPage;
