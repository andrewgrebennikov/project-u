import { FC, PropsWithChildren, useCallback, useEffect } from 'react';
import styles from './Modul.module.scss';
import cx from 'classix';
import { Portal } from 'shared/ui/Portal/Portal';

interface IModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<PropsWithChildren<IModalProps>> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    },
    [handleClose],
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div className={cx(className, styles.modal, isOpen && styles.open)}>
        <div className={styles.overlay} onClick={handleClose}></div>
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
};
