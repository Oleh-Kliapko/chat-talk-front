import { Container, LogoContent } from '@/utils';
import { AuthForm } from '@/components/Auth';
import { CreateModal } from '../../components/Modal';
import { useCallback, useState } from 'react';
import { EnterEmailModal } from '../../components/Modal/EnterEmailModal';
import { RecievedEmail } from '../../components/Modal/RecievedEmail';

const LoginPage = () => {
  const [showModalRecieved, setShowModalRecieved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const onClose = useCallback(() => setShowModal(false), []);
  const onOpen = useCallback(() => setShowModal(true), []);
  const onCloseRecieved = useCallback(() => setShowModalRecieved(false), []);
  const onOpenRecieved = useCallback(() => setShowModalRecieved(true), []);
  return (
    <Container>
      <LogoContent widthLogo="80" heightLogo="80" title="Login to Talk" />
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
