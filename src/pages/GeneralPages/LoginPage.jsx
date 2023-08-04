import { Container, LogoContent } from '@/utils';
import { AuthForm } from '@/components/Auth';
import { CreateModal } from '../../components/Modal';
import { useState } from 'react';
import { EnterEmailModal } from '../../components/Modal/EnterEmailModal';
import { RecievedEmail } from '../../components/Modal/RecievedEmail';

const LoginPage = () => {
  const [showModalRecieved, setShowModalRecieved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onClose = () => setShowModal(false);
  const onOpen = () => setShowModal(true);
  const onCloseRecieved = () => setShowModalRecieved(false);
  const onOpenRecieved = () => setShowModalRecieved(true);
  return (
    <Container>
      <LogoContent widthLogo="80" heightLogo="80" title="LogIn to Talk" />
      <AuthForm from="loginPage" onOpen={onOpen} />
      {showModal && <CreateModal onClose={onClose}>
        <EnterEmailModal onClose={onClose} onOpenRecieved={onOpenRecieved} />
      </CreateModal >}
      {showModalRecieved && <CreateModal onClose={onCloseRecieved}>
        <RecievedEmail onClose={onCloseRecieved} />
      </CreateModal >}
    </Container>
  );
};

export default LoginPage;
