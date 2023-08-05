import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Modal } from './CreateModal.styled';
const rootModal = document.querySelector('#modal');

export const CreateModal = ({ children, onClose, background }) => {
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

  const handleClose = useCallback((e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  return createPortal(
    <Backdrop onMouseDown={handleClose}>
      <Modal background={background}>
        {children}
      </Modal>
    </Backdrop>,
    rootModal
  );
};
