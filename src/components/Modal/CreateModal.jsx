import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { Backdrop, Modal, CloseModal } from './CreateModal.styled';

const rootModal = document.querySelector('#modal');

export const CreateModal = ({ children, onClose, background, color }) => {
  useEffect(() => {
    const handleEscape = e => {
      if (e.code === `Escape`) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onMouseDown={handleClose}>
      <Modal background={background}>
        <CloseModal color={color} onClick={onClose} />
        {children}
      </Modal>
    </Backdrop>,
    rootModal
  );
};
