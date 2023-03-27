import { FC } from 'react';
import cx from 'classix';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useModal } from 'shared/hooks/useModal';

interface INavbarProps {
  className?: string;
}

export const Navbar: FC<INavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('common');
  const { isOpenModal, handleModalToggle } = useModal();

  return (
    <>
      <nav className={cx(styles.navbar, className)}>
        <Button variant="text" onClick={handleModalToggle}>
          {t('Войти')}
        </Button>
      </nav>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isOpenModal} onClose={handleModalToggle}>
        Модальное окно
      </Modal>
    </>
  );
};
