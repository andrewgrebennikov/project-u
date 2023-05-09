import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormLazy } from '../LoginForm/LoginFormLazy';
import { Suspense } from 'react';

interface ILoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: ILoginModalProps) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={className} lazy>
      <Suspense fallback={'Загрузка'}>
        <LoginFormLazy />
      </Suspense>
    </Modal>
  );
};
